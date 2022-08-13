---
title: short_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
tags:
  - Manifesto
  - Sort name
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
---
{{AddonSidebar}}

| Tipo        | `String` |
| ----------- | -------- |
| Obrigatório | No       |
| Exemplo     | ```json  |

"short_name": "Minha Extensão"

````|

Nome abreviado (short name) da extensão. Se informado, ele será usado em contextos onde o campo de nome for muito longo. É recomendado que o nome abreviado não deva exceder 12 caracteres. Se o campo do nome abreviado não for incluído no manifest.json, então o nome será usado em vez disso e pode ser truncado.

Isto é um [propriedade localizável](/en-US/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json).

## Exemplo

```json
"short_name": "Minha Extensão"
````

## Compatibilidade com navegadores

{{Compat("webextensions.manifest.short_name")}}
