---
title: Arrastrar y soltar
slug: Web/API/HTML_Drag_and_Drop_API
---

Firefox y otras aplicaciones de Mozilla admiten una serie de características para gestionar la funcionalidad de arrastrar y soltar. Esto le permite al usuario hacer clic y mantener presionado el botón del ratón/mouse sobre un elemento, arrastrarlo a otra ubicación y soltarlo para colocar el elemento allí. Al puntero le seguirá una representación transparente de lo que se está arrastrando durante la operación. La ubicación de destino puede ser una aplicación diferente. Sitios web, extensiones y aplicaciones XUL pueden hacer uso de esta funcionalidad para personalizar los elementos que pueden ser arrastrados, evaluar la operación, así como especificar el lugar donde los elementos se pueden soltar.

> **Nota:** Esta sección trata sobre la funcionalidad de arrastrar y soltar en Firefox 3.5 (Gecko 1.9.1) y versiones posteriores. Consulta la [documentación de la API anterior](/es/docs/Drag_and_Drop) para Firefox 3.0 y versiones anteriores.

## Elementos básicos de arrastrar y soltar

Cuando comienza una operación de arrastre, se puede proporcionar una serie de datos:

- los datos que se van a arrastrar, que pueden ser de varios formatos diferentes. Por ejemplo, datos de texto que contienen una cadena de texto que se va a arrastrar. Para obtener más información al respecto, consulta [Datos de la operación de arrastre](/es/docs/DragDrop/Drag_Operations#dragdata) .
- la imagen de confirmación sobre la operación de arrastre que aparece junto al puntero durante la operación. Esta imagen puede personalizarse, sin embargo, la mayoría de las veces, no se especifica y se genera una imagen por defecto basándose en el elemento donde se ha pulsado el ratón/mouse. Para obtener más información acerca de estas imágenes, consulta [Configurar la imagen de confirmación sobre la operación de descarga](/es/docs/DragDrop/Drag_Operations#dragfeedback) .
- efectos de arrastre que se permiten. Son posibles tres efectos: `copy` para indicar que los datos que se arrastran se copiarán desde su ubicación actual a la ubicación de destino, `move` para indicar que los datos que se arrastran serán movidos y `link` para indicar que se creará algún tipo de relación o conexión entre la ubicación actual y la ubicación de destino. Durante la operación, se pueden modificar los efectos de arrastre y especificar cuáles en concreto se permiten en determinadas ubicaciones. Si se permite, se puede realizar una operación de colocación en esa ubicación. Consulta [Efectos de arrastre](/es/docs/DragDrop/Drag_Operations#drageffects) para obtener más detalles.

Mozilla y Firefox admiten una serie de características que no se encuentran en el modelo estándar de arrastrar y soltar. Estas te permiten arrastrar elementos múltiples y arrastrar datos que no son cadenas. Para obtener más información, consulta [Arrastrar y soltar múltiples elementos](/es/docs/DragDrop/Dragging_and_Dropping_Multiple_Items) .

Para obtener una lista de tipos de datos comunes utilizados para arrastrar y soltar, consulta [Tipos de operaciones de arrastre recomendados](/es/docs/DragDrop/Recommended_Drag_Types).

Está disponible una referencia rápida para los procedimientos recomendados en la operación de arrastre de los siguientes tipos de elementos:

- [Texto](/es/docs/DragDrop/Recommended_Drag_Types#text)
- [Enlaces](/es/docs/DragDrop/Recommended_Drag_Types#link)
- [HTML y XML](/es/docs/DragDrop/Recommended_Drag_Types#html)
- [Archivos](/es/docs/DragDrop/Recommended_Drag_Types#file)
- [Imágenes](/es/docs/DragDrop/Recommended_Drag_Types#image)
- [Nodos de documento](/es/docs/DragDrop/Recommended_Drag_Types#node)

Consulta [DataTransfer](/es/docs/DragDrop/DataTransfer) para tener una referencia al objeto DataTransfer.

## Eventos de arrastre

Se utilizan una serie de eventos que se ejecutan durante las diversas etapas de la operación de arrastre y colocación. Ten en cuenta que se ejecutan sólo los eventos de arrastre, los eventos del ratón/mouse como `mousemove` no se ejecutan durante una operación de arrastre.

La propiedad [dataTransfer](/es/docs/DragDrop/DataTransfer) de todos los eventos de arrastre contiene datos sobre la operación de arrastre y colocación.

- dragstart
  - : Se ejecuta sobre un elemento cuando se inicia una operación de arrastre. El usuario está solicitando arrastrar el elemento al que dispara el evento dragstart. Durante este evento, un proceso de escucha ajustará cierto tipo de información como los datos de la operación de arrastre y la imagen que se asocia con ella. Para obtener más información al respecto, consulta [Inicio de una operación de arrastre](/es/docs/DragDrop/Drag_Operations#dragstart) .
- dragenter
  - : Se dispara cuando el ratón/mouse se mueve primero sobre un elemento, mientras está teniendo lugar una operación de arrastre. Un proceso de escucha de este evento debe indicar si se permite una operación de arrastre sobre esta ubicación. Si no hay procesos de escucha o éstos no realizan ninguna operación, entonces no se permite, de manera predeterminada, una operación de arrastre. Este es también el evento al que escuchar si deseas proporcionar información acerca de que se permite una operación de arrastre, como, por ejemplo, mostrar un resaltado o un marcador de inserción. Para obtener más información al respecto, consulta [Especificación de destinos de colocación](/es/docs/DragDrop/Drag_Operations#droptargets) .
- dragover
  - : Este evento se activa cuando el ratón/mouse se mueve sobre un elemento cuando está teniendo lugar una operación de arrastre. Gran parte del tiempo, la operación que tiene lugar durante un proceso de escucha será la misma que el evento dragenter. Para obtener más información al respecto, consulta [Especificación de destinos de colocación](/es/docs/DragDrop/Drag_Operations#droptargets).
- dragleave
  - : Este evento se activa cuando el ratón/mouse sale de un elemento mientras que está teniendo lugar una operación de arrastre. Los procesos de escucha deben eliminar cualquier resaltado o marcador de inserción que usan para la información sobre el proceso de arrastre.
- drag
  - : Este evento se activa en el origen del arrastre, es decir, el elemento donde dragstart fue disparado, durante la operación de arrastre.
- drop
  - : El evento se dispara sobre el elemento en el que se produjo la colocación al finalizar la operación de arrastre. Un proceso de escucha se encargará de recuperar los datos que se arrastran e insertarlos en la ubicación de la colocación. Este evento sólo se activará si se desea disponer de la funcionalidad de soltar. No se activará si el usuario cancela la operación de arrastre, por ejemplo, pulsando la tecla Escape, o si se liberó el botón del ratón/mouse mientras que éste no estaba sobre un destino de colocación válido. Para más información sobre esto, consulta [Realizar una operación de colocación](/es/docs/DragDrop/Drag_Operations#drop).
- dragend
  - : El origen del arrastre recibirá un evento dragend cuando la operación se haya completado, tanto si tuvo éxito como si no. Consulta [Finalizar una operación de arrastre](/es/docs/DragDrop/Drag_Operations#dragend) si deseas más información.
