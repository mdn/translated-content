---
title: <a>
slug: Web/SVG/Element/a
---

{{SVGRef}}

El elemento SVG \<a> crea un hipervínculo a otras páginas web, archivos, ubicaciones dentro de la misma página, direcciones de correo electrónico o cualquier otra URL.

En SVG, el elemento \<a> es un contenedor, es decir, puede crear un enlace alrededor del texto, como en HTML, pero también puede crear un enlace alrededor de cualquier forma.

## Ejemplo

```css hidden
@namespace svgns url(http://www.w3.org/2000/svg);
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Un vínculo alrededor de una forma -->
  <a href="https://developer.mozilla.org/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- Un vínculo alrededor de una forma -->
  <a href="https://developer.mozilla.org/docs/Web/SVG/Element/circle">
    <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
  </a>
</svg>
```

```css
/* Como SVG no proporciona un estilo visual predeterminado para los enlaces,
   se considera una práctica recomendada agregar algunos */

@namespace svgns url(http://www.w3.org/2000/svg);

svgns|a {
  cursor: pointer;
}

svgns|a text {
  fill: blue; /* Incluso para el texto, SVG usa fill para el color */
  text-decoration: underline;
}

svgns|a:hover,
svgns|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample('Exemple', 100, 100)}}

> **Advertencia:** Puesto que este elemento comparte su nombre de etiqueta con el [elemento `<a>` de HTML](/es/docs/Web/HTML/Element/a), la selección de "`a`" con CSS o [`querySelector`](/es/docs/Web/API/Document/querySelector) puede aplicarse al tipo incorrecto de elemento. Pruebe [la regla `@namespace`](/es/docs/Web/CSS/@namespace) para distinguir entre los dos.

## Atributos

- [`download`](/es/docs/Web/HTML/Element/a#download) {{experimental_inline}}
  - : Este atributo indica a los navegadores que descarguen un {{Glossary ( "URL ")}} en lugar de desplazarse a él, por lo que se le pedirá al usuario que lo guarde como un archivo local.
    _Value type_: **\<string>** ; _Default value_: _none_; _Animatable_: **no**
- {{SVGAttr("href")}}
  - : Este atributo contiene el {{Glossary ( "URL ")}} o el fragmento de URL al que apunta el hipervínculo.
    _Value type_: **[\<URL>](/docs/Web/SVG/Content_type#URL)** ; _Default value_: _none_; _Animatable_: **yes**
- [`hreflang`](/es/docs/Web/HTML/Element/a#hreflang)
  - : This attribute contains the URL or URL fragment that the hyperlink points to.
    _Value type_: **\<string>** ; _Default value_: _none_; _Animatable_: **yes**
- [`ping`](/es/docs/Web/HTML/Element/a#ping) {{experimental_inline}}
  - : Este atributo contiene una lista de direcciones URL separadas por espacios a las que, cuando se sigue el hipervínculo, las solicitudes [`POST`](/es/docs/Web/HTTP/Methods/POST) con el cuerpo `PING` serán enviadas por el navegador (en segundo plano). Normalmente se utiliza para el seguimiento. Para obtener una característica más ampliamente admitida que aborde los mismos casos de uso, consulte [Navigator.sendBeacon()](/es/docs/Web/API/Navigator/sendBeacon).
    _Value type_: **[\<list-of-URLs>](/docs/Web/SVG/Content_type#List-of-Ts)** ; _Default value_: _none_; _Animatable_: **no**
- [`referrerpolicy`](/es/docs/Web/HTML/Element/a#referrerpolicy) {{experimental_inline}}
  - : Este atributo indica qué [referrer](/es/docs/Web/HTTP/Headers/Referer) se enviará al obtener {{Glossary("URL")}}.
    _Value type_: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; _Default value_: _none_; _Animatable_: **no**
- [`rel`](/es/docs/Web/HTML/Element/a#rel) {{experimental_inline}}
  - : Este atributo especifica la relación del objeto de destino con el vínculado.
    _Value type_: **[\<list-of-Link-Types>](/docs/Web/HTML/Link_types)** ; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("target")}}
  - : Este atributo especifica dónde mostrar el {{Glossary("URL")}}.
    _Value type_: `_self`|`_parent`|`_top`|`_blank`|**\<name>** ; _Default value_: `_self`; _Animatable_: **yes**
- [`type`](/es/docs/Web/HTML/Element/a#type)
  - : Este atributo especifica el tipo de medio en forma de un {{Glossary ( "tipo MIME ")}} para la dirección URL vinculada.
    _Value type_: **\<string>** ; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Este atributo contiene la dirección URL o el fragmento de URL al que apunta el hipervínculo.
    _Value type_: **[\<URL>](/docs/Web/SVG/Content_type#URL)** ; _Default value_: _none_; _Animatable_: **yes**

### Atributos globales

- [Atributos principales](/docs/Web/SVG/Attribute/Core)
  - : Especialmente: {{SVGAttr('id')}}, {{SVGAttr('lang')}}, {{SVGAttr('tabindex')}}
- [Atributos de estilo](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Atributos de procesamiento condicional](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Especialmente: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Atributos de evento
  - : [Atributos de eventos globales](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [atributos de eventos de elementos de documento](/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes), [atributos de eventos gráficos](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [Atributos de presentación](/docs/Web/SVG/Attribute/Presentation)
  - : Especialmente: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Atributos XLink
  - : Most notably: {{SVGAttr("xlink:title")}}
- Atributos ARIA
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Notas de uso

{{svginfo}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
