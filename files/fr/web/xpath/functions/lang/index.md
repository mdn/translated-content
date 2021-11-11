---
title: lang
slug: Web/XPath/Functions/lang
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/lang
original_slug: Web/XPath/Fonctions/lang
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>lang</code> détermine si le nœud de contexte correspond à la langue indiquée et retourne le booléen <code>true</code> ou <code>false</code>.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">lang( <i>chaîne</i> )
</pre>
<h3 id="Arguments"> Arguments </h3>
<dl><dt><code><i>chaîne</i></code>
</dt><dd>Le code de langue ou de localisation (langue et pays) à vérifier.
</dd></dl>
<h3 id="Retour"> Retour </h3>
<p><code>true</code> si le noeud de contexte est dans la langue donnée, <code>false</code> autrement.
</p>
<h3 id="Notes"> Notes </h3>
<ul><li> La langue d'un nœud est déterminée par son attribut <code>xml:lang</code>. Si le nœud courant ne possède pas cet attribut, alors la valeur de l'attribut <code>xml:lang</code> du plus proche ancêtre le possédant déterminera la langue du nœud courant. Si la langue ne peut être déterminée (aucun ancêtre avec un attribut <code>xml:lang</code>), cette fonction retourne le booléen <code>false</code>.
</li></ul>
<ul><li> Si la <code><i>chaîne</i></code> donnée ne spécifie pas de code de pays, cette fonction sélectionnera les nœuds dans la langue spécifiée, suivie éventuellement de n'importe quel code de pays. La réciproque n'est pas vraie.
</li></ul>
<p>Regardons le code XML suivant :
</p>
<pre>&lt;p xml:lang="en"&gt;I went up a floor.&lt;/p&gt;
&lt;p xml:lang="en-GB"&gt;I took the lift.&lt;/p&gt;
&lt;p xsl:lang="en-US"&gt;I rode the elevator.&lt;/p&gt;</pre>
<p>et ce modèle XSL :
</p>
<pre class="eval">&lt;xsl:value-of select="count(//p[lang('en')])" /&gt;
&lt;xsl:value-of select="count(//p[lang('en-GB')])" /&gt;
&lt;xsl:value-of select="count(//p[lang('en-US')])" /&gt;
&lt;xsl:value-of select="count(//p[lang('de')])" /&gt;
</pre>
<p>La sortie sera :
</p>
<pre class="eval">3
1
1
0
</pre>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xpath#function-lang">XPath 1.0, section 4.3</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté.
</p>