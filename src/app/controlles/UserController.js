import User from "../models/User";

class UserController {
  async index(req, res) {
    try {
      let users = await User.findAll();

      return res.status(200).json(users);
    } catch (error) {
      // console.log("ocorreu um erro", error);
      return res.status(400).json({ error: "ocorreu um erro" });
    }
  }

  async store(req, res) {
    //console.log(req.body.length)
    if (!req.body) {
      return res.status(400).json({ error: "Não foi enviado os dados" });
    }
    let userexist = await User.findOne({ where: { mail: req.body.mail } });

    if (userexist) {
      return res.status(400).json({ error: "Já existe mail cadastrado!" });
    }

    try {
      let user = await User.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      //console.log("ocorreu um erro", error);
      return res.status(400).json({ error: "ocorreu um erro" });
    }
  } 

  async update(req, res) {
    if (!req.body) {
      return res.status(400).json({ error: "Não foi enviado os dados" });
    }
    let userexist = await User.findByPk(req.params.id);

    if (!userexist) {
      return res.status(400).json({ error: "ID não existe!" });
    }

    try {
      let user = await userexist.update(req.body);
      return res.status(200).json(user);
    } catch (error) {
      //console.log("ocorreu um erro", error);
      return res.status(400).json({ error: "ocorreu um erro" });
    }
  }

  async destroy(req, res) {
    let userexist = await User.findByPk(req.params.id);

    if (!userexist) {
      return res.status(400).json({ error: "ID não existe!" });
    }
    if (userexist.ismaster) {
      return res.status(400).json({ error: "Usuário Master não pode ser excluido" });
    }
    try {
      await userexist.destroy();
      return res.status(200).json({ messege: "Usuario deletado!" });
    } catch (error) {
      //console.log("ocorreu um erro", error);
      return res.status(400).json({ error: "ocorreu um erro" });
    }
  }
}
export default new UserController();
