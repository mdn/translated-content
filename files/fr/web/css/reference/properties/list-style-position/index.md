---
title: list-style-position
slug: Web/CSS/Reference/Properties/list-style-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`list-style-position`** permet de définir la position du marqueur (cf. {{CSSxRef("::marker")}}) de liste par rapport à la boîte principale.

{{InteractiveExample("Démonstration CSS&nbsp;: list-style-position")}}

```css interactive-example-choice
list-style-position: inside;
```

```css interactive-example-choice
list-style-position: outside;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>Missions remarquables de la NASA</p>
    <ul class="transition-all" id="example-element">
      <li>Apollo 11&nbsp;: premier alunissage humain</li>
      <li>Ville dans l'espace&nbsp;: la Station spatiale internationale</li>
      <li>Grand observatoire&nbsp;: le télescope spatial Hubble</li>
      <li>Rovers martiens éternels</li>
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

## Syntaxe

```css
/* Valeurs avec un mot-clé */
list-style-position: inside;
list-style-position: outside;

/* Valeurs globales */
list-style-position: inherit;
list-style-position: initial;
list-style-position: revert;
list-style-position: revert-layer;
list-style-position: unset;
```

La propriété `list-style-position` est définie avec l'un des mots-clés suivants.

### Valeurs

- `inside`
  - : La boîte du marqueur ({{CSSxRef("::marker")}}) est la première boîte en ligne (<i lang="en">inline</i>) de la boîte principale. Le contenu de l'élément sera appliqué à la suite de la boîte du marqueur.
- `outside`
  - : La boîte du marqueur ({{CSSxRef("::marker")}}) est en dehors de la boîte principale. C'est la valeur par défaut pour {{CSSxRef("list-style")}}.

## Description

Cette propriété s'applique aux éléments de liste, c'est-à-dire aux éléments avec {{CSSxRef("display", "display: list-item;")}}. [Par défaut <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/rendering.html#lists), cela inclut les éléments HTML {{HTMLElement("li")}}. Parce que cette propriété est héritée, elle peut être définie sur l'élément parent (normalement {{HTMLElement("ol")}} ou {{HTMLElement("ul")}}) pour qu'elle s'applique à tous les éléments de liste.

Si un élément de bloc est le premier enfant d'un élément de liste déclaré avec `list-style-position: inside`, alors l'élément de bloc est placé sur la ligne après la boîte du marqueur.

Il est souvent plus pratique d'utiliser la propriété raccourcie {{CSSxRef("list-style")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définition de la position des éléments d'une liste

#### HTML

```html
<ul class="un">
  Liste 1
  <li>Élément 1-1</li>
  <li>Élément 1-2</li>
  <li>Élément 1-3</li>
  <li>Élément 1-4</li>
</ul>
<ul class="deux">
  Liste 2
  <li>Élément 2-1</li>
  <li>Élément 2-2</li>
  <li>Élément 2-3</li>
  <li>Élément 2-4</li>
</ul>
<ul class="trois">
  Liste 3
  <li>Élément 3-1</li>
  <li>Élément 3-2</li>
  <li>Élément 3-3</li>
  <li>Élément 3-4</li>
</ul>
```

#### CSS

```css
.un {
  list-style-position: inside;
  list-style-type: square;
}

.deux {
  list-style-position: outside;
  list-style-type: circle;
}

.trois {
  list-style-position: inside;
  list-style-image: url("star-solid.gif");
}
```

#### Résultat

{{EmbedLiveSample("Définition de la position des éléments d'une liste", 200, 420)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("list-style")}}
- La propriété {{CSSxRef("list-style-type")}}
- La propriété {{CSSxRef("list-style-image")}}
- Le pseudo-élément {{CSSxRef("::marker")}}
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module [des styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
