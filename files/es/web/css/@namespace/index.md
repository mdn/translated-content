---
title: '@namespace'
slug: Web/CSS/@namespace
translation_of: Web/CSS/@namespace
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>@namespace</code></strong> es una <a href="/en-US/docs/Web/CSS/At-rule" title="CSS at-rules">regla</a> que define <a href="/en-US/docs/Namespaces">XML namespace</a> a ser usados en una <a href="/en-US/docs/Glossary/CSS">hoja de estilos CSS</a>. Los namespaces definidos pueden utilizarse para restringir <a href="/en-US/docs/Web/CSS/Universal_selectors">selectores universales</a>, <a href="/en-US/docs/Web/CSS/Type_selectors">types</a>, y <a href="/en-US/docs/Web/CSS/Attribute_selectors">selectores de atributos</a> para seleccionar </span>sólo elementos dentro de ese namespace.<span class="seoSummary">La regla <code>@namespace</code> generalmente </span>sólo es útil cuando se trata de documents que contienen múltiples namespace<span class="seoSummary">—como HTML5 con SVG o MathML, o XML que mezcla</span>múltiples<span class="seoSummary">vocabularios.</span></p>

<pre class="brush: css no-line-numbers">@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* Esto coincide con todos los elementos XHTML &lt;a&gt;, ya que el XHTML es el namespace por defecto sin prefijo */
a {}

/* Esto coincide con todos los elementos SVG &lt;a&gt; */
svg|a {}

/* Esto concuerda con todos los elementos XHTML y SVG &lt;a&gt; elements */
*|a {}</pre>

<p>Cualquier <code>@namespace</code> debe seguir todas las reglas de <a href="/en-US/docs/Web/CSS/%40charset">@charset</a> y <a href="/en-US/docs/Web/CSS/%40import">@import</a>, y preceder a todas las demás reglas y <a href="/en-US/docs/Web/API/CSSStyleDeclaration">declaraciones de estilo</a> de una hoja de estilos.</p>

<p>Se puede utilizar <code>@namespace</code> para definirun <strong>namespace por defecto</strong> de una hoja de estilos. Cuando se define un namespace por defecto, todos los selectores universales y tipos (pero no los selectores de atributo, véase la nota a continuación) se aplican únicamente a los elementos de ese namespace</p>

<p>La regla <code>@namespace</code> también puede usarse para definir un <strong>prefijo de namespace</strong>. Cuando un selector universal, tipo, o selector de atributo se antepone a un prefijo de un namespace, ese selector sólo coincide si el namespace y el nombre del elemento o atributo coinciden.</p>

<p>En <a href="/en-US/docs/Glossary/HTML5">HTML5</a>, conocidos como<a href="https://html.spec.whatwg.org/#foreign-elements"> elementos externos</a> automaticamente se les asignarán un namespace. Esto significa que los elementos HTML actuarán como si estuvieran en un namespace XHTML (<code>http://www.w3.org/1999/xhtml</code>), incluso si no hay ningún atributo xmlns en ninguna parte del document, y los elementos <a href="/en-US/docs/Web/SVG/Element/svg">&lt;svg&gt;</a> y <a href="/en-US/docs/Web/MathML/Element/math">&lt;math&gt;</a> se les asignará un namespace propio (<code>http://www.w3.org/2000/svg</code> and <code>http://www.w3.org/1998/Math/MathML</code>).</p>

<div class="note">
<p><strong>Nota:</strong> En XML, a menos que se defina un prefijo directamente sobre un atributo (<em>ejemplo.</em>, <code>xlink:href</code>), ese atributo no tiene namespace. En otras palabras, los atributos no heredan el namespace del elemento en el que están. Para que coincida con este comportamiento, el namespace por defecto en CSS no se aplica a los selectores de atributos.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush: css">/* Namespace por defecto */
@namespace url(<em>XML-namespace-URL</em>);
@namespace "<em>XML-namespace-URL</em>";

/* Namespace sin prefijo */
@namespace <em>prefix</em> url(<em>XML-namespace-URL</em>);
@namespace <em>prefix</em> "<em>XML-namespace-URL</em>";</pre>

<h3 id="Sintaxis_oficial">Sintaxis oficial</h3>

{{csssyntax}}

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Namespaces', '#declaration', '@namespace')}}</td>
   <td>{{Spec2('CSS3 Namespaces')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad">Compatibilidad</h2>



<p>{{Compat("css.at-rules.namespace")}}</p>
