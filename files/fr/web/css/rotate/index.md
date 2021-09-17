---
title: rotate
slug: Web/CSS/rotate
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/rotate
---
{{CSSRef}}{{seecompattable}}

La propriété **`rotate`** permet d'indiquer des rotations individuellement et indépendamment de la propriété {{cssxref("transform")}}. Cela peut être utile pour la construction d'une interface utilisateur et évite d'avoir à se souvenir de l'ordre exact des fonctions de transformations à indiquer pour `transform`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
rotate: none;

/* Valeur angulaire */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* Un axe x, y, z et l'angle associé */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* Un vector et l'angle associé */
rotate: 1 1 1 90deg;
```

### Valeurs

- Valeur angulaire
  - : Une valeur {{cssxref("&lt;angle&gt;")}} qui indique l'angle à utiliser, autour de l'axe Z, pour tourner les éléments. Cela est équivalent à la fonction `rotate()`.
- Le nom de l'axe et l'angle associé
  - : Le nom de l'axe par rapport auquel on souhaite effectuer la rotation (`"x"`, "`y`" ou "`z"`), puis une valeur {{cssxref("&lt;angle&gt;")}} qui indique l'angle à appliquer pour la rotation. Cela est équivalent à l'une des fonctions `rotateX()`/`rotateY()`/`rotateZ()`.
- Un vecteur et l'angle associé
  - : Trois nombres (valeurs {{cssxref("&lt;number&gt;")}}) qui représentent une vecteur centré sur l'origine qui définit la ligne autour de laquelle on souhaite faire tourner l'élément puis une valeur {{cssxref("&lt;angle&gt;")}} qui indique l'angle de rotation. Cela est équivalent à la fonction `rotate3d()`.
- `none`
  - : Cette valeur indique qu'aucune rotation ne devrait être appliquée.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div>
  <p class="rotate">Rotation</p>
</div>
```

### CSS

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.rotate {
  transition: rotate 1s;
}

div:hover .rotate {
  rotate: 1 -0.5 1 180deg;
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                                                    | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS Transforms 2', '#individual-transforms', 'individual transforms')}} | {{Spec2('CSS Transforms 2')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.rotate")}}

## Voir aussi

- {{cssxref('translate')}}
- {{cssxref('scale')}}
- {{cssxref('transform')}}
