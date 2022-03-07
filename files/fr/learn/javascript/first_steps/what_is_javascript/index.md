---
title: Qu'est-ce que le JavaScript ?
slug: Learn/JavaScript/First_steps/What_is_JavaScript
translation_of: Learn/JavaScript/First_steps/What_is_JavaScript
---
{{LearnSidebar}}{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}

Bienvenue dans le cours JavaScript pour débutants sur le MDN. Dans ce premier article nous donnons une description générale de JavaScript en présentant le « pourquoi » et le « comment » du JavaScript. L'objectif est que vous compreniez bien son but.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        <p>
          Une culture informatique basique et une compréhension élémentaire de
          HTML et CSS.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Se familiariser avec JavaScript, ce qu'il peut faire et comment il
        s'intègre dans un site web.
      </td>
    </tr>
  </tbody>
</table>

## Une définition générale

JavaScript est un langage de programmation qui permet d'implémenter des mécanismes complexes sur une page web. À chaque fois qu'une page web fait plus que simplement afficher du contenu statique — afficher du contenu mis à jour à des temps déterminés, des cartes interactives, des animations 2D/3D, des menus vidéo défilants, ou autre, JavaScript a de bonnes chances d'être impliqué. C'est la troisième couche des technologies standards du web, les deux premières ([HTML](/fr/docs/Learn/HTML) et [CSS](/fr/docs/Learn/CSS)) étant couvertes bien plus en détail dans d'autres tutoriels sur MDN.

![](cake.png)

- {{glossary("HTML")}} est un langage de balises utilisé pour structurer et donner du sens au contenu web. Par exemple : définir des paragraphes, titres et tables de données ou encore intégrer des images ou des vidéos dans une page.
- {{glossary("CSS")}} est un langage de règles de style utilisé pour mettre en forme le contenu HTML. Par exemple : en modifiant la couleur d'arrière-plan ou les polices, ou en disposant le contenu en plusieurs colonnes.
- {{glossary("JavaScript")}} est un langage de programmation qui permet de créer du contenu mis à jour de façon dynamique, de contrôler le contenu multimédia, d'animer des images, et tout ce à quoi on peut penser. Bon, peut-être pas tout, mais vous pouvez faire bien des choses avec quelques lignes de JavaScript.

Les trois couches se superposent naturellement. Prenons pour exemple une simple étiquette texte. Les balises HTML lui donnent une structure et un but :

```html
<p>Player 1: Chris</p>
```

![](just-html.png)

Nous pouvons ensuite ajouter du CSS pour rendre cela plus joli :

```css
p {
  font-family: 'helvetica neue', helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0,0,200,0.6);
  background: rgba(0,0,200,0.3);
  color: rgba(0,0,200,0.6);
  box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor:pointer;
}
```

![](html-and-css.png)

Et enfin utiliser JavaScript pour ajouter un comportement dynamique :

```js
let para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
```

{{ EmbedLiveSample('Une_définition_générale', '100%', 80) }}

Essayez de cliquer sur l'étiquette texte pour voir ce qui se passe. Notez que vous pouvez également retrouver cet exemple sur GitHub — voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/javascript-label.html), ou l'[exécuter](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html).

JavaScript peut faire bien plus. Voyons cela plus en détail.

## Que peut-il _vraiment_ faire ?

Le cœur de JavaScript est constitué de fonctionnalités communes de programmation permettant de :

- stocker des valeurs utiles dans des variables. Dans l'exemple plus haut, nous demandons un nouveau nom à l'utilisateur puis le stockons dans une variable appelée `name`.
- faire des opérations sur des morceaux de texte (appelés en programmation « chaînes de caractères » ou « strings » en anglais). Dans l'exemple plus haut, nous prenons la chaîne de caractères "Player 1: " et lui adjoignons la variable `name` pour créer l'étiquette ''Player 1: Chris".
- exécuter du code en réponse à certains événements se produisant sur une page web. Dans l'exemple, nous avons utilisé un événement (« event ») {{Event("click")}} pour détecter quand l'utilisateur clique sur le bouton ; on exécute alors le code qui met à jour l'étiquette.
- Et bien plus encore !

Là où ça devient excitant, c'est que de nombreuses fonctionnalités sont basées sur ce cœur de JavaScript. Les « interfaces de programmation applicatives » (API pour « Application Programming Interfaces ») donnent accès à des fonctionnalités presqu'illimitées dans votre code JavaScript.

Les API sont des blocs de code déjà prêts qui permettent à un développeur d'implémenter des programmes qui seraient difficiles voire impossibles à implémenter sans elles. C'est comme du code "en kit" pour la programmation, très pratiques à assembler et à combiner. Les API sont au code ce que les meubles en kits sont aux fournitures de maison — il est beaucoup plus facile de prendre des panneaux prêts à l'emploi et de les visser ensemble pour faire une étagère que de travailler vous-même sur le design, d'aller chercher le bon bois, de couper tous les panneaux à la bonne taille et la bonne forme, de trouver les vis de la bonne taille, puis les assembler pour faire une étagère.

Elles se divisent généralement en deux catégories :

![](browser.png)

**Les API de navigateur** font partie intégrante de votre navigateur web, et peuvent accéder à des données de l'environnement informatique (l'ordinateur), ou faire d'autres choses complexes. Par exemple :

- l'[API DOM (Document Object Model)](/fr/docs/Web/API/Document_Object_Model) permet de manipuler du HTML et du CSS (créer, supprimer et modifier du HTML, appliquer de nouveaux styles à la page de façon dynamique, etc.). Chaque fois que vous voyez une fenêtre popup sur une page ou du nouveau contenu apparaître (comme dans notre démonstration plus haut), il s'agit d'une action du DOM.
- l'[API de géolocalisation](/fr/docs/Web/API/Geolocation) récupère des informations géographiques. C'est ainsi que [Google Maps](https://www.google.com/maps) peut trouver votre position et la situer sur une carte.
- les API [Canvas](/fr/docs/Web/API/Canvas_API) et [WebGL](/fr/docs/Web/API/WebGL_API) permettent de créer des animations 2D et 3D. On fait des choses incroyables avec ces technologies, voyez [Chrome Experiments](https://www.chromeexperiments.com/webgl) et [webglsamples](https://webglsamples.org/).
- [les API Audio et Video](/fr/docs/Web/Apps/Fundamentals/Audio_and_video_delivery), comme {{domxref("HTMLMediaElement")}} et [WebRTC](/fr/docs/Web/API/WebRTC_API) permettent des actions intéressantes sur le multimédia, telles que jouer de l'audio ou de la vidéo directement dans une page web, ou récupérer le flux vidéo de votre webcam et l'afficher sur l'ordinateur de quelqu'un d'autre (essayez la [Snapshot demo](http://chrisdavidmills.github.io/snapshot/) pour vous faire une idée).

> **Note :** Beaucoup des exemples ci-dessus ne fonctionneront pas dans un ancien navigateur. Il vaut mieux utiliser un navigateur moderne comme Firefox, Chrome, Edge ou Opera pour exécuter votre code et faire vos tests. Si vous êtes amené à écrire du code de production (c'est-à-dire destiné à de véritables utilisateurs), il vous faudra prendre en compte la compatibilité pour différents navigateurs.

Les **APIs tierces** ne font par défaut pas partie de votre navigateur, et vous devrez en général récupérer le code et les informations les concernant quelque part sur le web. Par exemple :

- l'[API Twitter](https://dev.twitter.com/overview/documentation) vous permet par exemple d'afficher vos derniers tweets sur votre site.
- l'[API Google Maps](https://developers.google.com/maps/) permet d'intégrer à votre site des cartes personnalisées et d'autres fonctionnalités de ce type.

> **Note :** ces APIs sont d'un niveau avancé et nous ne couvrirons aucune d'entre elles dans ce cours, mais les liens ci-dessus fournissent une large documentation si vous voulez en savoir davantage.

Et il y a bien plus encore ! Pas de précipitation cependant. Vous ne serez pas en mesure de créer le nouveau Facebook, Google Maps ou Instagram après une journée de travail sur JavaScript, il y a d'abord beaucoup de bases à assimiler. Et c'est pourquoi vous êtes ici. Allons-y !

## Que fait JavaScript sur votre page ?

Ici nous allons commencer à réellement nous intéresser au code, et, ce faisant, à explorer ce qui se passe quand vous exécutez du JavaScript dans votre page.

Commençons par un bref récapitulatif de ce qui se passe lorsqu'une page web se charge dans le navigateur (voir [Comment fonctionnent vraiment les CSS](/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/Le_fonctionnement_de_CSS#Comment_fonctionnent_vraiment_les_CSS)). Quand la page se charge, les codes HTML, CSS et JavaScript s'exécutent dans un environnement (l'onglet du navigateur). C'est un peu comme une usine qui prend des matières premières (le code) et sort un produit (la page web).

![](execution.png)

Le JavaScript est exécuté par le moteur JavaScript du navigateur, après que le HTML et le CSS ont été assemblés et combinés en une page web. Cet enchaînement est nécessaire pour être sûr que la structure et le style de la page sont déjà en place quand le JavaScript commence son exécution.

C'est une bonne chose, étant donné qu'un usage fréquent de JavaScript est de modifier dynamiquement le HTML et le CSS pour mettre à jour l'interface utilisateur, via l'API DOM comme évoqué plus tôt. Charger le JavaScript et essayer de l'exécuter avant que le HTML et le CSS ne soient en place mènerait à des erreurs.

### Sécurité du navigateur

Chaque onglet du navigateur constitue un périmètre séparé dans lequel s'exécute le code (en termes techniques ces périmètres sont des « environnements d'exécution ») ce qui signifie que, dans la plupart des cas, le code de chaque onglet est exécuté complètement séparément, et le code d'un onglet ne peut affecter directement le code d'un autre onglet ou d'un autre site. C'est une bonne mesure de sécurité. Si ce n'était pas le cas, des pirates pourraient par exemple écrire du code pour voler des informations sur d'autres sites web.

> **Note :** il existe des moyens d'envoyer du code et des données entre différents sites/onglets de façon sécurisée, mais ce sont des techniques avancées que ne nous couvrirons pas dans ce cours.

### Ordre d'exécution du JavaScript

Quand le navigateur rencontre un bloc de JavaScript, il l'exécute généralement dans l'ordre, de haut en bas. Vous devrez donc faire attention à l'ordre dans lequel vous écrivez les choses. Reprenons le bloc de JavaScript vu dans notre premier exemple :

```js
let para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
```

Nous sélectionnons ici un paragraphe de texte (ligne 1), puis lui attachons un « gestionnaire d'évènement »  (<i lang="en">event listener</i>)  ligne 3, pour qu'ensuite, lors d'un clic sur le paragraphe, le bloc de code `updateName()` (lignes 5-8) s'exécute. Le bloc de code `updateName()` (ces blocs de code réutilisables sont appelés « fonctions ») demande à l'utilisateur un nouveau nom, et l'insère dans le paragraphe pour mettre à jour l'affichage.

Si vous échangiez les deux premières lignes de code, rien ne fonctionnerait plus, vous obtiendriez une erreur dans la console développeur du navigateur : `TypeError: para is undefined`. Cela signifie que l'objet `para` n'existe pas encore, donc nous ne pouvons pas y ajouter de gestionnaire d'évènement.

> **Note :** c'est une erreur très fréquente. Il faut veiller à ce que les objets référencés dans votre code existent avant d'essayer de les utiliser.

### Code interprété contre code compilé

En informatique, on parle de code **interprété** ou **compilé**. JavaScript est un langage interprété : le code est exécuté de haut en bas et le résultat du code exécuté est envoyé immédiatement. Vous n'avez pas à transformer le code en une autre forme avant que le navigateur ne l'exécute.

Les langages compilés quant à eux sont transformés (compilés) en une autre forme avant d'être exécutés par l'ordinateur. Par exemple le C et le C++ sont compilés en langage assembleur qui est ensuite exécuté par l'ordinateur.

Chaque approche a ses avantages, ce que nous ne développerons pas pour l'instant.

### Code côté client contre côté serveur

Vous pouvez aussi rencontrer les termes de code **côté serveur** et **côté client**, notamment dans le contexte du développement web. Le code **côté client** est du code exécuté sur l'ordinateur de l'utilisateur : quand une page web est vue, le code côté client de la page est téléchargé, puis exécuté et affiché par le navigateur. Dans ce module JavaScript, nous parlons explicitement de **JavaScript côté client**.

Le code **côté serveur** quant à lui est exécuté sur le serveur, puis ses résultats sont téléchargés et affichés par le navigateur. Citons comme langages web côté serveur populaires le PHP, Python, Ruby, et ASP.NET. Et JavaScript ! JavaScript peut aussi s'utiliser comme un langage **côté serveur**, par exemple dans le populaire environnement Node.js — vous pouvez en apprendre plus sur le JavaScript côté serveur dans notre article [Programmation de Sites Web côté serveur](/fr/docs/Learn/Server-side).

### Code dynamique contre code statique

Le mot **dynamique** est utilisé tant pour qualifier le JavaScript côté client que les langages côté serveur. Il se réfère à la capacité de mettre à jour l'affichage d'une page/application web pour montrer des choses différentes en des circonstances différentes, en générant un nouveau contenu quand nécessaire. Le code côté serveur génère dynamiquement du nouveau contenu sur le serveur, par exemple en lisant une base de données, tandis que le JavaScript côté client peut générer dynamiquement un contenu nouveau dans le navigateur, par exemple en créant une nouvelle table HTML, en y insérant les données demandées au serveur, puis en affichant la table dans une page web. Selon le contexte, le terme _dynamique_ prend un sens un peu différent, mais les deux sont très liés, et les deux approches (côté serveur et client) vont souvent de pair.

Une page web sans contenu mis à jour dynamiquement est appelé **statique** : elle montre simplement toujours le même contenu.

## Comment ajouter du JavaScript à votre page ?

Le JavaScript est appliqué à votre page HTML un peu comme le CSS. Les éléments {{htmlelement("link")}} permettent d'appliquer des feuilles de style externes au HTML alors que les feuilles de style internes utilisent les éléments {{htmlelement("style")}}. Pour ajouter du JavaScript à un document HTML, il n'y a qu'une seule façon : avec l'élément {{htmlelement("script")}}. Voyons cela sur un exemple.

### JavaScript interne

1.  Faites d'abord une copie locale de notre fichier d'exemple [apply-javascript.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Enregistrez-le dans un répertoire approprié.
2.  Ouvrez le fichier dans votre navigateur web et dans un éditeur de texte. Vous verrez que le HTML crée une page web simple contenant un bouton cliquable.
3.  Ensuite, allez dans votre éditeur de texte et ajoutez ce qui suit juste avant la balise fermante `</head>` :

    ```html
    <script>

      // JavaScript goes here

    </script>
    ```

4.  Ajoutons maintenant du JavaScript dans notre élément {{htmlelement("script")}} pour rendre la page plus dynamique. Ajoutez le code suivant juste en dessous de la ligne "// JavaScript goes here" :

    ```js
      document.addEventListener("DOMContentLoaded", function() {
      function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'Vous avez cliqué sur le bouton!';
        document.body.appendChild(para);
      }

      const buttons = document.querySelectorAll('button');

      for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', createParagraph);
      }
    });
    ```

5.  Enregistrez le fichier et actualisez le navigateur. Vous pouvez maintenant voir que, lorsque vous cliquez sur le bouton, un nouveau paragraphe est généré et placé en dessous.

> **Note :** si l'exemple ne semble pas marcher, reprenez pas à pas chaque étape. Avez-vous bien enregistré le code de départ comme un fichier `.html` ? Avez-vous bien ajouté l'élément {{htmlelement("script")}} juste après la balise `</head>` ? Avez-vous collé le bon code JavaScript au bon endroit ? **JavaScript est sensible à la casse, et assez tatillon, il faut donc respecter scrupuleusement la syntaxe indiquée, sans quoi il peut ne pas fonctionner.**

> **Note :** vous pouvez voir cette version sur GitHub avec [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([et aussi en live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### JavaScript externe

Ça marche très bien, mais si nous voulons mettre notre JavaScript dans un fichier externe ? Voyons cela.

1.  Créez d'abord un nouveau fichier dans le même répertoire que votre fichier HTML. Nommez-le `script.js` (vérifiez qu'il a bien l'extension de fichier .js, c'est ainsi qu'il est identifié comme fichier JavaScript).
2.  Ensuite, copiez-collez tout le script contenu dans l'élément {{htmlelement("script")}} vers le fichier .js, et enregistrez le fichier.
3.  À présent remplacez l'élément {{htmlelement("script")}} par :

    ```html
    <script src="script.js" defer></script>
    ```

4.  Enregistrez et rechargez la page dans votre navigateur, et vous devriez voir la même chose qu'avant. C'est la même chose, mais nous avons maintenant le JavaScript dans un fichier externe. C'est une bonne chose en général pour organiser le code et le rendre réutilisable pour plusieurs fichiers HTML. Cela rend aussi le code HTML plus lisible en évitant d'y inclure de gros blocs de JavaScript.

**Note :** vous pouvez voir cette version sur GitHub avec [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) et [script.js](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/script.js) ([ainsi qu'en live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Handlers JavaScript en ligne

Notez que parfois vous tomberez sur des morceaux de JavaScript directement dans le HTML. Ce qui peut ressembler à ça :

```js example-bad
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'Vous avez cliqué !';
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">Cliquez-moi!</button>
```

Vous pouvez essayer cette version dans la démonstration ci-dessous.

{{ EmbedLiveSample('Handlers_JavaScript_en_ligne', '100%', 150) }}

Cet exemple a exactement le même comportement que ceux des deux sections précédentes, sauf que l'élément {{htmlelement("button")}} a un handler `onclick` en ligne pour déclencher l'exécution de la fonction à la pression du bouton.

**Évitez cependant de faire cela.** C'est une mauvaise habitude de polluer le HTML avec du JavaScript, en plus d'être inefficace. Dans cette méthode, on doit inclure l'attribut `onclick="createParagraph()"` sur chaque bouton où le JavaScript doit s'appliquer.

### En JavaScript pur

Une construction en JavaScript pur permet de sélectionner tous les boutons avec une instruction. Dans l'exemple précédent c'est cette partie qui s'en charge :

```js
let buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
```

Cela peut sembler un peu plus long que l'attribut `onclick`, mais cela fonctionnera pour tous les boutons peu importe leur nombre sur la page, et peu importe si des boutons sont ajoutés ou retirés, le code JavaScript n'aura pas besoin d'être modifié.

> **Note :** essayez de modifier votre version de `apply-javascript.html` et d'y ajouter quelques boutons dans le fichier. En actualisant la page, tous les boutons devraient créer un paragraphe quand ils sont cliqués. Pas mal, non ?

### Stratégies de chargement de script

Le chargement des scripts au bon moment pose un certain nombre de problèmes. Rien n'est aussi simple qu'il y paraît ! Un problème courant est que le code HTML d'une page se charge en suivant l'ordre d'apparition dans le code source. Si vous utilisez JavaScript pour manipuler des éléments sur la page (plus précisément, le [DOM](/fr/docs/Web/API/Document_Object_Model)), votre code ne fonctionnera pas si le JavaScript est chargé et analysé avant le code HTML sur lequel vous voulez opérer.

Dans les exemples de code interne et externe ci-dessus, le JavaScript est chargé et exécuté dans l'en-tête du document, avant que le corps soit analysé. Cela peut causer une erreur, donc nous avons utilisé des structures pour le contourner.

Dans l'exemple interne, vous pouvez voir cette structure autour du code :

```js
document.addEventListener("DOMContentLoaded", function() {
  ...
});
```

Il s'agit d'un gestionnaire d'évènement associé à l'événement `DOMContentLoaded` du navigateur, cet événement est déclenché quand le `body` HTML est complètement chargé et analysé. Le code JavaScript à l'intérieur du bloc est exécuté après le déclenchement de `DOMContentLoaded`. Par conséquent, l'erreur est évitée (vous en apprendrez plus sur les [événements](/fr/docs/Apprendre/JavaScript/Building_blocks/Ev%C3%A8nements) plus tard dans le cours).

Dans l'exemple externe, nous utilisons une fonctionnalité JavaScript plus moderne pour résoudre le problème, l'attribut `async`, qui indique au navigateur de continuer à télécharger le contenu HTML une fois que l'élément de balise {{htmlelement("script")}} a été atteint.

```js
<script src="script.js" defer></script>
```

Dans ce cas, le script et le code HTML se chargeront simultanément et le code fonctionnera.

> **Note :** Dans le cas externe, nous n'avions pas besoin d'utiliser l'événement `DOMContentLoaded`, car l'attribut `async` a résolu le problème pour nous. Nous n'avons pas utilisé la solution `async` pour l'exemple JavaScript interne, car elle ne fonctionne que pour les scripts externes.

Auparavant, une solution à ce problème consistait à placer votre élément de script juste au bas du corps (par exemple, juste avant la balise), afin qu'il soit chargé après que tout le code HTML a été analysé. Le problème de cette solution (et de la solution `DOMContentLoaded` vue ci-dessus) est que le chargement et l'analyse du script sont complètements bloqués jusqu'à ce que le DOM HTML soit chargé. Sur des sites plus importants avec beaucoup de JavaScript, cela peut entraîner un problème de performances majeur, ce qui ralentit votre site. C'est pourquoi `async` a été ajouté aux navigateurs !

#### async et defer

En fait, il existe deux façons de contourner le problème du script de blocage : `async` et `defer`. Regardons la différence entre les deux.

Les scripts asynchrones téléchargeront le script sans bloquer le rendu de la page et l'exécuteront dès que le téléchargement du script sera terminé. Vous n'obtenez aucune garantie que les scripts s'exécutent dans un ordre spécifique, mais seulement qu'ils n'empêcheront pas le reste de la page de s'afficher. Il est préférable d'utiliser `async` lorsque les scripts de la page s'exécutent indépendamment les uns des autres et ne dépendent d'aucun autre script de la page.

![async vs defer](async-defer.jpg)

Image de [la spécification HTML](https://html.spec.whatwg.org/images/asyncdefer.svg), copiée et rognée selon les termes de la licence [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Par exemple, si vous avez les éléments de script suivants :

```html
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

Vous ne pouvez pas compter sur l'ordre dans lequel les scripts seront chargés. `Jquery.js` peut être chargé avant ou après `script2.js` et `script3.js`. Si tel est le cas, toute fonction de ces scripts dépendant de `jquery` générera une erreur, car `jquery` ne sera pas défini au moment de l'exécution du script.

`defer` exécute les scripts dans l'ordre dans lequel ils apparaissent dans la page et les exécute dès que le script et le contenu sont téléchargés :

```html
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

Tous les scripts dotés de l'attribut de `defer` seront chargés dans l'ordre dans lequel ils apparaissent sur la page. Ainsi, dans le deuxième exemple, nous pouvons être sûrs que `jquery.js` se chargera avant `script2.js` et `script3.js` et que `script2.js` se chargera avant `script3.js`.

Pour résumer :

- Si vos scripts n'ont pas besoin d'attendre l'analyse et peuvent s'exécuter indépendamment sans dépendances, utilisez `async`.
- Si vos scripts doivent attendre l'analyse et dépendent d'autres scripts, chargez-les à l'aide de `defer` et placez leurs éléments {{htmlelement("script")}} correspondants dans l'ordre dans lequel vous souhaitez que le navigateur les exécute.

## Commentaires

Comme pour le HTML et le CSS, il est possible d'écrire des commentaires dans le code JavaScript qui seront ignorés par le navigateur. Ils ne sont là que pour apporter des précisions aux autres développeurs sur le fonctionnement du code (et vous-même, si vous reprenez votre code après six mois sans pouvoir vous rappeler ce que vous avez fait). Les commentaires sont très utiles, et vous devriez les utiliser fréquemment, surtout pour des applications de grande taille. Il y en a deux types :

- Un commentaire sur une ligne s'écrit après un double slash, par exemple :

  ```js
  // Ceci est un commentaire
  ```

- Un commentaire sur plusieurs lignes s'écrit entre deux balises /\* et \*/, par exemple :

  ```js
  /*
    Ceci est un commentaire
    sur deux lignes
  */
  ```

Ainsi, vous pourriez par exemple annoter notre dernière démonstration de JavaScript de cette manière :

```js
// Fonction: créer un nouveau paragraphe et l'ajouter en bas du HTML

function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

/*
  1. Regrouper les coordonnées de tous les boutons de la page et les organiser en tableau
  2. Faire une boucle dans ce tableau et ajouter un "click event listener" à chaque bouton

  Quand le bouton est cliqué, la fonction "createParagraph()" sera exécutée
*/

let buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
```

## Résumé

Et voilà votre premier pas dans le monde du JavaScript. Nous avons commencé par la théorie seule, pour vous habituer aux raisons d'utiliser JavaScript, et à ses possibilités. Vous avez pu voir quelques exemples de code et appris comment JavaScript s'intègre avec le reste du code sur votre site web, entre autres choses.

Le JavaScript peut sembler un peu impressionnant pour l'instant, mais pas d'inquiétude, ce cours progressera pas à pas. Dans le prochain article [Notre premier code JavaScript,](/fr/docs/Learn/JavaScript/First_steps/A_first_splash) nous entrons au cœur du sujet et vous réaliserez vos propres exemples de JavaScript.

{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}

## Dans ce module

- [Qu'est-ce que JavaScript ?](/fr/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [Un premier code JavaScript](/fr/docs/Learn/JavaScript/First_steps/A_first_splash)
- [Quel est le souci ? Analyser un problème avec JavaScript](/fr/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Stocker les informations nécessaires : les variables](/fr/docs/Learn/JavaScript/First_steps/Variables)
- [Opérations mathématiques de base en JavaScript : les nombres et les opérateurs](/fr/docs/Learn/JavaScript/First_steps/Math)
- [Gérer le texte : les chaînes de caractères en JavaScript](/fr/docs/Learn/JavaScript/First_steps/Strings)
- [Les méthodes utiles pour les chaînes de caractères](/fr/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [Les tableaux <i lang="en">(arrays)</i>](/fr/docs/Learn/JavaScript/First_steps/Arrays)

  <i lang="en">(arrays)</i>

- [Évaluation : Générateur d'histoires aléatoires](/fr/docs/Learn/JavaScript/First_steps/Silly_story_generator)
