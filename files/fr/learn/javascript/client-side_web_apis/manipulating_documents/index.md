---
title: Manipuler des documents
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
translation_of: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
original_slug: Apprendre/JavaScript/Client-side_web_APIs/Manipulating_documents
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

Quand on écrit des pages web et des applications, une des choses les plus courantes que l'on veut faire est de manipuler la structure du document d'une manière ou d'une autre. On le fait généralement en utilisant le <i lang="en">Document Object Model</i> (DOM), un ensemble d'API qui permettent de contrôler le HTML et le style — et qui utilisent massivement l'objet [`Document`](/fr/docs/Web/API/Document). Dans cet article, nous allons voir comment utiliser le DOM en détails, ainsi que quelques API intéressantes qui peuvent modifier votre environnement.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissances informatiques de base, notions élémentaires en HTML, CSS, et JavaScript, notamment les objets JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Se familiariser avec les API du DOM, et les autres API souvent associées au DOM et à la manipulation de document.
      </td>
    </tr>
  </tbody>
</table>

## Les principaux composants du navigateur

Les navigateurs web sont des logiciels très complexes avec beaucoup de composants, dont beaucoup ne peuvent pas être contrôlés ou manipulés en utilisant JavaScript. Vous pourriez penser que de telles limitations sont une mauvaise chose, mais les navigateurs sont verrouillés pour de bonnes raisons, la plupart du temps pour des raisons de sécurité. Imaginez qu'un site web puisse accéder à vos mots de passe stockés ou à d'autres informations sensibles, ou se connecter à des sites web comme si c'était vous&nbsp;?

Malgré ces limitations, les API web nous donnent accès à beaucoup de fonctionnalités, lesquelles nous permettent de faire plein de choses géniales avec les pages web. Il existe quelques éléments évidents que vous utilisez régulièrement dans votre code — jetez un coup d'œil au diagramme suivant, il représente les principaux composants du navigateur directement impliqués dans l'affichage des pages web&nbsp;:

![](document-window-navigator.png)

- La _fenêtre_ est l'onglet du navigateur dans lequel une page web est chargée. Elle est représentée en JavaScript par l'objet [`Window`](/fr/docs/Web/API/Window). Utiliser les méthodes disponibles sur cet objet nous permet par exemple de récupérer la taille de la fenêtre (voir [`Window.innerWidth`](/fr/docs/Web/API/Window/innerWidth) et [`Window.innerHeight`](/fr/docs/Web/API/Window/innerHeight)), manipuler le document chargé dans cette fenêtre, stocker des données spécifiques à ce document côté client (par exemple en utilisant une base de données locale ou autre mécanisme de stockage), attacher un [gestionnaire d'évènement](/fr/docs/Learn/JavaScript/Building_blocks/Events) à la fenêtre en cours, et plus encore.
- Le _navigateur_ représente l'état et l'identité du navigateur web (la chaîne de caractères décrivant l'agent utilisant par exemple) tel qu'il existe sur le Web. En JavaScript, il est représenté par l'objet [`Navigator`](/fr/docs/Web/API/Navigator). Vous pouvez utiliser cet objet pour récupérer des informations telles que la géolocalisation, les préférences de langue, un flux vidéo en provenance de la webcam, etc.
- Le _document_ (accédé par le DOM dans les navigateurs) est la page actuellement chargée dans la fenêtre. Il est représenté en JavaScript par l'objet [`Document`](/fr/docs/Web/API/Document). Vous pouvez utiliser cet objet pour retourner et manipuler les éléments HTML et CSS qui composent le document. Par exemple&nbsp;: récupérer un élément dans le DOM, changer son texte, appliquer de nouveaux styles dessus, créer de nouveaux éléments et les ajouter à un élément comme enfant, ou même en supprimer.

Dans cet article, nous allons principalement nous concentrer sur la manipulation du document, mais nous verrons également quelques autres éléments utiles.

## Le modèle objet du document (<i lang="en">Document Object Model</i>)

Le document chargé dans chaque onglet de votre navigateur, et donc son contenu, est accessible via un modèle objet du document — <i lang="en">Document Objet Model</i> en anglais, ou DOM. Il s'agit d'une structure arborescente créée par le navigateur et qui permet aux langages de programmation d'accéder facilement à la structure HTML — par exemple, le navigateur lui-même l'utilise pour appliquer différents styles aux éléments correspondants sur la page, tandis qu'un développeur comme vous et moi peut l'utiliser pour manipuler le DOM avec du JavaScript après que la page ait été chargée.

Nous avons créé une simple page d'exemple, [`dom-example.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) ([voir en direct](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Essayez de l'ouvrir dans votre navigateur — c'est une page très simple qui contient un élément [`<section>`](/fr/docs/Web/HTML/Element/section), à l'intérieur duquel se trouve une image et un paragraphe avec un lien. Le code source HTML ressemble à ça&nbsp;:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple DOM example</title>
  </head>
  <body>
      <section>
        <img src="dinosaur.png" alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">
        <p>Here we will add a link to the <a href="https://www.mozilla.org/">Mozilla homepage</a></p>
      </section>
  </body>
</html>
```

Le DOM, quant à lui, ressemble à ça&nbsp;:

![](dom-screenshot.png)

> **Note :** Ce diagramme du DOM a été créé en utilisant l'outil [<i lang="en">Live DOM viewer</i>](https://software.hixie.ch/utilities/js/live-dom-viewer/) de Ian Hickson.

Vous pouvez voir ici que chaque élément et morceau de texte dans le document possède sa propre entrée dans l'arbre — chacune étant appelée **nœud** (<i lang="en">node</i>). Vous rencontrerez également plusieurs termes pour décrire les différents type de nœuds ou leur position dans l'arbre les uns par rapport aux autres&nbsp;:

- **Nœud élément (<i lang="en">element node</i>)**
  - : N'importe quel élément, tel qu'il existe dans le DOM.
- **Racine (<i lang="en">root</i>)**
  - : Le nœud de plus haut niveau dans l'arbre. Dans le cas d'un document HTML, il s'agit toujours du nœud `HTML` (d'autres langages de balisage tels que SVG et XML auront des racines différentes).
- **Enfant (<i lang="en">child</i>)**
  - : Un nœud _directement_ à l'intérieur d'un autre nœud. Ainsi, dans l'exemple ci-dessus, `IMG` est un enfant de `SECTION`.
- **Descendant**
  - : Un nœud _n'importe où_ à l'intérieur d'un autre nœud. Par exemple, `IMG` est un enfant de `SECTION` mais également l'un de ses descendants. En revanche `IMG` n'est pas un enfant de `BODY`, puisqu'il est deux niveaux plus bas dans l'arbre, mais il est un de ses descendants.
- **Parent**
  - : Un nœud qui a un autre nœud _directement_ à l'intérieur. Par exemple, `BODY` est le parent de `SECTION`.
- **Ancêtre (<i lang="en">ancestor</i>)**
  - : Un nœud qui a un autre nœud _n'importe où_ à l'intérieur. Par exemple, `BODY` est l'ancêtre d'`IMG`.
- **Frères et sœurs (<i lang="en">sibling</i>)**
  - : Des nœuds qui ont le même parent. Par exemple, `IMG` et `P` sont frères et sœurs.
- **Nœud texte (<i lang="en">text node</i>)**
  - : Un nœud contenant une chaîne de caractères.

Il est utile de vous familiariser avec ces termes avant de travailler avec le DOM, puisqu'un certain nombre de documentations les utilisent. Vous les avez peut-être déjà rencontrés si vous avez étudié le CSS (par exemple avec sélecteur descendant, sélecteur enfant).

## Apprentissage actif&nbsp;: manipulations basiques du DOM

Pour commencer l'apprentissage de la manipulation du DOM, commençons par un exemple concret.

1. Faites une copie locale de la page [`dom-example.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) et de l'[image](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png) qui l'accompagne.
2. Ajoutez un élément `<script></script>` juste avant la balise fermante `</body>`.
3. Pour manipuler un élément dans le DOM, vous allez d'abord sélectionner cet élément et stocker une référence à cet élément dans une variable. À l'intérieur de votre élément `<script>`, ajoutez la ligne suivante&nbsp;:

    ```js
    const link = document.querySelector('a');
    ```

4. Maintenant que nous avons la référence à l'élément enregistrée dans une variable, nous pouvons commencer à le manipuler en utilisant les propriétés et les méthodes qui lui sont associées (celles-ci sont définies sur les interfaces telles que [`HTMLAnchorElement`](/fr/docs/Web/API/HTMLAnchorElement) dans le cas d'un élément [`<a>`](/fr/docs/Web/HTML/Element/a), et sur les interfaces plus génériques [`HTMLElement`](/fr/docs/Web/API/HTMLElement), et [`Node`](/fr/docs/Web/API/Node) — qui représente tous les nœuds d'un DOM). Tout d'abord, changeons le texte du lien en mettant à jour la valeur de la propriété [`Node.textContent`](/fr/docs/Web/API/Node/textContent). Ajoutez la ligne suivante à la suite de la précédente&nbsp;:

    ```js
    link.textContent = 'Mozilla Developer Network';
    ```

5. Nous devons également modifier l'URL ciblée par le lien, pour qu'il ne renvoie pas au mauvais endroit quand on clique dessus. Ajoutez la ligne suivante, en bas de votre JavaScript&nbsp;:

    ```js
    link.href = 'https://developer.mozilla.org';
    ```

Notez que, comme souvent en JavaScript, il y a plusieurs façons de sélectionner et d'enregistrer une référence à un élément dans une variable. [`Document.querySelector()`](/fr/docs/Web/API/Document/querySelector) est l'approche moderne recommandée — elle est pratique puisqu'elle permet de sélectionner des éléments en utilisant les sélecteurs CSS. L'appel à `querySelector()` que nous avons utilisé plus tôt récupère le premier élément [`<a>`](/fr/docs/Web/HTML/Element/a) qui apparaît dans le document. Si vous souhaitez au contraire récupérer plusieurs éléments, vous pouvez utiliser [`Document.querySelectorAll()`](/fr/docs/Web/API/Document/querySelectorAll), qui récupère tous les éléments du document correspondant au sélecteur, et retourne des références vers ces éléments dans un objet similaire à un [tableau](/fr/docs/Learn/JavaScript/First_steps/Arrays) appelé un [`NodeList`](/fr/docs/Web/API/NodeList).

Il existe des méthodes plus anciennes pour récupérer des références aux éléments, telles que&nbsp;:

- [`Document.getElementById()`](/fr/docs/Web/API/Document/getElementById), qui sélectionne un élément grâce à son attribut `id` (par exemple&nbsp;: `<p id="monId">Mon paragraphe</p>`). L'identifiant est passé à la fonction en paramètre, de la façon suivante&nbsp;: `const elementRef = document.getElementById('monId')`.
- [`Document.getElementsByTagName()`](/fr/docs/Web/API/Document/getElementsByTagName), qui retourne un tableau contenant tous les éléments de la page ayant un type donné, par exemple tous les `<p>`, `<a>`, etc. Le type de l'élément est passé comme paramètre de la fonction&nbsp;: `const elementRefArray = document.getElementsByTagName('p')`.

Ces deux dernières méthodes fonctionnent mieux dans les navigateurs plus anciens que des méthodes plus modernes comme `querySelector()`, mais elles sont beaucoup moins pratiques. Regardez la documentation et essayez d'en trouver d'autres&nbsp;!

### Créer et placer de nouveaux nœuds

Ce qui précède vous a donné un petit avant-goût de ce que vous pouvez faire, mais allons plus loin et regardons comment créer de nouveaux éléments.

1. Pour revenir à notre exemple, commençons par récupérer une référence à notre élément [`<section>`](/fr/docs/Web/HTML/Element/section) — ajoutez le code suivant au bas de votre script existant (idem avec les lignes qui suivront)&nbsp;:

    ```js
    const sect = document.querySelector('section');
    ```

2. Nous allons maintenant créer un nouveau paragraphe grâce à [`Document.createElement()`](/fr/docs/Web/API/Document/createElement), et lui donner du contenu texte de la même manière que précédemment&nbsp;:

    ```js
    const para = document.createElement('p');
    para.textContent = 'We hope you enjoyed the ride.';
    ```

3. Nous pouvons à présent ajouter ce paragraphe au bas de la section en utilisant [`Node.appendChild()`](/fr/docs/Web/API/Node/appendChild)&nbsp;:

    ```js
    sect.appendChild(para);
    ```

4. Enfin, ajoutons un nœud texte au premier paragraphe, pour finir la phrase joliment. Créons d'abord un nœud texte avec [`Document.createTextNode()`](/fr/docs/Web/API/Document/createTextNode)&nbsp;:

    ```js
    const text = document.createTextNode(' — the premier source for web development knowledge.');
    ```

5. Puis, après avoir récupéré une référence au premier paragraphe, ajoutons-y le nœud texte&nbsp;:

    ```js
    const linkPara = document.querySelector('p');
    linkPara.appendChild(text);
    ```

C'est l'essentiel de ce dont vous aurez besoin pour ajouter des nœuds au DOM — vous utiliserez beaucoup ces méthodes lorsque vous construirez des interfaces dynamiques (nous en verrons quelques exemples plus tard).

### Déplacer et supprimer des éléments

Il peut arriver qu'on veuille déplacer des nœuds, ou même les supprimer du DOM. C'est tout à fait possible, voyons ici comment.

Par exemple, si on veut déplacer le premier paragraphe de notre exemple au bas de la section, on pourrait utiliser&nbsp;:

```js
sect.appendChild(linkPara);
```

Cette commande va déplacer le paragraphe tout au bas de la section. On pourrait penser qu'elle va en fait ajouter une copie, mais ce n'est pas le cas&nbsp;: `linkPara` ne fait référence qu'à un seul et unique élément. Pour copier le paragraphe, il faudrait utiliser [`Node.cloneNode()`](/fr/docs/Web/API/Node/cloneNode) à la place.

Supprimer des éléments est également plutôt simple, dès lors qu'on a une référence de l'élément à supprimer et de son parent. Dans notre cas, on peut simplement utiliser [`Node.removeChild()`](/fr/docs/Web/API/Node/removeChild), comme ceci&nbsp;:

```js
sect.removeChild(linkPara);
```

Si vous souhaitez un élément uniquement à partir d'une référence à cet élément, comme c'est souvent le cas, vous pouvez utiliser [`Element.remove()`](/fr/docs/Web/API/Element/remove)&nbsp;:

```js
linkPara.remove();
```

Cette méthode ne fonctionne cependant pas dans les navigateurs plus anciens. Ils ne possèdent en effet pas de méthodes pour dire à un nœud de se supprimer, et il faut donc procéder comme suit&nbsp;:

```js
linkPara.parentNode.removeChild(linkPara);
```

À votre tour&nbsp;: essayez les lignes ci-dessus en les ajoutant à votre code.

### Manipuler le style

Il est possible de manipuler des styles CSS grâce à du JavaScript de plusieurs manières.

Pour commencer, vous pouvez obtenir une liste de toutes les feuilles de style associées à un document en utilisant [`Document.stylesheets`](/fr/docs/Web/API/Document/styleSheets), qui retourne un objet, ressemblant à un tableau composé d'objets [`CSSStyleSheet`](/fr/docs/Web/API/CSSStyleSheet). Vous pouvez alors ajouter/supprimer des styles comme vous le souhaitez. Cependant, nous n'allons pas nous étendre sur ces fonctionnalités, car elles sont archaïques et il est difficile de manipuler le style avec. Il y a des techniques beaucoup plus simples.

La première d'entre elles consiste à ajouter des styles en ligne (<i lang="en">inline styles</i>), directement sur les éléments que vous voulez mettre en forme de façon dynamique. Pour ce faire, on utilise la propriété [`HTMLElement.style`](/fr/docs/Web/API/HTMLElement/style), qui contient les informations de style en ligne de chaque élément du document. Vous pouvez définir des propriétés de cet objet de façon à pouvoir mettre à jour directement le style des éléments.

1. À titre d'exemple, essayez d'ajouter les lignes suivantes à notre exemple&nbsp;:

    ```js
    para.style.color = 'white';
    para.style.backgroundColor = 'black';
    para.style.padding = '10px';
    para.style.width = '250px';
    para.style.textAlign = 'center';
    ```

2. Rafraichissez la page, et vous verrez que les styles ont été appliqués au paragraphe. Si vous regardez ce paragraphe dans l'[Inspecteur](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) du navigateur, vous verrez que ces lignes sont en effet ajoutées comme du style en ligne au document&nbsp;:

    ```html
    <p style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">We hope you enjoyed the ride.</p>
    ```

> **Note :** Vous remarquerez que les propriétés JavaScript qui représentent les propriétés CSS sont écrites en [<i lang="en">camel case</i>](https://fr.wikipedia.org/wiki/Camel_case) tandis que les versions CSS sont reliées par des tirets (par exemple `backgroundColor` au lieu de `background-color`). Prenez garde à ne pas les mélanger, sans quoi ça ne fonctionnera pas.

Il y a un autre moyen de manipuler dynamiquement des styles sur votre document, que nous allons étudier maintenant.

1. Supprimez les cinq lignes précédentes que nous avons ajoutées à notre code JavaScript.
2. Ajoutez ce qui suit au sein de la balise [`<head>`](/fr/docs/Web/HTML/Element/head) de votre HTML&nbsp;:

    ```html
    <style>
    .highlight {
      color: white;
      background-color: black;
      padding: 10px;
      width: 250px;
      text-align: center;
    }
    </style>
    ```

3. Nous allons maintenant utiliser une méthode très utile pour la manipulation HTML de manière générale&nbsp;: [`Element.setAttribute()`](/fr/docs/Web/API/Element/setAttribute). Cette fonction prend deux paramètres&nbsp;: le nom de l'attribut que vous voulez définir sur l'élément, et la valeur que vous voulez lui attribuer. Ici nous allons ajouter une classe `highlight` à notre élément&nbsp;:

    ```js
    para.setAttribute('class', 'highlight');
    ```

4. Rafraîchissez votre page, et vous constaterez qu'il n'y a aucun changement par rapport au dernier exemple. Le CSS est toujours appliqué au paragraphe, mais la seule différence c'est qu'on a utilisé une classe pour le faire et non des styles en ligne.

À vous de choisir la méthode que vous souhaitez utiliser&nbsp;: chacune a ses avantages et ses inconvénients. Les styles en ligne demandent moins de préparation et sont utiles pour un usage simple, tandis que l'usage des classes est une méthode plus pure (on ne mélange pas le CSS et le JavaScript, on évite donc les styles en ligne, car c'est considéré comme une mauvaise pratique). Au fur et à mesure que vous construirez des applications plus volumineuses et complexes, vous allez probablement utiliser la deuxième méthode plus souvent, mais c'est à vous de décider.

À ce stade, nous n'avons pas vraiment fait quoi que soit d'utile&nbsp;! Il n'y a pas d'intérêt à générer du contenu statique avec du JavaScript — autant l'écrire directement en HTML sans passer par du JavaScript. Le JavaScript est plus complexe que du HTML, et comporte son propre lot de problèmes (comme le fait qu'il ne puisse pas être lu par les moteurs de recherche).

Dans les deux prochaines sections, nous verrons un exemple d'utilisation plus concret des API du DOM.

> **Note :** Vous pouvez trouver la [version finale de `dom-example.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) sur GitHub ([le voir en direct aussi](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Apprentissage actif&nbsp;: une liste de courses dynamique

Pour clore cet article, nous aimerions vous proposer un petit challenge&nbsp;: nous voulons créer une liste de courses simple qui nous permette d'ajouter des articles à la liste de façon dynamique, le tout grâce à un champ de formulaire et un bouton. Quand vous ajoutez une valeur au champ et appuyez sur le bouton&nbsp;:

- L'article doit être ajouté à la liste.
- Chaque article de la liste doit avoir un bouton qui, quand on le presse, supprime cet élément de la liste.
- Le champ doit être vidé et reprendre le focus pour que vous puissiez entrer directement un nouvel article.

La démo terminée doit ressembler à ça&nbsp;:

![](shopping-list.png)

Pour compléter l'exercice, suivez les étapes ci-dessous, et assurez-vous que votre exemple se comporte comme décrit ci-dessus.

1. Tout d'abord, téléchargez une copie du fichier [`shopping-list.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html). Vous verrez qu'il contient un peu de CSS, une liste avec un titre, un champ, un bouton, une liste vide et un élément [`<script>`](/fr/docs/Web/HTML/Element/script). Vous apporterez toutes vos modifications à l'intérieur du script.
2. Créez trois variables, contenant des références aux éléments de liste [`<ul>`](/fr/docs/Web/HTML/Element/ul), de champ [`<input>`](/fr/docs/Web/HTML/Element/Input) et de bouton [`<button>`](/fr/docs/Web/HTML/Element/Button).
3. Créez une [fonction](/fr/docs/Learn/JavaScript/Building_blocks/Functions) qui sera déclenchée lorsqu'on clique sur le bouton.
4. À l'intérieur du corps de la fonction, commencez par stocker la [valeur actuelle](/fr/docs/Web/API/HTMLInputElement#propriétés) (propriété `value`) du champ dans une variable.
5. Ensuite, videz le champ en définissant sa valeur comme une chaîne vide — `''`.
6. Créez trois nouveaux éléments&nbsp;: un élément de liste [`<li>`](/fr/docs/Web/HTML/Element/li), un [`<span>`](/fr/docs/Web/HTML/Element/span) et un bouton [`<button>`](/fr/docs/Web/HTML/Element/Button), et stockez-les chacun dans des variables.
7. Attachez le `<span>` et le `<button>` comme enfants de `<li>`.
8. Définissez le contenu texte du `<span>` comme égal à la valeur du champ que vous avez récupéré précédemment, et le contenu du bouton à «&nbsp;Supprimer&nbsp;».
9. Attachez l'article `<li>` comme enfant de la liste.
10. Ajoutez un gestionnaire d'événement au bouton «&nbsp;Supprimer&nbsp;», de façon à ce que lorsqu'on le clique le `<li>` dans lequel il se situe soit supprimé.
11. Enfin, utilisez la méthode [`HTMLElement.focus`](/fr/docs/Web/API/HTMLElement/focus) pour donner le focus au champ, qu'il soit prêt à recevoir la valeur du prochain article de la liste de courses.

> **Note :** Si vous bloquez vraiment, jetez un œil à notre [liste de courses terminée](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) ([voir en direct](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html).)

## Résumé

Nous avons fini notre étude de la manipulation de document et du DOM. À ce stade, vous devriez comprendre quels sont les composants importants d'un navigateur web en matière de contrôle de documents et certains aspects de l'expérience utilisateur sur le Web. Plus important encore, vous devriez comprendre ce qu'est le <i lang="en">Document Object Model</i>, et comment l'utiliser pour créer des fonctionnalités utiles.

## Voir aussi

Il y a bien d'autres fonctionnalités que vous pouvez utiliser pour manipuler vos documents. Jetez un coup d'œil à quelques-uns de nos documents de référence pour en découvrir davantage&nbsp;:

- [`Document`](/fr/docs/Web/API/Document)
- [`Window`](/fr/docs/Web/API/Window)
- [`Node`](/fr/docs/Web/API/Node)
- [`HTMLElement`](/fr/docs/Web/API/HTMLElement), [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/fr/docs/Web/API/HTMLImageElement), etc.

(Voir notre [Référence Web API](/fr/docs/Web/API) pour une liste complète des API web documentées sur MDN&nbsp;!)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

## Dans ce module

- [Introduction aux API du Web](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- **Manipuler des documents**
- [Récupérer des données du serveur](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [Les API tierces](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [Dessiner des éléments graphiques](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Les API vidéo et audio](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [Le stockage côté client](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
