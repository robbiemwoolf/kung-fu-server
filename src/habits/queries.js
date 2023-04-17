const getHabits = 'SELECT * FROM habits'
const getHabitById = 'SELECT * FROM habits WHERE id = $1'
const checkNameExists = 'SELECT h FROM habits h WHERE h.name = $1'
const addHabit ='INSERT INTO habits (name, details, icon, alt, isComplete) VALUES ($1, $2, $3, $4, $5)'
const deleteHabit = 'DELETE FROM habits WHERE id = $1'
const updateHabit = 'UPDATE habits SET (name, details, icon, alt, isComplete) = ($1, $2, $3, $4, $5) WHERE id = $6'

module.exports = {
    getHabits,
    getHabitById,
    checkNameExists,
    addHabit,
    deleteHabit,
    updateHabit,
}