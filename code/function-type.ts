function makeIncrementer():(number) => number{
    function addOne(number: number): number {
        return 1 + number;
    }
    return addOne
}
let increment = makeIncrementer();
increment(7);

// makeIncrementer can also be written in a shorter way:
let makeIncrementer = () => (number: number) => 1 + number;
