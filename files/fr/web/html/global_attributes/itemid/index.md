---
title: itemid
slug: Web/HTML/Global_attributes/itemid
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Micro-données
  - Reference
  - itemid
translation_of: Web/HTML/Global_attributes/itemid
original_slug: Web/HTML/Attributs_universels/itemid
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p>L'<a href="/fr/docs/Web/HTML/Attributs_universels">attribut universel</a> <strong><code>itemid</code></strong> permet d'identifier un objet, au sens des microdonnées, de façon unique et globale. L'attribut <code>itemid</code> peut uniquement être défini sur les éléments qui ont un attribut {{htmlattrxref("itemscope")}} et un attribut {{htmlattrxref("itemtype")}}. De plus, un <code>itemid</code> ne peut pas être défini sur des éléments dont l'attribut <code>itemscope</code> possède un attribut <code>itemtype</code> qui définit un vocabulaire qui ne prend pas en charge les identifiants globaux tels que défini dans la spécification du vocabulaire.</p>

<p>La signification exacte d'un identifiant global est déterminée par la spécification du vocabulaire. C'est le rôle de cette spécification d'autoriser ou non la présence de plusieurs éléments avec le même identifiant (sur une ou plusieurs pages) et de définir les règles de gestion associées.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

<pre class="syntaxbox">itemid="URN"</pre>

<div class="note">
  <p><strong>Note :</strong> Selon la définition du WHATWG, un <code>itemid</code> doit être une URL. Dans l'exemple qui suit, on utilise plutôt une URN, plus appropriée pour définir un identifiant unique comme <code>itemid</code>. Cette incohérence reflète l'état actuellement incomplet de la spécification sur les microdonnées.</p>
</div>

<h2 id="Exemple">Exemple</h2>

<h3 id="HTML">HTML</h3>

<p>Un élément qui décrit un livre :</p>

<pre class="brush: html">&lt;dl itemscope
    itemtype="http://vocab.example.net/book"
    <mark>itemid="urn:isbn:0-330-34032-8"</mark>&gt;
 &lt;dt&gt;Title &lt;dd itemprop="title"&gt;The Reality Dysfunction
 &lt;dt&gt;Author &lt;dd itemprop="author"&gt;Peter F. Hamilton
 &lt;dt&gt;Publication date
 &lt;dd&gt;&lt;time itemprop="pubdate" datetime="1996-01-26"&gt;26 January 1996&lt;/time&gt; &lt;/dl&gt;
</pre>

<h3 id="Données_structurées_correspondantes">Données structurées correspondantes</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <td colspan="1" rowspan="14">itemscope</td>
   <td>itemtype: itemid</td>
   <td colspan="2" rowspan="1">
    http://vocab.example.net/book: urn:isbn:0-330-34032-8
   </td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>title</td>
   <td>The Reality Dysfunction</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>author</td>
   <td>
    Peter F. Hamilton
   </td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>pubdate</td>
   <td>1996-01-26</td>
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
   <td>{{SpecName('HTML Microdata', "#items", "itemid")}}</td>
   <td>{{Spec2('HTML Microdata')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "microdata.html#attr-itemid", "itemid")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.global_attributes.itemid")}}</p>

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
