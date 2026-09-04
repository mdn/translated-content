---
title: "Element : évènement wheel"
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`wheel`** est déclenché lorsque l'utilisateur·ice fait tourner un bouton de molette sur un périphérique de pointage (généralement une souris). Il est également déclenché pour les périphériques associés qui simulent les actions d'une molette, comme les pavés tactiles et les boules de commande.

Cet évènement remplace l'évènement {{DOMxRef("Element/mousewheel_event", "mousewheel")}} non standard et obsolète.

Ne confondez pas l'évènement `wheel` avec l'évènement {{DOMxRef("Element/scroll_event", "scroll")}}&nbsp;:

- Un évènement `wheel` ne déclenche pas nécessairement d'évènement `scroll`. Par exemple, l'élément peut ne pas être défilable. Les actions de zoom effectuées avec la molette ou le pavé tactile déclenchent également des évènements `wheel` (avec {{DOMxRef("MouseEvent/ctrlKey", "ctrlKey")}} défini sur `true`).
- Un évènement `scroll` n'est pas nécessairement déclenché par un évènement `wheel`. Les éléments peuvent également défiler avec le clavier, en faisant glisser une barre de défilement ou avec JavaScript.
- Même lorsque l'évènement `wheel` déclenche un défilement, les valeurs `delta*` de l'évènement `wheel` ne reflètent pas nécessairement le sens de défilement du contenu.

Par conséquent, ne vous appuyez pas sur les propriétés `delta*` de l'évènement `wheel` pour obtenir le sens de défilement. Détectez plutôt les changements de valeur de {{DOMxRef("Element.scrollLeft", "scrollLeft")}} et de {{DOMxRef("Element.scrollTop", "scrollTop")}} de la cible dans l'évènement `scroll`.

L'évènement `wheel` peut être annulé. Dans certains navigateurs, seul le premier évènement `wheel` d'une séquence peut être annulé, et les évènements suivants ne peuvent pas l'être. Si l'évènement est annulé, aucun défilement ni zoom n'est effectué. Cela peut entraîner des problèmes de performances, car le navigateur doit attendre le traitement de chaque évènement de molette avant de faire réellement défiler le contenu. Vous pouvez éviter cela en définissant `passive: true` lors de l'appel à {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ce qui peut amener le navigateur à produire des évènements `wheel` qui ne peuvent pas être annulés.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("wheel", (event) => { })

onwheel = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("WheelEvent")}}. Hérite de {{DOMxRef("MouseEvent")}}, de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("WheelEvent")}}

## Exemples

### Mettre un élément à l'échelle au moyen de la molette

Cet exemple montre comment mettre un élément à l'échelle en utilisant la molette de la souris (ou d'un autre périphérique de pointage).

```html
<div>Mettez-moi à l'échelle avec la molette de votre souris.</div>
```

```css
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  width: 105px;
  height: 105px;
  background: #ccddff;
  padding: 5px;
}
```

```js
let echelle = 1;
const el = document.querySelector("div");

function zoom(event) {
  event.preventDefault();

  echelle += event.deltaY * -0.01;

  // Limite l'échelle
  echelle = Math.min(Math.max(0.125, echelle), 4);

  // Applique la transformation d'échelle
  el.style.transform = `scale(${echelle})`;
}

el.onwheel = zoom;
```

{{EmbedLiveSample("Scaling_an_element_via_the_wheel", 700, 300)}}

### Équivalent de `addEventListener`

Le gestionnaire d'évènements peut également être configuré au moyen de la méthode {{DOMxRef("EventTarget/addEventListener", "addEventListener()")}}&nbsp;:

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("WheelEvent")}}
