/// <reference path="../jasmine.d.ts" />

import RomanNumeralConverter = require('../romanNumeralConverter');

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

    it("4 as input should return IV", function () {
        var result = converter.Convert(4);

        expect(result).toBe("IV");
    });

    it("5 as input should return V", function () {
        var result = converter.Convert(5);

        expect(result).toBe("V");
    });

    it("9 as input should return IX", function () {
        var result = converter.Convert(9);

        expect(result).toBe("IX");
    });

    it("13 as input should return XIII", function () {
        var result = converter.Convert(13);

        expect(result).toBe("XIII");
    });

    it("14 as input should return XIV", function () {
        var result = converter.Convert(14);

        expect(result).toBe("XIV");
    });

    it("16 as input should return XVI", function () {
        var result = converter.Convert(16);

        expect(result).toBe("XVI");
    });

    it("19 as input should return XIX", function () {
        var result = converter.Convert(19);

        expect(result).toBe("XIX");
    });

    it("20 as input should return XX", function () {
        var result = converter.Convert(20);

        expect(result).toBe("XX");
    });

    it("29 as input should return XXIX", function () {
        var result = converter.Convert(29);

        expect(result).toBe("XXIX");
    });

    it("30 as input should return XXX", function () {
        var result = converter.Convert(30);

        expect(result).toBe("XXX"); // ¯\_(ツ)_/¯
    });

    it("49 as input should return XLIX", function () {
        var result = converter.Convert(49);

        expect(result).toBe("XLIX");
    });

    it("50 as input should return L", function () {
        var result = converter.Convert(50);

        expect(result).toBe("L");
    });

    it("99 as input should return XCIX", function () {
        var result = converter.Convert(99);

        expect(result).toBe("XCIX");
    });

    it("100 as input should return C", function () {
        var result = converter.Convert(100);

        expect(result).toBe("C");
    });

    it("599 as input should return DXCIX", function () {
        var result = converter.Convert(599);

        expect(result).toBe("DXCIX");
    });

    it("999 as input should return CMXCIX", function () {
        var result = converter.Convert(999);

        expect(result).toBe("CMXCIX");
    });

    it("1000 as input should return M", function () {
        var result = converter.Convert(1000);

        expect(result).toBe("M");
    });

    it("1111 as input should return MCXI", function () {
        var result = converter.Convert(1111);

        expect(result).toBe("MCXI");
    });

    it("1989 as input should return MCMLXXXIX", function () {
        var result = converter.Convert(1989);

        expect(result).toBe("MCMLXXXIX");
    });

    it("1991 as input should return MCMXCI", function () {
        var result = converter.Convert(1991);

        expect(result).toBe("MCMXCI");
    });

    it("2339 as input should return MMCCCXXXIX", function () {
        var result = converter.Convert(2339);

        expect(result).toBe("MMCCCXXXIX");
    });
});