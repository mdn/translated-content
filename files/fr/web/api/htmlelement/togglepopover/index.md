---
title: "HTMLElement: méthode togglePopover() method"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: 1ae11db23a
---

{{ APIRef("HTML DOM") }}

La méthode **`togglePopover()`** de l'interface {{domxref("HTMLElement")}} permet de alterner les état d'un élément {{domxref("Popover_API", "popover", "", "nocode")}} (c'est-à-dire un élément qui a un attribut {{htmlattrdef("popover")}} valide) entre les états masqué et affiché.

Lorsque `togglePopover()` est appelé sur un élément avec l'attribut {{htmlattrdef("popover")}} :

1. Un évènement {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} est déclenché.
2. Le popover alterne entre les états masqué et affiché :
   1. S'il était initialement affiché, il est masqué.
   2. S'il était initialement masqué, il est affiché.
3. Un évènement {{domxref("HTMLElement/toggle_event", "toggle")}} est déclenché.

## Syntaxe

```js-nolint
togglePopover(force)
```

### Paramètres

- `force`
  - : Un booléen, qui fait que `togglePopover()` se comporte comme {{domxref("HTMLElement.showPopover", "showPopover()")}} ou {{domxref("HTMLElement.hidePopover", "hidePopover()")}}, à l'exception qu'il ne lance pas d'exception si le popover est déjà dans l'état cible.
    - S'il est défini sur `true`, le popover est affiché s'il était initialement masqué. S'il était initialement affiché, rien ne se passe.
    - S'il est défini sur `false`, le popover est masqué s'il était initialement affiché. S'il était initialement masqué, rien ne se passe.

### Valeur de retour

`true` si le popup est ouvert après l'appel, et `false` sinon.

> **Note :** {{jsxref("undefined")}} peut être retournée dans d'anciennes versions de navigateurs (voir [compatibilité des navigateurs](#compatibilité_des_navigateur)).

## Exemples

Voir la [page d'exemples de l'API Popover](https://mdn.github.io/dom-examples/popover-api/) pour accéder à la collection complète des exemples de popover MDN.

### Simple auto-popup

Il s'agit d'une version légèrement modifiée de l'[exemple d'interface d'aide](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
L'exemple affiche/masque un popover en appuyant sur une touche particulière du clavier (lorsque la fenêtre de l'exemple a le focus).

Le HTML de l'exemple est affiché ci-après.
Le premier élément fournis les instructions sur la façon d'invoquer le popup, ce dont nous avons besoin car les popups sont masqués par défaut.

```html
<p id="instructions">
  Appuyez sur "h" pour afficher/masquer une fenêtre d'aide (sélectionnez d'abord
  la fenêtre de l'exemple).
</p>
```

Nous définissons ensuite un élément `<div>` qui est le popup.
Le contenu réel n'a pas d'importance, mais notez que nous avons besoin de l'attribut {{htmlattrdef("popover")}} pour faire du `<div>` un popover afin qu'il soit masqué par défaut (ou nous pourrions définir cet élément dans le JavaScript).

```html
<div id="help" popover>
  <h2>Aides</h2>

  <p>Vous pouvez utiliser les touches suivante pour contrôlez l'application</p>

  <ul>
    <li>Pressez la touche <ins>C</ins> pour commander du fromage</li>
    <li>Pressez la touche <ins>T</ins> pour commander du tofu</li>
    <li>Pressez la touche <ins>B</ins> pour commander du bacon</li>
  </ul>
</div>
```

Enfin, nous avons le JavaScript qui fait fonctionner l'exemple.
Premièrement nous vérifions que le navigateur supporte les popovers, et si c'est le cas nous masquons la `div` popover afin qu'elle ne soit pas visible par défaut.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.innerText = "";
  instructions.innerText = "Votre navigateur ne supporte pas les popovers.";
}
```

Si les popovers sont supportés, nous ajoutons un gestionnaire d'évènement qui vérifie si la touche "h" est pressée, et si c'est le cas nous changeons l'état du popover.
Nous affichons également l'état du popover après l'évènement, mais uniquement si les valeurs `true` ou `false` ont été retournées.

```js
if (HTMLElement.prototype.hasOwnProperty("popover")) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
      const popupOpened = popover.togglePopover();

      // Vérifie si le popover est ouvert ou fermé
      // sur les navigateurs qui le supportent
      if (popupOpened !== undefined) {
        instructions.innerText +=
          popupOpened === true ? `\nOpened` : `\nClosed`;
      }
    }
  });
}
```

Vous pouvez tester cela en utilisant l'exemple ci-après.

{{EmbedLiveSample('Examples', 700, 290)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
