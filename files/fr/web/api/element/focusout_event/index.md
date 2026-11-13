---
title: "Element : évènement focusout"
short-title: focusout
slug: Web/API/Element/focusout_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`focusout`** se déclenche lorsqu'un élément a reçu la sélection, après l'évènement {{DOMxRef("Element/blur_event", "blur")}}. Les deux évènements diffèrent, car `focusout` se propage, tandis que `blur` ne le fait pas.

L'opposé de `focusout` est l'évènement {{DOMxRef("Element/focusin_event", "focusin")}}, qui se déclenche lorsque l'élément a reçu la sélection.

L'évènement `focusout` n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("focusout", (event) => { })

onfocusout = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("FocusEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Exemples

### Exemple interactif

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

formulaire.addEventListener("focusin", (event) => {
  event.target.style.background = "pink";
});

formulaire.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});
```

#### Résultat

{{EmbedLiveSample("Exemple interactif", "100%", 50)}}

## Spécifications

{{Specifications}}

> [!NOTE]
> La spécification _UI Events_ décrit un [ordre des évènements de sélection](/fr/docs/Web/API/FocusEvent#ordre_des_évènements) qui est différent de ce que les navigateurs actuels implémentent.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les évènements associés&nbsp;: {{DOMxRef("Element/blur_event", "blur")}}, {{DOMxRef("Element/focus_event", "focus")}}, {{DOMxRef("Element/focusin_event", "focusin")}}
- [Sélection&nbsp;: focus/blur <sup>(angl.)</sup>](https://javascript.info/focus-blur)
