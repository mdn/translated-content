---
title: Exemple basique
slug: Web/API/XSLTProcessor/Basic_Example
translation_of: Web/API/XSLTProcessor/Basic_Example
original_slug: XSLT_dans_Gecko/Exemple_basique
---
1.  [Introduction](/fr/docs/XSLT_dans_Gecko)
2.  [Exemple basique](/fr/docs/XSLT_dans_Gecko/Exemple_basique)
3.  [Génération de HTML](/fr/docs/XSLT_dans_Gecko/G%c3%a9n%c3%a9ration_de_HTML)
4.  [Différences entre les navigateurs](/fr/docs/XSLT_dans_Gecko/Diff%c3%a9rences_entre_les_navigateurs)
5.  [Ressources](/fr/docs/XSLT_dans_Gecko/Ressources)

## Exemple basique

Ce premier exemple présente les bases de l'utilisation d'une transformation XSLT dans un navigateur. L'exemple utilise un document XML qui contient des informations (titre, liste d'auteurs et corps de texte) à propos d'un article pour en tirer une version lisible par un humain.

La figure 1 montre le code source de l'exemple XSLT. Le document XML (exemple.xml) contient les informations à propos de l'article. En utilisant l'instruction de traitement `?xml-stylesheet?`, il est lié à la feuille de style XSLT (exemple.xsl) via son attribut `href`.

Une feuille de style XSLT débute par l'élément `xsl:stylesheet`, qui contient tous les modèles utilisés pour créer le résultat final. L'exemple de la figure 1 possède deux modèles - un qui s'applique au nœud racine et un aux nœuds `Author`. Le modèle correspondant au nœud racine produit en sortie le titre de l'article puis déclenche le traitement de tous les autres modèles (via `apply-templates`) correspondant aux nœuds `Author` qui sont les descendants du nœud `Authors`.

Figure 1&nbsp;: exemple XSLT simple

Document XML (exemple.xml)&nbsp;:

      <?xml version="1.0"?>
      <?xml-stylesheet type="text/xsl" href="exemple.xsl"?>
      <Article>
        <Title>Mon article</Title>
        <Authors>
          <Author>M. Foo</Author>
          <Author>M. Bar</Author>
        </Authors>
        <Body>Ceci est le texte de mon article.</Body>
      </Article>

Feuille de style XSL (exemple.xsl)&nbsp;:

      <?xml version="1.0"?>
      <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

        <xsl:output method="text"/>

        <xsl:template match="/">
          Article - <xsl:value-of select="/Article/Title"/>
          Auteurs&nbsp;: <xsl:apply-templates select="/Article/Authors/Author"/>
        </xsl:template>

        <xsl:template match="Author">
          - <xsl:value-of select="." />
        </xsl:template>

      </xsl:stylesheet>

Sortie dans le navigateur&nbsp;:

      Article - Mon article
      Auteurs&nbsp;:
      - M. Foo
      - M. Bar

{{PreviousNext("XSLT dans Gecko", "XSLT dans Gecko:Génération de HTML")}}
