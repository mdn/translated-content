---
title: Propriété CSS `text-align-last`
short-title: text-align-last
slug: Web/CSS/Reference/Properties/text-align-last
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-align-last`** définit la façon dont la dernière ligne d'un bloc, ou une ligne avant un retour à la ligne forcé, doit être alignée.

{{InteractiveExample("Démonstration CSS&nbsp;: text-align-last")}}

```css interactive-example-choice
text-align-last: right;
```

```css interactive-example-choice
text-align-last: center;
```

```css interactive-example-choice
text-align-last: left;
```

```html interactive-example
<section id="default-example">
  <div>
    <p id="example-element">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-size: 1.5em;
}

#default-example > div {
  width: 250px;
}

#example-element {
  text-align: justify;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-align-last: auto;
text-align-last: start;
text-align-last: end;
text-align-last: left;
text-align-last: right;
text-align-last: center;
text-align-last: justify;

/* Valeurs globales */
text-align-last: inherit;
text-align-last: initial;
text-align-last: revert;
text-align-last: revert-layer;
text-align-last: unset;
```

### Valeurs

- `auto`
  - : La ligne concernée est alignée selon la valeur de {{CSSxRef("text-align")}} sauf si {{CSSxRef("text-align")}} vaut `justify`, auquel cas, cela aura le même effet que d'utiliser la valeur `start` pour `text-align-last`.
- `start`
  - : Cette valeur a le même effet que la valeur `left` si la direction du texte va de gauche à droite ou le même effet que `right` si la direction du texte va de droite à gauche.
- `end`
  - : Cette valeur a le même effet que la valeur `right` si la direction du texte va de gauche à droite ou le même effet que `left` si la direction du texte va de droite à gauche.
- `left`
  - : Les contenus en ligne (<i lang="en">inline</i> en anglais) sont alignés sur le bord gauche de la boîte contenant la ligne.
- `right`
  - : Les contenus en ligne (<i lang="en">inline</i> en anglais) sont alignés sur le bord droit de la boîte contenant la ligne.
- `center`
  - : Les contenus en ligne (<i lang="en">inline</i> en anglais) sont horizontalement centrés par rapport à la boîte contenant la ligne.
- `justify`
  - : Le texte est justifié. Les bords gauche et droit du texte sont alignés avec les bord gauche et droit du paragraphe.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Justifier la dernière ligne

```html hidden
<p>
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
p {
  font-size: 1.4em;
  text-align: justify;
  text-align-last: center;
}
```

#### Résultat

{{EmbedLiveSample("Justifier la dernière ligne", 560)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-align")}}
