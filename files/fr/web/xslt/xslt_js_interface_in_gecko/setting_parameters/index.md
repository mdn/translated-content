---
title: Définition de paramètres
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters
---

## Définition de paramètres

Alors que l'exécution de transformations à l'aide des fichiers .xsl et .xml pré codés est utile, la configuration du fichier .xsl par JavaScript peut l'être bien plus. Par exemple, JavaScript et XSLT peuvent être utilisés pour trier des données XML puis les afficher. L'ordre du tri pourra alterner entre le tri ascendant et le tri descendant.

XSLT fournit l'élément `xsl:param`, qui est un descendant de l'élément `xsl:stylesheet`. `XSLTProcessor()` fournit trois méthodes JavaScript pour interagir avec ces paramètres&nbsp;: `setParameter`, `getParameter` et `removeParameter`. Elles prennent toutes comme premier argument l'URI de l'espace de nommage de `xsl:param` (normalement, `param` tombera dans l'espace de nommage par défaut, ainsi le passer à `null` suffira). Le nom local de `xsl:param` est le second argument. `setParameter` requiert un troisième argument, à savoir la valeur à laquelle le paramètre sera défini.

**Figure 7&nbsp;: Paramètres**

_XSLT&nbsp;:_

```xml
<xsl:param name="myOrder" />
```

_JavaScript&nbsp;:_

```js
var sortVal = xsltProcessor.getParameter(null, "monOrdre");

if (sortVal == "" || sortVal == "descendant") {
  xsltProcessor.setParameter(null, "monOrdre", "ascendant");
} else {
  xsltProcessor.setParameter(null, "monOrdre", "descendant");
}
```
