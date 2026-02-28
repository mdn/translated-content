---
title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: b7534af9f369a80fe12556cba781890e87a171d9
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`scroll()`** peut être utilisée avec la propriété {{CSSxRef("animation-timeline")}} pour créer une [chronologie de progression de défilement anonyme](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_défilement_anonyme), en définissant l'élément de défilement et l'axe de la chronologie.

## Syntaxe

```css
/* Aucun argument */
animation-timeline: scroll();

/* Argument <scroller> uniquement */
animation-timeline: scroll(nearest);
animation-timeline: scroll(root);
animation-timeline: scroll(self);

/* Argument <axis> uniquement */
animation-timeline: scroll(block);
animation-timeline: scroll(inline);
animation-timeline: scroll(y);
animation-timeline: scroll(x);

/* <scroller> and <axis> */
animation-timeline: scroll(block nearest);
animation-timeline: scroll(inline root);
animation-timeline: scroll(x self);
```

### Paramètres

- `<scroller>`
  - : L'élément de défilement qui fournit la chronologie de progression de défilement. Les valeurs valides incluent&nbsp;:
    - `nearest`
      - : L'ancêtre le plus proche de l'élément courant qui possède des barres de défilement sur l'un ou l'autre axe. Il s'agit de la valeur par défaut.
    - `root`
      - : L'élément racine du document.
    - `self`
      - : L'élément courant lui-même.

- `<axis>`
  - : Un mot-clé {{CSSxRef("axis")}} décrivant la direction, ou l'axe, du port de défilement qui contrôle l'animation pilotée par le défilement. La valeur par défaut est `block`.

## Description

La fonction CSS `scroll()` peut être utilisée comme valeur unique au sein de la propriété {{CSSxRef("animation-timeline")}} (séparée par des virgules) pour définir une chronologie de progression de défilement pour une animation {{CSSxRef("@keyframes")}}. Elle définit l'élément défilant (_scroller_) et l'axe de la barre de défilement qui fourniront la chronologie de l'animation.

Par défaut, `scroll()` fait référence à l'axe `block` de l'ancêtre défilant le plus proche. Les valeurs de l'élément défilant et de l'axe peuvent être indiquées dans n'importe quel ordre.

Les cinq déclarations suivantes sont équivalentes&nbsp;:

```css
animation-timeline: scroll();
animation-timeline: scroll(block);
animation-timeline: scroll(nearest);
animation-timeline: scroll(block nearest);
animation-timeline: scroll(nearest block);
```

La chronologie de progression de défilement avance lorsque vous faites défiler l'élément défilant horizontalement ou verticalement, selon la valeur de `<axis>` et le [mode d'écriture](/fr/docs/Web/CSS/Guides/Writing_modes/Writing_mode_systems). Si l'axe indiqué ne contient pas de barre de défilement, alors la chronologie de l'animation sera inactive.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une chronologie de progression de défilement anonyme

Dans cet exemple, l'élément `#square` est animé à l'aide d'une chronologie de progression de défilement anonyme, appliquée à l'élément à animer grâce à la fonction `scroll()`.
Dans ce cas précis, la chronologie est fournie par l'élément parent le plus proche qui possède une barre de défilement (peu importe laquelle), à partir de la barre de défilement dans la direction de l'axe block.

#### HTML

Le code HTML de l'exemple est présenté ci-dessous.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Le CSS ci-dessous définit un carré qui effectue une rotation dans des directions alternées selon la chronologie fournie par la propriété `animation-timeline`.
Dans ce cas, la chronologie est fournie par `scroll(block nearest)`, ce qui signifie qu'elle sélectionnera la barre de défilement dans la direction de l'axe block de l'élément ancêtre le plus proche qui possède des barres de défilement&nbsp;; dans ce cas, la barre de défilement verticale de l'élément «&nbsp;container&nbsp;».

> [!NOTE]
> `block` et `nearest` sont en réalité les valeurs par défaut des paramètres, donc nous aurions pu simplement utiliser `scroll()`.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  position: absolute;
  bottom: 0;

  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox a besoin de ça pour appliquer l'animation */
  animation-direction: alternate;
  animation-timeline: scroll(block nearest);
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

Le CSS du conteneur définit sa hauteur à 300px et nous configurons également le conteneur pour créer une barre de défilement verticale en cas de dépassement.
Le CSS de «&nbsp;stretcher&nbsp;» définit la hauteur du bloc à 600px, ce qui force l'élément conteneur à déborder.
Ces deux éléments ensemble garantissent que le conteneur possède une barre de défilement verticale, ce qui permet de l'utiliser comme source de la chronologie de progression de défilement anonyme.

```css
#container {
  height: 300px;
  overflow-y: scroll;
  position: relative;
}

#stretcher {
  height: 600px;
}
```

```css hidden
@layer no-support {
  @supports not (animation-timeline: scroll()) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la fonction CSS `scroll()`.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Résultat

Faites défiler pour voir l'élément carré être animé.

{{EmbedLiveSample("Définir une chronologie de progression de défilement anonyme", "100%", 320)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- Le module [des animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- Le module [des animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- L'interface API {{DOMxRef("ScrollTimeline")}}
- [L'API Web Animations](/fr/docs/Web/API/Web_Animations_API)
