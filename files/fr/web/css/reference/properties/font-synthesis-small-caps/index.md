---
title: font-synthesis-small-caps
slug: Web/CSS/Reference/Properties/font-synthesis-small-caps
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-synthesis-small-caps`** permet de définir si le navigateur peut synthétiser la variante petite capitale lorsqu'elle n'est pas définie dans la famille de polices. Les glyphes en petites capitales utilisent généralement la forme des lettres majuscules mais sont réduits à la taille des lettres minuscules.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("font-synthesis")}} pour contrôler toutes les valeurs de synthèse de police.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-synthesis-small-caps: auto;
font-synthesis-small-caps: none;

/* Valeurs globales */
font-synthesis-small-caps: inherit;
font-synthesis-small-caps: initial;
font-synthesis-small-caps: revert;
font-synthesis-small-caps: revert-layer;
font-synthesis-small-caps: unset;
```

### Valeurs

- `auto`
  - : Indique que la variante petite capitale manquante peut être synthétisée par le navigateur si besoin.
- `none`
  - : Indique que la synthèse de la variante petite capitale manquante par le navigateur n'est pas autorisée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Désactiver la synthèse de la variante petite capitale

Cet exemple montre comment désactiver la synthèse de la variante petite capitale par le navigateur pour la police `Montserrat`.

#### HTML

```html
<p class="english">
  Ce sont les variantes par défaut&nbsp;:
  <span class="small-caps">petite capitale</span>, <strong>grasse</strong> et
  <em>oblique</em>.
</p>

<p class="english no-syn">
  La variante <span class="small-caps">petite capitale</span> est désactivée
  ici, mais pas les variantes <strong>grasse</strong> et <em>oblique</em>.
</p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

.english {
  font-family: "Montserrat", sans-serif;
}
.small-caps {
  font-variant: small-caps;
}
.no-syn {
  font-synthesis-small-caps: none;
}
```

#### Résultat

{{EmbedLiveSample("Désactiver la synthèse de la variante petite capitale", "", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-synthesis")}} et les propriétés {{CSSxRef("font-synthesis-style")}}, {{CSSxRef("font-synthesis-weight")}}
- Les propriétés {{CSSxRef("font-style")}}, {{CSSxRef("font-variant")}}, {{CSSxRef("font-variant-caps")}}, {{CSSxRef("font-weight")}}
- [CanvasRenderingContext2D&nbsp;: propriété fontVariantCaps](/fr/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
