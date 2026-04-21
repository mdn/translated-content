---
title: Propriété CSS `timeline-scope`
short-title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`timeline-scope`** modifie la portée d'une chronologie d'animation nommée.

## Syntaxe

```css
/* Valeurs par mot-clé */
timeline-scope: all;
timeline-scope: none;

/* Valeurs personnalisées */
timeline-scope: --nom_de_chronologie_personnalisee;
timeline-scope: --nom_de_chronologie_un, --nom_de_chronologie_deux;

/* Valeurs globales */
timeline-scope: inherit;
timeline-scope: initial;
timeline-scope: revert;
timeline-scope: revert-layer;
timeline-scope: unset;
```

### Valeurs

Les valeurs autorisées pour `timeline-scope` sont&nbsp;:

- `none`
  - : Il n'y a aucun changement dans la portée de la chronologie. C'est la valeur par défaut.
- `all`
  - : Les noms de toutes les chronologies définies par les descendants sont dans la portée de cet élément et de ses descendants.
- `<dashed-ident>`
  - : Définit le nom d'une chronologie nommée existante (c'est-à-dire déclarée en utilisant {{CSSxRef("scroll-timeline-name")}} ou {{CSSxRef("view-timeline-name")}}) définie sur un élément descendant. Cela augmente la portée de la chronologie à l'élément actuel et à tous ses descendants.

## Description

La propriété `timeline-scope` modifie la portée d'une chronologie d'animation nommée. Par défaut, une [chronologie nommée](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologies_de_lanimation) (c'est-à-dire déclarée en utilisant {{CSSxRef("scroll-timeline-name")}} ou {{CSSxRef("view-timeline-name")}}) ne peut être définie que comme chronologie de contrôle d'un élément descendant direct (c'est-à-dire en définissant {{CSSxRef("animation-timeline")}} dessus avec le nom de la chronologie comme valeur). C'est la «&nbsp;portée&nbsp;» par défaut de la chronologie.

La valeur de `timeline-scope` est le nom d'une chronologie définie sur un élément descendant&nbsp;; cela modifie la portée de la chronologie pour inclure l'élément ciblé et ses descendants. En d'autres termes, l'élément sur lequel la propriété `timeline-scope` est définie, ainsi que tous ses éléments descendants, peuvent être contrôlés en utilisant cette chronologie.

Si aucune chronologie (ou plus d'une chronologie) n'existe avec le nom donné pour la valeur `timeline-scope`, une chronologie inactive avec le nom défini est créée. La propriété `timeline-scope` ne fonctionne qu'avec des chronologies nommées et ne peut donc pas être utilisée en conjonction avec des chronologies anonymes créées à l'aide des fonctions de chronologie d'animation {{CSSxRef("animation-timeline/view", "view()")}} ou {{CSSxRef("animation-timeline/scroll", "scroll()")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans cet exemple, nous animons un élément en réponse au défilement d'un autre élément en augmentant la portée de la chronologie avec la propriété `timeline-scope`.

### HTML

Le HTML inclut un élément à animer et un élément à faire défiler&nbsp;:

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

Une chronologie de défilement nommée `--mon-element-defilant` est définie en utilisant la propriété {{CSSxRef("scroll-timeline-name")}} sur un élément défilant. Ce nom de chronologie de défilement est utilisé à deux autres endroits&nbsp;: il est appliqué comme {{CSSxRef("animation-timeline")}} sur l'élément que nous voulons animer, et comme `timeline-scope` sur un ancêtre à la fois du défileur et de l'élément animé, augmentant ainsi la portée.

Nous définissons la hauteur du `<body>` à `100vh` et disposons ses deux éléments enfants en deux colonnes égales en utilisant flexbox. Pour augmenter la portée de la chronologie depuis l'élément `<div class="scroller">` jusqu'à l'ensemble du `<body>`, nous définissons `timeline-scope: --mon-element-defilant` dessus. Ce faisant, la chronologie `--mon-element-defilant` peut être définie comme la chronologie de contrôle pour une animation définie sur le `<body>` ou tout élément imbriqué à l'intérieur.

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;

  timeline-scope: --mon-element-defilant;
}

.content,
.scroller {
  flex: 1;
}
```

Nous définissons `--mon-element-defilant` comme {{CSSxRef("scroll-timeline-name")}} sur l'élément défilant qui doit fournir la chronologie de progression du défilement pour notre élément animé. Nous ajoutons {{CSSxRef("overflow")}} pour activer le défilement, en ajoutant une couleur de fond pour rendre sa limite visible. Nous définissons une grande {{CSSxRef("height")}} sur le contenu de notre élément défilant afin que l'élément défile réellement.

```css
.scroller {
  overflow: scroll;
  scroll-timeline-name: --mon-element-defilant;
  background: deeppink;
}

.long-element {
  height: 2000px;
}
```

Ensuite, nous donnons à l'élément animé quelques styles rudimentaires et lui appliquons une animation en utilisant la propriété abrégée {{CSSxRef("animation")}}. Nous définissons la {{CSSxRef("animation-timeline")}} sur la chronologie de défilement nommée&nbsp;: `--mon-element-defilant`. Pour réitérer, animer l'élément en fonction de la progression du défilement de son élément cousin n'est possible que parce que nous avons défini `timeline-scope` sur un ancêtre commun&nbsp;; l'élément animé n'est **pas** un descendant de l'élément défilant.

```css
.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
}

.animation {
  animation: rotate-appear 1ms linear;
  animation-timeline: --mon-element-defilant;
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    translate: 0;
  }

  to {
    rotate: 720deg;
    translate: 100%;
  }
}
```

```css hidden
@layer supports {
  @supports not (timeline-scope: none) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété 'timeline-scope'.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem;
    }
  }
}
```

### Résultat

Faites défiler la barre verticale dans la zone rose pour voir le carré s'animer.

{{EmbedLiveSample("Exemples", "100%", 320)}}

Le point clé à noter ici est que l'élément animé n'est pas un descendant de l'élément défilant — pour que cela fonctionne, nous augmentons la portée de la chronologie `--mon-element-defilant` en définissant `timeline-scope: --mon-element-defilant` sur le {{HTMLElement("body")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- Les propriétés {{CSSxRef("scroll-timeline")}}, {{CSSxRef("scroll-timeline-name")}}
- Les propriétés {{CSSxRef("view-timeline")}}, {{CSSxRef("view-timeline-name")}}
- [Les animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
