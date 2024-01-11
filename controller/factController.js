const factModel = require("../database/schema/factschema");

const createFact = async (req, res) => {
  const body = req.body;
  try {
    const fact = await factModel.create(body);
    res.status(200).send(fact);
  } catch (error) {
    console.log(error);
  }
};

const getFacts = async (req, res) => {
  const body = req.body;
  try {
    const fact = await factModel.find({});
    res.status(200).send(fact);
  } catch (error) {
    console.log(error);
  }
};

const getUserFact = async (req, res) => {
  const body = req.params.userId;
  try {
    const fact = await factModel.findById(body);
    res.status(200).send(fact);
  } catch (error) {
    console.log(error);
  }
};

const deleteFact = async (req, res) => {
  const factId = req.params.factId;
  try {
    const result = await factModel.findByIdAndDelete(factId);
    console.log(result);
    res.status(200).send(`${result._id} ustav`);
  } catch (error) {
    console.log(error);
  }
};

const updateFact = async (req, res) => {
  const body = req.body;
  const factId = req.params.factId;
  try {
    const fact = await factModel.findByIdAndUpdate(
      factId,
      {
        title: body.title,
        text: body.text,
      },
      { new: true }
    );
    res.status(200).send(fact);
  } catch (e) {
    res.status(500).send(e);
  }
};

const addlikes = async (req, res) => {
  const factId = req.params.factId;
  const userId = req.params.userId;
  try {
    const fact = await factModel.findById(factId);
    const updatedDisLikes = fact.dislike.filter((id) => id !== userId);
    const alreadyLiked = fact.likes.includes(userId);
    const updatedLikes = alreadyLiked ? fact.likes : [...fact.likes, userId];
    const updatetFact = await factModel.findByIdAndUpdate(factId, {
      likes: updatedLikes,
      dislike: updatedDisLikes,
    });
    res.status(200).send(updatetFact);
  } catch (e) {
    res.status(500).send(e);
  }
};

const disLikes = async (res,req)=>{
  const factId = req.params.factId;
  const userId = req.params.userId;
  if (!fact)  
  console.log()
  try{

    const fact = await factModel.findById(factId);
    const updatedDisLikes = fact.dislike.filter((id) => id !== userId);
    const alreadyLiked = fact.dislike.includes(userId);
    const updatedLikes = alreadyLiked ? fact.dislike : [...fact.dislike, userId];

    const updatetFact = await factModel.findByIdAndUpdate(factId, {

      likes: updatedLikes,
      dislike: updatedDisLikes,

    });
    res.status(200).send(updatetFact);
  }catch(err){
    res.status(500).send(err);
  }
};
module.exports = {
  createFact,
  getFacts,
  deleteFact,
  updateFact,
  getUserFact,
  addlikes,
  disLikes
};
