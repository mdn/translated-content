---
title: fieldset
slug: Web/HTML/Element/fieldset
---

### Definición

- El elemento [fieldset](/es/HTML/Elemento/fieldset) (grupo de campos) permite organizar en grupos los campos de un formulario.

  - : **Sus etiquetas son**: \<fieldset> y \</fieldset> (ambas obligatorias).

    **Crea una caja**: [en bloque](/es/HTML/Elemento/Tipos_de_elementos#en_bloque).

    **Está definido como**: [Elemento en bloque](/es/HTML/Elemento/Tipos_de_elementos#en_bloque).

    **Puede contener**: un elemento [legend](/es/HTML/Elemento/legend) (opcional), y despues cero o más elementos [en bloque](/es/HTML/Elemento/Tipos_de_elementos#en_bloque) o [en linea](/es/HTML/Elemento/Tipos_de_elementos#en_linea)

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
      <td colspan="4">No tiene</td>
    </tr>
    <tr>
      <th colspan="4">de transición</th>
    </tr>
    <tr>
      <td colspan="4">No tiene</td>
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

```
<form>

 <fieldset>
  <legend>Información Personal</legend>
  Nombre: <input name='nombre' type='text' tabindex='1'>
  Apellidos: <input name='apellidos' type='text' tabindex='2'>
 </fieldset>

 <fieldset>
  <legend>edad</legend>
  <input type='checkbox' tabindex='20'
            name='edad' value='20-39' > 20-39
  <input type='checkbox' tabindex='21'
            name='edad' value='40-59' > 40-59
  <input type='checkbox' tabindex='22'
            name='edad' value='60-79' > 60-79
 </fieldset>

</form>
```
