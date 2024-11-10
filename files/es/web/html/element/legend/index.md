---
title: legend
slug: Web/HTML/Element/legend
---

{{HTMLSidebar}}

### Definición

- El elemento \<legend> (leyenda) crea un título para un grupos los campos ({{ HTMLElement("fieldset") }}) de un formulario.

  - : **Sus etiquetas son**: \<legend> y \</legend> (ambas obligatorias).

    **Crea una caja**: [en bloque](/es/HTML/Elemento/Tipos_de_elementos#en_bloque)

    **Está definido como**:

    **Debe contener**: cero o más elementos [en linea](/es/HTML/Elemento/Tipos_de_elementos#en_linea)

    **Debe estar contenido por**: debe ser el primer hijo de un elemento {{ HTMLElement("fieldset") }}

#### Atributos

<table class="standard-table">
  <tbody>
    <tr>
      <th>Atributo</th>
      <th colspan="2">valor</th>
      <th>descripción</th>
    </tr>
    <tr>
      <th colspan="4">Genéricos</th>
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
      <td>lista de clases separadas por espacios</td>
      <td>implícito</td>
      <td>identificador a nivel de documento</td>
    </tr>
    <tr>
      <td><code style="color: green">dir</code></td>
      <td>uno de los siguientes:"ltr" o "rtl"</td>
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
      <td><code style="color: green">accesskey</code></td>
      <td>un caracter</td>
      <td>implícito</td>
      <td>carácter de la tecla de acceso rápido</td>
    </tr>
    <tr>
      <th colspan="4">de transición</th>
    </tr>
    <tr>
      <td><code style="color: green">align</code></td>
      <td>uno de los siguientes: "top", "bottom", "left" o "right"</td>
      <td>implícito</td>
      <td>alineación con relación al fieldset</td>
    </tr>
    <tr>
      <th>Atributo</th>
      <th colspan="2">valor</th>
      <th>descripción</th>
    </tr>
  </tbody>
</table>

### Ejemplos

```
<form>
  <fieldset>
    <legend>Información Personal</legend>
    <label for="nombre">Nombre:</label>
    <input name="nombre" id="nombre" type="text" tabindex="1" />
    <label for="apellidos">Apellidos:</label>
    <input name="apellidos" id="apellidos" type="text" tabindex="2" />
  </fieldset>

  <fieldset>
    <legend>Edad</legend>
    <label><input type="checkbox" tabindex="20" name="edad" value="20-39" /> 20-39</label>
    <label><input type="checkbox" tabindex="21" name="edad" value="40-59" /> 40-59</label>
    <label><input type="checkbox" tabindex="22" name="edad" value="60-79" /> 60-79</label>
  </fieldset>
</form>
```
