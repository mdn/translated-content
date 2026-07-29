---
title: "Element : évènement blur"
short-title: blur
slug: Web/API/Element/blur_event
l10n:
  sourceCommit: 8ee7b342ad04d3414a678080987f806bb1ea5afa
---

{{APIRef("UI Events")}}

L'évènement **`blur`** est déclenché lorsqu'un élément perd la sélection. L'évènement ne se propage pas, mais l'évènement {{DOMxRef("Element/focusout_event", "focusout")}} qui suit se propage.

Un élément perd la sélection si un autre élément est sélectionné.
Un élément perd également la sélection si un style qui n'autorise pas la sélection est appliqué, comme `hidden`, ou si l'élément est retiré du document — dans ces deux cas, la sélection se déplace vers l'élément `body` (zone d'affichage).
Notez que le comportement des navigateurs diffère lorsque un élément sélectionné est retiré du document. Dans les navigateurs basés sur Chromium, retirer un élément sélectionné déclenche un évènement `blur`, tandis que dans Firefox, ce n'est pas le cas.

L'opposé de `blur` est l'évènement {{DOMxRef("Element/focus_event", "focus")}}, qui est déclenché lorsque l'élément a _reçu_ la sélection.

L'évènement `blur` n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("FocusEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et {{DOMxRef("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Propriétés de l'évènement

_Cette interface hérite également des propriétés de son parent {{DOMxRef("UIEvent")}}, et indirectement de {{DOMxRef("Event")}}._

- {{DOMxRef("FocusEvent.relatedTarget")}}
  - : L'élément recevant la sélection, le cas échéant.

## Exemples

### Exemple simple

#### HTML

```html
<form id="formulaire">
  <label>
    Du texte&nbsp;:
    <input type="text" placeholder="saisir du texte" />
  </label>
  <label>
    Mot de passe&nbsp;:
    <input type="password" placeholder="mot de passe" />
  </label>
</form>
```

#### JavaScript

```js
const motDePasse = document.querySelector('input[type="password"]');

motDePasse.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

motDePasse.addEventListener("blur", (event) => {
  event.target.style.background = "";
});
```

#### Résultat

{{EmbedLiveSample("Exemple simple", "100%", 50)}}

### Délégation d'évènement

Il existe deux façons de mettre en œuvre la délégation d'évènement pour cet évènement&nbsp;: en utilisant l'évènement {{DOMxRef("Element/focusout_event", "focusout")}}, ou en définissant le paramètre `useCapture` de {{DOMxRef("EventTarget.addEventListener()", "addEventListener()")}} sur `true`.

#### HTML

```html
<form id="formulaire">
  <label>
    Du texte&nbsp;:
    <input type="text" placeholder="saisir du texte" />
  </label>
  <label>
    Mot de passe&nbsp;:
    <input type="password" placeholder="mot de passe" />
  </label>
</form>
```

#### JavaScript

```js
const formulaire = document.getElementById("formulaire");

formulaire.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "pink";
  },
  true,
);

formulaire.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true,
);
```

#### Résultat

{{EmbedLiveSample("Délégation d'évènement", "100%", 50)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

La valeur de {{DOMxRef("Document.activeElement")}} varie selon les navigateurs pendant que cet évènement est traité ([bogue Firefox 452307 <sup>(angl.)</sup>](https://bugzil.la/452307))&nbsp;: IE10 la définit sur l'élément qui reçoit la sélection, tandis que Firefox et Chrome la définissent souvent sur le `body` du document.

## Voir aussi

- La méthode {{DOMxRef("HTMLElement.blur()")}}
- Évènements associés&nbsp;: {{DOMxRef("Element/focus_event", "focus")}}, {{DOMxRef("Element/focusin_event", "focusin")}}, {{DOMxRef("Element/focusout_event", "focusout")}}
- Cet évènement pour `Window` cible&nbsp;: l'évènement {{DOMxRef("Window/blur_event", "blur")}}
- [Sélection&nbsp;: focus/blur <sup>(angl.)</sup>](https://javascript.info/focus-blur)
