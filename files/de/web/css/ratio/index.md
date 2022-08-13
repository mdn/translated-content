---
title: <ratio>
slug: Web/CSS/ratio
tags:
  - CSS
  - CSS Datentypen
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/ratio
---
{{CSSRef}}

Der `<ratio>` [CSS](/de/docs/Web/CSS) Datentyp, der zur Beschreibung von Seitenverhältnissen in [Media Queries](/de/docs/Web/Guide/CSS/Media_queries) verwendet wird, bezeichnet das Verhältnis zwischen zwei einheitenlosen Werten. Es ist ein strikt positiver {{cssxref("&lt;integer&gt;")}} Wert gefolgt von einem Slash ('/', Unicode `U+002F SOLIDUS`) und einem zweiten strikt positivem {{cssxref("&lt;integer&gt;")}}. Vor und nach dem Schrägstrich können Leerzeichen stehen.

## Beispiele

|                                                            | Verhältnis                                                                           | Verwendung                                      |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------- |
| ![Ratio4_3.png](/@api/deki/files/5714/=Ratio4_3.png)       | `4/3`                                                                                | Traditionelles TV-Format im 20sten Jahrhundert. |
| ![Ratio16_9.png](/@api/deki/files/5711/=Ratio16_9.png)     | `16/9`                                                                               | Modernes Breitbild-TV-Format.                   |
| ![Ratio1_1.85.png](/@api/deki/files/5712/=Ratio1_1.85.png) | `185/100` = `91/50` _(Nicht-Ganzzahl-Dividenden und -Divisoren sind nicht erlaubt.)_ | Die häufigsten Filmformate seit den 1960ern.    |
| ![Ratio1_2.39.png](/@api/deki/files/5713/=Ratio1_2.39.png) | `239/100` _(Nicht-Ganzzahl-Dividenden und -Divisoren sind nicht erlaubt.)_           | Das anamorphe Breitbild-Filmformat.             |

## Spezifikationen

| Spezifikation                                                                        | Status                                   | Kommentar                |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS3 Media Queries', '#values', '&lt;ratio&gt;')}} | {{Spec2('CSS3 Media Queries')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.types.ratio")}}

## Siehe auch

- [CSS Media Queries](/de/docs/Web/Guide/CSS/Media_queries)
