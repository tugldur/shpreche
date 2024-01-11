// cnst zrlad brjgr haltnd mdel, schma hged tncu reqre hltand hyr cgend mngose
// cnst Usrschma tncu shine   Schema engi halt  brjgr dhltand
//  ngo 4n pstloh yma oruln
const { model, Schema } = require("mongoose");
const UserSchema = new Schema({
  userName: String,
  email: String,
  age: Number,
  password: String,
  location: String,
});
// cnst Usrmdl tncu mdl hltnd hyr cgend "Usr" ,Usrscma
// mdul.exprt tncu Usrmdel
const userModel = model("Users", UserSchema);
module.exports = userModel;
