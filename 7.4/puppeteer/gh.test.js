let page;

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(async () => {
    await page.close();
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub · Build and ship software on a single, collaborative platform · GitHub"
    );
  }, 20000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 20000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) =>
      link.textContent.trim()
    );
    expect(actual).toContain("Get started with Team");
  }, 20000);
});

describe("New Github pages tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  test("The h1 content on sponsors page", async () => {
    await page.goto("https://github.com/sponsors");
    await page.waitForSelector("#hero-section-brand-heading");
    const title = await page.$eval(
      "#hero-section-brand-heading",
      (h1) => h1.textContent
    );
    expect(title).toContain("Support the developers who power open source");
  }, 20000);

  test("The h1 content on Features page", async () => {
    await page.goto("https://github.com/features");
    await page.waitForSelector("#hero-section-brand-heading");
    const title = await page.$eval(
      "#hero-section-brand-heading",
      (h1) => h1.textContent
    );
    expect(title).toEqual("The tools you need to build what you want");
  }, 20000);

  test("The h1 header on main page", async () => {
    await page.goto("https://github.com/");
    await page.waitForSelector("h1");
    const title = await page.$eval("h1", (h1) => h1.textContent);
    expect(title).toEqual(
      "Search code, repositories, users, issues, pull requests..."
    );
  }, 20000);

  test("Click on Sign up for GitHub and check h1", async () => {
    await page.goto("https://github.com/");
    const btnSelector =
      "button.Primer_Brand__Button-module__Button--primary___xIC7G";
    await page.waitForSelector(btnSelector, { visible: true });
    await page.click(btnSelector);
    await page.waitForSelector("h1");
    const title = await page.$eval("h1", (h1) => h1.textContent);
    expect(title).toBe("Create your free account");
  }, 20000);
});
