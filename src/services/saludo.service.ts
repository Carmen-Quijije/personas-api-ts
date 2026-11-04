export async function crearSaludo(nombre: string) {
    const saludo = {
        nombreRecibido: nombre,
        mensaje: `Hola ${nombre}` 
    }

    return saludo;
}
