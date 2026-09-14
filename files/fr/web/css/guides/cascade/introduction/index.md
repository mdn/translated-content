---
title: Introduction à la cascade CSS
short-title: Introduction
slug: Web/CSS/Guides/Cascade/Introduction
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La **cascade** est un algorithme qui définit comment les agents utilisateur combinent les valeurs des propriétés provenant de différentes sources. La cascade définit l'origine et la couche qui prend le dessus lorsque des déclarations dans plus d'une [origine](#types_dorigine), [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) ou bloc {{CSSxRef("@scope")}} définissent une valeur pour une propriété sur un élément.

La cascade est au cœur de CSS, comme le souligne le nom&nbsp;: <i lang="en">**Cascading** Style Sheets</i>. Lorsqu'un [sélecteur](/fr/docs/Web/CSS/Guides/Selectors) correspond à un élément, la valeur de la propriété provenant de l'origine ayant la plus haute priorité est appliquée, même si le sélecteur d'une origine ou d'une couche de moindre priorité a une [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity) plus grande.

Cet article explique ce qu'est la cascade et l'ordre dans lequel les [déclarations](/fr/docs/Web/API/CSSStyleDeclaration) {{Glossary("CSS")}} se propagent, en couvrant les couches de cascade et les types d'origine. Comprendre la priorité des origines est essentiel pour comprendre la cascade.

## Types d'origine

L'algorithme de la cascade CSS consiste à sélectionner des déclarations CSS afin de déterminer les valeurs correctes des propriétés CSS. Les déclarations CSS proviennent de différents types d'origine&nbsp;: **[feuilles de style de l'agent utilisateur](#feuilles_de_style_de_lagent_utilisateur)**, **[feuilles de style du site](#feuilles_de_style_du_site)** et **[feuilles de style de l'utilisatrice ou l'utilisateur](#feuilles_de_style_de_lutilisatrice_ou_lutilisateur)**.

Bien que les feuilles de style proviennent de ces différentes origines et que chacune d'entre elles puisse avoir différentes [couches](/fr/docs/Web/CSS/Reference/At-rules/@layer), leurs portées se chevauchent. Pour que l'ensemble fonctionne, l'algorithme de la cascade définit comment elles interagissent. Avant d'étudier ces interactions, définissons quelques termes.

### Feuilles de style de l'agent utilisateur

Les agents utilisateur, ou navigateurs, possèdent des feuilles de style de base qui fournissent des styles par défaut pour tout document. Ces feuilles de styles sont appelées **feuilles de style de l'agent utilisateur** (<i lang="en">user-agent stylesheets</i> en anglais). La plupart des navigateurs utilisent des feuilles de style réelles pour cela et d'autres les simulent dans leur code. Le résultat produit est le même.

Certains navigateurs permettent aux utilisateur·ice·s de modifier les feuilles de style de l'agent utilisateur. Il s'agit toutefois de quelque chose de rare, et qui ne peut pas être contrôlé.

Bien que certaines contraintes soient imposées aux navigateurs sur leurs feuilles de style par la spécification HTML, ils ont une grande latitude. Cela signifie qu'il existe certaines différences entre les navigateurs. Pour simplifier le développement web, certaines équipes de développement peuvent utiliser une feuille de style de réinitialisation telle que [normalize.css <sup>(angl.)</sup>](https://github.com/necolas/normalize.css), qui définit les valeurs des propriétés communes avec un état connu, avant de procéder à des modifications spécifiques.

À moins que la feuille de style de l'agent utilisateur inclut [`!important`](/fr/docs/Web/CSS/Guides/Cascade/Specificity#lexception_!important) à côté d'une propriété pour la rendre importante, les styles déclarés par le site, y compris les feuilles de style de réinitialisation, l'emportent sur les styles de l'agent utilisateur, quelle que soit la spécificité du sélecteur associé.

### Feuilles de style du site

Les **feuilles de style du site** (<i lang="en">author stylesheets</i> en anglais) sont les feuilles de style les plus fréquemment rencontrées. Il s'agit des styles écrits par les équipes de développement web. Ces styles peuvent réinitialiser les styles de l'agent utilisateur, comme indiqué avant, et définir les styles pour la conception d'une page ou application web donnée. C'est la personne ou l'équipe qui développe le site web qui définit les styles du document en utilisant une ou plusieurs feuilles de style importées ou liées, des éléments HTML {{HTMLElement('style')}} ou encore des styles en incise définis avec l'attribut [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style). Ce sont ces styles qui définissent l'aspect du site web, son thème.

### Feuilles de style de l'utilisatrice ou l'utilisateur

Dans la plupart des navigateurs, l'utilisateur·ice du site web peut choisir de surcharger les styles en utilisant une feuille de style personnalisée (<i lang="en">user stylesheet</i> en anglais), conçue pour adapter l'expérience de navigation selon ses souhaits. Selon l'agent utilisateur, [ces feuilles de styles peuvent être configurées <sup>(angl.)</sup>](https://www.thoughtco.com/user-style-sheet-3469931) directement ou ajoutées grâce à des extensions du navigateur.

### Couches de la cascade

L'ordre de la cascade est basé sur le type d'origine. La cascade pour chaque type d'origine dépend de l'ordre de déclaration [des couches de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) pour chaque type. Quelle que soit l'origine (agent utilisateur, site, utilisateur·ice), les styles peuvent être déclarés à l'intérieur ou en dehors de couches nommées ou anonymes. Lorsqu'ils sont déclarés avec [`layer`, `layer()`](/fr/docs/Web/CSS/Reference/At-rules/@import) ou {{CSSxRef("@layer")}}, les styles sont placés dans la couche nommée correspondante, ou dans une couche anonyme si aucun nom n'est fourni. Les styles déclarés en dehors d'une couche sont considérés comme faisant partie d'une couche anonyme déclarée en dernier.

Voyons l'interaction de la cascade entre les différents types d'origine avant de voir les couches de chaque type d'origine.

## Ordre de la cascade

L'algorithme de la cascade détermine quelle valeur s'applique pour chaque propriété de chaque élément du document. Les étapes suivantes s'appliquent à l'algorithme de la cascade&nbsp;:

1. **Pertinence**&nbsp;: Pour commencer, seules les règles qui s'appliquent à un élément sont conservées. Cela signifie les règles dont le sélecteur correspond à l'élément et qui font partie d'une règle @ `media` appropriée.
2. **Origine et importance**&nbsp;: Ensuite, ces règles sont triées selon leur importance, c'est-à-dire si elles sont suivies ou non par `!important`, et selon leur origine. En ignorant les couches pour le moment, on obtient l'ordre suivant pour la cascade&nbsp;:

   | Ordre (du plus faible au plus élevé) | Origine                        | Importance   |
   | ------------------------------------ | ------------------------------ | ------------ |
   | 1                                    | Agent utilisateur (navigateur) | normal       |
   | 2                                    | Utilisateur·ice                | normal       |
   | 3                                    | Site (développeur·euse)        | normal       |
   | 4                                    | Images clés d'animations CSS   |              |
   | 5                                    | Site (développeur·euse)        | `!important` |
   | 6                                    | Utilisateur·ice                | `!important` |
   | 7                                    | Agent utilisateur (navigateur) | `!important` |
   | 8                                    | Transitions CSS                |              |

3. **Spécificité**&nbsp;: En cas d'égalité pour une même origine, [la spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity) d'une règle est considérée pour déterminer laquelle choisir. La spécificité des sélecteurs est comparée, et c'est la déclaration avec la plus grande spécificité qui l'emporte.
4. **Proximité de portée**&nbsp;: Lorsque deux sélecteurs dans la couche d'origine avec priorité ont la même spécificité, la valeur de la propriété dans les règles avec portée ayant le plus petit nombre de sauts vers la racine de la portée dans la hiérarchie DOM l'emporte. Voir [Comment les conflits `@scope` sont résolus](/fr/docs/Web/CSS/Reference/At-rules/@scope#comment_les_conflits_scope_sont_résolus) pour plus de détails et un exemple.
5. **Ordre d'apparence**&nbsp;: Si plusieurs valeurs pour une même propriété sont décrites dans des règles avec des sélecteurs de même spécificité, c'est la dernière déclaration, dans l'ordre des styles, qui est appliquée.

La cascade est dans l'ordre croissant, ce qui signifie&nbsp;:

- Les animations ont la priorité sur les valeurs normales, qu'elles soient déclarées par l'utilisateur·ice, le site ou l'agent utilisateur.
- Les valeurs importantes ont la priorité sur les animations, qu'elles soient déclarées par l'utilisateur·ice, le site ou l'agent utilisateur.
- Les transitions ont la priorité sur les valeurs importantes.

> [!NOTE]
> **Transitions et animations**
>
> Les valeurs de propriétés définies par une animation avec {{CSSxRef("@keyframes")}} sont plus importantes que celles de styles normaux (c'est-à-dire sans [`!important`](/fr/docs/Web/CSS/Guides/Cascade/Specificity#lexception_!important)).
>
> Les valeurs des propriétés définies dans une transition ({{CSSxRef("transition")}}) l'emportent sur toutes les autres valeurs, y compris celles marquées avec `!important`.

L'algorithme de la cascade est appliqué _avant_ l'algorithme de la spécificité. Cela signifie que si `:root p { color: red;}` est déclaré dans une feuille de style de l'utilisateur·ice (ligne 2 du tableau) et si une règle moins spécifique, `p {color: blue;}`, est présente dans la feuille de style du site (ligne 3 du tableau), les paragraphes sont bleus.

## Exemple simple

Avant de voir le rôle des couches dans la cascade, voyons un exemple impliquant différentes sources de CSS parmi ces origines et déroulons l'algorithme de la cascade étape par étape&nbsp;:

Pour cet exemple, nous avons une feuille de style provenant de l'agent utilisateur, deux pour le site, une feuille de style de l'utilisateur·ice, et des styles en incise dans le HTML&nbsp;:

**Feuille de style de l'agent utilisateur:**

```css
li {
  margin-left: 10px;
}
```

**Feuille de style du site 1:**

```css
li {
  margin-left: 0;
} /* Une règle de réinitialisation */
```

**Feuille de style du site 2:**

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

**Feuille de style de l'utilisatrice ou de l'utilisateur:**

```css
.specifique {
  margin-left: 1em;
}
```

**HTML:**

```html
<ul>
  <li class="specifique">1<sup>er</sup></li>
  <li>2<sup>e</sup></li>
</ul>
```

Dans ce cas, les règles des déclarations pour `li` et `.specifique` devraient s'appliquer.

Comme précédemment, on a quatre étapes dans l'algorithme de la cascade, dans cet ordre&nbsp;:

1. Pertinence
2. Origine et importance
3. Spécificité
4. Proximité de portée
5. Ordre d'apparence

La règle avec une marge de `1px` s'applique aux médias imprimés. Par manque de _pertinence_ du type de média, on la retire des règles à considérer.

Aucune déclaration n'est marquée avec `!important`, l'ordre porté par la précédence indique que les feuilles de style du site l'emportent sur celles de l'utilisateur·ice qui l'emportent sur celles de l'agent utilisateur. Selon _l'origine et l'importance_, la règle à `1em` de la feuille de style de l'utilisateur·ice, ainsi que la règle à `10px` qui provient de l'agent utilisateur sont retirées des règles à considérer.

Notez que, bien que la feuille de style de l'utilisateur·ice utilise un sélecteur `.specifique` pour la règle avec la valeur `1em`, qui a une spécificité supérieure, il s'agit d'une déclaration normale pour cette origine. Ainsi, elle a une précédence inférieure à celles des styles du site et est donc éliminée lors de l'étape de l'algorithme pour l'origine et l'importance, avant même que la spécificité ait un rôle à jouer.

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

Il reste donc les déclarations avec les valeurs `0` et `3px`, qui ont le même sélecteur, et donc la même _spécificité_. Aucun des deux ne se trouve dans un bloc `@scope`, de sorte que la proximité de portée n'entre pas non plus en ligne de compte dans cet exemple.

On regarde donc _l'ordre d'apparence_. C'est la seconde, la dernière parmi les styles du site qui n'appartient pas à une couche, qui l'emporte.

```css
margin-left: 3px;
```

> [!NOTE]
> La déclaration définie dans la feuille de style de l'utilisateur·ice a beau avoir une spécificité supérieure, elle n'est pas choisie, car l'étape sur _l'origine et l'importance_ de l'algorithme de la cascade est appliqué avant l'algorithme de _la spécificité_. La déclaration définie dans une couche de la cascade, bien qu'elle arrive ensuite dans le code, n'a pas la précédence non plus, car les couches de la cascade ont une précédence moindre que les styles qui ne sont pas rattachés à une couche. _L'ordre d'apparence_ fonctionne uniquement lorsque l'origine, l'importance et la spécificité sont égales.

## Styles du site : styles en incise HTML, couches, et précédence

[Le tableau de la section précédente](#ordre_de_la_cascade) nous fournit un aperçu sur l'ordre de précédence. On y trouvait deux lignes pour chaque origine, l'une pour les déclarations normales et la deuxième pour les déclarations importantes. En réalité, la précédence est plus nuancée pour chacune de ces origines. En effet, les styles peuvent être contenus au sein de couche. De plus, pour les styles provenant du site, se pose également la question de la place dans l'ordre de la cascade pour les styles déclarés dans le document HTML.

L'ordre de déclaration des couches a son importance pour la détermination de la précédence. Les styles normaux situés dans une couche l'emportent sur les styles déclarés dans les couches antérieures. Les styles normaux déclarés en dehors de toute couche l'emportent sur les styles normaux situés dans des couches, quelle que soit la spécificité.

Dans cet exemple, le site utilise la règle {{CSSxRef("@import")}} pour importer cinq feuilles de styles externes dans un élément HTML {{HTMLElement("style")}}.

```html
<style>
  @import "stylesSansCouche.css";
  @import "StylesA.css" layer(A);
  @import "plusDeStylesSansCouche.css";
  @import "StylesB.css" layer(B);
  @import "StylesC.css" layer(C);
  p {
    color: red;
    padding: 1em !important;
  }
</style>
```

et dans le corps du document, on a des styles en incise (<i lang="en">inline styles</i>)&nbsp;:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Coucou</p>
```

Dans le bloc de code CSS précédent, on a trois couches de cascade qui sont créées et nommées dans cet ordre&nbsp;: «&nbsp;A&nbsp;», «&nbsp;B&nbsp;» et «&nbsp;C&nbsp;». Trois feuilles de styles ont directement été importées dans des couches et deux ont été importées sans créer de couches ou sans y être affectées. Dans la liste qui suit, «&nbsp;Tous les styles sans couche&nbsp;» (au quatrième range) inclut les styles de ces deux feuilles de styles et les éventuels blocs CSS supplémentaires qui ne seraient pas rattachés à une couche. On a en plus deux styles en incise, une déclaration normale pour `line-height` et une déclaration importante pour `text-decoration`&nbsp;:

| Ordre (du plus faible au plus élevé) | Style du site               | Importance   |
| ------------------------------------ | --------------------------- | ------------ |
| 1                                    | A - première couche         | normal       |
| 2                                    | B - deuxième couche         | normal       |
| 3                                    | C - dernière couche         | normal       |
| 4                                    | Tous les styles sans couche | normal       |
| 5                                    | `style` en incise           | normal       |
| 6                                    | Animations                  |              |
| 7                                    | Tous les styles sans couche | `!important` |
| 8                                    | C - dernière couche         | `!important` |
| 9                                    | B - deuxième couche         | `!important` |
| 10                                   | A - première couche         | `!important` |
| 11                                   | `style` en incise           | `!important` |
| 12                                   | Transitions                 |              |

Pour tous les types d'origine, les styles normaux (sans importance particulière) contenus dans les couches ont la précédence la plus faible. Dans notre exemple, les styles normaux associés à la première couche déclarée (A) ont une précédence inférieure aux styles normaux déclarés dans la deuxième couche déclarée (B), qui ont une précédence inférieure aux styles normaux de la troisième couche déclarée (C). Tous ces styles présents dans des couches ont une précédence inférieure aux styles normaux qui ne sont pas dans des couches. Dans notre exemple, cela inclut les styles normaux de `stylesSansCouche.css`, `plusDeStylesSansCouche.css`, ainsi que la règle sur la propriété `color` de `p` écrite dans l'élément `<style>`.

Si une des couches A, B, ou C, contient des sélecteurs avec une spécificité supérieure ciblant un élément (comme `:root body p { color: black;}`), cela n'a pas d'importance. Ces déclarations sont éliminées en raison de _l'origine_. Les styles normaux présents dans des couches ont une précédence moindre que les styles normaux en dehors de couches. En revanche, si le sélecteur plus spécifique `:root body p { color: black;}` était trouvé dans `stylesSansCouche.css`, comme _l'origine et l'importance_ auraient la même précédence, c'est l'étape de _spécificité_ qui rentre en jeu et qui applique la déclaration la plus spécifique, colorant le paragraphe en noir.

L'ordre de précédence des couches est inversé pour les styles déclarés avec `!important`. Les styles importants déclarés dans une couche l'emportent sur les styles importants déclarés en dehors d'une couche. Les styles importants de la première couche déclarée (A) l'emportent sur les déclarations importantes de la couche B, qui l'emportent sur ceux de la couche C, qui l'emportent sur les déclarations importantes des styles sans couche.

### Styles en incise

En ce qui concerne les styles du site, on a les styles en incise, déclarés avec l'attribut `style`. Les styles en incise normaux ont une précédence supérieure aux autres styles normaux du site, quelle que soit la spécificité du sélecteur. Si `line-height: 2;` était déclaré dans un bloc avec le sélecteur `:root body p` dans l'une des cinq feuilles de style importée, la hauteur de ligne est toujours `1.6`.

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

Bien que la couleur rouge soit déclarée en première et qu'elle ait un sélecteur moins spécifique, comme les styles en dehors des couches l'emportent sur les styles déclarés dans les couches, le paragraphe est rouge. Si on avait inclus un style en incise pour utiliser une autre couleur, comme `<p style="color: black">`, le paragraphe aurait été noir.

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

Maintenant, le paragraphe est bleu. Avec `!important`, ce sont les styles de la première couche qui l'emportent sur toutes les autres et sur les déclarations importantes en dehors des couches. Si le style en incise contenait `!important`, par exemple avec `<p style="color: black !important">`, là encore le paragraphe aurait été noir. L'importance des styles en incise l'emporte sur tous les autres styles important du site, quelle que soit la spécificité.

> [!NOTE]
> `!important` renverse la précédence des couches de la cascade. Pour cette raison, plutôt que d'utiliser `!important` pour surcharger des styles externes, on importe des <i lang="en">frameworks</i>, des styles tiers, et des styles de widgets dans des couches pour réduire leur précédence. `!important` ne doit être utilisé que très rarement, voire jamais, pour prévenir d'éventuels surchargements depuis la première couche.

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
    <td>Utilisateur·ice - première couche déclarée</td>
    <td rowspan="3">normal</td>
  </tr>
  <tr>
    <td>Utilisateur·ice - dernière couche déclarée</td>
  </tr>
  <tr>
    <td>Utilisateur·ice - styles non-rattachés à des couches</td>
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
    <td>Utilisateur·ice - styles non-rattachés à des couches</td>
    <td rowspan="3"><code>!important</td>
  </tr>
  <tr>
    <td>Utilisateur·ice - dernière couche déclarée</td>
  </tr>
  <tr>
    <td>Utilisateur·ice - première couche déclarée</td>
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

Seules les déclarations de paires propriété/valeur CSS participent à la cascade. Les descripteurs des règles CSS ne participent pas à la cascade et les attributs de présentation HTML ne font pas partie de la cascade.

### Règles @

Les [règles @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) CSS contenant des entités autres que des déclarations, telles qu'une règle {{CSSxRef("@font-face")}} contenant des _descripteurs_, ne participent pas à la cascade.

Dans la plupart des cas, les propriétés et descripteurs définis dans les règles @ ne participent pas à la cascade. Seules les règles @ dans leur ensemble participent à la cascade. Par exemple, dans une règle `@font-face`, les noms de polices sont identifiés par des descripteurs {{CSSxRef("@font-face/font-family", "font-family")}}. Si plusieurs règles `@font-face` avec le même descripteur sont définies, seule la règle `@font-face` la plus appropriée, dans son ensemble, est prise en compte. Si plusieurs sont identiquement appropriées, l'ensemble des déclarations `@font-face` est comparé en utilisant les étapes 1, 2 et 4 de l'algorithme (il n'y a pas de spécificité pour les règles @).

Bien que les déclarations contenues dans la plupart des règles @ — telles que celles de {{CSSxRef("@media")}}, {{CSSxRef("@document")}} ou {{CSSxRef("@supports")}} — participent à la cascade, la règle @ peut rendre un sélecteur entier non pertinent, comme nous l'avons vu avec le style d'impression dans [l'exemple simple](#exemple_simple).

Les déclarations dans {{CSSxRef("@keyframes")}} ne participent pas dans la cascade. Comme pour `@font-face`, seule la règle `@keyframes` dans son ensemble est sélectionnée avec l'algorithme de cascade. [L'ordre de priorité des animations est décrit ci-dessous](#css_animations_and_the_cascade).

En ce qui concerne {{CSSxRef("@import")}}, le `@import` ne participe pas lui-même à la cascade, mais tous les styles importés y participent. Si le `@import` définit une [couche nommée ou anonyme](/fr/docs/Web/CSS/Reference/At-rules/@layer), le contenu de la feuille de style importée est placé dans la couche définie. Tous les autres CSS importés avec `@import` sont traités comme la dernière couche déclarée. Cela a été discuté ci-dessus.

Enfin, {{CSSxRef("@charset")}} obéit à des algorithmes spécifiques et n'est pas affecté par l'algorithme de cascade.

### Attributs de présentation

Les attributs de présentation sont des attributs dans le document source qui peuvent affecter le style. Par exemple, lorsqu'ils sont inclus, l'attribut `align` obsolète définit l'alignement sur plusieurs éléments HTML et l'attribut `fill` définit la couleur utilisée pour peindre les formes et le texte SVG et définit l'état final des animations SVG. Bien qu'ils soient des styles de site, les attributs de présentation ne participent pas à la cascade.

Si l'attribut de présentation HTML est pris en charge par l'agent utilisateur, les attributs de présentation valides inclus dans HTML et SVG, tels que les attributs [`align`](/fr/docs/Web/HTML/Reference/Elements/img#align) ou [`fill`](/fr/docs/Web/SVG/Reference/Attribute/fill), sont traduits en règles CSS correspondantes (tous les attributs de présentation SVG sont pris en charge en tant que propriétés CSS) et insérés dans la feuille de style du site avant tout autre style avec une spécificité égale à `0`.

Les attributs de présentation ne peuvent pas être déclarés `!important`.

## Animations CSS et cascade

[Les animations CSS](/fr/docs/Web/CSS/Guides/Animations), utilisant {{CSSxRef("@keyframes")}} at-rules, définissent des animations entre différents états. `@keyframes` ne participent pas à la cascade, ce qui signifie qu'à tout moment, CSS prend les valeurs à partir d'un seul ensemble de `@keyframes` et ne mélange jamais plusieurs ensembles. Si plusieurs ensembles de `@keyframes` sont définis avec le même nom d'animation, le dernier ensemble défini dans l'origine et la couche avec la plus grande priorité est utilisé. Les autres `@keyframes` sont ignorés, même s'ils animent différentes propriétés.

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

Dans cet exemple, on a trois déclarations d'animation intitulées `nomRepete`. Lorsque `animation: infinite 5s alternate nomRepete` est appliquée au paragraphe, seule une animation s'applique&nbsp;: l'animation définie dans la règle en dehors des couches prend la précédence sur les règles ajoutées aux couches A et B d'après l'ordre de précédence basé sur l'origine et les couches de la cascade. Dans cet exemple, seule la taille de la police de l'élément est animé.

> [!NOTE]
> Il n'existe pas d'animations importantes, car les déclarations des propriétés d'un bloc {{CSSxRef("@keyframes")}} qui contiennent `!important` dans leur valeur sont ignorées.

## Réinitialiser les styles

Après que le contenu a fini de modifier les styles, il peut se retrouver dans une situation où il doit les restaurer à un état connu. Cela peut se produire dans le cas d'animations, de changements de thème, et ainsi de suite. La propriété CSS {{CSSxRef("all")}} vous permet de remettre (presque) tout ce qui concerne CSS à un état connu.

`all` vous permet de restaurer immédiatement toutes les propriétés à l'un de leurs états initiaux (par défaut), à l'état hérité du niveau précédent de la cascade, à une origine spécifique (la feuille de style de l'agent utilisateur, la feuille de style du site ou la feuille de style de l'utilisateur·ice), ou même de réinitialiser complètement les valeurs des propriétés.

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [de cascade et héritage CSS](/fr/docs/Web/CSS/Guides/Cascade)
- [Apprendre&nbsp;: Gérer les conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Apprendre&nbsp;: Couches de cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
- [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
- [Héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Règles @](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
- Valeurs&nbsp;: [initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale), [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée), [utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) et [réelle](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
