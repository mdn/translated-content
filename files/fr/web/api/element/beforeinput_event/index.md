---
title: "Element : évènement beforeinput"
short-title: beforeinput
slug: Web/API/Element/beforeinput_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement DOM **`beforeinput`** se déclenche lorsque la valeur d'un élément {{HTMLElement("input")}} ou {{HTMLElement("textarea")}} est sur le point d'être modifiée. Mais contrairement à l'évènement {{DOMxRef("Element/input_event", "input")}}, il ne se déclenche pas sur l'élément {{HTMLElement("select")}}. L'évènement s'applique également aux éléments avec {{DOMxRef("HTMLElement.contentEditable", "contenteditable")}} activé, et à tout élément lorsque {{DOMxRef("Document.designMode", "designMode")}} est activé.

Cela permet aux applications web de remplacer le comportement de modification du texte avant que le navigateur ne modifie l'arbre DOM, et offre un meilleur contrôle sur les évènements d'entrée pour améliorer les performances.

Dans le cas de `contenteditable` et de `designMode`, la cible de l'évènement est **l'hôte d'édition**. Si ces propriétés s'appliquent à plusieurs éléments, l'hôte d'édition est l'ancêtre le plus proche dont le parent n'est pas éditable.

> [!NOTE]
> Toutes les modifications effectuées par l'utilisateur·ice ne déclenchent pas nécessairement l'évènement `beforeinput`. De plus, l'évènement peut se déclencher mais être non annulable. Cela peut se produire lorsque la modification est effectuée par la saisie semi-automatique, en acceptant une correction d'un correcteur orthographique, par le remplissage automatique d'un gestionnaire de mots de passe, par un {{Glossary("Input method editor", "IME")}}, ou d'autres manières. Les détails varient selon le navigateur et le système d'exploitation. Pour remplacer le comportement de modification dans toutes les situations, le code doit gérer l'évènement `input` et éventuellement annuler toute modification qui n'a pas été traitée par le gestionnaire `beforeinput`. Voir les bogues [1673558 <sup>(angl.)</sup>](https://bugzil.la/1673558) et [1763669 <sup>(angl.)</sup>](https://bugzil.la/1763669).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("beforeinput", (event) => { })

onbeforeinput = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("InputEvent")}}. Hérite de {{DOMxRef("UIEvent")}}.

{{InheritanceDiagram("InputEvent")}}

## Exemples

### Détecter de fonctionnalité

La fonction suivante retourne vrai si `beforeinput` et `getTargetRanges`, sont pris en charge.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Journalisation simple

Cet exemple enregistre la valeur actuelle de l'élément, juste avant de remplacer cette valeur par la nouvelle valeur appliquée à l'élément HTML {{HTMLElement("input")}}.

#### HTML

```html
<input placeholder="Entrer du texte" name="nom" />
<p id="valeurs"></p>
```

#### JavaScript

```js
const entree = document.querySelector("input");
const journal = document.getElementById("valeurs");

entree.addEventListener("beforeinput", actualiserValeur);

function actualiserValeur(e) {
  journal.textContent = e.target.value;
}
```

#### Résultat

{{EmbedLiveSample("Journalisation simple")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènement associé&nbsp;: {{DOMxRef("Element/input_event", "input")}}
