---
title: Découvrir les outils de développement des navigateurs
slug: Learn/Common_questions/What_are_browser_developer_tools
tags:
  - Beginner
  - Browser
  - CSS
  - CodingScripting
  - DevTools
  - HTML
  - JavaScript
  - Learn
translation_of: Learn/Common_questions/What_are_browser_developer_tools
original_slug: Apprendre/Découvrir_outils_développement_navigateurs
---
<div>{{IncludeSubnav("/fr/Apprendre")}}</div>

<div>{{Previous("Apprendre/Commencer_avec_le_web")}}</div>

<p>Tous les navigateurs modernes possèdent un ensemble d'outils destinés aux développeurs. Ces outils permettent de réaliser différentes actions : inspecter le code HTML, CSS ou JavaScript chargé à la volée dans la page, montrer les fichiers téléchargés et le temps de chargement, etc. Dans cet article, nous verrons comment utiliser les fonctionnalités basiques des outils de développements d'un navigateur (parfois appelés avec l'anglicisme « <em>devtools</em> »).</p>

<div class="note">
<p><strong>Note :</strong> Avant de poursuivre avec les exemples présentés ci-après, nous vous conseillons d'utiliser <a href="http://mdn.github.io/beginner-html-site-scripted/">l'exemple construit</a> dans la série d'articles <a href="/fr/Apprendre/Commencer_avec_le_web">Commencer avec le Web</a> et d'ouvrir le site dans votre navigateur pour poursuivre avec les étapes suivantes.</p>
</div>

<h2 id="Comment_ouvrir_les_outils_de_développement_d'un_navigateur">Comment ouvrir les outils de développement d'un navigateur</h2>

<p>Les <em>devtools</em> s'affichent généralement dans une sous-fenêtre du navigateur, de la façon suivante (cela peut varier légèrement) :</p>

<p><img alt="Affichage de la fenêtre principale avec les devtools ouverts" src="DSC02620.png"></p>

<p>Comment faire pour que cette sous-fenêtre apparaisse ? Trois méthodes :</p>

<ul>
 <li><em><strong>Au clavier.</strong></em> <em>Ctrl + Shift + I</em>, sauf pour :

  <ul>
   <li><strong>Internet Explorer. </strong><em>F12 </em></li>
   <li><strong>Mac OS X. </strong><em>⌘ + ⌥ + I </em></li>
  </ul>
 </li>
 <li><em><strong>Via les menus. </strong></em>
  <ul>
   <li><strong>Firefox. </strong>Menu <em>➤ </em><em>Développement ➤ Outils de développement </em>ou <em>Outils</em><em> ➤</em><em> Développement Web ➤ Outils de développement</em></li>
   <li><strong>Chrome.</strong> <em>Affichage ➤ Développement ➤ Outils de développement</em></li>
   <li><strong>Safari.</strong> <em>Développement ➤ Afficher l'inspecteur web.</em> Si vous ne pouvez pas voir le menu <em>Développement</em>, aller sous <em>Safari ➤ Préférences ➤ Avancé</em> et vérifiez que l'option <em>Afficher le menu de développement</em> est bien coché. </li>
   <li><strong>Opera</strong>. <em>Développement ➤ Inspecteur web</em></li>
  </ul>
 </li>
 <li><strong><em>Via un menu contextuel.</em></strong> Cliquez-droit sur un élément de la page web (ou ctrl+clic sur Mac) et sélectionnez <em>Examiner l'élément</em> dans le menu qui apparait (<em>Bonus : </em>cette méthode ouvrira l'inspecteur et sélectionnera directement l'élément en question !).</li>
</ul>

<p><img alt="Menu contextuel suite au clic-droit" src="devtools.png"></p>

<h2 id="L'inspecteur_explorateur_du_DOM_et_éditeur_CSS">L'inspecteur : explorateur du DOM et éditeur CSS</h2>

<p>Lorsqu'ils s'ouvrent, les outils de développement s'affichent comme illustré dans la capture d'écran ci-après. Cet outil permet de voir le HTML présent sur la page au moment où celle-ci est affiché, de façon dynamique. Il permet aussi de voir quelles règles CSS sont appliquées pour chaque élément de la page. Grâce à cet outil, on peut modifier le HTML et le CSS de façon instantanée et voir les changements appliqués immédiatement à la page affichée dans le navigateur.</p>

<p><img alt="Affichage de la fenêtre principale avec les devtools ouverts" src="DSC02620.png"></p>

<p>Si vous n'arrivez pas sur l'inspecteur :</p>

<ul>
 <li>Cliquez ou appuyez l'onglet <em>Inspecteur</em>.</li>
 <li>Sous Internet Explorer, cliquez ou appuyez sur <em>Explorateur DOM</em>, ou appuyez sur Ctrl + 1.</li>
 <li>Sous Safari, les contrôles n'apparaissent pas clairement mais vous devriez voir le code HTML si vous n'avez rien sélectionné d'autre. Pour voir le code CSS, appuyez sur le bouton <em>Style</em>.</li>
</ul>

<h3 id="Manipuler_l'inspecteur_du_DOM">Manipuler l'inspecteur du DOM</h3>

<p>Pour commencer, cliquez-droit sur un élément HTML dans l'inspecteur du DOM et regardez le menu contextuel qui s'affiche. Les options du menu qui apparaît peuvent varier d'un navigateur à un autre mais les options les plus importantes s'y trouvent toujours :</p>

<p><img alt="Menu contextuel ouvert suite à un clic-droit sur un élément HTML dans l'explorateur du DOM" src="menu_contextuel.png"></p>

<ul>
 <li><strong>Supprimer le nœud</strong> (parfois <em>Supprimer l'élément</em>) : supprime l'élément sélectionné du document.</li>
 <li><strong>Modifier comme HTML</strong> (parfois <em>Ajouter un attribut</em>/<em>Éditer le texte</em>) : permet de changer le HTML et de voir le résultat obtenu à la volée (en <em>live</em>). Cette option est très utile pour déboguer ou tester.</li>
 <li><strong>:hover/:active/:focus</strong> : force l'état d'un élément à être actif afin de pouvoir voir ce que la mise en forme donne pour cet état.</li>
 <li><strong>Copier/Copier comme HTML</strong> : permet de copier l'élément HTML actuellement sélectionné.</li>
 <li>Certains navigateurs disposent également d'options comme <em>Copier le chemin CSS</em> et/ou <em>Copier le chemin XPath</em> qui permettent de copier le sélecteur CSS ou l'expression XPath qui permettrait de sélectionner l'élément HTML en cours.</li>
</ul>

<p>Essayez d'éditer le DOM de votre page. Double-cliquez sur un élément ou cliquez-droit puis choisissez « Modifier comme HTML » depuis le menu contextuel. Vous pouvez modifier tout ce que vous voulez mais vous ne pouvez pas sauvegarder vos modifications.</p>

<h3 id="Manipuler_l'éditeur_CSS">Manipuler l'éditeur CSS</h3>

<p>Par défaut, l'éditeur CSS affiche les règles CSS qui s'appliquent à l'élément qui est sélectionné :</p>

<p><img alt="" src="css-viewer-2.png"></p>

<p>Ces fonctionnalités sont plutôt pratiques :</p>

<ul>
 <li>Les règles qui s'appliquent à l'élément courant sont affichées en commençant avec les règles les plus spécifiques et en terminant avec les règles les moins spécifiques.</li>
 <li>Il est possible de cocher les boîtes à côté de chaque déclaration pour voir l'effet qui serait obtenu si la déclaration était supprimée.</li>
 <li>Vous pouvez cliquer sur la petite flèche à côté de chaque propriété en notation résumée pour voir les équivalents en notation détaillée.</li>
 <li>Vous pouvez cliquer sur le nom d'une propriété ou d'une valeur pour éditer une valeur en live et immédiatement voir le changement.</li>
 <li>À côté de chaque règle, si celle-ci est « dépliée », vous pouvez voir le nom du fichier et la ligne sur laquelle la règle est définie. En cliquant sur le lien, vous arriverez directement sur le fichier CSS que vous pourrez éditer et sauvegarder.</li>
 <li>Vous pouvez également cliquer sur l'accolade fermant d'une règle donnée pour afficher une nouvelle zone de texte dans laquelle vous pourrez écrire une toute nouvelle déclaration.</li>
</ul>

<p>Vous aurez remarqué plusieurs onglets en haut du panneau pour le CSS :</p>

<ul>
 <li><em>Calculé </em>: cet onglet affiche les styles calculés pour l'élément sélectionné (les valeurs finales, normalisées, appliquées par le navigateur).</li>
 <li><em>Modèle de boîte </em>: cet onglet représente visuellement le modèle de boîte pour l'élément sélectionner afin de visualiser rapidement le <em>padding</em> (rembourrage), la bordure et la marge appliquée à l'élément. Il permet aussi de voir la taille du contenu.</li>
 <li><em>Polices </em>: Dans Firefox, cet onglet affiche les polices appliquées à l'élément sélectionné.</li>
</ul>

<h3 id="En_savoir_plus">En savoir plus</h3>

<p>Pour en apprendre plus sur l'inspecteur présent dans les différents navigateurs, les ressources suivantes pourront vous être particulièrement utiles :</p>

<ul>
 <li><a href="/fr/docs/Outils/Inspecteur">L'inspecteur Firefox</a></li>
 <li><a href="https://msdn.microsoft.com/library/dn255008%28v=vs.85%29.aspx">L'explorateur de DOM d'Internet Explorer</a></li>
 <li><a href="https://developer.chrome.com/devtools/docs/dom-and-styles">L'inspecteur de DOM Chrome</a> (l'inspecteur d'Opera fonctionne de la même façon)</li>
 <li><a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW1">L'inspecteur de DOM et l'explorateur de styles Safari</a></li>
</ul>

<h2 id="La_console_JavaScript">La console JavaScript</h2>

<p>La console JavaScript est un outil formidable pour déboguer du code JavaScript qui ne fonctionne pas comme on le souhaite. Elle permet d'exécuter des lignes de JavaScript sur la page qui est actuellement chargée dans le navigateur et de rapporter les erreurs rencontrées lorsque le navigateur souhaite exécuter le code. Pour accéder à la console dans n'importe quel navigateur, il suffit de cliquer/appuyer sur l'onglet Console (sous Internet Explorer, appuyez sur <em>Ctrl + 2</em>.) Cela affichera une fenêtre qui ressemblera à :</p>

<p><img alt="Console JavaScript" src="console.png"></p>

<p>Pour voir comment la console se comporte, essayez de saisir les fragments de code suivants dans la console (un par un), en appuyant sur Entrée après chaque :</p>

<ol>
 <li>
  <pre class="brush: js">alert('Coucou !');</pre>
 </li>
 <li>
  <pre class="brush: js">document.querySelector('html').style.backgroundColor = 'purple';</pre>
 </li>
 <li>
  <pre class="brush: js">var monImage = document.createElement('img');
monImage.setAttribute('src','https://c1.staticflickr.com/1/572/20463320350_58483f6bed.jpg');
document.querySelector('h1').appendChild(monImage);</pre>
 </li>
</ol>

<p>Maintenant, essayez de saisir les fragments de code suivants, qui sont incorrects, pour voir ce qui se passe :</p>

<ol>
 <li>
  <pre class="brush: js">alert('coucou !);</pre>
 </li>
 <li>
  <pre class="brush: js">document.cheeseSelector('html').style.backgroundColor = 'purple';</pre>
 </li>
 <li>
  <pre class="brush: js">var monImage = document.createElement('img');
maBanane.setAttribute('src','https://c1.staticflickr.com/1/572/20463320350_58483f6bed.jpg');
document.querySelector('h1').appendChild(monImage);</pre>
 </li>
</ol>

<p>Vous devriez voir différentes erreurs fournies par le navigateur. À première vue, ces erreurs semblent un peu étranges et complexes mais elles devraient être simples à résoudre !</p>

<h3 id="En_savoir_plus_2">En savoir plus</h3>

<p>Pour en apprendre plus sur la console JavaScript présente dans les différents navigateurs, les ressources listées ici devraient vous être utiles :</p>

<ul>
 <li><a href="/fr/docs/Outils/Console_Web">La console web de Firefox</a></li>
 <li><a href="https://msdn.microsoft.com/library/dn255006%28v=vs.85%29.aspx">La console JavaScript d'Internet Explorer</a></li>
 <li><a href="https://developer.chrome.com/devtools/docs/console">La console JavaScript de Chrome</a> (la console pour Opera fonctionnera de la même façon)</li>
 <li><a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1">La console de Safari</a></li>
</ul>
