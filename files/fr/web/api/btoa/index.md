---
title: WindowBase64.btoa()
slug: Web/API/btoa
---

{{APIRef("HTML DOM")}}

La méthode `WindowOrWorkerGlobalScope.btoa()` crée une chaîne ASCII codée en base 64 à partir d'un objet {{jsxref ("String")}} dans lequel chaque caractère de la chaîne est traité comme un octet de données binaires.

> **Note :** étant donné que cette fonction traite chaque caractère comme un octet de données binaires, quel que soit le nombre d'octets composant le caractère, une exception `InvalidCharacterError` est déclenchée si le {{Glossary("code point")}} d'un caractère quelconque est en dehors de la plage 0x00 à 0xFF. Voir [Chaînes Unicode](#chaînes_unicode) pour un exemple montrant comment encoder des chaînes avec des caractères en dehors de la plage 0x00 à 0xFF.

## Syntaxe

```js
var donneesEncodees = scope.btoa(chaineAEncoder);
```

### Paramètres

- `chaineAEncoder`
  - : Une chaîne dont les caractères représentent chacun un octet unique de données binaires à encoder en ASCII.

### Valeur retournée

Une chaîne contenant la représentation Base64 de la `chaineAEncoder`.

### Exceptions

## Exemple

```js
var donneesEncodees = window.btoa("Salut, monde"); // encode une chaîne
var donneesDecodees = window.atob(donneesEncodees); // décode la chaîne
```

## Notes

Vous pouvez utiliser cette méthode pour encoder des données qui, autrement, pourraient engendrer des problèmes de communication, les transmettre et utiliser alors la méthode [`atob()`](/fr/docs/Web/API/atob) pour décoder les données à nouveau. Par exemple, vous pouvez encoder des caractères de contrôle tels que les valeurs ASCII de 0 à 31.

`btoa()` est également disponible pour les composants XPCOM implémentés en JavaScript, même si {domxref("Window")}} n'est pas l'objet global dans les composants.

## Chaînes Unicode

Dans la plupart des navigateurs, l'appel de `btoa()` sur une chaîne Unicode engendrera une exception `InvalidCharacterError`.

Une option est d'échapper tous les caractères étendus, de telle sorte que la chaîne que vous voulez en fait encoder soit une représentation ASCII de l'original. Voyez cet exemple, noté par [Johan Sundström](http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html)&nbsp;:

```js
// Chaîne ucs-2 en ascii encodé en base64
function uena(chn) {
  return window.btoa(unescape(encodeURIComponent(chn)));
}
// Ascii encodé en base64 en chaîne ucs-2
function aenu(chn) {
  return decodeURIComponent(escape(window.atob(chn)));
}
// Usage :
uena("✓ à la mode"); // 4pyTIMOgIGxhIG1vZGU=
aenu("4pyTIMOgIGxhIG1vZGU="); // "✓ à la mode"

uena("I \u2661 Unicode!"); // SSDimaEgVW5pY29kZSE=
aenu("SSDimaEgVW5pY29kZSE="); // "I ♡ Unicode!"
```

Une solution meilleure, plus fiable et moins coûteuse consiste à [utiliser des tableaux typés pour faire la conversion](/fr/docs/Décoder_encoder_en_base64).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Base64 encoding and decoding](/fr/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)
- [Les URL de `données`](/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
- [`atob()`](/fr/docs/Web/API/atob)
- [Components.utils.importGlobalProperties](/fr/docs/Components.utils.importGlobalProperties)
