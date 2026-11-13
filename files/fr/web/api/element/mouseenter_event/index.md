---
title: "Element : évènement mouseenter"
short-title: mouseenter
slug: Web/API/Element/mouseenter_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`mouseenter`** est déclenché sur un objet {{DOMxRef("Element")}} lorsqu'un dispositif de pointage (généralement une souris) est initialement déplacé de sorte que son point chaud se trouve à l'intérieur de l'élément sur lequel l'évènement a été déclenché.

Notez que «&nbsp;se déplacer dans un élément&nbsp;» fait référence à la position de l'élément dans l'arborescence DOM, et non à sa position visuelle. Par exemple, si un élément enfant est positionné de manière à être placé en dehors de son parent, alors se déplacer dans l'élément enfant déclenche `mouseenter` sur l'élément parent, même si le pointeur est toujours en dehors des limites de l'élément parent.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("mouseenter", (event) => { })

onmouseenter = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MouseEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Notes d'utilisation

Bien que {{DOMxRef("Element/mouseover_event", "mouseover")}} soit similaire, `mouseenter` diffère en ce qu'il ne [se propage pas](/fr/docs/Web/API/Event/bubbles) et qu'il n'est pas envoyé aux descendants lorsque le pointeur passe de l'espace physique d'un de ses descendants à son propre espace physique. À part cela, les évènements `mouseenter` et `mouseover` pour la même situation sont déclenchés en même temps, si nécessaire.

### Comportement des évènements `mouseenter`

Cela décrit les évènements entrée de souris reçus par chacun des quatre `<div>` concentriques sans remplissage ni marge, donc les évènements se produisent tous en même temps&nbsp;:
![Diagramme du comportement de mouseenter](mouseenter.png)
Un évènement `mouseenter` est envoyé à chaque élément de la hiérarchie lorsqu'on y entre. Ici, 4 évènements sont envoyés aux quatre éléments de la hiérarchie lorsque le pointeur atteint le texte.

### Comportement des évènements `mouseover`

![Diagramme du comportement de mouseover](mouseover.png)
Un seul évènement `mouseover` est envoyé à l'élément le plus profond de l'arborescence DOM, puis il remonte la hiérarchie jusqu'à ce qu'il soit annulé par un gestionnaire ou qu'il atteigne la racine.

Dans le cas de hiérarchies profondes, le nombre d'évènements `mouseenter` envoyés peut être très important et entraîner des problèmes de performances significatifs. Dans de tels cas, il est préférable d'écouter les évènements `mouseover`.

Combiné à l'évènement `mouseleave` correspondant (qui est déclenché au niveau de l'élément lorsque la souris quitte sa zone de contenu), l'évènement `mouseenter` agit de manière très similaire à la pseudo-classe CSS {{CSSxRef(":hover")}}.

## Exemples

La documentation {{DOMxRef("Element/mouseover_event#exemples", "mouseover")}} illustre la différence entre `mouseover` et `mouseenter`.

### `mouseenter`

L'exemple trivial suivant utilise l'évènement `mouseenter` pour modifier la bordure du `div` lorsque la souris entre dans l'espace qui lui est attribué. Il ajoute ensuite un élément à la liste avec le nombre d'évènements `mouseenter` ou `mouseleave`.

#### HTML

```html
<div id="cibleSouris">
  <ul id="listeNonOrdonnee">
    <li>Pas d'évènements pour le moment !</li>
  </ul>
</div>
```

#### CSS

On met en forme le `div` pour le rendre plus visible.

```css
#cibleSouris {
  box-sizing: border-box;
  width: 15rem;
  border: 1px solid #333333;
}
```

#### JavaScript

```js
let compteEventEntree = 0;
let compteEventSortie = 0;
const cibleSouris = document.getElementById("cibleSouris");
const listeNonOrdonnee = document.getElementById("listeNonOrdonnee");

cibleSouris.addEventListener("mouseenter", (e) => {
  cibleSouris.style.border = "5px dotted orange";
  compteEventEntree++;
  ajouterDansListe(
    `Ceci est l'évènement mouseenter numéro ${compteEventEntree}.`,
  );
});

cibleSouris.addEventListener("mouseleave", (e) => {
  cibleSouris.style.border = "1px solid #333333";
  compteEventSortie++;
  ajouterDansListe(
    `Ceci est l'évènement mouseleave numéro ${compteEventSortie}.`,
  );
});

function ajouterDansListe(texte) {
  // Crée un nouveau nœud de texte utilisant le texte fournit
  const nouveauNoeudTexte = document.createTextNode(texte);

  // Crée un nouvel élément li
  const nouvelElementListe = document.createElement("li");

  // Ajoute le nœud de texte à l'élément li
  nouvelElementListe.appendChild(nouveauNoeudTexte);

  // Ajoute l'élément de liste nouvellement créé à la liste
  listeNonOrdonnee.appendChild(nouvelElementListe);
}
```

#### Résultat

{{EmbedLiveSample("`mouseenter`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}}
- L'évènement {{DOMxRef("Element/mouseup_event", "mouseup")}}
- L'évènement {{DOMxRef("Element/mousemove_event", "mousemove")}}
- L'évènement {{DOMxRef("Element/click_event", "click")}}
- L'évènement {{DOMxRef("Element/dblclick_event", "dblclick")}}
- L'évènement {{DOMxRef("Element/mouseover_event", "mouseover")}}
- L'évènement {{DOMxRef("Element/mouseout_event", "mouseout")}}
- L'évènement {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
- L'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- L'évènement {{DOMxRef("Element/pointerenter_event", "pointerenter")}}
