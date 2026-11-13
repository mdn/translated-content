---
title: "Document : méthode getElementsByName()"
short-title: getElementsByName()
slug: Web/API/Document/getElementsByName
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

La méthode **`getElementsByName()`** de l'interface {{DOMxRef("Document")}} retourne une collection {{DOMxRef("NodeList")}} d'éléments ayant un attribut `name` donné dans le document.

## Syntaxe

```js-nolint
getElementsByName(name)
```

### Paramètres

- `name`
  - : La valeur de l'attribut `name` des éléments que nous recherchons.

### Valeur de retour

Une collection {{DOMxRef("NodeList")}} dynamique, ce qui signifie qu'elle se met automatiquement à jour lorsque de nouveaux éléments avec le même `name` sont ajoutés ou supprimés du document.

## Exemples

```html
<!doctype html>
<html lang="fr">
  <head>
    <title>Exemple : utiliser document.getElementsByName</title>
  </head>
  <body>
    <input type="hidden" name="up" />
    <input type="hidden" name="down" />
  </body>
</html>
```

```js
const upNames = document.getElementsByName("up");
console.log(upNames[0].tagName); // affiche "INPUT"
```

## Notes

L'attribut `name` ne peut être appliqué que dans les documents (X)HTML.

La collection {{DOMxRef("NodeList")}} retournée contient _tous_ les éléments ayant le nom (`name`) donné, tels que {{HTMLElement("meta")}}, {{HTMLElement("object")}}, et même les éléments HTML qui ne supportent pas du tout l'attribut `name`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("document.getElementById()")}} pour retourner une référence à un élément par son ID
- La méthode {{DOMxRef("document.getElementsByTagName()")}} pour retourner les références sur les éléments avec le même [nom de balise](/fr/docs/Web/API/Element/tagName)
- La méthode {{DOMxRef("document.querySelector()")}} pour des sélecteurs par des requêtes comme `"div.maclasse"`
