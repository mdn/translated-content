---
title: Traitement des valeurs des propriétés CSS
slug: Web/CSS/Guides/Cascade/Property_value_processing
original_slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 3157f78e4c4131d85ff82a4d4ab7d67e91c32b69
---

Pour chaque élément de l'arbre du document, le navigateur assigne une valeur à chaque propriété CSS qui s'applique à cet élément. La valeur rendue de chaque propriété CSS pour un élément ou une boîte donnée résulte d'un calcul fondé sur les définitions des feuilles de style, l'héritage, la [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction), les dépendances, la conversion d'unités et l'environnement d'affichage. Ce guide donne un aperçu des étapes de traitement appliquées pour déterminer comment chaque valeur CSS est finalement rendue, en explorant des concepts clés tels que valeurs spécifiées, calculées, utilisées et réelles.

## Valeurs des propriétés

Chaque style appliqué à un élément ou pseudo-élément repose sur une seule déclaration de propriété CSS. Chaque propriété CSS ne peut avoir qu'une seule valeur. La valeur appliquée est déterminée par les [valeurs en cascade](#valeur_en_cascade) de l'ensemble des déclarations de cette propriété qui s'appliquent à l'élément ou au pseudo-élément, la valeur effectivement appliquée provenant de la déclaration de propriété qui a le rang le plus élevé dans [l'ordre de tri de la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction#ordre_de_la_cascade) selon l'[algorithme de la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction).

Lorsqu'il existe plusieurs [valeurs déclarées](#valeur_déclarée) — plusieurs déclarations fournissant la même ou des valeurs de propriété différentes pour le même élément — chaque valeur de propriété doit néanmoins provenir d'une seule paire nom-valeur, car une seule valeur est appliquée pour chaque propriété, même si cette valeur est une liste séparée par des virgules.

Pour déterminer quelle [valeur déclarée](#valeur_déclarée) est appliquée, l'agent utilisateur rassemble et traite tous les styles provenant de différentes sources, telles que les styles en ligne et les feuilles de style internes et externes.

La [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction) détermine quelle valeur doit être appliquée lorsque plusieurs styles en conflit ciblent le même élément. L'[algorithme de la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction#ordre_de_la_cascade) définit comment les agents utilisateurs combinent les valeurs de propriété provenant de différentes origines, portées et/ou [couches](/fr/docs/Web/CSS/Guides/Cascade/Introduction#couches_de_la_cascade). Lorsqu'un sélecteur correspond à un élément, la [valeur déclarée](#valeur_déclarée) de la propriété provenant de l'[origine](/fr/docs/Web/CSS/Guides/Cascade/Introduction#types_dorigine) ayant la plus haute priorité est appliquée, même si un sélecteur d'une [origine](/fr/docs/Web/CSS/Guides/Cascade/Introduction#types_dorigine) ou d'une [couche](/fr/docs/Web/CSS/Guides/Cascade/Introduction#couches_de_la_cascade) de moindre priorité possède une plus grande {{cssxref("specificity")}}.

Certaine·s propriétés héritent des valeurs de leurs éléments parents sauf si elles sont explicitement remplacées. L'[héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance) peut intervenir lorsqu'aucune information de style n'existe pour une propriété spécifique sur un élément. Si la propriété est héritée, la valeur est définie sur la [valeur calculée](#valeur_calculée) de l'élément parent. Si la propriété n'est pas héritée, sa valeur est définie sur la [valeur initiale](#valeur_initiale) pour cet élément.

Après application pas à pas des règles de la [cascade](#cascade) et du processus de valeur par défaut, le navigateur s'assure que la présentation visuelle correspond au CSS traité.

## Vue d'ensemble du traitement

Avant d'examiner les différentes étapes du traitement d'une valeur, il est important de comprendre les trois phases principales qui interviennent&nbsp;: le [filtrage](#filtrage), la [cascade](#cascade) et l'[application des valeurs par défaut](#application_des_valeurs_par_défaut).

### Filtrage

Le **filtrage** consiste à identifier toutes les déclarations qui s'appliquent à chaque élément. Une déclaration ne s'applique à un élément que si&nbsp;:

- La déclaration appartient à une feuille de style qui s'applique actuellement au document
- Toutes les [règles conditionnelles](/fr/docs/Web/CSS/Guides/Conditional_rules) (comme {{cssxref("@media")}} ou {{cssxref("@supports")}}) contenant la déclaration sont actuellement vraies
- La déclaration appartient à une règle de style dont le sélecteur correspond à l'élément
- La déclaration est syntaxiquement valide&nbsp;: le nom de propriété est reconnu par le navigateur et la valeur correspond à la syntaxe attendue pour cette propriété

Seules les déclarations valides deviennent des valeurs déclarées. Les déclarations comportant des noms de propriétés invalides ou des valeurs invalides sont retirées lors du filtrage conformément aux [règles de gestion des erreurs CSS](/fr/docs/Web/CSS/CSS_syntax/Error_handling).

Dans cet exemple, seules les déclarations {{cssxref("font-size")}} et {{cssxref("font-weight")}} sont traitées. Le [parseur CSS filtre les erreurs](/fr/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors), en ignorant ou en «&nbsp;filtrant&nbsp;» la déclaration avec le nom de propriété invalide&nbsp;:

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Une fois le filtrage terminé, chaque élément possède zéro ou plusieurs [valeurs déclarées](#valeur_déclarée) pour chaque propriété CSS. Ces valeurs déclarées constituent le point de départ de l'étape de traitement suivante&nbsp;: la [cascade](#cascade).

### Cascade

La [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction) résout les conflits lorsqu'un même élément se voit appliquer plusieurs déclarations pour une même propriété. La cascade trie les déclarations à l'aide de [l'ordre de tri de la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction#ordre_de_la_cascade).

Par exemple, les deux déclarations de {{cssxref("font-size")}} correspondent à `<p class="large">CSS is fun!</p>`, mais la seconde déclaration est appliquée parce qu'elle a une {{cssxref("specificity")}} plus élevée. Les deux déclarations proviennent de l'origine auteur·ice, mais le second sélecteur a une spécificité `0-1-1` alors que le premier a `0-0-1`&nbsp;:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Après la cascade, le navigateur détermine la [**valeur en cascade**](#valeur_en_cascade) pour chaque propriété sur chaque élément. Cette valeur est utilisée lors de l'étape suivante&nbsp;: l'[application des valeurs par défaut](#application_des_valeurs_par_défaut).

### Application des valeurs par défaut

L'**application des valeurs par défaut** garantit que chaque propriété de chaque élément possède une valeur. Cela implique d'appliquer les valeurs par défaut lorsque aucune déclaration CSS ne définit explicitement la valeur de la propriété.
Cela comprend&nbsp;:

- Définir les **valeurs héritées** pour les [propriétés héritées](/fr/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties)
- Définir les **valeurs initiales** pour les [propriétés non héritées](/fr/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties)

À la suite de cette étape, chaque propriété dispose d'une [valeur définie](#valeur_définie).

Notez que les mots-clés explicites de valeur par défaut ([`initial`](/fr/docs/Web/CSS/Reference/Values/initial), [`inherit`](/fr/docs/Web/CSS/Reference/Values/inherit), [`unset`](/fr/docs/Web/CSS/Reference/Values/unset), [`revert`](/fr/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/fr/docs/Web/CSS/revert-layer)) sont également résolus vers leurs valeurs correspondantes pour déterminer la [valeur définie](#valeur_définie).

## Étapes de traitement

Tous les éléments faisant partie de l'arbre aplati du document possèdent des valeurs [déclarées](#valeur_déclarée), [en cascade](#valeur_en_cascade), [définies](#valeur_définie), [calculées](#valeur_calculée), [utilisées](#valeur_utilisée) et [réelles](#valeur_réelle). Pour une propriété donnée, ces valeurs peuvent être identiques ou différentes. Par exemple, si votre base de code contient `p { font-size: 1.25em; }` et que votre HTML inclut `<p class="large">CSS is fun!</p>`, quelle taille aura le paragraphe ? La valeur de {{cssxref("font-size")}} traverse plusieurs étapes pour passer de la valeur spécifiée en `em` à la valeur rendue en `px`.

Les étapes de traitement des valeurs sont&nbsp;:

- [Valeur déclarée](#valeur_déclarée)
- [Valeur en cascade](#valeur_en_cascade)
- [Valeur définie](#valeur_définie)
- [Valeur calculée](#valeur_calculée)
- [Valeur utilisée](#valeur_utilisée)
- [Valeur réelle](#valeur_réelle)

Ces valeurs servent à déterminer la [valeurs rendues](#valeurs_rendues).

### Valeur déclarée

Une **valeur déclarée** est toute valeur syntaxiquement valide issue d'une déclaration qui s'applique à un élément. Un élément peut avoir zéro ou plusieurs valeurs déclarées pour chaque propriété. Ces valeurs proviennent des feuilles de style (auteur·ice, utilisateur·ice ou agent utilisateur) et sont identifiées lors de l'étape de [filtrage](#filtrage).

Dans notre exemple, où la feuille de style contient `p { font-size: 1.25em; }` et le document inclut `<p class="large">CSS is fun!</p>`, d'autres déclarations `font-size` pourraient également s'appliquer à ce paragraphe. La feuille de style de l'agent utilisateur peut définir `font-size: 1em` pour tous les paragraphes, tandis qu'une autre déclaration auteur·ice définit `font-size: 2em` pour les éléments de la classe "large"&nbsp;:

```css
/* Styles de l'agent utilisateur */
p {
  font-size: 1em;
}

/* Styles auteur·ice */
p {
  font-size: 1.25em;
}

.large {
  font-size: 2em;
}
```

Il peut y avoir de nombreuses autres déclarations `font-size` dans nos feuilles de style, mais seules celles dont les sélecteurs correspondent à l'élément deviennent des valeurs déclarées. Dans cet exemple, puisque notre `<p>` a `class="large"`, les trois déclarations sont des valeurs déclarées pour cet élément.

### Valeur en cascade

La **valeur en cascade** est la valeur déclarée qui l'emporte lors de la [cascade](#cascade). Il y a au plus une valeur en cascade par propriété et par élément.

Parmi nos valeurs déclarées, les styles auteur·ice l'emportent sur les styles de l'agent utilisateur. Au sein d'une même origine, les styles de spécificité plus élevée l'emportent sur ceux de spécificité moindre. Dans notre exemple, la valeur en cascade serait `font-size: 2em`, provenant de l'origine auteur·ice avec la spécificité `0-1-1`&nbsp;:

```css
font-size: 2em;
```

S'il n'existe aucune valeur déclarée pour une propriété, il n'y a pas de valeur en cascade&nbsp;; la [valeur définie](#valeur_définie) pour cette propriété est alors déterminée par le processus d'[application des valeurs par défaut](#application_des_valeurs_par_défaut).

### Valeur définie

La **valeur définie** est le résultat du processus d'[application des valeurs par défaut](#application_des_valeurs_par_défaut). Elle est garantie pour chaque propriété de chaque élément. La valeur définie est déterminée comme suit&nbsp;:

1. Si une [valeur en cascade](#valeur_en_cascade) existe, elle est la valeur définie.
2. S'il n'y a _pas_ de valeur en cascade et que la propriété est [héritée](/fr/docs/Web/CSS/Guides/Cascade/Inheritance), la valeur définie est la [valeur calculée](#valeur_calculée) de l'élément parent.
3. S'il n'y a _pas_ de valeur en cascade et que la propriété n'est _pas_ héritée, la valeur définie est la [valeur initiale](#valeur_initiale) de la propriété.

Dans notre exemple, comme nous avons une [valeur en cascade](#valeur_en_cascade) de `2em`, celle-ci devient la valeur définie&nbsp;:

```css
font-size: 2em;
```

Pour les propriétés sans valeur en cascade, le processus de valeurs par défaut détermine la valeur. Par exemple, si `color` n'est pas spécifié, la `color` est héritée de la valeur calculée du parent puisque c'est une propriété héritée. Si `margin` n'est pas spécifié, la valeur `initial` de `0` est utilisée puisque `margin` n'est pas une [propriété héritée](/fr/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties)&nbsp;:

```css
color: inherit;
margin: 0;
```

#### Valeur initiale

La **valeur initiale** d'une propriété est la valeur par défaut indiquée dans son tableau de définition dans la spécification. La valeur initiale est utilisée lors de l'application des valeurs par défaut lorsque&nbsp;:

- Pour les [propriétés héritées](/fr/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties), la valeur initiale est utilisée uniquement pour l'élément racine, qui n'a pas d'élément parent, lorsqu'aucune valeur en cascade n'existe.
- Pour les [propriétés non héritées](/fr/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties), la valeur initiale est utilisée sur tous les éléments lorsqu'aucune valeur en cascade n'existe.

Vous pouvez définir explicitement la valeur initiale en utilisant le mot-clé {{cssxref("initial")}}.

> [!NOTE]
> La valeur initiale se trouve dans la section de définition formelle de la page de référence de chaque propriété CSS. Par exemple, la [valeur initiale de `font-size` est `medium`](/fr/docs/Web/CSS/Reference/Properties/font-size#définition_formelle). La valeur initiale ne doit pas être confondue avec la valeur définie par la feuille de style de l'agent utilisateur.

### Valeur calculée

La **valeur calculée** d'une propriété est la valeur transmise du parent vers l'enfant lors de l'héritage. Il s'agit du résultat après résolution d'unités relatives et de variables personnalisées en valeurs absolues, mais avant de tenir compte des informations spécifiques au rendu (layout).

La valeur calculée est dérivée de la [valeur définie](#valeur_définie) en&nbsp;:

1. Gérant les valeurs spéciales {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} et {{cssxref("unset")}}.
2. Effectuant les calculs nécessaires pour obtenir la valeur indiquée dans la ligne "Computed value" du tableau de définition de la propriété.

Le calcul nécessaire pour obtenir la valeur calculée implique typiquement la conversion de valeurs relatives (comme les unités `em` ou les pourcentages) en valeurs absolues. Par exemple, si un élément a `font-size: 16px` et `padding-top: 2em` comme valeurs définies, alors la valeur calculée de `padding-top` est `32px` (double de la taille de police).

Cependant, pour certaines propriétés (celles dont les pourcentages sont relatifs à une métrique nécessitant le layout pour être déterminée, comme `width`, `margin-right`, `text-indent` et `top`), les valeurs spécifiées en pourcentage deviennent des valeurs calculées en pourcentage. De plus, les nombres sans unité spécifiés sur la propriété `line-height` deviennent la valeur calculée, comme spécifié. Les valeurs relatives restant dans la valeur calculée deviennent absolues lorsque la [valeur utilisée](#valeur_utilisée) est déterminée.

### Valeur utilisée

La **valeur utilisée** est la valeur de la propriété après que tous les calculs sur la [valeur calculée](#valeur_calculée) ont été effectués et qu'elle a été affinée avec des détails spécifiques au layout (par ex., les pourcentages résolus en valeurs de pixels réelles).

Toute propriété CSS possède une valeur utilisée. Les valeurs utilisées des dimensions (par ex., {{cssxref("width")}} ou {{cssxref("line-height")}}) sont exprimées en pixels. Les valeurs utilisées des propriétés raccourcies (par ex., {{cssxref("background")}}) sont cohérentes avec celles de leurs propriétés composants (par ex., {{cssxref("background-color")}} ou {{cssxref("background-size")}}) et avec {{cssxref("position")}} et {{cssxref("float")}}.

La valeur utilisée pour la {{cssxref("width")}} ou la {{cssxref("inline-size")}} d'un élément est une valeur en pixels même si la valeur spécifiée de la propriété a été définie en pourcentages ou par des mots-clés.

Si nous avons trois éléments conteneurs dont la largeur est `auto`, `50%` et `inherit`&nbsp;:

```html hidden
<div id="no-width">
  <p>No explicit width.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Explicit width: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Explicit width: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Facilite la lecture des résultats */
div {
  border: 1px solid red;
  padding: 8px;
}
```

```js hidden
function updateUsedWidth(id) {
  const div = document.getElementById(id);
  const par = div.querySelector(".show-used-width");
  const wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

Alors que les trois valeurs spécifiées — `auto`, `50%` et `inherit` — sont des mots-clés et des valeurs de type {{cssxref("percentage")}}, récupérer la `width` via `window.getComputedStyle(el)["width"];` renvoie une valeur `px` d'[unité de longueur absolue](/fr/docs/Web/CSS/Reference/Values/length#absolute_length_units)&nbsp;:

{{ EmbedLiveSample('Example', '80%', 372) }}

Changez la taille de la fenêtre ou faites pivoter votre appareil mobile pour modifier la taille et les valeurs utilisées.

## Valeurs rendues

La valeur rendue est appelée la [valeur réelle](#valeur_réelle), tandis que la valeur récupérée via un script est appelée la [valeur résolue](#valeur_résolue).

### Valeur réelle

La **valeur réelle** d'une propriété est la [valeur utilisée](#valeur_utilisée) de cette propriété après application des approximations nécessaires. Il s'agit de la valeur finale rendue par le navigateur, y compris les ajustements dus aux limitations ou particularités d'implémentation. Par exemple, un {{glossary("user agent")}} qui ne peut rendre des bordures qu'avec des épaisseurs en pixels entiers peut arrondir l'épaisseur de la bordure à l'entier le plus proche.

Le calcul inclut les étapes suivantes&nbsp;:

1. D'abord, la [valeur définie](#valeur_définie) est déterminée en fonction du résultat de la [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction), de l'[héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance) ou en utilisant la [valeur initiale](#valeur_initiale).
2. Ensuite, la [valeur calculée](#valeur_calculée) est calculée conformément à la spécification (par ex., un `span` avec `position: absolute` verra sa valeur calculée pour `display` modifiée en `block`).
3. Puis, le layout est calculé, conduisant à la [valeur utilisée](#valeur_utilisée).
4. Enfin, la valeur utilisée est transformée selon les limitations de l'environnement local, donnant la valeur réelle.

### Valeur résolue

La **valeur résolue** d'une propriété est la valeur après application des feuilles de style actives et la résolution des calculs de base qu'elle peut contenir. La méthode {{domxref("Window.getComputedStyle", "getComputedStyle()")}} renvoie un objet {{domxref("CSSStyleDeclaration")}} contenant les valeurs résolues de toutes les propriétés CSS appliquées à un élément donné. Chaque valeur résolue est soit la [valeur calculée](#valeur_calculée), soit la [valeur utilisée](#valeur_utilisée), selon la propriété.

Historiquement, `getComputedStyle()` retournait la valeur calculée d'un élément ou d'un pseudo-élément. Au fil de l'évolution du CSS, le concept de «&nbsp;valeur calculée&nbsp;» a évolué, mais les valeurs retournées par `getComputedStyle()` ont dû rester identiques pour des raisons de compatibilité ascendante avec les scripts existants. Ces valeurs sont les «&nbsp;valeurs résolues&nbsp;».

Pour la plupart des propriétés, la valeur résolue est la valeur calculée, mais pour quelques propriétés héritées du passé (dont {{cssxref("width")}} et {{cssxref("height")}}), elle correspond à la valeur utilisée. La [spécification CSSOM <sup>(angl.)</sup>](https://drafts.csswg.org/cssom/#resolved_values) fournit des détails par propriété.

CSS 2.0 définissait la _valeur calculée_ comme la dernière étape du calcul d'une propriété. CSS 2.1 a introduit la définition distincte de "valeur utilisée". Un élément pouvait alors hériter explicitement de la largeur/hauteur de son parent, dont la valeur calculée est un pourcentage. Pour les propriétés CSS qui ne dépendent pas du layout (par ex., `display`, `font-size` ou `line-height`), les valeurs calculées et utilisées sont identiques. La liste ci-dessous contient les propriétés CSS 2.1 qui _dépendent_ du layout et ont donc une valeur calculée différente de la valeur utilisée (extrait de [CSS 2.1 Changes: Specified, computed, and actual values <sup>(angl.)</sup>](https://www.w3.org/TR/CSS2/changes.html#q21.36))&nbsp;:

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Voir aussi

- Valeurs CSS pour contrôler l'héritage&nbsp;: [`inherit`](/fr/docs/Web/CSS/Reference/Values/inherit), [`initial`](/fr/docs/Web/CSS/Reference/Values/initial), [`revert`](/fr/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/fr/docs/Web/CSS/revert-layer) et [`unset`](/fr/docs/Web/CSS/Reference/Values/unset)
- [Module de la cascade et de l'héritage CSS](/fr/docs/Web/CSS/CSS_cascade)
- [Module de la syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax)
