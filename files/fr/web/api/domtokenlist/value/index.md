---
title: DOMTokenList.value
slug: Web/API/DOMTokenList/value
translation_of: Web/API/DOMTokenList/value
---
{{APIRef("DOM")}}

La propriété **`value`** (_valeur_) de l'interface {{domxref("DOMTokenList")}} renvoie la valeur de la liste en tant que {{domxref("DOMString")}} (chaîne de caractères), ou efface et définit la liste à la valeur donnée.

## Syntaxe

    tokenList.value;

### Valeur

Une {{domxref("DOMString")}} (_chaîne de caractères_).

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies sur un élément {{htmlelement("span")}} en tant que `DOMTokenList` en utilisant {{domxref("Element.classList")}}, puis écrivons alors la valeur de la liste dans le {{domxref("Node.textContent")}} du `<span>`.

D'abord le HTML :

```html
<span class="a b c"></span>
```

Maintenant le JavaScript :

```js
var span = document.querySelector("span");
var classes = span.classList;
span.textContent = classes.value;
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

## Spécifications

| Spécification                                                                    | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG','#dom-domtokenlist-value','value')}} | {{Spec2('DOM WHATWG')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.DOMTokenList.value")}}
