---
title: Comment construire des widgets de formulaires personnalisés
slug: Learn/Forms/How_to_build_custom_form_controls
---

{{LearnSidebar}}

Dans de nombreux cas les [widgets de formulaires HTML disponibles](/fr/docs/Learn/Forms/Les_blocs_de_formulaires_natifs) ne suffisent pas. Si vous voulez composer certains widgets dans un [style avancé](/fr/docs/Learn/Forms/Advanced_styling_for_HTML_forms) tels que l'élément {{HTMLElement("select")}} ou si vous voulez leur donner des comportements personnalisés, vous n'avez pas d'autre choix que de créer vos propres widgets.

Dans cet article, nous verrons comment construire un tel widget. Pour cela, nous allons travailler avec un exemple : reconstruire l'élément {{HTMLElement("select")}}.

> **Note :** Nous nous resterons centrés sur la construction des widgets, et non sur la façon de rendre le code générique et réutilisable ; cela impliquerait une manipulation de code JavaScript et de DOM dans un contexte inconnu, et nous sortirions de la portée de cet article.

## Conception, structure et sémantique

Avant de créer un widget personnalisé, il faut commencer par déterminer exactement ce que vous voulez. Vous gagnerez ainsi un temps précieux. En particulier, il est important de définir clairement tous les états de votre widget. Pour ce faire, il est bon de commencer par un widget existant dont les états et le comportement sont bien connus, afin que vous puissiez simplement les imiter autant que possible.

Dans notre exemple, nous allons reconstruire l'élément {{HTMLElement("select")}}}. Voici le résultat que nous voulons atteindre :

![The three states of a select box](custom-select.png)

Cette capture d'écran montre les trois états principaux du widget : l'état normal (à gauche), l'état actif (au milieu) et l'état ouvert (à droite).

En termes de comportement, nous voulons que notre widget soit utilisable aussi bien avec une souris qu'avec un clavier, comme n'importe quel widget natif. Commençons par définir comment le widget atteint chaque état :

Le widget est dans son état normal :

- la page se charge
- le widget était actif et l'utilisateur a cliqué quelque part en dehors du widget
- le widget était actif et l'utilisateur a déplacé le focus sur un autre avec le clavier

> **Note :** Déplacer le focus dans la page entre les divers widgets se fait généralement en appuyant sur la touche de tabulation, mais ce n'est pas la norme partout. Par exemple, circuler parmi les liens sur une page se fait dans Safari par défaut en utilisant la [combinaison Option+Tab](http://www.456bereastreet.com/archive/200906/enabling_keyboard_navigation_in_mac_os_x_web_browsers/).

Le widget est sans son état actif&nbsp;:

- l'utilisateur clique sur lui
- l'utilisateur presse la touche Tabulation et obtient le focus
- le widget était dans l'état ouvert et l'utilisateur a cliqué dessus.

Le widget est dans un état ouvert&nbsp;:

- le widget est dans un état autre que ouvert et l'utilisateur clique dessus.

Maintenant que nous savons comment changer les états du widget, il est important de définir comment changer la valeur du widget :

La valeur change quand&nbsp;:

- l'utilisateur clique sur une option quand le widget est dans l'état ouvert
- l'utilisateur presse la touche

  <kbd>↑</kbd>

  ou

  <kbd>↓</kbd>

  quand le widget est dans l'état actif

Enfin, définissons comment les options du widget doivent se comporter&nbsp;:

- Quand le widget est ouvert, l'option sélectionnée est mise en valeur
- Quand la souris est sur une option, l'option est mise en valeur et l'option précédemment mise en valeur revient à l'état normal

Pour les besoins de notre exemple, nous nous arrêterons là ; cependant, si vous êtes un lecteur attentif, vous remarquerez que certains comportements ne sont pas précisés. Par exemple, que pensez-vous qu'il se passe si l'utilisateur appuie sur la touche Tabulation alors que le widget est dans l'état ouvert ? La réponse est… rien. D'accord, le bon comportement semble évident mais le fait est que, comme il n'est pas défini dans nos spécifications, il est très facile de fermer les yeux sur ce comportement. Dans un travail collaboratif, lorsque les personnes concevant le comportement du widget sont différentes de celles qui le mettent en œuvre, cette démarche se vérifiera.

Autre exemple amusant : que se passera-t-il si l'utilisateur presse les touches <kbd>↑</kbd> ou <kbd>↓</kbd> alors que le widget est à l'état ouvert ? Ici, c'est un peu plus délicat. Si vous considérez que l'état actif et l'état ouvert sont totalement différents, la réponse est encore une fois «&nbsp;rien ne se produira&nbsp;» parce que nous n'avons pas défini d'interactions clavier pour l'état ouvert. D'autre part, si vous considérez que l'état actif et l'état ouvert coïncident, la valeur peut changer mais l'option ne sera certainement pas mise en valeur en conséquence, encore une fois parce que nous n'avons pas défini d'interactions clavier sur les options lorsque le widget est dans son état ouvert (nous avons seulement défini ce qui doit se passer lorsque le widget est ouvert, mais rien après).

Dans notre exemple, les spécifications manquantes sont évidentes et nous les traiterons, mais cela peut devenir un problème réel sur de nouveaux widgets exotiques, pour lesquels personne n'a la moindre idée de ce qu'est le bon comportement. Il est donc toujours bon de passer du temps à l'étape conception, car si vous définissez pauvrement le comportement, ou si vous oubliez de le définir, il sera très difficile de le redéfinir une fois les utilisateurs habitués. Si vous avez des doutes, demandez l'avis des autres, et si vous avez le budget pour cela, n'hésitez pas à [faire des tests utilisateur](https://fr.wikipedia.org/wiki/Test_utilisateur). Ce processus est appelé UX Design (**U**ser e**X**perience). Si vous voulez en savoir plus sur ce sujet, vous devriez consulter les ressources utiles suivantes :

- [UXMatters.com](http://www.uxmatters.com/)
- [UXDesign.com](http://uxdesign.com/)
- [The UX Design section of SmashingMagazine](http://uxdesign.smashingmagazine.com/)

> **Note :** De plus, dans la plupart des systèmes, il y a moyen d'ouvrir l'élément {{HTMLElement("select")}} pour voir tous les choix disponibles (c'est la même chose que de cliquer sur l'élément {{HTMLElement("select")}} avec une souris). Cela se fait avec <kbd>Alt</kbd>+**<kbd>↓</kbd>** sous Windows et n'a pas été implémenté dans notre exemple - mais il serait facile de le faire, car le mécanisme a déjà été implémenté pour l'événement `click`.

### Definition de la structure HTML et de la sémantique

Maintenant que la fonctionnalité de base du widget a été décidée, il est temps de commencer à construire notre widget. La première étape consiste à définir sa structure HTML et à lui donner une sémantique de base. Voici ce dont nous avons besoin pour reconstruire un élément \<select> :

```html
<!-- Ceci est notre conteneur principal pour le widget. L'attribut tabindex
     est ce qui permet à l'utilisateur de mettre le focus sur le widget.
     Nous verrons plus loin que c'est mieux de le faire avec JavaScript. -->
<div class="select" tabindex="0">
  <!-- Ce containeur sera utilisé pour afficher la valeur courante du widget -->
  <span class="value">Cerise</span>

  <!-- Ce conteneur contiendra toutes les options disponibles pour le widget.
       Comme c'est une liste, il y sens à utiliser l'élément ul. -->
  <ul class="optList">
    <!-- Chaque option ne contient que la valeur à afficher, Nous verrons plus loin
         comment gérer la valeur réelle qui sera envoyée avec les données du formulaire -->
    <li class="option">Cerise</li>
    <li class="option">Citron</li>
    <li class="option">Banane</li>
    <li class="option">Fraise</li>
    <li class="option">Pomme</li>
  </ul>
</div>
```

Notez l'utilisation de noms de classes qui identifient chaque partie pertinente indépendamment des éléments HTML sous-jacents utilisés. Ceci est important pour s'assurer que nous n'allons pas lier les CSS et JavaScript à une structure HTML forte, pour pouvoir faire des changements d'implémentation plus tard sans casser le code qui utilise le widget. Par exemple, si vous souhaitez implémenter l'équivalent de l'élément {{HTMLElement("optgroup")}}.

### Composition et ressenti avec les CSS

Maintenant que nous avons une structure, nous pouvons commencer à concevoir notre widget. Le but de construire un widget personnalisé est de pouvoir lui donner exactement le style que nous voulons. Pour cela, nous allons partager le travail sur les CSS en deux parties : la première relative aux règles des CSS absolument nécessaires pour que notre widget se comporte comme un élément {{HTMLElement("select")}}, la seconde constituée des décorations utilisés lui donnant un aspect personnalisé.

#### Styles obligatoires

Les styles obligatoires sont ceux nécessaires à la gestion des trois états du widget.

```css
.select {
  /* Celui-ci crée un contexte de positionnement pour la liste des options */
  position: relative;

  /* Celui-ci fait que le widget devient partie du flot textuel
     et devient en même temps dimensionnable */
  display: inline-block;
}
```

Nous avons besoin d'une classe `active` supplémentaire pour définir l'apparence du widget dans son état actif. Comme le widget peut recevoir le focus, nous doublons ce style personnalisé avec la pseudo-classe {{cssxref(":focus")}} afin d'être sûrs qu'elles se comporteront de la même manière.

```css
.select.active,
.select:focus {
  outline: none;

  /* Cette propriété box-shadow n'est pas requise à proprement parler, mais il est
     important de s'assurer que l'état actif soit visible, c'est pourquoi nous
     utilisons une valeur par défaut. Vous êtes libre de la modifier. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Passons maintenant à la liste des options :

```css
/* Le sélecteur .select ici est du sucre syntaxique (le fait de donner au
   programmeur des possibilités d'écriture plus succinctes ou plus proches
   d'une notation usuelle) pour s'assurer que les classes que nous définissons
   sont les seules à l'intérieur du widget. */
.select .optList {
  /* Ceci assure que la liste des options sera affichée au dessous de la valeur
     et en dehors du flot HTML */
  position: absolute;
  top: 100%;
  left: 0;
}
```

Nous avons besoin d'une classe supplémentaire pour gérer la liste d'options cachée. Ceci est nécessaire pour la gestion des différences entre état actif et état ouvert qui ne correspondent pas exactement.

```css
.select .optList.hidden {
  /* Ceci est un moyen simple pour cacher la liste tout en conservant l'accessibilité,
     nous reparlerons plus loin d'accessibilité */
  max-height: 0;
  visibility: hidden;
}
```

#### Embellissements

Maintenant que nous avons mis en place les fonctionnalités de base, le divertissement peut commencer. Ce qui suit n'est qu'un exemple de ce qui est possible, et correspondra à la capture d'écran au début de cet article. Cependant, vous devriez vous sentir libre d'expérimenter et de voir ce que cela donne.

```css
.select {
  /* Les calculs sont faits en supposant que 1em==16px qui est la valeur
     par défaut dans la majorité des navigateurs. */
  font-size: 0.625em; /* ceci (10px) est le nouveau contexte de taille de
     police pour la valeur em dans ce contexte. */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  /* Nous avons besoin de plus d'espace pour la flèche vers le bas que nous
     allons ajouter. */
  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  /* La première déclaration concerne les navigateurs qui ne prennent pas en
     charge les gradients linéaires. La deuxième déclaration est parce que
     les navigateurs basés sur WebKit ne l'ont pas encore préfixé. Si vous
     souhaitez prendre en charge les anciens navigateurs, essayez
     http://www.colorzilla.com/gradient-editor/ */
  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  /* Comme la valeur peut être plus large que le widget, nous devons nous
     assurer qu'elle ne changera pas la largeur du widget. */
  display: inline-block;
  width: 100%;
  overflow: hidden;

  /* Et si le contenu déborde, c'est mieux d'avoir une jolie abreviation. */
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}
```

Nous n'avons pas besoin d'un élément supplémentaire pour concevoir la flèche vers le bas ; à la place, nous utilisons le pseudo-élément {{cssxref(":after:after")}}. Cependant, elle pourrait également être mise en œuvre à l'aide d'une simple image de fond sur la classe `select`.

```css
.select:after {
  content: "▼"; /* Nous utilisons le caractère unicode U+25BC;
                    voir http://www.utf8-chartable.de */
  position: absolute;
  z-index: 1; /* Il est important d'empêcher la flèche de chevaucher la liste des options */
  top: 0;
  right: 0;

  box-sizing: border-box;

  height: 100%;
  width: 2em; /* 20px */
  padding-top: 0.1em; /* 1px */

  border-left: 0.2em solid #000; /* 2px */
  border-radius: 0 0.1em 0.1em 0; /* 0 1px 1px 0 */

  background-color: #000;
  color: #fff;
  text-align: center;
}
```

Maintenant, composons la décoration de la liste des options :

```css
.select .optList {
  z-index: 2; /* Nous disons explicitement que la liste des options doit toujours passer sur la flèche */

  /* cela réinitialiser le style par défaut de l'élément ul */
  list-style: none;
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  /* Cela nous assure que même si les valeurs sont plus petites que le widget,
     la liste des options sera aussi large que le widget lui‑même */
  min-width: 100%;

  /* Dans le cas où la liste est trop longue, son contenu débordera verticalement
     (ce qui ajoutera une barre de déroulement automatiquement) mais jamais horizontalement
     (car nous n'avons jamais défini de largeur, la liste ajustera automatiquement sa largeur
     Si ce n'est pas possible, le contenu sera tronqué) */
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;

  border: 0.2em solid #000; /* 2px */
  border-top-width: 0.1em; /* 1px */
  border-radius: 0 0 0.4em 0.4em; /* 0 0 4px 4px */

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4); /* 0 2px 4px */
  background: #f0f0f0;
}
```

Pour les options, nous devons ajouter une classe `highlight` pour pouvoir identifier la valeur que l'utilisateur choisira (ou a choisi).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

Donc, voici le résultat avec les trois états ([consultez le code source ici](/fr/docs/Learn/Forms/How_to_build_custom_form_controls/Example_1)):

#### État initial

```html hidden
<div class="select">
  <span class="value">Cerise</span>
  <ul class="optList hidden">
    <li class="option">Cerise</li>
    <li class="option">Citron</li>
    <li class="option">Banane</li>
    <li class="option">Fraise</li>
    <li class="option">Pomme</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

{{EmbedLiveSample("État_initial",120,130)}}

#### État actif

```html hidden
<div class="select active">
  <span class="value">Cerise</span>
  <ul class="optList hidden">
    <li class="option">Cerise</li>
    <li class="option">Citron</li>
    <li class="option">Banane</li>
    <li class="option">Fraise</li>
    <li class="option">Pomme</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

{{EmbedLiveSample("État_actif",120,130)}}

#### État ouvert

```html hidden
<div class="select active">
  <span class="value">Cerise</span>
  <ul class="optList">
    <li class="option highlight">Cerise</li>
    <li class="option">Citron</li>
    <li class="option">Banane</li>
    <li class="option">Fraise</li>
    <li class="option">Pomme</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #fff;
}
```

{{EmbedLiveSample("État_ouvert",120,130)}}

## Donnez vie à votre widget avec JavaScript

Maintenant que le design et la structure sont prêts, nous pouvons écrire le code JAvaScript pour que le widget fonctionne vraiment.

> **Attention :** Le code qui suit a été conçu à des fins éducatives et ne doit pas être utilisé tel quel. Entre autres choses, comme nous le verrons, il n'est pas à l'épreuve du temps et ne fonctionnera pas sur des navigateurs historiques. Il comporte également des parties redondantes. Elles devraient être optimisées pour du code de production.

> **Note :** Créer des widgets réutilisables peut se révéler un peu délicat. L'ébauche de la norme « [W3C Web Component](http://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html) » apporte des réponses à cette question particulière. Le [projet X-Tag](http://x-tags.org/) est un essai de mise en œuvre de cette spécification ; nous vous encourageons à y jeter un coup d'œil.

### Pourquoi ne fonctionne-t-il pas ?

Avant de commencer, il est important de se rappeler quelque chose de très important à propos de JavaScript : dans un navigateur, c'est une technique peu fiable. Lorsque vous créez des widgets personnalisés, vous êtes obligé de faire appel à JavaScript parce que c'est un fil nécessaire pour tout lier ensemble. Cependant, il existe de nombreux cas dans lesquels JavaScript n'est pas capable de s'exécuter dans le navigateur :

- L'utilisateur a désactivé le JavaScript : c'est un cas assez inhabituel, peu de personnes désactivent le JavaScript de nos jours.
- Le script ne se charge pas. La chose est très courante, en particulier dans le domaine des mobiles pour lesquels le réseau n'est pas sûr.
- Le script est bogué. Il faut toujours prendre en considération cette éventualité.
- Le script est en conflit avec un autre script tierce‑partie. Cela peut se produire avec des suites de scripts ou n'importe quel marque page utilisé par l'utilisateur.
- Le script est en conflit avec, ou est affecté par un extension de navigateur (comme l'extension « [No script](https://addons.mozilla.org/fr/firefox/addon/noscript/) » de Firefox ou « [Scripts »](https://chrome.google.com/webstore/detail/notscripts/odjhifogjcknibkahlpidmdajjpkkcfn) de Chrome).
- L'utilisateur utilise un navigateur ancien et l'une des fonctions dont vous avez besoin n'est pas prise en charge. Cela se produira fréquemment lorsque vous utiliserez des API de pointe.s.

En raison de ces aléas, il est vraiment important de considérer avec sérieux ce qui se passe si JavaScript ne fonctionne pas. Traiter en détail cette question est hors de la portée de cet article parce qu'elle est étroitement liée à la façon dont vous voulez rendre votre script générique et réutilisable, mais nous prendrons en considération les bases de ce sujet dans notre exemple.

Ainsi, si notre code JavaScript ne s'exécute pas, nous reviendrons à l'affichage d'un élément {{HTMLElement("select")}} standard. Pour y parvenir, nous avons besoin de deux choses.

Tout d'abord, nous devons ajouter un élément {{HTMLElement("select")}} régulier avant chaque utilisation de notre widget personnalisé. Ceci est également nécessaire pour pouvoir envoyer les données de notre widget personnalisé avec le reste de nos données du formulaire ; nous reviendrons sur ce point plus tard.

```html
<body class="no-widget">
  <form>
    <select name="myFruit">
      <option>Cerise</option>
      <option>Citron</option>
      <option>Banane</option>
      <option>Fraise</option>
      <option>Pomme</option>
    </select>

    <div class="select">
      <span class="value">Cerise</span>
      <ul class="optList hidden">
        <li class="option">Cerise</li>
        <li class="option">Citron</li>
        <li class="option">Banane</li>
        <li class="option">Fraise</li>
        <li class="option">Pomme</li>
      </ul>
    </div>
  </form>
</body>
```

Deuxièmement, nous avons besoin de deux nouvelles classes pour nous permettre de cacher l'élément qui ne sert pas (c'est-à-dire l'élément{{HTMLElement("select")}} « réel » si notre script ne fonctionne pas, ou le widget personnalisé s'il fonctionne). Notez que par défaut, le code HTML cache le widget personnalisé.

```css
.widget select,
.no-widget .select {
  /* Ce sélecteur CSS dit fondamentalement :
     - soit la classe body est "widget" et donc l'élément {{HTMLElement("select")}} réel sera caché
     - soit la classe body n'a pas changé, elle est toujours "no-widget",
       et donc les éléments, dont la classe est « select », doivent être cachés */
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

Maintenant nous avons juste besoin d'un commutateur JavaScript pour déterminer si le script est en cours d'exécution ou non. Cette bascule est très simple : si au moment du chargement de la page notre script est en cours d'exécution, il supprime la classe no-widget et ajoute la classe widget, échangeant ainsi la visibilité de l'élément {{HTMLElement("select")}} et du widget personnalisé.

```js
window.addEventListener("load", function () {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});
```

#### Sans JS

Consultez le [code source complet ici](/fr/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#sans_js).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cerise</option>
    <option>Citron</option>
    <option>Banane</option>
    <option>Fraise</option>
    <option>Pomme</option>
  </select>

  <div class="select">
    <span class="value">Cerise</span>
    <ul class="optList hidden">
      <li class="option">Cerise</li>
      <li class="option">Citron</li>
      <li class="option">Banane</li>
      <li class="option">Fraise</li>
      <li class="option">Pomme</li>
    </ul>
  </div>
  <form></form>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

{{EmbedLiveSample("Sans_JS", 120, 130)}}

#### Avec JS

Consultez le [code source complet ici](/fr/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#avec_js).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cerise</option>
    <option>Citron</option>
    <option>Banane</option>
    <option>Fraise</option>
    <option>Pomme</option>
  </select>

  <div class="select">
    <span class="value">Cerise</span>
    <ul class="optList hidden">
      <li class="option">Cerise</li>
      <li class="option">Citron</li>
      <li class="option">Banane</li>
      <li class="option">Fraise</li>
      <li class="option">Pomme</li>
    </ul>
  </div>
  <form></form>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

/* --------------- */
/* Styles requis   */
/* --------------- */

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

/* ------------ */
/* Styles décor */
/* ------------ */

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: -webkit-linear-gradient(90deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
window.addEventListener("load", function () {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});
```

{{EmbedLiveSample("Avec_JS", 120, 130)}}

> **Note :** Si vous voulez vraiment rendre votre code générique et réutilisable, au lieu de faire un changement de classe, il est préférable d'ajouter la classe widget pour cacher les éléments {{HTMLElement("select")}} et d'ajouter dynamiquement l'arbre DOM représentant le widget personnalisé après chaque élément {{HTMLElement("select")}} dans la page.

### Rendre le travail plus facile

Dans le code que nous sommes sur le point de construire, nous utiliserons l'API standard DOM pour faire tout le travail dont nous avons besoin. Cependant, bien que la prise en charge de l'API DOM se soit améliorée dans les navigateurs, il y a toujours des problèmes avec les anciens navigateurs (surtout avec le bon vieux navigateur Internet Explorer).

Si vous voulez éviter les problèmes avec les navigateurs anciens, il y a deux façons de le faire : en utilisant un framework dédié tel que jQuery, $dom, prototype, Dojo, YUI ou similaire, ou bien en remplissant la fonctionnalité manquante que vous voulez utiliser (ce qui peut facilement être fait par un chargement conditionnel, avec la bibliothèque yepnope par exemple).

Les fonctionnalités que nous prévoyons d'utiliser sont les suivantes (classées de la plus risquée à la plus sûre) :

1. {{domxref("element.classList","classList")}}
2. {{domxref("EventTarget.addEventListener","addEventListener")}}
3. {{domxref("NodeList.forEach()")}}
4. {{domxref("element.querySelector","querySelector")}} et {{domxref("element.querySelectorAll","querySelectorAll")}}

### Construction des fonctions de rappel d'événements

Les fondations sont prêtes, nous pouvons maintenant commencer à définir toutes les fonctions à utiliser chaque fois que l'utilisateur interagit avec notre widget.

```js
// Cette fonction est utilisée chaque fois que nous voulons désactiver un
// widget personnalisé. Elle prend un paramètre
// select : le nœud DOM avec la classe select à désactiver
function deactivateSelect(select) {
  // Si le widget n'est pas actif, il n'y a rien à faire
  if (!select.classList.contains("active")) return;

  // Nous devons obtenir la liste des options pour le widget personnalisé
  const optList = select.querySelector(".optList");

  // Nous cachons la liste des options
  optList.classList.add("hidden");

  // et nous désactivons le widget personnalisé lui-même
  select.classList.remove("active");
}

// Cette fonction sera utilisée chaque fois que l'utilisateur veut (des)activer le widget
// Elle prend deux paramètres :
// select : le nœud DOM de la classe `select` à activer
// selectList : la liste de tous les nœuds DOM de la classe `select`
function activeSelect(select, selectList) {
  // Si le widget est déjà actif il n'y a rien à faire
  if (select.classList.contains("active")) return;

  // Nous devons désactiver tous les widgets personnalisés
  // comme la fonction deactivateSelect remplit toutes les fonctionnalités de la
  // fonction de rappel forEach, nous l'utilisons directement sans utiliser
  // une fonction anonyme intermédiaire.
  selectList.forEach(deactivateSelect);

  // Et nous activons l'état du widget donné
  select.classList.add("active");
}

// Cette fonction sera utilisée chaque fois que l'utilisateur veut enrouler/dérouler la
// liste des options
// Elle prend un paramètre :
// select : le nœud DOM de la liste à basculer
function toggleOptList(select) {
  // La liste est prise à partir du widget
  const optList = select.querySelector(".optList");

  // Nous changeons la classe de la liste pour l'enrouler/dérouler
  optList.classList.toggle("hidden");
}

// Cett fonction sera utilisée chaque fois qu'il faut mettre en surbrillance
// une option. Elle prend deux paramètres :
// select : le nœud DOM de la classe `select`
//          contenant l'option à mettre en surbrillance
// option : le nœud DOM de la classe `option` à mettre en surbrillance
function highlightOption(select, option) {
  // Obtenir la liste de toutes les options disponibles pour l'élémént sélectionné
  const optionList = select.querySelectorAll(".option");

  // Supprimer la surbrillance pour toutes les options
  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  // Mettre en surbrillance l'option correcte
  option.classList.add("highlight");
}
```

C'est tout ce dont on a besoin pour gérer les différents états du widget personnalisé.

Ensuite, nous assujettissons ces fonctions aux événement appropriés :

```js
// Nous lions le widget aux événements dès le chargement du document
window.addEventListener("load", function () {
  const selectList = document.querySelectorAll(".select");

  // Chaque widget personnalisé doit être initialisé
  selectList.forEach((select) => {
    // de même que tous les éléments `option`
    const optionList = select.querySelectorAll(".option");

    // Chaque fois que l'utilisateur passe le pointeur de souris
    // sur une option, nous mettons en surbrillance la dite option

    optionList.forEach((option) => {
      option.addEventListener("mouseover", function () {
        // Note : les variables `select` et `option` sont des "closures"
        // disponibles dans la portée de notre appel de fonction.
        highlightOption(select, option);
      });
    });

    // Chaque fois que l'utilisateur clique sur un élément personnalisé
    select.addEventListener("click", function (event) {
      // Note : la variable `select` est une "closure"
      // available dans la portée de notre appel de fonction.

      // Nous basculons la visibilité de la liste des options
      toggleOptList(select);
    });

    // Dans le cas où le widget obtient le focus
    // Le widget obtient le focus chaque fois que l'utilisateur clique dessus
    // ou presse la touche Tab pour avoir accès au widget
    select.addEventListener("focus", function (event) {
      // Note : les variable `select` et `selectList` sont des "closures"
      // disponibles dans la portée de notre appel de fonction.

      // Nous activons le widget
      activeSelect(select, selectList);
    });

    // Dans le cas où le widget perd le focus
    select.addEventListener("blur", function (event) {
      // Note : la variable `select` est une "closure"
      // disponible dans la portée de notre appel de fonction.

      // Nous désactivons le widget
      deactivateSelect(select);
    });

    // Relâcher le focus si la personne utilise la touche Echap
    select.addEventListener("keyup", (event) => {
      // Désactivation sur appui sur Echap
      if (event.key === "Escape") {
        deactivateSelect(select);
      }
    });
  });
});
```

A ce stade, notre widget change d'état comme nous l'avons conçu, mais sa valeur n'est pas encore mise à jour. On s'en occupera après.

#### Exemple en direct

Consultez le [code source complet ici](/fr/docs/Learn/Forms/How_to_build_custom_form_controls/Example_3).

```html hidden
<form class="no-widget">
  <select name="myFruit" tabindex="-1">
    <option>Cerise</option>
    <option>Citron</option>
    <option>Banane</option>
    <option>Fraise</option>
    <option>Pomme</option>
  </select>

  <div class="select" tabindex="0">
    <span class="value">Cerise</span>
    <ul class="optList hidden">
      <li class="option">Cerise</li>
      <li class="option">Citron</li>
      <li class="option">Banane</li>
      <li class="option">Fraise</li>
      <li class="option">Pomme</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

/* --------------- */
/* Styles Requis   */
/* --------------- */

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

/* ------------ */
/* Style chic */
/* ------------ */

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

// ------------------- //
// Lien aux événements //
// ------------------- //

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");

    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });
    });

    select.addEventListener(
      "click",
      (event) => {
        toggleOptList(select);
      },
      false,
    );

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });

    select.addEventListener("keyup", (event) => {
      if (event.keyCode === 27) {
        deactivateSelect(select);
      }
    });
  });
});
```

{{EmbedLiveSample("Exemple_en_direct",120,130)}}

### Gérer la valeur du widget

Maintenant que notre widget fonctionne, nous devons ajouter du code pour mettre à jour la valeur en fonction des entrées utilisateur et envoyer cette valeur avec les données du formulaire.

La façon la plus simple de le faire est d'utiliser un widget natif sous‑jacent. Un tel widget gardera une trace de la valeur avec tous les contrôles intégrés fournis par le navigateur, et la valeur sera envoyée comme d'habitude lorsque le formulaire sera soumis. Il ne sert à rien de réinventer la roue alors que tout cela peut être fait pour nous.

Comme nous l'avons vu précédemment, nous utilisons déjà un widget de sélection natif comme solution de repli pour des raisons d'accessibilité ; nous pouvons simplement synchroniser sa valeur avec celle de notre widget personnalisé :

```js
// Cette fonction met à jour la valeur affichée et la synchronise avec celle
// du widget natif. Elle prend deux paramètres :
// select : le nœud DOM de la classe `select` contenant la valuer à mettre à jour
// index : l'index de la valeur choisie
function updateValue(select, index) {
  // Nous devons obtenir le widget natif correspondant au widget personnalisé
  // Dans notre exemple, le widget natif est un parent du widget personnalisé
  const nativeWidget = select.previousElementSibling;

  // Nou devons aussi obtenir la valeur de remplacement du widget personnalisé
  const value = select.querySelector(".value");

  // Et nous avons besoin de toute la liste des options
  const optionList = select.querySelectorAll(".option");

  // Nous définissons l'index choisi à l'index du choix
  nativeWidget.selectedIndex = index;

  // Nous mettons à jour la valeur de remplacement en accord
  value.innerHTML = optionList[index].innerHTML;

  // Et nous mettons en surbrillance l'option correspondante du widget personnalisé
  highlightOption(select, optionList[index]);
}

// Cette fonction renvoie l'index courant dans le widget natif
// Elle prend un paramètre :
// select : le nœud DOM avec la classe `select` relative au widget natif
function getIndex(select) {
  // Nous avons besoin d'avoir accès au widget natif pour le widget personnalisé
  // Dans notre exemple, le widget natif est un parent du widget personnalisé
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}
```

Avec ces deux fonctions, nous pouvons lier les widgets natifs avec les personnalisés :

```js
// Nous lions le widget aux événements dès le chargement du document
window.addEventListener("load", function () {
  const selectList = document.querySelectorAll(".select");

  // Chaque widget personnalisé doit être initialisé
  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    // Nous rendons le widget personnalisé capable d'avoir le focus
    select.tabIndex = 0;

    // Nous faisons en sorte que le widget natif ne puisse plus avoir le focus
    select.previousElementSibling.tabIndex = -1;

    // Nous nous assurons que la valeur sélectionnée par défaut est bien affichée
    updateValue(select, selectedIndex);

    // Chaque fois que l'utilisateur clique sur une option, nous mettons à
    // jour la valeur en accord
    optionList.forEach((option, index) => {
      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    // Chaque fois que l'utilisateur utilise le clavier sur un widget
    // avec focus, les valeurs sont mises à jour en accord

    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      // Lorsque l'utilisateur utilise la touche Echap
      // le contrôle est désactivé
      if (event.key === "Escape") {
        deactivateSelect(select);
      }

      // Quand l'utilisateur presse la flèche bas, nous allons à l'option suivante
      if (event.key === "ArrowDown" && index < optionList.length - 1) {
        index++;
      }

      // Quand l'utilisateur presse la flèche haut, nous sautons à l'option suivante
      if (event.key === "ArrowUp" && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

Dans le code ci-dessus, il faut noter l'utilisation de la propriété [`tabIndex`](/fr/docs/Web/API/HTMLElement/tabIndex). Utiliser cette propriété est nécessaire pour être sûr que le widget natif n'obtiendra jamais le focus et que le widget personnalisé l'obtiendra quand l'utilisateur utilise le clavier ou la souris.

Et voilà, nous avons terminé ! Voici le résultat ([consultez le code source ici](/fr/docs/Learn/Forms/How_to_build_custom_form_controls/Example_4)) :

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cerise</option>
    <option>Citron</option>
    <option>Banane</option>
    <option>Fraise</option>
    <option>Pomme</option>
  </select>

  <div class="select">
    <span class="value">Cerise</span>
    <ul class="optList hidden">
      <li class="option">Cerise</li>
      <li class="option">Citron</li>
      <li class="option">Banane</li>
      <li class="option">Fraise</li>
      <li class="option">Pomme</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

/* --------------- */
/* Styles Requis   */
/* --------------- */

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

/* ------------ */
/* Styles chic */
/* ------------ */

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
// ------------------------- //
// Définitions des fonctions //
// ------------------------- //

function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

// -------------------- //
// Liens aux événements //
// -------------------- //

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");

    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });
    });

    select.addEventListener("click", (event) => {
      toggleOptList(select);
    });

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });
  });
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    select.tabIndex = 0;
    select.previousElementSibling.tabIndex = -1;

    updateValue(select, selectedIndex);

    optionList.forEach((option, index) => {
      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      if (event.key === "Escape") {
        deactivateSelect(select);
      }
      if (event.key === "ArrowDown" && index < optionList.length - 1) {
        index++;
      }
      if (event.key === "ArrowUp" && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

{{EmbedLiveSample("Gérer_la_valeur_du_widget",120,130)}}

Mais attendez, avons‑nous vraiment terminé ?

## Le rendre « accessible »

Nous venons de faire quelque chose qui fonctionne, même si nous sommes loin d'avoir une boîte de sélection avec toutes les fonctionnalités, elle fonctionne parfaitement. Mais ce que nous avons fait n'est rien de plus que de jouer avec les DOM. Elle n'a pas de sémantique réelle, et même si elle ressemble à une boîte de sélection, du point de vue du navigateur, ce n'en est pas une, de sorte que les technologies d'assistance ne pourront pas comprendre que c'est une boîte de sélection. Bref, cette jolie nouvelle boîte de sélection n'est pas accessible !

Heureusement, il existe une solution et elle s'appelle [ARIA](/fr/docs/Accessibility/ARIA). ARIA signifie « Accessible Rich Internet Application » et c'est une [norme W3C](http://www.w3.org/TR/wai-aria/) spécialement conçue pour ce que nous faisons ici : rendre accessibles les applications web et les widgets personnalisés. Il s'agit essentiellement d'un ensemble d'attributs qui étendent le HTML afin que nous puissions mieux décrire les rôles, les états et les propriétés comme si l'élément que nous venons de concevoir était l'élément natif pour lequel il essaie de passer. L'utilisation de ces attributs est très simple, alors faisons-le.

### L'attribut `role`

L'attribut clé utilisé par [ARIA](/fr/docs/Accessibility/ARIA) est l'attribut [`role`](/fr/docs/Accessibility/ARIA/ARIA_Techniques). L'attribut [`role`](/fr/docs/Accessibility/ARIA/ARIA_Techniques) accepte une valeur qui définit à quoi sert un élément. Chaque rôle définit ses propres exigences et comportements. Dans notre exemple, nous utiliserons le rôle de [`listbox`](/fr/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role). C'est un « rôle composite », ce qui signifie que les éléments ayant ce rôle s'attendent à avoir des enfants, chacun avec un rôle spécifique (dans ce cas, au moins un enfant avec le rôle `option`).

Il faut aussi noter qu'ARIA définit les rôles appliqués par défaut aux balises HTML standard. Par exemple, l'élément {{HTMLElement("table")}} correspond au rôle `grid`, et l'élément {{HTMLElement("ul")}} correspond au rôle `list`. Comme nous utilisons un élément {{HTMLElement("ul")}}, nous voulons nous assurer que le rôle `listbox` de notre widget remplacera le rôle `list` de l'élément {{HTMLElement("ul")}}. À cette fin, nous utiliserons le rôle `presentation`. Ce rôle est conçu pour nous permettre d'indiquer qu'un élément n'a pas de signification particulière, et est utilisé uniquement pour présenter de l'information. Nous l'appliquerons à notre élément {{HTMLElement("ul")}}.

Pour prendre en charge le rôle `listbos`, nous n'avons qu'à mettre à jour notre HTML comme ceci :

```html
<!-- Nous ajoutons le role="listbox" en attribut de l'élément de tête -->
<div class="select" role="listbox">
  <span class="value">Cherry</span>
  <!-- Nous ajoutons aussi le role="presentation" à l'élément ul -->
  <ul class="optList" role="presentation">
    <!-- et le rôle="option" en attribut de tous les éléments li -->
    <li role="option" class="option">Cherry</li>
    <li role="option" class="option">Lemon</li>
    <li role="option" class="option">Banana</li>
    <li role="option" class="option">Strawberry</li>
    <li role="option" class="option">Apple</li>
  </ul>
</div>
```

> **Note :** Inclure à la fois l'attribut `role` et l'attribut `class` n'est nécessaire que si vous souhaitez prendre en charge les navigateurs anciens qui n'acceptent pas les [selecteurs d'attribut CSS](/fr/docs/CSS/Attribute_selectors).

### L'attribut `aria-selected`

Utiliser l'attribut `role` ne suffit pas. [ARIA](/fr/docs/Accessibility/ARIA) fournit également de nombreux états et attributs de propriété. Plus vous les utiliserez, mieux votre widget sera compris par les techniques d'assistance. Dans notre cas, nous limiterons notre utilisation à un seul attribut : `aria-selected`.

L'attribut `aria-selected` s'utilise pour marquer l'option actuellement sélectionnée ; ceci permet aux techniques d'assistance d'informer l'utilisateur quelle est la sélection en cours. Nous l'utiliserons dynamiquement avec JavaScript pour marquer l'option sélectionnée chaque fois que l'utilisateur en choisit une. Pour cela, nous devons réviser la fonction `updateValue()` :

```js
function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  // Nous nous assurons qu'aucune option n'est sélectionnée
  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  // Nous nous assurons que l'option choisie est sélectionnée
  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}
```

Voici le résultat final de toutes ces modifications (vous obtiendrez un meilleur ressenti en les testant avec une technique d'assistance comme [NVDA](http://www.nvda-project.org/) ou [VoiceOver](http://www.apple.com/accessibility/voiceover/)). Consultez le [code complet source ici](/fr/docs/Learn/Forms/How_to_build_custom_form_controls/Example_5) :

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cerise</option>
    <option>Citron</option>
    <option>Banane</option>
    <option>Fraise</option>
    <option>Pomme</option>
  </select>

  <div class="select" role="listbox">
    <span class="value">Cerise</span>
    <ul class="optList hidden" role="presentation">
      <li class="option" role="option" aria-selected="true">Cerise</li>
      <li class="option" role="option">Citron</li>
      <li class="option" role="option">Banane</li>
      <li class="option" role="option">Fraise</li>
      <li class="option" role="option">Pomme</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

/* --------------- */
/* Styles Requis   */
/* --------------- */

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

/* ------------ */
/* Styles Chic */
/* ------------ */

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
// ------------------------- //
// Définitions des fonctions //
// ------------------------- //
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

// -------------------- //
// Liens aux événements //
// -------------------- //

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    select.tabIndex = 0;
    select.previousElementSibling.tabIndex = -1;

    updateValue(select, selectedIndex);

    optionList.forEach((option, index) => {
      option.addEventListener("mouseover", function () {
        highlightOption(select, option);
      });

      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    select.addEventListener("click", (event) => {
      toggleOptList(select);
    });

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });

    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      if (event.keyCode === 27) {
        deactivateSelect(select);
      }
      if (event.keyCode === 40 && index < optionList.length - 1) {
        index++;
      }
      if (event.keyCode === 38 && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

{{EmbedLiveSample("Lattribut_aria-selected",120,130)}}

## Conclusion

Nous venons de voir les bases pour la construction d'un widget de formulaire personnalisé, mais comme vous avez pu le voir, ce n'est pas facile à faire, et il est souvent préférable et plus facile de s'appuyer sur des bibliothèques tierces au lieu de les coder vous-même (sauf, bien sûr, si vous souhaitez bâtir une telle bibliothèque).

Voici quelques bibliothèques à prendre en considération avant de coder les vôtres :

- [jQuery UI](http://jqueryui.com/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)
- [Nice Forms](http://www.emblematiq.com/lab/niceforms/)
- [et beaucoup d'autres…](https://www.google.fr/search?q=HTML+custom+form+controls&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:fr:official&client=firefox-a)

Si vous voulez aller plus loin, le code de cet exemple mérite quelques amélioration avant de devenir générique et réutilisable. C'est un exercice que vous pouvez essayer de faire. Deux conseils pour vous aider : le premier argument pour toutes nos fonctions est le même, ce qui signifie que ces fonctions ont besoin du même contexte. Il serait avisé de construire un objet pour partager ce contexte. En outre, vous devrez éprouver ses fonctionnalités, c'est-à-dire qu'il doit pouvoir fonctionner avec les divers navigateurs dont la compatibilité avec les normes Web qu'ils utilisent varie. Amusez-vous bien !
