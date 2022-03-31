---
title: DOMTokenList.entries()
slug: Web/API/DOMTokenList/entries
translation_of: Web/API/DOMTokenList/entries
---
{{APIRef("DOM")}}

La méthode **`DOMTokenList.entries()`** renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant de parcourir toutes les paires clé / valeur contenues dans cet objet. Les valeurs sont des objets {{domxref("DOMString")}} (_chaînes de caractères_), chacun représentant une seule marque.

## Syntaxe

    tokenList.entries();

### Valeur retournée

Renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}}.

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies sur un élément {{htmlelement("span")}} en tant que `DOMTokenList` en utilisant {{domxref("Element.classList")}}. Nous récupérons un itérateur contenant les paires clé / valeur en utilisant `entries()`, puis parcourons chacune d'entre elles en utilisant une boucle [for ... of](/fr/docs/Web/JavaScript/Reference/Instructions/for...of) , et les écrivons dans un  {{domxref("Node.textContent")}}  du `<span>`.

D'abord le HTML :

```html
<span class="a b c"></span>
```

Maintenant le JavaScript :

```js
var span = document.querySelector("span");
var classes = span.classList;
var iterator = classes.entries();

for(var value of iterator) {
  span.textContent += value + ' ++ ';
}
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Exemples', '100%', 60) }}

## Spécifications

| Spécification                                                                                                            | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG','#interface-domtokenlist','entries() (as iterable&lt;Node&gt;)')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DOMTokenList.entries")}}

## Voir aussi

- {{domxref("DOMSettableTokenList")}} (objet qui étend DOMTokenList avec la propriété définissable _.value_)
