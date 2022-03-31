---
title: document.getElementsByClassName
slug: Web/API/Document/getElementsByClassName
tags:
  - API
  - DOM
  - Méthodes
  - Reference
translation_of: Web/API/Document/getElementsByClassName
---
{{APIRef("DOM")}}

Renvoie un objet de type tableau de tous les éléments enfants qui ont tous les noms de classe donnés. Lorsqu'il est appelé sur l'objet document, le document complet est recherché, y compris le nœud racine. Vous pouvez également appeler {{domxref ("Element.getElementsByClassName", "getElementsByClassName ()")}} sur n'importe quel élément; il retournera uniquement les éléments qui sont les descendants de l'élément racine spécifié avec les noms de classes donnés.

## Syntaxe

    var elements = document.getElementsByClassName(names); // or:
    var elements = rootElement.getElementsByClassName(names);

- _elements_ est une {{domxref ("HTMLCollection")}} des éléments trouvés.
- _names_ est une chaîne représentant le nom de la classe des éléments à trouver.
- getElementsByClassName peut être appelé sur n'importe quel élément, pas seulement sur le document. L'élément sur lequel il est appelé sera utilisé comme racine de la recherche.

## Exemples

Trouve tous les éléments ayant la classe «&nbsp;test&nbsp;»&nbsp;:

     document.getElementsByClassName('test')

Trouve tous les éléments ayant les classes «&nbsp;rouge&nbsp;» et «&nbsp;test&nbsp;»&nbsp;:

     document.getElementsByClassName('rouge test')

Trouve tous les éléments qui ont la classe «&nbsp;test&nbsp;» à l'intérieur d'un élément ayant l'ID «&nbsp;main&nbsp;»&nbsp;:

     document.getElementById('main').getElementsByClassName('test')

Nous pouvons également utiliser les méthodes de Array.prototype sur toute {{domxref ("HTMLCollection")}} en passant HTMLCollection comme valeur de la méthode. Ici, nous allons trouver tous les éléments div qui ont une classe de 'test':

```js
var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'DIV';
});
```

XXX writeme == Notes == Une méthode semblable existe pour \<code>Element\</code>

## Obtenir la classe des éléments test

C'est la méthode d'opération la plus couramment utilisée.

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="parent-id">
        <p>hello word1</p>
        <p class="test">hello word2</p>
        <p >hello word3</p>
        <p>hello word4</p>
    </div>
    <script>
        var parentDOM = document.getElementById("parent-id");

        var test=parentDOM.getElementsByClassName("test");//test is not target element
        console.log(test);//HTMLCollection[1]

        var testTarget=parentDOM.getElementsByClassName("test")[0];//here , this element is target
        console.log(testTarget);//<p class="test">hello word2</p>
    </script>
</body>
</html>
```

## Compatibilité des navigateurs

{{Compat("api.Document.getElementsByClassName")}}

## Spécification

- [W3C: getElementsByClassName](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-getelementsbyclassname)
