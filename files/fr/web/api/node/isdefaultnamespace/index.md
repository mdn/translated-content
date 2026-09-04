---
title: "Node : méthode isDefaultNamespace()"
short-title: isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
l10n:
  sourceCommit: f9c2ae293074c49f1ed2b86913ef24b0042e0047
---

{{APIRef("DOM")}}

La méthode **`isDefaultNamespace()`** de l'interface {{DOMxRef("Node")}} accepte une URI d'espace de nom comme argument.
Elle retourne une valeur booléenne qui est `true` si l'espace de nom est celui par défaut du nœud donné et `false` sinon. L'espace de nom par défaut peut être récupéré avec {{DOMxRef("Node.lookupNamespaceURI()")}} en passant `null` comme argument.

## Syntaxe

```js-nolint
isDefaultNamespace(namespaceURI)
```

### Paramètres

- `namespaceURI`
  - : Une chaîne de caractères représentant l'espace de nom par rapport auquel l'élément est vérifié. La chaîne de caractères vide est équivalente à `null`.
    > [!NOTE]
    > `namespaceURI` n'est pas un paramètre optionnel, mais peut être `null`.

### Valeur de retour

Une valeur booléenne qui contient la valeur de retour `true` ou `false`, indiquant si le paramètre est l'espace de nom par défaut ou non. Cela équivaut à `node.lookupNamespaceURI(null) === namespaceURI`.

## Exemples

> [!NOTE]
> Cet exemple s'exécute dans un document HTML, où les attributs `xmlns:` sont ignorés (sauf `xmlns:xlink`). Firefox définit l'URI de l'espace de noms de tous les éléments sur `null`, tandis que Chrome et Safari définissent correctement les URI des espaces de noms par défaut des éléments HTML, SVG et MathML. Si vous souhaitez effectuer des tests plus significatifs, vous pouvez ouvrir un document [SVG](/fr/docs/Web/SVG) autonome et exécuter des scripts dans son contexte.

```html
<div class="cache">
  <div>Test d'élément HTML</div>
  <svg>
    <text>Test d'élément SVG</text>
  </svg>
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" id="with-xlink">
    <text>Test d'élément SVG avec xlink</text>
  </svg>
  <math>Test d'élément MathML</math>
</div>

<table>
  <thead>
    <tr>
      <th><code>namespaceURI</code></th>
      <th><code>&lt;div&gt;</code></th>
      <th><code>&lt;svg&gt;</code></th>
      <th><code>&lt;svg xmlns:xlink&gt;</code></th>
      <th><code>&lt;math&gt;</code></th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```css hidden
.cache {
  display: none;
}
```

```js
const htmlElt = document.querySelector("div");
const svgElt = document.querySelector("svg");
const svgEltXLink = document.querySelector("#with-xlink");
const mathElt = document.querySelector("math");

const tbody = document.querySelector("tbody");

for (const uri of [
  "http://www.w3.org/2000/xmlns/",
  "http://www.w3.org/XML/1998/namespace",
  "http://www.w3.org/1999/xhtml",
  "http://www.w3.org/2000/svg",
  "http://www.w3.org/1999/xlink",
  "http://www.w3.org/1998/Math/MathML",
  "",
  null,
]) {
  const row = document.createElement("tr");
  tbody.appendChild(row);
  row.appendChild(document.createElement("td")).textContent =
    JSON.stringify(uri);
  for (const el of [htmlElt, svgElt, svgEltXLink, mathElt]) {
    console.log(el, uri, el.isDefaultNamespace(uri));
    row.appendChild(document.createElement("td")).textContent = String(
      el.isDefaultNamespace(uri),
    );
  }
}
```

{{EmbedLiveSample("Exemples", "100%", 190)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Node.lookupNamespaceURI")}}
- La propriété {{DOMxRef("Node.lookupPrefix")}}
