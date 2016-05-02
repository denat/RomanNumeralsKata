/// <reference path="../jasmine.d.ts" />
define(["require", "exports", '../romanNumeralConverter'], function (require, exports, RomanNumeralConverter) {
    "use strict";
    describe("Roman numerals", function () {
        var converter = new RomanNumeralConverter();
        it("Zero as input should return empty string", function () {
            var result = converter.Convert(0);
            expect(result).toBe("");
        });
        it("1 as input should return I", function () {
            var result = converter.Convert(1);
            expect(result).toBe("I");
        });
        it("3 as input should return III", function () {
            var result = converter.Convert(3);
            expect(result).toBe("III");
        });
        it("5 as input should return V", function () {
            var result = converter.Convert(5);
            expect(result).toBe("V");
        });
        it("9 as input should return IX", function () {
            var result = converter.Convert(9);
            expect(result).toBe("IX");
        });
    });
});
//# sourceMappingURL=test.js.map