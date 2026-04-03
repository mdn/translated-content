---
title: text-justify
slug: Web/CSS/Reference/Properties/text-justify
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-justify`** définit le type de justification à appliquer au texte lorsque {{CSSxRef("text-align", "text-align: justify;")}} est défini sur un élément.

## Syntaxe

```css
text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute; /* Valeur obsolète */

/* Valeurs globales */
text-justify: inherit;
text-justify: initial;
text-justify: revert;
text-justify: revert-layer;
text-justify: unset;
```

### Valeurs

- `none`
  - : Le texte ne sera pas justifié— cela aura le même effet que de ne pas définir {{CSSxRef("text-align")}}, mais cela peut se révéler utile pour activer ou désactiver globalement la justification.
- `auto`
  - : Le navigateur choisira la meilleure justification pour la situation, en se basant sur le rapport entre performance et qualité, mais également sur la valeur la plus appropriée par rapport à la langue (français, langues CJK, etc.). C'est la propriété par défaut, qui est appliquée lorsque `text-justify` n'est pas définie.
- `inter-word`
  - : Le texte est justifié en ajustant les espaces entre les mots (en faisant varier {{CSSxRef("word-spacing")}}), cette propriété est appropriée pour les langues qui séparent les mots avec des espaces, comme le Français ou le Coréen.
- `inter-character`
  - : Le texte est justifié en ajustant les espaces entre les caractères (en faisant varier {{CSSxRef("letter-spacing")}}) ; cette propritété est plus appropriée pour des langues comme le Japonais.
- `distribute` {{Deprecated_Inline}}
  - : Même effet que `inter-character`&nbsp;; cette valeur sert uniquement à de fins de compatibilité.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

```html
<p class="none">
  <code>text-justify: none</code> — Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id
  mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat
  justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="auto">
  <code>text-justify: auto</code> — Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id
  mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat
  justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="dist">
  <code>text-justify: distribute</code> — Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="word">
  <code>text-justify: inter-word</code> — Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="char">
  <code>text-justify: inter-character</code> — Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
```

```css
p {
  font-size: 1.5em;
  border: 1px solid black;
  padding: 10px;
  width: 95%;
  margin: 10px auto;
  text-align: justify;
}

.none {
  text-justify: none;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distribute;
}

.word {
  text-justify: inter-word;
}

.char {
  text-justify: inter-character;
}
```

{{EmbedLiveSample("Exemples", "100%", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-align")}}
