const {Pool} = require('pg');

const config ={
    user:'postgres',
    host:'localhost',
    password:1234,
    database:"usuarios"
};

const pool = new Pool(config);

const getUsuarios = async ()=>{
    try{
        const res = await pool.query('select *from usuario');
        console.table(res.rows);
    }catch(error){
        console.log(error)
    }
}
getUsuarios();

const insertUsuarios = async()=>{
    try {
    const text ='insert into usuario(nombre,apellido,password,edad)values($1,$2,$3,$4)'
    const values =['eli','minar',123456,44]
    const res=await pool.query(text,values)
    console.log(res);
    }catch(error){
        console.log(error)
    }
}
//insertUsuarios();

const deleteUsuarios = async()=>{
    const text = 'delete from usuario where id=$1'
    const values =[5];

    const res = await pool.query(text,values);
    console.log(res);
}
// deleteUsuarios();

const editUusuarios = async()=>{
    const text ='update usuario set nombre =$1 where nombre=$2';
    //valor nuevo,valor antiguo
    const values =['carlos Enrique','carlos']

    const res = await pool.query(text,values);
    console.log(res)
}
//editUusuarios();

const editUusuarioContra = async()=>{
    const text ='update usuario set nombre =$1, password=$2 where id=$3';
    //valor nuevo,valor antiguo
    const values =['juan carlos','123456',3]

    const res = await pool.query(text,values);
    console.log(res)
}
editUusuarioContra();