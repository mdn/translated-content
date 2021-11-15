---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
tags:
  - Add-ons
  - Extensions
  - Permissions
  - Reference
  - WebExtensions
  - manifest.json
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
---
<p>{{AddonSidebar}}</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row" style="width: 30%;">Type</th>
   <td><code>Tableau</code></td>
  </tr>
  <tr>
   <th scope="row">Obligatoire</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Exemple</th>
   <td>
    <pre class="brush: json">
"permissions": [
  "*://developer.mozilla.org/*",
  "webRequest"
]</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>Utilisez la clé <code>permissions</code> pour demander des pouvoirs spéciaux pour votre extension. Cette clé est un ensemble de chaînes, et chaque chaîne est une demande d'autorisation.</p>

<p>Si vous demandez des autorisations avec cette clé, le navigateur peut informer l'utilisateur, au moment de l'installation, que l'extension demande certains privilèges, et lui demande de confirmer qu'il est d'accord. Le navigateur peut également permettre à l'utilisateur d'inspecter les privilèges d'une extension après l'installation.</p>

<p>Comme la demande d'octroi de privilèges peut avoir un impact sur la volonté des utilisateurs d'installer votre extension, la demande de privilèges mérite une attention particulière. Par exemple, vous voulez éviter de demander des permissions inutiles et vous voudrez peut-être fournir des informations sur la raison pour laquelle vous demandez des permissions dans la description du magasin de votre extension. Vous trouverez plus d'informations sur les questions que vous devez prendre en compte dans l'article <a href="/fr/Add-ons/WebExtensions/Request_the_right_permissions">Demander les bonnes permissions</a>.</p>

<p>La clé peut contenir trois types d'autorisations:</p>

<ul>
 <li>Les permissions d'hôte</li>
 <li>Les permissions API</li>
 <li>La permission activeTab</li>
</ul>

<h2 id="Les_permissions_d'hôte">Les permissions d'hôte</h2>

<p>Les permissions d'hôte sont spécifiées comme <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">modèles de correspondance</a>, et chaque modèle identifie un groupe d'URL pour lequel l'extension demande des privilèges supplémentaires. Par exemple, une autorisation d'hôte pourrait être <code>"*://developer.mozilla.org/*"</code>.</p>

<p>Les privilèges supplémentaires incluent :</p>

<ul>
 <li><a href="/fr/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a> et l'accès <a href="/fr/docs/Web/API/Fetch_API">fetch</a> à ces origines sans restrictions d'origine croisée (même pour les demandes faites à partir de scripts de contenu)</li>
 <li>La possibilité d'injecter des scripts par programme (à l'aide de <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript">tabs.executeScript</a>) dans les pages issues de ces origines</li>
 <li>La possibilité de recevoir des événements de l'API <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest">webRequest</a> pour ces hôtes</li>
 <li>La possibilité d'accéder aux cookies de cet hôte à l'aide de l'API <a href="/fr/Add-ons/WebExtensions/API/cookies">cookies</a>, tant que la permission de cet API est également incluse.</li>
 <li>Contourne la protection de suivi si l'hôte est un domaine complet sans caractères génériques. Ne fonctionne pas avec &lt;all_urls&gt;.</li>
</ul>

<p>Dans Firefox, à partir de la version 56, les extensions reçoivent automatiquement les permissions d'hôte pour leur propre origine, qui se présentent sous la forme :</p>

<pre>moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/</pre>

<p>Où <code>60a20a9b-1ad4-af49-9b6c-c64c98c37920</code> est l'ID interne de l'extension. L'extension peut obtenir cette URL par programmation en appelant <a href="/fr/Add-ons/WebExtensions/API/extension/getURL">extension.getURL() </a>:</p>

<pre class="brush: js;">browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
</pre>

<h2 id="Les_permissions_API">Les permissions API</h2>

<p>Les autorisations API sont spécifiées comme des mots-clés, et chaque mot clé nomme une <a href="/fr/docs/">API WebExtension</a> que l'extension souhaite utiliser.</p>

<p>Les mots clés suivants sont actuellement disponibles:</p>

<ul>
 <li><code>activeTab</code></li>
 <li><code>alarms</code></li>
 <li><code>background</code></li>
 <li><code>bookmarks</code></li>
 <li><code>browserSettings</code></li>
 <li><code>browsingData</code></li>
 <li><code>clipboardRead</code></li>
 <li><code>clipboardWrite</code></li>
 <li><code>contentSettings</code></li>
 <li><code>contextMenus</code></li>
 <li><code>contextualIdentities</code></li>
 <li><code>cookies</code></li>
 <li><code>debugger</code></li>
 <li><code>dns</code></li>
 <li><code>downloads</code></li>
 <li><code>downloads.open</code></li>
 <li><code>find</code></li>
 <li><code>geolocation</code></li>
 <li><code>history</code></li>
 <li><code>identity</code></li>
 <li><code>idle</code></li>
 <li><code>management</code></li>
 <li><code>menus</code></li>
 <li><code>menus.overrideContext</code></li>
 <li><code>nativeMessaging</code></li>
 <li><code>notifications</code></li>
 <li><code>pageCapture</code></li>
 <li><code>pkcs11</code></li>
 <li><code>privacy</code></li>
 <li><code>proxy</code></li>
 <li><code>search</code></li>
 <li><code>sessions</code></li>
 <li><code>storage</code></li>
 <li><code>tabHide</code></li>
 <li><code>tabs</code></li>
 <li><code>theme</code></li>
 <li><code>topSites</code></li>
 <li><code>unlimitedStorage</code></li>
 <li><code>webNavigation</code></li>
 <li><code>webRequest</code></li>
 <li><code>webRequestBlocking</code></li>
</ul>

<p>Dans la plupart des cas, la permission accorde uniquement l'accès à l'API, avec les exceptions suivantes :</p>

<ul>
 <li><code>tabs</code> vous permet d'accéder aux <a href="/fr/Add-ons/WebExtensions/API/tabs">parties privilégiées des API de l'onglet </a>: <code>Tab.url</code>, <code>Tab.title</code>, et <code>Tab.faviconUrl</code>. Dans Firefox, vous avez également besoin de  <code>tabs</code> si vous souhaitez inclure <code>url</code> dans le paramètre <code>queryInfo</code> dans <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query">tabs.query()</a></code>. Le reste de l'API <code>tabs</code> peut être utilisé sans demander aucune permission.</li>
 <li><code>webRequestBlocking</code> vous permet d'utiliser l'argument "blocage", afin que vous puissiez <a href="/fr/Add-ons/WebExtensions/API/WebRequest">modifier et annuler les requêtes</a>.</li>
 <li><code>downloads.open</code> vous permet d'utiliser l'API {{WebExtAPIRef("downloads.open()")}}.</li>
 <li><code>tabHide</code> vous permet d'utiliser l'API {{WebExtAPIRef("tabs.hide()")}}.</li>
</ul>

<h2 id="Permission_activeTab">Permission activeTab</h2>

<p>Cette autorisation est spécifiée comme " <code>activeTab</code> " (<em>onglet actif</em>). Si une extension possède la permission <code>activeTab</code> , lorsque l'utilisateur interagit avec l'extension, celle-ci reçoit des privilèges supplémentaires uniquement pour l'onglet actif.</p>

<p>"L'interaction utilisateur" comprend :</p>

<ul>
 <li>L'utilisateur clique sur l'action du navigateur de l'extension ou sur l'action de la page</li>
 <li>L'utilisateur sélectionne un élément de son menu contextuel</li>
 <li>L'utilisateur active un raccourci clavier défini par l'extension</li>
</ul>

<p>Les privilèges supplémentaires sont les suivants :</p>

<ul>
 <li>La capacité d'injecter du JavaScript ou du CSS dans l'onglet par programme, en utilisant <code><a href="/fr/Add-ons/WebExtensions/API/tabs/executeScript">browser.tabs.executeScript</a></code> et  <code><a href="/fr/Add-ons/WebExtensions/API/tabs/insertCSS">browser.tabs.insertCSS</a></code></li>
 <li>L'accès aux parties privilégiées des onglets de l'API pour l'onglet actuel : Tab.url, Tab.title et Tab.faviconUrl.</li>
</ul>

<p>L'objectif de cette permission est de permettre aux extensions de réaliser une utilisation courante, sans avoir à leur accorder de permissions très puissantes. Beaucoup d'extensions veulent "faire quelque chose à la page courante quand l'utilisateur le demande". Par exemple, considérez une extension qui veut exécuter un script dans la page courante quand l'utilisateur clique sur une action de navigateur. Si la permission <code>activeTab</code> n'existait pas, l'extension devrait demander une permission d'hôte &lt;all_urls&gt;. Mais cela donnerait à l'extension plus de puissance que nécessaire : elle pourrait désormais exécuter des scripts dans n'importe quel onglet, à tout moment, plutôt que simplement dans l'onglet actif et juste en réponse à une action de l'utilisateur.</p>

<p>Notez que vous ne pouvez accéder qu'à l'onglet ou aux données qui s'y trouvaient au moment de l'interaction de l'utilisateur (par exemple le clic). Lorsque l'onglet actif s'éloigne, par exemple en raison d'un chargement terminé ou d'un autre événement, l'autorisation ne vous donne plus accès à l'onglet.</p>

<p>Habituellement, l'onglet qui est accordé à <code>activeTab</code> est juste l'onglet actuellement actif, sauf dans un cas. L'API <code><a href="/fr/Add-ons/WebExtensions/API/menus">menus</a></code>  permet à une extension de créer un élément de menu qui s'affiche lorsque le contexte utilisateur clique sur un onglet (c'est-à-dire sur l'élément de l'onglet qui permet à l'utilisateur de passer d'un onglet à un autre). Si l'utilisateur clique sur un tel élément, la permission <code>activeTab</code> est accordée pour l'onglet sur lequel l'utilisateur a cliqué, même s'il ne s'agit pas de l'onglet actuellement actif (A partir de Firefox 63, {{bug(1446956)}}).</p>

<h2 id="Accès_au_presse-papiers">Accès au presse-papiers</h2>

<p>Il existe deux permissions qui permettent aux extensions d'interagir avec le Presse-papiers :</p>

<ul>
 <li><code>clipboardWrite</code>: écrivez dans le presse-papiers à l'aide de {{DOMxRef("Clipboard.write()")}}, {{DOMxRef("Clipboard.writeText()")}}, <code>document.execCommand("copy")</code> ou <code>document.execCommand("cut")</code></li>
 <li><code>clipboardRead</code>: lisez le presse-papiers à l'aide de  {{DOMxRef("Clipboard.read()")}}, {{DOMxRef("Clipboard.readText()")}} ou <code>document.execCommand("paste")</code></li>
</ul>

<p>Voir <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard">Intérargir avec le presse-papiers </a>pour tous les détails de ce sujet.***</p>

<h2 id="Stockage_illimité">Stockage illimité</h2>

<p>La permission <code>unlimitedStorage</code> :</p>

<ul>
 <li>permet aux extensions de dépasser tout quota imposé par l'API  {{WebExtAPIRef("storage.local")}}</li>
 <li>dans Firefox, permet aux extensions de créer une base de données <a href="/fr/docs/Web/API/API_IndexedDB/Browser_storage_limits_and_eviction_criteria#Les_différents_types_de_stockage_des_données">bases de données Indexed DB "persistante"</a>, sans que le navigateur ne demande à l'utilisateur la permission au moment de la création de la base.</li>
</ul>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: json;">"permissions": ["*://developer.mozilla.org/*"]</pre>

<p>Demande d'accès privilégié aux pages sous developer.mozilla.org.</p>

<pre class="brush: json">"permissions": ["tabs"]</pre>

<p>Demande d'accès aux éléments privilégiés de l'API <code>tabs.</code></p>

<pre class="brush: json">"permissions": ["*://developer.mozilla.org/*", "tabs"]</pre>

<p>Demande des deux permissions ci-dessus.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.manifest.permissions")}}</p>
