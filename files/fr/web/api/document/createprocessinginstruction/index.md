---
title: "Document : méthode createProcessingInstruction()"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
l10n:
  sourceCommit: b449f4c0a3d1a9cf33ac0c49c685cbf000cc829e
---

{{APIRef("DOM")}}

La méthode **`createProcessingInstruction()`** de l'interface {{DOMxRef("Document")}} crée un nouvel objet {{DOMxRef("ProcessingInstruction")}} et le retourne.

## Syntaxe

```js-nolint
createProcessingInstruction(target, data)
```

### Paramètres

- `target`
  - : Une chaîne de caractères contenant la première partie de l'instruction de traitement (c'est-à-dire `<?target … ?>`).
- `data`
  - : Une chaîne de caractères contenant toute information que l'instruction de traitement doit porter, après la cible. Les données peuvent contenir n'importe quel motif de caractères, sauf qu'elles ne peuvent pas contenir `?>`, car cela ferme l'instruction de traitement.

### Valeur de retour

Un nœud ({{JSxRef("ProcessingInstruction")}}).

### Exceptions

- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si l'une des conditions suivantes est vraie&nbsp;:
    - La valeur de [`target`](#target) n'est pas un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide&nbsp;; par exemple, elle commence par un chiffre, un tiret ou un point, ou contient des caractères autres que des caractères alphanumériques, des tirets bas (`_`), des tirets (`-`) ou des points (`.`).
    - La _séquence de fermeture de l'instruction de traitement_ (`?>`) est incluse comme partie de la valeur de [`data`](#data).

## Description

La méthode `createProcessingInstruction()` crée une nouvelle instruction de traitement. Le nouveau nœud est généralement inséré dans un document pour accomplir une tâche avec celui-ci, en utilisant une méthode telle que {{DOMxRef("node.insertBefore")}}.

Initialement, les nœuds `ProcessingInstruction` ne sont pris en charge que dans les documents XML, et non dans les documents HTML. Dans les navigateurs ne prenant pas en charge cette fonctionnalité, une instruction de traitement est interprétée comme un commentaire et représentée comme un objet {{DOMxRef("Comment")}} dans l'arbre DOM.

## Exemples

### Utilisation simple

Cet exemple crée une instruction de traitement `<xml-stylesheet>` et l'ajoute en haut d'un document XML exemple.

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
