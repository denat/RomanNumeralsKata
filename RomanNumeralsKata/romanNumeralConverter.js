define(["require", "exports"], function (require, exports) {
    "use strict";
    var RomanNumeralConverter = (function () {
        function RomanNumeralConverter() {
            this.symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
        }
        RomanNumeralConverter.prototype.Convert = function (number) {
            var result = "";
            var digits = number.toString().split('');
            var d = 0;
            for (var i = 0; i < digits.length; i++) {
                var digit = parseInt(digits[digits.length - 1 - i]);
                var c = '';
                if (digit > 0 && digit < 4) {
                    c = this.Repeat(this.symbols[d], digit);
                }
                else if (digit == 4) {
                    c = this.symbols[d] + this.symbols[d + 1];
                }
                else if (digit > 4 && digit < 9) {
                    c = this.symbols[d + 1] + this.Repeat(this.symbols[d], digit - 5);
                }
                else if (digit == 9) {
                    c = this.symbols[d] + this.symbols[d + 2];
                }
                result = c + result;
                d += 2;
            }
            return result;
        };
        RomanNumeralConverter.prototype.Repeat = function (what, amount) {
            return new Array(amount + 1).join(what);
        };
        return RomanNumeralConverter;
    }());
    return RomanNumeralConverter;
});
//# sourceMappingURL=romanNumeralConverter.js.map