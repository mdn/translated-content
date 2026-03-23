---
title: "scroll-timeline"
slug: Web/CSS/Reference/Properties/scroll-timeline
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`scroll-timeline`** est utilisée pour définir une [chronologie de progression de défilement nommée](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines), qui progresse en faisant défiler un élément défilable (_défileur_) entre le haut et le bas (ou de gauche à droite).

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes, dans l'ordre&nbsp;:

- {{CSSxRef("scroll-timeline-name")}}
- {{CSSxRef("scroll-timeline-axis")}}

## Syntaxe

```css
/* Une valeur */
scroll-timeline: none;
scroll-timeline: --nom_personnalise_de_la_chronologie;

/* Deux valeurs */
scroll-timeline: --nom_personnalise_de_la_chronologie block;
scroll-timeline: --nom_personnalise_de_la_chronologie x;
scroll-timeline: none inline;
scroll-timeline: none y;

/* Valeurs globales */
scroll-timeline: inherit;
scroll-timeline: initial;
scroll-timeline: revert;
scroll-timeline: revert-layer;
scroll-timeline: unset;
```

### Valeurs

- {{CSSxRef("scroll-timeline-name", "&lt;scroll-timeline-name&gt;")}}
  - : Un identifiant ({{CSSxRef("&lt;dashed-ident&gt;")}}) ou le mot-clé `none`.

- {{CSSxRef("scroll-timeline-axis", "&lt;scroll-timeline-axis&gt;")}}
  - : Un mot-clé de type {{CSSxRef("&lt;axis&gt;")}}. La valeur par défaut est `block`.

## Description

La propriété raccourcie `scroll-timeline` peut être appliquée à un élément conteneur pour définir à la fois les propriétés `scroll-timeline-name` et `scroll-timeline-axis`. Elle est définie sur le conteneur de défilement qui fournira la chronologie. Si le conteneur n'a pas de débordement à faire défiler ou si le débordement est masqué ou coupé, aucune chronologie ne sera créée.

La valeur de la propriété {{CSSxRef("scroll-timeline-name")}}, si elle n'est pas définie sur `none`, doit être un {{CSSxRef("&lt;dashed-ident&gt;")}}, ce qui signifie qu'elle doit commencer par `--`. Cela permet d'éviter les conflits de noms avec les mots-clés CSS standard. Le nom peut ensuite être utilisé comme valeur de la propriété {{CSSxRef("animation-timeline")}} d'un élément pour définir l'élément conteneur de défilement qui définira sa [chronologie d'animation](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#progression_du_défilement_dune_chronologie_nommée), pilotant la progression de l'animation au fur et à mesure du défilement.

La valeur optionnelle de l'axe de défilement ({{CSSxRef("&lt;axis&gt;")}}) définit la valeur de {{CSSxRef("scroll-timeline-axis")}}, qui par défaut est `block` si elle est omise. Si un nom et un axe sont définis, l'ordre doit être la valeur `<scroll-timeline-name>` suivie de la valeur `<axis>`. Si l'axe (`<axis>`) est listé en premier, la déclaration est invalide et sera ignorée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer une animation de chronologie de progression de défilement nommée

Dans cet exemple, une chronologie de défilement nommée `--square-timeline` est définie en utilisant la propriété `scroll-timeline-name` sur l'élément `#container`.
Le nom de la chronologie est ensuite appliqué à l'animation sur l'élément `#square` en utilisant `animation-timeline: --square-timeline`.

#### HTML

Nous incluons un conteneur avec deux éléments enfants `<div>`.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Nous définissons le conteneur à `300px` de hauteur pour qu'il puisse défiler verticalement.

En utilisant la propriété `scroll-timeline`, nous définissons le conteneur comme source d'une chronologie de défilement nommée `--square-timeline`, en définissant explicitement la barre de défilement verticale par défaut comme contrôleur de la chronologie.

```css
#container {
  height: 300px;
  overflow-y: scroll;

  scroll-timeline: --square-timeline y;
  /* Firefox prend en charge la syntaxe non standard vertical/horizontal */
  scroll-timeline: --square-timeline vertical;

  position: relative;
}
```

Nous fournissons des styles de base pour le carré. Nous appliquons l'animation `rotateAnimation` en utilisant la propriété {{CSSxRef("animation-name")}}. Par défaut, cela utiliserait la chronologie basée sur le temps du document. En définissant la propriété `animation-timeline` sur la chronologie nommée `--square-timeline` ci-dessus, nous faisons en sorte que le carré tourne en fonction de la chronologie basée sur le défilement, qui progresse au fur et à mesure que le conteneur défile.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 0;

  animation: rotateAnimation 1ms linear;
  animation-timeline: --square-timeline;
}
```

Nous nous assurons que le conteneur déborde en définissant un élément d'extension qui est plus large que son parent.
Sans contenu qui déborde du conteneur, il n'y aurait pas de barre de défilement, et donc pas de chronologie de défilement. Nous définissons également une animation CSS avec images clés qui fait tourner les éléments sur lesquels elle est appliquée d'une rotation complète.

```css
#stretcher {
  height: 600px;
  background: #dedede;
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

```css hidden
@layer no-support {
  @supports not (scroll-timeline: --square-timeline) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété `scroll-timeline`.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Résultat

Faites défiler la barre verticale pour voir le carré s'animer au fur et à mesure du défilement.

{{EmbedLiveSample("Créer une animation de chronologie de progression de défilement nommée", "100%", 320)}}

Le carré s'anime au fur et à mesure du défilement. Lors de l'utilisation de `scroll-timeline`, la durée de l'animation dépend de la vitesse de défilement, et non de la valeur de la propriété `animation-duration`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- La propriété {{CSSxRef("scroll-timeline-axis")}}
- La propriété {{CSSxRef("scroll-timeline-name")}}
- [Guide&nbsp;: Chronologies d'animation pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- Le module [d'animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- Le module [d'animations CSS](/fr/docs/Web/CSS/Guides/Animations)
