import { DataTypes } from "sequelize";
import sequelize from "../config/bd.js";

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2), // Permite manejar precios con decimales
    allowNull: false,
    validate: {
      isDecimal: true, // Valida que sea un número decimal
      min: 0, // El precio no puede ser negativo
    },
  },
  categorias: {
    type: DataTypes.STRING(255), // Almacena categorías como una lista separada por comas
    allowNull: false,
  },
}, {
  timestamps: false, 
  tableName: "products", // Nombre de la tabla en la base de datos
});

export default Product;