---
title: Modèle de boîte
slug: Web/CSS/CSS_Box_Model
tags:
  - Aperçu
  - CSS
  - CSS Box Model
  - Overview
  - Reference
translation_of: Web/CSS/CSS_Box_Model
original_slug: Web/CSS/Modèle_de_boîte_CSS
---
<div>{{CSSRef}}</div>

<p><strong>Le modèle de boîte CSS</strong> (<em>Basic Box Model</em> en anglais) est un module CSS qui définit les boîtes rectangulaires (y compris leurs zones de remplissage (<em>padding</em>) et de marges) qui sont générées pour disposer les éléments selon leur modèle de mise en forme visuelle.</p>

<h2 id="Référence">Référence</h2>

<h3 id="Propriétés">Propriétés</h3>

<h4 id="Les_propriétés_qui_définissent_le_flux_du_contenu_dans_une_boîte">Les propriétés qui définissent le flux du contenu dans une boîte</h4>

<ul>
 <li>{{cssxref("overflow")}}</li>
 <li>{{cssxref("overflow-x")}}</li>
 <li>{{cssxref("overflow-y")}}</li>
</ul>

<h4 id="Les_propriétés_qui_définissent_la_taille_d'une_boîte">Les propriétés qui définissent la taille d'une boîte</h4>

<ul>
 <li>{{cssxref("height")}}</li>
 <li>{{cssxref("width")}}</li>
 <li>{{cssxref("max-height")}}</li>
 <li>{{cssxref("max-width")}}</li>
 <li>{{cssxref("min-height")}}</li>
 <li>{{cssxref("min-width")}}</li>
</ul>

<h4 id="Les_propriétés_qui_définissent_les_marges_d'une_boîte">Les propriétés qui définissent les marges d'une boîte</h4>

<ul>
 <li>{{cssxref("margin")}}</li>
 <li>{{cssxref("margin-bottom")}}</li>
 <li>{{cssxref("margin-left")}}</li>
 <li>{{cssxref("margin-right")}}</li>
 <li>{{cssxref("margin-top")}}</li>
 <li>{{CSSxRef("margin-trim")}} {{Experimental_Inline}}</li>
</ul>

<h4 id="Les_propriétés_qui_définissent_le_remplissage_(padding)_d'une_boîte">Les propriétés qui définissent le remplissage (<em>padding</em>) d'une boîte</h4>

<ul>
 <li>{{cssxref("padding")}}</li>
 <li>{{cssxref("padding-bottom")}}</li>
 <li>{{cssxref("padding-left")}}</li>
 <li>{{cssxref("padding-right")}}</li>
 <li>{{cssxref("padding-top")}}</li>
</ul>

<h4 id="Les_autres_propriétés">Les autres propriétés</h4>

<ul>
 <li>{{cssxref("box-shadow")}}</li>
 <li>{{cssxref("visibility")}}</li>
</ul>

<h2 id="Guides">Guides</h2>

<dl>
 <dt><a href="/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte">Une introduction au modèle de boîte CSS</a></dt>
 <dd>Cet article explique un des concepts clé de CSS : le modèle de boîte. Il définit notamment les notions de marge, de remplissage (<em>padding</em>) ainsi que les différentes zones qui forment une boîte.</dd>
 <dt><a href="/fr/docs/Web/CSS/Fusion_des_marges">Maîtriser la fusion des marges</a></dt>
 <dd>Dans certains cas, deux marges adjacentes sont fusionnées en une seule. Cet article explique quand cela se produit et comment contrôler ce comportement.</dd>
 <dt><a href="/fr/docs/Web/CSS/Modèle_de_mise_en_forme_visuelle">Le modèle de mise en forme visuel</a></dt>
 <dd>Cet article explique le modèle de mise en forme visuel.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS3 Box")}}</td>
   <td>{{Spec2("CSS3 Box")}}</td>
   <td>Added <code>margin-trim</code></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "box.html")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>
