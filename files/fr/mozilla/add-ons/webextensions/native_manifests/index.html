---
title: manifests Natif
slug: Mozilla/Add-ons/WebExtensions/Native_manifests
tags:
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Native_manifests
original_slug: Mozilla/Add-ons/WebExtensions/manifests_native
---
<div>{{AddonSidebar}}</div>

<p>Les manifests natifs sont des fichiers JSON spécialement formatés qui sont provisionnés sur l'ordinateur de l'utilisateur par un autre moyen que le processus d'installation de l'extension. Par exemple, un manifest natif peut être fourni par un administrateur de périphérique ou par un programme d'installation d'application natif.</p>

<p>Il existe trois types différents de manifest natif :</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td style="width: 40%;"><a href="#Native_messaging_manifests">Les manifests de messagerie natif</a></td>
   <td>Activez une fonctionnalité appelée <a href="/fr/Add-ons/WebExtensions/Native_messaging">native messaging</a>, dans laquelle une extension peut communiquer avec une application native installée sur l'appareil.</td>
  </tr>
  <tr>
   <td><a href="#Managed_storage_manifests">Manifest de gestion de stockage</a></td>
   <td>Définissez les données en lecture seule auxquelles une extension peut accéder à l'aide de l'API {{WebExtAPIRef("storage.managed")}}.</td>
  </tr>
  <tr>
   <td><a href="#PKCS_11_manifests">PKCS #11 manifests</a></td>
   <td>Activez une extension pour utiliser l'API  {{WebExtAPIRef("pkcs11")}} afin d'énumérer les modules de sécurité PKCS #11 et installez-les dans Firefox.</td>
  </tr>
 </tbody>
</table>

<p>Pour tous les manifests natifs, vous devez arranger les choses afin que le navigateur puisse trouver le manifest. La section sur l'<a href="#Manifest_location">emplacement du manifest</a> décrit ces règles.</p>

<h2 id="Les_manifests_de_messagerie_natif">Les manifests de messagerie natif</h2>

<p>Le manifest de messagerie natif contient un seul objet JSON avec les propriétés suivantes :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Name</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>name</code></td>
   <td>String</td>
   <td>
    <p>Nom de l'application native.</p>

    <p>Cela doit correspondre au nom passé dans  {{WebExtAPIRef("runtime.connectNative()")}} ou {{WebExtAPIRef("runtime.sendNativeMessage()")}} par l'extension.</p>

    <p>Sur OS X et Linux, il doit également correspondre au nom de fichier du manifest de messagerie natif (à l'exclusion de l'extension ".json").</p>

    <p>Sous Windows, il doit correspondre au nom de la clé de registre que vous créez, qui contient l'emplacement du manifest de messagerie natif.</p>

    <p>Le nom doit correspondre à l'expression régulière suivante : "^\w+(\.\w+)*$". Cela signifie qu'il ne peut contenir que des caractères alphanumériques (minuscules ou majuscules), des traits de soulignement et des points. Il ne peut pas commencer ou se terminer par un point, et un point ne peut pas être suivi d'un autre point.</p>
   </td>
  </tr>
  <tr>
   <td><code>description</code></td>
   <td>String</td>
   <td>Description de l'application native.</td>
  </tr>
  <tr>
   <td><code>path</code></td>
   <td>String</td>
   <td>
    <p>Chemin vers l'application native.</p>

    <p>Sous Windows, cela peut être relatif au manifest lui-même. Sur OS X et Linux, il doit être absolu.</p>
   </td>
  </tr>
  <tr>
   <td><code>type</code></td>
   <td>String</td>
   <td>
    <p>Décrit la méthode utilisée pour connecter l'extension à l'application.</p>

    <p>Actuellement, une seule valeur peut être donnée ici, "stdio", qui indique que les messages sont reçus par l'application en utilisant l'entrée standard (stdin) et envoyés en utilisant la sortie standard (stdout).</p>
   </td>
  </tr>
  <tr>
   <td><code>allowed_extensions</code></td>
   <td>Array of String</td>
   <td>
    <p>Un tableau de valeurs d'<a href="/fr/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID">ID d'extensions</a>. Chaque valeur représente une extension qui est autorisée à communiquer avec cette application native.</p>

    <p>Notez que cela signifie que vous voudrez probablement inclure la clé des <a href="/fr/Add-ons/WebExtensions/manifest.json/browser_specific_settings">browser_specific_settings</a> dans le fichier manifest.json de votre extension, afin de pouvoir définir un identifiant explicite lors du développement..</p>
   </td>
  </tr>
 </tbody>
</table>

<p>Par exemple, voici un manifest pour l'application native "ping_pong":</p>

<pre class="brush: json">{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": [ "ping_pong@example.org" ]
}</pre>

<p>This allows the extension whose ID is "ping_pong@example.org" to connect, by passing the name "ping_pong" into the relevant {{WebExtAPIRef("runtime")}} API function. The application itself is at "/path/to/native-messaging/app/ping_pong.py".</p>

<h2 id="Manifest_de_gestion_de_stockage">Manifest de gestion de stockage</h2>

<p>Le manifest de stockage géré contient un seul objet JSON avec les propriétés suivantes :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Name</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>name</code></td>
   <td>String</td>
   <td>
    <p>ID de l'extension pouvant accéder à ce stockage, donné comme ID que vous avez spécifié dans la clé d'<a href="/fr/Add-ons/WebExtensions/manifest.json/applications">application</a> de l'extension.</p>
   </td>
  </tr>
  <tr>
   <td><code>description</code></td>
   <td>String</td>
   <td>Description lisible par l'homme, ignorée par Firefox</td>
  </tr>
  <tr>
   <td><code>type</code></td>
   <td>String</td>
   <td>
    <p>Cela doit être "storage".</p>
   </td>
  </tr>
  <tr>
   <td><code>data</code></td>
   <td>Object</td>
   <td>
    <p>Un objet JSON pouvant contenir des valeurs JSON valides, y compris des chaînes, des nombres, des booléens, des tableaux ou des objets. This will become the data in the <code>browser.storage.managed</code> storage area.</p>
   </td>
  </tr>
 </tbody>
</table>

<p>Par exemple :</p>

<pre class="brush: json">{
  "name": "favourite-colour-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data":
  {
    "colour": "management thinks it should be blue!"
  }
}</pre>

<p>Etant donné ce manifest JSON, l'extension "favourite-colour-examples@mozilla.org" pourrait accéder aux données en utilisant un code comme celui-ci:</p>

<pre class="brush: js">var storageItem = browser.storage.managed.get('colour');
storageItem.then((res) =&gt; {
  console.log(`Managed colour is: ${res.colour}`);
});</pre>

<h2 id="PKCS_11_manifests">PKCS #11 manifests</h2>

<p>Le manifest PKCS #11 est un fichier contenant un objet JSON avec les propriétés suivantes :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Name</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>name</code></td>
   <td>String</td>
   <td>
    <p>Nom du module PKCS #11.</p>

    <p>Cela doit correspondre au nom utilisé dans l'API <code>pkcs11</code> .</p>

    <p>Sur OS X et Linux, il doit également correspondre au nom de fichier du manifest (à l'exclusion de l'extension).</p>

    <p>Sous Windows, il doit correspondre au nom de la clé de registre que vous créez, qui contient l'emplacement du manifest.</p>

    <p>Le nom doit correspondre à l'expression régulière suivante : "^\w+(\.\w+)*$". Cela signifie qu'il ne peut contenir que des caractères alphanumériques minuscules, des traits de soulignement et des points. Il ne peut pas commencer ou se terminer par un point, et un point ne peut pas être suivi d'un autre point.</p>
   </td>
  </tr>
  <tr>
   <td><code>description</code></td>
   <td>String</td>
   <td>
    <p>Description du module.</p>

    <p>Ceci est utilisé pour définir le nom convivial du module dans l'interface utilisateur du navigateur (par exemple, la boîte de dialogue "Security Devices" dans Firefox).</p>
   </td>
  </tr>
  <tr>
   <td><code>path</code></td>
   <td>String</td>
   <td>
    <p>Chemin d'accès au module.</p>

    <p>Sous Windows, cela peut être relatif au manifest lui-même. Sur OS X et Linux, il doit être absolu</p>
   </td>
  </tr>
  <tr>
   <td><code>type</code></td>
   <td>String</td>
   <td>Cela doit être "pkcs11".</td>
  </tr>
  <tr>
   <td><code>allowed_extensions</code></td>
   <td>Array of String</td>
   <td>
    <p>Un tableau de valeurs d'<a href="/fr/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID">ID de l'extension</a>. Chaque valeur représente une extension qui est autorisée à interagir avec le module.</p>

    <p>Notez que cela signifie que vous voudrez probablement inclure la clé des <a href="/fr/Add-ons/WebExtensions/manifest.json/applications">applications</a> dans le fichier manifest.json de votre extension, afin de pouvoir définir un identifiant explicite lors du développement.</p>
   </td>
  </tr>
 </tbody>
</table>

<p>Par exemple :</p>

<pre class="brush: json">{
  "name": "my_module",
  "description": "My test module",
  "type": "pkcs11",
  "path": "/path/to/libpkcs11testmodule.dylib",
  "allowed_extensions": ["my-extension@mozilla.org"]
}</pre>

<p>Compte tenu de ce manifest JSON, enregistré sous le nom ""my_module.json", l'extension "my-extension@mozilla.org" pourrait installer le module de sécurité dans "/path/to/libpkcs11testmodule.dylib" en utilisant le code suivant :</p>

<pre class="brush: js">browser.pkcs11.installModule("my_module");</pre>

<h2 id="Emplacement_du_manifest">Emplacement du manifest</h2>

<p>Sous Linux et Mac OS X, vous devez stocker le manifest dans un endroit particulier. Sous Windows, vous devez créer une clé de registre qui pointe vers l'emplacement du manifest.</p>

<p>Les règles détaillées sont les mêmes pour tous les types de manifest, sauf que l'avant-dernier composant du chemin identifie le type de manifest. Les exemples ci-dessous montrent la forme pour chacun des trois types différents. Dans tous les exemples, <em>&lt;name&gt;</em> est la valeur de la propriété <code>name</code> dans le manifest.</p>

<h3 id="Windows">Windows</h3>

<p>Pour une visibilité globale, créez une clé de registre avec le nom suivant :</p>

<pre>HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\NativeMessagingHosts\&lt;name&gt;
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\ManagedStorage\&lt;name&gt;
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\PKCS11Modules\&lt;name&gt;</pre>

<p>La clé doit avoir une seule valeur par défaut, qui est le chemin d'accès au manifest.</p>

<p>A partir de Firefox 64, la vue registre 32 bits (<a href="https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system">Wow6432Node) </a>sera d'abord vérifiée pour ces clés, puis la vue registre "native". Utilisez celui qui convient le mieux à votre application. </p>

<p>Pour Firefox 63 et les versions antérieures, cette clé ne doit pas être créée sous <a href="https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system">Wow6432Node</a>, même si l'application est en 32 bits. Les versions précédentes du navigateur chercheront toujours la clé dans la vue "native" du registre, et non dans l'émulation 32 bits. Pour vous assurer que la clé est créée dans la vue "native", vous pouvez passer les indicateurs KEY_WOW64_64KEY ou KEY_WOW64_32KEY dans RegCreateKeyEx. Voir <a href="https://msdn.microsoft.com/en-us/library/windows/desktop/aa384129(v=vs.85).aspx">Accès à une autre vue de registre</a>.</p>

<p>Pour une visibilité par utilisateur, créez une clé de registre avec le nom suivant :</p>

<pre>HKEY_CURRENT_USER\SOFTWARE\Mozilla\NativeMessagingHosts\&lt;name&gt;
HKEY_CURRENT_USER\SOFTWARE\Mozilla\ManagedStorage\&lt;name&gt;
HKEY_CURRENT_USER\SOFTWARE\Mozilla\PKCS11Modules\&lt;name&gt;</pre>

<p>La clé doit avoir une seule valeur par défaut, qui est le chemin d'accès au manifest.</p>

<h3 id="Mac_OS_X">Mac OS X</h3>

<p>Pour une visibilité globale, stockez le manifest dans :</p>

<pre>/Library/Application Support/Mozilla/NativeMessagingHosts/&lt;name&gt;.json
/Library/Application Support/Mozilla/ManagedStorage/&lt;name&gt;.json
/Library/Application Support/Mozilla/PKCS11Modules/&lt;name&gt;.json</pre>

<p>Pour la visibilité par utilisateur, stockez le manifest dans :</p>

<pre>~/Library/Application Support/Mozilla/NativeMessagingHosts/&lt;name&gt;.json
~/Library/Application Support/Mozilla/ManagedStorage/&lt;name&gt;.json
~/Library/Application Support/Mozilla/PKCS11Modules/&lt;name&gt;.json
</pre>

<h3 id="Linux">Linux</h3>

<p>Pour une visibilité globale, stockez le manifest dans :</p>

<pre>/usr/lib/mozilla/native-messaging-hosts/&lt;name&gt;.json
/usr/lib/mozilla/managed-storage/&lt;name&gt;.json
/usr/lib/mozilla/pkcs11-modules/&lt;name&gt;.json
</pre>

<p>ou :</p>

<pre>/usr/lib64/mozilla/native-messaging-hosts/&lt;name&gt;.json
/usr/lib64/mozilla/managed-storage/&lt;name&gt;.json
/usr/lib64/mozilla/pkcs11-modules/&lt;name&gt;.json</pre>

<p>Pour la visibilité par utilisateur, stockez le manifest dans :</p>

<pre>~/.mozilla/native-messaging-hosts/&lt;name&gt;.json
~/.mozilla/managed-storage/&lt;name&gt;.json
~/.mozilla/pkcs11-modules/&lt;name&gt;.json</pre>
