---
title: "Node : méthode lookupNamespaceURI()"
short-title: lookupNamespaceURI()
slug: Web/API/Node/lookupNamespaceURI
l10n:
  sourceCommit: f9c2ae293074c49f1ed2b86913ef24b0042e0047
---

{{APIRef("DOM")}}

La méthode **`lookupNamespaceURI()`** de l'interface {{DOMxRef("Node")}} prend un préfixe en paramètre et retourne l'URI de l'espace de noms qui y est associé sur le nœud donné si trouvé (et `null` sinon). L'existence de cette méthode permet aux objets `Node` d'être utilisés comme résolveur d'espaces de noms pour {{DOMxRef("XPathEvaluator.createExpression()")}} et {{DOMxRef("XPathEvaluator.evaluate()")}}.

## Syntaxe

```js-nolint
lookupNamespaceURI(prefix)
```

### Paramètres

- `prefix`
  - : Le préfixe à rechercher. Une chaîne de caractères vide est équivalente à `null`, ce qui signifie l'espace de noms par défaut.
    > [!NOTE]
    > Ce paramètre n'est pas optionnel, mais peut être défini sur `null`.

### Valeur de retour

Une chaîne de caractères contenant l'URI de l'espace de noms correspondant au préfixe.

- Retourne toujours `null` si le nœud est un objet {{DOMxRef("DocumentFragment")}}, un objet {{DOMxRef("DocumentType")}}, un objet {{DOMxRef("Document")}} sans {{DOMxRef("Document/documentElement", "documentElement")}} ou un objet {{DOMxRef("Attr")}} sans élément associé.
- Si `prefix` est `"xml"`, la valeur de retour est toujours `"http://www.w3.org/XML/1998/namespace"`.
- Si `prefix` est `"xmlns"`, la valeur de retour est toujours `"http://www.w3.org/2000/xmlns/"`.
- Si le `prefix` est `null`, la valeur de retour est l'URI de l'espace de noms par défaut.
- Si le préfixe n'est pas trouvé, la valeur de retour est `null`.

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

for (const prefix of ["xmlns", "xml", "html", "svg", "xlink", "", null]) {
  const row = document.createElement("tr");
  tbody.appendChild(row);
  row.appendChild(document.createElement("td")).textContent =
    JSON.stringify(prefix);
  for (const el of [htmlElt, svgElt, svgEltXLink, mathElt]) {
    console.log(el, prefix, el.lookupNamespaceURI(prefix));
    row.appendChild(document.createElement("td")).textContent = String(
      el.lookupNamespaceURI(prefix),
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

- La propriété {{DOMxRef("Node.lookupPrefix")}}
- La propriété {{DOMxRef("Node.isDefaultNameSpace")}}
