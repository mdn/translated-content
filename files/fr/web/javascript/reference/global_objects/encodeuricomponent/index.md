---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
---

{{jsSidebar("Objects")}}

La fonction **`encodeURIComponent()`** permet d'encoder un composant d'un Uniform Resource Identifier (URI) en remplaçant chaque exemplaire de certains caractères par une, deux, trois ou quatres séquences d'échappement UTF-8 correspondantes (quatre séquences seront utilisées uniquement lorsque les caractères à encoder sont composés de deux caractères « _surrogate_ »).

{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html")}}

## Syntaxe

```js
encodeURIComponent(str);
```

### Paramètres

- `str`
  - : Une chaîne de caractères qui correspond à un composant d'URI.

### Valeur de retour

Une nouvelle chaîne de caractères qui représente un composant d'URI obtenu en encodant la chaîne passée en argument.

## Description

`encodeURIComponent()` échappe tous les caractères sauf : les lettres de l'alphabet latin, les chiffres (arabes) et `- _ . ! ~ * ' ( )`

La méthode `encodeURIComponent()` diffère de la méthode `encodeURI()` par rapport aux caractères qui sont encodés :

```js
var set1 = ";,/?:@&=+$"; // Caractères réservés
var set2 = "-_.!~*'()"; // Caractères non-réservés
var set3 = "#"; // Croisillon
var set4 = "ABC abc 123"; // Caractères alphanumériques et espace

console.log(encodeURI(set1)); // ;,/?:@&=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (l'espace est encodé en %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (l'espace est encodé en %20)
```

Une exception {{jsxref("URIError")}} sera levée lorsqu'on utilise cette fonction sur un unique demi-codet qui est censé faire partie d'une paire de demi-codets :

```js
// la paire de demi-codets : OK
console.log(encodeURIComponent("\uD800\uDFFF"));

// seul le demi-codet supérieur : "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uD800"));

// seul le demi-codet inférieur : "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uDFFF"));
```

Afin d'éviter des requêtes inattendues vers le serveur, il est conseillé d'utiliser la fonction `encodeURIComponent()` pour n'importe quel paramètre qui aurait été saisi par l'utilisateur et qui ferait partie d'un URI. Ainsi, si un utilisateur peut saisir "`Thym &access=admin`" dans une variable `commentaire` et qu'on n'utilise pas `encodeURIComponent()`, on obtiendra la chaîne `commentaire=Thym%20&access=admin`. On voit ici que l'esperluette (&) et le signe égal forment une nouvelle paire clé/valeur. Au lieu d'avoir une clé POST `commentaire` égale à "`Thym &access=admin`", on aura deux clés POST, l'une égale à "`Thym`" et une seconde (`access`) égale à `admin`.

Pour [`application/x-www-form-urlencoded`](https://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm), les espaces sont remplacés par un '+', aussi, dans ce cas, on pourra ajouter un remplacement supplémentaire après `encodeURIComponent()` pour remplacer "%20" par "+".

Pour utiliser une fonction qui respecte la [RFC 3986](https://tools.ietf.org/html/rfc3986), plus stricte (qui réserve les caractères !, ', (, ), et \* même si ces caractères n'ont pas d'usage normalisé), on pourra utiliser la fonction suivante :

```js
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
}
```

## Exemples

Dans l'exemple qui suit, on utilise une méthode spéciale pour l'encodage afin d'utiliser les paramètres d'en-tête de réponse `Content-Disposition` et `Link` (pour, par exemple, représenter des noms de fichiers en UTF-8) :

```js
var nomFichier = "mon fichier(2).txt";
var header =
  "Content-Disposition: attachment; filename*=UTF-8''" +
  encodeRFC5987ValueChars(nomFichier);

console.log(header);
// affiche "Content-Disposition: attachment; filename*=UTF-8''mon%20fichier%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Bien que la RFC 3986 réserve "!", RFC 5987 ne réserve pas ce caractère,
      // il n'est donc pas nécessaire l'échapper
      .replace(/['()]/g, escape) // c'est-à-dire %27 %28 %29
      .replace(/\*/g, "%2A")
      // Selon la RFC 5987 ce qui suit n'est pas nécessairement requis
      // on peut donc bénéficier d'un peu plus de lisibilité : |`^
      .replace(/%(?:7C|60|5E)/g, unescape)
  );
}

// Voici une autre version équivalente
function encodeRFC5987ValueChars2(str) {
  return (
    encodeURIComponent(str)
      // Bien que la RFC 3986 réserve "!", RFC 5987 ne réserve pas ce caractère,
      // il n'est donc pas nécessaire l'échapper
      .replace(/['()*]/g, (c) => "%" + c.charCodeAt(0).toString(16)) // i.e., %27 %28 %29 %2a
      // on notera que l'encodage valide pour "*" est %2A et qui faut donc appeler toUpperCase()
      // pour encoder exactement.

      // Selon la RFC 5987 ce qui suit n'est pas nécessairement requis
      // on peut donc bénéficier d'un peu plus de lisibilité : |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("decodeURIComponent")}}
