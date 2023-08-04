---
title: Introduction à la cascade CSS
slug: Web/CSS/Cascade
l10n:
  sourceCommit: 193543a2af9350e76864a93bb751270979305cd0
---

{{CSSRef}}

La **cascade** est un algorithme qui définit comment les agents utilisateur combinent les valeurs des propriétés selon leurs différentes sources. La cascade définit l'origine et la couche qui l'emporte lorsque des déclarations présentes dans plusieurs [origines](#types_dorigine) ou [couches de cascade](/fr/docs/Web/CSS/@layer) définissent une valeur pour une propriété sur un élément.

La cascade est au cœur de CSS, et fait même partie de l'acronyme _**<i lang="en">Cascading</i>**_ <i lang="en">Style Sheets</i> qu'on traduit par feuilles de style en cascade. Lorsqu'un [sélecteur](/fr/docs/Web/CSS/CSS_Selectors) cible un élément, la valeur de la propriété avec l'origine qui a la plus haute précédence est appliquée, même si un sélecteur d'une origine avec une précédence moindre ou d'une autre couche a une [spécificité](/fr/docs/Web/CSS/Specificity) supérieure.

Dans cet article, on explique ce qu'est la cascade et l'ordre dans lequel les [déclarations](/fr/docs/Web/API/CSSStyleDeclaration) [CSS](/fr/docs/Glossary/CSS) cascadent. Nous aborderons également les couches de cascade et les types d'origine. Comprendre la précédence des origines est un prérequis fondamental pour comprendre le fonctionnement de la cascade.

## Types d'origine

L'algorithme de la cascade CSS consiste à sélectionner des déclarations CSS afin de déterminer les valeurs correctes des propriétés CSS. Les déclarations CSS proviennent de différents types d'origine&nbsp;:

- **[Les feuilles de style de l'agent utilisateur](#feuilles_de_style_de_lagent_utilisateur)**,
- **[Les feuilles de style du site](#feuilles_de_style_du_site)**,
- **[Les feuilles de style de l'utilisatrice ou l'utilisateur](#feuilles_de_style_de_lutilisatrice_ou_lutilisateur)**.

Bien que les feuilles de style proviennent de ces différentes origines et que chacune d'entre elles peut avoir différentes [couches](/fr/docs/Web/CSS/@layer), leurs portées se chevauchent. Pour que l'ensemble fonctionne, l'algorithme de la cascade définit comment elles interagissent. Avant d'étudier ces interactions, définissons quelques termes.

### Feuilles de style de l'agent utilisateur

Les agents utilisateur, ou navigateurs, possèdent des feuilles de style de base qui fournissent des styles par défaut pour tout document. Ces feuilles de styles sont appelées **feuilles de style de l'agent utilisateur** (<i lang="en">user-agent stylesheets</i> en anglais). La plupart des navigateurs utilisent des feuilles de style réelles pour cela et d'autres les simulent dans leur code. Le résultat produit est le même.

Certains navigateurs permettent aux utilisatrices et utilisateurs de modifier les feuilles de style de l'agent utilisateur. Il s'agit toutefois de quelque chose de rare, et qui ne peut pas être contrôlé.

Bien que certaines contraintes soient imposées aux navigateurs sur leurs feuilles de style via la spécification HTML, ils ont une grande latitude. Cela signifie qu'il existe certaines différences entre les navigateurs. Pour simplifier le développement web, certaines équipes de développement peuvent utiliser une feuille de style de réinitialisation telle que [normalize.css](https://github.com/necolas/normalize.css), qui définit les valeurs des propriétés communes avec un état connu, avant de procéder à des modifications spécifiques.

À moins que la feuille de style de l'agent utilisateur inclut [`!important`](/fr/docs/Web/CSS/Specificity#lexception_!important) à côté d'une propriété pour la rendre importante, les styles déclarés par le site, y compris les feuilles de style de réinitialisation, l'emporteront sur les styles de l'agent utilisateur, quelle que soit la spécificité du sélecteur associé.

### Feuilles de style du site

Les **feuilles de style du site** (<i lang="en">author stylesheets</i> en anglais) sont les feuilles de style les plus fréquemment rencontrées. Il s'agit des styles écrits par les équipes de développement web. Ces styles peuvent réinitialiser les styles de l'agent utilisateur, comme indiqué avant, et définir les styles pour la conception d'une page ou application web donnée. C'est la personne ou l'équipe qui développe le site web qui définit les styles du document en utilisant une ou plusieurs feuilles de style importées ou liées, des éléments [`<style>`](/fr/docs/Web/HTML/Element/style) ou encore des styles en incise définis avec l'attribut [`style`](/fr/docs/Web/HTML/Global_attributes#attr-style). Ce sont ces styles qui définissent l'aspect du site web, son thème.

### Feuilles de style de l'utilisatrice ou l'utilisateur

Dans la plupart des navigateurs, l'utilisatrice ou l'utilisateur du site web peut choisir de surcharger les styles en utilisant une feuille de style personnalisée (<i lang="en">user stylesheet</i> en anglais), conçue pour adapter l'expérience de navigation selon ses souhaits. Selon l'agent utilisateur, [ces feuilles de styles peuvent être configurées](https://www.thoughtco.com/user-style-sheet-3469931) directement ou ajoutées grâce à des extensions du navigateur.

### Couches de la cascade

L'ordre de la cascade est basé sur le type d'origine. La cascade pour chaque type d'origine dépend de l'ordre de déclaration [des couches de cascade](/fr/docs/Web/CSS/@layer) pour chaque type. Quelle que soit l'origine (agent utilisateur, site, utilisatrice ou utilisateur), les styles peuvent être déclarés à l'intérieur ou en dehors de couches nommées ou anonymes. Lorsqu'ils sont déclarés avec [`layer`, `layer()`](/fr/docs/Web/CSS/@import) ou [`@layer`](/fr/docs/Web/CSS/@layer), les styles sont placés dans la couche nommée correspondante, ou dans une couche anonyme si aucun nom n'est fourni. Les styles déclarés en dehors d'une couche sont considérés comme faisant partie d'une couche anonyme déclarée en dernier.

Voyons l'interaction de la cascade entre les différents types d'origine avant de voir les couches de chaque type d'origine.

## Ordre de la cascade

L'algorithme de la cascade détermine quelle valeur s'applique pour chaque propriété de chaque élément du document. Les étapes suivantes s'appliquent à l'algorithme de la cascade&nbsp;:

1. **Pertinence**&nbsp;: Pour commencer, seules les règles qui s'appliquent à un élément sont conservées. Cela signifie les règles dont le sélecteur correspond à l'élément et qui font partie d'une règle @ `media` appropriée.

2. **Origine et importance**&nbsp;: Ensuite, ces règles sont triées selon leur importance, c'est-à-dire si elles sont suivies ou non par `!important`, et selon leur origine. En ignorant les couches pour le moment, on obtient l'ordre suivant pour la cascade&nbsp;:

   | Ordre (du plus faible au plus élevé) | Origine                        | Importance   |
   | ------------------------------------ | ------------------------------ | ------------ |
   | 1                                    | Agent utilisateur (navigateur) | normal       |
   | 2                                    | Utilisatrice/utilisateur       | normal       |
   | 3                                    | Site                           | normal       |
   | 4                                    | Animations CSS @keyframe       |              |
   | 5                                    | Site                           | `!important` |
   | 6                                    | Utilisatrice/utilisateur       | `!important` |
   | 7                                    | Agent utilisateur (navigateur) | `!important` |
   | 8                                    | Transitions CSS                |              |

3. **Spécificité**&nbsp;: En cas d'égalité pour une même origine, [la spécificité](/fr/docs/Web/CSS/Specificity) d'une règle est considérée pour déterminer laquelle choisir. La spécificité des sélecteurs est comparée, et c'est la déclaration avec la plus grande spécificité qui l'emporte.
4. **Ordre d'apparence**&nbsp;: Si plusieurs valeurs pour une même propriété sont décrites dans des règles avec des sélecteurs de même spécificité, c'est la dernière déclaration, dans l'ordre des styles, qui est appliquée.

La cascade progresse dans l'ordre croissant des précédences, les animations ont donc la précédence sur les valeurs normales, qu'elles soient déclarées par l'utilisatrice ou l'utilisateur, le site, ou l'agent utilisateur. Les valeurs importantes l'emportent sur les animations, et les transitions l'emportent sur les valeurs importantes.

> **Note :** **Transitions et animations**
>
> Les valeurs de propriétés définies par une animation avec [`@keyframes`](/fr/docs/Web/CSS/@keyframes) sont plus importantes que celles de styles normaux (c'est-à-dire sans [`!important`](/fr/docs/Web/CSS/Specificity#lexception_!important)).
>
> Les valeurs des propriétés définies dans une transition ([`transition`](/fr/docs/Web/CSS/transition)) l'emportent sur toutes les autres valeurs, y compris celles marquées avec `!important`.

L'algorithme de la cascade est appliqué _avant_ l'algorithme de la spécificité. Cela signifie que si `:root p { color: red;}` est déclaré dans une feuille de style de l'utilisatrice ou de l'utilisateur (ligne 2 du tableau) et si une règle moins spécifique, `p {color: blue;}`, est présente dans la feuille de style du site (ligne 3 du tableau), les paragraphes seront bleus.

## Exemple simple

Avant de voir le rôle des couches dans la cascade, voyons un exemple impliquant différentes sources de CSS parmi ces origines et déroulons l'algorithme de la cascade étape par étape&nbsp;:

Pour cet exemple, nous aurons une feuille de style provenant de l'agent utilisateur, deux pour le site, une feuille de style de l'utilisatrice ou de l'utilisateur, et des styles en incise dans le HTML&nbsp;:

**Feuille de style de l'agent utilisateur**

```css
li {
  margin-left: 10px;
}
```

**Feuille de style du site 1**

```css
li {
  margin-left: 0;
} /* Une règle de réinitialisation */
```

**Feuille de style du site 2**

```css
@media screen {
  li {
    margin-left: 3px;
  }
}

@media print {
  li {
    margin-left: 1px;
  }
}

@layer namedLayer {
  li {
    margin-left: 5px;
  }
}
```

**Feuille de style de l'utilisatrice ou de l'utilisateur**

```css
.specific {
  margin-left: 1em;
}
```

**HTML**

```html
<ul>
  <li class="specific">1<sup>er</sup></li>
  <li>2<sup>e</sup></li>
</ul>
```

Dans ce cas, les règles des déclarations pour `li` et `.specific` devraient s'appliquer.

Comme précédemment, on a quatre étapes dans l'algorithme de la cascade, dans cet ordre&nbsp;:

1. Pertinence
2. Origine et importance
3. Spécificité
4. Ordre d'apparence

La règle avec une marge de `1px` s'applique aux médias imprimés. Par manque de _pertinence_ du type de média, on la retire des règles à considérer.

Aucune déclaration n'est marquée avec `!important`, l'ordre porté par la précédence indique que les feuilles de style du site l'emportent sur celles de l'utilisatrice ou de l'utilisateur qui l'emportent sur celles de l'agent utilisateur. Selon _l'origine et l'importance_, la règle à `1em` de la feuille de style de l'utilisatrice ou de l'utilisateur, ainsi que la règle à `10px` qui provient de l'agent utilisateur sont retirées des règles à considérer.

On notera que, bien que la feuille de style de l'utilisatrice ou de l'utilisateur utilise un sélecteur `.specific` pour la règle avec la valeur `1em`, qui a une spécificité supérieure, il s'agit d'une déclaration normale pour cette origine. Ainsi, elle a une précédence inférieure à celles des styles du site et est donc éliminée lors de l'étape de l'algorithme pour l'origine et l'importance, avant même que la spécificité ait un rôle à jouer.

Il y a trois déclarations dans les feuilles de style du site&nbsp;:

```css
li {
  margin-left: 0;
} /* De la première feuille de style du site */
```

```css
@media screen {
  li {
    margin-left: 3px;
  }
}
```

```css
@layer namedLayer {
  li {
    margin-left: 5px;
  }
}
```

La dernière, avec `5px`, fait partie d'une couche de cascade. Les déclarations normales dans les couches ont une précédence inférieure aux styles normaux qui ne sont pas présents dans une couche et qui appartiennent au même type d'origine. Aussi, cette règle est également éliminée à la deuxième étape de l'algorithme, sur _l'origine et l'importance_.

Il reste donc les déclarations avec les valeurs `0` et `3px`, qui ont le même sélecteur, et donc la même _spécificité_.

On regarde donc _l'ordre d'apparence_. C'est la seconde, la dernière parmi les styles du site qui n'appartient pas à une couche, qui l'emporte.

```css
margin-left: 3px;
```

> **Note :** La déclaration définie dans la feuille de style de l'utilisatrice ou de l'utilisateur a beau avoir une spécificité supérieure, elle n'est pas choisie, car l'étape sur _l'origine et l'importance_ de l'algorithme de la cascade est appliqué avant l'algorithme de _la spécificité_. La déclaration définie dans une couche de la cascade, bien qu'elle arrive ensuite dans le code, n'aura pas la précédence non plus, car les couches de la cascade ont une précédence moindre que les styles qui ne sont pas rattachés à une couche. _L'ordre d'apparence_ fonctionne uniquement lorsque l'origine, l'importance et la spécificité sont égales.

## Styles du site&nbsp;: styles en incise HTML, couches, et précédence

[Le tableau de la section précédente](#ordre_de_la_cascade) nous fournit un aperçu sur l'ordre de précédence. On y trouvait deux lignes pour chaque origine, l'une pour les déclarations normales et la deuxième pour les déclarations importantes. En réalité, la précédence est plus nuancée pour chacune de ces origines. En effet, les styles peuvent être contenus au sein de couche. De plus, pour les styles provenant du site, se pose également la question de la place dans l'ordre de la cascade pour les styles déclarés dans le document HTML.

L'ordre de déclaration des couches a son importance pour la détermination de la précédence. Les styles normaux situés dans une couche l'emportent sur les styles déclarés dans les couches antérieures. Les styles normaux déclarés en dehors de toute couche l'emportent sur les styles normaux situés dans des couches, quelle que soit la spécificité.

Dans cet exemple, le site utilise la règle [`@import`](/fr/docs/Web/CSS/@import) pour importer cinq feuilles de styles externes dans un élément [`<style>`](/fr/docs/Web/HTML/Element/style).

```html
<style>
  @import stylesSansCouche.css;
  @import StylesA.css layer(A);
  @import plusDeStylesSansCouche.css;
  @import StylesB.css layer(B);
  @import StylesC.css layer(C);
  p {
    color: red;
    padding: 1em !important;
  }
</style>
```

Et dans le corps du document, on a des styles en incise (<i lang="en">inline styles</i>)&nbsp;:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Coucou</p>
```

Dans le bloc de code CSS précédent, on a trois couches de cascade qui sont créées et nommées dans cet ordre&nbsp;: A, B, et C. Trois feuilles de styles ont directement été importées dans des couches et deux ont été importées sans créer de couches ou sans y être affectées. Dans la liste qui suit, «&nbsp;Tous les styles sans couche&nbsp;» (au quatrième range) inclut les styles de ces deux feuilles de styles et les éventuels blocs CSS supplémentaires qui ne seraient pas rattachés à une couche. On a en plus deux styles en incise, une déclaration normale pour `line-height` et une déclaration importante pour `text-decoration`&nbsp;:

| Ordre (du plus faible au plus élevé) | Style du site               | Importance   |
| ------------------------------------ | --------------------------- | ------------ |
| 1                                    | A - première couche         | normal       |
| 2                                    | B - deuxième couche         | normal       |
| 3                                    | C - dernière couche         | normal       |
| 4                                    | Tous les styles sans couche | normal       |
| 5                                    | Styles en incise            | normal       |
| 6                                    | Animations                  |              |
| 7                                    | Tous les styles sans couche | `!important` |
| 8                                    | C - dernière couche         | `!important` |
| 9                                    | B - deuxième couche         | `!important` |
| 10                                   | A - première couche         | `!important` |
| 11                                   | Styles en incise            | `!important` |
| 12                                   | Transitions                 |              |

Pour tous les types d'origine, les styles normaux (sans importance particulière) contenus dans les couches ont la précédence la plus faible. Dans notre exemple, les styles normaux associés à la première couche déclarée (A) ont une précédence inférieure aux styles normaux déclarés dans la deuxième couche déclarée (B), qui ont une précédence inférieure aux styles normaux de la troisième couche déclarée (C). Tous ces styles présents dans des couches ont une précédence inférieure aux styles normaux qui ne sont pas dans des couches. Dans notre exemple, cela inclut les styles normaux de `stylesSansCouche.css`, `plusDeStylesSansCouche.css`, ainsi que la règle sur la propriété `color` de `p` écrite dans l'élément `<style>`.

Si une des couches A, B, ou C, contient des sélecteurs avec une spécificité supérieure ciblant un élément (comme `:root body p { color: black;}`), cela n'a pas d'importance. Ces déclarations sont éliminées en raison de _l'origine_. Les styles normaux présents dans des couches ont une précédence moindre que les styles normaux en dehors de couches. En revanche, si le sélecteur plus spécifique `:root body p { color: black;}` était trouvé dans `stylesSansCouche.css`, comme _l'origine et l'importance_ auraient la même précédence, c'est l'étape de _spécificité_ qui rentre en jeu et qui applique la déclaration la plus spécifique, colorant le paragraphe en noir.

L'ordre de précédence des couches est inversé pour les styles déclarés avec `!important`. Les styles importants déclarés dans une couche l'emportent sur les styles importants déclarés en dehors d'une couche. Les styles importants de la première couche déclarée (A) l'emportent sur les déclarations importantes de la couche B, qui l'emportent sur ceux de la couche C, qui l'emportent sur les déclarations importantes des styles sans couche.

### Styles en incise (<i lang="en">inline styles</i>)

En ce qui concerne les styles du site, on a les styles en incise, déclarés avec l'attribut `style`. Les styles en incise normaux ont une précédence supérieure aux autres styles normaux du site, quelle que soit la spécificité du sélecteur. Si `line-height: 2;` était déclaré dans un bloc avec le sélecteur `:root body p` dans l'une des cinq feuilles de style importée, la hauteur de ligne serait toujours `1.6`.

Les styles en incise normaux l'emportent sur tous les autres styles normaux du site à moins que la propriété ne soit modifiée par une animation CSS.

Tous les styles importants en incise l'emportent sur les autres styles du site, qu'ils soient importants ou non, en incise ou non, présents dans des couches ou non. Les styles importants l'emportent également sur les propriétés animées, mais pas sur les propriétés en transition. Trois choses peuvent l'emporter sur un style important en incise&nbsp;:

- Un style important d'une feuille de style d'utilisatrice ou d'utilisateur
- Un style important d'une feuille de style de l'agent utilisateur
- La valeur d'une propriété ciblée par une transition

### Couches et importances

L'ordre de précédence pour les types d'origine est inversé pour les styles importants. Les styles importants déclarés en dehors de toute couche de la cascade ont une précédence moindre que ceux qui sont déclarés dans une couche. Les valeurs importantes des couches déclarées plus tôt l'emportent sur les styles importants déclarés dans les couches qui suivent.

Prenons ce fragment CSS comme exemple&nbsp;:

```css
p {
  color: red;
}
@layer B {
  :root p {
    color: blue;
  }
}
```

Bien que la couleur rouge soit déclarée en première et qu'elle ait un sélecteur moins spécifique, comme les styles en dehors des couches l'emportent sur les styles déclarés dans les couches, le paragraphe sera rouge. Si on avait inclus un style en incise pour utiliser une autre couleur, comme `<p style="color: black">`, le paragraphe aurait été noir.

Si on ajoute `!important` à ce fragment de CSS, l'ordre de précédence est inversé&nbsp;:

```css
p {
  color: red !important;
}
@layer B {
  :root p {
    color: blue !important;
  }
}
```

Maintenant, le paragraphe sera bleu. Avec `!important`, ce sont les styles de la première couche qui l'emportent sur toutes les autres et sur les déclarations importantes en dehors des couches. Si le style en incise contenait `!important`, par exemple avec `<p style="color: black !important">`, là encore le paragraphe serait noir. L'importance des styles en incise l'emporte sur tous les autres styles important du site, quelle que soit la spécificité.

> **Note :** `!important` renverse la précédence des couches de la cascade. Pour cette raison, plutôt que d'utiliser `!important` pour surcharger des styles externes, on importera des <i lang="en">frameworks</i>, des styles tiers, et des styles de widgets dans des couches pour réduire leur précédence. `!important` ne devrait être utilisé que très rarement, voire jamais, pour prévenir d'éventuels surchargements depuis la première couche.

Les styles qui portent sur des transitions l'emportent sur tous les styles importants, quel que soit l'endroit ou la façon dont ils sont déclarés.

## Ordre complet de la cascade

Maintenant que nous avons une meilleure compréhension de la précédence selon le type d'origine et les couches de cascade, on peut revoir le tableau présenté [avant](#ordre_de_la_cascade) et le compléter plus précisément pour aboutir à ce tableau&nbsp;:

<table>
<thead>
  <tr>
    <th>Ordre de précédence <br/>(du plus faible au plus élevé)</th>
    <th>Origine</th>
    <th>Importance</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">1</td>
    <td>Agent utilisateur - première couche déclarée</td>
    <td rowspan="3">normal</td>
  </tr>
  <tr>
    <td>Agent utilisateur - dernière couche déclarée</td>
  </tr>
  <tr>
    <td>Agent utilisateur - styles non-rattachés à des couches</td>
  </tr>
  <tr>
    <td rowspan="3">2</td>
    <td>Utilisatrice ou utilisateur - première couche déclarée</td>
    <td rowspan="3">normal</td>
  </tr>
  <tr>
    <td>Utilisatrice ou utilisateur - dernière couche déclarée</td>
  </tr>
  <tr>
    <td>Utilisatrice ou utilisateur - styles non-rattachés à des couches</td>
  </tr>
  <tr>
    <td rowspan="4">3</td>
    <td>Site - première couche déclarée</td>
    <td rowspan="4">normal</td>
  </tr>
  <tr>
    <td>Site - dernière couche déclarée</td>
  </tr>
  <tr>
    <td>Site - styles non-rattachés à des couches</td>
  </tr>
  <tr>
    <td>Style en incise</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Animations</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="4">5</td>
    <td>Site - styles non-rattachés à des couches</td>
    <td rowspan="4"><code>!important</code></td>
  </tr>
  <tr>
    <td>Site - dernière couche déclarée</td>
  </tr>
  <tr>
    <td>Site - première couche déclarée</td>
  </tr>
  <tr>
    <td>Style en incise</td>
  </tr>
  <tr>
    <td rowspan="3">6</td>
    <td>Utilisatrice ou utilisateur - styles non-rattachés à des couches</td>
    <td rowspan="3"><code>!important</td>
  </tr>
  <tr>
    <td>Utilisatrice ou utilisateur - dernière couche déclarée</td>
  </tr>
  <tr>
    <td>Utilisatrice ou utilisateur - première couche déclarée</td>
  </tr>
  <tr>
    <td rowspan="3">7</td>
    <td>Agent utilisateur - styles non-rattachés à des couches</td>
    <td rowspan="3"><code>!important</code></td>
  </tr>
  <tr>
    <td>Agent utilisateur - dernière couche déclarée</td>
  </tr>
  <tr>
    <td>Agent utilisateur - première couche déclarée</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Transitions</td>
    <td></td>
  </tr>
</tbody>
</table>

## Entités CSS qui participent à la cascade

Seules les déclarations de paires de propriété/valeur CSS participent à la cascade. Cela signifie que les [règles @](/fr/docs/Web/CSS/At-rule) contenant des entités autres que des déclarations, comme une règle [`@font-face`](/fr/docs/Web/CSS/@font-face) qui contiendrait _des descripteurs_, ne participent pas à la cascade.

Les propriétés et les descripteurs définis dans les règles @ ne participent pas à la cascade. Ce sont les règles @ dans leur intégralité qui participent à la cascade. Ainsi, dans une règle `@font-face`, on a des noms de police identifiés par des descripteurs [`font-family`](/fr/docs/Web/CSS/@font-face/font-family). Si plusieurs règles `@font-face` sont définies pour le même descripteur, seule la règle `@font-face` la plus appropriée sera considérée, _dans son intégralité_. S'il y a plus d'une règle @ appropriée, ce sont les déclarations `@font-face` entières qui sont comparées en utilisant les étapes 1, 2, et 4 de l'algorithme (il n'y a pas de spécificité en ce qui concerne les règles @).

Bien que les déclarations contenues dans la plupart des règles @ (comme celles de [`@media`](/fr/docs/Web/CSS/@media), [`@document`](/fr/docs/Web/CSS/@document), ou [`@supports`](/fr/docs/Web/CSS/@supports)) participent à la cascade, la règle @ peut rendre un sélecteur complet hors non-pertinent, comme nous l'avons vu avec le style pour l'impression dans [l'exemple simple](#exemple_simple).

Les déclarations contenues dans [`@keyframes`](/fr/docs/Web/CSS/@keyframes) ne participent pas à la cascade. À l'instar de `@font-face`, c'est l'ensemble de la déclaration `@keyframes` qui est sélectionné via l'algorithme de la cascade. [L'ordre de précédence des animations est décrit ensuite](#animations_css_et_la_cascade).

En ce qui concerne les règles [`@import`](/fr/docs/Web/CSS/@import), la règle `@import` ne participe pas elle-même à la cascade, mais l'ensemble des styles importés y participent. Si `@import` défini [une couche nommée ou anonyme](/fr/docs/Web/CSS/@layer), le contenu de la feuille de style importée est placé dans la couche indiquée. Dans les autres cas, tout le contenu importé par `@import` est considéré comme appartenant à la dernière couche déclarée, comme nous l'avons vu précédemment.

Enfin, [`@charset`](/fr/docs/Web/CSS/@charset) est géré par d'autres algorithmes et ne suit pas l'algorithme de la cascade.

## Animations CSS et cascade

[Les animations CSS](/fr/docs/Web/CSS/CSS_Animations), qui utilisent des règles [`@keyframes`](/fr/docs/Web/CSS/@keyframes), définissent des animations entre différents états. Ces images clés (<i lang="en">keyframes</i>) ne participent pas à la cascade, ce qui signifie qu'à tout moment, le moteur CSS ne prend les valeurs qu'à partir d'une seule règle [`@keyframes`](/fr/docs/Web/CSS/@keyframes), et ne mélange jamais plusieurs règles.

Si plusieurs images clés d'une animation sont définies avec le même nom, c'est la dernière règle `@keyframes` pour le type d'origine et la couche avec la précédence la plus élevée qui est considérée. Seule une définition `@keyframes` est utilisée, même si elle anime différentes propriétés. Les règles `@keyframes` partageant un même nom ne sont jamais mélangées.

```css
p {
  animation: infinite 5s alternate nomRepete;
}
@keyframes nomRepete {
  from {
    font-size: 1rem;
  }
  to {
    font-size: 3rem;
  }
}

@layer A {
  @keyframes nomRepete {
    from {
      background-color: yellow;
    }
    to {
      background-color: orange;
    }
  }
}
@layer B {
  @keyframes nomRepete {
    from {
      color: white;
    }
    to {
      color: black;
    }
  }
}
```

Dans cet exemple, on a trois déclarations d'animation intitulées `nomRepete`. Lorsque `animation: infinite 5s alternate nomRepete` est appliquée au paragraphe, seule une animation s'applique&nbsp;: l'animation définie dans la règle en dehors des couches prend la précédence sur les règles ajoutées aux couches A et B d'après l'ordre de précédence basé sur l'origine et les couches de la cascade. Dans cet exemple, seule la taille de la police de l'élément sera animé.

> **Note :** Il n'existe pas d'animations importantes, car les déclarations des propriétés d'un bloc [`@keyframes`](/fr/docs/Web/CSS/@keyframes) qui contiennent `!important` dans leur valeur sont ignorées.

## Réinitialiser les styles

Après que le contenu a fini de modifier les styles, on peut être dans une situation où il faut les restaurer à un état connu. Cela peut se produire avec des animations, des modifications de thème et ainsi de suite. La propriété CSS [`all`](/fr/docs/Web/CSS/all) vous permet de remettre (presque) tout ce qui concerne CSS à un état connu.

`all` vous permet de restaurer immédiatement toutes les propriétés&nbsp;:

- À leur état initial (par défaut)
- À l'état hérité du précédent niveau de la cascade
- À l'état d'une origine donnée (la feuille de style du navigateur, du site ou de l'utilisatrice ou de l'utilisateur)
- Voire de réinitialiser complètement les valeurs des propriétés.

## Spécifications

{{Specifications}}

## Voir aussi

- [Une introduction simple à la cascade CSS](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- Concepts clés de CSS&nbsp;:
  - [Syntaxe CSS](/fr/docs/Web/CSS/Syntax)
  - [Spécificité](/fr/docs/Web/CSS/Specificity)
  - [Héritage](/fr/docs/Web/CSS/inheritance)
  - [Modèle de boîte](/fr/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [Modes d'affichage](/fr/docs/Web/CSS/Layout_mode)
  - [Modèles de formatage visuel](/fr/docs/Web/CSS/Visual_formatting_model)
  - [Fusion des marges](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Valeurs
    - [Initiales](/fr/docs/Web/CSS/initial_value)
    - [Calculées](/fr/docs/Web/CSS/computed_value)
    - [Utilisées](/fr/docs/Web/CSS/used_value)
    - [Effectives](/fr/docs/Web/CSS/actual_value)
- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Value_definition_syntax)
- [Propriétés raccourcies](/fr/docs/Web/CSS/Shorthand_properties)
- [Éléments remplacés](/fr/docs/Web/CSS/Replaced_element)
