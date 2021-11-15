---
title: tabs.toggleReaderMode()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - tabs
  - toogleReaderMode
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode
---
<div>{{AddonSidebar()}}</div>

<p>Bascule en mode Lecteur pour l'onglet donné.</p>

<ul>
</ul>

<p>Cette fonction permet de basculer en mode Lecteur pour l'onglet donné. Il prend un identifiant de tabulation en tant que paramètre: s'il est omis, l'onglet actuellement actif est basculé.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<p>Le mode Lecteur, également connu sous le nom de Reader View, est une fonction de navigateur qui permet à l'utilisateur de se concentrer plus facilement sur un article en :</p>

<ul>
 <li>masquage d'éléments de page non essentiels, tels que des encadrés, des bas de page et des annonces</li>
 <li>changer la taille du texte de la page, le contraste et la disposition pour une meilleure lisibilité.</li>
</ul>

<p>Le mode Lecteur est utile spécifiquement pour les articles: c'est-à-dire, les pages qui ont un corps de texte comme caractéristique principale. Les pages qui n'ont pas d'article identifiable ne peuvent pas être affichées en mode Lecteur. Pour savoir si une page est un article, vérifiez la propriété <code>isArticle</code> de {{WebExtAPIRef("tabs.Tab")}}.</p>

<p>Pour savoir si un onglet est déjà en mode Lecteur, vérifiez la propriété  <code>isInReaderMode</code> de {{WebExtAPIRef("tabs.Tab")}}. Pour suivre les onglets entrant ou sortant du mode Lecteur, vous devez suivre l'état actuel de tous les onglets et vérifier quand <code>isInReaderMode</code> change :</p>

<pre class="brush: js">function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.status === "complete") {
    console.log(`Tab ${tabId} reader mode: ${tabInfo.isInReaderMode}`);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var toggling = browser.tabs.toggleReaderMode(
  tabId            // optional integer
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>tabId</code>{{optional_inline}}</dt>
 <dd><code>integer</code>. L'ID de l'onglet à afficher en mode Lecteur. Par défaut à l'onglet sélectionné de la fenêtre en cours.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie sans argument lorsque l'onglet a été mis à jour. Si une erreur se produit (par exemple, parce que la page n'était pas un article), la promesse sera rejetée avec un message d'erreur..</p>

<h2 id="Exemples">Exemples</h2>

<p>Ce code bascule chaque nouvelle page en mode lecteur, si cette page est éligible pour cela :</p>

<pre class="brush: js">function switchToReaderMode(tabId, changeInfo, tabInfo) {
  if (changeInfo.isArticle) {
    browser.tabs.toggleReaderMode(tabId);
  }
}

browser.tabs.onUpdated.addListener(switchToReaderMode);</pre>

<p>{{WebExtExamples}}</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.tabs.toggleReaderMode")}}</p>
