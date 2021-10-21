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
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}</div>

<p><strong>Les promesses</strong> sont une fonctionnalité relativement nouvelle du langage JavaScript qui vous permet de reporter d'autres actions jusqu'à ce qu'une action précédente soit terminée, ou de répondre à son échec. Ceci est utile pour mettre en place une séquence d'opérations asynchrones afin qu'elles fonctionnent correctement. Cet article vous montre comment les promesses fonctionnent, comment vous les verrez utilisées avec les API Web, et comment écrire les vôtres.</p>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>Connaissances informatiques de base, compréhension raisonnable des principes fondamentaux de JavaScript.</td>
      </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Comprendre les promesses et savoir comment les utiliser.</td>
      </tr>
  </tbody>
</table>

<h2 id="what_are_promises">Que sont les promesses ?</h2>

<p>Nous avons examiné les <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">promesses (<code>Promise</code>)</a> brièvement dans le premier article du cours, mais ici nous allons les examiner de manière beaucoup plus approfondie.</p>

<p>Essentiellement, une promesse est un objet qui représente un état intermédiaire d'une opération - en fait, c'est une <em>promesse</em> qu'un résultat d'une certaine nature sera retourné à un moment donné dans le futur. Il n'y a aucune garantie du moment exact où l'opération se terminera et où le résultat sera renvoyé, mais il <em>est</em> une garantie que lorsque le résultat est disponible, ou que la promesse échoue, le code que vous fournissez sera exécuté afin de faire autre chose avec un résultat réussi, ou de gérer gracieusement un cas d'échec.</p>

<p>En général, vous êtes moins intéressé par le temps qu'une opération asynchrone prendra pour renvoyer son résultat (à moins bien sûr qu'elle ne prenne <em>beaucoup</em> trop de temps !), et plus intéressé par le fait de pouvoir répondre à son retour, quel que soit le moment. Et bien sûr, il est agréable que cela ne bloque pas le reste de l'exécution du code.</p>

<p>L'une des utilisations les plus courantes des promesses concerne les API web qui renvoient une promesse. Considérons une hypothétique application de chat vidéo. L'application dispose d'une fenêtre contenant une liste des amis de l'utilisateur, et un clic sur un bouton à côté d'un utilisateur lance un appel vidéo vers cet utilisateur.</p>

<p>Le gestionnaire de ce bouton appelle <a href="/fr/docs/Web/API/MediaDevices/getUserMedia"><code>getUserMedia()</code></a> afin d'avoir accès à la caméra et au microphone de l'utilisateur. Puisque <code>getUserMedia()</code> doit s'assurer que l'utilisateur a la permission d'utiliser ces dispositifs <em>et</em> lui demander quel microphone utiliser et quelle caméra utiliser (ou s'il s'agit d'un appel vocal uniquement, parmi d'autres options possibles), il peut bloquer jusqu'à ce que non seulement toutes ces décisions soient prises, mais aussi que la caméra et le microphone soient activés. En outre, l'utilisateur peut ne pas répondre immédiatement à ces demandes d'autorisation. Cela peut potentiellement prendre beaucoup de temps.</p>

<p>Puisque l'appel à <code>getUserMedia()</code> est effectué depuis le processus principal du navigateur, l'ensemble du navigateur est bloqué jusqu'à ce que <code>getUserMedia()</code> retourne une réponse ! Évidemment, ce n'est pas une option viable ; sans les promesses, tout dans le navigateur devient inutilisable jusqu'à ce que l'utilisateur décide ce qu'il faut faire de la caméra et du microphone. Ainsi, au lieu d'attendre l'utilisateur, d'obtenir l'activation des périphériques choisis et de retourner directement le <a href="/fr/docs/Web/API/MediaStream"><code>MediaStream</code></a> pour le flux créé à partir des sources sélectionnées, <code>getUserMedia()</code> retourne une <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>promesse</code></a> qui est résolue avec le <a href="/fr/docs/Web/API/MediaStream"><code>MediaStream</code></a> une fois qu'il est disponible.</p>

<p>Le code qu'utiliserait l'application de chat vidéo pourrait ressembler à ceci :</p>

<pre class="brush: js">function handleCallButton(evt) {
  setStatusMessage("Appel...");
  navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(chatStream =&gt; {
      selfViewElem.srcObject = chatStream;
      chatStream.getTracks().forEach(track =&gt; myPeerConnection.addTrack(track, chatStream));
      setStatusMessage("Connecté");
    }).catch(err =&gt; {
      setStatusMessage("Échec de la connexion");
    });
}
</pre>

<p>Cette fonction commence par utiliser une fonction appelée <code>setStatusMessage()</code> pour mettre à jour un affichage d'état avec le message "Appel...", indiquant qu'un appel est tenté.Il appelle ensuite <code>getUserMedia()</code>, demandant un flux qui a à la fois des pistes vidéo et audio, puis une fois que cela a été obtenu, configure un élément vidéo pour montrer le flux provenant de la caméra comme une "vue de soi", puis prend chacune des pistes du flux et les ajoute à la <a href="/fr/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a> <a href="/fr/docs/Web/API/WebRTC_API">WebRTC</a> représentant une connexion à un autre utilisateur.  Après cela, l'affichage de l'état est mis à jour pour indiquer "Connecté".</p>

<p>Si <code>getUserMedia()</code> échoue, le bloc <code>catch</code> s'exécute. Celui-ci utilise <code>setStatusMessage()</code> pour mettre à jour la case d'état afin d'indiquer qu'une erreur s'est produite.</p>

<p>La chose importante ici est que l'appel <code>getUserMedia()</code> revient presque immédiatement, même si le flux de la caméra n'a pas encore été obtenu. Même si la fonction <code>handleCallButton()</code> est déjà retournée au code qui l'a appelée, lorsque <code>getUserMedia()</code> a fini de travailler, elle appelle le gestionnaire que vous fournissez. Tant que l'application ne suppose pas que le flux a commencé, elle peut continuer à fonctionner.</p>

<div class="note">
  <p><strong>Note :</strong> Vous pouvez en apprendre davantage sur ce sujet quelque peu avancé, si cela vous intéresse, dans l'article <a href="/fr/docs/Web/API/WebRTC_API/Signaling_and_video_calling">L'essentiel du WebRTC</a>. Un code similaire à celui-ci, mais beaucoup plus complet, est utilisé dans cet exemple.</p>
</div>

<h2 id="the_trouble_with_callbacks">Le problème des fonctions de rappel</h2>

<p>Pour bien comprendre pourquoi les promesses sont une bonne chose, il est utile de repenser aux anciennes fonctions de rappel (<i>callback</i>) et de comprendre pourquoi elles sont problématiques.</p>

<p>Prenons l'exemple de la commande d'une pizza. Il y a certaines étapes que vous devez franchir pour que votre commande soit réussie, et cela n'a pas vraiment de sens d'essayer de les exécuter dans le désordre, ou dans l'ordre mais avant que chaque étape précédente ne soit tout à fait terminée :</p>

<ol>
  <li>Vous choisissez les garnitures que vous voulez. Cela peut prendre un certain temps si vous êtes indécis, et peut échouer si vous n'arrivez pas à vous décider, ou si vous décidez de prendre un curry à la place.</li>
  <li>Vous passez ensuite votre commande. Le retour d'une pizza peut prendre un certain temps et peut échouer si le restaurant ne dispose pas des ingrédients nécessaires à sa cuisson.</li>
  <li>Vous récupérez ensuite votre pizza et la mangez. Cela peut échouer si, par exemple, vous avez oublié votre portefeuille et ne pouvez pas payer la pizza !</li>
</ol>

<p>Avec l'ancien modèle de <a href="/fr/docs/Learn/JavaScript/Asynchronous/Introducing#callbacks">rappels</a>, une représentation en pseudo-code de la fonctionnalité ci-dessus pourrait ressembler à quelque chose comme ceci :</p>

<pre class="brush: js">chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);</pre>

<p>Cela est désordonné et difficile à lire (souvent appelé « <a href="http://callbackhell.com/"><i>callback hell</i></a> »), nécessite que le <code>failureCallback()</code> soit appelé plusieurs fois (une fois pour chaque fonction imbriquée), avec d'autres problèmes en plus.</p>

<h3 id="improvements_with_promises">Améliorations avec des promesses</h3>

<p>Les promesses facilitent grandement l'écriture, l'analyse et l'exécution de situations telles que celle décrite ci-dessus. Si nous avions représenté le pseudo-code ci-dessus en utilisant des promesses asynchrones à la place, nous aurions obtenu quelque chose comme ceci :</p>

<pre class="brush: js">chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings);
})
.then(function(order) {
  return collectOrder(order);
})
.then(function(pizza) {
  eatPizza(pizza);
})
.catch(failureCallback);</pre>

<p>C'est bien mieux - il est plus facile de voir ce qui se passe, nous n'avons besoin que d'un seul bloc <code>.catch()</code> pour gérer toutes les erreurs, cela ne bloque pas le processus principal (nous pouvons donc continuer à jouer à des jeux vidéo en attendant que la pizza soit prête à être collectée), et chaque opération a la garantie d'attendre que les opérations précédentes soient terminées avant de s'exécuter. Nous sommes en mesure d'enchaîner plusieurs actions asynchrones pour qu'elles se produisent les unes après les autres de cette façon, car chaque bloc <code>.then()</code> renvoie une nouvelle promesse qui se résout lorsque le bloc <code>.then()</code> a fini de s'exécuter. Astucieux, non ?</p>

<p>En utilisant les fonctions flèches, vous pouvez simplifier encore plus le code :</p>

<pre class="brush: js">chooseToppings()
.then(toppings =&gt;
  placeOrder(toppings)
)
.then(order =&gt;
  collectOrder(order)
)
.then(pizza =&gt;
  eatPizza(pizza)
)
.catch(failureCallback);</pre>

<p>Ou encore ça :</p>

<pre class="brush: js">chooseToppings()
.then(toppings =&gt; placeOrder(toppings))
.then(order =&gt; collectOrder(order))
.then(pizza =&gt; eatPizza(pizza))
.catch(failureCallback);</pre>

<p>Cela fonctionne car avec les fonctions flèches <code>() =&gt; x</code> est un raccourci valide pour <code>() =&gt; { return x ; }</code>.</p>

<p>Vous pourriez même le faire ainsi, puisque les fonctions ne font que passer leurs arguments directement, et qu'il n'y a donc pas besoin de cette couche supplémentaire de fonctions :</p>

<pre class="brush: js">chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);</pre>

<p>Cependant, la lecture n'est pas aussi facile et cette syntaxe peut ne pas être utilisable si vos blocs sont plus complexes que ce que nous avons montré ici.</p>

<div class="note">
  <p><strong>Note :</strong> Vous pouvez apporter d'autres améliorations avec la syntaxe <code>async</code>/<code>await</code>, que nous aborderons dans le prochain article.</p>
</div>

<p>Dans leur forme la plus basique, les promesses sont similaires aux écouteurs d'événements, mais avec quelques différences :</p>

<ul>
  <li>Une promesse ne peut réussir ou échouer qu'une seule fois. Elle ne peut pas réussir ou échouer deux fois et elle ne peut pas passer du succès à l'échec ou vice versa une fois l'opération terminée.</li>
  <li>Si une promesse a réussi ou échoué et que vous ajoutez plus tard une de rappel de réussite/échec, la bonne fonction de rappel sera appelée, même si l'événement a eu lieu plus tôt.</li>
</ul>

<h2 id="explaining_basic_promise_syntax_a_real_example">Explication de la syntaxe de base des promesses : exemple concret</h2>

<p>Il est important de comprendre les promesses, car la plupart des API Web modernes les utilisent pour les fonctions qui exécutent des tâches potentiellement longues. Pour utiliser les technologies Web modernes, vous devrez utiliser des promesses. Plus loin dans ce chapitre, nous verrons comment écrire votre propre promesse, mais pour l'instant, nous allons nous pencher sur quelques exemples simples que vous rencontrerez dans les API Web.</p>

<p>Dans le premier exemple, nous allons utiliser la méthode <a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch"><code>fetch()</code></a> pour récupérer une image sur le web, la méthode <a href="/fr/docs/Web/API/Body/blob"><code>blob()</code></a> pour transformer le contenu brut du corps de la réponse fetch en un objet <a href="/fr/docs/Web/API/Blob"><code>Blob</code></a>, puis afficher ce blob à l'intérieur d'un élément <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a>. Cet exemple est très similaire à celui que nous avons examiné dans le <a href="/fr/docs/Learn/JavaScript/Asynchronous/Introducing#asynchronous_javascript">premier article</a>, mais nous le ferons un peu différemment au fur et à mesure que nous vous ferons construire votre propre code basé sur des promesses.</p>

<div class="note">
  <p><strong>Note :</strong> L'exemple suivant ne fonctionnera pas si vous l'exécutez directement à partir du fichier (c'est-à-dire via une URL <code>file://</code>). Vous devez l'exécuter via un <a href="/fr/docs/Learn/Common_questions/set_up_a_local_testing_server">serveur de test local</a>, ou utiliser une solution en ligne telle que <a href="https://glitch.com/">Glitch</a> ou <a href="/fr/docs/Learn/Common_questions/Using_Github_pages">les pages GitHub</a>.</p>
</div>

<ol>
  <li>
    <p>Tout d'abord, téléchargez notre <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html">modèle HTML simple</a> et le <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg">fichier image</a> que nous allons récupérer.</p>
  </li>
  <li>
    <p>Ajoutez un élément <a href="/fr/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> au bas de l'élément HTML <a href="/fr/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a>.</p>
  </li>
  <li>
    <p>À l'intérieur de votre élément <a href="/fr/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a>, ajoutez la ligne suivante :</p>
    <pre class="brush: js">let promise = fetch('coffee.jpg');</pre>
    <p>Cela appelle la méthode <code>fetch()</code>, en lui passant en paramètre l'URL de l'image à récupérer sur le réseau. Cette méthode peut également prendre un objet d'options comme second paramètre facultatif, mais nous n'utilisons que la version la plus simple pour le moment. Nous stockons l'objet promesse retourné par <code>fetch()</code> à l'intérieur d'une variable appelée <code>promise</code>. Comme nous l'avons dit précédemment, cet objet représente un état intermédiaire qui n'est initialement ni un succès ni un échec - le terme officiel pour une promesse dans cet état est <strong>en attente</strong> (<i>pending</i> en anglais).</p>
  </li>
  <li>
    <p>Pour répondre à l'achèvement réussi de l'opération lorsque cela se produit (dans ce cas, lorsqu'une <a href="/fr/docs/Web/API/Response">réponse</a> est retournée), nous invoquons la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then"><code>.then()</code></a> de l'objet promesse. La fonction de rappel à l'intérieur du bloc <code>.then()</code> s'exécute uniquement lorsque l'appel de la promesse se termine avec succès et retourne l'objet <a href="/fr/docs/Web/API/Response"><code>Response</code></a> — en langage de promesse, lorsqu'elle a été <strong>remplie</strong> (<i>fullfilled</i> en anglais). On lui passe l'objet <a href="/fr/docs/Web/API/Response"><code>Response</code></a> retourné en tant que paramètre.</p>
    <div class="note">
      <p><strong>Note :</strong> Le fonctionnement d'un bloc <code>.then()</code> est similaire à celui de l'ajout d'un écouteur d'événements à un objet à l'aide de <code>AddEventListener()</code>. Il ne s'exécute pas avant qu'un événement ne se produise (lorsque la promesse se réalise). La différence la plus notable est qu'un <code>.then()</code> ne s'exécutera qu'une fois à chaque fois qu'il sera utilisé, alors qu'un écouteur d'événements pourrait être invoqué plusieurs fois.</p>
    </div>
    <p>Nous exécutons immédiatement la méthode <code>blob()</code> sur cette réponse pour nous assurer que le corps de la réponse est entièrement téléchargé, et lorsqu'il est disponible, le transformer en un objet <code>Blob</code> avec lequel nous pouvons faire quelque chose. Le résultat de cette méthode est retourné comme suit :</p>
    <pre class="brush: js">response =&gt; response.blob()</pre>
    <p>qui est un raccourci de</p>
    <pre class="brush: js">function(response) {
  return response.blob();
}</pre>
    <p>Malheureusement, nous devons faire un peu plus que cela. Les promesses de récupération n'échouent pas sur les erreurs 404 ou 500 - seulement sur quelque chose de catastrophique comme une panne de réseau. Au lieu de cela, elles réussissent, mais avec la propriété <a href="/fr/docs/Web/API/Response/ok"><code>response.ok</code></a> définie à <code>false</code>. Pour produire une erreur sur un 404, par exemple, nous devons vérifier la valeur de <code>response.ok</code>, et si c'est <code>false</code>, lancer une erreur, ne renvoyant le blob que si elle est à <code>true</code>. Cela peut être fait comme suit - ajoutez les lignes suivantes sous votre première ligne de JavaScript.</p>
    <pre class="brush: js">let promise2 = promise.then(response =&gt; {
  if (!response.ok) {
    throw new Error(`erreur HTTP ! statut : ${response.status}`);
  } else {
    return response.blob();
  }
});</pre>
  </li>
  <li>
    <p>Chaque appel à la méthode <code>.then()</code> crée une nouvelle promesse. Ceci est très utile ; parce que la méthode <code>blob()</code> renvoie également une promesse, nous pouvons manipuler l'objet <code>Blob</code> qu'elle renvoie sur l'accomplissement en invoquant la méthode <code>.then()</code> de la seconde promesse. Parce que nous voulons faire quelque chose d'un peu plus complexe au blob que de simplement exécuter une seule méthode sur lui et renvoyer le résultat, nous devrons envelopper le corps de la fonction dans des accolades cette fois (sinon, ça lancera une erreur).</p>
    <p>Ajoutez ce qui suit à la fin de votre code :</p>
    <pre class="brush: js">let promise3 = promise2.then(myBlob =&gt; {
})</pre>
  </li>
  <li>
    <p>Maintenant, remplissons le corps de la fonction de rappel <code>.then()</code>. Ajoutez les lignes suivantes à l'intérieur des accolades :</p>
    <pre class="brush: js">let objectURL = URL.createObjectURL(myBlob);
let image = document.createElement('img');
image.src = objectURL;
document.body.appendChild(image);</pre>
    <p>Nous exécutons ici la méthode <a href="/fr/docs/Web/API/URL/createObjectURL"><code>URL.createObjectURL()</code></a>, en lui passant en paramètre le <code>Blob</code> renvoyé lors de la réalisation de la deuxième promesse. Cela permettra de renvoyer une URL pointant vers l'objet. Ensuite, nous créons un élément <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a>, définissons son attribut <code>src</code> comme étant égal à l'URL de l'objet et l'ajoutons au DOM, de sorte que l'image s'affiche sur la page !</p>
  </li>
</ol>

<p>Si vous enregistrez le fichier HTML que vous venez de créer et le chargez dans votre navigateur, vous verrez que l'image s'affiche dans la page comme prévu. Bon travail !</p>

<div class="note">
  <p><strong>Note :</strong> Vous remarquerez probablement que ces exemples sont quelque peu artificiels. Vous pourriez tout simplement vous passer de toute la chaîne <code>fetch()</code> et <code>blob()</code>, et simplement créer un élément <code>&lt;img&gt;</code> et définir la valeur de son attribut <code>src</code> à l'URL du fichier image, <code>coffee.jpg</code>. Nous avons toutefois choisi cet exemple parce qu'il démontre les promesses d'une manière simple et agréable, plutôt que pour sa pertinence dans le monde réel.</p>
</div>

<h3 id="responding_to_failure">Réagir à un échec</h3>

<p>Il manque quelque chose — actuellement, il n'y a rien pour gérer explicitement les erreurs si l'une des promesses <strong>échoue</strong> (<i>rejects</i>, en anglais). Nous pouvons ajouter la gestion des erreurs en exécutant la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch"><code>.catch()</code></a> de la promesse précédente. Ajoutez ceci maintenant :</p>

<pre class="brush: js">let errorCase = promise3.catch(e =&gt; {
  console.log('Il y a eu un problème avec votre opération de récupération : ' + e.message);
});</pre>

<p>Pour voir cela en action, essayez de mal orthographier l'URL de l'image et de recharger la page. L'erreur sera signalée dans la console des outils de développement de votre navigateur.</p>

<p>Cela ne fait pas beaucoup plus que si vous ne preniez pas la peine d'inclure le bloc <code>.catch()</code> du tout, mais pensez-y - cela nous permet de contrôler la gestion des erreurs exactement comme nous le voulons. Dans une application réelle, votre bloc <code>.catch()</code> pourrait réessayer de récupérer l'image, ou afficher une image par défaut, ou demander à l'utilisateur de fournir une URL d'image différente, ou autre.</p>

<div class="note">
  <p><strong>Note :</strong> Vous pouvez voir <a href="https://mdn.github.io/learning-area/javascript/asynchronous/promises/simple-fetch.html">notre version de l'exemple en direct</a> (voir également son <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch.html">code source</a>).</p>
</div>

<h3 id="chaining_the_blocks_together">Enchaîner les blocs</h3>

<p>C'est une façon très manuscrite d'écrire cela ; nous l'avons délibérément fait pour vous aider à comprendre clairement ce qui se passe. Comme nous l'avons montré plus haut dans l'article, vous pouvez enchaîner les blocs <code>.then()</code> (et aussi les blocs <code>.catch()</code>). Le code ci-dessus pourrait aussi être écrit comme ceci (voir aussi <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch-chained.html">simple-fetch-chained.html</a> sur GitHub) :</p>

<pre class="brush: js">fetch('coffee.jpg')
.then(response =&gt; {
  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`);
  } else {
    return response.blob();
  }
})
.then(myBlob =&gt; {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e =&gt; {
  console.log('Il y a eu un problème avec votre opération de récupération : ' + e.message);
});</pre>

<p>Gardez à l'esprit que la valeur renvoyée par une promesse remplie devient le paramètre transmis à la fonction de rappel du bloc <code>.then()</code> suivant.</p>

<div class="note">
  <p><strong>Note :</strong> Les blocs <code>.then()</code>/<code>.catch()</code> dans les promesses sont essentiellement l'équivalent asynchrone d'un bloc <code><a href="/fr/docs/Web/JavaScript/Reference/Statements/try...catch">try...catch</a></code> dans du code synchrone. Gardez à l'esprit que le <code>try...catch</code> synchrone ne fonctionnera pas dans du code asynchrone.</p>
</div>

<h2 id="promise_terminology_recap">Récapitulatif de la terminologie des promesses</h2>

<p>Il y avait beaucoup à couvrir dans la section ci-dessus, alors revenons-y rapidement pour vous donner un <a href="#promise_terminology_recap" >court guide que vous pouvez mettre en favoris</a> et utiliser pour vous rafraîchir la mémoire à l'avenir. Vous devriez également revoir la section ci-dessus quelques fois de plus pour vous assurer que ces concepts sont bien assimilés.</p>

<ol>
  <li>Lorsqu'une promesse est créée, elle n'est ni dans un état de réussite ni dans un état d'échec. On dit qu'elle est <strong>en attente</strong>.</li>
  <li>Lorsqu'une promesse est retournée, on dit qu'elle est <strong>résolue</strong>.
    <ol>
      <li>Une promesse résolue avec succès est dite <strong>remplie</strong>. Elle retourne une valeur, à laquelle on peut accéder en enchaînant un bloc <code>.then()</code> à la fin de la chaîne de promesses. La fonction de rappel à l'intérieur du bloc <code>.then()</code> contiendra la valeur de retour de la promesse.</li>
      <li>Une promesse résolue non aboutie est dite <strong>rejetée</strong>. Elle renvoie une <strong>raison</strong>, un message d'erreur indiquant pourquoi la promesse a été rejetée. On peut accéder à cette raison en enchaînant un bloc <code>.catch()</code> à la fin de la chaîne de promesses.</li>
    </ol>
  </li>
</ol>

<h2 id="running_code_in_response_to_multiple_promises_fulfilling">Exécution du code en réponse à des promesses multiples remplies</h2>

<p>L'exemple ci-dessus nous a montré certaines des bases réelles de l'utilisation des promesses. Voyons maintenant quelques fonctionnalités plus avancées. Pour commencer, enchaîner des processus pour qu'ils se réalisent l'un après l'autre, c'est très bien, mais que faire si vous voulez exécuter du code seulement après que tout un tas de promesses aient <em>toutes</em> été remplies ?</p>

<p>Vous pouvez le faire avec la méthode statique ingénieusement nommée <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"><code>Promise.all()</code></a>. Celle-ci prend un tableau de promesses comme paramètre d'entrée et retourne un nouvel objet <code>Promise</code> qui ne se réalisera que si et quand <em>toutes</em> les promesses du tableau se réaliseront. Cela ressemble à quelque chose comme ceci :</p>

<pre class="brush: js">Promise.all([a, b, c]).then(values =&gt; {
  ...
});</pre>

<p>Si elles se réalisent toutes, la fonction de callback du bloc <code>.then()</code> enchaîné se verra passer un tableau contenant tous ces résultats en paramètre. Si l'une des promesses passées à <code>Promise.all()</code> rejette, le bloc entier sera rejeté.</p>

<p>Cela peut être très utile. Imaginez que nous récupérions des informations pour alimenter dynamiquement en contenu une fonction de l'interface utilisateur de notre page. Dans de nombreux cas, il est préférable de recevoir toutes les données et de n'afficher que le contenu complet, plutôt que d'afficher des informations partielles.</p>

<p>Construisons un autre exemple pour montrer cela en action.</p>

<ol>
  <li>
    <p>Téléchargez une nouvelle copie de notre <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html">modèle de page</a>, et mettez à nouveau un élément <code>&lt;script&gt;</code> juste avant la balise de fermeture <code>&lt;/body&gt;</code>.</p>
  </li>
  <li>
    <p>Téléchargez nos fichiers sources (<a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg">coffee.jpg</a>, <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/tea.jpg">tea.jpg</a>, et <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/description.txt">description.txt</a>), ou n'hésitez pas à y substituer les vôtres.</p>
  </li>
  <li>
    <p>Dans notre script, nous allons d'abord définir une fonction qui retourne les promesses que nous voulons envoyer à <code>Promise.all()</code>. Cela serait facile si nous voulions simplement exécuter le bloc <code>Promise.all()</code> en réponse à trois opérations <code>fetch()</code> qui se terminent. Nous pourrions simplement faire quelque chose comme :</p>
    <pre class="brush: js">let a = fetch(url1);
let b = fetch(url2);
let c = fetch(url3);

Promise.all([a, b, c]).then(values =&gt; {
  ...
});</pre>
    <p>Lorsque la promesse est réalisée, les <code>values</code> (valeurs) passées dans le gestionnaire de réalisation contiendraient trois objets <code>Response</code>, un pour chacune des opérations <code>fetch()</code> qui se sont terminées.</p>
    <p>Cependant, nous ne voulons pas faire cela. Notre code ne se soucie pas de savoir quand les opérations <code>fetch()</code> sont effectuées. Au lieu de cela, ce que nous voulons, ce sont les données chargées. Cela signifie que nous voulons exécuter le bloc <code>Promise.all()</code> lorsque nous récupérons des blobs utilisables représentant les images, et une chaîne de texte utilisable. Nous pouvons écrire une fonction qui fait cela ; ajoutez ce qui suit à l'intérieur de votre élément <code>&lt;script&gt;</code> :</p>
    <pre class="brush: js">function fetchAndDecode(url, type) {
  return fetch(url).then(response =&gt; {
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
  .catch(e =&gt; {
    console.log(
      `Il y a eu un problème avec votre opération de récupération de la ressource "${url}" : ` + e.message);
  });
}</pre>
    <p>Cela semble un peu complexe, alors nous allons le faire étape par étape :</p>
    <ol>
      <li>Tout d'abord, nous définissons la fonction, en lui passant une URL et une chaîne représentant le type de ressource qu'elle va chercher.</li>
      <li>À l'intérieur du corps de la fonction, nous avons une structure similaire à celle que nous avons vue dans le premier exemple — nous appelons la fonction <code>fetch()</code> pour récupérer la ressource à l'URL spécifiée, puis nous l'enchaînons sur une autre promesse qui renvoie le corps de réponse décodé (ou « lu »). Il s'agissait toujours de la méthode <code>blob()</code> dans l'exemple précédent.</li>
      <li>Cependant, deux choses sont différentes ici :
        <ul>
          <li>Tout d'abord, la deuxième promesse que nous retournons est différente en fonction de la valeur <code>type</code>. À l'intérieur de la fonction de rappel <code>.then()</code>, nous incluons une simple déclaration <code>if ... else if</code> pour retourner une promesse différente selon le type de fichier que nous devons décoder (dans ce cas, nous avons le choix entre <code>blob</code> et <code>text</code>, mais il serait facile d'étendre cela pour traiter d'autres types également).</li>
          <li>Deuxièmement, nous avons ajouté le mot-clé <code>return</code> avant l'appel <code>fetch()</code>. Cela a pour effet d'exécuter toute la chaîne, puis d'exécuter le résultat final (c'est-à-dire la promesse retournée par <code>blob()</code> ou <code>text()</code>) comme valeur de retour de la fonction que nous venons de définir. En effet, les instructions <code>return</code> font remonter les résultats au sommet de la chaîne.</li>
        </ul>
      </li>
      <li>
        <p>À la fin du bloc, nous enchaînons sur un appel <code>.catch()</code>, pour gérer les cas d'erreur qui peuvent survenir avec l'une des promesses passées dans le tableau à <code>.all()</code>. Si l'une des promesses est rejetée, le bloc <code>.catch()</code> vous fera savoir laquelle avait un problème. Le bloc <code>.all()</code> (voir ci-dessous) s'exécutera quand même, mais il n'affichera pas les ressources qui ont eu des problèmes. Rappelez-vous que, une fois que vous avez traité la promesse avec un bloc <code>.catch()</code>, la promesse résultante est considérée comme résolue mais avec une valeur de <code>undefined</code> ; c'est pourquoi, dans ce cas, le bloc <code>.all()</code> sera toujours rempli. Si vous vouliez que le bloc <code>.all()</code> rejette, vous devriez plutôt enchaîner le bloc <code>.catch()</code> à la fin du <code>.all()</code>.</p>
      </li>
    </ol>
    <p>Le code à l'intérieur du corps de la fonction est asynchrone et basé sur une promesse, donc en fait, la fonction entière agit comme une promesse — pratique.</p>
  </li>
  <li>
    <p>Ensuite, nous appelons notre fonction trois fois pour commencer le processus de récupération et de décodage des images et du texte et nous stockons chacune des promesses retournées dans une variable. Ajoutez le texte suivant sous votre code précédent :</p>
    <pre class="brush: js">let coffee = fetchAndDecode('coffee.jpg', 'blob');
let tea = fetchAndDecode('tea.jpg', 'blob');
let description = fetchAndDecode('description.txt', 'text');</pre>
  </li>
  <li>
    <p>Ensuite, nous allons définir un bloc <code>Promesse.all()</code> pour exécuter un certain code uniquement lorsque les trois promesses stockées ci-dessus se sont réalisées avec succès. Pour commencer, ajoutez un bloc avec une fonction de rappel vide à l'intérieur de l'appel <code>.then()</code>, comme ceci :</p>
    <pre class="brush: js">Promise.all([coffee, tea, description]).then(values =&gt; {

});</pre>
    <p>Vous pouvez voir qu'elle prend un tableau contenant les promesses comme paramètre. La fonction de rappel <code>.then()</code> ne sera exécutée que lorsque les trois promesses seront résolues ; lorsque cela se produira, on lui transmettra un tableau contenant les résultats des promesses individuelles (c'est-à-dire les corps de réponse décodés), un peu comme suit [coffee-results, tea-results, description-results].</p>
  </li>
  <li>
    <p>Enfin, ajoutez ce qui suit à l'intérieur de la fonction de rappel. Nous utilisons ici un code de synchronisation assez simple pour stocker les résultats dans des variables séparées (en créant des URL d'objets à partir des blobs), puis nous affichons les images et le texte sur la page.</p>
    <pre class="brush: js">console.log(values);
// Stocke chaque valeur renvoyée par les promesses dans
// des variables distinctes ; crée des URL d'objets à partir des blobs.
let objectURL1 = URL.createObjectURL(values[0]);
let objectURL2 = URL.createObjectURL(values[1]);
let descText = values[2];

// Affiche les images dans les éléments &lt;img&gt;
let image1 = document.createElement('img');
let image2 = document.createElement('img');
image1.src = objectURL1;
image2.src = objectURL2;
document.body.appendChild(image1);
document.body.appendChild(image2);

// Affiche le texte d'un paragraphe
let para = document.createElement('p');
para.textContent = descText;
document.body.appendChild(para);</pre>
  </li>
  <li>
    <p>Sauvegardez et actualisez et vous devriez voir vos composants d'interface utilisateur chargés, bien que d'une manière peu attrayante !</p>
  </li>
</ol>

<p>Le code que nous avons fourni ici pour l'affichage des articles est assez rudimentaire, mais il fonctionne comme une explication pour le moment.</p>

<div class="note">
  <p><strong>Note :</strong> Si vous êtes bloqué, vous pouvez comparer votre version du code à la nôtre, pour voir à quoi elle est censée ressembler - <a href="https://mdn.github.io/learning-area/javascript/asynchronous/promises/promise-all.html">voir en direct</a>, et voir le <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-all.html">code source</a>.</p>
</div>

<div class="note">
  <p><strong>Note :</strong> Si vous amélioriez ce code, vous pourriez vouloir boucler sur une liste d'éléments à afficher, en récupérant et en décodant chacun d'eux, puis boucler sur les résultats à l'intérieur de <code>Promise.all()</code>, en exécutant une fonction différente pour afficher chacun d'eux en fonction du type de code. Cela permettrait de fonctionner pour n'importe quel nombre d'éléments, pas seulement trois.</p>
  <p>De plus, vous pourriez déterminer quel est le type de fichier récupéré sans avoir besoin d'une propriété <code>type</code> explicite. Vous pourriez, par exemple, vérifier l'en-tête HTTP <a href="/fr/docs/Web/HTTP/Headers/Content-Type"><code>Content-Type</code></a> de la réponse dans chaque cas en utilisant <a href="/fr/docs/Web/API/Headers/get"><code>response.headers.get("content-type")</code></a>, puis agir en conséquence.</p>
</div>

<h2 id="running_some_final_code_after_a_promise_fulfillsrejects">Exécution d'un code final après l'accomplissement/le rejet d'une promesse.</h2>

<p>Il y aura des cas où vous voudrez exécuter un bloc de code final après la fin d'une promesse, qu'elle se soit réalisée ou rejetée. Auparavant, vous deviez inclure le même code dans les deux fonctions de rappel <code>.then()</code> et <code>.catch()</code>, par exemple :</p>

<pre class="brush: js">myPromise
.then(response =&gt; {
  doSomething(response);
  runFinalCode();
})
.catch(e =&gt; {
  returnError(e);
  runFinalCode();
});</pre>

<p>Dans les navigateurs modernes plus récents, la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally"><code>.finally()</code></a> est disponible, et peut être enchaînée à la fin de votre chaîne de promesses régulière, ce qui vous permet de réduire les répétitions de code et de faire les choses de manière plus élégante. Le code ci-dessus peut maintenant être écrit comme suit :</p>

<pre class="brush: js">myPromise
.then(response =&gt; {
  doSomething(response);
})
.catch(e =&gt; {
  returnError(e);
})
.finally(() =&gt; {
  runFinalCode();
});</pre>

<p>Pour un exemple réel, jetez un œil à notre <a href="https://mdn.github.io/learning-area/javascript/asynchronous/promises/promise-finally.html">démonstration promesse-finally.html</a> (voir le <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-finally.html">code source</a>). Cela fonctionne de la même manière que la démo <code>Promesse.all()</code> que nous avons examinée dans la section ci-dessus, sauf que dans la fonction <code>fetchAndDecode()</code>, nous enchaînons un appel <code>finally()</code> à la fin de la chaîne :</p>

<pre class="brush: js">function fetchAndDecode(url, type) {
  return fetch(url).then(response =&gt; {
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
  .catch(e =&gt; {
    console.log(`Il y a eu un problème avec votre opération de récupération de la ressource "${url}" : ` + e.message);
  })
  .finally(() =&gt; {
    console.log(`La tentative de récupération de "${url}" est terminée.`);
  });
}</pre>

<p>Cela permet d'envoyer un simple message à la console pour nous dire quand chaque tentative de récupération est terminée.</p>

<div class="note">
  <p><strong>Note :</strong> <code>then()</code>/<code>catch()</code>/<code>finally()</code> est l'équivalent asynchrone de <code>try</code>/<code>catch</code>/<code>finally</code> en code synchrone.</p>
</div>

<h2 id="building_your_own_custom_promises">Construire vos propres promesses personnalisées</h2>

<p>La bonne nouvelle est que, d'une certaine manière, vous avez déjà construit vos propres promesses. Lorsque vous avez enchaîné plusieurs promesses avec des blocs <code>.then()</code>, ou que vous les avez autrement combinées pour créer une fonctionnalité personnalisée, vous créez déjà vos propres fonctions asynchrones personnalisées basées sur des promesses. Prenez notre fonction <code>fetchAndDecode()</code> des exemples précédents, par exemple.</p>

<p>La combinaison de différentes API basées sur les promesses pour créer des fonctionnalités personnalisées est de loin la façon la plus courante dont vous ferez des choses personnalisées avec les promesses, et montre la flexibilité et la puissance de la base de la plupart des API modernes autour du même principe. Il existe toutefois un autre moyen.</p>

<h3 id="using_the_promise_constructor">Utilisation du constructeur Promise()</h3>

<p>Il est possible de construire vos propres promesses en utilisant le constructeur <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise()</code></a>. La principale situation dans laquelle vous voudrez faire cela est lorsque vous avez du code basé sur une API asynchrone de la vieille école qui n'est pas basée sur les promesses, et que vous voulez promettre. Cela s'avère pratique lorsque vous avez besoin d'utiliser du code, des bibliothèques ou des frameworks existants, plus anciens, avec du code moderne basé sur les promesses.</p>

<p>Examinons un exemple simple pour vous aider à démarrer — ici, nous enveloppons un appel <a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout"><code>setTimeout()</code></a> avec une promesse — cela exécute une fonction après deux secondes qui résout la promesse (en passant l'appel <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve"><code>resolve()</code></a>) avec une chaîne de caractères de "Succès ! ".</p>

<pre class="brush: js">let timeoutPromise = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; {
    resolve('Succès !');
  }, 2000);
});</pre>

<p><code>resolve()</code> et <code>reject()</code> sont des fonctions que vous appelez pour réaliser ou rejeter la promesse nouvellement créée. Dans ce cas, la promesse se réalise avec une chaîne de caractères "Succès !".</p>

<p>Ainsi, lorsque vous appelez cette promesse, vous pouvez enchaîner un bloc <code>.then()</code> à la fin de celle-ci et on lui passera une chaîne de caractères "Succès !". Dans le code ci-dessous, nous alertons ce message :</p>

<pre class="brush: js">timeoutPromise
.then((message) =&gt; {
  alert(message);
})</pre>

<p>ou même simplement</p>

<pre class="brush: js">timeoutPromise.then(alert);</pre>

<p>Essayez <a href="https://mdn.github.io/learning-area/javascript/asynchronous/promises/custom-promise.html">de l'exécuter en direct</a> pour voir le résultat (voir aussi le <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise.html">code source</a>).</p>

<p>L'exemple ci-dessus n'est pas très flexible - la promesse ne peut jamais s'accomplir qu'avec une seule chaîne de caractères, et elle n'a aucune sorte de condition <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject"><code>reject()</code></a> spécifiée (il est vrai que <code>setTimeout()</code> n'a pas vraiment de condition d'échec, donc cela n'a pas d'importance pour cet exemple).</p>

<div class="note">
  <p><strong>Note :</strong> Pourquoi <code>resolve()</code>, et pas <code>fulfill()</code> ? La réponse que nous vous donnerons, pour l'instant, est <em>c'est compliqué</em>.</p>
</div>

<h3 id="rejecting_a_custom_promise">Rejeter une promesse personnalisée</h3>

<p>Nous pouvons créer une promesse rejetée à l'aide de la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject"><code>reject()</code></a> — tout comme <code>resolve()</code>, celle-ci prend une seule valeur, mais dans ce cas, c'est la raison du rejet, c'est-à-dire l'erreur qui sera transmise dans le bloc <code>.catch()</code>.</p>

<p>Étendons l'exemple précédent pour avoir quelques conditions <code>reject()</code> ainsi que pour permettre de transmettre différents messages en cas de succès.</p>

<p>Prenez une copie de l'<a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise.html">exemple précédent</a>, et remplacez la définition de <code>timeoutPromise()</code> existante par celle-ci :</p>

<pre class="brush: js">function timeoutPromise(message, interval) {
  return new Promise((resolve, reject) =&gt; {
    if (message === '' || typeof message !== 'string') {
      reject('Le message est vide ou n'est pas une chaîne de caractères');
    } else if (interval &lt; 0 || typeof interval !== 'number') {
      reject(`L'intervalle est négatif ou n'est pas un nombre`);
    } else {
      setTimeout(() =&gt; {
        resolve(message);
      }, interval);
    }
  });
};</pre>

<p>Ici, nous passons deux arguments dans une fonction personnalisée - un message pour faire quelque chose avec, et l'intervalle de temps à passer avant de faire la chose. À l'intérieur de la fonction, nous renvoyons un nouvel objet <code>Promise</code> — l'invocation de la fonction renverra la promesse que nous voulons utiliser.</p>

<p>À l'intérieur du constructeur Promise, nous effectuons plusieurs vérifications dans des structures <code>if ... else</code> :</p>

<ol>
  <li>Tout d'abord, nous vérifions si le message est approprié pour être alerté. Si c'est une chaîne de caractères vide ou pas une chaîne de caractères du tout, nous rejetons la promesse avec un message d'erreur approprié.</li>
  <li>Ensuite, nous vérifions si l'intervalle est une valeur d'intervalle appropriée. S'il est négatif ou n'est pas un nombre, nous rejetons la promesse avec un message d'erreur approprié.</li>
  <li>Enfin, si les paramètres semblent tous deux OK, nous résolvons la promesse avec le message spécifié après que l'intervalle spécifié se soit écoulé en utilisant <code>setTimeout()</code>.</li>
</ol>

<p>Puisque la fonction <code>timeoutPromise()</code> renvoie un objet <code>Promise</code>, nous pouvons enchaîner <code>.then()</code>, <code>.catch()</code>, etc. sur elle pour faire usage de ses fonctionnalités. Utilisons-le maintenant - remplaçons l'utilisation précédente de <code>timeoutPromise</code> par celle-ci :</p>

<pre class="brush: js">timeoutPromise('Bonjour à tous !', 1000)
.then(message =&gt; {
   alert(message);
})
.catch(e =&gt; {
  console.log('Erreur : ' + e);
});</pre>

<p>Lorsque vous enregistrez et exécutez le code tel quel, après une seconde, vous obtiendrez le message d'alerte. Essayez maintenant de définir le message sur une chaîne vide ou l'intervalle sur un nombre négatif, par exemple, et vous pourrez voir la promesse rejetée avec les messages d'erreur appropriés ! Vous pouvez également essayer de faire autre chose avec le message résolu plutôt que de simplement créer une alerte.</p>

<div class="note">
  <p><strong>Note :</strong> Vous pouvez trouver notre version de cet exemple sur GitHub sur <a href="https://mdn.github.io/learning-area/javascript/asynchronous/promises/custom-promise2.html">custom-promise2.html</a> (voir aussi le <a href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise2.html">code source</a>).</p>
</div>

<h3 id="a_more_real-world_example">Un exemple plus concret</h3>

<p>L'exemple ci-dessus est resté volontairement simple pour rendre les concepts faciles à comprendre, mais il n'est pas vraiment très asynchrone. La nature asynchrone est essentiellement feinte en utilisant <code>setTimeout()</code>, bien qu'il montre quand même que les promesses sont utiles pour créer une fonction personnalisée avec un flux d'opérations raisonnable, une bonne gestion des erreurs, etc.</p>

<p>Un exemple que nous aimerions vous inviter à étudier, qui montre effectivement une application asynchrone utile du constructeur <code>Promise()</code>, est <a href="https://github.com/jakearchibald/idb/">la bibliothèque idb de Jake Archibald</a>. Celle-ci prend l'API <a href="/fr/docs/Web/API/IndexedDB_API">IndexedDB API</a>, qui est une API à l'ancienne basée sur des callbacks pour stocker et récupérer des données côté client, et vous permet de l'utiliser avec des promesses. Dans le code, vous verrez que le même type de techniques que nous avons évoqué plus haut est utilisé. Le bloc suivant convertit le modèle de requête de base utilisé par de nombreuses méthodes IndexedDB pour utiliser des promesses (<a href="https://github.com/jakearchibald/idb/blob/01082ad696eef05e9c913f55a17cda7b3016b12c/build/esm/wrap-idb-value.js#L30">voir ce code, par exemple</a>).</p>

<h2 id="conclusion">Conclusion</h2>

<p>Les promesses sont un bon moyen de construire des applications asynchrones lorsque nous ne connaissons pas la valeur de retour d'une fonction ou le temps qu'elle prendra pour retourner une réponse. Elles permettent d'exprimer et de raisonner plus facilement sur des séquences d'opérations asynchrones sans callbacks profondément imbriqués, et elles supportent un style de gestion des erreurs qui est similaire à l'instruction synchrone <code>try...catch</code>.</p>

<p>Les promesses fonctionnent dans les dernières versions de tous les navigateurs modernes ; le seul endroit où la prise en charge des promesses posera problème est Opera Mini et IE11 et les versions antérieures.</p>

<p>Nous n'avons pas abordé toutes les fonctionnalités des promesses dans cet article, mais seulement les plus intéressantes et les plus utiles. Au fur et à mesure que vous vous familiariserez avec les promesses, vous découvrirez d'autres fonctionnalités et techniques.</p>

<p>La plupart des API Web modernes sont basées sur des promesses, vous devrez donc comprendre les promesses pour en tirer le meilleur parti. Parmi ces API, citons <a href="/fr/docs/Web/API/WebRTC_API">WebRTC</a>, <a href="/fr/docs/Web/API/Web_Audio_API">Web Audio API</a>, <a href="/fr/docs/Web/API/Media_Streams_API">MediaStream API</a>, et bien d'autres encore. Les promesses seront de plus en plus importantes au fil du temps, donc apprendre à les utiliser et à les comprendre est une étape importante dans l'apprentissage du JavaScript moderne.</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise()</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Guide/Using_promises">Utilisation des promesses</a></li>
  <li><a href="https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html">Nous avons un problème avec les promesses</a> <small>(en)</small> par Nolan Lawson</li>
</ul>

<p>{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}</p>

<h2 id="in_this_module">Dans ce module</h2>

<ul>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Concepts">Concepts généraux de programmation asynchrone</a></li>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Introducing">Introduction au JavaScript asynchrone</a></li>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals">JavaScript asynchrone coopératif : Délais et intervalles</a></li>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Promises">Gérer les opérations asynchrones avec élégance grâce aux Promesses</a></li>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Async_await">Faciliter la programmation asynchrone avec async et await</a></li>
  <li><a href="/fr/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach">Choisir la bonne approche</a></li>
</ul>
