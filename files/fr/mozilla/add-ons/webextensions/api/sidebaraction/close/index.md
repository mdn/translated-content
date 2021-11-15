---
title: sidebarAction.close()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/close
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - close
  - sidebarAction
translation_of: Mozilla/Add-ons/WebExtensions/API/sidebarAction/close
---
<div>{{AddonSidebar()}}</div>

<p>Ferme la barre latérale dans la fenêtre active, s'il s'agit de la barre latérale de l'extension.</p>

<p>Vous pouvez uniquement appeler cette fonction à l'intérieur du gestionnaire pour une <a href="/fr/Add-ons/WebExtensions/User_actions">action utilisateur</a>.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.sidebarAction.close()
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>None.</p>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui est résolue sans arguments.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.sidebarAction.close", 10)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Fermez la barre latérale lorsque l'utilisateur sélectionne un élément de menu contextuel :</p>

<pre class="brush: js">browser.menus.create({
  id: "close-sidebar",
  title: "close sidebar",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(() =&gt; {
  browser.sidebarAction.close();
});</pre>

<p>{{WebExtExamples}}</p>
