"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");


/** Related functions for companies. */

class Pet {
  /** Create a job (from data), update db, return new job data.
   *
   * data should be { title, salary, equity, companyHandle }
   *
   * Returns { id, title, salary, equity, companyHandle }
   **/

  static async create(data) {
    const result = await db.query(
      `INSERT INTO pets (petName,
                             age,
                             dogBreedId,
                             gender,
                             spayedOrNeutered,
                             adopted,
                             weigh,
                             color,
                             img,
                            )
           VALUES ($1, $2, $3, $4)
           RETURNING id, petName, age, dogBreedId, gender, spayedOrNeutered, adopted, weigh, color, img`,
      [
        data.petName,
        data.age,
        data.dogBreedId,
        data.gender,
        data.spayedOrNeutered,
        data.adopted,
        data.weigh,
        data.color,
        data.img,
        data.parentId,
      ]);
    let pet = result.rows[0];

    return pet;
  }

  /** Given a job id, return data about job.
   *
   * Returns { id, title, salary, equity, companyHandle, company }
   *   where company is { handle, name, description, numEmployees, logoUrl }
   *
   * Throws NotFoundError if not found.
   **/

  static async get(id) {
    const petRes = await db.query(
      `SELECT petName,
            age,
            dogBreedId,
            gender,
            spayedOrNeutered,
            adopted,
            weigh,
            color,
            img
           
           FROM pets
           WHERE id = $1`, [id]);

    const pet = petRes.rows[0];

    if (!pet) throw new NotFoundError(`No pet: ${id}`);

    return job;
  }

  /** Update job data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain
   * all the fields; this only changes provided ones.
   *
   * Data can include: { title, salary, equity }
   *
   * Returns { id, title, salary, equity, companyHandle }
   *
   * Throws NotFoundError if not found.
   */

  static async update(id, data) {
    const { setCols, values } = sqlForPartialUpdate(
      data,
      {});
    const idVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE pets 
                      SET ${setCols} 
                      WHERE id = ${idVarIdx} 
                      RETURNING petName,
                                age,
                                dogBreedId,
                                gender,
                                spayedOrNeutered,
                                adopted,
                                weigh,
                                color,
                                img`;
    const result = await db.query(querySql, [...values, id]);
    const pet = result.rows[0];

    if (!pet) throw new NotFoundError(`No pet: ${id}`);

    return pet;
  }

  /** Delete given job from database; returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(id) {
    const result = await db.query(
      `DELETE
           FROM pets
           WHERE id = $1
           RETURNING id`, [id]);
    const pet = result.rows[0];

    if (!pet) throw new NotFoundError(`No pet: ${id}`);
  }
}

module.exports = Pet;
