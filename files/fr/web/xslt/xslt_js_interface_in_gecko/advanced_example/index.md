---
title: Exemple avancé
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example
tags:
  - Traduction_à_relire
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example
original_slug: Web/XSLT/Interface_XSLT_JS_dans_Gecko/Exemple_avancé
---
## Exemple avancé

Dans l'exemple avancé, nous allons trier plusieurs `div` selon leur contenu. L'exemple permet de trier le contenu plusieurs fois, en alternant entre le tri ascendant et le tri descendant. Le JavaScript ne charge que le fichier .xsl la première fois, et définit la variable `xslloaded` à `true` une fois que le fichier est fini de chargé. En utilisant la méthode `getParameter` sur l'objet `XSLTProcessor` , le code peut estimer s'il faut trier de façon ascendante ou descendante. Il trie par défaut de manière ascendante si le paramètre est vide (lors du premier tri, car sa valeur n'est pas définie dans le fichier XSLT). La valeur du tri est définie à l'aide de `setParameter`.

La fichier XSLT a un paramètre appelé `myOrder` que le JavaScript définit pour changer la méthode de tri. L'attribut `xsl:sort` d'ordre des éléments peut accéder à la valeur du paramètre en utilisant `$myOrder`. Cependant, la valeur a besoin d'être une expression XPath et non pas une chaîne, ainsi on utilise `{$myOrder}`. L'utilisation de `{}` évalue le contenu comme une expression XPath.

Une fois la transformation complétée, le résultat est ajouté au document, comme indiqué dans l'exemple.

**Figure 7 : Tri selon le contenu des divvoir l'exemple**

_Fragment XHTML :_

    <div id="example">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>

_JavaScript_

    var xslRef;
    var xslloaded = false;
    var xsltProcessor = new XSLTProcessor();
    var myDOM;

    var xmlRef = document.implementation.createDocument("", "", null);

    function sort() {
      if (!xslloaded){
        p = new XMLHttpRequest();
        p.open("GET", "example2.xsl", false);
        p.send(null);

        xslRef = p.responseXML;
        xsltProcessor.importStylesheet(xslRef)
        xslloaded = true;
      }

      // création d'un nouveau document XML en mémoire
      xmlRef = document.implementation.createDocument("", "", null);

      // nos voulons déplacer une partie du DOM depuis le document HTML vers le document XML.
      // importNode est utilisé pour cloner les nœuds que nous voulons traiter via XSLT
      // true permet une copie profonde
      var myNode = document.getElementById("example");
      var clonedNode = xmlRef.importNode(myNode, true);

      // après le clonage, nous ajoutons
      xmlRef.appendChild(clonedNode);

      // définition du paramètre de tri dans le fichier XSL
      var sortVal = xsltProcessor.getParameter(null, "myOrder");

      if (sortVal == "" || sortVal == "descending")
        xsltProcessor.setParameter(null, "myOrder", "ascending");
      else
        xsltProcessor.setParameter(null, "myOrder", "descending");

      // initialisation de la transformation
      var fragment = xsltProcessor.transformToFragment(xmlRef, document);

      // effacement des contenus
      document.getElementById("example").innerHTML = "";

      myDOM = fragment;
      // ajout du nouveau contenu depuis la transformation
      document.getElementById("example").appendChild(fragment)
    }

_Feuille de style XSL :_

    <?xml version="1.0" encoding="UTF-8"?>
    <xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
      <xsl:output method="html" indent="yes" />

      <xsl:param name="myOrder" />

      <xsl:template match="/">

        <xsl:apply-templates select="/div//div">
          <xsl:sort select="." data-type="number" order="{$myOrder}" />
        </xsl:apply-templates>
      </xsl:template>

      <xsl:template match="div">
        <xsl:copy-of select="." />
      </xsl:template>
    </xsl:stylesheet>
