const { format_date, format_plural, format_url } = require("../utils/helpers");

test("format date() returns date string", () => {
	const date = new Date("2020-03-20 16:13:03");

	expect(format_date(date)).toBe("3/20/2020");
});

test("format_plural correctly pluralizes word", () => {
	const word = "tiger";

	expect(format_plural(word, 2)).toBe("tigers");
});

test("format_url() returns simplified url string", () => {
	const url1 = format_url("http://test.com/page/1");
	const url2 = format_url("https://www.coolstuff.com/abcdefg/");
    const url3 = format_url("https://www.google.com?q=hello");
    
    expect(format_url(url1)).toBe("test.com")
    expect(format_url(url2)).toBe("coolstuff.com")
    expect(format_url(url3)).toBe("google.com")
});
