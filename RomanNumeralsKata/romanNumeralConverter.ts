class RomanNumeralConverter {

    private dividers = [1000, 500, 100, 50, 10, 5, 1];

    private units = {
        1000: 'M',
        500: 'D',
        100: 'C',
        50: 'L',
        10: 'X',
        5: 'V',
        1: 'I'
    };

    public Convert(number: number): string {
        var result = "";
        var factors = this.GetFactors(number);

        for (var key in factors) {
            result += this.Repeat(key, factors[key]);
        }

        return result;
    }

    private Repeat(what: string, amount: number): string {
        return new Array(amount + 1).join(what);
    }

    private GetFactors(number) {
        var factors = {};
        
        for (var i = 0; i < this.dividers.length; i++) {
            var factor = Math.floor(number / this.dividers[i]);
            factors[this.units[this.dividers[i]]] = factor;

            number -= factor * this.dividers[i];
        }

        return factors;
    }
}

export = RomanNumeralConverter;