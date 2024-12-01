const {prisma} = require('../db/config');
const getById = async (req, res) => {
    const { id } = req.params;

    try {
        const cart = await prisma.cart.findUnique({
            where: { cartId: parseInt(id) },
        });

        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }

        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error retrieving cart entry" });
    }
};

module.exports = getById;
