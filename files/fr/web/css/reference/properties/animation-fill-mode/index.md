---
title: animation-fill-mode
slug: Web/CSS/Reference/Properties/animation-fill-mode
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`animation-fill-mode`** définit la façon dont une animation CSS applique des styles à sa cible avant et après son exécution.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("animation")}} pour définir toutes les propriétés d'animation en une seule fois.

{{InteractiveExample("Démonstration CSS&nbsp;: animation-fill-mode")}}

```css interactive-example-choice
animation-fill-mode: none;
animation-delay: 1s;
```

```css interactive-example-choice
animation-fill-mode: forwards;
animation-delay: 1s;
```

```css interactive-example-choice
animation-fill-mode: backwards;
animation-delay: 1s;
```

```css interactive-example-choice
animation-fill-mode: both;
animation-delay: 1s;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div>Animation <span id="play-status"></span></div>
  <div id="example-element">Sélectionnez un mode pour démarrer&nbsp;!</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  color: white;
  margin: auto;
  margin-left: 0;
  border: 5px solid #333333;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#play-status {
  font-weight: bold;
}

.animating {
  animation: slide 1s ease-in 1;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

```js interactive-example
const el = document.getElementById("example-element");
const status = document.getElementById("play-status");

function update() {
  status.textContent = "décalée";
  el.className = "";
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      el.className = "animating";
    });
  });
}

el.addEventListener("animationstart", () => {
  status.textContent = "en cours";
});

el.addEventListener("animationend", () => {
  status.textContent = "terminée";
});

const observer = new MutationObserver(() => {
  update();
});

observer.observe(el, {
  attributes: true,
  attributeFilter: ["style"],
});

update();
```

## Syntaxe

```css
/* Animation seule */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Animations multiples */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;

/* Valeurs globales */
animation-fill-mode: inherit;
animation-fill-mode: initial;
animation-fill-mode: revert;
animation-fill-mode: revert-layer;
animation-fill-mode: unset;
```

### Valeurs

- `none`
  - : L'animation n'appliquera aucun style à la cible, avant et après l'exécution. Le style utilisé sera celui défini par les autres règles CSS.
- `forwards`
  - : La cible retiendra les valeurs calculées définies lors de la dernière image clé (<i lang="en">keyframe</i> en anglais). La dernière étape considérée dépend de la valeur de {{CSSxRef("animation-direction")}} et de {{CSSxRef("animation-iteration-count")}}&nbsp;:

    | `animation-direction` | `animation-iteration-count` | dernière étape |
    | --------------------- | --------------------------- | -------------- |
    | `normal`              | pair ou impair              | `100%` ou `to` |
    | `reverse`             | pair ou impair              | `0%` ou `from` |
    | `alternate`           | pair                        | `0%` ou `from` |
    | `alternate`           | impair                      | `100%` ou `to` |
    | `alternate-reverse`   | pair                        | `100%` ou `to` |
    | `alternate-reverse`   | impair                      | `0%` ou `from` |

    Les propriétés animées se comportent comme si elles étaient incluses dans une valeur de propriété {{CSSxRef("will-change")}}. Si un nouveau contexte d'empilement a été créé pendant l'animation, l'élément cible conserve ce contexte d'empilement après la fin de l'animation.

- `backwards`
  - : L'animation appliquera les valeur définies par la première image clé (<i lang="en">keyframe</i> en anglais) pertinente et les retiendra pendant la durée indiquée par {{CSSxRef("animation-delay")}}. La première étape pertinente dépend de la valeur de {{CSSxRef("animation-direction")}}&nbsp;:

    | `animation-direction`            | première étape |
    | -------------------------------- | -------------- |
    | `normal` ou `alternate`          | `0%` ou `from` |
    | `reverse` ou `alternate-reverse` | `100%` ou `to` |

- `both`
  - : L'animation respectera les règles qui s'appliquent à `forwards` et `backwards`, entraînant ainsi l'extension des propriétés de l'animation dans les deux directions.

> [!NOTE]
> Lorsque vous indiquez plusieurs valeurs séparées par des virgules sur une propriété `animation-*`, elles sont appliquées aux animations dans l'ordre d'apparition des {{CSSxRef("animation-name")}}. Si le nombre d'animations et de valeurs de propriété `animation-*` ne correspond pas, voir [Définir plusieurs valeurs de propriétés d'animation](/fr/docs/Web/CSS/Guides/Animations/Using#définir_plusieurs_valeurs_de_propriétés_danimation).

> [!NOTE]
> `animation-fill-mode` a le même effet lors de la création d'[animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations) que pour les animations classiques basées sur le temps.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le mode de remplissage

Vous pouvez voir l'effet de `animation-fill-mode` dans l'exemple suivant. Il montre comment faire en sorte que l'animation reste dans son état final plutôt que de revenir à l'état d'origine (qui est le comportement par défaut).

#### HTML

```html
<p>Déplacez votre souris sur la boîte grise.</p>
<div class="demo">
  <div class="growsandstays">La boîte grandit et s'arrête</div>
  <div class="grows">La boîte grandit</div>
</div>
```

#### CSS

```css
.demo {
  border-top: 100px solid #cccccc;
  height: 300px;
}

@keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}

.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
}

.demo:hover .grows-and-stays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

#### Résultat

{{EmbedLiveSample("Définir le mode de remplissage", 700, 300)}}

Voir [Animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- L'interface API {{DOMxRef("AnimationEvent")}}
- Les autres propriétés d'animation associées&nbsp;: {{CSSxRef("animation")}}, {{CSSxRef("animation-composition")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-name")}}, {{CSSxRef("animation-play-state")}}, {{CSSxRef("animation-timeline")}}, {{CSSxRef("animation-timing-function")}}
