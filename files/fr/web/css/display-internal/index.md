---
title: <display-internal>
slug: Web/CSS/display-internal
tags:
  - CSS
  - Reference
  - Type de donnée
translation_of: Web/CSS/display-internal
---
<div>{{CSSRef}}</div>

<p>Certains modes de disposition tels que <code>table</code> et <code>ruby</code> possèdent une structure interne complexe avec différents roles pour les éléments enfants et descendants. Cette page décrit ces valeurs « internes » pour <code>display</code> et qui s'appliquent dans un mode donné.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Sauf mention contraire, le type d'affichage intérieur et extérieur sont définis simultanément par le mot-clé indiqué.</p>

<dl>
 <dt><code>table-row-group</code></dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("tbody")}}.</dd>
 <dt><code>table-header-group</code></dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("thead")}}.</dd>
 <dt><code>table-footer-group</code></dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("tfoot")}}.</dd>
 <dt><code>table-row</code></dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("tr")}}.</dd>
 <dt><code>table-cell</code></dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("td")}}.</dd>
 <dt><code>table-column-group</code></dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("colgroup")}}.</dd>
 <dt><code>table-column</code></dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("col")}}.</dd>
 <dt><code>table-caption</code></dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("caption")}}.</dd>
 <dt><code>ruby-base</code> {{Experimental_Inline}}</dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("rb")}}.</dd>
 <dt><code>ruby-text</code> {{Experimental_Inline}}</dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("rt")}}.</dd>
 <dt><code>ruby-base-container</code> {{Experimental_Inline}}</dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("rbc")}} générés comme des boîtes anonymes.</dd>
 <dt><code>ruby-text-container</code> {{Experimental_Inline}}</dt>
 <dd>Ces éléments se comportent comme des éléments HTML {{HTMLElement("rtc")}}.</dd>
</dl>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<h3 id="Prise_en_charge_pour_les_valeurs_liées_à_table">Prise en charge pour les valeurs liées à <code>table</code></h3>

<p><code>table</code>, <code>table-cell</code>, <code>table-column</code>, <code>table-column-group</code>, <code>table-footer-group</code>, <code>table-header-group</code>, <code>table-row</code> et <code>table-row-group</code></p>

<p>{{Compat("css.properties.display.table_values", 10)}}</p>

<h3 id="Prise_en_charge_pour_les_valeurs_ruby">Prise en charge pour les valeurs <code>ruby</code></h3>

<p><code>ruby</code>, <code>ruby-base</code>, <code>ruby-base-container</code>, <code>ruby-text</code> et <code>ruby-text-container</code></p>

<p>{{Compat("css.properties.display.ruby_values", 10)}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{CSSxRef("display")}}
  <ul>
   <li>{{CSSxRef("&lt;display-outside&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-inside&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-listitem&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-box&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-legacy&gt;")}}</li>
  </ul>
 </li>
</ul>
