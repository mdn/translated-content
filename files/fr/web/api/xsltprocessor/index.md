---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
l10n:
  sourceCommit: f22e72998f4e8f48b18ef358521bfc9ad1ae9446
---

{{APIRef("XSLT")}}

Un objet **`XSLTProcessor`** applique une feuille de style de transformation [XSLT](/fr/docs/Web/XML/XSLT) sur un document XML afin de produire un nouveau document XML. Il dispose de méthodes pour charger la feuille de styles XSLT, manipuler les valeurs des paramètres `<xsl:param>`, et pour appliquer la transformation correspondante à des documents.

## Constructeur

- [`XSLTProcessor()`](/fr/docs/Web/API/XSLTProcessor/XSLTProcessor)
  - : Crée un nouvel objet `XSLTProcessor`.

## Méthodes des instances

- [`XSLTProcessor.importStylesheet()`](/fr/docs/Web/API/XSLTProcessor/importStylesheet)
  - : Importe la feuille de styles XSLT. Si le nœud fourni est un document, ce peut être une transformation XSL complète ou [une transformation d'élément littéral résultant](https://www.w3.org/TR/xslt/#result-element-stylesheet)&nbsp;; sinon, ce doit être un élément `<xsl:stylesheet>` ou `<xsl:transform>`.
- [`XSLTProcessor.transformToFragment()`](/fr/docs/Web/API/XSLTProcessor/transformToFragment)
  - : Transforme le nœud source en appliquant la feuille de style XSLT importée à l'aide de la fonction [`XSLTProcessor.importStylesheet()`](/fr/docs/Web/API/XSLTProcessor/importStylesheet). Le document propriétaire du fragment de document résultant est le nœud propriétaire.
- [`XSLTProcessor.transformToDocument()`](/fr/docs/Web/API/XSLTProcessor/transformToDocument)
  - : Transforme le nœud source en appliquant la feuille de style XSLT importée à l'aide de la fonction [`XSLTProcessor.importStylesheet()`](/fr/docs/Web/API/XSLTProcessor/importStylesheet).
- [`XSLTProcessor.setParameter()`](/fr/docs/Web/API/XSLTProcessor/setParameter)
  - : Définit la valeur d'un paramètre (`<xsl:param>`) présent dans la feuille de style XSLT importée.
- [`XSLTProcessor.getParameter()`](/fr/docs/Web/API/XSLTProcessor/getParameter)
  - : Récupère la valeur d'un paramètre de la feuille de style XSLT.
- [`XSLTProcessor.removeParameter()`](/fr/docs/Web/API/XSLTProcessor/removeParameter)
  - : Supprime le paramètre s'il avait précédemment été défini. L'objet `XSLTProcessor` utilise alors la valeur par défaut du paramètre telle que spécifiée dans la feuille de styles XSLT.
- [`XSLTProcessor.clearParameters()`](/fr/docs/Web/API/XSLTProcessor/clearParameters)
  - : Supprime tous les paramètres définis pour l'instance `XSLTProcessor`. L'objet `XSLTProcessor` utilisera alors les valeurs par défaut fournies dans la feuille de styles XSLT.
- [`XSLTProcessor.reset()`](/fr/docs/Web/API/XSLTProcessor/reset)
  - : Supprime tous les paramètres et toutes les feuilles de styles de l'objet `XSLTProcessor` courant.

## Propriétés des instances

_Cette interface ne contient aucune propriété._

## Exemples

### Instancier un objet `XSLTProcessor`

```js
const xsltProcessor = new XSLTProcessor();

// On charge le fichier XSL avec une requête XHR synchrone
// (le troisième paramètre vaut false)
const maRequeteXHR = new XMLHttpRequest();
maRequeteXHR.open("GET", "example.xsl", false);
maRequeteXHR.send(null);

const xslRef = maRequeteXHR.responseXML;

// Et on importe le contenu XSL
xsltProcessor.importStylesheet(xslRef);
```

### Créer un document XML à partir d'un fragment du DOM d'un document

Pour obtenir une transformation effective, il faut fournir un document XML à l'objet `XSLTProcessor`. Ce document XML sera utilisé avec le fichier XSL importé afin de produire le résultat final. Le document XML peut être un fichier séparé que l'on charge ou faire partie de la page existante. Pour traiter une partie du DOM d'une page, il faut d'abord créer un document XML en mémoire.

Dans l'exemple qui suit, nous allons charger le fragment du DOM de l'élément avec l'identifiant `example`, dans un document XML en mémoire grâce à la méthode [`Document.importNode()`](/fr/docs/Web/API/Document/importNode). Cette dernière permet de transférer un fragment de DOM d'un document à un autre. Pour notre exemple, on le transfère du document HTML au document XML en mémoire. Le premier paramètre de la méthode indique le nœud du DOM à cloner et le deuxième paramètre, s'il vaut `true`, indique qu'il faut également cloner les éléments descendants. Le DOM ainsi cloné peut alors être inséré dans le document XML à l'aide de [`Node.appendChild()`](/fr/docs/Web/API/Node/appendChild).

```js
// On crée un nouveau document XML en mémoire
const xmlRef = document.implementation.createDocument("", "", null);

// On déplace une partie du DOM du document HTML vers un document XML
// importNode() nous permet de cloner les nœuds à transformer avec XSLT
// et son deuxième paramètre nous permet d'avoir un clone profond
const myNode = document.getElementById("example");
const clonedNode = xmlRef.importNode(myNode, true);

// On ajoute le DOM cloné au document XML
xmlRef.appendChild(clonedNode);
```

Une fois la feuille de style importée, on utilisera [`XSLTProcessor.transformToDocument()`](/fr/docs/Web/API/XSLTProcessor/transformToDocument) ou [`XSLTProcessor.transformToFragment()`](/fr/docs/Web/API/XSLTProcessor/transformToFragment) pour appliquer effectivement la transformation. `XSLTProcessor.transformToDocument()` renvoie un document XML entier tandis que `XSLTProcessor.transformToFragment()` renvoie un fragment qui peut être ajouté à un document existant. Le premier argument de ces deux méthodes correspond au document XML à transformer. `XSLTProcessor.transformToFragment()` doit être appelée avec un deuxième paramètre, correspondant au document qui sera propriétaire du fragment généré. Si le fragment généré sera inséré dans le document HTML courant, on pourra passer la valeur `document`.

### Créer un document XML à partir d'une chaîne de caractères contenant du XML

[`DOMParser`](/fr/docs/Web/API/DOMParser) peut être utilisé pour créer un document XML à partir d'une chaîne de caractères contenant du XML.

```js
const parser = new DOMParser();
const doc = parser.parseFromString(aStr, "text/xml");
```

### Appliquer la transformation

```js
const fragment = xsltProcessor.transformToFragment(xmlRef, document);
```

### Exemple simple

Dans cet exemple, on charge un fichier XML et on lui applique une transformation XSL. Le fichier XML décrit un article et le fichier XSL transforme les informations pour leur affichage.

#### XML

```xml
<?xml version="1.0"?>
<myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
  <myNS:Title>Mon article</myNS:Title>
  <myNS:Authors>
    <myNS:Author company="Foopy Corp.">M. Robert</myNS:Author>
    <myNS:Author>M. Dupont</myNS:Author>
  </myNS:Authors>
  <myNS:Body>
    Bien le <b>bonjour</b>.
  </myNS:Body>
</myNS:Article>
```

#### XSLT

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

        <style>
          .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
        </style>

      </head>

      <body>
        <p class="myBox">
          <span class="title">
            <xsl:value-of select="/myNS:Article/myNS:Title"/>
          </span> <br />

          Autrices ou auteurs&nbsp;:   <br />
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
```

#### JavaScript

On utilise deux requêtes [`XMLHTTPRequest`](/fr/docs/Web/API/XMLHttpRequest) synchrones pour charger les fichiers XSL (`xslStylesheet`) et XML (`xmlDoc`) en mémoire. Le fichier XSL est ensuite importé (`xsltProcessor.importStylesheet(xslStylesheet)`), puis la transformation appliquée (`xsltProcessor.transformToFragment(xmlDoc, document)`). De cette façon, on récupère des données après le chargement de la page, sans avoir besoin de déclencher un rechargement de la page.

```js
let xslStylesheet;
const xsltProcessor = new XSLTProcessor();
let myDOM;

let xmlDoc;

function init() {
  // On charge le fichier XSLT example1.xsl
  let myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example1.xsl", false);
  myXMLHTTPRequest.send(null);

  xslStylesheet = myXMLHTTPRequest.responseXML;
  xsltProcessor.importStylesheet(xslStylesheet);

  // On charge le fichier XML example1.xml
  myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example1.xml", false);
  myXMLHTTPRequest.send(null);

  xmlDoc = myXMLHTTPRequest.responseXML;

  const fragment = xsltProcessor.transformToFragment(xmlDoc, document);
  myDOM = fragment;
  document.getElementById("example").textContent = "";
  document.getElementById("example").appendChild(fragment);
}
```

### Exemple avancé

Dans cet exemple avancé, on trie plusieurs éléments [`<div>`](/fr/docs/Web/HTML/Reference/Elements/div) selon leur contenu. Cet exemple permet de trier le contenu à plusieurs reprises, d'alterner entre un ordre croissant ou décroissant. Le code JavaScript charge le fichier XSL pour le premier tri puis marque la variable `xslloaded` avec `true` lorsque le chargement du fichier est terminé. Grâce à la méthode [`XSLTProcessor.getParameter()`](/fr/docs/Web/API/XSLTProcessor/getParameter), on peut savoir si on souhaite un tri croissant ou décroissant. La valeur par défaut correspond à un tri croissant. L'ordre du tri peut être fixé à l'aide de la méthode [`XSLTProcessor.setParameter()`](/fr/docs/Web/API/XSLTProcessor/setParameter).

Le fichier XSLT contient un paramètre `myOrder` que le code JavaScript fixe pour changer la méthode de tri. L'attribut `order` de l'élément `xsl:sort` peut accéder à la valeur du paramètre avec `$myOrder`. Toutefois, il faut que la valeur soit une expression XPath et pas une chaîne de caractères, c'est pour cela qu'on écrit `{$myOrder}`. Les accolades (`{}`) permettent d'évaluer le contenu dans une expression XPath.

Une fois la transformation terminée, on ajoute le résultat au document.

#### XHTML

```html
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
```

#### JavaScript

```js
let xslRef;
let xslloaded = false;
const xsltProcessor = new XSLTProcessor();
let myDOM;

let xmlRef = document.implementation.createDocument("", "", null);

function sort() {
  if (!xslloaded) {
    const p = new XMLHttpRequest();
    p.open("GET", "example2.xsl", false);
    p.send(null);

    xslRef = p.responseXML;
    xsltProcessor.importStylesheet(xslRef);
    xslloaded = true;
  }

  // On crée un nouveau document XML en mémoire
  xmlRef = document.implementation.createDocument("", "", null);

  // On veut transférer une partie du DOM du document HTML à un document
  // XML. importNode() est utilisée pour cloner les nœuds à traiter avec
  // XSLT. Le deuxième argument à true permet d'avoir un clone profond
  const myNode = document.getElementById("example");
  const clonedNode = xmlRef.importNode(myNode, true);

  // Après le clonage, on ajoute le contenu à la suite
  xmlRef.appendChild(clonedNode);

  // On définit le paramètre de tri dans le fichier XSL
  const sortVal = xsltProcessor.getParameter(null, "myOrder");

  if (sortVal === "" || sortVal === "descending") {
    xsltProcessor.setParameter(null, "myOrder", "ascending");
  } else {
    xsltProcessor.setParameter(null, "myOrder", "descending");
  }

  // On lance la transformation
  const fragment = xsltProcessor.transformToFragment(xmlRef, document);

  // On réinitialise le contenu
  document.getElementById("example").textContent = "";

  myDOM = fragment;

  // On ajoute le nouveau contenu transformé
  document.getElementById("example").appendChild(fragment);
}
```

#### XSLT

```xml
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
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [XSLT](/fr/docs/Web/XML/XSLT)
