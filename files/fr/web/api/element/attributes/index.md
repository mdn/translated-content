---
title: element.attributes
slug: Web/API/Element/attributes
---

{{ APIRef("DOM") }}

La propriété **`Element.attributes`** renvoie une collection des noeuds d'attribut enregistrés dans le noeud spécifié. Il est une {{domxref("NamedNodeMap")}}, pas un tableau (_Array_), aussi il n'a pas de méthodes {{jsxref("Array")}} et l'index de noeud {{domxref("Attr")}} peuvent différer entre les navigateurs. Pour être plus précis, les `attributs` sont une paire clé / valeur de chaînes représentant toutes les informations concernant cet attribut.

## Syntaxe

```js
var attr = element.attributes;
```

## Exemple

### Exemples basiques

```js
// récupère le premier élément <p> du document
var para = document.getElementsByTagName("p")[0];
var attr = para.attributes;
```

### Énumération des attributs d'éléments

L'indexation numérique est utile pour parcourir tous les attributs d'un élément.
L'exemple suivant parcourt les nœuds d'attribut de l'élément du document avec l'ID "paragraph" et imprime la valeur de chaque attribut.

```html
<!doctype html>

<html>
  <head>
    <title>Exemple d'attributs</title>
    <script type="text/javascript">
      function listAttributes() {
        var paragraph = document.getElementById("paragraph");
        var result = document.getElementById("result");

        // D'abord, vérifier que le "paragraph" a quelques attributs
        if (paragraph.hasAttributes()) {
          var attrs = paragraph.attributes;
          var output = "";
          for (var i = attrs.length - 1; i >= 0; i--) {
            output += attrs[i].name + "->" + attrs[i].value;
          }
          result.value = output;
        } else {
          result.value = "No attributes to show";
        }
      }
    </script>
  </head>

  <body>
    <p id="paragraph">Sample Paragraph</p>
    <form action="">
      <p>
        <input
          type="button"
          value="Show first attribute name and value"
          onclick="listAttributes();" />
        <input id="result" type="text" value="" />
      </p>
    </form>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("NamedNodeMap")}}, l'interface de l'objet retourné
- Considérations de compatibilité entre navigateurs : sur [quirksmode](http://www.quirksmode.org/dom/w3c_core.html#attributes) (en)
