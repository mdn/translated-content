---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **spellcheck** es un atributo enumerado que define si el elemento debe de ser verificado por errores de deletreado. Puede tener los siguientes valores :

- `true`, que indica que elemento debe de ser checado para errores de deletreado si es posible.
- `false`, que indica que el elemento no debe de ser checado para errores de deletreado.

Si este atributo no está establecido , su valor por default es de tipo elemento y definido por el explorador . El valor por default puede der _heredado ,_ lo que significa que el contenido del elemento será checado para errores de deletreado solo si el ancestro más cercano tiene un estado de _spellcheck_ con valor `true`.

Puedes consultar [este artículo](/es/docs/Control_de_la_corrección_ortográfica_en_formularios_HTML) para ver un ejemplo comprensivo del uso de este atributo.

Este es un atributo _enumerado_ y no uno*Booleano* . Esto significa que el uso explícito de uno de los valores `true` o `false` es obligatorio y que una escritura como `<label spellcheck>Example Label</label>` no está permitida . El uso correcto es `<label spellcheck="true">Example Label</label>`.

Este atributo es meramente un indicio para el explorador : los exploradores no son obligados a tener disponibilidad para verificar los errores de deletreado , incluso si el atributo **spellcheck** es establecido como `true` y el explorador soporta verificación de deletreado .

El valor por default de este atributo es dependiente del explorador y del elemento :

<table class="fullwidth-table" style="line-height: 1.5">
  <tbody>
    <tr>
      <th>Explorador</th>
      <th>{{ HTMLElement("html") }}</th>
      <th>{{ HTMLElement("textarea") }}</th>
      <th>{{ HTMLElement("input") }}</th>
      <th>others</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td rowspan="3">Firefox</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><em>inherited</em></td>
      <td>When <code>layout.spellcheckDefault</code> is <code>0</code></td>
    </tr>
    <tr>
      <td>
        <strong><code>false</code></strong>
      </td>
      <td>
        <strong><code>true</code></strong>
      </td>
      <td>
        <strong><em>inherited</em></strong>
      </td>
      <td>
        <strong><em>inherited</em></strong>
      </td>
      <td>
        <strong
          >When <code>layout.spellcheckDefault</code> is <code>1</code> (default
          value)</strong
        >
      </td>
    </tr>
    <tr>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><em>inherited</em></td>
      <td>When <code>layout.spellcheckDefault</code> is <code>2</code></td>
    </tr>
    <tr>
      <td rowspan="3">Seamonkey</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><em>inherited</em></td>
      <td>
        When <code>layout.spellcheckDefault</code> is
        <code>0</code>
      </td>
    </tr>
    <tr>
      <td>
        <strong><code>false</code></strong>
      </td>
      <td>
        <strong><code>true</code></strong>
      </td>
      <td>
        <strong><em>inherited</em></strong>
      </td>
      <td>
        <strong><em>inherited</em></strong>
      </td>
      <td>
        <strong
          >When <code>layout.spellcheckDefault</code> is
          1 (default
          value)</strong
        >
      </td>
    </tr>
    <tr>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><em>inherited</em></td>
      <td>
        When <code>layout.spellcheckDefault</code> is
        <code>2</code>
      </td>
    </tr>
    <tr>
      <td rowspan="3">Camino</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><em>inherited</em></td>
      <td>
        When <code>layout.spellcheckDefault</code> is
        <code>0</code>
      </td>
    </tr>
    <tr>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td><em>inherited</em></td>
      <td><em>inherited</em></td>
      <td>
        When <code>layout.spellcheckDefault</code> is
        <code>1</code>
      </td>
    </tr>
    <tr>
      <td>
        <strong><code>false</code></strong>
      </td>
      <td>
        <strong><code>true</code></strong>
      </td>
      <td>
        <strong><code>true</code></strong>
      </td>
      <td>
        <strong><em>inherited</em></strong>
      </td>
      <td>
        <strong
          >When
          layout.spellcheckDefault</code>
          is <code>2</code> </span
          ><strong>(default value)</strong></strong
        >
      </td>
    </tr>
    <tr>
      <td>Chrome</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>inherited</em></td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>inherited</em></td>
    </tr>
    <tr>
      <td>Opera</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>inherited</em></td>
    </tr>
    <tr>
      <td>Safari</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>inherited</em></td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Atributos globales](/es/docs/Web/HTML/Atributos_Globales)
