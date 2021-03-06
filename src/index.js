class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (function(a,b){return a - b;});
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
     return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let sortedArray = [];
    indices.sort();
      
    for(let i = 0; i < indices.length; i++){
        sortedArray[i] = this.array[indices[i]];
    }
    
    sortedArray.sort(this.compareFunction)
    
    for(let i = 0; i < indices.length; i++){
        this.array[indices[i]] = sortedArray[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
