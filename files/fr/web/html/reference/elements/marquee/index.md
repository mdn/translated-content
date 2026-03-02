---
title: "<marquee> : l'élément de texte défilant"
slug: Web/HTML/Reference/Elements/marquee
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<marquee>`** permet d'insérer une zone de texte défilant. Vous pouvez contrôler le comportement du texte lorsqu'il atteint les bords de sa zone de contenu grâce à ses attributs.

L'élément HTML `<marquee>` est obsolète et son utilisation est fortement déconseillée. Si vous devez créer un effet de texte défilant ou d'éléments continus, privilégiez les [animations CSS](/fr/docs/Web/CSS/Guides/Animations) avec les [transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using) à la place des éléments `<marquee>` pour animer le contenu de façon fluide. Pensez également à inclure la requête {{CSSxRef("@media")}} CSS {{CSSxRef("@media/prefers-reduced-motion")}} afin d'arrêter l'animation selon la préférence de l'utilisateur·ice, ce qui améliore l'expérience et l'accessibilité.

## Attributs

- `behavior` {{Deprecated_Inline}}
  - : Définit comment le texte defile à l'intérieur du `<marquee>`. Les valeurs possibles sont `scroll`, `slide` et `alternate`. Si aucune valeur n'est définie, la valeur par défaut est `scroll`.
- `bgcolor` {{Deprecated_Inline}}
  - : Définit la couleur de fond en utilisant le nom de la couleur ou son code hexadécimal.
- `direction` {{Deprecated_Inline}}
  - : Définit la direction du défilement dans le `<marquee>`. Les valeurs possibles sont `left`, `right`, `up` et `down`. SI aucune valeur n'est définie, la valeur par défaut est `left`.
- `height` {{Deprecated_Inline}}
  - : Définit la hauteur en pixels ou en pourcentage.
- `hspace` {{Deprecated_Inline}}
  - : Définit la marge horizontale.
- `loop` {{Deprecated_Inline}}
  - : Définit le nombre de fois que le marquee va faire défiler le texte. Si aucune valeur n'est définie, la valeur par défaut est -1, ce qui signifie que le marquee va défiler indéfiniment.
- `scrollamount` {{Deprecated_Inline}}
  - : Définit la quantité de défilement de chaque défilement en pixels. La valeur par défaut est 6.
- `scrolldelay` {{Deprecated_Inline}}
  - : Définit l'intervalle entre chaque défilement en millisecondes. La valeur par défaut est 85. Notez que toute valeur inférieure à 60 sera ignorée et 60 sera utilisé à la place, à moins que `truespeed` ne soit défini.
- `truespeed` {{Deprecated_Inline}}
  - : Par défaut, les valeurs de `scrolldelay` inférieures à 60 sont ignorées. Si `truespeed` est présent, ces valeurs ne seront pas ignorées.
- `vspace` {{Deprecated_Inline}}
  - : Définit la marge verticale en pixel ou en pourcentage.
- `width` {{Deprecated_Inline}}
  - : Définit la largeur en pixel en ou pourcentage.

## Exemples

```html
<marquee>ʕノ•ᴥ•ʔノ ︵ ┻━┻</marquee>

<marquee direction="up">Ce texte va défiler de bas en haut</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  class="outlined">
  <marquee behavior="alternate">Ce texte va rebondir</marquee>
</marquee>
```

```css
.outlined {
  border: solid;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 600, 450)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLMarqueeElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("transform")}}
- La propriété CSS {{CSSxRef("translate")}}
- Le module [des transformations CSS](/fr/docs/Web/CSS/Guides/Transforms)
- Le module [des animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- L'interface API {{DOMxRef("HTMLMarqueeElement")}}
