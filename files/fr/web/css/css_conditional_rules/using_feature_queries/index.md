---
title: Utiliser les requêtes de fonctionnalité (feature queries)
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
---

{{CSSRef}}

**Les requêtes de fonctionnalité (ou _feature queries_)** sont créées à l'aide de la règle [`@supports`](/fr/docs/Web/CSS/@supports) et permettent aux développeurs web de tester la prise en charge d'une fonctionnalité donnée par le navigateur puis de fournir le code CSS qui sera appliqué selon le résultat de ce test. Dans ce guide, nous verrons comment gérer l'amélioration progressive grâce à l'aide des requêtes de fonctionnalité.

## Syntaxe

Les requêtes de fonctionnalité CSS s'inscrivent dans [le module de spécification CSS Conditional Rules](https://drafts.csswg.org/css-conditional-3/) qui décrit également le fonctionnement de la règle [`@media`](/fr/docs/Web/CSS/@media). Vous pourrez ici voir que les requêtes de fonctionnalité fonctionnent de façon semblable aux requêtes de média. Pour les requêtes de média, on teste une caractéristique de l'environnement dans lequel la page web est affichée/exécutée tandis que pour les requêtes de fonctionnalité, on teste la prise en charge d'une fonctionnalité CSS dans le navigateur.

Une requête de fonctionnalité commence par une règle `@supports`, suivi du nom de la propriété et de la valeur qu'on souhaite tester. Il n'est pas possible de tester une propriété seule (ex. `display`) mais uniquement un couple nom/valeur :

```css
@supports (propriété: valeur) {
  Règles CSS à appliquer
}
```

Si, par exemple, on souhaite vérifier qu'un navigateur prend en charge la propriété `row-gap`, on écrira la requête suivant. Dans la plupart des cas, peu importe la valeur utilisée avec cette propriété, on souhaite simplement la prise en charge de cette propriété et on peut donc utiliser n'importe quelle valeur valide pour ça.

{{EmbedGHLiveSample("css-examples/feature-queries/simple.html", '100%', 600)}}

La partie dédiée à la valeur de la propriété permet de tester les cas où une nouvelle valeur est spécifiée pour une propriété donnée. Le cas de `display` est particulièrement intéressant. Tous les navigateurs prennent en charge `display` (`display: block` faisait partie de CSS1) mais les valeurs `display: flex` et `display: grid` ont été ajoutées plus récemment. Les propriétés CSS peuvent parfois se voir doter de nouvelles valeurs et on peut alors tester leur prise en charge avec `@supports`.

## Tester l'absence de prise en charge d'une fonctionnalité

Il est aussi possible de tester l'absence de prise en charge d'une fonctionnalité en ajoutant le mot-clé `not` :

```css
@supports not (propriété: valeur) {
  Règles CSS à appliquer
}
```

Les règles CSS contenues dans la requête suivante seront uniquement appliquées lorsque le navigateur ne prend pas en charge `row-gap`.

{{EmbedGHLiveSample("css-examples/feature-queries/not.html", '100%', 600)}}

## Tester la prise en charge de plusieurs fonctionnalités

Si on souhaite tester la prise en charge de plusieurs fonctionnalités en même temps, on pourra les combiner avec le mot-clé `and` :

```css
@supports (property1: value) and (property2: value) {
  CSS rules to apply
}
```

On peut, par exemple, vérifier que le navigateur prend en charge les formes (_shapes_) et grilles CSS grâce à une règle qui teste cette conjonction. La règle suivante renverra `true` uniquement si `shape-outside: circle()` et `display: grid` sont pris en charge par le navigateur.

{{EmbedGHLiveSample("css-examples/feature-queries/and.html", '100%', 600)}}

De la même façon, on peut utiliser le mot-clé `or` si on souhaite tester la prise en charge d'au moins une fonctionnalité :

```css
@supports (property1: value) or (property2: value) {
  CSS rules to apply
}
```

Cela peut s'avérer particulièrement utile lorsqu'un préfixe est présent dans le nom d'une propriété (on peut alors tester la prise en charge de la propriété standard et des versions préfixées).

{{EmbedGHLiveSample("css-examples/feature-queries/or.html", '100%', 600)}}

## Limites des requêtes de fonctionnalité

Une règle `@supports` ne permet de vérifier qu'un navigateur peut interpréter une ou plusieurs paires de propriétés/valeurs. Si cette paire est comprise par le navigateur, celui-ci renverra une réponse positive. Une telle requête ne permet pas d'indiquer que la fonctionnalité est complètement prise en charge, sans bug…

De plus, de telles requêtes ne permettent pas de tester une _implémentation partielle_. Prenons l'exemple de la propriété `gap`, à l'heure actuelle (novembre 2019) : tous les navigateurs prennent en charge `gap` avec les grilles CSS et seul Firefox prend en charge `gap` avec les boîtes flexibles (_flexbox_). Si on teste la propriété `gap` car on souhaite l'utiliser avec les boîtes flexibles, on recevra une réponse positive bien que ce ne soit pas implémenté.

## Comment utiliser `@supports` pour l'amélioration progressive ?

Les requêtes de fonctionnalité sont un outil précieux pour améliorer un site de façon progressive. Elles permettent de fournir une solution fonctionnelle pour tous les navigateurs et d'améliorer le résultat pour les navigateurs qui prennent en charge de nouvelles fonctionnalités.

Toutefois, il existe des navigateurs pour lesquels même les requêtes de fonctionnalité/`@supports` ne sont pas pris en charge. Ainsi, si on souhaite utiliser les grilles CSS (qui ne sont pas prises en charge par IE11), on ne peut pas tester leur prise en charge dans IE11 car ce dernier ne permet pas d'utiliser `@supports`. En pratique, cela ne devrait pas poser de problème : le code CSS principal est destiné aux navigateurs les plus anciens et on ajoute le CSS plus récent dans les requêtes de fonctionnalité.

Prenons un exemple plus construit.

Imaginons qu'on veuille créer une disposition avec trois boîtes qui se suivent sur une ligne. Idéalement, on voudrait utiliser [les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout). Toutefois, on voudrait aussi une disposition qui fonctionne pour les navigateurs plus anciens avec des éléments flottants. Pour commencer, on crée la disposition flottante avec le code suivante (on a alors trois colonnes).

{{EmbedGHLiveSample("css-examples/feature-queries/step1.html", '100%', 900)}}

Lorsque les navigateurs ne comprennent pas une propriété ou une valeur CSS, ils l'ignorent. On peut donc améliorer progressivement notre disposition avec les grilles CSS. Les navigateurs qui ne prennent pas en charge les grilles ignoreront la valeur `grid` pour la propriété `display`. Une fois qu'un objet flottant devient un élément de grille, son caractère flottant est retiré (voir [Prendre en charge les navigateurs plus anciens](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)) et la grille écrase alors la version flottante.

Un problème persiste cependant. La propriété `width`, utilisée par les objets flottants pour afficher trois colonnes, est désormais interprétée par la grille comme étant la largeur de la piste pour la colonne (et pas la largeur du conteneur comme c'était le cas pour la disposition flottante).

{{EmbedGHLiveSample("css-examples/feature-queries/step2.html", '100%', 900)}}

Il faut une façon de retirer la largeur si `display: grid` est pris en charge. C'est là que les requêtes de fonctionnalité montrent leur force. On peut réinitialiser `width` avec la valeur `auto` si les grilles sont prises en charge.

{{EmbedGHLiveSample("css-examples/feature-queries/step3.html", '100%', 900)}}

Dans le scénario précédent, peu importe que IE11 ne prenne pas en charge les requêtes de fonctionnalité ou les grilles CSS : c'est la version flottante qui sera utilisée dans tous les cas où le navigateur ne prend pas en charge les grilles.

Une autre façon d'écrire cette solution consiste à grouper le code utilisant la grille dans une même requête de fonctionnalité.

{{EmbedGHLiveSample("css-examples/feature-queries/step4.html", '100%', 900)}}

De cette façon, on a un peu plus de code mais on peut alors tester le fonctionnement par défaut en changeant simplement le nom de la valeur. Dans l'exemple qui suit, vous pouvez ainsi alterner entre les deux solutions en changeant `display: grid` en `display: grip` (une valeur invalide et donc non prise en charge).

## Résumé

Les requêtes de fonctionnalité permettent d'utiliser des fonctionnalités récentes dans l'amélioration progressive de sites fonctionnels avec les anciens navigateurs. En destinant le code CSS aux navigateurs qui le prennent en charge, on ne risque pas d'interférences avec la disposition de base (comme nous avons pu le voir avec l'exemple précédent sur les grilles CSS).

## Voir aussi

- La règle [@supports](/fr/docs/Web/CSS/@supports)
- [Apprendre les dispositions en CSS et la prise en charge des anciens navigateurs](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Les grilles CSS et l'amélioration progressive](/fr/docs/Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_amélioration_progressive)
- [Utiliser les requêtes de fonctionnalités en CSS (billet du blog Hacks en anglais)](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/)
