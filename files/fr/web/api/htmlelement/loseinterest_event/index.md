---
title: "HTMLElement : évènement loseinterest"
short-title: loseinterest
slug: Web/API/HTMLElement/loseinterest_event
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{Non-standard_Header}}

L'évènement **`loseinterest`** de l'interface {{DOMxRef("HTMLElement")}} est déclenché sur l'élément cible d'un [déclencheur d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) lorsque l'intérêt est perdu, permettant d'exécuter du code en réponse.

Cet évènement est normalement [annulable](/fr/docs/Web/API/Event/cancelable), sauf lorsque l'utilisateur·ice appuie sur la touche <kbd>Échap</kbd> pour perdre l'intérêt sur tous les déclencheurs d'intérêt contenus dans le document.

## Syntaxe

On utilisera le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou on définira une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("loseinterest", (event) => { })

onloseinterest = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("InterestEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("InterestEvent")}}

## Exemples

### Utilisation simple de l'évènement `loseinterest`

Dans cet exemple, nous utilisons les évènements `interest` et `loseinterest` pour indiquer quand l'intérêt est affiché ou perdu sur un élément HTML {{HTMLElement("button")}} qui agit comme déclencheur d'intérêt. Nous le faisons en affichant des messages dans le contenu texte de l'élément HTML cible {{HTMLElement("p")}}.

#### HTML

Nous établissons la relation entre le déclencheur d'intérêt `<button>` et son élément cible `<p>` en définissant la valeur de l'attribut `interestfor` du `<button>` égale à l'attribut `id` du `<p>`.

```html live-sample___basic-interest-invoker
<button href="#" interestfor="mytarget">Déclencheur d'intérêt</button>
<p id="mytarget">Aucun intérêt n'est affiché actuellement.</p>
```

#### JavaScript

Nous obtenons une référence vers l'élément `<button>` et son élément cible via la propriété {{DOMxRef("HTMLButtonElement.interestForElement", "interestForElement")}}.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
const target = invoker.interestForElement;
```

Nous ajoutons ensuite deux gestionnaires d'évènements sur l'élément cible, pour les évènements `interest` et `loseinterest`.

- Lorsque l'intérêt est affiché, nous mettons à jour le contenu texte de l'élément `<p>` cible pour indiquer l'évènement et inclure l'élément qui l'a déclenché&nbsp;; dans cet exemple, il s'agit de l'élément `<button>`. Notez que vous pouvez obtenir une référence vers le déclencheur d'intérêt via la propriété {{DOMxRef("InterestEvent.source", "source")}} de l'objet de l'évènement.
- Lorsque l'intérêt est perdu, nous mettons à jour le texte du paragraphe pour indiquer que l'intérêt n'est plus affiché.

```js live-sample___basic-interest-invoker
target.addEventListener("interest", (e) => {
  target.textContent = `Intérêt affiché via l'élément ${e.source.tagName}.`;
});

target.addEventListener("loseinterest", () => {
  target.textContent = `Intérêt perdu.`;
});
```

#### Résultat

L'exemple s'affiche ainsi&nbsp;:

{{EmbedLiveSample("basic-interest-invoker", "100%", 100)}}

Essayez d'afficher et de perdre l'intérêt sur le bouton (par exemple, en le survolant ou en le sélectionnant) pour voir comment le texte du `<p>` change.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("HTMLElement.interest_event", "interest")}}
- [L'API Popover](/fr/docs/Web/API/Popover_API)
- [Utilisation des déclencheurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers)
