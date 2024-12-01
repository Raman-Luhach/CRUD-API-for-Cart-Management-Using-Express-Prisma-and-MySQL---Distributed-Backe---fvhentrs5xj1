const {prisma} = require("../db/config")

const patch = async (req, res) => {
    const { id } = req.params;
    const { count } = req.body;

    if (!count) {
        return res.status(400).json({ error: "Count is required to update" });
    }

    try {
        const updatedCart = await prisma.cart.update({
            where: { cartId: parseInt(id) },
            data: { count },
        });
        res.status(200).json(updatedCart);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Cart not found" });
    }
};


module.exports = patch;
