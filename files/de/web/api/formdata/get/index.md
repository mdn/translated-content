---
title: FormData.get()
slug: Web/API/FormData/get
translation_of: Web/API/FormData/get
---
{{APIRef("XMLHttpRequest")}}

Die **`get()`** Methode der {{domxref("FormData")}} Schnittstelle gibt die den ersten Wert, der dem gegebenen Schlüssel zugeordnet ist, aus dem `FormData` Objekt zurück. Wenn mehrere Werte zu erwarten sind und diese alle verwendet werden sollen, sollte stattdeessen die Methode {{domxref("FormData.getAll()","getAll()")}} verwendet werden.

> **Note:** **Hinweis:** Diese Methode ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar.

## Syntax

    formData.get(name);

### Parameter

- `name`
  - : Ein {{domxref("USVString")}}, der den Namen des abzurufenden Schlüssels repräsentiert.

### Rückgabewert

Ein {{domxref("FormDataEntryValue")}}, der den Wert enthält.

## Example

Die folgende Zeile erzeugt ein leeres `FormData` Objekt:

```js
var formData = new FormData();
```

Wenn man zwei Werte als `benutzername` mit {{domxref("FormData.append")}} hinzufügt:

```js
formData.append('benutzername', 'Chris');
formData.append('benutzername', 'Bob');
```

Der folgende Aufruf der `get()` Funktion liefert dann nur den zuerst hinzugefügten Wert für `benutzername`:

```js
formData.get('benutzername'); // Gibt "Chris" zurück
```

## Spezifikationen

| Spezifikation                                                                | Status                               | Kommentar |
| ---------------------------------------------------------------------------- | ------------------------------------ | --------- |
| {{SpecName('XMLHttpRequest','#dom-formdata-get','get()')}} | {{Spec2('XMLHttpRequest')}} |           |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/de/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest "Using XMLHttpRequest")
- [Using FormData objects](/de/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects "DOM/XMLHttpRequest/FormData/Using_FormData_objects")
- {{HTMLElement("Form")}}
