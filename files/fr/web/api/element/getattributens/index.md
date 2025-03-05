---
title: "Element : méthode getAttributeNS()"
slug: Web/API/Element/getAttributeNS
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`getAttributeNS()`**, associée à l'interface [`Element`](/fr/docs/Web/API/Element), renvoie la valeur, sous la forme d'une chaîne de caractères, de l'attribut avec l'espace de noms et le nom donnés. Si l'attribut nommé n'existe pas, cette valeur sera soit `null`, soit `""` (une chaîne vide)&nbsp;; voir la section [Notes](#notes) pour plus de détails.

Si vous manipulez des documents HTML et n'avez pas besoin de restreindre à un espace de noms donné, vous pouvez utiliser la méthode [`getAttribute()`](/fr/docs/Web/API/Element/getAttribute) à la place.

## Syntaxe

```js-nolint
getAttributeNS(namespace, name)
```

### Paramètres

- `namespace`
  - : L'espace de noms dans lequel rechercher l'attribut spécifié.
- `name`
  - : Le nom de l'attribut à rechercher.

### Valeur de retour

Une chaîne de caractères avec la valeur de l'attribut recherché. Si l'attribut n'existe pas, le résultat est `null`.

> [!NOTE]
> Les versions antérieures de la spécification DOM avaient cette méthode décrite comme renvoyant une chaîne vide pour des attributs inexistants, mais elle n'était généralement pas implémentée de cette façon, car `null` a plus de sens. La spécification DOM4 indique maintenant que cette méthode devrait retourner `null` pour les attributs inexistants.

## Exemples

Le document SVG suivant utilise une valeur d'attribut `foo` d'un espace de noms spécifique&nbsp;:

```xml
<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:test="http://www.example.com/2014/test" width="40" height="40">

  <circle id="target" cx="12" cy="12" r="10" stroke="#444"
      stroke-width="2" fill="none" test:foo="Hello namespaced attribute!"/>

  <script>
    const ns = 'http://www.example.com/2014/test';
    const circle = document.getElementById('target');

    console.log(`attribute test:foo: "${circle.getAttributeNS(ns, 'foo')}"`);
  </script>
</svg>
```

Dans un document HTML, il faut utiliser `test:foo` pour accéder à l'attribut, car les espaces de noms ne sont pas pris en charge.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>getAttributeNS() test page</title>
  </head>
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

    <script>
      const ns = "http://www.example.com/2014/test";
      const circle = document.getElementById("target");
      console.log(`Attribute value: ${circle.getAttribute("test:foo")}`);
    </script>
  </body>
</html>
```

## Notes

La méthode `getAttributeNS` diffère de [`getAttribute()`](/fr/docs/Web/API/Element/getAttribute) en ce qu'elle permet de spécifier les attributs faisant partie d'un espace de noms particulier, comme dans l'exemple précédent, où l'attribut fait partie d'un espace de noms fictif `"test"`.

Avant la spécification DOM4, cette méthode était spécifiée pour renvoyer une chaîne vide plutôt que `null` pour les attributs inexistants. Cependant, la plupart des navigateurs ont renvoyé `null`. À partir de DOM4, la spécification indique de retourner `null` dans ces cas. Cependant, certains navigateurs plus anciens renvoient une chaîne vide. Pour cette raison, vous devez utiliser [`hasAttributeNS()`](/fr/docs/Web/API/Element/hasAttributeNS) pour vérifier l'existence d'un attribut avant d'appeler `getAttributeNS()` s'il est possible que l'attribut demandé n'existe pas sur l'élément spécifié.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.getAttribute()`](/fr/docs/Web/API/Element/getAttribute)
- [`Element.hasAttributeNS()`](/fr/docs/Web/API/Element/hasAttributeNS)
- [`Element.setAttributeNS()`](/fr/docs/Web/API/Element/setAttributeNS)
- [`Element.removeAttributeNS()`](/fr/docs/Web/API/Element/removeAttributeNS)
