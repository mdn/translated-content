---
title: URL.protocol
slug: Web/API/URL/protocol
tags:
  - API
  - Propriété
  - Reference
  - URL
  - protocole
translation_of: Web/API/URL/protocol
---
{{ApiRef("URL API")}}

La propriété **`protocol`** de l'interface {{domxref("URL")}} est une {{domxref("USVString")}} représentant le schéma protocolaire de URL, incluant `':'` à la fin.

{{AvailableInWorkers}}

## Syntaxe

    string = object.protocol;
    object.protocol = string;

### Valeur

Un {{domxref("USVString")}}.

## Exemples

```js
var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol');
var result = url.protocol; // Retourne:"https:"
```

## Spécifications

| Spécification                                                        | Statut               | Commentaire          |
| -------------------------------------------------------------------- | -------------------- | -------------------- |
| {{SpecName('URL', '#dom-url-protocol', 'protocol')}} | {{Spec2('URL')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.URL.protocol")}}

## A voir également

- L'interface {{domxref("URL")}} dont il est contenu.
