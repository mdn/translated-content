---
title: itemtype
slug: Web/HTML/Global_attributes/itemtype
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Micro-données
  - Microdata
  - Référence(2)
translation_of: Web/HTML/Global_attributes/itemtype
original_slug: Web/HTML/Attributs_universels/itemtype
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p>L'<a href="/fr/docs/Web/HTML/Attributs_universels">attribut universel</a> <strong><code>itemtype</code> </strong>définit l'URL du vocabulaire qui sera utilisé pour définir les propriétés des objets dans la structure de données. <code>itemscope</code> est utilisé afin de définir la portée, dans le document, où le vocabulaire défini sera actif.</p>

<p>L'attribut <code>itemtype</code> doit avoir une valeur qui est un ensemble non ordonné de fragments uniques, sensible à la casse. Chaque fragment doit être une URL absolue valide et tous les fragments participent à la définition du même vocabulaire. La valeur de l'attribut doit avoir au moins un fragment.</p>

<p>Les types d'objet doivent tous être définis dans des spécifications de vocabulaire (comme <a href="http://schema.org/">schema.org</a>) et doivent tous être définis avec le même vocabulaire.</p>

<p>L'attribut <code>itemtype</code> peut uniquement être défini pour les éléments qui ont un attribut <code>itemscope</code>.</p>

<p>Google et les autres moteurs de recherche participent au vocabulaire défini par <a href="http://schema.org/">schema.org</a> pour structurer les données. Ce vocabulaire définit un ensemble standard de types et de noms de propriétés. Par exemple <code><a href="http://schema.org/MusicEvent">MusicEvent</a></code> indique un événement musical dont les propriétés <code><a href="http://schema.org/startDate">startDate</a></code> et <code><a href="http://schema.org/location">location</a></code> utilisées pour définir les détails du concert. Dans ce cas, l'URL <code><a href="http://schema.org/MusicEvent">http://schema.org/MusicEvent</a></code> sera l'URL utilisée pour l'attribut <code>itemtype</code> et les propriétés <code>startDate</code> et <code>location</code> seront les propriétés utilisées, définies par <code><a href="http://schema.org/MusicEvent">http://schema.org/MusicEvent</a></code>.</p>

<div class="note">
<p><strong>Note :</strong> Vous pourrez trouver plus d'informations sur l'attribut itemtype sur <a href="http://schema.org/Thing">http://schema.org/Thing</a></p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

<pre class="syntaxbox">itemtype = URL</pre>

<h3 id="Exemple_simple">Exemple simple</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div itemscope itemtype="http://schema.org/Product"&gt;
  &lt;span itemprop="brand"&gt;ACME&lt;/span&gt;
  &lt;span itemprop="name"&gt;Executive Anvil&lt;/span&gt;
&lt;/div&gt;</pre>

<h4 id="Structure_de_données">Structure de données</h4>

<table class="standard-table">
 <tbody>
  <tr>
   <td rowspan="4"><code>itemscope</code></td>
   <td><code>itemtype</code></td>
   <td colspan="2" rowspan="1">http://schema.org/Product</td>
  </tr>
  <tr>
   <td><code>itemprop</code></td>
   <td><code>name</code></td>
   <td>Executive Anvil</td>
  </tr>
  <tr>
   <td><code>itemprop</code></td>
   <td colspan="2" rowspan="1"><code>brand [Thing]</code></td>
  </tr>
  <tr>
   <td><code>itemprop</code></td>
   <td><code>name</code></td>
   <td>ACME</td>
  </tr>
 </tbody>
</table>

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
   <td>{{SpecName('HTML Microdata', "#dfn-itemtype", "itemtype")}}</td>
   <td>{{Spec2('HTML Microdata')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "microdata.html#attr-itemtype", "itemprop")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.global_attributes.itemtype")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTML/Attributs_universels">Les différents attributs universels</a></li>
 <li>Les autres attributs universels relatifs aux microdonnées :
  <ul>
   <li>{{htmlattrxref("itemid")}}</li>
   <li>{{htmlattrxref("itemprop")}}</li>
   <li>{{htmlattrxref("itemref")}}</li>
   <li>{{htmlattrxref("itemscope")}}</li>
   <li>{{htmlattrxref("itemtype")}}</li>
  </ul>
 </li>
</ul>
