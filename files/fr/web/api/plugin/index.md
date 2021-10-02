---
title: Plugin
slug: Web/API/Plugin
tags:
  - API
  - Add-ons
  - DOM
  - NeedsContent
  - Plug-in
  - Plugins
translation_of: Web/API/Plugin
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>L'interface <code>Plugin</code> fournit des informations à propos d'un <a href="/en-US/docs/Mozilla/Add-ons/Plugins">plugin</a> du navigateur.</p>

<div class="note">
<p><strong>Note :</strong> Les propriétés propres des objets <code>Plugin</code> ne sont plus énumérables dans les dernières versions des navigateurs.</p>
</div>

<h2 id="Properties">Propriétés</h2>

<dl>
 <dt>{{domxref("Plugin.description")}} {{readonlyinline}}</dt>
 <dd>Une description lisible du plugin.</dd>
 <dt>{{domxref("Plugin.filename")}} {{readonlyinline}}</dt>
 <dd>Le nom de fichier du fichier plugin.</dd>
 <dt>{{domxref("Plugin.name")}} {{readonlyinline}}</dt>
 <dd>Le nom du plugin.</dd>
 <dt>{{domxref("Plugin.version")}} {{readonlyinline}}</dt>
 <dd>Le numéro de version du plugin, en chaîne de caractères.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<dl>
 <dt>{{domxref("Plugin.item")}}</dt>
 <dd>Renvoie le type MIME d'un type de contenu pris en charge, en fonction de l'index dans une liste de types pris en charge.</dd>
 <dt>{{domxref("Plugin.namedItem")}}</dt>
 <dd>Renvoie le type MIME d'un élément pris en charge.</dd>
</dl>

<h2 id="Caractéristiques">Caractéristiques</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Caractéristique</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG','#dom-plugin','Plugin')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités">Compatibilités</h2>

<p>{{Compat("api.Plugin")}}</p>
