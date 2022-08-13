---
title: '@page'
slug: Web/CSS/@page
tags:
  - At-Regel
  - CSS
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/@page
---
{{CSSRef}}

## Übersicht

Die `@page` CSS At-Regel wird verwendet, um einige CSS Eigenschaften zu ändern, wenn ein Dokument gedruckt wird. Es können nicht alle CSS Eigenschaften mit `@page` geändert werden. Es können nur Seitenränder, Absatzkontrolle — oben (widow); unten (orphans) — und Seitenumbrüche des Dokuments verändert werden. Versuche, andere CSS Eigenschaften zu ändern, werden ignoriert.

Die `@page` At-Regel kann über die CSS Objektmodellschnittstelle {{domxref("CSSPageRule")}} angesprochen werden.

> **Hinweis:** Das W3C diskutiert, wie die viewportbezogenen {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin`, und `vmax` gehandhabt werden sollen. Bis dahin sollten diese nicht in einer `@page` At-Regel verwendet werden.

## Syntax

### Deskriptoren

- {{cssxref("@page/size", "size")}}
  - : Bestimmt die Zielgröße und -ausrichtung des den Seitenbereich beinhaltenden Blocks. Im allgemeinen Fall, in dem ein Seitenbereich auf einer Seitenpostille dargestellt wird, gibt sie auch die Größe der Zielseitenpostille an.

- {{cssxref("@page/marks", "marks")}}
  - : Fügt dem Dokument Schneide- und/oder Registrierungsmarker hinzu.

- {{cssxref("@page/bleed", "bleed")}}
  - : Gibt den Überhang über den Seitenbereich an, bei dem die Darstellung der Seite abgeschnitten wird.

### Formale Syntax

{{csssyntax}}

## Beispiele

Bitte lies die verschiedenen [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes "Pseudo-classes") von `@page` für Beispiele.

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}
- {{Cssxref(":recto")}} {{experimental_inline}}
- {{Cssxref(":verso")}} {{experimental_inline}}

## Spezifikationen

| Spezifikation                                                                                        | Status                                           | Kommentar                                                                                                                  |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#logical-page', ':recto und :verso')}} | {{Spec2('CSS Logical Properties')}} | Fügt die `:recto` und `:verso` Seitenselektoren hinzu.                                                                     |
| {{SpecName('CSS3 Paged Media', '#at-page-rule', '@page')}}                         | {{Spec2('CSS3 Paged Media')}}         | Keine Änderung bzgl. {{SpecName('CSS2.1')}}, es können jedoch mehr CSS At-Regeln innerhalb `@page` verwendet werden. |
| {{SpecName('CSS2.1', 'page.html#page-selectors', '@page')}}                     | {{Spec2('CSS2.1')}}                         | Ursprüngliche Definition                                                                                                   |

## Browser Kompatibilität

{{Compat("css.at-rules.page")}}
