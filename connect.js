const {createPool}= require('mysql');

const pool = createPool({
  host:"localhost",
  user:"Yukeshwar",
  password:"Yukeshwar@3624",
  database:"cs22187",
});
pool.query('select *from patdet',(err,result,fields)=>{
  if(err)
  {
    return console.log(err);
  }
  return console.log(result)
}
);