---
title: Récupérer des données du serveur
slug: Learn/JavaScript/Client-side_web_APIs/Fetching_data
tags:
  - API
  - Apprendre
  - Article
  - Codage
  - Débutant
  - Fetch
  - JavaScript
  - XHR
  - data
translation_of: Learn/JavaScript/Client-side_web_APIs/Fetching_data
original_slug: Apprendre/JavaScript/Client-side_web_APIs/Fetching_data
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Une autre tâche courante dans les sites et applications web modernes est de récupérer des données à partir du serveur pour mettre à jour des sections de la page web sans la recharger entièrement. Ce qui pourrait paraître comme un petit détail a, en vérité, eu un impact énorme sur les performances et le comportement des sites. Dans cet article, nous allons expliquer le concept et les technologies qui rendent cela possible, tels que XMLHttpRequest et l'API Fetch.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Notions de base de JavaScript (voir
        <a href="/fr/docs/Learn/JavaScript/First_steps">premiers pas</a>,
        <a href="/fr/Apprendre/JavaScript/Building_blocks"
          >les briques JavaScript</a
        >,
        <a href="/fr/docs/Learn/JavaScript/Objects">les objets JavaScript</a>),
        les
        <a href="/fr/Apprendre/JavaScript/Client-side_web_APIs/Introduction"
          >notions de bases des APIs côté client</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Apprendre à récupérer des données du serveur web et les utiliser pour
        mettre à jour le contenu de la page.
      </td>
    </tr>
  </tbody>
</table>

## Quel est le problème?

À la base, le chargement d'une page web est simple — vous envoyez une requête à un serveur et, tant qu'il n'y a pas eu de problème, les ressources de la page web sont téléchargées et affichées sur votre ordinateur.

![A basic representation of a web site architecture](web-site-architechture@2x.png)

Le problème avec ce modèle c'est qu'à chaque fois que vous voulez mettre à jour une partie de la page, par exemple pour afficher la page suivante d'une liste de produits, vous devez recharger toute la page. Ce surcoût est tout à fait inutile et résulte en une mauvaise expérience utilisateur, particulièrement pour les pages qui sont lourdes, complexes et du coup longues à charger.

### L'arrivée d'Ajax

Pour traiter ce problème, des technologies ont été élaborées qui permettent de récupérer à la demande de petites portions de données (comme du [HTML](/fr/docs/Web/HTML), {{glossary("XML")}}, [JSON](/fr/docs/Learn/JavaScript/Objects/JSON), ou texte brut) et de les afficher dans la page web.

Nous avons pour cela l'API {{domxref("XMLHttpRequest")}} à notre disposition ou — plus récemment — l'[API Fetch](/fr/docs/Web/API/Fetch_API). Elles permettent de réaliser des requêtes [HTTP](/fr/docs/Web/HTTP) pour récupérer des ressources spécifiques disponibles sur un serveur et de formater les données retournées selon les besoins avant l'affichage dans la page.

> **Note :** Dans les premiers temps, cette technique était appelée "Asynchronous JavaScript and XML" (JavaScript asychrone et XML), dit AJAX, parce qu'elle utilisait {{domxref("XMLHttpRequest")}} pour requêter des données XML. De nos jours, c'est rarement le cas; la plupart du temps, on utilise `XMLHttpRequest` ou Fetch pour requêter des données JSON. Quoi qu'il en soit, le procédé reste le même et le terme "Ajax" est resté pour décrire cette technique.

![A simple modern architecture for web sites](moderne-web-site-architechture@2x.png)

Le modèle Ajax implique une API web comme proxy pour requêter les données plus intelligemment que simplement rafraîchir la page à chaque fois. Voyons plutôt l'impact que cela a :

1.  Allez sur un site riche en information de votre choix, comme Amazon, YouTube, CNN...
2.  Cherchez quelque chose dans la barre de recherche, comme un nouveau produit. Le contenu principal va changer, mais la plupart de ce qui l'entoure reste statique, comme l'entête, le pied de page, le menu de navigation, etc.

C'est une bonne chose puisque :

- La mise à jour de la page est beaucoup plus rapide et vous n'avez pas à attendre que la page se rafraîchisse, si bien que le site paraît être plus rapide et plus réactif.
- Moins de données doivent être téléchargées pour mettre à jour la page, et donc moins de bande passante est utilisée. Cela ne fait peut-être pas une grande différence sur un ordinateur de bureau, mais cela peut devenir un problème majeur sur mobile ou dans les pays en développement, qui n'ont pas partout un service Internet ultra-rapide.

Notez que pour accélerer les choses encore davantage, certains sites stockent les ressources et données chez le client lors de sa première visite, si bien que les visites suivantes, les fichiers locaux sont utilisés et non re-téléchargés du serveur. Le contenu n'est rechargé que lorsqu'il a été mis à jour sur le serveur.

![A basic web app data flow architecture](web-app-architecture@2x.png)

## Une requête Ajax basique

Voyons maintenant comment ces requêtes sont gérées, en utilisant soit {{domxref("XMLHttpRequest")}} soit [Fetch](/fr/docs/Web/API/Fetch_API). Pour ces exemples, nous allons requêter les données de différents fichiers texte et les utiliserons pour remplir une zone de contenu.

Ces fichiers agiront comme une fausse base de données ; dans une vraie application, il est plus probable que vous utiliseriez un langage côté serveur comme PHP, Python, ou Node pour récupérer les données à partir d'une véritable base de données. En revanche, nous voulons ici garder les choses simples ; nous allons donc nous concentrer sur le côté client.

### XMLHttpRequest

`XMLHttpRequest` (qui est fréquemment abrégé XHR) est une technologie assez vieille maintenant — elle a été inventée par Microsoft dans les années 90 et a été standardisée dans les autres navigateurs il y a longtemps.

1.  Pour commencer cet exemple, faites une copie locale de [ajax-start.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/ajax-start.html) et des quatre fichiers texte — [verse1.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse3.txt), et [verse4.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse4.txt) — dans un nouveau répertoire sur votre ordinateur. Dans cet exemple, nous allons charger le verset d'un poème (que vous pourriez bien reconnaître), quand il est sélectionné dans le menu déroulant, en utilisant XHR.
2.  À l'intérieur de l'élément {{htmlelement("script")}}, ajoutez le code qui suit. Il stocke une référence aux éléments {{htmlelement("select")}} et {{htmlelement("pre")}} dans des variables et définit un gestionnaire d'événement {{domxref("GlobalEventHandlers.onchange","onchange")}}, pour que, quand la valeur du menu déroulant est changée, la valeur sélectionnée soit passée comme paramètre à la fonction  `updateDisplay()`.

    ```js
    var verseChoose = document.querySelector('select');
    var poemDisplay = document.querySelector('pre');

    verseChoose.onchange = function() {
      var verse = verseChoose.value;
      updateDisplay(verse);
    };
    ```

3.  Définissons maintenant la fonction `updateDisplay()`. Tout d'abord, mettez ce qui suit au bas de votre JavaScript — c'est la structure vide de la fonction :

    ```js
    function updateDisplay(verse) {

    };
    ```

4.  Nous allons commencer notre fonction en construisant une URL relative qui pointe vers le fichier texte que nous voulons charger, nous en aurons besoin plus tard. La valeur de l'élément {{htmlelement("select")}} à tout instant est la même que l'élément {{htmlelement("option")}} sélectionné (c'est à dire le texte de l'élément sélectionné, ou son attribut `value` s'il est spécifié) — par exemple "Verse 1". Le fichier correspondant est "verse1.txt" et il est situé dans le même répertoire que le fichier HTML, le nom du fichier seul suffira donc.

    Les serveurs web sont généralement sensibles à la casse, le nom de fichier n'a pas d'espace et a une extension de fichier. Pour convertir "Verse 1" en "verse1.txt" nous allons convertir le "V" en minuscles avec {{jsxref("String.toLowerCase", "toLowerCase()")}}, supprimer l'espace avec {{jsxref("String.replace", "replace()")}} et ajouter ".txt" à la fin avec une simple [concaténation de chaînes](/fr/docs/Learn/JavaScript/First_steps/Strings#Concaténation_de_chaînes). Ajoutez les lignes suivantes à l'intérieur de la fonction `updateDisplay()` :

    ```js
    verse = verse.replace(" ", "");
    verse = verse.toLowerCase();
    var url = verse + '.txt';
    ```

5.  Pour commencer à créer une requête XHR, vous allez devoir créer un nouvel objet avec le constructeur {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}. Vous pouvez appeler cet objet comme vous le voulez, mais nous l'appellerons `request` pour plus de clarté. Ajoutez ce qui suit à vos lignes précédentes :

    ```js
    var request = new XMLHttpRequest();
    ```

6.  Ensuite, vous allez devoir utiliser la méthode {{domxref("XMLHttpRequest.open","open()")}} pour spécifier la [méthode HTTP](/fr/docs/Web/HTTP/Méthode) et l'URL à utiliser pour récupérer la ressource. Nous allons ici utiliser la méthode [`GET`](/fr/docs/Web/HTTP/Méthode/GET) et passer notre variable `url` pour URL. Ajoutez ceci à la suite de la ligne précédente :

    ```js
    request.open('GET', url);
    ```

7.  Nous allons définir le type de réponse que nous attendons — définit par la propriété {{domxref("XMLHttpRequest.responseType", "responseType")}} de la requête — comme `text`. Ce n'est pas strictement nécessaire ici — XHR retourne du texte par défaut — mais c'est une bonne idée d'en prendre l'habitude pour les cas où vous aurez besoin de définir un type différent. Ajoutez ceci à la suite :

    ```js
    request.responseType = 'text';
    ```

8.  Récupérer une ressource sur le réseau est une opération {{glossary("asynchronous","asynchrone")}}, ce qui signifie que vous devez attendre que cette opération se termine (par exemple, que la ressource soit renvoyée) avant de pouvoir récupérer la réponse — sans quoi une erreur est levée. XHR permet d'exécuter du code lorsque la réponse est reçue grâce au gestionnaire d'événement {{domxref("XMLHttpRequest.onload", "onload")}} — quand l'événement {{event("load")}} est déclenché. Une fois que la réponse a été reçue, alors la réponse est accessible via la propriété `response` de l'objet XHR utilisé.

    Ajoutez le bloc de code qui suit toujours au bas de la fonction `updateDisplay()`. Vous verrez qu'à l'intérieur du gestionnaire d'événément `onload`, nous assignons la propriété [`textContent`](/fr/docs/Web/API/Node/textContent) de `poemDisplay` (l'élément {{htmlelement("pre")}}) à la valeur de la propriété {{domxref("XMLHttpRequest.response", "request.response")}}.

    ```js
    request.onload = function() {
      poemDisplay.textContent = request.response;
    };
    ```

9.  Les étapes précédentes nous ont permis de configurer la requête XHR, mais celle-ci n'est exécutée que lorsqu'on le demande explicitement. Pour ce faire, il faut appeler la méthode {{domxref("XMLHttpRequest.send","send()")}}. Ajoutez la ligne suivante à la suite du code déjà écrit :

    ```js
    request.send();
    ```

    Voyez la section {{anch("Serving your example from a server", "Servir votre exemple depuis un serveur")}} pour pouvoir tester.

10. Un dernier problème avec cet exemple est qu'il ne montre rien au chargement de la page (mais uniquement à la sélection d'un verset). Pour corriger cela, ajoutez ce qui suit au bas de votre code (juste au-dessus de la balise fermante `</script>`), pour charger le verset 1 par défaut, et s'assurer que l'élément {{htmlelement("select")}} montre toujours la bonne valeur :

    ```js
    updateDisplay('Verse 1');
    verseChoose.value = 'Verse 1';
    ```

### Servir votre exemple depuis un serveur

Certains navigateurs (dont Chrome) n'exécuteront pas de requêtes XHR si vous exécutez votre script simplement à partir d'un fichier local. Cela est dû à des restrictions de sécurité (pour plus d'infos sur la sécurité web, consultez l'article [La sécurité d'un site web](/fr/docs/Learn/Server-side/First_steps/Website_security)).

Pour règler ce problème, vous devez tester l'exemple à travers un serveur web local. Pour savoir comment procéder, lisez [Comment configurer un serveur de test local?](/fr/Apprendre/Common_questions/configurer_un_serveur_de_test_local)

### Fetch

L'API Fetch est une solution moderne qui vient remplacer XHR — elle a été introduite récemment dans les navigateurs pour rendre les requêtes HTTP asynchrones plus simples en JavaScript, à la fois pour les développeurs et pour les autres APIs qui utilisent cette technologie.

Voyons comment convertir le dernier exemple, en remplaçant XHR par Fetch.

1.  Faites une copie du répertoire de votre dernier exemple. (Ou si vous ne l'avez pas fait, créez un nouveau répertoire et copiez le fichier [xhr-basic.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/xhr-basic.html) et les quatre fichiers texte — [verse1.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse3.txt), and [verse4.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse4.txt) — à l'intérieur).
2.  À l'intérieur de la fonction `updateDisplay()`, vous avez le code XHR suivant :

    ```js
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';

    request.onload = function() {
      poemDisplay.textContent = request.response;
    };

    request.send();
    ```

3.  Remplacez-le avec ce qui suit :

    ```js
    fetch(url).then(function(response) {
      response.text().then(function(text) {
        poemDisplay.textContent = text;
      });
    });
    ```

4.  Chargez l'exemple dans votre navigateur (en l'exécutant à travers un serveur web) et il devrait produire le même résultat que la version XHR  — pourvu que vous utilisiez un navigateur moderne.

#### Que se passe-t-il dans le code Fetch?

Tout d'abord, nous invoquons la méthode {{domxref("WindowOrWorkerGlobalScope.fetch()","fetch()")}}, en lui passant l'URL de la ressource que nous voulons récupérer. C'est la version moderne équivalente à {{domxref("XMLHttpRequest.open","request.open()")}} de XHR, et n'avez pas à appeler `.send()` — la requête est exécutée directemment.

Ensuite, la méthode {{jsxref("Promise.then",".then()")}} est chaînée à la suite de `fetch()` — cette méthode fait partie des {{jsxref("Promise","Promesses")}}, une fonctionnalité JavaScript moderne qui permet d'effectuer des opérations asynchrones. `fetch()` retourne une promesse, qui est résolue lorsque la réponse est reçue du serveur — et nous utilisons `.then()` pour exécuter du code à ce moment là. C'est l'équivalent du gestionnaire d'événément `onload` dans la version XHR.

La fonction définie dans le `.then()` reçoit la réponse du serveur comme paramètre, une fois que la promesse retournée par `fetch()` est résolue. À l'intérieur de cette fonction, nous utilisons la méthode {{domxref("Body.text","text()")}} pour récupérer le contenu de la réponse en texte brut. C'est l'équivalent de `request.responseType = 'text'` dans la version XHR.

Vous verrez que `text()` retourne également une promesse, nous y chaînons donc un nouveau `.then()`, à l'intérieur de quoi nous définissons une fonction. Cette dernière récupère quant à elle le texte brut que la promesse précédente résout.

Enfin, dans le corps de la fonction, nous faisons la même chose que nous faisions dans la version XHR — définir le contenu texte de l'élément {{htmlelement("pre")}} au texte récupéré.

### À propos des promesses

Les promesses peuvent être un peu déroutantes au premier abord, ne vous en souciez pas trop pour l'instant. Vous vous y ferez après un certain temps, d'autant plus après en avoir appris davantage sur les APIs JavaScript modernes — la plupart des APIs récentes utilisent beaucoup les promesses.

Regardons à nouveau la structure d'une promesse pour voir si nous pouvons en donner plus de sens.

#### Promesse 1

```js
fetch(url).then(function(response) {
  //...
});
```

Si l'on traduit en bon français les instructions JavaScript, on pourrait dire

- `fetch(url)` : récupérer la ressource située à l'adresse `url`
- `.then(function() { ... })`: quand c'est fait, exécuter la fonction spécifiée

On dit qu'une promesse est "résolue" (resolved) lorsque l'opération spécifiée à un moment donné est terminée. En l'occurence, l'opération spécifiée est de récupérer une ressource à une URL donnée (en utilisant une requête HTTP) et de retourner la réponse reçue du serveur.

La fonction passée à `then()` n'est pas exécutée immédiatement — elle est exécutée à un moment dans le futur, dès que la promesse est résolue (c'est à dire qu'elle a retourné la réponse du serveur).

Notez que vous pouvez également choisir de stocker votre promesse dans une variable, et de chaîner le {{jsxref("Promise.then",".then()")}} sur cette variable. L'exemple suivant fait la même chose que le précédent :

```js
var myFetch = fetch(url);

myFetch.then(function(response) {
  //...
});
```

Parce que la méthode `fetch()` retourne une promesse qui résout une réponse HTTP, la fonction définie à l'intérieur du `.then()` reçoit la réponse en tant que paramètre. Vous pouvez appeler le paramètre comme vous souhaitez — l'exemple ci-dessous fait toujours la même chose :

```js
fetch(url).then(function(dogBiscuits) {
  //...
});
```

Mais il est plus logique de donner un nom de paramètre qui décrit son contenu !

#### Promesse 2

Voyons maintenant la fonction appelé dans `.then()`:

```js
function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
}
```

L'objet `response` a une méthode {{domxref("Body.text","text()")}}, qui convertit les données brutes contenues dans la réponse en texte brut — c'est le format que nous voulons. Cette méthode retourne également une promesse, qui se résout lorsque la réponse est convertie en texte, nous utilisons donc un deuxième {{jsxref("Promise.then",".then()")}} pour cette deuxième promesse.

À l'intérieur de ce dernier `.then()`, nous définissons une nouvelle fonction, qui décide de ce que nous faisons avec le texte récupéré. Nous nous contentons de définir la propriété [`textContent`](/fr/docs/Web/API/Node/textContent) de l'élément {{htmlelement("pre")}} à la valeur du texte.

#### Chaîner les then()

Notez que le résultat de la fonction appelée par le `.then()` est également retourné par ce dernier, nous pouvons donc mettre les `.then()` bout à bout, en passant le résultat du bloc précédent au prochain.

Ainsi, le bloc de code suivant fait la même chose que notre exemple original, mais écrit dans un style différent :

```js
fetch(url).then(function(response) {
  return response.text()
}).then(function(text) {
  poemDisplay.textContent = text;
});
```

Beaucoup de développeurs préfèrent ce style, plus "plat" : il évite de définir des fonctions à l'intérieur de fonctions et est plus facile à lire lorsqu'il y a beaucoup de promesses qui s'enchaînent. La seule différence ici est que nous avons une instruction [`return`](/fr/Apprendre/JavaScript/Building_blocks/Return_values) pour retourner `response.text()`, et ce résultat est passé au prochain `.then()`.

### Quel mécanisme devriez-vous utiliser?

Cela dépend du projet sur lequel vous travaillez. XHR existe depuis longtemps maintenant et bénéficie d'un très bon support sur les différents navigateurs. Fetch et les promesses, en revanche, sont un ajout plus récent à la plateforme web, bien qu'ils soient pris en charge par la plupart des navigateurs, Internet Explorer et Safari font exception.

Si vous voulez un support des anciens navigateurs, alors XHR est probablement la solution préférable. En revanche, si vous travaillez sur un projet plus progressif, et que vous n'êtes pas tant préoccupé par les anciens navigateurs, alors Fetch peut être un bon choix.

Vous devriez apprendre les deux alternatives — Fetch deviendra plus populaire au fur et à mesure que l'utilisation d'Internet Explorer diminue (IE n'est plus développé, en faveur du nouveau navigateur de Microsoft, Edge), mais vous allez avoir besoin de XHR pendant un moment encore.

## Un exemple plus complexe

Pour clore l'article, nous allons regarder un exemple un peu plus complexe, qui montre des utilisations plus intéressantes de Fetch. Nous avons créé un site d'exemple appelé The Can Store (le magasin de conserves) — c'est un supermarché fictif qui ne vend que des boites de conserves. Vous pouvez trouver cet [exemple en direct sur GitHub](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/), et [voir le code source](https://github.com/mdn/learning-area/tree/master/javascript/apis/fetching-data/can-store).

![A fake ecommerce site showing search options in the left hand column, and product search results in the right hand column.](can-store.png)

Par défaut, le site affiche tous les produits ; mais vous pouvez utiliser le formulaire dans la colonne de gauche pour les filtrer par catégorie, ou chercher un terme, ou les deux.

Il y a du code plutôt complexe pour traiter le filtrage des produits par catégorie et par terme de recherche, manipulant les chaînes de caractères pour afficher les données correctement dans l'interface utilisateur, etc. Nous n'allons pas en discuter dans cet article, mais vous pouvez trouver des commentaires très complets dans le code (voir [can-script.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-script.js)). Nous allons expliquer le code Fetch.

#### Premier Fetch

Le premier bloc qui utilise Fetch se trouve au début du JavaScript :

```js
fetch('products.json').then(function(response) {
  if(response.ok) {
    response.json().then(function(json) {
      products = json;
      initialize();
    });
  } else {
    console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
  }
});
```

Cela ressemble à ce que vous avons vu précédemment, sauf que la deuxième promesse est à l'intérieur d'une condition. Cette condition vérifie si la réponse retournée est un succès ou non — la propriété {{domxref("response.ok")}} contient un booléen qui vaut `true` si le statut de la réponse était OK ([statut HTTP 200, "OK"](/fr/docs/Web/HTTP/Status/200)), ou `false` sinon.

Si la réponse était un succès, nous déclenchons la deuxième promesse — cette fois-ci en utilisant {{domxref("Body.json","json()")}} et non {{domxref("Body.text","text()")}}, puisque nous voulons récupérer la réponse sous forme de données structurées JSON et non de texte brut.

Si la réponse n'est pas un succès, nous affichons une erreur dans la console indiquant que la requête réseau a échoué, avec le statut et le message obtenus (contenus dans les propriétés {{domxref("response.status")}} et {{domxref("response.statusText")}} respectivement). Bien sûr, un véritable site web traiterait cette erreur plus gracieusement, en affichant un message à l'écran en offrant peut-être des options pour remédier à la situation.

Vous pouvez tester le cas d'échec vous-même :

1.  Faites une copie locale des fichiers d'exemple (téléchargez et dézippez le [fichier ZIP can-store](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-store.zip?raw=true))
2.  Éxecutez le code via un serveur web (comme vu précédemment dans {{anch("Serving your example from a server", "Servir votre exemple depuis un serveur")}})
3.  Modifiez le chemin du fichier à récupérer, mettez un nom de fichier qui n'existe pas, comme 'produc.json'.
4.  Maintenant, chargez le fichier index dans votre navigateur (via `localhost:8000`) et regardez dans la console de développement. Vous verrez un message parmi les lignes "Network request for products.json failed with response 404: File not found" (la requête réseau pour products.json a échoué avec la réponse 404: Fichier non trouvé).

#### Deuxième Fetch

Le deuxième bloc Fetch se trouve dans la fonction `fetchBlob()`:

```js
fetch(url).then(function(response) {
  if(response.ok) {
    response.blob().then(function(blob) {
      objectURL = URL.createObjectURL(blob);
      showProduct(objectURL, product);
    });
  } else {
    console.log('Network request for "' + product.name + '" image failed with response ' + response.status + ': ' + response.statusText);
  }
});
```

Cela fonctionne à peu près de la même manière que le précédent, sauf qu'au lieu d'utiliser {{domxref("Body.json","json()")}}, on utilise {{domxref("Body.blob","blob()")}} — en l'occurence, nous voulons récupérer la réponse sous la forme d'un fichier image, et le format de données que nous utilisons est [Blob](/fr/docs/Web/API/Blob) — ce terme est une abbréviation de "Binary Large Object" (large objet binaire) et peut être utilisé pour représenter de gros objets fichier — tels que des fichiers images ou vidéo.

Une fois que nous avons reçu notre blob avec succès, nous créons un objet URL, en utilisant {{domxref("URL.createObjectURL()", "createObjectURL()")}}. Cela renvoie une URL interne temporaire qui pointe vers un blob en mémoire dans le navigateur. Cet objet n'est pas très lisible, mais vous pouvez voir à quoi il ressemble en ouvrant l'application Can Store, Ctrl + Clic droit sur l'image, et sélectionner l'option "Afficher l'image" (peut légèrement varier selon le navigateur que vous utilisez). L'URL créée sera visible à l'intérieur de la barre d'adresse et devrait ressembler à quelque chose comme ça :

    blob:http://localhost:7800/9b75250e-5279-e249-884f-d03eb1fd84f4

### Challenge : une version XHR de Can Store

Comme exercice pratique, nous aimerions que vous essayiez de convertir la version Fetch de l'application en une version XHR. Faites une [copie du fichier ZIP](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-store.zip?raw=true) et essayiez de modifier le JavaScript en conséquence.

Quelques conseils qui pourraient s'avérer utiles :

- Vous pourriez trouver la référence {{domxref("XMLHttpRequest")}} utile.
- Vous allez devoir utiliser le même modèle que vous avez vu plus tôt dans l'exemple [XHR-basic.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/xhr-basic.html).
- Vous devrez ajouter la gestion des erreurs que nous vous avons montré dans la version Fetch de Can Store :

  - La réponse se situe dans `request.response` une fois que l'événement `load` a été déclenché et non dans une promesse.
  - Le meilleur équivalent à `response.ok` en XHR est de vérifier si {{domxref("XMLHttpRequest.status","request.status")}} vaut 200 ou si {{domxref("XMLHttpRequest.readyState","request.readyState")}} est égal à 4.
  - Les propriétés permettant d'obtenir le status et le message en cas d'erreur sont toujours `status` et `statusText` mais elles se situent sur l'objet `request` (XHR) et non sur l'objet `response`.

> **Note :** Si vous avez des difficultés à le faire, vous pouvez comparer votre code à la version finale sur GitHub ([voir le code source](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store-xhr/can-script.js), ou [voir en direct](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store-xhr/)).

## Sommaire

Voilà qui clôt notre article sur la récupération de données à partir du serveur. À ce stade, vous devriez savoir comment travailler avec XHR et Fetch.

## Voir aussi

Il y a beaucoup de sujets abordés dans cet article, dont nous n'avons qu'égratigné la surface. Pour plus de détails sur ces sujets, essayez les articles suivants:

- [Ajax — Premiers pas](/fr/docs/Web/Guide/AJAX/Premiers_pas)
- [Utiliser Fetch](/fr/docs/Web/API/Fetch_API/Using_Fetch)
- [Promesses](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)
- [Manipuler des données JSON](/fr/docs/Learn/JavaScript/Objects/JSON)
- [Un aperçu de HTTP](/fr/docs/Web/HTTP/Aperçu)
- [Programmation de sites web, côté serveur](/fr/docs/Learn/Server-side)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

## Dans ce module

- [Introduction aux API du Web](/fr/Apprendre/JavaScript/Client-side_web_APIs/Introduction)
- [Manipuler des documents](/fr/Apprendre/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Récupérer des données du serveur](/fr/Apprendre/JavaScript/Client-side_web_APIs/Fetching_data)
- [APIs tierces](/fr/Apprendre/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [Dessiner des éléments graphiques](/fr/Apprendre/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [APIs vidéo et audio](/fr/Apprendre/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [Stockage côté client](/fr/Apprendre/JavaScript/Client-side_web_APIs/Client-side_storage)
