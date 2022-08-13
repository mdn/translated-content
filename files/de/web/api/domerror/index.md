---
title: DOMError
slug: Web/API/DOMError
tags:
  - API
  - DOM
  - Fehler
  - Interface
  - Referenz
translation_of: Web/API/DOMError
---
{{ APIRef("DOM") }}

Das **`DOMError-`**Interface beschreibt ein Fehler-Objekt, welches ein Fehlername enthält.

## Eigenschaften

- {{domxref("DOMError.name")}} {{readOnlyInline}}
  - : Gibt ein {{ domxref("DOMString") }} zurück, welcher einer der folgenden Fehlertypnamen repäsentiert (siehe unten).

## Fehlertypen

| Typ                          | Beschreibung                                                                                          |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| `IndexSizeError`             | Der Index ist ausserhalb des gültigen Bereichs (z. B. bei einem {{ domxref("range") }}-Objekt). |
| `HierarchyRequestError`      | Die Knoten-Baum-Hierarchie ist nicht korrekt.                                                         |
| `WrongDocumentError`         | Das Objekt ist im falschen {{ domxref("document") }}.                                          |
| `InvalidCharacterError`      | Der String beeinhaltet unglütige Charakter.                                                           |
| `NoModificationAllowedError` | Das Objekt kann nicht modifiziert werden.                                                             |
| `NotFoundError`              | Das Objekt kann nicht gefunden werden.                                                                |
| `NotSupportedError`          | Die Operation wird nicht unterstützt                                                                  |
| `InvalidStateError`          | Das Objekt hat einen ungültigen Status.                                                               |
| `SyntaxError`                | Der String entspricht nicht den erwarteten Muster.                                                    |
| `InvalidModificationError`   | Das Objekt kann nicht in dieser Art modifiziert werden.                                               |
| `NamespaceError`             | Die Operation ist nicht erlaubt in XML-Namespaces.                                                    |
| `InvalidAccessError`         | Das Objekt unterstützt diese Operation oder dieses Argument nicht.                                    |
| `TypeMismatchError`          | Der Typ des Objekts entspricht nicht dem erwarteten Typ.                                              |
| `SecurityError`              | Diese Operation ist unsicher.                                                                         |
| `NetworkError`               | Ein Netzwerkfehler ist aufgetreten.                                                                   |
| `AbortError`                 | Die Operation wurde abgebrochen.                                                                      |
| `URLMismatchError`           | Die angegebene URL entspricht nicht einer anderen URL.                                                |
| `QuotaExceededError`         | Das Kontingent wurde überschritten.                                                                   |
| `TimeoutError`               | Timeout bei der Operation.                                                                            |
| `InvalidNodeTypeError`       | Der Knoten ist nicht korrekt oder hat falsche Vorfahren für die Operation.                            |
| `DataCloneError`             | Das Objekt kann nicht geklont werden.                                                                 |

## Spezifikationen

| Spezifikation                                                            | Status                   | Kommentar           |
| ------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName('DOM4', '#interface-domerror', 'DOMError')}} | {{Spec2('DOM4')}} | Initial definition. |

## Browser-Kompatiblität

{{Compat}}

## Siehe auch

- {{ domxref("DOMException") }}
