class RomanNumeralConverter {



    public Convert(number: number): string {

        if (number < 5) {
            return this.Repeat("I", number);
        } else if (number >= 5) {
            return "V" + this.Repeat("I", number - 5);
        }

        return "";
    }

    private Repeat(what: string, amount: number): string {
        return new Array(amount + 1).join(what);
    }
}

export = RomanNumeralConverter;