---
title: Propriété CSS `scroll-timeline-axis`
short-title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`scroll-timeline-axis`** est utilisée pour définir la direction de la barre de défilement qui sera utilisée pour fournir la [chronologie d'une animation pilotée par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines), qui progresse en faisant défiler un élément défilable (_défileur_).

## Syntaxe

```css
/* Valeurs de propriété logique */
scroll-timeline-axis: block;
scroll-timeline-axis: inline;

/* Valeurs de propriété physique */
scroll-timeline-axis: y;
scroll-timeline-axis: x;

/* Valeurs globales */
scroll-timeline-axis: inherit;
scroll-timeline-axis: initial;
scroll-timeline-axis: revert;
scroll-timeline-axis: revert-layer;
scroll-timeline-axis: unset;
```

### Valeurs

- `<axis>`
  - : Une valeur de mot-clé {{CSSxRef("&lt;axis&gt;")}} décrivant la direction, ou l'axe, du conteneur de défilement qui contrôle l'animation pilotée par le défilement. La valeur par défaut est `block`.

## Description

La propriété `scroll-timeline-axis` définit quelle barre de défilement sera utilisée pour fournir la chronologie d'une [animation pilotée par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines). La valeur correspond à l'axe (`<axis>`) de la barre de défilement. La propriété `scroll-timeline` est définie sur l'élément conteneur de défilement qui fournira la chronologie.

Si l'élément conteneur de défilement ne déborde pas de son conteneur dans la dimension de l'axe ou si le débordement est masqué ou coupé, aucune chronologie de progression de défilement ne sera créée.

Les propriétés `scroll-timeline-axis` et {{CSSxRef("scroll-timeline-name")}} peuvent également être définies en utilisant la propriété raccourcie {{CSSxRef("scroll-timeline")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

## Définir l'axe de la chronologie de progression de défilement

Dans cet exemple, une chronologie de progression de défilement nommée `--mon-defileur` est définie en utilisant la propriété `scroll-timeline-name` sur l'élément `:root` ({{HTMLElement("html")}}). Cette chronologie est ensuite appliquée à l'animation sur l'élément avec la classe `animation` en utilisant `animation-timeline: --mon-defileur`.

Pour démontrer l'effet de `scroll-timeline-axis`, une barre de défilement horizontale (non par défaut) est utilisée dans cet exemple pour piloter l'animation.

#### HTML

Le HTML pour l'exemple est montré ci-dessous.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Le CSS pour le conteneur définit la racine (`:root`) comme source d'une chronologie de progression de défilement nommée `--mon-defileur` en utilisant la propriété `scroll-timeline-name`.
L'axe de défilement est défini en utilisant `scroll-timeline-axis: x;`, ce qui fait que la position de la _barre de défilement horizontale_ détermine la chronologie de l'animation. Nous incluons également `scroll-timeline-axis: horizontal;` pour les navigateurs qui prennent en charge les valeurs héritées non standard `horizontal` et `vertical` et non `x` et `y`.

La largeur de l'élément `.content` est définie sur une grande valeur pour qu'il déborde de l'élément `:root`.

L'élément `.animation` a l'animation appliquée en utilisant le raccourci {{CSSxRef("animation")}}, et la chronologie de défilement est définie en utilisant {{CSSxRef("animation-timeline")}}.

```css
:root {
  scroll-timeline-name: --mon-defileur;

  scroll-timeline-axis: x;
  scroll-timeline-axis: horizontal;
}

body {
  margin: 0;
  overflow-y: hidden;
}

.content {
  height: 100vh;
  width: 2000px;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
  position: fixed;
  top: 25px;
  left: 25px;
}

.animation {
  animation: rotate-appear 1ms linear;
  animation-timeline: --mon-defileur;
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    top: 0%;
  }

  to {
    rotate: 720deg;
    top: 100%;
  }
}
```

```css hidden
@layer no-support {
  @supports not (scroll-timeline-axis: block) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété `scroll-timeline-axis`.";
      background-color: wheat;
      display: block;
      width: 100%;
      text-align: center;
    }
  }
}
```

#### Résultat

Faites défiler la barre horizontale en bas pour voir le carré s'animer au fur et à mesure du défilement.

{{EmbedLiveSample("Définir l'axe de la chronologie de progression de défilement", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- La propriété {{CSSxRef("scroll-timeline")}}
- La propriété {{CSSxRef("scroll-timeline-name")}}
- [Les chronologies d'animations pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- Le module [d'animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
