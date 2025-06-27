---
title: "<div>: El elemento de división de contenido"
slug: Web/HTML/Reference/Elements/div
original_slug: Web/HTML/Element/div
l10n:
  sourceCommit: e31cb5978e9f3c731c49db9ed0a15795b870e141
---

{{HTMLSidebar}}

El elemento de [HTML](/es/docs/Web/HTML) **`<div>`** es el contenedor genérico para el contenido. No tiene efecto en el contenido o en el diseño hasta que se le aplica un estilo de alguna manera usando {{glossary("CSS")}} (p. ej. se le aplica un estilo directamente o se aplica algún tipo de modelo de diseño como [Flexbox](/es/docs/Web/CSS/CSS_flexible_box_layout) a su elemento principal).

{{InteractiveExample("HTML Demo: &lt;div&gt;", "tabbed-standard")}}

```html interactive-example
<div class="warning">
  <img
    src="/shared-assets/images/examples/leopard.jpg"
    alt="An intimidating leopard." />
  <p>Beware of the leopard</p>
</div>
```

```css interactive-example
.warning {
  border: 10px ridge #f00;
  background-color: #ff0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.warning img {
  width: 100%;
}

.warning p {
  font: small-caps bold 1.2rem sans-serif;
  text-align: center;
}
```

Como contenedor "puro", el elemento `<div>` no representa nada inherentemente. En cambio, se usa para agrupar contenido de modo que se pueda diseñar fácilmente usando los atributos [`class`](/es/docs/Web/HTML/Reference/Global_attributes#class) o [`id`](/es/docs/Web/HTML/Reference/Global_attributes#id), marcando una sección de un documento como escrita en un idioma diferente (usando el atributo [`lang`](/es/docs/Web/HTML/Reference/Global_attributes#lang)), y así sucesivamente.

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> El atributo `align` está obsoleto; no lo uses más. En su lugar, deberías usar propiedades o técnicas de CSS como [CSS Grid](/es/docs/Web/CSS/CSS_grid_layout) o [CSS Flexbox](/es/docs/Learn_web_development/Core/CSS_layout/Flexbox) para alinear y posicionar elementos `<div>` en la página.

## Notas de uso

- El elemento `<div>` debe usarse solo cuando ningún otro elemento semántico (como {{HTMLElement("article")}} o {{HTMLElement("nav")}}) sea apropiado.

## Preocupaciones de accesibilidad

El elemento `<div>` tiene [un rol implícito de `generic`](https://www.w3.org/TR/wai-aria-1.2/#generic), y no ninguno. Esto puede afectar a cierta combinación de declaraciones ARIA que esperan un elemento descendiente directo con cierto rol para funcionar correctamente.

## Ejemplos

### Un ejemplo simple

```html
<div>
  <p>
    Cualquier tipo de contenido aquí. Como &lt;p&gt;, &lt;table&gt;. ¡Lo que
    quieras!
  </p>
</div>
```

#### Resultado

{{EmbedLiveSample("Un_ejemplo_simple", 650, 60)}}

### Un ejemplo con estilos

Este ejemplo crea un cuadro sombreado aplicando un estilo al `<div>` usando CSS. Ten en cuenta que el uso del atributo [`class`](/es/docs/Web/HTML/Reference/Global_attributes#class) en el `<div>` para aplicar el estilo llamado `"shadowbox"` al elemento.

#### HTML

```html
<div class="shadowbox">
  <p>
    Aquí hay una nota muy interesante exhibida en un hermoso cuadro sombreado.
  </p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### Resultado

{{EmbedLiveSample("Un_ejemplo_con_estilos", 650, 120)}}

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#flujo_de_contenido"
          >Flujo de contenido</a
        >, <a href="/es/docs/Web/HTML/Content_categories#contenido_palpable">contenido palpable</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#flujo_de_contenido"
          >Flujo de contenido</a
        >.<br />O (en {{glossary("WHATWG")}} HTML): Si el padre es un
        elemento {{HTMLElement("dl")}}: uno o más
        elementos {{HTMLElement("dt")}} seguidos de uno o más
        elementos {{HTMLElement("dd")}}, opcionalmente entremezclados
        con elementos {{HTMLElement("script")}} y {{HTMLElement("template")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>Ninguna, tanto la etiqueta inicial como la final son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Content_categories#flujo_de_contenido"
          >flujo de contenido</a
        >.<br />O (en {{glossary("WHATWG")}} HTML):
        Elemento {{HTMLElement("dl")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <code
          ><a href="/es/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>Cualquier</td>
    </tr>
    <tr>
      <th scope="row">Interfaz en el DOM</th>
      <td>{{domxref("HTMLDivElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Elementos de seccionamiento semántico: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- Elemento {{HTMLElement("span")}} para diseñar el contenido de la frase
