define(["require", "exports"], function (require, exports) {
    "use strict";
    var RomanNumeralConverter = (function () {
        function RomanNumeralConverter() {
            this.dividers = [1000, 500, 100, 50, 10, 5, 1];
            this.units = {
                1000: 'M',
                500: 'D',
                100: 'C',
                50: 'L',
                10: 'X',
                5: 'V',
                1: 'I'
            };
        }
        RomanNumeralConverter.prototype.Convert = function (number) {
            var result = "";
            var factors = this.GetFactors(number);
            for (var key in factors) {
                result += this.Repeat(key, factors[key]);
            }
            return result;
        };
        RomanNumeralConverter.prototype.Repeat = function (what, amount) {
            return new Array(amount + 1).join(what);
        };
        RomanNumeralConverter.prototype.GetFactors = function (number) {
            var factors = {};
            for (var i = 0; i < this.dividers.length; i++) {
                var factor = Math.floor(number / this.dividers[i]);
                factors[this.units[this.dividers[i]]] = factor;
                number -= factor * this.dividers[i];
            }
            return factors;
        };
        return RomanNumeralConverter;
    }());
    return RomanNumeralConverter;
});
//# sourceMappingURL=romanNumeralConverter.js.map