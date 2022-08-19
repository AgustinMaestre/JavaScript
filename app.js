
function loguinUsuario(){

    let ingresoLoguin = Number(prompt("DataBase \n \nPor favor elija una opción: \n \n1) Inicie sesión con usuario existente. \n     (Ingresar usario y contraseña)\n \n2) Crear usuario y contraseña. \n     (Crear nuevo usuario y contraseña)"))  

    const usu1 = {nomUsuario: "Matias1234", passUsuario: "1234"}
    const usu2 = {nomUsuario: "Tomas4567", passUsuario: "4567"}
    const usu3 = {nomUsuario: "Pablo8912", passUsuario: "8912"}
    
    const listaUsuarios = [usu1, usu2, usu3];   
   
    function crearNuevoUsuario(){
        
            let nuevoUsuario = prompt("Ingrese nuevo nombre de usuario")
            let nuevaPass = prompt("Ingrese su contraseña")
            listaUsuarios.push({nomUsuario: nuevoUsuario, passUsuario: nuevaPass})
            alert("Su nuevo nombre de usuario es: " + nuevoUsuario) 
            alert("Nuevo usuario creado con éxito \n \nBienvenido a DataBase \n \nSistema para colsultar el historial de las personas que ingresan al establecimiento")
            logicaUsuario()

            for(const vistaCreacion of listaUsuarios){
                console.log(vistaCreacion.nomUsuario);
                console.log(vistaCreacion.passUsuario);
            }}
   
        if(ingresoLoguin == 1){
        let usuarioExist = prompt("Ingrese nombre de usuario")
        let passExist = prompt("Ingrese su contraseña")
        for(const datos of listaUsuarios){
       
        if (datos.nomUsuario == usuarioExist && datos.passUsuario == passExist){
                alert("Bienvenido a DataBase: " + usuarioExist )
            logicaUsuario()
            break; 
            }
       
         else{
            alert("Los datos ingresados no son correctos, por favor vuelva a intentarlo")
            break;}
        }}

        if (ingresoLoguin == 2){
        crearNuevoUsuario()
         }}

        loguinUsuario()

    function logicaUsuario(){

        const Persona1 = {dni: 33456852, nombre: "Matias", apellido: "Ponce", fechNac: ('08/02/1992'), comentarioPers:"Comentario guardado de persona"}
        const Persona2 = {dni: 43872690, nombre: "Tomas", apellido: "Fonzi", fechNac: ('30/06/2002'), comentarioPers: "Comentario guardado de persona"}
        const Persona3 = {dni: 39520126, nombre: "Pablo", apellido: "Piati", fechNac: ('17/03/1996'), comentarioPers: "Comentario guardado de la persona"}
    
        const listaDePersonas = [Persona1, Persona2,Persona3];
    
        function crearNuevaPersona(){
        
        listaDePersonas.push({
        dni: Number(prompt("Ingrese DNI de la persona")), 
        nombre: prompt("Ingrese nombre de la persona"), 
        apellido: prompt("Ingrese apellido de la persona"),
        fechNac: prompt("Ingrese fecha de nacimiento"),
        comentarioPers: prompt("Ingrese comentarios de la persona"), 
        })
        alert('Usted ha cargado correctamente los datos de la persona')
         console.log(listaDePersonas)
        }

        function consultarPersona(){
        const busquedaDNI = listaDePersonas.find(resultado => resultado.dni === Number(prompt("Ingrese el DNI a consultar")))
        console.log(busquedaDNI)
        }

        function agregarComentario(){ 
            cargarComentario = listaDePersonas.findIndex((dato => dato.dni === Number(prompt("Ingrese DNI de la persona"))));
            console.log("Comentario antes de la actualización: ", listaDePersonas[cargarComentario]);
            listaDePersonas[cargarComentario].comentarioPers = prompt("Ingrese comentarios de la persona");
            console.log("Comentarios despues de la actualización: ", listaDePersonas[cargarComentario]);
            
        }

        let opcionesSistema = Number(prompt("DataBase \n \nPor favor escoge una opción: \n \n1) Crear nueva persona \n2) Consutar persona por DNI \n3) Actualizar datos de la persona \n4) Para salir del sistema"))

        if (opcionesSistema == 1){
             crearNuevaPersona()
        }

        if (opcionesSistema == 2){
            consultarPersona()
        }
         
        if (opcionesSistema == 3){
            agregarComentario()
        }

        if (opcionesSistema == 4){
            alert("Gracias por utilizar DataBase.")
        }
    }