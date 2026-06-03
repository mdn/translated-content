---
title: "Window : évènement pageshow"
short-title: pageshow
slug: Web/API/Window/pageshow_event
l10n:
  sourceCommit: 76bec44d5e9842f9ce4789303b989c36fd708cb8
---

{{APIRef("HTML DOM")}}

L'évènement **`pageshow`** de l'interface {{DOMxRef("Window")}} est émis lorsque le navigateur navigue vers un nouveau document.

Cela inclut&nbsp;:

- Chargement initial de la page.
- Navigation vers la page depuis une autre page dans la même fenêtre ou onglet.
- Restauration d'une page gelée sur les systèmes d'exploitation mobiles.
- Retour à la page en utilisant les boutons «&nbsp;précédent&nbsp;» ou «&nbsp;suivant&nbsp;» du navigateur (y compris lorsqu'elle est restaurée depuis le {{Glossary("bfcache")}}).
- Ouverture d'une page dans un onglet en arrière-plan.
- {{Glossary("Prerender", "Prérendu")}} d'une page, même avant qu'elle ne soit activée.

> [!WARNING]
> Malgré son nom, l'évènement `pageshow` ne se déclenche pas lorsque la page est réellement _affichée_ à l'utilisateur·ice. Par exemple, elle peut être ouverte dans un onglet en arrière-plan ou pré-rendue. Si vous souhaitez réagir à l'affichage de la page à l'utilisateur·ice, utilisez les évènements suivants&nbsp;:
>
> - {{DOMxRef("window/pagereveal_event", "pagereveal")}}&nbsp;: Émis lorsqu'une page est rendue pour la première fois.
> - {{DOMxRef("document/visibilitychange_event", "visibilitychange")}}&nbsp;: Émis chaque fois que la visibilité d'une page change.
> - {{DOMxRef("document/prerenderingchange_event", "prerenderingchange")}}&nbsp;: Émis lorsqu'une page pré-rendue est activée.

> [!NOTE]
> Lors du chargement initial de la page, l'évènement `pageshow` se déclenche _après_ l'évènement {{DOMxRef("Window/load_event", "load")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("pageshow", (event) => { })

onpageshow = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PageTransitionEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PageTransitionEvent")}}

## Propriétés de l'évènement

- {{DOMxRef("PageTransitionEvent.persisted")}} {{ReadOnlyInline}}
  - : Indique si le document est chargé depuis un cache.

## Alias des gestionnaires d'évènements

En plus de l'interface `Window`, la propriété de gestionnaire d'évènement `onpageshow` est également disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Exemples

Cet exemple configure des gestionnaires d'évènements pour les évènements listés dans le tableau `events`. Le gestionnaire, `eventLogger()`, enregistre le type d'évènement qui s'est produit dans la console, et inclut la valeur du drapeau {{DOMxRef("PageTransitionEvent.persisted", "persisted")}} pour les évènements `pageshow` et `pagehide`.

### JavaScript

```js
const events = ["pagehide", "pageshow", "unload", "load"];

const eventLogger = (event) => {
  switch (event.type) {
    case "pagehide":
    case "pageshow": {
      let isPersisted = event.persisted ? "persisted" : "not persisted";
      console.log(`Évènement : ${event.type} - ${isPersisted}`);
      break;
    }
    default:
      console.log(`Évènement : ${event.type}`);
      break;
  }
};

events.forEach((eventName) => window.addEventListener(eventName, eventLogger));
```

### HTML

```html
<p>
  Ouvrez la console et observez la sortie lorsque vous naviguez vers et depuis
  cette page. Essayez de charger de nouvelles pages dans cet onglet, puis
  naviguez en avant et en arrière dans l'historique, en notant la sortie des
  événements dans le journal.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples", 640, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window.pagehide_event", "pagehide")}}
