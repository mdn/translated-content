---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/version
---
{{AddonSidebar}}

| Typ         | `String (ciąg znaków)` |
| ----------- | ---------------------- |
| Obowiązkowe | Tak                    |
| Przykład    | ```json                |

"version": "0.1"

````|

Wersja rozszerzenia, sformatowana jako liczby i znaki ASCII oddzielone kropkami. Szczegółowe informacje na temat formatu wersji znajdują się na stronie [Format Wersji](/pl/docs/Toolkit_version_format).

Pamiętaj, że [składnia zdefiniowana dla `version` w Chromie](https://developer.chrome.com/extensions/manifest/version) jest bardziej restrykcyjna niż ta używana w  przeglądarce Firefox:

*   wartości `version` ważne w Chrome zawsze będą ważne w Firefox
*   wartości `version` ważne w Firefox mogą nie być ważne w Chrome

## Przykład

```json
"version": "0.1"
````

## Zgodność z przeglądarkami

{{Compat("webextensions.manifest.version")}}
