---
title: CSSPageRule
slug: Web/API/CSSPageRule
tags:
  - API
  - CSSOM
  - Referenz
translation_of: Web/API/CSSPageRule
---
{{ APIRef("CSSOM") }}

## Übersicht

**`CSSPageRule`** ist eine Schnittstelle, die eine einzelne CSS {{cssxref("@page")}} Regel repräsentiert. Sie implementiert die {{domxref("CSSRule")}} Schnittstelle mit dem Typwert `6` (`CSSRule.PAGE_RULE`).

## Syntax

Die Syntax wird im [WebIDL](http://dev.w3.org/2006/webapi/WebIDL/) Format beschrieben.

    interface CSSPageRule : CSSRule {
        attribute DOMString selectorText;
        readonly attribute CSSStyleDeclaration style;
    };

## Eigenschaften

Als eine {{ domxref("CSSRule") }} implementiert `CSSPageRule` auch die Eigenschaften dieser Schnittstelle. Sie hat die folgenden speziellen Eigenschaften:

- {{domxref("CSSPageRule.selectorText")}}
  - : Repräsentiert den Text eines zur At-Regel gehörenden Seitenselektors.
- {{domxref("CSSPageRule.style")}} {{readonlyinline()}}
  - : Gibt den zur At-Regel gehörenden Deklarationsblock zurück.

## Methoden

Als eine {{ domxref("CSSRule") }} implementiert `CSSPageRule` auch die Methoden dieser Schnittstelle. Sie hat keine speziellen Methoden.

## Spezifikationen

| Spezifikation                                                                                | Status                           | Anmerkung                                                       |
| -------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------- |
| {{ SpecName('CSSOM', '#the-csspagerule-interface', 'CSSPageRule') }} | {{ Spec2('CSSOM') }}     | Keine Änderungen bezüglich {{SpecName('DOM2 Style')}} |
| {{SpecName('DOM2 Style', 'css.html#CSS-CSSPageRule', 'CSSPageRule') }} | {{ Spec2('DOM2 Style') }} |                                                                 |

## Browser Kompatibilität

{{Compat}}
