---
title: Drag & Drop archivo
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Las interfaces Drag-and-Drop posibilitan arrastrar y soltar archivos en una página web. En este documento se describe cómo una aplicación puede aceptar uno, o más, archivos que son arrastrados desde el _explorador de archivos_ de la plataforma y soltados en una página web.

Los pasos principales para configurar Drag-and-drop son: 1) definir una "zona drop (_drop zone),_ es decir, definir un elemento donde se podrá soltar el archivo; y 2) definir funciones para la gestión de los eventos [`drop`](/es/docs/Web/Reference/Events/drop) y [`dragover`](/es/docs/Web/Reference/Events/dragover). Estos pasos se describen a continuación, tambien se incluyen ejemplos snippets de código. El código fuente completo está disponible en el [repositorio drag-and-drop de MDN](https://github.com/mdn/dom-examples/tree/master/drag-and-drop) (cualquier sugerencia o tema que revisar es bienvenido).

> **Nota:** Nota: {{domxref("HTML_Drag_and_Drop_API","HTML drag and drop")}} define 2 diferentes APIs para soportar drag and drop de archivos. Una API es la interfaz {{domxref("DataTransfer")}} y la segunda API son las interfaces {{domxref("DataTransferItem")}} y {{domxref("DataTransferItemList")}}. Este ejemplo ilustra el uso de ambas APIs (y no usa ninguna interfaz específica de Gecko).

## Define la zona "drop" \[drop zone]

Es necesario configurar un evento [`drop`](/es/docs/Web/Reference/Events/drop) en el objeto sobre el cual se soltará el objeto arrastrado. Este evento llamará una función global {{domxref("GlobalEventHandlers.ondrop","ondrop")}} que recibe los datos del objeto arrastrado. El siguiente código muestra cómo se hace con un elemento {{HTMLelement("div")}}:

```html
<div id="drop_zone" ondrop="dropHandler(event);">
  <p>Arrastra y suelta uno o más archivos a esta zona ...</p>
</div>
```

Normalmente, una aplicación incluirá una función de gestión de eventos [`dragover`](/es/docs/Web/Reference/Events/dragover) en el elemento objetivo del arrastre y esa función desactivará el comportamiento de arrastre por defecto del browser. Para añadir esta función necesita incluir una función global {{domxref("GlobalEventHandlers.ondragover","ondragover")}}:

```html
<div
  id="drop_zone"
  ondrop="dropHandler(event);"
  ondragover="dragOverHandler(event);">
  <p>Arrastra y suelta uno o más archivos a esta zona ...</p>
</div>
```

Por último, puede que una aplicación quiera personalizar el estilo del elemento objetivo del arrastre para indicar visualmente que es una zona drag and drop. En este ejemplo, el elemento objetivo usa el siguiente estilo:

```css
#drop_zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

> **Nota:** Fíjese que los eventos `dragstart` y `dragend` no son activados cuando se arrastra un archivo al browser desde el SO.

## Procesar la acción de soltar \[drop]

El evento [`drop`](/es/docs/Web/Reference/Events/drop) se ejecuta cuando el usuario suelta el o los archivos. En el siguiente manejador, si el navegador sorporta la interfaz {{domxref("DataTransferItemList")}} , el método {{domxref("DataTransferItem.getAsFile","getAsFile()")}} se utiliza para acceder cada fichero; de lo contrario la propiedad {{domxref("DataTransfer")}} de la interfaz {{domxref("DataTransfer.files","files")}} es usada para acceder cada archivo.

El ejemplo siguiente muestra como escribir el nombre de cada fichero arrastrado en la consola. En una aplicación _real_, se querrá procesar un archivo usando {{domxref("File","File API")}}.

Nótese que en este ejemplo, cualquier item arrastrado que no sea un archivo es ignorado.

```js
function dropHandler(ev) {
  console.log("Fichero(s) arrastrados");

  // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // Si los elementos arrastrados no son ficheros, rechazarlos
      if (ev.dataTransfer.items[i].kind === "file") {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log("... file[" + i + "].name = " + file.name);
      }
    }
  } else {
    // Usar la interfaz DataTransfer para acceder a el/los archivos
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log(
        "... file[" + i + "].name = " + ev.dataTransfer.files[i].name,
      );
    }
  }

  // Pasar el evento a removeDragData para limpiar
  removeDragData(ev);
}
```

## Prevenir el comportamiento default de arrastrado en el browser

El siguiente evento [`dragover`](/es/docs/Web/Reference/Events/dragover) llama a {{domxref("Event.preventDefault","preventDefault()")}} para deshabilitar (turn off) la respuesta estandar drag-and-drop del browser.

```js
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
```

## Limpieza (Cleanup)

Typically, an application may want to perform some cleanup by deleting the file drag data. In this example, the drop event is passed along from drop handler to a custom function called removeDragData. If the browser supports the {{domxref("DataTransferItemList")}} interface, the list's {{domxref("DataTransferItemList.clear","clear()")}} method is used to delete the file drag data; otherwise the {{domxref("DataTransfer")}} object's {{domxref("DataTransfer.clearData","clearData()")}} method is used to delete the data.

```js
function removeDragData(ev) {
  console.log("Removing drag data");

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to remove the drag data
    ev.dataTransfer.items.clear();
  } else {
    // Use DataTransfer interface to remove the drag data
    ev.dataTransfer.clearData();
  }
}
```

## See also

- [HTML Drag and Drop API](/es/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/es/docs/Web/Guide/HTML/Drag_operations)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
