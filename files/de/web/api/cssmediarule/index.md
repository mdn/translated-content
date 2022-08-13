---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
tags:
  - API
  - CSSOM
  - Referenz
  - Schnittstelle
translation_of: Web/API/CSSMediaRule
---
{{ APIRef("CSSOM") }}

Die **CSSMediaRule** ist eine Schnittstelle, die eine einzelne CSS-Regel darstellt. Sie implementiert die {{domxref("CSSConditionRule")}}-Schnittstelle und somit auch die {{domxref("CSSGroupingRule")}}- sowie die {{domxref("CSSRule")}}-Schnittstelle mit einem Typwert von `4` (`CSSRule.MEDIA_RULE`).

## Syntax

Die Syntax wird mittels der [WebIDL](http://dev.w3.org/2006/webapi/WebIDL/) definiert.

    interface CSSMediaRule : CSSConditionRule {
        readonly attribute MediaList media;
    }

## Eigenschaften

Als eine {{ domxref("CSSConditionRule") }}, und somit der {{domxref("CSSGroupingRule")}} und {{ domxref("CSSRule") }}, implementiert die `CSSMediaRule` auch gleichzeitig die Eigenschaften dieser Schnittstellen. Darüber hinaus hat sie die folgende spezielle Eigenschaft`:`

- {{domxref("CSSMediaRule.media")}} {{readonlyinline()}}
  - : Definiert {{domxref("MediaList")}}, welches das zugedachte Zielmedium für die Style-Informationen wiedergibt.

## Methoden

Wie eine {{ domxref("CSSConditionRule") }} und daher eine {{domxref("CSSGroupingRule")}} als auch eine {{ domxref("CSSRule") }}, implementiert `CSSMediaRule` auch die Methoden dieser Schnittstelle. Sie selbst hat keine speziellen Methoden.

## Spezifikationen

| Spezifikation                                                                                                | Status                                   | Kommentar                                                   |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------- |
| {{ SpecName('CSS3 Conditional', '#the-cssmediarule-interface', 'CSSMediaRule') }} | {{ Spec2('CSS3 Conditional')}} | Als Ableitung von {{domxref("CSSConditionRule")}}. |
| {{ SpecName('CSSOM', '#the-cssmediarule-interface', 'CSSMediaRule') }}                 | {{ Spec2('CSSOM') }}             | Keine Abweichungen von {{SpecName('DOM2 Style')}} |
| {{SpecName('DOM2 Style', 'css.html#CSS-CSSMediaRule', 'CSSMediaRule') }}             | {{ Spec2('DOM2 Style') }}         |                                                             |

## Browser Kompatibilität

{{Compat}}

\[1] Das Setzen des Werts von `conditionText` in Gecko ist nur ab Firefox 20 möglich.
