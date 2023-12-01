---
title: ins
slug: Web/HTML/Element/ins
---

### Definición

- El elemento `ins` (insertado) marca las partes de un texto que han sido añadidos al documento.

  - : **Sus etiquetas son**: \<ins> e \</ins> (ambas obligatorias).

    **Crea una caja**: a veces [en linea](/es/HTML/Elemento/Tipos_de_elementos#en_linea) a veces [en bloque](/es/HTML/Elemento/Tipos_de_elementos#en_bloque).

    **Está definido como**:

    **Puede contener**: depende, si actua como un elemento en bloque puede contener elementos en bloque. Pero si actua como un elemento en linea solo podrá contener elementos en linea.

#### Atributos

<table class="standard-table">
  <tbody>
    <tr>
      <th>Atributo</th>
      <th colspan="2">valor</th>
      <th>descripción</th>
    </tr>
    <tr>
      <th colspan="4">Genericos</th>
    </tr>
    <tr>
      <td><code style="color: green">title</code></td>
      <td>texto</td>
      <td>implícito</td>
      <td>título consultivo del elemento.</td>
    </tr>
    <tr>
      <td><code style="color: green">style</code></td>
      <td>reglas de estilo</td>
      <td>implícito</td>
      <td>información de estilo en línea.</td>
    </tr>
    <tr>
      <td><code style="color: green">id</code></td>
      <td>ID</td>
      <td>implícito</td>
      <td>identificador único a nivel de documento.</td>
    </tr>
    <tr>
      <td><code style="color: green">class</code></td>
      <td>CDATA</td>
      <td>implícito</td>
      <td>
        identificador a nivel de documento, lista de clases separadas por
        espacios.
      </td>
    </tr>
    <tr>
      <td><code style="color: green">dir</code></td>
      <td>(ltr|rtl)</td>
      <td>implícito</td>
      <td>dirección del texto débil/neutral</td>
    </tr>
    <tr>
      <td><code style="color: green">lang</code></td>
      <td>código de idioma</td>
      <td>implícito</td>
      <td>información sobre el idioma</td>
    </tr>
    <tr>
      <td colspan="4">
        <strong>Eventos</strong>:
        <code style="color: green"
          >onclick, ondblclick, onmousedown, onmouseup, onmouseover,
          onmousemove, onmouseout, onkeypress, onkeydown, onkeyup.</code
        >
      </td>
    </tr>
    <tr>
      <th colspan="4">Específicos</th>
    </tr>
    <tr>
      <td><code style="color: green">cite</code></td>
      <td>URI</td>
      <td>implícito</td>
      <td>información sobre el cambio</td>
    </tr>
    <tr>
      <td><code style="color: green">datetime</code></td>
      <td>fecha</td>
      <td>implícito</td>
      <td>fecha y hora del cambio</td>
    </tr>
    <tr>
      <th colspan="4">de transición</th>
    </tr>
    <tr>
      <td colspan="4">
        No tiene, o dicho de otra manera, tiene los mismos que en el doctype
        estricto
      </td>
    </tr>
    <tr>
      <th>Atributo</th>
      <th colspan="2">valor</th>
      <th>descripción</th>
    </tr>
  </tbody>
</table>

### Ejemplos

El siguiente código:

```html
Ejemplo de ins en linea:
<p>El agua es insipida, <ins>inodora e incolora.</ins></p>

Ejemplo de ins en bloque:
<p>El agua es insipida.</p>
<ins> <p>Y además inodora e incolora.</p> </ins>
```

Se visualiza así:

{{EmbedLiveSample}}

### Comentarios
