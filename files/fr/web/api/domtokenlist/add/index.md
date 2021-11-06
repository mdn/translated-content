---
title: DOMTokenList.add()
slug: Web/API/DOMTokenList/add
translation_of: Web/API/DOMTokenList/add
---
{{APIRef("DOM")}}

La méthode **`add()`** de l'interface {{domxref("DOMTokenList")}} ajoute  le _token_ (_marque_) à la liste.

## Syntaxe

    tokenList.add(token1[, token2[, ...]]);

### Paramètres

- token
  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant la marque (_token_) que vous souhaitez ajouter à la liste.

### Valeur renvoyée

Vide.

## Exemples

Dans l'exemple suivant, nous récupérons une liste des classes définies sur un élément {{htmlelement("span")}} en tant que `DOMTokenList`, en utilisant {{domxref("Element.classList")}}. Nous ajoutons alors une nouvelle marque à la  liste et écrivons la liste dans un  {{domxref("Node.textContent")}} du `<span>`.

Tout d'abord, le code HTML :

```html
<span class="a b c"></span>
```

Maintenant, le JavaScript :

```js
var span = document.querySelector("span");
var classes = span.classList;
classes.add("d");
span.textContent = classes;
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

Vous pouvez ajouter plusieurs _token_ :

```js
span.classList.add("d", "e", "f");
```

## Spécifications

| Spécification                                                                | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG','#dom-domtokenlist-add','add()')}} | {{Spec2('DOM WHATWG')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.DOMTokenList.add")}}
