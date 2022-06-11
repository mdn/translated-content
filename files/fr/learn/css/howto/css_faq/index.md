---
title: Questions fréquentes en CSS
slug: Learn/CSS/Howto/CSS_FAQ
tags:
  - CSS
  - Débutant
  - Exemple
  - Guide
translation_of: Learn/CSS/Howto/CSS_FAQ
original_slug: Web/CSS/CSS_questions_frequentes
---
## Pourquoi mon CSS, pourtant valide, ne fournit pas un rendu correct ?

Pour afficher un document, les navigateurs utilisent le `DOCTYPE` - contraction de l'anglais _document type_, littéralement «&nbsp;type de document&nbsp;». Ils utilisent un mode qui est compatible avec les standards du Web et avec les bugs des vieux navigateurs. Utiliser un `DOCTYPE` correct et moderne dès le début de votre code HTML améliorera la conformité aux standards du navigateur.

Les navigateurs modernes ont deux modes de rendu :

- _Mode Quirk:_ aussi appelé mode de rétro-compatibilité. Il permet aux pages existantes d'être affichées telles que leurs auteurs l'ont voulu, en suivant les règles de rendu non-standards utilisées par les navigateurs anciens. Les documents avec un `DOCTYPE` incomplet, incorrect ou manquant, ou avec une déclaration `DOCTYPE` en utilisation avant 2001 seront affichées en mode Quirks.
- _Mode Standard:_ le navigateur tente de suivre strictement les standards du W3C. Idéalement, les nouvelles pages HTML doivent être conçues pour des navigateurs conformes aux normes. Par conséquent, les pages avec un `DOCTYPE` moderne seront affichées en mode Standard.

Les navigateurs basés sur Gecko ont un troisième mode [Presque Standard](/fr/docs/Mode_presque_standard_de_Gecko) qui comporte quelques _quirks_ mineurs.

Voici une liste des `DOCTYPE` les plus couramment utilisés, qui déclencheront les modes Standard et Presque Standard des navigateurs :

```html
<!DOCTYPE html> /* Ceci est le doctype HTML5. Étant donné que chaque
                   navigateur moderne utilise un parseur HTML5, c'est le
                   doctype recommandé. */

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"
"https://www.w3.org/TR/html4/loose.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"https://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## Pourquoi mon CSS, qui est valide, n'est pas affiché du tout ?

Pour être appliqué, une feuille CSS doit être définie avec un type MIME `text/css`. Si le serveur Web ne l'affiche pas avec ce type, la feuille CSS ne sera pas appliquée.

## Quelle est la différence entre `id` et `class` ?

Les éléments HTML peuvent posséder un attribut de type `id` et / ou `class`. L'attribut `id` assigne un nom à l'élément sur lequel il s'applique. Pour un balisage correct, il ne peut y avoir qu'un et un seul élément avec ce nom. L'attribut `class` assigne une nom de classe à un élément. Ce nom peut être utilisé sur plusieurs éléments dans la même page. CSS vous permet d'appliquer des styles à des balises avec des noms définis en `id` et / ou en `class`.

Quand vous voulez appliquer un style à un bloc ou un élément spécifique, utilisez un attribut `id`. Ces caractéristiques de style ne seront appliquées que sur cet `id` particulier.

Quand vous voulez appliquer un style à plusieurs blocs ou éléments dans la même page, utilisez un attribut `class`.

Les feuilles de style avec le moins de règles sont les plus performantes. Par conséquent, il est recommandé d'utiliser le plus possible les classes et de réserver les id à des usages spécifiques - comme connecter des éléments de type `label` et `form` ou pour décorer des éléments qui doivent être sémantiquement uniques.

Voire [Les sélecteurs CSS](/fr/docs/CSS/Premiers_pas/Les_sélecteurs "Les sélecteurs CSS").

## Comment revenir à la valeur par défaut d'un propriété ?

Jadis, il n'y avait pas de valeur nommée "default", par exemple. Le seul moyen de retrouver la valeur par défaut d'une propriété était de déclarer à nouveau cette propriété avec sa valeur par défaut.

Ce comportement est différent depuis CSS2. Une propriété CSS peut maintenant prendre la valeur [`initial`](/fr/docs/Web/CSS/initial). C'est la valeur par défaut de cette propriété, valeur définie dans les spécifications de la propriété.

## Comment créer un style dérivant d'un autre ?

CSS ne permet de faire dériver un style d'un autre. Voire [l'article d'Eric Meyer à propos de la position du groupe de travail](http://archivist.incutio.com/viewlist/css-discuss/2685). Par contre, assigner plusieurs classes à un seul élément peut produire le même effet.

## Comment assigner de multiples classes à un élément?

Il est possible d'assigner aux éléments HTML de multiples classes en les listant dans l'attribut `class` en séparant chaque classe d'un espace.

```html
<style type="text/css">
.news { background: black; color: white; }
.today { font-weight: bold; }
</style>

<div class="news today">
... content of today's news ...
</div>
```

Si la même propriété est déclarée dans les deux règles, le conflit est résolu de la manière suivante : premièrement selon la règle de spécificité, ensuite selon l'ordre de déclaration du CSS. L'ordre des classes dans l'attribut `class` n'est pas pris en compte.

## Pourquoi mes règles ne fonctionnent-elles pas correctement ?

Les règles de style qui sont syntaxiquement correctes peuvent ne pas s'appliquer dans certaines situations. Vous pouvez utiliser la partie _Règles de style CSS_ de l'inspecteur DOM pour déboguer les problèmes de ce genre, mais la plupart des cas de règles de style non utilisées sont listées ci-dessous.

### Hiérarchie des éléments HTML

La manière dont les styles CSS sont appliqués aux éléments HTML dépend aussi de la hiérarchie des-dits éléments. Il est important de se souvenir qu'une règle appliquée à un élément surcharge la règle appliquée pour l'élément parent, quelle que soit la spécificité ou la priorité de la règle CSS.

```css
.news {
  color: black;
}

.corpName {
  font-weight: bold;
  color: red;
}
```

```html
<!-- Le texte de l'annonce est en noir
     mais le nom de l'entreprise est
     en rouge gras -->
<div class="news"> (Reuters)
   <span class="corpName">General Electric</span>
  (GE.NYS) announced on Thursday...
</div>
```

Dans le cas où vous utilisez une hiérarchie HTML complexe et si une règle semble être ignorée, vérifiez que l'élément n'est pas contenu dans un autre élément avec une mise en forme différente.

### L'ordre et la redéfinition des règles

Pour les feuilles de style CSS, **l'ordre est important**. Si vous définissez une règle une première fois puis que vous la définissez à nouveau par la suite, c'est cette dernière définition qui sera prise en compte et utilisée.

```css
#stockTicker {
  font-weight: bold;
}
.stockSymbol {
  color: red;
}
/*  D'autres règles             */
/*  D'autres règles             */
/*  D'autres règles             */
.stockSymbol {
  font-weight: normal;
}
```



```html
<!-- La plupart du texte est en gras sauf "GE",
     qui est en rouge et sans graisse -->
<div id="stockTicker"> NYS: <span class="stockSymbol">GE</span> +1.0 ... </div>
```

Pour éviter ce type d'erreur, le mieux consiste à ne définir les règles qu'une seule fois pour un sélecteur donné et à grouper toutes les règles appartenant à ce sélecteur.

### Utiliser les propriétés raccourcies

Les propriétés raccourcies sont un bon outil pour définir les règles CSS car elles permettent d'obtenir une syntaxe concise. On peut utiliser les propriétés raccourcies avec uniquement quelques unes des valeurs associées, c'est possible et c'est correct ; toutefois, il faut se rappeler que tous les attributs qui ne sont pas déclarés verront leurs valeurs par défaut (aussi appelées valeurs initiales) utilisées. Cela signifie que si une règle précédente indiquait la valeur pour une propriété détaillée, elle sera surchargée de façon implicite.

```css
#stockTicker {
  font-size: 12px;
  font-family: Verdana;
  font-weight: bold;
}

.stockSymbol {
  font: 14px Arial;
  color: red;
}
```

```html
<div id="stockTicker">
  NYS:
  <span class="stockSymbol">
    GE
  </span>
  +1.0 ...
</div>
```

Dans l'exemple précédent, le problème apparaît avec des règles destinées à des éléments différents mais il peut également se produire pour un seul élément car **l'ordre des règles est important**.

```css
#stockTicker {
  font-weight: bold;
  font: 12px Verdana;
  /* font-weight vaut maintenant normal */
}
```

### Utiliser le sélecteur `*`

Le sélecteur `*` fait référence à n'importe quel élément et doit donc être utilisé avec soin.

```css
body * {
  font-weight: normal;
}

#stockTicker {
  font: 12px Verdana;
}

.corpName {
  font-weight: bold;
}

.stockUp {
  color: red;
}
```

```html
<div id="section">
  NYS:
  <span class="corpName">
    <span class="stockUp">
      GE
    </span>
  </span>
  +1.0 ...
</div>
```

Dans cet exemple, le sélecteur `body *` cible tous les éléments à l'intérieur de `body`, quel que soit le niveau hiérarchique à l'intérieur du document, y compris pour la classe `.stockUp`. Ainsi, la règle `font-weight: bold;` appliquée sur la classe `.corpName` est surchargée par la règle `font-weight: normal;` qui est appliquée à tous les éléments contenus dans `body`.

Le sélecteur `*` doit être utilisé aussi peu que possible car il s'agit d'un sélecteur lent, notamment lorsqu'il n'est pas utilisé comme le premier composant d'un sélecteur.

### La spécificité en CSS

Lorsque plusieurs règles s'applique à un même élément. La règle choisie dépend de la [spécificité](/fr/Apprendre/CSS/Les_bases/La_cascade_et_l_héritage). Les styles _inline_ (ceux déclarés via l'attribut HTML `style`) sont pris en compte en priorité, suivis par ceux manipulés avec les sélecteurs d'identifiant, suivis ceux associés aux sélecteurs de classe et éventuellement par ceux associés aux sélecteurs de nom.

```css
div {
  color: black;
}

#orange {
  color: orange;
}

.green {
  color: green;
}
```

```html
<div id="orange" class="green" style="color: red;">
  Voici quelque chose qui sera rouge.
</div>
```

Les règles exactes sont plus complexes lorsque le sélecteur contient plusieurs composants. Pour plus de détails sur la façon dont la spécificité d'un sélecteur est calculé, on pourra lire [le chapitre de la spécification CSS 2.1](https://www.w3.org/TR/CSS21/cascade.html#specificity) ou [le chapitre correspondant de la section Apprendre](/fr/Apprendre/CSS/Les_bases/La_cascade_et_l_héritage).

## Quid des propriétés `-moz-*`, `-ms-*`, `-webkit-*`, `-o-*` et `-khtml-*` ?

Ces propriétés, appelées _propriétés préfixées_, sont des extensions au standard CSS. Elles sont utilisées pour les fonctionnalités expérimentales et non-standards afin d'éviter de polluer l'espace de noms usuel pour éviter des incompatibilités lorsque le standard est augmenté.

Il n'est pas recommandé d'utilier ces propriétés pour des sites web en production. Si cela reste nécessaire, il est conseillé de prévoir une stratégie au cas où ces propriétés préfixées soient retirées. En effet, elles peuvent être modifiées voire supprimées lorsque le standard évolue.

Pour plus d'informations [sur les extensions CSS de Mozilla, vous pouvez consulter la page associée](/fr/docs/Web/CSS/Extensions_Mozilla).

## Quel est l'impact de `z-index` sur le positionnement des éléments ?

La propriété {{cssxref("z-index")}} définit l'ordre d'empilement des élément.

Un élément pour lequel `z-index` est plus grand qu'un autre sera toujours empilé « devant ».

La propriété `z-index` ne fonctionne que pour les éléments dont la position est définie (c'est-à-dire les éléments pour lesquels la propriété {{cssxref("position")}} vaut `absolute`, `relative` ou `fixed`).
