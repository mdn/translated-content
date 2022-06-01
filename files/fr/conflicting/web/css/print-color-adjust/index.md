---
title: color-adjust
slug: conflicting/Web/CSS/print-color-adjust
tags:
  - CSS
  - Propriété
  - Reference
  - Web
  - color-adjust
translation_of: Web/CSS/color-adjust
original_slug: Web/CSS/color-adjust
---
{{CSSRef}}

La propriété CSS **`color-adjust`** contrôle la façon dont l'agent utilisateur peut optimiser l'apparence de l'élément sur l'appareil. Par défaut, le navigateur est autorisé à appliquer tous les ajustements qu'il estime nécessaires afin d'ajuster l'élément au mieux pour l'appareil utilisé.

{{EmbedInteractiveExample("pages/css/color-adjust.html")}}

Dans l'exemple précédent, le texte utilise la couleur ({{cssxref("color")}}), `#411` qui est très sombre et qui peut donc être difficile à lire avec l'arrière-plan noir (`black` pour la propriété {{cssxref("background-color")}}). Selon le navigateur, sa configuration et l'appareil utilisé, le navigateur peut choisir de retirer l'arrière-plan noir ou de modifier la couleur du texte afin d'améliorer le contraste et la lisibilité.

## Syntaxe

    color-adjust: economy;
    color-adjust: exact;

La valeur de la propriété `color-adjust` peut être un de ces deux mots-clés.

### Valeurs

- `economy`
  - : L'agent utilisateur est autorisé à appliquer les ajustements estimés nécessaires afin d'optimiser l'affichage du document sur l'appareil. Par exemple, un navigateur pourra, lors d'une impression, supprimer les images d'arrière-plan et ajuster les couleurs du texte afin de s'assurer que le contraste obtenu sur le papier sera suffisant. Cette valeur est la valeur par défaut.
- **`exact`**
  - : Le contenu de l'élément a spécifiquement été conçu afin d'utiliser des couleurs, des images et des styles de façon importante et toute modification opérée par le navigateur détériorerait le document. L'apparence du contenu ne devrait pas être modifiée sauf si l'utilisateur le demande. Ainsi, si une page contient un tableau dont les lignes sont alternées en gris et blanc, il ne faudrait pas retirer cette alternance au risque de perdre en lisibilité.

### Syntaxe formelle

{{csssyntax}}

## Notes d'utilisation

Plusieurs raisons peuvent entraîner un agent utilisateur à modifier l'apparence finale par rapport à l'apparence indiquée via CSS :

- Le contenu utilise des couleurs trop proches pour le texte et l'arrière-plan pour que le résultat soit lisible sur l'appareil ciblé (écran ou papier par exemple)..
- Si l'appareil d'affichage est une imprimante, afin d'économiser de l'encre, le navigateur peut choisir de retirer les images d'arrière-plan sombres ou trop denses.
- Lors de l'impression, l'agent utilisateur peut choisir de remplacer du texte clair sur un fond sombre par du texte sombre sur un fond blanc.

Si l'agent utilisateur propose des options à l'utilisateur quant à l'affichage des couleurs et des images, celles-ci seront prioritaires sur `color-adjust`. Autrement dit, il n'est pas absolument certain que `color-adjust` ait un quelconque effet. Tout d'abord parce que l'utilisateur peut choisir d'outrepasser ces règles mais aussi parce qu'il revient à l'agent utilisateur de choisir comment gérer `color-adjust` dans chaque situation.

## Exemples

Dans cet exemple, une boîte utilise une image d'arrière-plan ({{cssxref("background-image")}}) ainsi qu'un dégradé linéaire ({{cssxref("linear-gradient()")}}) sur un arrière-plan noir afin d'avoir un dégradé bleu foncé derrière un texte rouge. Pour une raison quelconque, c'est l'apparence souhaitée quel que soit l'environnement (y compris du papier) et c'est donc `color-adjust: exact` qui est utilisé afin d'interdire au navigateur d'ajuster quoi que ce soit.

### CSS

```css
.ma-boite {
  background-color: black;
  background-image: linear-gradient(rgba(0, 0, 180, 0.5), rgba(70, 140, 220, 0.5));
  color: #900;
  width: 15rem;
  height: 6rem;
  text-align: center;
  font: 24px "Helvetica", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color-adjust: exact;
}
```

### HTML

```html
<div class="ma-boite">
  <p>Il nous faut plus de contraste !</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 640, 120)}}

## Spécifications

| Spécification                                                                                    | État                                     | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName('CSS Color Adjust', '#propdef-color-adjust', 'color-adjust')}} | {{Spec2('CSS Color Adjust')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.color-adjust")}}

## Voir aussi

- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/HTML/Appliquer_des_couleurs)
- Les autres propriétés CSS relatives aux couleurs : {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
