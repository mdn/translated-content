---
title: "Element : évènement animationiteration"
short-title: animationiteration
slug: Web/API/Element/animationiteration_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

L'évènement **`animationiteration`** est déclenché lorsqu'une itération d'une [animation CSS](/fr/docs/Web/CSS/Guides/Animations) se termine et qu'une autre commence. Cet évènement ne se produit pas en même temps que l'évènement {{DOMxRef("Element/animationend_event", "animationend")}}, et ne se produit donc pas pour les animations avec un `animation-iteration-count` de 1.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("animationiteration", (event) => { })

onanimationiteration = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("AnimationEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("AnimationEvent")}}

## Exemples

Ce code utilise `animationiteration` pour suivre le nombre d'itérations qu'une animation a effectuées&nbsp;:

```js
const anime = document.querySelector(".anime");

let compteIteration = 0;

anime.addEventListener("animationiteration", () => {
  compteIteration++;
  console.log(`Nombre d'itérations de l'animation : ${compteIteration}`);
});
```

Le même exemple, mais en utilisant la propriété de gestionnaire d'évènements `onanimationiteration`&nbsp;:

```js
const anime = document.querySelector(".anime");

let compteIteration = 0;

anime.onanimationiteration = () => {
  compteIteration++;
  console.log(`Nombre d'itérations de l'animation : ${compteIteration}`);
};
```

### Exemple interactif

#### HTML

```html
<div class="exemple-animation">
  <div class="conteneur">
    <p class="animation">
      Vous avez choisi une nuit froide pour visiter notre planète.
    </p>
  </div>
  <button class="activer" type="button">Activer l'animation</button>
  <div class="journal-event"></div>
</div>
```

#### CSS

```css
.conteneur {
  height: 3rem;
}

.journal-event {
  width: 25rem;
  height: 2rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.animation.active {
  animation-duration: 2s;
  animation-name: slide-in;
  animation-iteration-count: 2;
}

@keyframes slide-in {
  from {
    transform: translateX(100%) scaleX(3);
  }
  to {
    transform: translateX(0) scaleX(1);
  }
}
```

#### JavaScript

```js
const animation = document.querySelector("p.animation");
const journalEventAnimation = document.querySelector(
  ".exemple-animation>.journal-event",
);
const appliquerAnimation = document.querySelector(
  ".exemple-animation>button.activer",
);
let compteIteration = 0;

animation.addEventListener("animationstart", () => {
  journalEventAnimation.textContent = `${journalEventAnimation.textContent}'animation démarrée' `;
});

animation.addEventListener("animationiteration", () => {
  compteIteration++;
  journalEventAnimation.textContent = `${journalEventAnimation.textContent}'itérations de l'animation : ${compteIteration}' `;
});

animation.addEventListener("animationend", () => {
  journalEventAnimation.textContent = `${journalEventAnimation.textContent}'animation terminée'`;
  animation.classList.remove("active");
  appliquerAnimation.textContent = "Activer l'animation";
});

animation.addEventListener("animationcancel", () => {
  journalEventAnimation.textContent = `${journalEventAnimation.textContent}'animation annulée'`;
});

appliquerAnimation.addEventListener("click", () => {
  animation.classList.toggle("active");
  journalEventAnimation.textContent = "";
  compteIteration = 0;
  const active = animation.classList.contains("active");
  appliquerAnimation.textContent = active
    ? "Annuler l'animation"
    : "Activer l'animation";
});
```

#### Résultat

{{EmbedLiveSample("Exemple interactif", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- L'interface {{DOMxRef("AnimationEvent")}}
- Évènements associés&nbsp;: {{DOMxRef("Element/animationstart_event", "animationstart")}}, {{DOMxRef("Element/animationend_event", "animationend")}}, {{DOMxRef("Element/animationcancel_event", "animationcancel")}}
