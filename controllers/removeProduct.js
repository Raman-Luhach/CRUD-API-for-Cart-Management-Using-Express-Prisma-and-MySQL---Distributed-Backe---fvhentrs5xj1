const {prisma} = require('../db/config');
const removeProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.cart.delete({
            where: { cartId: parseInt(id) },
        });
        res.status(200).json({ message: "Cart deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Cart not found" });
    }
};

module.exports = removeProduct
