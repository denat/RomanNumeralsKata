define(["require", "exports"], function (require, exports) {
    "use strict";
    var RomanNumeralConverter = (function () {
        function RomanNumeralConverter() {
        }
        RomanNumeralConverter.prototype.Convert = function (number) {
            if (number < 5) {
                return this.Repeat("I", number);
            }
            else if (number >= 5) {
                return "V" + this.Repeat("I", number - 5);
            }
            return "";
        };
        RomanNumeralConverter.prototype.Repeat = function (what, amount) {
            return new Array(amount + 1).join(what);
        };
        return RomanNumeralConverter;
    }());
    return RomanNumeralConverter;
});
//# sourceMappingURL=romanNumeralConverter.js.map