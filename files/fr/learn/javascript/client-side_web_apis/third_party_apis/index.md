---
title: API tierces
slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
translation_of: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
original_slug: Apprendre/JavaScript/Client-side_web_APIs/Third_party_APIs
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

Jusqu'à présent, nous avons uniquement abordé des API qui sont fournies par le navigateur. Il en existe d'autres&nbsp;: de nombreux sites et services, tels que Google Maps, Twitter, Facebook, PayPal, etc. fournissent des API permettant aux développeuses et développeurs d'exploiter leurs données (par exemple d'afficher un flux Twitter sur un blog) ou leurs services (utiliser l'outil de connexion Facebook pour que des personnes se connectent par ce biais à votre application). Dans cet article, nous verrons les différences entre les API du navigateur et celles fournies par des services tiers (en anglais, on parle de «&nbsp;<i lang="en">third-party API</i>&nbsp;») et nous illustrerons certains cas d'usage pour ces API tierces.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Les bases de JavaScript (voir <a href="/fr/docs/Learn/JavaScript/First_steps">premiers pas en JavaScript</a>, <a href="/fr/docs/Apprendre/JavaScript/Building_blocks">les blocs de construction du langage</a>, <a href="/fr/docs/Learn/JavaScript/Objects">les objets JavaScript</a>), <a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Introduction">les notions de base des API côté client</a>.</td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>Comprendre le fonctionnement des API tierces et comment les utiliser pour ajouter des fonctionnalités à ses sites ou applications.</td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'une API tierce&nbsp;?

Les API tierces sont des API qui sont fournis par des tiers, généralement des entreprises comme Facebook, Twitter ou Google, qui permettent d'accéder à leurs données et/ou leurs fonctionnalités grâce à JavaScript afin de les utiliser sur son site. On peut par exemple utiliser une API tierce de cartographie afin d'afficher une carte sur une page web.

Regardons [cet exemple qui utilise l'API MapQuest](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/mapquest/finished/) et voyons avec lui les différences entre les API tierces et celles du navigateur.

> **Note :** Vous pouvez [récupérer l'ensemble des exemples de code](/fr/docs/Learn#obtenir_nos_exemples_de_code) en une seule fois. Dans ce cas, il vous suffit de rechercher dans votre dépôt les fichiers utilisés pour chaque section.

### Elles sont situées sur des serveurs tiers

Les API fournies par le navigateur sont construites **dans** le navigateur et on peut y accéder immédiatement avec du code JavaScript. Ainsi, l'API Web Audio [que nous avons vu dans cet article introductif](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#comment_les_api_fonctionnent-elles) s'utilise via l'objet [`AudioContext`](/fr/docs/Web/API/AudioContext) qui est fourni nativement&nbsp;:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector('audio');
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

En revanche, les API tierces sont situées sur des serveurs tiers. Pour y accéder avec JavaScript, il faut d'abord se connecter aux fonctionnalités de l'API afin de les rendre disponibles sur la page. Cela implique généralement de charger une bibliothèque JavaScript disponible sur le serveur via un élément [`<script>`](/fr/docs/Web/HTML/Element/script). Pour notre exemple avec MapQuest, voici ce que ça donne&nbsp;:

```html
<script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js" defer></script>
<link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"/>
```

On peut alors utiliser les objets fournis par cette bibliothèque. Par exemple&nbsp;:

```js
const map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
```

Ici on crée une variable dans laquelle on enregistre les informations de la carte puis on crée une nouvelle carte à l'aide de la méthode `mapquest.map()` qui prend comme argument&nbsp;:

- l'identifiant (la valeur de l'attribut `id`) d'un élément [`<div>`](/fr/docs/Web/HTML/Element/div) dans lequel on souhaite afficher la carte (ici, c'est `"map"`)
- un objet indiquant les options pour la carte qu'on souhaite afficher. Ici, on indique les coordonnées du centre de la carte, le pavage utilisé (ici on utilise la méthode `mapquest.tileLayer()` ainsi que le niveau de zoom.

C'est tout ce dont l'API MapQuest a besoin pour dessiner une carte. C'est le serveur auquel on se connecte qui gère les aspects plus compliqués (comme afficher les bonnes tuiles pour la zone géographique, etc.).

> **Note :** Certaines API fonctionnent différemment pour l'accès aux fonctionnalités et passent par une requête HTTP sur une URL spécifique pour récupérer les données. Ces API sont appelées [API REST (ou _RESTful APIs_ en anglais) et nous les abordons plus bas dans l'article](#une_api_rest_du_nytimes).

### Des clés d'API sont nécessaires pour les utiliser

Dans les navigateurs, [comme nous l'avons vu dans le premier article](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#elles_disposent_de_mécanismes_de_sécurité_supplémentaires_adéquats), les sécurités relatives aux API sont gérées via des permissions afin d'avertir l'utilisatrice ou l'utilisateur afin d'éviter les utilisations malveillantes de la part des sites.

Pour les API tierces, le système est légèrement différent. Généralement, ce sont des clés qui sont utilisées afin de fournir l'accès aux fonctionnalités de l'API. Dans ce système, la clé sert à protéger des abus de la part de celles et ceux qui développent envers le site tiers plutôt qu'à protéger la personne qui utilise le site.

Dans l'exemple avec l'API MapQuest, vous trouverez une ligne semblable à celle-ci&nbsp;:

```
L.mapquest.key = 'VOTRE-CLE-D-API-ICI';
```

Cette ligne indique une clé d'API utilisée par notre application. La personne qui développe l'application doit obtenir une clé et l'inclure dans le code de l'application afin de pouvoir accéder aux fonctionnalités de l'API. Pour cet exemple, il s'agit d'une valeur imaginaire.

> **Note :** Lorsque vous construirez votre propre application, vous utiliserez une vraie valeur de clé et non la valeur de substitution fournie en exemple.

Certaines API peuvent nécessiter de fournir la clé d'une façon différente mais le fonctionnement général reste similaire.

L'existence d'une telle clé d'API permet au fournisseur tiers de contrôler les accès et actions des différents consommateurs de l'API. Ainsi, lorsque quelqu'un demande une clé, il devient alors connu du fournisseur de l'API et ce dernier peut agir de son côté si l'API est détournée ou utilisée de façon incorrecte (par exemple pour pister des personnes ou parce que le site sollicite l'API avec de trop nombreuses requêtes). Dès qu'un usage incorrect est détecté du côté du fournisseur, il suffit alors de révoquer l'accès et de couper ou de limiter les accès pour cette clé.

## Étendre l'exemple MapQuest

Ajoutons quelques fonctionnalités à cet exemple MapQuest afin d'illustrer le fonctionnement d'autres aspects de l'API.

1.  Pour commencer cette section, copiez [le fichier initial](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) dans un nouveau répertoire. Si vous avez déjà [cloné le dépôt des exemples](/fr/docs/Learn#obtenir_nos_exemples_de_code), vous disposez déjà d'une copie située sous le répertoire _javascript/apis/third-party-apis/mapquest/start_.
2.  Ensuite, [rendez-vous sur le site MapQuest pour le développement](https://developer.mapquest.com/), créez un compte puis créez une clé de développement (au moment où nous écrivons ces lignes, sur le site, le nom utilisé est "<i lang="en">consumer key</i>" et la procédure de création demande aussi la saisie d'une URL "<i lang="en">callback URL</i>" qui est optionnelle (vous pouvez la laisser vide).
3.  Ouvrez un éditeur pour éditer le fichier initial et remplacez la valeur pour la clé d'API avec la vôtre.

### Modifier le type de la carte

L'API MapQuest permet d'afficher différents types de carte. Localisez la ligne suivante dans votre fichier&nbsp;:

```js
layers: L.mapquest.tileLayer('map')
```

Ici, vous pouvez changer `'map'` en `'hybrid'` afin d'afficher une carte avec un style hybride. Vous pouvez essayer d'autres valeurs comme celles indiquées sur [la page de référence de la méthode `tileLayer()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/).

### Ajouter différents contrôles

Sur la carte, on peut utiliser différents contrôles. Par défaut, seul un contrôle pour le zoom est affiché. Il est possible d'étendre les contrôles disponibles en utilisant la méthode `map.addControl()`. Ajoutez ceci à votre code&nbsp;:

```js
map.addControl(L.mapquest.control());
```

La méthode [`mapquest.control()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) crée un ensemble complet de contrôles et est placée, par défaut, dans le coin supérieur droit de la carte. Cette position peut être ajustée grâce à un paramètre d'options contenant une propriété `position` dont la valeur est un mot-clé décrivant la position souhaitée. Vous pouvez modifier la ligne de la façon suivante par exemple&nbsp;:

```js
  map.addControl(L.mapquest.control({ position: 'bottomright' }));
```

D'autres types de contrôle sont disponibles comme [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) et [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/). Certains sont avancés et permettent  nombreuses choses. N'hésitez pas à en essayer différents pour voir un peu ce que vous pouvez construire.

### Ajouter un marqueur personnalisé

Pour ajouter une icône sur un point de la carte, on pourra utiliser la méthode [`L.marker()`](https://leafletjs.com/reference.html#marker) (documentée dans la documentation de la bibliothèque sous-jacente Leaflet.js). Au sein du gestionnaire `window.onload`, vous pouvez ajouter le fragment de code suivant&nbsp;:

```js
L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
  })
})
.bindPopup('Ici se trouve Manchester !')
.addTo(map);
```

Comme on peut le voir ici, sous sa forme la plus simple, la méthode prend deux paramètres&nbsp;:

- Le premier qui contient les coordonnées géographiques de l'emplacement où afficher le pointeur, sous la forme d'un tableau
- Le deuxième qui est un objet d'options contenant une propriété `icon` qui définit l'icône à afficher à cet emplacement.

L'icône est définie via un appel à la méthode [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) à laquelle on fournit des informations telles que la couleur et la taille du marqueur.

Après l'appel à la première méthode, on enchaîne avec un appel avec `.bindPopup('Ici se trouve Manchester !')`, qui fournit le contenu à afficher lorsqu'on cliquera sur le marqueur.

Enfin, on chaîne un appel à `.addTo(map)` pour ajouter le marqueur sur la carte.

Essayez les différentes options que vous trouverez dans la documentation et voyez quel résultat vous pouvez obtenir&nbsp;! MapQuest fournit certaines fonctionnalités relativement avancées (itinéraire, recherche, etc.).

> **Note :** Si vous ne parvenez pas à faire fonctionner l'exemple, vous pouvez comparer votre code avec [notre version terminée](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js) (et aussi [voir le résultat correspondant ici](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/mapquest/finished/)).

## Une API REST du NYTimes

Prenons un autre exemple d'API, l'API du [New York Times](https://developer.nytimes.com). Cette API permet de récupérer les informations provenant du New York Times et de les afficher sur votre site. Cette API est ce qu'on appelle une **API REST** (parfois aussi appelée «&nbsp;<i lang="en">RESTful API</i>&nbsp;» en anglais). Plutôt que d'obtenir les fonctionnalités d'une bibliothèque JavaScript comme on l'a vu avec MapQuest, on récupère des données via des requêtes HTTP sur des URL spécifiques dans lesquelles on peut fournir des données comme des termes de recherches (souvent encodés comme paramètres dans l'URL). Ce type d'API est relativement fréquent.

## Une approche pour utiliser des API tierces

Construisons un second exemple pour comprendre comment utiliser l'API du NYTimes. Au fur et à mesure, cet exemple décrira également une approche plus générale qui pourra être utilisée pour utiliser d'autres API tierces.

### Trouver la documentation

Lorsqu'on veut utiliser une API tierce, il est toujours utile de trouver la documentation correspondante pour connaître les fonctionnalités disponibles, comment les utiliser, etc. La documentation de l'API du New York Times API se situe ici : <https://developer.nytimes.com/>.

### Obtenir une clé de développement

La plupart des API reposent sur l'obtention et l'utilisation d'une clé de développement (tant pour des raisons de sécurité que de responsabilité). Pour obtenir une clé de développement pour l'API du NYTimes, vous pouvez suivre les instructions de <https://developer.nytimes.com/get-started>.

1.  Demandez une clé pour l'API Article Search — créez une nouvelle application et sélectionnez cette API, fournissez un nom et une description pour votre application, activez le bouton sous "<i lang="en">Article Search API</i>" puis cliquez sur "<i lang="en">Create</i>").
2.  Vous pouvez alors récupérer la clé d'API à partir de la page suivante.
3.  Pour construire le socle de notre exemple, copiez le répertoire [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Si vous avez déjà [cloné le dépôt des exemples](/fr/docs/Learn#obtenir_nos_exemples_de_code), vous disposez déjà d'un exemplaire de ces fichiers et vous pourrez les trouver sous le répertoire _javascript/apis/third-party-apis/nytimes/start_. L'élément `<script>` contient un certain nombre de variables nécessaires à l'initialisation de l'exemple. Nous allons ensuite remplir les fonctionnalités nécessaires.

Au final, on souhaite que l'application permette de saisir un terme de recherche, des dates optionnelles pour le début et la fin de la période à rechercher. Nous utiliserons alors ces paramètres afin d'envoyer des requêtes sur l'API Article Search puis nous afficherons les résultats obtenus.

![](nytimes-example.png)

### Connecter l'API à l'application

Tout d'abord, vous devrez créer une connexion entre l'API et votre application. Pour cette API, vous devez fournir la clé d'API comme paramètre [GET](/fr/docs/Web/HTTP/Methods/GET) à chaque requête.

1.  Localisez la ligne qui suit et remplacez la valeur avec la clé de développement que vous avez obtenu plus tôt&nbsp;:

    ```js
    const key = 'VOTRE-CLE-D-API';
    ```

2.  Ajoutez la ligne suivante sous le commentaire `// Event listeners to control the functionality`. Cette ligne permet d'exécuter la fonction `submitSearch()` lorsque le formulaire est envoyé (quand on presse le bouton).

    ```js
    searchForm.addEventListener('submit', submitSearch);
    ```

3.  Sous cette nouvelle ligne, ajoutons les fonctions `submitSearch()` et `fetchResults()`&nbsp;:

    ```js
    function submitSearch(e) {
      pageNumber = 0;
      fetchResults(e);
    }

    function fetchResults(e) {
      // On utilise preventDefault() afin d'éviter
      // l'envoi vers notre serveur et le rafraîchissement
      // de la page
      e.preventDefault();

      // On compose l'URL
      let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;

      if (startDate.value !== '') {
        url = `${url}&begin_date=${startDate.value}`;
      };

      if (endDate.value !== '') {
        url = `${url}&end_date=${endDate.value}`;
      };

    }
    ```

`submitSearch()` réinitialise le nombre de page à 0 puis appelle `fetchResults()`. Cette fonction commence par appeler [`preventDefault()`](/fr/docs/Web/API/Event/preventDefault) sur l'évènement afin d'empêcher l'envoi du formulaire vers notre serveur (ce qui casserait l'exemple). Ensuite, on assemble la chaîne de caractères qui formera l'URL sur laquelle on fera la requête. Dans cette URL, on commence par mettre les fragments nécessaires à cette démonstration&nbsp;:

- L'URL de base (telle que fournie par la variable `baseURL`).
- La clé d'API qui a été passée au paramètre d'URL `api-key` et dont la valeur dans notre script est fournie par la variable `key`.
- Le nombre de pages est fourni dans l'URL avec le paramètre `page` et provient de la variable `pageNumber` dans notre script.
- Le terme de la recherche est fourni dans l'URL avec le paramètre `q` et provient du texte `searchTerm` fourni par l'élément [`<input>`](/fr/docs/Web/HTML/Element/input).
- Le type de document qu'on souhaite obtenir dans les résultats est une expression passée via le paramètre `fq` de l'URL. Ici, on souhaite obtenir les articles.

Après, on utilise un ensemble d'instructions [`if()`](/fr/docs/Web/JavaScript/Reference/Statements/if...else) pour vérifier si des valeurs ont été fournies pour les champs `startDate` et `endDate` dans le formulaire. Si c'est le cas, on utilise ces valeurs pour renseigner les paramètres d'URL `begin_date` et/ou `end_date`.

Si on prend un exemple d'URL complète ainsi construite :

```
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=VOTRE-CLE-D-API&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> **Note :** Pour en savoir plus sur les différents paramètres d'URL qui peuvent être utilisés, vous pouvez consulter [la documentation du NYTimes pour le développement](https://developer.nytimes.com/).

> **Note :** Dans cet exemple, la validation du formulaire est assez rudimentaire&nbsp;: le terme recherché doit nécessairement être renseigné avant de pouvoir valider le formulaire grâce à l'attribut `required`. Les champs pour les dates doivent suivre un format particulier et elles ne seront pas envoyées tant que leur valeur ne se composera pas de 8 chiffres (en HTML, c'est ce qui est indiqué par l'attribut `pattern="[0-9]{8}"`). Voir la page sur [la validation des données d'un formulaire](/fr/docs/Learn/Forms/Form_validation) pour en savoir plus sur ce fonctionnement.

### Récupérer des données depuis l'API

Maintenant que nous avons construit notre URL, envoyons une requête à cette adresse. Pour cela, nous utiliserons l'[API Fetch](/fr/docs/Web/API/Fetch_API/Using_Fetch).

Dans la fonction `fetchResults()`, juste avant l'accolade de fin, ajoutez le fragment de code suivant&nbsp;:

```js
// On utilise fetch() pour envoyer la requête à l'API
fetch(url)
  .then( response => response.json() )
  .then( json => displayResults(json) )
  .catch( error => console.error(`Erreur lors de la récupération des données : ${error.message}`) );
```

On envoie la requête en passant la variable `url` comme paramètre à la fonction [`fetch()`](/fr/docs/Web/API/fetch) puis on convertit le corps de la réponse avec la fonction [`json()`](/fr/docs/Web/API/Response/json) puis on passe le JSON ainsi obtenu à la fonction `displayResults()` afin que les données puissent être affichées dans l'interface utilisateur. On intercepte et affiche dans la console les éventuelles erreurs.

### Afficher les données

Voyons maintenant comment afficher les données reçues. Dans le fichier contenant votre code, ajoutez la fonction suivante après la fonction `fetchResults()`.

```js
function displayResults(json) {
  while (section.firstChild) {
      section.removeChild(section.firstChild);
  }

  const articles = json.response.docs;

  if(articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }

  if(articles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'Aucun résultat reçu.'
    section.appendChild(para);
  } else {
    for(const i = 0; i < articles.length; i++) {
      const article = document.createElement('article');
      const heading = document.createElement('h2');
      const link = document.createElement('a');
      const img = document.createElement('img');
      const para1 = document.createElement('p');
      const keywordPara = document.createElement('p');
      keywordPara.classList.add('keywords');

      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para1.textContent = current.snippet;
      keywordPara.textContent = 'Mots-clés : ';
      for (const keyword of current.keywords) {
        const span = document.createElement('span');
        span.textContent = `${keyword.value} `;
        keywordPara.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = `http://www.nytimes.com/${current.multimedia[0].url}`;
        img.alt = current.headline.main;
      }

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para1);
      article.appendChild(keywordPara);
      section.appendChild(article);
    }
  }
};
```

Il y a pas mal de code ici. Reprenons étape par étape pour l'expliquer&nbsp;:

- La boucle [`while`](/fr/docs/Web/JavaScript/Reference/Statements/while) est utilisée afin de supprimer tout le contenu d'un élément du DOM. Dans ce cas, on enlève ce qu'il y a dans l'élément [`<section>`](/fr/docs/Web/HTML/Element/section). On teste si la `<section>` possède un élément enfant et si c'est le cas, on retire le premier, ainsi de suite jusqu'à ce que l'élément `<section>` n'ait plus d'éléments enfants.
- Ensuite, on renseigne la variable `articles` avec `json.response.docs`&nbsp;: le tableau contenant les objets qui représentent les articles renvoyés par la recherche. Ce renommage sert uniquement à rendre le code plus simple.
- Le premier bloc [`if()`](/fr/docs/Web/JavaScript/Reference/Statements/if...else) vérifie si 10 articles ont été renvoyés par l'API  (cette dernière envoie les articles par bloc de 10 à chaque appel). Dans ce cas, on affiche l'élément [`<nav>`](/fr/docs/Web/HTML/Element/nav) qui contient des boutons de pagination _10 articles précédents_/_10 articles suivants_. S'il y a moins de 10 articles, tout le contenu tiendra sur une page et il ne sera pas nécessaire d'avoir les boutons. Nous verrons comment «&nbsp;câbler&nbsp;» ces boutons pour qu'ils fonctionnent dans la prochaine section.
- Le bloc `if()` suivant sert à vérifier si aucun article n'a été renvoyé. Lorsqu'il n'y a aucun résultat, on crée un élément [`<p>`](/fr/docs/Web/HTML/Element/p) qui affiche le texte "Aucun résultat reçu" puis on insère ce paragraphe dans l'élément `<section>`.
- Si des articles sont renvoyés, on commence par créer les éléments qu'on souhaite utiliser afin de les afficher puis on insère le contenu dans chaque puis on insère ces éléments dans le DOM. Pour connaître les propriétés des objets obtenues via l'API, nous avons consulté la référence de l'API _Article Search_ (voir [les API NYTimes](https://developer.nytimes.com/apis)). La plupart de ces opérations sont assez parlantes mais voici quelques-unes qui sont notables&nbsp;:

  - On utilise une boucle [`for…of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) pour parcourir les mots-clés associés à chaque article et on insère ces mots-clés dans des éléments [`<span>`](/fr/docs/Web/HTML/Element/span) à l'intérieur d'un paragraphe `<p>`. De cette façon, nous pourrons plus facilement mettre en forme ces mots-clés.
  - On utilise un bloc `if()` (`if(current.multimedia.length > 0) { … }`) afin de voir si l'article possède des images associées. Si c'est le cas, on affiche la première image qui existe.

### Câbler les boutons de pagination

Pour que les boutons de pagination fonctionnent, on incrémente (ou on décrémente) la valeur de la variable `pageNumber` puis on renvoie une requête avec la nouvelle valeur incluse dans le paramètre de l'URL `page`. Cela fonctionne car l'API du NYTimes ne renvoie que 10 résultats à la fois. S'il y a plus de 10 résultats disponibles, la requête renverra les 10 premiers (0 à 9) lorsque le paramètre `page` vaut 0 dans l'URL (ou lorsqu'il n'est pas inclus du tout, c'est la valeur par défaut). Les 10 prochains résultats (10 à 19) peuvent être récupérés lorsque le paramètre `page` vaut 1 et ainsi de suite.

En connaissant cela, on peut écrire une fonction pour gérer la pagination.

1.  Après l'appel existant à [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener), on ajoute les deux prochaines lignes qui appelleront les fonctions `nextPage()` et `previousPage()` lorsqu'on cliquera sur le bouton correspondant&nbsp;:

    ```js
    nextBtn.addEventListener('click', nextPage);
    previousBtn.addEventListener('click', previousPage);
    ```

2.  À la suite, on définit le corps de ces fonctions&nbsp;:

    ```js
    function nextPage(e) {
      pageNumber++;
      fetchResults(e);
    };

    function previousPage(e) {
      if(pageNumber > 0) {
        pageNumber--;
      } else {
        return;
      }
      fetchResults(e);
    };
    ```

    La première fonction incrémente la variable `pageNumber` puis exécute à nouveau la fonction `fetchResults()` afin d'afficher les prochains résultats.

    La seconde fonction est similaire, mais on prend la précaution de vérifier que `pageNumber` ne vaut pas déjà 0 avant de diminuer sa valeur (si la requête est envoyée avec un paramètre négatif, on pourrait recevoir une erreur). Lorsque `pageNumber` vaut déjà 0, on sort de la fonction avec [`return`](/fr/docs/Web/JavaScript/Reference/Statements/return) afin d'éviter de lancer une requête pour rien (si on est déjà sur la première page, pas besoin de recharger les résultats à nouveau).

> **Note :** Vous pouvez trouver [le code terminé de l'exemple utilisant l'API du NYTimes sur GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (et aussi [voir le résultat correspondant fonctionner ici](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## Exemple d'utilisation de l'API YouTube

Nous avons également mis à disposition un autre exemple que vous pouvez étudier et adapter&nbsp;: [exemple de recherche de vidéo YouTube](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/). Dans cet exemple, on utilise deux API&nbsp;:

- [L'API YouTube Data](https://developers.google.com/youtube/v3/docs/) qui permet de chercher parmi les vidéos YouTube et de renvoyer des résultats.
- [L'API YouTube IFrame Player](https://developers.google.com/youtube/iframe_api_reference) afin d'afficher les vidéos recherchées dans un lecteur vidéo, affiché dans une _iframe_ pour pouvoir les regarder.

Cet exemple est intéressant, car il permet d'illustrer l'utilisation combinée de deux API tierces pour construire une application. La première API est une API REST tandis que la seconde est plus proche du fonctionnement de MapQuest (des méthodes spécifiques à l'API, etc.). On notera que les deux API ont besoin qu'une bibliothèque JavaScript soit chargée sur la page. L'API REST possède des fonctions qui permettent de gérer les requêtes HTTP et de renvoyer les résultats.

![](youtube-example.png)

Nous n'allons pas détailler plus encore cet exemple ici, vous pouvez [consulter le code source](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) qui contient des commentaires expliquant son fonctionnement.

Pour le faire fonctionner, vous devrez&nbsp;:

- Consulter la documentation (en anglais) sur [l'aperçu de l'API YouTube Data](https://developers.google.com/youtube/v3/getting-started).
- Vous assurer de visiter [la page des API activées](https://console.cloud.google.com/apis/enabled) et vérifier que le statut est activé pour l'API YouTube Data v3.
- Obtenir une clé d'API [Google Cloud](https://cloud.google.com/).
- Modifier la chaîne de caractères `ENTER-API-KEY-HERE` dans le code source de l'exemple en la remplaçant avec votre clé d'API.
- Exécuter l'exemple avec un serveur web. Il ne fonctionnera pas si vous lancez directement les fichiers dans votre navigateur (par exemple avec une URL `file://`).

## Résumé

Dans cet article, nous avons vu une introduction à l'utilisation des API tierces afin d'ajouter des fonctionnalités à nos sites web.

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

## Dans ce module

- [Une introduction aux API Web](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [Manipuler les documents](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Récupérer des données du serveur](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [Dessiner des graphiques](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Les API pour l'audio et la vidéo](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [Le stockage côté client](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
