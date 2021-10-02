---
title: Génération de HTML
slug: Web/API/XSLTProcessor/Generating_HTML
translation_of: Web/API/XSLTProcessor/Generating_HTML
original_slug: XSLT_dans_Gecko/Génération_de_HTML
---
1.  [Introduction](/fr/docs/XSLT_dans_Gecko)
2.  [Exemple basique](/fr/docs/XSLT_dans_Gecko/Exemple_basique)
3.  [Génération de HTML](/fr/docs/XSLT_dans_Gecko/G%c3%a9n%c3%a9ration_de_HTML)
4.  [Différences entre les navigateurs](/fr/docs/XSLT_dans_Gecko/Diff%c3%a9rences_entre_les_navigateurs)
5.  [Ressources](/fr/docs/XSLT_dans_Gecko/Ressources)

## Génération de HTML

Une application courante de XSLT dans les navigateurs est la transformation de code XML en HTML du coté du client. Le second exemple va transformer un document d'entrée (example2.xml), qui contient des informations à propos d'un article, en un document HTML.

L'élément `<body>` de l'article contient maintenant des éléments HTML (des balises `<strong>` et `<em>`, voir la figure 2). Le document XML contient à la fois des éléments HTML et éléments XML, mais un seul espace de nommage est nécessaire, pour les éléments XML. Comme il n'existe pas d'espace de nommage HTML, et que l'utilisation de l'espace de nommage XHTML forcerait le XSL à créer un document XML qui pourrait ne pas se comporter comme un document HTML, le nœud `xsl:output` de la feuille de style assure que le document résultant sera bien traité comme du HTML. Pour les éléments XML, nous avons besoin de notre propre espace de nommage, [`http://devedge.netscape.com/2002/de`](http://devedge.netscape.com/2002/de), à qui nous donnons le préfixe myNS `(xmlns:myNS="http://devedge.netscape.com/2002/de")`.

**Figure 2 : fichier XML (example2.xml)voir l'exemple | voir le source** Document XML (example2.xml): \<div style="background: #EEE; font-size: 1.1em; line-height: 1.1em; border: dashed #666 1px; padding: 15px 20px 15px 20px; overflow: auto;">

    <?xml version="1.0"?>
    <?xml-stylesheet type="text/xsl" href="example.xsl"?>
      <myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
        <myNS:Title>Mon article</myNS:Title>
        <myNS:Authors>
          <myNS:Author company="Foopy Corp.">M. Foo</myNS:Author>
          <myNS:Author>M. Bar</myNS:Author>
        </myNS:Authors>
        <myNS:Body>
          En <em>Espagne</em>, les <strong>pluies</strong> se concentrent
          principalement dans les plaines.
        </myNS:Body>
      </myNS:Article>

La feuille de style XSL utilisée aura besoin de deux espaces de nommage - un pour les éléments XSLT et un pour nos propres éléments XML utilisés dans le document XML. La sortie de la feuille de style XSL est définie à `HTML` à l'aide de l'élément `xsl:output`. En définissant la sortie comme étant du code HTML et en n'ayant pas d'espace de nommage pour les éléments résultants (coloré en bleu), ces éléments seront traités comme des éléments HTML.

**Figure 3 : feuille de style XSL avec 2 espaces de nommage** (example2.xsl) feuille de style XSL (example2.xsl):

      <?xml version="1.0"?>
      <xsl:stylesheet version="1.0"
                               xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                               xmlns:myNS="http://devedge.netscape.com/2002/de">

        <xsl:output method="html"/>
        ...
      </xsl:stylesheet>

Un modèle s'appliquant au nœud racine du document XML est créé et utilisé pour créer la structure de base de la page HTML.

**Figure 4 : Création du document HTML de base** feuille de style XSL (example2.xsl):

      ...
      <xsl:template match="/">
      <html>

        <head>

          <title>
            <xsl:value-of select="/myNS:Article/myNS:Title"/>
          </title>

          <style type="text/css">
            .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
          </style>

        </head>

        <body>
          <p class="myBox">
            <span class="title">
              <xsl:value-of select="/myNS:Article/myNS:Title"/>
            </span> <br />

            Auteurs :   <br />
              <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
          </p>

          <p class="myBox">
            <xsl:apply-templates select="//myNS:Body"/>
          </p>

        </body>

      </html>
      </xsl:template>
      ...

Nous avons besoin de trois `xsl:template` supplémentaires pour parachever l'exemple. Le premier `xsl:template` est utilisé pour les nœuds `Author`, alors que le deuxième traite le nœud `body`. Le troisième possède une règle de correspondance générale qui lui permet de s'appliquer à chaque nœud et chaque attribut. Cela est nécessaire afin de préserver les éléments HTML présents dans le document XML : il s'appliquant à tous, et les recopie dans le document HTML créé par la transformation.

**Figure 5 : Les 3 modèles finaux** feuille de style XSL (example2.xsl):

      ...
      <xsl:template match="myNS:Author">
         --   <xsl:value-of select="." />

        <xsl:if test="@company">
         ::   <strong>  <xsl:value-of select="@company" />  </strong>
        </xsl:if>

        <br />
      </xsl:template>

      <xsl:template match="myNS:Body">
        <xsl:copy>
          <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
      </xsl:template>

      <xsl:template match="@*|node()">
        <xsl:copy>
          <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
      </xsl:template>
      ...

La feuille de style XSLT finale est donc :

**Figure 6 : feuille de style XSLT finale voir l'exemple | voir le source** feuille de style XSL :

      <?xml version="1.0"?>
      <xsl:stylesheet version="1.0"
                               xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                               xmlns:myNS="http://devedge.netscape.com/2002/de">

        <xsl:output method="html" />

        <xsl:template match="/">
          <html>

            <head>

              <title>
                <xsl:value-of select="/myNS:Article/myNS:Title"/>
              </title>

              <style type="text/css">
                .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
              </style>

            </head>

            <body>
              <p class="myBox">
                <span class="title">
                  <xsl:value-of select="/myNS:Article/myNS:Title"/>
                </span> <br />

                Authors:   <br />
                  <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
                </p>

              <p class="myBox">
                <xsl:apply-templates select="//myNS:Body"/>
              </p>

            </body>

          </html>
        </xsl:template>

        <xsl:template match="myNS:Author">
           --   <xsl:value-of select="." />

          <xsl:if test="@company">
           ::   <b>  <xsl:value-of select="@company" />  </b>
          </xsl:if>

          <br />
        </xsl:template>

        <xsl:template match="myNS:Body">
          <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
          </xsl:copy>
        </xsl:template>

        <xsl:template match="@*|node()">
            <xsl:copy>
              <xsl:apply-templates select="@*|node()"/>
            </xsl:copy>
        </xsl:template>
      </xsl:stylesheet>

{{PreviousNext("XSLT dans Gecko:Exemple basique", "XSLT dans Gecko:Différences entre les navigateurs")}}
