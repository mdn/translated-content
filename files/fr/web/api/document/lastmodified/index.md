---
title: Document.lastModified
slug: Web/API/Document/lastModified
---

{{APIRef("DOM")}}

Retourne une chaîne de caractère contenant la date et l'heure à laquelle le présent document a été modifié pour la dernière fois.

## Syntaxe

```js
string = document.lastModified;
```

## Exemples

### Exemple #1: Utilisation simple

```js
alert(document.lastModified);
// renvoie: 11/28/2015 16:11:15
```

### Exemple #2: Transformer `lastModified` en un objet de type [`Date`](/fr/docs/JavaScript/Reference/Global_Objects/Date)

```js
var oLastModif = new Date(document.lastModified);
```

### Exemple #3: Transformer `lastModified` en un nombre de millisecondes passées depuis le 1 Janvier 1970 à 00:00:00, heure locale

```js
var nLastModif = Date.parse(document.lastModified);
```

## Notes

Veuillez noter qu'en tant que chaîne de caractères, `lastModified` ne peut être _facilement_ utilisé pour des comparaisons entre les dates modifiées des documents. Voici un exemple possible qui montre comment afficher une alerte quand la page change (voir aussi [l'API des cookies en JavaScript](/fr/docs/Web/API/Document/cookie))&nbsp;:

```js
if (
  Date.parse(document.lastModified) >
  parseFloat(
    document.cookie.replace(
      /(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    ) || "0",
  )
) {
  document.cookie =
    "last_modif=" +
    Date.now() +
    "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" +
    location.pathname;
  alert("Cette page a changé !");
}
```

… le même exemple, mais en ignorant la première visite:

```js
var nLastVisit = parseFloat(
    document.cookie.replace(
      /(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    ),
  ),
  nLastModif = Date.parse(document.lastModified);

if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
  document.cookie =
    "last_modif=" +
    Date.now() +
    "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" +
    location.pathname;
  if (isFinite(nLastVisit)) {
    alert("Cette page a changé !");
  }
}
```

> **Note :** WebKit renvoie le temps sous forme de chaîne de caractère en UTC; Gecko et Internet Explorer renvoient le temps selon le fuseau horaire local. (Voir: [Bogue 4363 – document.lastModified renoive la date en UTC, mais devrait la renvoyer selon le fuseau horaire local](https://bugs.webkit.org/show_bug.cgi?id=4363))

Si vous voulez savoir **si _une page externe_ a changé,** veuillez lire [ce paragraphe à propos de l'API `XMLHttpRequest()`](/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Get_last_modified_date).

## Spécification

HTML5

## Compatibilité des navigateurs

{{Compat}}
