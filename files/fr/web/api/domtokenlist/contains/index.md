---
title: DOMTokenList.contains()
slug: Web/API/DOMTokenList/contains
---

{{APIRef("DOM")}}

La méthode **`contains()`** de l'interface {{domxref("DOMTokenList")}} renvoie un {{domxref("Boolean")}} (_booléen_) — `true` (_vrai_) si la liste sous-jacente contient le symbole donné, sinon `false` (_faux_).

## Syntaxe

```js
tokenList.contains(token);
```

### Paramètres

- token
  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant la "token" (_marque_) dont vous voulez vérifier l'existence dans la liste.

### Valeur renvoyée

Un {{domxref("Boolean")}} (_booléen_)— `true` (_vrai_) si la liste sous-jacente contient la marque donnée, sinon `false` (_faux_).

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies sur un élément {{htmlelement("span")}} en tant que `DOMTokenList` en utilisant {{domxref("Element.classList")}}. Nous testons ensuite l'existence de "c" dans la liste, et écrivons le résultat dans le {{domxref("Node.textContent")}} du `<span>`.

Tout d'abord, le code HTML :

```html
<span class="a b c"></span>
```

Maintenant, le JavaScript :

```js
var span = document.querySelector("span");
var classes = span.classList;
var result = classes.contains("c");
if (result) {
  span.textContent = "The classList contains 'c'";
} else {
  span.textContent = "The classList does not contain 'c'";
}
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
