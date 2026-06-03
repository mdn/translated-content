---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLDetailsElement`** fournit des propriétés spécifiques (en plus de celles de l'interface {{DOMxRef("HTMLElement")}} dont elle hérite) pour manipuler les éléments HTML {{HTMLElement("details")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLDetailsElement.name")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`name`](/fr/docs/Web/HTML/Reference/Elements/details#name), qui permet de créer un groupe d'éléments {{HTMLElement("details")}} mutuellement exclusifs. Ouvrir l'un des éléments `<details>` nommés de ce groupe ferme les autres éléments du groupe.
- {{DOMxRef("HTMLDetailsElement.open")}}
  - : Un booléen reflétant l'attribut HTML [`open`](/fr/docs/Web/HTML/Reference/Elements/details#open), indiquant si le contenu de l'élément (hors {{HTMLElement("summary")}}) doit être affiché à l'utilisateur·ice.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Évènements

_Hérite des évènements de son interface parente, {{DOMxRef("HTMLElement")}}._

## Exemples

### Journaliser l'ouverture et la fermeture de chapitres

Cet exemple utilise l'évènement {{DOMxRef("HTMLElement/toggle_event", "toggle")}} de `HTMLElement` pour ajouter et retirer des chapitres d'un journal secondaire à mesure qu'ils sont ouverts et fermés.

#### HTML

```html
<section id="summaries">
  <p>Résumé des chapitres&nbsp;:</p>
  <details id="ch1">
    <summary>Chapitre I</summary>
    La philosophie réprimande Boèce pour la folie de ses plaintes contre la
    Fortune. Sa nature même est le caprice.
  </details>
  <details id="ch2">
    <summary>Chapitre II</summary>
    La philosophie, au nom de la Fortune, répond aux reproches de Boèce et
    prouve que les dons de la Fortune lui appartiennent, à donner comme à
    reprendre.
  </details>
  <details id="ch3">
    <summary>Chapitre III</summary>
    Boèce retombe dans son sentiment de misère actuel. La philosophie lui
    rappelle l'éclat de ses fortunes passées.
  </details>
</section>
<aside id="log">
  <p>Chapitres ouverts&nbsp;:</p>
  <div data-id="ch1" hidden>I</div>
  <div data-id="ch2" hidden>II</div>
  <div data-id="ch3" hidden>III</div>
</aside>
```

#### CSS

```css
body {
  display: flex;
}

#log {
  flex-shrink: 0;
  padding-left: 3em;
}

#summaries {
  flex-grow: 1;
}
```

#### JavaScript

```js
function logItem(e) {
  console.log(e);
  const item = document.querySelector(`[data-id=${e.target.id}]`);
  item.toggleAttribute("hidden");
}

const chapters = document.querySelectorAll("details");
chapters.forEach((chapter) => {
  chapter.addEventListener("toggle", logItem);
});
```

#### Résultat

{{EmbedLiveSample("Journaliser l'ouverture et la fermeture de chapitres", 700, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("details")}}
