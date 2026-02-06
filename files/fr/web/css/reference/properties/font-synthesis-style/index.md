---
title: font-synthesis-style
slug: Web/CSS/Reference/Properties/font-synthesis-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-synthesis-style`** permet de définir si le navigateur peut synthétiser la variante oblique lorsqu'elle n'est pas définie dans la famille de polices.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("font-synthesis")}} pour contrôler toutes les valeurs de synthèse de police.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-synthesis-style: auto;
font-synthesis-style: none;
font-synthesis-style: oblique-only;

/* Valeurs globales */
font-synthesis-style: inherit;
font-synthesis-style: initial;
font-synthesis-style: revert;
font-synthesis-style: revert-layer;
font-synthesis-style: unset;
```

### Valeurs

- `auto`
  - : Indique que la variante oblique manquante peut être synthétisée par le navigateur si besoin.
- `none`
  - : Indique que la synthèse de la variante oblique manquante par le navigateur n'est pas autorisée.
- `oblique-only`
  - : Identique à `auto`, mais aucune synthèse de police n'est effectuée si `font-style: italic` est défini.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Désactiver la synthèse de la variante oblique

Cet exemple montre comment désactiver la synthèse de la variante oblique par le navigateur pour la police `Montserrat`.

#### HTML

```html
<p class="english">
  Ceci est la variante <em>oblique</em> par défaut et la variante
  <strong>grasse</strong>.
</p>

<p class="english no-syn">
  La variante <em>oblique</em> est désactivée ici, mais pas la variante
  <strong>grasse</strong>.
</p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

.english {
  font-family: "Montserrat", sans-serif;
}

.no-syn {
  font-synthesis-style: none;
}
```

#### Résultat

{{EmbedLiveSample("Désactiver la synthèse de la variante oblique", "", 100)}}

### Comparaison des valeurs de `font-synthesis-style`

Cet exemple compare toutes les valeurs de `font-synthesis-style` en utilisant des textes en italique et oblique.

#### HTML

```html
<div class="fss-none">
  <h2>font-synthesis-style: none</h2>
  <p class="oblique">Ce texte utilise <code>oblique</code></p>
  <p class="italic">Ce texte utilise <code>italic</code></p>
</div>

<div class="fss-auto">
  <h2>font-synthesis-style: auto</h2>
  <p class="oblique">Ce texte utilise <code>oblique</code></p>
  <p class="italic">Ce texte utilise <code>italic</code></p>
</div>

<div class="fss-oblique-only">
  <h2>font-synthesis-style: oblique-only</h2>
  <p class="oblique">Ce texte utilise <code>oblique</code></p>
  <p class="italic">Ce texte utilise <code>italic</code></p>
</div>
```

#### CSS

```css hidden
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

p {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
}

@supports not (font-synthesis-style: oblique-only) {
  body::before {
    content: "Your browser doesn't support the 'oblique-only' value.";
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
/* Définir le style de la synthèse de police */
.fss-none {
  font-synthesis-style: none;
}

.fss-auto {
  font-synthesis-style: auto;
}

.fss-oblique-only {
  font-synthesis-style: oblique-only;
}

/* Définir les styles de police */
.oblique {
  font-style: oblique;
}

.italic {
  font-style: italic;
}

/* Styles pour la démonstration */
.oblique::after {
  content: " (font-style: oblique)";
  font-size: 0.8rem;
  vertical-align: sub;
}

.italic::after {
  content: " (font-style: italic)";
  font-size: 0.8rem;
  vertical-align: sub;
}
```

#### Résultat

{{EmbedLiveSample("Comparaison des valeurs de `font-synthesis-style`", "", 560)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-synthesis")}} et les propriétés {{CSSxRef("font-synthesis-small-caps")}}, {{CSSxRef("font-synthesis-weight")}}
- Les propriétés {{CSSxRef("font-style")}}, {{CSSxRef("font-variant")}}, {{CSSxRef("font-weight")}}
