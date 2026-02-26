---
title: font-synthesis-weight
slug: Web/CSS/Reference/Properties/font-synthesis-weight
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-synthesis-weight`** permet de définir si le navigateur peut synthétiser la variante grasse lorsqu'elle n'est pas définie dans la famille de polices.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("font-synthesis")}} pour contrôler toutes les valeurs de synthèse de police.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-synthesis-weight: auto;
font-synthesis-weight: none;

/* Valeurs globales */
font-synthesis-weight: inherit;
font-synthesis-weight: initial;
font-synthesis-weight: revert;
font-synthesis-weight: revert-layer;
font-synthesis-weight: unset;
```

### Valeurs

- `auto`
  - : Indique que la variante grasse manquante peut être synthétisée par le navigateur si besoin.
- `none`
  - : Indique que la synthèse de la variante grasse manquante par le navigateur n'est pas autorisée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Désactiver la synthèse de la variante grasse

Cet exemple montre comment désactiver la synthèse de la variante grasse par le navigateur pour la police `Montserrat`.

#### HTML

```html
<p class="francais">
  Ceci est la variante <strong>grasse</strong> par défaut et la variante
  <em>oblique</em>.
</p>

<p class="francais no-syn">
  La variante <strong>grasse</strong> est désactivée ici, mais pas la variante
  <em>oblique</em>.
</p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

.francais {
  font-family: "Montserrat", sans-serif;
}
.no-syn {
  font-synthesis-weight: none;
}
```

#### Résultat

{{EmbedLiveSample("Désactiver la synthèse de la variante grasse", "", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-synthesis")}} et les propriétés {{CSSxRef("font-synthesis-small-caps")}}, {{CSSxRef("font-synthesis-style")}}
- Les propriétés {{CSSxRef("font-style")}}, {{CSSxRef("font-variant")}}, {{CSSxRef("font-weight")}}
