const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getHabits)
router.post('/', controller.addHabit)

router.get('/:id', controller.getHabitById)
router.put('/:id', controller.updateHabit)
router.delete('/:id', controller.deleteHabit)

module.exports = router 