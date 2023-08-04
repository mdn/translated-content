---
title: DOMTokenList.keys()
slug: Web/API/DOMTokenList/keys
---

{{APIRef("DOM")}}

La méthode **`keys()`** de l'interface {{domxref("DOMTokenList")}} renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant de parcourir toutes les clés contenues dans cet objet. Les clés sont de type `unsigned integer` _(entier non signé)_.

## Syntaxe

```js
tokenList.keys();
```

### Paramètres

Aucun.

### Valeur retournée

Renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}}.

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies dans un élément {{htmlelement("span")}} en tant que `DOMTokenList` en utilisant {{domxref("Element.classList")}}. Ensuite nous récupérons un itérateur contenant les clés en utilisant `values()`, alors, nous itérons ces clés avec une boucle [for ... of](/fr/docs/Web/JavaScript/Reference/Statements/for...of) et écrivons chacune dans le {{domxref("Node.textContent")}} du `<span>`.

D'abord, le HTML :

```html
<span class="a b c"></span>
```

Maintenant le JavaScript:

```js
var span = document.querySelector("span");
var classes = span.classList;
var iterator = classes.keys();

for (var value of iterator) {
  span.textContent += value + " ++ ";
}
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
