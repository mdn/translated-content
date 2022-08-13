---
title: <dir>
slug: Web/HTML/Element/dir
tags:
  - Element
  - HTML
  - Obsolete
  - Referenz
  - Web
translation_of: Web/HTML/Element/dir
---
{{Obsolete_header()}}

## Übersicht

Das _HTML directory Element_ (`<dir>`) repräsentiert ein Verzeichnis, namentlich eine Sammlung von Dateinamen.

> **Note:** **Hinweis zur Benutzung:** Dieses Element sollte nicht mehr verwendet werden. In den frühen HTML Spezifikationen, genauer gesagt seit HTML4, ist dieses Element veraltet und in [HTML5](/de/docs/Web/Guide/HTML/HTML5) somit obsolet. Es sollte das {{HTMLElement("ul")}} Element stattdessen verwendet werden.

## DOM Schnittstelle

Dieses Element implementiert die {\[domxref("HTMLDirectoryElement")}} Schnittstelle.

## Attribute

Dieses Element schließt [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

- {{htmlattrdef("compact")}}
  - : Dieses Boolesche Attribut verweist darauf, ob die angezeigte Liste kompakt dargestellt werden soll. Die Interpretation dieses Attributs ist abhängig vom sogenannten User Agent und funktioniert nicht in allen Browsern.
    > **Note:** **Hinweis zur Benutzung:** Dieses Attribut sollte nicht mehr verwendet werden, seit dem es veraltet ist. Das {{HTMLElement("dir")}} Element sollte mit Hilfe von [CSS](/de/docs/CSS "CSS") designt werden. Um einen ähnlichen Effekt wie das `compact` Attribut zu erreichen, kann die [CSS](/de/docs/CSS "CSS") Eigenschaft {{cssxref("line-height")}} mit einem Wert von `80%` genutzt werden.

## Siehe auch

- Andere Listen-basierte HTML Elemente: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}};
- CSS Eigenschaft die besonders wertvoll sein könnten, um das `<dir>` Element zu stylen:

  - Die {{cssxref('list-style')}} Eigenschaft, nützlich um die Art des Ranks darzustellen.
  - [CSS counters](/de/docs/CSS_Counters "CSS_Counters"), nützlich um mit komplexen verschachtelten Listen zu arbeiten.
  - Die {{Cssxref('line-height')}} Eigenschaft, nützlich um das {{htmlattrxref("compact", "dir")}} Attribut zu imitieren.
  - Die {{cssxref('margin')}} Eigenschaft, nützlich um die Einrückung zu kontrollieren.

{{HTMLRef}}
