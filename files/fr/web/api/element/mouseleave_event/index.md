---
title: "Element : évènement mouseleave"
short-title: mouseleave
slug: Web/API/Element/mouseleave_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`mouseleave`** est déclenché sur un objet {{DOMxRef("Element")}} lorsqu'un dispositif de pointage (généralement une souris) est déplacé de sorte que son point chaud se trouve à l'extérieur de l'élément.

`mouseleave` et {{DOMxRef("Element/mouseout_event", "mouseout")}} sont similaires mais diffèrent en ce que `mouseleave` ne se propage pas et que `mouseout` oui. Cela signifie que `mouseleave` est déclenché lorsque le pointeur a quitté l'élément _et_ tous ses descendants, tandis que `mouseout` est déclenché lorsque le pointeur quitte l'élément _ou_ quitte l'un des descendants de l'élément, en raison de la propagation (même si le pointeur est toujours à l'intérieur de l'élément). À part cela, les évènements de sortie et de sortie pour la même situation sont déclenchés en même temps, si nécessaire.

Les évènements `mouseleave` et `mouseout` ne sont pas déclenchés lorsque l'élément est remplacé ou supprimé du DOM.

Notez que «&nbsp;se déplacer en dehors d'un élément&nbsp;» fait référence à la position de l'élément dans l'arborescence DOM, et non à sa position visuelle. Par exemple, si deux éléments voisins sont positionnés de manière à ce que l'un soit placé à l'intérieur de l'autre, alors se déplacer de l'élément extérieur vers l'élément intérieur déclenche `mouseleave` sur l'élément extérieur, même si le pointeur est toujours à l'intérieur des limites de l'élément extérieur.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("mouseleave", (event) => { })

onmouseleave = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MouseEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Exemples

Voir la documentation de {{DOMxRef("Element/mouseout_event#exemples", "mouseout")}} pour un exemple sur les différences entre `mouseout` et `mouseleave`.

### `mouseleave`

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

Mise en forme du `<div>` pour le rendre plus visible.

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

{{EmbedLiveSample("`mouseleave`")}}

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
- L'évènement {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
- L'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- L'évènement {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
