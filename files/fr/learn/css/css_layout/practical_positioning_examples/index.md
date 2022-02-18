---
title: Exemples pratiques de positionnement
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
translation_of: Learn/CSS/CSS_layout/Practical_positioning_examples
original_slug: Apprendre/CSS/CSS_layout/Exemples_pratiques_de_positionnement
---
{{LearnSidebar}}

Cet article illustre comment construire quelques exemples concrets de ce qu'on peut réaliser avec le positionnement.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Les fondamentaux en HTML (étudier
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Une introduction au HTML</a
        >), et une idée du fonctionnement du CSS (étudier
        <a href="/fr/docs/Learn/CSS/First_steps">Une introduction à CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Avoir une idée des aspects pratiques du positionnement</td>
    </tr>
  </tbody>
</table>

## Une boîte d'information à onglets

Le premier exemple que nous allons examiner est une boîte d'information à onglets classique - une méthode courante utilisée lorsqu'on souhaite regrouper beaucoup d'informations dans une petite zone. Cela inclut les applications gourmandes en informations comme les jeux de stratégie/guerre, les versions mobiles de sites web où l'écran est étroit et l'espace limité, et les boîtes d'information compactes où on peut mettre à disposition de nombreuses informations sans qu'elles remplissent toute l'interface utilisateur. Notre exemple ressemblera à ceci une fois que nous aurons terminé :

![](tabbed-info-box.png)

> **Note :** Vous pouvez voir l'exemple fini en démonstration sur la page [info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) ([code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html)). N'hésitez pas à le consulter pour avoir une idée du résultat que vous allez construire.

On pourrait se demander : « pourquoi ne pas créer des onglets séparés sous forme de pages web séparées, et faire en sorte que ces onglets permettent de cliquer sur les pages séparées pour créer cet effet ? ». Ce code serait en effet plus simple, mais dans ce cas, chaque « page » séparée serait en fait une nouvelle page web, ce qui rendrait plus difficile la sauvegarde des informations entre les vues, et intégrerait cette fonctionnalité dans un design d'interface plus large. De plus, les applications dites « à page unique » (<i lang="en">Single Page Apps</i>) deviennent très populaires, en particulier pour les interfaces web mobiles, parce que le fait que tout soit servi dans un seul fichier réduit le nombre de requêtes HTTP nécessaires pour voir tout le contenu, ce qui améliore les performances.

> **Note :** Il arrive même que pour certains sites, ce soit une seule page qui soit chargée et que son contenu soit modifié dynamiquement grâce à des fonctionnalités JavaScript telles que [XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest). Pour le moment, nous garderons des choses simples. Il y aura un peu de JavaScript en fin d'article, mais la juste dose nécessaire pour faire fonctionner cet exemple.

Pour commencer, effectuez une copie locale du fichier HTML de départ — [info-box-start.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box-start.html). Enregistrez ce fichier dans un endroit approprié sur votre ordinateur et ouvrez-le dans votre éditeur de texte. Examinons le HTML contenu dans le corps de cette page :

```html
<section class="info-box">
  <ul>
    <li><a href="#" class="active">Onglet 1</a></li>
    <li><a href="#">Onglet 2</a></li>
    <li><a href="#">Onglet 3</a></li>
  </ul>
  <div class="panels">
    <article class="active-panel">
      <h2>Premier onglet</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Vestibulum et orci scelerisque, vulputate tellus quis, lobortis dui. Vivamus varius libero at ipsum mattis efficitur ut nec nisl. Nullam eget tincidunt metus. Donec ultrices, urna maximus consequat aliquet, dui neque eleifend lorem, a auctor libero turpis at sem. Aliquam ut porttitor urna. Nulla facilisi.</p>
    </article>
    <article>
      <h2>Deuxième onglet</h2>

      <p>Cet onglet ne contient pas de Lorem Ipsum, mais bon c'est aussi peu intéressant que les autres onglets.</p>
    </article>
    <article>
      <h2>Troisième onglet</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Et voici une liste ordonnée !</p>

      <ol>
        <li>dui neque eleifend lorem, a auctor libero turpis at sem.</li>
        <li>Aliquam ut porttitor urna.</li>
        <li>Nulla facilisi</li>
      </ol>
    </article>
  </div>
</section>
```

Nous avons un élément [`<section>`](/fr/docs/Web/HTML/Element/section) avec une `class` `info-box`, qui contient un élément [`<ul>`](/fr/docs/Web/HTML/Element/ul) et un élément [`<div>`](/fr/docs/Web/HTML/Element/div). La liste non ordonnée contient trois éléments de liste avec des liens à l'intérieur, qui deviendront les véritables onglets sur lesquels il faudra cliquer pour afficher nos panneaux de contenu. L'élément `div` contient trois éléments [`<article>`](/fr/docs/Web/HTML/Element/article), qui constitueront les panneaux de contenu correspondant à chaque onglet. Chaque panneau contient un échantillon de contenu.

L'idée ici est que nous allons donner aux onglets l'aspect d'un menu de navigation horizontal standard, et que nous allons donner aux panneaux l'aspect d'être superposés en utilisant un positionnement absolu. Nous vous donnerons également un peu de JavaScript à inclure dans votre page pour afficher le panneau correspondant lorsqu'on clique sur un des onglets, et nous donnerons un style à l'onglet lui-même. Vous n'aurez pas besoin de comprendre le JavaScript lui-même à ce stade, mais vous devriez penser à apprendre [quelques bases de JavaScript](/fr/docs/Learn/Getting_started_with_the_web/JavaScript_basics) dès que possible - plus les fonctionnalités de votre interface utilisateur deviendront complexes, plus il est probable que vous aurez besoin de JavaScript pour implémenter les fonctionnalités souhaitées.

### Configuration générale

Pour commencer, ajoutez ce qui suit entre les balises ouvrantes et fermantes [`<style>`](/fr/docs/Web/HTML/Element/style) :

```css
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

Il s'agit uniquement d'une configuration générale pour définir une police sans serif sur notre page, utiliser le modèle `border-box` [`box-sizing`](/fr/docs/Web/CSS/box-sizing), pour surcharger la marge par défaut de [`<body>`](/fr/docs/Web/HTML/Element/body).

Ensuite, ajoutez ce qui suit en dessous de votre CSS précédent :

```css
.info-box {
  width: 450px;
  height: 400px;
  margin: 0 auto;
}
```

Cela définit une largeur et une hauteur spécifiques sur le contenu, et le centre sur l'écran en utilisant l'ancienne astuce `margin: 0 auto`. Précédemment dans le cours, nous avons déconseillé de définir une hauteur fixe sur les conteneurs de contenu si possible. Nous dérogeons à cette règle ici, car nous avons un contenu fixe dans les onglets. De plus, il serait déconcertant d'avoir des onglets différents avec différentes hauteurs.

### Mettre en forme les onglets

On souhaite que nos onglets ressemblent à des onglets. Autrement dit, on veut avoir un menu de navigation horizontal et, au lieu d'avoir différentes pages web depuis ce menu, obtenir l'affichage des différents panneaux sur la même page. Pour commencer, ajoutez la règle à la fin de votre CSS afin de retirer les valeurs par défaut de [`padding-left`](/fr/docs/Web/CSS/padding-left) et [`margin-top`](/fr/docs/Web/CSS/margin-top) pour la liste non-ordonnée :

```css
.info-box ul {
  padding-left: 0;
  margin-top: 0;
}
```

> **Note :** On utilise ici un sélecteur de descendants avec `.info-box` au début du sélecteur et pour tout cet exemple afin qu'on puisse insérer cette fonctionnalité dans une page possédant déjà un autre contenu, sans risquer de causer des interférences avec le style déjà existant.

Ensuite, mettons en forme les onglets horizontaux. Les éléments de la liste ont un flottement à gauche afin qu'ils soient sur une même ligne. Leur propriété [`list-style-type`](/fr/docs/Web/CSS/list-style-type) est placée à `none` afin de ne plus avoir les puces et [`width`](/fr/docs/Web/CSS/width) vaut `150px` afin qu'il y ait suffisamment de place au sein de la boîte pour afficher ces éléments. Les éléments [`<a>`](/fr/docs/Web/HTML/Element/a) ont [`display`](/fr/docs/Web/CSS/display) avec la valeur `inline-block` afin qu'ils s'inscrivent dans une ligne mais qu'ils puissent tout de même être mis en forme pour des boutons d'onglet en utilisant d'autres propriétés.

Ajoutez le fragment de CSS qui suit :

```css
.info-box li {
  float: left;
  list-style-type: none;
  width: 150px;
}

.info-box li a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  line-height: 3;
  background-color: red;
  color: black;
  text-align: center;
}
```

Pour finir avec cette section, mettons en forme les liens selon leur état. Toute d'abord, gérons les états `:focus` et `:hover` afin que les onglets aient un aspect différent lorsqu'ils ont le focus ou qu'on les survole afin que la personne qui utilise le site ait un retour visuel. Deuxièmement, ajoutons une règle qui applique la même mise en forme lorsqu'un attribut `class` avec la valeur `active` est présent dessus. Nous appliquerons cette valeur à l'aide de JavaScript lorsqu'un clic aura lieu sur l'onglet. Ajoutez le CSS qui suit après les autres règles déjà écrites :

```css
.info-box li a:focus, .info-box li a:hover {
  background-color: #a60000;
  color: white;
}

.info-box li a.active {
  background-color: #a60000;
  color: white;
}
```

### Mettre en forme les panneaux

La suite consiste à mettre en forme les panneaux de contenu. Allons-y !

Pour commencer, ajoutez la règle suivante qui met en forme le conteneur `.panels` [`<div>`](/fr/docs/Web/HTML/Element/div). Ici, on définit une hauteur fixe avec [`height`](/fr/docs/Web/CSS/height) afin de s'assurer que les panneaux s'inscriront correctement dans la boîte d'informations. On définit [`position`](/fr/docs/Web/CSS/position) `relative` sur l'élément [`<div>`](/fr/docs/Web/HTML/Element/div) comme contexte de positionnement afin que les éléments enfants y soient relatifs (plutôt que relatifs à l'élément [`<html>`](/fr/docs/Web/HTML/Element/html)) pour la mise en forme. Enfin, on utilise [`clear`](/fr/docs/Web/CSS/clear) pour annuler le flottement défini plus haut afin qu'il n'y ait pas d'interférence avec le reste de la disposition.

```css
.info-box .panels {
  height: 352px;
  position: relative;
  clear: both;
}
```

Dans cette section, nous allons mettre en forme les éléments [`<article>`](/fr/docs/Web/HTML/Element/article) qui forment les panneaux. La première règle va fixer [`position`](/fr/docs/Web/CSS/position) absolue pour les panneaux avant de les placer dans le coin supérieur gauche de leur conteneur [`<div>`](/fr/docs/Web/HTML/Element/div) avec [`top`](/fr/docs/Web/CSS/top) et [`left`](/fr/docs/Web/CSS/left). C'est la clé de cette disposition : ainsi, les panneaux sont superposés les uns sur les autres. Cette règle fournit également la même hauteur que le conteneur et ajoute un peu de remplissage autour du contenu, une couleur pour le texte ([`color`](/fr/docs/Web/CSS/color)), ainsi qu'une couleur d'arrière-plan ([`background-color`](/fr/docs/Web/CSS/background-color)).

La deuxième règle ajoutée indique qu'un panneau avec une classe (`class`) valant `active-panel` aura une valeur de [`z-index`](/fr/docs/Web/CSS/z-index) à 1 : il sera alors placé par-dessus les autres panneaux (par défaut les éléments positionnés ont un `z-index` qui vaut 0, ce qui les place en dessous). Là aussi, nous ajouterons cette classe au document à l'aide de JavaScript.

```css
.info-box article {
  position: absolute;
  top: 0;
  left: 0;
  height: 352px;
  padding: 10px;
  color: white;
  background-color: #a60000;
}

.info-box .active-panel {
  z-index: 1;
}
```

### Ajouter notre JavaScript

La dernière étape permettant d'avoir un résultat fonctionnel consiste à ajouter du JavaScript. Placez les lignes suivantes (sans modification) entre les balises ouvrantes et fermantes [`<script>`](/fr/docs/Web/HTML/Element/script) (elles se situent après le contenu HTML) :

```js
let tabs = document.querySelectorAll('.info-box li a');
let panels = document.querySelectorAll('.info-box article');

for(let i = 0; i < tabs.length; i++) {
  let tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for(let i = 0; i < panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
  }
}
```

Ce code effectue les actions suivantes :

- Tout d'abord, on garde une référence pour tous les onglets et tous les panneaux dans deux variables intitulées `tabs` et `panels` afin qu'on puisse facilement les manipuler par la suite.
- Ensuite, on utilise une boucle `for` pour parcourir l'ensemble des onglets et, pour chaque, on exécute une fonction intitulée `setTabHandler()` qui met en place les fonctionnalités à utiliser lors d'un clic. Lorsque cette fonction est exécutée, elle reçoit une référence de l'onglet concerné ainsi qu'un indice `i` qui identifie la position de l'onglet dans le tableau `tabs`.
- Dans la fonction `setTabHandler()`, l'onglet se voit affecter un gestionnaire d'évènement `onclick`. Ainsi dès qu'on clique sur un onglet, on a :

  - Une boucle `for` qui est utilisée afin de parcourir tous les onglets pour retirer les classes qui seraient présentes sur eux.
  - Une classe (`class`) `active` qui est appliquée sur l'onglet sur lequel on a cliqué (nous avons vu plus haut que cette classe était associée à une règle CSS qui définit [`color`](/fr/docs/Web/CSS/color) et [`background-color`](/fr/docs/Web/CSS/background-color) sur l'onglet afin que celles-ci correspondent aux couleurs du panneau.
  - Une boucle `for` qui parcourt tous les panneaux afin de retirer toute classe qui serait présente sur eux.
  - Une classe `active-panel` qui est appliquée sur le panneau correspondant à l'onglet. Cela permet d'appliquer la règle CSS vue plus haut qui définit [`z-index`](/fr/docs/Web/CSS/z-index) à 1, afin de faire apparaître ce panneau par-dessus les autres.

Et voilà pour le premier exemple. Gardez le code actuel sous la main, nous allons le modifier pour construire le deuxième exemple.

## Une boîte d'information à onglets avec une position fixe

Dans ce deuxième exemple, nous repartirons du premier exemple (notre boîte d'information à onglets) et nous l'ajouterons dans le contexte d'une page web complète. De plus, nous l'ajouterons avec une position fixe afin qu'elle reste à la même position dans la fenêtre du navigateur. Ainsi, quand le contenu principal défilera, la boîte d'information restera au même endroit à l'écran. Le résultat final ressemblera à :

![](fixed-info-box.png)

> **Note :** Vous pouvez voir l'exemple fini en démonstration sur la page [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) ([code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/fixed-info-box.html)). N'hésitez pas à le consulter pour avoir une idée du résultat que vous allez construire.

Comme point de départ, vous pouvez utiliser l'exemple construit dans la première section de cet article ou enregistrer sur votre ordinateur le fichier [info-box.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html) depuis le dépôt GitHub.

### Ajouts au HTML

Tout d'abord, il nous faut compléter le HTML afin de représenter le contenu principal du site web. Ajoutez la section ([`<section>`](/fr/docs/Web/HTML/Element/section)) suivante juste après la balise ouvrante [`<body>`](/fr/docs/Web/HTML/Element/body) et avant la section existante :

```html
<section class="fake-content">
  <h1>Faux contenu</h1>
  <p>Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.</p>
  <p>Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.</p>
  <p>Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.</p>
  <p>Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.</p>
  <p>Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.</p>
  <p>Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.</p>
  <p>Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.</p>
  <p>Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.</p>
</section>
```

> **Note :** N'hésitez pas à changer ce contenu imaginaire par du contenu concret si vous le souhaitez.

### Modifications au CSS existant

Ensuite, adaptons le code CSS existant afin que la boîte d'information soit placée et positionnée. On change la règle ciblant `.info-box` afin de se débarrasser de `margin: 0 auto;` (on ne veut plus que la boîte soit centrée) et d'ajouter [`position`](/fr/docs/Web/CSS/position)`: fixed;` avant de l'attacher au haut de la zone d'affichage du navigateur avec [`top`](/fr/docs/Web/CSS/top).

Voici ce à quoi ça devrait ressembler :

```css
.info-box {
  width: 450px;
  height: 400px;
  position: fixed;
  top: 0;
}
```

### Mettre en forme le contenu principal

Il nous reste alors à mettre en forme le contenu principal. Ajoutez la règle suivante à la suite de votre CSS existant :

```css
.fake-content {
  background-color: #a60000;
  color: white;
  padding: 10px;
  height: 2000px;
  margin-left: 470px;
}
```

Pour commencer, on utilise la même couleur de texte et d'arrière-plan avec [`background-color`](/fr/docs/Web/CSS/background-color), [`color`](/fr/docs/Web/CSS/color), et le même remplissage ([`padding`](/fr/docs/Web/CSS/padding)) que pour les panneaux de la boîte d'information. On applique ensuite une marge à gauche suffisante ([`margin-left`](/fr/docs/Web/CSS/margin-left)) pour décaler le contenu à droite afin de créer suffisamment d'espace pour la boîte d'information pour que celle-ci ne recouvre pas le reste.

Et voici la fin de ce deuxième exemple, espérons que le troisième vous sera tout aussi utile.

## Un panneau glissant masqué

Le dernier exemple que nous verrons ici est un panneau qui apparaît/disparaît en « glissant » de l'écran après avoir appuyé sur une icône. Comme mentionné plus haut, il s'agit d'un geste commun pour des dispositions mobiles où l'espace à l'écran est restreint et où on ne veut pas le gaspiller en montrant constamment un menu ou un panneau d'information à la place du contenu utile.

Voilà ce à quoi ressemblera notre exemple terminé :

![](hidden-sliding-panel.png)

> **Note :** Vous pouvez voir l'exemple fini en démonstration sur la page [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) ([code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel.html)). N'hésitez pas à le consulter pour avoir une idée du résultat que vous allez construire.

Pour commencer, enregistrez le fichier [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) sur votre ordinateur. Celui-ci ne repart pas de l'exemple précédent et il faut donc utiliser un nouveau fichier. Voyons déjà ce que contient le code HTML de ce fichier :

```html
<label for="toggle">❔</label>
<input type="checkbox" id="toggle">
<aside>

  ...

</aside>
```

Pour commencer, nous avons un élément [`<label>`](/fr/docs/Web/HTML/Element/Label) et un élément [`<input>`](/fr/docs/Web/HTML/Element/Input). Les éléments `<label>` sont généralement utilisés afin d'associer un libellé avec un élément de formulaire à des fins d'accessibilité (permettant par exemple à quelqu'un qui utilise un lecteur d'écran de connaître la description du contenu attendu dans ce champ de formulaire). Ici, ce libellé est associé avec la case à cocher `<input>` grâce aux attributs `for` et `id`.

> **Note :** Nous avons utilisé un point d'interrogation dans notre HTML afin que celui-ci serve d'icône pour accéder à l'information : il représente le bouton qu'on utilisera pour afficher/masquer le panneau.

Ici, nous allons utiliser ces éléments pour un but légèrement différent. Un effet de bord sympathique des éléments `<label>` est que lorsqu'on clique sur eux, cela permet de cocher la case à cocher correspondante (comme si on avait cliqué sur la case en question). Cela a ainsi permis la fameuse [bidouille de la case à cocher](https://css-tricks.com/the-checkbox-hack/) qui permet, sans utiliser JavaScript, de contrôler un élément en activant un bouton. L'élément que nous contrôlerons ici est l'élément [`<aside>`](/fr/docs/Web/HTML/Element/aside) qui suit les deux autres (nous avons laissé son contenu de côté pour des raisons de concision).

Dans les sections qui suivent, nous expliquerons comment cela fonctionne.

### Mettre en forme les éléments de formulaire

Commençons par les éléments de formulaire : ajoutez le CSS qui suit entre les balises [`<style>`](/fr/docs/Web/HTML/Element/style) :

```css
label[for="toggle"] {
  font-size: 3rem;
  position: absolute;
  top: 4px;
  right: 5px;
  z-index: 1;
  cursor: pointer;
}

input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

La première règle met en forme `<label>`, on y trouve :

- Une taille de police ([`font-size`](/fr/docs/Web/CSS/font-size)) élevée afin que l'icône soit bien visible.
- Une [`position`](/fr/docs/Web/CSS/position) `absolute` avec des définitions pour [`top`](/fr/docs/Web/CSS/top) et [`right`](/fr/docs/Web/CSS/right) qui permettent de positionner l'icône dans le coin supérieur droit.
- Une définition de [`z-index`](/fr/docs/Web/CSS/z-index) à 1 afin que, lorsque le panneau d'information est montré, il ne recouvre pas l'icône mais que celle-ci soit toujours affichée afin de pouvoir l'utiliser pour masquer le panneau d'information.
- Une propriété [`cursor`](/fr/docs/Web/CSS/cursor) pour changer le curseur de la souris au survol de l'icône afin que le curseur prenne la forme d'une main (la même que celle utilisée par défaut au survol des liens). Cela fournit une indication visuelle supplémentaire comme quoi l'icône fait quelque chose d'intéressant.

La deuxième règle applique [`position`](/fr/docs/Web/CSS/position) `absolute` sur la case à cocher `<input>` et la masquer en haut de l'écran, car on ne veut pas l'afficher sur l'interface utilisateur.

### Mettre en forme le panneau

Il est désormais temps de mettre en forme le panneau à proprement parler. Ajoutez la règle suivante à la fin de votre CSS :

```css
aside {
  background-color: #a60000;
  color: white;

  width: 340px;
  height: 100%;
  padding: 0 20px;

  position: fixed;
  top: 0;
  right: -370px;

  transition: 0.6s all;
}
```

Il y a plusieurs déclarations ici, voyons-les au fur et à mesure :

- Tout d'abord, on applique une couleur d'arrière-plan et pour le texte avec [`background-color`](/fr/docs/Web/CSS/background-color) et [`color`](/fr/docs/Web/CSS/color).
- Ensuite, on définit une largeur ([`width`](/fr/docs/Web/CSS/width)) fixe sur le panneau et on définit la hauteur ([`height`](/fr/docs/Web/CSS/height)) afin que celle-ci occupe la hauteur de toute la zone d'affichage.
- On ajoute également du remplissage ([`padding`](/fr/docs/Web/CSS/padding)) horizontal pour espacer légèrement.
- Ensuite, on utilise [`position`](/fr/docs/Web/CSS/position)`: fixed;` sur le panneau afin qu'il apparaisse toujours à la même place, même s'il y a du contenu à faire défiler sur la page. On le colle en haut ([`top`](/fr/docs/Web/CSS/top)) de la zone d'affichage et on le positionne afin que, par défaut, il soit situé à droite ([`right`](/fr/docs/Web/CSS/right)) et en dehors de l'écran.
- Enfin, on applique une [`transition`](/fr/docs/Web/CSS/transition) sur l'élément. Les transitions permettent de réaliser des changements d'état de façon progressive plutôt que d'avoir un passage abrupt entre « actif » et « inactif ». Ici, on veut que le panneau glisse progressivement pour apparaître à l'écran quand la case à cocher est cochée. Autrement dit, quand on clique sur l'icône du point d'interrogation (cela déclenche la bidouille qui coche la case), on veut que le panneau transitionne délicatement pour apparaître à l'écran.

### Définir l'état coché

Voici le dernier fragment de CSS à ajouter, là encore à la fin :

```css
input[type=checkbox]:checked + aside {
  right: 0px;
}
```

Le sélecteur utilisé ici est plutôt complexe : on sélectionne l'élément `<aside>` adjacent à l'élément `<input>`, uniquement lorsque ce dernier est coché (grâce à la pseudo-classe [`:checked`](/fr/docs/Web/CSS/:checked)). Lorsque c'est le cas, on définit la propriété [`right`](/fr/docs/Web/CSS/right) de l'élément `<aside>` à `0px`, ce qui fait que le panneau apparaît à l'écran (progressivement grâce à la transition). Cliquer sur le libellé à nouveau permettra de décocher la case et de masquer le panneau à nouveau.

Et voilà, une astuce sans JavaScript pour créer un interrupteur. Cela fonctionnera à partir de IE9 (les transitions fonctionneront à partir de IE10). Ce n'est pas totalement idéal : les éléments de formulaire n'ont pas été conçus pour ça ; l'accessibilité n'est pas au rendez-vous non plus : le libellé ne peut pas recevoir le focus par défaut et on utilise des éléments de formulaire de façon non sémantique, ce qui pourrait causer des problèmes avec les lecteurs d'écran. Pour affiner cela, utiliser du JavaScript avec un lien ou un bouton serait sans doute plus approprié. Quoi qu'il en soit, cela permet d'avoir un exemple fonctionnel avec quelques astuces pour expérimenter.

## Résumé

Et voici pour notre étude sur le positionnement. Vous devriez désormais avoir une idée des mécanismes de base et une compréhension nécessaire pour appliquer ces notions afin de construire des interfaces utilisateurs. Pas d'inquiétude si vous n'avez pas tout compris immédiatement, le positionnement est un sujet plutôt avancé et il est toujours possible de revenir sur ces articles afin d'aider à la compréhension par la suite. Le prochain sujet que nous aborderons portera sur les boîtes flexibles, aussi appelées <i lang="en">flexbox</i>.

## Dans ce module

- [Introduction aux dispositions CSS](/fr/docs/Learn/CSS/CSS_layout/Introduction)
- [Flux normal](/fr/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Boîtes flexibles (flexbox)](/fr/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grilles CSS](/fr/docs/Learn/CSS/CSS_layout/Grids)
- [Flottements](/fr/docs/Learn/CSS/CSS_layout/Floats)
- [Positionnement](/fr/docs/Learn/CSS/CSS_layout/Positioning)
- [Disposition à plusieurs colonnes](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Conception adaptative (<i lang="en">responsive design</i>)](/fr/docs/Learn/CSS/CSS_layout/Responsive_Design)

  <i lang="en">responsive design</i>

  [Conception adaptative (<i lang="en">responsive design</i>)](/fr/docs/Learn/CSS/CSS_layout/Responsive_Design)

- [Guide sur les requêtes de média (<i lang="en">media queries</i>)](/fr/docs/Learn/CSS/CSS_layout/Media_queries)

  <i lang="en">media queries</i>

  [Guide sur les requêtes de média (<i lang="en">media queries</i>)](/fr/docs/Learn/CSS/CSS_layout/Media_queries)

- [Méthodes de disposition historiques](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Prendre en charge les anciens navigateurs](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Évaluation pour la compréhension des fondamentaux des dispositions CSS](/fr/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
