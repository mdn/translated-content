---
title: Prise en charge des anciens navigateurs
slug: Learn/CSS/CSS_layout/Supporting_Older_Browsers
tags:
  - Apprendre
  - Beginner
  - CSS
  - Débutant
  - Guide
  - Layout
  - Learn
  - feature queries
  - flexbox
  - float
  - grid
  - legacy
translation_of: Learn/CSS/CSS_layout/Supporting_Older_Browsers
original_slug: Apprendre/CSS/CSS_layout/Prise_En_Charge_Des_Anciens_Navigateurs
---
{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}

Dans ce module, nous vous recommandons d'utiliser Flexbox et les grilles CSS comme principales méthodes de mise en page de vos créations. Cependant, certains visiteurs de votre site utilisent des navigateurs plus anciens ou qui ne prennent pas en charge les méthodes que vous avez utilisées. Ce sera toujours le cas sur le Web : au fur et à mesure que de nouvelles fonctionnalités sont développées, les différents navigateurs donnent la priorité à certaines fonctionnalités plutôt qu'à d'autres. Cet article explique comment utiliser les techniques modernes du Web sans exclure les utilisateurs de technologies plus anciennes.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Les bases du HTML (étudiez
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction au HTML</a
        >), et une idée du fonctionnement de CSS (étudiez
        <a href="/fr/docs/Learn/CSS/First_steps">Premiers pas avec CSS</a> et
        <a href="/fr/docs/Learn/CSS/Building_blocks">Blocs de base en CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Comprendre comment assurer la prise en charge, de vos mises en page, sur
        les anciens navigateurs qui pourraient ne pas supporter les
        fonctionnalités que vous souhaitez utiliser.
      </td>
    </tr>
  </tbody>
</table>

## Quel est le terrain des navigateurs pour votre site ?

Chaque site web est différent en termes de public ciblé. Avant de décider de l'approche à adopter, déterminez le nombre de visiteurs qui arrivent sur votre site en utilisant d'anciens navigateurs. Cette démarche est simple si vous avez un site existant que vous souhaitez compléter ou remplacer, car vous disposez probablement d'outils d'analyse qui peuvent vous indiquer la technologie utilisée par les visiteurs. Si vous n'avez pas de système d'analyse ou s'il s'agit d'un tout nouveau site, il existe des sites tels que [Statcounter](http://gs.statcounter.com/) qui peuvent fournir des statistiques filtrées par région.

Vous devez également tenir compte du type d'appareils et de la façon dont les visiteurs utilisent votre site. Par exemple, vous pouvez vous attendre à un nombre d'appareils mobiles supérieur à la moyenne. L'accessibilité et les personnes utilisant des technologies d'assistance doivent toujours être prises en compte, mais pour certains sites, cela peut être encore plus critique.

## Quelle est la prise en charge des fonctionnalités que vous souhaitez utiliser ?

Une fois que vous connaissez les navigateurs utilisés pour accéder à votre site, vous pouvez évaluer toute technologie que vous souhaitez utiliser, en fonction de sa prise en charge dans les différents navigateurs et de la facilité avec laquelle vous pouvez proposer une alternative aux visiteurs qui ne disposent pas de cette technologie. Nous essayons de vous faciliter la tâche sur le MDN, en fournissant des informations sur la compatibilité des navigateurs sur chaque page détaillant une propriété CSS. Par exemple, jetez un œil à la page de {{cssxref("grid-template-columns")}}. Au bas de cette page se trouve un tableau qui répertorie les principaux navigateurs avec la version dans laquelle ils ont commencé à prendre en charge cette propriété.

![Capture d'un tableau de compatibilité d'une page sur MDN où on voit en vert les versions initiales compatibles et en rouge les navigateurs sans prise en charge](browser-table.png)

Un autre moyen qui est fréquemment utilisé pour savoir dans quelle mesure une fonctionnalité est prise en charge est le site [Can I Use](https://caniuse.com/). Ce site répertorie la majorité des fonctionnalités de la plate-forme web avec des informations sur leur statut de prise en charge par les navigateurs. Vous pouvez afficher les statistiques d'utilisation par emplacement — utile si vous travaillez sur un site qui a des utilisateurs principalement pour une région spécifique du monde. Vous pouvez même relier votre compte Google Analytics pour obtenir une analyse basée sur vos données d'utilisateur.

Comprendre la technologie dont disposent vos utilisateurs et la prise en charge des fonctionnalités que vous pourriez vouloir utiliser vous place dans une bonne position pour prendre toutes vos décisions et savoir comment servir au mieux tous vos utilisateurs.

## Prendre en charge ne veut pas dire « ressembler à la même chose »

Un site web ne peut pas avoir le même aspect dans tous les navigateurs, car certains de vos utilisateurs consulteront le site sur un téléphone et d'autres sur un grand écran de bureau. De même, certains de vos utilisateurs auront une ancienne version du navigateur, et d'autres la dernière. Certains de vos utilisateurs pourront lire votre contenu à l'aide d'un lecteur d'écran, ou auront zoomé sur la page pour pouvoir la lire. La prise en charge de tous les utilisateurs signifie que vous devez fournir une version de votre contenu conçue de manière défensive, afin qu'elle soit parfaite sur les navigateurs modernes, tout en restant utilisable à un niveau de base pour les utilisateurs de navigateurs plus anciens.

Une prise en charge basique consiste à bien structurer votre contenu afin que le flux de votre page ait un sens. Un utilisateur disposant d'un téléphone aux fonctionnalités très limitées ne comprendra peut-être pas grand-chose à votre CSS, mais le contenu s'écoulera de manière à faciliter la lecture. Par conséquent, un document HTML bien structuré devrait toujours être votre point de départ. _Si vous supprimez votre feuille de style, votre contenu a-t-il un sens ?_

Une option consiste à laisser cette vue simple du site comme solution de repli pour les personnes utilisant des navigateurs très anciens ou limités. Si le nombre de personnes qui consultent le site à l'aide de ces navigateurs est minime, il n'est peut-être pas judicieux, d'un point de vue commercial, de consacrer du temps à essayer de leur offrir une expérience similaire à celle des utilisateurs de navigateurs modernes. Il vaudrait mieux consacrer ce temps à des choses qui rendent le site plus accessible afin qu'il bénéficie à un plus grand nombre d'utilisateurs. Il existe un monde une page HTML basique et un site rutilant de fonctionnalités ; CSS permet la création de ces solutions de repli assez simplement.

## Création de substituts en CSS

Les spécifications CSS contiennent des informations qui expliquent ce que fait le navigateur lorsque deux méthodes de mise en page sont appliquées au même élément. Cela signifie qu'il existe une définition de ce qui se passe si un élément flottant, par exemple, est également un élément de grille utilisant la mise en page de grille CSS. Associez ces informations au fait que les navigateurs ignorent les CSS qu'ils ne comprennent pas, et vous disposez d'un moyen de créer des mises en page simples à l'aide des [techniques historiques](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) que nous avons déjà abordées, qui sont ensuite écrasées par votre mise en page « Grid » dans les navigateurs modernes qui la comprennent.

Dans l'exemple ci-dessous, nous avons fait flotter trois `<div>` pour les afficher en ligne. Tout navigateur qui ne prend pas en charge [CSS Grid Layout](/fr/docs/Learn/CSS/CSS_layout/Grids) verra la rangée de cases comme une disposition flottante. Un élément flottant qui devient un élément de grille perd le comportement flottant, ce qui signifie qu'en transformant le conteneur en conteneur de grille, les éléments flottants deviennent des éléments de grille.Si le navigateur prend en charge la mise en page de la grille, il affichera la vue de la grille, sinon il ignore les propriétés liées à ce dernier, en plus de `display : grid`, et la mise en page flottante est utilisée.

### Exemple

#### CSS

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
```

#### HTML

```html
<div class="wrapper">
  <div class="item">Item One</div>
  <div class="item">Item Two</div>
  <div class="item">Item Three</div>
</div>
```

{{EmbedLiveSample('Exemple', '', '150')}}

> **Note :** La propriété {{cssxref("clear")}} n'a également aucun effet une fois que l'élément dégagé devient un élément de grille. Vous pouvez donc avoir une mise en page avec un pied de page dégagé, qui est ensuite transformée en une mise en page sur une grille CSS.

### Méthodes de substitution

Il existe un certain nombre de méthodes de mise en page qui peuvent être utilisées de manière similaire à cet exemple d'éléments flottants. Vous pouvez choisir celle qui convient le mieux selon le modèle de présentation que vous devez créer.

- `float` et `clear`
  - : Comme indiqué ci-dessus, les propriétés `float` et `clear` cessent d'affecter la mise en page si les éléments ciblés par `float` ou `clear` deviennent des éléments d'une grille ou d'une zone flexible.
- `display : inline-block`
  - : Cette méthode peut être utilisée pour créer des mises en page en colonnes, si un élément a `display : inline-block` défini mais devient ensuite un élément flexible ou d'une grille, le comportement _inline-block_ est ignoré.
- `display: table`
  - : La méthode de création de tableaux CSS décrite dans l'[introduction](/fr/docs/Learn/CSS/CSS_layout/Introduction) de ces leçons peut être utilisée comme solution de substitution. Les éléments sur lesquels des dispositions de tableau CSS ont été définies perdront ce comportement s'ils deviennent des éléments flex ou des éléments de grille. Il est important de noter que les boîtes anonymes créées pour fixer la structure de la table ne sont pas créées.
- Mise en page à colonnes multiples
  - : Pour certaines mises en page, vous pourriez utiliser [multi-col](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) comme solution de substitution, si votre conteneur a l'une des propriétés `column-*` définies sur lui et devient ensuite un conteneur de grille, le comportement multicolonne ne se produira pas.
- Flexbox comme solution de repli pour la grille
  - : [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox) bénéficie d'une meilleure prise en charge par les navigateurs que les grilles CSS en raison de sa prise en charge par IE10 et 11, même si vous devez consulter les informations plus loin dans cette leçon expliquant la prise en charge plutôt inégale et confuse de Flexbox dans les anciens navigateurs. Si vous transformez un conteneur flexible en conteneur de grille, toute propriété `flex` appliquée aux enfants sera ignorée.

Pour de nombreux ajustements de mise en page dans les navigateurs plus anciens, vous constaterez peut-être que vous pouvez offrir une expérience décente en utilisant CSS de cette manière. Nous ajoutons une mise en page plus simple basée sur des techniques plus anciennes et bien supportées, puis nous utilisons un CSS plus récent pour créer la mise en page que plus de 90 % de votre public verra. Dans certains cas, cependant, le code de substitution devra inclure un élément que les nouveaux navigateurs interpréteront également. Par exemple, si nous devions ajouter des pourcentages de largeur à nos éléments flottants pour que les colonnes ressemblent davantage à l'affichage en grille, en s'étirant pour remplir le conteneur.

Dans la disposition flottante, le pourcentage est calculé à partir du conteneur — 33,333 % correspond à un tiers de la largeur du conteneur. Dans la grille, cependant, ces 33,333 % sont calculés à partir de la zone de la grille dans laquelle l'élément est placé, de sorte qu'il devient en fait un tiers de la taille souhaitée une fois que la disposition en grille est introduite.

### Exemple

#### CSS

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
  width: 33.333%;
}
```

#### HTML

```html
<div class="wrapper">
  <div class="item">Item One</div>
  <div class="item">Item Two</div>
  <div class="item">Item Three</div>
</div>
```

{{EmbedLiveSample('Exemple_2', '', '150')}}

Pour résoudre ce problème, nous devons trouver un moyen de détecter si la grille est prise en charge et donc si elle remplacera la largeur. CSS a une solution pour nous ici.

## Requêtes de fonctionnalités

Les requêtes de fonctionnalités vous permettent de vérifier si un navigateur prend en charge une fonctionnalité CSS particulière. Cela signifie que vous pouvez écrire du CSS pour les navigateurs qui ne prennent pas en charge une certaine fonctionnalité, puis vérifier si le navigateur la prend en charge et, si c'est le cas, intégrer votre mise en page.

Si nous ajoutons une requête de fonctionnalité à l'exemple ci-dessus, nous pouvons l'utiliser pour remettre les largeurs de nos éléments sur `auto` si nous savons que nous avons un support de grille.

### Exemple

#### CSS

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
  width: 33.333%;
}

@supports (display: grid) {
  .item {
      width: auto;
  }
}
```

#### HTML

```html
<div class="wrapper">
  <div class="item">Item One</div>
  <div class="item">Item Two</div>
  <div class="item">Item Three</div>
</div>
```

{{EmbedLiveSample('Exemple_3', '', '150')}}

La prise en charge des requêtes de caractéristiques est très bonne dans les navigateurs modernes. Toutefois, vous devez noter que ce sont les navigateurs qui ne prennent pas en charge la grille CSS, qui ne prennent pas non plus en charge les requêtes de fonctionnalités. Cela signifie qu'une approche telle que celle décrite ci-dessus fonctionnera pour ces navigateurs. Ce que nous faisons, c'est écrire notre ancien CSS en premier, en dehors de toute requête de fonctionnalité. Les navigateurs qui ne prennent pas en charge la grille et la requête de fonctionnalité utiliseront les informations de mise en page qu'ils peuvent comprendre et ignoreront complètement tout le reste. Les navigateurs qui prennent en charge la requête de fonctionnalité prennent également en charge CSS Grid et exécuteront donc le code de la grille et le code contenu dans la requête de fonctionnalité.

La spécification pour les requêtes de fonctionnalités contient également la possibilité de tester si un navigateur ne prend pas en charge une fonctionnalité — cela n'est utile que si le navigateur prend en charge les requêtes de fonctionnalités. À l'avenir, une approche consistant à vérifier l'absence de prise en charge fonctionnera, car les navigateurs qui ne prennent pas en charge les requêtes de caractéristiques disparaîtront. Pour l'instant, cependant, utilisez l'approche consistant à utiliser l'ancien CSS, puis à l'écraser, pour obtenir la meilleure prise en charge possible.

## Anciennes versions de Flexbox

Dans les anciennes versions des navigateurs, vous pouvez trouver des itérations précédentes de la spécification Flexbox. Au moment de la rédaction de cet article, il s'agit principalement d'un problème avec Internet Explorer 10, qui utilise le préfixe `-ms-` pour Flexbox. Cela signifie également qu'il existe des articles et des tutoriels dépassés ; [ce guide utile](https://css-tricks.com/old-flexbox-and-new-flexbox/) vous aide à vérifier ce que vous regardez et peut également vous aider si vous avez besoin d'une prise en charge de Flexbox dans de très anciens navigateurs.

## La version préfixée d'IE10 et 11 de Grid

La spécification CSS Grid a été initialement prototypée dans Internet Explorer 10 ; cela signifie que si IE10 et IE11 ne disposent pas du support de la grille _moderne_, ils disposent d'une version de la mise en page Grid qui est très utilisable, bien que différente de la spécification moderne documentée sur ce site. Les implémentations d'IE10 et 11 sont préfixées `-ms-`, ce qui signifie que vous pouvez les utiliser pour ces navigateurs et qu'elles seront ignorées par les navigateurs non-Microsoft. Edge comprend toujours l'ancienne syntaxe, cependant, alors faites attention à ce que tout soit écrasé en toute sécurité dans votre grille CSS moderne.

Le guide [Les grilles CSS et l'amélioration progressive](/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement) peut vous aider à comprendre la version IE de la grille, et nous avons inclus quelques liens utiles supplémentaires à la fin de cette leçon. Cependant, à moins que vous n'ayez un nombre très élevé de visiteurs dans des versions IE plus anciennes, il est préférable de vous concentrer sur la création d'une solution de substitution qui fonctionne pour tous les navigateurs non pris en charge.

## Test des anciens navigateurs

La majorité des navigateurs prenant en charge Flexbox et Grid, il peut être raisonnablement difficile de tester les navigateurs plus anciens. Une façon de procéder est d'utiliser un outil de test en ligne tel que Sauce Labs, comme détaillé dans le module [Test sur plusieurs navigateurs](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing).

Vous pouvez également télécharger et installer des machines virtuelles, et exécuter les anciennes versions des navigateurs dans un environnement confiné sur votre propre ordinateur. Avoir accès à d'anciennes versions d'Internet Explorer est particulièrement utile, et à cette fin, Microsoft a mis à disposition [une gamme de machines virtuelles à télécharger gratuitement](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/). Celles-ci sont disponibles pour les systèmes d'exploitation Mac, Windows et Linux et constituent donc un excellent moyen de tester les navigateurs Windows anciens et modernes, même si vous n'utilisez pas d'ordinateur Windows.

## Résumé

Vous disposez désormais des connaissances nécessaires pour utiliser en toute confiance des techniques telles que les grilles CSS et Flexbox, créer des solutions de substitution pour les navigateurs plus anciens et utiliser toutes les nouvelles techniques qui pourraient apparaître à l'avenir.

## Voir aussi

- [Utilisation des requêtes de fonctionnalités en CSS](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/) (en)
- [Mises en page avancées avec les boîtes flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Les grilles CSS et l'amélioration progressive](/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Utilisation de la grille CSS : Prise en charge des navigateurs sans Grid](https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/) (en)
- [Un tutoriel qui utilise la version IE10 et 11 de Grid](https://24ways.org/2012/css3-grid-layout/) (en)
- [Dois-je essayer d'utiliser la mise en œuvre de la grille dans IE10 ?](https://rachelandrew.co.uk/archives/2016/11/26/should-i-try-to-use-the-ie-implementation-of-css-grid-layout/) (en)
- [Conception Web en cascade avec les requêtes de fonctionnalités](https://24ways.org/2017/cascading-web-design/) (en)
- [Utilisation des requêtes de fonctionnalités (vidéo)](https://gridbyexample.com/learn/2016/12/24/learning-grid-day24/) (en)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}

## Dans ce module

- [Introduction à la mise en page en CSS](/fr/docs/Learn/CSS/CSS_layout/Introduction)
- [Cours normal](/fr/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grid](/fr/docs/Learn/CSS/CSS_layout/Grids)
- [Les boîtes flottantes](/fr/docs/Learn/CSS/CSS_layout/Floats)
- [Le positionnement](/fr/docs/Learn/CSS/CSS_layout/Positioning)
- [Disposition sur plusieurs colonnes](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Responsive design](/fr/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Guide du débutant des Media Queries](/fr/docs/Learn/CSS/CSS_layout/Media_queries)
- [Méthodes de mises en page traditionnelles](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Prise en charge des anciens navigateurs](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Compréhension fondamentale de la mise en page](/fr/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
