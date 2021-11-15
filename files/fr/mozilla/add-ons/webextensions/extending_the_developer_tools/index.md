---
title: Extension des outils de développement
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
tags:
  - Add-ons
  - DevTools
  - Extensions
  - Guide
  - Needs Privileges
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
original_slug: Mozilla/Add-ons/WebExtensions/extension_des_outils_de_developpement
---
<div>{{AddonSidebar}}</div>

<div class="note">
<p><strong>Note :</strong> Cette page décrit les API  de devtools telles qu'elles existent dans Firefox 55. Bien que les API soient basées sur les  <a href="https://developer.chrome.com/extensions/devtools">API devtools de chrome</a>, il existe encore de nombreuses fonctionnalités qui ne sont pas encore implémentées dans Firefox et ne sont donc pas documentées ici. Pour voir quelles fonctionnalités sont actuellement manquantes, voir les <a href="/fr/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs">Limitations des APIs devtools</a>.</p>
</div>

<p>Vous pouvez utiliser les API WebExtensions pour étendre les outils de développement intégrés du navigateur. Pour créer une extension devtools, incluez la clé "<a href="/fr/Add-ons/WebExtensions/manifest.json/devtools_page">devtools_page</a>" dans <a href="/fr/Add-ons/WebExtensions/manifest.json">manifest.json</a>:</p>

<pre class="brush: json">"devtools_page": "devtools/devtools-page.html"</pre>

<p>La valeur de cette clé est une URL indiquant un fichier HTML qui a été regroupé avec votre extension. L'URL doit être relative au fichier manifest.json lui-même.</p>

<p>Le fichier HTML définit une page spéciale dans l'extension, appelée la page devtools.</p>

<h2 id="La_page_devtools">La page devtools</h2>

<p>La page Devtools est chargée lorsque les devtools du navigateur sont ouverts et déchargés lorsqu'ils sont fermés. Notez que, parce que la fenêtre devtools est associée avec un seul onglet, il est possible que plus d'une fenêtre devtools - donc plus d'une page devtools - existe en même temps.</p>

<p>La page devtools n'a pas de DOM visible, mais peut inclure des sources JavaScript en utilisant les balises <code><a href="/fr/docs/Web/HTML/Element/script">&lt;script&gt;</a></code>. Les sources doivent être regroupées avec l'extension. Les sources ont accès à :</p>

<ul>
 <li>Les API DOM normales accessibles via l'objet <code><a href="/fr/docs/Web/API/Window">window</a></code> globale</li>
 <li>Les mêmes <a href="/fr/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs">API WebExtension que dans les Scripts de contenu</a></li>
 <li>Les APIs devtools :
  <ul>
   <li><code><a href="/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow">devtools.inspectedWindow</a></code></li>
   <li><code><a href="/fr/Add-ons/WebExtensions/API/devtools.network">devtools.network</a></code></li>
   <li><code><a href="/fr/Add-ons/WebExtensions/API/devtools.panels">devtools.panels</a></code></li>
  </ul>
 </li>
</ul>

<p>Notez que la page devtools n'accède à aucune autre API WebExtension, et que la page d'arrière-plan n'a pas accès aux API devtools. Au lieu de cela, la page devtools et la page d'arrière-plan doivent communiquer à l'aide des API messageries d'<code>éxécution</code>. Voici un exemple :</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src="devtools.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>Le fichier devtools.js contiendra le code réel créant vos extensions d'outils de développement.</p>

<h2 id="Creations_de_panneaux">Creations de panneaux</h2>

<p>La fenêtre devtools héberge un certain nombre d'outils distincts: le débogueur JavaScript, le moniteur réseau, etc. Une rangée d'onglets sur le haut permet à l'utilisateur de basculer entre les différents outils. La fenêtre hébergeant l'interface utilisateur de chaque outil s'appelle un "panneau".</p>

<p>A l'aide de l'API <code>devtools.panel.create()</code>, vous pouvez créer votre propre panneau dans la fenêtre devtools :</p>

<pre class="brush: js">browser.devtools.panels.create(
  "My Panel",                      // title
  "icons/star.png",                // icon
  "devtools/panel/panel.html"      // content
).then((newPanel) =&gt; {
  newPanel.onShown.addListener(initialisePanel);
  newPanel.onHidden.addListener(unInitialisePanel);
});</pre>

<p>Cela nécessite trois arguments obligatoires: le titre, l'icône et le contenu du panneau. Il renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">promesse</a></code> qui résout un objet <code>devtools.panels.ExtensionPanel</code> représentant le nouveau panneau.</p>

<h2 id="Interaction_avec_la_fenêtre_cible">Interaction avec la fenêtre cible</h2>

<p>Les outils de développement sont toujours attachés à un onglet de navigateur particulier. Ceci est appelé "target" pour les outils de développement, ou la "fenêtre inspectée". Vous pouvez interagir avec la fenêtre inspectée en utilisant l'API  <code><a href="/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow">devtools.inspectedWindow</a></code>.</p>

<h3 id="Code_d'exécution_dans_la_fenêtre_cible">Code d'exécution dans la fenêtre cible</h3>

<p>la fonction <code><a href="/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval">devtools.inspectedWindow.eval()</a></code> fournit une façon d'exécuter le code dans la fenêtre inspectée.</p>

<p>C'est un peu comme utiliser {{WebExtAPIRef("tabs.executeScript()")}}  pour injecter un script de contenu, mais avec une différence importante :</p>

<ul>
 <li>Contrairement aux scripts de contenu, les scripts chargés à partir de <code>devtools.inspectedWindow.eval()</code><strong> </strong><strong>n'obtiennent pas</strong> <a href="/fr/Add-ons/WebExtensions/Content_scripts#DOM_access">une "vue nette du DOM" </a>: c'est-à-dire qu'ils peuvent voir des modifications apportées à la page par les scripts de page.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Une vue propre du DOM est une fonction de sécurité destinée à empêcher les pages hostiles de tromper WebExtensions en redéfinissant le comportement des fonctions DOM natives. Cela signifie que vous devez être très prudent en utilisant eval () et utiliser un script de contenu normal si vous le pouvez.</p>
</div>

<p>Les scripts chargés à l'aide de <code>devtools.inspectedWindow.eval()</code> ne voient pas non plus de variables JavaScript définies par les scripts de contenu.</p>

<h3 id="Travailler_avec_les_scripts_de_contenus">Travailler avec les scripts de contenus</h3>

<p>Un document devtools n'a pas d'accès direct à  {{WebExtAPIRef("tabs.executeScript()")}}, donc, si vous devez injecter un script de contenu, le document devtools doit envoyer un message au script en arrière-plan en lui demandant d'injecter le script. La fonction <code><a href="/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/tabId">devtools.inspectedWindow.tabId</a></code>  fournit l'ID de l'onglet cible: le document devtools peut passer le script en arrière-plan, et le script de fond peut à son tour passer dans {{WebExtAPIRef("tabs.executeScript()")}}:</p>

<pre class="brush: js">// devtools-panel.js

const scriptToAttach = "document.body.innerHTML = 'Hi from the devtools';";

window.addEventListener("click", () =&gt; {
  browser.runtime.sendMessage({
    tabId: browser.devtools.inspectedWindow.tabId,
    script: scriptToAttach
  });
});</pre>

<pre class="brush: js">// background.js

function handleMessage(request, sender, sendResponse) {
  browser.tabs.executeScript(request.tabId, {
    code: request.script
  });
}

browser.runtime.onMessage.addListener(handleMessage);</pre>

<p>Si vous avez besoin d'échanger des messages entre les scripts de contenu exécutés dans la fenêtre cible et un document de developpement, il est judicieux d'utiliser {{WebExtAPIRef("runtime.connect()")}} et {{WebExtAPIRef("runtime.onConnect")}} pour configurer une connexion entre la page d'arrière-plan et le document devtools. La page d'arrière-plan peut alors maintenir un mappage entre les ID de l'onglet et les objets {{WebExtAPIRef("runtime.Port")}}, et utilisez-le pour acheminer les messages entre les deux champs.</p>

<p><img alt="" src="devtools-content-scripts.png"></p>

<h2 id="Limitations_des_API_des_devtools">Limitations des API des devtools</h2>

<p>Ces API sont basées sur les API devtools de Chrome, mais de nombreuses fonctionnalités sont encore manquantes par rapport à Chrome. Cette section répertorie les fonctionnalités qui ne sont pas encore implémentées, à partir de Firefox 54. Notez que les API de devtools sont en cours de développement et nous espérons ajouter de l'aide pour la plupart d'entre elles dans les versions ultérieures.</p>

<h3 id="devtools.inspectedWindow">devtools.inspectedWindow</h3>

<p>Les éléments suivants ne sont pas pris en charge :</p>

<ul>
 <li><code>inspectedWindow.getResources()</code></li>
 <li><code>inspectedWindow.onResourceAdded</code></li>
 <li><code>inspectedWindow.onResourceContentCommitted</code></li>
</ul>

<p>Aucune des options à <code>inspectedWindow.eval()</code> n'est prise en charge.</p>

<p>Les scripts injectés à l'aide de <code>inspectedWindow.eval()</code> ne peuvent pas utiliser toutes les fonctions d'assistance en ligne de commande de la console, mais <code>$0</code> et <code>inspect(...)</code> sont tous deux pris en charge (à partir de Firefox 55).</p>

<h3 id="devtools.panels">devtools.panels</h3>

<p>Les éléments suivants ne sont pas pris en charge :</p>

<ul>
 <li><code>panels.elements</code></li>
 <li><code>panels.sources</code></li>
 <li><code>panels.setOpenResourceHandler()</code></li>
 <li><code>panels.openResource()</code></li>
 <li><code>panels.ExtensionPanel.createStatusBarButton()</code></li>
 <li><code>panels.Button</code></li>
 <li><code>panels.ElementsPanel</code></li>
 <li><code>panels.SourcesPanel</code></li>
</ul>

<h2 id="Examples">Examples</h2>

<p>The <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> repo on GitHub contains several examples of WebExtensions that use devtools panels:</p>

<ul>
 <li>
  <p><a href="https://github.com/mdn/webextensions-examples/blob/master/devtools-panels/">devtools-panels</a> use devtools panels:</p>
 </li>
</ul>
