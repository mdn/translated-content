---
title: font-variant-position
slug: Web/CSS/font-variant-position
---

{{CSSRef}}

La propriété **`font-variant-position`** permet d'utiliser des glyphes de plus petite taille positionnés en exposant ou en indice par rapport à la ligne de base utilisée (qui reste la même).

Généralement, les glyphes utilisés sont ceux utilisés pour les éléments HTML {{HTMLElement("sub")}} et {{HTMLElement("sup")}}.

```css
/* Valeurs avec un mot-clé */
font-variant-position: normal;
font-variant-position: sub;
font-variant-position: super;

/* Valeurs globales */
font-variant-position: inherit;
font-variant-position: initial;
font-variant-position: unset;
```

Lorsque ces glyphes alternatifs sont activés, si un caractère de l'ensemble concerné ne possède pas de glyphe correspondant, l'ensemble des caractères est affiché avec une méthode de secours qui synthétise ces glyphes.

Ces glyphes alternatifs possèdent la même boîte em et la même ligne de base que le reste du texte. La modification est purement graphique et il n'y a pas d'impact sur la hauteur de ligne ou sur les autres caractéristiques liées aux boîtes.

## Syntaxe

La valeur de cette propriété est définie grâce à l'un des mots-clés définis ci-après.

### Valeurs

- `normal`
  - : Les glyphes alternatifs sont désactivés.
- `sub`
  - : Ce mot-clé permet d'utiliser les glyphes utilisés en indice.
- `super`
  - : Ce mot-clé permet d'utiliser les glyphes utilisés en exposant.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  font-variant-position: super;
}
```

### HTML

```html
<p>
  Alice <span class="exemple">ne s’était pas fait le moindre mal.</span>
  Vite elle se remet sur ses pieds et regarde en l’air&nbsp;; mais tout est noir
  là-haut. Elle voit devant elle un long passage et le Lapin Blanc qui court à
  toutes jambes.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
