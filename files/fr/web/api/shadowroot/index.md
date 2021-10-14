---
title: ShadowRoot
slug: Web/API/ShadowRoot
tags:
  - API
  - Interface
  - Reference
  - ShadowRoot
  - Web Components
translation_of: Web/API/ShadowRoot
---
{{APIRef('Shadow DOM')}}

L'interface **`ShadowRoot`**, relative à l'API _Shadow DOM_, représente la racine d'un sous-arbre du DOM dont le rendu est effectué séparément de celui du DOM de l'arbre principal.

Il est possible de récupérer une référence à la racine _shadow_ d'un élément via la propriété {{domxref("Element.shadowRoot")}} si la racine a été créée avec la méthode {{domxref("Element.attachShadow()")}} et l'option `mode` qui valait `open`.

## Propriétés

- {{domxref("ShadowRoot.delegatesFocus")}} {{readonlyinline}} {{non-standard_inline}}
  - : Cette propriété renvoie un booléen qui indique si l'option `delegatesFocus` a été activée lors de la liaison avec la racine _shadow_ (cf. {{domxref("Element.attachShadow()")}}).
- {{domxref("ShadowRoot.host")}} {{readonlyinline}}
  - : Cette propriété renvoie une référence à l'élément DOM auquel la racine `ShadowRoot` est attachée.
- {{domxref("ShadowRoot.innerHTML")}} {{non-standard_inline}}
  - : Cette propriété permet de définir ou de récupérer le sous-arbre DOM contenu à l'intérieur de la racine `ShadowRoot`.
- {{domxref("ShadowRoot.mode")}} {{readonlyinline}}
  - : Cette propriété renvoie le mode utilisé pour la racine `ShadowRoot` : `open` ou `closed`. Cette valeur indique si les fonctionnalités internes à la racine sont accessibles depuis JavaScript.

### Propriétés incluses via `DocumentOrShadowRoot`

_L'interface `ShadowRoot` inclut les propriétés suivantes grâce au_ mixin _{{domxref("DocumentOrShadowRoot")}}. Attention, ceci n'est actuellement (11/2019) implémenté qu'avec Chrome et les autres navigateurs continuent d'implémenter l'interface {{domxref("Document")}}._

- {{domxref("DocumentOrShadowRoot.activeElement")}} {{readonlyInline}}
  - : L'élément ({{domxref('Element')}}) au sein du sous-arbre _shadow_ qui a le focus.
- {{domxref("DocumentOrShadowRoot.styleSheets")}} {{readonlyInline}}
  - : Une liste {{domxref('StyleSheetList')}} d'objets {{domxref('CSSStyleSheet')}} qui référencent les feuilles de styles liées explicitement ou embarquées dans le document.

## Méthodes

_L'interface `ShadowRoot` inclut les méthodes suivantes qui proviennent du_ mixin _{{domxref("DocumentOrShadowRoot")}}. Attention, ceci n'est actuellement (11/2019) implémenté qu'avec Chrome et les autres navigateurs continuent d'implémenter l'interface {{domxref("Document")}}._

- {{domxref("DocumentOrShadowRoot.getSelection()")}}
  - : Cette méthode renvoie un objet {{domxref('Selection')}} représentant le fragment de texte sélectionné par l'utilisateur ou la position courante du curseur.
- {{domxref("DocumentOrShadowRoot.elementFromPoint()")}}
  - : Cette méthode renvoie l'élément le plus haut situé aux coordonnées passées en arguments.
- {{domxref("DocumentOrShadowRoot.elementsFromPoint()")}}
  - : Cette méthode renvoie un tableau de tous les éléments situés aux coordonnées passées en arguments.
- {{domxref("DocumentOrShadowRoot.caretPositionFromPoint()")}}
  - : Cette méthode renvoie un objet {{domxref('CaretPosition')}} contenant le nœud DOM sur lequel est le curseur ainsi que la position du curseur sur ce nœud.

## Exemples

Les fragments de code suivants sont extraits de l'exemple [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks) ([voir le résultat en _live_](https://mdn.github.io/web-components-examples/life-cycle-callbacks)) qui crée un élément affichant un carré avec une taille et une couleur fournies par les attributs de l'élément.

Dans la définition de la classe pour l'élément `<custom-square>`, on ajoute certains _callbacks_ permettant de gérer le cycle de vie de l'élément avec un appel à une fonction externe `updateStyle()` qui applique la taille et la couleur à l'élément. On lui passe l'argument `this` (c'est-à-dire l'élément lui-même).

```js
connectedCallback() {
  console.log("Le carré personnalisé a été ajouté à la page.");
  updateStyle(this);
}

attributeChangedCallback(nom, ancienneValeur, nouvelleValeur) {
  console.log("Les attributs du carré ont changé.");
  updateStyle(this);
}
```

Quant à la fonction `updateStyle()`, voyons ici son fonctionnement. On récupère une référence au _shadow DOM_ avec {{domxref("Element.shadowRoot")}}. Ensuite, on utilise un parcours pour le sous-arbre afin de trouver l'élément {{htmlelement("style")}} présent dans le _shadow DOM_ et on met à jour le CSS pour cet élément :

```js
function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {
      childNodes[i].textContent =
        'div {' +
          'width: ' + elem.getAttribute('l') + 'px;' +
          'height: ' + elem.getAttribute('l') + 'px;' +
          'background-color: ' + elem.getAttribute('c') + ';' +
        '}';
    }
  }
}
```

## Spécifications

| Spécification                                                                                    | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('DOM WHATWG','#interface-shadowroot','Interface ShadowRoot')}} | {{Spec2('DOM WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("api.ShadowRoot")}}
