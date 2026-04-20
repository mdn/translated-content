---
title: Cómo crear, editar, mover o eliminar páginas
short-title: Crear, editar, mover o eliminar páginas
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Este artículo describe cómo crear, mover, eliminar o editar una página.
En todos estos casos, es una buena idea revisar nuestras directrices para [Lo que escribimos](/es/docs/MDN/Writing_guidelines/What_we_write) para confirmar si alguna de estas acciones debes ser tomada y discutirlo con el equipo en uno de los [canales de comunicación](/es/docs/MDN/Community/Communication_channels) de MDN Web Docs antes de proceder.

## Crear páginas

Todas las páginas en MDN Web Docs están redactadas en formato Markdown. El contenido se escribe en un archivo llamado `index.md`, que se almacena en su propio directorio único. El nombre del directorio representa el nombre de la página. Por ejemplo, si `align-content` es una nueva propiedad CSS para la cual quieres crear una nueva página de referencia, crearías una carpeta en `en-us/web/css` llamada `align-content` y luego crearías un archivo llamado `index.md` dentro de ella.

> [!NOTE]
> El nombre del directorio difiere ligeramente del slug de la página. En particular, el slug sigue el uso de mayúsculas y minúsculas de la oración.

Hay muchos tipos diferentes de [tipos de páginas](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types) con estructuras específicas y plantillas de página compatibles para ellos, que puedes copiar para empezar.

El archivo `index.md` de un documento debes comenzar con metadatos al inicio que definen `title`, `slug` y `page-type`. La mayor parte de esta información de metadatos se encuentra en las plantillas de página mencionadas anteriormente. Alternativamente, puedes resultarte útil referirte a los metadatos al inicio dentro de un documento similar `index.md`.

El proceso general paso a paso para crear una página sería:

1. Iniciar una rama nueva y actualizada para trabajar.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Ejecuta "yarn" nuevamente para asegurarte de
   # que hayas instalado la última dependencia de Yari.
   yarn
   git checkout -b my-add
   ```

2. Crear uno o varios nuevos directorios de documentos, cada uno con su propio archivo `index.md`.

3. Añadir y confirmar tus nuevos archivos así como subir tu nueva rama a tu copia.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Crea tu pull request (PR).

## Moviendo páginas

Mover uno o más documentos o un árbol completo de documentos es fácil
porque hemos creado un comando especial que se encarga de los detalles por ti:

```bash
yarn content move <from-slug> <to-slug> [locale]
```

Solo tienes que especificar el slug del documento existente que quieres mover (por ejemplo, `Web/HTTP/Authentication`) y el slug de tu nuevo ubicación (por ejemplo, `Web/HTTP/Auth`), opcionalmente seguida por el idioma del documento existente (predeterminado a `en-US`).

Si el documento existente que quieres mover tiene documentos secundarios (es decir, representa un árbol de documentos), el comando `yarn content move` moverá todo el árbol.

Por ejemplo, supongamos que quieres mover todo el `/en-US/Web/HTTP/Authentication` al `/en-US/Web/HTTP/Auth`, realizarías los siguientes pasos:

1. Inicia una nueva rama para trabajar.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Ejecuta "yarn" nuevamente para asegurarte de
   # que se hayan instalado las dependencias más
   # recientes de Yari.
   yarn
   git checkout -b my-move
   ```

2. Realizar el movimiento (que eliminará y modificará los archivos existentes así como creará nuevos archivos).

   ```bash
   yarn content move Web/HTTP/Authentication Web/HTTP/Auth
   ```

3. Una vez que se hayan movido los archivos, necesitasmos actualizar las referencias a esos archivos en otros archivos de contenido. Usa el siguiente comando para actualizar todas las referencias automáticamente de una sola vez:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Añadir y confirmar todos los archivos eliminados, creados y modificados, así como enviar tu rama a tu copia.

   ```bash
   git add .
   git commit -m "Move Web/HTTP/Authentication to Web/HTTP/Auth"
   git push -u origin my-move
   ```

5. Crea tu pull request.

> [!NOTE]
> El comando `yarn content move` añade los redireccionamientos necesarios en el archivo `_redirects.txt` para que la antigua ubicación redirija a la nueva. ¡No edites manualmente el archivo `_redirects.txt`! Pueden introducirse errores fácilmente si lo haces. Si necesitas agregar un redireccionamiento sin mover un archivo, hable con el equipo de MDN Web Docs en los [canales de comunicación de MDN Web Docs](/es/docs/MDN/Community/Communication_channels) al respecto.

## Eliminar páginas

Los documentos solo debesn eliminarse de MDN Web Docs en circunstancias especiales. Si estás pensando en eliminar páginas, por favor habla con el equipo de MDN Web Docs en los [salones de chat de MDN Web Docs](/es/docs/MDN/Community/Communication_channels#chat_rooms) primero.

Eliminar uno o más documentos o un árbol completo de documentos es fácil, al igual que mover páginas, porque hemos creado un comando especial que se encarga de los detalles por ti:

```bash
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> Necesitas usar el comando `yarn content delete` para eliminar páginas de MDN Web Docs. No elimines tus directorios directamente del repositorio. El comando `yarn content delete` también maneja otros cambios necesarios, como actualizar el archivo `_wikihistory.json`.

Solo tienes que especificar el slug del documento existente que quieres eliminar (por ejemplo, `Web/HTTP/Authentication`), opcionalmente seguida por el idioma del documento existente (predeterminado a `en-US`).

Si el documento existente que quieres eliminar tiene documentos secundarios (es decir, representa un árbol de documentos), también debes especificar la opción `-r, --recursive`, de lo contrario, el comando fallará.

Por ejemplo, si quieres eliminar todo el árbol `/en-US/Web/HTTP/Authentication`, realizarías los siguientes pasos:

1. Inicia una nueva rama para trabajar.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Ejecuta "yarn" nuevamente solo para
   # asegurarte de que hayas instalado la
   # última dependencia Yari.
   yarn
   git checkout -b my-delete
   ```

2. Realiza la eliminación.

   ```bash
   yarn content delete Web/HTTP/Authentication --recursive
   ```

3. Añadir un redireccionamiento. La página de destino puede ser una URL externa u otra página en MDN Web Docs.

   ```bash
   yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
   ```

4. Añadir y confirmar todos los archivos eliminados, así como enviar tu rama a tu copia.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

5. Crea tu pull request.

> [!NOTE]
> Si el slug de la página que quieres eliminar contiene caracteres especiales, inclúyala entre comillas, como se muestra a continuación:
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

Eliminar contenido de MDN Web Docs inevitablemente resultará en actualizar el contenido existente también. Como muchos artículos se vinculan entre sí, el contenido eliminado probablemente también será referenciado en otros lugares. Añadir el redireccionamiento mitigará los efectos de eliminar el contenido; sin embargo, es mejor práctica editar el contenido para reflejar el cambio e incluir las ediciones del contenido junto con la solicitud de eliminación (pull request).

## Editar páginas existentes

Para editar una página, necesitas encontrar el origen de la página en nuestro repositorio [content](https://github.com/mdn/content). La forma más fácil de encontrarlo es navegar a la página que quieres editar, ir al fondo de la página y hacer clic en el enlace "Ver el código fuente en GitHub".

### Vista previa de los cambios

Si estás editando la página localmente, para ver cómo se ven tus cambios, puedes ir al directorio del repositorio de contenido, ejecutar el comando CLI `yarn start`, ir a `localhost:5042` en tu navegador y visualizar la página. Escribe el título en el cuadro de búsqueda para encontrarlo fácilmente. La vista previa de la página se actualizará en el navegador a medida que edites el código fuente.

### Adjuntar archivos

Para adjuntar un archivo a tu artículo, solo necesitas incluirlo en el mismo directorio que el archivo `index.md` del artículo. Incluye el archivo en tu página, típicamente mediante un elemento {{htmlelement("a")}}.
