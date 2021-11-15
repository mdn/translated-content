---
title: Incompatibilités avec Chrome
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
tags:
  - Guide
  - WebExtensions
  - google chrome
translation_of: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
original_slug: Mozilla/Add-ons/WebExtensions/Incompatibilités_Chrome
---
<p>{{AddonSidebar}}</p>

<p>Les extensions construites à l'aide des API WebExtension sont conçues afin d'être compatibles avec les extensions Chrome et Opera. Les extensions écrites dans ces navigateurs devraient fonctionner, autant que possible, avec très peu de changement dans Firefox.</p>

<p>Toutefois, il existe certaines différences significatives entre Chrome, Firefox et Edge et notamment :</p>

<ul>
 <li>La prise en charge des API JavaScript est hétérogène entre les navigateurs. Voir la page <a href="/fr/Add-ons/WebExtensions/Compatibilité_navigateurs_API_JavaScript">Compatibilité des navigateurs avec les API JavaScript WebExtension</a> pour plus de détails.</li>
 <li>La prise en charge des clés du fichier <code>manifest.json</code> varie entre les navigateurs. Pour plus de détails, voir la section <a href="/fr/Add-ons/WebExtensions/manifest.json#Compatibilité_des_navigateurs">Compatibilité des navigateurs de la page manifest.json</a>.</li>
 <li>Pour Chrome, les API JavaScript sont accessibles sous l'espace de noms <code>chrome</code>. Pour Firefox et Edge, elles sont accessibles sous l'espace de noms <code>browser</code>. (cf. <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=798169">bug Chrome 798169</a>)</li>
 <li>Pour Chrome et Edge, les API asynchrones sont implémentées avec des <em>callbacks</em>. Pour Firefox, les API asynchrones sont implémentées avec des <a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses">promises</a>. (cf.<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=328932">bug Chrome 328932</a>)</li>
</ul>

<p>La suite de cette page détaille ces problèmes ainsi que d'autres points d'incompatibilité.</p>

<h2 id="Les_API_JavaScript">Les API JavaScript</h2>

<h3 id="Les_callbacks_et_lespace_de_noms_chrome.*">Les <em>callbacks</em> et l'espace de noms chrome.*</h3>

<p>Dans Chrome, les extensions peuvent accéder aux API JavaScript privilégiées à l'aide de l'espace de noms <code>chrome</code> :</p>

<pre class="brush: js">chrome.browserAction.setIcon({path: "path/to/icon.png"});</pre>

<p>Les WebExtensions accèdent aux API équivalentes à l'aide de l'espace de noms <code>browser</code> :</p>

<pre class="brush: js">browser.browserAction.setIcon({path: "path/to/icon.png"});
</pre>

<p>Beaucoup d'API sont asynchrones. Dans Chrome, les API asynchrones utilisent des fonctions de rappel (<em>callback</em>) pour renvoyer des valeurs et {{WebExtAPIRef("runtime.lastError")}} pour communiquer les erreurs :</p>

<pre class="brush: js">function logCookie(c) {
  if (chrome.extension.lastError) {
    console.error(chrome.extension.lastError);
  } else {
    console.log(c);
  }
}

chrome.cookies.set(
  {url: "https://developer.mozilla.org/"},
  logCookie
);</pre>

<p>Les API WebExtensions équivalentes utilisent plutôt <a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses">les promesses</a> :</p>

<pre class="brush: js">function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set(
  {url: "https://developer.mozilla.org/"}
);
setCookie.then(logCookie, logError);
</pre>

<h3 id="Firefox_les_espaces_de_noms_chrome_et_browser">Firefox : les espaces de noms <code>chrome</code> et <code>browser</code></h3>

<p>Afin d'aider au portage, l'implémentation de Firefox des WebExtensions prend en charge l'espace de noms <code>chrome</code>, l'utilisation des <em>callbacks</em>, l'espace de noms <code>browser</code> et l'utilisation des promesses. Cela signifie que de nombreuses extensions Chrome fonctionneront simplement dans Firefox sans aucune modification. Cependant, cela ne fait pas partie de la norme WebExtension et peut ne pas être pris en charge par l'ensemble des navigateurs compatibles.</p>

<p>Si vous écrivez votre extension en utilisant <code>browser</code> et les promesses, l'équipe de Firefox a également développé une prothèse (<em>polyfill</em>) qui lui permettra de fonctionner sur Chrome : <a href="https://github.com/mozilla/webextension-polyfill">https://github.com/mozilla/webextension-polyfill</a>.</p>

<h3 id="Les_API_partiellement_prises_en_charge">Les API partiellement prises en charge</h3>

<p>La page sur la <a href="/fr/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs"> compatibilité des navigateurs pour les API JavaScript WebExtension</a> inclut l'ensemble des tableaux de compatibilité. Lorsqu'il existe des réserves autour du support d'un élément d'API donné, ceci est indiqué dans ces tableaux avec un astérisque "*". Ces réserves sont détaillées la page de documentation respective de l'API.</p>

<p>Ces tableaux sont générés à partir des données de compatibilité stockées en tant que  <a href="https://github.com/mdn/browser-compat-data">fichiers JSON dans GitHub</a>.</p>

<p>Le reste de cette section décrit les problèmes de compatibilité qui ne sont pas encore pris en compte dans ces tableaux.</p>

<h4 id="notifications">notifications</h4>

<ul>
 <li>Pour <code>notifications.create()</code>, lorsqu'on utilise le <a href="/fr/Add-ons/WebExtensions/API/notifications/TemplateType">type</a> <code>"basic"</code>, l'icône <code>iconUrl</code> est optionnelle dans Firefox mais obligatoire dans Chrome.</li>
 <li>Les notifications sont effacées immédiatement lorsque l'utilisateur clique dessus. Ce n'est pas le cas dans Chrome.</li>
 <li>
  <p>Si vous appelez <code>notifications.create()</code> plusieurs fois et rapidement, Firefox peut finir par ne pas afficher de notification du tout. Attendre de faire d'autres appels dans le <em>callback</em> <code>chrome.notifications.create()</code> ne suffit pas (le délai n'est pas suffisamment long).</p>
 </li>
</ul>

<h4 id="proxy">proxy</h4>

<ul>
 <li><a href="/fr/Add-ons/WebExtensions/API/proxy">Cette API est complètement différente de celle conçue par Chrome. Avec l'API de Chrome, une extension peut enregistrer un fichier PAC, mais peut également définir des règles de proxy explicites. Comme cela est également possible en utilisant les fichiers PAC étendus, cette API ne prend en charge que l'approche de fichier PAC. Étant donné que cette API est incompatible avec l'API <code>proxy</code> de Chrome, cette API est uniquement disponible via l'espace de nom <code>browser</code>.</a></li>
</ul>

<h4 id="tabs">tabs</h4>

<ul>
 <li>
  <p>Dans Firefox, les URL relatives passées à <code>tabs.executeScript()</code> ou <code>tabs.insertCSS()</code> sont résolues par rapport à l'URL de la page actuelle. Dans Chrome, ces URL sont résolues par rapport à l'URL de base de l'extension. Pour travailler pour l'ensemble des navigateurs, il est donc nécessaire d'indiquer le chemin comme URL absolue, en commençant par la racine de l'extension, comme ceci:</p>

  <pre>/chemin/vers/script.json
</pre>
 </li>
 <li>Dans Firefox, interroger les onglets avec des URL avec <code>tabs.query()</code> nécessitent une permission <code>"tabs"</code>. Dans Chrome, il est possible de le faire sans la permission <code>"tabs"</code> mais cela limitera les résultats aux onglets dont les URL correspondent aux permissions de l'hôte.</li>
 <li>Dans Firefox, la promesse <code>tabs.remove()</code> est tenue après l'évènement <code>beforeunload</code> alors que pour Chrome, le <em>callback</em> n'attend pas <code>beforeunload</code>.</li>
</ul>

<h4 id="webRequest">webRequest</h4>

<ul>
 <li>Dans Firefox, les requêtes ne peuvent être redirigées que si l'URL originale utilise le schéma <code>http:</code> ou <code>https:</code>.</li>
 <li>Dans Firefox, les évènements ne sont pas déclenchés pour les requêtes système (mise à jour d'extensions, suggestions dans la barre de recherche). À partir de Firefox 57, Firefox fait une exception pour les extensions qui doivent intercepter {{WebExtAPIRef("webRequest.onAuthRequired")}} afin d'autoriser le proxy. Pour plus d'informations, voir la page {{WebExtAPIRef("webRequest.onAuthRequired")}}.</li>
 <li>Dans Firefox, si une extension souhaite rediriger une URL publique vers <a href="/fr/Add-ons/WebExtensions/user_interface/pages_web_incluses">une page d'extension</a>, le fichier <code>manifest.json</code> de l'extension doit contenir une clé <code><a href="/fr/Add-ons/WebExtensions/manifest.json/web_accessible_resources">web_accessible_resources</a></code> qui indique l'URL de la page de l'extension. On notera que n'importe quel site pourra alors lier ou rediriger vers cette URL et que les extensions doivent considérer n'importe quelle entrée (données provenant d'une requête POST par exemple) comme potentiellement dangereuse.</li>
 <li>Dans Firefox, à partir de Firefox 52, certaines API <code>browser.webRequest.*</code> renvoient des promesses qui résolvent <code>webRequest.BlockingResponse</code> de façon asynchrone. Pour Chrome, seule <code>webRequest.onAuthRequired</code> prend en charge une gestion asynchrone de <code>webRequest.BlockingResponse</code> avec <code>'asyncBlocking'</code>.</li>
</ul>

<h4 id="windows">windows</h4>

<ul>
 <li>Dans Firefox, <code>onFocusChanged</code> sera déclenché plusieurs fois pour un changement de focus donné.</li>
</ul>

<h3 id="API_non_prises_en_charge">API non prises en charge</h3>

<h4 id="declarativeContent">declarativeContent</h4>

<p>l'API <code>declarativeContent</code> de Chrome <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1435864">n'a pas encore été implémentée</a> in Firefox.</p>

<p>Firefox <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1323433#c16">ne supportera pas</a> l'API <code>declarativeContent.RequestContentScript</code>, qui est rarement utilisée et n'est pas disponible dans les versions stables de Chrome.</p>

<h3 id="Incompatibilités_diverses">Incompatibilités diverses</h3>

<h4 id="Gestion_des_URL_dans_CSS">Gestion des URL dans CSS</h4>

<p>Firefox résout les URL dans les fichiers CSS injectés par rapport au fichier CSS lui-même, plutôt que dans la page dans laquelle il est injecté.</p>

<h4 id="Incompatibilités_supplémentaires">Incompatibilités supplémentaires</h4>

<p>Firefox ne prend pas en charge <code><a href="/fr/docs/Web/API/Window/alert">alert()</a></code>, <code><a href="/fr/docs/Web/API/Window/confirm">confirm()</a></code> ou <code><a href="/fr/docs/Web/API/Window/prompt">prompt()</a></code> à partir des pages d'arrière-plan.</p>

<h4 id="web_accessible_resources">web_accessible_resources</h4>

<p>Dans Chrome, lorsqu'une ressource est répertoriée dans <code>web_accessible_resources</code>, elle est accessible via <code>chrome-extension://&lt;id-de-l-extension&gt;/&lt;chemin/vers/la/ressource&gt;</code>. L'identifiant de l'extension est fixé pour une extension donnée.</p>

<p>Firefox l'implémente différemment en utilisant un UUID aléatoire qui change pour chaque instance de Firefox : <code>moz-extension://&lt;UUID-aleatoire&gt;/&lt;chemin/vers/la/ressource&gt;</code>. Cette façon aléatoire peut empêcher certaines choses, comme ajouter l'URL de votre extension spécifique à la politique CSP d'un autre domaine.</p>

<h4 id="La_propriété_key_du_manifeste">La propriété <code>key</code> du manifeste</h4>

<p>Lorsque vous travaillez avec une extension décompressée, Chrome permet d'ajouter une <a href="https://developer.chrome.com/extensions/manifest/key">propriété <code>key</code></a> au manifeste afin de fixer l'identifiant de l'extension sur différentes machines. Ceci s'avère notamment utile lorsqu'on travaille avec <code>web_accessible_resources</code>. Puisque Firefox utilise des UUID aléatoires pour les <code>web_accessible_resources</code>, cette propriété n'est pas prise en charge.</p>

<h4 id="Les_requêtes_sont_relatives_au_contexte_de_lextension_et_pas_à_celui_du_contenu_de_la_page">Les requêtes sont relatives au contexte de l'extension et pas à celui du contenu de la page</h4>

<p>Dans Chrome, lorsque la requête est appelée (par exemple, en utilisant <code><a href="/fr/docs/Web/API/Fetch_API/Using_Fetch">fetch()</a></code>) pour une URL relative comme <code>/api</code> du script de contenu, elle sera envoyée à <code>https://example.com/api</code>. Dans Firefox, vous devez fournir des URL absolues.</p>

<h2 id="Les_clés_de_manifest.json">Les clés de <code>manifest.json</code></h2>

<p>La page relative à <code><a href="/fr/Add-ons/WebExtensions/manifest.json">manifest.json</a></code> contient un tableau décrivant la compatibilité des navigateurs pour les différentes clés du fichier. Lorsqu'il y a des mises en garde concernant le support d'une clé donnée, ceci est indiqué dans le tableau avec un astérisque "*" et de plus amples informations sont fournies dans la page décrivant la clé.</p>

<p>Ces tables sont générées à partir des données de compatibilité stockées en tant que <a href="https://github.com/mdn/browser-compat-data">fichiers JSON dans GitHub</a>.</p>

<h2 id="Communication_avec_le_système_natif">Communication avec le système natif</h2>

<h3 id="Arguments_de_messagerie_basée_sur_la_connexion">Arguments de messagerie basée sur la connexion</h3>

<p>Sur Linux et Mac, Chrome passe un argument sur l'application natif, qui est l'origine de l'extension qui l'a lancée, sous la forme : <code>chrome-extension://[extensionID]</code>. Cela permet à l'application d'identifier l'extension.</p>

<p>Sur Windows, Chrome passe deux arguments: le premier est l'origine de l'extension, et le second est un handle de la fenêtre native de Chrome qui a démarré l'application.</p>

<h3 id="allowed_extensions">allowed_extensions</h3>

<p>Dans Chrome, la clé de manifeste <code>allowed_extensions</code> s'appelle <code>allowed_origins</code>.</p>

<h3 id="Emplacement_du_fichier_de_manifeste_dapplication">Emplacement du fichier de manifeste d'application</h3>

<p>Chrome s'attend à trouver le manifeste de l'application dans un autre endroit. Se référer à la documentation Chrome pour <a href="https://developer.chrome.com/extensions/nativeMessaging#native-messaging-host-location">l'emplacement de l'hôte de messagerie natif</a>.</p>
