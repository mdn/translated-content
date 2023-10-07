---
title: Règles @
slug: Web/CSS/At-rule
---

{{cssref}}

Une **règle @** est une [expression CSS](/fr/Apprendre/CSS/Introduction_à_CSS/La_syntaxe#Les_instructions_CSS) commençant par le symbole '@' (U+0040 COMMERCIAL AT), suivi d'un identifiant et qui contient tout ce qui se trouve jusqu'au prochain point-virgule, ';' (U+003B SEMICOLON), ou jusqu'au prochain [bloc CSS](/fr/Apprendre/CSS/Introduction_à_CSS/La_syntaxe#Les_blocs_CSS) trouvé en premier.

```css
/* Forme générique */
@identifiant (RÈGLE);

/* Exemple : indiquer au navigateur d'utiliser */
/* UTF-8 comme jeu de caractères */
@charset "utf-8";
```

Il existe de nombreuses règles @, désignées par leurs identifiants, chacune ayant leur propre syntaxe :

- {{cssxref("@charset")}} qui définit le jeu de caractères utilisé par la feuille de style.
- {{cssxref("@import")}} qui indique au moteur de rendu d'inclure une feuille de style externe.
- {{cssxref("@namespace")}} qui indique au moteur de rendu que le contenu doit être pris en compte comme s'il était préfixé pour un espace de noms XML.
- **_Les règles @ imbriquées_**. Ces règles sont un sous-ensemble des instructions imbriquées qui peuvent être utilisées au plus haut niveau de la feuille de style et aussi à l'intérieur de règles conditionnelles :

  - {{cssxref("@media")}} : une règle de groupe conditionnelle qui applique son contenu si l'appareil utilisé respecte les critères définis dans la « requête média » (ou _media query_).
  - {{cssxref("@supports")}} : une règle de groupe conditionnelle qui applique son contenu si le navigateur respecte une condition donnée (par exemple, si le navigateur supporte tel élément de syntaxe).
  - {{cssxref("@document")}} {{experimental_inline}} : une règle de groupe conditionnelle qui applique son contenu si le document sur lequel s'applique la feuille de style respecte une condition donnée _(cette règle a été reportée pour être incluse dans la spécification CSS de niveau 4)_
  - {{cssxref("@page")}} : une règle qui décrit les modifications de disposition à appliquer lorsque le document doit être imprimé/paginé.
  - {{cssxref("@font-face")}} : une règle qui définit une police externe à télécharger.
  - {{cssxref("@keyframes")}} : une règle qui décrit les états des différentes étapes intermédiaires qui composent une animation CSS.
  - {{cssxref("@counter-style")}} : une règle qui permet de définir des styles de compteur spécifiques qui ne font pas partie des styles prédéfinis (bien que la spécification ait atteint le niveau de _Candidate Recommendation_, cette fonctionnalité est uniquement implémentée dans Gecko au moment où nous écrivons ces lignes)
  - {{cssxref("@font-feature-values")}} (ainsi que `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` et `@character-variant`) : ces règles permettent de définir des noms d'usages pour la propriété {{cssxref("font-variant-alternates")}} qui permet d'activer différentes caractéristiques des polices OpenType (bien que la spécification ait atteint le niveau de _Candidate Recommendation_, cette fonctionnalité est uniquement implémentée dans Gecko au moment où nous écrivons ces lignes)

## Les règles de groupe conditionnelles

Comme pour les différentes propriétés, chaque règle @ possède une syntaxe différente. Toutefois, on peut en regrouper certaines dans une catégorie : **les règles de groupe conditionnelles**. Ces instructions partagent une syntaxe commune et permettent d'inclure des _instructions imbriquées_ (soit des ensembles de règles CSS soit des règles @ imbriquées). De plus, elles portent toutes une sémantique commune : toutes définissent une certaine condition qui, selon qu'elle est évaluée à vrai ou à faux, permettre d'appliquer les instructions imbriquées du groupe.

Les règles de groupe conditionnelles définies par [la spécification de niveau 3 sur les règles CSS conditionnelles](https://drafts.csswg.org/css-conditional-3/) sont :

- {{cssxref("@media")}},
- {{cssxref("@supports")}},
- {{cssxref("@document")}} _(qui a été reporté à la spécification de niveau 4)._

Chaque groupe conditionnel peut également contenir des instructions imbriquées. Il peut donc y avoir un nombre indéterminé de niveaux d'imbrication.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La référence CSS](/fr/docs/Web/CSS/Reference)
