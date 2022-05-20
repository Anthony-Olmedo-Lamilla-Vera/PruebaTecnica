const { UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
const Cliente = require("../Cliente");

async function NewTimeLine(req, res) {
  try {
    const info = {
      L: [
        {
          M: {
            Asunto: { S: "TheGrefg" },
            Cuerpo: {
              S: "Me convierto oficialmente en embajador de @ASUSROGES.\n\nUna de las marcas TOP en el mundo del gaming, cuyos producto…",
            },
            ImgUrl: {
              S: "https://pbs.twimg.com/profile_images/1488081191760760836/OJFfCL3M_normal.jpg",
            },
          },

          M: {
            Asunto: { S: "ANTHONY67952617" },
            Cuerpo: { S: "#ChiringuitoFlorentino Me convence" },
            ImgUrl: {
              S: "https://pbs.twimg.com/profile_images/1508846391862386690/2R7wRada_normal.jpg",
            },
          },
          M: {
            Asunto: { S: "ANTHONY67952617" },
            Cuerpo: { S: "@tctelevision Mierda de Gobierno" },
            ImgUrl: {
              S: "https://pbs.twimg.com/profile_images/1508846391862386690/2R7wRada_normal.jpg",
            },
          },
          M: {
            Asunto: { S: "TheGrefg" },
            Cuerpo: {
              S: "RT @TheGrefg: Me convierto oficialmente en embajador de @ASUSROGES.\n\nUna de las marcas TOP en el mundo del gaming",
            },
            ImgUrl: {
              S: "https://pbs.twimg.com/profile_images/1508846391862386690/2R7wRada_normal.jpg",
            },
          },
          M: {
            Asunto: { S: "ROG España" },
            Cuerpo: {
              S: " @ASUSROGES: Descubre quién es nuestro nuevo embajador de marca",
            },
            ImgUrl: {
              S: "https://pbs.twimg.com/ext_tw_video_thumb/1372231905249259532/pu/img/6JUK4Z1jqgQpxwL2.jpg",
            },
          },
        },
      ],
    };
    const ItemUpdate = await Cliente.send(
      new UpdateItemCommand({
        TableName: "PortFolio",
        Key: {
          NameUser: { S: "ANTHONY67952617" },
        },
        UpdateExpression: "set TimeLine = list_append(:location,TimeLine)",
        ExpressionAttributeValues: {
          ":location": info,
        },
      })
    );

    res.send({ MSG: "actualizado" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "err" });
  }
}

module.exports = NewTimeLine;
