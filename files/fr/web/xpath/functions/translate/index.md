---
title: translate
slug: Web/XPath/Functions/translate
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/translate
original_slug: Web/XPath/Fonctions/translate
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>translate</code> évalue une chaîne et un ensemble de caractères à traduire, et retourne la chaîne traduite.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">translate( <i>chaîne</i> , <i>abc</i> , <i>XYZ</i> )
</pre>
<h3 id="Arguments"> Arguments </h3>
<dl><dt><code><i>chaîne</i></code>
</dt><dd>La chaîne à évaluer.
</dd></dl>
<dl><dt><code><i>abc</i></code>
</dt><dd>La chaîne de caractères à remplacer.
</dd></dl>
<dl><dt><code><i>XYZ</i></code> </dt><dd>La chaîne de caractères utilisée pour le remplacement. Le premier caractère de <code><i>XYZ</i></code> remplacera chaque occurrence du premier caractère de <code><i>abc</i></code> qui apparaît dans <code><i>chaîne</i></code>.
</dd></dl>
<h3 id="Retour"> Retour </h3>
<p>La chaîne traduite.
</p>
<h3 id="Notes"> Notes </h3>
<p>XPath note que la fonction <code>translate</code> n'est pas une solution suffisante pour la conversion majuscule/minuscule dans tous les langages. Une future version de XPath pourrait fournir des fonctions supplémentaires pour la conversion. </p><p>Cependant, <code>translate</code> est à l'heure actuelle la fonction la plus proche d'une fonction pouvant convertir une chaîne en bas de casse ou haut de casse.
</p>
<h4 id="Exemple"> Exemple </h4>
<pre class="eval">&lt;xsl:value-of select="translate('Le rapide renard.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'") /&gt;
</pre>
<h4 id="Sortie"> Sortie </h4>
<pre class="eval">LE RAPIDE RENARD.
</pre>
<p><br>
</p>
<ul><li> Si <code><i>abc</i></code> est plus long que <code><i>XYZ</i></code>, alors chaque occurrence d'un caractère de <code><i>abc</i></code> qui n'a pas de correspondance dans <code><i>XYZ</i></code> sera supprimée.
</li></ul>
<h4 id="Exemple_2"> Exemple </h4>
<pre class="eval">&lt;xsl:value-of select="translate('Le renard rapide.', 'renard', 'panda')" /&gt;
</pre>
<h4 id="Sortie_2"> Sortie </h4>
<pre class="eval">La pandp pdpia.
</pre>
<ul><li> Si <code><i>XYZ</i></code> contient plus de caractères que <code><i>abc</i></code>, les caractères supplémentaires sont ignorés.
</li></ul>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xpath#function-translate">XPath 1.0, section 4.2</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>