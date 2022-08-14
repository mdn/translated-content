---
title: FormData
slug: Web/API/FormData
tags:
  - API
  - FomData
  - Interface
  - Referenz
  - XMLHttpRequest
translation_of: Web/API/FormData
---
{{APIRef("XMLHttpRequest")}}

Das **`FormData`**-Interface ermöglicht das einfache Erstellen eines Objektes bestehend aus Schlüssel/Werte-Paaren, welche Formular-Felder und ihre Werte repräsentieren. Dieses Objekt kann leicht durch das Aufrufen der {{domxref("XMLHttpRequest.send()")}} Methode abgeschickt werden. Es verwendet das gleiche Format wie ein HTML-Formular, dessen Kodierung auf `"multipart/form-data"` gesetzt wurde.

Ein Objekt, dass FormData implementiert, kann direkt in den {{jsxref("Statements/for...of", "for...of")}} Strukturen benutzt werden, statt {{domxref('FormData.entries()', 'entries()')}} zu verwenden: `for (var p of myFormData)` ist identisch zu `for (var p of myFormData.entries())`.

> **Note:** **Hinweis**: Dieses Feature ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar.

## Konstruktor

- {{domxref("FormData.FormData","FormData()")}}
  - : Erzeugt ein neues `FormData`-Objekt.

## Methoden

- {{domxref("FormData.append()")}}
  - : Fügt den Wert an den Wert eines bestehenden Schlüssel/Wert-Paares in einem `FormData`-Objekt an, oder fügt den Schlüssel mit dem Wert hinzu hinzu, falls dieser nicht vorhanden ist.
- {{domxref("FormData.delete()")}}
  - : Löscht ein Schlüssel/Wert-Paar aus einem `FormData`-Objekt.
- {{domxref("FormData.entries()")}}
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, welcher das Iterieren über alle Schlüssel/Wert-Paare ermöglicht.
- {{domxref("FormData.get()")}}
  - : Gibt den ersten Wert zurück, welcher dem gegebenen Schlüssel in dem `FormData`-Objekt zugeordnet ist.
- {{domxref("FormData.getAll()")}}
  - : Erstellt ein Array, welches alle dem gegebenen Schlüssel zugeordneten Werte enthält.
- {{domxref("FormData.has()")}}
  - : Gibt einen boolean zurück, welcher Auskunft über das Vorhandenseins des gegeben Schlüssels im `FormData`-Objekt gibt.
- {{domxref("FormData.keys()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, welcher das Iterieren über alle Schlüssel der Schlüssel/Wert-Paare ermöglicht.
- {{domxref("FormData.set()")}}
  - : Ersetzt den Wert für einen bestimmten Schlüssel im `FormData`-Objekt, oder legt das Schlüssel/Wert-Paar an, sollte der Schlüssel noch nicht existieren.
- {{domxref("FormData.values()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, welcher das Iterieren über alle Werte der Schlüsselpaare ermöglicht.

## Spezifikationen

| Spezifikation                                                                        | Status                               | Kommentar                               |
| ------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------------------- |
| {{SpecName('XMLHttpRequest','#interface-formdata','FormData')}} | {{Spec2('XMLHttpRequest')}} | FormData definiert in XHR Spezifikation |

## Browserkompatibilität

{{Compat("api.FormData")}}

## Siehe auch

- {{domxref("XMLHTTPRequest")}}
- [XMLHttpRequest benutzen](/de/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [FormData-Objekte benutzen](/de/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
