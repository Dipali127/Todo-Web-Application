const { v4: uuidv4 } = require('uuid');
const userModel = require('../model/userModel.js')
const jwt = require('jsonwebtoken')

// generate a UUID
const uuid = uuidv4();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>register user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
const createUser = async function(req, res){
    try{
        // const { name, email, password } = req.body;
        // const user = { name, email, password };
        const user={
          uuid:uuid,
          name:req.body.name,
          email:req.body.email,
          password:req.body.password
        }
      // conn.connection.query('insert into schoolInfo Set ?',user, (err, result) => {
      // if (err) throw err;
      // console.log('User created:', result);
      let result = await userModel.create(user);
      return res.status(201).send({status:true,mssg:'User registered successfully',data:result});
    //});

    }catch(error){
        return res.status(500).send({mssg:error.message})
    }
    
  };


  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>login user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

  const loginUser = async function(req,res){
    try{
      const { email, password } = req.body;

  // Query database for user with matching email
  const user = await userModel.findOne({ where: { email} });

  // If user is found then create jwt token
  if (!user) {
    return res.status(401).send({ message: 'Invalid email or password' });
  } 

  const token = jwt.sign({ id: user.id }, 'todowebApp');
  res.setHeader("x-api-key",token);
  return res.status(200).send({status:true, token:token });


    }catch(error){
      return res.status(500).send({mssg:error.message});
    }
  }
module.exports = {createUser,loginUser};