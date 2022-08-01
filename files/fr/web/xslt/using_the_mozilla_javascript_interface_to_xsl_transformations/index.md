---
title: Utilisation de l'interface JavaScript de Mozilla pour les transformations XSL
slug: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
tags:
  - XSLT
translation_of: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
original_slug: >-
  Web/XSLT/Utilisation_de_l'interface_JavaScript_de_Mozilla_pour_les_transformations_XSL
---
Ce document décrit l'interface JavaScript pour le moteur de traitement XSLT (TransforMiiX) de Mozilla 1.2 et supérieur.

### Création de XSLTProcessor

Pour commencer, nous avons besoin de créer un objet [XSLTProcessor](fr/XSLTProcessor)&nbsp;:

```js
var processor = new XSLTProcessor();
```

### Spécification de la feuille de style

Avant d'utiliser cet objet, nous devons importer une feuille de style avec la fonction `importStylesheet()`. Elle a un unique paramètre, qui est le nœud DOM de la feuille de style XSLT à importer — remarquez que l'importation est directe, ce qui signifie que si nous modifions la feuille de style DOM après son importation, cela sera reflété lors du traitement. Il est cependant conseillé d'utiliser les paramètres de feuille de style plutôt que de modifier le DOM. C'est généralement plus facile et on obtient de meilleures performances.

```js
var testTransform = document.implementation.createDocument("", "test", null);
// juste un exemple pour obtenir une transformation dans un script étant donné que
// la fonction DOM XMLDocument.load est asynchrone, donc tout le traitement se fait
// dans le gestionnaire onload
testTransform.addEventListener("load", onload, false);
testTransform.load("test-transform.xml");
function onload() {
  processor.importStylesheet(testTransform);
}
```

`importStylesheet` requiert un argument, un nœud DOM. Si ce nœud est un nœud de document, nous pouvons passer par une transformation XSL ou une [transformation littérale d'élément résultant](http://www.w3.org/TR/xslt#result-element-stylesheet), autrement il devra être un élément \<tt>xsl:stylesheet\</tt> ou \<tt>xsl:transform\</tt>.

### Transformation du document

Nous pouvons utiliser les méthodes [`transformToDocument()`](#transformToDocument) ou [`transformToFragment()`](#transformToFragment) pour transformer un document à l'aide de la feuille de style spécifiée.

#### transformToDocument

`transformToDocument()` prend un argument, le nœud source à transformer, et retourne un nouveau `Document` DOM avec les résultats de la transformation&nbsp;:

```js
var newDocument = processor.transformToDocument(domToBeTransformed);
```

L'objet résultant est un `HTMLDocument` si la [méthode de sortie](http://www.w3.org/TR/xslt#output) de la feuille de style est \<tt>html\</tt>, un `XMLDocument` pour \<tt>xml\</tt>, et pour la méthode de sortie \<tt>text\</tt> un `XMLDocument` avec uniquement un élément racine `<transformiix:result>` avec le texte comme descendant.

#### transformToFragment

Nous pouvons également utiliser `transformToFragment()` qui retournera un nœud `DocumentFragment` DOM. C'est très efficace car l'adjonction d'un fragment à un autre nœud adjoint de façon transparente tous les descendants de ce fragment, et le fragment lui-même n'est pas fusionné. Les fragment sont donc utiles pour déplacer les nœuds et les stocker sans les éléments inutiles d'un objet document entier.

`transformToFragment` prend deux arguments&nbsp;: le document source à transformer (comme ci-dessus) et un objet `Document` qui possèdera le fragment (tous les fragments doivent être possédés par un document).

```js
var ownerDocument = document.implementation.createDocument("", "test", null);
var newFragment = processor.transformToFragment(domToBeTransformed, ownerDocument);
```

`transformToFragment` ne produira que des objets HTML DOM que si le propriétaire du document est lui-même un `HTMLDocument`, ou si la méthode de sortie de la feuille de style est \<tt>HTML\</tt>. Il **ne produira pas** un objet HTML DOM si seul l'élément de haut niveau du résultat est `<html>` car `transformToFragment` est rarement utilisé pour créer cet élément. Si nous voulons annuler cela, nous pouvons définir la méthode de sortie normale par le moyen standard.

### Définition des paramètres

Nous pouvons contrôler les [paramètres de la feuille de style](http://www.w3.org/TR/xslt#variables) à l'aide des méthodes `setParameter`, `getParameter` et `removeParameter`. Elles nécessitent une URI d'espace de nommage et un nom local qui seront les deux premiers paramètres, `setParameter` sera un troisième paramètres — la valeur de ce dernier paramètre étant à définir.

### Réinitialisation

L'objet `XSLTProcessor` implémente également une méthode `reset()` qui peut être utilisée pour supprimer toutes les feuilles de style et tous les paramètres puis ramener le processeur dans son état initial. Cette méthode est implémentée dans [Mozilla](fr/Gecko) 1.3 et supérieurs.

### Ressources

- [nsIXSLTProcessor.idl](https://dxr.mozilla.org/mozilla-central/source/content/xslt/public/nsIXSLTProcessor.idl) reflètera toujours l'interface réelle de l'objet `XSLTProcessor`.

  - [A XULPlanet reference page (en)](http://xulplanet.com/references/objref/XSLTProcessor.html).

- [The nsIXMLProcessorObsolete IDL file (en)](http://lxr.mozilla.org/seamonkey/source/content/xslt/public/nsIXSLTProcessorObsolete.idl) : l'interface JS dans les versions de Mozilla antérieures à la 1.2.
