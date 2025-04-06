import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gestión de productos
 */

/**
 * @swagger
 * /app/products/all:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get("/all", getProducts);

/**
 * @swagger
 * /app/products/create:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Producto A"
 *               precio:
 *                 type: number
 *                 example: 100.50
 *               categorias:
 *                 type: string
 *                 example: "Electrónica, Hogar"
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 */
router.post("/create", createProduct);

/**
 * @swagger
 * /app/products/update/{id}:
 *   patch:
 *     summary: Actualizar un producto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Producto A Actualizado"
 *               precio:
 *                 type: number
 *                 example: 120.00
 *               categorias:
 *                 type: string
 *                 example: "Electrónica, Oficina"
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 */
router.patch("/update/:id", updateProduct);

/**
 * @swagger
 * /app/products/delete/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 */
router.delete("/delete/:id", deleteProduct);

export default router;