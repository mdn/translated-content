---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
tags:
  - Atributos globales
  - HTML
  - Referencia
translation_of: Web/HTML/Global_attributes/accesskey
original_slug: Web/HTML/Atributos_Globales/accesskey
---
{{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **accesskey** provee un indicio para generar un atajo de teclado para el elemento actual . Este atributo consiste en una lista de caracteres separada por espacios (un único punto de código Unicode). El explorador usa el primero que existe en la distribución del teclado de la computadora .

La operación para activar el accesskey depende del explorador y su plataforma .

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Linux</th>
      <th>Mac</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td colspan="2" rowspan="1">
        <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>tecla</em></kbd>
      </td>
      <td>
        En Firefox 14 o posteriores, <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>tecla</em></kbd
        ><br />En Firefox 13 o anteriores, <kbd>Control</kbd> +
        <kbd><em>tecla</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Internet Explorer</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>tecla</em></kbd>
      </td>
      <td colspan="2" rowspan="1">N/A</td>
    </tr>
    <tr>
      <th>Google Chrome</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>tecla</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>tecla</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Safari</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>tecla</em></kbd>
      </td>
      <td>N/A</td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>tecla</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera</th>
      <td colspan="3" rowspan="1">
        <kbd>Shift</kbd> + <kbd>Esc</kbd> abre una lista de contenidos , los
        cuales son accesibles a través de accesskey , después se puede elegir un
        item presionando <kbd><em>tecla</em></kbd>
      </td>
    </tr>
  </tbody>
</table>

Notar que Firefox puede personalizar la tecla de modificación requerida por las preferencias del usuario .

## Especificaciones

| Especificación                                                                                                   | Estatus                          | Comentario                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#the-accesskey-attribute", "accesskey")}} | {{Spec2('HTML WHATWG')}} | Sin cambio desde el útlimo snapshot {{SpecName('HTML5.1')}}                                                                                                                                                                                                                |
| {{SpecName('HTML5.1', "editing.html#the-accesskey-attribute", "accesskey")}}             | {{Spec2('HTML5.1')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, sin cambio desde {{SpecName('HTML5 W3C')}}                                                                                                                                                                                 |
| {{SpecName('HTML5 W3C', "editing.html#the-accesskey-attribute", "accesskey")}}         | {{Spec2('HTML5 W3C')}}     | Snapshot de {{SpecName('HTML WHATWG')}}. De {{SpecName('HTML4.01')}}, varios caracteres pueden se pueden establecer como el accesskey . Tambien puede establecerse sobre cualquier elemento.                                                                       |
| {{SpecName('HTML4.01', "interact/forms.html#h-17.11.2", "accesskey")}}                     | {{Spec2('HTML4.01')}}     | Solo soportado en {{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("button") }}, {{ HTMLElement("input") }}, {{ HTMLElement("label") }}, {{ HTMLElement("legend") }} y {{ HTMLElement("textarea") }} |

## Compatibilidad con exploradores

{{Compat("html.global_attributes.accesskey")}}

## Ver también

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales)
