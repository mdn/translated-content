---
title: Gérer les problèmes courants en JavaScript
slug: Learn/Tools_and_testing/Cross_browser_testing/JavaScript
tags:
  - Apprentissage
  - Débutant
  - JavaScript
  - Librairies
  - détection de fonctionnalité
  - linting
  - navigateur croisé
  - polyfills
  - test
translation_of: Learn/Tools_and_testing/Cross_browser_testing/JavaScript
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}

Nous allons maintenant aborder les problèmes Javascript en navigateur croisé et comment les résoudre. Cela comprend des informations sur l'utilisation  des outils de dev des navigateurs pour localiser et fixer les problèmes, l'utilisation des Polyfills et de librairies pour contourner les problèmes, utiliser les fonctionnalités modernes de Javascript sur des vieux navigateurs, et plus encore.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        <p>
          Connaissances de la base des langages
          <a href="/fr/Apprendre/HTML">HTML</a>, <a href="/fr/Apprendre/CSS"
            >CSS</a
          >
          et <a href="/fr/docs/Learn/JavaScript">JavaScript</a> ; une idée du
          haut niveau des
          <a
            href="/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
            >principes du test en navigateur croisé</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        <p>
          Être capable de diagnostiquer les problèmes courant de Javascript en
          navigateur croisé, et l'utilisation des outils et techniques
          appropriés pour les fixer.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Les problèmes avec le Javascript

Historiquement, Javascript présentaient des problèmes de compatibilité entre navigateurs — retour aux années 1990, les navigateurs majeurs jusqu'alors (Internet Explorer et Netscape) implémentaient des scripts dans différents langages (Netscape avait JavaScript, IE avait JScript et proposait aussi VBScript comme une option), et bien que JavaScript et JScript étaient compatibles dans une certaine mesure (les deux sont basés sur la spécification {{glossary("ECMAScript")}} ), les éléments étaient souvent implémentés avec des conflits, des incompatibilités, ce qui causait bien des cauchemards aux développeurs.

De tels problèmes d'incompabilités ont persistés jusqu'au début des années 2000, étant donné que les vieux navigateurs étaient encore utilisés et devaient donc encore être supportés par les site web. C'est une des raisons principale pour laquelle les librairies comme JQuery ont vu le jour — pour faire abstraction des différences entre les implémentations des navigateur (par ex. voir le bout de code dans [Lancement d'une requête HTTP](/fr/docs/Web/Guide/AJAX/Premiers_pas#.C3.89tape_1_.E2.80.94_Lancement_d.27une_requ.C3.AAte_HTTP)) comme ça la développeurs n'ont qu'à écrire un simple morceau de code (voir [`jQuery.ajax()`](http://api.jquery.com/jquery.ajax/)). JQuery (ou qu'importe la librarie que vous utilisez) procédera ensuite au traitement en arrière-plan, donc vous n'aurez pas à le faire.

Les choses se sont bien améliorées depuis ; les navigateurs modernes font un bon travail en supportant "les fonctionnalités classiques de JavaScript", et les conditions pour utiliser ce genre de code ont diminué comme les prérequis pour supporter les plus vieux navigateurs ont diminué (gardez toutefois à l'esprit qu'elles n'ont pas tout entièrement disparues).

De nos jours, la plupart des problèmes de JavaScript en navigateur croisé sont :

- Lorsque la mauvaise qualité du détecteur de code du navigateur, la fonctionnalité de détection de code ou l'utilisation des [préfixes vendeurs](/fr/docs/Glossaire/Pr%C3%A9fixe_Vendeur) empêchent les navigateurs d'exécuter du code qu'autrement ils pourraient utiliser sans difficultés.
- Lorsque les développeurs se servent de fonctionnalités nouvelles/naissantes JavaScript (par exemple les fonctionnalités [ECMAScript 6](/fr/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla) / [ECMAScript Next](/fr/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_Next_support_in_Mozilla), les APIs web modernes...) dans leur code, et trouvent que de telles fonctionnalités ne marchent pas sur d'anciens navigateurs.

Nous aborderons tout ces problèmes et d'autres encore plus bas.

## Résoudre les problèmes généraux en JavaScript

Comme nous le disions dans l'[article précédent](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_et_CSS#Commen%C3%A7ons_par_le_commencement_r%C3%A9soudre_les_probl%C3%A8mes_g%C3%A9n%C3%A9raux) sur le HTML/CSS, vous devriez vous assurer que votre code fonctionne en général, avant de vous concentrer sur les problèmes en navigateur-croisé. Si vous n'êtes pas encore trop familier avec les bases de [La résolution JavaScript](/fr/docs/Learn/JavaScript/First_steps/What_went_wrong), vous devriez étudier cet article avant de continuer. Il y a plusieurs problèmes courants en JavaScript avec lesquelles vous devez être attentif, comme :

- Les problèmes basiques de syntaxe et de logique (une fois encore, aller voir [La résolution JavaScript](/fr/docs/Learn/JavaScript/First_steps/What_went_wrong)).
- Définir des variables sûres, etc. qui sont défnies dans le périmètre correct, et que vous ne rencontrez pas des conflits entre des items déclarés à des endroits différents (voir [Function scope and conflicts](/fr/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)).
- La confusion à propos de [this](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this), concernant le périmètre auquel il s'applique, et par conséquent si sa valeur et celle que vous souhaitiez. Vous pouvez lire [Qu'est-ce que "this" ?](/fr/docs/Learn/JavaScript/Objects/Basics#Qu'est-ce_que_%C2%AB_this_%C2%BB) pour une simple introduction ; vous devriez également étudier des exemples comme [this one](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143), qui présente un modèle typique de sauvegarde du périmètre de `this` dans une variable séparée, puis utilise cette variable dans une fonction imbriquée pour que vous soyez sûr que vous appliquez la fonction au bon périmètre de `this`.
- Utiliser les fonctions de manière incorrecte dans les boucles — par exemple, dans [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (voir [code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), on boucle sur 10 itérations, à chaque fois on créé un paragraphe et on y ajoute un évènement gestionnaire [onclick](/fr/docs/Web/API/GlobalEventHandlers/onclick). Lorsqu'ils sont cliqués, chacun d'entre eux doit fournir un message d'alerte contenant son numéro (la valeur de `i` au moment où il était créé), cependant chacun d'entre eux retourne `i` comme 11, parce que les boucle for font toutes leurs itérations avant que les fonctions imbriquées ne soit appelées. Si vous voulez que ça marche correctement, vous devez définir une fonction pour ajouter le gestionnaire séparément, l'appellant à chaque itération et lui passer la valeur courante de `para` et `i` à chaque fois (ou quelque chose de similaire). Voir [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (voir également le [code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) pour une version qui fonctionne.
- S'assurer que les opérations asynchrones sont retournées avant d'essayer d'utiliser les valeurs qu'elles retournent. Par exemple, [cet exemple Ajax](/fr/docs/Web/Guide/AJAX/Premiers_pas#.C3.89tape_3_.E2.80.94_Un_exemple_simple) vérifie que la requête est complète et que la réponse a été retournée avant qu'on ait essayé d'utiliser cette réponse pour quoi que ce soit. Ce type d'opération a été rendue plus simple à gérer grâce à l'introduction des [Promises](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) dans le langage JavaScript.

> **Note :** [Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) a des discussions intéressantes à propos de ces erreurs courantes et plus encore.

### Les linters

Comme avec [le HTML et le CSS](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_et_CSS#Les_linters), vous pouvez garantir une meilleure qualité, vous êtes moins susceptible de faire des erreurs en utilisant un linter, qui vous signale les erreurs et met en évidence les avertissement concernant les mauvaises pratiques, etc., et peut être configuré pour être plus stricte ou plus coulant dans leurs rapport d'erreur/avertissement. Les linters JavaScript/ECMAScript que nous vous recommandons sont [JSHint](http://jshint.com/) et [ESLint](http://eslint.org/) ; ils peuvent être utilisés de différentes façons, nous détaillerons certaines d'entre elles plus bas.

#### En ligne

La [page d'accueil de JSHint](http://jshint.com/) fournit un linter en ligne, qui vous permet d'entrer votre code JavaScript sur la gauche et vous fournit un résultat sur la droite, incluant des indicateurs, des avertissements, et des erreurs.

![](jshint-online.png)

#### Les plugins des éditeurs de code

Ce n'est pas très pratique de devoir copier et coller votre code sur une page web pour vérifier sa validité à plusieur reprises. Ce dont vous avez vraiment besoin c'est un linter qui va s'adapter à votre espace de travail standard avec le minimum de prise de tête. Beaucoup d'éditeurs de code ont leur plugins linter, par exemple l'éditeur de code [Atom](https://atom.io/) de Github a un plugin JSHint disponible :

Pour l'installer :

1.  Installez Atom (si vous n'avez pas encore une version à jour déjà installée) — téléchargez-le depuis la page Atom linkée plus haut.
2.  Aller dans la boîte de dialogue _Préférences..._ d'Atom (par ex. en choisissant _Atom_ > _Préférences..._ sur Windows/Linux) et choisissez l'option _Installer_ dans le menu gauche.
3.  Dans le champs text _Rechercher packages_, taper "jslint" et presser Entrée/Envoyer pour rechercher des packages en liaisons avec le linting.
4.  Vous devriez voir un package appellé **lint** en haut de la liste. Installez-le en premier (en utilisant le bouton _Installer_), comme les autres sont dépendants de celui-ci pour fonctionner. Ensuite, installez le plugin **linter-jshint**.
5.  Une fois que les packages ont terminé de s'installer, essayez de charger un fichier JavaScript : vous verrez tous les problèmes surlignés en vert (pour les avertissements) et des cercles rouges (pour les erreurs) à côté des numéros de lignes, et un panneau séparé en bas qui vous fournit les numéros de lignes, les messages d'erreur, et parfois des valeur suggérées ou d'autres solutions.

![](jshint-linter.png)D'autres éditeurs répandus ont des packages similaires de linting disponibles. Par exemple, voir la section "Plugins for text editors and IDEs" de la [page d'installation de JSHint](http://jshint.com/install/).

#### Autres usages

Il y a d'autres façons d'utiliser de tels linter ; vous pouvez vous renseignez à ce propos sur les pages d'installation de [JSHint](http://jshint.com/install/) et [ESLint](http://eslint.org/docs/user-guide/getting-started).

Il convient de mentionner l'utilisation de ligne de commande — vous pouvez installer ces outils avec les utilitaires de ligne de commande (disponible via ILC — interface de ligne de commande) en utilisant npm (Node Package Manager — vous devrez installer [NodeJS](https://nodejs.org/en/) en premier). Par exemple, la ligne de commande suivante installe JSHint :

```bash
npm install -g jshint
```

Vous pouvez ensuite indiquer à ces outils les fichiers JavaScript que vous voulez lint, par exemple :![](js-hint-commandline.png)Vous pouvez également utiliser ces outils avec un exécuteur de tâche/outil de build comme [Gulp](http://gulpjs.com/) ou [Webpack](https://webpack.github.io/) pour linter automatiquement votre JavaScript pendant le développement. (voir [Using a task runner to automate testing tools](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#Using_a_task_runner_to_automate_testing_tools) dans un article ultérieur). Voir [ESLint integrations](http://eslint.org/docs/user-guide/integrations) pour les options de ESLint ; JSHint est supporté nativement par Grunt, et a également d'autre intégrations possibles, par ex. [JSHint loader for Webpack](https://github.com/webpack/jshint-loader).

> **Note :** ESLint prend un peu plus de temps à l'installation et à la configuration que JSHint, mais il est également plus puissant.

### Les outils de développement des navigateurs

Les outils de développement des navigateurs ont beaucoup de fonctionnalités utiles pour aider à déboguer JavaScript. Pour commencer, la console JavaScript reportera les erreurs dans votre code.

Faîtes une copie locale de notre exemple [broken-ajax.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/broken-ajax.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/broken-ajax.html)). Si vous regardez dans la console, vous verrez le résultat suivant :

![](broken-ajax.png)

Le message d'erreur affiche "TypeError: jsonObj is null", et le numéro de ligne signifiée et le 37. Si nous regardons le code source, la section de code concernée est celle-ci :

```js
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  ...
```

Le code casse aussitôt qu'on essaye d'accèder à `jsonObj` (ce qui comme vous pouvez vous y attendre, est supposé être un [objet JSON](/fr/docs/Learn/JavaScript/Objects/JSON)). C'est supposé aller le chercher dans un fichier externe `.json` en utilisant l'appel XMLHttpRequest suivant :

```js
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();

var superHeroes = request.response;
populateHeader(superHeroes);
showHeroes(superHeroes);
```

Mais cela échoue.

#### L'API Console

Vous savez peut-être déjà ce qui ne va pas avec ce code, mais analysons-le un peu plus pour vous montrer comment vous pouvez l'examiner. Premièrement, il y a une API [Console](/fr/docs/Web/API/Console) qui permet au code JavaScript d'interragir avec la console JavaScript du navigateur. Il y a un nombre de fonctionnalités disponibles, mais la principale que vous utiliserez le plus souvent est [`console.log()`](/fr/docs/Web/API/Console/log), qui affiche un message d'erreur personnalisé dans la console.

Essayer d'insérer la ligne suivante juste avant la ligne 31 (en gras au-dessus) :

```js
console.log('Response value: ' + superHeroes);
```

Rafraîchissez la page dans le navigateur, et vous obtiendrez un résultat dans la console comme celui-ci :

![](console-log.png)

Le résultat de `console.log()` montre que l'objet `superHeroes` ne semble pas contenir quoi que ce soit, bien que vous remarquerez que l'erreur a maintenant changé en "TypeError: heroes is undefined". Cela montre que l'erreur est intermittente, mettant ainsi en évidence qu'il s'agit d'une erreur asynchrone. Corrigeons l'erreur actuelle et avançons — retirer la ligne `console.log()`, et mettez à jour ce bloc de code :

```js
var superHeroes = request.response;
populateHeader(superHeroes);
showHeroes(superHeroes);
```

par le suivant :

```js
request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
```

Cela résout le problème asynchrone, en garantissant que les fonctions ne sont pas exécutées et passent l'objet `superHeroes` jusqu'à ce que la réponse ait fini de charger et soit disponible.

En résumé, à chaque fois que quelque chose ne marche pas et qu'une valeur ne paraît pas être ce qu'elle est censée être à un moment dans votre code, vous pouvez utiliser `console.log()` pour l'afficher et voir ce qu'il se passe.

#### Utiliser le débogueur JavaScript

Nous avons résolu un problème, mais nous sommes toujours coincés avec le message d'erreur "TypeError: heroes is undefined", reporté à la ligne 51. Examinons-la maintenant, en utilisant une fonctionnalité plus sophistiquée des outils de développement web : le [débogueur JavaScript](/fr/docs/Outils/D%C3%A9bogueur) comme il est appellé dans Firefox.

> **Note :** Des outils similaires sont disponibles dans d'autres navigateurs ; le [Sources tab](https://developers.google.com/web/tools/chrome-devtools/#sources) dans Chrome, le Débogueur dans Safari (voir [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), etc.

Dans Firefox, le Débogueur se présente comme suit :

![](debugger-tab.png)

- Sur la gauche, vous pouvez sélectionner le script que vous voulez déboguer (dans ce cas nous n'en n'avons qu'un seul).
- Le panneau central montre le code du script sélectionné.
- Le panneau de droite montre des détails utiles concernant l'environnement courant — les _Point d'arrêts_, la _Pile d'exécution_, et les _Portées_ actuellement actives.

La fonction principale de ces outils est la possibilité d'ajouter des points d'arrêt au code — ceux sont des points où l'exécution du code s'arrête, et à ce moment vous pouvez examiner l'environnement dans son état courant et voir ce qu'il se passe.

Mettons-nous au travail. Pour commencer, nous savons que l'erreur est renvoyée à la ligne 51. Cliquez sur la ligne numéro 51 dans le panneau central pour y ajouter un point d'arrêt (vous verrez une flèche bleue apparaître au-dessus de celle-ci). Maintenant rafraichissez la page (Cmd/Ctrl + R) — la navigateur arrêtera l'exécution du code à la ligne 51. A ce moment, le panneau de droite va se mettre à jour pour montrer des informations très utiles.

![](breakpoint.png)

- En-dessous de _Points d'arrêt_, vous verrez le détail du point d'arrêt que vous avez configuré.
- En-dessous de _Pile d'exécution_, vous verrez deux entrées — c'est principalement une liste de série de fonctions qui ont été appellées pour amener la fonction courante à être appellée. En haut, nous avons `showHeroes()` la fonction dans laquelle nous sommes actuellement, et en-dessous nous avons `request.onload`, qui stocke la fonction de gestion d'évènement contenant l'appel à `showHeroes()`.
- En-dessous de _Portées_, vous verrez la portée active courante pour la fonction que nous sommes en train d'observer. Nous n'en n'avons que deux — `showHeroes`, et `Window` (la portée globale). Chaque portée peut être déployée pour montrer les valeurs des variables à l'intérieur de la portée au moment où l'exécution du code était arrêtée.

Ici, nous pouvons obtenir des informations très utiles.

1.  Développez la portée `showHeroes` — vous pouvez voir depuis celle-ci que la variable heroes n'est pas définie, indiquant qu'accèder à la propriété `members` de `jsonObj` (première ligne de la fonction) ne marche pas.
2.  Vous pouvez également voir que la variable `jsonObj` stock une chaîne de caractères, pas un objet JSON.
3.  En examinant plus loin la pile d'exécutuion, cliquez sur `request.onload` dans la section _Pile d'exécution_. La vue va se mettre à jour pour afficher la fonction `request.onload` dans le panneau central, et sa portée dans la section _Portées_.
4.  Maintenant si vous développez la portée de `request.onload`, vous verrez que la variable `superHeroes` est également une chaîne de caractères, pas un objet. C'est la solution — notre appel [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) retourne le JSON comme du texte, pas comme du JSON.

> **Note :** Nous aimerions que vous essayez de résoudre ce problème par vous-même. Pour vous donner un indice, vous avez le choix entre [tell the XMLHttpRequest object explicitly to return JSON format](/fr/docs/Web/API/XMLHttpRequest/responseType), ou [conversion entre objet et texte](/fr/docs/Learn/JavaScript/Objects/JSON#Convertion_entre_objets_et_textes) après l'arrivée de la réponse. Si vous restez bloqué, consultez notre exemple [fixed-ajax.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/fixed-ajax.html).

> **Note :** L'onglet débogueur a tant d'autres fonctionnalités utiles que nous n'aborderons pas ici, par exemple les points d'arrêt conditionnels et les expressions espionnes. Pour bien plus d'informations, voyez la page du [Débogueur](/fr/docs/Outils/D%C3%A9bogueur).

### Les problèmes de performance

Dès que vos applis vont devenir plus complexes vous allez commencer à utiliser plus de JavaScript, vous pouvez commencer à rencontrer des problèmes de performances, particulièrement lorsque vous visionnez vos applis sur des appareils plus lents. La performance est un gros sujet, et nous n'avons pas le temps de le couvrir en détail ici. Voici quelques conseils rapides :

- Eviter de charger plus de JavaSacript que nécessaire, réunissez vos scripts dans un seul fichier en utilisant une solution comme [Browserify](http://browserify.org/). En général, réduire le nombre de requêtes HTTP est très bon pour la performance.
- S'assurer que vos fichiers sont le plus petits en les minifiant avant de les charger sur votre serveur de production. Minifier réduit tout le code en une seule et immense ligne, donnant au fichier une taille beaucoup moins importante. C'est vilain, mais vous n'avez pas besoin de la lire lorsque c'est terminé ! Cette tâche est la mieux réalisée avec un outil de minification comme [Uglify](https://github.com/mishoo/UglifyJS2) (il y aussi une version en ligne — voir [JSCompress.com](https://jscompress.com/)).
- Lorsque que vous utilisez des APIs, assurez-vous de désactiver les fonctionnalités de l'API quand elles ne sont pas utilisées ; certains appels d'API peuvent être très coûteux en puissance de traitement. Par exemple, lorsque vous montrez un stream video, assurez-vous que s'est désactivé quand vous ne pouvez pas le voir. Quand vous tracer la localisation d'un appareil en utilisant des appels répétés de Géolocalisation, assurez-vous de le désactiver quand l'utilisateur arrête de l'utiliser.
- Les animations peuvent être très coûteuses pour la performance. Beaucoup de librairies JavaScript fournissent des possibilités d'animation programmée avec JavaScript, mais c'est beaucoup plus rentable de faire les animations via les fonctionnalités natives des navigateurs comme [les Animations CSS](/fr/docs/Web/CSS/Animations_CSS) (ou la naissante [Web Animations API](/fr/docs/Web/API/Web_Animations_API)) qu'en JavaScript. Lisez  [Animating like you just don’t care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) pour des théories très utiles sur l'animation coûteuse, des conseils sur comment améliorer la performance des animations, et des informations à propos de l'API Web Animations.

> **Note :** Le [Writing Fast, Memory-Efficient JavaScript](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/ "Read 'Writing Fast, Memory-Efficient JavaScript'") de Addy Osmani contient beaucoup de détails et de astuces impeccables pour améliorer les performances en JavaScript.

## Les problèmes JavaScript en navigateur croisé

Dans cette section, nous regarderons certains des problèmes JavaScript les plus courants en navigateur croisé. Nous la décomposerons en :

- Utiliser les fonctionnalités JavaScript principales et modernes
- Utiliser les fonctionnalités modernes de l'API Web
- Utiliser des mauvais détecteurs de code de navigateur
- Les problèmes de performance

### Utiliser des fonctionnalités JavaScript/API modernes

Dans l'[article précédent](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_et_CSS#Les_vieux_navigateurs_ne_supportant_pas_les_fonctionnalit%C3%A9s_r%C3%A9centes) nous décrivions quelques façons dont les erreurs HTML et CSS et les fonctionnalités non reconnues peuvent être gérées grâce à la nature du langage. JavaScript n'est toutefois pas autant permissif que le HTML et le CSS — si le moteur de JavaScript rencontre une faute ou une syntaxe inconnue, le plus souvent il renverra des erreurs.

Il y a plusieurs fonctionnalités modernes du langage JavaScript décrites dans les versions récentes des spécifications ([ECMAScript 6](/fr/docs/Web/JavaScript/Nouveaut%C3%A9s_et_historique_de_JavaScript/Support_ECMAScript_2015_par_Mozilla) / [ECMAScript Next](/fr/docs/Web/JavaScript/Nouveaut%C3%A9s_et_historique_de_JavaScript/Support_ECMAScript_Next_par_Mozilla)) qui ne marchent tout simplement pas sur les plus vieux navigateurs. Certaines d'entre elles sont des améliorations syntaxiques (essentiellement une façon plus simple, adéquate d'écrire ce que vous pouvez déjà écrire en utilisant des fonctionnalités existantes), et certaines offrent de nouvelles possibilités intéressantes.

Par exemple :

- Les [Promises](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) sont une super nouvelle fonctionnalité pour réaliser des opérations asynchrones et s'assurer que c'est opérations sont complètes avant que le code qui s'appuie sur eux ne soit utiliser pour autre chose. A titre d'exemple, l'[API Fetch](/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch) (un équivalent moderne de [XMLHTTPRequest](/fr/docs/Web/API/XMLHttpRequest)) utilise les promises pour rapporter les ressources à travers le réseau et s'assurer que la réponse a été retournée avant qu'elles ne soient utilisées (par exemple afficher une image dans un élément {{htmlelement("img")}} ). Elles ne sont pas du tout supportées par IE mais sont supportées par tous les navigateurs modernes.
- Les fonctions fléchées apportent une syntaxe courte, plus convenable pour écrire des [anonymous functions](/fr/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions), ce qui a aussi d'autres avantages (voir [Fonctions Fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)). Comme exemple rapide, voir [arrow-function.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/arrow-function.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/arrow-function.html)). Les fonctions fléchées sont supportées par tous les navigateurs modernes, excepté par IE et Safari.
- Déclarer [le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) en haut de votre code JavaScript l'amène à être décomposé en une liste de règles plus strictes, impliquant que plus d'avertissements et d'erreurs seront retournés, et certaines choses seront rejetées qui auraient normalement été acceptées. C'est probablement une bonne idée d'utiliser le mode stricte, comme il permet une amélioration et une meilleur efficacité du code, bien qu'il ait un support limité/incomplet selon les navigateurs (voir [Le mode strict dans les navigateurs](/fr/docs/Web/JavaScript/Reference/Strict_mode#Le_mode_strict_dans_les_navigateurs)).
- [Les tableaux typés](/fr/docs/Web/JavaScript/Tableaux_typ%C3%A9s) permettent au code JavaScript d'accéder et de manipuler des données binaires brutes, ce qui est indispensable pour les APIs navigateur par exemple qui commencent à manipuler les streams des données vidéo et audio brutes.

Il y a également beaucoup de nouvelles APIs qui apparaissent dans les navigateurs récents, qui ne fonctionnent pas sur les plus vieux navigateurs, par exemple :

- L'[API IndexedDB](/fr/docs/Web/API/API_IndexedDB), L'[API Web Storage](/fr/docs/Web/API/Web_Storage_API), et d'autres pour stocker des données d'un site web côté client.
- L'[API Web Workers](/fr/docs/Web/API/Web_Workers_API) pour exécuter du JavaScript dans un thread séparé, aidant à améliorer la performance.
- L'[API WebGl](/fr/Apprendre/WebGL) pour des graphiques 3D réels.
- L'[API Web Audio](/fr/docs/Web/API/Web_Audio_API) pour de la manipulation audio avancée.
- L'[API WebRTC](/fr/docs/Web/API/WebRTC_API) pour la connectivité multi-personne, de la vidéo/audio en temps réel (par ex. une vidéo conférence)
- L'[API WebVR](/fr/docs/Web/API/WebVR_API) pour concevoir des expériences en réalité virtuelle dans le navigateur (par ex. contrôler une vue 3D avec de l'introduction de données depuis le disque dur VR)

Il y a plusieurs stratégies pour gérer les incompatibilités entre navigateurs concernant le support de fonctionnalité ; explorons les plus courantes.

> **Note :** Ces stratégies n'existent pas dans des endroits distincts — bien sûr, vous pouvez les combiner autant que nécessaire. Par exemple, vous pourriez utiliser une fonction de détection pour déterminer si une fonctionnalité est supportée ; si elle ne l'est pas, vous pouvez ensuite exécuter le code pour charger un polyfill ou une libraire pour gérer le manque de support.

#### Fonctionnalité de détection

L'idée derrière une fonctionnalité de détection est que vous pouvez exécuter un test pour déterminer si une fonctionnalité est supportée dans le navigateur courant, et ensuite exécuter conditionnellement un code pour fournir une expérience acceptable sur chaque navigateur qui supporte et ne supporte pas la fonctionnalité. A titre d'exemple rapide, l'[API Geolocalisation](/fr/docs/Using_geolocation) (qui présente des données de localisation pour l'appareil sur lequel le navigateur est en train d'être exécuté) a un point d'entrée principal pour son utilisation — une propriété `geolocation` disponible dans l'objet global [Navigator](/fr/docs/Web/API/Navigator).  Par conséquent, vous pouvez détecter si le navigateur supporte la géolocalisation ou non en utilisant quelque chose comme suit :

```js
if("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead perhaps
}
```

Vous pouvez également écrire un test de ce type pour une fonctionnalité CSS, par exemple en testant l'existence de _[element.style.property](/fr/docs/Web/API/HTMLElement/style)_ (par ex. `paragraph.style.transform !== undefined`). Mais autant pour CSS que JavaScript, il est probablement préférable d'utiliser une librairie de fonction de détection établie plutôt que d'écrire la votre tout le temps. Modernizr est la norme standard pour les tests de fonction de détection.

Enfin, ne confondez pas fonction de détection avec **le détecteur navigateur** (qui détecte quel navigateur en particulier accède au site) — c'est une terrible pratique qui devrait être découragée à tout prix. Voir {{anch("Using bad browser sniffing code")}}, plus tard, pour plus de détails.

> **Note :** Certaines fonctionnalités sont connues pour être indétectables — voir la liste des [Undetectables](https://github.com/Modernizr/Modernizr/wiki/Undetectables) de Modernizr.

> **Note :** La fonction de détection sera couverte avec beaucoup plus de détails dans son propre article dédié, plus tard dans le module.

#### Les librairies

Les librairies JavaScript sont essentiellement une partie externe d'unités de code que vous pouvez attacher à vos pages, afin de vous procurer une quantité de fonctionnalités toutes prêtes qui peuvent être utilisées immédiatement, constituant un gain de temps dans le processus. Beaucoup de librairies ont sûrement été créées parce que leurs développeurs écrivaient une liste de fonctions utiles courantes pour leur faire gagner du temps dans leur futurs projets, et ils décidèrent de les lâcher dans la nature parce que d'autres personnes pourraient aussi les trouver utiles.

Les librairies Javascript ont tendance à se réunir en quelques types principaux (certaines librairies serviront plus d'un de ces types) :

- Les librairies utilitaires : Fournissent une quantité de fonctions pour rendre les tâches sans intérêts plus simples et moins ennuyantes à gérer. [jQuery](http://jquery.com/) par exemple fournit son propre système de sélecteurs et de librairies de manipulation de DOM, pour permettre le choix du type de sélecteur CSS, des éléments en JavaScript et une construction du DOM plus simple. Ce n'est plus aussi important aujourd'hui nous avons des fonctionnalités modernes comme les méthodes {{domxref("Document.querySelector()")}}/{{domxref("Document.querySelectorAll()")}}/{{domxref("Node")}} disponibles selon les navigateurs, mais ça peut toujours être utile quand vous avez besoin de supporter de plus vieux navigateurs.
- Les librairies de confort : Rendent les choses difficiles plus facile à faire. Par exemple, l'[API WebGL](/fr/Apprendre/WebGL) est vraiment complexe et  se révèle difficile à écrire directement, alors la librairie [Three.js](https://threejs.org/) (et d'autres) est construite au-dessus de WebGL et apporte une API plus simple pour créer des objets 3D courants, des aspects, des textures etc. L'[API Service Worker](/fr/docs/Web/API/Service_Worker_API) est aussi très complexe à utiliser, alors des librairies de code ont commencé à apparaitre pour rendre des cas d'usage des Service Worker plus facile à implémenter (voir le [Service Worker Cookbook](https://serviceworke.rs/) pour plusieurs extrait de code utiles).
- Les librairies d'effets : Ces librairies sont conçues pour vous permettre d'ajouter facilement des effets spéciaux à votre site web. C'était plus utile quand {{glossary("DHTML")}} était à la mode, et implémentait des effets impliquant beaucoup de JavaScript complexe, mais de nos jours les navigateurs ont construit une quantité de fonctionnalités en CSS3 et des APIs pour implémenter les effets plus facilement. Pour une liste de librairies, se référer à [JavaScripting.com/animation](https://www.javascripting.com/animation/).
- Les librairies d'UI : Fournissent des méthodes pour implémenter des fonctionnalités UI complexes qui serait autrement compliquées à implémenter et à faire fonctionner en navigateur croisé, par exemple [jQuery UI](http://jqueryui.com/) et [Foundation](http://foundation.zurb.com/). Elles ont tendance à être utilisées comme les bases de la configuration de sites complets ; c'est souvent difficile de les implémenter uniquement pour une fonctionnalité UI.
- Les librairies de nomalisation : Vous fournissent une syntaxe simple qui vous permet de compléter facilement une tâche sans avoir à vous soucier des différences entre navigateur. la librairie utilisera les APIs appopriées en arrière-plan donc la fonctionnalité marchera qu'importe le navigateur (en théorie). Par exemple, [LocalForage](https://github.com/localForage/localForage) est une librairie pour le stockage de données côté client, qui fournit une syntaxe simple pour stocker et extraire les données. En arrière-plan, elle utilise la meilleure API que la navigateur possède pour stocker les données,  que ça soit [IndexedDB](/fr/docs/Web/API/API_IndexedDB), [Web Storage](/fr/docs/Web/API/Web_Storage_API), ou encore WebSQL (qui est maintenant désapprouvée, mais qui est encore supportée dans certaines vieilles versions de Safari/IE). Comme autre exemple, JQuery.

Lorsque vous choissisez une librairie pour l'utiliser, assurez-vous qu'elle fonctionne sur l'ensemble des navigateurs que vous voulez supporter, et tester vos implémentations minutieusement. Assurez-vous également que la librairie est répandue et bien supportée, et qu'elle ne va pas devenir obsolète la semaine prochaine. Parler à d'autres développeurs pour savoir ce qu'ils peuvent vous recommander, regarder l'activité et combien de contributeurs la librairie a sur Github (ou qu'importe où elle est stockée), etc.

> **Note :** [JavaScripting.com](https://www.javascripting.com/) vous donne une idée d'à peu près combien de librairies JavaScript sont disponibles, et peut être utile pour trouver une librairie dans un but précis.

L'utilisation de librairie à un niveau basique consiste à télécharger les fichiers de la librairie (JavaScript, peut-être un peu de CSS ou d'autres dépendances) et à les attacher à votre page (par ex. via un élément {{htmlelement("script")}}, bien qu'il y ait normalement plein d'autres options d'utilisation pour de telles librairies, comme les installer comme des composants [Bower](https://bower.io/), ou les inclure comme des dépendances avec le module de paquets [Webpack](https://webpack.github.io/). Vous devrez lire les pages d'installation individuelles des librairies pour plus d'information.

> **Note :** Vous allez aussi tomber sur des frameworks JavaScript pendant votre voyage dans le Web, comme [Ember](http://emberjs.com/) et [Angular](https://angularjs.org/). Alors que les librairies sont souvent utilisées pour résoudre des problèmes individuels et ajoutées dans des sites existants, les frameworks ont tendances à être utilisés plus pour des solutions complètes pour développer des applications web complexes.

#### Les Polyfills

Les polyfills sont aussi des sortes de fichiers JavaScript externes que vous pouvez ajouter à votre projet, mais ils sont différents des librairies — là où les librairies améliorent les fonctionnalités existantes et rendent les choses plus simples, les polyfills apportent des fonctionnalités qui n'existent pas du tout. Les polyfills utilisent JavaScript ou d'autres technologies pour créer entièrement du support pour des fonctionnalités qu'un navigateur ne supporte pas nativement. Par exemple, vous pouvez utiliser un polyfill comme [es6-promise](https://github.com/stefanpenner/es6-promise) pour faire fonctionner les promises sur des navigateurs où elles ne fonctionneraient pas nativement.

La liste des modernizr [HTML5 Cross Browser Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills) est utile pour trouver des polyfills pour différents objectifs. Une fois encore, renseignez-vous sur eux avant de les utiliser — assurez-vous qu'ils fonctionnent et qu'ils sont maintenus.

Observons cet exercice — dans cet exemple nous allons utiliser un polyfill Fetch pour fournir du support pour une API Fetch dans de vieux navigateurs ; nous avons toutefois également besoin d'utiliser le polyfill es6-promise, comme Fetch utilise largement les promises, et les navigateurs qui ne les supportent pas seront toujours bloqués.

1.  Pour commencer, faîtes une copie locale de notre exemple [fetch-polyfill.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/fetch-polyfill.html) et de [notre belle image de fleurs](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/flowers.jpg) dans un nouveau répertoire. Nous allons écrire du code pour récupérer l'image de fleurs et l'afficher sur la page.
2.  Ensuite, sauvegarder les copies de [Fetch polyfill](https://raw.githubusercontent.com/github/fetch/master/fetch.js) et de [es6-promises polyfill](https://raw.githubusercontent.com/stefanpenner/es6-promise/master/dist/es6-promise.js) dans le même répertoire que le HTML.
3.  Appliquer les scripts de polyfill à la page en utilisant le code suivant — placez-les au-dessus de l'élément {{htmlelement("script")}} existant ainsi ils seront déjà disponibles sur la page quand on essaiera d'utiliser Fetch :

    ```js
    <script src="es6-promise.js"></script>
    <script src="fetch.js"></script>
    ```

4.  Dans le {{htmlelement("script")}} original, ajoutez le code suivant :
5.  ```js
    var myImage = document.querySelector('.my-image');

    fetch('flowers.jpg').then(function(response) {
      response.blob().then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
      });
    });
    ```

6.  Maintenant si vous le chargez dans un navigateur qui ne supporte pas Fetch (Safari et IE sont des candidats de choix), vous devriez quand même voir l'image de la fleur apparaitre — cool !
    ![](fetch-image.jpg)

> **Note :** Vous pouvez consulter notre version terminée sur [fetch-polyfill-finished.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html)).

> **Note :** Une fois encore, il y a plusieurs manières différentes d'utiliser les différents polyfills que vous allez rencontrer — consulter chaque documentation individuelle d'un polyfill.

Une chose à laquelle vous devez penser est "pourquoi devrions-nous toujours charger le code polyfill, même si nous n'en avons pas besoin ?" C'est une bonne remarque — plus vos sites vont devenir complexes et plus vous aller commencer à utiliser de librairies, de polyfills, etc., vous pouvez commencer à charger beaucoup de code supplémentaire, qui peut commencer à affecter la performance, spécialement sur des appareils peu puissants. Il est donc normal de ne charger les fichiers que quand ils sont nécessaires.

Faire cela nécessite un peu de code supplémentaire dans votre JavaScript. Vous avez besoin d'un test de détection de caractéristiques qui détecte si le navigateur supporte la fonctionnalité que vous essayez d'utiliser :

```js
if (browserSupportsAllFeatures()) {
  main();
} else {
  loadScript('polyfills.js', main);
}

function main(err) {
  // actual app code goes in here
}
```

En premier temps on exécute une condition qui vérifie si la fonction `browserSupportAllFeatures()` retourne true. Si oui, on exécute la fonction `main()`, qui contiendra tout le code de notre app. `browserSupportAllFeatures()` ressemble à ça :

```js
function browserSupportsAllFeatures() {
  return window.Promise && window.fetch;
}
```

Ici on vérifie si l'objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) et la fonction [`fetch()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch) existent dans le navigateur. Si les deux existent, la fonction retourne true. Si la fonction retourne `false`, alors on exécute le code à l'intérieur de la deuxième partie de la condition — elle exécute une fonction appelée loadScript(), qui charge les polyfills dans la page, puis exécute `main()` après que le chargement soit terminé. `loadScript()` ressemble à ça :

```js
function loadScript(src, done) {
  var js = document.createElement('script');
  js.src = src;
  js.onload = function() {
    done();
  };
  js.onerror = function() {
    done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
}
```

Cette fonction créé un nouvel élément `<script>`, puis applique son attribut `src` au chemin que nous avons spécifié en premier argument (`'polyfills.js'` dont nous parlions dans le code au-dessus). Une fois qu'il est chargé, nous exécutons la fonction que nous avons spécifié en deuxième argument (`main()`). Si une erreur se produit pendant le chargement du script, on continue d'appeler la fonction, mais avec une erreur personnalisée que nous pouvons retrouver pour faciliter le débug d'un problème s'il arrive.

Notez que ce polyfills.js correspond aux deux polyfills que nous utilisons réunis dans un fichier. Nous l'avons fait manuellement, mais il y a des solutions intelligentes qui généreront automatiquement des paquets pour vous — voir [Browserify](http://browserify.org/) (pour un tutoriel de départ voir [Getting started with Browserify](https://www.sitepoint.com/getting-started-browserify/)). C'est une bonne idée de paqueter les fichiers JS en un seul comme ça — cela réduit le nombre de requêtes HTTP ce qui améliore la performance de votre site.

Vous pouvez voir le code en direct sur [fetch-polyfill-only-when-needed.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html) (voir aussi [le code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html)). Nous aimerions être clairs sur le fait qu'on ne peut s'attribuer ce code — il a été écrit à la base par Philip Walton. Aller voir son article [Loading Polyfills Only When Needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/) pour le code original, et beaucoup d'explications utiles autour de ce large sujet.

> **Note :** Il y a certaines options externes à prendre en considération, par exemple [Polyfill.io](https://polyfill.io/v2/docs/) — c'est une librairie méta-polyfill qui va regarder toutes les capacités de chaque navigateur et appliquer les polyfills nécessaires, selon quelles APIs et fonctionnalités JS vous utilisez dans votre code.

#### Le transpiling Javascript

Une autre option qui et devenue populaire pour les gens qui veulent utiliser des fonctionnalités Javascript modernes dès maintenant consiste à convertir le code qui utilise les fonctionnalités ECMAScript 6/ECMAScript 2015 en une version qui fonctionnera sur les vieux navigateurs.

> **Note :** Cela s'appelle le "transpiling" — vous n'êtes pas en train de compiler du code à un niveau inférieur pour qu'il soit exécuté sur un ordinateur (comme vous l'auriez fait avec du code C) ; en fait, vous êtes en train de le transformer dans une syntaxe qui existe à un niveau similaire d'abstraction pour qu'il puisse être utilisé de la même manière, mais avec des conditions légèrement différentes (dans ce cas, transformer un type de JavaScript dans un autre).

Pour l'exemple, nous parlions des fonctions fléchées (voir [arrow-function.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/arrow-function.html) en direct, et voir le [code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/arrow-function.html)) plus tôt dans l'article, qui ne marchent que sur les tout nouveaux navigateurs :

```js
() => { ... }
```

Nous pouvons le transpiler en une traditionnelle et démodée fonction anonyme, donc il fonctionnera aussi sur les vieux navigateurs :

```js
function() { ... }
```

L'outil recommandé pour transpiler du JavaScript est généralement [Babel](https://babeljs.io/). Il fournit la capacité de transpilation pour des fonctionnalités de langages qui sont appropriées à la transpilation. Pour les fonctionnalités qui peuvent juste être facilement transpilées en un équivalent plus ancien, Babel offre aussi des polyfills pour apporter du support.

La meilleure façon d'essayer Babel et d'utiliser la [version en ligne](https://babeljs.io/repl/), qui vous permet d'entrer votre code source sur la gauche, et une version transpilée sort sur la droite.

> **Note :** Il y a plein de façon d'utiliser Babel (exécuteurs de tâche, outil d'automatisation, etc.), comme vous le verrez sur la [page d'installation](https://babeljs.io/docs/setup/).

### Utiliser une mauvaise détection de code de navigateur

Tous les navigateurs ont un **user-agent**, qui identifie de quel navigateur il s'agit (version, nom, OS, etc.) Durant cette époque sombre où la plupart des gens utilisaient Netscape ou Internet Explorer, les développeurs avaient l'habitude d'utiliser les dénommés **détecteur de code de navigateur** pour détecter quel navigateur l'utilisateur utilisait et leur fournir le code approprié pour qu'il fonctionne sur ce navigateur.

Le code utilisé ressemble à quelque chose comme ça (bien que ça soit un exemple simplifié) :

```js
var ua = navigator.userAgent;

if(ua.indexOf('Firefox') !== -1) {
  // run Firefox-specific code
} else if(ua.indexOf('Chrome') !== -1) {
  // run Chrome-specific code
}
```

L'idée était assez bonne — détecter quel navigateur affiche le site, et exécuter le code approprié pour s'assurer que le navigateur sera à même de bien utiliser votre site.

> **Note :** Essayez maintenant d'ouvrir votre console JavaScript et d'exécuter navigator.userAgent pour voir ce qui est retourné.

Cependant, le temps passant, les développeurs ont commencé à voir des graves problèmes avec cette approche. Pour commencer, le code était source d'erreur. Et si une nouvelle fonctionnalité ne marche pas sur disons, Firefox 10 et inférieur, on implémente du code pour détecter cela, puis Firefox 11 arrive — est-ce qu'il supportera cette fonctionnalité ? Firefox 11 ne sera sûrement pas supporté parce qu'il n'est pas Firefox 10. Vous aurez à changer tout votre code de détection régulièrement.

Beaucoup de développeurs on implémenté de mauvais détecteur de code de navigateur et ne l'ont pas maintenu, et les navigateurs ont commencé à être bloqués en allant sur des sites web contenant des fonctionnalités qu'ils avaient déjà implémenté. C'est devenu une pratique commune que les navigateurs commencent à mentir à propos de quel navigateur ils étaient dans leur chaîne d'user-agent (ou déclarer qu'ils étaient tous les navigateurs), pour passer outre les détecteurs de code. Les navigateurs ont également implémenté des moyens pour permettre aux utilisateurs de changer quels chaîne d'user-agent le navigateur doit retourné lorsqu'il est interrogé par du JavaScript. Tout cela fait du détecteur de code bien plus qu'une source d'erreur, et d'inutilité.

> **Note :** Vous devriez lire [History of the browser user-agent string](http://webaim.org/blog/user-agent-string-history/) de Aaron Andersen pour une présentation utile et amusante de cette situation.

La leçon à retenir ici est — ne JAMAIS utiliser de détecteur de code. Le seul cas d'usage pour le détecteur de code de nos jours c'est si vous implémentez un fix pour un bug pour une version très particulière d'un navigateur en particulier. Même dans ce cas, la plupart des bugs sont fixés rapidement dans le cycle rapide des sorties des navigateurs. Cela n'arrive pas très souvent. {{anch("Feature detection")}} est presque toujours une meilleure option — si vous détectez si une fonctionnalité est supportée, vous n'aurez pas besoin de changer votre code quand de nouvelles versions de navigateur sortiront, et les tests sont bien plus fiables.

Si vous rejoignez un projet existant où il y a déjà de la détection de navigateur, regardez si elle peut être remplacée avec quelque chose de plus pratique. La détection de navigateur est à l'origine de toutes sortes de bugs curieux, comme {{bug(1308462)}}.

### Gérer les préfixes JavaScript

Dans l'article précédent, nous parlions quelque peu de la [gestion des préfixes CSS](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_et_CSS#Gestion_des_pr%C3%A9fixes_CSS). Alors, les nouvelles implémentations JavaScript utilisent parfois aussi des préfixes, bien que JavaScript utilise le camel case plutôt que l'hyphenation comme CSS. Par exemple, si un préfixe est utilisé sur un objet d'une toute belle API appelée `Ojbect` :

- Mozilla utilisera `mozObject`
- Chrome/Opera/Safariutiliseront `webkitObject`
- Microsoft utilisera `msObject`

Voici un exemple, issu de notre [demo violent-theremin](http://mdn.github.io/violent-theremin/) (voir le [code source](https://github.com/mdn/violent-theremin)), qui utilise une combinaison de l'[API Canvas](/fr/docs/Web/HTML/Canvas) et de l'[API Web Audio](/fr/docs/Web/API/Web_Audio_API) pour créer un outil de dessin marrant (et bruyant) :

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
```

Dans le cas de l'API Web Audio, les principaux points d'entrée pour utiliser l'API étaient supportés dans Chrome/Opera via les versions préfixées `webkit` (ils supportent dorénavant les versions non préfixées). Le moyen le plus simple de contourner cette situation est de créer une nouvelle version des objets qui sont  préfixés dans certains navigateurs, et de la rendre égale à la version non préfixée, OU à la version préfixée (OU n'importe quelles versions préfixées qui méritent d'être éxaminées) — quelle que soit celle supportée par le navigateur affichant le site elle sera utilisée.

Ensuite utilisez cet objet pour manipuler l'API, plutôt que l'original. Dans ce cas nous créons un constructeur [AudioContext](/fr/docs/Web/API/AudioContext) modifié, puis nous créons une nouvelle instance de contexte audio à utiliser pour notre codage Web Audio.

Ce modèle peut être appliqué pour toutes les fonctionnalités JavaScript préfixées. Les librairies/polyfills JavaScript utilise également ce type de code, pour faire abstraction au maximum des différences entre navigateurs pour le développeur.

Une fois encore, les fonctions préfixées n'ont jamais été supposées être utilisées sur des sites web en production — elles sont sujettes au changement ou au retrait sans avertissement, et causent de problèmes en navigateur croisé. Si vous persistez à utiliser des fonctions préfixées, assurez-vous d'utiliser les bonnes. Vous pouvez voir quels navigateurs nécessitent des préfixes pour les différents fonctionnalités JavaScript/API sur les pages de références MDN, et des site comme [caniuse.com](http://caniuse.com/). Si vous n'êtes pas sûr, vous pouvez aussi vérifier en faisant quelques test directement dans des navigateurs.

Par exemple, essayez d'aller dans la console de développeur de votre navigateur et commencez à taper

```js
window.AudioContext
```

Si cette fonctionnalité est supportée par votre navigateur, elle s'autocomplètera.

## Trouver de l'aide

Il y'a bien d'autres problèmes que vous allez rencontrer avec le JavaScript ; la chose la plus importante à vraiment savoir est comment trouver des réponses en ligne. Consultez [la section Trouver de l'aide](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_et_CSS#Trouver_de_l'aide) de l'article sur le HTML et CSS pour nos meilleurs conseils.

## Résumé

Voilà c'est le JavaScript. Facile hein ? Peut-être pas aussi facile, mais cet article devrait au moins vous donner un départ, et quelques idées sur comment attaquer les problèmes liés au JavaScript que vous allez rencontrer.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}

## Dans ce module

- [Introduction au test en navigateur croisé](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
- [Stratégies pour mener à bien vos tests](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
- [Gérer les problèmes courants en HTML et CSS](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_et_CSS)
- [Handling common JavaScript problems](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
- [Handling common accessibility problems](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
- [Implementing feature detection](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- [Introduction to automated testing](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
- [Setting up your own test automation environment](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
