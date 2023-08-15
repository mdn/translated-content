---
title: "Etiquetas complejas: Utilizando ARIA para etiquetas con campos embebidos dentro de ellos"
slug: Web/Accessibility/ARIA/Multipart_labels
---

## Problema

Tiene un formulario donde le pregunta a su usuario una pregunta, pero la respuesta es mencionada en la misma pregunta. Un ejemplo clásico que todos conocemos de las configuraciones de nuestro navegador es la opción "Eliminar el historial despues de x días". "Eliminar el historial despues" está a la izquierda de la caja de texto, x es el número, por ejemplo 21, y la palabra "días" sigue a la caja de texto, formando una oración que es fácil de comprender.

Si se esta usando un lector de pantalla, quizá ha notado que, cuando se van a las configuraciónes de Firefox, el lector dice: ¿"Eliminar el historial después de 21 días"?, seguidamente anuncia que está en una caja de texto y que contiene el número 21. ¿No es super? No necesita navegar alrededor para darse cuenta de la unidad. "Días" podría ser fácilmente "meses" o "años", y en muchos dialogos ordinarios no hay forma de descubrirlo más que navegando utilizando los comandos de revisión del lector de pantalla.

La solución esta en un atributo ARIA llamado **aria-labelledby**. Su parámetro es una cadena de texto que consiste de los IDs de los elementos HTML que se deseen concatenar dentro de un solo nombre accesible.

Tanto **aria-labelledby** y **aria-describedby** se especifican en el elemento de formulario que debe etiquetarse, por ejemplo un \<input>. En ambos casos, la etiqueta for/label para ligar a los controles que puedan existir son anuladas por **aria-labelledby**. Si en una página se provee **aria-labelledby**, se debería colocar también una etiqueta para también soportar navegadores antiguos que no tengan aún soperte ARIA. Con Firefox 3, los usuarios ciegos tendrán automáticamente mejor accesibilidad con el nuevo atributo, pero los usuarios de navadores antiguos de esta forma no son dejados en la oscuridad.

#### Ejemplo

{{EmbedLiveSample('')}}

```html
<input
  aria-labelledby="etiquetaApagado tiempoApagado unidadApagado"
  type="checkbox" />
<span id="etiquetaApagado">Apagar computadora después de </span>
<input
  aria-labelledby="etiquetaApagado tiempoApagado unidadApagado"
  id="tiempoApagado"
  type="text"
  value="10" />
<span id="unidadApagado"> minutos</span>
```

## Nota para usuarios de JAWS 8

JAWS 8.0 tiene su propia lógica para encontrar etiquetas, causando que siempre sobreescriba el nombre accesible que obtiene la caja de texto de un documento HTML. Con JAWS 8, no se ha encontrado una manera de hacer que acepte la etiqueta del ejemplo anterior. Pero NVDA y Window-Eyes funcionan correctamente, Orca on Linux tampoco tiene problemas.

> **Nota:** TBD (pendiente): añadir más información sobre compatiblidad

## ¿Puede hacerse sin ARIA?

Community member Ben Millard has pointed out in a blog post that [controls can be embedded in labels as shown in the above example using HTML 4](http://projectcerbera.com/blog/2008/03#day24), simply by embedding the input into the label. Thanks for that info, Ben! It is very useful and shows that some techniques that have been available for years escape even the gurus sometimes. This technique works in Firefox; however, it doesn't currently work in many other browsers, including IE. For labels with embedded form controls, using **aria-labelledby** is still the best approach.
