---
title: management.install()
slug: Mozilla/Add-ons/WebExtensions/API/management/install
tags:
  - API
  - Add-ons
  - Méthode
  - Reference
  - Theme
  - WebExtensions
  - install
  - management
translation_of: Mozilla/Add-ons/WebExtensions/API/management/install
---
<div>{{AddonSidebar()}}</div>

<div>Installe et active une extension de thème à partir de l'URL donnée.</div>

<div></div>

<p>Cette API nécessite la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions">permission de l'API</a> "management" et ne fonctionnera qu'avec des thèmes signés.</p>

<p>C'est une fonction asynchrone qui renvoie une <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">let {id} = await browser.management.install({url});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>options</dt>
 <dd>Un objet qui inclut l'URL du fichier XPI du thème à <a href="https://addons.mozilla.org">addons.mozilla.org</a> et un hachage facultatif du fichier XPI, en utilisant sha256 ou plus.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a> qui sera remplie avec un objet, contenant l'<code>ExtensionID</code> défini pour le thème dans manifest.json.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.management.install")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Parcourez une liste de thèmes :</p>

<pre class="brush: js">"use strict";

let themes = [
    "https://addons.mozilla.org/firefox/downloads/file/1063216/insightscare-1.0-fx.xpi",
    "https://addons.mozilla.org/firefox/downloads/file/1063419/orange_roses-1.0-fx.xpi",
    "https://addons.mozilla.org/firefox/downloads/file/1062647/sticktoyourguns-2.0-fx.xpi",
    "https://addons.mozilla.org/firefox/downloads/file/0/bad_url.xpi",
];

let current;

async function install(url) {
    try {
        current = url;
        let {id} = await browser.management.install({url});
        console.log("Theme installed: " + id);
    } catch (e) {
        console.error("Installation failed: " + e);
    }
}

browser.browserAction.onClicked.addListener(() =&gt; {
    let id = themes.indexOf(current);
    install(themes[(id + 1) % themes.length]);
});

for (let url of themes) {
    browser.menus.create({
        title: url,
        onclick: () =&gt; install(url),
        contexts: ["browser_action"],
    });
}</pre>

<p>{{WebExtExamples}}</p>
