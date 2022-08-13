---
title: URL.createObjectURL()
slug: Web/API/URL/createObjectURL
tags:
  - API
  - Experimentell
  - Méthode
  - URL
  - URL API
translation_of: Web/API/URL/createObjectURL
---
{{ApiRef("URL API")}}{{SeeCompatTable}}

## Zusammenfassung

Die statische Methode **`URL.createObjectURL()`** erzeugt einen {{domxref("DOMString")}}, welcher eine URL enthält, die das übergebene Objekt repräsentiert. Die Gültigkeitsdauer der URL ist von dem Dokumentobjekt {{domxref("document")}} abhängig, in dessen Fenster sie erzeugt wurde. Die neue Objekt-URL repräsentiert das angegebene {{domxref("File")}}- bzw. {{domxref("Blob")}}-Objekt.

## Syntax

    objectURL = URL.createObjectURL(blob);

## Parameter

- _blob_
  - : Ist ein {{domxref("File")}}-Objekt oder ein {{domxref("Blob")}}-Objekt, für das eine URL generiert werden soll.

## Beispiele

Siehe "[Using object URLs to display images](/de/docs/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images "https://developer.mozilla.org/en/Using_files_from_web_applications#Example:_Using_object_URLs_to_display_images")".

## Anmerkungen

Immer, wenn `createObjectURL()` aufgerufen wird, wird eine neue Objekt-URL erzeugt, auch wenn schon eine URL für das gleiche Objekt existiert. Jede dieser URLs muss durch einen Aufruf von {{domxref("URL.revokeObjectURL()")}} wieder freigegeben werden, sofern sie nicht mehr benötigt wird. Wenn das Dokument geschlossen wird, gibt der Browser die URLs automatisch wieder frei. Für eine optimale Performance and Speichernutzung sollten die URLs freigegeben werden, sofern sichergestellt werden kann, dass sie nicht mehr benötigt werden.

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar         |
| ------------------------------------------------------------------------ | ---------------------------- | ----------------- |
| {{SpecName('File API', '#dfn-createObjectURL', 'URL')}} | {{Spec2('File API')}} | Erste Definition. |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("URL.revokeObjectURL()")}}
- [Using files from web applications](/de/docs/Using_files_from_web_applications "Using files from web applications")
