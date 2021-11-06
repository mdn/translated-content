---
title: Ajouter une page de paramètres
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
tags:
  - Paramètres
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
original_slug: Mozilla/Add-ons/WebExtensions/Ajouter_une_page_de_paramètres
---
<div>{{AddonSidebar}}</div>

<p>Une page de paramètres donne aux utilisateurs la possiblité de voir et de changer les paramètres (parfois aussi appelée "préférences" ou "options") de l'extension.</p>

<p>Avec les WebExtensions, les paramètres sont généralement stockés en utilisant l'API <code><a href="/fr/Add-ons/WebExtensions/API/storage">storage</a></code>. L'ajout d'une page de paramètres se fait en trois étapes :</p>

<ul>
 <li>Écrire un fichier HTML qui affiche les paramètres et permet à l'utilisateur de les changer.</li>
 <li>Écrire un script, inclus depuis le fichier HTML, qui alimente les paramètres depuis le stockage et met à jour les paramètres stockés quand l'utilisateur les change.</li>
 <li>Renseigner le chemin du fichier HTML come clé de <code><a href="/fr/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code> dans manifest.json. Ainsi, le document HTML sera affiché dans le gestionnaire d'extension, aux cotés des nom et description de l'extension.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Vous pouvez aussi ouvrir cette page automatiquement en utilisant la fonction <code><a href="/fr/Add-ons/WebExtensions/API/runtime/openOptionsPage">runtime.openOptionsPage()</a></code>.</p>
</div>

<h2 id="Une_WebExtension_simple">Une WebExtension simple</h2>

<p>Tout d'abord, nous allons écrire une extension qui ajoute une bordure bleue à chaque page visitée par l'utilisateur.</p>

<p>Créez un nouveau dossier nommé "settings", dans lequel vous créez un fichier appelé "manifest.json" ayant pour contenu :</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["&lt;all_urls&gt;"],
      "js": ["borderify.js"]
    }
  ]

}</pre>

<p>Les instructions de l'extension charge au navigateur un script de contenu nommé "borderify.js" dans chaque page que l'utilisateur visite.</p>

<p>Ensuite, créez un fichier nomé "borderify.js" dans le dossier "paramètres", et remplissez le comme suit :</p>

<pre class="brush: js">document.body.style.border = "10px solid blue";</pre>

<p>Ça ajoute une bordure bleue à la page.</p>

<p>Maintenant, <a href="/fr-FR/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">installez la WebExtension</a> et testez la — ouvrez la page que vous voulez :</p>

<p>{{EmbedYouTube("E-WUhihF8fw")}}</p>

<h2 id="Ajouter_des_paramètres">Ajouter des paramètres</h2>

<p>Maintenant, créez une page de paramètres pour autoriser l'utilisateur à définire la couleur de la bordure.</p>

<p>D'abord, mettez à jour le contenu de "manifest.json" avec ceci :</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["&lt;all_urls&gt;"],
      "js": ["borderify.js"]
    }
  ],

  "options_ui": {
    "page": "options.html"
  },

  "permissions": ["storage"],

  "applications": {
    "gecko": {
      "id": "addon@example.com",
    }
  }

}
</pre>

<p>Vous avez ajoutez trois nouvelles clés :</p>

<ul>
 <li><code><a href="/fr/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code>: Cela définit un document HTML comme étant la page de paramètres (aussi appelée page d'options) pour cette extension.</li>
 <li><code><a href="/fr/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code>: Vous allez utilisez l'API <code><a href="/fr/Add-ons/WebExtensions/API/storage">storage</a></code> pour stocker les paramètres, vous devez donc demander la permission d'utiliser cette API.</li>
 <li><code>applications</code>: Vous devez inclure un identifiant d'extension afin d'enregistrer et de récupérer les paramètres du stockage synchronisé.</li>
</ul>

<p>Ensuite, puisque vous avez promis de fournir "options.html", créons-le. Créez un fichier avec ce nom dans le répertoire "settings", et donnez-lui le contenu suivant :</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;

  &lt;body&gt;

    &lt;form&gt;
        &lt;label&gt;Border color&lt;input type="text" id="color" &gt;&lt;/label&gt;
        &lt;button type="submit"&gt;Save&lt;/button&gt;
    &lt;/form&gt;

    &lt;script src="options.js"&gt;&lt;/script&gt;

  &lt;/body&gt;

&lt;/html&gt;
</pre>

<p>Cela définit un {{htmlelement("form")}} avec un label de texte {{htmlelement("input")}} et un {{htmlelement("button")}} de type "submit". Ça inclus également un script appelé "options.js".</p>

<p>Créez "options.js", lui-aussi dans le dossier "settings", et remplissez le comme ceci :</p>

<pre class="brush: js">function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    color: document.querySelector("#color").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "blue";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
</pre>

<p>Cela fait deux choses :</p>

<ul>
 <li>Quand le document a été chargé, le script attribue une valeur à "color" depuis le stockage grâce à<code><a href="/fr/Add-ons/WebExtensions/API/storage/StorageArea/get"> storage.sync.get()</a></code>. Si la valeur n'est pas renseignée, il utilise par défaut "blue". Ceci récupère les valeurs de la zone de stockage de <code>synchronisation</code>.</li>
 <li>Quand l'utilisateur valide le formulaire en cliquant sur "Save", le script stocke la valeur de textbox en utilisant <code><a href="/fr/Add-ons/WebExtensions/API/storage/StorageArea/set">storage.sync.set()</a></code>. Ceci permet d'enregistrer la valeur dans la zone de stockage de <code>synchronisation</code>.</li>
</ul>

<p>Vous pouvez stocker les valeurs des paramètres dans le stockage local à la place si vous pensez que le stockage local est préférable pour votre extension.</p>

<div class="note">
<p><strong>Note :</strong> L'implémentation de <code>storage.sync</code> dans Firefox repose sur l'ID du module complémentaire. Si vous utilisez <code>storage.sync</code>,  vous devez définir un ID pour votre extension à l'aide de la clé manifest.json des <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications">applications</a></code>  comme indiqué dans l'exemple de manifeste ci-dessus.</p>
</div>

<p>Finalement, mettez à jour "borderify.js" pour lire la couleur de la bordure depuis le stockage :</p>

<div class="warning">
<p><strong>Attention :</strong> A cause d'un bug dans <a href="/fr/Add-ons/WebExtensions/API/storage/StorageArea/get">browser.storage.local.get()</a> dans Firefox pour les versions précédant la 52, le code qui suit ne fonctionnera pas. Pour le faire fonctionner pour les versions de Firefox avant la 52, les deux occurrences d'<code>item.color</code> dans <code>onGot()</code> doivent être changer pour <code>item[0].color</code>.</p>
</div>

<pre class="brush: js"> function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var color = "blue";
  if (item.color) {
    color = item.color;
  }
  document.body.style.border = "10px solid " + color;
}

var getting = browser.storage.sync.get("color");
getting.then(onGot, onError);
</pre>

<p>A ce moment, l'extension complète devrait ressembler à ceci :</p>

<pre>settings/
    borderify.js
    manifest.json
    options.html
    options.js</pre>

<p>Maintenant :</p>

<ul>
 <li><a href="/fr-FR/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on">Rechargez la WebExtension</a></li>
 <li>Chargez un page web</li>
 <li>Ouvrez la page de paramètres et changez la couleur de la bordure</li>
 <li>Rechargez la page pour voir la différence</li>
</ul>

<p>Dans Firefox vous pouvez accéder à la page des paramètres en visitant about:addons et en cliquant le bouton "Preferences" situé à coté de l'extension.</p>

<p>{{EmbedYouTube("ECt9cbWh1qs")}}</p>

<h2 id="Pour_aller_plus_loin">Pour aller plus loin</h2>

<ul>
 <li><code><a href="/fr/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code> documentation de référence sur les clés de manifest</li>
 <li><code><a href="/fr/Add-ons/WebExtensions/API/storage">storage</a></code> documentation de référence sur l'API</li>
 <li>Ouvrez la page de paramètres directement depuis votre extension en utilisant l'API <code><a href="/fr/Add-ons/WebExtensions/API/runtime/openOptionsPage">runtime.openOptionsPage()</a></code></li>
 <li>Exemple de page de paramètres :
  <ul>
   <li><a href="https://github.com/mdn/webextensions-examples/tree/master/favourite-colour">favourite-colour</a></li>
  </ul>
 </li>
</ul>
