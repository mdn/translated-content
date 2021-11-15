---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Storage
  - StorageArea
  - WebExtensions
  - get
translation_of: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
---
<div>{{AddonSidebar()}}</div>

<p>Récupère un ou plusieurs éléments de la zone de stockage.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">let gettingItem = browser.storage.&lt;storageType&gt;.get(
  keys    // null, string, object or array of strings
)
</pre>

<p><code>&lt;storageType&gt;</code> sera l'un des types de stockage accessibles en écriture — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, ou {{WebExtAPIRef("storage.managed", "managed")}}.</p>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>keys</code></dt>
 <dd>Une clé (chaîne) ou des clés (un tableau de chaînes ou un objet spécifiant des valeurs par défaut) pour identifier le ou les articles à extraire du stockage. Si vous passez une chaîne vide, un objet ou un tableau ici, un objet vide sera récupéré. Si vous passez <code>null</code>,  ou une valeur indéfinie, le contenu entier du stockage sera récupéré.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un objet de <code>resultat</code> contenant tous les objets dans les <code>clefs</code> trouvées dans la zone de stockage. Si l'opération a échoué, la promesse sera rejetée avec un message d'erreur. Si le stockage géré n'est pas défini, les données  <code>non définies</code> seront retournées.</p>

<div class="warning">
<p><strong>Attention :</strong> Lorsqu'elle est utilisée dans un script de contenu dans les versions de Firefox antérieures à 52, la promesse retournée par <code>browser.storage.local.get()</code> est remplie avec un tableau contenant un objet. L'objet dans le tableau contient les <code>clefs</code> trouvées dans la zone de stockage, comme décrit ci-dessus. La promesse est correctement remplie avec un objet lorsqu'il est utilisé dans le contexte d'arrière-plan<br>
 (scripts d'arrière-plan, popups, pages d'options, etc.). Lorsque cette API est utilisée en tant que <code>chrome.storage.local.get()</code>, elle transmet correctement un objet à la fonction de rappel.</p>
</div>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.storage.StorageArea.get")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Supposons que le stockage contienne deux éléments :</p>

<pre class="brush: js">// storage contains two items,
// "kitten" and "monster"
browser.storage.local.set({
  kitten:  {name:"Mog", eats:"mice"},
  monster: {name:"Kraken", eats:"people"}
});</pre>

<p>Définissez les gestionnaires de réussite et d'échec pour la promesse:</p>

<pre class="brush: js">function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}</pre>

<p>Sans arguments <code>clefs</code>, tout récupérez :</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -&gt; Object { kitten: Object, monster: Object }</pre>

<p>Avec un argument de clefs vide, ne retourne rien:</p>

<pre class="brush: js">// with an empty array, retrieve nothing
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -&gt; Object { }</pre>

<p>Avec le nom d'un objet, récupérez la correspondance :</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -&gt; Object { kitten: Object }</pre>

<p>Avec un tableau de noms d'objets, récupérez toutes les correspondances :</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get(["kitten", "monster", "grapefruit"]);
gettingItem.then(onGot, onError);

// -&gt; Object { kitten: Object, monster: Object } </pre>

<p>Avec un objet avec des noms d'objets en tant que clefs et la valeur par défaut en tant que valeur :</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get({
  kitten: "no kitten",
  monster: "no monster",
  grapefruit: {
    name: "Grape Fruit",
    eats: "Water"
  }
});

// -&gt; Object { kitten: Object, monster: Object, grapefruit: Object }
</pre>

<p>{{WebExtExamples}}</p>

<h3 id="Chrome_exemples">Chrome exemples</h3>

<pre class="brush: js">chrome.storage.local.get("kitten", function(items){
  console.log(items.kitten);  // -&gt; {name:"Mog", eats:"mice"}
});</pre>

<p class="brush: js">Ou avec une fonction de flèche</p>

<pre class="brush: js">chrome.storage.local.get("kitten", items=&gt;{
  console.log(items.kitten); // -&gt; {name:"Mog", eats:"mice"}
});</pre>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/storage"><code>chrome.storage</code></a>. Cette documentation est dérivée de <a href="https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json"><code>storage.json</code></a> dans le code de Chromium.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>
