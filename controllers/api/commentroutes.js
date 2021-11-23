const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const data = await Comment.findAll({
            include: [User],
        });

        const comments = data.map((comment) => comment.get({plain:true}));
        console.log(comments);
        res.render("post", {comments, loggedIn: req.session.loggedIn});

    } catch(err) {
        res.status(500).json(err);
    }
});

router.post("/", withAuth, async (req, res) => {
    const content = req.body;
    try {
        const newComment = await Comment.create({
            content,
            userId: req.session.userId,
        });
        res.json(newComment);
    }   catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;