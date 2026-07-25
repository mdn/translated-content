---
title: Utiliser les requêtes de fonctionnalité
slug: Web/CSS/Guides/Conditional_rules/Using_feature_queries
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**Les requêtes de fonctionnalité** (ou <i lang="en">feature queries</i> en anglais) sont des groupes de règles conditionnelles qui testent si l'agent utilisateur prend en charge ou non une ou plusieurs fonctionnalités CSS, telles que les propriétés CSS et les valeurs de propriété. Les requêtes de fonctionnalité offrent aux développeur·euse·s web un moyen de vérifier si un navigateur prend en charge une certaine fonctionnalité, puis de fournir du CSS qui n'est appliqué qu'en fonction du résultat de ce test. Dans ce guide, vous apprendrez comment mettre en œuvre l'amélioration progressive à l'aide des requêtes de fonctionnalité.

Les requêtes de fonctionnalité sont créées à l'aide de la règle CSS {{CSSxRef("@supports")}} (ou de la fonction `supports()` dans les règles {{CSSxRef("@import")}}).

## Syntaxe

Les requêtes de fonctionnalité CSS s'inscrivent dans le module [des règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules) qui décrit également le fonctionnement de la règle {{CSSxRef("@media")}}. Les requêtes de fonctionnalités fonctionnent de manière similaire aux [requêtes de médias](/fr/docs/Web/CSS/Guides/Media_queries/Using). La différence réside dans le fait qu'avec une requête de médias, vous vérifiez une caractéristique de l'environnement dans lequel la page web est exécutée, tandis qu'avec les requêtes de fonctionnalités, vous vérifiez la prise en charge des fonctionnalités CSS par le navigateur.

Une requête de fonctionnalité se compose de la règle `@supports`, suivie de la condition de prise en charge ou d'une fonction `supports()` et de son paramètre de déclaration, au sein d'une déclaration de règle `@import`&nbsp;:

```plain
/* Règle `@supports` */
@supports <condition-de-support> {
  /* Règles CSS à appliquer */
}

/* Fonction `supports()` */
@import lien_importation supports(<declaration>);
```

Par exemple, nous pouvons appliquer un ensemble de styles ou importer une feuille de style complète si l'agent utilisateur prend en charge la valeur `red` comme valeur valide pour la propriété CSS {{CSSxRef("color")}}&nbsp;:

```css
/* Règle `@supports` */
@supports (color: red) {
  /* Règles CSS à appliquer */
}

/* Fonction `supports()` */
@import "/css/styles.css" supports(color: red);
```

Un autre exemple, si vous souhaitez vérifier si un navigateur prend en charge la propriété `row-gap`, vous devez écrire la requête de fonctionnalité suivante. Dans la plupart des cas, la valeur que vous utilisez n'a pas d'importance&nbsp;: si vous souhaitez simplement vérifier que le navigateur prend en charge cette propriété, n'importe quelle valeur valide suffit.

```html live-sample___simple
<div class="boite">
  Si votre navigateur prend en charge la propriété row-gap, la bordure apparaît
  en pointillés et le texte s'affiche en rouge.
</div>
```

```css live-sample___simple
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (row-gap: 10px) {
  .boite {
    border: 4px dashed darkgreen;
    color: red;
  }
}
```

{{EmbedLiveSample("simple")}}

La partie dédiée à la valeur de la propriété permet de tester les cas où une nouvelle valeur est définie pour une propriété donnée. Tous les navigateurs prennent en charge `color: red`&nbsp;: ça remonte à CSS1. Cependant, il existe souvent des valeurs supplémentaires ajoutées aux propriétés en CSS, comme les [couleurs relatives](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors), qui peuvent ne pas être prises en charge. Les requêtes de fonctionnalités permettent de tester les paires propriété-valeur, ce qui signifie que nous pouvons détecter la prise en charge des valeurs.

En développant l'exemple de la propriété `color` ci-dessus, nous vérifions ici si le navigateur prend en charge la déclaration `color: AccentColor`&nbsp;:

```css
/* Règle `@supports` */
@supports (color: AccentColor) {
  /* Règles CSS à appliquer */
}

/* Fonction `supports()` */
@import "/css/styles.css" supports(color: AccentColor);
```

Dans ces exemples, nous avons utilisé des requêtes de fonctionnalités pour vérifier si l'agent utilisateur prend en charge une valeur spécifique d'une propriété CSS, en listant la déclaration unique entre parenthèses. Vous pouvez tester plusieurs valeurs de propriété ou l'absence de prise en charge.

## Tester l'absence de prise en charge d'une fonctionnalité

Il est aussi possible de tester l'absence de prise en charge d'une fonctionnalité en ajoutant le mot-clé `not`&nbsp;:

```css
/* Règle `@supports` avec `not` */
@supports not (propriete: valeur) {
  /* Règles CSS à appliquer */
}
```

Le CSS à l'intérieur de l'exemple suivant est exécuté si le navigateur ne prend pas en charge `row-gap`.

```html live-sample___not
<div class="boite">
  Si votre navigateur ne prend pas en charge row-gap, le contenu apparait en
  vert foncé avec une bordure en pointillés.
</div>
```

```css live-sample___not
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports not (row-gap: 10px) {
  .boite {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("not")}}

## Tester plus d'une fonctionnalité

Vous pouvez avoir besoin de tester la prise en charge de plusieurs propriétés dans votre requête de fonctionnalités. Pour ce faire, vous pouvez inclure une liste de fonctionnalités à tester, séparées par des mots-clés `and`&nbsp;:

```css
/* Plusieurs fonctionnalités dans la règle `@supports` */
@supports (propriete1: valeur) and (propriete2: valeur) {
  /* Règles CSS à appliquer */
}
```

Par exemple, si le CSS que vous souhaitez exécuter nécessite que le navigateur prenne en charge formes CSS et grille CSS, vous pouvez créer une règle qui teste la prise en charge de ces deux fonctionnalités par le navigateur. La règle suivante n'est vraie que si `shape-outside: circle()` et `display: grid` sont tous deux pris en charge par le navigateur.

```html live-sample___and
<div class="boite">
  Si votre navigateur prend en charge <code>display: grid</code> et
  <code>shape-outside: circle()</code>, le contenu est vert foncé avec une
  bordure en pointillés.
</div>
```

```css live-sample___and
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (display: grid) and (shape-outside: circle()) {
  .boite {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("and")}}

## Tester au moins une des fonctionnalités multiples

Vous pouvez également utiliser `or` pour appliquer du CSS uniquement si une ou plusieurs déclarations sont prises en charge&nbsp;:

```css
/* N'importe quelle fonctionnalité dans la règle `@supports` */
@supports (propriete1: valeur) or (propriete2: valeur) {
  /* Règles CSS à appliquer */
}
```

Cela peut être particulièrement utile si une fonctionnalité est préfixée par un fournisseur, car vous pouvez tester la propriété standard ainsi que tous les préfixes fournisseurs.

```html live-sample___or
<div class="boite">
  Le texte et la bordure sont verts si votre navigateur prend en charge le
  lissage des polices.
</div>
```

```css live-sample___or
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (font-smooth: always) or (-webkit-font-smoothing: antialiased) {
  .boite {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("or")}}

## Options supplémentaires pour les requêtes de fonctionnalités

Les requêtes de fonctionnalités ne se limitent pas aux paires propriété-valeur. Vous pouvez inclure les fonctions [`font-tech()`](/fr/docs/Web/CSS/Reference/At-rules/@supports#font-tech), [`font-format()`](/fr/docs/Web/CSS/Reference/At-rules/@supports#font-format) et [`selector()`](/fr/docs/Web/CSS/Reference/At-rules/@supports#syntaxe_fonctionnelle) dans vos requêtes de fonctionnalités pour appliquer sélectivement du CSS en fonction de la prise en charge par l'agent utilisateur d'une technologie de police, d'un format de police ou d'une syntaxe de sélecteur définie, respectivement.

Par exemple, la fonction `selector()` peut être utilisée pour importer une feuille de style pour les navigateurs qui prennent en charge un pseudo-élément préfixé par un fournisseur&nbsp;:

```css
/* Une requête `selector()` dans une fonction `supports()` */
@import "/css/webkitShadowStyles.css"
  supports(selector(::-webkit-inner-spin-button));
```

## Exemples

### Test de prise en charge par le navigateur

Dans cet exemple, nous vérifions si le navigateur prend en charge la couleur `AccentColor` {{CSSxRef("system-color")}} et utilisons `display: none` pour changer le message par défaut «&nbsp;non pris en charge&nbsp;» en un message «&nbsp;pris en charge&nbsp;» si le type de couleur est pris en charge.

#### HTML

```html
<p class="accentcolor">
  Votre navigateur ne prend pas en charge <code>AccentColor</code> en tant que
  valeur de couleur.
</p>
```

#### CSS

```css
body {
  font: 1.2em / 1.5 sans-serif;
}
p {
  padding: 1em;
}
@supports (color: AccentColor) {
  p {
    color: green;
    border: 2px solid;
  }
  span {
    display: none;
  }
}
@supports not (color: AccentColor) {
  p {
    color: red;
  }
}
```

#### Résultat

{{EmbedLiveSample("Test de prise en charge par le navigateur")}}

## Limitations des requêtes de fonctionnalités

La règle `@supports` teste si les navigateurs peuvent analyser une ou plusieurs paires propriété/valeur, et donc s'ils déclarent prendre en charge la ou les fonctionnalités associées. Si les paires propriété/valeur sont comprises par un navigateur, il retourne une réponse positive. Les requêtes de fonctionnalités vérifient que les déclarations sont considérées comme valides par un navigateur, mais ne peuvent pas être utilisées pour vérifier si une fonctionnalité est correctement prise en charge sans bogues ou violations de spécifications. Les requêtes de fonctionnalités ne peuvent pas tester les _implémentations partielles_.

## Résumé

Les requêtes de fonctionnalités sont un outil utile pour améliorer progressivement un site. Elles permettent de fournir une bonne solution pour tous les navigateurs, et une solution améliorée pour les navigateurs qui prennent en charge les propriétés et valeurs plus récentes.

Vous n'avez pas besoin d'utiliser des requêtes de fonctionnalités pour commencer à utiliser de nouvelles fonctionnalités CSS&nbsp;; la gestion des erreurs CSS signifie que le navigateur ignore simplement le CSS qu'il ne reconnaît pas encore. Cependant, les requêtes de fonctionnalités sont une alternative utile aux déclarations de secours, et permettent d'écrire du code une fois qui peut éventuellement être pris en charge partout.

## Voir aussi

- Le module [des règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules)
- [Utiliser les requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- [Prise en charge des anciens navigateurs&nbsp;: requêtes de fonctionnalités](/fr/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Détecter les fonctionnalités du navigateur&nbsp;: `@supports` CSS](/fr/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
