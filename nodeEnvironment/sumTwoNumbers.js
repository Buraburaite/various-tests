var TwoSum = function() {
    this.values = [];
};

TwoSum.prototype.add = function(number) {
    this.values.push(number);
};

TwoSum.prototype.find = function(target) {
    var values = this.values;
    var stoppingPoint = values.length;
    console.log(values);
    values.sort(function(a,b) { return a - b });
    console.log(values);
    var sum;
    for (var i = 0; i < stoppingPoint; i++) {
        for (var j = i + 1; j < stoppingPoint; j++) {
            sum = values[i] + values[j];
            if      (sum < target) { continue; }
            else if (sum > target) { stoppingPoint = j; break; }
            return true;
        }
    }
    return false;
};

var twoSum = new TwoSum();
twoSum.add(7);
twoSum.add(6);
twoSum.add(66);
twoSum.add(6);
twoSum.add(4);
twoSum.add(-56);
twoSum.add(-46);
twoSum.add(-48);
twoSum.add(-2);
console.log(twoSum.find(13));
