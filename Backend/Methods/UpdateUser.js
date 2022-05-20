const { UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
const Cliente = require("../Cliente");

async function UpdateUser(req, res) {
  const { Descripcion } = req.body;
  try {
    const ItemUpdate = await Cliente.send(
      new UpdateItemCommand({
        TableName: "PortFolio",
        Key: {
          NameUser: { S: "ANTHONY67952617" },
        },
        UpdateExpression: "SET Descripcion = :newDescripcion",
        ExpressionAttributeValues: {
          ":newDescripcion": { S: Descripcion },
        },
      })
    );

    res.send({ data: "Actualizado", ItemUpdate });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Intente nuevamente", E: error });
  }
}
module.exports = UpdateUser;
