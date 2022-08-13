---
title: '::backdrop'
slug: Web/CSS/::backdrop
tags:
  - CSS
  - Layout
  - NeedsContent
  - Pseudoelement
  - Referenz
  - Vollbild
  - Web
translation_of: Web/CSS/::backdrop
---
{{CSSRef}}{{SeeCompatTable}}

Jedes Element im Stack des [Toplayer](https://fullscreen.spec.whatwg.org/#top-layer)s hat ein _`::backdrop`_ {{cssxref("pseudo-elements", "pseudo-element")}}. Dieses Pseudoelement ist eine Box, die direkt unterhalb des Elements gerendert wird (und oberhalb des Elements unterhalb des Elements im Stack, falls es eines gibt), innerhalb desselben Toplayers.

> **Note:** Das `::backdrop` Pseudoelement kann dazu verwendet werden, um einen Hintergrund zu erstellen, der das dahinterliegende Dokument für ein Element im Stack des Toplayers versteckt, z. B. für das Element, das im Vollbild dargestellt wird, wie in dieser Spezifikation beschrieben.

Es erbt von keinem Element und vererbt auch nicht. Es gelten keine Einschränkungen bezüglich der Eigenschaften, die auf dieses Pseudoelement angewendet werden können.

## Spezifikationen

| Spezifikation                                                                                | Status                           | Kommentar                |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------ |
| {{SpecName('Fullscreen', '#::backdrop-pseudo-element', '::backdrop')}} | {{Spec2('Fullscreen')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.backdrop")}}

## Siehe auch

- {{HTMLElement("dialog")}}
