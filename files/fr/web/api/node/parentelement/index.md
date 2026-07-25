---
title: "Node : propriété parentElement"
short-title: parentElement
slug: Web/API/Node/parentElement
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("DOM")}}

La propriété en lecture seule **`parentElement`** de l'interface {{DOMxRef("Node")}} retourne l'élément parent du nœud DOM, ou `null` si le nœud n'a pas de parent ou si son parent n'est pas un objet {{DOMxRef("Element")}}. {{DOMxRef("Node.parentNode")}}, en revanche, retourne tout type de parent, quel que soit son type.

## Valeur

Un objet {{DOMxRef("Element")}} qui est l'élément parent du nœud actuel, ou `null` s'il n'y en a pas.

## Exemples

### Utiliser `parentElement`

Cet exemple définit la couleur du texte de l'élément parent de `noeud` en rouge.

```js
if (noeud.parentElement) {
  noeud.parentElement.style.color = "red";
}
```

### `parentElement` est `null`

`parentElement` peut être `null` si le nœud n'a pas de parent (par exemple, parce qu'il n'est pas attaché à un arbre) ou si son parent n'est pas un `Element`. En revanche, {{DOMxRef("Node.parentNode")}} retourne toujours le nœud parent, qui peut être un {{DOMxRef("Document")}} ou d'autres types de nœuds.

```html
<!doctype html>
<html lang="fr">
  <body>
    <script>
      const html = document.querySelector("html");
      console.log(html.parentElement); // null
      console.log(html.parentNode); // document
    </script>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Node.parentNode")}}
