---
title: Comment construire des widgets de formulaires personnalisés
slug: Learn/Forms/How_to_build_custom_form_controls
tags:
  - Avancé
  - Exemple
  - Formulaires
  - Guide
  - HTML
  - Web
translation_of: Learn/Forms/How_to_build_custom_form_controls
original_slug: >-
  Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés
---
<div>{{LearnSidebar}}{{PreviousMenuNext("Web/Guide/HTML/Formulaires/Validation_donnees_formulaire", "Web/Guide/HTML/Formulaires/Sending_forms_through_JavaScript", "Web/Guide/HTML/Formulaires")}}</div>

<p>Dans de nombreux cas les <a href="/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs">widgets de formulaires HTML disponibles</a> ne suffisent pas. Si vous voulez composer certains widgets dans un <a href="/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms">style avancé</a> tels que l'élément {{HTMLElement("select")}} ou si vous voulez leur donner des comportements personnalisés, vous n'avez pas d'autre choix que de créer vos propres widgets.</p>

<p>Dans cet article, nous verrons comment construire un tel widget. Pour cela, nous allons travailler avec un exemple : reconstruire l'élément {{HTMLElement("select")}}.</p>

<div class="note">
<p><strong>Note :</strong> Nous nous resterons centrés sur la construction des widgets, et non sur la façon de rendre le code générique et réutilisable ; cela impliquerait une manipulation de code JavaScript et de DOM dans un contexte inconnu, et nous sortirions de la portée de cet article.</p>
</div>

<h2 id="Conception_structure_et_sémantique">Conception, structure et sémantique</h2>

<p>Avant de créer un widget personnalisé, il faut commencer par déterminer exactement ce que vous voulez. Vous gagnerez ainsi un temps précieux. En particulier, il est important de définir clairement tous les états de votre widget. Pour ce faire, il est bon de commencer par un widget existant dont les états et le comportement sont bien connus, afin que vous puissiez simplement les imiter autant que possible.</p>

<p>Dans notre exemple, nous allons reconstruire l'élément {{HTMLElement("select")}}}. Voici le résultat que nous voulons atteindre :</p>

<p><img alt="The three states of a select box" src="custom-select.png"></p>

<p>Cette capture d'écran montre les trois états principaux du widget : l'état normal (à gauche), l'état actif (au milieu) et l'état ouvert (à droite).</p>

<p>En termes de comportement, nous voulons que notre widget soit utilisable aussi bien avec une souris qu'avec un clavier, comme n'importe quel widget natif. Commençons par définir comment le widget atteint chaque état :</p>

<p>Le widget est dans son état normal :</p>

 <ul>
  <li>la page se charge</li>
  <li>le widget était actif et l'utilisateur a cliqué quelque part en dehors du widget</li>
  <li>le widget était actif et l'utilisateur a déplacé le focus sur un autre avec le clavier</li>
 </ul>

 <div class="note">
 <p><strong>Note :</strong> Déplacer le focus dans la page entre les divers widgets se fait généralement en appuyant sur la touche de tabulation, mais ce n'est pas la norme partout. Par exemple, circuler parmi les liens sur une page se fait dans Safari par défaut en utilisant la <a href="http://www.456bereastreet.com/archive/200906/enabling_keyboard_navigation_in_mac_os_x_web_browsers/">combinaison Option+Tab</a>.</p>
 </div>

 <p>Le widget est sans son état actif :</p>
 
 <ul>
  <li>l'utilisateur clique sur lui</li>
  <li>l'utilisateur presse la touche Tabulation et obtient le focus</li>
  <li>le widget était dans l'état ouvert et l'utilisateur a cliqué dessus.</li>
 </ul>
 
 <p>Le widget est dans un état ouvert :</p>
 
 <ul>
  <li>le widget est dans un état autre que ouvert et l'utilisateur clique dessus.</li>
 </ul>

<p>Maintenant que nous savons comment changer les états du widget, il est important de définir comment changer la valeur du widget :</p>

 <p>La valeur change quand :</p>

 <ul>
  <li>l'utilisateur clique sur une option quand le widget est dans l'état ouvert</li>
  <li>l'utilisateur presse la touche <kbd>↑</kbd> ou <kbd>↓</kbd> quand le widget est dans l'état actif</li>
 </ul>

<p>Enfin, définissons comment les options du widget doivent se comporter :</p>

<ul>
 <li>Quand le widget est ouvert, l'option sélectionnée est mise en valeur</li>
 <li>Quand la souris est sur une option, l'option est mise en valeur et l'option précédemment mise en valeur revient à l'état normal</li>
</ul>

<p>Pour les besoins de notre exemple, nous nous arrêterons là ; cependant, si vous êtes un lecteur attentif, vous remarquerez que certains comportements ne sont pas précisés. Par exemple, que pensez-vous qu'il se passe si l'utilisateur appuie sur la touche Tabulation alors que le widget est dans l'état ouvert ? La réponse est… rien. D'accord, le bon comportement semble évident mais le fait est que, comme il n'est pas défini dans nos spécifications, il est très facile de fermer les yeux sur ce comportement. Dans un travail collaboratif, lorsque les personnes concevant le comportement du widget sont différentes de celles qui le mettent en œuvre, cette démarche se vérifiera.</p>

<p>Autre exemple amusant : que se passera-t-il si l'utilisateur presse les touches <kbd>↑</kbd> ou <kbd>↓</kbd> alors que le widget est à l'état ouvert ? Ici, c'est un peu plus délicat. Si vous considérez que l'état actif et l'état ouvert sont totalement différents, la réponse est encore une fois « rien ne se produira » parce que nous n'avons pas défini d'interactions clavier pour l'état ouvert. D'autre part, si vous considérez que l'état actif et l'état ouvert coïncident, la valeur peut changer mais l'option ne sera certainement pas mise en valeur en conséquence, encore une fois parce que nous n'avons pas défini d'interactions clavier sur les options lorsque le widget est dans son état ouvert (nous avons seulement défini ce qui doit se passer lorsque le widget est ouvert, mais rien après).</p>

<p>Dans notre exemple, les spécifications manquantes sont évidentes et nous les traiterons, mais cela peut devenir un problème réel sur de nouveaux widgets exotiques, pour lesquels personne n'a la moindre idée de ce qu'est le bon comportement. Il est donc toujours bon de passer du temps à l'étape conception, car si vous définissez pauvrement le comportement, ou si vous oubliez de le définir, il sera très difficile de le redéfinir une fois les utilisateurs habitués. Si vous avez des doutes, demandez l'avis des autres, et si vous avez le budget pour cela, n'hésitez pas à <a href="https://fr.wikipedia.org/wiki/Test_utilisateur">faire des tests utilisateur</a>. Ce processus est appelé UX Design (<strong>U</strong>ser e<strong>X</strong>perience). Si vous voulez en savoir plus sur ce sujet, vous devriez consulter les ressources utiles suivantes :</p>

<ul>
 <li><a href="http://www.uxmatters.com/" rel="external">UXMatters.com</a></li>
 <li><a href="http://uxdesign.com/" rel="external">UXDesign.com</a></li>
 <li><a href="http://uxdesign.smashingmagazine.com/" rel="external">The UX Design section of SmashingMagazine</a></li>
</ul>

<div class="note">
<p><strong>Note :</strong> De plus, dans la plupart des systèmes, il y a moyen d'ouvrir l'élément {{HTMLElement("select")}} pour voir tous les choix disponibles (c'est la même chose que de cliquer sur l'élément {{HTMLElement("select")}} avec une souris). Cela se fait avec <kbd>Alt</kbd>+<strong><kbd>↓</kbd></strong> sous Windows et n'a pas été implémenté dans notre exemple - mais il serait facile de le faire, car le mécanisme a déjà été implémenté pour l'événement <code>click</code>.</p>
</div>

<h3 id="Definition_de_la_structure_HTML_et_de_la_sémantique">Definition de la structure HTML et de la sémantique</h3>

<p>Maintenant que la fonctionnalité de base du widget a été décidée, il est temps de commencer à construire notre widget. La première étape consiste à définir sa structure HTML et à lui donner une sémantique de base. Voici ce dont nous avons besoin pour reconstruire un élément &lt;select&gt; :</p>

<pre class="brush: html">&lt;!-- Ceci est notre conteneur principal pour le widget. L'attribut tabindex
     est ce qui permet à l'utilisateur de mettre le focus sur le widget.
     Nous verrons plus loin que c'est mieux de le faire avec JavaScript. --&gt;
&lt;div class="select" tabindex="0"&gt;

  &lt;!-- Ce containeur sera utilisé pour afficher la valeur courante du widget --&gt;
  &lt;span class="value"&gt;Cerise&lt;/span&gt;

  &lt;!-- Ce conteneur contiendra toutes les options disponibles pour le widget.
       Comme c'est une liste, il y sens à utiliser l'élément ul. --&gt;
  &lt;ul class="optList"&gt;
    &lt;!-- Chaque option ne contient que la valeur à afficher, Nous verrons plus loin
         comment gérer la valeur réelle qui sera envoyée avec les données du formulaire --&gt;
    &lt;li class="option"&gt;Cerise&lt;/li&gt;
    &lt;li class="option"&gt;Citron&lt;/li&gt;
    &lt;li class="option"&gt;Banane&lt;/li&gt;
    &lt;li class="option"&gt;Fraise&lt;/li&gt;
    &lt;li class="option"&gt;Pomme&lt;/li&gt;
  &lt;/ul&gt;

&lt;/div&gt;</pre>

<p>Notez l'utilisation de noms de classes qui identifient chaque partie pertinente indépendamment des éléments HTML sous-jacents utilisés. Ceci est important pour s'assurer que nous n'allons pas lier les CSS et JavaScript à une structure HTML forte, pour pouvoir faire des changements d'implémentation plus tard sans casser le code qui utilise le widget. Par exemple, si vous souhaitez implémenter l'équivalent de l'élément {{HTMLElement("optgroup")}}.</p>

<h3 id="Composition_et_ressenti_avec_les_CSS">Composition et ressenti avec les CSS</h3>

<p>Maintenant que nous avons une structure, nous pouvons commencer à concevoir notre widget. Le but de construire un widget personnalisé est de pouvoir lui donner exactement le style que nous voulons. Pour cela, nous allons partager le travail sur les CSS en deux parties : la première relative aux règles des CSS absolument nécessaires pour que notre widget se comporte comme un élément {{HTMLElement("select")}}, la seconde constituée des décorations utilisés lui donnant un aspect personnalisé.</p>

<h4 id="Styles_obligatoires">Styles obligatoires</h4>

<p>Les styles obligatoires sont ceux nécessaires à la gestion des trois états du widget.</p>

<pre class="brush: css">.select {
  /* Celui-ci crée un contexte de positionnement pour la liste des options */
  position: relative;

  /* Celui-ci fait que le widget devient partie du flot textuel
     et devient en même temps dimensionnable */
  display : inline-block;
}</pre>

<p>Nous avons besoin d'une classe <code>active</code> supplémentaire pour définir l'apparence du widget dans son état actif. Comme le widget peut recevoir le focus, nous doublons ce style personnalisé avec la pseudo-classe {{cssxref(":focus")}} afin d'être sûrs qu'elles se comporteront de la même manière.</p>

<pre class="brush: css">.select.active,
.select:focus {
  outline: none;

  /* Cette propriété box-shadow n'est pas requise à proprement parler, mais il est
     important de s'assurer que l'état actif soit visible, c'est pourquoi nous
     utilisons une valeur par défaut. Vous êtes libre de la modifier. */
  box-shadow: 0 0 3px 1px #227755;
}</pre>

<p>Passons maintenant à la liste des options :</p>

<pre class="brush: css">/* Le sélecteur .select ici est du sucre syntaxique (le fait de donner au
   programmeur des possibilités d'écriture plus succinctes ou plus proches
   d'une notation usuelle) pour s'assurer que les classes que nous définissons
   sont les seules à l'intérieur du widget. */
.select .optList {
  /* Ceci assure que la liste des options sera affichée au dessous de la valeur
     et en dehors du flot HTML */
  position : absolute;
  top      : 100%;
  left     : 0;
}</pre>

<p>Nous avons besoin d'une classe supplémentaire pour gérer la liste d'options cachée. Ceci est nécessaire pour la gestion des différences entre état actif et état ouvert qui ne correspondent pas exactement.</p>

<pre class="brush: css">.select .optList.hidden {
  /* Ceci est un moyen simple pour cacher la liste tout en conservant l'accessibilité,
     nous reparlerons plus loin d'accessibilité */
  max-height: 0;
  visibility: hidden;
}</pre>

<h4 id="Embellissements">Embellissements</h4>

<p>Maintenant que nous avons mis en place les fonctionnalités de base, le divertissement peut commencer. Ce qui suit n'est qu'un exemple de ce qui est possible, et correspondra à la capture d'écran au début de cet article. Cependant, vous devriez vous sentir libre d'expérimenter et de voir ce que cela donne.</p>

<pre class="brush: css">.select {
  /* Toutes les tailles seront exprimées en valeurs em (lettre M, étalon
     du cadratin : cadre dans lequel sont dessinées toutes les lettres d'une
     police de caractères) pour des raisons d'accessibilité (pour être sûrs
     que le widget reste redimensionnable si l'utilisateur utilise le zoom
     du navigateur en mode texte exclusif). Les calculs sont faits en
     supposant que 1em==16px qui est la valeur par défaut dans la majorité
     des navigateurs. Si vous êtes perdus avec les conversions entre px et
     em, essayez http://riddle.pl/emcalc/ */
  font-size   : 0.625em; /* ceci (10px) est le nouveau contexte de taille de
     police pour la valeur em dans ce contexte. */
  font-family : Verdana, Arial, sans-serif;

  -moz-box-sizing : border-box;
  box-sizing : border-box;

  /* Nous avons besoin de plus d'espace pour la flèche vers le bas que nous
     allons ajouter. */
  padding : .1em 2.5em .2em .5em; /* 1px 25px 2px 5px */
  width   : 10em; /* 100px */

  border        : .2em solid #000; /* 2px */
  border-radius : .4em; /* 4px */
  box-shadow    : 0 .1em .2em rgba(0,0,0,.45); /* 0 1px 2px */

  /* La première déclaration concerne les navigateurs qui ne prennent pas en
     charge les gradients linéaires. La deuxième déclaration est parce que
     les navigateurs basés sur WebKit ne l'ont pas encore préfixé. Si vous
     souhaitez prendre en charge les anciens navigateurs, essayez
     http://www.colorzilla.com/gradient-editor/ */
  background : #F0F0F0;
  background : -webkit-linear-gradient(90deg, #E3E3E3, #fcfcfc 50%, #f0f0f0);
  background : linear-gradient(0deg, #E3E3E3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  /* Comme la valeur peut être plus large que le widget, nous devons nous
     assurer qu'elle ne changera pas la largeur du widget. */
  display  : inline-block;
  width    : 100%;
  overflow : hidden;

  vertical-align: top;

  /* Et si le contenu déborde, c'est mieux d'avoir une jolie abreviation. */
  white-space  : nowrap;
  text-overflow: ellipsis;
</pre>

<p>Nous n'avons pas besoin d'un élément supplémentaire pour concevoir la flèche vers le bas ; à la place, nous utilisons le pseudo-élément {{cssxref(":after:after")}}. Cependant, elle pourrait également être mise en œuvre à l'aide d'une simple image de fond sur la classe <code>select</code>.</p>

<pre class="brush: css">.select:after {
  content : "▼"; /* Nous utilisons le caractère unicode U+25BC;
                    voir http://www.utf8-chartable.de */
  position: absolute;
  z-index : 1; /* Il est important d'empêcher la flèche de chevaucher la liste des options */
  top     : 0;
  right   : 0;

  -moz-box-sizing : border-box;
  box-sizing : border-box;

  height  : 100%;
  width   : 2em;  /* 20px */
  padding-top : .1em; /* 1px */

  border-left  : .2em solid #000; /* 2px */
  border-radius: 0 .1em .1em 0;  /* 0 1px 1px 0 */

  background-color : #000;
  color : #FFF;
  text-align : center;
}</pre>

<p>Maintenant, composons la décoration de la liste des options :</p>

<pre class="brush: css">.select .optList {
  z-index : 2; /* Nous disons explicitement que la liste des options doit toujours passer sur la flèche */

  /* cela réinitialiser le style par défaut de l'élément ul */
  list-style: none;
  margin : 0;
  padding: 0;

  -moz-box-sizing : border-box;
  box-sizing : border-box;

  /* Cela nous assure que même si les valeurs sont plus petites que le widget,
     la liste des options sera aussi large que le widget lui‑même */
  min-width : 100%;

  /* Dans le cas où la liste est trop longue, son contenu débordera verticalement
     (ce qui ajoutera une barre de déroulement automatiquement) mais jamais horizontalement
     (car nous n'avons jamais défini de largeur, la liste ajustera automatiquement sa largeur
     Si ce n'est pas possible, le contenu sera tronqué) */
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;

  border: .2em solid #000; /* 2px */
  border-top-width : .1em; /* 1px */
  border-radius: 0 0 .4em .4em; /* 0 0 4px 4px */

  box-shadow: 0 .2em .4em rgba(0,0,0,.4); /* 0 2px 4px */
  background: #f0f0f0;
}</pre>

<p>Pour les options, nous devons ajouter une classe <code>highlight</code> pour pouvoir identifier la valeur que l'utilisateur choisira (ou a choisi).</p>

<pre class="brush: css">.select .option {
  padding: .2em .3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #FFFFFF;
}</pre>

<p>Donc, voici le résultat avec les trois états :</p>

<table>
 <thead>
  <tr>
   <th scope="col" style="text-align: center;">Basic state</th>
   <th scope="col" style="text-align: center;">Active state</th>
   <th scope="col" style="text-align: center;">Open state</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{EmbedLiveSample('Basic_state',120,130, "", "Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Exemple_1")}}</td>
   <td>{{EmbedLiveSample("Active_state",120,130, "", "Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Exemple_1")}}</td>
   <td>{{EmbedLiveSample("Open_state",120,130, "", "Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Exemple_1")}}</td>
  </tr>
  <tr>
   <td colspan="3" style="text-align: center;"><a href="/fr/docs/HTML/Forms/How_to_build_custom_form_widgets/Example_1" title="/en-US/docs/HTML/Forms/How_to_build_custom_form_widgets/Example_1">Check out the source code</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Donnez_vie_à_votre_widget_avec_JavaScript">Donnez vie à votre widget avec JavaScript</h2>

<p>Maintenant que le design et la structure sont prêts, nous pouvons écrire le code JAvaScript pour que le widget fonctionne vraiment.</p>

<div class="warning">
<p><strong>Attention :</strong> Le code qui suit a été conçu à des fins éducatives et ne doit pas être utilisé tel quel. Entre autres choses, comme nous le verrons, il n'est pas à l'épreuve du temps et ne fonctionnera pas sur des navigateurs historiques. Il comporte également des parties redondantes. Elles devraient être optimisées pour du code de production.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Créer des widgets réutilisables peut se révéler un peu délicat. L'ébauche de la norme « <a href="http://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html">W3C Web Component</a> » apporte des réponses à cette question particulière. Le <a href="http://x-tags.org/">projet X-Tag</a> est un essai de mise en œuvre de cette spécification ; nous vous encourageons à y jeter un coup d'œil.</p>
</div>

<h3 id="Pourquoi_ne_fonctionne-t-il_pas">Pourquoi ne fonctionne-t-il pas ?</h3>

<p> </p>

<p>Avant de commencer, il est important de se rappeler quelque chose de très important à propos de JavaScript : dans un navigateur, c'est une technique peu fiable. Lorsque vous créez des widgets personnalisés, vous êtes obligé de faire appel à JavaScript parce que c'est un fil nécessaire pour tout lier ensemble. Cependant, il existe de nombreux cas dans lesquels JavaScript n'est pas capable de s'exécuter dans le navigateur :</p>

<ul>
 <li>L'utilisateur a désactivé le JavaScript : c'est un cas assez inhabituel, peu de personnes désactivent le JavaScript de nos jours.</li>
 <li>Le script ne se charge pas. La chose est très courante, en particulier dans le domaine des mobiles pour lesquels le réseau n'est pas sûr.</li>
 <li>Le script est bogué. Il faut toujours prendre en considération cette éventualité.</li>
 <li>Le script est en conflit avec un autre script tierce‑partie. Cela peut se produire avec des suites de scripts ou n'importe quel marque page utilisé par l'utilisateur.</li>
 <li>Le script est en conflit avec, ou est affecté par un extension de navigateur  (comme l'extension « <a href="https://addons.mozilla.org/fr/firefox/addon/noscript/">No script</a> » de Firefox ou « <a href="https://chrome.google.com/webstore/detail/notscripts/odjhifogjcknibkahlpidmdajjpkkcfn" rel="external">Scripts »</a> de Chrome).</li>
 <li>L'utilisateur utilise un navigateur ancien et l'une des fonctions dont vous avez besoin n'est pas prise en charge. Cela se produira fréquemment lorsque vous utiliserez des API de pointe.s.</li>
</ul>

<p> </p>

<p> </p>

<p>En raison de ces aléas, il est vraiment important de considérer avec sérieux ce qui se passe si JavaScript ne fonctionne pas. Traiter en détail cette question est hors de la portée de cet article parce qu'elle est étroitement liée à la façon dont vous voulez rendre votre script générique et réutilisable, mais nous prendrons en considération les bases de ce sujet dans notre exemple.</p>

<p>Ainsi, si notre code JavaScript ne s'exécute pas, nous reviendrons à l'affichage d'un élément  {{HTMLElement("select")}} standard. Pour y parvenir, nous avons besoin de deux choses.</p>

<p>Tout d'abord, nous devons ajouter un élément {{HTMLElement("select")}} régulier avant chaque utilisation de notre widget personnalisé. Ceci est également nécessaire pour pouvoir envoyer les données de notre widget personnalisé avec le reste de nos données du formulaire ; nous reviendrons sur ce point plus tard.</p>

<p> </p>

<pre class="brush: html">&lt;body class="no-widget"&gt;
  &lt;form&gt;
    &lt;select name="myFruit"&gt;
      &lt;option&gt;Cerise&lt;/option&gt;
      &lt;option&gt;Citron&lt;/option&gt;
      &lt;option&gt;Banane&lt;/option&gt;
      &lt;option&gt;Fraise&lt;/option&gt;
      &lt;option&gt;Pomme&lt;/option&gt;
    &lt;/select&gt;

    &lt;div class="select"&gt;
      &lt;span class="value"&gt;Cerise&lt;/span&gt;
      &lt;ul class="optList hidden"&gt;
        &lt;li class="option"&gt;Cerise&lt;/li&gt;
        &lt;li class="option"&gt;Citron&lt;/li&gt;
        &lt;li class="option"&gt;Banane&lt;/li&gt;
        &lt;li class="option"&gt;Fraise&lt;/li&gt;
        &lt;li class="option"&gt;Pomme&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/form&gt;

&lt;/body&gt;</pre>

<p> </p>

<p>Deuxièmement, nous avons besoin de deux nouvelles classes pour nous permettre de cacher l'élément qui ne sert pas (c'est-à-dire l'élément{{HTMLElement("select")}} « réel »  si notre script ne fonctionne pas, ou le widget personnalisé s'il fonctionne). Notez que par défaut, le code HTML cache le widget personnalisé.</p>

<pre class="brush: css">.widget select,
.no-widget .select {
  /* Ce sélecteur CSS dit fondamentalement :
     - soit la classe body est "widget" et donc l'élément {{HTMLElement("select")}} réel sera caché
     - soit la classe body n'a pas changé, elle est toujours "no-widget",
       et donc les éléments, dont la classe est « select », doivent être cachés */
  position : absolute;
  left     : -5000em;
  height   : 0;
  overflow : hidden;
}</pre>

<p> </p>

<p>Maintenant nous avons juste besoin d'un commutateur JavaScript pour déterminer si le script est en cours d'exécution ou non. Cette bascule  est très simple : si au moment du chargement de la page notre script est en cours d'exécution, il supprime la classe no-widget et ajoute la classe widget, échangeant ainsi la visibilité de l'élément {{HTMLElement("select")}} et du widget personnalisé.</p>

<p> </p>

<p> </p>

<pre class="brush: js">window.addEventListener("load", function () {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});</pre>

<table>
 <thead>
  <tr>
   <th scope="col" style="text-align: center;">Sans JavaScript</th>
   <th scope="col" style="text-align: center;">Avec JavaScript</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{EmbedLiveSample("No_JS",120,130, "", "Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Exemple_2")}}</td>
   <td>{{EmbedLiveSample("JS",120,130, "", "Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Exemple_2")}}</td>
  </tr>
  <tr>
   <td colspan="2" style="text-align: center;"><a href="/fr/docs/HTML/Forms/How_to_build_custom_form_widgets/Example_2" title="/en-US/docs/HTML/Forms/How_to_build_custom_form_widgets/Example_2">Testez le code source</a></td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Note :</strong> Si vous voulez vraiment rendre votre code générique et réutilisable, au lieu de faire un changement de classe, il est préférable d'ajouter la classe widget pour cacher les éléments {{HTMLElement("select")}} et d'ajouter dynamiquement l'arbre DOM représentant le widget personnalisé après chaque élément {{HTMLElement("select")}} dans la page.</p>
</div>

<h3 id="Rendre_le_travail_plus_facile">Rendre le travail plus facile</h3>

<p> </p>

<p>Dans le code que nous sommes sur le point de construire, nous utiliserons l'API standard DOM pour faire tout le travail dont nous avons besoin. Cependant, bien que la prise en charge de l'API DOM se soit améliorée dans les navigateurs, il y a toujours des problèmes avec les anciens navigateurs (surtout avec le bon vieux navigateur Internet Explorer).</p>

<p>Si vous voulez éviter les problèmes avec les navigateurs anciens, il y a deux façons de le faire : en utilisant un framework dédié tel que jQuery, $dom, prototype, Dojo, YUI ou similaire, ou bien en remplissant la fonctionnalité manquante que vous voulez utiliser (ce qui peut facilement être fait par un chargement conditionnel, avec la bibliothèque yepnope par exemple).</p>

<p>Les fonctionnalités que nous prévoyons d'utiliser sont les suivantes (classées de la plus risquée à la plus sûre) :</p>

<ol>
 <li>{{domxref("element.classList","classList")}}</li>
 <li>{{domxref("EventTarget.addEventListener","addEventListener")}}</li>
 <li><code><a href="/fr/docs/JavaScript/Reference/Global_Objects/Array/forEach" title="/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach">forEach</a></code> (ce n'est pas du DOM mais du JavaScript moderne)</li>
 <li>{{domxref("element.querySelector","querySelector")}} et {{domxref("element.querySelectorAll","querySelectorAll")}}</li>
</ol>

<p>Au-delà de la disponibilité de ces fonctionnalités spécifiques, il reste encore un problème avant de commencer. L'objet retourné par la fonction {{domxref("element.querySelectorAll","querySelectorAll()")}} est une {{domxref("NodeList")}} plutôt qu'un <code><a href="/fr/docs/JavaScript/Reference/Global_Objects/Array" title="/en-US/docs/JavaScript/Reference/Global_Objects/Array">Array</a></code>. C'est important, car les objets  <code>Array</code> acceptent la fonction <code><a href="/fr/docs/JavaScript/Reference/Global_Objects/Array/forEach" title="/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach">forEach</a></code>, mais {{domxref("NodeList")}} ne le fait pas. Comme {{domxref("NodeList")}} ressemble vraiment à un <code>Array</code> et que <code>forEach</code> est d'utilisation si commode, nous pouvons facilement ajouter la prise en charge de <code>forEach à</code> {{domxref("NodeList")}} pour nous faciliter la vie, comme ceci :</p>

<pre class="brush: js">NodeList.prototype.forEach = function (callback) {
  Array.prototype.forEach.call(this, callback);
}</pre>

<p>On ne plaisantait pas quand on a dit que c'était facile à faire.</p>

<h3 id="Construction_des_fonctions_de_rappel_d'événements">Construction des fonctions de rappel d'événements</h3>

<p>Les fondations sont prêtes, nous pouvons maintenant commencer à définir toutes les fonctions à utiliser chaque fois que l'utilisateur interagit avec notre widget.</p>

<pre class="brush: js">// Cette fonction est utilisée chaque fois que nous voulons désactiver un
// widget personnalisé. Elle prend un paramètre
// select : le nœud DOM avec la classe select à désactiver
function deactivateSelect(select) {

  // Si le widget n'est pas actif, il n'y a rien à faire
  if (!select.classList.contains('active')) return;

  // Nous devons obtenir la liste des options pour le widget personnalisé
  var optList = select.querySelector('.optList');

  // Nous cachons la liste des options
  optList.classList.add('hidden');

  // et nous désactivons le widget personnalisé lui-même
  select.classList.remove('active');
}

// Cette fonction sera utilisée chaque fois que l'utilisateur veut (des)activer le widget
// Elle prend deux paramètres :
// select : le nœud DOM de la classe `select` à activer
// selectList : la liste de tous les nœuds DOM de la classe `select`
function activeSelect(select, selectList) {

  // Si le widget est déjà actif il n'y a rien à faire
  if (select.classList.contains('active')) return;

  // Nous devons désactiver tous les widgets personnalisés
  // comme la fonction deactivateSelect remplit toutes les fonctionnalités de la
  // fonction de rappel forEach, nous l'utilisons directement sans utiliser
  // une fonction anonyme intermédiaire.
  selectList.forEach(deactivateSelect);

  // Et nous activons l'état du widget donné
  select.classList.add('active');
}

// Cette fonction sera utilisée chaque fois que l'utilisateur veut enrouler/dérouler la
// liste des options
// Elle prend un paramètre :
// select : le nœud DOM de la liste à basculer
function toggleOptList(select) {

  // La liste est prise à partir du widget
  var optList = select.querySelector('.optList');

  // Nous changeons la classe de la liste pour l'enrouler/dérouler
  optList.classList.toggle('hidden');
}

// Cett fonction sera utilisée chaque fois qu'il faut mettre en surbrillance
// une option.  Elle prend deux paramètres :
// select : le nœud DOM de la classe `select`
//          contenant l'option à mettre en surbrillance
// option : le nœud DOM de la classe `option` à mettre en surbrillance
function highlightOption(select, option) {

  // Obtenir la liste de toutes les options disponibles pour l'élémént sélectionné
  var optionList = select.querySelectorAll('.option');

  // Supprimer la surbrillance pour toutes les options
  optionList.forEach(function (other) {
    other.classList.remove('highlight');
  });

  // Mettre en surbrillance l'option correcte
  option.classList.add('highlight');
};</pre>

<p>C'est tout ce dont on a besoin pour gérer les différents états du widget personnalisé.</p>

<p>Ensuite, nous assujettissons ces fonctions aux événement appropriés :</p>

<pre class="brush: js">// Nous lions le widget aux événements dès le chargement du document
window.addEventListener('load', function () {
  var selectList = document.querySelectorAll('.select');

  // Chaque widget personnalisé doit être initialisé
  selectList.forEach(function (select) {

    // de même que tous les éléments `option`
    var optionList = select.querySelectorAll('.option');

    // Chaque fois que l'utilisateur passe le pointeur de souris
    // sur une option, nous mettons en surbrillance la dite option

    optionList.forEach(function (option) {
      option.addEventListener('mouseover', function () {
        // Note : les variables `select` et `option` sont des "closures"
        // disponibles dans la portée de notre appel de fonction.
        highlightOption(select, option);
      });
    });

    // Chaque fois que l'utilisateur clique sur un élément personnalisé
    select.addEventListener('click', function (event) {
      // Note : la variable `select` est une "closure"
      // available dans la portée de notre appel de fonction.

      // Nous basculons la visibilité de la liste des options
      toggleOptList(select);
    });

    // Dans le cas où le widget obtient le focus
    // Le widget obtient le focus chaque fois que l'utilisateur clique dessus
    // ou presse la touche Tab pour avoir accès au widget
    select.addEventListener('focus', function (event) {
      // Note : les variable `select` et `selectList` sont des "closures"
      // disponibles dans la portée de notre appel de fonction.

      // Nous activons le widget
      activeSelect(select, selectList);
    });

    // Dans le cas où le widget perd le focus
    select.addEventListener('blur', function (event) {
      // Note : la variable `select` est une "closure"
      // disponible dans la portée de notre appel de fonction.

      // Nous désactivons le widget
      deactivateSelect(select);
    });
  });
});</pre>

<p>A ce stade, notre widget change d'état comme nous l'avons conçu, mais sa valeur n'est pas encore mise à jour. On s'en occupera après.</p>

<table>
 <thead>
  <tr>
   <th scope="col" style="text-align: center;">Exemple en direct</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{EmbedLiveSample("Change_states",120,130, "", "/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Example_3")}}</td>
  </tr>
  <tr>
   <td style="text-align: center;"><a href="/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Example_3" title="/en-US/docs/HTML/Forms/How_to_build_custom_form_widgets/Example_3">Revoir le code source</a></td>
  </tr>
 </tbody>
</table>

<h3 id="Gérer_la_valeur_du_widget">Gérer la valeur du widget</h3>

<p> </p>

<p>Maintenant que notre widget fonctionne, nous devons ajouter du code pour mettre à jour la valeur en fonction des entrées utilisateur et envoyer cette valeur avec les données du formulaire.</p>

<p>La façon la plus simple de le faire est d'utiliser un widget natif sous‑jacent. Un tel widget gardera une trace de la valeur avec tous les contrôles intégrés fournis par le navigateur, et la valeur sera envoyée comme d'habitude lorsque le formulaire sera soumis. Il ne sert à rien de réinventer la roue alors que tout cela peut être fait pour nous.</p>

<p>Comme nous l'avons vu précédemment, nous utilisons déjà un widget de sélection natif comme solution de repli pour des raisons d'accessibilité ; nous pouvons simplement synchroniser sa valeur avec celle de notre widget personnalisé :</p>

<pre class="brush: js">// Cette fonction met à jour la valeur affichée et la synchronise avec celle
// du widget natif. Elle prend deux paramètres :
// select : le nœud DOM de la classe `select` contenant la valuer à mettre à jour
// index  : l'index de la valeur choisie
function updateValue(select, index) {
  // Nous devons obtenir le widget natif correspondant au widget personnalisé
  // Dans notre exemple, le widget natif est un parent du widget personnalisé
  var nativeWidget = select.previousElementSibling;

  // Nou devons aussi obtenir la valeur de remplacement du widget personnalisé
  var value = select.querySelector('.value');

  // Et nous avons besoin de toute la liste des options
  var optionList = select.querySelectorAll('.option');

  // Nous définissons l'index choisi à l'index du choix
  nativeWidget.selectedIndex = index;

  // Nous mettons à jour la valeur de remplacement en accord
  value.innerHTML = optionList[index].innerHTML;

  // Et nous mettons en surbrillance l'option correspondante du widget personnalisé
  highlightOption(select, optionList[index]);
};

// Cette fonction renvoie l'index courant dans le widget natif
// Elle prend un paramètre :
// select : le nœud DOM avec la classe `select` relative au widget natif
function getIndex(select) {
  // Nous avons besoin d'avoir accès au widget natif pour le widget personnalisé
  // Dans notre exemple, le widget natif est un parent du widget personnalisé
  var nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
};</pre>

<p>Avec ces deux fonctions, nous pouvons lier les widgets natifs avec les personnalisés :</p>

<pre class="brush: js">// Nous lions le widget aux événements dès le chargement du document
window.addEventListener('load', function () {
  var selectList = document.querySelectorAll('.select');

  // Chaque widget personnalisé doit être initialisé
  selectList.forEach(function (select) {
    var optionList = select.querySelectorAll('.option'),
        selectedIndex = getIndex(select);

    // Nous rendons le widget personnalisé capable d'avoir le focus
    select.tabIndex = 0;

    // Nous faisons en sorte que le widget natif ne puisse plus avoir le focus
    select.previousElementSibling.tabIndex = -1;

    // Nous nous assurons que la valeur sélectionnée par défaut est bien affichée
    updateValue(select, selectedIndex);

    // Chaque fois que l'utilisateur clique sur une option, nous mettons à
    // jour la valeur en accord
    optionList.forEach(function (option, index) {
      option.addEventListener('click', function (event) {
        updateValue(select, index);
      });
    });

    // Chaque fois que l'utilisateur utilise le clavier sur un widget
    // avec focus, les valeurs sont mises à jour en accord

    select.addEventListener('keyup', function (event) {
      var length = optionList.length,
          index  = getIndex(select);

      // Quand l'utilisateur presse ⇓, nous allons à l'option suivante
      if (event.keyCode === 40 &amp;&amp; index &lt; length - 1) { index++; }

      // Quand l'utilisateur presse ⇑, nous sautons à l'option suivante
      if (event.keyCode === 38 &amp;&amp; index &gt; 0) { index--; }

      updateValue(select, index);
    });
  });
});</pre>

<p>Dans le code ci-dessus, il faut noter l'utilisation de la propriété <code><a href="/fr/docs/Web/API/HTMLElement/tabIndex" title="/en-US/docs/Web/API/HTMLElement/tabIndex">tabIndex</a></code>. Utiliser cette propriété est nécessaire pour être sûr que le widget natif n'obtiendra jamais le focus et que le widget personnalisé l'obtiendra quand l'utilisateur utilise le clavier ou la souris.</p>

<p>Et voilà, nous avons terminé ! Voici le résultat :</p>

<table>
 <thead>
  <tr>
   <th scope="col" style="text-align: center;">Exemple en direct</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{EmbedLiveSample("Change_states",120,130, "", "/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Example_4")}}</td>
  </tr>
  <tr>
   <td style="text-align: center;"><a href="/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Example_4" title="/en-US/docs/HTML/Forms/How_to_build_custom_form_widgets/Example_3">Revoir le code source</a></td>
  </tr>
 </tbody>
</table>

<p>Mais attendez, avons‑nous vraiment terminé ?</p>

<h2 id="Le_rendre_«_accessible_»">Le rendre « accessible »</h2>

<p> </p>

<p>Nous venons de faire quelque chose qui fonctionne, même si nous sommes loin d'avoir une boîte de sélection avec toutes les fonctionnalités, elle fonctionne parfaitement. Mais ce que nous avons fait n'est rien de plus que de jouer avec les DOM. Elle n'a pas de sémantique réelle, et même si elle ressemble à une boîte de sélection, du point de vue du navigateur, ce n'en est pas une, de sorte que les technologies d'assistance ne pourront pas comprendre que c'est une boîte de sélection. Bref, cette jolie nouvelle boîte de sélection n'est pas accessible !</p>

<p>Heureusement, il existe une solution et elle s'appelle <a href="/fr/docs/Accessibility/ARIA" title="/en-US/docs/Accessibility/ARIA">ARIA</a>. ARIA signifie « Accessible Rich Internet Application » et c'est une<a href="http://www.w3.org/TR/wai-aria/" rel="external"> norme W3C </a>spécialement conçue pour ce que nous faisons ici : rendre accessibles les applications web et les widgets personnalisés. Il s'agit essentiellement d'un ensemble d'attributs qui étendent le HTML afin que nous puissions mieux décrire les rôles, les états et les propriétés comme si l'élément que nous venons de concevoir était l'élément natif pour lequel il essaie de passer. L'utilisation de ces attributs est très simple, alors faisons-le.</p>

<h3 id="L'attribut_role">L'attribut <code>role</code></h3>

<p>L'attribut clé utilisé par <a href="/fr/docs/Accessibility/ARIA" title="/en-US/docs/Accessibility/ARIA">ARIA</a> est l'attribut <a href="/fr/docs/Accessibility/ARIA/ARIA_Techniques" title="/en-US/docs/Accessibility/ARIA/ARIA_Techniques"><code>role</code></a>. L'attribut <a href="/fr/docs/Accessibility/ARIA/ARIA_Techniques" title="/en-US/docs/Accessibility/ARIA/ARIA_Techniques"><code>role </code></a> accepte une valeur qui définit à quoi sert un élément. Chaque rôle définit ses propres exigences et comportements. Dans notre exemple, nous utiliserons le rôle de <code><a href="/fr/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role" title="/en-US/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role">listbox</a></code>. C'est un « rôle composite », ce qui signifie que les éléments ayant ce rôle s'attendent à avoir des enfants, chacun avec un rôle spécifique (dans ce cas, au moins un enfant avec le rôle <code>option</code>).</p>

<p>Il faut aussi noter qu'ARIA définit les rôles appliqués par défaut aux balises HTML standard. Par exemple, l'élément {{HTMLElement("table")}} correspond au rôle <code>grid</code>, et l'élément {{HTMLElement("ul")}} correspond au rôle <code>list</code>. Comme nous utilisons un élément {{HTMLElement("ul")}}, nous voulons nous assurer que le rôle <code>listbox</code> de notre widget remplacera le rôle <code>list</code> de l'élément {{HTMLElement("ul")}}. À cette fin, nous utiliserons le rôle <code>presentation</code>. Ce rôle est conçu pour nous permettre d'indiquer qu'un élément n'a pas de signification particulière, et est utilisé uniquement pour présenter de l'information. Nous l'appliquerons à notre élément {{HTMLElement("ul")}}.</p>

<p>Pour prendre en charge le rôle <code>listbos</code>, nous n'avons qu'à mettre à jour notre HTML comme ceci :</p>

<pre class="brush: html">&lt;!-- Nous ajoutons le role="listbox" en attribut de l'élément de tête --&gt;
&lt;div class="select" role="listbox"&gt;
  &lt;span class="value"&gt;Cherry&lt;/span&gt;
  &lt;!-- Nous ajoutons aussi le role="presentation" à l'élément ul --&gt;
  &lt;ul class="optList" role="presentation"&gt;
    &lt;!-- et le rôle="option" en attribut de tous les éléments li --&gt;
    &lt;li role="option" class="option"&gt;Cherry&lt;/li&gt;
    &lt;li role="option" class="option"&gt;Lemon&lt;/li&gt;
    &lt;li role="option" class="option"&gt;Banana&lt;/li&gt;
    &lt;li role="option" class="option"&gt;Strawberry&lt;/li&gt;
    &lt;li role="option" class="option"&gt;Apple&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>

<div class="note">
<p><strong>Note :</strong> Inclure à la fois l'attribut <code>role</code> et l'attribut <code>class</code> n'est nécessaire que si vous souhaitez prendre en charge les navigateurs anciens qui n'acceptent pas les <a href="/fr/docs/CSS/Attribute_selectors" title="/en-US/docs/CSS/Attribute_selectors">selecteurs d'attribut CSS</a>.</p>
</div>

<h3 id="L'attribut_aria-selected">L'attribut  <code>aria-selected</code></h3>

<p>Utiliser l'attribut <code>role</code> ne suffit pas. <a href="/fr/docs/Accessibility/ARIA" title="/en-US/docs/Accessibility/ARIA">ARIA</a> fournit également de nombreux états et attributs de propriété. Plus vous les utiliserez, mieux votre widget sera compris par les techniques d'assistance. Dans notre cas, nous limiterons notre utilisation à un seul attribut : <code>aria-selected</code>.</p>

<p>L'attribut <code>aria-selected</code> s'utilise pour marquer l'option actuellement sélectionnée ; ceci permet aux techniques d'assistance d'informer l'utilisateur quelle est la sélection en cours. Nous l'utiliserons dynamiquement avec JavaScript pour marquer l'option sélectionnée chaque fois que l'utilisateur en choisit une. Pour cela, nous devons réviser la fonction <code>updateValue()</code> :</p>

<pre class="brush: js">function updateValue(select, index) {
  var nativeWidget = select.previousElementSibling;
  var value = select.querySelector('.value');
  var optionList = select.querySelectorAll('.option');

  // Nous nous assurons qu'aucune option n'est sélectionnée
  optionList.forEach(function (other) {
    other.setAttribute('aria-selected', 'false');
  });

  // Nous nous assurons que l'option choisie est sélectionnée
  optionList[index].setAttribute('aria-selected', 'true');

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
};</pre>

<p>Voici le résultat final de toutes ces modifications (vous obtiendrez un meilleur ressenti en les testant avec une technique d'assistance comme <a href="http://www.nvda-project.org/" rel="external">NVDA</a> ou <a href="http://www.apple.com/accessibility/voiceover/" rel="external">VoiceOver</a>) :</p>

<table>
 <thead>
  <tr>
   <th scope="col" style="text-align: center;">Exemple en direct</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{EmbedLiveSample("Change_states",120,130, "", "/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Example_5")}}</td>
  </tr>
  <tr>
   <td style="text-align: center;"><a href="/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés/Example_5" title="/en-US/docs/HTML/Forms/How_to_build_custom_form_widgets/Example_3">Revoir le code source</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Conclusion">Conclusion</h2>

<p>Nous venons de voir les bases pour la construction d'un widget de formulaire personnalisé, mais comme vous avez pu le voir, ce n'est pas facile à faire, et il est souvent préférable et plus facile de s'appuyer sur des bibliothèques tierces au lieu de les coder vous-même (sauf, bien sûr, si vous souhaitez bâtir une telle bibliothèque).</p>

<p>Voici quelques bibliothèques à prendre en considération avant de coder les vôtres :</p>

<ul>
 <li><a href="http://jqueryui.com/" rel="external">jQuery UI</a></li>
 <li><a href="https://github.com/marghoobsuleman/ms-Dropdown" rel="external">msDropDown</a></li>
 <li><a href="http://www.emblematiq.com/lab/niceforms/" rel="external">Nice Forms</a></li>
 <li><a href="https://www.google.fr/search?q=HTML+custom+form+controls&amp;ie=utf-8&amp;oe=utf-8&amp;aq=t&amp;rls=org.mozilla:fr:official&amp;client=firefox-a" rel="external" title="https://www.google.fr/search?q=HTML+custom+form+controls&amp;ie=utf-8&amp;oe=utf-8&amp;aq=t&amp;rls=org.mozilla:fr:official&amp;client=firefox-a">et beaucoup d'autres…</a></li>
</ul>

<p>Si vous voulez aller plus loin, le code de cet exemple mérite quelques amélioration avant de devenir générique et réutilisable. C'est un exercice que vous pouvez essayer de faire. Deux conseils pour vous aider : le premier argument pour toutes nos fonctions est le même, ce qui signifie que ces fonctions ont besoin du même contexte. Il serait avisé de construire un objet pour partager ce contexte. En outre, vous devrez éprouver ses fonctionnalités, c'est-à-dire qu'il doit pouvoir fonctionner avec les divers navigateurs dont la compatibilité avec les normes Web qu'ils utilisent varie. Amusez-vous bien !</p>

<p>{{PreviousMenuNext("Web/Guide/HTML/Formulaires/Validation_donnees_formulaire", "Web/Guide/HTML/Formulaires/Sending_forms_through_JavaScript", "Web/Guide/HTML/Formulaires")}}</p>

<h2 id="Dans_ce_module">Dans ce module</h2>

<ul>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML">Mon premier formulaire HTML</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML">Comment structurer un formulaire HTML</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs">Les widgets natifs pour formulaire</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires">Envoi des données de formulaire</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire">Validation des données de formulaire</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés">Comment construire des widgets personnalisés pour formulaire</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Sending_forms_through_JavaScript">Envoi de formulaires à l'aide du JavaScript</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers">Formulaires HTML dans les navigateurs anciens</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML">Mise en forme des formulaires HTML</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms">Mise en forme avancée des formulaires HTML</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Property_compatibility_table_for_form_widgets">Table de compatibilité des propriétés pour les widgets de formulaire</a></li>
</ul>
