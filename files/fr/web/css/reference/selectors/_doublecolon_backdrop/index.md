---
title: ::backdrop
slug: Web/CSS/Reference/Selectors/::backdrop
original_slug: Web/CSS/::backdrop
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::backdrop`** est une boîte de la taille de la {{Glossary("viewport", "zone d'affichage")}}, qui est rendue immédiatement sous tout élément présenté dans la {{glossary("top layer", "couche supérieure")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: ::backdrop", "tabbed-shorter")}}

```css interactive-example
button {
  font-size: 1.2rem;
  padding: 5px 15px;
}

dialog::backdrop {
  background-color: salmon;
}
```

```html interactive-example
<button id="showDialogBtn">Afficher la boîte de dialogue</button>

<dialog id="favDialog">
  <form method="dialog">
    <p>
      Le fond affiché en dehors de cette boîte de dialogue est un arrière-plan.
    </p>
    <button id="confirmBtn">Fermer la boîte de dialogue</button>
  </form>
</dialog>
```

```js interactive-example
const showDialogBtn = document.getElementById("showDialogBtn");
const favDialog = document.getElementById("favDialog");

showDialogBtn.addEventListener("click", () => favDialog.showModal());
```

## Syntax

```css
::backdrop {
  /* ... */
}
```

## Description

Les arrière-plans apparaissent dans les cas suivants&nbsp;:

- Les éléments qui ont été placés en mode plein écran à l'aide de la méthode [Fullscreen API](/fr/docs/Web/API/Fullscreen_API) {{domxref("Element.requestFullscreen()")}}.
- Les éléments {{HTMLElement("dialog")}} qui ont été affichés dans la couche supérieure via un appel à {{domxref("HTMLDialogElement.showModal()")}}.
- Les éléments {{domxref("Popover API", "Popover", "", "nocode")}} qui ont été affichés dans la couche supérieure via un appel à {{domxref("HTMLElement.showPopover()")}}.

Lorsque plusieurs éléments ont été placés dans la couche supérieure, chacun d'eux a son propre pseudo-élément `::backdrop`.

```css
/* L'arrière-plan ne s'affiche que lorsque la boîte de dialogue est ouverte avec
   dialog.showModal() */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Les éléments sont placés dans une pile last-in/first-out (LIFO) dans la couche supérieure. Le pseudo-élément `::backdrop` permet d'obscurcir, de styliser ou de cacher complètement tout ce qui se trouve en dessous d'un élément de la couche supérieure.

`::backdrop` n'hérite ni n'est hérité par d'autres éléments. Aucune restriction n'est imposée sur les propriétés qui s'appliquent à ce pseudo-élément.

## Exemples

### Mettre en forme l'arrière-plan d'une boîte de dialogue

Dans cet exemple, nous utilisons le pseudo-élément `::backdrop` pour styliser l'arrière-plan utilisé lorsqu'un modal {{htmlelement("dialog")}} est affiché.

#### HTML

Nous incluons un {{htmlelement("button")}} qui, lorsqu'il est cliqué, ouvrira le `<dialog>` inclus. Lorsque le `<dialog>` est ouvert, nous donnons le focus au bouton qui ferme la boîte de dialogue&nbsp;:

```html
<dialog>
  <button autofocus>Fermer</button>
  <p>Cette boîte de dialogue a un bel arrière-plan&nbsp;!</p>
</dialog>
<button>Afficher la boîte de dialogue</button>
```

#### CSS

Nous ajoutons un arrière-plan à l'arrière-plan, créant un donut coloré à l'aide de [dégradés CSS](/fr/docs/Web/CSS/Reference/Values/gradient)&nbsp;:

```css
::backdrop {
  background-image:
    radial-gradient(
      circle,
      white 0 5vw,
      transparent 5vw 20vw,
      white 20vw 22.5vw,
      #eeeeee 22.5vw
    ),
    conic-gradient(
      #272b66 0 50grad,
      #2d559f 50grad 100grad,
      #9ac147 100grad 150grad,
      #639b47 150grad 200grad,
      #e1e23b 200grad 250grad,
      #f7941e 250grad 300grad,
      #662a6c 300grad 350grad,
      #9a1d34 350grad 400grad,
      #43a1cd 100grad 150grad,
      #ba3e2e
    );
}
```

#### JavaScript

La boîte de dialogue est ouverte à l'aide de la méthode [`.showModal()`](/fr/docs/Web/API/HTMLDialogElement/showModal) et fermée à l'aide de la méthode [`.close()`](/fr/docs/Web/API/HTMLDialogElement/close).

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// Le bouton "Afficher la boîte de dialogue" ouvre la boîte de dialogue
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Le bouton "Fermer" ferme la boîte de dialogue
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Résultat

{{EmbedLiveSample("mettre_en_forme_larrière-plan_dune_boîte_de_dialogue", 450, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{cssxref(":fullscreen")}}
- L'élément HTML {{HTMLElement("dialog")}}
- L'[API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- L'attribut HTML global [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
- L'[API Popover](/fr/docs/Web/API/Popover_API)
