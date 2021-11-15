---
title: UserScripts.UserScriptOptions
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptOptions
tags:
  - Add-ons
  - Extensions
  - Firefox
  - Guide
  - Intermediate
  - NeedsExample
  - UserScriptOptions
  - WebExtensions
  - userScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptOptions
---
<p>{{AddonSidebar}}</p>

<p>L'objet UserScriptOptions représente les scripts de contenu à enregistrer. Sa syntaxe est similaire à celle des options contentScript prises en charge par browser.contentScripts.register. Les différences sont les suivantes :</p>

<ul>
 <li>il ne prend pas en charge une propriété css (utilisez browser.contentScripts.register pour enregistrer/désenregistrer dynamiquement les feuilles de style)</li>
 <li>Il supporte une propriété optionnelle scriptMetadata (comme un objet JSON simple qui contient certaines propriétés de métadonnées associées aux userScripts enregistrés)</li>
</ul>

<p>L'objet UserScriptOptions a les propriétés suivantes :</p>

<dl>
 <dt><code>allFrames</code>{{optional_inline}}</dt>
 <dd>Même chose que <code>all_frames</code> dans la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>.</dd>
 <dt><code>excludeGlobs</code>{{optional_inline}}</dt>
 <dd>Même chose que <code>exclude_globs</code> dans la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>.</dd>
 <dt><code>excludeMatches</code>{{optional_inline}}</dt>
 <dd>Même chose que <code>exclude_matches</code> dans la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>.</dd>
 <dt><code>includeGlobs</code>{{optional_inline}}</dt>
 <dd>Même chose que <code>include_globs</code> dans la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>.</dd>
 <dt><code>js</code>{{optional_inline}}</dt>
 <dd>Un ensemble d'objets. Chaque objet a soit une propriété nommée <code>file</code>, qui est une URL commençant à l'extension manifest.json et pointant vers un fichier JavaScript à enregistrer, soit une propriété nommée <code>code</code>, qui est un code JavaScript à enregistrer.</dd>
 <dt><code>matchAboutBlank</code>{{optional_inline}}</dt>
 <dd>Même chose que <code>match_about_blank</code> dans la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>.</dd>
 <dt><code>matches</code></dt>
 <dd>Même chose que <code>matches</code> dans la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>.</dd>
 <dt><code>runAt</code>{{optional_inline}}</dt>
 <dd>Même chose que <code>run_at</code> dans la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>.</dd>
 <dt><code>scriptMetadata</code> {{optional_inline}}</dt>
 <dd>Une valeur de métadonnées de script utilisateur</dd>
</dl>

<p>Sa syntaxe est similaire à celle des options contentScript prises en charge par browser.contentScripts.register.</p>
