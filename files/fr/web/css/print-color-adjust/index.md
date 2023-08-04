---
title: print-color-adjust
slug: Web/CSS/print-color-adjust
---

{{CSSRef}}

La propriété CSS **`print-color-adjust`** définit ce que [l'agent utilisateur](/fr/docs/Glossary/User_agent) pourra éventuellement faire pour optimiser l'apparence de l'élément sur l'appareil de sortie. Par défaut, le navigateur peut réaliser des ajustements sur l'apparence de l'élément qu'il estime nécessaires et prudents selon le type et les capacités de l'appareil de sortie.

## Syntaxe

```css
print-color-adjust: economy;
print-color-adjust: exact;

/* Valeurs globales */
print-color-adjust: inherit;
print-color-adjust: initial;
print-color-adjust: revert;
print-color-adjust: revert-layer;
print-color-adjust: unset;
```

La valeur de la propriété `print-color-adjust` doit être l'un des mots-clés suivants.

### Valeurs

- `economy`
  - : L'agent utilisateur peut réaliser des ajustements sur l'élément qu'il estime appropriés et prudents afin d'optimiser la sortie sur l'appareil de rendu. Par exemple, lors de l'impression, un navigateur pourra choisir de ne pas inclure les images d'arrière-plan et d'ajuster les couleurs du texte afin que le contraste soit optimisé pour la lecture sur du papier blanc. Il s'agit de la valeur par défaut.
- `exact`
  - : Le contenu de l'élément a été conçu pour utiliser précisément ces couleurs, ces images et ces styles de façon réfléchie et/ou avec un rôle important et où tout changement apporté par le navigateur dégraderait la page plutôt que de l'améliorer. L'apparence du contenu ne devrait pas être modifiée à moins que l'utilisatrice ou l'utilisateur ne le demande. Par exemple, une page pourrait inclure une liste d'information avec des lignes dont la couleur d'arrière-plan alterne entre blanc et gris clair&nbsp;: retirer la couleur d'arrière-plan réduirait la lisibilité du contenu.

## Notes d'utilisation

Il existe plusieurs raisons pour lesquelles un navigateur pourrait dévier de l'apparence indiquée&nbsp;:

- Le contenu utilise des couleurs trop proches pour le texte et l'arrière-plan, telles que le résultat produit sur l'appareil ne serait pas suffisamment lisible.
- Si l'appareil de sortie est une imprimante, les images d'arrière-plan noires ou très foncées peuvent être retirées afin d'économiser de l'encre.
- Lors de l'impression d'une page, le navigateur pourra choisir de remplacer du texte écrit avec une couleur claire sur un fond sombre par du texte écrit en couleur sombre sur un fond blanc.

Les options de configuration fournies par l'agent utilisateur auront la priorité sur la valeur de `print-color-adjust`. Autrement dit, il n'y a aucune garantie que `print-color-adjust` ait un quelconque effet. Non seulement, la personne peut surcharger ce comportement en paramétrant son navigateur, mais de plus, chaque agent utilisateur pourra décider pour lui-même comment gérer `print-color-adjust` pour chaque situation.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Préserver un contraste faible

Dans cet exemple, on a une boîte qui utilise [`background-image`](/fr/docs/Web/CSS/background-image) avec [`linear-gradient()`](/fr/docs/Web/CSS/gradient/linear-gradient) pour avoir un dégradé bleu foncé sur un fond noir. Le texte par-dessus est écrit en rouge. Pour cet exemple, on estime que c'est l'apparence voulue dans chaque environnement de rendu, y compris sur le papier et on utilise donc `print-color-adjust: exact` pour indiquer au navigateur de ne pas effectuer d'ajustements sur la boîte lors du rendu.

#### CSS

```css
.ma-boite {
  background-color: black;
  background-image: linear-gradient(
    rgba(0, 0, 180, 0.5),
    rgba(70, 140, 220, 0.5)
  );
  color: #900;
  width: 15rem;
  height: 6rem;
  text-align: center;
  font:
    24px "Helvetica",
    sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  print-color-adjust: exact;
}
```

#### HTML

```html
<div class="ma-boite">
  <p>Il faut plus de contraste !</p>
</div>
```

#### Résultat

{{EmbedLiveSample("", 640, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Appliquer des couleurs aux éléments HTML en utilisant CSS](/fr/docs/Web/CSS/CSS_Colors/Applying_color)
- Les autres propriétés relatives aux couleurs&nbsp;:
  - [`color`](/fr/docs/Web/CSS/color)
  - [`background-color`](/fr/docs/Web/CSS/background-color)
  - [`border-color`](/fr/docs/Web/CSS/border-color)
  - [`outline-color`](/fr/docs/Web/CSS/outline-color)
  - [`text-decoration-color`](/fr/docs/Web/CSS/text-decoration-color)
  - [`text-emphasis-color`](/fr/docs/Web/CSS/text-emphasis-color)
  - [`text-shadow`](/fr/docs/Web/CSS/text-shadow)
  - [`caret-color`](/fr/docs/Web/CSS/caret-color)
  - [`column-rule-color`](/fr/docs/Web/CSS/column-rule-color)
- [`background-image`](/fr/docs/Web/CSS/background-image)
