---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
---

{{JSRef}}

La méthode **`link()`** permet de créer une chaîne de caractères représentant un élément HTML {{HTMLElement("a")}}, ce qui permet d'afficher la chaîne de caractères comme un lien hypertexte vers une URL donnée.

## Syntaxe

```js
str.link(url);
```

### Paramètres

- `url`
  - : Toute chaîne de caractères pouvant être utilisée comme valeur pour l'attribut `href` de la balise `a`. Cette chaîne doit être une URL valide (relative ou absolue) dont les caractères `&` sont échappés en `&amp;`, et dont les doubles quotes (`"`) doivent être échappées avec l'entité `&quot;`.

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("a")}}.

## Description

La méthode `link` permet de créer un fragment HTML avec un lien hypertexte. Le chaîne renvoyée par la méthode peut ensuite être ajoutée au document grâce aux méthodes {{domxref("document.write()")}} ou {{domxref("element.innerHTML")}}.

Les liens créés avec la méthode `link` deviennent des éléments du tableau `links`, membre de l'objet `document`. Voir {{ Domxref("document.links") }}.

## Exemples

L'exemple qui suit affiche le texte "MDN" avec un hyperlien qui envoie l'utilisateur vers le site du Mozilla Developer Network.

```js
var texteAffiché = "MDN";
var URL = "https://developer.mozilla.org/";

console.log("Cliquer ici pour revenir sur " + texteAffiché.link(URL));
// Cliquer ici pour revenir sur <a href="https://developer.mozilla.org/">MDN</a>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.anchor()")}}
