---
title: font-synthesis-position
slug: Web/CSS/Reference/Properties/font-synthesis-position
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`font-synthesis-position`** permet de définir si le navigateur peut synthétiser les variantes de «&nbsp;position&nbsp;» d'indice et d'exposant lorsqu'elles ne sont pas définies dans la famille de polices, lors de l'utilisation de {{CSSxRef("font-variant-position")}} pour définir les positions.

La propriété **`font-synthesis-position`** n'a aucun effet lors de l'utilisation des éléments HTML {{HTMLElement("sup")}} et {{HTMLElement("sub")}}.

Il est souvent pratique d'utiliser la propriété raccourcie {{CSSxRef("font-synthesis")}} pour contrôler toutes les valeurs de synthèse de police.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-synthesis-position: auto;
font-synthesis-position: none;

/* Valeurs globales */
font-synthesis-position: inherit;
font-synthesis-position: initial;
font-synthesis-position: revert;
font-synthesis-position: revert-layer;
font-synthesis-position: unset;
```

### Valeurs

- `auto`
  - : Indique que la variante de position manquante peut être synthétisée par le navigateur si besoin.
- `none`
  - : Indique que la synthèse d'une variante de position manquante par le navigateur n'est pas autorisée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Désactiver la synthèse des variantes de position

Cet exemple montre comment désactiver la synthèse des variantes d'exposant et d'indice par le navigateur pour la police `Montserrat`.

#### HTML

```html
<p>
  Ce sont les variantes de position par défaut&nbsp;:
  <span class="super">exposant</span>, <span class="sub">indice</span>,
  <strong>grasse</strong> et <em>oblique</em>.
</p>

<p class="no-syn">
  Les variantes <span class="super">exposant</span> et
  <span class="sub">indice</span> sont désactivées ici, mais pas les variantes
  <strong>grasse</strong> et <em>oblique</em> (sur les navigateurs qui prennent
  en charge <code>font-synthesis-position</code>).
</p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

* {
  font-family: "Montserrat", sans-serif;
}
.super {
  font-variant-position: super;
}
.sub {
  font-variant-position: sub;
}
.no-syn {
  font-synthesis-position: none;
}
```

#### Résultat

{{EmbedLiveSample('Disabling synthesis of position typeface', '', '100')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-synthesis")}} et les propriétés {{CSSxRef("font-synthesis-style")}}, {{CSSxRef("font-synthesis-weight")}}
- Les propriétés {{CSSxRef("font-style")}}, {{CSSxRef("font-variant")}}, {{CSSxRef("font-variant-position")}}, {{CSSxRef("font-weight")}}
