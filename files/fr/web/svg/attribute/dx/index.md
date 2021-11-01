---
title: dx
slug: Web/SVG/Attribute/dx
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/dx
---
<div>{{SVGRef}}</div>

<p>L'attribut <strong><code>dx</code></strong> indique un décalage sur l'axe x de la position d'un élément ou de son contenu.</p>

<p>Sept éléments utilisent cet attribut: {{SVGElement('altGlyph')}}, {{SVGElement('feDropShadow')}}, {{SVGElement('feOffset')}}, {{SVGElement('glyphRef')}}, {{SVGElement('text')}}, {{SVGElement('tref')}}, et {{SVGElement('tspan')}}</p>

<h2>Exemple</h2>

<pre class="brush: css hidden">html,body,svg { height:100% }</pre>

<pre class="brush: html">&lt;svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;!-- Lignes indiquant la position des glyphes --&gt;
  &lt;line x1="0"  x2="100%" y1="50%" y2="50%" /&gt;
  &lt;line x1="10%" x2="10%" y1="0"   y2="100%" /&gt;
  &lt;line x1="60%" x2="60%" y1="0"   y2="100%" /&gt;

  &lt;!-- Un texte de référence --&gt;
  &lt;text x="10%" y="50%" fill="grey"&gt;SVG&lt;/text&gt;

  &lt;!-- Le même texte avec un décalage sur l'axe x --&gt;
  &lt;text dx="50%" x="10%" y="50%"&gt;SVG&lt;/text&gt;
&lt;/svg&gt;</pre>

<pre class="brush: css">line {
  stroke: red;
  stroke-width: .5px;
  stroke-dasharray: 3px;
}</pre>

<p>{{EmbedLiveSample('exemple', '100%', 200)}}</p>

<h2 id="altGlyph">altGlyph</h2>

<div class="warning">
  <p><strong>Attention :</strong> Depuis SVG2 {{SVGElement('altGlyph')}} est déprécié et ne devrait pas être utilisé.</p>
</div>

<p>Pour {{SVGElement('altGlyph')}}, s'il ne contient qu'une seule valeur, <code>dx</code> définit un décalage sur l'axe x pour l'ensemble des glyphes.</p>

<p>S'il a plusieurs valeurs, <code>dx</code> définit un décalage sur l'axe x individuellement pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs qu'il n'y a de glyphes, les glyphes restants utilisent une valeur de <code>0</code>. S'il y a plus de valeurs qu'il n'y a de glyphes, les valeurs supplémentaires sont ignorées.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Valeur</th>
   <td>Liste de <strong><a href="/docs/Web/SVG/Content_type#Length">&lt;length&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">Valeur par défaut</th>
   <td><em>aucune</em></td>
  </tr>
  <tr>
   <th scope="row">Animation</th>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<h2 id="feDropShadow">feDropShadow</h2>

<p>Pour {{SVGElement('feDropShadow')}}, <code>dx</code> définit le décalage x de l'ombre portée. L'unité utilisée pour résoudre la valeur de l'attribut est définie par l'attribut {{SVGAttr('primitiveUnits')}} de l'élément {{SVGElement('filter')}}.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Valeur</th>
   <td><strong><a href="/docs/Web/SVG/Content_type#Number">&lt;number&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">Valeur par défaut</th>
   <td><code>2</code></td>
  </tr>
  <tr>
   <th scope="row">Animation</th>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<h2 id="feOffset">feOffset</h2>

<p>Pour {{SVGElement('feOffset')}}, <code>dx</code> définit le décalage x de l'élément source du filtre. L'unité utilisée pour résoudre la valeur de l'attribut est définie par l'attribut {{SVGAttr('primitiveUnits')}} de l'élément {{SVGElement('filter')}}.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Valeur</th>
   <td><strong><a href="/docs/Web/SVG/Content_type#Number">&lt;number&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">Valeur par défaut</th>
   <td><code>0</code></td>
  </tr>
  <tr>
   <th scope="row">Animation</th>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<h2 id="glyphRef">glyphRef</h2>

<div class="warning">
  <p><strong>Attention :</strong> Depuis SVG2 {{SVGElement('glyphRef')}} est déprécié et ne devrait pas être utilisé.</p>
</div>

<p>Pour {{SVGElement('glyphRef')}}, <code>dx</code> définit le décalage x du glyphe, dans le système métrique de la police.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Valeur</th>
   <td><strong><a href="/docs/Web/SVG/Content_type#Number">&lt;number&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">Valeur par défaut</th>
   <td><code>0</code></td>
  </tr>
  <tr>
   <th scope="row">Animation</th>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<h2 id="text">text</h2>

<p>Pour {{SVGElement('text')}}, s'il ne contient qu'une seule valeur, <code>dx</code> définit un décalage sur l'axe x pour tous les glyphes.</p>

<p>S'il a plusieurs valeurs, <code>dx</code> définit un décalage sur l'axe x individuellement pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs qu'il n'y a de glyphes, les glyphes restants utilisent une valeur de <code>0</code>. S'il y a plus de valeurs qu'il n'y a de glyphes, les valeurs supplémentaires sont ignorées.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Valeur</th>
   <td>Liste de <strong><a href="/docs/Web/SVG/Content_type#Length">&lt;length&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">Valeur par défaut</th>
   <td><em>aucune</em></td>
  </tr>
  <tr>
   <th scope="row">Animation</th>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<h3 id="Exemple">Exemple</h3>

<pre class="brush: css hidden">html,body,svg { height:100% }</pre>

<pre class="brush: html">&lt;svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;!-- Linges indiquant la position des glyphes --&gt;
  &lt;line x1="0"  x2="100%" y1="25%" y2="25%" /&gt;
  &lt;line x1="0"  x2="100%" y1="50%" y2="50%" /&gt;
  &lt;line x1="0"  x2="100%" y1="75%" y2="75%" /&gt;

  &lt;line x1="10%" x2="10%" y1="0"   y2="100%" /&gt;
  &lt;line x1="30%" x2="30%" y1="0"   y2="100%" /&gt;
  &lt;line x1="60%" x2="60%" y1="0"   y2="100%" /&gt;

  &lt;!-- Le comportement change en fonction du nombre
       de valeurs de l'attribut --&gt;
  &lt;text dx="20%"       x="10%" y="25%"&gt;SVG&lt;/text&gt;
  &lt;text dx="0 10%"     x="10%" y="50%"&gt;SVG&lt;/text&gt;
  &lt;text dx="0 10% 20%" x="10%" y="75%"&gt;SVG&lt;/text&gt;
&lt;/svg&gt;</pre>

<pre class="brush: css">line {
  stroke: red;
  stroke-width: .5px;
  stroke-dasharray: 3px;
}</pre>

<p>{{EmbedLiveSample('text', '100%', 100)}}</p>

<h2 id="tref">tref</h2>

<div class="warning">
  <p><strong>Attention :</strong> Depuis SVG2 {{SVGElement('tref')}} est déprécié et ne devrait pas être utilisé.</p>
</div>

<p>Pour {{SVGElement('tref')}}, s'il ne contient qu'une seule valeur, <code>dx</code> définit un décalage sur l'axe x pour tous les glyphes.</p>

<p>S'il a plusieurs valeurs, <code>dx</code> définit un décalage sur l'axe x individuellement pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs qu'il n'y a de glyphes, les glyphes restants utilisent une valeur de <code>0</code>. S'il y a plus de valeurs qu'il n'y a de glyphes, les valeurs supplémentaires sont ignorées.</p>

<p> </p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Valeur</th>
   <td>Liste de <strong><a href="/docs/Web/SVG/Content_type#Length">&lt;length&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">Valeur par défaut</th>
   <td><em>aucune</em></td>
  </tr>
  <tr>
   <th scope="row">Animation</th>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<h2 id="tspan">tspan</h2>

<p> </p>

<p>Pour {{SVGElement('tspan')}}, s'il ne contient qu'une seule valeur, <code>dx</code> définit un décalage sur l'axe x pour tous les glyphes.</p>

<p>S'il a plusieurs valeurs, <code>dx</code> définit un décalage sur l'axe x individuellement pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs qu'il n'y a de glyphes, les glyphes restants utilisent une valeur de <code>0</code>. S'il y a plus de valeurs qu'il n'y a de glyphes, les valeurs supplémentaires sont ignorées.</p>

<p> </p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Valeur</th>
   <td>Liste de <strong><a href="/docs/Web/SVG/Content_type#Length">&lt;length&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">Valeur par défaut</th>
   <td><em>aucune</em></td>
  </tr>
  <tr>
   <th scope="row">Animation</th>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('Filters 1.0', '#element-attrdef-fedropshadow-dx', 'dx') }}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
   <td>Définition initiale pour <code>&lt;feDropShadow&gt;</code></td>
  </tr>
  <tr>
   <td>{{ SpecName('Filters 1.0', '#element-attrdef-feoffset-dx', 'dx') }}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
   <td>Définition pour <code>&lt;feOffset&gt;</code></td>
  </tr>
  <tr>
   <td>{{SpecName("SVG2", "text.html#TextElementDXAttribute", "dx")}}</td>
   <td>{{Spec2("SVG2")}}</td>
   <td>Définition pour <code>&lt;text&gt;</code> et <code>&lt;tspan&gt;</code></td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "filters.html#feOffsetDxAttribute", "dx")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Définition initiale pour <code>&lt;feOffset&gt;</code></td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "text.html#AltGlyphElementDXAttribute", "dx")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Définition initiale pour <code>&lt;altGlyph&gt;</code></td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "text.html#GlyphRefElementDXAttribute", "dx")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Définition initiale pour <code>&lt;glyphRef&gt;</code></td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "text.html#TextElementDXAttribute", "dx")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Définition initiale pour <code>&lt;text&gt;</code></td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "text.html#TSpanElementDXAttribute", "dx")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Définition initiale pour <code>&lt;tref&gt;</code> et <code>&lt;tspan&gt;</code></td>
  </tr>
 </tbody>
</table>
