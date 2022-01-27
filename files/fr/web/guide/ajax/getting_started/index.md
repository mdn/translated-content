---
title: Premiers pas
slug: Web/Guide/AJAX/Getting_Started
tags:
  - AJAX
translation_of: Web/Guide/AJAX/Getting_Started
original_slug: Web/Guide/AJAX/Premiers_pas
---
Cet article vous guide à travers les bases d’AJAX et vous donne deux exemples clefs-en-main pour débuter.

### Présentation d’AJAX

AJAX est un raccourci pour **A**synchronous **J**avaScript **A**nd **X**ML (JavaScript asynchrone et XML) inventé par Jesse James Garrett. Pour simplifier, il s’agit d’employer l’objet [`XMLHttpRequest`](/fr/XMLHttpRequest "fr/XMLHttpRequest") pour communiquer avec des serveurs. Il peut envoyer et recevoir des informations sous différents formats, dont JSON, XML, HTML ou texte. Son principal attrait est sa nature « asynchrone » ce qui signifie qu’il peut communiquer avec le serveur, échanger des données et mettre à jour la page sans avoir à la recharger.

Les deux principales fonctionnalités d’AJAX permettent de :

- faire des requêtes vers le serveur sans recharger la page ;
- recevoir et travailler avec des données provenant du serveur.

### Étape 1 — Lancement d’une requête HTTP

Pour faire une requête [HTTP](/HTTP) vers le serveur à l’aide de JavaScript, il faut disposer d’une instance d’objet fournissant cette fonctionnalité. C’est ici que `XMLHttpRequest` intervient. Son prédécesseur est originaire de Internet Explorer sous la forme d’un objet ActiveX appelé `XMLHTTP`. Par la suite, Mozilla, Safari et d’autres navigateurs ont suivi en implémentant un objet `XMLHttpRequest` qui fournit les mêmes méthodes et propriétés que l’objet ActiveX original de Microsoft. Entre temps, Microsoft a également implémenté XMLHttpRequest.

```js
// ancien code de compatibilité, aujourd’hui inutile
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+...
    httpRequest = new XMLHttpRequest();
}
else if (window.ActiveXObject) { // IE 6 et antérieurs
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

> **Note :** Pour illustrer le principe, le code ci-dessus est une version un peu simplifiée de celui qui est utilisé pour créer une instance XMLHTTP. Pour un exemple plus réaliste, voir l’étape 3 de cet article.

Après avoir fait une requête, vous recevrez une réponse du serveur. À ce stade, vous devez indiquer à l’objet `httpRequest` le nom de la fonction JavaScript qui traitera la réponse. Pour cela, assignez à la propriété `onreadystatechange` de l’objet le nom de la fonction JavaScript que vous envisagez d’utiliser, comme ceci :

```js
httpRequest.onreadystatechange = nomDeLaFonction;
```

Notez qu’il n’y a ni parenthèses ni paramètres après le nom de la fonction, car vous ne faites qu’assigner une référence à la fonction sans l’appeler réellement. Alternativement, au lieu de donner un nom de fonction, vous pouvez utiliser la technique JavaScript de définition de fonctions à la volée (ce qu’on appelle une fonction anonyme), et définir à cet endroit les actions à effectuer sur la réponse, comme ceci :

```js
httpRequest.onreadystatechange = function() {
    // instructions de traitement de la réponse
};
```

Ensuite, après avoir déclaré ce qui se produit lorsque la réponse est reçue, il s’agit de lancer effectivement la requête. Il faut pour cela appeler les méthodes `open()` et `send()` de l’objet `httpRequest`, comme ceci :

```js
httpRequest.open('GET', 'http://www.example.org/some.file', true);
httpRequest.send();
```

- Le premier paramètre de l’appel à `open()` est la méthode de requête HTTP — GET, POST, HEAD ou toute autre méthode gérée par votre serveur. Laissez le nom de la méthode en majuscules comme spécifié par la norme HTTP ; autrement certains navigateurs (comme Firefox) peuvent ne pas traiter la requête. Pour plus d’informations sur les méthodes de requêtes HTTP possibles, vous pouvez consulter les [spécifications du W3C](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html).
- Le second paramètre est l’URL à laquelle vous envoyez la requête. Pour des raisons de sécurité, il est par défaut impossible d’appeler des URL se situant sur un domaine de tierce-partie. Veillez à utiliser le nom de domaine exact sur toutes vos pages ou vous obtiendrez une erreur « permission refusée » lors de l’appel à `open()`. Une erreur courante est de charger le site via `domaine.tld`, mais d’essayer d’appeler des pages avec `www.domain.tld`. Si vous avez réellement besoin d’envoyer une requête vers un autre domaine, veuillez consulter [Cross-Origin Resource Sharing (CORS)](/fr/docs/Web/HTTP/CORS).
- Le troisième paramètre, optionnel, précise si la requête est asynchrone. Si mis à `true` (sa valeur par défaut), l’exécution de JavaScript se poursuivra, et l’utilisateur ou l’utilisatrice pourra interagir avec la page, en attendant l’arrivée de la réponse du serveur. C’est le premier « A » de « AJAX ».

Le paramètre de la méthode `send()` peut être n’importe quelle donnée que vous voulez envoyer au serveur en cas d’utilisation de la méthode POST. Les données doivent être sous la forme d’une chaîne de requête, comme :

```js
"nom=valeur&autrenom="+encodeURIComponent(autrevaleur)+"&ainsi=desuite"
```

Ou d’autres formats tels que `multipart/form-data`, JSON, XML, etc.

Notez que si vous voulez envoyer des données avec la méthode POST, vous aurez peut-être à changer le type MIME de la requête. Par exemple, utilisez ce qui suit avant d’appeler `send()` pour envoyer des données de formulaire en tant que chaîne de requête :

```js
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

### Étape 2 — Gestion de la réponse du serveur

Lors de l’envoi de la requête, vous avez désigné une fonction JavaScript pour traiter la réponse.

```js
httpRequest.onreadystatechange = nomDeLaFonction;
```

Voyons maintenant ce que cette fonction doit faire. Tout d’abord, elle doit vérifier l’état de la requête. Si cet état a la valeur de `XMLHttpRequest.DONE` (ce qui correspond à 4), cela signifie que la réponse du serveur a été reçue dans son intégralité et qu’elle peut maintenant être traitée.

```js
if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // tout va bien, la réponse a été reçue
} else {
    // pas encore prête
}
```

La liste complète des valeurs de `readyState` est documentée sur [XMLHttpRequest.readyState](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Properties) et se résume de cette façon :

- 0 (non initialisée) ou (requête non initialisée)
- 1 (en cours de chargement) ou (connexion établie avec le serveur)
- 2 (chargée) ou (requête reçue)
- 3 (en cours d’interaction) ou (requête en cours de traitement)
- 4 (terminée) ou (requête terminée et réponse prête)

Ensuite, vérifiez le [code de statut HTTP](/fr/docs/Web/HTTP/Status) de la réponse du serveur. Tous les codes possibles sont listés sur le [site du W3C](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). Dans l’exemple qui suit, nous différencions un appel réussi ou échoué en vérifiant la réception d’un code [`200 OK`](/fr/docs/Web/HTTP/Status#R%C3%A9ponses_de_succ%C3%A8s).

```js
if (httpRequest.status === 200) {
    // parfait !
} else {
    // il y a eu un problème avec la requête,
    // par exemple la réponse peut être un code 404 (Non trouvée)
    // ou 500 (Erreur interne au serveur)
}
```

Après avoir vérifié l’état de la requête et le code de statut HTTP de la réponse, vous pouvez traiter à votre guise les données envoyées par le serveur. Il existe deux manières d’accéder à ces données :

- `httpRequest.responseText` — renvoie la réponse du serveur sous la forme d’une chaîne de texte ;
- `httpRequest.responseXML` — renvoie la réponse sous la forme d’un objet `XMLDocument` que vous pouvez parcourir à l’aide des fonctions DOM de JavaScript.

Notez que les étapes ci-dessus sont valides uniquement si vous utilisez une requête asynchrone (Le 3e paramètre d’`open()` n’a pas été spécifié, ou a été défini à `true`). Si vous utilisez une requête **synchrone,** vous n’avez pas besoin de spécifier une fonction, mais c’est fortement découragé car cela entraîne une mauvaise expérience utilisateur.

### Étape 3 — Un exemple simple

Rassemblons tous ces éléments dans un exemple : une requête HTTP simple. Notre JavaScript demande un document HTML, `test.html`, qui contient le texte « Je suis un test. », puis nous affichons le contenu de la réponse dans un message `alert()`. Remarquez que cet exemple n’utilise que du pur JavaScript vanilla (pas de jQuery). D’autre part, les fichiers HTML, XML et PHP doivent être placés dans le même dossier.

```html
<button id="ajaxButton" type="button">Faire une requête</button>

<script>
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Abandon :( Impossible de créer une instance de XMLHTTP');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'test.html');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('Il y a eu un problème avec la requête.');
      }
    }
  }
})();
</script>
```

Dans cet exemple :

- L’utilisateur ou l’utilisatrice clique sur le bouton « Faire une requête » ;
- Le gestionnaire d’évènement appelle la fonction `makeRequest()` ;
- la requête est faite, puis l’exécution est passée à `alertContents()` (via `onreadystatechange`);
- `alertContents()` vérifie si la réponse reçue est correcte, et affiche ensuite le contenu du fichier `test.html` dans un message `alert()`.

> **Note :** Si vous envoyez une requête à du code qui renvoie du XML plutôt qu’un fichier HTML statique, vous devez spécifier des en-têtes de réponse pour que cela fonctionne avec Internet Explorer. Si vous ne spécifiez pas l’en-tête `Content-Type: application/xml`, IE émettra une erreur JavaScript « Objet attendu » après la ligne à laquelle vous avez tenté d’accéder à l’élément XML.

> **Note :** Si vous ne spécifiez pas l’en-tête `Cache-Control: no-cache`, le navigateur mettra la réponse en cache et n’effectuera plus jamais la requête ultérieurement, ce qui peut rendre le débogage difficile. Vous pouvez également ajouter un paramètre GET toujours différent, comme un timestamp ou un nombre aléatoire (voir [contourner le cache](https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest#Contourner_le_cache)).

> **Note :** Si la variable `httpRequest` est utilisée globalement, des appels concurrents à `makeRequest()` peuvent s’écraser l’un l’autre, provoquant une situation de compétition _(race condition_). On peut s’en prémunir en déclarant la variable `httpRequest` locale à une [closure](/fr/docs/Web/JavaScript/Closures) contenant les fonctions AJAX.

Si une erreur de communication se produit (par exemple le serveur qui cesse de répondre), une exception sera levée dans la méthode `onreadystatechange` lors de l’accès à la propriété `status`. Pour atténuer ce problème, vous pouvez entourer votre bloc `if...then` dans un `try...catch` :

```js
function alertContents(httpRequest) {
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert("Un problème est survenu au cours de la requête.");
      }
    }
  }
  catch( e ) {
    alert("Une exception s’est produite : " + e.description);
  }
}
```

### Étape 4 — Travailler avec des réponses XML

Dans l’exemple précédent, après avoir reçu la réponse à la requête HTTP, nous avons utilisé la propriété `responseText` de l’objet, qui contenait le contenu du fichier `test.html`. Essayons maintenant la propriété `responseXML`.

Tout d’abord, créons un document XML valide qui sera l’objet de la requête. Le document (`test.xml`) contient ce qui suit :

```xml
<?xml version="1.0" ?>
<root>
    Je suis un test.
</root>
```

Dans le script, il est seulement nécessaire de remplacer la ligne de requête par :

```html
...
onclick="makeRequest('test.xml')">
...
```

Ensuite, dans `alertContents()`, il faut remplacer la ligne `alert(httpRequest.responseText);` par :

```js
var xmldoc = httpRequest.responseXML;
var root_node = xmldoc.getElementsByTagName('root').item(0);
alert(root_node.firstChild.data);
```

Ce code prend l’objet `XMLDocument` donné par `responseXML` et utilise les méthodes du DOM pour accéder à des données contenues dans le document XML.

Catégories

Interwiki

### Étape 5 – Manipuler les données

Pour finir, envoyons quelques données au serveur et réceptionnons la réponse. Notre JavaScript demandera cette fois-ci une page dynamique, `test.php`, qui prendra notre contenu envoyé et revera une chaîne « calculée » – "Bonjour, \[user data] !" – que nous afficherons via `alert()`.

D’abord, nous allons ajouter un boîte de texte dans notre HTML afin que l’utilisateur ou l’utilisatrice puisse saisir son nom :

```html
<label>Vore nom :
  <input type="text" id="ajaxTextbox" />
</label>
<span id="ajaxButton">
  Lancer une requête
</span>
```

Nous allons également ajouter une ligne à notre gestionnaire d’événement pour obtenir les données de la boite de texte et les envoyer à la fonction `makeRequest()`, ainsi que l’URL de notre script côté serveur :

```js
  document.getElementById("ajaxButton").onclick = function() {
      var userName = document.getElementById("ajaxTextbox").value;
      makeRequest('test.php', userName);
  };
```

Nous devons modifier `makeRequest()` afin d’accepter les données et les transmettre au serveur. Nous changerons la méthode de GET à POST et inclurons nos données en paramètres dans l’appel à `httpRequest.send()` :

```js
  function makeRequest(url, userName) {

    ...

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('userName=' + encodeURIComponent(userName));
  }
```

La fonction `alertContents()` peut être écrite de la même manière qu’à l’étape 3 pour afficher notre chaîne calculée, si c’est tout ce que le serveur renvoie. Cependant, supposons que le serveur renvoie à la fois la phrase calculée et la donnée originale. Donc si l’utilisateur ou l’utilisatrice a saisi « Dorothée », la réponse du serveur ressemblera à :

```json
{"userData":"Dorothée","computedString":"Bonjour, Dorothée !"}
```

Pour utiliser cette phrase dans `alertContents()`, nous ne pouvons pas simplement afficher une alerte avec le contenu de `responseText`, nous devons l’analyser et afficher `computedString`, la propriété que nous souhaitons :

```js
function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText);
      alert(response.computedString);
    } else {
      alert('Un problème est survenu avec la requête.');
    }
  }
}
```

Le fichier `test.php` devrait contenir ce qui suit :

```php
$name = (isset($_POST['userName'])) ? $_POST['userName'] : 'anonyme';
$computedString = 'Bonjour, ' . $name . ' !';
$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);
```

Pour en savoir sur les méthodes DOM, pensez à lire la [Référence du DOM](/fr/docs/Web/API/Document_Object_Model) de Mozilla.
