import Sequelize from "sequelize";
import Address from "../Models/Address";

class AdressController {
  async index(req, res) {
    try {
      return res.status(200).json({ message: "Serviço em operaçao" });
    } catch (error) {
      // console.log("ocorreu um erro", error)
      return res.status(400).json({ error: "ocorreu um erro" });
    }
  }
  async store(req, res) {
   
    if (!req.body) {
      return res.status(400).json({ message: "Dados não existente!" });
    }
    try {
        let address = await Address.create(req.body);  
        console.log(address);
      return res.status(200).json({ message: "Endereço cadastrado!" });
    } catch (error) {
       console.log("ocorreu um erro", error)
      return res.status(400).json({ error: "ocorreu um erro" });
    }
  }
  async update(req, res) {
    try {
      return res.status(200).json({ message: "Serviço em operaçao" });
    } catch (error) {
      // console.log("ocorreu um erro", error)
      return res.status(400).json({ error: "ocorreu um erro" });
    }
  }
  async destroy(req, res) {
    try {
      return res.status(200).json({ message: "Serviço em operaçao" });
    } catch (error) {
      // console.log("ocorreu um erro", error)
      return res.status(400).json({ error: "ocorreu um erro" });
    }
  }
}
export default new AdressController();