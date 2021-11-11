---
title: Introduction à XML
slug: Web/XML/XML_introduction
tags:
  - XML
translation_of: Web/XML/XML_introduction
original_slug: Web/XML/Introduction_à_XML
---
<p>
</p><p><br>
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p>XML, pour <i>e<b>X</b>tensible <b>M</b>arkup <b>L</b>anguage</i> (langage de balisage extensible), est un langage de balisage généraliste <a class="external" href="http://www.w3.org/">recommandé par le W3C</a> comme l'est HTML. XML est un sous-ensemble du langage SGML. Cela signifie que contrairement aux autres langages de balisages, XML n'est pas prédéfini, vous devez définir vos propres balises. Le but principal de ce langage est le partage de données entre différents systèmes, tel qu'Internet.
</p><p>De nombreux autres langages sont basés sur XML, comme par exemple <a href="fr/XHTML">XHTML</a>, <a href="fr/MathML">MathML</a>, <a href="fr/SVG">SVG</a>, <a href="fr/XUL">XUL</a>, <a href="fr/XBL">XBL</a>, <a href="fr/RSS">RSS</a> et <a href="fr/RDF">RDF</a>. Vous pouvez créer votre propre langage basé sur XML.
</p>
<h3 id="Du_XML_.C2.AB_correct_.C2.BB_.28valide_et_.C2.AB_bien_form.C3.A9_.C2.BB.29"> Du XML « correct » (valide et « bien formé ») </h3>
<p>Pour être correct, un document XML doit être « bien formé », se conformer à toutes les règles de syntaxe du XML, et « valide », se conformer aux règles d'un langage spécifique.
</p><p>La plupart des navigateurs, dont Mozilla, offrent un outil de validation qui informera souvent lors de la lecture ou de l'affichage de documents mal formés.
</p>
<h4 id="Exemple"> Exemple </h4>
<p>Voici un exemple de document mal formé : un des éléments possédant une balise d'ouverture, <code>&lt;warning&gt;</code>, n'a pas de balise de fermeture et ce n'est pas un élément vide (ou auto-fermant comme les balises &lt;br /&gt; ou &lt;img /&gt; en XHTML).
</p>
<pre class="eval">&lt;code&gt;
  &lt;message&gt;
    &lt;warning&gt;
      Hello World
  &lt;/message&gt;
&lt;/code&gt;
</pre>
<p>L'exemple qui suit est correct et « bien formé » :
</p>
<pre class="eval">&lt;code&gt;
  &lt;message&gt;
    &lt;warning&gt;
      Hello World
    &lt;/warning&gt;
  &lt;/message&gt;
&lt;/code&gt;
</pre>
<p>Pour être valide, un document doit se conformer à des règles sémantiques qui sont habituellement définies dans un <i>XML Schema</i> ou une <a href="fr/DTD">Document Type Definition</a>. Un document qui contient une balise non définie n'est pas valide. Dans notre exemple ci-dessus, si nous ne définissons pas la balise <code>&lt;warning&gt;</code> alors notre document ne sera pas valide.
</p>
<h3 id="Entit.C3.A9s"> Entités </h3>
<p>Comme le <a href="fr/HTML">HTML</a>, le <b>XML</b> fournit des méthodes (appelées entités) pour se référer à certains caractères spéciaux réservés (tel que le signe « plus grand que » utilisé pour les balises). Il faut connaître 5 de ces caractères spéciaux :
</p>
<table class="standard-table"> <tbody><tr>
<td>Codage
</td><td>Entité
</td><td>Description
</td></tr>
<tr>
<td><code>&amp;lt;</code>
</td><td><code>&lt;</code>
</td><td>Un signe « plus petit que ».
</td></tr>
<tr>
<td><code>&amp;gt;</code>
</td><td><code>&gt;</code>
</td><td>Un signe « plus grand que ».
</td></tr>
<tr>
<td><code>&amp;amp;</code>
</td><td><code>&amp;</code>
</td><td>Esperluette (signe ET).
</td></tr>
<tr>
<td><code>&amp;quot;</code>
</td><td><code>"</code>
</td><td>Un guillemet anglais.
</td></tr>
<tr>
<td><code>&amp;apos;</code>
</td><td><code>'</code>
</td><td>Une apostrophe simple.
</td></tr>
</tbody></table>
<p>Même s'il n'y a que 5 entités déclarées, il est possible d'en ajouter d'autres grâce à la <a href="fr/DTD">Document Type Definition</a>, comme décrit ci-dessous :
</p>
<pre class="eval">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE body [
    &lt;!ENTITY warning "Avertissement : Quelque chose ne fonctionne pas correctement…
                      Veuillez rafraîchir et réessayer."&gt;
]&gt;
&lt;body&gt;
  &lt;message&gt; &amp;warning; &lt;/message&gt;
&lt;/body&gt;
</pre>
<p>Vous pouvez également utiliser les références numériques de caractères pour employer ces caractères spéciaux telles que &amp;#xA9; pour un signe ©. Vous trouverez plus d'informations à propos des références numériques de caractères spéciaux sur <a class="external" href="http://www.cookwood.com/entities/">Numeric character reference (en)</a>.
</p>
<h3 id="Affichage_de_XML"> Affichage de XML </h3>
<p>Il y a deux manières différentes d'utiliser le XML pour la présentation, et cela peut aller d'une transformation en HTML à la génération d'un document PDF ou d'images.
</p><p>Une manière d'appliquer un style sur une page XML est d'utiliser une feuille de style <a href="fr/CSS">CSS</a> avec la déclaration <code>xml-stylesheet</code>.
</p>
<pre>&lt;?xml-stylesheet type="text/css" href="stylesheet.css"?&gt;</pre>
<p>L'autre technique utilise la puissance de <a href="fr/XSLT">XSLT</a>, qui est capable de transformer les balises XML en toute autre chose, les possibilités sont alors presque infinies.
</p>
<pre>&lt;?xml-stylesheet type="text/xsl" href="transform.xsl"?&gt;</pre>
<h3 id="Recommandations"> Recommandations </h3>
<p>Cet article n'est qu'une introduction rapide à XML ; pour plus de détails, parcourez le Web à la recherche d'articles allant plus en profondeur.
</p><p>L'apprentissage du langage de balisage HTML vous aidera à mieux comprendre XML. Vous trouverez également plus d'informations en explorant le Mozilla Developer Center.
</p><p>Voici une liste d'articles de référence sur le Web :
</p>
<ul><li><a class="external" href="http://www.w3schools.com/dtd/">W3Schools: DTD Tutorial (en)</a>
</li><li><a class="external" href="http://www.w3schools.com/xml/default.asp">W3Schools: XML Tutorial (en)</a>
</li><li><a class="external" href="http://www.xml.com/">XML.com (en)</a>
</li><li><a class="external" href="http://www.w3.org/XML/">Extensible Markup Language (XML) @ W3.org (en)</a>
</li><li><a class="external" href="http://www.alistapart.com/d/usingxml/xml_uses_a.html">XML Example @ A List Apart (en)</a>
</li><li><a class="external" href="http://www.alistapart.com/articles/usingxml/">Using XML @ A List Apart (en)</a>
</li></ul>
<p>L'article <a class="external" href="http://www.alistapart.com/articles/usingxml/">Using XML (en)</a> est une ressource particulièrement intéressante sur la transformation et la création de votre propre langage XML.
</p>

<h3 id="Informations_sur_le_document"> Informations sur le document </h3>
<ul><li> Auteur(s) : <a class="external" href="http://justinshreve.com">Justin G. Shreve</a>
</li><li> Dernière mise à jour : le 4 août 2007
</li></ul>
