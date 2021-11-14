---
title: API tierces
slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
tags:
  - API
  - Apprendre
  - Débutant
translation_of: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
original_slug: Apprendre/JavaScript/Client-side_web_APIs/Third_party_APIs
---
<div>{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}</div>

<p>Jusqu'à présent, nous avons uniquement abordé des API qui sont fournies par le navigateur. Il en existe d'autres : de nombreux sites et services, tels que Google Maps, Twitter, Facebook, PayPal, etc. fournissent des API permettant aux développeurs d'exploiter leurs données (ex. afficher un flux Twitter sur un blog) ou leurs services (utiliser l'outil de connexion Facebook pour que vos utilisateurs se connectent sur votre application). Dans cet article, nous verrons les différences entre les API du navigateur et celles fournies par des services tiers (en anglais, on parle de « <em>third-party API</em> ») et nous illustrerons certains cas d'usage pour ces API tierces.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prérequis :</th>
   <td>Les bases de JavaScript (voir <a href="/fr/docs/Learn/JavaScript/First_steps">premiers pas</a>, <a href="/fr/docs/Apprendre/JavaScript/Building_blocks"> blocs de construction</a>, <a href="/fr/docs/Learn/JavaScript/Objects">les objets JavaScript</a>), <a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Introduction">les bases des API côté client</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objectifs :</th>
   <td>Comprendre le fonctionnement des API tierces et comment les utiliser pour ajouter des fonctionnalités à ses sites / applications.</td>
  </tr>
 </tbody>
</table>

<h2 id="Quest-ce_quune_API_tierce">Qu'est-ce qu'une API tierce ?</h2>

<p>Les API tierces sont des API qui sont fournis par des tiers, généralement des entreprises comme Facebook, Twitter ou Google, qui permettent d'accéder à leurs données et/ou leurs fonctionnalités grâce à JavaScript afin de les utiliser sur son site. Utiliser une API de cartographie afin d'afficher une carte sur une page est un exemple.</p>

<p>Regardons <a href="https://mdn.github.io/learning-area/javascript/apis/third-party-apis/mapquest/">cet exemple qui utilise l'API MapQuest</a> et voyons avec lui les différences entre les API tierces et celles du navigateur.</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez <a href="/fr/docs/Apprendre#Obtenir_nos_exemples_de_code">récupérer l'ensemble des exemples de code</a> en une seule fois. Dans ce cas, il vous suffit de rechercher dans votre dépôt les fichiers utilisés pour chaque section.</p>
</div>

<h3 id="Elles_sont_situées_sur_des_serveurs_tiers">Elles sont situées sur des serveurs tiers</h3>

<p>Les API fournies par le navigateur sont construites <strong>dans</strong> le navigateur et on peut y accéder immédiatement avec du code JavaScript. Ainsi, l'API Web Audio <a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Introduction#Comment_les_API_fonctionnent-elles"> que nous avons vu dans cet article introductif</a> s'utilise via l'objet {{domxref("AudioContext")}} fourni nativement :</p>

<pre class="brush: js">const audioCtx = new AudioContext();
  ...
const audioElement = document.querySelector('audio');
  ...
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.</pre>

<p>En revanche, les API tierces sont situées sur des serveurs tiers. Pour y accéder avec JavaScript, il faut d'abord se connecter aux fonctionnalités de l'API afin de les rendre disponibles sur la page. Pour cela, on pourra utiliser une bibliothèque JavaScript disponible sur le serveur via un élément {{htmlelement("script")}}. Pour notre exemple avec MapQuest, voici ce que ça donne :</p>

<pre class="brush: js">&lt;script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"&gt;&lt;/script&gt;
&lt;link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"/&gt;</pre>

<p>On peut alors utiliser les objets fournis par cette bibliothèque. Voici un fragment de code qui illustre cette utilisation :</p>

<pre class="brush: js">var L;

var map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});</pre>

<p>Ici on crée une variable dans laquelle enregistrer les informations de la carte puis on crée une nouvelle carte à l'aide de la méthode <code>mapquest.map()</code> qui prend comme argument :</p>

<ul>
 <li>l'identifiant (la valeur de l'attribut <code>id</code>) d'un élément {{htmlelement("div")}} dans lequel on souhaite afficher la carte (ici, c'est <code>"map"</code>)</li>
 <li>un objet indiquant les options pour la carte qu'on souhaite afficher. Ici, on indique les coordonnées du centre de la carte, le pavage utilisé (ici on utilise la méthode <code>mapquest.tileLayer()</code> ainsi que le niveau de zoom.</li>
</ul>

<p>C'est tout ce dont l'API MapQuest a besoin pour dessiner une carte. C'est le serveur auquel on se connecte qui gère les aspects plus compliqués (comme afficher les bonnes tuiles pour la zone géographique, etc.).</p>

<div class="note">
<p><strong>Note :</strong> Certaines API fonctionnent différemment pour l'accès aux fonctionnalités et passent par une requête HTTP sur une URL spécifique pour récupérer les données. Ces API sont appelées <a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Third_party_APIs#A_RESTful_API_%E2%80%94_NYTimes">API REST (ou <em>RESTful APIs</em> en anglais) et nous les abordons plus bas dans l'article</a>.</p>
</div>

<h3 id="Des_clés_dAPI_sont_nécessaires_pour_les_utiliser">Des clés d'API sont nécessaires pour les utiliser</h3>

<p>Dans les navigateurs, <a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Introduction#Elles_ont_des_mécanismes_de_sécurité_supplémentaires_si_nécessaire">comme nous l'avons vu dans le premier article</a>, les sécurités relatives aux API sont gérées via des permissions afin d'avertir l'utilisateur et d'éviter les utilisations malveillantes de la part des sites.</p>

<p>Pour les API tierces, le système est légèrement différent. Généralement, ce sont des clés qui sont utilisées afin de fournir aux développeurs l'accès aux fonctionnalités de l'API. Dans ce système, la clé sert plutôt à protéger des abus de la part des développeurs envers le site tiers.</p>

<p>Dans l'exemple MapQuest, vous pourrez trouver une ligne semblable à celle-ci :</p>

<pre>L.mapquest.key = 'VOTRE-CLE-D-API-ICI';</pre>

<p>Cette ligne indique une clé d'API utilisée par notre application. Le développeur de l'application doit obtenir une clé et l'inclure dans le code de l'application afin de pouvoir accéder aux fonctionnalités de l'API. Pour cet exemple, il s'agit d'une valeur imaginaire.</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Lorsque vous construisez votre propre application, utilisez une « vraie » valeur de clé plutôt que la valeur de substitution fournie en exemple.</p>
</div>

<p>Certaines API peuvent nécessiter de fournir la clé d'une façon différente mais le fonctionnement général reste similaire.</p>

<p>L'existence d'une telle clé d'API permet au fournisseur tiers de contrôler les accès et actions des différents développeurs/utilisateurs. Ainsi, lorsqu'un développeur demande une clé, il devient alors connu du fournisseur de l'API et ce dernier peut agir de son côté si l'API est détournée ou utilisée de façon incorrecte (par exemple pour pister des personnes ou parce que le site du développeur sollicite l'API avec de trop nombreuses requêtes). Dès qu'un usage incorrect est détecté du côté du fournisseur, il suffit alors de révoquer l'accès et de couper ou de limiter les accès pour cette clé.</p>

<h2 id="Étendre_lexemple_«_MapQuest_»">Étendre l'exemple « MapQuest »</h2>

<p>Ajoutons quelques fonctionnalités à cet exemple MapQuest afin d'illustrer le fonctionnement d'autres aspects de l'API.</p>

<ol>
 <li>
  <p>Pour commencer cette section, copiez <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/mapquest/starter-file.html">le fichier initial</a> dans un nouveau répertoire. Si vous avez déjà <a href="/fr/docs/Apprendre#Obtenir_nos_exemples_de_code">cloné le dépôt des exemples</a>, vous disposez déjà d'une copie située sous le répertoire <em>javascript/apis/third-party-apis/mapquest</em>.</p>
 </li>
 <li>
  <p>Ensuite, <a href="https://developer.mapquest.com/">rendez-vous sur le site MapQuest pour les développeurs</a>, créez un compte puis créez une clé de développement (au moment où nous écrivons ces lignes, sur le site, le nom utilisé est "consumer key" et la procédure de création demande aussi la saisie d'une URL "callback URL" qui est optionnelle (vous pouvez la laisser vide).</p>
 </li>
 <li>Ouvrez un éditeur pour éditer le fichier initial et remplacez la valeur pour la clé d'API avec la vôtre.</li>
</ol>

<h3 id="Modifier_le_type_de_la_carte">Modifier le type de la carte</h3>

<p>L'API MapQuest permet d'afficher différents types de carte. Localisez la ligne suivante dans votre fichier :</p>

<pre class="brush: js">layers: L.mapquest.tileLayer('map')</pre>

<p>Ici, vous pouvez changer <code>'map'</code> en <code>'hybrid'</code> afin d'afficher une carte avec un style hybride. Vous pouvez essayer d'autres valeurs comme celles indiquées sur <a href="https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/">la page de référence de la méthode <code>tileLayer()</code></a>.</p>

<h3 id="Ajouter_différents_contrôles">Ajouter différents contrôles</h3>

<p>Sur la carte, on peut utiliser différents contrôles. Par défaut, seul un contrôle pour le zoom est affiché. Il est possible d'étendre les contrôles disponibles en utilisant la méthode<code>map.addControl()</code>. Ajoutez la ligne suivante à l'intérieur du gestionnaire <code>window.onload</code> :</p>

<pre class="brush: js">map.addControl(L.mapquest.control());</pre>

<p>La méthode <a href="https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/"><code>mapquest.control()</code></a> crée un ensemble complet de contrôle et est placée, par défaut, dans le coin supérieur droit de la carte. Cette position peut être ajustée grâce à un paramètre d'options contenant une propriété <code>position</code> dont la valeur est un mot-clé décrivant la position souhaitée. Vous pouvez modifier la ligne de la façon suivante par exemple :</p>

<pre class="brush: js">  map.addControl(L.mapquest.control({ position: 'bottomright' }));</pre>

<p>D'autres types de contrôle sont disponibles comme <code><a href="https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/">mapquest.searchControl()</a></code> et <code><a href="https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/">mapquest.satelliteControl()</a></code>. Certains sont avancés et permettent de nombreuses choses. N'hésitez pas à en essayer différents pour voir ce qui vous semble le mieux pour votre projet.</p>

<h3 id="Ajouter_un_marqueur_personnalisé">Ajouter un marqueur personnalisé</h3>

<p>Pour ajouter une icône sur un point de la carte, on pourra utiliser la méthode <code><a href="https://leafletjs.com/reference-1.3.0.html#marker">L.marker()</a></code>  (documentée dans la documentation de Leaflet.js). Dans <code>window.onload</code>, vous pouvez ajouter le fragment de code suivante <code>window.onload</code> :</p>

<pre class="brush: js">L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
  })
})
.bindPopup('Ici se trouve Manchester !')
.addTo(map);</pre>

<p>Comme on peut le voir ici, la méthode peut prendre deux paramètres :</p>

<ul>
 <li>le premier qui contient les coordonnées géographiques de l'emplacement où afficher le pointeur sous la forme d'un tableau</li>
 <li>le deuxième qui est un objet d'options contenant une propriété <code>icon</code> qui définit l'icône à afficher à cet emplacement.</li>
</ul>

<p>L'icône est définie via un appel à la méthode <code><a href="https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/">mapquest.icons.marker()</a></code> à laquelle on fournit des informations telles que la couleur et la taille du marqueur.</p>

<p>Après l'appel à la première méthode, on enchaîne avec un appel avec <code>.bindPopup('Ici se trouve Manchester !')</code>, qui fournit le contenu à afficher lorsqu'on cliquera sur le marqueur.</p>

<p>Enfin, on chaîne un appel <code>.addTo(map)</code> pour ajouter le marqueur sur la carte.</p>

<p>Essayez les différentes options que vous trouverez dans la documentation et voyez quel résultat vous pouvez obtenir ! MapQuest fournit certaines fonctionnalités relativement avancées (itinéraire, recherche, etc.).</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Si vous ne parvenez pas à faire fonctionner l'exemple, vous pouvez consulter la version finalisée de notre exemple : <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/mapquest/expanded-example.html">expanded-example.html</a>.</p>
</div>

<h2 id="Quid_de_Google_Maps">Quid de Google Maps ?</h2>

<p>Google Maps est sans doute l'API de cartographie la plus populaire. Pourquoi ne l'avons-nous pas incluse ici ? Nous avons choisi MapQuest pour plusieurs raisons :</p>

<ul>
 <li>L'utilisation est beaucoup plus simple. Pour les API Google, il faut créer un compte Google, se connecter à la <a href="https://console.cloud.google.com">Google Cloud Platform Console</a> pour créer des clés d'API avec une procédure assez complexe.</li>
 <li>Pour utiliser l'API <a href="https://cloud.google.com/maps-platform/">Google Maps</a> et bien qu'un usage léger soit gratuit, il est nécessaire de fournir une carte de crédit à des fins de facturation et nous pensions que cela n'était pas acceptable pour un tel tutoriel.</li>
 <li>Nous souhaitions montrer que des alternatives étaient disponibles.</li>
</ul>

<h2 id="Une_approche_pour_utiliser_les_API_tierces">Une approche pour utiliser les API tierces</h2>

<h3 id="Une_API_REST_du_NYTimes">Une API REST du NYTimes</h3>

<p>Prenons un autre exemple d'API, l'API du <a href="https://developer.nytimes.com">New York Times</a>. Cette API permet de récupérer les informations provenant du New York Times et de les afficher sur votre site. Cette API est ce qu'on appelle une API REST car elle permet de récupérer des données via des requêtes HTTP sur des URL spécifiques dans lesquelles on peut fournir des données comme des termes de recherches (souvent encodés comme paramètres dans l'URL). Ce type d'API est relativement fréquent.</p>

<p>Construisons un second exemple pour comprendre comment utiliser l'API du NYTimes. Au fur et à mesure nous décrirons également une approche plus générale pour consommer d'autres API tierces.</p>

<h3 id="Trouver_la_documentation">Trouver la documentation</h3>

<p>Lorsqu'on veut utiliser une API tierce, il est toujours utile de trouver la documentation correspondante pour connaître les fonctionnalités offertes, comment les utiliser, etc. La documentation de l'API du New York Times API se situe ici : <a href="https://developer.nytimes.com/">https://developer.nytimes.com/</a>.</p>

<h3 id="Obtenir_une_clé_de_développement">Obtenir une clé de développement</h3>

<p>La plupart des API reposent sur l'obtention et l'utilisation d'une clé de développement (tant pour des raisons de sécurité que de responsabilité). Pour obtenir une clé de développement pour l'API du NYTimes, vous pouvez suivre les instructions de <a href="https://developer.nytimes.com/get-started">https://developer.nytimes.com/get-started</a>.</p>

<ol>
 <li>
  <p>Demandez une clé pour l'API Article Search — créez une nouvelle application et sélectionnez cette API, fournissez un nom et une description pour votre application, activez le bouton sous "Article Search API" puis cliquez sur "Create").</p>
 </li>
 <li>
  <p>Vous pouvez alors récupérer la clé d'API à partir de la page suivante.</p>
 </li>
 <li>
  <p>Pour construire le socle de notre exemple, copiez <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/nytimes_start.html">nytimes_start.html</a> et <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/nytimes.css">nytimes.css</a> dans un nouveau répertoire sur votre ordinateur. Si vous avez déjà <a href="/fr/docs/Apprendre#Obtenir_nos_exemples_de_code">cloné le dépôt des exemples</a>, vous disposez déjà d'un exemplaire de ces fichiers et vous pourrez les trouver sous le répertoire <em>javascript/apis/third-party-apis/nytimes</em>. L'élément <code>&lt;script&gt;</code> contient un certain nombre de variables nécessaires à l'initialisation de l'exemple. Nous allons ensuite remplir les fonctionnalités nécessaires.</p>
 </li>
</ol>

<p>Au final, on souhaite que l'application permette de saisir un terme de recherche, des dates optionnelles pour le début et la fin de la période à rechercher. Nous utiliserons alors ces paramètres afin de d'envoyer des requêtes sur l'API Article Search puis nous afficherons les résultats obtenus.</p>

<p><img alt="" src="nytimes-search.png"></p>

<h3 id="Connecter_lAPI_à_son_application">Connecter l'API à son application</h3>

<p>Tout d'abord, vous devrez créer une connexion entre l'API et votre application. Pour cette API, vous devez fournir la clé d'API comme paramètre <a href="/fr/docs/Web/HTTP/Méthode/GET">GET</a> à chaque requête.</p>

<ol>
 <li>
  <p>Localisez la ligne qui suit et remplacez la valeur avec la clé de développement que vous avez obtenu plus tôt :</p>

  <pre class="brush: js">var key = ' ... ';</pre>
 </li>
 <li>
  <p>Ajoutez la ligne suivante sous le commentaire <code>// Event listeners to control the functionality</code>. Cette ligne permet d'exécuter la fonction <code>submitSearch()</code> lorsque le formulaire est envoyé (quand on presse le bouton).</p>

  <pre class="brush: js">searchForm.addEventListener('submit', submitSearch);</pre>
 </li>
 <li>
  <p>Sous cette nouvelle ligne, ajoutons les fonctions <code>submitSearch()</code> et <code>fetchResults()</code> :</p>

  <pre class="brush: js">function submitSearch(e) {
  pageNumber = 0;
  fetchResults(e);
}

function fetchResults(e) {
  // On utilise preventDefault() afin d'éviter
  // l'envoie vers notre serveur et le rafraîchissement
  // de la page
  e.preventDefault();

  // On compose l'URL
  url = baseURL + '?api-key=' + key + '&amp;page=' + pageNumber + '&amp;q=' + searchTerm.value + '&amp;fq=document_type:("article")';

  if(startDate.value !== '') {
    url += '&amp;begin_date=' + startDate.value;
  };

  if(endDate.value !== '') {
    url += '&amp;end_date=' + endDate.value;
  };

}</pre>
 </li>
</ol>

<p><code>submitSearch()</code> commence par réinitialiser le nombre de page à 0 puis appelle <code>fetchResults()</code>. Cette fonction commence par appeler <code><a href="/fr/docs/Web/API/Event/preventDefault">preventDefault()</a></code> sur l'évènement afin d'empêcher l'envoi du formulaire vers notre serveur (ce qui casserait l'exemple). Ensuite, on assemble la chaîne de caractères qui formera l'URL sur laquelle on fera la requête. Dans cette URL, on commence par mettre les fragments « obligatoires » (en tout cas pour cette démonstration) :</p>

<ul>
 <li>L'URL de base (telle que fournie par la variable <code>baseURL</code>).</li>
 <li>La clé d'API qui a été passée au paramètre d'URL  <code>api-key</code> et dont la valeur dans notre script est fournie par la variable <code>key</code>.</li>
 <li>Le nombre de pages est fourni dans l'URL avec le paramètre <code>page</code> et provient de la variable <code>pageNumber</code> dans notre script.</li>
 <li>Le terme de la recherche est fourni dans l'URL avec le paramètre <code>q</code> et provient du texte <code>searchTerm</code> fourni par l'élément {{htmlelement("input")}}.</li>
 <li>Le type de document qu'on souhaite obtenir dans les résultats est une expression passée via le paramètre <code>fq</code> de l'URL. Ici, on souhaite obtenir les articles.</li>
</ul>

<p>Après, on utilise un ensemble d'instructions <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/if...else">if()</a></code> pour vérifier si des valeurs ont été fournies pour les champs <code>startDate</code> et <code>endDate</code> dans le formulaire. Si c'est le cas, on utilise ces valeurs pour renseigner les paramètres d'URL <code>begin_date</code> et/ou <code>end_date</code>.</p>

<p>Si on prend un exemple d'URL complète ainsi construite :</p>

<pre>https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&amp;page=0&amp;q=cats
&amp;fq=document_type:("article")&amp;begin_date=20170301&amp;end_date=20170312 </pre>

<div class="note">
<p><strong>Note :</strong> Pour en savoir plus sur les différents paramètres d'URL qui peuvent être utilisés, vous pouvez consulter <a href="https://developer.nytimes.com/">la documentation du NYTimes</a>.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Dans cet exemple, la validation du formulaire est assez rudimentaire : le terme recherché doit nécessairement être renseigné avant de pouvoir valider le formulaire grâce à l'attribut <code>required</code>. Les champs pour les dates doivent suivre un format particulier et elles ne seront pas envoyées tant que leur valeur ne se composera pas de 8 chiffres (en HTML, c'est ce qui est indiqué par l'attribut <code>pattern="[0-9]{8}"</code>). Voir la page sur <a href="/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire">la validation des données d'un formulaire</a> pour en savoir plus sur ce fonctionnement.</p>
</div>

<h3 id="Récupérer_des_données_depuis_lAPI">Récupérer des données depuis l'API</h3>

<p>Maintenant que nous avons construit notre URL, envoyons une requête à cet endroit. Pour cela, nous utiliserons l'<a href="/fr/docs/Web/API/Fetch_API/Using_Fetch">API Fetch</a>.</p>

<p>Dans la fonction <code>fetchResults()</code>, juste avant l'accolade de fin, ajoutez le fragment de code suivant :</p>

<pre class="brush: js">// On utilise fetch() pour envoyer la requête à l'API
fetch(url).then(function(result) {
  return result.json();
}).then(function(json) {
  displayResults(json);
});</pre>

<p>On envoie la requête en passant la variable <code>url</code> comme paramètre à la fonction <code><a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch">fetch()</a></code> puis on convertit le corps de la réponse avec la fonction <code><a href="/fr/docs/Web/API/Body/json">json()</a></code> puis on passe le JSON ainsi obtenu à la fonction <code>displayResults()</code> afin que les données puissent être affichées dans l'interface utilisateur.</p>

<h3 id="Afficher_les_données">Afficher les données</h3>

<p>Voyons maintenant comment afficher les données reçues. Dans le fichier contenant votre code, ajoutez la fonction suivante après la fonction <code>fetchResults()</code>.</p>

<pre class="brush: js">function displayResults(json) {
  while (section.firstChild) {
      section.removeChild(section.firstChild);
  }

  var articles = json.response.docs;

  if(articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }

  if(articles.length === 0) {
    var para = document.createElement('p');
    para.textContent = 'Aucun résultat reçu.'
    section.appendChild(para);
  } else {
    for(var i = 0; i &lt; articles.length; i++) {
      var article = document.createElement('article');
      var heading = document.createElement('h2');
      var link = document.createElement('a');
      var img = document.createElement('img');
      var para1 = document.createElement('p');
      var para2 = document.createElement('p');
      var clearfix = document.createElement('div');

      var current = articles[i];
      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para1.textContent = current.snippet;
      para2.textContent = 'Mots-clés : ';
      for(var j = 0; j &lt; current.keywords.length; j++) {
        var span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para2.appendChild(span);
      }

      if(current.multimedia.length &gt; 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class','clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para1);
      article.appendChild(para2);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
}</pre>

<p>Il y a pas mal de code ici. Reprenons étape par étape pour l'expliquer :</p>

<ul>
 <li>La boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/while">while</a></code> est utilisée afin de supprimer tout le contenu d'un élément du DOM. Dans ce cas, on enlève ce qu'il y a dans l'élément {{htmlelement("section")}}. On teste si la <code>&lt;section&gt;</code> possède un élément fils et si c'est le cas, on retire le premier, ainsi de suite jusqu'à ce que l'élément <code>&lt;section&gt;</code> n'ait plus d'éléments fils.</li>
 <li>Ensuite, on renseigne la variable <code>articles</code> avec <code>json.response.docs</code> : le tableau contenant les objets qui représentent les articles renvoyés par la recherche. Ce renommage sert uniquement à rendre le code plus simple.</li>
 <li>Le premier bloc <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/if...else">if()</a></code> vérifie si 10 ont été renvoyés par l'API  (cette dernière envoie les articles par bloc de 10 à chaque appel). Dans ce cas, on affiche l'élément {{htmlelement("nav")}} qui contient des boutons de pagination <em>10 articles précédents</em>/<em>10 articles suivants</em>. S'il y a moins de 10 articles, tout le contenu tiendra sur une page et il ne sera pas nécessaire d'avoir les boutons. Nous verrons comment « câbler » ces boutons pour qu'ils fonctionnent dans la prochaine section.</li>
 <li>Le bloc <code>if()</code> suivant sert à vérifier si aucun article n'a été renvoyé. Lorsqu'il n'y a aucun résultat, on crée un élément {{htmlelement("p")}} qui affiche le texte "Aucun résultat reçu" puis on insère ce paragraphe dans l'élément <code>&lt;section&gt;</code>.</li>
 <li>Si des articles sont renvoyés, on commence par créer les éléments qu'on souhaite utiliser afin de les afficher puis on insère le contenu dans chaque puis on insère ces éléments dans le DOM. Pour connaître les propriétés des objets obtenues via l'API, nous avons consulté la référence de l'API <em>Article Search</em> (voir <a href="https://developer.nytimes.com/apis">les API NYTimes</a>). La plupart de ces opérations sont assez parlantes mais voici quelques-unes qui sont notables :
  <ul>
   <li>On utilise une boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for">for</a></code> (<code>for(var j = 0; j &lt; current.keywords.length; j++) { ... }</code> ) pour parcourir les mots-clés associés à chaque article et on insère ces mots-clés dans des éléments {{htmlelement("span")}} à l'intérieur d'un paragraphe <code>&lt;p&gt;</code>. De cette façon, nous pourrons plus facilement mettre en forme ces mots-clés.</li>
   <li>On utilise un bloc <code>if()</code> (<code>if(current.multimedia.length &gt; 0) { ... }</code>) afin de voir si l'article possède des images associées. Si c'est le cas, on affiche la première image qui existe.</li>
   <li>On applique la classe <code>"clearfix"</code> à l'élément <code>&lt;div&gt;</code> afin de pouvoir le dégager.</li>
  </ul>
 </li>
</ul>

<h3 id="Câbler_les_boutons_pour_la_pagination">Câbler les boutons pour la pagination</h3>

<p>Pour que les boutons de pagination fonctionnent, on incrémente (ou on décrémente) la valeur de la variable <code>pageNumber</code> puis on renvoie une requête avec la nouvelle valeur incluse dans le paramètre de l'URL <code>page</code>. Cela fonctionne car l'API du NYTimes ne renvoie que 10 résultats à la fois. S'il y a plus de 10 résultats disponibles, la requête renverra les 10 premiers (0 à 9) lorsque le paramètre <code>page</code> vaut 0 dans l'URL (ou lorsqu'il n'est pas inclus du tout, c'est la valeur par défaut). Les 10 prochains résultats (10 à 19) peuvent être récupérés lorsque le paramètre <code>page</code> vaut 1 et ainsi de suite.</p>

<p>En connaissant cela, on peut écrire une fonction pour gérer la pagination.</p>

<ol>
 <li>
  <p>Après l'appel existant à <code><a href="/fr/docs/Web/API/EventTarget/addEventListener">addEventListener()</a></code>, on ajoute les deux prochaines lignes qui appelleront les fonctions <code>nextPage()</code> et <code>previousPage()</code> lorsqu'on cliquera sur le bouton correspondant :</p>

  <pre class="brush: js">nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);</pre>
 </li>
 <li>
  <p>À la suite, on définit le corps de ces fonctions :</p>

  <pre class="brush: js">function nextPage(e) {
  pageNumber++;
  fetchResults(e);
};

function previousPage(e) {
  if(pageNumber &gt; 0) {
    pageNumber--;
  } else {
    return;
  }
  fetchResults(e);
};</pre>

  <p>La première fonction est assez simple : on incrémente la variable <code>pageNumber</code> puis on exécute à nouveau la fonction <code>fetchResults()</code> afin d'afficher les prochains résultats.</p>

  <p>La seconde fonction est similaire, mais on prend la précaution de vérifier que <code>pageNumber</code> ne vaut pas déjà 0 avant de diminuer sa valeur (si la requête est envoyée avec un paramètre négatif, on pourrait avoir une erreur). Lorsque <code>pageNumber</code> vaut déjà 0, on sort de la fonction avec <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/return">return</a></code> afin d'éviter de lancer une requête pour rien (si on est déjà sur la première page, pas besoin de recharger les résultats à nouveau).</p>
 </li>
</ol>

<div class="blockIndicator note">
<p><strong>Note :</strong> Vous pouvez trouver <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/index.html">l'exemple complet sur l'API du NYTimes sur GitHub</a>.</p>
</div>

<h2 id="Exemple_dutilisation_de_lAPI_YouTube">Exemple d'utilisation de l'API YouTube</h2>

<p>Nous avons également mis à disposition un autre exemple que vous pouvez étudier et adapter : <a href="https://github.com/mdn/learning-area/tree/master/javascript/apis/third-party-apis/youtube">exemple de recherche de vidéo YouTube</a>. Dans cet exemple, on utilise deux API :</p>

<ul>
 <li><a href="https://developers.google.com/youtube/v3/docs/">L'API YouTube Data</a> qui permet de chercher parmi les vidéos YouTube et de renvoyer des résultats.</li>
 <li><a href="https://developers.google.com/youtube/iframe_api_reference">L'API YouTube IFrame Player</a> afin d'afficher les vidéos recherchées dans un lecteur vidéo, affiché dans une <em>iframe</em> pour les regarder.</li>
</ul>

<p>Cet exemple est intéressant car il permet d'illustrer l'utilisation combinée de deux API tierces pour construire une application. La première API est une API REST tandis que la seconde est plus proche du fonctionnement de MapQuest (des méthodes spécifiques à l'API, etc.). On notera que les deux API ont besoin qu'une bibliothèque JavaScript soit chargée sur la page. L'API REST possède des fonctions qui permettent de gérer les requêtes HTTP et de renvoyer les résultats.</p>

<p><img alt="" src="youtube-example.png"></p>

<p>Nous n'allons pas détailler plus encore cet exemple ici, vous pouvez <a href="https://github.com/mdn/learning-area/tree/master/javascript/apis/third-party-apis/youtube">consulter le code source</a> qui contient des commentaires expliquant son fonctionnement. Là encore, pour utiliser vous-même l'exemple, vous aurez besoin de récupérer une clé d'API et de l'insérer dans le code afin que les exemples fonctionnent.</p>

<h2 id="Résumé">Résumé</h2>

<p>Dans cet article, nous avons vu une introduction à l'utilisation des API tierces afin d'ajouter des fonctionnalités à nos sites web.</p>

<p>{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}</p>

<h2 id="Dans_ce_module">Dans ce module</h2>

<ul>
 <li><a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Introduction">Une introduction aux API Web</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Manipulating_documents">Manipuler les documents</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Fetching_data">Récupérer des données du serveur</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Third_party_APIs">Les API tierces</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Drawing_graphics">Dessiner des graphiques</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Video_and_audio_APIs">Les API pour l'audio et la vidéo</a></li>
 <li><a href="/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Client-side_storage">Stockage côté client</a></li>
</ul>
