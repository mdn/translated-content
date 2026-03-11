---
title: "Document : propriété lastModified"
short-title: lastModified
slug: Web/API/Document/lastModified
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`lastModified`** de l'interface {{DOMxRef("Document")}} retourne une chaîne de caractères contenant la date et l'heure locales auxquelles le document actuel a été modifié pour la dernière fois.

## Valeur

Une chaîne de caractères.

## Exemples

### Utilisation simple

Cet exemple affiche une alerte avec la valeur de `lastModified`.

```js
alert(document.lastModified);
// retourne : Tuesday, December 16, 2017 11:09:42
```

### Transformer `lastModified` en un objet `Date`

Cet exemple transforme `lastModified` en un objet {{JSxRef("Date")}}.

```js
let oLastModif = new Date(document.lastModified);
```

### Transformer `lastModified` en millisecondes

Cet exemple transforme `lastModified` en nombre de millisecondes écoulées depuis le 1er janvier 1970 à 00:00:00, heure locale.

```js
let nLastModif = Date.parse(document.lastModified);
```

## Notes

Veuillez noter qu'en tant que chaîne de caractères, `lastModified` ne peut être _facilement_ utilisé pour des comparaisons entre les dates modifiées des documents. Voici un exemple possible qui montre comment afficher une alerte quand la page change (voir aussi [l'API des cookies en JavaScript](/fr/docs/Web/API/Document/cookie))&nbsp;:

```js
// Fait correspondre 'timestamp' dans 'last_modif=timestamp'
// exemple '1687964614822' dans 'last_modif=1687964614822'
const pattern = /last_modif\s*=\s*([^;]*)/;

if (
  Date.parse(document.lastModified) >
  (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;
  alert("Cette page a changé !");
}
```

… le même exemple, mais en ignorant la première visite:

```js
const pattern = /last_modif\s*=\s*([^;]*)/;

const lastVisit = parseFloat(document.cookie.replace(pattern, "$1"));
const lastModif = Date.parse(document.lastModified);

if (Number.isNaN(lastVisit) || lastModif > lastVisit) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;

  if (isFinite(lastVisit)) {
    alert("Cette page a changé !");
  }
}
```

Si vous voulez savoir lorsqu'une page _externe_ a changé, vous pouvez effectuer une requête {{HTTPMethod("HEAD")}} en utilisant l'API {{DOMxRef("Window/fetch", "fetch()")}}, et examiner l'en-tête de réponse {{HTTPHeader("Last-Modified")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
