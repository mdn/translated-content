---
title: "HTMLTitleElement : propriété text"
short-title: text
slug: Web/API/HTMLTitleElement/text
l10n:
  sourceCommit: 396bda9a41c74e0c58dfa235d2c17b706677dc29
---

{{APIRef("HTML DOM")}}

La propriété **`text`** de l'interface {{domxref("HTMLTitleElement")}} représente le contenu textuel enfant du titre du document sous forme de chaîne de caractères. Elle contient le contenu de l'élément HTML {{HTMLelement("title")}} en tant que texte&nbsp;: si des balises HTML sont incluses dans l'élément `<title>`, elles sont incluses dans la valeur de la chaîne et ne sont pas interprétées comme du HTML.

Attribuer une valeur à la propriété `text` remplace l'intégralité du contenu textuel du `<title>`.

## Valeur

Une chaîne de caractères.

## Exemples

Considérez l'exemple ci-dessous&nbsp;:

```html
<!doctype html>
<html lang="fr">
  <head>
    <title>
      Bonjour le monde&nbsp;! <span class="highlight">N'est-ce pas
      merveilleux</span> vraiment&nbsp;?
    </title>
  </head>
  <body></body>
</html>
```

```js
const title = document.querySelector("title");
console.log(title.text); // "Bonjour le monde ! <span class=\"highlight\">N'est-ce pas merveilleux</span> vraiment ?"
title.text = "Mettre à jour le titre";
```

Comme vous pouvez le voir, la balise `span` n'est pas interprétée&nbsp;: le contenu de l'élément `<title>` est traité comme du texte brut et renvoyé tel quel.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
