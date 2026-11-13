---
title: "Element : évènement focus"
short-title: focus
slug: Web/API/Element/focus_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`focus`** se déclenche lorsqu'un élément reçoit la sélection. L'évènement ne se propage pas, mais l'évènement {{DOMxRef("Element/focusin_event", "focusin")}} qui suit se propage.

L'évènement opposé de `focus` est l'évènement {{DOMxRef("Element/blur_event", "blur")}}, qui se déclenche lorsque l'élément perd la sélection.

L'évènement `focus` ne peut pas être annulé.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("focus", (event) => { })

onfocus = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("FocusEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

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

Il existe deux façons de mettre en œuvre la délégation d'évènement pour cet évènement&nbsp;: en utilisant l'évènement {{DOMxRef("Element/focusin_event", "focusin")}}, ou en définissant le paramètre `useCapture` de {{DOMxRef("EventTarget.addEventListener()", "addEventListener()")}} à `true`.

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

## Voir aussi

- La méthode {{DOMxRef("HTMLElement.focus()")}}
- Les évènements associés&nbsp;: {{DOMxRef("Element/blur_event", "blur")}}, {{DOMxRef("Element/focusin_event", "focusin")}}, {{DOMxRef("Element/focusout_event", "focusout")}}
- Cet évènement sur `Window` cible&nbsp;: l'évènement {{DOMxRef("Window/focus_event", "focus")}}
- [Sélection&nbsp;: focus/blur <sup>(angl.)</sup>](https://javascript.info/focus-blur)
