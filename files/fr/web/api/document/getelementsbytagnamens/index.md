---
title: Document.getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
tags:
  - API
  - DOM
  - Elements
  - Méthodes
  - Nom
  - XPath
translation_of: Web/API/Document/getElementsByTagNameNS
---
{{ ApiRef("DOM") }}

{{ fx_minversion_note("3.6","Voir la <a href='\"/en/DOM/element.getElementsByTagNameNS#Notes\"'>section Notes de element.getElementsByTagNameNS</a> pour les changements qui s'appliquent aussi à cet API dans Firefox 3.6.") }}

Renvoie une liste d'éléments avec la balise de nom donnée appartenant à l'espace de noms donné. Le document complet est recherché, y compris le noeud racine.

## Syntaxe

    elements = document.getElementsByTagNameNS(namespace,name)

- `elements` est une {{domxref("NodeList")}} (_liste de noeud_) directe (mais voir le note ci-dessous) d'éléments trouvés dans l'ordre de leur apparition dans l'arbre.
- `namespace` l'URI d'espace de noms des éléments à rechercher (voir [`element.namespaceURI`](/en/DOM/Node.namespaceURI)).
- `name` est, soit le nom local des éléments à rechercher, soit la valeur spéciale `"*"` pour tous les éléments (voir [`element.localName`](/en/DOM/Node.localName)).

> **Note :** Tandis que la spécification W3C indique que les `elements` sont des `NodeList`, cette méthode renvoie une {{domxref("HTMLCollection")}} dans Gecko et Internet Explorer. Opera retourne une `NodeList`, mais avec une méthode implémentée `namedItem`, ce qui la rend similaire à une `HTMLCollection`. À partir de Janvier 2012, dans les navigateurs WebKit seulement, la valeur retournée est une pure `NodeList`. Voir [bug 14869](https://bugzilla.mozilla.org/show_bug.cgi?id=14869) pour plus de détails.

## Exemple

Dans l'exemple suivant, `getElementsByTagNameNS` commence à partir d'un élément parent particulier et cherche dans le DOM récursivement de haut en bas à partir de cet élément parent, les éléments enfants correspondant au paramètre `name` de la balise.

Notez que lorsque le noeud sur lequel `getElementsByTagName` est invoqué n'est pas un noeud `document`, la méthode [element.getElementsByTagNameNS](/fr/docs/Web/API/Element/getElementsByTagNameNS) est en fait utilisée.

Pour utiliser l'exemple suivant, il suffit de le copier/coller dans un nouveau fichier enregistré avec l'extension .xhtml.

```html
http://www.w3.org/1999/xhtml">

<head>
<title>getElementsByTagNameNS example</title>

<script type="text/javascript">

function getAllParaElems()
{
  var allParas = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");

  var num = allParas.length;

  alert("There are " + num + " &lt;p&gt; elements in this document");
}


function div1ParaElems()
{
  var div1 = document.getElementById("div1")
  var div1Paras = div1.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");

  var num = div1Paras.length;

  alert("There are " + num + " &lt;p&gt; elements in div1 element");
}


function div2ParaElems()
{
  var div2 = document.getElementById("div2")
  var div2Paras = div2.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");

  var num = div2Paras.length;

  alert("There are " + num + " &lt;p&gt; elements in div2 element");
}

</script>
</head>

<body style="border: solid green 3px">
<p>Some outer text</p>
<p>Some outer text</p>

  <div id="div1" style="border: solid blue 3px">
    <p>Some div1 text</p>
    <p>Some div1 text</p>
    <p>Some div1 text</p>

    <div id="div2" style="border: solid red 3px">
    <p>Some div2 text</p>
    <p>Some div2 text</p>
    </div>
  </div>

<p>Some outer text</p>
<p>Some outer text</p>

<button onclick="getAllParaElems();">
 show all p elements in document</button><br />

<button onclick="div1ParaElems();">
 show all p elements in div1 element</button><br />

<button onclick="div2ParaElems();">
 show all p elements in div2 element</button>

</body>
</html>
```

## Solution de contournement potentielle pour les navigateurs qui ne prennent pas en charge XPath

Si le navigateur souhaité ne supporte pas XPath, une autre approche (comme traverser le DOM à travers tous ses enfants, identifier toutes les instances de @xmlns, etc.) serait nécessaire pour trouver toutes les balises avec le nom local et l'espace de noms, mais XPath est beaucoup plus rapide. (Pour adapter à Explorer, on pourrait appeler un wrapper XPath au lieu du XPath dans la fonction ci-dessous (comme Explorer supporte XPath avec une API différente), comme [cette classe wrapper](http://www.davidflanagan.com/javascript5/display.php?n=21-10&f=21/10.js).)

```js
function getElementsByTagNameNSWrapper (ns, elName, doc, context) {
	if (!doc) {
		doc = document;
	}
	if (!context) {
		context = doc;
	}

	var result = doc.evaluate('//*[local-name()="'+elName+'" and namespace-uri() = "'+ns+'"]', context, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

        var a = [];
        for(var i = 0; i < result.snapshotLength; i++) {
            a[i] = result.snapshotItem(i);
        }
        return a;
}
```

## Spécifications

[DOM Level 2 Core: Document.getElementsByTagNameNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBTNNS)
