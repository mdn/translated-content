---
title: Partage d'objets avec des scripts de page
slug: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
tags:
  - Add-ons
  - Extensions
  - Firefox
  - Guide
  - Mozilla
  - Non-standard
  - WebExtensions
  - XPCOM
  - script de contenu
  - scripts de page
translation_of: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
original_slug: Mozilla/Add-ons/WebExtensions/partage_d_objets_avec_des_scripts_de_page
---
<div>{{AddonSidebar}}
<div class="note">
<p><strong>Note :</strong> Les techniques décrites dans cette section sont uniquement disponibles dans Firefox, et seulement à partir de Firefox 49</p>
</div>

<div class="warning">
<p><strong>Attention :</strong> En tant que développeur d'extensions, vous devez considérer que les scripts s'exécutant sur des pages Web arbitraires sont des codes hostiles dont le but est de voler les informations personnelles de l'utilisateur, d'endommager leur ordinateur ou de les attaquer d'une autre manière.</p>

<p>L'isolation entre les scripts de contenu et les scripts chargés par les pages Web a pour but de rendre plus difficile la tâche des pages Web hostiles.</p>

<p>Puisque les techniques décrites dans cette section décompose cet isolement, elles sont intrinsèquement dangereuses et devraient être utilisées avec beaucoup de soin.</p>
</div>
</div>

<p>Comme les <a href="/fr/Add-ons/WebExtensions/Content_scripts#DOM_access">notes du guide de scripts de contenu</a>, les scripts de contenu ne voient pas les modifications apportées au DOM par des scripts chargés par des pages Web.Cela signifie que, par exemple, si une page Web charge une bibliothèque comme jQuery, les scripts de contenu ne pourront pas l'utiliser et devront charger leur propre copie. À l'inverse, les scripts chargés par les pages Web ne peuvent pas voir les modifications apportées par les scripts de contenu.</p>

<p>Cependant, Firefox fournit des API qui permettent aux scripts de contenu de :</p>

<ul>
 <li>accéder aux objets JavaScript créés par les scripts de page</li>
 <li>exposer leurs propres objets JavaScript aux scripts de pages.</li>
</ul>

<h2 id="Vision_Xray_dans_Firefox">Vision Xray dans Firefox</h2>

<p>Dans Firefox, une partie de l'isolation entre les scripts de contenu et les scripts de pages est implémentée en utilisant une fonction appelée "Vision Xray". Lorsqu'un script dans une portée plus privilégiée accède à un objet défini dans une portée moins privilégiée, il ne voit que la "version native" de l'objet. Toutes les propriétés <a href="/fr/docs/Glossary/Expando">expando</a> sont invisibles et si des propriétés de l'objet ont été redéfinies, il voit l'implémentation d'origine et non la version redéfinie.</p>

<p>Le but de cette fonctionnalité est de rendre le script moins privilégié plus difficile à confondre le script plus privilégié en redéfinissant les propriétés natives des objets.</p>

<p>Par exemple, lorsqu'un script de contenu accède à la <a href="/fr/docs/Web/API/Window">fenêtre</a> de la page, il ne voit aucune propriété ajoutée au script de la page, et si le script de la page a redéfini les propriétés de la fenêtre, le script de contenu verra la version originale .</p>

<p>Pour l'histoire complète sur la vision Xray, voir les articles sur <a href="en-US/docs/Mozilla/Tech/Xray_vision">Vision Xray</a> et la <a href="en-US/docs/Mozilla/Gecko/Script_security">securité des Scripts</a>.</p>

<h2 id="Accès_aux_objets_de_script_de_page_à_partir_de_scripts_de_contenu">Accès aux objets de script de page à partir de scripts de contenu</h2>

<p>Dans Firefox, les objets DOM dans les scripts de contenu obtiennent une propriété supplémentaire <code>wrappedJSObject</code>. C'est une version "déballée" de l'objet, qui inclut toutes les modifications apportées à cet objet par les scripts de page.</p>

<p>Prenons un exemple simple. Supposons qu'une page Web charge un script:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script type="text/javascript" src="main.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>Le script ajoute une propriété expando à la <code>fenêtre</code> globale :</p>

<pre class="brush: js">// main.js

var foo = "I'm defined in a page script!";</pre>

<p>La vision Xray signifie que si un script de contenu tente d'accéder à <code>foo</code>, il sera indéfini:</p>

<pre class="brush: js">// content-script.js

console.log(window.foo); // undefined</pre>

<p>Dans Firefox, les scripts de contenu peuvent utiliser <code>window.wrappedJSObject</code> pour voir la propriété expando :</p>

<pre class="brush: js">// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"</pre>

<p>Notez qu'une fois que vous faites cela, vous ne pouvez plus compter sur les propriétés ou les fonctions de cet objet qui sont, ou font, ce que vous attendez. N'importe lequel d'entre eux, même les setters et les getters, aurait pu être redéfini par un code non fiable.</p>

<p>Notez également que le déballage est transitif: lorsque vous utilisez <code>wrappedJSObject</code>, toutes les propriétés de l'objet déplié sont elles-mêmes dépliées (et donc peu fiables). C'est donc une bonne pratique, une fois que vous avez l'objet dont vous avez besoin, de le réemballer, ce que vous pouvez faire comme ceci:</p>

<pre>XPCNativeWrapper(window.wrappedJSObject.foo);</pre>

<p>voir le document <a href="/fr/Tech/Xray_vision">vision Xray</a> pour plus de détails à ce sujet.</p>

<h2 id="Partage_dobjets_de_script_de_contenu_avec_des_scripts_de_page">Partage d'objets de script de contenu avec des scripts de page</h2>

<p>Firefox fournit également des API permettant aux scripts de contenu de rendre les objets disponibles pour les scripts de page. Il y a plusieurs approches ici:</p>

<ul>
 <li><code><a href="#exportFunction">exportFunction()</a></code>: exporte une fonction vers des scripts de page</li>
 <li><code><a href="#cloneInto">cloneInto()</a></code>: exporte un objet vers des scripts de page.</li>
 <li>constructeurs du contexte de la page</li>
</ul>

<h3 id="exportFunction">exportFunction</h3>

<p>Étant donné une fonction définie dans le script de contenu, <code>exportFunction()</code> l'exporte vers la portée du script de page, afin que le script de page puisse l'appeler.</p>

<p>Par exemple, considérons une extension qui a un script d'arrière-plan comme ceci :</p>

<pre class="brush: js">/*
Execute content script in the active tab.
*/
function loadContentScript() {
  browser.tabs.executeScript({
    file: "/content_scripts/export.js"
  });
}

/*
Add loadContentScript() as a listener to clicks
on the browser action.
*/
browser.browserAction.onClicked.addListener(loadContentScript);

/*
Show a notification when we get messages from
the content script.
*/
browser.runtime.onMessage.addListener((message) =&gt; {
  browser.notifications.create({
    type: "basic",
    title: "Message from the page",
    message: message.content
  });
});</pre>

<p>Cela fait deux choses :</p>

<ul>
 <li>exécuter un script de contenu dans l'onglet en cours, lorsque l'utilisateur clique sur une action du navigateur</li>
 <li>écouter les messages du script de contenu et afficher une <a href="/fr/Add-ons/WebExtensions/API/notifications">notification</a>  lorsque le message arrive.</li>
</ul>

<p>Le script de contenu ressemble à ceci :</p>

<pre class="brush: js">/*
Define a function in the content script's scope, then export it
into the page script's scope.
*/
function notify(message) {
  browser.runtime.sendMessage({content: "Function call: " + message});
}

exportFunction(notify, window, {defineAs:'notify'});</pre>

<p>Cela définit une fonction <code>notify()</code>, qui envoie simplement son argument au script d'arrière-plan. Il exporte ensuite la fonction vers la portée du script de page. Maintenant, le script de la page peut appeler cette fonction:</p>

<pre class="brush: js">window.notify("Message from the page script!");</pre>

<p>Pour l'histoire complète, voir <code><a href="/fr/Tech/XPCOM/Language_Bindings/Components.utils.exportFunction">Components.utils.exportFunction</a></code>.</p>

<h3 id="cloneInto">cloneInto</h3>

<p>Étant donné un objet défini dans le script de contenu, cela crée un clone de l'objet dans la portée du script de page, rendant ainsi le clone accessible aux scripts de page. Par défaut, cela utilise <a href="/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">l'agorithme clone structuré</a> pour cloner l'objet, ce qui signifie que les fonctions de l'objet ne sont pas incluses dans le clone. Pour inclure des fonctions, passez l'option <code>cloneFunctions</code>.</p>

<p>Par exemple, voici un script de contenu qui définit un objet contenant une fonction, puis le clone dans la portée du script de page :</p>

<pre class="brush: js">/*
Create an object that contains functions in
the content script's scope, then clone it
into the page script's scope.

Because the object contains functions,
the cloneInto call must include
the `cloneFunctions` option.
*/
var messenger = {
  notify: function(message) {
    browser.runtime.sendMessage({
      content: "Object method call: " + message
    });
  }
};

window.wrappedJSObject.messenger = cloneInto(
  messenger,
  window,
  {cloneFunctions: true});</pre>

<p>Maintenant les scripts de page vont voir une nouvelle propriété sur la fenêtre, <code>messenger</code>, qui a une fonction <code>notify()</code>:</p>

<pre class="brush: js">window.messenger.notify("Message from the page script!");</pre>

<p>Pour l'histoire complète, voir <code><a href="/fr/Tech/XPCOM/Language_Bindings/Components.utils.cloneInto">Components.utils.cloneInto</a></code>.</p>

<h3 id="Constructeurs_du_contexte_de_la_page">Constructeurs du contexte de la page</h3>

<p>Sur l'objet fenêtre de xrayed, des constructeurs immaculés pour certains objets javascript intégrés tels que <code>Object</code>, <code>Function</code> ou <code>Proxy</code> et différentes classe DOM sont disponibles. <code>XMLHttpRequest</code> ne se comporte pas de cette manière, voir la section <a href="/fr/Add-ons/WebExtensions/Content_scripts#XHR_and_Fetch">XHR and fetch</a> pour plus de détails. Ils créeront des instances appartenant à la hiérarchie d'objets de la page global, puis retourneront un wrapper xray.</p>

<p>Puisque les objets créés de cette manière appartiennent déjà à la page et que le script de contenu ne les renvoie pas à la page, il ne nécessitera pas de clonage ou d'exportation supplémentaire.</p>

<pre class="brush: js">/* javascript built-ins */

const objA = new Object();
const objB = new window.Object();

console.log(
  objA instanceof Object,                        // true
  objB instanceof Object,                        // false
  objA instanceof window.Object,                 // false
  objB instanceof window.Object,                 // true
  'wrappedJSObject' in objB                      // true; xrayed
);

objA.foo = "foo";
objB.foo = "foo";                                // xray wrappers for plain javascript objects pass through property assignments
objB.wrappedJSObject.bar = "bar";                // unwrapping before assignment does not rely on this special behavior

window.wrappedJSObject.objA = objA;
window.wrappedJSObject.objB = objB;              // automatically unwraps when passed to page context

window.eval(`
  console.log(objA instanceof Object);           // false
  console.log(objB instanceof Object);           // true

  console.log(objA.foo);                         // undefined
  objA.baz = "baz";                              // Error: permission denied

  console.log(objB.foo, objB.bar);               // "foo", "bar"
  objB.baz = "baz";
`);

/* other APIs */

const ev = new Event("click");

console.log(
  ev instanceof Event,                           // true
  ev instanceof window.Event,                    // true; Event constructor is actually inherited from the xrayed window
  'wrappedJSObject' in ev                        // true; is an xrayed object
);

ev.propA = "propA"                                // xray wrappers for native objects do not pass through assignments
ev.propB = "wrapper";                             // define property on xray wrapper
ev.wrappedJSObject.propB = "unwrapped";           // define same property on page object
Reflect.defineProperty(ev.wrappedJSObject,        // privileged reflection can operate on less privileged objects
  'propC', {
     get: exportFunction(function() {             // getters must be exported like regular functions
       return 'propC';
     }
  }
);

window.eval(`
  document.addEventListener("click", (e) =&gt; {
    console.log(e instanceof Event, e.propA, e.propB, e.propC);
  });
`);

document.dispatchEvent(ev); // true, undefined, "unwrapped", "propC"</pre>
