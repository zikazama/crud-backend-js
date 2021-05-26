// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Barang = db.define('barang', {
  // Define attributes
  nama: {
    type: DataTypes.STRING
  },
  harga: {
    type: DataTypes.DOUBLE
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default Barang;