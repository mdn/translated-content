---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La fonction **`encodeURIComponent()`** encode un {{Glossary("URI")}} en remplaçant chaque occurrence de certains caractères par une, deux, trois ou quatre séquences d'échappement représentant l'encodage {{Glossary("UTF-8")}} du caractère (il n'y aura quatre séquences d'échappement que pour les caractères composés de deux demi-codets). Par rapport à {{JSxRef("encodeURI()")}}, cette fonction encode davantage de caractères, y compris ceux qui font partie de la syntaxe de l'URI.

{{InteractiveExample("Démonstration JavaScript&nbsp;: encodeURIComponent()", "shorter")}}

```js interactive-example
// Encode les caractères tels que ?,=,/,&,:
console.log(`?x=${encodeURIComponent("test?")}`);
// Résultat attendu : "?x=test%3F"

console.log(`?x=${encodeURIComponent("шеллы")}`);
// Résultat attendu : "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
```

## Syntaxe

```js-nolint
encodeURIComponent(uriComponent)
```

### Paramètres

- `uriComponent`
  - : Une chaîne de caractères à encoder comme composant d'URI (un chemin, une chaîne de requête, un fragment, etc.). Les autres valeurs sont [contrainte en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#contrainte_de_chaîne_de_caractères).

### Valeur de retour

Une nouvelle chaîne de caractères qui représente le `uriComponent` fourni, encodé comme composant d'URI.

### Exceptions

- {{JSxRef("URIError")}}
  - : Levée si `uriComponent` contient un [codet suppléant isolé](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_clusters_de_graphèmes).

## Description

`encodeURIComponent()` est une propriété de fonction de l'objet global.

`encodeURIComponent()` utilise le même algorithme d'encodage que celui décrit dans {{JSxRef("encodeURI()")}}. Il échappe tous les caractères **sauf**&nbsp;:

```plain
A—Z a—z 0—9 - _ . ! ~ * ' ( )
```

Par rapport à {{JSxRef("encodeURI()")}}, `encodeURIComponent()` échappe un ensemble plus large de caractères. Utiliser `encodeURIComponent()` sur les champs saisis par l'utilisateur·ice dans les formulaires envoyés au serveur — cela encode les symboles `&` qui peuvent être générés par inadvertance lors de la saisie de données pour {{Glossary("character reference", "la références de caractères")}} ou d'autres caractères qui nécessitent un encodage/décodage. Par exemple, si un·e utilisateur·ice écrit `Jack & Jill`, sans `encodeURIComponent()`, l'esperluette peut être interprétée par le serveur comme le début d'un nouveau champ et compromettre l'intégrité des données.

Pour [`application/x-www-form-urlencoded` <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm), les espaces doivent être remplacés par `+`, il peut donc être utile de suivre un remplacement `encodeURIComponent()` par un remplacement supplémentaire de `%20` par `+`.

## Exemples

### Encodage pour les en-têtes `Content-Disposition` et `Link`

L'exemple suivant fournit l'encodage spécial requis dans les paramètres d'en-tête de réponse du serveur UTF-8 {{HTTPHeader("Content-Disposition")}} et {{HTTPHeader("Link")}} (par exemple, des noms de fichiers en UTF-8)&nbsp;:

```js
const nomFichier = "mon fichier(2).txt";
const enTete = `Content-Disposition: attachment; filename*=UTF-8''${encodeRFC5987ValueChars(
  nomFichier,
)}`;

console.log(enTete);
// "Content-Disposition: attachment; filename*=UTF-8''mon%20fichier%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Ce qui suit crée les séquences %27 %28 %29 %2A (Remarquez que
      // l'encodage valide de "*" est %2A, ce qui nécessite d'appeler
      // toUpperCase() pour encoder correctement). Bien que RFC3986
      // réserve "!", la RFC5987 ne le fait pas, il n'est donc pas
      // nécessaire de l'échapper.
      .replace(
        /['()*]/g,
        (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
      )
      // Ce qui suit n'est pas requis pour l'encodage en pourcentage
      // selon la RFC5987, on peut donc bénéficier d'une meilleure
      // lisibilité sur le fil&nbsp;: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

### Encodage pour RFC3986

La [RFC3986 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc3986) plus récente réserve `!`, `'`, `(`, `)` et `*`, même si ces caractères n'ont pas d'usage formalisé de délimitation d'URI. La fonction suivante encode une chaîne de caractères pour le format de composant d'URL conforme à RFC3986. Elle encode également `[` et `]`, qui font partie de la syntaxe URI {{Glossary("IPv6")}}. Une implémentation conforme à RFC3986 de `encodeURI` ne doit pas les échapper, ce qui est démontré dans l'[exemple `encodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encodage_pour_rfc3986).

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Encoder un codet suppléant isolé génère une exception

Une {{JSxRef("URIError")}} sera levée si vous tentez d'encoder un codet suppléant qui ne fait pas partie d'une paire haut-bas. Par exemple&nbsp;:

```js
// Paire haut-bas OK
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Codet suppléant haut isolé génère "URIError: malformed URI sequence"
encodeURIComponent("\uD800");

// Codet suppléant bas isolé génère "URIError: malformed URI sequence"
encodeURIComponent("\uDFFF");
```

Vous pouvez utiliser {{JSxRef("String.prototype.toWellFormed()")}}, qui remplace les codets suppléants isolés par le caractère de remplacement Unicode (U+FFFD), pour éviter cette erreur. Vous pouvez aussi utiliser {{JSxRef("String.prototype.isWellFormed()")}} pour vérifier si une chaîne de caractères contient des codets suppléants isolés avant de la passer à `encodeURIComponent()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{JSxRef("decodeURI()")}}
- La fonction {{JSxRef("encodeURI()")}}
- La fonction {{JSxRef("decodeURIComponent()")}}
