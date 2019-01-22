class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0
    this._slots = []
    this._capacity = initialCapacity
    this._deleted = 0
  }

  get(key) {
    const index = this._findSlot(key)
    if (this._slots[index] === undefined) {
      // throw new Error('Key error')
      return null
    }
    return this._slots[index].value
  }

  set(key, value) {
    // if index is already filled, check the next one
    const loadRatio = (this.length + 1) / this._capacity
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO)
    }
    let index = this._findSlot(key)
    // while (this._slots[index]) {
    //   index === this._capacity
    //     ? index = 0
    //     : index++
    // }
    this._slots[index] = {
      key,
      value,
      deleted: false,
    }
    this.length++
  }

  remove(key) {
    const index = this._findSlot(key)
    const slot = this._slots[index]
    if (slot === undefined) {
      throw new Error('Key error')
    }
    slot.deleted = true
    this.length--
    this._deleted++
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key)
    const start = hash % this._capacity
    const index = i % this._capacity
    const slot = this._slots[index]
    if (slot === undefined || (slot.key == key && !slot.deleted)) {
      return index
    }
  }

  _resize(size) {
    const oldSlots = this._slots
    this._capacity = size
    this.length = 0
    this._deleted = 0
    this._slots = []

    for (const slot of oldSlots) {
      if (slot !== undefined) {
        this.set(slot.key, slot.value)
      }
    }
  }

  static _hashString(string) {
    let hash = 5381
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i)
      hash = hash & hash
    }
    return hash >>> 0
  }
}

HashMap.MAX_LOAD_RATIO = 0.9
HashMap.SIZE_RATIO = 3 // When we're resizing it, multiply size of array by 3?

module.exports = HashMap
