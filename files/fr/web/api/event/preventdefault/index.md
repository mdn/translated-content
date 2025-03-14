---
title: Event.preventDefault()
slug: Web/API/Event/preventDefault
---

{{apiref("DOM")}}

La méthode **`preventDefault()`**, rattachée à l'interface [`Event`](/fr/docs/Web/API/Event), indique à l'agent utilisateur que si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.

L'évènement continue sa propagation habituelle à moins qu'un des gestionnaires d'évènement invoque [`stopPropagation()`](/fr/docs/Web/API/Event/stopPropagation) ou [`stopImmediatePropagation()`](/fr/docs/Web/API/Event/stopImmediatePropagation) pour interrompre la propagation.

Comme indiqué ci-après, appeler **`preventDefault()`** n'aura aucun effet pour un évènement qui ne peut être annulé (comme ceux émis par [`EventTarget.dispatchEvent()`](/fr/docs/Web/API/EventTarget/dispatchEvent) sans avoir indiqué `cancelable: true`).

## Syntaxe

```js
event.preventDefault();
```

## Exemples

### Bloquer la gestion du clic par défaut

Lorsqu'on clique sur une case à cocher, par défaut, cela coche ou décoche la case. Dans cet exemple, on illustre comment bloquer ce comportement par défaut :

#### JavaScript

```js
document.querySelector("#id-checkbox").addEventListener(
  "click",
  function (event) {
    console.log("Désolé ! preventDefault() ne vous laissera pas cocher ceci.");
    event.preventDefault();
  },
  false,
);
```

#### HTML

```html
<p>Essayez de cliquer sur la case à cocher.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox" />
</form>
```

#### Résultat

{{EmbedLiveSample("Bloquer_la_gestion_du_clic_par_défaut")}}

### Empêcher les pressions du clavier sur un champ texte

Dans l'exemple qui suit, on démontre comment empêcher d'écrire au clavier dans un champ texte grâce à `preventDefault()`.

#### HTML

Voici le formulaire contenant le champ texte :

```html
<form>
  <label
    >Un champ texte
    <input type="text" id="mon-champ-texte" />
  </label>
</form>
```

#### JavaScript

Et voici le fragment de code JavaScript qui s'occupe de la logique principale. On commence par enregistrer un gestionnaire d'évènement pour [`keypress`](/fr/docs/Web/API/Element/keypress_event) :

```js
let monChampTexte = document.getElementById("mon-champ-texte");
monChampTexte.addEventListener("keypress", bloqueSaisie, false);
```

La fonction `bloqueSaisie()` empêche toute saisie au clavier :

```js
function bloqueSaisie(evt) {
  evt.preventDefault();
  console.log("Une saisie a été empêchée.");
}
```

#### Résultat

{{EmbedLiveSample('Empêcher_les_pressions_du_clavier_sur_un_champ_texte', 600, 200)}}

## Notes

Invoquer `preventDefault()` à n'importe quel moment du cycle de vie d'un évènement annulera cet évènement. Cela signifie que toute action par défaut, normalement exécutée par le navigateur, n'aura pas lieu.

On peut utiliser la propriété [`Event.cancelable`](/fr/docs/Web/API/Event/cancelable) afin de vérifier si un évènement est annulable. Invoquer `preventDefault()` sur un évènement non-annulable n'aura aucun effet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
