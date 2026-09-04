---
title: "Node : méthode lookupPrefix()"
short-title: lookupPrefix()
slug: Web/API/Node/lookupPrefix
l10n:
  sourceCommit: f9c2ae293074c49f1ed2b86913ef24b0042e0047
---

{{APIRef("DOM")}}

La méthode **`lookupPrefix()`** de l'interface {{DOMxRef("Node")}} retourne une chaîne de caractères contenant le préfixe d'un URI d'un espace de noms donné, s'il est présent, et `null` sinon.
Lorsque plusieurs préfixes sont possibles, le premier préfixe est retourné.

## Syntaxe

```js-nolint
lookupPrefix(namespace)
```

### Paramètres

- `namespace`
  - : Une chaîne de caractères contenant l'espace de noms pour lequel rechercher le préfixe. Une chaîne de caractères vide est équivalente à `null`, ce qui entraîne le retour de `null`.
    > [!NOTE]
    > Ce paramètre n'est pas optionnel, mais peut être défini sur `null`.

### Valeur de retour

Une chaîne de caractères contenant le préfixe correspondant, ou `null` si aucun n'a été trouvé.
Si `namespace` est `null` ou une chaîne de caractères vide, `lookupPrefix()` retourne `null`.

Si le nœud est un {{DOMxRef("DocumentType")}} ou un {{DOMxRef("DocumentFragment")}}, `lookupPrefix()` retourne toujours `null`.

## Exemples

> [!NOTE]
> Cet exemple s'exécute dans un document HTML, où les attributs `xmlns:` sont ignorés (sauf `xmlns:xlink`). Firefox définit tous les URI d'espace de noms des éléments à `null`, tandis que Chrome et Safari définissent correctement les URI d'espace de noms par défaut des éléments HTML, SVG et MathML. Si vous souhaitez effectuer des tests plus significatifs, vous pouvez ouvrir un document [SVG](/fr/docs/Web/SVG) autonome et exécuter des scripts dans son contexte.

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
      <th><code>prefix</code></th>
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
    console.log(el, uri, el.lookupPrefix(uri));
    row.appendChild(document.createElement("td")).textContent = String(
      el.lookupPrefix(uri),
    );
  }
}
```

{{EmbedLiveSample("Exemples", "100%", 190)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
