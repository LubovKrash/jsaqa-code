const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

it("should return an empty array for empty input", () => {
  expect(sorting.sortByName([])).toEqual([]);
});

it("should return the same array if there is only one element", () => {
  expect(sorting.sortByName(["Гарри Поттер"])).toEqual(["Гарри Поттер"]);
});

it("should return the same array if all elements are identical", () => {
  expect(
    sorting.sortByName(["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"])
  ).toEqual(["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"]);
});

it("should correctly sort strings with special characters", () => {
  expect(sorting.sortByName(["apple!", "apple?", "apple."])).toEqual([
    "apple!",
    "apple.",
    "apple?",
  ]);
});
