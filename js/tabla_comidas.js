if (document.getElementById("idTablaPorJS"))
{
       //encabezado fijo de la tabla
        tab=`
        <p>Generado por JS</p>            
            <table>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                </tr>
        `
        //contenido variable
        for (var i=0; i<data.length; i++) {
                tab+=`
                <tr>
                    <td>${data[i].codigo}</td>
                    <td>${data[i].nombre}</td>
                    <td>${data[i].descripcion}</td>
                    <td>
                        <img src="${data[i].imagen}" alt="${data[i].nombre}">
                    </td>
                </tr>
                `
        }
        //cierre de la tabla
        tab+=`
                </table>
        `
        console.log(tab);
        document.getElementById("idTablaPorJS").innerHTML=tab;
}
