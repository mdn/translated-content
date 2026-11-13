---
title: Type CSS `<hue-interpolation-method>`
short-title: <hue-interpolation-method>
slug: Web/CSS/Reference/Values/hue-interpolation-method
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<hue-interpolation-method>`** représente l'algorithme utilisé pour l'interpolation entre des valeurs de type {{CSSxRef("&lt;hue&gt;")}}.
La méthode d'interpolation spécifie comment trouver un point médian entre deux valeurs de teinte en se basant sur une roue chromatique.
Elle est utilisée comme composant du type de donnée {{CSSxRef("&lt;color-interpolation-method&gt;")}}.

Lors de l'interpolation de valeurs `<hue>`, l'algorithme d'interpolation de teinte utilise par défaut [`shorter`](#shorter).

## Syntaxe

Une valeur `<hue-interpolation-method>` consiste en le nom d'un algorithme d'interpolation de teinte suivi du mot-clé littéral `hue`&nbsp;:

```plain
shorter hue
longer hue
increasing hue
decreasing hue
```

### Valeurs

Toute paire d'angles de teinte correspond à deux rayons sur la {{Glossary("Color wheel", "roue chromatique")}}, qui découpent la circonférence en deux arcs possibles pour l'interpolation. Les deux arcs commencent au premier rayon et se terminent au second, mais l'un va dans le sens horaire et l'autre dans le sens antihoraire.

> [!NOTE]
> Les descriptions et illustrations suivantes sont basées sur des roues chromatiques dans lesquelles les angles de teinte augmentent dans le sens horaire. Sachez qu'il existe des roues chromatiques où l'augmentation des angles se fait dans le sens antihoraire.

Pour une paire d'angles de teinte `θ1` et `θ2` normalisés dans l'intervalle `[0deg, 360deg)`, il existe quatre algorithmes pour déterminer quel arc est utilisé lors de l'interpolation de `θ1` à `θ2`&nbsp;:

- `shorter`
  - : Utilise l'arc le plus court. Lorsque les deux rayons coïncident, l'arc dégénère en un seul point. Lorsque les deux arcs ont la même longueur&nbsp;:
    - Si `θ1 < θ2`, utiliser l'arc dans le sens horaire&nbsp;;
    - Si `θ1 > θ2`, utiliser l'arc dans le sens antihoraire.

    | `θ1 = 45deg`, `θ2 = 135deg`                                        | `θ1 = 135deg`, `θ2 = 45deg`                                        |
    | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
    | ![shorter with θ1 = 45deg and θ2 = 135deg](shorter_increasing.png) | ![shorter with θ1 = 135deg and θ2 = 45deg](shorter_decreasing.png) |

- `longer`
  - : Utilise l'arc le plus long. Lorsque les deux rayons coïncident&nbsp;:
    - Si `θ1 ≤ θ2`, l'arc devient la circonférence complète dans le sens horaire.
    - Si `θ1 > θ2`, l'arc devient la circonférence complète dans le sens antihoraire.

    Lorsque les deux arcs ont la même longueur&nbsp;:
    - Si `θ1 < θ2`, utiliser l'arc dans le sens horaire&nbsp;;
    - Si `θ1 > θ2`, utiliser l'arc dans le sens antihoraire.

    | `θ1 = 45deg`, `θ2 = 135deg`                                      | `θ1 = 135deg`, `θ2 = 45deg`                                      |
    | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
    | ![longer with θ1 = 45deg and θ2 = 135deg](longer_decreasing.png) | ![longer with θ1 = 135deg and θ2 = 45deg](longer_increasing.png) |

- `increasing`
  - : Utilise l'arc dans le sens horaire. Lorsque les deux rayons coïncident, l'arc dégénère en un seul point.

    | `θ1 = 45deg`, `θ2 = 135deg`                                           | `θ1 = 135deg`, `θ2 = 45deg`                                          |
    | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
    | ![increasing with θ1 = 45deg and θ2 = 135deg](shorter_increasing.png) | ![increasing with θ1 = 135deg and θ2 = 45deg](longer_increasing.png) |

- `decreasing`
  - : Utilise l'arc dans le sens antihoraire. Lorsque les deux rayons coïncident, l'arc dégénère en un seul point.

    | `θ1 = 45deg`, `θ2 = 135deg`                                          | `θ1 = 135deg`, `θ2 = 45deg`                                           |
    | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | ![decreasing with θ1 = 45deg and θ2 = 135deg](longer_decreasing.png) | ![decreasing with θ1 = 135deg and θ2 = 45deg](shorter_decreasing.png) |

Comme il n'y a que deux arcs possibles, ces algorithmes sont équivalents deux à deux dans certaines circonstances. Plus précisément&nbsp;:

- Si `0deg < θ2 - θ1 < 180deg` ou `θ2 - θ1 < -180deg`, `shorter` et `increasing` sont équivalents, tandis que `longer` et `decreasing` sont équivalents.
- Si `-180deg < θ2 - θ1 < 0deg` ou `θ2 - θ1 > 180deg`, `shorter` et `decreasing` sont équivalents, tandis que `longer` et `increasing` sont équivalents.

Une particularité de `increasing` et `decreasing` est que lorsque la différence d'angle de teinte passe par `180deg` lors d'une transition ou d'une animation, l'arc ne basculera pas de l'autre côté comme le font `shorter` et `longer`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparaison des algorithmes d'interpolation de teinte

L'exemple suivant montre l'effet de l'utilisation de différents algorithmes d'interpolation de teinte dans une fonction {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}.

#### HTML

```html
<div class="hsl">
  <p>HSL</p>
</div>
<div class="hsl-increasing">
  <p>HSL croissant</p>
</div>
<div class="hsl-decreasing">
  <p>HSL décroissant</p>
</div>
<div class="hsl-shorter">
  <p>HSL plus courte</p>
</div>
<div class="hsl-longer">
  <p>HSL plus longue</p>
</div>
<div class="hsl-named">
  <p>HSL nommé</p>
</div>
<div class="hsl-named-longer">
  <p>HSL nommé (plus longue)</p>
</div>
```

#### CSS

```css hidden
div {
  border: 1px solid black;
  height: 50px;
  margin: 10px;
  width: 90%;
}
p {
  color: white;
  margin: 6px;
}

/* Styles de repli */
.hsl,
.hsl-shorter,
.hsl-named {
  background: linear-gradient(
    to right,
    hsl(39 100% 50%),
    hsl(46 100% 50%),
    hsl(53 100% 50%),
    hsl(60 100% 50%)
  );
}
.hsl-increasing {
  background: linear-gradient(
    to right,
    hsl(190 100% 50%),
    hsl(225 100% 50%),
    hsl(260 100% 50%),
    hsl(295 100% 50%),
    hsl(330 100% 50%),
    hsl(365 100% 50%),
    hsl(400 100% 50%),
    hsl(435 100% 50%),
    hsl(470 100% 50%),
    hsl(505 100% 50%),
    hsl(540 100% 50%)
  );
}
.hsl-decreasing,
.hsl-longer,
.hsl-named-longer {
  background: linear-gradient(
    to right,
    hsl(399 100% 50%),
    hsl(368 100% 50%),
    hsl(337 100% 50%),
    hsl(307 100% 50%),
    hsl(276 100% 50%),
    hsl(245 100% 50%),
    hsl(214 100% 50%),
    hsl(183 100% 50%),
    hsl(152 100% 50%),
    hsl(122 100% 50%),
    hsl(91 100% 50%),
    hsl(60 100% 50%)
  );
}
```

```css
.hsl {
  background: linear-gradient(
    to right in hsl,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-increasing {
  background: linear-gradient(
    to right in hsl increasing hue,
    hsl(190deg 100% 50%),
    hsl(180deg 100% 50%)
  );
}
.hsl-decreasing {
  background: linear-gradient(
    to right in hsl decreasing hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-shorter {
  background: linear-gradient(
    to right in hsl shorter hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-longer {
  background: linear-gradient(
    to right in hsl longer hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-named {
  background: linear-gradient(to right in hsl, orange, yellow);
}
.hsl-named-longer {
  background: linear-gradient(to right in hsl longer hue, orange, yellow);
}
```

#### Résultat

{{EmbedLiveSample("Comparaison des algorithmes d'interpolation de teinte", "100%", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;color-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;hue&gt;")}}
