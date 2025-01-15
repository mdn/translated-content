---
title: "HTMLElement : méthode togglePopover()"
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: 1ae11db23a8272ea9b3ec43213ca1eb55f234b54
---

{{APIRef("HTML DOM")}}

La méthode **`togglePopover()`** de l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement) permet d'alterner les états d'un élément [<i lang="en">popover</i>](/fr/docs/Web/API/Popover_API) (c'est-à-dire un élément qui a un attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover) valide) entre l'état masqué et l'état affiché.

Lorsque `togglePopover()` est appelée sur un élément avec l'attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover)&nbsp;:

1. Un évènement [`beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event) est déclenché.
2. Le <i lang="en">popover</i> alterne entre l'état masqué et affiché&nbsp;:
   - S'il était initialement affiché, il est masqué.
   - S'il était initialement masqué, il est affiché.
3. Un évènement [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event) est déclenché.

## Syntaxe

```js-nolint
togglePopover(force)
```

### Paramètres

- `force`
  - : Un booléen, qui fait que `togglePopover()` se comporte comme [`showPopover()`](/fr/docs/Web/API/HTMLElement/showPopover) ou [`hidePopover()`](/fr/docs/Web/API/HTMLElement/hidePopover), à l'exception qu'elle ne lance pas d'exception si le <i lang="en">popover</i> est déjà dans l'état cible.
    - S'il est défini sur `true`, le <i lang="en">popover</i> est affiché s'il était initialement masqué. S'il était initialement affiché, rien ne se passe.
    - S'il est défini sur `false`, le <i lang="en">popover</i> est masqué s'il était initialement affiché. S'il était initialement masqué, rien ne se passe.

### Valeur de retour

`true` si le popup est ouvert après l'appel, et `false` sinon.

> **Note :** [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) peut être retournée dans d'anciennes versions de navigateurs (voir [compatibilité des navigateurs](#compatibilité_des_navigateur)).

## Exemples

> [!NOTE]
> Voir [la page d'exemples de l'API Popover](https://mdn.github.io/dom-examples/popover-api/) pour accéder à la collection complète des exemples de MDN relatifs aux <i lang="en">popovers</i>.

L'exemple qui suit est une version légèrement modifiée de [l'exemple d'interface d'aide](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/). L'exemple affiche/masque un <i lang="en">popover</i> en appuyant sur une touche particulière du clavier (lorsque la fenêtre de l'exemple a le focus).

### HTML

Le HTML de l'exemple est affiché ci-après. Le premier élément fournit les instructions sur la façon d'invoquer le popup, ce dont nous avons besoin, car les popups sont masqués par défaut.

```html
<p id="instructions">
  Appuyez sur <kbd>h</kbd> pour afficher/masquer une fenêtre d'aide
  (sélectionnez d'abord la fenêtre de l'exemple).
</p>
```

Nous définissons ensuite un élément `<div>` qui est le popup. Le contenu réel n'a pas d'importance, mais notez que nous avons besoin de l'attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover) pour faire du `<div>` un <i lang="en">popover</i> afin qu'il soit masqué par défaut (nous pourrions également définir cet élément dans le JavaScript).

```html
<div id="mypopover" popover>
  <h2>Aides</h2>

  <p>Vous pouvez utiliser les touches suivantes pour contrôlez l'application</p>

  <ul>
    <li>Pressez la touche <ins>C</ins> pour commander du fromage</li>
    <li>Pressez la touche <ins>T</ins> pour commander du tofu</li>
    <li>Pressez la touche <ins>B</ins> pour commander du bacon</li>
  </ul>
</div>
```

### JavaScript

Premièrement, nous vérifions que le navigateur prend en charge les <i lang="en">popovers</i>. Si ce n'est pas le cas, nous masquons la `div` <i lang="en">popover</i> afin qu'elle ne soit pas visible par défaut.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.innerText = "";
  instructions.innerText =
    "Votre navigateur ne prend pas en charge les popovers.";
}
```

Si les <i lang="en">popovers</i> sont supportés, nous ajoutons un gestionnaire d'évènement qui vérifie si la touche <kbd>h</kbd> est pressée, et si c'est le cas nous changeons l'état du <i lang="en">popover</i>. Nous affichons également l'état du <i lang="en">popover</i> après l'évènement, mais uniquement si les valeurs `true` ou `false` ont été retournées.

```js
if (HTMLElement.prototype.hasOwnProperty("popover")) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
      const popupOpened = popover.togglePopover();

      // Vérifie si le popover est ouvert ou fermé
      // sur les navigateurs qui le prennent en charge
      if (popupOpened !== undefined) {
        instructions.innerText += popupOpened === true ? `\nOuvert` : `\nFermé`;
      }
    }
  });
}
```

### Résultat

{{EmbedLiveSample('', 700, 290)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
