---
title: FormData.getAll()
slug: Web/API/FormData/getAll
translation_of: Web/API/FormData/getAll
---
{{APIRef("XMLHttpRequest")}}

Die **`getAll()`** Methode der {{domxref("FormData")}} Schnittstelle gibt alle Werte zurück, die innerhalb eines `FormData` Objekts mit einem gegebenen Schlüssel assoziiert sind.

> **Note:** **Hinweis**: Diese Methode ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar.

## Syntax

```js
formData.getAll(name);
```

### Parameter

- `name`
  - : Ein {{domxref("USVString")}}, der den Namen des Schlüssels darstellt, der abgerufen werden soll.

### Rückgabewerte

Ein Array von {{domxref("FormDataEntryValue")}}s.

## Beispiel

Die folgende Zeile erstellt ein leeres `FormData` Objekt:

```js
var formData = new FormData();
```

Hinzufügen von zwei `username` Werten mit Hilfe von {{domxref("FormData.append")}}:

```js
formData.append('username', 'Chris');
formData.append('username', 'Bob');
```

Der darauffolgende Aufruf der `getAll()` Funktion gibt beide `username` Werte in einem Array zurück.:

```js
formData.getAll('username'); // gibt ["Chris", "Bob"] zurück
```

## Spezifikation

| Spezifikation                                                                        | Status                               | Kommentar |
| ------------------------------------------------------------------------------------ | ------------------------------------ | --------- |
| {{SpecName('XMLHttpRequest','#dom-formdata-getall','getAll()')}} | {{Spec2('XMLHttpRequest')}} |           |

## Browser Kompatibilität

{{Compat("api.FormData.getAll")}}

## Siehe auch

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/de/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest "Using XMLHttpRequest")
- [Using FormData objects](/de/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects "DOM/XMLHttpRequest/FormData/Using_FormData_objects")
- {{HTMLElement("Form")}}
