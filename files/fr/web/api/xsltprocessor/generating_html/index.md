---
title: Génération de HTML
slug: Web/API/XSLTProcessor/Generating_HTML
l10n:
  sourceCommit: 33e42e40dbcdc4a81fde5597c602a180b30453fa
---

{{APIRef("XSLT")}}

Une application courante de XSLT dans les navigateurs consiste à transformer du code XML en HTML coté client. Le second exemple va transformer un document d'entrée (`example2.xml`), qui contient des informations à propos d'un article, en un document HTML.

## Fichier `example2.xml`

L'élément `<body>` de l'article contient ici des éléments HTML (des balises `<strong>` et `<em>`, voir ci-après). Le document XML contient à la fois des éléments HTML et éléments XML, mais un seul espace de nommage est nécessaire, utilisé pour les éléments XML. Comme il n'existe pas d'espace de nommage HTML, et que l'utilisation de l'espace de nommage XHTML forcerait le XSL à créer un document XML qui pourrait ne pas se comporter comme un document HTML, le nœud `xsl:output` de la feuille de style assure que le document résultant sera bien traité comme du HTML. Pour les éléments XML, nous avons besoin de notre propre espace de nommage, `http://devedge.netscape.com/2002/de`, à qui nous donnons le préfixe myNS `(xmlns:myNS="http://devedge.netscape.com/2002/de")`.

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example2.xsl"?>
  <myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
    <myNS:Title>My Article</myNS:Title>
    <myNS:Authors>
      <myNS:Author company="Foopy Corp.">Mr. Foo</myNS:Author>
      <myNS:Author>Mr. Bar</myNS:Author>
    </myNS:Authors>
    <myNS:Body>
      The <b>rain</b> in <u>Spain</u> stays mainly in the plains.
    </myNS:Body>
  </myNS:Article>
```

## Fichier `example2.xsl`

La feuille de style XSL utilisée aura besoin de deux espaces de nommage - un pour les éléments XSLT et un pour nos propres éléments XML utilisés dans le document XML. La sortie de la feuille de style XSL est définie à `HTML` à l'aide de l'élément `xsl:output`. En définissant la sortie comme étant du code HTML et en n'ayant pas d'espace de nommage pour les éléments résultants (coloré en bleu), ces éléments seront traités comme des éléments HTML.

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  …
</xsl:stylesheet>
```

Un modèle s'appliquant au nœud racine du document XML est créé et utilisé pour créer la structure de base de la page HTML.

## Création du document HTML de base

```xml
…
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

      Auteurs&nbsp;:   <br />
        <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
    </p>

    <p class="myBox">
      <xsl:apply-templates select="//myNS:Body"/>
    </p>

  </body>

</html>
</xsl:template>
…
```

Nous avons besoin de trois `xsl:template` supplémentaires pour parachever l'exemple. Le premier `xsl:template` est utilisé pour les nœuds `Author`, alors que le deuxième traite le nœud `body`. Le troisième possède une règle de correspondance générale qui lui permet de s'appliquer à chaque nœud et chaque attribut. Cela est nécessaire afin de préserver les éléments HTML présents dans le document XML&nbsp;: il s'applique à tous, et les recopie dans le document HTML créé par la transformation.

## Modèles finaux

```xml
…
<xsl:template match="myNS:Author">
    --   <xsl:value-of select="." />

  <xsl:if test="@company">
  &nbsp;::   <strong>  <xsl:value-of select="@company" />  </strong>
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
…
```

## Feuille de style XSLT finale

```xml
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
    &nbsp;::   <b>  <xsl:value-of select="@company" />  </b>
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
```
