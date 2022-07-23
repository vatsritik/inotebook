const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Note = require('../models/Note')

//ROUTE 1.
//get all notes using:GET "/api/notes/fetchallnotes". 
// router.get('/fetchallnotes', fetchuser, async (req, res) => {
    
//         const notes = await Note.find({ user: req.user.id })
//         res.json(notes)
    
// })

// ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({user: req.user.id});
        res.json(notes);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
})

//ROUTE 2.
//Add a new note using:POST "/api/notes/addnote". 
router.post('/addnote', fetchuser, [
    body('title', 'valid title is required').isLength({ min: 3 }),
    body('description', 'valid description is required').isLength({ min: 5 })
], async (req, res) => {
    try {
        //Taking out values
        const { title, description, tag } = req.body;
        //If there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //Creating new note
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

//ROUTE 3.
//Update a note using:PUT "/api/notes/updatenote". 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {

        //Create a new Note Object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //Find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }

        //when id passed is not available in existing db
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed")
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

//ROUTE 4.
//Delete a note using:DELETE "/api/notes/deletenote".
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {

        //Find the note to be updated and delete it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }

        //when id passed is not available in existing db
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed")
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted" })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

module.exports = router