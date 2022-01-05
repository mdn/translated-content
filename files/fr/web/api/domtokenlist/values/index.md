---
title: DOMTokenList.values()
slug: Web/API/DOMTokenList/values
translation_of: Web/API/DOMTokenList/values
---
{{APIRef("DOM")}}

La méthode **`values()`** (_valeurs_) de l'interface {{domxref("DOMTokenList")}} renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant aux développeurs de passer en revue toutes les valeurs contenues dans la `DOMTokenList`. Individuellement, les valeurs sont des objets {{domxref("DOMString")}} (_chaînes de caractères_).

## Syntaxe

    tokenList.values();

### Paramètres

Aucun.

### Valeur retournée

Renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}}.

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies dans un élément {{htmlelement("span")}} en tant que `DOMTokenList` en utilisant {{domxref("Element.classList")}}. Si nous récupérons un itérateur contenant les valeurs en utilisant `values()`, nous les itérons alors en utilisant une boucle [for ... of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) et écrivons chacune dans le {{domxref("Node.textContent")}} du `<span>`.

D'abord, le HTML :

```html
<span class="a b c"></span>
```

Maintenant le JavaScript :

```js
var span = document.querySelector("span");
var classes = span.classList;
var iterator = classes.values();

for(var value of iterator) {
  span.textContent += value + ' ++ ';
}
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

## Spécifications

| Spécification                                                                                                            | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG','#interface-domtokenList','values() (as iterable&lt;Node&gt;)')}} | {{Spec2('DOM WHATWG')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.DOMTokenList.values")}}
