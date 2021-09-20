---
title: Utiliser les évènements envoyés par le serveur
slug: Web/API/Server-sent_events/Using_server-sent_events
tags:
  - Advanced
  - Communication
  - DOM
  - Guide
  - SSE
  - Server Sent Events
  - Server-sent events
  - messaging
translation_of: Web/API/Server-sent_events/Using_server-sent_events
---
<p>{{DefaultAPISidebar("Server Sent Events")}}</p>
<p>Développer une application web qui utilise des <a href="/fr/docs/Web/API/Server-sent_events">évènements envoyés par le serveur</a> (<i>server-sent events</i> en anglais) est relativement simple. Côté serveur, on aura besoin d'un bout de code qui puisse transmettre des évènements à l'application web ; côté client, le fonctionnement est quasi identique à celui qu'on utilise pour les <a href="/fr/docs/Web/API/WebSockets_API">websockets</a> et notamment la gestion d'évènements entrants. Il s'agit d'une connexion unidirectionnelle : on ne peut pas envoyer d'évènements du client vers le serveur.</p>

<h2 id="receiving_events_from_the_server">Recevoir des évènements du serveur</h2>

<p>L'API des évènements serveur est exposée par l'interface <a href="/fr/docs/Web/API/EventSource"><code>EventSource</code></a> ; pour ouvrir une connexion vers le serveur afin de commencer à recevoir des évènements de celui-ci, on crée un nouvel objet <code>EventSource</code>, en spécifiant l'URL d'un script côté serveur qui va générer les évènements. Par exemple :</p>

<pre class="brush: js">const evtSource = new EventSource("ssedemo.php");
</pre>

<p>Si le script qui génère les évènements est hébergé sur une origine différente, le nouvel objet <code>EventSource</code> doit être créé en spécifiant à la fois l'URL et un dictionnaire d'options. Par exemple, en supposant que le script client est sur example.com :</p>

<pre class="brush: js">const evtSource = new EventSource("//api.example.com/ssedemo.php", { withCredentials: true } );</pre>

<p>Une fois que la source d'évènement a été instanciée, on peut écouter les messages provenant du serveur en attachant un gestionnaire d'évènement pour <a href="/fr/docs/Web/API/MessageEvent"><code>message</code></a> :</p>

<pre class="brush: js">evtSource.onmessage = function(event) {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = "message: " + event.data;
  eventList.appendChild(newElement);
}
</pre>

<p>Ce code écoute les messages entrants (plus précisément, les notifications venant du serveur qui n'ont pas de champ <code>event</code> attaché) et ajoute le texte des messages à une liste dans le contenu HTML du document.</p>

<p>On peut aussi écouter les évènements avec <code>addEventListener()</code> :</p>

<pre class="brush: js">evtSource.addEventListener("ping", function(event) {
  const newElement = document.createElement("li");
  const time = JSON.parse(event.data).time;
  newElement.textContent = "ping at " + time;
  eventList.appendChild(newElement);
});
</pre>

<p>Ce fragment de code est similaire au précédent, mais sera appelé automatiquement si le serveur envoie un message dont le champ <code>event</code> est <code>ping</code> ; il analysera alors le JSON dans le champ <code>data</code> et l'affichera.</p>

<div class="warning">
  <p><strong>Attention :</strong> <strong>Lorsque HTTP/2 n'est pas utilisé</strong>, les évènements serveurs sont limités par le nombre maximal de connexion ouvertes, notamment quand on a plusieurs onglets ouverts. La limite est fixée <em>par le navigateur</em> et vaut 6 pour chaque origine (voir les bugs <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=275955">Chrome</a> et <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=906896">Firefox</a>). On pourra avoir 6 connexions pour les évènements serveurs parmi tous les onglets ouverts sur <code>www.example1.com</code>, 6 autres pour tous les onglets sur <code>www.example2.com</code> (voir cette réponse <a href="https://stackoverflow.com/a/5326159/1905229">Stack Overflow</a>). Avec HTTP/2, le nombre de flux HTTP simultanés est négocié entre le serveur et le client et vaut 100 par défaut.</p>
</div>

<h2 id="sending_events_from_the_server">Envoyer un évènement depuis le serveur</h2>

<p>Le script côté serveur qui envoie les évènements doit répondre en utilisant le type MIME <code>text/event-stream</code>. Chaque notification est envoyée sous la forme d'un bloc de texte se terminant par une paire de caractères saut de ligne (<code>\n</code>). Pour plus de détails sur le format du flux d'évènements, voir <a href="#event_stream_format">la section ci-après</a>.</p>

<p>Voici le code <a href="/fr/docs/Glossary/PHP">PHP</a> que nous utilisons pour notre exemple :</p>

<pre class="brush: php">date_default_timezone_set("America/New_York");
header("Cache-Control: no-cache");
header("Content-Type: text/event-stream");

$counter = rand(1, 10);
while (true) {
  // Chaque seconde, on envoie un évènement "ping".

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // Envoi d'un message simple à fréquence aléatoire.

  $counter--;

  if (!$counter) {
    echo 'data: Message envoyé à ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  ob_end_flush();
  flush();

  // On ferme la boucle si le client a interrompu la connexion
  // (par exemple en fermant la page)

  if ( connection_aborted() ) break;

  sleep(1);
}
</pre>

<p>Ce code génère un évènement de type « ping » à chaque seconde. La donnée de chaque évènement est un objet JSON contenant un horodatage ISO 8601 qui correspond à l'heure à laquelle l'évènement a été généré. À des intervalles aléatoires, un message simple (sans type d'évènement) est envoyé.</p>
<p>La boucle s'exécute indépendamment du statut de la connexion, on a donc une vérification pour terminer l'exécution si la connexion a été terminée.</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez trouver un exemple complet utilisant le code ci-dessus sur GitHub : voir <a href="https://github.com/mdn/dom-examples/tree/master/server-sent-events">Démonstration d'évènements serveur avec PHP.</a></p>
</div>

<h2 id="error_handling">Gestion des erreurs</h2>

<p>Quand un problème survient (tel qu'un délai de réponse dépassé ou une erreur liée au <a href="/fr/docs/Web/HTTP/CORS">contrôle d'accès</a>), un évènement <code>error</code> est généré. Vous pouvez traiter ces cas d'erreur en implémentant la fonction de rappel <code>onerror</code> sur l'objet <code>EventSource</code>.</p>

<pre class="brush: js">evtSource.onerror = function(err) {
  console.error("EventSource failed:", err);
};
</pre>

<h2 id="closing_event_streams">Fermer les flux d'évènements</h2>

<p>Par défaut, si la connexion entre le client et le serveur est rompue, elle sera relancée. Il est possible de la fermer explicitement à l'aide de la méthode <code>.close()</code>.</p>

<pre class="brush: js">evtSource.close();</pre>

<h2 id="event_stream_format">Format du flux d'évènements</h2>

<p>Le flux d'évènements est un simple flux de données de texte, qui doit être encodé en <a href="/fr/docs/Glossary/UTF-8">UTF-8</a>. Les messages dans le flux d'évènements sont séparés par une paire de sauts de ligne. Un caractère deux-points « : » en début de ligne représente un commentaire, et est ignoré.</p>

<div class="note">
<p><strong>Note :</strong> Une ligne de commentaire peut être utilisée pour empêcher les connexions d'expirer. Un serveur peut envoyer périodiquement des commentaires afin de garder la connexion ouverte.</p>
</div>

<p>Chaque message consiste en une ou plusieurs lignes de texte décrivant les champs de ce message. Chaque champ est représenté par le nom du champ, suivi d'un « : », suivi des données de texte pour la valeur de ce champ.</p>

<h3 id="fields">Champs</h3>

<p>Chaque message reçu contient un ou plusieurs de ces champs, un par ligne  :</p>

<dl>
 <dt><code>event</code></dt>
 <dd>Une chaîne identifiant le type d'évènement décrit. S'il est spécifié, un évènement sera envoyé dans le navigateur à l'écouteur défini pour l'évènement spécifié. Le code source de l'application doit utiliser <code>addEventListener()</code> pour écouter des évènements nommés. Le gestionnaire <code>onmessage</code> est appelé si aucun nom d'évènement n'est spécifié dans un message.</dd>
 <dt><code>data</code></dt>
 <dd>Le champ de données du message. Lorsque l'<code>EventSource</code> reçoit plusieurs lignes de message consécutives commençant par <code>data:</code>, <a href="https://www.w3.org/TR/eventsource/#dispatchMessage">il les concatène</a>, en ajoutant un caractère saut de ligne entre chacune d'elles. Les sauts de ligne en fin de message sont supprimés.</dd>
 <dt><code>id</code></dt>
 <dd>L'identifiant d'évènement, qui sera mémorisé comme valeur d'identifiant du dernier évènement de l'objet <code>EventSource</code>.</dd>
 <dt><code>retry</code></dt>
 <dd>Le délai de reconnexion à utiliser lors de la tentative d'envoi de l'évènement. Il doit être un nombre entier, spécifiant le temps de reconnexion en millisecondes. Si une valeur non entière est spécifiée, le champ est ignoré.</dd>
</dl>

<p>Tous les autres noms de champs sont ignorés.</p>

<div class="note">
<p><strong>Note :</strong> Si une ligne ne contient aucun caractère deux-points, la ligne entière est considérée comme le nom du champ, avec un contenu vide.</p>
</div>

<h3 id="examples">Exemples</h3>

<h4 id="data-only_messages">Messages contenant uniquement des données</h4>

<p>Dans l'exemple suivant, trois messages sont envoyés. Le premier est simplement un commentaire, car il débute par un caractère deux-points. Comme mentionné précédemment, cela peut être utile pour maintenir la connexion si des messages doivent être transmis de façon irrégulière.</p>

<p>Le deuxième message contient un champ <code>data</code> avec la valeur <code>"du texte"</code>. Le troisième message contient un champ <code>data</code> avec la valeur <code>"un autre message\nsur deux lignes"</code>. On notera le caractère saut de ligne dans la valeur.</p>

<pre class="brush: bash">: this is a test stream

data: du texte

data: un autre message
data: sur deux lignes
</pre>

<h4 id="named_events">Évènements nommés</h4>

<p>Cet exemple envoie une série d'évènements nommés. Chacun a un nom d'évènement spécifié par le champ <code>event</code>, et un champ <code>data</code> dont la valeur est une chaîne JSON appropriée avec les données nécessaires au client pour réagir à l'évènement. Le champ <code>data</code> peut évidemment contenir n'importe quelles données textuelles, il n'est pas obligatoirement au format JSON.</p>

<pre class="brush: bash">event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
</pre>

<h4 id="mixing_and_matching">Mélanger les types de message</h4>

<p>Il n'est pas obligatoire d'utiliser uniquement des messages sans nom ou des évènements nommés. Vous pouvez mélanger les deux dans un même flux d'évènements.</p>

<pre class="brush: bash">event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Ici un message système quelconque qui sera utilisé
data: pour accomplir une tâche.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}</pre>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.EventSource")}}</p>
