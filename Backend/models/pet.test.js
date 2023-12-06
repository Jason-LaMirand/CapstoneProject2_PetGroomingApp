"use strict";

const { NotFoundError, BadRequestError } = require("../expressError.js");
const db = require("../db.js");
const Pet = require("./pet.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testPetIds,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** create */

describe("create", function () {
  let newPet = {
    petName: "pet1",
    age: "1",
    dogBreedId: 1,
    gender: "f",
    spayedOrNeutered: "s",
    adopted: true,
    weigh: "25",
    color: "red",
    img: "http://c1.img"

  };

  test("works", async function () {
    let pet = await Pet.create(newPet);
    expect(pet).toEqual({
      ...newPet,
      id: expect.any(Number),
    });
  });
});


/************************************** remove */

describe("remove", function () {
  test("works", async function () {
    await Pet.remove(testPetIds[0]);
    const res = await db.query(
      "SELECT id FROM pets WHERE id=$1", [testPetIds[0]]);
    expect(res.rows.length).toEqual(0);
  });

  test("not found if no such pet", async function () {
    try {
      await Pet.remove(0);
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});
