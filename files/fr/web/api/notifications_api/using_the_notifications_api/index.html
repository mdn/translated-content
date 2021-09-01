---
title: Utilisation de l'API Notifications
slug: Web/API/Notifications_API/Using_the_Notifications_API
translation_of: Web/API/Notifications_API/Using_the_Notifications_API
original_slug: Web/API/notification/Using_Web_Notifications
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p>L'<a href="/fr/docs/Web/API/Notifications_API">API Notifications</a> permet à une application ou à une page web d'envoyer des notifications affichées en dehors de la page par le système sous-jacent. Cela permet aux applications web d'envoyer des informations aux utilisatrices et utilisateurs même lorsque l'application est en veille ou en arrière-plan. Dans cet article, nous verrons les bases de cette API afin de vous permettre de l'utiliser dans vos propres applications.</p>

<p>Généralement, le système sous-jacent utilisé pour les notifications est celui du système d'exploitation. Voyez par exemple comment votre appareil mobile ou ordinateur affiche certaines notifications.</p>

<p><img alt="Une capture d'écran d'Android avec trois notifications." src="android-notification.png"></p>

<p>Le système de notification du système d'exploitation variera selon la plateforme et le navigateur mais ce n'est pas un problème en soi : l'API Notifications a été conçue de façon suffisamment générique pour être compatible avec la plupart des systèmes de notification.</p>

<h2 id="examples">Exemples</h2>

<p>Un des cas d'usage parmi les plus évidents pour les notifications est un client mail web ou une application de messagerie instantanée qui notifie dès qu'un nouveau message a été reçu, y compris lorsqu'on utilise l'appareil pour autre chose avec une autre application. De nombreux exemples existent pour ce cas, <a href="https://slack.com/">Slack</a> en est un parmi d'autres.</p>

<p>Nous avons écrit un exemple concret : une application pour gérer des listes de trucs à faire (« <i lang="en">to-do</i> ») pour vous donner une meilleure idée de la façon dont les notifications web peuvent être utilisées. Les données sont stockées localement avec <a href="/fr/docs/Web/API/IndexedDB_API">IndexedDB</a> et les utilisateurs sont notifiés lorsque les tâches arrivent à échéance grâce aux notifications système. <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">Téléchargez le code de cette application</a>, ou <a href="https://mdn.github.io/to-do-notifications/">testez l'application en <i lang="en">live</i></a>.</p>

<h2 id="requesting_permission">Demander la permission</h2>

<p>Avant qu'une application puisse envoyer une notification, l'utilisatrice ou l'utilisateur doit lui accorder le droit de le faire. Il s'agit d'un prérequis courant pour les API qui doivent interagir en dehors d'une page web : l'utilisatrice ou l'utilisateur doit, au moins une fois, explicitement accorder la permission à l'application d'afficher des notifications. La personne contrôle ainsi quels sites ou applications sont autorisés à afficher des notifications.</p>

<p>En raison d'abus des notifications par le passé, les équipes des navigateurs web ont commencé à mettre en place des stratégies pour limiter ce problème. Dans la pratique, vous ne devriez demander la permission à une personne uniquement après que celle-ci a interagi avec votre site/application (par exemple en ayant cliqué sur un bouton). Il ne s'agit pas seulement d'une bonne pratique (on ne devrait pas ennuyer les utilisatrices et utilisateurs avec de trop nombreuses notifications indésirées) mais d'une méthode qui sera implémentée par les différents navigateurs : Firefox le fait depuis Firefox 72 et Safari le fait également depuis quelque temps.</p>

<p>De plus, pour Chrome et Firefox, il n'est pas possible de demander la permission d'afficher des notifications à moins que le site soit servi dans un contexte sécurisé (c'est-à-dire avec HTTPS) et il n'est plus possible de demander une telle permission depuis une <a href="/fr/docs/Web/HTML/Element/iframe"><code>&lt;iframe&gt;</code></a> d'une origine tierce.</p>

<h3 id="checking_current_permission_status">Vérifier l'état de la permission</h3>

<p>Vous pouvez vérifier si la permission a déjà été accordée ou non grâce à la propriété en lecture seule <a href="/fr/docs/Web/API/notification/permission"><code>Notification.permission</code></a>. Cette dernière peut avoir l'une de ces trois valeurs :</p>

<dl>
 <dt><code>default</code></dt>
 <dd>La permission n'a pas encore été demandée à l'utilisatrice ou l'utilisateur, les notifications ne seront pas affichées.</dd>
 <dt><code>granted</code></dt>
 <dd>La permission d'afficher des notifications a été accordée après que la demande a été affichée.</dd>
 <dt><code>denied</code></dt>
 <dd>La permission d'afficher des notifications a été explicitement refusée.</dd>
</dl>

<h3 id="getting_permission">Obtenir la permission</h3>

<p>Si la permission n'a pas encore été accordée, l'application devra utiliser la méthode <a href="/fr/docs/Web/API/notification/requestPermission"><code>Notification.requestPermission()</code></a> afin de la demander.  Une version très basique consiste à inclure :</p>

<pre class="brush: js">Notification.requestPermission().then(function(result) {
  console.log(result);
});</pre>

<p>Cela utilise la version de la méthode sous forme de promesse. Si vous souhaitez ou avez besoin de prendre en charge les versions antérieures, vous pourrez avoir besoin de version sous forme d'une fonction de rappel (<i lang="en">callback</i>) :</p>

<pre class="brush: js">Notification.requestPermission();</pre>

<p>Cette version accepte en paramètre une fonction de rappel qui sera appelée une fois que l'utilisatrice ou l'utilisateur aura répondu à la demande de permission.</p>

<h3 id="example">Exemple</h3>

<p>Dans notre application de démonstration, nous avons inclus un bouton « Activer les notifications » qui, lorsqu'il est pressé, demande la permission pour l'application.</p>

<pre class="brush: html">&lt;button id="enable"&gt;Activer les notifications&lt;/button&gt;</pre>

<p>Cliquer sur ce bouton déclenche l'appel à la fonction <code>askNotificationPermission()</code> :</p>

<pre class="brush: js">function askNotificationPermission() {
  // La fonction qui sert effectivement à demander la permission
  function handlePermission(permission) {
    // On affiche ou non le bouton en fonction de la réponse
    if(Notification.permission === 'denied' || Notification.permission === 'default') {
      notificationBtn.style.display = 'block';
    } else {
      notificationBtn.style.display = 'none';
    }
  }

  // Vérifions si le navigateur prend en charge les notifications
  if (!('Notification' in window)) {
    console.log("Ce navigateur ne prend pas en charge les notifications.");
  } else {
    if(checkNotificationPromise()) {
      Notification.requestPermission()
      .then((permission) =&gt; {
        handlePermission(permission);
      })
    } else {
      Notification.requestPermission(function(permission) {
        handlePermission(permission);
      });
    }
  }
}</pre>

<p>Commençons par jeter un œil au deuxième bloc de code : vous verrez qu'on commence par vérifier la prise en charge de l'API Notifications. Si celle-ci est bien disponible, on regarde si la version à base de promesses pour <code>Notification.requestPermission()</code> est prise en charge. Si c'est le cas, on utilise cette version (prise en charge partout à l'exception de Safari) et sinon, on utilise l'ancienne version avec le <i lang="en">callback</i> (prise en charge par Safari).</p>

<p>Pour éviter la duplication du code, nous avons stocké quelques lignes dans la fonction <code>handlePermission()</code> qui correspond au premier bloc de ce fragment de code. Dans cette fonction, on définit explicitement la valeur de <code>Notification.permission</code> (certaines anciennes versions de Chrome avaient un bug et ne réalisaient pas cette initialisation automatiquement) puis on affiche ou on masque le bouton selon que la permission a déjà été demandée ou non. On ne veut pas afficher le bouton si la permission a déjà été accordée, en revanche, si elle a été déclinée, on veut permettre à l'utilisatrice ou à l'utilisateur de changer d'avis plus tard.</p>

<div class="note">
<p><strong>Note :</strong> Avant Chrome 37, Chrome ne permettait pas d'appeler <a href="/fr/docs/Web/API/notification/requestPermission"><code>Notification.requestPermission()</code></a> dans le gestionnaire d'évènements <code>load</code> (voir <a href="https://code.google.com/p/chromium/issues/detail?id=274284">le bug 274284</a>).</p>
</div>

<h3 id="feature-detecting_the_requestpermission_promise">Détecter la prise en charge de requestPermission() en promesse</h3>

<p>Plus haut, nous avons dit vérifier la prise en charge du navigateur pour la version de <code>Notification.requestPermission()</code> avec les promesses. Pour cela, nous avons utilisé :</p>

<pre class="brush: js">function checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch(e) {
      return false;
    }

    return true;
  }</pre>

<p>Cela permet de vérifier la présence d'une méthode <code>.then()</code> sur <code>requestPermission()</code>. Si une telle fonction est présente, on continue et on renvoie <code>true</code>. Sinon, on renvoie <code>false</code> dans le bloc de code <code>catch() {}</code>.</p>

<h2 id="creating_a_notification">Créer une notification</h2>

<p>Pour créer une notification, on utilisera le constructeur <a href="/fr/docs/Web/API/notification"><code>Notification</code></a>. Ce constructeur attend un titre à afficher au sein de la notification et permet d'utiliser différentes options pour améliorer la notification comme <a href="/fr/docs/Web/API/notification/icon"><code>une icône</code></a> ou un texte (<a href="/fr/docs/Web/API/notification/body"><code>body</code></a>).</p>

<p>Par exemple, dans notre application de démonstration, on utilise le fragment de code suivant pour créer une notification lorsque c'est nécessaire (ce fragment se trouve dans la fonction <code>createNotification()</code>) :</p>

<pre class="brush: js">const img = '/to-do-notifications/img/icon-128.png';
const text = 'Coucou ! Votre tâche "' + titre + '" arrive maintenant à échéance.';
const notification = new Notification('Liste de trucs à faire', { body: text, icon: img });</pre>

<h2 id="closing_notifications">Fermer les notifications</h2>

<p>On utilisera la méthode <a href="/fr/docs/Web/API/notification/close"><code>close()</code></a> afin de retirer une notification qui n'est plus pertinente (par exemple parce que la personne l'a déjà lue sur la page web s'il s'agit d'une messagerie ou, dans le cas d'un lecteur de musique, si la chanson en cours de lecture a déjà changé). La plupart des navigateurs effacent les notifications après un certain délai  (généralement autour de 4 secondes) mais ça ne devrait pas être un souci particulier, car cette tâche est souvent gérée par l'utilisateur ou l'agent utilisateur. La fermeture peut également être gérée par le système d'exploitation et les utilisatrices et utilisateurs doivent avoir la main sur ce comportement. D'anciennes versions de Chrome ne retiraient pas les automatiquement les notifications et vous pouvez donc utiliser un <a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout"><code>setTimeout()</code></a> uniquement pour ces versions historiques.</p>

<pre class="brush: js">const n = new Notification('Une super chanson');
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // L'onglet est désormais visible et la notification n'est plus pertinente
    // on peut la fermer
    n.close();
  }
});
</pre>

<div class="note">
<p><strong>Note :</strong> Cette API ne devrait pas être utilisée pour retirer la notification de l'écran après un délai donné car elle supprimera également la notification de la liste des notifications et empêchera toute interaction avec celle-ci après qu'elle a initialement été affichée.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Lorsque vous recevez un évènement <code>close</code>, il n'y a aucune garantie que celui-ci provienne de l'utilisatrice ou de l'utilisateur. Cela correspond à la spécification qui indique : « lorsqu'une notification est fermée, que ce soit par la plateforme sous-jacente ou par l'utilisateur, l'étape de fermeture correspondante doit être exécutée. ».</p>
</div>

<h2 id="notification_events">Évènements relatifs aux notifications</h2>

<p>Quatre évènements sont déclenchés sur une instance de <a href="/fr/docs/Web/API/notification"><code>Notification</code></a> :</p>

<dl>
 <dt><code>click</code></dt>
 <dd>Déclenché lorsque la personne clique sur la notification.</dd>
 <dt><code>close</code></dt>
 <dd>Déclenché lorsque la notification a été fermée.</dd>
 <dt><code>error</code></dt>
 <dd>Déclenché si une erreur se produit avec la notification. Généralement, cela a lieu lorsqu'il y a un problème d'affichage.</dd>
 <dt><code>show</code></dt>
 <dd>Déclenché lorsque la notification est affichée.</dd>
</dl>

<p>Ces évènements peuvent être suivis avec les gestionnaires d'évènement <a href="/fr/docs/Web/API/notification/onclick"><code>onclick</code></a>, <a href="/fr/docs/Web/API/notification/onclose"><code>onclose</code></a>, <a href="/fr/docs/Web/API/notification/onerror"><code>onerror</code></a>, et <a href="/fr/docs/Web/API/notification/onshow"><code>onshow</code></a>. <a href="/fr/docs/Web/API/notification"><code>Notification</code></a> héritant également de <a href="/fr/docs/Web/API/EventTarget"><code>EventTarget</code></a>, il est aussi possible d'utiliser la méthode <a href="/fr/docs/Web/API/EventTarget/addEventListener"><code>addEventListener()</code></a>.</p>

<h2 id="replacing_existing_notifications">Remplacer les notifications existantes</h2>

<p>Il est généralement peu souhaitable de recevoir de nombreuses notifications sur une courte période. Par exemple, que se passerait-il si une messagerie envoyait une notification pour chaque message reçu alors qu'une discussion est en cours ? Pour éviter de submerger l'utilisatrice ou l'utilisateur avec de trop nombreuses notifications, il est possible de modifier les notifications en attente en remplaçant une ou plusieurs notifications avec une nouvelle notification à jour.</p>

<p>Pour cela, on pourra ajouter une balise à toute nouvelle notification. Si une notification existante possède la balise correspondante et qu'elle n'a pas encore été affichée, la nouvelle notification remplacera la précédente. Si une notification avec la même balise a déjà été affichée, elle est fermée et la nouvelle notification est affichée.</p>

<h3 id="tag_example">Exemple d'utilisation des balises</h3>

<p>Prenons le fragment HTML qui suit :</p>

<pre class="brush: html">&lt;button&gt;Envoyez une notification !&lt;/button&gt;</pre>

<p>Il est possible de gérer plusieurs notifications ainsi :</p>

<pre class="brush: js">window.addEventListener('load', function () {
  const button = document.getElementsByTagName('button')[0];

  button.addEventListener('click', function () {
    // Si l'utilisateur a permis les notifications
    // essayons d'envoyer 10 notifications
    if (window.Notification &amp;&amp; Notification.permission === "granted") {
      let i = 0;
      // On utilise un intervalle, car certains navigateurs (dont Firefox)
      // bloquent les notifications s'il y en a trop sur une période
      // donnée
      const interval = window.setInterval(function () {
        // Avec la balise, on ne devrait voir que la notification "Coucou ! 9"
        const n = new Notification("Coucou ! " + i, {tag: 'soManyNotification'});
        if (i++ == 9) {
          window.clearInterval(interval);
        }
      }, 200);
    }

    // Si l'utilisateur n'a pas encore autorisé ou non
    // Note : À cause de Chrome, on ne peut pas s'assurer que la propriété permission 
    // est définie et il est donc dangereux de vérifier la valeur "default"
    else if (window.Notification &amp;&amp; Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        // Si la permission a été accordée
        if (status === "granted") {
          var i = 0;
          // On utilise un intervalle, car certains navigateurs (dont Firefox)
          // bloquent les notifications s'il y en a trop sur une période
          // donnée
          var interval = window.setInterval(function () {
            // Avec la balise, on ne devrait voir que la notification "Coucou ! 9"
            const n = new Notification("Coucou ! " + i, {tag: 'soManyNotification'});
            if (i++ == 9) {
              window.clearInterval(interval);
            }
          }, 200);
        }

        // Sinon, on peut utiliser une alerte modale classique
        else {
          alert("Coucou !");
        }
      });
    }

    // Si l'utilisateur a refusé les notifications
    else {
      // On utilise une alerte modale classique
      alert("Coucou !");
    }
  });
});</pre>

<p>Voir le résultat de cet exemple :</p>

<p>{{EmbedLiveSample('tag_example', '100%', 30)}}</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications("api.Notification")}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Notification")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/notification"><code>Notification</code></a></li>
</ul>
