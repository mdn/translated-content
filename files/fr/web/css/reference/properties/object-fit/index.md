---
title: object-fit
slug: Web/CSS/Reference/Properties/object-fit
l10n:
  sourceCommit: 113e0681c10e794aaf242faf50a152a1c7cd5d12
---

La propriété [CSS](/fr/docs/Web/CSS) **`object-fit`** définit la façon dont le contenu d'un {{ Glossary("replaced elements", "élément remplacé")}}, tel qu'une {{HTMLElement("img")}} ou une {{HTMLElement("video")}}, doit être redimensionné pour s'adapter à son conteneur.

> [!NOTE]
> La propriété `object-fit` n'a aucun effet sur les éléments HTML {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} et {{HTMLElement("fencedframe")}}.

Il est possible de modifier l'alignement du contenu de l'élément remplacé au sein de la boîte de l'élément grâce à la propriété {{CSSxRef("object-position")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: object-fit")}}

```css interactive-example-choice
object-fit: fill;
```

```css interactive-example-choice
object-fit: contain;
```

```css interactive-example-choice
object-fit: cover;
```

```css interactive-example-choice
object-fit: none;
```

```css interactive-example-choice
object-fit: scale-down;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/plumeria-146x200.jpg" />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: 100%;
  border: 2px dotted #888888;
}
```

## Syntaxe

```css
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;

/* Valeurs globales */
object-fit: inherit;
object-fit: initial;
object-fit: revert;
object-fit: revert-layer;
object-fit: unset;
```

La propriété `object-fit` peut être définie grâce à l'un des mots-clés suivants.

### Valeurs

- `contain`
  - : Le contenu remplacé est redimensionné pour maintenir son {{Glossary("aspect ratio", "rapport d'aspect")}} tout en s'adaptant à la boîte de contenu de l'élément. L'ensemble de l'objet est ajusté pour remplir la boîte, tout en préservant son ratio d'aspect, de sorte que l'objet sera [«&nbsp;au format de lettre&nbsp;»](https://fr.wikipedia.org/wiki/Letterbox) ou [«&nbsp;au format de pilier&nbsp;» <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Pillarbox) si son ratio d'aspect ne correspond pas à celui de la boîte.
- `cover`
  - : Le contenu remplacé est redimensionné pour maintenir son rapport d'aspect tout en remplissant entièrement la boîte de contenu de l'élément. Si le rapport d'aspect de l'objet ne correspond pas à celui de sa boîte, l'objet sera alors rogné pour s'adapter.
- `fill`
  - : Le contenu remplacé est redimensionné pour remplir entièrement la boîte de contenu de l'élément de boîte. C'est la valeur de {{CSSxRef("initial")}}. L'ensemble de l'objet remplira complètement la boîte. Si le {{Glossary("aspect ratio", "rapport d'aspect")}} de l'objet ne correspond pas à celui de sa boîte, l'objet sera alors étiré pour s'adapter.
- `none`
  - : Le contenu remplacé n'est pas redimensionné.
- `scale-down`
  - : Le contenu est redimensionné comme si `none` ou `contain` était défini, selon ce qui donnerait la taille d'objet concrète la plus petite.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Appliquer `object-fit` à une image

#### HTML

```html
<section>
  <h2>object-fit: fill</h2>
  <img class="fill" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <img class="fill narrow" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <h2>object-fit: contain</h2>
  <img class="contain" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <img class="contain narrow" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <h2>object-fit: cover</h2>
  <img class="cover" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <img class="cover narrow" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <h2>object-fit: none</h2>
  <img class="none" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <img class="none narrow" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <h2>object-fit: scale-down</h2>
  <img class="scale-down" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <img class="scale-down narrow" src="mdn_logo_only_color.png" alt="Logo MDN" />
</section>
```

#### CSS

```css
h2 {
  font-family: "Courier New", monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid black;
  margin: 10px 0;
}

.narrow {
  width: 100px;
  height: 150px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

#### Résultat

{{EmbedLiveSample("Appliquer `object-fit` à une image", 500, 1100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés CSS associées aux images&nbsp;: {{CSSxRef("object-position")}}, {{CSSxRef("image-orientation")}}, {{CSSxRef("image-rendering")}}, {{CSSxRef("image-resolution")}}.
- La propriété {{CSSxRef("background-size")}}
- [Comprendre les rapports d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
