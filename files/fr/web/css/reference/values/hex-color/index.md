---
title: <hex-color>
slug: Web/CSS/Reference/Values/hex-color
original_slug: Web/CSS/hex-color
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<hex-color>`** est une notation permettant de décrire la _syntaxe de couleur hexadécimale_ d'une couleur [sRGB](/fr/docs/Glossary/RGB) en utilisant ses composantes principales (rouge, vert, bleu) écrites sous forme de nombres hexadécimaux, ainsi que sa transparence.

Une valeur `<hex-color>` peut être utilisée partout où une valeur {{cssxref("&lt;color&gt;")}} peut l'être.

## Syntaxe

```plain
#RGB        // La syntaxe à trois valeurs
#RGBA       // La syntaxe à quatre valeurs
#RRGGBB     // La syntaxe à six valeurs
#RRGGBBAA   // La syntaxe à huit valeurs
```

### Valeur

- `R` ou `RR`
  - : La composante _rouge_ de la couleur, sous forme de nombre hexadécimal insensible à la casse entre `0` et `ff` (255). S'il n'y a qu'un seul chiffre, il est dupliqué&nbsp;: `1` signifie `11`.
- `G` ou `GG`
  - : La composante _verte_ de la couleur, sous forme de nombre hexadécimal insensible à la casse entre `0` et `ff` (255). S'il n'y a qu'un seul chiffre, il est dupliqué&nbsp;: `c` signifie `cc`.
- `B` ou `BB`
  - : La composante _bleue_ de la couleur, sous forme de nombre hexadécimal insensible à la casse entre `0` et `ff` (255). S'il n'y a qu'un seul chiffre, il est dupliqué&nbsp;: `9` signifie `99`.
- `A` ou `AA` {{optional_inline}}
  - : La composante _alpha_ de la couleur, indiquant sa transparence, sous forme de nombre hexadécimal insensible à la casse entre `0` et `ff` (255). S'il n'y a qu'un seul chiffre, il est dupliqué&nbsp;: `e` signifie `ee`. `0` ou `00` représente une couleur totalement transparente, et `f` ou `ff` une couleur totalement opaque.

> [!NOTE]
> La syntaxe est insensible à la casse&nbsp;: `#00ff00` est identique à `#00FF00`.

## Exemples

### Rose vif hexadécimal

Cet exemple inclut quatre carrés rose vif, avec des fonds totalement opaques ou semi-transparents créés à l'aide de quatre syntaxes hexadécimales insensibles à la casse de différentes longueurs.

#### HTML

```html
<div>
  #F09
  <div class="c1"></div>
</div>
<div>
  #f09a
  <div class="c2"></div>
</div>
<div>
  #ff0099
  <div class="c3"></div>
</div>
<div>
  #FF0099AA
  <div class="c4"></div>
</div>
```

#### CSS

Les couleurs de fond rose vif sont créées à l'aide des notations hexadécimales à trois, quatre, six et huit valeurs, en utilisant à la fois des lettres majuscules et minuscules.

```css hidden
body {
  display: flex;
  justify-content: space-evenly;
  font-family: monospace;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

```css
[class] {
  width: 40px;
  height: 40px;
}
.c1 {
  background: #f09;
}
.c2 {
  background: #f09a;
}
.c3 {
  background: #ff0099;
}
.c4 {
  background: #ff0099aa;
}
```

#### Résultat

{{EmbedLiveSample("Rose vif hexadécimal", "100%", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{cssxref("&lt;color&gt;")}}
- Le type de donnée {{cssxref("named-color")}}
- La fonction couleur {{cssxref("color_value/rgb","rgb()")}}
- Le module [Couleur CSS](/fr/docs/Web/CSS/Guides/Colors)
