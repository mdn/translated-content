---
title: "Element : évènement animationcancel"
short-title: animationcancel
slug: Web/API/Element/animationcancel_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

L'évènement **`animationcancel`** est déclenché lorsqu'une [animation CSS](/fr/docs/Web/CSS/Guides/Animations) est interrompue de manière inattendue. En d'autres termes, chaque fois qu'elle cesse de s'exécuter sans envoyer d'évènement {{DOMxRef("Element/animationend_event", "animationend")}}. Cela peut se produire lorsque la propriété {{CSSxRef("animation-name")}} est modifiée de telle sorte que l'animation est supprimée, ou lorsque le nœud animé est masqué à l'aide de CSS. Donc, soit directement, soit parce que l'un de ses nœuds contenant est masqué.

Un gestionnaire d'évènement pour cet évènement peut être ajouté en définissant la propriété `onanimationcancel`, ou en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("animationcancel", (event) => { })

onanimationcancel = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("AnimationEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("AnimationEvent")}}

## Propriétés de l'évènement

_Hérite également des propriétés de son parent {{DOMxRef("Event")}}_.

- {{DOMxRef("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères contenant la valeur de la propriété {{CSSxRef("animation-name")}} qui a généré l'animation.
- {{DOMxRef("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : Un `float` indiquant la durée pendant laquelle l'animation a été exécutée, en secondes, lorsque cet évènement a été déclenché, à l'exclusion de tout temps pendant lequel l'animation était en pause. Pour un évènement `animationstart`, `elapsedTime` est `0.0` sauf s'il y avait une valeur négative pour {{CSSxRef("animation-delay")}}, auquel cas l'évènement est déclenché avec `elapsedTime` contenant `(-1 * delay)`.
- {{DOMxRef("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères, commençant par `'::'`, contenant le nom du [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) sur lequel l'animation s'applique. Si l'animation ne s'applique pas à un pseudo-élément mais à l'élément lui-même, une chaîne de caractères vide&nbsp;: `''`.

## Exemples

Ce code obtient un élément qui est actuellement en cours d'animation et ajoute un écouteur pour l'évènement `animationcancel`. Il définit ensuite la propriété {{CSSxRef("display")}} de l'élément sur `none`, ce qui déclenche l'évènement `animationcancel`.

```js
const anime = document.querySelector(".anime");

anime.addEventListener("animationcancel", () => {
  console.log("Animation annulée");
});

anime.style.display = "none";
```

Identique, mais en utilisant la propriété `onanimationcancel` à la place de `addEventListener()`&nbsp;:

```js
const anime = document.querySelector(".anime");
anime.onanimationcancel = () => {
  console.log("Animation annulée");
};

anime.style.display = "none";
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
- Évènements associés&nbsp;: {{DOMxRef("Element/animationstart_event", "animationstart")}}, {{DOMxRef("Element/animationend_event", "animationend")}}, {{DOMxRef("Element/animationiteration_event", "animationiteration")}}
