---
title: Document.enableStyleSheetsForSet()
slug: Web/API/Document/enableStyleSheetsForSet
tags:
  - API
  - Activation
  - CSS
  - DOM
  - Feuilles de styles
  - Méthode
translation_of: Web/API/Document/enableStyleSheetsForSet
---
<p>{{ APIRef("DOM") }}{{ gecko_minversion_header("1.9") }}</p>

<p>Active les feuilles de styles correspondant au nom spécifié dans l'ensemble de feuilles de styles en cours et désactive toutes les autres (à l'exception de celles sans titre qui sont toujours activées).</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="eval">document.enableStyleSheetsForSet(<em>name</em>)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>Le nom des feuilles de styles à activer. Toutes les feuilles de styles dont le titre correspond à ce nom seront activées, tandis que toutes celles possédant un autre titre seront désactivées. Spécifiez une chaîne vide dans le paramètre <code>name</code> pour supprimer toutes les feuilles de styles alternatives et préférées (mais pas les feuilles de styles persistantes, c'est-à-dire, celles sans attribut <code>title</code> (<em>titre</em>)).</dd>
</dl>

<h2 id="Notes">Notes</h2>

<ul>
 <li>Les correspondances de titre sont sensibles à la casse.</li>
 <li>L'appel de cette méthode avec un <code>name</code>  <code>null</code> n'a pas d'effet ; si vous voulez désactiver toutes les feuilles de styles alternatives et préférées, vous <strong>devez</strong> utiliser "",  la chaîne vide.</li>
 <li>Les feuilles de styles qui n'ont pas de titre ne sont jamais affectées par cette méthode.</li>
 <li>Cette méthode n'affecte jamais les valeurs de {{ domxref("document.lastStyleSheetSet") }} ou {{ domxref("document.preferredStyleSheetSet") }}.</li>
</ul>

<h2 id="Example">Exemple</h2>

<pre>document.enableStyleSheetsForSet("Some style sheet set name");
</pre>

<h2 id="Specification">Spécifications</h2>

<ul>
 <li><a href="http://www.whatwg.org/specs/web-apps/current-work/#alternate-style-sheets">HTML5 : Alternate Style Sheets</a></li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{ domxref("Stylesheet") }}</li>
 <li>{{ domxref("document.styleSheets") }}</li>
 <li>{{ domxref("document.lastStyleSheetSet") }}</li>
 <li>{{ domxref("document.preferredStyleSheetSet") }}</li>
 <li>{{ domxref("document.selectedStyleSheetSet") }}</li>
 <li>{{ domxref("document.enableStyleSheetsForSet()") }}</li>
 <li><a href="/fr/docs/Archive/Standards_du_Web/Utiliser_des_titres_corrects_avec_des_feuilles_de_styles_externes">Utiliser des titres corrects avec des feuilles de styles externes</a></li>
</ul>
