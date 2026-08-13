---
title: "Element : évènement animationstart"
short-title: animationstart
slug: Web/API/Element/animationstart_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Web Animations")}}

L'évènement **`animationstart`** est déclenché lorsqu'une [animation CSS](/fr/docs/Web/CSS/Guides/Animations) commence. S'il y a un {{CSSxRef("animation-delay")}}, cet évènement est déclenché une fois la période de retard écoulée. Un retard négatif provoque le déclenchement de l'évènement avec un {{DOMxRef("AnimationEvent/elapsedTime", "elapsedTime")}} égal à la valeur absolue du retard (et, par conséquent, l'animation commence à ce moment dans la séquence).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("animationstart", (event) => { })

onanimationstart = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("AnimationEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("AnimationEvent")}}

## Exemples

Cet exemple écoute l'évènement `animationstart` et affiche un message lorsqu'il est déclenché&nbsp;:

```js
const animate = document.querySelector(".animate");

animate.addEventListener("animationstart", () => {
  console.log("Début de l'animation");
});
```

Identique, mais en utilisant la propriété `onanimationstart`&nbsp;:

```js
const animate = document.querySelector(".animate");

animate.onanimationstart = () => {
  console.log("Début de l'animation");
};
```

### Exemple interactif

#### HTML

```html
<div class="exemple-animation">
  <div class="conteneur">
    <p class="animation">
      Vous avez choisi une nuit froide pour venir sur notre planète.
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
  journalEventAnimation.textContent = `${journalEventAnimation.textContent}'début de l'animation' `;
});

animation.addEventListener("animationiteration", () => {
  compteIteration++;
  journalEventAnimation.textContent = `${journalEventAnimation.textContent}'itération de l'animation : ${compteIteration}' `;
});

animation.addEventListener("animationend", () => {
  journalEventAnimation.textContent = `${journalEventAnimation.textContent}'fin de l'animation'`;
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
- Évènements associés&nbsp;: {{DOMxRef("Element/animationend_event", "animationend")}}, {{DOMxRef("Element/animationiteration_event", "animationiteration")}}, {{DOMxRef("Element/animationcancel_event", "animationcancel")}}
