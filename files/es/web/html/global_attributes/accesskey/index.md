---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
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

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales)
