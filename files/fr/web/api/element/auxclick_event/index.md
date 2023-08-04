---
title: GlobalEventHandlers.onauxclick
slug: Web/API/Element/auxclick_event
---

{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

La propriété **`onauxclick`** du mixin {{domxref("GlobalEventHandlers")}} est un gestionnaire d'évènement pour le traitement des événements `auxclick`.

L'événement `auxclick` est déclenché lorsqu'un bouton non principal a été enfoncé sur un périphérique d'entrée (par exemple, la molette de la souris). Il se déclenche après les événements [`mousedown`](/fr/docs/Web/API/Element/mousedown_event) et [`mouseup`](/fr/docs/Web/API/Element/mouseup_event), dans cet ordre.

> **Note :** Les fournisseurs de navigateurs implémentent cette propriété dans le cadre d'un plan visant à améliorer la compatibilité en ce qui concerne le comportement des boutons. Plus précisément, le comportement des événements est mis à jour afin que l'évènement [`click`](/fr/docs/Web/API/Element/click_event) ne se déclenche que pour les clics sur le bouton principal (par exemple, le bouton gauche de la souris), tandis que l'évènement `auxclick` se déclenche pour le bouton non principal. Historiquement, [`click`](/fr/docs/Web/API/Element/click_event) s'est généralement déclenché pour le clic de n'importe quel bouton d'entrée de périphérique, bien que le comportement du navigateur soit quelque peu incohérent.

## Syntaxe

```js
target.onauxclick = functionRef;
```

### Valeur

`functionRef` est un nom de fonction ou une [function expression](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet {{domxref("MouseEvent")}} comme seul argument. Dans la fonction, [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) sera l'élément sur lequel l'événement a été déclenché.

Un seul gestionnaire `onauxclick` peut être affecté à un objet à la fois. Vous pouvez préférer utiliser la méthode {{domxref("EventTarget.addEventListener()")}} à la place, car elle est plus flexible.

## Exemple

Dans cet exemple, nous définissons des fonctions pour deux gestionnaires d'événements — {{domxref("GlobalEventHandlers.onclick", "onclick")}} et `onauxclick`. Le premier modifie la couleur de l'arrière-plan du bouton, tandis que le second modifie la couleur de premier plan (texte) du bouton. Vous pouvez voir les deux fonctions en action en essayant la démo avec une souris à plusieurs boutons ([voir en direct sur GitHub](https://mdn.github.io/dom-examples/auxclick/); également [voir le code source](https://github.com/mdn/dom-examples/blob/master/auxclick/index.html)).

```js
var button = document.querySelector("button");
var html = document.querySelector("html");

function random(number) {
  return Math.floor(Math.random() * number);
}

button.onclick = function () {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  button.style.backgroundColor = rndCol;
};

button.onauxclick = function () {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  button.style.color = rndCol;
};
```

> **Note :** Si vous utilisez une souris à trois boutons, vous remarquerez que le gestionnaire `onauxclick` est exécuté lorsque l'un des boutons non gauche de la souris est cliqué.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- `auxclick` event
- Related event handlers

  - {{domxref("GlobalEventHandlers.onclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}
