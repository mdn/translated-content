---
title: Votre première WebExtension
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
tags:
  - Add-ons
  - Extensions
  - Guide
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---
<div>{{AddonSidebar}}</div>

<div class="note">
<p><strong>Note :</strong> Si vous connaissez déjà les concepts de base des extensions de navigateur, vous pouvez directement consulter <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension"> afin de voir comment les fichiers d'extension sont assemblés</a>. Ensuite, utilisez la <a href="/fr/docs/Mozilla/Add-ons/WebExtensions#reference">documentation de référence</a> pour commencer la construction de votre extension. Visitez l'<a href="https://extensionworkshop.com/?utm_source=developer.mozilla.org&amp;utm_medium=documentation&amp;utm_campaign=your-first-extension">atelier sur les extensions de Firefox</a> pour en savoir plus sur le processus de test et de publication des WebExtensions pour Firefox.</p>
</div>

<p>Cet article vous montre comment créer une extension Firefox, du début à la fin. L'extension ajoute une bordure de couleur rouge sur toutes les pages chargées depuis le site "mozilla.org" ou n'importe lequel de ses sous-domaines.</p>

<p>Le code source de cet exemple est disponible sur GitHub : <a href="https://github.com/mdn/webextensions-examples/tree/master/borderify">https://github.com/mdn/webextensions-examples/tree/master/borderify</a>.</p>

<p>Pour commencer, il vous faut Firefox (dans la version 45 ou avec une version  supérieure).</p>

<h2 id="Writing_the_extension">Écriture de l'extension</h2>

<p>Créez un nouveau répertoire et déplacez vous à l'intérieur. Par exemple, dans votre ligne de commande/terminal vous pourriez le faire comme ceci :</p>

<pre class="brush: bash">mkdir borderify
cd borderify</pre>

<h3 id="manifest.json">manifest.json</h3>

<p>Créez un nouveau fichier nommé <code>manifest.json</code> directement dans le répertoire <code>borderify</code> et tapez-y le contenu suivant :</p>

<pre class="brush: json ">{

  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Ajoute une bordure rouge pleine sur l'ensemble des pages web mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]

}</pre>

<ul>
 <li>Les trois premières clés : <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version">manifest_version</a></code>, <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name">name</a></code>, et <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version">version</a></code> sont obligatoires et contiennent des métadonnées fondamentales nécessaires au module.</li>
 <li><code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description">description</a></code> est optionnelle, mais recommandée : elle s'affiche dans le gestionnaire de module.</li>
 <li><code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons">icons</a></code> est optionnelle, mais recommandée : elle permet d'établir l'icône du module qui s'affichera dans le gestionnaire de module.</li>
</ul>

<p>La clé la plus intéressante ici est <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>, qui demande à Firefox de charger un script dans toutes les pages dont l'URL correspond à un motif de correspondance de domaines spécifique. Dans notre cas, nous demandons à Firefox de charger un script appelé <code>borderify.js</code> dans toutes les pages HTTP ou HTTPS du domaine "mozilla.org" et tous ses sous-domaines.</p>

<ul>
 <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">En savoir plus sur les scripts de contenu.</a></li>
 <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">En savoir plus sur les motifs de correspondance</a>.</li>
</ul>

<div class="warning">
<p><strong>Attention :</strong> <a href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id">Dans certaines situations, vous devez établir un identifiant pour votre extension</a>. Si vous avez besoin d'établir un identifiant pour votre extension, incluez la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings">browser_specific_settings</a></code> dans <code>manifest.json</code> et définissez sa propriété <code>gecko.id</code> :</p>

<pre class="brush: json ">"browser_specific_settings": {
  "gecko": {
    "id": "borderify@example.com"
  }
}</pre>
</div>

<h3 id="iconsborder-48.png">icons/border-48.png</h3>

<p>Le module doit posséder une icône qui sera affichée dans le gestionnaire de modules du navigateur. Le fichier <code>manifest.json</code> utilisé ici fournit une icône <code>icons/border-48.png</code>.</p>

<p>Créons le répertoire <code>icons</code> directement sous le répertoire <code>borderify</code>. Fournissez une icône nommée <code>border-48.png</code>. Vous pouvez utiliser <a href="https://raw.githubusercontent.com/mdn/webextensions-examples/master/borderify/icons/border-48.png">celle-ci</a>, qui est tirée du repértoire d'icônes Google Material Design, et est utilisable à condition de respecter les termes de la licence <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike</a>.</p>

<p>Si vous décidez de fournir votre propre icône, sa taille devra être de 48x48 pixels. Il est aussi possible de fournir une icône de 96x96 pixels, adaptée à l'affichage en haute résolution et, dans ce cas, elle devra être spécifiée par la propriété <code>96</code> de l'objet icon dans le fichier <code>manifest.json</code> :</p>

<pre class="brush: json">"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}</pre>

<p>Une alternative est de fournir un fichier SVG qui sera automatiquement mis à la bonne échelle.</p>

<ul>
 <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons">En savoir plus sur la spécification d'icône.</a></li>
</ul>

<h3 id="borderify.js">borderify.js</h3>

<p>Enfin, créez un fichier nommé <code>borderify.js</code> directement dans le répertoire <code>borderify</code> et insérez-y ceci :</p>

<pre class="brush: js ">document.body.style.border = "5px solid red";</pre>

<p>Ce script sera chargé dans chaque page où le domaine correspond au motif fourni par la clé <code>content_scripts</code> du manifeste. Ce script a un accès direct au document contrairement à des scripts chargés par la page elle-même.</p>

<ul>
 <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">Pour en savoir plus sur les scripts de contenu.</a></li>
</ul>

<h2 id="Trying_it_out">Essai</h2>

<p>D'abord, vérifiez de nouveau que les bons fichiers sont au bon endroit :</p>

<pre>borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json</pre>

<h3 id="Installing">Installation</h3>

<p>Dans Firefox : Ouvrez la page <a href="/fr/docs/Tools/about:debugging">about:debugging</a>, cliquez sur "Firefox" (dans les versions plus récentes de Firefox), cliquez sur « Chargez un module complémentaire temporaire… », puis sélectionnez n'importe quel fichier dans le répertoire de votre extension.</p>

<p>{{EmbedYouTube("cer9EUKegG4")}}</p>

<p>Le module complémentaire est dorénavant installé et persistera jusqu’à ce que vous redémarriez Firefox.</p>

<p>Une autre alternative est d’exécuter l'extension depuis la ligne de commande à l'aide de l'outil <a href="https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/">web-ext</a>.</p>

<h3 id="Testing">Test</h3>

<p>Rendez-vous sur une page web du domaine "mozilla.org". Vous devriez y voir une bordure rouge qui entoure la page :</p>

<p>{{EmbedYouTube("rxBQl2Z9IBQ")}}</p>

<div class="note">
<p><strong>Note :</strong> Toutefois, n'essayez pas ce module sur addons.mozilla.org ! Les scripts de contenu sont bloqués sur ce domaine.</p>
</div>

<p>Expérimentez un peu en modifiant le contenu du script, en changeant par exemple la couleur de la bordure ou en altérant le contenu de la page. Puis sauvegardez le content script, rechargez les fichiers du module en cliquant sur le bouton « Recharger » dans about:debugging. Les changements sont immédiats :</p>

<p>{{EmbedYouTube("NuajE60jfGY")}}</p>

<ul>
 <li><a href="https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/">En savoir plus sur le chargement des extensions</a></li>
</ul>

<h2 id="Packaging_and_publishing">Empaqueter et publier</h2>

<p>Afin que d'autres personnes puissent utiliser votre module, il vous faut l'empaqueter et le soumettre à la signature de Mozilla. Pour en apprendre plus, voir <a href="/fr/docs/orphaned/Mozilla/Add-ons/WebExtensions/Package_your_extension_">"Publier votre extension"</a>.</p>

<h2 id="Whats_next">Et ensuite ?</h2>

<p>Maintenant que vous avez eu une introduction au processus de développement d'une WebExtension pour Firefox, voici quelques suggestions pour la suite :</p>

<ul>
 <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension">Rédiger une extension plus complexe</a></li>
 <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">En lire d'avantage sur l'anatomie d'une WebExtensions</a></li>
 <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Examples">Explorer les exemples d'extension</a></li>
 <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/What_next_">Découvrir ce dont vous avez besoin pour développer, tester et publier votre extension</a></li>
 <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/What_next_#continuez_votre_exp%c3%a9rience_d'apprentissage">Poursuivre votre apprentissage</a>.</li>
</ul>
