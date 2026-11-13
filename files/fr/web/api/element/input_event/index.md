---
title: "Element : évènement input"
short-title: input
slug: Web/API/Element/input_event
l10n:
  sourceCommit: bd2f9b713de3aad1afd4a8531a5605a16accf091
---

{{APIRef("UI Events")}}

L'évènement **`input`** se déclenche lorsque la `value` d'un élément HTML {{HTMLElement("input")}}, {{HTMLElement("select")}} ou {{HTMLElement("textarea")}} a été modifiée directement par une action de l'utilisateur·ice (comme taper dans une zone de texte ou cocher une case).

L'évènement s'applique également aux éléments avec {{DOMxRef("HTMLElement.contentEditable", "contenteditable")}} activé, et à tout élément lorsque {{DOMxRef("Document.designMode", "designMode")}} est activé. Dans le cas de `contenteditable` et `designMode`, la cible de l'évènement est _l'hôte d'édition_. Si ces propriétés s'appliquent à plusieurs éléments, le hôte d'édition est l'ancêtre le plus proche dont le parent n'est pas éditable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("input", (event) => { })

oninput = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("InputEvent")}}. Hérite de {{DOMxRef("UIEvent")}}.

{{InheritanceDiagram("InputEvent")}}

> [!NOTE]
> Pour les éléments HTML {{HTMLElement("textarea")}} et {{HTMLElement("input")}} qui acceptent des entrées de texte (`type=text`, `type=tel`, etc.), l'interface est {{DOMxRef("InputEvent")}}&nbsp;; pour les autres, l'interface est {{DOMxRef("Event")}}.

## Description

Pour les éléments `<input>` avec `type=checkbox` ou `type=radio`, l'évènement `input` doit se déclencher chaque fois qu'un·e utilisateur·ice bascule le contrôle, conformément à la [spécification du standard vivant HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2). Cependant, historiquement, ce n'a pas toujours été le cas. Vérifiez la compatibilité, ou utilisez plutôt l'évènement {{DOMxRef("HTMLElement/change_event", "change")}} pour les éléments de ces types.

Pour les éléments HTML {{HTMLElement("textarea")}} et {{HTMLElement("input")}} qui acceptent une saisie de texte (`type=text`, `type=tel`, etc.), l'interface est {{DOMxRef("InputEvent")}}&nbsp;; pour les autres, l'interface est {{DOMxRef("Event")}}.

L'évènement `input` se déclenche chaque fois que la `value` de l'élément change. Cela diffère de l'évènement {{DOMxRef("HTMLElement/change_event", "change")}}, qui ne se déclenche que lorsque la valeur est validée, par exemple en appuyant sur la touche Entrée ou en sélectionnant une valeur dans une liste d'options. Notez que l'évènement `input` ne se déclenche pas lorsque JavaScript modifie la valeur (`value`) d'un élément de manière programmatique.

En général, seuls les changements de valeur initiés par l'utilisateur·ice, y compris le remplissage automatique, sont censés déclencher l'évènement `input`. Certains changements de la valeur d'un contrôle ne déclenchent pas du tout l'évènement `input`, par exemple&nbsp;:

- Définir la valeur de manière programmatique, par exemple en assignant à la `value` d'un élément ou au `selectedIndex` d'un élément `<select>`.
- Modifier les éléments enfants d'un contrôle d'une manière qui change sa valeur, par exemple en supprimant l'élément `<option>` sélectionné d'un élément `<select>`.
- Modifier les attributs d'un contrôle d'une manière qui amène le navigateur à ajuster sa valeur, par exemple en modifiant le `min` ou le `max` d'un champ de type plage (`range`) de sorte que sa valeur actuelle se situe en dehors des nouvelles limites.
- Réinitialiser un formulaire, ce qui ne déclenche qu'un évènement {{DOMxRef("HTMLFormElement/reset_event", "reset")}}.
- Le navigateur restaure les valeurs de formulaire enregistrées lors de la navigation dans l'historique. Les contrôles dont les valeurs sont restaurées peuvent varier selon les navigateurs.
- Chrome efface le nom d'utilisateur·ice et le mot de passe non modifiés et remplis automatiquement si les informations d'identification ne sont plus disponibles, par exemple lorsque l'utilisateur·ice s'est déconnecté·e de Chrome après le remplissage automatique.

## Exemples

Cet exemple enregistre la valeur chaque fois que vous modifiez la valeur de l'élément HTML {{HTMLElement("input")}}.

### HTML

```html
<input placeholder="Entrer du texte" name="nom" />
<p id="valeurs"></p>
```

### JavaScript

```js
const champ = document.querySelector("input");
const journal = document.getElementById("valeurs");

champ.addEventListener("input", updateValue);

function updateValue(e) {
  journal.textContent = e.target.value;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements associés&nbsp;:
  - {{DOMxRef("Element/beforeinput_event", "beforeinput")}}
  - {{DOMxRef("HTMLElement/change_event", "change")}}
  - {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}}
