---
title: Cómo crear, editar, mover o eliminar páginas
short-title: Crear, editar, mover o eliminar páginas
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: ca0b474bb2e153ce72718cb304306e540065a888
---

Este artículo describe cómo crear, mover, eliminar o editar una página.
En todos estos casos, es recomendable revisar nuestras pautas sobre [Qué escribimos](/es/docs/MDN/Writing_guidelines/What_we_write) para confirmar si alguna de estas acciones es adecuada, y discutirlo con el equipo en uno de los [canales de comunicación](/es/docs/MDN/Community/Communication_channels) de MDN Web Docs antes de proceder.

## Crear páginas

Todas las páginas de MDN Web Docs están redactadas en formato Markdown. El contenido está escrito en un archivo llamado `index.md`, almacenado en su propio directorio. El nombre del directorio representa el nombre de la página. Por ejemplo, si `align-content` es una nueva propiedad CSS para la que deseas crear una página de referencia, crearías un directorio llamado `align-content` dentro de `en-us/web/css` y un archivo `index.md` dentro de ella.

> [!NOTE]
> El nombre del directorio difiere ligeramente del slug de la página. En particular, el slug sigue las convenciones de mayúsculas y minúsculas de una oración.

Existen muchos [tipos de páginas](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types) con estructuras específicas y plantillas de página de apoyo, que puedes copiar para comenzar.

El archivo `index.md` de un documento debe comenzar con un front-matter que defina `title`, `slug` y `page-type`. Toda esta información se encuentra en las plantillas de página mencionadas anteriormente. También puede ser útil consultar el front-matter de un documento similar en su `index.md`.

El proceso general paso a paso para crear una página es el siguiente:

1. Inicia una rama nueva y actualizada en la que trabajar.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Ejecuta "npm install" para asegurarte de que las dependencias están actualizadas.
   npm install
   git checkout -b my-add
   ```

2. Crea uno o varios directorios de documentos nuevos, cada uno con su propio archivo `index.md`.

3. Añade y confirma tus nuevos archivos, y envía tu rama a tu fork.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "mensaje apropiado sobre tus cambios"
   git push -u origin my-add
   ```

4. Crea tu pull request.

## Mover páginas

Mover uno o más documentos, o un árbol completo de documentos, es sencillo porque hemos creado un comando especial que gestiona los detalles por ti:

```bash
npm run content move <from-slug> <to-slug> [locale]
```

Solo debes especificar el slug del documento existente que deseas mover (por ejemplo, `Web/HTTP/Guides/Authentication`) y el slug de su nueva ubicación (por ejemplo, `Web/HTTP/Guides/Auth`), seguido opcionalmente del idioma del documento existente (por defecto `en-US`).

Si el documento que deseas mover tiene documentos secundarios (es decir, representa un árbol de documentos), el comando `npm run content move` moverá todo el árbol.

Por ejemplo, para mover todo `/en-US/Web/HTTP/Guides/Authentication` a `/en-US/Web/HTTP/Guides/Auth`, sigue estos pasos:

1. Inicia una rama nueva en la que trabajar.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Ejecuta "npm install" de nuevo para asegurarte de que las dependencias están actualizadas.
   npm install
   git checkout -b my-move
   ```

2. Realiza el movimiento (que eliminará y modificará archivos existentes, y creará archivos nuevos).

   ```bash
   npm run content move Web/HTTP/Guides/Authentication Web/HTTP/Guides/Auth
   ```

3. Una vez movidos los archivos, actualiza las referencias a esos archivos en el resto del contenido. Usa el siguiente comando para actualizar todas las referencias automáticamente de una sola vez:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Añade y confirma todos los archivos eliminados, creados y modificados, y envía tu rama a tu fork.

   ```bash
   git add .
   git commit -m "Mover Web/HTTP/Guides/Authentication a Web/HTTP/Guides/Auth"
   git push -u origin my-move
   ```

5. Crea tu pull request.

> [!NOTE]
> El comando `npm run content move` añade los redireccionamientos necesarios en el archivo `_redirects.txt` para que la ubicación antigua redirija a la nueva. No edites el archivo `_redirects.txt` manualmente: pueden introducirse errores con facilidad. Si necesitas añadir un redireccionamiento sin mover un archivo, habla con el equipo de MDN Web Docs en los [canales de comunicación de MDN Web Docs](/es/docs/MDN/Community/Communication_channels).

## Eliminar páginas

Los documentos solo deben eliminarse de MDN Web Docs en circunstancias especiales. Si estás pensando en eliminar páginas, habla primero con el equipo de MDN Web Docs en las [salas de chat de MDN Web Docs](/es/docs/MDN/Community/Communication_channels#chat_rooms).

> [!NOTE]
> Esta sección trata sobre la eliminación de páginas individuales o árboles de páginas. Si necesitas retirar una sección completa de contenido de MDN, consulta la guía [Retirar contenido](/es/docs/MDN/Writing_guidelines/Howto/Retiring_content).

Eliminar uno o más documentos, o un árbol completo de documentos, es sencillo, igual que mover páginas, porque hemos creado un comando especial que gestiona los detalles por ti:

```bash
npm run content delete <document-slug> [locale] -- --redirect <redirect-slug-or-url>
```

Al redirigir, la página de destino puede ser una URL externa u otra página de MDN Web Docs.

> [!NOTE]
> Debes usar el comando `npm run content delete` para eliminar páginas de MDN Web Docs. No elimines sus directorios directamente del repositorio. El comando `npm run content delete` también gestiona otros cambios necesarios, como la actualización del archivo `_wikihistory.json`.

Solo debes especificar el slug del documento existente que deseas eliminar (por ejemplo, `Web/HTTP/Guides/Authentication`), seguido opcionalmente del idioma del documento existente (por defecto `en-US`).

Si el documento que deseas eliminar tiene documentos secundarios (es decir, representa un árbol de documentos), también debes especificar la opción `-r, --recursive`; de lo contrario, el comando fallará.

Por ejemplo, para eliminar todo el árbol `/en-US/Web/HTTP/Guides/Authentication`, sigue estos pasos:

1. Inicia una rama nueva en la que trabajar.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Ejecuta "npm install" de nuevo para asegurarte de que las dependencias están actualizadas.
   npm install
   git checkout -b my-delete
   ```

2. Realiza la eliminación con un redireccionamiento.

   ```bash
   npm run content delete Web/HTTP/Guides/Authentication --recursive -- --redirect /en-US/path/of/target/page
   ```

3. Añade y confirma todos los archivos eliminados, y envía tu rama a tu fork.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

4. Crea tu pull request.

> [!NOTE]
> Si el slug de la página que deseas eliminar contiene caracteres especiales, inclúyelo entre comillas:
>
> ```bash
> npm run content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)" -- --redirect <redirect-slug-or-url>
> ```

Eliminar contenido de MDN Web Docs implica inevitablemente actualizar el contenido existente. Dado que muchos artículos se enlazan entre sí, el contenido eliminado probablemente estará referenciado en otros lugares. Añadir el redireccionamiento reducirá el impacto de la eliminación; sin embargo, la mejor práctica es editar el contenido para reflejar el cambio e incluir esas ediciones junto con el pull request de eliminación.

## Editar páginas existentes

Para editar una página, debes encontrar el código fuente de la página en nuestro repositorio [content](https://github.com/mdn/content). La forma más sencilla de encontrarlo es navegar a la página que deseas editar, desplazarte hasta el pie de la página y hacer clic en el enlace "Ver el código fuente en GitHub".

### Previsualizar cambios

Si estás editando la página localmente, para previsualizar tus cambios puedes ir al directorio del repositorio de contenido, ejecutar el comando `npm start`, abrir `localhost:5042` en tu navegador y navegar a la página. Escribe el título en el cuadro de búsqueda para encontrarla fácilmente. La vista previa de la página se actualizará en el navegador a medida que edites el código fuente.

### Adjuntar archivos

Para adjuntar un archivo a tu artículo, solo debes incluirlo en el mismo directorio que el archivo `index.md` del artículo. Incluye el archivo en tu página, normalmente mediante un elemento {{htmlelement("a")}}.
