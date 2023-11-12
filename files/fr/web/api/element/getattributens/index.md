---
title: element.getAttributeNS
slug: Web/API/Element/getAttributeNS
---

{{APIRef("DOM")}}

**`getAttributeNS()`** est une méthode de l'interface {{domxref("Element")}} qui renvoie la valeur chaîne de l'attribut avec l'espace de noms et le nom donnés. Si l'attribut nommé n'existe pas, cette valeur sera soit `null`, soit `""` (une chaîne vide)&nbsp;; voir la section [Notes](#notes) pour plus de détails.

## Syntaxe

```js
attrVal = element.getAttributeNS(namespace, name);
```

### Paramètres

- `namespace`
  - : L'espace de noms dans lequel rechercher l'attribut spécifié.
- `name`
  - : Le nom de l'attribut à chercher.

### Valeur de retour

La valeur de chaîne de caractères de l'attribut spécifié. Si l'attribut n'existe pas, le résultat est `null`.

> **Note :** Les versions antérieures de la spécification DOM avaient cette méthode décrite comme renvoyant une chaîne vide pour des attributs inexistants, mais elle n'était généralement pas implémentée de cette façon, car null a plus de sens. La spécification DOM4 indique maintenant que cette méthode devrait retourner null pour les attributs inexistants.

## Exemples

Le document SVG suivant utilise une valeur d'attribut `foo` d'un espace de nom spécifique :

```xml
<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:test="http://www.example.com/2014/test" width="40" height="40">

  <circle id="target" cx="12" cy="12" r="10" stroke="#444"
      stroke-width="2" fill="none" test:foo="Hello namespaced attribute!"/>

  <script type="text/javascript">
    var ns = 'http://www.example.com/2014/test';
    var circle = document.getElementById( 'target' );

    console.log( 'attribute test:foo: "' + circle.getAttributeNS( ns, 'foo' ) + '"' );
  </script>
</svg>
```

Dans un document HTML5, il faut utiliser `test:foo` pour accéder à l'attribut car les espaces de noms ne sont pas pris en charge.

```html
<!doctype html>
<html>
  <body>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:test="http://www.example.com/2014/test"
      width="40"
      height="40">
      <circle
        id="target"
        cx="12"
        cy="12"
        r="10"
        stroke="#444"
        stroke-width="2"
        fill="none"
        test:foo="Foo value" />
    </svg>

    <script type="text/javascript">
      var ns = "http://www.example.com/2014/test";
      var circle = document.getElementById("target");
      console.log("Attribute value: " + circle.getAttribute("test:foo"));
    </script>
  </body>
</html>
```

## Notes

Les espaces de noms sont uniquement pris en charge dans les documents XML, Les documents HTML5 doivent utiliser à la place `getAttribute()` .

La méthode `getAttributeNS` diffère de {{domxref("element.getAttribute()", "getAttribute()")}} en ce qu'elle permet de spécifier les attributs faisant partie d'un espace de noms particulier, comme dans l'exemple précédent, où l'attribut fait partie d'un espace de noms fictif «&nbsp;specialspace&nbsp;» de mozilla.

Avant la spécification DOM4, cette méthode était spécifiée pour renvoyer une chaîne vide plutôt que null pour les attributs inexistants. Cependant, la plupart des navigateurs ont renvoyé null. À partir de DOM4, la spécification dit maintenant de retourner null. Cependant, certains navigateurs plus anciens renvoient une chaîne vide. Pour cette raison, vous devez utiliser {{domxref("element.hasAttributeNS ()","hasAttributeNS ()")}} pour vérifier l'existence d'un attribut avant d'appeler `getAttributeNS()` s'il est possible que l'attribut demandé n'existe pas sur l'élément spécifié.

{{ DOMAttributeMethods() }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Code snippets:getAttributeNS](/fr/Add-ons/Code_snippets/getAttributeNS)
