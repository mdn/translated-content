---
title: list-style-image
slug: Web/CSS/Reference/Properties/list-style-image
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`list-style-image`** définit une image à utiliser comme marqueur d'élément de liste.

Il est souvent plus pratique d'utiliser la propriété raccourcie {{CSSxRef("list-style")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: list-style-image")}}

```css interactive-example-choice
list-style-image: url("/shared-assets/images/examples/rocket.svg");
```

```css interactive-example-choice
list-style-image: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>NASA Notable Missions</p>
    <ul class="transition-all unhighlighted" id="example-element">
      <li>Apollo</li>
      <li>Hubble</li>
      <li>Chandra</li>
      <li>Cassini-Huygens</li>
      <li>Spitzer</li>
    </ul>
  </div>
</section>
```

```css interactive-example
.default-example {
  font-size: 1.2rem;
}

#example-element {
  width: 100%;
  background: #be094b;
  color: white;
}

section {
  text-align: left;
  flex-direction: column;
}

hr {
  width: 50%;
  color: lightgray;
  margin: 0.5em;
}

.note {
  font-size: 0.8rem;
}

.note a {
  color: #009e5f;
}

@counter-style space-counter {
  symbols: "\1F680" "\1F6F8" "\1F6F0" "\1F52D";
  suffix: " ";
}
```

> [!NOTE]
> Cette propriété est appliquée aux éléments de liste, c'est-à-dire aux éléments avec {{CSSxRef("display", "display: list-item;")}} qui [par défaut <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/rendering.html#lists) inclut les éléments {{HTMLElement("li")}}. Parce que cette propriété est héritée, elle peut être définie sur l'élément parent (normalement {{HTMLElement("ol")}} ou {{HTMLElement("ul")}}) pour qu'elle s'applique à tous les éléments de liste.

## Syntaxe

```css
/* Valeurs avec un mot-clé*/
list-style-image: none;

/* Valeurs de type <url> */
list-style-image: url("star-solid.gif");

/* Valeurs avec une image */
list-style-image: linear-gradient(to left bottom, red, blue);

/* Valeurs globales */
list-style-image: inherit;
list-style-image: initial;
list-style-image: revert;
list-style-image: revert-layer;
list-style-image: unset;
```

### Valeurs

- {{CSSxRef("&lt;image&gt;")}}
  - : Une image valide à utiliser comme marqueur.
- `none`
  - : Définit qu'aucune image n'est utilisée comme marqueur. Si cette valeur est définie, le marqueur défini dans {{CSSxRef("list-style-type")}} sera utilisé à la place. C'est la valeur par défaut pour {{CSSxRef("list-style")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser une valeur URL

Cet exemple utilise une étoile comme marqueur, que nous ajoutons avec la fonction d'image {{CSSxRef("url_value", "&lt;url&gt;")}}.

#### HTML

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>
```

#### CSS

```css
ul {
  list-style-image: url("star-solid.gif");
}
```

#### Résultat

{{EmbedLiveSample("Utiliser une valeur URL")}}

### Utiliser un dégradé

Cet exemple utilise un [dégradé CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients) comme marqueur, que nous créons avec la fonction d'image {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}.

#### HTML

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>
```

#### CSS

```css
ul {
  font-size: 200%;
  list-style-image: linear-gradient(to left bottom, red, blue);
}
```

#### Résultat

{{EmbedLiveSample("Utiliser un dégradé")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("list-style")}}
- La propriété {{CSSxRef("list-style-type")}}
- La propriété {{CSSxRef("list-style-position")}}
- Le pseudo-élément {{CSSxRef("::marker")}}
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module [des styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
