---
title: stroke
slug: Web/SVG/Attribute/stroke
tags:
  - Attribut SVG
  - SVG
translation_of: Web/SVG/Attribute/stroke
---
<div>{{SVGRef}}</div>

<p>L'attribut <strong><code>stroke</code></strong> définit la couleur (ou n'importe quelle méthode de remplissage, comme un gradient ou motif) a utiliser pour dessiner le contour d'une forme SVG.</p>

<div class="note">
  <p><strong>Note :</strong> <code>stroke</code> étant un attribut de présentation, il peut être utilisé comme propriété CSS.</p>
</div>

<p>Cet attribut peut être appliqué à tout élément, en revanche il n'aura d'effet que sur les éléments suivants: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}</p>

<h2>Exemple</h2>

<pre class="brush: css hidden">html,body,svg { height:100% }</pre>

<pre class="brush: html">&lt;svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;!-- Simple trait de couleur --&gt;
  &lt;circle cx="5" cy="5" r="4" fill="none"
          stroke="green" /&gt;

  &lt;!-- Utiliser un degradé comme contour --&gt;
  &lt;defs&gt;
    &lt;linearGradient id="myGradient"&gt;
      &lt;stop offset="0%"   stop-color="green" /&gt;
      &lt;stop offset="100%" stop-color="white" /&gt;
    &lt;/linearGradient&gt;
  &lt;/defs&gt;
  &lt;circle cx="15" cy="5" r="4" fill="none"
          stroke="url(#myGradient)" /&gt;
&lt;/svg&gt;
</pre>

<p>{{EmbedLiveSample('exemple', '100%', 200)}}</p>

<h2 id="Notes_d'usage">Notes d'usage</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Valeur</th>
   <td><strong><a href="/docs/Web/SVG/Content_type#Paint">&lt;paint&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">Valeur par défaut</th>
   <td><code>none</code></td>
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
   <td>{{SpecName("SVG2", "painting.html#StrokeProperty", "stroke")}}</td>
   <td>{{Spec2("SVG2")}}</td>
   <td>Définition pour les formes et le texte.<br>
    Ajoute <code>context-fill</code> et <code>context-stroke</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "painting.html#StrokeProperty", "stroke")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Définiton initiale pour les formes et le texte</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.attributes.presentation.stroke")}}</p>

<div class="note">
  <p><strong>Note :</strong> Pour plus d'informations sur les valeurs de <code>context-stroke</code> (et <code>context-fill</code>) à partir de documents HTML, voir la documentation pour la propriété non-standard {{cssxref("-moz-context-properties")}}.</p>
</div>
