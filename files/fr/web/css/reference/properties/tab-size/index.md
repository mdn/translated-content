---
title: Propriété CSS `tab-size`
short-title: tab-size
slug: Web/CSS/Reference/Properties/tab-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`tab-size`** permet d'adapter la largeur utilisée pour représenter le caractère de tabulation (`U+0009`).

{{InteractiveExample("Démonstration CSS&nbsp;: tab-size")}}

```css interactive-example-choice
tab-size: 10px;
```

```css interactive-example-choice
tab-size: 16px;
```

```css interactive-example-choice
tab-size: 24px;
```

```css interactive-example-choice
tab-size: 4;
```

```html interactive-example
<section id="default-example">
  <pre id="example-element">&#9;123</pre>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid;
}
```

## Syntaxe

```css
/* Valeurs de type <number> */
tab-size: 4;
tab-size: 0;

/* Valeurs de type <length> */
tab-size: 10px;
tab-size: 2em;

/* Valeurs globales */
tab-size: inherit;
tab-size: initial;
tab-size: revert;
tab-size: revert-layer;
tab-size: unset;
```

### Valeurs

- {{CSSxRef("&lt;number&gt;")}}
  - : Un multiple de la largeur d'avance du caractère espace (`U+0020`) à utiliser comme largeur des tabulations. Doit être non négatif. La largeur d'avance signifie la distance qu'un curseur ou une tête d'impression parcourt avant d'imprimer le caractère suivant.
- {{CSSxRef("&lt;length&gt;")}}
  - : La largeur de la tabulation. La valeur doit être positive.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Étendre avec un nombre de caractères

```css
pre {
  tab-size: 4; /* Définit la taille de tabulation à 4 caractères de large */
}
```

### Réduire les tabulations

```css
pre {
  tab-size: 0; /* Supprime l'indentation */
}
```

### Taille de tabulation par défaut et tailles personnalisées

Cet exemple compare une taille de tabulation par défaut avec une taille de tabulation personnalisée. Notez que {{CSSxRef("white-space")}} est définie à `pre` pour empêcher la réduction des tabulations.

#### HTML

```html
<p>pas de tabulation</p>
<p>&#0009;taille de tabulation par défaut de 8 caractères de large</p>
<p class="custom-number">
  &#0009;taille de tabulation personnalisée de 3 caractères de large
</p>
<p>
  &nbsp;&nbsp;&nbsp;3 espaces, équivalent à la taille de tabulation
  personnalisée
</p>
<p class="custom-length">
  &#0009;taille de tabulation personnalisée de 50px de large
</p>
```

#### CSS

```css hidden
body {
  border: 1px solid red;
  margin: 1rem;
}
```

```css
p {
  white-space: pre;
}

.custom-number {
  tab-size: 3;
}

.custom-length {
  tab-size: 50px;
}
```

#### Résultat

{{EmbedLiveSample("Taille de tabulation par défaut et tailles personnalisées", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef('white-space')}}
