---
title: DOMTokenList.length
slug: Web/API/DOMTokenList/length
translation_of: Web/API/DOMTokenList/length
---
{{APIRef("DOM")}}

La propriété en lecture seule **`length`** (_longueur_) de l'interface {{domxref("DOMTokenList")}} est un `integer` (_entier_) représentant le nombre d'objets stockés dans la liste.

## Syntaxe

    tokenList.length;

### Value

Un `integer` (_entier_).

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies dans un élément {{htmlelement("span")}} en tant que `DOMTokenList` en utilisant {{domxref("Element.classList")}}, puis écrivons la longueur (_length_) de la liste dans le {{domxref("Node.textContent")}} du `<span>`.

D'abord le HTML:

```html
<span class="a b c"></span>
```

Maintenant le JavaScript:

```js
var span = document.querySelector("span");
var classes = span.classList;
var length = classes.length;

span.textContent = 'classList length = ' + length;
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

## Spécifications

| Spécification                                                                        | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG','#dom-domtokenlist-length','length')}} | {{Spec2('DOM WHATWG')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.DOMTokenList.length")}}
