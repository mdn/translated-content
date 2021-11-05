---
title: DOMTokenList.item()
slug: Web/API/DOMTokenList/item
translation_of: Web/API/DOMTokenList/item
---
{{APIRef("DOM")}}

La méthode **`item()`** de l'interface {{domxref("DOMTokenList")}} renvoie un élément de la liste par son index.

## Syntaxe

    tokenList.item(index);

### Paramètres

- index
  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant l'index de l'élément dont on veut le retour.

### Valeur retournée

Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant l'élément renvoyé. Le retour est `undefined` (_indéfini_) si le nombre est plus grand que ou égal à la longueur de la liste.

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies dans un élément {{htmlelement("span")}} en tant que `DOMTokenList` en utilisant {{domxref("Element.classList")}}. Nous récupérons le dernier élément dans la liste en utilisant _item(length-1)_ et l'écrivons dans le {{domxref("Node.textContent")}} du `<span>`.

D'abord le code HTML :

```html
<span class="a b c"></span>
```

Maintenant le JavaScript :

```js
var span = document.querySelector("span");
var classes = span.classList;
var item = classes.item(classes.length-1);
span.textContent = item;
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

## Spécifications

| Spécification                                                                    | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG','#dom-domtokenlist-item','item()')}} | {{Spec2('DOM WHATWG')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.DOMTokenList.item")}}
