---
title: contextualIdentities.create()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/create
tags:
  - API
  - Add-ons
  - Create
  - Extensions
  - Méthode
  - Reference
  - WebExtensions
  - contextualIdentities
translation_of: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/create
---
<div>{{AddonSidebar()}}</div>

<p>Crée une nouvelle identité contextuelle. Une fois créée, l'utilisateur pourra créer de nouveaux onglets appartenant à cette identité contextuelle, tout comme ils peuvent le faire avec les identités intégrées.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var createContext = browser.contextualIdentities.create(
  details                  // object
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>details</code></dt>
 <dd>
 <p><code>object</code>. Un objet contenant des propriétés pour la nouvelle identité contextuelle. Cela contient les propriétés suivantes :</p>

 <dl>
  <dt><code>name</code></dt>
  <dd>
  <p><code>string</code>. Le nom de la nouvelle identité. Cela sera affiché dans l'interface utilisateur du navigateur, leur permettant d'ouvrir un nouvel onglet appartenant à l'identité. Il sera également affiché dans la barre d'URL pour les onglets appartenant à cette identité.</p>
  </dd>
  <dt><code>color</code></dt>
  <dd>
  <p><code><code>string</code></code>. La couleur associée à la nouvelle identité. Cela sera utilisé pour mettre en évidence les onglets appartenant à cette identité. Vous pouvez fournir l'une des valeurs suivantes ici :</p>

  <ul>
   <li>"blue"</li>
   <li>"turquoise"</li>
   <li>"green"</li>
   <li>"yellow"</li>
   <li>"orange"</li>
   <li>"red"</li>
   <li>"pink"</li>
   <li>"purple"</li>
   <li>"toolbar"</li>
  </ul>
  </dd>
  <dt><code>icon</code></dt>
  <dd>
  <p><code>string</code>. Le nom d'une icône à afficher dans la barre d'URL pour les onglets appartenant à cette identité. Vous pouvez fournir l'une des valeurs suivantes ici :</p>

  <ul>
   <li>"fingerprint"</li>
   <li>"briefcase"</li>
   <li>"dollar"</li>
   <li>"cart"</li>
   <li>"circle"</li>
   <li>"gift"</li>
   <li>"vacation"</li>
   <li>"food"</li>
   <li>"fruit"</li>
   <li>"pet"</li>
   <li>"tree"</li>
   <li>"chill"</li>
   <li>"fence"</li>
  </ul>
  </dd>
 </dl>
 </dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} qui décrit la nouvelle identité. Si la fonctionnalité d'identités contextuelles n'est pas activée, la promesse est rejetée.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.contextualIdentities.create")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple crée une nouvelle identité contextuelle et enregistre son ID de cookie :</p>

<pre class="brush: js">function onCreated(context) {
  console.log(`New identity's ID: ${context.cookieStoreId}.`);
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.create({
  name: "my-thing",
  color: "purple",
  icon: "briefcase"
}).then(onCreated, onError);</pre>

<p>{{WebExtExamples}}</p>
