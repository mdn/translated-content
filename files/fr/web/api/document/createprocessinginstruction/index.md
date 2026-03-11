---
title: "Document : méthode createProcessingInstruction()"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

La méthode **`createProcessingInstruction()`** de l'interface {{DOMxRef("Document")}} génère un nouveau nœud {{DOMxRef("ProcessingInstruction")}} et le retourne.

Le nouveau nœud sera généralement inséré dans un document XML afin de pouvoir être utilisé, par exemple avec {{DOMxRef("node.insertBefore")}}.

## Syntaxe

```js-nolint
createProcessingInstruction(target, data)
```

### Paramètres

- `piNode`
  - : Le nœud {{DOMxRef("ProcessingInstruction")}} résultant.
- `target`
  - : Une chaîne de caractères contenant la première partie de l'instruction de traitement (c'est-à-dire `<?target … ?>`).
- `data`
  - : Une chaîne de caractères contenant toute information que l'instruction de traitement doit porter, après la cible. Les données sont à votre discrétion, mais elles ne peuvent pas contenir `?>`, car cela ferme l'instruction de traitement.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si l'une des conditions suivantes est vraie&nbsp;:
    - La valeur de [`target`](#target) n'est pas un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide&nbsp;; par exemple, elle commence par un chiffre, un tiret ou un point, ou contient des caractères autres que des caractères alphanumériques, des tirets bas (`_`), des tirets (`-`) ou des points (`.`).
    - La _séquence de fermeture de l'instruction de traitement_ (`?>`) fait partie de la valeur de [`data`](#data).

## Exemples

```js
const doc = new DOMParser().parseFromString("<foo />", "application/xml");
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css"',
);

doc.insertBefore(pi, doc.firstChild);

console.log(new XMLSerializer().serializeToString(doc));
// Affiche : <?xml-stylesheet href="mycss.css" type="text/css"?><foo/>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
