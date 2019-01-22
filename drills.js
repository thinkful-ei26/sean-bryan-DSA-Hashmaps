const HashMap = require('./scratch')
const h = new HashMap()

class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    } else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  find(item) {
    let currNode = this.head
    if (!this.head) {
      return null
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
      }
    }
    return currNode
  }

  remove(item) {
    if (!this.head) {
      return null
    }
    if (this.head.value === item) {
      this.head = this.head.next
      return
    }
    let currNode = this.head
    let previousNode = this.head

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not found')
      return
    }
    previousNode.next = currNode.next
  }
  insertBefore(item, given) {
    let currNode = this.head
    let prevNode = this.head
    if (!this.head) {
      return null
    }

    while (currNode.value !== given) {
      prevNode = currNode
      currNode = currNode.next
    }
    if (currNode.value === given) {
      let newNode = new _Node(item, prevNode.next)
      prevNode.next = newNode
    }
  }

  insertAfter(item, given) {
    let oldNode = this.head
    let currNode = this.head

    if (!this.head) {
      return null
    }
    while (currNode.value !== given) {
      oldNode = currNode
      currNode = currNode.next
    }
    if (currNode.value === given) {
      let newNode = new _Node(item, currNode.next)
      currNode.next = newNode
    }
  }

  insertAt(item, position) {
    let counter = 1
    let oldNode = this.head
    let currNode = this.head
    if (!this.head) {
      return null
    }
    while (counter < position) {
      oldNode = currNode
      currNode = currNode.next
      counter++
    }
    if (counter === position) {
      let newNode = new _Node(item, oldNode.next)
      oldNode.next = newNode
    }
  }
}

const ll = new LinkedList()

// Create a Hash map called lor and add the following items to it.
//  {Hobbit:"Bilbo"}, {Hobbit:"Frodo"}, {Wizard:"Gandolf"}, {Human:"Aragon"}, {Elf: "Legolas"}, {Maiar:"The Necromancer"}, {Maiar: "Sauron"}, {RingBearer: "Gollum"},
//   {LadyOfLight: "Galadriel"}, {HalfElven: "Arwen"}, {Ent: "Treebeard"}
// Retrieve the value that is hashed in the key Maiar

// h.set('Hobbit', 'Bilbo')
// h.set('Hobbit', 'Frodo')
// h.set('Wizard', 'Gandalf')
// h.set('Human', 'Aragorn')
// h.set('Elf', 'Legolas')
// h.set('Maiar', 'The Necromancer')
// h.set('Maiar', 'Suaron')
// h.set('RingBearer', 'Gollum')
// h.set('LadyOfLight', 'Galadriel')
// h.set('HalfElven', 'Arwen')
// h.set('Ent', 'Treebeard')
// console.log('----', h.get('Hobbit'))

// Any permutation a palindrome
// Write an algorithm to check whether any permutation of a string is a palindrome. Given the
// string "acecarr", the algorithm should return true, because the letters in "acecarr"
// can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north",
// the algorithm should return false, because there's no way to rearrange those letters
// to be a palindrome.

// Input: 'acecarr'
// Output: true
// Pseudocode: If n is a character, if n % 2 = 0 && n.length === 1
// Key (letter) : Value(count)
// For every letter, check to see if in hash table. If so, get the value and set with letter
// and value + 1. Otherwise, set with letter as key and value as 1.

// const isPalindrome = string => {
//   string = string.replace(/([^A-z])/g, '').toLowerCase()
//   let oddCharacterCount = 0
//   for (let i = 0; i < string.length; i++) {
//     if (h.get(string[i])) {
//       h.set(string[i], h.get(string[i]) + 1)
//       if (h.get(string[i]) % 2 === 1) {
//         oddCharacterCount++
//       } else oddCharacterCount--
//     } else {
//       h.set(string[i], 1)
//       ++oddCharacterCount
//     }
//   }
//   return oddCharacterCount === 1 || oddCharacterCount === 0
// }

// console.log(
//   isPalindrome(
//     '"Stop!" nine myriad murmur. "Put up rum, rum, dairymen, in pots."'
//   )
// )

// Anagram grouping
// Write an algorithm to group a list of words into anagrams. For example, if the input was
// ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
// the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].
// const obj1 = { L: 2, O: 1 }
// const obj2 = { O: 1, L: 2 }
// const obj3 = { L: 2, O: 1 }

// function objectsAreEqual(a, b) {
//   for (let prop in a) {
//     if (a.hasOwnProperty(prop)) {
//       if (b.hasOwnProperty(prop)) {
//         if (typeof a[prop] === 'object') {
//           if (!objectsAreEqual(a[prop], b[prop])) return false
//         } else {
//           if (a[prop] !== b[prop]) return false
//         }
//       } else {
//         return false
//       }
//     }
//   }
//   return true
// }

// const deepEquals = (obj1, obj2) => {
//   if (obj1 === obj2) return true
//   let isEqual = false
//   Object.keys(obj1).forEach(key => {
//     isEqual = deepEquals(obj1[key], obj2[key])
//   })
//   return isEqual
// }

// const anagramGrouping = stringArr => {
//   let outArray = []
//   let hashArray = []
//   for (let i = 0; i < stringArr.length; i++) {
//     const hm = new HashMap()
//     for (let j = 0; j < stringArr[i].length; j++) {
//       let value = hm.get(stringArr[i][j]) + 1
//       hm.set(stringArr[i][j], value)
//     }
//     let matched = false
//     hashArray.forEach((hashMap, index) => {
//       if (!matched && objectsAreEqual(hm, hashMap)) {
//         outArray[index].push(stringArr[i])
//         matched = true
//       }
//     })
//     if (!matched) {
//       hashArray.push(hm)
//       outArray.push([stringArr[i]])
//     }
//   }
//   return outArray
// }
// console.log(
//   anagramGrouping(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'])
// )

// Input:  ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
// Output: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
// Pseudocode: Take in array as input, iterate through each element and store string. For each string,
// iterate through and create hash map. Compare hash map of each string to each element in parent array
// if equal, push to new array
// return new array containing all new arrays

// Separate Chaining
// Write a hash map implementation like the one you have done above using separate chaining as collision resolution mechanism.
// Test your hash map with the same value from before.

class sepChainHashMap {
  constructor(initialCapacity = 8) {
    this.length = 0
    this._slots = []
    this._capacity = initialCapacity
    this._deleted = 0
  }
  get(key) {
    const index = this._findSlot(key)
    if (this._slots[index] === undefined) {
      return null
    }
    return this._slots[index].value
  }

  set(key, value) {
    const loadRatio = (this.length + 1) / this._capacity
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO)
    }
    let index = this._findSlot(key)
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
    // const hash = HashMap._hashString(key)
    // const index = hash % this._capacity
    // let next;
    // if (this._slots[index] === undefined) next = null;
    // else next = this._slots[index];
    // const node = new _Node(key, next);
    // this._slots[index] = node
    // return index;
    const hash = HashMap._hashString(key)
    return hash % this._capacity
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

sepChainHashMap.MAX_LOAD_RATIO = 0.9
sepChainHashMap.SIZE_RATIO = 3
