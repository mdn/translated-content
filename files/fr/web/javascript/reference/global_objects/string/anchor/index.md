---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
---

{{JSRef}}

La méthode **`anchor()`** permet de créer une ancre HTML {{HTMLElement("a")}} qui est utilisé comme cible hypertexte.

## Syntaxe

```js
str.anchor(name);
```

### Paramètres

- `name`
  - : Une chaîne de caractères représentant l'attribut `name` de la balise à créér.

### Valeur de retour

Une chaîne de caractères qui représente un élément HTML {{HTMLElement("a")}}.

## Description

On utilise la méthode `anchor()` pour créer et afficher des ancres dans un document HTML à l'aide de JavaScript.

Ici la chaîne représente le texte que verra l'utilisateur. Le paramètre `name` représente l'attribut `name` de l'élément {{HTMLElement("a")}}.

Les ancres créées avec la méthode `anchor` deviennent des éléments accessibles à travers le tableau {{domxref("document.anchors")}}.

## Exemples

```js
var maChaîne = "Table des matières";

document.body.innerHTML = maChaîne.anchor("ancre_contenu");
```

produira le code HTML suivant :

```html
<a name="ancre_contenu">Table des matières</a>
```

## Prothèse d'émulation (_polyfill_)

```js
if (!String.prototype.anchor) {
  String.prototype.anchor = function (x) {
    return '<a name="' + x + '">' + this + "</a>";
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.link()")}}
