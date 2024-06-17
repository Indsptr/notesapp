import express from 'express'
import notesRoute from '../routes/notes.route.js'

const router = express()

router.use(notesRoute)


export default router