---
title: Gérer les opérations asynchrones avec élégance grâce aux promesses
slug: Learn/JavaScript/Asynchronous/Promises
tags:
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Learn
  - Promises
  - async
  - asynchronous
  - catch
  - finally
  - then
translation_of: Learn/JavaScript/Asynchronous/Promises
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}

**Les promesses** sont une fonctionnalité relativement nouvelle du langage JavaScript qui vous permet de reporter d'autres actions jusqu'à ce qu'une action précédente soit terminée, ou de répondre à son échec. Ceci est utile pour mettre en place une séquence d'opérations asynchrones afin qu'elles fonctionnent correctement. Cet article vous montre comment les promesses fonctionnent, comment vous les verrez utilisées avec les API Web, et comment écrire les vôtres.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissances informatiques de base, compréhension raisonnable des
        principes fondamentaux de JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Comprendre les promesses et savoir comment les utiliser.</td>
    </tr>
  </tbody>
</table>

## Que sont les promesses ?

Nous avons examiné les [promesses (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) brièvement dans le premier article du cours, mais ici nous allons les examiner de manière beaucoup plus approfondie.

Essentiellement, une promesse est un objet qui représente un état intermédiaire d'une opération - en fait, c'est une _promesse_ qu'un résultat d'une certaine nature sera retourné à un moment donné dans le futur. Il n'y a aucune garantie du moment exact où l'opération se terminera et où le résultat sera renvoyé, mais il _est_ une garantie que lorsque le résultat est disponible, ou que la promesse échoue, le code que vous fournissez sera exécuté afin de faire autre chose avec un résultat réussi, ou de gérer gracieusement un cas d'échec.

En général, vous êtes moins intéressé par le temps qu'une opération asynchrone prendra pour renvoyer son résultat (à moins bien sûr qu'elle ne prenne _beaucoup_ trop de temps !), et plus intéressé par le fait de pouvoir répondre à son retour, quel que soit le moment. Et bien sûr, il est agréable que cela ne bloque pas le reste de l'exécution du code.

L'une des utilisations les plus courantes des promesses concerne les API web qui renvoient une promesse. Considérons une hypothétique application de chat vidéo. L'application dispose d'une fenêtre contenant une liste des amis de l'utilisateur, et un clic sur un bouton à côté d'un utilisateur lance un appel vidéo vers cet utilisateur.

Le gestionnaire de ce bouton appelle [`getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia) afin d'avoir accès à la caméra et au microphone de l'utilisateur. Puisque `getUserMedia()` doit s'assurer que l'utilisateur a la permission d'utiliser ces dispositifs _et_ lui demander quel microphone utiliser et quelle caméra utiliser (ou s'il s'agit d'un appel vocal uniquement, parmi d'autres options possibles), il peut bloquer jusqu'à ce que non seulement toutes ces décisions soient prises, mais aussi que la caméra et le microphone soient activés. En outre, l'utilisateur peut ne pas répondre immédiatement à ces demandes d'autorisation. Cela peut potentiellement prendre beaucoup de temps.

Puisque l'appel à `getUserMedia()` est effectué depuis le processus principal du navigateur, l'ensemble du navigateur est bloqué jusqu'à ce que `getUserMedia()` retourne une réponse ! Évidemment, ce n'est pas une option viable ; sans les promesses, tout dans le navigateur devient inutilisable jusqu'à ce que l'utilisateur décide ce qu'il faut faire de la caméra et du microphone. Ainsi, au lieu d'attendre l'utilisateur, d'obtenir l'activation des périphériques choisis et de retourner directement le [`MediaStream`](/fr/docs/Web/API/MediaStream) pour le flux créé à partir des sources sélectionnées, `getUserMedia()` retourne une [`promesse`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui est résolue avec le [`MediaStream`](/fr/docs/Web/API/MediaStream) une fois qu'il est disponible.

Le code qu'utiliserait l'application de chat vidéo pourrait ressembler à ceci :

```js
function handleCallButton(evt) {
  setStatusMessage("Appel...");
  navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(chatStream => {
      selfViewElem.srcObject = chatStream;
      chatStream.getTracks().forEach(track => myPeerConnection.addTrack(track, chatStream));
      setStatusMessage("Connecté");
    }).catch(err => {
      setStatusMessage("Échec de la connexion");
    });
}
```

Cette fonction commence par utiliser une fonction appelée `setStatusMessage()` pour mettre à jour un affichage d'état avec le message "Appel...", indiquant qu'un appel est tenté.Il appelle ensuite `getUserMedia()`, demandant un flux qui a à la fois des pistes vidéo et audio, puis une fois que cela a été obtenu, configure un élément vidéo pour montrer le flux provenant de la caméra comme une "vue de soi", puis prend chacune des pistes du flux et les ajoute à la [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection) [WebRTC](/fr/docs/Web/API/WebRTC_API) représentant une connexion à un autre utilisateur. Après cela, l'affichage de l'état est mis à jour pour indiquer "Connecté".

Si `getUserMedia()` échoue, le bloc `catch` s'exécute. Celui-ci utilise `setStatusMessage()` pour mettre à jour la case d'état afin d'indiquer qu'une erreur s'est produite.

La chose importante ici est que l'appel `getUserMedia()` revient presque immédiatement, même si le flux de la caméra n'a pas encore été obtenu. Même si la fonction `handleCallButton()` est déjà retournée au code qui l'a appelée, lorsque `getUserMedia()` a fini de travailler, elle appelle le gestionnaire que vous fournissez. Tant que l'application ne suppose pas que le flux a commencé, elle peut continuer à fonctionner.

> **Note :** Vous pouvez en apprendre davantage sur ce sujet quelque peu avancé, si cela vous intéresse, dans l'article [L'essentiel du WebRTC](/fr/docs/Web/API/WebRTC_API/Signaling_and_video_calling). Un code similaire à celui-ci, mais beaucoup plus complet, est utilisé dans cet exemple.

## Le problème des fonctions de rappel

Pour bien comprendre pourquoi les promesses sont une bonne chose, il est utile de repenser aux anciennes fonctions de rappel (_callback_) et de comprendre pourquoi elles sont problématiques.

Prenons l'exemple de la commande d'une pizza. Il y a certaines étapes que vous devez franchir pour que votre commande soit réussie, et cela n'a pas vraiment de sens d'essayer de les exécuter dans le désordre, ou dans l'ordre mais avant que chaque étape précédente ne soit tout à fait terminée :

1.  Vous choisissez les garnitures que vous voulez. Cela peut prendre un certain temps si vous êtes indécis, et peut échouer si vous n'arrivez pas à vous décider, ou si vous décidez de prendre un curry à la place.
2.  Vous passez ensuite votre commande. Le retour d'une pizza peut prendre un certain temps et peut échouer si le restaurant ne dispose pas des ingrédients nécessaires à sa cuisson.
3.  Vous récupérez ensuite votre pizza et la mangez. Cela peut échouer si, par exemple, vous avez oublié votre portefeuille et ne pouvez pas payer la pizza !

Avec l'ancien modèle de [rappels](/fr/docs/Learn/JavaScript/Asynchronous/Introducing#callbacks), une représentation en pseudo-code de la fonctionnalité ci-dessus pourrait ressembler à quelque chose comme ceci :

```js
chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Cela est désordonné et difficile à lire (souvent appelé « [_callback hell_](http://callbackhell.com/) »), nécessite que le `failureCallback()` soit appelé plusieurs fois (une fois pour chaque fonction imbriquée), avec d'autres problèmes en plus.

### Améliorations avec des promesses

Les promesses facilitent grandement l'écriture, l'analyse et l'exécution de situations telles que celle décrite ci-dessus. Si nous avions représenté le pseudo-code ci-dessus en utilisant des promesses asynchrones à la place, nous aurions obtenu quelque chose comme ceci :

```js
chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings);
})
.then(function(order) {
  return collectOrder(order);
})
.then(function(pizza) {
  eatPizza(pizza);
})
.catch(failureCallback);
```

C'est bien mieux - il est plus facile de voir ce qui se passe, nous n'avons besoin que d'un seul bloc `.catch()` pour gérer toutes les erreurs, cela ne bloque pas le processus principal (nous pouvons donc continuer à jouer à des jeux vidéo en attendant que la pizza soit prête à être collectée), et chaque opération a la garantie d'attendre que les opérations précédentes soient terminées avant de s'exécuter. Nous sommes en mesure d'enchaîner plusieurs actions asynchrones pour qu'elles se produisent les unes après les autres de cette façon, car chaque bloc `.then()` renvoie une nouvelle promesse qui se résout lorsque le bloc `.then()` a fini de s'exécuter. Astucieux, non ?

En utilisant les fonctions flèches, vous pouvez simplifier encore plus le code :

```js
chooseToppings()
.then(toppings =>
  placeOrder(toppings)
)
.then(order =>
  collectOrder(order)
)
.then(pizza =>
  eatPizza(pizza)
)
.catch(failureCallback);
```

Ou encore ça :

```js
chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);
```

Cela fonctionne car avec les fonctions flèches `() => x` est un raccourci valide pour `() => { return x ; }`.

Vous pourriez même le faire ainsi, puisque les fonctions ne font que passer leurs arguments directement, et qu'il n'y a donc pas besoin de cette couche supplémentaire de fonctions :

```js
chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);
```

Cependant, la lecture n'est pas aussi facile et cette syntaxe peut ne pas être utilisable si vos blocs sont plus complexes que ce que nous avons montré ici.

> **Note :** Vous pouvez apporter d'autres améliorations avec la syntaxe `async`/`await`, que nous aborderons dans le prochain article.

Dans leur forme la plus basique, les promesses sont similaires aux écouteurs d'événements, mais avec quelques différences :

- Une promesse ne peut réussir ou échouer qu'une seule fois. Elle ne peut pas réussir ou échouer deux fois et elle ne peut pas passer du succès à l'échec ou vice versa une fois l'opération terminée.
- Si une promesse a réussi ou échoué et que vous ajoutez plus tard une de rappel de réussite/échec, la bonne fonction de rappel sera appelée, même si l'événement a eu lieu plus tôt.

## Explication de la syntaxe de base des promesses : exemple concret

Il est important de comprendre les promesses, car la plupart des API Web modernes les utilisent pour les fonctions qui exécutent des tâches potentiellement longues. Pour utiliser les technologies Web modernes, vous devrez utiliser des promesses. Plus loin dans ce chapitre, nous verrons comment écrire votre propre promesse, mais pour l'instant, nous allons nous pencher sur quelques exemples simples que vous rencontrerez dans les API Web.

Dans le premier exemple, nous allons utiliser la méthode [`fetch()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch) pour récupérer une image sur le web, la méthode [`blob()`](/fr/docs/Web/API/Body/blob) pour transformer le contenu brut du corps de la réponse fetch en un objet [`Blob`](/fr/docs/Web/API/Blob), puis afficher ce blob à l'intérieur d'un élément [`<img>`](/fr/docs/Web/HTML/Element/Img). Cet exemple est très similaire à celui que nous avons examiné dans le [premier article](/fr/docs/Learn/JavaScript/Asynchronous/Introducing#asynchronous_javascript), mais nous le ferons un peu différemment au fur et à mesure que nous vous ferons construire votre propre code basé sur des promesses.

> **Note :** L'exemple suivant ne fonctionnera pas si vous l'exécutez directement à partir du fichier (c'est-à-dire via une URL `file://`). Vous devez l'exécuter via un [serveur de test local](/fr/docs/Learn/Common_questions/set_up_a_local_testing_server), ou utiliser une solution en ligne telle que [Glitch](https://glitch.com/) ou [les pages GitHub](/fr/docs/Learn/Common_questions/Using_Github_pages).

1.  Tout d'abord, téléchargez notre [modèle HTML simple](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) et le [fichier image](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg) que nous allons récupérer.
2.  Ajoutez un élément [`<script>`](/fr/docs/Web/HTML/Element/script) au bas de l'élément HTML [`<body>`](/fr/docs/Web/HTML/Element/body).
3.  À l'intérieur de votre élément [`<script>`](/fr/docs/Web/HTML/Element/script), ajoutez la ligne suivante :

    ```js
    let promise = fetch('coffee.jpg');
    ```

    Cela appelle la méthode `fetch()`, en lui passant en paramètre l'URL de l'image à récupérer sur le réseau. Cette méthode peut également prendre un objet d'options comme second paramètre facultatif, mais nous n'utilisons que la version la plus simple pour le moment. Nous stockons l'objet promesse retourné par `fetch()` à l'intérieur d'une variable appelée `promise`. Comme nous l'avons dit précédemment, cet objet représente un état intermédiaire qui n'est initialement ni un succès ni un échec - le terme officiel pour une promesse dans cet état est **en attente** (_pending_ en anglais).

4.  Pour répondre à l'achèvement réussi de l'opération lorsque cela se produit (dans ce cas, lorsqu'une [réponse](/fr/docs/Web/API/Response) est retournée), nous invoquons la méthode [`.then()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) de l'objet promesse. La fonction de rappel à l'intérieur du bloc `.then()` s'exécute uniquement lorsque l'appel de la promesse se termine avec succès et retourne l'objet [`Response`](/fr/docs/Web/API/Response) — en langage de promesse, lorsqu'elle a été **remplie** (_fullfilled_ en anglais). On lui passe l'objet [`Response`](/fr/docs/Web/API/Response) retourné en tant que paramètre.

    > **Note :** Le fonctionnement d'un bloc `.then()` est similaire à celui de l'ajout d'un écouteur d'événements à un objet à l'aide de `AddEventListener()`. Il ne s'exécute pas avant qu'un événement ne se produise (lorsque la promesse se réalise). La différence la plus notable est qu'un `.then()` ne s'exécutera qu'une fois à chaque fois qu'il sera utilisé, alors qu'un écouteur d'événements pourrait être invoqué plusieurs fois.

    Nous exécutons immédiatement la méthode `blob()` sur cette réponse pour nous assurer que le corps de la réponse est entièrement téléchargé, et lorsqu'il est disponible, le transformer en un objet `Blob` avec lequel nous pouvons faire quelque chose. Le résultat de cette méthode est retourné comme suit :

    ```js
    response => response.blob()
    ```

    qui est un raccourci de

    ```js
    function(response) {
      return response.blob();
    }
    ```

    Malheureusement, nous devons faire un peu plus que cela. Les promesses de récupération n'échouent pas sur les erreurs 404 ou 500 - seulement sur quelque chose de catastrophique comme une panne de réseau. Au lieu de cela, elles réussissent, mais avec la propriété [`response.ok`](/fr/docs/Web/API/Response/ok) définie à `false`. Pour produire une erreur sur un 404, par exemple, nous devons vérifier la valeur de `response.ok`, et si c'est `false`, lancer une erreur, ne renvoyant le blob que si elle est à `true`. Cela peut être fait comme suit - ajoutez les lignes suivantes sous votre première ligne de JavaScript.

    ```js
    let promise2 = promise.then(response => {
      if (!response.ok) {
        throw new Error(`erreur HTTP ! statut : ${response.status}`);
      } else {
        return response.blob();
      }
    });
    ```

5.  Chaque appel à la méthode `.then()` crée une nouvelle promesse. Ceci est très utile ; parce que la méthode `blob()` renvoie également une promesse, nous pouvons manipuler l'objet `Blob` qu'elle renvoie sur l'accomplissement en invoquant la méthode `.then()` de la seconde promesse. Parce que nous voulons faire quelque chose d'un peu plus complexe au blob que de simplement exécuter une seule méthode sur lui et renvoyer le résultat, nous devrons envelopper le corps de la fonction dans des accolades cette fois (sinon, ça lancera une erreur).

    Ajoutez ce qui suit à la fin de votre code :

    ```js
    let promise3 = promise2.then(myBlob => {
    })
    ```

6.  Maintenant, remplissons le corps de la fonction de rappel `.then()`. Ajoutez les lignes suivantes à l'intérieur des accolades :

    ```js
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
    ```

    Nous exécutons ici la méthode [`URL.createObjectURL()`](/fr/docs/Web/API/URL/createObjectURL), en lui passant en paramètre le `Blob` renvoyé lors de la réalisation de la deuxième promesse. Cela permettra de renvoyer une URL pointant vers l'objet. Ensuite, nous créons un élément [`<img>`](/fr/docs/Web/HTML/Element/Img), définissons son attribut `src` comme étant égal à l'URL de l'objet et l'ajoutons au DOM, de sorte que l'image s'affiche sur la page !

Si vous enregistrez le fichier HTML que vous venez de créer et le chargez dans votre navigateur, vous verrez que l'image s'affiche dans la page comme prévu. Bon travail !

> **Note :** Vous remarquerez probablement que ces exemples sont quelque peu artificiels. Vous pourriez tout simplement vous passer de toute la chaîne `fetch()` et `blob()`, et simplement créer un élément `<img>` et définir la valeur de son attribut `src` à l'URL du fichier image, `coffee.jpg`. Nous avons toutefois choisi cet exemple parce qu'il démontre les promesses d'une manière simple et agréable, plutôt que pour sa pertinence dans le monde réel.

### Réagir à un échec

Il manque quelque chose — actuellement, il n'y a rien pour gérer explicitement les erreurs si l'une des promesses **échoue** (_rejects_, en anglais). Nous pouvons ajouter la gestion des erreurs en exécutant la méthode [`.catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) de la promesse précédente. Ajoutez ceci maintenant :

```js
let errorCase = promise3.catch(e => {
  console.log('Il y a eu un problème avec votre opération de récupération : ' + e.message);
});
```

Pour voir cela en action, essayez de mal orthographier l'URL de l'image et de recharger la page. L'erreur sera signalée dans la console des outils de développement de votre navigateur.

Cela ne fait pas beaucoup plus que si vous ne preniez pas la peine d'inclure le bloc `.catch()` du tout, mais pensez-y - cela nous permet de contrôler la gestion des erreurs exactement comme nous le voulons. Dans une application réelle, votre bloc `.catch()` pourrait réessayer de récupérer l'image, ou afficher une image par défaut, ou demander à l'utilisateur de fournir une URL d'image différente, ou autre.

> **Note :** Vous pouvez voir [notre version de l'exemple en direct](https://mdn.github.io/learning-area/javascript/asynchronous/promises/simple-fetch.html) (voir également son [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch.html)).

### Enchaîner les blocs

C'est une façon très manuscrite d'écrire cela ; nous l'avons délibérément fait pour vous aider à comprendre clairement ce qui se passe. Comme nous l'avons montré plus haut dans l'article, vous pouvez enchaîner les blocs `.then()` (et aussi les blocs `.catch()`). Le code ci-dessus pourrait aussi être écrit comme ceci (voir aussi [simple-fetch-chained.html](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch-chained.html) sur GitHub) :

```js
fetch('coffee.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`);
  } else {
    return response.blob();
  }
})
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('Il y a eu un problème avec votre opération de récupération : ' + e.message);
});
```

Gardez à l'esprit que la valeur renvoyée par une promesse remplie devient le paramètre transmis à la fonction de rappel du bloc `.then()` suivant.

> **Note :** Les blocs `.then()`/`.catch()` dans les promesses sont essentiellement l'équivalent asynchrone d'un bloc [`try...catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch) dans du code synchrone. Gardez à l'esprit que le `try...catch` synchrone ne fonctionnera pas dans du code asynchrone.

## Récapitulatif de la terminologie des promesses

Il y avait beaucoup à couvrir dans la section ci-dessus, alors revenons-y rapidement pour vous donner un [court guide que vous pouvez mettre en favoris](#promise_terminology_recap) et utiliser pour vous rafraîchir la mémoire à l'avenir. Vous devriez également revoir la section ci-dessus quelques fois de plus pour vous assurer que ces concepts sont bien assimilés.

1.  Lorsqu'une promesse est créée, elle n'est ni dans un état de réussite ni dans un état d'échec. On dit qu'elle est **en attente**.
2.  Lorsqu'une promesse est retournée, on dit qu'elle est **résolue**.

    1.  Une promesse résolue avec succès est dite **remplie**. Elle retourne une valeur, à laquelle on peut accéder en enchaînant un bloc `.then()` à la fin de la chaîne de promesses. La fonction de rappel à l'intérieur du bloc `.then()` contiendra la valeur de retour de la promesse.
    2.  Une promesse résolue non aboutie est dite **rejetée**. Elle renvoie une **raison**, un message d'erreur indiquant pourquoi la promesse a été rejetée. On peut accéder à cette raison en enchaînant un bloc `.catch()` à la fin de la chaîne de promesses.

## Exécution du code en réponse à des promesses multiples remplies

L'exemple ci-dessus nous a montré certaines des bases réelles de l'utilisation des promesses. Voyons maintenant quelques fonctionnalités plus avancées. Pour commencer, enchaîner des processus pour qu'ils se réalisent l'un après l'autre, c'est très bien, mais que faire si vous voulez exécuter du code seulement après que tout un tas de promesses aient _toutes_ été remplies ?

Vous pouvez le faire avec la méthode statique ingénieusement nommée [`Promise.all()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). Celle-ci prend un tableau de promesses comme paramètre d'entrée et retourne un nouvel objet `Promise` qui ne se réalisera que si et quand _toutes_ les promesses du tableau se réaliseront. Cela ressemble à quelque chose comme ceci :

```js
Promise.all([a, b, c]).then(values => {
  ...
});
```

Si elles se réalisent toutes, la fonction de callback du bloc `.then()` enchaîné se verra passer un tableau contenant tous ces résultats en paramètre. Si l'une des promesses passées à `Promise.all()` rejette, le bloc entier sera rejeté.

Cela peut être très utile. Imaginez que nous récupérions des informations pour alimenter dynamiquement en contenu une fonction de l'interface utilisateur de notre page. Dans de nombreux cas, il est préférable de recevoir toutes les données et de n'afficher que le contenu complet, plutôt que d'afficher des informations partielles.

Construisons un autre exemple pour montrer cela en action.

1.  Téléchargez une nouvelle copie de notre [modèle de page](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html), et mettez à nouveau un élément `<script>` juste avant la balise de fermeture `</body>`.
2.  Téléchargez nos fichiers sources ([coffee.jpg](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg), [tea.jpg](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/tea.jpg), et [description.txt](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/description.txt)), ou n'hésitez pas à y substituer les vôtres.
3.  Dans notre script, nous allons d'abord définir une fonction qui retourne les promesses que nous voulons envoyer à `Promise.all()`. Cela serait facile si nous voulions simplement exécuter le bloc `Promise.all()` en réponse à trois opérations `fetch()` qui se terminent. Nous pourrions simplement faire quelque chose comme :

    ```js
    let a = fetch(url1);
    let b = fetch(url2);
    let c = fetch(url3);

    Promise.all([a, b, c]).then(values => {
      ...
    });
    ```

    Lorsque la promesse est réalisée, les `values` (valeurs) passées dans le gestionnaire de réalisation contiendraient trois objets `Response`, un pour chacune des opérations `fetch()` qui se sont terminées.

    Cependant, nous ne voulons pas faire cela. Notre code ne se soucie pas de savoir quand les opérations `fetch()` sont effectuées. Au lieu de cela, ce que nous voulons, ce sont les données chargées. Cela signifie que nous voulons exécuter le bloc `Promise.all()` lorsque nous récupérons des blobs utilisables représentant les images, et une chaîne de texte utilisable. Nous pouvons écrire une fonction qui fait cela ; ajoutez ce qui suit à l'intérieur de votre élément `<script>` :

    ```js
    function fetchAndDecode(url, type) {
      return fetch(url).then(response => {
        if(!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        } else {
          if(type === 'blob') {
            return response.blob();
          } else if(type === 'text') {
            return response.text();
          }
        }
      })
      .catch(e => {
        console.log(
          `Il y a eu un problème avec votre opération de récupération de la ressource "${url}" : ` + e.message);
      });
    }
    ```

    Cela semble un peu complexe, alors nous allons le faire étape par étape :

    1.  Tout d'abord, nous définissons la fonction, en lui passant une URL et une chaîne représentant le type de ressource qu'elle va chercher.
    2.  À l'intérieur du corps de la fonction, nous avons une structure similaire à celle que nous avons vue dans le premier exemple — nous appelons la fonction `fetch()` pour récupérer la ressource à l'URL spécifiée, puis nous l'enchaînons sur une autre promesse qui renvoie le corps de réponse décodé (ou « lu »). Il s'agissait toujours de la méthode `blob()` dans l'exemple précédent.
    3.  Cependant, deux choses sont différentes ici :

        - Tout d'abord, la deuxième promesse que nous retournons est différente en fonction de la valeur `type`. À l'intérieur de la fonction de rappel `.then()`, nous incluons une simple déclaration `if ... else if` pour retourner une promesse différente selon le type de fichier que nous devons décoder (dans ce cas, nous avons le choix entre `blob` et `text`, mais il serait facile d'étendre cela pour traiter d'autres types également).
        - Deuxièmement, nous avons ajouté le mot-clé `return` avant l'appel `fetch()`. Cela a pour effet d'exécuter toute la chaîne, puis d'exécuter le résultat final (c'est-à-dire la promesse retournée par `blob()` ou `text()`) comme valeur de retour de la fonction que nous venons de définir. En effet, les instructions `return` font remonter les résultats au sommet de la chaîne.

    4.  À la fin du bloc, nous enchaînons sur un appel `.catch()`, pour gérer les cas d'erreur qui peuvent survenir avec l'une des promesses passées dans le tableau à `.all()`. Si l'une des promesses est rejetée, le bloc `.catch()` vous fera savoir laquelle avait un problème. Le bloc `.all()` (voir ci-dessous) s'exécutera quand même, mais il n'affichera pas les ressources qui ont eu des problèmes. Rappelez-vous que, une fois que vous avez traité la promesse avec un bloc `.catch()`, la promesse résultante est considérée comme résolue mais avec une valeur de `undefined` ; c'est pourquoi, dans ce cas, le bloc `.all()` sera toujours rempli. Si vous vouliez que le bloc `.all()` rejette, vous devriez plutôt enchaîner le bloc `.catch()` à la fin du `.all()`.

    Le code à l'intérieur du corps de la fonction est asynchrone et basé sur une promesse, donc en fait, la fonction entière agit comme une promesse — pratique.

4.  Ensuite, nous appelons notre fonction trois fois pour commencer le processus de récupération et de décodage des images et du texte et nous stockons chacune des promesses retournées dans une variable. Ajoutez le texte suivant sous votre code précédent :

    ```js
    let coffee = fetchAndDecode('coffee.jpg', 'blob');
    let tea = fetchAndDecode('tea.jpg', 'blob');
    let description = fetchAndDecode('description.txt', 'text');
    ```

5.  Ensuite, nous allons définir un bloc `Promesse.all()` pour exécuter un certain code uniquement lorsque les trois promesses stockées ci-dessus se sont réalisées avec succès. Pour commencer, ajoutez un bloc avec une fonction de rappel vide à l'intérieur de l'appel `.then()`, comme ceci :

    ```js
    Promise.all([coffee, tea, description]).then(values => {

    });
    ```

    Vous pouvez voir qu'elle prend un tableau contenant les promesses comme paramètre. La fonction de rappel `.then()` ne sera exécutée que lorsque les trois promesses seront résolues ; lorsque cela se produira, on lui transmettra un tableau contenant les résultats des promesses individuelles (c'est-à-dire les corps de réponse décodés), un peu comme suit \[coffee-results, tea-results, description-results].

6.  Enfin, ajoutez ce qui suit à l'intérieur de la fonction de rappel. Nous utilisons ici un code de synchronisation assez simple pour stocker les résultats dans des variables séparées (en créant des URL d'objets à partir des blobs), puis nous affichons les images et le texte sur la page.

    ```js
    console.log(values);
    // Stocke chaque valeur renvoyée par les promesses dans
    // des variables distinctes ; crée des URL d'objets à partir des blobs.
    let objectURL1 = URL.createObjectURL(values[0]);
    let objectURL2 = URL.createObjectURL(values[1]);
    let descText = values[2];

    // Affiche les images dans les éléments <img>
    let image1 = document.createElement('img');
    let image2 = document.createElement('img');
    image1.src = objectURL1;
    image2.src = objectURL2;
    document.body.appendChild(image1);
    document.body.appendChild(image2);

    // Affiche le texte d'un paragraphe
    let para = document.createElement('p');
    para.textContent = descText;
    document.body.appendChild(para);
    ```

7.  Sauvegardez et actualisez et vous devriez voir vos composants d'interface utilisateur chargés, bien que d'une manière peu attrayante !

Le code que nous avons fourni ici pour l'affichage des articles est assez rudimentaire, mais il fonctionne comme une explication pour le moment.

> **Note :** Si vous êtes bloqué, vous pouvez comparer votre version du code à la nôtre, pour voir à quoi elle est censée ressembler - [voir en direct](https://mdn.github.io/learning-area/javascript/asynchronous/promises/promise-all.html), et voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-all.html).

> **Note :** Si vous amélioriez ce code, vous pourriez vouloir boucler sur une liste d'éléments à afficher, en récupérant et en décodant chacun d'eux, puis boucler sur les résultats à l'intérieur de `Promise.all()`, en exécutant une fonction différente pour afficher chacun d'eux en fonction du type de code. Cela permettrait de fonctionner pour n'importe quel nombre d'éléments, pas seulement trois.
>
> De plus, vous pourriez déterminer quel est le type de fichier récupéré sans avoir besoin d'une propriété `type` explicite. Vous pourriez, par exemple, vérifier l'en-tête HTTP [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type) de la réponse dans chaque cas en utilisant [`response.headers.get("content-type")`](/fr/docs/Web/API/Headers/get), puis agir en conséquence.

## Exécution d'un code final après l'accomplissement/le rejet d'une promesse.

Il y aura des cas où vous voudrez exécuter un bloc de code final après la fin d'une promesse, qu'elle se soit réalisée ou rejetée. Auparavant, vous deviez inclure le même code dans les deux fonctions de rappel `.then()` et `.catch()`, par exemple :

```js
myPromise
.then(response => {
  doSomething(response);
  runFinalCode();
})
.catch(e => {
  returnError(e);
  runFinalCode();
});
```

Dans les navigateurs modernes plus récents, la méthode [`.finally()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) est disponible, et peut être enchaînée à la fin de votre chaîne de promesses régulière, ce qui vous permet de réduire les répétitions de code et de faire les choses de manière plus élégante. Le code ci-dessus peut maintenant être écrit comme suit :

```js
myPromise
.then(response => {
  doSomething(response);
})
.catch(e => {
  returnError(e);
})
.finally(() => {
  runFinalCode();
});
```

Pour un exemple réel, jetez un œil à notre [démonstration promesse-finally.html](https://mdn.github.io/learning-area/javascript/asynchronous/promises/promise-finally.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-finally.html)). Cela fonctionne de la même manière que la démo `Promesse.all()` que nous avons examinée dans la section ci-dessus, sauf que dans la fonction `fetchAndDecode()`, nous enchaînons un appel `finally()` à la fin de la chaîne :

```js
function fetchAndDecode(url, type) {
  return fetch(url).then(response => {
    if(!response.ok) {
      throw new Error(`Erreur HTTP ! statut : ${response.status}`);
    } else {
      if(type === 'blob') {
        return response.blob();
      } else if(type === 'text') {
        return response.text();
      }
    }
  })
  .catch(e => {
    console.log(`Il y a eu un problème avec votre opération de récupération de la ressource "${url}" : ` + e.message);
  })
  .finally(() => {
    console.log(`La tentative de récupération de "${url}" est terminée.`);
  });
}
```

Cela permet d'envoyer un simple message à la console pour nous dire quand chaque tentative de récupération est terminée.

> **Note :** `then()`/`catch()`/`finally()` est l'équivalent asynchrone de `try`/`catch`/`finally` en code synchrone.

## Construire vos propres promesses personnalisées

La bonne nouvelle est que, d'une certaine manière, vous avez déjà construit vos propres promesses. Lorsque vous avez enchaîné plusieurs promesses avec des blocs `.then()`, ou que vous les avez autrement combinées pour créer une fonctionnalité personnalisée, vous créez déjà vos propres fonctions asynchrones personnalisées basées sur des promesses. Prenez notre fonction `fetchAndDecode()` des exemples précédents, par exemple.

La combinaison de différentes API basées sur les promesses pour créer des fonctionnalités personnalisées est de loin la façon la plus courante dont vous ferez des choses personnalisées avec les promesses, et montre la flexibilité et la puissance de la base de la plupart des API modernes autour du même principe. Il existe toutefois un autre moyen.

### Utilisation du constructeur Promise()

Il est possible de construire vos propres promesses en utilisant le constructeur [`Promise()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise). La principale situation dans laquelle vous voudrez faire cela est lorsque vous avez du code basé sur une API asynchrone de la vieille école qui n'est pas basée sur les promesses, et que vous voulez promettre. Cela s'avère pratique lorsque vous avez besoin d'utiliser du code, des bibliothèques ou des frameworks existants, plus anciens, avec du code moderne basé sur les promesses.

Examinons un exemple simple pour vous aider à démarrer — ici, nous enveloppons un appel [`setTimeout()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) avec une promesse — cela exécute une fonction après deux secondes qui résout la promesse (en passant l'appel [`resolve()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)) avec une chaîne de caractères de "Succès ! ".

```js
let timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Succès !');
  }, 2000);
});
```

`resolve()` et `reject()` sont des fonctions que vous appelez pour réaliser ou rejeter la promesse nouvellement créée. Dans ce cas, la promesse se réalise avec une chaîne de caractères "Succès !".

Ainsi, lorsque vous appelez cette promesse, vous pouvez enchaîner un bloc `.then()` à la fin de celle-ci et on lui passera une chaîne de caractères "Succès !". Dans le code ci-dessous, nous alertons ce message :

```js
timeoutPromise
.then((message) => {
  alert(message);
})
```

ou même simplement

```js
timeoutPromise.then(alert);
```

Essayez [de l'exécuter en direct](https://mdn.github.io/learning-area/javascript/asynchronous/promises/custom-promise.html) pour voir le résultat (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise.html)).

L'exemple ci-dessus n'est pas très flexible - la promesse ne peut jamais s'accomplir qu'avec une seule chaîne de caractères, et elle n'a aucune sorte de condition [`reject()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) spécifiée (il est vrai que `setTimeout()` n'a pas vraiment de condition d'échec, donc cela n'a pas d'importance pour cet exemple).

> **Note :** Pourquoi `resolve()`, et pas `fulfill()` ? La réponse que nous vous donnerons, pour l'instant, est _c'est compliqué_.

### Rejeter une promesse personnalisée

Nous pouvons créer une promesse rejetée à l'aide de la méthode [`reject()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) — tout comme `resolve()`, celle-ci prend une seule valeur, mais dans ce cas, c'est la raison du rejet, c'est-à-dire l'erreur qui sera transmise dans le bloc `.catch()`.

Étendons l'exemple précédent pour avoir quelques conditions `reject()` ainsi que pour permettre de transmettre différents messages en cas de succès.

Prenez une copie de l'[exemple précédent](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise.html), et remplacez la définition de `timeoutPromise()` existante par celle-ci :

```js
function timeoutPromise(message, interval) {
  return new Promise((resolve, reject) => {
    if (message === '' || typeof message !== 'string') {
      reject('Le message est vide ou n'est pas une chaîne de caractères');
    } else if (interval < 0 || typeof interval !== 'number') {
      reject(`L'intervalle est négatif ou n'est pas un nombre`);
    } else {
      setTimeout(() => {
        resolve(message);
      }, interval);
    }
  });
};
```

Ici, nous passons deux arguments dans une fonction personnalisée - un message pour faire quelque chose avec, et l'intervalle de temps à passer avant de faire la chose. À l'intérieur de la fonction, nous renvoyons un nouvel objet `Promise` — l'invocation de la fonction renverra la promesse que nous voulons utiliser.

À l'intérieur du constructeur Promise, nous effectuons plusieurs vérifications dans des structures `if ... else` :

1.  Tout d'abord, nous vérifions si le message est approprié pour être alerté. Si c'est une chaîne de caractères vide ou pas une chaîne de caractères du tout, nous rejetons la promesse avec un message d'erreur approprié.
2.  Ensuite, nous vérifions si l'intervalle est une valeur d'intervalle appropriée. S'il est négatif ou n'est pas un nombre, nous rejetons la promesse avec un message d'erreur approprié.
3.  Enfin, si les paramètres semblent tous deux OK, nous résolvons la promesse avec le message spécifié après que l'intervalle spécifié se soit écoulé en utilisant `setTimeout()`.

Puisque la fonction `timeoutPromise()` renvoie un objet `Promise`, nous pouvons enchaîner `.then()`, `.catch()`, etc. sur elle pour faire usage de ses fonctionnalités. Utilisons-le maintenant - remplaçons l'utilisation précédente de `timeoutPromise` par celle-ci :

```js
timeoutPromise('Bonjour à tous !', 1000)
.then(message => {
   alert(message);
})
.catch(e => {
  console.log('Erreur : ' + e);
});
```

Lorsque vous enregistrez et exécutez le code tel quel, après une seconde, vous obtiendrez le message d'alerte. Essayez maintenant de définir le message sur une chaîne vide ou l'intervalle sur un nombre négatif, par exemple, et vous pourrez voir la promesse rejetée avec les messages d'erreur appropriés ! Vous pouvez également essayer de faire autre chose avec le message résolu plutôt que de simplement créer une alerte.

> **Note :** Vous pouvez trouver notre version de cet exemple sur GitHub sur [custom-promise2.html](https://mdn.github.io/learning-area/javascript/asynchronous/promises/custom-promise2.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise2.html)).

### Un exemple plus concret

L'exemple ci-dessus est resté volontairement simple pour rendre les concepts faciles à comprendre, mais il n'est pas vraiment très asynchrone. La nature asynchrone est essentiellement feinte en utilisant `setTimeout()`, bien qu'il montre quand même que les promesses sont utiles pour créer une fonction personnalisée avec un flux d'opérations raisonnable, une bonne gestion des erreurs, etc.

Un exemple que nous aimerions vous inviter à étudier, qui montre effectivement une application asynchrone utile du constructeur `Promise()`, est [la bibliothèque idb de Jake Archibald](https://github.com/jakearchibald/idb/). Celle-ci prend l'API [IndexedDB API](/fr/docs/Web/API/IndexedDB_API), qui est une API à l'ancienne basée sur des callbacks pour stocker et récupérer des données côté client, et vous permet de l'utiliser avec des promesses. Dans le code, vous verrez que le même type de techniques que nous avons évoqué plus haut est utilisé. Le bloc suivant convertit le modèle de requête de base utilisé par de nombreuses méthodes IndexedDB pour utiliser des promesses ([voir ce code, par exemple](https://github.com/jakearchibald/idb/blob/01082ad696eef05e9c913f55a17cda7b3016b12c/build/esm/wrap-idb-value.js#L30)).

## Conclusion

Les promesses sont un bon moyen de construire des applications asynchrones lorsque nous ne connaissons pas la valeur de retour d'une fonction ou le temps qu'elle prendra pour retourner une réponse. Elles permettent d'exprimer et de raisonner plus facilement sur des séquences d'opérations asynchrones sans callbacks profondément imbriqués, et elles supportent un style de gestion des erreurs qui est similaire à l'instruction synchrone `try...catch`.

Les promesses fonctionnent dans les dernières versions de tous les navigateurs modernes ; le seul endroit où la prise en charge des promesses posera problème est Opera Mini et IE11 et les versions antérieures.

Nous n'avons pas abordé toutes les fonctionnalités des promesses dans cet article, mais seulement les plus intéressantes et les plus utiles. Au fur et à mesure que vous vous familiariserez avec les promesses, vous découvrirez d'autres fonctionnalités et techniques.

La plupart des API Web modernes sont basées sur des promesses, vous devrez donc comprendre les promesses pour en tirer le meilleur parti. Parmi ces API, citons [WebRTC](/fr/docs/Web/API/WebRTC_API), [Web Audio API](/fr/docs/Web/API/Web_Audio_API), [MediaStream API](/fr/docs/Web/API/Media_Streams_API), et bien d'autres encore. Les promesses seront de plus en plus importantes au fil du temps, donc apprendre à les utiliser et à les comprendre est une étape importante dans l'apprentissage du JavaScript moderne.

## Voir aussi

- [`Promise()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Utilisation des promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
- [Nous avons un problème avec les promesses](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) (en) par Nolan Lawson

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}

## Dans ce module

- [Concepts généraux de programmation asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introduction au JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing)
- [JavaScript asynchrone coopératif : Délais et intervalles](/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Gérer les opérations asynchrones avec élégance grâce aux Promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- [Faciliter la programmation asynchrone avec async et await](/fr/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choisir la bonne approche](/fr/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
