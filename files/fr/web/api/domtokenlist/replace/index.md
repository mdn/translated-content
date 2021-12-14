---
title: DOMTokenList.replace()
slug: Web/API/DOMTokenList/replace
translation_of: Web/API/DOMTokenList/replace
---
{{APIRef("DOM")}}

La méthode **`replace()`** de l'interface {{domxref("DOMTokenList")}} remplace une marque _(token)_ existante par une nouvelle marque.

## Syntaxe

    tokenList.replace(oldToken,newToken);

### Paramètres

- oldToken
  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant la marque que vous voulez remplacer.
- newToken
  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant la marque avec laquelle vous voulez remplacer l'ancienne.

### Valeur retournée

Vide.

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies dans un élément {{htmlelement("span")}} en tant que `DOMTokenList` en utilisant {{domxref("Element.classList")}}. Nous remplaçons alors la marque dans la liste et écrivons la liste dans le {{domxref("Node.textContent")}} du `<span>`.

D'abord, le HTML :

```html
<span class="a b c"></span>
```

Maintenant le JavaScript :

```js
var span = document.querySelector("span");
var classes = span.classList;
try {
  classes.replace("c", "z");
  span.textContent = classes;
} catch(e) {
  span.textContent = e;
}
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG','#dom-domtokenlist-replace','replace()')}} | {{Spec2('DOM WHATWG')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.DOMTokenList.replace")}}
