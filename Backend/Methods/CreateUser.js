const {
  PutItemCommand,
  ExecuteStatementCommand,
} = require("@aws-sdk/client-dynamodb");
const Cliente = require("../Cliente");
const twitterClient = require("../Cliente_Twitter");

async function CreateUser(req, res) {
  try {
    const timeline = await twitterClient.tweets.statusesUserTimeline({
      screen_name: "ANTHONY67952617",
      count: 5,
    });

    const User = await twitterClient.accountsAndUsers.usersSearch({
      q: "ANTHONY67952617",
    });

    const Data = timeline.map((val) => {
      const Info = {
        Descripcion: `'${val.text}'`,
        Nombre: `'${val.user.name}'`,
        ImgUrl: `'${
          (val.retweeted_status &&
            val.retweeted_status.user.profile_background_image_url_https) ||
          val.user.profile_background_image_url_https
        }'`,
      };
      return Info;
    });

    const nueva_Data = await Cliente.send(
      new ExecuteStatementCommand({
        Statement: `INSERT INTO "PortFolio" value {'NameUser':'${User[0].name}' ,'Descripcion':'${User[0].description}','UrlImg':'${User[0].profile_image_url}','TimeLine':${Data} }`,
      })
    );

    console.log({ nueva_Data });

    res.status(200).send({ msg: "corre", nueva_Data });
  } catch (error) {
    console.log("ssd", error);
    res.send({ err: error });
  }
}
module.exports = CreateUser;
