---
title: Comment utiliser les promesses
slug: Learn/JavaScript/Asynchronous/Promises
translation_of: Learn/JavaScript/Asynchronous/Promises
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

**Les promesses (ou <i lang="en">promises</i> en anglais)** sont une brique fondamentale pour la programmation asynchrone en JavaScript. Une promesse est un objet renvoyé par une fonction asynchrone et qui représente l'état courant de l'opération. Au moment où la promesse est renvoyée à l'appelant, l'opération n'est généralement pas terminée, mais la promesse fournit des méthodes pour gérer la réussite ou l'échec de l'opération.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Notions informatiques élémentaires, compréhension raisonnable des notions fondamentales de JavaScript, notamment de la gestion des évènements.</td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>Comprendre comment utiliser les promesses en JavaScript.</td>
    </tr>
  </tbody>
</table>

Dans l'article précédent, nous avons abordé l'utilisation des fonctions de rappel (<i lang="en">callbacks</i>) pour implémenter des fonctions asynchrones. Avec cette méthode, on appelle la fonction asynchrone en lui passant une fonction de rappel en argument. La première fonction renvoie sa valeur de retour immédiatement et appelle la fonction de rappel lorsque l'opération est terminée.

Avec une API fonctionnant avec des promesses, la fonction asynchrone démarre l'opération et renvoie un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise). On peut alors attacher des gestionnaires à cette promesse et les gestionnaires seront exécutés lors du succès ou de l'échec de l'opération.

## Utiliser l'API `fetch()`

> **Note :** Dans cet article, nous étudierons les promesses en copiant des fragments de code dans la console JavaScript du navigateur. Pour ceci&nbsp;:
>
> 1. Ouvrez un nouvel onglet dans votre navigateur et allez sur la page <https://example.org>.
> 2. Dans cet onglet, ouvrez la console JavaScript [des outils de développement du navigateur](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools).
> 3. Lorsqu'un exemple est présent dans cet article, copiez le contenu dans la console. Vous devrez recharger la page à chaque exemple pour éviter que la console affiche une erreur sur la redéclaration de `fetchPromise()`.

Dans cet exemple, nous téléchargerons le fichier JSON situé à l'adresse <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json>, et nous afficherons des informations à son sujet.

Pour cela, nous allons envoyer une **requête HTTP** au serveur. Lors d'une requête HTTP, on envoie un message à un serveur distant qui nous renvoie une réponse en retour. Ici, nous enverrons une requête pour obtenir le fichier JSON du serveur. Vous vous souvenez des requêtes HTTP utilisant l'API [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) dans l'article précédent&nbsp;? Ici, nous utiliserons à la place l'API [`fetch()`](/fr/docs/Web/API/fetch), qui est un remplacement moderne de `XMLHttpRequest` et qui utilise les promesses.

Copiez ce qui suit dans la console JavaScript de votre navigateur&nbsp;:

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then(reponse => {
  console.log(`Réponse reçue : ${reponse.status}`);
});

console.log("Requête initiée…");
```

Voici ce qu'on fait&nbsp;:

1. On appelle l'API `fetch()` et on affecte la valeur de retour à la variable `fetchPromise`.
2. Juste après, on affiche la variable `fetchPromise` dans la console. Cela devrait afficher quelque chose comme&nbsp;: `Promise { <state>: "pending" }`, qui indique qu'on a un objet `Promise` dont l'état est `"pending"` (c'est-à-dire, en cours). Cet état indique que l'opération de récupération du fichier est toujours en cours.
3. On passe une fonction de gestion à la méthode **`then()`** de la promesse. Lorsque l'opération de récupération a réussi (si elle a réussi), la promesse appellera le gestionnaire en lui passant un objet [`Response`](/fr/docs/Web/API/Response), qui contient la réponse du serveur.
4. On affiche un message dans la console indiquant que la requête a été lancée.

Voici à quoi devrait ressembler l'affichage complet dans la console&nbsp;:

```
Promise { <state>: "pending" }
Requête initiée…
Réponse reçue : 200
```

On notera que `Requête initiée…` est affiché avant d'avoir reçu une réponse. À la différence d'une fonction synchrone, `fetch()` produit sa valeur de retour alors que la requête est toujours en cours, ce qui permet à notre programme de rester réactif. La réponse affiche [le code de statut HTTP](/fr/docs/Web/HTTP/Status) `200` (OK), ce qui indique que la requête a réussi.

Ça ressemble beaucoup à l'exemple du précédent article où nous avions ajouté des gestionnaires d'évènements à l'objet [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest). Ici, à la place, on passe un gestionnaire à la méthode `then()` de la promesse renvoyée par l'opération.

## Enchaîner les promesses

Avec l'API `fetch()`, une fois l'objet `Response` obtenu, il faut appeler une autre fonction pour en récupérer les données. Ici, on veut récupérer les données sous forme JSON et on peut appeler la méthode [`json()`](/fr/docs/Web/API/Response/json) de l'objet `Response`. Il s'avère que `json()` est également asynchrone. On a donc le cas où il faut appeler deux fonctions asynchrones à la suite.

Après avoir rechargé la page, copiez ce qui suit dans la console&nbsp;:

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then(reponse => {
  const jsonPromise = reponse.json();
  jsonPromise.then(json => {
    console.log(json[0].name);
  });
});
```

Dans cet exemple, comme auparavant, on ajoute un gestionnaire à la promesse renvoyée par `fetch()` grâce à `then()`. Dans cette version, le gestionnaire appelle `response.json()` puis passe un nouveau gestionnaire `then()` à la promesse renvoyée par `response.json()`.

Cela devrait afficher `"baked beans"` (qui est le nom (`name`) du premier produit du fichier `products.json`).

Mais attendez&nbsp;! Dans l'article précédent, nous avions dit qu'appeler une fonction de rappel dans une autre fonction de rappel créait de plus en plus de niveaux de code imbriqués. Et même que cela pouvait engendrer un <i lang="en">callback hell</i> qui rendrait le code moins compréhensible. N'y a-t-il pas le même risque avec les appels à `then()`&nbsp;?

Bien entendu, il peut y avoir ce risque, mais les promesses disposent d'une caractéristique élégante&nbsp;: *`then()` renvoie lui-même une promesse qui sera réalisée avec le résultat de la fonction qu'on lui a passée*. Cela signifie qu'on peut (et en fait qu'on devrait) réécrire l'exemple précédent comme ceci&nbsp;:

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then(reponse => {
    return reponse.json();
  })
  .then(json => {
    console.log(json[0].name);
  });
```

Ici, au lieu d'appeler le deuxième `then()` au sein du gestionnaire pour le premier `then()`, on peut *renvoyer* la promesse renvoyée par `json()`, puis appeler le deuxième `then()` sur cette valeur de retour. C'est ce qu'on appelle **le chainage de promesses** et cela signifie qu'on peut éviter d'avoir des niveaux croissants d'imbrication des appels de fonctions asynchrones.

Avant de passer à la prochaine étape, il reste quelque chose à ajouter. Il faut vérifier que le serveur a accepté notre requête et a été en mesure d'y répondre avant de tenter de lire la réponse. Pour cela, nous allons vérifier le code de statut de la réponse et lever une exception si ce n'était pas «&nbsp;OK&nbsp;»&nbsp;:

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then(reponse => {
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }
    return reponse.json();
  })
  .then(json => {
    console.log(json[0].name);
  });
```

## Intercepter les erreurs

Cela nous amène au dernier sujet&nbsp;: comment gérer les erreurs&nbsp;? L'API `fetch()` peut déclencher une exception pour de nombreuses raisons (par exemple parce qu'il n'y a pas d'accès réseau ou encore parce que l'URL était malformée) et nous déclenchons également une erreur par nous-même si le serveur renvoie une erreur.

Dans l'article précédent, nous avons vu que la gestion d'erreur peut s'avérer délicate avec les fonctions de rappel imbriquées, où il fallait gérer les erreurs à chaque niveau d'imbrication.

Pour la gestion des erreurs, les objets `Promise` fournissent une méthode [`catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch). Elle se comporte un peu comme `then()`&nbsp;: on l'appelle en lui passant une fonction de gestion en argument. Si le gestionnaire passé à `then()` est appelé lorsque l'opération asynchrone a *réussi*, le gestionnaire passé à `catch()` est, quant à lui, appelé lorsque l'opération asynchrone *échoue*.

Si on ajoute `catch()` à la fin de la chaîne des promesses, il sera appelé dès qu'un des appels de fonction asynchrone échoue. Ainsi, il est possible d'implémenter une opération composée de plusieurs appels successifs de fonctions asynchrones et de gérer toutes les erreurs à un seul endroit.

Rechargez la page et essayez la version qui suit `fetch()`. On a ajouté un gestionnaire d'erreur grâce à `catch()`, et on a aussi modifié l'URL afin de faire échouer la requête.

```js
const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then(reponse => {
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }
    return reponse.json();
  })
  .then(json => {
    console.log(json[0].name);
  })
  .catch(error => {
    console.error(`Impossible de récupérer les produits : ${error}`);
  });
```

Essayez d'exécuter cette version, vous devriez avoir une erreur affichée dans la console avec le gestionnaire passé à `catch()`.

## Terminologie des promesses

Les promesses ont une terminologie spécifique qu'il est préférable de clarifier.

Pour commencer, une promesse peut être dans l'un de ces trois états&nbsp;:

- **En cours** (<i lang="en">pending</i> en anglais)
  - : La promesse a été créée et la fonction asynchrone associée n'a pas encore terminé son exécution, on ne sait pas si elle a réussi ou non. Il s'agit dans notre exemple de l'état de la promesse quand elle est renvoyée par l'appel à `fetch()`, et que la requête HTTP est toujours en cours.
- **Tenue** (ou réussie ou <i lang="en">fullfilled</i> en anglais)
  - : La fonction asynchrone a réussi. Lorsque la promesse est tenue, le gestionnaire passé à sa méthode `then()` est appelé.
- **Rompue** (ou échouée ou <i lang="en">rejected</i> en anglais)
  - : La fonction asynchrone a échoué. Lorsqu'une promesse est rompue, c'est le gestionnaire passé à sa méthode `catch()` qui est appelé.

On notera ici que la réussite ou l'échec dépend de l'API en question. Ainsi, l'API `fetch()` considèrera qu'une requête a réussi dans le cas où le serveur renvoie une erreur HTTP comme [`404 Not Found`](/fr/docs/Web/HTTP/Status/404), mais qu'elle a échoué si une erreur réseau a empêché l'envoi de la  requête.

On utilise parfois le terme **réglée** (<i lang="en">settled</i> en anglais) pour désigner les deux cas de réussite et d'échec (autrement dit, pour dire que l'opération asynchrone n'est plus en cours).

On dit d'une promesse qu'elle est **résolue** (<i lang="en">resolved</i>) si elle est réglée ou si elle suit l'état d'une autre promesse.

L'article [Parlons un peu de notre façon de parler des promesses (en anglais)](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) fournit plus d'explications sur les détails de cette terminologie.

## Combiner plusieurs promesses

Une chaîne de promesse est utile lorsque notre opération se compose de plusieurs fonctions asynchrones et que chacune de ces fonctions doit démarrer à la suite de l'autre. Il existe toutefois d'autres façons de combiner les appels de fonctions asynchrones et l'API `Promise` fournit différentes méthodes utilitaires pour ça.

Parfois, on a besoin que toutes les promesses soient tenues, mais leur exécution ne dépend pas l'une de l'autre. Dans une telle situation, il est plus efficace de lancer toutes les promesses en même temps puis de recevoir une notification lorsqu'elles ont toutes été tenues. La méthode [`Promise.all()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) est l'outil adéquat pour ça. Elle prend comme argument un tableau de promesses et renvoie une seule promesse.

La promesse renvoyée par `Promise.all()` est&nbsp;:

- Tenue lorsque *toutes* les promesses du tableau ont été tenues. Dans ce cas, le gestionnaire `then()` est appelé avec un tableau contenant toutes les réponses, dans le même ordre que le tableau des promesses passé à `all()`
- Rompue si *au moins une* des promesses du tableau a été rompue. Dans ce cas, le gestionnaire `catch()` est appelé avec l'erreur levée par la promesse du tableau qui a été rompue.

Ainsi&nbsp;:

```js
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then(reponses => {
    for (const reponse of reponses) {
      console.log(`${reponse.url} : ${reponse.status}`);
    }
  })
  .catch(error => {
    console.error(`Erreur de récupération : ${error}`)
  });
```

Ici, on lance trois requêtes `fetch()` vers trois URL différentes. Si elles réussissent toutes les trois, on affiche le code de statut de chaque. Si l'une d'elles échoue, on affiche l'erreur dans la console.

Avec les URL fournies, toutes les requêtes devraient réussir, même si pour la deuxième, le serveur renvoie `404` (<i lang="en">Not Found</i>) et non `200` (OK) (en effet, le fichier demandé n'existe pas sur le serveur). Voici ce qui devrait donc s'afficher dans la console&nbsp;:

```
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json : 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found : 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json : 200
```

Si on essaye le même code avec une URL mal-formée, comme avec&nbsp;:

```js
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then(reponses => {
    for (const reponse of reponses) {
      console.log(`${reponse.url}: ${reponse.status}`);
    }
  })
  .catch(error => {
    console.error(`Échec de récupération : ${error}`)
  });
```

On peut alors s'attendre à ce que le gestionnaire `catch()` soit exécuté et qu'il y ait un message d'erreur dans la console&nbsp;:

```
Échec de récupération : TypeError: Failed to fetch
```

Il arrive aussi qu'on ait plusieurs promesses et que la réussite d'une seule suffise, quelle que soit la promesse qui réussit. Dans ce cas, on pourra utiliser [`Promise.any()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/any). Elle fonctionne comme `Promise.all()`, mais elle est tenue dès qu'une des promesses du tableau a été tenue et rompue uniquement si toutes les promesses du tableau sont rompues&nbsp;:

```js
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then(reponse => {
    console.log(`${reponse.url}: ${reponse.status}`);
  })
  .catch(error => {
    console.error(`Erreur de récupération : ${error}`)
  });
```

On notera que dans ce cas, on ne peut pas prédire la requête qui sera terminée en premier.

Nous avons vu ici uniquement deux fonctions de `Promise` qui permettent de combiner plusieurs promesses. Pour en apprendre plus sur les autres méthodes, vous pouvez consulter la page [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) de la référence JavaScript.

## `async` et `await`

Le mot-clé [`async`](/fr/docs/Web/JavaScript/Reference/Statements/async_function) fournit une façon plus simple de travailler avec du code asynchrone utilisant les promesses. En ajoutant `async` au début d'une fonction, cette dernière devient une fonction asynchrone&nbsp;:

```js
async function maFonction() {
  // Voici une fonction asynchrone
}
```

Dans une fonction asynchrone, on peut utiliser le mot-clé `await` avant un appel à une fonction renvoyant une promesse. De cette façon, le code patiente jusqu'à ce que la promesse soit réglée et la valeur de résolution de la promesse est fournie comme valeur de retour, ou alors la valeur d'échec déclenche une erreur.

Cela permet d'écrire du code utilisant des fonctions asynchrones mais qui ressemble à du code synchrone. On pourrait par exemple réécrire notre exemple avec `fetch()` comme ceci&nbsp;:

```js
async function fetchProducts() {
  try {
    // Après cette ligne, notre fonction attendra que l'appel à `fetch()`
    // soit réglé, soit on aura un objet Response dans la variable reponse
    // soit on aura une erreur qui sera levée
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    // Après cette ligne, notre fonction attendra que l'appel à
    // `response.json()` soit réglé et la variable json contiendra
    // un objet JSON ou alors une erreur sera levée
    const json = await response.json();
    console.log(json[0].name);
  }
  catch(error) {
    console.error(`Impossible d'obtenir les produits : ${error}`);
  }
}

fetchProducts();
```

On utilise ici `await fetch()` plutôt que de récupérer une promesse. La fonction appelante récupère un objet `Response` directement, comme si `fetch()` était une fonction synchrone&nbsp;!

On peut même utiliser un bloc `try…catch` pour la gestion d'erreurs, de la même façon qu'on peut le faire lorsqu'on utilise du code synchrone.

Attention, ceci ne fonctionne qu'au sein des fonctions asynchrones. Les fonctions asynchrones renvoient toujours une promesse et on ne peut donc pas faire ceci&nbsp;:

```js example-bad
async function fetchProducts() {
  try {
    const reponse = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }
    const json = await reponse.json();
    return json;
  }
  catch(error) {
    console.error(`Impossible d'obtenir les produits : ${error}`);
  }
}

const json = fetchProducts();
console.log(json[0].name);   // json est un objet Promise, ça ne fonctionnera pas
```

À la place, il faut plutôt écrire comme ceci&nbsp;:

```js
async function fetchProducts() {
  try {
    const reponse = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }
    const json = await reponse.json();
    return json;
  }
  catch(error) {
    console.error(`Impossible d'obtenir les produits : ${error}`);
  }
}

const jsonPromise = fetchProducts();
jsonPromise.then((json) => console.log(json[0].name));
```

Vous utiliserez probablement les fonctions asynchrones là où vous pourriez utiliser les chaînes de promesse. Elles permettent de travailler avec les promesses de façon plus intuitive.

Il faut garder en tête que, comme les chaînes de promesses, `await` implique que les opérations asynchrones s'exécutent les unes à la suite des autres. C'est utile lorsque le résultat d'une opération dépend de celui de la précédente, mais si ce n'est pas le cas, l'utilisation de `Promise.all()` ou d'autres méthodes pourra s'avérer plus performante.

## Conclusion

Les promesses sont à la base de la programmation asynchrone en JavaScript moderne. Elles permettent d'exprimer et de raisonner avec des ensembles d'opérations asynchrones sans avoir à utiliser des niveaux d'imbrication de fonctions de rappels. De plus, la façon de gérer les erreurs se rapproche de ce qu'on peut avoir avec l'instruction synchrone `try…catch`.

Les mots-clés `async` et `await` permettent quant à eux de construire simplement une opération qui consiste en une suite d'appels de fonctions asynchrones, sans avoir à recourir à des chaînes de promesses et en écrivant du code qui ressemble à du code synchrone.

Les promesses fonctionnent pour tous les navigateurs récents. Les seuls environnements où leur prise en charge est problématique sont&nbsp;: Opera Mini et IE11 ainsi que les versions antérieures.

Nous n'avons pas couvert toutes les fonctionnalités des promesses dans cet article, nous avons seulement vu les aspects les plus utiles et les plus intéressants. Lorsque vous commencerez à en savoir plus sur les promesses, vous rencontrerez d'autres fonctionnalités et d'autres techniques.

De nombreuses API web modernes utilisent les promesses, comme [WebRTC](/fr/docs/Web/API/WebRTC_API), [l'API Web Audio](/fr/docs/Web/API/Web_Audio_API), [l'API de flux média (<i lang="en">Media Streams API</i>)](/fr/docs/Web/API/Media_Streams_API), et bien d'autres.

## Voir aussi

- [`Promise()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Utiliser les promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
- [Nous avons un problème avec les promesses (en anglais)](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html), un billet de Nolan Lawson
- [Parlons un peu de notre façon de parler des promesses (en anglais)](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

## Dans ce module

- [Introduction au JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing)
- **Comment utiliser les promesses**
- [Implémenter une API utilisant les promesses](/fr/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)
- [Introduction aux <i lang="en">workers</i>](/fr/docs/Learn/JavaScript/Asynchronous/Introducing_workers)
- [Évaluation&nbsp;: ordonnancer des animations](/fr/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)
