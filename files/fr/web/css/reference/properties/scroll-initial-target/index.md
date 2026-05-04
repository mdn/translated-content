---
title: Propriété CSS `scroll-initial-target`
short-title: scroll-initial-target
slug: Web/CSS/Reference/Properties/scroll-initial-target
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`scroll-initial-target`** permet de définir des éléments qui sont des cibles potentielles de l'ancrage lorsque leur ancêtre {{Glossary("scroll container", "du conteneur de défilement")}} est rendu pour la première fois.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-initial-target: none;
scroll-initial-target: nearest;

/* Valeurs globales */
scroll-initial-target: inherit;
scroll-initial-target: initial;
scroll-initial-target: revert;
scroll-initial-target: revert-layer;
scroll-initial-target: unset;
```

### Valeurs

- `none`
  - : L'élément n'est pas une cible de défilement initiale.
- `nearest`
  - : L'élément peut servir de cible de défilement initiale pour son ancêtre conteneur de défilement le plus proche.

## Description

La propriété `scroll-initial-target` permet de définir des éléments qui doivent être alignés lorsque leurs conteneurs {{Glossary("scroll snap", "d'ancrage de défilement")}} parents sont rendus pour la première fois. La valeur `nearest` définit l'élément comme une cible potentielle qui doit être alignée lorsque l'ancêtre {{Glossary("scroll container", "du conteneur de défilement")}} le plus proche apparaît pour la première fois sur la page.

Si plusieurs éléments ou pseudo-éléments dans le conteneur de défilement sont définis sur `nearest`, le premier élément dans l'ordre de l'arbre est la cible initiale de l'ancrage de défilement.

La valeur initiale est `none`, ce qui signifie qu'un élément pouvant être aligné n'est pas par défaut une cible de défilement initiale. La valeur `none` peut également être définie sur un élément pour le rendre explicitement non cible de défilement initiale.

Si la position de défilement initiale d'un conteneur de défilement est potentiellement définie à la fois par la propriété de distribution de contenu {{CSSxRef("place-content")}} et par `scroll-initial-target` sur des descendants — le premier descendant avec `scroll-initial-target: nearest` l'emporte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser `scroll-initial-target`

L'exemple suivant démontre les deux valeurs de `scroll-initial-target` et comment le premier élément avec `scroll-initial-target` est aligné.

#### HTML

Nous incluons 5 conteneurs, précédés d'un paragraphe expliquant l'effet attendu.

```html
<p><code>none</code> sur #4 uniquement</p>
<div class="none">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> sur #4 uniquement</p>
<div class="nearest">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> sur les éléments pairs</p>
<div class="nearest">
  <div>1</div>
  <div class="set">2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> sur les éléments impairs</p>
<div class="nearest">
  <div class="set">1</div>
  <div>2</div>
  <div class="set">3</div>
  <div>4</div>
  <div class="set">5</div>
</div>

<p>
  <code>nearest</code> sur les éléments impairs, avec <code>none</code> sur #1
</p>
<div class="nearest">
  <div class="set unset">1</div>
  <div>2</div>
  <div class="set">3</div>
  <div>4</div>
  <div class="set">5</div>
</div>
```

#### CSS

Nous configurons l'accrochage des éléments les plus proches et des éléments sans au défillement comme pour les conteneurs de défilement, en centrant les éléments accrochés.

```css
/* scroll-snap est obligatoire (mandatory) sur le parent */
div.nearest,
div.none {
  scroll-snap-type: x mandatory;
}

/* alignement scroll-snap pour les enfants */
div > div {
  scroll-snap-align: center;
  scroll-initial-target: always;
}
```

Nous définissons ensuite `scroll-initial-target` sur `none` ou `nearest` pour tous les éléments avec la classe `.set`.

```css
.none .set,
.nearest .set.unset {
  scroll-initial-target: none;
}
.nearest .set {
  scroll-initial-target: nearest;
}
```

```css hidden
/* configuration */
body {
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  font-family: sans-serif;
  text-align: center;
}

div.nearest,
div.none {
  display: flex;
  overflow: auto;
  font-size: 3rem;
}

div div {
  width: 90%;
  min-width: 15rem;
  flex: none;
  outline: 1px solid #333333;
}

/* coloration */
div > div:nth-child(even) {
  background-color: #87ea87;
}

div > div:nth-child(odd) {
  background-color: #87ccea;
}

p {
  margin: 1em 0 0;
}

@supports not (scroll-initial-target: nearest) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété scroll-initial-target.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1em;
  }
}
```

#### Résultat

{{EmbedLiveSample("Utiliser `scroll-initial-target`", "100%", 500)}}

L'effet de la propriété est démontré lorsque le conteneur de défilement avec accrochage est affiché sur la page.

Chaque ligne s'accroche au premier élément avec `nearest` défini, le cas échéant, dans l'ordre de l'arbre. Dans le dernier exemple, nous avons remplacé la valeur `nearest` par `none` sur le premier élément, donc le premier élément avec `nearest` appliqué est le #3.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
