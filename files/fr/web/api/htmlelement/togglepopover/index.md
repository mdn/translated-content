---
title: "HTMLElement : méthode togglePopover()"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: 88dc56f83da6cf7adf4a2ad8803a412141ed4989
---

{{APIRef("Popover API")}}

La méthode **`togglePopover()`** de l'interface {{DOMxRef("HTMLElement")}} permet d'alterner les états d'une {{DOMxRef("Popover_API", "fenêtre contextuelle", "", "nocode")}} (c'est-à-dire un élément qui a un attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) valide) entre l'état masqué et l'état affiché.

Lorsque `togglePopover()` est appelée sur un élément avec l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)&nbsp;:

1. Un évènement {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}} est déclenché.
2. La fenêtre contextuelle (<i lang="en">popover</i> en anglais) alterne entre l'état masquée et affichée&nbsp;:
   - Si elle est initialement affichée, elle est masquée.
   - Si elle est initialement masquée, elle est affichée.
3. Un évènement {{DOMxRef("HTMLElement/toggle_event", "toggle")}} est déclenché.

## Syntaxe

```js-nolint
togglePopover()
togglePopover(force)
togglePopover(options)
```

### Paramètres

Un booléen (`force`) ou un objet d'options&nbsp;:

- `force` {{Optional_Inline}}
  - : Un booléen, qui fait que `togglePopover()` se comporte comme {{DOMxRef("HTMLElement.showPopover", "showPopover()")}} ou {{DOMxRef("HTMLElement.hidePopover", "hidePopover()")}}.
    - Si la valeur est `true`, la fenêtre contextuelle est affichée si elle est initialement masquée. Si elle est déjà affichée, rien ne se passe.
    - Si la valeur est `false`, la fenêtre contextuelle est masquée si elle est initialement affichée. Si elle est déjà masquée, rien ne se passe.
- `options` {{Optional_Inline}}
  - : Un objet qui peut contenir les propriétés suivantes&nbsp;:
    - `force` {{Optional_Inline}}
      - : Un booléen&nbsp;; voir la description de `force` ci-dessus.
    - `source` {{Optional_Inline}}
      - : Une référence {{DOMxRef("HTMLElement")}}&nbsp;; définit par programmation l'élément déclencheur de la fenêtre contextuelle (<i lang="en">popover</i> en anglais) associée à l'action d'alternance, c'est-à-dire son élément de contrôle. Établir une relation entre une fenêtre contextuelle et son déclencheur avec l'option `source` a deux effets utiles&nbsp;:
        - Le navigateur place la fenêtre contextuelle dans une position logique dans l'ordre de navigation au clavier lors de l'affichage. Cela rend la fenêtre contextuelle plus accessible aux utilisateur·ice·s du clavier (voir aussi [Fonctionnalités d'accessibilité des fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#accessibilité_des_fenêtres_contextuelles)).
        - Le navigateur crée une ancre implicite entre les deux, ce qui facilite le positionnement des fenêtres contextuelles par rapport à leurs contrôles avec le [positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning). Voir [Positionnement d'ancre pour les fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#positionnement_dancrage_des_fenêtres_contextuelles) pour plus de détails.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Levée si cette méthode est appelée alors qu'un autre fenêtre contextuelle est déjà en train d'être affichée ou masquée (par exemple, au sein d'un écouteur d'évènement `beforetoggle`).

### Valeur de retour

`true` si la fenêtre intrusive (<i lang="en">popup</i> en anglais) est ouverte après l'appel, et `false` sinon.

Aucune ({{JSxRef("undefined")}}) peut être retournée dans d'anciennes versions de navigateurs (voir la [compatibilité des navigateurs](#compatibilité_des_navigateurs)).

## Exemples

Voir [la page d'exemples de l'API Popover <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/) pour accéder à la collection complète des exemples de MDN relatifs aux fenêtres contextuelles.

### Affichage automatique simple

L'exemple qui suit est une version légèrement modifiée de [l'exemple d'interface d'aide <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/). L'exemple affiche/masque une fenêtre contextuelle (<i lang="en">popovers</i> en anglais) en appuyant sur une touche particulière du clavier (lorsque la fenêtre de l'exemple a la sélection).

Le HTML de l'exemple est affiché ci-après. Le premier élément fournit les instructions sur la façon d'invoquer la fenêtre intrusive, ce dont nous avons besoin, car les popups sont masqués par défaut.

```html
<p id="instructions">
  Appuyez sur <kbd>h</kbd> pour afficher/masquer une fenêtre d'aide
  (sélectionnez d'abord la fenêtre de l'exemple).
</p>
```

Nous définissons ensuite un élément `<div>` qui est la fenêtre intrusive.
Le contenu réel n'a pas d'importance, mais notez que nous avons besoin de l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) pour faire du `<div>` une fenêtre contextuelle afin qu'il soit masqué par défaut (nous pourrions également définir cet élément dans le JavaScript).

```html
<div id="ma-fenetre" popover>
  <h2>Aides&nbsp;!</h2>

  <p>Vous pouvez utiliser les touches suivantes pour contrôlez l'application</p>

  <ul>
    <li>Pressez la touche <ins>C</ins> pour commander du fromage</li>
    <li>Pressez la touche <ins>T</ins> pour commander du tofu</li>
    <li>Pressez la touche <ins>B</ins> pour commander du bacon</li>
  </ul>
</div>
```

Le JavaScript de l'exemple est présenté ci-dessous.
Nous vérifions d'abord si les fenêtres contextuelles sont prises en charge, et si ce n'est pas le cas, nous masquons la `div` fenêtre contextuelle afin qu'elle ne soit pas affichée en incise.

```js
const instructions = document.getElementById("instructions");
const fenetreContextuelle = document.getElementById("ma-fenetre");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  fenetreContextuelle.innerText = "";
  instructions.innerText =
    "Votre navigateur ne prend pas en charge les fenêtres contextuelles.";
}
```

Si les fenêtres contextuelles sont prises en charge, nous ajoutons un écouteur pour la touche <kbd>h</kbd> et utilisons cela pour ouvrir la fenêtre contextuelle.
Nous affichons également si la fenêtre contextuelle était ouverte ou fermée après l'appel, mais uniquement si une valeur `true` ou `false` a été retournée.

```js
if (Object.hasOwn(HTMLElement.prototype, "popover")) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
      const popupOpened = fenetreContextuelle.togglePopover();

      // Vérifie si la fenêtre contextuelle est ouverte ou fermée
      // sur les navigateurs qui le prennent en charge
      if (popupOpened !== undefined) {
        instructions.innerText += popupOpened === true ? `\nOuvert` : `\nFermé`;
      }
    }
  });
}
```

Vous pouvez tester cela en utilisant l'exemple interactif ci-dessous.

{{EmbedLiveSample("Affichage automatique simple", 700, 290)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
- [L'API Popover](/fr/docs/Web/API/Popover_API)
