---
title: Propriété CSS `print-color-adjust`
short-title: print-color-adjust
slug: Web/CSS/Reference/Properties/print-color-adjust
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`print-color-adjust`** définit ce que {{Glossary("user agent", "l'agent utilisateur")}} pourra éventuellement faire pour optimiser l'apparence de l'élément sur l'appareil de sortie.
Par défaut, le navigateur peut réaliser des ajustements sur l'apparence de l'élément qu'il estime nécessaires et prudents selon le type et les capacités de l'appareil de sortie.

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
  - : L'agent utilisateur peut réaliser des ajustements sur l'élément qu'il estime appropriés et prudents afin d'optimiser la sortie sur l'appareil de rendu.
    Par exemple, lors de l'impression, un navigateur pourra choisir de ne pas inclure les images d'arrière-plan et d'ajuster les couleurs du texte afin que le contraste soit optimisé pour la lecture sur du papier blanc.
    Il s'agit de la valeur par défaut.
- `exact`
  - : Le contenu de l'élément a été conçu pour utiliser précisément ces couleurs, ces images et ces styles de façon réfléchie et/ou avec un rôle important et où tout changement apporté par le navigateur dégraderait la page plutôt que de l'améliorer.
    L'apparence du contenu ne devrait pas être modifiée à moins que l'utilisateur·ice ne le demande.
    Par exemple, une page pourrait inclure une liste d'information avec des lignes dont la couleur d'arrière-plan alterne entre blanc et gris clair.
    Retirer la couleur d'arrière-plan réduirait la lisibilité du contenu.

## Notes d'utilisation

Il existe plusieurs raisons pour lesquelles un navigateur pourrait dévier de l'apparence indiquée&nbsp;:

- Le contenu utilise des couleurs trop proches pour le texte et l'arrière-plan, telles que le résultat produit sur l'appareil ne serait pas suffisamment lisible.
- Si l'appareil de sortie est une imprimante, les images d'arrière-plan noires ou très foncées peuvent être retirées afin d'économiser de l'encre.
- Lors de l'impression d'une page, le navigateur pourra choisir de remplacer du texte écrit avec une couleur claire sur un fond sombre par du texte écrit en couleur sombre sur un fond blanc.

Les options de configuration fournies par l'agent utilisateur auront la priorité sur la valeur de `print-color-adjust`. Autrement dit, il n'y a aucune garantie que `print-color-adjust` ait un quelconque effet. Non seulement, la personne peut surcharger ce comportement en paramétrant son navigateur, mais de plus, chaque agent utilisateur pourra décider pour lui-même comment gérer `print-color-adjust` pour chaque situation.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Préserver un contraste faible

Dans cet exemple, on a une boîte qui utilise {{CSSxRef("background-image")}} avec {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}} pour avoir un dégradé bleu foncé sur un fond noir. Le texte par-dessus est écrit en rouge. Pour cet exemple, on estime que c'est l'apparence voulue dans chaque environnement de rendu, y compris sur le papier et on utilise donc `print-color-adjust: exact` pour indiquer au navigateur de ne pas effectuer d'ajustements sur la boîte lors du rendu.

#### CSS

```css
.ma-boite {
  background-color: black;
  background-image: linear-gradient(rgb(0 0 180 / 50%), rgb(70 140 220 / 50%));
  color: #990000;
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
  <p>Il faut plus de contraste&nbsp;!</p>
</div>
```

#### Résultat

{{EmbedLiveSample("Préserver un contraste faible", 640, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés relatives aux couleurs&nbsp;: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("border-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}} et {{CSSxRef("column-rule-color")}}
- {{CSSxRef("background-image")}}
