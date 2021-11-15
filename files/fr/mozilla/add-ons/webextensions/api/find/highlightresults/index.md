---
title: find.highlightResults()
slug: Mozilla/Add-ons/WebExtensions/API/find/highlightResults
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - find
  - highlightResults
translation_of: Mozilla/Add-ons/WebExtensions/API/find/highlightResults
---
<div>{{AddonSidebar()}}</div>

<p>Souligne les résultats d'un précédent appel à {{WebExtAPIRef("find.find()")}}.</p>

<p>Lorsqu'une extension appelle <code>find()</code>, les correspondances ne sont pas automatiquement mises en surbrillance, mais elles sont stockées par le navigateur. Appelez <code>highlightResults()</code> pour les mettre en surbrillance.</p>

<p>Notez que les résultats stockés sont globaux pour toutes les extensions, par exemple, si l'extension appelle <code>find("apple")</code>, alors si l'extensions B appelle <code>find("banana")</code>, alors si l'extensions A appelle  <code>highlightResults()</code>, le résultat pour "banana" sera mis en évidence.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.find.highlightResults()
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Aucun.</p>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Aucune.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.find.highlightResults", 10)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Recherchez "banana" dans l'onglet actif, notez le nombre de correspondances et mettez-les en surbrillance :</p>

<pre class="brush: js">function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count &gt; 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);</pre>
