---
title: "Element : évènement mouseenter"
slug: Web/API/Element/mouseenter_event
---

{{APIRef}}

L'évènement **`mouseenter`** est déclenché à partir d'un élément {{domxref("Element")}} lorsqu'un dispositif de pointage est déplacé et que son curseur entre sur l'élément.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Se propage/remonte dans le DOM</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété pour la gestion d'évènement</th>
      <td>
        {{domxref("GlobalEventHandlers.onmouseenter", "onmouseenter")}}
      </td>
    </tr>
  </tbody>
</table>

## Notes d'utilisation

Bien que {{domxref("Element/mouseover_event", "mouseover")}} soit similaire, `mouseenter` est différent et ne remonte pas dans le DOM et qu'il n'est pas envoyé aux descendants lorsque le pointeur passe d'un descendant à l'élément.

![](mouseenter.png)

`mouseenter` est envoyé à chaque élément de la hiérarchie lorsqu'on rentre sur eux. Voici comment 4 évènements sont envoyés aux éléments lorsque le pointeur atteint le texte.

![](mouseover.png)

Un seul évènement `mouseover` est envoyé depuis l'élément le plus profond du DOM puis remonte le DOM jusqu'à être annulé ou à atteindre la racine.

Avec des hiérarchies profondes, le nombre d'évènements `mouseenter` envoyé peut être important et entraîner des problèmes de performances. Dans ce cas, mieux vaut écouter les évènements `mouseover`.

Avec la combinaison de `mouseenter` et `mouseleave` (déclenché quand le pointeur quitte la zone de l'élément), on a un effet fortement semblable à la pseudo-classe CSS {{cssxref(':hover')}}.

## Exemples

La documentation [`mouseover`](/fr/docs/Web/API/Element/mouseover_event#Exemples) illustre la différence entre `mouseover` et `mouseenter`.

Ici, on utilise `mouseenter` pour modifier la bordure d'un `div` lorsque la souris rentre sur cet espace. On ajoute alors un élément à la liste avec le nombre d'évènements `mouseenter` ouor `mouseleave` event.

### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

### CSS

On met en forme le `div` pour le rendre plus visible.

```css
#mouseTarget {
  box-sizing: border-box;
  width: 15rem;
  border: 1px solid #333;
}
```

### JavaScript

```js
var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.getElementById("mouseTarget");
const unorderedList = document.getElementById("unorderedList");

mouseTarget.addEventListener("mouseenter", (e) => {
  mouseTarget.style.border = "5px dotted orange";
  enterEventCount++;
  addListItem("C'est le " + enterEventCount + "ème mouseenter.");
});

mouseTarget.addEventListener("mouseleave", (e) => {
  mouseTarget.style.border = "1px solid #333";
  leaveEventCount++;
  addListItem("C'est le " + leaveEventCount + "ème mouseleave.");
});

function addListItem(text) {
  // On crée un nouveau noeud text avec le texte fourni
  var newTextNode = document.createTextNode(text);

  // On crée un élément li
  var newListItem = document.createElement("li");

  // On ajoute le noeud texte à l'élément li
  newListItem.appendChild(newTextNode);

  // On ajoute l'élément de liste à la liste
  unorderedList.appendChild(newListItem);
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une introduction aux évènements](/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements)
- D'autres évènements connexes

  - [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
  - [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
  - [`mousemove`](/fr/docs/Web/API/Element/mousemove_event)
  - [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)
  - [`click`](/fr/docs/Web/API/Element/click_event)
  - [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
  - [`mouseout`](/fr/docs/Web/API/Element/mouseout_event)
  - [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
  - [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
  - [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
