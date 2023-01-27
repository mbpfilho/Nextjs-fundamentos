export default function handler(req,res){

  if(req.method==="GET")handleGet(req,res)
  else res.status(405).send()

  function handleGet(req,ers){
    res.status(200).json({
    id: 3,
    name: "Maria",
    email: "mariamariamaria@asdf.com"
    })
  }
  
}