---
title: Travailler avec l'API Bookmarks
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
tags:
  - Add-ons
  - Bookmarks
  - Comment
  - Débutant
  - Extensions
  - How-to
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
---
<p>{{AddonSidebar}}</p>

<p>Les signets permettent aux utilisateurs de collecter et d'organiser des listes de pages Web, afin qu'ils puissent facilement retrouver leurs favoris. Grâce à l'API Bookmarks, vos extensions peuvent manipuler les signets de la même manière que les utilisateurs.</p>



<h2 id="Permissions">Permissions</h2>

<p>Pour utiliser l'API Bookmarks, vous devez demander la permission <code>"bookmarks"</code> dans le fichier manifest.json de votre extension</p>

<pre class="brush: json">"permissions": [
  "bookmarks"
],</pre>

<h2 id="Caractéristiques">Caractéristiques</h2>

<p>L'API Bookmarks permet à votre extension de faire ce que les utilisateurs peuvent faire avec les signets et inclut des fonctions pour :</p>

<ul>
 <li>Manipulation élémentaire d'un signet, offrant :
  <ul>
   <li>Ajouter ({{WebExtAPIRef("bookmarks.create")}}).</li>
   <li>Récupérer ({{WebExtAPIRef("bookmarks.get")}}).</li>
   <li>Mettre à jour ({{WebExtAPIRef("bookmarks.update")}}).</li>
   <li>Déplacer ({{WebExtAPIRef("bookmarks.move")}}).</li>
   <li>Supprimer ({{WebExtAPIRef("bookmarks.remove")}}).</li>
   <li>Rechercher ({{WebExtAPIRef("bookmarks.search")}}).</li>
  </ul>
 </li>
 <li>Obtention d'une liste de signets récemment ajoutés ({{WebExtAPIRef("bookmarks.getRecent")}}).</li>
 <li>Signet la manipulation de l'arborescence des dossiers pour :
  <ul>
   <li>Obtenir des informations sur l'arborescence  ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}}, and {{WebExtAPIRef("bookmarks.getSubTree")}}).</li>
   <li>Ajouter des branches ({{WebExtAPIRef("bookmarks.create")}}).</li>
   <li>Supprimer des noeuds ({{WebExtAPIRef("bookmarks.removeTree")}}).</li>
   <li>Déplacer des nœuds ({{WebExtAPIRef("bookmarks.move")}}).</li>
  </ul>
 </li>
 <li>Écoute des événements de signets (ou de dossiers d'arborescence de signets) qui :
  <ul>
   <li>Ajouter ({{WebExtAPIRef("bookmarks.onCreated")}}).</li>
   <li>Changer ({{WebExtAPIRef("bookmarks.onChanged")}}).</li>
   <li>Déplacer ({{WebExtAPIRef("bookmarks.onMoved")}}.</li>
   <li>Ré-order ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).</li>
   <li>Supprimer ({{WebExtAPIRef("bookmarks.onRemoved")}}).</li>
  </ul>
 </li>
 <li>Écoute des importations de signets, qui peuvent être utilisées pour suspendre le traitement d'un autre signet pendant l'importation :
  <ul>
   <li>Importer commencé ({{WebExtAPIRef("bookmarks.onImportBegan")}}).</li>
   <li>Importer terminé ({{WebExtAPIRef("bookmarks.onImportEnded")}}).</li>
  </ul>
 </li>
</ul>

<h2 id="Exemple_de_procédure_pas_à_pas">Exemple de procédure pas à pas</h2>

<p>Pour comprendre comment utiliser l'API Bookmarks, jetons un coup d'œil à l'exemple  <a href="https://github.com/mdn/webextensions-examples/tree/master/bookmark-it">bookmark-it</a>. Cet exemple ajoute une icône de barre d'outils  ({{WebExtAPIRef("browserAction")}}) lorsqu'on clique dessus, ajoute ou supprime la page en cours des signets. Si la page est mise en signet (ou supprimée des signets) d'une autre manière, l'icône est mise à jour pour montrer l'état du signet de la page.</p>

<p>Cette vidéo montre l'extension en action :</p>

<p>{{EmbedYouTube("hCDN0FotiFw")}}</p>

<h3 id="manifest.json">manifest.json</h3>

<p>Le <a href="https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/manifest.json">manifest.json</a> décrit l'extension :</p>

<pre class="brush: json">{
  "manifest_version": 2,
  "name": "Bookmark it!",
  "version": "1.1",
  "description": "A simple bookmark button",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/bookmark-it",</pre>



<p>Définit les icônes qui seront utilisées pour représenter l'extension, dans des endroits tels que le gestionnaire de modules complémentaires.</p>



<pre class="brush: json">  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },</pre>

<p>Demande des permissions. <code>"bookmarks"</code> est demandé pour permettre l'utilisation de l'API Bookmarks. Des <code>"onglets"</code> sont demandés afin que l'URL et le titre de l'onglet actif puissent être lus et utilisés pour créer ou rechercher le signet de la page. Le besoin de l'API Tabs pour accéder à ces détails signifie que vous ne pouvez pas utiliser l'API Bookmark sans l'API Tabs.</p>

<pre class="brush: json">  "permissions": [
    "bookmarks",
    "tabs"
  ],</pre>

<p>Définit les détails du bouton de la barre d'outils de base. La plupart des fonctionnalités du bouton seront configurées dans le code une fois que le statut du signet de la page sera connu.</p>

<pre class="brush: json">  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },</pre>

<p>Définit le script d'arrière-plan qui ajoutera et supprimera le signet de la page et définira les caractéristiques du bouton de la barre d'outils.</p>

<pre class="brush: json">  "background": {
    "scripts": ["background.js"]
  }

}</pre>

<h3 id="background.js">background.js</h3>

<p>Comme pour tout script d'arrière-plan, <a href="https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/background.js">background.js</a>est exécuté dès que l'extension est démarrée. Initialement, le script appelle <code>updateActiveTab()</code> qui commence par obtenir l'objet <code>Tabs</code> pour l'onglet en cours, en utilisant {{WebExtAPIRef("tabs.query")}}, et en passant l'objet à <code>updatetab()</code> avec ce code :</p>

<pre class="brush: js">  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);</pre>

<p><code>updatetab()</code> passe d'abord l'URL de l'onglet actif à <code>isSupportedProtocol()</code>:</p>

<pre class="brush: js">  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {</pre>

<p><code>isSupportedProtocol()</code> determines if the URL displayed in the active tab is one that can be bookmarked. To extract the protocol from the tab’s URL, the extension takes advantage of the <a href="/fr/docs/Web/API/HTMLHyperlinkElementUtils">HTMLHyperlinkElementUtils</a> by adding the tab’s URL to an <code>&lt;a&gt;</code> element and then getting the protocol using the <code>protocol</code> property.</p>

<pre class="brush: js">  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }</pre>

<p>Si le protocole est pris en charge par les signets, l'extension détermine si l'URL de l'onglet est déjà référencée et si c'est le cas, appelle <code>updateIcon()</code>:</p>

<pre class="brush: js">      var searching = browser.bookmarks.search({url: currentTab.url});
      searching.then((bookmarks) =&gt; {
        currentBookmark = bookmarks[0];
        updateIcon();</pre>

<p><code>updateIcon()</code> définit l'icône et le titre du bouton de la barre d'outils, selon que l'URL est mise en signet ou non.</p>

<pre class="brush: js">function updateIcon() {
  browser.browserAction.setIcon({
    path: currentBookmark ? {
      19: "icons/star-filled-19.png",
      38: "icons/star-filled-38.png"
    } : {
      19: "icons/star-empty-19.png",
      38: "icons/star-empty-38.png"
    },
    tabId: currentTab.id
  });
  browser.browserAction.setTitle({
    // Screen readers can see the title
    title: currentBookmark ? 'Unbookmark it!' : 'Bookmark it!',
    tabId: currentTab.id
  });
}</pre>

<p>Avec le bouton de la barre d'outils initialisé, l'extension commence à écouter un clic sur le bouton de la barre d'outils, en appelant <code>toggleBookmark()</code> lorsque cela se produit.</p>

<pre class="brush: js">browser.browserAction.onClicked.addListener(toggleBookmark);</pre>

<p><code>toggleBookmark()</code> utilise le résultat de la recherche effectuée par <code>updateTabs()</code>, qui recherche la présence de l'URL dans un signet, afin de déterminer s'il faut supprimer ou ajouter un signet pour l'URL actuelle.</p>

<pre class="brush: js">function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({title: currentTab.title, url: currentTab.url});
  }
}</pre>

<p>Pour mettre à jour l'icône de la barre d'outils, l'extension écoute la création ou la suppression des signets. Cette approche a l'avantage de capturer à la fois la mise à jour de signet effectuée par l'extension et toute mise à jour faite par l'utilisateur en dehors de l'extension.</p>

<pre class="brush: js">// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);</pre>

<p>Enfin, l'extension est à l'écoute d'une modification apportée à l'URL de l'onglet actif, ou l'utilisateur passe à un autre onglet ou une autre fenêtre. Ces actions peuvent modifier l'URL affichée et donc l'état de l'icône de la barre d'outils de l'extension.</p>

<pre class="brush: js">// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);</pre>

<h2 id="Apprendre_encore_plus">Apprendre encore plus</h2>

<p>Si vous voulez en savoir plus, consultez la <a href="/fr/Add-ons/WebExtensions/API/bookmarks">référence de l'API Bookmarks</a>.</p>
