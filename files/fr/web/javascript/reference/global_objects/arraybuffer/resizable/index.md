---
title: "ArrayBuffer : propriété resizable"
short-title: resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété d'accesseur **`resizable`** des instances de {{JSxRef("ArrayBuffer")}} indique si ce tableau de mémoire tampon peut être redimensionné ou non.

{{InteractiveExample("Démonstration JavaScript&nbsp;: ArrayBuffer.prototype.resizable")}}

```js interactive-example
const buffer1 = new ArrayBuffer(8, { maxByteLength: 16 });
const buffer2 = new ArrayBuffer(8);

console.log(buffer1.resizable);
// Résultat attendu : true

console.log(buffer2.resizable);
// Résultat attendu : false
```

## Description

La propriété `resizable` est un accesseur dont le mutateur associé vaut `undefined`, ce qui signifie que cette propriété est en lecture seule. La valeur est déterminée lors de la construction du tableau. Si l'option `maxByteLength` a été définie dans le constructeur, `resizable` retournera `true`&nbsp;; sinon, elle retournera `false`.

## Exemples

### Utiliser `resizable`

Dans cet exemple, on crée un tampon de 8 octets qui peut être redimensionné jusqu'à une taille maximale de 16 octets, puis on vérifie sa propriété `resizable` et on le redimensionne si `resizable` retourne `true`&nbsp;:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Le tampon est redimensionnable !");
  buffer.resize(12);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet global {{JSxRef("ArrayBuffer")}}
- La propriété {{JSxRef("ArrayBuffer.prototype.maxByteLength")}}
- La méthode {{JSxRef("ArrayBuffer.prototype.resize()")}}
