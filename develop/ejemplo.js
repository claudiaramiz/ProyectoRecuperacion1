// A promise is a is an object that represents the completion or failure of an asynchronous operation.
verificarSiYaConfirmoSuCorreo()
.then(function(correoConfirmado) {
  if (correoConfirmado)
    return obtenerCategoriasPreferidas(userId);
  else
    throw new Error('Primero por favor confirma tu correo');
})
.then(function(categoriasPreferidas) {
  if (categoriasPreferidas.length > 0)    
    return obtenerArticulosPopularesEn(categoriasPreferidas);
  else
    return obtenerArticulosPopulares();
})
.then(function(listaArticulos) {
  console.log('Artículos a mostrar: ' + listaArticulos);
})
.catch(failureCallback);