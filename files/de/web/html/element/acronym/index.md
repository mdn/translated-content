---
title: <acronym>
slug: Web/HTML/Element/acronym
tags:
  - Element
  - HTML
  - Referenz
  - Veraltet
  - Web
translation_of: Web/HTML/Element/acronym
---
{{HTMLRef}}{{obsolete_header}}

Mit dem HTML Acronym Element (`<acronym>`) können Autoren eine Folge von Zeichen deutlich angeben, aus denen ein Akronym oder eine Abkürzung für ein Wort besteht. Dieses Element wurde in HTML5 entfernt. Verwenden Sie das Element {{HTMLElement("abbr")}}.

> **Note:** **Nutzungshinweis:** Dieses Element wurde in HTML5 entfernt und sollte nicht mehr verwendet werden. Stattdessen sollten Webentwickler das Element {{HTMLElement("abbr")}} verwenden.

## Attribute

Dieses Element hat nur [globale Attribute](/de/docs/HTML/global_attributes), die allen Elementen gemeinsam sind.

## DOM Schnittstelle

Dieses Element implementiert die {{domxref('HTMLElement')}} Schnittstelle.

> **Note:** **Implementierungshinweis:** Bis einschließlich Gecko 1.9.2 implementiert Firefox die {{domxref('HTMLSpanElement')}} Schnittstelle für dieses Element.

## Beispiel

```html
<p>Das <acronym title="World Wide Web">WWW</acronym> ist nur eine Komponente des Internets.</p>
```

## Standarddarstellung

Obwohl der Zweck dieses Tags nur der Bequemlichkeit des Autors dient, variiert sein Standardstil von Browser zu Browser:

- Manche Browser, wie der Internet Explorer, stellen es nicht anders als das {{HTMLElement("span")}}-Element dar.
- Opera, Firefox, Chrome und einige andere fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu.
- Einige Browser fügen nicht nur eine gepunktete Unterstreichung hinzu, sondern setzen sie auch in Kapitälchen ein. Um dies zu vermeiden, fügen Sie Ihrem CSS etwas wie {{cssxref("font-variant")}}`: none` hinzu.

Es wird daher dringend empfohlen, dass sich Webautoren nicht vollständig auf das Standard-Styling verlassen.

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | --------- |
| {{SpecName('HTML4.01', 'struct/text.html#edef-ACRONYM', '&lt;acronym&gt;')}} | {{Spec2('HTML4.01')}} |           |

## Browserkompatibilität

{{Compat("html.elements.acronym")}}

## Siehe auch

- Das HTML-Element {{HTMLElement("abbr")}}
