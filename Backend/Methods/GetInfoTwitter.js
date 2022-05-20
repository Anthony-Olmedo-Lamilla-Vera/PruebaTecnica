const { GetItemCommand, unmarsh } = require("@aws-sdk/client-dynamodb");

const Cliente = require("../Cliente");
var unmarshalItem = require("dynamodb-marshaler").unmarshalItem;

const GetInfoTwitter = async (req, res) => {
  try {
    /*
     */

    const data = await Cliente.send(
      new GetItemCommand({
        TableName: "PortFolio",
        Key: {
          NameUser: { S: "ANTHONY67952617" },
        },
      })
    );

    const Data = unmarshalItem(data.Item);

    res.status(200).send(Data);
  } catch (error) {
    console.log("err", error);
    res.send({ msg: "errr tabla" });
  }
};
module.exports = GetInfoTwitter;
