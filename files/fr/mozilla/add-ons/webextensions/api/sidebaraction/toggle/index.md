---
title: sidebarAction.toggle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/toggle
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Reference
  - WebExtensions
  - sidebarAction
  - toogle
translation_of: Mozilla/Add-ons/WebExtensions/API/sidebarAction/toggle
---
<div>{{AddonSidebar()}}</div>

<p>Permet de basculer la visibilité de la barre latérale dans la fenêtre active, si la barre latérale appartient à l'extension.</p>

<p>Vous ne pouvez appeler cette fonction que depuis l'intérieur du gestionnaire pour une <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/User_actions">action utilisateur</a>.</p>

<p>Il s'agit d'une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.sidebarAction.toggle()
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Aucune.</p>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui est résolue sans discussion.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.sidebarAction.toggle", 10)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Bascule la barre latérale lorsque l'utilisateur sélectionne un élément dans le menu contextuel :</p>

<pre class="brush: js">browser.menus.create({
  id: "toggle-sidebar",
  title: "Toggle sidebar",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(() =&gt; {
  browser.sidebarAction.toggle();
});</pre>

<p>{{WebExtExamples}}</p>
