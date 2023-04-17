const pool = require('../db')
const queries = require('./queries')

const getHabits = (req, res) => {
    pool.query(queries.getHabits, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const getHabitById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getHabitById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const addHabit = (req, res) => {
    const { name, details, icon, alt, isComplete } = req.body

    // check if habit name exists
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if (results.rows.length) {
            res.send(`Habit '${name}' already exists. With details: ${details}`)
        }

        //add habit to db
        pool.query(queries.addHabit, [name, details, icon, alt, isComplete], (error, results) => {
            if (error) throw error
            res.status(201).send('Habit created successfully!')
        })
    })
}

const deleteHabit = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getHabitById, [id], (error, results) => {
        const noHabitFound = !results.rows.length
        if (noHabitFound) {
            res.send('Habit does not exist; could not be deleted.')
        }

        pool.query(queries.deleteHabit, [id], (error, results) => {
            if (error) throw error
            res.status(200).send('Habit deleted successfully.')
        })
    })
}

const updateHabit = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, details, icon, alt, isComplete } = req.body

    pool.query(queries.getHabitById, [id], (error, results) => {
        const noHabitFound = !results.rows.length
        if (noHabitFound) {
            res.send('Habit does not exist in the database.')
        }

        pool.query(queries.updateHabit, [name, details, icon, alt, isComplete, id], (error, results) => {
            if (error) throw error
            res.status(200).send('Habit updated successfully')
        })
    })
}

module.exports = {
    getHabits,
    getHabitById,
    addHabit,
    deleteHabit,
    updateHabit,
}