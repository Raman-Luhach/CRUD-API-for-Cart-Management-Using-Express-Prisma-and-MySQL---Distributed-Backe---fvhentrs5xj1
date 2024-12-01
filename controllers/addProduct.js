


const {prisma} = require('../db/config');
const addProduct = async (req, res) => {
    const {userId, productId, count} = req.body;

    if (!userId || !productId || !count) {
        res.status(404).json({"error": 'All fields required'});
    }

    try {
        const cart = await prisma.Cart.create({
            data: { userId, productId, count },
        });
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ error: "Error creating cart entry" });
    }

    const data = prisma.Cart.findUnique({

    })

}


module.exports = addProduct;
