---
title: Elements du menu contextuel
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
original_slug: Mozilla/Add-ons/WebExtensions/user_interface/elements_menu_contextuel
---
<div>{{AddonSidebar}}</div>

<p>Cette option d'interface utilisateur ajoute un ou plusieurs éléments à un menu contextuel du navigateur. Il s'agit du menu contextuel disponible lorsqu'un utilisateur clique avec le bouton droit de la souris sur une page Web. Les onglets peuvent aussi avoir des menus contextuels, disponibles via l' API <a href="/fr/Add-ons/WebExtensions/API/menus">browser.menus</a>.</p>

<p><img src="context_menu_example.png"></p>

<p>Vous utiliseriez cette option pour exposer les fonctions qui sont pertinentes à des contextes de navigateur ou de page Web spécifiques. Par exemple, vous pouvez afficher des fonctions pour ouvrir un éditeur graphique lorsque l'utilisateur clique sur une image ou offrir une fonction pour enregistrer le contenu d'une page lorsqu'une partie de celle-ci est sélectionnée. Vous pouvez ajouter des éléments de menu simples, des cases à cocher, des groupes de boutons radio et des séparateurs aux menus. Une fois qu'un élément de menu contextuel a été ajouté à l'aide de {{WebExtAPIRef("contextMenus.create")}}, il est affiché dans tous les onglets du navigateur, mais vous pouvez le masquer en le supprimant avec {{WebExtAPIRef("contextMenus.remove")}}.</p>

<p>La liste complète des contextes pris en charge est disponible sur {{WebExtAPIRef("menus.ContextType")}} et inclut les contextes en dehors d'une page Web, tels que les signets dans l'interface du navigateur. Par exemple, l'extension "<a href="https://github.com/Rob--W/bookmark-container-tab">Open bookmark in Container Tab</a>" ajoute un élément de menu qui permet à l'utilisateur d'ouvrir une URL de signet dans un nouvel onglet de conteneur :</p>

<p><img alt="" src="extension_context_menu.png"></p>

<h2 id="Spécification_des_éléments_du_menu_contextuel">Spécification des éléments du menu contextuel</h2>

<p>Vous gérez les éléments du menu contextuel par programmation, en utilisant l'API {{WebExtAPIRef("contextMenus")}}. Cependant, vous devez demander la permission contextMenus dans votre manifest.json pour pouvoir profiter de l'avantage de l'API.</p>

<pre class="brush: json">"permissions": ["contextMenus"]</pre>
Vous pouvez ensuite ajouter (mettre à jour ou supprimer) les éléments du menu contextuel dans votre script de fond de l'extension. Pour créer un élément de menu, vous spécifiez un ID, son titre et les menus contextuels sur lesquels il doit apparaître:

<pre class="brush: js">browser.contextMenus.create({
  id: "log-selection",
  title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
  contexts: ["selection"]
}, onCreated);</pre>

<p>Votre extension attend les clics sur les éléments du menu. L'information passée sur l'élément a cliqué, le contexte où le clic s'est produit, et les détails de l'onglet où le clic a eu lieu, peuvent ensuite être utilisés pour appeler les fonctionnalités de l'extension appropriées.</p>

<pre class="brush: js">browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    ...
  }
})</pre>

<h2 id="Icônes">Icônes</h2>

<p>Pour plus de détails sur la création d'icônes à utiliser avec votre menu contextuel, voir  <a href="https://design.firefox.com/photon/visuals/iconography.html">Iconography</a> dans la documentation du <a href="https://design.firefox.com/photon/index.html">Systeme de conception de Photon</a>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Le depot <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> sur GitHub contient plusieurs exemples de WebExtensions qui utilise les élements du menu contextuel :</p>

<ul>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/menu-demo">menu-demo</a> ajoute différents éléments au menu contextuel.</li>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types">context-menu-copy-link-with-types</a> ajoute un élément de menu contextuel aux liens qui copient l'URL vers le presse-papiers, comme un texte brut et HTML enrichi.</li>
</ul>