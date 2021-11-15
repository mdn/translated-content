---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
tags:
  - Extensions
  - Themes
  - WebExtensions
  - add-on
translation_of: Mozilla/Add-ons/WebExtensions/API/theme
---
<div>{{AddonSidebar}}</div>

<p>Permet aux extensions du navigateur de mettre à jour le thème du navigateur.</p>

<p>Pour utiliser cette API, une extension doit demander la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions">permission</a> "theme" dans son fichier <a href="/fr/Add-ons/WebExtensions/manifest.json">manifest.json</a>.</p>

<div class="note">
<p><strong>Note :</strong> quand on met un thème en arrière plan, on doit déclarer la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions">permission</a> 'theme' et on ne peut pas utiliser la fonction <a href="/fr/Add-ons/WebExtensions/manifest.json/theme">theme</a> du manifest, puisque ce n'est pas compatible.</p>
</div>

<h2 id="Types">Types</h2>

<dl>
 <dt>{{WebExtAPIRef("theme.Theme")}}</dt>
 <dd>Représente le contenu d'un thème.</dd>
</dl>

<h2 id="Fonctions">Fonctions</h2>

<dl>
 <dt>{{WebExtAPIRef("theme.getCurrent()")}}</dt>
 <dd>Retourne le thème actuel du navigateur.</dd>
 <dt>{{WebExtAPIRef("theme.update()")}}</dt>
 <dd>Met à jour à le thème du navigateur.</dd>
 <dt>{{WebExtAPIRef("theme.reset()")}}</dt>
 <dd>Supprime les mises à jour de thèmes effectuées lors d'un appel à {{WebExtAPIRef("theme.update()")}}.</dd>
</dl>

<h2 id="Evénements">Evénements</h2>

<dl>
 <dt>{{WebExtAPIRef("theme.onUpdated")}}</dt>
 <dd>Emis quand le thème du navigateur change.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.theme")}}</p>

<p>{{WebExtExamples("h2")}}</p>
