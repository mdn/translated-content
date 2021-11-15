---
title: contextualIdentities.update()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Reference
  - Update
  - WebExtensions
  - contextualIdentities
translation_of: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
---
<div>{{AddonSidebar()}}</div>

<p>Met à jour les propriétés d'une identité contextuelle, compte tenu de son ID de cookie.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var createContext = browser.contextualIdentities.update(
  cookieStoreId,           // string
  details                  // object
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>cookieStoreId</code></dt>
 <dd>
 <p><code>string</code>. L'identifiant du cookie store de cette identité contextuelle. Étant donné que les identités contextuelles ont chacune leur propre magasin de cookies, cela sert d'identifiant pour l'identité contextuelle elle-même.</p>
 </dd>
 <dt><code>details</code></dt>
 <dd>
 <p><code>object</code>. Un objet contenant de nouvelles valeurs pour les propriétés que vous souhaitez modifier. Cela peut contenir l'une des propriétés suivantes :</p>

 <dl>
  <dt><code>name</code> {{optional_inline}}</dt>
  <dd>
  <p><code>string</code>. Un nouveau nom pour l'identité. Cela sera affiché dans l'interface utilisateur du navigateur, leur permettant d'ouvrir un nouvel onglet dans l'identité. Il sera également affiché dans la barre d'URL pour les onglets appartenant à cette identité.</p>
  </dd>
  <dt><code>color</code> {{optional_inline}}</dt>
  <dd>
  <p><code><code>string</code></code>. Une nouvelle couleur pour l'identité. Cela sera utilisé pour mettre en évidence les onglets appartenant à cette identité. Vous pouvez fournir l'une des valeurs suivantes ici :</p>

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
  <dt><code>icon</code> {{optional_inline}}</dt>
  <dd>
  <p><code>string</code>. Une nouvelle icône pour l'identité. Vous pouvez fournir l'une des valeurs suivantes ici :</p>

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

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} qui décrit l'identité mise à jour. Si l'identité n'a pas pu être trouvée ou si la fonctionnalité d'identités contextuelles n'est pas activée, la promesse est rejetée.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.contextualIdentities.update")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple met à jour l'identité contextuelle dont l'ID est "firefox-container-1" pour avoir un nouveau nom, une nouvelle couleur et une nouvelle icône :</p>

<pre class="brush: js">function onUpdated(context) {
  console.log(`New identity's name: ${context.name}.`);
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.update(
  "firefox-container-1", {
    name: "my-thing",
    color: "purple",
    icon: "briefcase"
  }).then(onUpdated, onError);</pre>

<p>{{WebExtExamples}}</p>
