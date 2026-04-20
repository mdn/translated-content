---
title: Cómo crear, editar, mover o eliminar páginas
short-title: Crear, editar, mover o eliminar páginas
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: 0ff7ba5177bf2e66214bd90b58590c6bf3acb758
---

Este artículo describe cómo crear, mover, eliminar o editar una página.
En todos estos casos, es una buena idea revisar nuestras directrices para [Lo que escribimos](/es/docs/MDN/Writing_guidelines/What_we_write) para confirmar si alguna de estas acciones debe tomarse y discutirlo con el equipo en uno de los [canales de comunicación](/es/docs/MDN/Community/Communication_channels) de MDN Web Docs antes de proceder.

## Crear páginas

Todas las páginas en MDN Web Docs están redactadas en formato Markdown. El contenido se escribe en un archivo llamado `index.md`, que se almacena en su propio directorio único. El nombre del directorio representa el nombre de la página. Por ejemplo, si `align-content` es una nueva propiedad CSS para la cual desea crear una nueva página de referencia, crearía una carpeta en `en-us/web/css` llamada `align-content` y crearía un archivo llamado `index.md` dentro de ella.

> [!NOTE]
> El nombre del directorio difiere ligeramente del slug de la página. En particular, el slug sigue el uso de mayúsculas y minúsculas de la oración.

Hay muchos [tipos de página](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types) diferentes con ciertas estructuras y plantillas de página de apoyo para ellos, que puede copiar para comenzar.

El archivo `index.md` de un documento debe comenzar con material frontal que defina el `title`, el `slug` y el `page-type`. Toda esta información de material frontal se puede encontrar en las plantillas de página mencionadas anteriormente. Alternativamente, puede resultarle útil consultar el material frontal dentro del archivo `index.md` de un documento similar.

El proceso general paso a paso para crear una página sería:

1. Inicie una rama nueva y actualizada para trabajar.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Ejecute "npm install" para asegurarse de que las dependencias estén actualizadas.
   npm install
   git checkout -b my-add
   ```

2. Cree uno o más directorios de documentos nuevos, cada uno con sus propios archivos `index.md`.

3. Agregue y confirme sus nuevos archivos, así como envíe su nueva rama a su fork.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Cree su solicitud de extracción.

## Mover páginas

Mover uno o más documentos o un árbol completo de documentos es fácil
porque hemos creado un comando especial que se encarga de los detalles por usted:

```bash
npm run content move <from-slug> <to-slug> [locale]
```

Solo tiene que especificar el slug del documento existente que le gustaría
mover (por ejemplo, `Web/HTTP/Guides/Authentication`), así como el slug de su nuevo
ubicación (por ejemplo, `Web/HTTP/Guides/Auth`), opcionalmente seguido por la configuración regional del
documento existente (el valor predeterminado es `en-US`).

Si el documento existente que le gustaría mover tiene documentos secundarios (es decir,
representa un árbol de documentos), el comando `npm run content move` moverá
todo el árbol.

Por ejemplo, supongamos que desea mover todo el
árbol `/en-US/Web/HTTP/Guides/Authentication` a `/en-US/Web/HTTP/Guides/Auth`, realizaría los siguientes pasos:

1. Iniciará una rama nueva para trabajar.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Ejecute "npm install" nuevamente para asegurarse de que las dependencias estén actualizadas.
   npm install
   git checkout -b my-move
   ```

2. Realice el movimiento (que eliminará y modificará los archivos existentes, así como creará nuevos archivos).

   ```bash
   npm run content move Web/HTTP/Guides/Authentication Web/HTTP/Guides/Auth
   ```

3. Una vez que los archivos se hayan movido, necesitamos actualizar las referencias a esos archivos en los otros archivos de contenido también. Use el siguiente comando para actualizar todas las referencias automáticamente de una vez:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Agregue y confirme todos los archivos eliminados, creados y modificados, así como envíe su rama a su fork.

   ```bash
   git add .
   git commit -m "Move Web/HTTP/Guides/Authentication to Web/HTTP/Guides/Auth"
   git push -u origin my-move
   ```

5. Cree su solicitud de extracción.

> [!NOTE]
> El comando `npm run content move` agrega redirecciones necesarias en el archivo `_redirects.txt` para que la ubicación antigua redirija a la nueva. ¡No edite el archivo `_redirects.txt` manualmente! Los errores pueden introducirse fácilmente si lo hace. Si necesita agregar una redirección sin mover un archivo, hable con el equipo de MDN Web Docs en los [canales de comunicación de MDN Web Docs](/es/docs/MDN/Community/Communication_channels) al respecto.

## Eliminar páginas

Los documentos solo deben eliminarse de MDN Web Docs en circunstancias especiales. Si está pensando en eliminar páginas, discútalo con el equipo de MDN Web Docs en los [salas de chat de MDN Web Docs](/es/docs/MDN/Community/Communication_channels#chat_rooms) primero.

Eliminar uno o más documentos o un árbol completo de documentos es fácil, al igual que mover páginas, porque hemos creado un comando especial que se encarga de los detalles por usted:

```bash
npm run content delete <document-slug> [locale] -- --redirect <redirect-slug-or-url>
```

Cuando redirige, la página de destino puede ser una URL externa u otra página en MDN Web Docs.

> [!NOTE]
> Necesita usar el comando `npm run content delete` para eliminar páginas de MDN Web Docs. No elimine sus directorios del repositorio. El comando `npm run content delete` también maneja otros cambios necesarios, como actualizar el archivo `_wikihistory.json`.

Solo tiene que especificar el slug del documento existente que le gustaría
eliminar (por ejemplo, `Web/HTTP/Guides/Authentication`), opcionalmente seguido por la configuración regional
del documento existente (el valor predeterminado es `en-US`).

Si el documento existente que le gustaría eliminar tiene documentos secundarios (es decir, representa un
árbol de documentos), también debe especificar la opción `-r, --recursive`, de lo contrario
el comando fallará.

Por ejemplo, si desea eliminar todo el
árbol `/en-US/Web/HTTP/Guides/Authentication`, realizaría los siguientes pasos:

1. Iniciará una rama nueva para trabajar.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Ejecute "npm install" nuevamente para asegurarse de que las dependencias estén actualizadas.
   npm install
   git checkout -b my-delete
   ```

2. Realice la eliminación con una redirección.

   ```bash
   npm run content delete Web/HTTP/Guides/Authentication --recursive -- --redirect /en-US/path/of/target/page
   ```

3. Agregue y confirme todos los archivos eliminados, así como envíe su rama a su fork.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

4. Cree su solicitud de extracción.

> [!NOTE]
> Si el slug de la página que desea eliminar contiene caracteres especiales, inclúyalo entre comillas, así:

> ```bash
> npm run content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)" -- --redirect <redirect-slug-or-url>
> ```

Eliminar contenido de MDN Web Docs inevitablemente resultará en actualizar el contenido existente también. Como muchos artículos se vinculan con otros, es probable que el contenido eliminado sea referenciado en otra parte. Agregar la redirección mitigará el impacto de eliminar el contenido; sin embargo, es la mejor práctica editar el contenido para reflejar el cambio e incluir las ediciones de contenido junto con la solicitud de extracción de eliminación.

## Editar páginas existentes

Para editar una página, necesita encontrar la fuente de la página en nuestro repositorio [content](https://github.com/mdn/content). La forma más fácil de encontrarla es navegar a la página que desea editar, ir al final de la página y hacer clic en el enlace "Ver la fuente en GitHub".

### Vista previa de los cambios

Si está editando la página localmente, para ver cómo se ven sus cambios, puede ir a la carpeta del repositorio de contenido, ejecutar el comando CLI `npm start`, ir a `localhost:5042` en su navegador y navegar a la página y verla. Ingrese el título en el cuadro de búsqueda para encontrarlo fácilmente. La página vista previa se actualizará en el navegador a medida que edite la fuente.

### Adjuntar archivos

Para adjuntar un archivo a su artículo, solo necesita incluirlo en el mismo directorio que el archivo `index.md` del artículo. Incluya el archivo en su página, típicamente a través de un elemento {{htmlelement("a")}}.
