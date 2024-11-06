---
title: DOMTokenList.remove()
slug: Web/API/DOMTokenList/remove
---

{{APIRef("DOM")}}

La méthode **`remove()`** de l'interface {{domxref("DOMTokenList")}} supprime sur la liste la marque (_token)_ spécifiée.

## Syntaxe

```js
tokenList.remove(token1[, token2[, ...]]);
```

### Paramètres

- tokenN...
  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant la marque que vous voulez supprimer sur la liste. Si la chaîne de caractères n'existe pas sur la liste, aucune erreur n'est levée et rien ne se passe.

### Valeur retournée

Vide.

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies dans l'élément {{htmlelement("span")}} en tant que `DOMTokenList` en utilisant {{domxref("Element.classList")}}. Nous retirons ensuite une marque sur la liste et écrivons la liste dans le {{domxref("Node.textContent")}} du `<span>`.

D'abord, le HTML :

```html
<span class="a b c"></span>
```

Maintenant le JavaScript :

```js
var span = document.querySelector("span");
var classes = span.classList;
classes.remove("c");
span.textContent = classes;
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

Pour supprimer plusieurs classes à la fois, vous pouvez utiliser un tableau (_array_) avec la [syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateur_de_décomposition). L'ordre des classes n'a pas d'importance :

```js
let span = document.getElementsByTagName("span")[0],
  classes = span.classList;

classes.remove(...["c", "b"]);
span.textContent = classes;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
