---
title: Votre deuxième WebExtension
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
---
<div>{{AddonSidebar}}</div>

<p>Si vous avez lu l'article <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension">votre première extension</a>, vous avez déjà une idée de la manière d'écrire une extension. Dans cet article, nous allons écrire une extension légèrement plus complexe qui illustre un peu plus les API.</p>

<p>L'extension ajoute un nouveau bouton à la barre d'outils Firefox. Lorsque l'utilisateur clique sur le bouton, nous affichons une fenêtre contextuelle qui leur permet de choisir un animal. Une fois l'animal choisi, l'extension remplace le contenu de la page actuelle par une image de l'animal choisi.</p>

<p>Pour implémenter ce module, il nous faut :</p>

<ul>
  <li><strong>Définir une <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action">action du navigateur (<i>browser action</i>)</a>, matérialisée par un bouton dans la barre d'outils de Firefox</strong>. Pour ce bouton, nous avons besoin :
    <ul>
      <li>d'une icône, nommée "beasts-32.png"</li>
      <li>d'une popup qui s'ouvrira lorsqu'on cliquera sur le bouton. La popup sera constituée d'HTML, de CSS et de JavaScript.</li>
    </ul>
  </li>
  <li><strong>Définir l'icône de l'extension,</strong> nommée "beasts-48.png". Elle apparaîtra dans le gestionnaire de module.</li>
  <li><strong>Écrire un script de contenu (<i>content script</i>), "beastify.js" qui sera injecté dans les pages web</strong>. C'est le code qui va effectivement transformer les pages.</li>
  <li><strong>Packager les images d'animaux, afin de remplacer les images de la page web</strong>. Nous définirons les images comme étant des ressources accessibles par le Web de sorte que la page web puisse y accéder.</li>
</ul>

<p>Voici une visualisation globale possible de la structure du module :</p>

<p><img alt="" src="untitled-1.png"></p>

<p>Il s'agit d'une extension simple mais qui démontre plusieurs concepts élémentaires de l'API des WebExtensions :</p>

<ul>
  <li>Ajout d'un bouton à la barre d'outils</li>
  <li>Définition d'une popup à l'aide de HTML, CSS et JavaScript</li>
  <li>Injection des scripts de contenu dans les pages web</li>
  <li>Communication entre les scripts de contenu et le reste de l'extension</li>
  <li>Empaquetage de ressources comme les images dans le module afin que celles-ci puissent ensuite être utilisées par les pages web</li>
</ul>

<p>Le <a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">code source complet du module est disponible sur GitHub</a>.</p>

<p>Afin de tester cette extension, vous aurez besoin de Firefox 45 ou d'une version ultérieure.</p>

<h2 id="writing_the_extension">Écrire l'extension</h2>

<p>Créez un nouveau répertoire et positionnez-vous dedans :</p>

<pre class="brush: bash">
mkdir beastify
cd beastify
</pre>

<h3 id="manifest.json">manifest.json</h3>

<p>Créez un nouveau fichier nommé "manifest.json" directement dans le répertoire "beastify" et saisissez-y le contenu suivant :</p>

<pre class="brush: json">
{

  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Ajoute une icône à la barre d'outil pour une action navigateur. Cliquez sur le bouton pour choisir une bête. Le contenu de l'onglet actif sera alors remplacé par une image de la bête choisie. Voir https://developer.mozilla.org/fr/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": [
    "activeTab"
  ],

  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    "beasts/frog.jpg",
    "beasts/turtle.jpg",
    "beasts/snake.jpg"
  ]
}
</pre>

<ul>
 <li>Les trois premières clés : <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version">manifest_version</a></code>, <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name">name</a></code>, et <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version">version</a></code>, sont obligatoires et contiennent les métadonnées élémentaires nécessaires à l'extension.</li>
 <li><code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description">description</a></code> and <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url">homepage_url</a></code> sont optionnelles mais recommandées : elles apportent des informations utiles à propos de l'extension.</li>
 <li><code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons">icons</a></code> est optionnelle mais recommandée : elle permet de spécifier l'icône du module qui s'affichera dans le gestionnaire d'extension.</li>
 <li><code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code> indique les permissions nécessaires à cette extension. Ici, uniquement  <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission">la permission <code>activeTab</code></a> est demandée.</li>
 <li><code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code> spécifie le bouton de la barre d'outil. Nous fournissons trois informations :
  <ul>
   <li><code>default_icon</code> est obligatoire et référence l'icône du bouton</li>
   <li><code>default_title</code> est optionelle et s'affichera dans une bulle d'aide</li>
   <li><code>default_popup</code> est nécessaire si vous souhaitez qu'une popup s'affiche lorsque l'utilisateur clique sur le bouton. C'est notre cas, nous avons donc défini cette clé et l'avons faite pointer sur un fichier HTML inclus dans le module.</li>
  </ul>
 </li>
 <li><code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources">web_accessible_resources</a></code> liste les fichiers qui doivent être accessibles aux pages web. Comme cette extension remplace le contenu de la page web par les images incluses dans cette extension, il faut les rendre accessibles à la page.</li>
</ul>

<p>Il est à noter que tous les chemins sont relatifs au fichier manifest.json.</p>

<h3 id="the_icon">L'icône</h3>

<p>L'extension doit posséder une icône qui sera affichée dans le catalogue des extensions et dans la liste des extensions du navigateur (vous pouvez afficher le gestionnaire en ouvrant l'URL "about:addons"). Le fichier manifest.json a déclaré une icône pour la barre d'outils, "icons/beasts-48.png".</p>

<p>Créez le répertoire "icons" et enregistrez-y une icône nommée "beasts-48.png".  Vous pouvez utiliser <a href="https://github.com/mdn/webextensions-examples/raw/master/beastify/icons/beasts-48.png">une image de notre exemple</a>, provenant du jeu d'icônes de <a href="https://www.iconfinder.com/iconsets/free-retina-icon-set">Aha-Soft's Free Retina</a> et utilisable selon les termes de sa <a href="http://www.aha-soft.com/free-icons/free-retina-icon-set/">licence</a>.</p>

<p>Si vous décidez de fournir votre propre icône, sa taille devra être de 48 pixels par 48 pixels. Il vous est aussi possible de fournir une icône de taille 96 pixels par 96 pixels, adaptée aux affichages haute résolution, et, devra dans ce cas, être spécifiée par la propriété <code>96</code> de l'objet <code>icons</code> du manifeste :</p>

<pre class="brush: json">
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}</pre>

<h3 id="the_toolbar_button">Le bouton de la barre d'outils</h3>

<p>Une icône est nécessaire pour le bouton de la barre d'outils et le manifeste déclare une icône "icons/beasts-32.png" pour la barre d'outils.</p>

<p>Enregistrez une icône nommée "beasts-32.png" dans le répertoire "icons". Vous pouvez utiliser <a href="https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-32.png">une image de notre exemple</a>, provenant du jeu d'icône <a href="http://www.iconbeast.com/free">IconBeast Lite icon</a> et utilisable selon les termes de sa <a href="http://www.iconbeast.com/faq/">licence</a>.</p>

<p>Si vous ne fournissez pas de popup, alors un évènement <code>click</code> est propagé au contexte de l'extension lorque l'utilisateur clique sur le bouton. Si une popup est fournie, l'évènement <code>click</code> n'est pas propagé, mais la popup fournie par l'extension s'ouvrira à la place. C'est ce que nous voulons faire ici, créons cette popup.</p>

<h3 id="the_popup">La popup</h3>

<p>Le but de la popup est de permettre à l'utilisateur de choisir une des trois bêtes.</p>

<p>Créez un nouveau répertoire nommé "popup" à la racine de l'extension. Ce sera l'emplacement du code de la popup. La popup sera constituée de trois fichiers :</p>

<ul>
 <li><strong><code>choose_beast.html</code></strong> qui définit le contenu du panneau</li>
 <li><strong><code>choose_beast.css</code></strong> qui met en forme le contenu de ce panneau</li>
 <li><strong><code>choose_beast.js</code></strong> qui gére le choix de l'utilisateur en exécutant un script de contenu dans l'onglet actif du navigateur</li>
</ul>

<pre class="brush: bash">
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
</pre>


<h4 id="choose_beast.html">choose_beast.html</h4>

<p>Voici le contenu du fichier HTML :</p>

<pre class="brush: html">
&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;link rel="stylesheet" href="choose_beast.css"/&gt;
  &lt;/head&gt;

&lt;body&gt;
  &lt;div id="popup-content"&gt;
    &lt;div class="button beast"&gt;Grenouille&lt;/div&gt;
    &lt;div class="button beast"&gt;Tortue&lt;/div&gt;
    &lt;div class="button beast"&gt;Serpent&lt;/div&gt;
    &lt;div class="button reset"&gt;Réinitialiser&lt;/div&gt;
  &lt;/div&gt;
  &lt;div id="error-content" class="hidden"&gt;
    &lt;p&gt;Cette page ne peut être transformée.&lt;/p&gt;
    &lt;p&gt;Veuillez essayer une autre page.&lt;/p&gt;
  &lt;/div&gt;
  &lt;script src="choose_beast.js"&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</pre>

<p>On a un élément <code><a href="/fr/docs/Web/HTML/Element/div">&lt;div&gt;</a></code> dont l'identifiant (<code>id</code>) vaut <code>"popup-content"</code> et qui contient un élément pour chaque choix d'animal. On a également un autre <code>&lt;div&gt;</code> avec l'identifiant <code>"error-content"</code> et une classe <code>"hidden"</code>. Nous utiliserons cet élément au cas où il y ait un problème à l'initialisation de la popup.</p>

<p>Il est à noter que le ficher CSS et le fichier JS sont inclus depuis ce fichier, tout comme une page web normale.</p>

<h4 id="choose_beast.css">choose_beast.css</h4>

<p>Le CSS fixe la taille de la popup, s'assure que les trois choix remplissent l'espace et les met en forme de façon élémentaire. C'est aussi le CSS qui masque les éléments avec <code>class="hidden"</code>, cela signifie que l'élément <code>&lt;div&gt;</code> <code>"error-content"</code> sera masqué par défaut :</p>

<pre class="brush: css">
html, body {
  width: 100px;
}

.hidden {
  display: none;
}

.button {
  margin: 3% auto;
  padding: 4px;
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
}

.beast:hover {
  background-color: #CFF2F2;
}

.beast {
  background-color: #E5F2F2;
}

.reset {
  background-color: #FBFBC9;
}

.reset:hover {
  background-color: #EAEA9D;
}
</pre>

<h4 id="choose_beast.js">choose_beast.js</h4>

<pre class="brush: js">
/**
 * On utilise CSS pour masquer tout ce qui se trouve sur la
 * page sauf les éléments avec la classe "beastify-image".
 */
const hidePage = `body &gt; :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * On écoute les clics sur les boutons et on envoie 
 * un message approprié au script de contenu dans la page
 */
function listenForClicks() {
  document.addEventListener("click", (e) =&gt; {

    /**
     * Selon le nom de la bête, on fournit l'URL vers 
     * l'image correspondante.
     */
    function beastNameToURL(beastName) {
      switch (beastName) {
        case "Grenouille":
          return browser.runtime.getURL("beasts/frog.jpg");
        case "Serpent":
          return browser.runtime.getURL("beasts/snake.jpg");
        case "Tortue":
          return browser.runtime.getURL("beasts/turtle.jpg");
      }
    }

    /**
     * On insère le CSS qui masque le contenu de la page
     * dans l'onglet actif puis on récupère l'URL de la bête
     * avant d'envoyer un message "beastify" au script de contenu
     * dans l'onglet actif.
     */
    function beastify(tabs) {
      browser.tabs.insertCSS({code: hidePage}).then(() =&gt; {
        let url = beastNameToURL(e.target.textContent);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "beastify",
          beastURL: url
        });
      });
    }

    /**
     * On retire le CSS qui masque le contenu de l'onglet actif
     * et on envoie un message "reset" au script de contenu dans
     * l'onglet actif.
     */
    function reset(tabs) {
      browser.tabs.removeCSS({code: hidePage}).then(() =&gt; {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }

    /**
     * On affiche l'erreur dans la console.
     */
    function reportError(error) {
      console.error(`Beastify impossible : ${error}`);
    }

    /**
     * On obtient l'onglet actif et on appelle
     * "beastify()" ou "reset()" lorsque c'est pertinent.
     */
    if (e.target.classList.contains("beast")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(beastify)
        .catch(reportError);
    }
    else if (e.target.classList.contains("reset")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(reset)
        .catch(reportError);
    }
  });
}

/**
 * Lors d'une erreur d'exécution du script, on affiche le
 * message d'erreur dans la popup et on masque l'interface
 * utilisateur normale.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Erreur d'exécution du script de contenu beastify : ${error.message}`);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs.executeScript({file: "/content_scripts/beastify.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
</pre>

<p>Pour commencer, le script de la popup exécute un script de contenu dans l'onglet actif dès que la popup est chargée grâce à la méthode <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript">browser.tabs.executeScript()</a></code>. Si l'exécution du script est réussie, le script de contenu sera chargé dans la page jusqu'à ce que l'onglet soit fermé ou que l'utilisateur navigue sur une autre page.</p>

<p>On peut avoir des erreurs lors de l'appel à <code>browser.tabs.executeScript()</code> car il est impossible d'exécuter des scripts de contenu sur certaines pages. On ne peut, par exemple, pas en exécuter pour certaines pages privilégiées comme about:debugging ou sur des pages du domaine <a href="https://addons.mozilla.org/">addons.mozilla.org</a>. Si un tel échec se produit, <code>reportExecuteScriptError()</code> masquera l'élément avec <code>"popup-content"</code> et affichera celui avec <code>"error-content"</code> puis enregistrera une erreur dans <a href="https://extensionworkshop.com/documentation/develop/debugging/">la console</a>.</p>
 
<p>Si l'exécution du script de contenu réussit, la méthode <code>listenForClicks()</code> est appelée. Celle-ci permet d'écouter les clics sur la popup.</p>
 
<ul>
  <li>Si le clic a lieu sur un bouton avec <code>class="beast"</code>, on appelle <code>beastify()</code>.</li>
  <li>Si le clic a lieu sur un bouton avec <code>class="reset"</code>, on appelle <code>reset()</code>.</li>
</ul>

<p>La fonction <code>beastify()</code> fait trois choses :</p>

<ul>
  <li>Correspondre le bouton qui a reçu le clic avec l'URL d'une image correspondant à la bête choisie</li>
  <li>Masquer tout le contenu de la page en injectant du CSS avec <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS">browser.tabs.insertCSS()</a></code></li>
  <li>Envoyer un message "beastify" au script de contenu avec <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage">browser.tabs.sendMessage()</a></code> pour lui demander de transformer la page en lui passant l'URL de l'image pour la bête sélectionnée.</li>
</ul>

<p>La fonction <code>reset()</code> annule la transformation de l'onglet courant en :</p>

<ul>
  <li>Retirant le CSS ajouté grâce à <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS">browser.tabs.removeCSS()</a></code></li>
  <li>Envoyant un message "reset" au script de contenu pour lui demander de réinitialiser la page.</li>
</ul>

<h3 id="the_content_script">Le script de contenu (<i>content script</i>)</h3>

<p>Créez un nouveau répertoire sous la racine du module nommé "content_scripts" et créez un nouveau fichier nommé "beastify.js", contenant :</p>

<pre class="brush: js">
(function() {
  /**
   * On vérifie et on initialise une variable globale
   * permettant de s'assurer que le script ne fera rien
   * s'il est injecté plusieurs fois sur la page.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Selon une URL fournie, on retire les éventuelles bêtes
   * déjà ajoutées et on crée un élément img
   * qui pointe vers l'image indiquée par l'URL et on insère
   * le nœud dans le document.
   */
  function insertBeast(beastURL) {
    removeExistingBeasts();
    let beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }

  /**
   * On retire toute bête présente sur la page.
   */
  function removeExistingBeasts() {
    let existingBeasts = document.querySelectorAll(".beastify-image");
    for (let beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * On écoute les messages du script d'arrière-plan pour
   * déclencher "insertBeast()" ou "removeExistingBeasts()".
   */
  browser.runtime.onMessage.addListener((message) =&gt; {
    if (message.command === "beastify") {
      insertBeast(message.beastURL);
    } else if (message.command === "reset") {
      removeExistingBeasts();
    }
  });
})();
</pre>

<p>La première chose que fait le script de contenu est de vérifier une variable globale <code>window.hasRun</code> : si elle est déjà définie, le script rend la main et sinon, il définit <code>window.hasRun</code> puis continue. On fait ceci pour éviter que la popup exécute un script de contenu à chaque fois que l'utilisateur ouvre la popup (y compris pour le même onglet) afin d'éviter d'avoir plusieurs instances du script dans le même onglet. Si un utilisateur ouvre plusieurs fois la popup, on doit s'assurer que c'est bien la première instance du script qui gère ce qui se passe.</p>

<p>Après ça, on voit plus loin que le script de contenu utilise <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage">browser.runtime.onMessage</a></code>. Cela permet de faire le lien avec le script de popup qui envoyait deux messages : "beastify" et "reset".</p>

<ul>
  <li>Si le message est "beastify", on s'attend à ce que celui-ci contienne une URL pointant vers une image. On supprime alors toute image de bête ayant été placée par d'éventuels appels précédents puis on construit et on ajoute un élément <code><a href="/fr/docs/Web/HTML/Element/Img">&lt;img&gt;</a></code> dont l'attribut <code>src</code> est défini avec l'URL pointant vers l'image de la bête sélectionnée.</li>
  <li>Si le message est "reset", on retire toute image de bête ayant été ajoutée.</li>
</ul>

<h3 id="the_beasts">Les bêtes</h3>

<p>Enfin, nous devons inclure les images d'animaux.</p>

<p>Créez un nouveau répertoire nommé "beasts", et ajoutez-y les trois images, nommées de façon appropriée. Vous pouvez récupérer les images du <a href="https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts">dépôt GitHub</a>, ou bien ci-après :</p>

<p><img alt="" src="frog.jpg"><img alt="" src="snake.jpg"><img alt="" src="turtle.jpg"></p>

<h2 id="testing_it_out">Test</h2>

<p>D'abord, vérifiez de nouveau que les bons fichiers sont au bon endroit :</p>

<pre>
beastify/

  beasts/
    frog.jpg
    snake.jpg
    turtle.jpg

  content_scripts/
    beastify.js

  icons/
    beasts-32.png
    beasts-48.png

  popup/
    choose_beast.css
    choose_beast.html
    choose_beast.js

  manifest.json
</pre>

<p>A partir de Firefox version 45, il est possible d'installer les WebExtensions temporairement.</p>

<p>Ouvrez "about:debugging" dans Firefox, cliquez sur "Charger un module complémentaire temporaire", et choisissez le fichier manifest.json. Vous devriez voir apparaitre l'icône du module dans la barre d'outils de Firefox :</p>

<p>{{EmbedYouTube("sAM78GU4P34")}}</p>

<p>Ouvrez une page web et cliquez sur l'icône, sélectionnez une bête et observez la page web se modifier :</p>

<p>{{EmbedYouTube("YMQXyAQSiE8")}}</p>

<h2 id="developing_from_the_command_line">Développement depuis la ligne de commande</h2>

<p>Il est possible d'automatiser l'installation temporaire de modules, étape par étape en utilisant l'outil <a href="https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/">web-ext</a> tool. Essayez ainsi :</p>

<pre class="brush: bash">
cd beastify
web-ext run
</pre>

<h2 id="whats_next">Et ensuite ?</h2>

<p>Maitenant que vous avez créé une WebExtension avancée pour Firefox, vous pouvez :</p>

<ul>
  <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">Explorer l'anatomie d'une extension</a></li>
  <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Examples">Explorer les exemples d'extension</a></li>
  <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/What_next_">Découvrir ce dont vous avez besoin pour développer, tester et publier votre extension</a></li>
  <li><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/What_next_#continuez_votre_exp%c3%a9rience_d'apprentissage">Approfondir votre apprentissage</a>.</li>
</ul>
