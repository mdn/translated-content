---
title: animation-name
slug: Web/CSS/Reference/Properties/animation-name
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`animation-name`** définit les noms d'une ou plusieurs règles {{CSSxRef("@keyframes")}} qui décrivent l'animation à appliquer à un élément. Plusieurs règles `@keyframes` sont indiquées sous forme de liste de noms séparés par des virgules. Si le nom indiqué ne correspond à aucune règle `@keyframes`, aucune propriété n'est animée.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("animation")}} pour définir toutes les propriétés d'animation en une seule fois.

{{InteractiveExample("Démonstration CSS&nbsp;: animation-name")}}

```css interactive-example-choice
animation-name: none;
```

```css interactive-example-choice
animation-name: slide;
```

```css interactive-example-choice
animation-name: bounce;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  animation-direction: alternate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333333;
  color: white;
  height: 150px;
  margin: auto;
  margin-left: 0;
  width: 150px;
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

@keyframes bounce {
  from {
    background-color: orange;
    color: black;
    margin-top: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-top: 40%;
  }
}
```

## Syntaxe

```css
/* Valeur avec un mot-clé */
animation-name: none;

/* Valeur utilisant un identifiant */
animation-name: test_05;
animation-name: -specific;
animation-name: "sliding-vertically";

/* Gestion de plusieurs animations */
animation-name: test1, animation4;
animation-name:
  none,
  -moz-specific,
  sliding;

/* Valeurs globales */
animation-name: inherit;
animation-name: initial;
animation-name: revert;
animation-name: revert-layer;
animation-name: unset;
```

### Valeurs

- `none`
  - : Un mot-clé spécial indiquant aucune image clé (<i lang="en">keyframe</i> en anglais). Il peut être utilisé pour désactiver une animation sans changer l'ordre des autres identifiants, ou pour désactiver les animations provenant de la cascade.
- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Un identifiant sans guillemets qui désigne l'animation. Cet identifiant est composé d'une combinaison de lettres sensibles à la casse de `a` à `z`, de chiffres de `0` à `9`, de tirets bas (`_`) et/ou de tirets (`-`). Le premier caractère qui n'est pas un tiret doit être une lettre. De plus, deux tirets sont interdits au début de l'identifiant. Enfin, l'identifiant ne peut pas être `none`, `unset`, `initial` ou `inherit`.
- {{CSSxRef("&lt;string&gt;")}}
  - : Une série de caractères suivant les mêmes règles que les identifiants personnalisés, comme décrit ci-dessus, sauf qu'ils sont entourés de guillemets doubles (") ou simples ('). Si vous utilisez une chaîne entre guillemets à la fois pour `animation-name` et pour le nom de la règle {{CSSxRef("@keyframes")}} correspondante, `none`, les mots-clés globaux et les noms commençant par un underscore ou deux tirets sont valides, bien que non recommandés.

> [!NOTE]
> Lorsque vous indiquez plusieurs valeurs séparées par des virgules sur une propriété `animation-*`, elles sont appliquées aux animations dans l'ordre d'apparition des `animation-name`. Si le nombre d'animations et de valeurs de propriété `animation-*` ne correspond pas, voir [Définir plusieurs valeurs de propriétés d'animation](/fr/docs/Web/CSS/Guides/Animations/Using#définir_plusieurs_valeurs_de_propriétés_danimation).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Nommer une animation

Cette animation a un `animation-name` de `rotate`.

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.7s;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### Résultat

Passez la souris sur le rectangle pour démarrer l'animation.

{{EmbedLiveSample("Nommer une animation", "100%", 150)}}

Voir [Animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) pour des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- L'interface API {{DOMxRef("AnimationEvent")}}
- Les autres propriétés d'animation associées&nbsp;: {{CSSxRef("animation")}}, {{CSSxRef("animation-composition")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-play-state")}}, {{CSSxRef("animation-timeline")}}, {{CSSxRef("animation-timing-function")}}
