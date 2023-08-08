---
title: a
slug: Web/SVG/Element/a
---

{{SVGRef}}

O elemento **\<a>** do SVG cria um hiperlink para outras páginas da web, arquivos, locais na mesma página, endereços de email ou qualquer outra URL. É muito semelhante ao elemento {{htmlelement ("a")}} do HTML.

O elemento `<a>` do SVG é um contêiner, o que significa que você pode criar um link em torno do texto (como em HTML), mas também em torno de qualquer elemento.

```css hidden
@namespace svg url(https://www.w3.org/2000/svg);
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="https://www.w3.org/2000/svg">
  <!-- A link around a shape -->
  <a href="/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- A link around a text -->
  <a href="/docs/Web/SVG/Element/text">
    <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
  </a>
</svg>
```

```css
/* As SVG does not provide a default visual style for links,
   it's considered best practice to add some */

@namespace svg url(https://www.w3.org/2000/svg);
/* Necessary to select only SVG <a> elements, and not also HTML’s.
   See warning below */

svg|a:link,
svg|a:visited {
  cursor: pointer;
}

svg|a text,
text svg|a {
  fill: blue; /* Even for text, SVG uses fill over color */
  text-decoration: underline;
}

svg|a:hover,
svg|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample('Exemple', 100, 100)}}

> **Aviso:** Como esse elemento compartilha seu nome de tag com o [elemento `<a>` do HTML](/pt-BR/docs/Web/HTML/Element/a), selecionar `a` com CSS ou [`querySelector`](/pt-BR/docs/Web/API/Document/querySelector), pode ser aplicar ao tipo errado de elemento. Experimente usar [a regra @namespace](/pt-BR/docs/Web/CSS/@namespace) para distinguir os dois.

## Attributes

- [`download`](/pt-BR/docs/Web/HTML/Element/a#download) {{experimental_inline}}
  - : Instructs browsers to download a {{Glossary("URL")}} instead of navigating to it, so the user will be prompted to save it as a local file.
    _Value type_: **\<string>** ; _Default value_: _none_; _Animatable_: **no**
- {{SVGAttr("href")}}
  - : The {{Glossary("URL")}} or URL fragment the hyperlink points to.
    _Value type_: **[\<URL>](/docs/Web/SVG/Content_type#URL)** ; _Default value_: _none_; _Animatable_: **yes**
- [`hreflang`](/pt-BR/docs/Web/HTML/Element/a#hreflang)
  - : The human language of the URL or URL fragment that the hyperlink points to.
    _Value type_: **\<string>** ; _Default value_: _none_; _Animatable_: **yes**
- [`ping`](/pt-BR/docs/Web/HTML/Element/a#ping) {{experimental_inline}}
  - : A space-separated list of URLs to which, when the hyperlink is followed, [`POST`](/pt-BR/docs/Web/HTTP/Methods/POST) requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking. For a more widely-supported feature addressing the same use cases, see [Navigator.sendBeacon()](/pt-BR/docs/Web/API/Navigator/sendBeacon).
    _Value type_: **[\<list-of-URLs>](/docs/Web/SVG/Content_type#List-of-Ts)** ; _Default value_: _none_; _Animatable_: **no**
- [`referrerpolicy`](/pt-BR/docs/Web/HTML/Element/a#referrerpolicy) {{experimental_inline}}
  - : Which [referrer](/pt-BR/docs/Web/HTTP/Headers/Referer) to send when fetching the {{Glossary("URL")}}.
    _Value type_: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; _Default value_: _none_; _Animatable_: **no**
- [`rel`](/pt-BR/docs/Web/HTML/Element/a#rel) {{experimental_inline}}
  - : The relationship of the target object to the link object.
    _Value type_: **[\<list-of-Link-Types>](/docs/Web/HTML/Link_types)** ; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("target")}}
  - : Where to display the linked {{Glossary("URL")}}.
    _Value type_: `_self`|`_parent`|`_top`|`_blank`|**\<name>** ; _Default value_: `_self`; _Animatable_: **yes**
- [`type`](/pt-BR/docs/Web/HTML/Element/a#type)
  - : A {{Glossary("MIME type")}} for the linked URL.
    _Value type_: **\<string>** ; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : The URL or URL fragment that the hyperlink points to. May be required for backwards compatibility for older browsers.
    _Value type_: **[\<URL>](/docs/Web/SVG/Content_type#URL)** ; _Default value_: _none_; _Animatable_: **yes**

### Global attributes

- [Core Attributes](/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('lang')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Event Attributes
  - : [Global event attributes](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Document element event attributes](/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes), [Graphical event attributes](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [Presentation Attributes](/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- XLink Attributes
  - : Most notably: {{SVGAttr("xlink:title")}}
- ARIA Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

## Specifications

| Specification                                             | Status              | Comment                                                             |
| --------------------------------------------------------- | ------------------- | ------------------------------------------------------------------- |
| {{SpecName("SVG2", "linking.html#Links", "&lt;a&gt;")}}   | {{Spec2("SVG2")}}   | Replaced {{SVGAttr("xlink:href")}} attribute by {{SVGAttr("href")}} |
| {{SpecName("SVG1.1", "linking.html#Links", "&lt;a&gt;")}} | {{Spec2("SVG1.1")}} | Initial definition                                                  |

## Compatibilidade com navegadores

{{Compat("svg.elements.a")}}
