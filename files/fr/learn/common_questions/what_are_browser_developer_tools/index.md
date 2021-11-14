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
{{IncludeSubnav("/fr/Apprendre")}}{{Previous("Apprendre/Commencer_avec_le_web")}}

Tous les navigateurs modernes possèdent un ensemble d'outils destinés aux développeurs. Ces outils permettent de réaliser différentes actions : inspecter le code HTML, CSS ou JavaScript chargé à la volée dans la page, montrer les fichiers téléchargés et le temps de chargement, etc. Dans cet article, nous verrons comment utiliser les fonctionnalités basiques des outils de développements d'un navigateur (parfois appelés avec l'anglicisme « _devtools_ »).

> **Note :** Avant de poursuivre avec les exemples présentés ci-après, nous vous conseillons d'utiliser [l'exemple construit](http://mdn.github.io/beginner-html-site-scripted/) dans la série d'articles [Commencer avec le Web](/fr/Apprendre/Commencer_avec_le_web) et d'ouvrir le site dans votre navigateur pour poursuivre avec les étapes suivantes.

## Comment ouvrir les outils de développement d'un navigateur

Les _devtools_ s'affichent généralement dans une sous-fenêtre du navigateur, de la façon suivante (cela peut varier légèrement) :

![Affichage de la fenêtre principale avec les devtools ouverts](DSC02620.png)

Comment faire pour que cette sous-fenêtre apparaisse ? Trois méthodes :

- **_Au clavier._** _Ctrl + Shift + I_, sauf pour :

  - **Internet Explorer.** _F12_
  - **Mac OS X.** *⌘ + ⌥ + I*

- **_Via les menus._**

  - **Firefox.** Menu _➤_ _Développement ➤ Outils de développement_ ou _Outils_ _➤_ _Développement Web ➤ Outils de développement_
  - **Chrome.** _Affichage ➤ Développement ➤ Outils de développement_
  - **Safari.** _Développement ➤ Afficher l'inspecteur web._ Si vous ne pouvez pas voir le menu _Développement_, aller sous _Safari ➤ Préférences ➤ Avancé_ et vérifiez que l'option _Afficher le menu de développement_ est bien coché.
  - **Opera**. _Développement ➤ Inspecteur web_

- **_Via un menu contextuel._** Cliquez-droit sur un élément de la page web (ou ctrl+clic sur Mac) et sélectionnez _Examiner l'élément_ dans le menu qui apparait (_Bonus :_ cette méthode ouvrira l'inspecteur et sélectionnera directement l'élément en question !).

![Menu contextuel suite au clic-droit](devtools.png)

## L'inspecteur : explorateur du DOM et éditeur CSS

Lorsqu'ils s'ouvrent, les outils de développement s'affichent comme illustré dans la capture d'écran ci-après. Cet outil permet de voir le HTML présent sur la page au moment où celle-ci est affiché, de façon dynamique. Il permet aussi de voir quelles règles CSS sont appliquées pour chaque élément de la page. Grâce à cet outil, on peut modifier le HTML et le CSS de façon instantanée et voir les changements appliqués immédiatement à la page affichée dans le navigateur.

![Affichage de la fenêtre principale avec les devtools ouverts](DSC02620.png)

Si vous n'arrivez pas sur l'inspecteur :

- Cliquez ou appuyez l'onglet _Inspecteur_.
- Sous Internet Explorer, cliquez ou appuyez sur _Explorateur DOM_, ou appuyez sur Ctrl + 1.
- Sous Safari, les contrôles n'apparaissent pas clairement mais vous devriez voir le code HTML si vous n'avez rien sélectionné d'autre. Pour voir le code CSS, appuyez sur le bouton _Style_.

### Manipuler l'inspecteur du DOM

Pour commencer, cliquez-droit sur un élément HTML dans l'inspecteur du DOM et regardez le menu contextuel qui s'affiche. Les options du menu qui apparaît peuvent varier d'un navigateur à un autre mais les options les plus importantes s'y trouvent toujours :

![Menu contextuel ouvert suite à un clic-droit sur un élément HTML dans l'explorateur du DOM](menu_contextuel.png)

- **Supprimer le nœud** (parfois _Supprimer l'élément_) : supprime l'élément sélectionné du document.
- **Modifier comme HTML** (parfois _Ajouter un attribut_/_Éditer le texte_) : permet de changer le HTML et de voir le résultat obtenu à la volée (en _live_). Cette option est très utile pour déboguer ou tester.
- **:hover/:active/:focus** : force l'état d'un élément à être actif afin de pouvoir voir ce que la mise en forme donne pour cet état.
- **Copier/Copier comme HTML** : permet de copier l'élément HTML actuellement sélectionné.
- Certains navigateurs disposent également d'options comme _Copier le chemin CSS_ et/ou _Copier le chemin XPath_ qui permettent de copier le sélecteur CSS ou l'expression XPath qui permettrait de sélectionner l'élément HTML en cours.

Essayez d'éditer le DOM de votre page. Double-cliquez sur un élément ou cliquez-droit puis choisissez « Modifier comme HTML » depuis le menu contextuel. Vous pouvez modifier tout ce que vous voulez mais vous ne pouvez pas sauvegarder vos modifications.

### Manipuler l'éditeur CSS

Par défaut, l'éditeur CSS affiche les règles CSS qui s'appliquent à l'élément qui est sélectionné :

![](css-viewer-2.png)

Ces fonctionnalités sont plutôt pratiques :

- Les règles qui s'appliquent à l'élément courant sont affichées en commençant avec les règles les plus spécifiques et en terminant avec les règles les moins spécifiques.
- Il est possible de cocher les boîtes à côté de chaque déclaration pour voir l'effet qui serait obtenu si la déclaration était supprimée.
- Vous pouvez cliquer sur la petite flèche à côté de chaque propriété en notation résumée pour voir les équivalents en notation détaillée.
- Vous pouvez cliquer sur le nom d'une propriété ou d'une valeur pour éditer une valeur en live et immédiatement voir le changement.
- À côté de chaque règle, si celle-ci est « dépliée », vous pouvez voir le nom du fichier et la ligne sur laquelle la règle est définie. En cliquant sur le lien, vous arriverez directement sur le fichier CSS que vous pourrez éditer et sauvegarder.
- Vous pouvez également cliquer sur l'accolade fermant d'une règle donnée pour afficher une nouvelle zone de texte dans laquelle vous pourrez écrire une toute nouvelle déclaration.

Vous aurez remarqué plusieurs onglets en haut du panneau pour le CSS :

- _Calculé_ : cet onglet affiche les styles calculés pour l'élément sélectionné (les valeurs finales, normalisées, appliquées par le navigateur).
- _Modèle de boîte_ : cet onglet représente visuellement le modèle de boîte pour l'élément sélectionner afin de visualiser rapidement le _padding_ (rembourrage), la bordure et la marge appliquée à l'élément. Il permet aussi de voir la taille du contenu.
- _Polices_ : Dans Firefox, cet onglet affiche les polices appliquées à l'élément sélectionné.

### En savoir plus

Pour en apprendre plus sur l'inspecteur présent dans les différents navigateurs, les ressources suivantes pourront vous être particulièrement utiles :

- [L'inspecteur Firefox](/fr/docs/Outils/Inspecteur)
- [L'explorateur de DOM d'Internet Explorer](https://msdn.microsoft.com/library/dn255008%28v=vs.85%29.aspx)
- [L'inspecteur de DOM Chrome](https://developer.chrome.com/devtools/docs/dom-and-styles) (l'inspecteur d'Opera fonctionne de la même façon)
- [L'inspecteur de DOM et l'explorateur de styles Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW1)

## La console JavaScript

La console JavaScript est un outil formidable pour déboguer du code JavaScript qui ne fonctionne pas comme on le souhaite. Elle permet d'exécuter des lignes de JavaScript sur la page qui est actuellement chargée dans le navigateur et de rapporter les erreurs rencontrées lorsque le navigateur souhaite exécuter le code. Pour accéder à la console dans n'importe quel navigateur, il suffit de cliquer/appuyer sur l'onglet Console (sous Internet Explorer, appuyez sur _Ctrl + 2_.) Cela affichera une fenêtre qui ressemblera à :

![Console JavaScript](console.png)

Pour voir comment la console se comporte, essayez de saisir les fragments de code suivants dans la console (un par un), en appuyant sur Entrée après chaque :

1.  ```js
    alert('Coucou !');
    ```
2.  ```js
    document.querySelector('html').style.backgroundColor = 'purple';
    ```
3.  ```js
    var monImage = document.createElement('img');
    monImage.setAttribute('src','https://c1.staticflickr.com/1/572/20463320350_58483f6bed.jpg');
    document.querySelector('h1').appendChild(monImage);
    ```

Maintenant, essayez de saisir les fragments de code suivants, qui sont incorrects, pour voir ce qui se passe :

1.  ```js
    alert('coucou !);
    ```
2.  ```js
    document.cheeseSelector('html').style.backgroundColor = 'purple';
    ```
3.  ```js
    var monImage = document.createElement('img');
    maBanane.setAttribute('src','https://c1.staticflickr.com/1/572/20463320350_58483f6bed.jpg');
    document.querySelector('h1').appendChild(monImage);
    ```

Vous devriez voir différentes erreurs fournies par le navigateur. À première vue, ces erreurs semblent un peu étranges et complexes mais elles devraient être simples à résoudre !

### En savoir plus

Pour en apprendre plus sur la console JavaScript présente dans les différents navigateurs, les ressources listées ici devraient vous être utiles :

- [La console web de Firefox](/fr/docs/Outils/Console_Web)
- [La console JavaScript d'Internet Explorer](https://msdn.microsoft.com/library/dn255006%28v=vs.85%29.aspx)
- [La console JavaScript de Chrome](https://developer.chrome.com/devtools/docs/console) (la console pour Opera fonctionnera de la même façon)
- [La console de Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1)
