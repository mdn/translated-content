---
title: "Window : méthode structuredClone()"
short-title: structuredClone()
slug: Web/API/Window/structuredClone
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

{{APIRef("HTML DOM")}}

La méthode **`structuredClone()`** de l'interface {{DOMxRef("Window")}} crée une [copie profonde](/fr/docs/Glossary/Deep_copy) d'une valeur en utilisant [l'algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

La méthode permet également aux [objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects) dans la valeur originale d'être _transférés_ plutôt que clonés dans le nouvel objet.
Les objets transférés sont détachés de l'objet original et attachés au nouvel objet&nbsp;; ils ne sont plus accessibles dans l'objet original.

> [!NOTE]
> Jusqu'à Firefox 148, `structuredClone.call(iframe.contentWindow)` créait incorrectement des objets dans le [royaume](/fr/docs/Web/JavaScript/Reference/Execution_model#royaumes) de l'appelant au lieu du royaume du cadre intégré. Dans Firefox 149, l'implémentation a été modifiée pour instancier les objets dans le royaume de `this`, de sorte que le comportement de la méthode correspond davantage à la spécification.
>
> Dans tous les navigateurs, un appel direct `structuredClone(value)` clone les valeurs dans le royaume de l'appelant. À partir de Firefox 149, les [scripts de contenu des extensions Web](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) peuvent appeler `window.structuredClone(value)` pour cloner les valeurs dans le royaume de la page et `globalThis.structuredClone(value)` pour cloner dans le royaume du script de contenu. Pour plus d'informations, voir [`structuredClone` dans les scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

## Syntaxe

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Paramètres

- `value`
  - : L'objet à cloner.
    Il peut s'agir de n'importe quel [type clonable structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#types_supportés).
- `options` {{Optional_Inline}}
  - : Un objet avec les propriétés suivantes&nbsp;:
    - `transfer`
      - : Un tableau [d'objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects) qui sont déplacés plutôt que clonés dans l'objet retourné.

### Valeur de retour

Une [copie profonde](/fr/docs/Glossary/Deep_copy) de la `value` originale.

### Exceptions

- `DataCloneError` {{DOMxRef("DOMException")}}
  - : Levée si une partie de la valeur d'entrée ne peut pas être sérialisée.

## Description

Cette fonction peut être utilisée pour [copier profondément](/fr/docs/Glossary/Deep_copy) des valeurs JavaScript.
Elle prend également en charge les références circulaires, comme illustré ci-dessous&nbsp;:

```js
// Crée un objet avec une valeur et une référence circulaire à lui-même.
const original = { name: "MDN" };
original.itself = original;

// Le cloner
const clone = structuredClone(original);

console.assert(clone !== original); // les objets ne sont pas les mêmes (pas la même identité)
console.assert(clone.name === "MDN"); // ils ont les mêmes valeurs
console.assert(clone.itself === clone); // et la référence circulaire est préservée
```

### Transférer des valeurs

Les [objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects) (uniquement) peuvent être transférés plutôt que dupliqués dans l'objet cloné, en utilisant la propriété `transfer` du paramètre `options`. Le transfert rend l'objet original inutilisable.

> [!NOTE]
> Un scénario où cela peut être utile est lorsque vous validez de manière asynchrone certaines données dans un tampon avant de les enregistrer.
> Pour éviter que le tampon ne soit modifié avant que les données ne soient enregistrées, vous pouvez cloner le tampon et valider ces données.
> Si vous _transférez_ également les données, toute tentative de modification du tampon original échoue, empêchant son utilisation accidentelle.

Ce code montre comment cloner un tableau et transférer ses ressources sous-jacentes vers le nouvel objet.
Au retour, le `uInt8Array.buffer` original est vidé.

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transfere = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

Vous pouvez cloner un nombre quelconque d'objets et transférer un sous-ensemble de ces objets.
Par exemple, ce code transfère `arrayBuffer1` de la valeur passée, mais pas `arrayBuffer2`.

```js
const transfere = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## Exemples

### Cloner un objet

Dans cet exemple, nous clonons un objet avec un membre, qui est un tableau. Après le clonage, les modifications apportées à chaque objet n'affectent pas l'autre objet.

```js
const champignon1 = {
  amanite: ["tue-mouches", "vireuse"],
};

const champignon2 = structuredClone(champignon1);

champignon2.amanite.push("panthère");
champignon1.amanite.pop();

console.log(champignon2.amanite); // ["tue-mouches", "vireuse", "panthère"]
console.log(champignon1.amanite); // ["tue-mouches"]
```

### Transférer un objet

Dans cet exemple, nous créons un {{JSxRef("ArrayBuffer")}} puis clonons l'objet dont il est membre, en transférant le tampon. Nous pouvons utiliser le tampon dans l'objet cloné, mais si nous essayons d'utiliser le tampon original, nous obtenons une exception.

```js
// Crée un ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

const objet1 = {
  buffer,
};

// Clone l'objet contenant le tampon, et le transfère
const objet2 = structuredClone(objet1, { transfer: [buffer] });

// Crée un tableau à partir du tampon cloné
const int32View2 = new Int32Array(objet2.buffer);
int32View2[0] = 42;
console.log(int32View2[0]);

// Créer un tableau à partir du tampon original génère une TypeError
const int32View1 = new Int32Array(objet1.buffer);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation de `structuredClone` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#structuredclone) est disponible dans [`core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js)
- [Algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
