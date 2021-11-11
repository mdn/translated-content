---
title: Éléments
slug: Web/XSLT/Element
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element
---
<p> </p>
<p>{{ XsltRef() }} Ce document traite de deux types d'éléments : les éléments de haut niveau, et les instructions. Un élément de haut niveau doit toujours apparaître en tant qu'enfant de <code>&lt;xsl:stylesheet&gt;</code> ou de <code>&lt;xsl:transform&gt;</code>. Une instruction, de son côté, est associée à un modèle. Une feuille de style peut comporter plusieurs modèles. Un troisième type d'élément, que nous n'aborderons pas ici, est le « Literal Result Element (LRE) ». Un LRE appartient également à un modèle. Le terme regroupe tout ce qui n'est pas une instruction et qui doit être recopié tel-quel dans le document de sortie, par exemple, un élément <code>&lt;hr&gt;</code> dans feuille de style de conversion HTML.</p>
<p>A ce propos, tous les attributs d'un LRE et certains attributs d'un nombre limité d'éléments XSLT peuvent inclure ce que l'on appelle un modèle de valeur d'attribut. Un modèle de valeur d'attribut est simplement une chaîne qui intègre une expression XPath utilisée pour spécifier la valeur de l'attribut. Lors de l'exécution, l'expression est évaluée et le résultat de cette évaluation est substitué à l'expression XPath. Par exemple, considérons que variable « &lt;tt&gt;image-dir&lt;/tt&gt; » est définie comme ci-dessous :</p>
<pre class="eval">&lt;xsl:variable name="image-dir"&gt;/images&lt;/xsl:variable&gt;
</pre>
<p>L'expression a évaluer est placée entre accolades :</p>
<pre class="eval">&lt;img src="{$image-dir}/mygraphic.jpg"/&gt;
</pre>
<p>Ce qui donnera :</p>
<pre class="eval">&lt;img src="/images/mygraphic.jpg"/&gt;
</pre>
<p>Les définitions des éléments ci-dessous incluent une description, la syntaxe, une liste des attributs requis ou optionnels, une description du type et de la position, les sources dans la recommandation du W3C et le niveau de support actuel dans Gecko.</p>
<ul>
  <li><a href="apply-imports">xsl:apply-imports</a></li>
  <li><a href="apply-templates">xsl:apply-templates</a></li>
  <li><a href="attribute">xsl:attribute</a></li>
  <li><a href="attribute-set">xsl:attribute-set</a></li>
  <li><a href="call-template">xsl:call-template</a></li>
  <li><a href="choose">xsl:choose</a></li>
  <li><a href="comment">xsl:comment</a></li>
  <li><a href="copy">xsl:copy</a></li>
  <li><a href="copy-of">xsl:copy-of</a></li>
  <li><a href="decimal-format">xsl:decimal-format</a></li>
  <li><a href="element">xsl:element</a></li>
  <li><a href="fallback">xsl:fallback</a> <i>(non supporté)</i></li>
  <li><a href="for-each">xsl:for-each</a></li>
  <li><a href="if">xsl:if</a></li>
  <li><a href="import">xsl:import</a> <i>(supporté)</i></li>
  <li><a href="include">xsl:include</a></li>
  <li><a href="key">xsl:key</a></li>
  <li><a href="message">xsl:message</a></li>
  <li><a href="namespace-alias">xsl:namespace-alias</a> <i>(non supporté)</i></li>
  <li><a href="number">xsl:number</a> <i>(partiellement supporté)</i></li>
  <li><a href="otherwise">xsl:otherwise</a></li>
  <li><a href="output">xsl:output</a> <i>(partiellement supporté)</i></li>
  <li><a href="param">xsl:param</a></li>
  <li><a href="preserve-space">xsl:preserve-space</a></li>
  <li><a href="processing-instruction">xsl:processing-instruction</a></li>
  <li><a href="sort">xsl:sort</a></li>
  <li><a href="strip-space">xsl:strip-space</a></li>
  <li><a href="stylesheet">xsl:stylesheet</a> <i>(partiellement supporté)</i></li>
  <li><a href="template">xsl:template</a></li>
  <li><a href="text">xsl:text</a> <i>(partiellement supporté)</i></li>
  <li><a href="transform">xsl:transform</a></li>
  <li><a href="value-of">xsl:value-of</a> <i>(partiellement supporté)</i></li>
  <li><a href="variable">xsl:variable</a></li>
  <li><a href="when">xsl:when</a></li>
  <li><a href="with-param">xsl:with-param</a></li>
</ul>