---
title: sup
slug: Web/HTML/Element/sup
---

El **elemento HTML** \<sup> define un fragmento de texto que se debe mostrar, por razones tipográficas, más alto, y generalmente más pequeño, que el tramo principal del texto, es decir, en superíndice.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/es/docs/HTML/Content_categories"
          title="en/HTML/Content categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a
          href="https://developer.mozilla.org/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_din%C3%A1mico"
          >Contenido dinamíco</a
        >(Flow content) y
        <a
          href="https://developer.mozilla.org/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_est%C3%A1tico_o_de_texto"
          >contenido estático o de texto</a
        >(phrasing content)
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a
          href="https://developer.mozilla.org/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_est%C3%A1tico_o_de_texto"
          >contenido estático o de texto</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>
        <font
          ><font
            >Ninguna, tanto la etiqueta de apertura y cierre deben estar
            presentes</font
          ></font
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>
        <font
          ><font
            >Cualquier elemento que acepte contenido estático o de texto</font
          ></font
        >
      </td>
    </tr>
    <tr>
      <th scope="row">
        Roles ARIA permitidos
      </th>
      <td>
        Cualquiera
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>
        <font
          ><font
            ><a
              href="https://developer.mozilla.org/es/docs/Web/API/HTMLElement"
              title="The HTMLElement interface represents any HTML element. Some elements directly implement this interface, others implement it via an interface that inherits it."
              ><code>HTMLElement</code></a
            ></font
          ></font
        >
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento sólo incluye los [atributos globales](/es/docs/HTML/Global_attributes).

## Notas de uso

- Este elemento debe ser utilizado sólo por razones tipográficas, es decir, cambiar la posición del texto cambia su significado como en matemática (por ejemplo la fórmula matemática _f4_, aunque se debe considerar el uso de [MathML](/es/docs/Web/MathML)) o en las abreviaturas francesas (por ejemplo Mlle, Mme or Cie).
- Este elemento también se puede encontrar siguiendo palabras o frases. Estas anotaciones indican una entrada bibliográfica y se conocen como "notas al pie."
- Este elemento no debe ser utilizado para propósitos meramente visuales, como el estilo del logo del software[LaTeX](https://es.wikipedia.org/wiki/LaTeX) [![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/1200px-LaTeX_logo.svg.png)](https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/1200px-LaTeX_logo.svg.png). En ese caso debe usarse la propiedad de [CSS](/es/docs/CSS) `vertical-align` para lograr el mismo efecto.

## Ejemplos

```html
<p>Este texto es <sup>superíndice</sup></p>
```

```html
<p>Notas al pie<sup>1</sup></p>
```

{{EmbedLiveSample}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El elemento HTML [\<sub>](/es/docs/Web/HTML/Elemento/sub) produce subíndices. Tenga en cuenta que no puedes usar \<sup> y \<sub> ambos al mismo tiempo y necesita usar [MathML](/es/docs/MathML) para producir un superíndice y un subíndice al lado del símbolo químico de un elemento, que representa su número atómico y su número nuclear.

  ![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Element_identity.png/220px-Element_identity.png)

- Los elementos MathML[`<msub>`](/es/docs/MathML/Element/msub), [`<msup>`](/es/docs/MathML/Element/msup), y [`<msubsup>`](/es/docs/MathML/Element/msubsup) .

{{HTMLSidebar}}
