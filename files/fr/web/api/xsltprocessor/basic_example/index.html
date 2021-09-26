---
title: Exemple basique
slug: Web/API/XSLTProcessor/Basic_Example
translation_of: Web/API/XSLTProcessor/Basic_Example
original_slug: XSLT_dans_Gecko/Exemple_basique
---
<p></p><ol>
<li><a href="/fr/docs/XSLT_dans_Gecko">Introduction</a></li>
<li><a href="/fr/docs/XSLT_dans_Gecko/Exemple_basique">Exemple basique</a></li>
<li><a href="/fr/docs/XSLT_dans_Gecko/G%c3%a9n%c3%a9ration_de_HTML">Génération de HTML</a></li>
<li><a href="/fr/docs/XSLT_dans_Gecko/Diff%c3%a9rences_entre_les_navigateurs">Différences entre les navigateurs</a></li>
<li><a href="/fr/docs/XSLT_dans_Gecko/Ressources">Ressources</a></li>
</ol><p></p>

<h2 id="Exemple_basique">Exemple basique</h2>

<p>Ce premier exemple présente les bases de l'utilisation d'une transformation XSLT dans un navigateur. L'exemple utilise un document XML qui contient des informations (titre, liste d'auteurs et corps de texte) à propos d'un article pour en tirer une version lisible par un humain.</p>

<p>La figure 1 montre le code source de l'exemple XSLT. Le document XML (exemple.xml) contient les informations à propos de l'article. En utilisant l'instruction de traitement <code>?xml-stylesheet?</code>, il est lié à la feuille de style XSLT (exemple.xsl) via son attribut <code>href</code>.</p>

<p>Une feuille de style XSLT débute par l'élément <code>xsl:stylesheet</code>, qui contient tous les modèles utilisés pour créer le résultat final. L'exemple de la figure 1 possède deux modèles - un qui s'applique au nœud racine et un aux nœuds <code>Author</code>. Le modèle correspondant au nœud racine produit en sortie le titre de l'article puis déclenche le traitement de tous les autres modèles (via <code>apply-templates</code>) correspondant aux nœuds <code>Author</code> qui sont les descendants du nœud <code>Authors</code>.</p>

<p>Figure 1 : exemple XSLT simple</p>

<p>Document XML (exemple.xml) :</p>

<pre>  &lt;?xml version="1.0"?&gt;
  &lt;?xml-stylesheet type="text/xsl" href="exemple.xsl"?&gt;
  &lt;Article&gt;
    &lt;Title&gt;Mon article&lt;/Title&gt;
    &lt;Authors&gt;
      &lt;Author&gt;M. Foo&lt;/Author&gt;
      &lt;Author&gt;M. Bar&lt;/Author&gt;
    &lt;/Authors&gt;
    &lt;Body&gt;Ceci est le texte de mon article.&lt;/Body&gt;
  &lt;/Article&gt;
</pre>

<p>Feuille de style XSL (exemple.xsl) :</p>

<pre>  &lt;?xml version="1.0"?&gt;
  &lt;xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"&gt;

    &lt;xsl:output method="text"/&gt;

    &lt;xsl:template match="/"&gt;
      Article - &lt;xsl:value-of select="/Article/Title"/&gt;
      Auteurs : &lt;xsl:apply-templates select="/Article/Authors/Author"/&gt;
    &lt;/xsl:template&gt;

    &lt;xsl:template match="Author"&gt;
      - &lt;xsl:value-of select="." /&gt;
    &lt;/xsl:template&gt;

  &lt;/xsl:stylesheet&gt;
</pre>

<p>Sortie dans le navigateur :</p>

<pre>  Article - Mon article
  Auteurs :
  - M. Foo
  - M. Bar
</pre>

<p>{{PreviousNext("XSLT dans Gecko", "XSLT dans Gecko:Génération de HTML")}}</p>
