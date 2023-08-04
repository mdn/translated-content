---
title: document.createElementNS
slug: Web/API/Document/createElementNS
---

{{ApiRef("DOM")}}

Crée un élément avec l'URI de l'espace de noms spécifié et un nom qualifié.

Pour créer un élément sans spécifier d'URI d'espace de noms, utilisez la méthode [createElement](/fr/docs/Web/API/Document/createElement).

## Syntaxe

```js
var element = document.createElementNS(namespaceURI, qualifiedName[, options]);
```

### Paramètres

- `namespaceURI`
  - : est une chaîne de caractères qui spécifie [l'URI de l'espace de noms](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) à associer à l'élément. La propriété [namespaceURI](/fr/docs/Web/API/Node/namespaceURI) de l'élément créé est initialisée avec la valeur de `namespaceURI`. voir [URI d'espaces de nom valides](#URI_d'espaces_de_nom_valides)
- `qualifiedName`
  - : est une chaîne de caractères qui spécifie le type de l'élément à créer. La propriété [nodeName](/fr/docs/Web/API/Node/nodeName) de l'élément créé est initialisée avec la valeur de `qualifiedName`
- `Options` {{Optional_Inline}}
  - : Un objet facultatif `ElementCreationOptions` contient une propriété unique nommée `is`, dont la valeur est le nom de la balise pour un élément personnalisé défini précédemment à l'aide de `customElements.define()` . Pour la rétro-compatibilité avec les versions précédentes de la [spécification des éléments personnalisés](https://www.w3.org/TR/custom-elements/), quelques navigateurs vous permettront de passer ici une chaîne de caractères à la place d'un objet, pour laquelle la valeur est un nom d'élément personnalisé. Voir [Extending native HTML elements](https://developers.google.com/web/fundamentals/primers/customelements/#extendhtml) pour plus d'informations sur la façon d'utiliser ce paramètre. Le nouvel élément recevra un attribut `is` dont la valeur est le nom de la balise de l'élément personnalisé. Les éléments personnalisés sont une fonctionnalité expérimentale disponible uniquement dans certains navigateurs.

### Valeur de retour

Le nouvel [`element`](/fr/docs/Web/API/Element).

## URI d'espaces de nom valides

- HTML - Utiliser `http://www.w3.org/1999/xhtml`
- SVG - Utiliser `http://www.w3.org/2000/svg`
- XBL - Utiliser `http://www.mozilla.org/xbl`
- XUL - Utiliser `http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul`

## Exemple

Cet exemple crée un nouvel élément \<div> dans l'espace de noms [XHTML](/fr/docs/XHTML) et l'ajoute à l'élément vbox. Bien que ce ne soit pas un document [XUL](/fr/docs/Mozilla/Tech/XUL) très utile, cela montre l'utilisation d'éléments de deux espaces de noms différents au sein d'un même document :

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script type="text/javascript"><![CDATA[
 var container;
 var newdiv;
 var txtnode;

 function init(){
   container = document.getElementById("ContainerBox");
   newdiv = document.createElementNS("http://www.w3.org/1999/xhtml","div");
   txtnode = document.createTextNode("This is text that was constructed dynamically with createElementNS and createTextNode then inserted into the document using appendChild.");
   newdiv.appendChild(txtnode);
   container.appendChild(newdiv);
 }

]]></script>

 <vbox id='ContainerBox' flex='1'>
  <html:div>
   Le script sur cette page ajoutera du contenu dynamique ci-dessous :
  </html:div>
 </vbox>

</page>
```

> **Note :** Cet exemple utilise un script interne, ce qui n'est pas recommandé dans les documents XHTML. Cet exemple particulier est en fait un document XUL intégrant du XHTML. Cependant, la recommandation s'applique quand même.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [document.createElement](document.createElement)
- [document.createTextNode](document.createTextNode)
- [Node.namespaceURI](/fr/docs/Web/API/Node/namespaceURI)
- [Namespaces in XML](http://www.w3.org/TR/1999/REC-xml-names-19990114)
