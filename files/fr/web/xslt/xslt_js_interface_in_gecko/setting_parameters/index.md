---
title: Définition de paramètres
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters
tags:
  - Traduction_à_relire
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters
original_slug: Web/XSLT/Interface_XSLT_JS_dans_Gecko/Définition_de_paramètres
---
<h2 id="D.C3.A9finition_de_param.C3.A8tres">Définition de paramètres</h2>

<p>Alors que l'exécution de transformations à l'aide des fichiers .xsl et .xml pré codés est utile, la configuration du fichier .xsl par JavaScript peut l'être bien plus. Par exemple, JavaScript et XSLT peuvent être utilisés pour trier des données XML puis les afficher. L'ordre du tri pourra alterner entre le tri ascendant et le tri descendant.</p>

<p>XSLT fournit l'élément <code>xsl:param</code>, qui est un descendant de l'élément <code>xsl:stylesheet</code>. <code>XSLTProcessor()</code> fournit trois méthodes JavaScript pour interagir avec ces paramètres : <code>setParameter</code>, <code>getParameter</code> et <code>removeParameter</code>. Elles prennent toutes comme premier argument l'URI de l'espace de nommage de <code>xsl:param</code> (normalement, <code>param</code> tombera dans l'espace de nommage par défaut, ainsi le passer à <code>null</code> suffira). Le nom local de <code>xsl:param</code> est le second argument. <code>setParameter</code> requiert un troisième argument, à savoir la valeur à laquelle le paramètre sera défini.</p>

<p><small><strong>Figure 7 : Paramètres</strong></small></p>

<p><em>XSLT :</em></p>

<pre>&lt;xsl:param name="myOrder" /&gt;
</pre>

<p><em>JavaScript :</em></p>

<pre>var sortVal = xsltProcessor.getParameter(null, "monOrdre");

if (sortVal == "" || sortVal == "descendant")
  xsltProcessor.setParameter(null, "monOrdre", "ascendant");
else
  xsltProcessor.setParameter(null, "monOrdre", "descendant");
</pre>
