function ingresar ()
{
    var usuario="jessica";
    var contraseña= "examen";


    if(document.formingreso.txtusuario.value==usuario &&
         document.formingreso.txtcontraseña.value==contraseña)
    {
        document.location="Archivo.html"
    }

    else
    {
       alert("Ingrese sus datos correctamente") 
    }

}
