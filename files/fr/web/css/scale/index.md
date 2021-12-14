---
title: scale
slug: Web/CSS/scale
translation_of: Web/CSS/scale
---
{{CSSRef}}{{seecompattable}}

La propriété **`scale`** permet de mise à l'échelle individuellement et indépendamment de la propriété {{cssxref("transform")}}. Cela peut être utile pour la construction d'une interface utilisateur et évite d'avoir à se souvenir de l'ordre exact des fonctions de transformations à indiquer pour `transform`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scale: none;

/* Une seule valeur */
/* Les valeurs supérieures à 1 agrandissent l'élément */
scale: 2;
/* Les valeurs inférieures à 1 rétrécissent l'élément */
scale: 0.5;

/* Deux valeurs */
scale: 2 0.5;

/* Trois valeurs */
scale: 2 0.5 2;
```

### Valeurs

- Une seule valeur de longueur/pourcentage
  - : Une longueur ou un pourcentage qui définit une mise à l'échelle en deux dimensions. Le facteur utilisé est le même pour l'axe X et l'axe Y. Cela est équivalent à la fonction `scale()` (mise à l'échelle sur deux dimensions) avec une seule valeur.
- Deux valeurs de longueur/pourcentage
  - : Deux longueurs ou pourcentages qui définissent respectivement les composantes horizontale et verticale de l'agrandissement/rétrécissement en deux dimensions. Cela est équivalent à la fonction `scale()` appelée avec ces deux arguments.
- Trois valeurs de longueur/pourcentage
  - : Trois longueurs ou pourcentages qui définissent respectivement les composantes horizontale, verticale et en profondeur de la mise à l'échelle sur trois dimensions. Cela est équivalent à la fonction `scale3d()` appelée avec ces trois arguments.
- `none`
  - : Cette valeur indique qu'aucune mise à l'échelle ne devrait être appliquée.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div>
  <p class="scale">Scaling</p>
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

.scale {
  transition: scale 1s;
}

div:hover .scale {
  scale: 2 0.7;
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

{{Compat("css.properties.scale")}}

## Voir aussi

- {{cssxref('translate')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}
