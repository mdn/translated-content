---
title: Arrastrar y soltar
slug: Web/API/HTML_Drag_and_Drop_API
tags:
  - HTML5
  - XUL
translation_of: Web/API/HTML_Drag_and_Drop_API
original_slug: DragDrop/Drag_and_Drop
---
<p>Firefox y otras aplicaciones de Mozilla admiten una serie de características para gestionar la funcionalidad de arrastrar y soltar. Esto le permite al usuario hacer clic y mantener presionado el botón del ratón/mouse sobre un elemento, arrastrarlo a otra ubicación y soltarlo para colocar el elemento allí. Al puntero le seguirá una representación transparente de lo que se está arrastrando durante la operación. La ubicación de destino puede ser una aplicación diferente. Sitios web, extensiones y aplicaciones XUL pueden hacer uso de esta funcionalidad para personalizar los elementos que pueden ser arrastrados, evaluar la operación, así como especificar el lugar donde los elementos se pueden soltar.</p>
<div class="note"> Esta sección trata sobre la funcionalidad de arrastrar y soltar en Firefox 3.5 (Gecko 1.9.1) y versiones posteriores. Consulta la <a href="/en-US/docs/Drag_and_Drop" title="/en-US/docs/Drag_and_Drop">documentación de la API anterior</a> para Firefox 3.0 y versiones anteriores.</div>


<h2 id="Elementos_básicos_de_arrastrar_y_soltar">Elementos básicos de arrastrar y soltar</h2>
<p>Cuando comienza una operación de arrastre, se puede proporcionar una serie de datos:</p>
<ul>
	<li>los datos que se van a arrastrar, que pueden ser de varios formatos diferentes. Por ejemplo, datos de texto que contienen una cadena de texto que se va a arrastrar. Para obtener más información al respecto, consulta <a href="/en-US/docs/DragDrop/Drag_Operations#dragdata" title="/en-US/docs/DragDrop/Drag_Operations#dragdata">Datos de la operación de arrastre</a> .</li>
	<li>la imagen de confirmación sobre la operación de arrastre que aparece junto al puntero durante la operación. Esta imagen puede personalizarse, sin embargo, la mayoría de las veces, no se especifica y se genera una imagen por defecto basándose en el elemento donde se ha pulsado el ratón/mouse. Para obtener más información acerca de estas imágenes, consulta <a href="/en-US/docs/DragDrop/Drag_Operations#dragfeedback" title="/en-US/docs/DragDrop/Drag_Operations#dragfeedback">Configurar la imagen de confirmación sobre la operación de descarga</a> .</li>
	<li>efectos de arrastre que se permiten. Son posibles tres efectos: <code>copy</code> para indicar que los datos que se arrastran se copiarán desde su ubicación actual a la ubicación de destino, <code>move</code> para indicar que los datos que se arrastran serán movidos y <code>link</code> para indicar que se creará algún tipo de relación o conexión entre la ubicación actual y la ubicación de destino. Durante la operación, se pueden modificar los efectos de arrastre y especificar cuáles en concreto se permiten en determinadas ubicaciones. Si se permite, se puede realizar una operación de colocación en esa ubicación. Consulta <a href="/en-US/docs/DragDrop/Drag_Operations#drageffects" title="/en-US/docs/DragDrop/Drag_Operations#drageffects">Efectos de arrastre</a> para obtener más detalles.</li>
</ul>
<p>Mozilla y Firefox admiten una serie de características que no se encuentran en el modelo estándar de arrastrar y soltar. Estas te permiten arrastrar elementos múltiples y arrastrar datos que no son cadenas. Para obtener más información, consulta <a href="/en-US/docs/DragDrop/Dragging_and_Dropping_Multiple_Items" title="/en-US/docs/DragDrop/Dragging_and_Dropping_Multiple_Items">Arrastrar y soltar múltiples elementos</a> .</p>
<p>Para obtener una lista de tipos de datos comunes utilizados para arrastrar y soltar, consulta <a href="/en-US/docs/DragDrop/Recommended_Drag_Types" title="/en-US/docs/DragDrop/Recommended_Drag_Types">Tipos de operaciones de arrastre recomendados</a>.</p>
<p>Está disponible una referencia rápida para los procedimientos recomendados en la operación de arrastre de los siguientes tipos de elementos:</p>
<ul>
	<li><a href="/en-US/docs/DragDrop/Recommended_Drag_Types#text" title="/en-US/docs/DragDrop/Recommended_Drag_Types#text">Texto</a></li>
	<li><a href="/en-US/docs/DragDrop/Recommended_Drag_Types#link" title="/en-US/docs/DragDrop/Recommended_Drag_Types#link">Enlaces</a></li>
	<li><a href="/en-US/docs/DragDrop/Recommended_Drag_Types#html" title="/en-US/docs/DragDrop/Recommended_Drag_Types#html">HTML y XML</a></li>
	<li><a href="/en-US/docs/DragDrop/Recommended_Drag_Types#file" title="/en-US/docs/DragDrop/Recommended_Drag_Types#file">Archivos</a></li>
	<li><a href="/en-US/docs/DragDrop/Recommended_Drag_Types#image" title="/en-US/docs/DragDrop/Recommended_Drag_Types#image">Imágenes</a></li>
	<li><a href="/en-US/docs/DragDrop/Recommended_Drag_Types#node" title="/en-US/docs/DragDrop/Recommended_Drag_Types#node">Nodos de documento</a></li>
</ul>
<p>Consulta <a href="/en-US/docs/DragDrop/DataTransfer" title="/en-US/docs/DragDrop/DataTransfer">DataTransfer</a> para tener una referencia al objeto DataTransfer.</p>


<h2 id="events" name="events">Eventos de arrastre</h2>
<p>Se utilizan una serie de eventos que se ejecutan durante las diversas etapas de la operación de arrastre y colocación. Ten en cuenta que se ejecutan sólo los eventos de arrastre, los eventos del ratón/mouse como <code>mousemove</code> no se ejecutan durante una operación de arrastre.</p>
<p>La propiedad <a href="/en-US/docs/DragDrop/DataTransfer" title="/en-US/docs/DragDrop/DataTransfer">dataTransfer</a> de todos los eventos de arrastre contiene datos sobre la operación de arrastre y colocación.</p>


<dl>
	<dt>dragstart</dt>
	<dd>Se ejecuta sobre un elemento cuando se inicia una operación de arrastre. El usuario está solicitando arrastrar el elemento al que dispara el evento dragstart. Durante este evento, un proceso de escucha ajustará cierto tipo de información como los datos de la operación de arrastre y la imagen que se asocia con ella. Para obtener más información al respecto, consulta <a href="/en-US/docs/DragDrop/Drag_Operations#dragstart" title="/en-US/docs/DragDrop/Drag_Operations#dragstart">Inicio de una operación de arrastre</a> .</dd>
	<dt>dragenter</dt>
	<dd>Se dispara cuando el ratón/mouse se mueve primero sobre un elemento, mientras está teniendo lugar una operación de arrastre. Un proceso de escucha de este evento debe indicar si se permite una operación de arrastre sobre esta ubicación. Si no hay procesos de escucha o éstos no realizan ninguna operación, entonces no se permite, de manera predeterminada, una operación de arrastre. Este es también el evento al que escuchar si deseas proporcionar información acerca de que se permite una operación de arrastre, como, por ejemplo, mostrar un resaltado o un marcador de inserción. Para obtener más información al respecto, consulta <a href="/en-US/docs/DragDrop/Drag_Operations#droptargets" title="/en-US/docs/DragDrop/Drag_Operations#droptargets">Especificación de destinos de colocación</a> .</dd>
	<dt>dragover</dt>
	<dd>Este evento se activa cuando el ratón/mouse se mueve sobre un elemento cuando está teniendo lugar una operación de arrastre. Gran parte del tiempo, la operación que tiene lugar durante un proceso de escucha será la misma que el evento dragenter. Para obtener más información al respecto, consulta <a href="/en-US/docs/DragDrop/Drag_Operations#droptargets" title="/en-US/docs/DragDrop/Drag_Operations#droptargets">Especificación de destinos de colocación</a>.</dd>
	<dt>dragleave</dt>
	<dd>Este evento se activa cuando el ratón/mouse sale de un elemento mientras que está teniendo lugar una operación de arrastre. Los procesos de escucha deben eliminar cualquier resaltado o marcador de inserción que usan para la información sobre el proceso de arrastre.</dd>
	<dt>drag</dt>
	<dd>Este evento se activa en el origen del arrastre, es decir, el elemento donde dragstart fue disparado, durante la operación de arrastre.</dd>
	<dt>drop</dt>
	<dd>El evento se dispara sobre el elemento en el que se produjo la colocación al finalizar la operación de arrastre. Un proceso de escucha se encargará de recuperar los datos que se arrastran e insertarlos en la ubicación de la colocación. Este evento sólo se activará si se desea disponer de la funcionalidad de soltar. No se activará si el usuario cancela la operación de arrastre, por ejemplo, pulsando la tecla Escape, o si se liberó el botón del ratón/mouse mientras que éste no estaba sobre un destino de colocación válido. Para más información sobre esto, consulta <a href="/en-US/docs/DragDrop/Drag_Operations#drop" title="/en-US/docs/DragDrop/Drag_Operations#drop">Realizar una operación de colocación</a>.</dd>
	<dt>dragend</dt>
	<dd>El origen del arrastre recibirá un evento dragend cuando la operación se haya completado, tanto si tuvo éxito como si no. Consulta <a href="/en-US/docs/DragDrop/Drag_Operations#dragend" title="/en-US/docs/DragDrop/Drag_Operations#dragend">Finalizar una operación de arrastre</a> si deseas más información.</dd>
</dl>
