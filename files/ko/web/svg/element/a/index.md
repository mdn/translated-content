---
title: <a>
slug: Web/SVG/Element/a
tags:
  - Element
  - SVG
  - SVG Anchor 엘리먼트
translation_of: Web/SVG/Element/a
---
{{SVGRef}}

The **\<a>** SVG element creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.

In SVG, the `<a>` element is a container, meaning, you can create a link around text, like in HTML, but you can also create a link around any shape.

```css hidden
@namespace svgns url(http://www.w3.org/2000/svg);
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- A link around a shape -->
  <a href="https://developer.mozilla.org/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="35"/>
  </a>

  <!-- A link around a text -->
  <a href="https://developer.mozilla.org/docs/Web/SVG/Element/circle">
    <text x="50" y="90" text-anchor="middle">
      &lt;circle&gt;
    </text>
  </a>
</svg>
```

```css
/* As SVG does not provide a default visual style for links,
   it's considered best practice to add some */

@namespace svgns url(http://www.w3.org/2000/svg);

svgns|a {
  cursor: pointer;
}

svgns|a text {
  fill: blue; /* Even for text, SVG use fill over color */
  text-decoration: underline;
}

svgns|a:hover, svgns|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample('Exemple', 100, 100)}}

> **경고:** Since this element shares its tag name with [HTML's `<a>` element](/ko/docs/Web/HTML/Element/a), selecting "`a`" with CSS or [`querySelector`](/ko/docs/Web/API/Document/querySelector) may apply to the wrong kind of element. Try [the `@namespace` rule](/ko/docs/Web/CSS/@namespace) to distinguish between the two.

## Attributes

- {{htmlattrxref("download", "a")}} {{experimental_inline}}
  - : This attribute instructs browsers to download a {{Glossary("URL")}} instead of navigating to it, so the user will be prompted to save it as a local file.
    _Value type_: **\<string>** ; _Default value_: _none_; _Animatable_: **no**
- {{SVGAttr("href")}}
  - : This attribute contains the {{Glossary("URL")}} or URL fragment that the hyperlink points to.
    _Value type_: **[\<URL>](/docs/Web/SVG/Content_type#URL)** ; _Default value_: _none_; _Animatable_: **yes**
- {{htmlattrxref("hreflang", "a")}}
  - : This attribute contains the URL or URL fragment that the hyperlink points to.
    _Value type_: **\<string>** ; _Default value_: _none_; _Animatable_: **yes**
- {{htmlattrxref("ping", "a")}} {{experimental_inline}}
  - : This attribute contains a space-separated list of URLs to which, when the hyperlink is followed, [`POST`](/ko/docs/Web/HTTP/Methods/POST) requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking. For a more widely-supported feature addressing the same use cases, see [Navigator.sendBeacon()](/ko/docs/Web/API/Navigator/sendBeacon).
    _Value type_: **[\<list-of-URLs>](/docs/Web/SVG/Content_type#List-of-Ts)** ; _Default value_: _none_; _Animatable_: **no**
- {{htmlattrxref("referrerpolicy", "a")}} {{experimental_inline}}
  - : This attribute indicates which [referrer](/ko/docs/Web/HTTP/Headers/Referer) to send when fetching the {{Glossary("URL")}}.
    _Value type_: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; _Default value_: _none_; _Animatable_: **no**
- {{htmlattrxref("rel", "a")}} {{experimental_inline}}
  - : This attribute specifies the relationship of the target object to the link object.
    _Value type_: **[\<list-of-Link-Types>](/docs/Web/HTML/Link_types)** ; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("target")}}
  - : This attribute specifies where to display the linked {{Glossary("URL")}}.
    _Value type_: `_self`|`_parent`|`_top`|`_blank`|**\<name>** ; _Default value_: `_self`; _Animatable_: **yes**
- {{htmlattrxref("type", "a")}}
  - : This attribute specifies the media type in the form of a {{Glossary("MIME type")}} for the linked URL.
    _Value type_: **\<string>** ; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("xlink:href")}} {{deprecated_inline("SVG2")}}
  - : This attribute contains the URL or URL fragment that the hyperlink points to.
    _Value type_: **[\<URL>](/docs/Web/SVG/Content_type#URL)** ; _Default value_: _none_; _Animatable_: **yes**

### Global attributes

- [Core Attributes](/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('lang')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Event Attributes
  - [: Global event attributes](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Document element event attributes](/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes), [Graphical event attributes](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [Presentation Attributes](/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- XLink Attributes
  - : Most notably: {{SVGAttr("xlink:title")}}
- ARIA Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
