---
title: Stockage côté client
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
---

{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Les navigateurs web modernes permettent aux sites web de stocker des données sur l'ordinateur de l'utilisateur — avec sa permission — puis de les récupérer au besoin. Cela permet d'enregistrer des données pour du stockage à long terme, de sauvegarder des documents ou des sites hors-ligne, de conserver des préférences spécifiques à l'utilisateur et plus encore. Cet article explique les fondamentaux pour y parvenir.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Notions de bases de JavaScript (voir
        <a href="/fr/docs/Learn/JavaScript/First_steps">premiers pas</a>,
        <a href="/fr/Apprendre/JavaScript/Building_blocks"
          >les briques JavaScript</a
        >,
        <a href="/fr/docs/Learn/JavaScript/Objects">les objets JavaScript</a>),
        les
        <a href="/fr/Apprendre/JavaScript/Client-side_web_APIs/Introduction"
          >notions de base des APIs côté client</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Apprendre à utiliser les APIs de stockage côté client pour stocker des
        données de l'application.
      </td>
    </tr>
  </tbody>
</table>

## Stockage côté client ?

Ailleurs dans la zone d'apprentissage de MDN, nous avons parlé de la différence entre les [sites statiques](/fr/docs/Learn/Server-side/First_steps/Client-Server_overview#Static_sites) et les [sites dynamiques](/fr/docs/Learn/Server-side/First_steps/Client-Server_overview#Dynamic_sites) — ces derniers stockent des données [côté serveur](/fr/docs/Learn/Server-side) en utilisant une base de données. Ensuite, ils exécutent du code pour récupérer les données et les insérer dans des templates de page statique. Finalement, le HTML résultant est envoyé au client, qui est alors affiché par le navigateur de l'utilisateur.

Le stockage côté client fonctionne sur des principes similaires, mais pour une utilisation différente. Le stockage côté client repose sur des APIs JavaScript qui permettent de stocker des données sur la machine de l'utilisateur et de les récupérer au besoin. Cela peut se révéler utile dans différents cas comme :

- Personnaliser les préférences du site (par exemple, afficher des widgets personnalisés selon le choix de l'utilisateur, changer le thème du site ou la taille de la police).
- Enregistrer les activités sur le site (comme le contenu d'un panier d'achat d'une session précédente, ou encore se souvenir si l'utilisateur s'est déjà connecté).
- Sauvegarder des données et ressources localement pour pouvoir accéder au site plus rapidement ou même sans connexion réseau.
- Sauvegarder des documents générés par l'application pour une utilisation hors ligne.

Souvent, le stockage côté client et côté serveur sont utilisés ensemble. Par exemple, vous pouvez télécharger à partir d'une base de données côté serveur une série de fichiers mp3 utilisés par un site web (comme un jeu ou une application de musique) vers une base de données côté client et ainsi pouvoir les lire quand vous le voulez. Avec cette stratégie, l'utilisateur n'a à télécharger le fichier qu'une seule fois — les visites suivantes, ils sont récupérés à partir de la base de données locale.

> **Note :** La quantité de données que l'on peut stocker à l'aide des APIs de stockage côté client est limitée (limite par API et limite globale), la limite exacte dépend du navigateur et des configurations. Voir [Limites de stockage du navigateur et critères d'éviction](/fr/docs/Web/API/API_IndexedDB/Browser_storage_limits_and_eviction_criteria) pour plus d'informations.

### À l'ancienne : les cookies

Le concept de stockage côté client existe depuis longtemps. Au début du web, les sites utilisaient des [cookies](/fr/docs/Web/HTTP/Cookies) pour stocker des informations et personnaliser l'expérience utilisateur. C'est la méthode de stockage côté client la plus couramment utilisée et la plus ancienne.

De par leur histoire, les cookies souffrent d'un certain nombre de problèmes — tant techniques qu'au niveau de l'expérience utilisateur. Ces problèmes sont suffisamment importants pour imposer un message d'information aux utilisateurs habitant en Europe lors de leur première visite si le site utilise des cookies pour stocker des informations sur eux. Cela est dû à une loi de l'Union Européenne connue sous le nom de [directive Cookie](/fr/docs/Web/HTTP/Cookies#EU_cookie_directive).

![](cookies-notice.png)

Pour ces raisons, nous ne verrons pas dans cet article comment utiliser les cookies. Entre le fait qu'ils sont dépassés, les [problèmes de sécurité](/fr/docs/Web/HTTP/Cookies#Security) qu'ils présentent et l'incapacité de stocker des données complexes, les cookies ne sont pas la meilleure manière pour stocker des données. Il y a de meilleures alternatives, modernes, permettant de stocker des données variées sur l'ordinateur de l'utilisateur.

Le seul avantage des cookies est qu'ils sont supportés par des navigateurs anciens : si votre projet requiert le support de navigateurs obsolètes (comme Internet Explorer 8 et inférieur), les cookies peuvent se révéler utiles. Pour la plupart des projets, vous ne devriez pas avoir besoin d'y recourir.

> **Note :** Pourquoi existe-t-il encore de nouveaux sites crées à l'aide de cookies? Principalement de par les habitudes des développeurs, l'utilisation de bibliothèques anciennes qui utilisent encore des cookies et l'existence de nombreux sites web fournissant des formations et références dépassées pour apprendre à stocker des données.

### La nouvelle école : Web Storage et IndexedDB

Les navigateurs modernes ont des APIs beaucoup plus efficaces et faciles d'utilisation pour stocker des données côté client.

- L'[API Web Storage](/fr/docs/Web/API/Web_Storage_API) fournit une syntaxe très simple pour stocker et récupérer des données de petite taille, basé sur un système de clé/valeur. C'est utile lorsque vous avez besoin de stocker des données simples, comme le nom de l'utilisateur, le fait qu'il soit connecté ou non, la couleur à utiliser pour l'arrière-plan de l'écran, etc.
- L'[API IndexedDB](/fr/docs/Web/API/API_IndexedDB) fournit au navigateur un système de base de données complet pour stocker des données complexes. C'est utile pour des choses allant de simples sauvegardes côté client (texte) au stockage de données complexes tels que des fichiers audio ou vidéo.

Vous en apprendrez plus sur ces APIs ci-dessous.

### Le futur : l'API Cache

Certains navigateurs modernes prennent en charge la nouvelle API {{domxref("Cache")}}. Cette API a été conçue pour stocker les réponses HTTP de requêtes données et est très utile pour stocker des ressources du site afin qu'il soit accessible sans connexion réseau par exemple. Le cache est généralement utilisé avec l'[API Service Worker](/fr/docs/Web/API/Service_Worker_API), mais ce n'est pas obligatoire.

L'utilisation du Cache et des Service Workers est un sujet avancé, nous ne le traiterons pas en détail dans cet article, nous ne montrerons qu'un simple exemple dans la section [Stockage hors-ligne de ressources](#stockage_hors-ligne_de_ressources) plus bas.

## Stocker des données simples — web storage

L'[API Web Storage](/fr/docs/Web/API/Web_Storage_API) est très facile à utiliser — on stocke une simple paire clé/valeur de données (limité aux données scalaires) et on les récupére au besoin.

### Syntaxe basique

Nous allons vous guider pas à pas :

1. Tout d'abord, ouvez notre template vide de [web storage sur GitHub](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) dans un nouvel onglet.
2. Ouvrez la console JavaScript de votre navigateur.
3. Toutes les données du web storage sont contenues dans deux structures de type objet : {{domxref("Window.sessionStorage", "sessionStorage")}} et {{domxref("Window.localStorage", "localStorage")}}. Le premier conserve les données aussi longtemps que le navigateur est ouvert (elles sont perdues lorsque le navigateur est fermé) et le second conserve les données même après que le navigateur ait été fermé puis ré-ouvert. Nous allons utiliser le second dans cet article car il est généralement plus utile.

   La méthode {{domxref("Storage.setItem()")}} permet de sauvegarder des données dans le storage — elle prend deux paramètres : le nom de l'entrée à enregistrer et sa valeur. Essayez de taper ce qui suit dans votre console JavaScript (changez le nom et la valeur si vous le voulez !) :

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. La méthode {{domxref("Storage.getItem()")}} prend un paramètre — le nom de l'entrée que vous voulez récupérer — et retourne la valeur de l'entrée. Maintenant, tapez ces lignes dans votre console JavaScript :

   ```js
   var myName = localStorage.getItem("name");
   myName;
   ```

   En tapant la deuxième ligne, vous devriez voir que la variable `myName` contient la valeur de l'entrée `name`.

5. La méthode {{domxref("Storage.removeItem()")}} prend un paramètre — le nom de l'entrée de vous voulez supprimer — et supprime l'entrée du web storage. Tapez les lignes suivantes dans votre console JavaScript :

   ```js
   localStorage.removeItem("name");
   var myName = localStorage.getItem("name");
   myName;
   ```

   La troisième ligne devrait maintenant retourner `null` — l'entrée `name` n'existe plus dans le web storage.

### Les données persistent !

Une caractéristique clé du web storage est que les données persistent entre les différents chargements de page (et même lorsque le navigateur est arrêté dans le cas du `localStorage`). Regardons ça en action :

1. Ouvrez notre template vide une fois de plus, mais cette fois dans un navigateur différent de celui dans lequel vous avez ouvert ce tutoriel. Cela rendra la suite plus facile.
2. Tapez ces lignes dans la console JavaScript du navigateur que vous venez d'ouvrir :

   ```js
   localStorage.setItem("name", "Chris");
   var myName = localStorage.getItem("name");
   myName;
   ```

   Vous devriez voir que l'entrée `name` est bien là.

3. Maintenant, fermez le navigateur et ouvrez-le de nouveau.
4. Entrez les lignes suivantes :

   ```js
   var myName = localStorage.getItem("name");
   myName;
   ```

   Vous devriez voir que la valeur est toujours accessible, quand bien même le navigateur a été redémarré.

### Stockage séparé pour chaque domaine

Il existe un système de stockage distinct pour chaque domaine (chaque adresse web chargée dans le navigateur a accès à son propre storage et pas aux autres). Vous verrez que si vous chargez deux sites web (disons google.com et amazon.com) et essayez de stocker un élément, il ne sera pas disponible sur l'autre site.

C'est plutôt logique — imaginez les problèmes de sécurité qui se poseraient si les sites web pouvaient voir les données d'un autre !

### Un exemple plus impliqué

Appliquons cette nouvelle connaissance pour écrire un exemple, cela vous donnera une idée de la façon dont le web storage peut être utilisé. Notre exemple permettra d'envoyer un nom, à la suite de quoi la page sera mise à jour pour donner un accueil personnalisé. Cet état persistera également après un rechargement de la page ou redémarrage du navigateur, puisqu'il sera stocké dans le web storage.

Le HTML de l'exemple est disponible à [personal-greeting.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/personal-greeting.html) — il s'agit d'un site web très simple avec entête, contenu et pied de page, ainsi qu'un formulaire pour entrer votre nom.

![](web-storage-demo.png)

Nous allons construire cet exemple pas à pas, cela vous permettra de comprendre comment ça marche.

1. D'abord, copiez notre fichier [personal-greeting.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/personal-greeting.html) dans un nouveau répertoire sur votre ordinateur.
2. Ensuite, créez un fichier `index.js` dans le même répertoire que le fichier HTML — le fichier HTML inclut ce script (voir ligne 40).
3. Nous allons commencer par récupérer les références de tous les éléments HTML qu'on manipulera dans cet exemple — nous les créons en tant que constantes car ces références n'ont pas besoin d'être modifiées au cours de l'exécution de l'application. Ajoutez les lignes suivantes à votre fichier JavaScript:

   ```js
   // créer les constantes nécessaires
   const rememberDiv = document.querySelector(".remember");
   const forgetDiv = document.querySelector(".forget");
   const form = document.querySelector("form");
   const nameInput = document.querySelector("#entername");
   const submitBtn = document.querySelector("#submitname");
   const forgetBtn = document.querySelector("#forgetname");

   const h1 = document.querySelector("h1");
   const personalGreeting = document.querySelector(".personal-greeting");
   ```

4. Ensuite, on doit ajouter un gestionnaire d'événement pour empêcher le formulaire d'être véritablement soumis lorsque le bouton de soumission est cliqué, puisque ce n'est pas le comportement que l'on veut. Ajoutez le bout de code suivant à la suite de du code précédent :

   ```js
   // Empêcher le form d'être soumis
   form.addEventListener("submit", function (e) {
     e.preventDefault();
   });
   ```

5. Maintenant, on doit ajouter un gestionnaire d'événement pour gérer le clic sur le bouton "Say hello" (dire bonjour). Les commentaires expliquent ce que chaque instruction fait, mais, en substance, on prend le nom que l'utilisateur a entré dans le champs texte et on l'enregistre dans le web storage avec `setItem()`. Ensuite, on exécute une fonction appelée `nameDisplayCheck()` qui se charge de mettre à jour le contenu du site web. Ajoutez ceci au bas de votre code :

   ```js
   // exécuter la fonction quand le bouton 'Say hello' est cliqué
   submitBtn.addEventListener("click", function () {
     // stocker le nom entré dans le web storage
     localStorage.setItem("name", nameInput.value);
     // exécuter nameDisplayCheck() pour afficher la
     // page personnalisée et changer le formulaire
     nameDisplayCheck();
   });
   ```

6. On doit maintenant gérer l'événement lorsque le bouton "Forget" (oublier) est cliqué — il est affiché une fois que le bouton "Say hello" a été cliqué (les deux boutons permettent de basculer d'un état à l'autre). Dans cette fonction, on supprime l'élément `name` du web storage en utilisant `removeItem()`, puis on exécute `nameDisplayCheck()` pour mettre à jour l'affichage. Ajoutez ceci au bas de votre code :

   ```js
   // exécuter la fonction quand le bouton 'Forget' est cliqué
   forgetBtn.addEventListener("click", function () {
     // supprimer l'item name du web storage
     localStorage.removeItem("name");
     // exécuter nameDisplayCheck() pour afficher la
     // page personnalisée et changer le formulaire
     nameDisplayCheck();
   });
   ```

7. Il est maintenant temps de définir la fonction `nameDisplayCheck()` elle-même. Ici, on vérifie si l'élément `name` est stocké dans le web storage en utilisant `localStorage.getItem('name')` comme condition. S'il existe, la valeur retournée sera évaluée à `true`; sinon, comme `false`. S'il existe, on affiche un message d'accueil personnalisé et le bouton "Forget" du formulaire, tout en masquant le bouton "Say hello" du formulaire. Sinon, on affiche un message d'accueil générique et le bouton "Say hello". Encore une fois, mettez les lignes suivantes au bas de votre code :

   ```js
   // définit la fonction nameDisplayCheck()
   function nameDisplayCheck() {
     // vérifie si l'élément 'name' est stocké dans le web storage
     if (localStorage.getItem("name")) {
       // Si c'est le cas, affiche un accueil personnalisé
       let name = localStorage.getItem("name");
       h1.textContent = "Welcome, " + name;
       personalGreeting.textContent =
         "Welcome to our website, " +
         name +
         "! We hope you have fun while you are here.";
       // cache la partie 'remember' du formulaire et affiche la partie 'forget'
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // Sinon, affiche un accueil générique
       h1.textContent = "Welcome to our website ";
       personalGreeting.textContent =
         "Welcome to our website. We hope you have fun while you are here.";
       // cache la partie 'forget' du formulaire et affiche la partie 'remember'
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. Dernier point, mais non des moindres, on exécute la fonction `nameDisplayCheck()` à chaque fois que la page est chargée. Si on ne le faisait pas, l'accueil personnalisé ne serait pas affiché après qu'on ait rafraichit la page. Ajoutez ce qui suit au bas de votre code :

   ```js
   document.body.onload = nameDisplayCheck;
   ```

Notre exemple est terminé — bien joué ! Il ne vous reste plus qu'à enregistrer votre code et tester votre page HTML dans un navigateur. Vous pouvez voir notre [version terminée en direct ici](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html) (ou le [code JavaScript terminé](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/index.js)).

> **Note :** Vous pouvez trouver un exemple un peu plus complexe dans l'article [Utiliser l'API de stockage web](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

> **Note :** Dans la ligne `<script src="index.js" defer></script>` de notre version finie, l'attribut `defer` spécifie que le contenu de l'élément {{htmlelement("script")}} ne doit pas s'exécuter avant que la page ait fini de charger.

## Stocker des données complexes — IndexedDB

L'[API IndexedDB](/fr/docs/Web/API/IndexedDB_API) (parfois abrégé IDB) est un système de base de données complet disponible dans le navigateur. Vous pouvez y stocker des données complexes, les types ne sont pas limités à des valeurs simples de type chaînes ou nombres. Vous pouvez stocker des vidéos, des images et à peu près tout ce que vous voulez, dans une instance IndexedDB.

Cependant, cela a un coût : IndexedDB est beaucoup plus complexe à utiliser que l'API Web Storage. Dans cette section, nous ne ferons qu'égratigner la surface de ce qu'IndexedDB peut faire, mais nous vous en donnerons assez pour débuter.

### Un exemple de stockage de notes

Nous allons voir un exemple qui vous permettra de stocker des notes dans votre navigateur, les voir et les supprimer, quand vous le souhaitez. Vous apprendrez à le construire par vous-même au fur et à mesure des explications et cela vous permettra de comprendre les parties fondamentales d'IDB.

L'application ressemble à ceci :

![](idb-demo.png)

Chaque note a un titre et une description, chacun éditables individuellement. Le code JavaScript que nous allons voir ci-dessous contient des commentaires détaillés pour vous aider à comprendre ce qu'il se passe.

### Pour commencer

1. Tout d'abord, copiez les fichiers [`index.html`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/style.css), et [`index-start.js`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) dans un nouveau répertoire sur votre ordinateur.
2. Jetez un coup d'oeil aux fichiers.

   - Vous verrez que le HTML est assez simple : un site web avec une entête et un pied de page, ainsi qu'une zone de contenu principal contenant un emplacement pour afficher les notes et un formulaire pour en ajouter.
   - Le CSS fournit un style simple pour rendre plus clair ce qu'il se passe.
   - Le fichier JavaScript contient cinq constantes déclarées — des références à l'élément {{htmlelement("ul")}} dans lequel seront affichées les notes, les {{htmlelement("input")}} title et body, le {{htmlelement("form")}} lui-même, et un {{htmlelement("button")}}.

3. Renommez votre fichier JavaScript en `index.js`. Vous êtes maintenant prêt pour y ajouter du code.

### Configuration initiale de la base de données

Voyons maintenant la première chose à faire, mettre en place la base de données.

1. À la suite des déclarations de constantes, ajoutez les lignes suivantes :

   ```js
   // Objet db pour stocker la BDD ouverte
   let db;
   ```

   Ici, on déclare une variable appelée `db` — on l'utilisera plus tard pour stocker un objet permettant d'accéder à la base de données. On l'utilisera à plusieurs endroits, on l'a donc déclaré globablement ici pour faciliter les choses.

2. Ensuite, ajoutez ce qui suit au bas de votre code :

   ```js
   window.onload = function () {};
   ```

   On écrira tout notre code dans le gestionnaire d'événement `window.onload`, appelé quand l'événement [`load`](/fr//docs/Web/API/Window/load_event) de la fenêtre est chargé, pour s'assurer qu'on n'essaiera pas d'utiliser IndexedDB avant que l'application ne soit complètement chargée (ça ne marcherait pas sinon).

3. À l'intérieur de `window.onload`, ajoutez ce qui suit :

   ```js
   // Ouvrir la BDD; elle sera créée si elle n'existe pas déjà
   // (voir onupgradeneeded)
   let request = window.indexedDB.open("notes", 1);
   ```

   Cette ligne crée une requête `request` pour ouvrir la version `1` de la base de données appelée `notes`. Si elle n'existe pas déjà, on devra la créer via un gestionnaire d'événement.

   Vous verrez très souvent ce format dans IndexedDB. Les opérations de base de données prennent du temps et on ne veut pas suspendre le navigateur le temps de récupérer le résultat, les opérations sur la base de données sont donc {{Glossary("asynchronous", "asynchrones")}} — ce qui signifie qu'au lieu d'arriver immédiatement, elles se produiront à un moment ultérieur et un événement sera déclenché lorsque cela arrivera.

   Pour gérer cela dans IndexedDB, on crée d'abord une requête (que vous pouvez appeler comme vous le voulez — on l'appelle `request` pour que ce soit plus explicite). On utilise ensuite des gestionnaire d'événement pour exécuter du code lorsque les requêtes sont terminées, échouent, etc, ce que l'on va voir ci-dessous.

   > **Note :** Le numéro de version est important. Si vous voulez mettre à jour votre base de données (par exemple, pour modifier la structure de la table), vous devez ré-exécuter votre code avec un numéro de version supérieur et spécifier le schéma de la base de données avec le gestionnaire d'événement `onupgradeneeded`. Nous ne verrons pas la mise à jour de base de données dans ce tutoriel.

4. Maintenant, ajoutez les gestionnaires d'événement suivants, juste en dessous des lignes précédentes — toujours à l'intérieur de `window.onload`&nbsp;:

   ```js
   // la base de données n'a pas pu être ouverte avec succès
   request.onerror = function () {
     console.log("Database failed to open");
   };

   // la base de données a été ouverte avec succès
   request.onsuccess = function () {
     console.log("Database opened successfully");

     // Stocke la base de données ouverte dans la variable db. On l'utilise par la suite
     db = request.result;

     // Exécute la fonction displayData() pour afficher les notes qui sont dans la BDD
     displayData();
   };
   ```

   Le gestionnaire d'événement {{domxref("IDBRequest.onerror", "request.onerror")}} s'exécutera si la requête échoue. Cela vous permet de gérer le problème si cela arrive. Dans notre exemple, on affiche simplement un message dans la console JavaScript.

   Le gestionnare d'événement {{domxref("IDBRequest.onsuccess", "request.onsuccess")}}, d'autre part, s'exécutera si la requête aboutit, que la base de données a été ouverte avec succès. Lorsque cela arrive, la propriété {{domxref("IDBRequest.result", "request.result")}} contient alors un objet représentant la base de données ouverte, qui nous permet de la manipuler. On stocke cette valeur dans la variable `db` qu'on a crée plus tôt pour pouvoir l'utiliser ensuite. On exécute également une fonction appelée `displayData()`, qu'on définira plus tard — elle affiche les données de la base de données dans le {{HTMLElement("ul")}}. On l'exécute dès à présent pour que les notes en base de données soient affichées dès que la page est chargée.

5. Pour en finir avec cette section, on ajoute le gestionnaire d'événement qui est probablement le plus important, {{domxref("IDBOpenDBRequest.onupgradeneeded", "request.onupdateneeded")}}. Il est exécuté si la base de données n'a pas déjà été créée ou si on veut ouvrir la base de données avec un numéro de version supérieur à celle qui existe (pour faire une mise à jour). Ajoutez le code suivant en dessous de votre gestionnaire précédent :

   ```js
   // Spécifie les tables de la BDD si ce n'est pas déjà pas fait
   request.onupgradeneeded = function (e) {
     // Récupère une référence à la BDD ouverte
     let db = e.target.result;

     // Crée un objectStore pour stocker nos notes (une table)
     // Avec un champ qui s'auto-incrémente comme clé
     let objectStore = db.createObjectStore("notes", {
       keyPath: "id",
       autoIncrement: true,
     });

     // Définit les champs que l'objectStore contient
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("Database setup complete");
   };
   ```

   C'est ici qu'on définit le schéma (la structure) de notre base de données; c'est à dire l'ensemble des champs (ou colonnes) qu'il contient.

   1. On récupère une référence à la base de données existante depuis `e.target.result` (la propriété `result` de la cible de l'événement, c'est à dire l'objet `request`). C'est l'équivalent de la ligne `db = request.result;` du gestionnaire d'événement `onsuccess`, mais on doit le faire de cette manière ici puisque le gestionnaire d'événement `onupgradeneeded` est exécuté avant `onsuccess` — la valeur de `db` n'est pas encore disponible.
   2. Ensuite, on utilise {{domxref("IDBDatabase.createObjectStore()")}} pour créer un object store (un container pour une collection d'objets) à l'intérieur de notre base de données. C'est l'équivalent d'une table dans un système de base de données traditionnel. On lui a donné le nom `notes`, et un champs `id` avec `autoIncrement` — pour chaque nouvelle entrée dans cette table, une valeur auto-incrementée sera attributée au champ `id` sans que le développeur n'ait à le définir. Le champ `id` est la clé de l'object store: il sera utilisé pour identifier de manière unique les entrées, permettant de les mettre à jour ou les supprimer.
   3. On crée deux autres index (champs) en utilisant la méthode {{domxref("IDBObjectStore.createIndex()")}}: `title` (qui contiendra le titre de chaque note), et `body` (qui contiendra la description de chaque note).

Avec ce simple schéma de base de données en place, on va pouvoir ajouter des entrées à la base de données, des objets qui ressembleront à ça :

```js
{
  title: "Acheter du lait",
  body: "Lait de vache et de soja.",
  id: 8
}
```

### Ajouter des données à la base de données

Maintenant, voyons comment ajouter des entrées dans la base de données. On le fera en utilisant le formulaire de notre page.

1. À la suite du gestionnaire d'événement précédent (mais toujours dans `window.onload`), ajoutez la ligne suivante — elle définit un gestionnaire d'événement `onsubmit` pour exécuter la fonction `addData()` quand le formulaire est soumis (que le {{htmlelement("button")}} envoyer est pressé et que les champs du formulaire sont valides) :

   ```js
   // Créer un gestionnaire onsubmit pour appeler la fonction addData() quand le formulaire est soumis
   form.onsubmit = addData;
   ```

2. Maintenant, définissons la fonction `addData()`. Ajoutez ce qui suit après la ligne précédente :

   ```js
   // Définit la fonction addData()
   function addData(e) {
     // empêcher le formulaire d'être soumis vers le serveur
     e.preventDefault();

     // récupérer les valeurs entrées dans les champs du formulaire
     // et les stocker dans un objet qui sera inséré en BDD
     let newItem = { title: titleInput.value, body: bodyInput.value };

     // ouvrir une transaction en lecture/écriture
     let transaction = db.transaction(["notes"], "readwrite");

     // récupérer l'object store de la base de données qui a été ouvert avec la transaction
     let objectStore = transaction.objectStore("notes");

     // demander l'ajout de notre nouvel objet à l'object store
     var request = objectStore.add(newItem);
     request.onsuccess = function () {
       // vider le formulaire, pour qu'il soit prêt pour un nouvel ajout
       titleInput.value = "";
       bodyInput.value = "";
     };

     // attendre la fin de la transaction, quand l'ajout a été effectué
     transaction.oncomplete = function () {
       console.log("Transaction completed: database modification finished.");

       // mettre à jour l'affichage pour montrer le nouvel item en exécutant displayData()
       displayData();
     };

     transaction.onerror = function () {
       console.log("Transaction not opened due to error");
     };
   }
   ```

   C'est assez complexe, voyons ça pas à pas :

   1. On exécute {{domxref("Event.preventDefault()")}} sur l'objet événement pour empêcher le formulaire d'être véritablement soumis (cela provoquerait une actualisation de la page et gâcherait l'expérience utilisateur).
   2. On crée un objet représentant une entrée à ajouter dans la base de données, en le remplissant avec les valeurs des champs du formulaire. Notez qu'on n'a pas besoin d'inclure explicitement une valeur `id` — comme nous l'avons précédemment expliqué, il est auto-rempli.
   3. On ouvre une transaction en lecture/écritre (`readwrite`) sur l'object store `notes` en utilisant la méthode {{domxref("IDBDatabase.transaction()")}}. Cet object transaction va nous permettre d'accéder à l'object store, pour ajouter une nouvelle entrée par exemple.
   4. On récupère l'object store de la transaction avec la méthode {{domxref("IDBTransaction.objectStore()")}} et on le stocke dans la variable `objectStore`.
   5. On ajoute un nouvel enregistrement à la base de données en utilisant {{domxref("IDBObjectStore.add()")}}. Cela crée une requête, sur le même principe qu'on a déjà vu.
   6. On ajoute des gestionnaires d'événement à `request` et `transaction` pour exécuter du code aux points importants de leur cycle de vie :

      - Quand la requête a réussit, on efface les champs du formulaire — pour pouvoir ajouter une nouvelle note
      - Quand la transaction est terminé, on réexécute la fonction `displayData()` — pour mettre à jour l'affichage de notes sur la page.

### Afficher les données

Nous avons déjà appelé `displayData()` deux fois dans notre code, nous allons maintenant définir cette fonction. Ajoutez ce qui suit à votre code, en dessous de la définition de la fonction précédente :

```js
// Définit la fonction displayData()
function displayData() {
  // Vide le contenu de la liste à chaque fois qu'on la met à jour
  // Si on ne le faisait pas, des duplicats seraient affichés à chaque ajout
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Ouvre l'object store puis récupère un curseur - qui va nous permettre d'itérer
  // sur les entrées de l'object store
  let objectStore = db.transaction("notes").objectStore("notes");
  objectStore.openCursor().onsuccess = function (e) {
    // Récupère une référence au curseur
    let cursor = e.target.result;

    // S'il reste des entrées sur lesquelles itérer, on exécute ce code
    if (cursor) {
      // Crée un li, h3, et p pour mettre les données de l'entrée puis les ajouter à la liste
      let listItem = document.createElement("li");
      let h3 = document.createElement("h3");
      let para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // Récupère les données à partir du curseur et les met dans le h3 et p
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Met l'ID de l'entrée dans un attribut du li, pour savoir à quelle entrée il correspond
      // Ce sera utile plus tard pour pouvoir supprimer des entrées
      listItem.setAttribute("data-note-id", cursor.value.id);

      // Crée un bouton et le place dans le li
      let deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      // Définit un gestionnaire d'événement pour appeler deleteItem() quand le bouton supprimer est cliqué
      deleteBtn.onclick = deleteItem;

      // Continue l'itération vers la prochaine entrée du curseur
      cursor.continue();
    } else {
      // Si la liste est vide, affiche un message "Aucune note n'existe"
      if (!list.firstChild) {
        let listItem = document.createElement("li");
        listItem.textContent = "No notes stored.";
        list.appendChild(listItem);
      }
      // Il n'y a plus d'entrées dans le curseur
      console.log("Notes all displayed");
    }
  };
}
```

Encore une fois, pas à pas :

1. D'abord on vide le contenu de l'élément {{htmlelement("ul")}}, pour pouvoir le remplir avec le contenu mis à jour. Si on ne le faisait pas, on obtiendrait une énorme liste de contenus dupliqués à chaque mise à jour.
2. Ensuite, on récupère une référence à l'object store `notes` en utilisant {{domxref("IDBDatabase.transaction()")}} et {{domxref("IDBTransaction.objectStore()")}} comme nous l'avons fait dans `addData()`, mais en chaînant ces deux instructions en une seule ligne.
3. L'étape suivante consiste à utiliser la méthode {{domxref("IDBObjectStore.openCursor()")}} pour ouvrir un curseur — une construction qui peut être utilisée pour itérer sur les entrées d'un object store. On chaîne un gestionnaire d'événement `onsuccess` à la fin de cette opération pour rendre le code plus concis — dès que le curseur est récupéré, le gestionnaire est exécuté.
4. On récupère une référence au curseur lui-même (un objet {{domxref("IDBCursor")}}) avec `cursor = e.target.result`.
5. Ensuite, on vérifie si le curseur contient une entrée de l'object store (`if(cursor){ ... }`) — si c'est le cas, on crée des éléments du DOM, les remplit avec les données de l'entrée, et les insère dans la page (à l'intérieur de l'élément `<ul>`). On inclut un bouton de suppression, qui, quand il est cliqué, supprime l'entrée en cours en appelant la fonction `deleteItem()` — que nous allons voir dans la section suivante.
6. À la fin du bloc `if`, on utilise la méthode {{domxref("IDBCursor.continue()")}} pour avancer le curseur à la prochaine entrée dans l'object store et réexécuter le bloc. S'il reste une autre entrée sur laquelle itérer, elle sera à son tour insérée dans la page, `continue()` sera exécuté à nouveau, et ainsi de suite.
7. Quand il n'y a plus d'enregistrements à parcourir, le curseur retourne `undefined`, et le bloc `else` sera donc exécuté à la place. Ce bloc vérifie si des notes ont été insérées dans le `<ul>` — si ce n'est pas le cas, on insère un message indiquant qu'il n'existe aucune note.

### Supprimer une note

Come nous avons vu ci-dessus, lorsque le bouton supprimer est cliqué, la note correspondante est supprimée. Cette action est réalisée par la fonction `deleteItem()`, que l'on définit ainsi :

```js
// Définit la fonction deleteItem()
function deleteItem(e) {
  // Récupère l'id de l'entrée que l'on veut supprimer
  // On doit le convertir en nombre avant d'essayer de récupérer l'entrée correspondante dans IDB
  // les clés sont sensibles à la casse
  let noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // Ouvre une transaction et supprime la note ayant l'id récupéré ci-dessus
  let transaction = db.transaction(["notes"], "readwrite");
  let objectStore = transaction.objectStore("notes");
  let request = objectStore.delete(noteId);

  // Indique à l'utilisateur que l'entrée a été supprimée
  transaction.oncomplete = function () {
    // supprime l'élément parent du bouton, le li
    // pour qu'il ne soit plus affiché
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log("Note " + noteId + " deleted.");

    // Si la liste est vide, affiche un message qui l'indique
    if (!list.firstChild) {
      let listItem = document.createElement("li");
      listItem.textContent = "No notes stored.";
      list.appendChild(listItem);
    }
  };
}
```

- On récupère l'ID de l'entrée à supprimer avec `Number(e.target.parentNode.getAttribute('data-note-id'))` — souvenez-vous qu'on a mis l'ID de l'entrée dans l'attribut `data-note-id` du `<li>` au moment de l'afficher. On fait passer l'id à travers l'objet global [Number()](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number), puisqu'on a actuellement une chaîne de caractères et on a besoin d'un nombre pour qu'il soit reconnu par la base de données.
- On récupère ensuite une référence à l'object store de la même manière que précédemment, et on utilise la méthode {{domxref("IDBObjectStore.delete()")}} pour supprimer l'entrée de la base de données, en lui passant l'ID.
- Quand la transaction est terminée, on supprime le `<li>` du DOM, et on vérifie si le `<ul>` est maintenant vide. Si c'est le cas, on insère un message pour l'indiquer.

Et voilà ! L'exemple devrait maintenant fonctionner.

> **Note :** Si vous rencontrez des difficultés, n'hésitez pas à consulter [notre exemple en direct](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (ou voir [le code source](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index.js)).

### Stocker des données complexes avec IndexedDB

Comme nous l'avons mentionné auparavant, IndexedDB peut être utilisé pour stocker plus que de simples chaînes de caractères. On peut stocker à peu près tout ce qu'on veux, y compris des objets complexes tels que des vidéos ou des images. Et ce n'est pas plus difficilte à réaliser qu'avec n'importe quel autre type de données.

Pour vous montrer comment le faire, nous avons écrit un autre exemple appelé [IndexedDB video store](https://github.com/mdn/learning-area/tree/master/javascript/apis/client-side-storage/indexeddb/video-store) (le [voir en direct](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Lorsque vous exécutez l'exemple pour la première fois, il télécharge des vidéos à partir du réseau, les stocke dans une base de données IndexedDB, puis affiche les vidéos dans des éléments {{htmlelement("video")}} de l'interface utilisateur. Les prochaines fois que vous l'exécutez, il récupère les vidéos de la base de données — cela rend les chargements suivants beaucoup plus rapides et moins gourmands en bande passante.

Passons en revue les parties les plus intéressantes de l'exemple. Nous ne regarderons pas tout — une grande partie est similaire à l'exemple précédent, et le code est bien commenté.

1. Pour cet exemple, nous avons stocké le nom des vidéos à récupérer dans un tableau d'objets :

   ```js
   const videos = [
     { name: "crystal" },
     { name: "elf" },
     { name: "frog" },
     { name: "monster" },
     { name: "pig" },
     { name: "rabbit" },
   ];
   ```

2. Pour commencer, une fois que la base de données a été ouverte, on exécute la fonction `init()`. Elle boucle sur les noms des vidéos et essaie de charger l'entrée correspondante dans la base de données `videos`.

   On peut facilement vérifier si une entrée a été trouvée en vérifiant si `request.result` est évalué à `true` — si l'entrée n'est pas présente, la valeur retournée est `undefined`.

   Les vidéos présentes en base de données (stockées sous formes de blobs), sont directement passées à la fonction `displayVideo()` pour les afficher dans l'interface utilisateur. Pour les vidéos non présentes, on appelle la fonction `fetchVideoFromNetwork()`, qui récupère la vidéo à partir du réseau.

   ```js
   function init() {
     // Boucle sur les vidéos une par une
     for (let i = 0; i < videos.length; i++) {
       // Ouvre une transaction, récupère l'object store, et récupère chaque video par son nom
       let objectStore = db.transaction("videos").objectStore("videos");
       let request = objectStore.get(videos[i].name);
       request.onsuccess = function () {
         // Si l'entrée existe dans la BDD (le résultat n'est pas undefined)
         if (request.result) {
           // Affiche la vidéo en utilisant displayVideo()
           console.log("taking videos from IDB");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // Récupère la vidéo à partir du réseau
           fetchVideoFromNetwork(videos[i]);
         }
       };
     }
   }
   ```

3. Le bout de code qui suit est extrait de la fonction `fetchVideoFromNetwork()` — ici, on récupère les versions MP4 et WebM de la vidéos en utilisant deux requêtes {{domxref("fetch()", "WindowOrWorkerGlobalScope.fetch()")}} distinctes. On utilise ensuite la méthode {{domxref("blob()", "Body.blob()")}} pour extraire la réponse sous forme de blob, ce qui nous donne une représentation objet de la vidéo que l'on peut stocker et afficher plus tard.

   Il reste cependant un problème — ces deux requêtes sont asynchrones et ont veut afficher/stocker la vidéo uniquement lorsque les deux promesses sont résolues. Heureusement, il existe une méthode native qui gère ce problème — {{jsxref("Promise.all()")}}. Elle prend un argument — la liste de toutes les promesses qui doivent être attendues — et retourne elle-même une promesse. Quand toutes les promesses sont résolues, alors la promesse de la méthode `all()` est résolue, avec pour valeur un tableau contenant toutes les valeurs individuelles retournées par les promesses.

   À l'intérieur du bloc `all()`, vous pouvez voir qu'on appelle la fonction `displayVideo()`, comme on l'a fait précédemment, pour afficher les vidéos dans l'interface utilisateur, puis la fonction `storeVideo()` pour stocker ces vidéos dans la base de données.

   ```js
   let mp4Blob = fetch("videos/" + video.name + ".mp4").then((response) =>
     response.blob(),
   );
   let webmBlob = fetch("videos/" + video.name + ".webm").then((response) =>
     response.blob(),
   );

   // Exécuter le bloc de code suivant lorsque les deux promesses sont résolues
   Promise.all([mp4Blob, webmBlob]).then(function (values) {
     // Afficher la vidéo récupérée à partir du réseau avec displayVideo()
     displayVideo(values[0], values[1], video.name);
     // La stocker dans IDB avec storeVideo()
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. Regardons `storeVideo()` en premier. Cela ressemble beaucoup à ce qu'on a fait dans l'exemple précédent pour ajouter des données à la base de données — on ouvre une transaction en lecture/écriture et on récupère l'object store de `videos`, on crée un objet à ajouter à la base de données et on l'ajoute avec {{domxref("IDBObjectStore.add()")}}.

   ```js
   function storeVideo(mp4Blob, webmBlob, name) {
     // Ouvre une transaction, récupère object store
     let objectStore = db.transaction(['videos'], 'readwrite').objectStore('videos');
     // Crée une entrée à ajouter à IDB
     let record = {
       mp4 : mp4Blob,
       webm : webmBlob,
       name : name
     }

     // Ajoute l'entrée à IDB avec add()
     let request = objectStore.add(record);

     ...

   };
   ```

5. Enfin, `displayVideo()` crée les éléments DOM nécessaires pour insérer la vidéo dans l'interface utilisateur, puis les ajoute à la page. Les parties les plus intéressantes sont copiées ci-dessous — pour afficher notre blob vidéo dans un élément `<video>`, on doit créer un objet URL (URL interne qui pointe vers un blob en mémoire) en utilisant la méthode {{domxref("URL.createObjectURL()")}}. Une fois que c'est fait, on peut assigner l'URL comme valeur d'attribut `src` de l'élément {{htmlelement("source")}}, et ça marche.

   ```js
   function displayVideo(mp4Blob, webmBlob, title) {
     // Crée l'objet URL à partir du blob
     let mp4URL = URL.createObjectURL(mp4Blob);
     let webmURL = URL.createObjectURL(webmBlob);

     ...

     let video = document.createElement('video');
     video.controls = true;
     let source1 = document.createElement('source');
     source1.src = mp4URL;
     source1.type = 'video/mp4';
     let source2 = document.createElement('source');
     source2.src = webmURL;
     source2.type = 'video/webm';

     ...
   }
   ```

## Stockage hors-ligne de ressources

L'exemple ci-dessus montre comment créer une application qui stocke des ressources volumineuses dans une base de données IndexedDB, évitant ainsi de devoir les télécharger plus d'une fois. C'est déjà une grande amélioration pour l'expérience utilisateur, mais il manque encore une chose: les fichiers HTML, CSS, et JavaScript doivent encore être téléchargés à chaque fois que le site est accédé, ce qui veut dire qu'il ne fonctionnera pas lorsqu'il n'y a pas de connexion réseau

![](ff-offline.png)

C'est là qu'interviennet les [Service workers](/fr/docs/Web/API/Service_Worker_API) et l'API étroitement liée, [Cache](/fr/docs/Web/API/Cache).

### Service Worker / Cache

Un service worker est un fichier JavaScript qui, pour faire simple, est associé à une origine (un site web à un domaine donné) lorsque le navigateur y accède. Une fois associé, il peut contrôler les pages disponibles pour cette origine. Il le fait en s'installant entre la page chargée et le réseau, interceptant les requêtes réseau visant cette origine.

Quand le service worker intercepte une requête, il peut faire tout ce que vous voulez (voir quelques [idées de cas d'utilisation](/fr/docs/Web/API/Service_Worker_API#Autres_idées_de_cas_d'utilisation)), mais l'exemple le plus classique est de sauvegarder les réponses réseau hors-ligne pour fournir ces réponses aux requêtes qui suivent au lieu d'utiliser le réseau. Ainsi, cela vous permet de faire fonctionner un site web complètement hors-ligne.

L'API Cache est un autre mécanisme de stockage côté client, il a été conçu pour enregistrer les réponses HTTP et fonctionne donc très bien en synergie avec les service workers.

> **Note :** Les Service workers et Cache sont pris en charge par la plupart des navigateurs modernes aujourd'hui. Au moment de la rédaction de cet article, Safari était encore occupé à l'implémenter, mais il devrait bientôt être disponible.

### Un exemple service worker

Voyons un exemple, pour vous donner une idée de ce à quoi cela pourrait ressembler. Nous avons crée une autre version de l'exemple video store vu précédemment. Cela fonctionne de manière identique, mais enregistre également le HTML, CSS, et JavaScript dans l'API Cache via un service worker, permettant à l'exemple de marcher hors ligne!

Voir [IndexedDB video store avec service worker en direct](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), ou [voir le code source](https://github.com/mdn/learning-area/tree/master/javascript/apis/client-side-storage/cache-sw/video-store-offline).

### Enregistrer le service worker

La première chose à noter est qu'il a un peu plus de code placé dans le fichier JavaScript principal (voir [index.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js#L144)):

```js
// Enregistre un service worker pour contrôler le site hors-ligne
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(function () {
      console.log("Service Worker Registered");
    });
}
```

- On effectue d'abord un test de détection de fonctionnalité pour vérifier si l'objet `serviceWorker` existe dans l'objet {{domxref("Navigator")}}. Si c'est le cas, alors on sait qu'au moins les fonctionnalités de base des service workers sont prises en charge.
- On utilise la méthode {{domxref("ServiceWorkerContainer.register()")}} afin d'enregistrer le service worker `sw.js` pour l'origine où il se situe, ainsi il pourra contrôler les pages qui sont dans le même répertoire que lui, ou dans un sous-répertoire.
- Lorsque la promesse est résolue, c'est que le service worker est enregistré.

> **Note :** Le chemin du fichier `sw.js` est relatif à l'origine du site, et non au fichier JavaScript qui l'appelle.
> Le service worker est sur `https://mdn.github.io/learning-area/.../sw.js`. L'origine est `https://mdn.github.io`. Le chemin donné doit donc être `/learning-area/.../sw.js`.
> Si vous vouliez héberger cet exemple sur votre propre serveur, vous devriez changer le chemin en conséquence. C'est plutôt inhabituel, mais cela doit fonctionner de cette façon pour des raisons de sécurité.

### Installer le service worker

Quand une page sous le contrôle du service worker est appelée (par exemple lorsque l'exemple est rechargé), alors le service worker est installé par rapport à cette page et il peut commencer à la contrôler. Quand cela arrive, un événement `install` est déclenché sur le service worker; vous pouvez écrire du code dans le service worker pour qu'il réponde à cette installation.

Prenons pour exemple le fichier [sw.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) (le service worker) :

```js
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("video-store").then(function (cache) {
      return cache.addAll([
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
      ]);
    }),
  );
});
```

1. Le gestionnaire d'évènement `install` est enregistré sur `self`. Le mot-clé `self` est un moyen de faire référence au service worker de la portée globale à partir de son fichier.
2. À l'intérieur du gestionnaire d'installation, on utilise la méthode {{domxref("ExtendableEvent.waitUntil()")}}, disponible sur l'objet événement, pour signaler que le navigateur ne doit pas terminer l'installation du service worker avant que la promesse qu'il contient ne soit résolue avec succès.
3. Ici, on voit l'API Cache en action: on utilise la méthode {{domxref("CacheStorage.open()")}} pour ouvrir un nouvel objet cache dans lequel les réponses seront stockées (similaire à un object store IndexedDB). Cette promesse se résout avec un objet {{domxref("Cache")}} représentant le cache du `video-store`.
4. On utilise la méthode {{domxref("Cache.addAll()")}} pour récupérer une série de ressources et ajouter leur réponse au cache.

C'est tout pour l'instant, l'installation est terminée.

### Répondre aux futures requêtes

Avec le service worker enregistré et installé pour notre page HTML, et les ressources pertinentes ajoutées au cache, on est presque prêts. Il n'y a plus qu'une chose à faire: écrire du code pour répondre aux prochaines requêtes réseau.

C'est ce que fait le second bloc de code dans `sw.js`&nbsp;:

```js
self.addEventListener("fetch", function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    }),
  );
});
```

1. On ajoute un deuxième gestionnaire d'événement au service worker, qui exécute une fonction quand l'événement `fetch` est déclenché. Cela arrive quand le navigateur requête une ressource dans le même répertoire que le service worker (ou sous-répertoire).
2. À l'intérieur de cette fonction, on affiche l'URL de la ressource demandée dans la console, et on utilise la méthode {{domxref("FetchEvent.respondWith()")}} pour retourner une réponse personnalisée à la requête.
3. Pour construire la réponse, on utilise d'abord {{domxref("CacheStorage.match()")}} afin de vérifier si la requête est en cache (qu'une requête correspond à l'URL demandée est en cache).
4. Si elle est trouvée, la promesse se résout avec la réponse correspondante; sinon, avec `undefined`. Dans ce cas, on récupère la réponse à partir du réseau, en utilisant `fetch()`, et on retourne le résultat.

C'est tout pour notre service worker. Il y a tout un tas de choses que vous pouvez faire avec — pour plus de détails, consultez le [service worker cookbook](https://github.com/mdn/serviceworker-cookbook/). Et merci à Paul Kinlan pour son article [Adding a Service Worker and Offline into your Web App](https://developers.google.com/web/fundamentals/codelabs/offline/), qui a inspiré cet exemple.

### Tester l'exemple hors-ligne

Pour tester notre [exemple de service worker](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), rechargez d'abord la page pour vous assurer qu'il est bien installé. Une fois que c'est fait, vous pouvez soit:

- Débrancher votre réseau ou éteindre votre Wifi.
- Si vous utilisez Firefox: Sélectionner _Fichier > Travailler hors-connexion_.
- Si vous utilisez Chrome: Aller dans les DevTols, puis choisir _Application > Service Workers_, et cocher la case à cocher _Offline_.

Si vous actualisez votre page d'exemple, vous devriez toujours la voir se charger normalemment. Tout est stocké hors connexion — les ressources de la page dans Cache et les vidéos dans une base de données IndexedDB.

## Sommaire

C'est tout pour l'instant. Nous espérons que vous avez trouvé notre récapitulatif des technologies de stockage côté client utile.

## Voir aussi

- [Web storage API](/fr/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/fr/docs/Web/API/API_IndexedDB)
- [Cookies](/fr/docs/Web/HTTP/Cookies)
- [Service worker API](/fr/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
