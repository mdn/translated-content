---
title: GlobalEventHandlers.onkeypress
slug: conflicting/Web/API/Element/keypress_event
translation_of: Web/API/GlobalEventHandlers/onkeypress
original_slug: Web/API/GlobalEventHandlers/onkeypress
browser-compat: api.GlobalEventHandlers.onkeypress
---
{{ApiRef("HTML DOM")}} {{deprecated_header}}

La propriété **`onkeypress`**, rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [un gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`keypress`](/fr/docs/Web/API/Document/keypress_event).

L'évènement `keypress` _devrait_ être déclenché lorsqu'on appuie sur une touche du clavier. Toutefois, en pratique, les navigateurs ne déclenchent pas d'évènements `keypress` pour certaines touches.

> **Attention :** Le gestionnaire d'évènements `onkeypress` est déprécié, il faut utiliser [`onkeydown`](/fr/docs/Web/API/GlobalEventHandlers/onkeydown) à la place.

## Syntaxe

```js
cible.onkeypress = refFonction;
```

### Valeur

`refFonction` est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`KeyboardEvent`](/fr/docs/Web/API/KeyboardEvent) comme unique argument.

## Exemples

### Exemple simple

Cet exemple affiche la valeur de [`KeyboardEvent.code`](/fr/docs/Web/API/KeyboardEvent/code) à chaque fois qu'on appuie  sur une touche à l'intérieur de l'élément [`<input>`](/fr/docs/Web/HTML/Element/Input).

#### HTML

```html
<input>
<p id="log"></p>
```

#### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('log');

input.onkeypress = logKey;

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

#### Résultat

{{EmbedLiveSample("", 700, 200)}}

### Filtrer des touches à l'aide d'une expression rationnelle

Dans cet exemple, on filtre les caractères saisis dans le champ du formulaire à l'aide d'une [expression rationnelle](/fr/docs/Web/JavaScript/Guide/Regular_Expressions).

#### HTML

```html
<label>Veuillez ne saisir que des chiffres :
  <input>
</label>
```

#### JavaScript

```js
function numbersOnly(event) {
  return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));
}

const input = document.querySelector('input');
input.onkeypress = numbersOnly;

// On empêche de coller (le contenu collé pourrait contenir
// des caractères qui ne sont pas des chiffres)
input.onpaste = event => false;
```

#### Résultat

{{EmbedLiveSample("")}}

### Capturer la saisie d'un mot-clé secret

La fonction JavaScript qui suit fera une action lorsqu'on saisira le mot "exit" à n'importe quel endroit de la page.

```js

(function () {
  const sSecret = "exit";
  let nOffset = 0;

  document.onkeypress = function(oPEvt) {
    let oEvent = oPEvt || window.event,
        nChr = oEvent.charCode,
        sNodeType = oEvent.target.nodeName.toUpperCase();

    if (nChr === 0 ||
        oEvent.target.contentEditable.toUpperCase() === "TRUE" ||
        sNodeType === "TEXTAREA" ||
        sNodeType === "INPUT" && oEvent.target.type.toUpperCase() === "TEXT") {
      return true;
    }

    if (nChr !== sSecret.charCodeAt(nOffset)) {
      nOffset = nChr === sSecret.charCodeAt(0) ? 1 : 0;
    } else if (nOffset < sSecret.length - 1) {
      nOffset++;
    } else {
      nOffset = 0;
      /* Faire quelque chose ici… */
      console.log("et voilà !");
      location.assign("https://developer.mozilla.org/");
    }

    return true;
  };
})();
```

> **Note :** Un <i lang="en">framework</i> pour effectuer de telles captures, plus complet, est [disponible sur GitHub](https://github.com/madmurphy/spell.js/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes de compatibilité

- L'évènement `keypress` n'est plus déclenché pour [les touches non-imprimables](/fr/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)) (voir [le bug 968056](https://bugzilla.mozilla.org/show_bug.cgi?id=968056) pour l'implémentation de ce comportement dans Firefox 65), à l'exception de la touche <kbd>Entrée</kbd>, et des combinaisons de touches <kbd>Shift</kbd>+<kbd>Entrée</kbd> et <kbd>Ctrl</kbd>+<kbd>Entrée</kbd> (à des fins de compatibilité entre navigateurs).

## Voir aussi

- L'évènement [`keypress`](/fr/docs/Web/API/Document/keypress_event)
- Les gestionnaires d'évènements associés
  - [`GlobalEventHandlers.onkeydown`](/fr/docs/Web/API/GlobalEventHandlers/onkeydown)
  - [`GlobalEventHandlers.onkeyup`](/fr/docs/Web/API/GlobalEventHandlers/onkeyup)
