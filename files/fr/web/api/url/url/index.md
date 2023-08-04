---
title: URL()
slug: Web/API/URL/URL
---

{{APIRef("URL API")}}

Le constructeur **`URL()`** renvoie un nouvel objet {{domxref("URL")}} représentant l'URL définie par les paramètres.

Si l'URL de base donnée ou l'URL résultante ne sont pas des URL valides, une {{domxref("DOMException")}} de type `SYNTAX_ERROR` est levée.

{{AvailableInWorkers}}

## Syntaxe

```
url = new URL(url, [base])
```

### Paramètres

- _url_
  - : Un {{domxref("USVString")}} représentant une URL absolue ou relative. Si l'URL est une URL relative, la base est obligatoire et sera utilisée comme URL de base. Si url est une URL absolue, une base donnée sera ignorée.
- _base_ {{optional_inline}}
  - : Un {{domxref("USVString")}} représentant l'URL de base à utiliser dans le cas où l'URL est une URL relative. Si non spécifié, il est par défaut à `''`.

> **Note :** Vous pouvez toujours utiliser un objet {{domxref ("URL")}} existant pour la base, qui se stringifie en attribut {{domxref ("DOMString.href", "href")}} de l'objet.

### Exceptions

| Exception   | Explication                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------ |
| `TypeError` | url (dans le cas d'URL absolues) ou base + URL (dans le cas d'URL relatives) n'est pas une URL valide. |

## Exemple

```js
var a = new URL("/", "https://developer.mozilla.org"); // Crée une URL pointant vers 'https://developer.mozilla.org/'
var b = new URL("https://developer.mozilla.org"); // Crée une URL pointant vers 'https://developer.mozilla.org/'
var c = new URL("en-US/docs", b); // Crée une URL pointant vers 'https://developer.mozilla.org/en-US/docs'
var d = new URL("/en-US/docs", b); // Crée une URL pointant vers 'https://developer.mozilla.org/en-US/docs'
var f = new URL("/en-US/docs", d); // Crée une URL pointant vers 'https://developer.mozilla.org/en-US/docs'
var g = new URL("/en-US/docs", "https://developer.mozilla.org/fr-FR/toto");
// Crée une URL pointant vers 'https://developer.mozilla.org/en-US/docs'
var h = new URL("/en-US/docs", a); // Crée une URL pointant vers 'https://developer.mozilla.org/en-US/docs'
var i = new URL("/en-US/docs", ""); // Déclenche une exception TypeError car '' n'est pas une URL valide
var j = new URL("/en-US/docs"); // Déclenche une exception TypeError car '/ fr-US / docs' n'est pas une URL valide
var k = new URL("http://www.example.com", "https://developers.mozilla.com");
// Crée une URL pointant vers 'http://www.example.com/'
var l = new URL("http://www.example.com", b); // Crée une URL pointant vers 'http://www.example.com/'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface à laquelle il appartient : {{domxref("URL")}}.
