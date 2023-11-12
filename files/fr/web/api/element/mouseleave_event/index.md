---
title: "Element : évènement mouseleave"
slug: Web/API/Element/mouseleave_event
---

{{APIRef}}

L'évènement **`mouseleave`** est déclenché à partir d'un {{domxref("Element")}} lorsque le curseur d'un dispositif de pointage (ex. une souris) se déplace en dehors de cet élément.

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
        {{domxref("GlobalEventHandlers.onmouseleave", "onmouseleave")}}
      </td>
    </tr>
  </tbody>
</table>

`mouseleave` et [`mouseout`](/fr/docs/Web/API/Element/mouseout_event) se ressemblent mais `mouseleave` ne remonte pas dans le DOM tandis que `mouseout` remonte. `mouseleave` est donc déclenché lorsque le pointeur a quitté l'élément et tout ses descendants tandis que `mouseout` est déclenché lorsque le pointeur quitte l'élément ou l'un des descendants (quand bien même il serait toujours sur le parent).

![](mouseleave.png)

Un évènement `mouseleave` est envoyé à chaque élément de la hiérarchie lorsqu'on les quitte. Les quatre évènements sont envoyés chacun aux quatre élément de la hiérarchie lorsque le pointeur se déplace du texte à une zone en dehors du `<div>` le plus haut dans la hiérarchie.

![](mouseout.png)

Un seul évènement `mouseout` est envoyé à l'élément le plus profond du DOM puis remonte le long de la hiérarchie tant qu'il n'est pas annulé ou qu'il n'a pas atteint la racine.

## Exemples

Voir la documentation de [`mouseout`](/fr/docs/Web/API/Element/mouseout_event) pour un exemple sur les différences entre `mouseout` et `mouseleave`.

Ici, on utilise l'évènement `mouseenter` pour modifier la bordure d'un élément `div` lorsque la souris rentre sur cet espace. Ensuite, on ajoute un élément à la liste avec le nombre d'évènements `mouseenter` et `mouseleave`.

### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>Pas encore d'évènement !</li>
  </ul>
</div>
```

### CSS

On met le `div` en forme afin de le rendre plus visible.

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
  addListItem(
    "Voici le nombre d'évènements mouseenter : " + enterEventCount + ".",
  );
});

mouseTarget.addEventListener("mouseleave", (e) => {
  mouseTarget.style.border = "1px solid #333";
  leaveEventCount++;
  addListItem(
    "Voici le nombre d'évènements mouseleave : " + leaveEventCount + ".",
  );
});

function addListItem(text) {
  //  On crée un noeud texte avec le texte passé en argument
  var newTextNode = document.createTextNode(text);

  // On crée un nouvel élément li
  var newListItem = document.createElement("li");

  // On ajoute le noeud texte à l'élément li
  newListItem.appendChild(newTextNode);

  // On ajoute le nouvel élément à la liste
  unorderedList.appendChild(newListItem);
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

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
  - [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
