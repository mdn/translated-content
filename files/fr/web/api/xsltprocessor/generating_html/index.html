---
title: Génération de HTML
slug: Web/API/XSLTProcessor/Generating_HTML
translation_of: Web/API/XSLTProcessor/Generating_HTML
original_slug: XSLT_dans_Gecko/Génération_de_HTML
---
<p></p><ol>
<li><a href="/fr/docs/XSLT_dans_Gecko">Introduction</a></li>
<li><a href="/fr/docs/XSLT_dans_Gecko/Exemple_basique">Exemple basique</a></li>
<li><a href="/fr/docs/XSLT_dans_Gecko/G%c3%a9n%c3%a9ration_de_HTML">Génération de HTML</a></li>
<li><a href="/fr/docs/XSLT_dans_Gecko/Diff%c3%a9rences_entre_les_navigateurs">Différences entre les navigateurs</a></li>
<li><a href="/fr/docs/XSLT_dans_Gecko/Ressources">Ressources</a></li>
</ol><p></p>

<h2 id="G.C3.A9n.C3.A9ration_de_HTML">Génération de HTML</h2>

<p>Une application courante de XSLT dans les navigateurs est la transformation de code XML en HTML du coté du client. Le second exemple va transformer un document d'entrée (example2.xml), qui contient des informations à propos d'un article, en un document HTML.</p>

<p>L'élément <code>&lt;body&gt;</code> de l'article contient maintenant des éléments HTML (des balises <code>&lt;strong&gt;</code> et <code>&lt;em&gt;</code>, voir la figure 2). Le document XML contient à la fois des éléments HTML et éléments XML, mais un seul espace de nommage est nécessaire, pour les éléments XML. Comme il n'existe pas d'espace de nommage HTML, et que l'utilisation de l'espace de nommage XHTML forcerait le XSL à créer un document XML qui pourrait ne pas se comporter comme un document HTML, le nœud <code>xsl:output</code> de la feuille de style assure que le document résultant sera bien traité comme du HTML. Pour les éléments XML, nous avons besoin de notre propre espace de nommage, <code><a href="http://devedge.netscape.com/2002/de">http://devedge.netscape.com/2002/de</a></code>, à qui nous donnons le préfixe myNS <code>(xmlns:myNS="http://devedge.netscape.com/2002/de")</code>.</p>

<p><small><strong>Figure 2 : fichier XML (example2.xml)voir l'exemple | voir le source</strong></small> Document XML (example2.xml): &lt;div style="background: #EEE; font-size: 1.1em; line-height: 1.1em; border: dashed #666 1px; padding: 15px 20px 15px 20px; overflow: auto;"&gt;</p>

<pre class="eval">&lt;?xml version="1.0"?&gt;
&lt;?xml-stylesheet type="text/xsl" href="example.xsl"?&gt;
  &lt;myNS:Article xmlns:myNS="<a href="http://devedge.netscape.com/2002/de">http://devedge.netscape.com/2002/de</a>"&gt;
    &lt;myNS:Title&gt;Mon article&lt;/myNS:Title&gt;
    &lt;myNS:Authors&gt;
      &lt;myNS:Author company="Foopy Corp."&gt;M. Foo&lt;/myNS:Author&gt;
      &lt;myNS:Author&gt;M. Bar&lt;/myNS:Author&gt;
    &lt;/myNS:Authors&gt;
    &lt;myNS:Body&gt;
      En &lt;em&gt;Espagne&lt;/em&gt;, les &lt;strong&gt;pluies&lt;/strong&gt; se concentrent
      principalement dans les plaines.
    &lt;/myNS:Body&gt;
  &lt;/myNS:Article&gt;
</pre>

<p>La feuille de style XSL utilisée aura besoin de deux espaces de nommage - un pour les éléments XSLT et un pour nos propres éléments XML utilisés dans le document XML. La sortie de la feuille de style XSL est définie à <code>HTML</code> à l'aide de l'élément <code>xsl:output</code>. En définissant la sortie comme étant du code HTML et en n'ayant pas d'espace de nommage pour les éléments résultants (coloré en bleu), ces éléments seront traités comme des éléments HTML.</p>

<p><small><strong>Figure 3 : feuille de style XSL avec 2 espaces de nommage</strong> (example2.xsl)</small> feuille de style XSL (example2.xsl):</p>

<pre>  &lt;?xml version="1.0"?&gt;
  &lt;xsl:stylesheet version="1.0"
                           xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                           xmlns:myNS="http://devedge.netscape.com/2002/de"&gt;

    &lt;xsl:output method="html"/&gt;
    ...
  &lt;/xsl:stylesheet&gt;
</pre>

<p>Un modèle s'appliquant au nœud racine du document XML est créé et utilisé pour créer la structure de base de la page HTML.</p>

<p><small><strong>Figure 4 : Création du document HTML de base</strong></small> feuille de style XSL (example2.xsl):</p>

<pre>  ...
  &lt;xsl:template match="/"&gt;
  &lt;html&gt;

    &lt;head&gt;

      &lt;title&gt;
        &lt;xsl:value-of select="/myNS:Article/myNS:Title"/&gt;
      &lt;/title&gt;

      &lt;style type="text/css"&gt;
        .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
      &lt;/style&gt;

    &lt;/head&gt;

    &lt;body&gt;
      &lt;p class="myBox"&gt;
        &lt;span class="title"&gt;
          &lt;xsl:value-of select="/myNS:Article/myNS:Title"/&gt;
        &lt;/span&gt; &lt;br /&gt;

        Auteurs :   &lt;br /&gt;
          &lt;xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/&gt;
      &lt;/p&gt;

      &lt;p class="myBox"&gt;
        &lt;xsl:apply-templates select="//myNS:Body"/&gt;
      &lt;/p&gt;

    &lt;/body&gt;

  &lt;/html&gt;
  &lt;/xsl:template&gt;
  ...
</pre>

<p>Nous avons besoin de trois <code>xsl:template</code> supplémentaires pour parachever l'exemple. Le premier <code>xsl:template</code> est utilisé pour les nœuds <code>Author</code>, alors que le deuxième traite le nœud <code>body</code>. Le troisième possède une règle de correspondance générale qui lui permet de s'appliquer à chaque nœud et chaque attribut. Cela est nécessaire afin de préserver les éléments HTML présents dans le document XML : il s'appliquant à tous, et les recopie dans le document HTML créé par la transformation.</p>

<p><strong><small>Figure 5 : Les 3 modèles finaux</small></strong> feuille de style XSL (example2.xsl):</p>

<pre>  ...
  &lt;xsl:template match="myNS:Author"&gt;
     --   &lt;xsl:value-of select="." /&gt;

    &lt;xsl:if test="@company"&gt;
     ::   &lt;strong&gt;  &lt;xsl:value-of select="@company" /&gt;  &lt;/strong&gt;
    &lt;/xsl:if&gt;

    &lt;br /&gt;
  &lt;/xsl:template&gt;

  &lt;xsl:template match="myNS:Body"&gt;
    &lt;xsl:copy&gt;
      &lt;xsl:apply-templates select="@*|node()"/&gt;
    &lt;/xsl:copy&gt;
  &lt;/xsl:template&gt;

  &lt;xsl:template match="@*|node()"&gt;
    &lt;xsl:copy&gt;
      &lt;xsl:apply-templates select="@*|node()"/&gt;
    &lt;/xsl:copy&gt;
  &lt;/xsl:template&gt;
  ...
</pre>

<p>La feuille de style XSLT finale est donc :</p>

<p><small><strong>Figure 6 : feuille de style XSLT finale voir l'exemple | voir le source</strong></small> feuille de style XSL :</p>

<pre>  &lt;?xml version="1.0"?&gt;
  &lt;xsl:stylesheet version="1.0"
                           xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                           xmlns:myNS="http://devedge.netscape.com/2002/de"&gt;

    &lt;xsl:output method="html" /&gt;

    &lt;xsl:template match="/"&gt;
      &lt;html&gt;

        &lt;head&gt;

          &lt;title&gt;
            &lt;xsl:value-of select="/myNS:Article/myNS:Title"/&gt;
          &lt;/title&gt;

          &lt;style type="text/css"&gt;
            .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
          &lt;/style&gt;

        &lt;/head&gt;

        &lt;body&gt;
          &lt;p class="myBox"&gt;
            &lt;span class="title"&gt;
              &lt;xsl:value-of select="/myNS:Article/myNS:Title"/&gt;
            &lt;/span&gt; &lt;br /&gt;

            Authors:   &lt;br /&gt;
              &lt;xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/&gt;
            &lt;/p&gt;

          &lt;p class="myBox"&gt;
            &lt;xsl:apply-templates select="//myNS:Body"/&gt;
          &lt;/p&gt;

        &lt;/body&gt;

      &lt;/html&gt;
    &lt;/xsl:template&gt;

    &lt;xsl:template match="myNS:Author"&gt;
       --   &lt;xsl:value-of select="." /&gt;

      &lt;xsl:if test="@company"&gt;
       ::   &lt;b&gt;  &lt;xsl:value-of select="@company" /&gt;  &lt;/b&gt;
      &lt;/xsl:if&gt;

      &lt;br /&gt;
    &lt;/xsl:template&gt;

    &lt;xsl:template match="myNS:Body"&gt;
      &lt;xsl:copy&gt;
        &lt;xsl:apply-templates select="@*|node()"/&gt;
      &lt;/xsl:copy&gt;
    &lt;/xsl:template&gt;

    &lt;xsl:template match="@*|node()"&gt;
        &lt;xsl:copy&gt;
          &lt;xsl:apply-templates select="@*|node()"/&gt;
        &lt;/xsl:copy&gt;
    &lt;/xsl:template&gt;
  &lt;/xsl:stylesheet&gt;
</pre>

<p>{{PreviousNext("XSLT dans Gecko:Exemple basique", "XSLT dans Gecko:Différences entre les navigateurs")}}</p>
