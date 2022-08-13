---
title: <center>
slug: Web/HTML/Element/center
tags:
  - Deprecated
  - Element
  - HTML
  - Referenz
  - Web
translation_of: Web/HTML/Element/center
---
{{deprecated_header()}}

## Übersicht

Das HTML Center Element (`<center>`) ist ein [Block-Level Element](/de/docs/HTML/Block-level_elements "HTML/Block-level_elements"), welches Paragraphen oder andere Block-Level Elemente und Inline Elemente enthalten kann. Der gesamte Inhalt des Elements wird horizontal zentriert, innerhalb des übergeordneten Elements (normalerweise das {{HTMLElement("body")}} Element). Dieses Element ist in HTML 4 (und XHTML 1) veraltet und wird nicht mehr angewendet, zu Gunsten der [CSS](/de/docs/Web/CSS) {{Cssxref("text-align")}} Eigenschaft, welche auf {{HTMLElement("div")}} Elemente oder individuell auf {{HTMLElement("p")}} Elemente angewendet werden kann.

## DOM Schnittstelle

Dieses Element implementiert die {{domxref("HTMLElement")}} Schnittstelle.

> **Note:** **Implementierungs Anmerkung:** Bis einschließlich Gecko 1.9.2, implementiert Firefox die {{domxref("HTMLSpanElement")}} Schnittstelle für dieses Element.

## Beispiel 1

```html
<center>Dieser Text wird zentriert.
<p>Ebenso dieser Paragraph.</p></center>
```

## Beispiel 2 (CSS Alternative)

```html
<div style="text-align:center">Dieser Text wird zentriert.
<p>Ebenso dieser Paragraph.</p></div>
```

## Beispiel 3 (CSS alternative)

```html
<p style="text-align:center">Dieser Text wird zentriert.<br>
Ebenso dieser Paragraph.</p>
```

## Anmerkung

Bei Zuweisung der {{Cssxref("text-align")}}`:center` Eigenschaft zu einem {{HTMLElement("div")}} oder {{HTMLElement("p")}} Element, wird der _Inhalt_ des Elements zentriert, während dessen Größe unverändert bleibt.

## Siehe auch

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}

{{HTMLRef}}
