---
title: Modèle pour les pages du Livre de recettes
slug: Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe/Cookbook_template
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

> [!NOTE]
> Voici un modèle de contenu pour les pages de «&nbsp;recette&nbsp;» CSS. Vous êtes invité·e à utiliser cette page comme modèle lorsque vous créez une nouvelle recette.
> _Les commentaires en italiques sont des informations sur l'utilisation de telle ou telle partie du modèle._

_Une description du problème qu'on souhaite résoudre ou du motif qu'on illustre avec cette recette._

## Exigences

_Quels éléments ce motif doit-il inclure, ou quels problèmes doit-il résoudre&nbsp;? Listez-les ici._

## Recette

_Modifiez le code d'exemple. Le dernier paramètre correspond à la hauteur de l'exemple interactif, que vous pouvez adapter si besoin. Indiquez que l'on peut cliquer sur «&nbsp;Exécuter&nbsp;» dans les blocs de code pour modifier l'exemple dans le MDN Playground._

```html live-sample___center-example
<div class="container">
  <div class="item">Je suis centré&nbsp;!</div>
</div>
```

```css live-sample___center-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;

  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;

  width: 10em;
}
```

{{EmbedLiveSample("center-example", "", 250)}}

## Choix effectués

_Expliquez vos décisions lors de la création du motif. Pourquoi avoir choisi une certaine méthode&nbsp;? Si vous souhaitez ajouter un exemple supplémentaire ici — par exemple une version avec des solutions de repli — faites-le. Cette section est volontairement souple car les motifs vont du très simple au plus complexe._

## Solutions de repli ou méthodes alternatives utiles

_S'il existe des méthodes alternatives utiles pour construire la recette, ou des recettes de repli à utiliser si vous devez prendre en charge des navigateurs non compatibles, incluez-les dans des sections séparées ici._

## Problèmes d'accessibilité

_Incluez ceci s'il y a des points spécifiques à surveiller concernant l'accessibilité. Si ce n'est pas pertinent pour votre motif, cette section peut être omise._

## Voir aussi

- _Liens vers des propriétés associées&nbsp;: `example-property`_
- _Liens vers des articles montrant comment utiliser la propriété en contexte&nbsp;: «&nbsp;Voir l'article …&nbsp;»_
- _Liens externes de grande qualité. N'hésitez pas à ajouter des liens externes, mais ils doivent être remarquables et ne pas se limiter à des détails mineurs._
