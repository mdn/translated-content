---
title: "EventTarget : méthode removeEventListener()"
short-title: removeEventListener()
slug: Web/API/EventTarget/removeEventListener
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La méthode **`removeEventListener()`** de l'interface {{domxref("EventTarget")}} permet de supprimer un écouteur d'événement précédemment enregistré avec {{domxref("EventTarget.addEventListener()")}} sur la cible.
L'écouteur à supprimer est identifié par une combinaison du type d'événement, de la fonction d'écoute elle-même, et de diverses options qui peuvent influencer la correspondance (voir [Correspondance des écouteurs à supprimer](#correspondance_des_écouteurs_à_supprimer)).

Si les arguments passés à `removeEventListener()` ne correspondent à aucun [écouteur d'événement](/fr/docs/Web/API/EventTarget/addEventListener#la_fonction_de_rappel_de_lécouteur_dévénements) actuellement enregistré sur l'`EventTarget`, cela n'a aucun effet.

Si un [écouteur d'événement](/fr/docs/Web/API/EventTarget/addEventListener#la_fonction_de_rappel_de_lécouteur_dévénements) est supprimé d'un {{domxref("EventTarget")}} pendant qu'un autre écouteur traite un événement, il ne sera pas déclenché par cet événement. Il peut cependant être réattaché par la suite.

> [!WARNING]
> Si un écouteur est enregistré deux fois, une fois avec l'option _capture_ et une fois sans, il faut supprimer chaque version séparément. Supprimer un écouteur en mode capture n'affecte pas la version sans capture du même écouteur, et inversement.

Les écouteurs d'événements peuvent aussi être supprimés en passant un objet {{domxref("AbortSignal")}} à {{domxref("EventTarget/addEventListener()", "addEventListener()")}}, puis en appelant {{domxref("AbortController/abort()", "abort()")}} sur le contrôleur propriétaire du signal.

## Syntaxe

```js-nolint
removeEventListener(type, listener)
removeEventListener(type, listener, options)
removeEventListener(type, listener, useCapture)
```

### Paramètres

- `type`
  - : Chaîne de caractères qui précise le type d'événement pour lequel supprimer un écouteur.
- `listener`
  - : La fonction [écouteur d'événement](/fr/docs/Web/API/EventTarget/addEventListener#la_fonction_de_rappel_de_lécouteur_dévénements) à supprimer de la cible.
- `options` {{optional_inline}}
  - : Objet d'options qui précise les caractéristiques de l'écouteur d'événement.

    Les options disponibles sont&nbsp;:
    - `capture`&nbsp;: Booléen qui indique si l'[écouteur d'événement](/fr/docs/Web/API/EventTarget/addEventListener#la_fonction_de_rappel_de_lécouteur_dévénements) à supprimer a été enregistré en mode capture ou non. Si ce paramètre est absent, la valeur par défaut est `false`.

- `useCapture` {{optional_inline}}
  - : Booléen qui indique si l'[écouteur d'événement](/fr/docs/Web/API/EventTarget/addEventListener#la_fonction_de_rappel_de_lécouteur_dévénements) à supprimer a été enregistré en mode capture ou non. Si ce paramètre est absent, la valeur par défaut est `false`.

### Valeur de retour

Aucune ({{jsxref("undefined")}}).

### Correspondance des écouteurs à supprimer

Lorsqu'un écouteur d'événement a été ajouté avec {{domxref("EventTarget.addEventListener", "addEventListener()")}}, il peut arriver que vous deviez le supprimer. Il faut alors spécifier les mêmes paramètres `type` et `listener` à `removeEventListener()`. Mais qu'en est-il des paramètres `options` ou `useCapture`&nbsp;?

Bien que `addEventListener()` permette d'ajouter plusieurs fois le même écouteur pour un même type si les options diffèrent, la seule option prise en compte par `removeEventListener()` est le drapeau `capture`/`useCapture`. Sa valeur doit correspondre pour que la suppression fonctionne, les autres options n'ont pas d'importance.

Par exemple&nbsp;:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Considérez ces deux appels à `removeEventListener()`&nbsp;:

```js
element.removeEventListener("mousedown", handleMouseDown, false); // Échec
element.removeEventListener("mousedown", handleMouseDown, true); // Succès
```

Le premier échoue car la valeur de `useCapture` ne correspond pas. Le second réussit car la valeur correspond.

Autre exemple&nbsp;:

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Ici, on spécifie un objet d'options où `passive` vaut `true`, les autres options restant à `false` par défaut.

Considérez ces appels à `removeEventListener()`&nbsp;: tous ceux où `capture` ou `useCapture` vaut `true` échouent&nbsp;; les autres réussissent.

Seule l'option `capture` compte pour `removeEventListener()`.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true }); // Succès
element.removeEventListener("mousedown", handleMouseDown, { capture: false }); // Succès
element.removeEventListener("mousedown", handleMouseDown, { capture: true }); // Échec
element.removeEventListener("mousedown", handleMouseDown, { passive: false }); // Succès
element.removeEventListener("mousedown", handleMouseDown, false); // Succès
element.removeEventListener("mousedown", handleMouseDown, true); // Échec
```

À noter&nbsp;: certains navigateurs ont pu être incohérents sur ce point. Sauf raison particulière, il est conseillé d'utiliser les mêmes valeurs que lors de l'appel à `addEventListener()`.

## Exemple

Cet exemple montre comment ajouter un écouteur d'événement basé sur `mouseover` qui supprime un écouteur basé sur `click`.

```js
const body = document.querySelector("body");
const clickTarget = document.getElementById("click-target");
const mouseOverTarget = document.getElementById("mouse-over-target");

let toggle = false;
function makeBackgroundYellow() {
  body.style.backgroundColor = toggle ? "white" : "yellow";

  toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow);

mouseOverTarget.addEventListener("mouseover", () => {
  clickTarget.removeEventListener("click", makeBackgroundYellow);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("EventTarget.addEventListener()")}}
