---
title: <object>
slug: Web/HTML/Element/object
tags:
  - Element
  - HTML
  - HTML eingebetteter Inhalt
  - Referenz
  - Web
translation_of: Web/HTML/Element/object
---
## Summary

Das **HTML `<object>` Element** (oder auch _HTML Embedded Object Element_) repräsentiert eine externe Resource die entweder als Bild, eingebetteter Browser Context oder eine Resource die von einem Plugin geöffnet wird.

| [Content categories](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Flow content](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"); [phrasing content](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content"); [embedded content](/de/docs/HTML/Content_categories#Embedded_content "HTML/Content categories#Embedded content"), palpable content; Bei besitzen des Attributs **usemap:** [interactive content](/de/docs/HTML/Content_categories#Interactive_content "HTML/Content categories#Interactive content"); [listed](/de/docs/HTML/Content_categories#Form_listed "HTML/Content categories#Form listed"), [submittable](/de/docs/HTML/Content_categories#Form_submittable "HTML/Content categories#Form submittable") [form-associated](/de/docs/HTML/Content_categories#Form-associated_content "HTML/Content categories#Form-associated content") element. |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Erlaubter Inhalt                                                                 | Null oder mehrere {{HTMLElement("param")}} Elemente, dann [Transparent content](/de/docs/HTML/Content_categories#Transparent_content_models "HTML/Content categories#Transparent content models").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Tag omission                                                                     | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Permitted parent elements                                                        | Jedes Element das [embedded content](/de/docs/HTML/Content_categories#Embedded_content "HTML/Content categories#Embedded content") erlaubt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| DOM interface                                                                    | {{domxref("HTMLObjectElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Attributes

Dieses Element enthält die [global attributes](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("archive")}} {{HTMLVersionInline(4)}} only; {{obsoleteGeneric('inline','HTML5')}}
  - : Eine durch Leerzeichen getrennte Liste von URIs für die Archive der Resourcen dieses _objects_.
- {{htmlattrdef("border")}} {{deprecatedGeneric('inline','HTML4.01')}}; {{obsoleteGeneric('inline','HTML5')}}
  - : Rahmenbreite in Pixeln.
- {{htmlattrdef("classid")}} {{HTMLVersionInline(4)}} only; {{obsoleteGeneric('inline','HTML5')}}
  - : URI die Object implementiert. Kann mit oder anstatt des **data** Attributes benutzt werden.
- {{htmlattrdef("codebase")}} {{HTMLVersionInline(4)}} only; {{obsoleteGeneric('inline','HTML5')}}
  - : Der Ursprungspfad zum auflösen der relativen URIs die durch **classid**, **data**, oder **archive** spezifiziert werden. Falls nicht spezifiziert, ist der Ursprungspfad der URI, document.
- {{htmlattrdef("codetype")}} {{HTMLVersionInline(4)}} only; {{obsoleteGeneric('inline','HTML5')}}
  - : Inhaltstype der Daten die durch **classid** spezifiziert werden.
- {{htmlattrdef("data")}}
  - : Valide URL der Adressressource. Wenigstens eine muss für **data** und **type** angegeben werden.
- {{htmlattrdef("declare")}} {{HTMLVersionInline(4)}} only; {{obsoleteGeneric('inline','HTML5')}}
  - : Bei vorhanden sein dieses Boolschen Attributes, wird das Element lediglich deklariert. _Object_ muss durch ein nachfolgendes `<object>` Element instanziiert werden. In HTML5, wiederholt sich \<object> komplett sodass jede Resource wiederbenutzt wird.
- {{htmlattrdef("form")}} {{HTMLVersionInline(5)}}
  - : Das form Element, falls vorhanden, sodass das _object mit dieser Form identifiziert wird_ (seinem _form Besitzer_). Der Wert muss eine ID eines {{HTMLElement("form")}} Elements im selben _document_ sein.
- {{htmlattrdef("height")}}
  - : Rahmenhöhe in Pixeln.
- {{htmlattrdef("name")}}
  - : Name des gültigen Browsing Contexts (HTML5), oder der Name oder Name der _control_ (HTML 4).
- {{htmlattrdef("standby")}} {{HTMLVersionInline(4)}} only; {{obsoleteGeneric('inline','HTML5')}}
  - : Eine Nachricht die angezeigt wird, während die _object_ Implementierung und Daten geladen werden.
- {{htmlattrdef("tabindex")}} {{HTMLVersionInline(4)}} only; {{obsoleteGeneric('inline','HTML5')}}
  - : Tabbing Position im aktuellen _document_.
- {{htmlattrdef("type")}}
  - : [content type](/de/docs/Glossary/Content_type) der Resource wie in **data** spezifiziert. Wenigsten ein **data** und **type** müssen definiert sein.
- {{htmlattrdef("usemap")}}
  - : _hash-name_ Referenz zu einem {{HTMLElement("map")}} Element; d.h. ein '#' gefolgt der Value eines {{htmlattrxref("name", "map")}} von einem map Element.
- {{htmlattrdef("width")}}
  - : Anzeigebreite in PixelnThe width of the display resource, in CSS pixels.

## Beispiele

### Flash Video einbetten

```html
<!-- Einbetten eines Flash Videos -->
<object data="move.swf" type="application/x-shockwave-flash"></object>

<!--  Einbetten eines Flash Videos mit Parametern -->
<object data="move.swf" type="application/x-shockwave-flash">
  <param name="foo" value="bar">
</object>
```

## Specifications

| Specification                                                                                                            | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'the-iframe-element.html#the-object-element', '&lt;object&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#the-object-element', '&lt;object&gt;')}} | {{Spec2('HTML5 W3C')}}     |         |
| {{SpecName('HTML4.01', 'struct/objects.html#h-13.3', '&lt;object&gt;')}}                         | {{Spec2('HTML4.01')}}     |         |

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("param")}}

{{HTMLRef}}
