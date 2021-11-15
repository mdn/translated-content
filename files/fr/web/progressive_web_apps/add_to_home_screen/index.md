---
title: Ajouter à l'écran d'accueil
slug: Web/Progressive_web_apps/Add_to_home_screen
tags:
  - Ajouter à l'écran d'accueil
  - HTML
  - Manifest
  - PWA
translation_of: Web/Progressive_web_apps/Add_to_home_screen
original_slug: Web/Progressive_web_apps/ajouter_a_lecran_daccueil_a2hs
---
<p>Ajouter à l’écran d’accueil (A2HS en abrégé) est une fonctionnalité disponible dans les navigateurs pour smartphones modernes qui permet aux développeurs d’ajouter facilement et rapidement un raccourci à leur écran d’accueil, représentant leur application Web. Ce guide explique comment utiliser A2HS et ce que vous devez faire en tant que développeur pour permettre à vos utilisateurs d’en tirer parti.</p>

<h2 id="Pourquoi_A2HS">Pourquoi A2HS?</h2>

<p>On pense que A2HS fait partie de la philosophie des applications Web progressives : offrir aux applications Web les mêmes avantages en matière d'expérience utilisateur que les applications natives. Cela fait partie du simple geste d’accéder à une application en appuyant sur son icône sur votre écran d’accueil, puis en l’affichant proprement dans sa propre fenêtre. A2HS rend cela possible.</p>

<h2 id="Quels_navigateurs_prennent_en_charge_A2HS">Quels navigateurs prennent en charge A2HS?</h2>

<p>A2HS est pris en charge par Mobile Chrome / Android Webview depuis la version 31, Opera pour Android depuis la version 32 et Firefox pour Android depuis la version 58 .</p>

<h2 id="Comment_l'utiliser">Comment l'utiliser?</h2>

<p>Nous avons écrit un exemple de site Web très simple ( voir la démo, et le code source ) qui ne fait pas grand chose, mais qui a été développé avec le code nécessaire pour pouvoir l'ajouter à un écran d'accueil. en tant qu'agent de service enregistré pour lui permettre d'être utilisé en mode hors connexion. L'exemple montre une série d'images de renard.</p>

<p>Si vous avez Firefox pour Android, utilisez-le pour accéder à notre démonstration à <code>https://mdn.github.io/pwa-examples/a2hs/</code> . Vous verrez des images de renard, mais plus important encore, vous verrez une icône "accueil" avec une icône plus (+) à l'intérieur: il s'agit de l'icône "Ajouter à l'écran d'accueil" affichée pour tout site doté de A2HS.</p>

<p><img alt="" src="add-to-home-screen-icon.png"></p>

<p>Appuyez sur cette icône pour afficher une bannière de confirmation. Une pression sur le gros bouton + <em>AJOUTER À L'ÉCRAN D'ACCUEIL</em> termine l'action et ajoute l'application à l'écran d'accueil. (Dans Android 8 et versions ultérieures, une boîte de dialogue d'autorisation au niveau du système "Ajouter à l'écran d'accueil" s'affiche en premier.)</p>

<p><img alt="" src="fx-a2hs-banner.png"></p>

<p>Si vous avez Mobile Chrome disponible, l'expérience est légèrement différente. lors du chargement du site, une bannière d’installation apparaît vous demandant si vous souhaitez ajouter cette application à votre écran d’accueil.</p>

<p><img alt="" src="chrome-a2hs-banner.png"></p>

<div class="note">
<p><strong>Note :</strong> Pour en savoir plus sur les bannières d'installation de Chrome, consultez l'article Web Installer des bannières Web App .</p>
</div>

<p>Si vous choisissez de ne pas l'ajouter à votre écran d'accueil à ce stade, vous pourrez le faire ultérieurement à l'aide de l'icône <em>Ajouter à l'écran d'accueil</em> dans le menu principal de Chrome.</p>

<p>Quel que soit le navigateur que vous utilisez, lorsque vous choisissez d'ajouter l'application à votre écran d'accueil, celle-ci s'affiche avec un titre abrégé, de la même manière que les applications natives.</p>

<p><img alt="" src="a2hs-on-home-screen.png"></p>

<p>Cet icône ouvre le site, mais en tant que WebApp, vous ne verrez plus l'interface utilisateur du navigateur.</p>

<h2 id="Que_faut-il_pour_utiliser_A2HS">Que faut-il pour utiliser A2HS?</h2>

<p>Pour permettre à votre application d'être ajoutée à un écran d'accueil, vous devez disposer des éléments suivants:</p>

<ul>
 <li>Un site en HTTPS - Internet est de plus en plus plus sécurisée et de nombreuses technologies modernes (A2HS incluses) ne fonctionneront que dans des contextes sécurisés.</li>
 <li>Avoir un fichier "manifest" contenant les champs appropriés, lié à partir de l'en-tête HTML.</li>
 <li>Avoir une icône disponible pour l'affichage sur l'écran d'accueil.</li>
 <li>Chrome exige en outre que l'application ait un agent de service enregistré (par exemple, pour pouvoir fonctionner en mode hors connexion).</li>
</ul>

<h3 id="Manifest">Manifest</h3>

<p>Le "manifest" est un fichier écrit au format JSON standard et doit être placé quelque part dans le répertoire de votre application (il est préférable que le <code><em>fichier.webmanifest</em></code> soit à la racine du site) avec le nom <code><em>fichier</em>.webmanifest</code> (nous avons choisi <code>manifest.webmanifest</code> ). Il contient plusieurs champs qui définissent certaines informations sur l'application Web et sur son comportement. .</p>

<div class="note">
<p><strong>Note :</strong> L'extension <code>.webmanifest</code> est spécifiée dans la section Enregistrement du type de fichier, mais les navigateurs prennent aussi en charge les manifest avec d'autres extensions appropriées, par exemple <code>.json</code> .</p>
</div>

<p> </p>

<p>Les champs nécessaires pour A2HS sont les suivants:</p>

<ul>
 <li><code>background_color</code> : spécifie une couleur d'arrière-plan à utiliser dans certains contextes d'application. Le plus pertinent pour A2HS est l'écran de démarrage qui s'affiche lorsque l'icône de l'application sur l'écran d'accueil est activée et qu'elle commence à se charger (elle ne s'affiche actuellement que lorsque des applications ont été ajoutées à l'écran d'accueil par Chrome).</li>
 <li><code>display</code> : Spécifie comment l'application doit être affichée. Pour que cela ressemble à une application distincte (et pas seulement à une page Web), vous devez choisir une valeur telle que <code>fullscreen</code> (aucune interface utilisateur n'est affichée) ou <code>standalone</code> (très similaire, mais des éléments d'interface utilisateur au niveau du système tels que la barre d'état. pourrait être visible).</li>
 <li><code>icons</code> : spécifie les icônes à utiliser par le navigateur pour représenter l'application à différents endroits (par exemple sur le sélecteur de tâches ou, plus important encore, sur l'écran d'accueil). Nous n'en avons inclus qu'un dans notre démo.</li>
 <li><code>name</code> et <code>short_name</code> : Ces champs fournissent un nom d'application à afficher lors de la représentation de l'application à différents endroits. <code>name</code> fournit le nom complet de l'application et <code>short_name</code> fournit un nom abrégé à utiliser lorsque l'espace disponible est insuffisant pour afficher le nom complet. Nous vous conseillons de fournir les deux si le nom de votre application est long.</li>
 <li><code>start_url</code> : fournit un chemin d'accès de l'application. Notez qu'il doit s'agir d'une URL pointant vers l'index du site, par rapport à l'URL du "manifest". Sachez également que Chrome en a besoin avant d'afficher la bannière d'installation, tandis que Firefox ne l'exige pas pour afficher l'icône.</li>
</ul>

<p>Le fichier "manifest" de notre exemple ressemble à ceci:</p>

<pre class="brush: json">{
  "background_color": "purple",
  "description": "Shows random fox pictures. Hey, at least it isn't cats.",
  "display": "fullscreen",
  "icons": [
    {
      "src": "icon/fox-icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "name": "Awesome fox pictures",
  "short_name": "Foxes",
  "start_url": "/pwa-examples/a2hs/index.html"
}</pre>

<h3 id="Icône">Icône</h3>

<p> </p>

<p>Comme indiqué dans le "manifest" ci-dessus, nous incluons une icône de 192 x 192 px. Vous pouvez inclure plus de tailles si vous le souhaitez. Android choisira la taille la plus appropriée pour chaque cas d'utilisation différent. Vous pouvez également décider d'inclure différents types d'icônes afin que les appareils puissent utiliser le meilleur qu'ils puissent (par exemple, Chrome prend déjà en charge le format WebP).</p>

<p>Notez que le membre de <code>type</code> dans l'objet de chaque icône spécifie le type MIME de l'icône, afin que le navigateur puisse rapidement identifier le type de l'icône, puis l'ignorer et passer à une autre icône s'il ne le prend pas en charge.</p>

<p>Pour ce qui est de la conception de l’icône, vous devez suivre les mêmes pratiques que vous suivriez pour n’importe quelle icône Android (voir les directives de conception d’icône Android ).</p>

<h3 id="Lier_le_code_HTML_au_manifest">Lier le code HTML au "manifest"</h3>

<p>Pour terminer la configuration de votre "manifest", vous devez le référencer à partir du code HTML de la page d'accueil de votre application:</p>

<pre class="brush: html">&lt; link rel = " manifest " href = "</pre>

<p>Les navigateurs prenant en charge A2HS sauront où chercher votre manifeste une fois celui-ci en place.</p>

<h2 id="Qu'est-ce_que_A2HS_ne_vous_donne_pas">Qu'est-ce que A2HS ne vous donne pas?</h2>

<p> </p>

<p>N'oubliez pas que lorsque vous ajoutez une application à votre écran d'accueil, cela la rend simplement facilement accessible. Elle ne télécharge pas les ressources et les données de l'application sur votre appareil et ne la rend pas disponible hors connexion, ou quelque chose du genre. Pour que votre application fonctionne en mode hors connexion, vous devez utiliser l' API Service Worker pour gérer le stockage hors connexion et, si nécessaire, le stockage Web ou IndexedDB pour stocker ses données.</p>

<p>Dans notre exemple d'application, nous venons d'utiliser un agent de service pour stocker tous les fichiers nécessaires. Le fichier <code><a class="external external-icon" href="https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js" rel="noopener">index.js</a></code> est inscrit sur le site avec le bloc de code final dans le fichier <code><a class="external external-icon" href="https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js" rel="noopener">index.js</a></code> . Nous mettons ensuite en cache toutes les ressources du site à l'aide de l' API de cache et les servons à partir du cache plutôt que du réseau à l'aide du code <a class="external external-icon" href="https://github.com/mdn/pwa-examples/blob/master/a2hs/sw.js" rel="noopener">contenu</a> dans le fichier <a class="external external-icon" href="https://github.com/mdn/pwa-examples/blob/master/a2hs/sw.js" rel="noopener">sw.js.</a></p>

<h2 id="A2HS_sur_le_bureau">A2HS sur le bureau</h2>

<p>Bien que conçu à l'origine pour améliorer l'expérience utilisateur sur les systèmes d'exploitation mobiles, il existe également une technique pour rendre les PWA installables sur les plates-formes de bureau.</p>

<div class="note">
<p><strong>Note :</strong> au moment de la rédaction de ce document, les fonctionnalités décrites ci-dessous n'étaient prises en charge que par les versions les plus récentes de Chrome: par défaut sous Windows et derrière l'indicateur <code>#enable-desktop-pwas</code> sous macOS.</p>
</div>

<p> </p>

<h3 id="Ajout_d'un_bouton_d'installation">Ajout d'un bouton d'installation</h3>

<p>Pour rendre notre PWA installable sur le bureau, nous avons d’abord ajouté un bouton à notre document pour permettre aux utilisateurs de procéder à l’installation. Ce bouton n’est pas automatiquement disponible sur les applications de bureau et l’installation doit être déclenchée par un geste de l’utilisateur:</p>

<pre class="brush: html">&lt;button class="add-button"&gt;Add to home screen&lt;/button&gt;</pre>

<p>Nous lui avons ensuite donné un style simple:</p>

<pre class="brush: css">.add-button {
  position: absolute;
  top: 1px;
  left: 1px;
}</pre>

<h3 id="JavaScript_pour_gérer_l'installation">JavaScript pour gérer l'installation</h3>

<p>Au bas de notre <a class="external external-icon" href="https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js" rel="noopener">fichier <code>index.js</code></a> , nous avons ajouté du JavaScript pour gérer l'installation. Tout d'abord, nous déclarons une variable <code>deferredPrompt</code> (que nous expliquerons plus tard), obtenons une référence à notre bouton d'installation et le configurons pour <code>display: none</code>:</p>

<pre class="brush: js">let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';</pre>

<p>Nous masquons le bouton initialement car le PWA ne sera pas disponible pour l’installation tant qu’il ne respectera pas les critères A2HS. Lorsque cela se produit, les navigateurs prenant en charge déclenchent un événement <code>beforeinstallprompt</code> . Nous pouvons ensuite utiliser un gestionnaire comme celui ci-dessous pour gérer l'installation:</p>

<p> </p>

<pre class="brush: js">window.addEventListener('beforeinstallprompt', (e) =&gt; {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) =&gt; {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) =&gt; {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});</pre>

<p> </p>

<p>Ici il faut:</p>

<ul>
 <li>Appeler <code>Event.preventDefault()</code> pour empêcher Chrome 67 et les versions antérieures d'appeler automatiquement l'invite d'installation (ce comportement a été modifié dans Chrome 68).</li>
 <li>Stocker l'objet événement dans la variable <code>deferredPrompt</code> afin qu'il puisse être utilisé ultérieurement pour effectuer l'installation réelle.</li>
 <li>Configurer le bouton  <code>display: block</code> afin qu'il apparaisse dans l'interface utilisateur sur laquelle l'utilisateur peut cliquer.</li>
 <li>Définir un gestionnaire de <code>click</code> pour le bouton.</li>
</ul>

<p>Le gestionnaire de clics contient les étapes suivantes:</p>

<ul>
 <li>Cacher à nouveau le bouton avec <code>display: none</code> - il n'est plus nécessaire une fois l'application installée.</li>
 <li>Utilisez la méthode <code>prompt()</code> disponible sur l'objet d'événement <code>beforeinstallprompt</code> (stocké dans <code>deferredPrompt</code> ) pour déclencher l'affichage de l'invite d'installation.</li>
 <li>Répondez à l'interaction de l'utilisateur avec l'invite à l'aide de la propriété <code>userChoice</code> , de nouveau disponible sur l'objet d'événement <code>beforeinstallprompt</code> .</li>
 <li>Définissez <code>deferredPrompt</code> sur null car il n'est plus nécessaire.</li>
</ul>

<p>Ainsi, lorsque vous cliquez sur le bouton, l'invite d'installation apparaît.</p>

<p><img alt="" src="chrome-desktop-a2hs-banner.png"></p>

<p>Si l'utilisateur sélectionne <em>Installer</em> , l'application est installée (disponible en tant qu'application de bureau autonome) et le bouton Installer ne s'affiche plus (l'événement <code>onbeforeinstallprompt</code> ne se déclenche plus si l'application est déjà installée). Lorsque vous ouvrez l'application, celle-ci apparaît dans sa propre fenêtre:</p>

<p><img alt="" src="a2hs-installed-desktop.png"></p>

<p>Si l'utilisateur sélectionne <em>Annuler</em> , l'état de l'application revient à ce qu'il était avant le clic sur le bouton.</p>

<div class="note">
<p><strong>Note :</strong> Le code de cette section provient principalement des bannières d'installation de l' application / Ajouter à l'écran d'accueil de Pete LaPage.</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<p> </p>

<ul>
 <li>Applications web progressives (PWA</li>
 <li>Service Worker API</li>
 <li>Référence du "manifest" Web</li>
 <li>App install banners</li>
</ul>

<p> </p>
