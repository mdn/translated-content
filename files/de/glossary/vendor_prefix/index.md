---
title: Herstellerpräfix
slug: Glossary/Vendor_Prefix
tags:
  - '-moz-'
  - '-ms-'
  - '-o-'
  - '-webkit-'
  - CSS
  - Glossar
  - Herstellerpräfix
  - JavaScript
  - Kodieren
  - Präfix
  - scripten
translation_of: Glossary/Vendor_Prefix
original_slug: Glossary/Herstellerpräfix
---
Browserhersteller fügen manchmal Präfixe zu experimentellen oder nichtstandardisierten CSS-Eigenschaften hinzu, damit Entwickler mit neuen Ideen experimentieren können, während - in der Theorie - verhindert werden soll, dass sie sich auf diese Experimente verlassen und ihr Code dann während des Standardisierungsprozesses bricht. Entwickler sollten mit der Verwendung der Eigenschaft ohne Präfix warten, bis das Browserverhalten standardisiert ist.

> **Note:** Browserhersteller arbeiten daran, keine Herstellerpräfixe mehr für experimentelle Features zu verwenden. Webentwickler haben diese auf Produktionswebseiten benutzt, trotz ihrer experimentellen Natur. Dies hat es für Browserhersteller erschwert, Kompatibilität zu sichern und an neuen Funktionen zu arbeiten. Es war außerdem nachteilig für kleinere Browser, die sich gezwungen sehen, die Präfixe anderer Browser hinzuzufügen, um beliebte Webseiten zu laden.In letzter Zeit geht der Trend dahin, experimentelle Features hinter benutzergesteuerten Flags oder Einstellungen hinzuzufügen und an kleineren Spezifikationen zu arbeiten, die Stabilität wesentlich schneller erreichen.

## CSS-Präfixe

Die führenden Browser nutzen folgende Präfixe:

- `-webkit- (`Chrome, Safari, neuere Versionen von Opera, fast alle iOS-Broswer - einschließlich Firefox für iOS; im Grunde genommen jeder auf WebKit basierende Browser)
- `-moz- `(Firefox)
- `-o-` (Alte Versionen von Opera aus der Zeit vor WebKit)
- `-ms-` (Internet Explorer und Microsoft Edge)

## API-Präfixe

Historisch gesehen haben Hersteller Präfixe auch in experimentellen APIs verwendet. Wenn eine gesamte Schnittstelle experimentell ist, wird ihr Name mit einem Präfix versehen (aber nicht der der enthaltenen Methoden oder Eigenschaften). Wird eine experimentelle Eigenschaft oder Methode einer standardisierten Schnittstelle hinzugefügt, erhält diese einzelne Eigenschaft oder Methode einen Präfix.

### Schnittstellenpräfixe

Präfixe für Schnittstellennamen werden groß geschrieben:

- `Webkit (`Chrome, Safari, neuere Versionen von Opera, fast alle iOS-Broswer - einschließlich Firefox für iOS; im Grunde genommen jeder auf WebKit basierende Browser)
- `Moz `(Firefox)
- `O` (Alte Versionen von Opera aus der Zeit vor WebKit)
- `MS` (Internet Explorer und Microsoft Edge)

### Präfixe für Methoden und Eigenschaften

Präfixe für Eigenschaften und Methoden werden klein geschrieben:

- `webkit (`Chrome, Safari, neuere Versionen von Opera, fast alle iOS-Broswer - einschließlich Firefox für iOS; im Grunde genommen jeder auf WebKit basierende Browser)
- `moz `(Firefox)
- o (Alte Versionen von Opera aus der Zeit vor WebKit)
- ms (Internet Explorer und Microsoft Edge)

## Mehr erfahren

### Allgemeinwissen

- {{Interwiki("wikipedia", "CSS filter#Prefix_filters", "Vendor prefix")}} auf Wikipedia (englisch)
