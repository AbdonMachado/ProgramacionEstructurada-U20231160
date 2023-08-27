function remove_special(str) {
    return str.replace(/[^\w -]/g, '');
}
//la regular expression detecta todos los valores que no sean alfanumericos, espacios, guiones y guiones bajos.
//luego los elimina con el replace

const entry = (prompt("ingrese un string para eliminar caracteres especiales"));

if (remove_special(entry) == '') {

    console.log("no ingreso ningun caracter alfanumerico");
    //la validacion

} else {
    console.log(remove_special(entry));
}