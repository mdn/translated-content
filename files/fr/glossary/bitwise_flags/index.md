---
title: Marqueurs binaires
slug: Glossary/Bitwise_flags
l10n:
  sourceCommit: 36527a8af0f396e8b84de3cda578d9e0fe1860f4
---

{{GlossarySidebar}}

Les **marqueurs binaires** sont un ensemble de variables, généralement des valeurs numériques, qui permettent d'activer ou désactiver des fonctionnalités d'une méthode ou autre. Ces opérations sont rapides, car elles s'appliquent au niveau binaire. Les marqueurs associés sont généralement des valeurs complémentaires, représentés par des bits différents d'une même valeur (généralement un nombre hexadécimal), afin qu'une même valeur numérique permette de combiner et représenter différents marqueurs.

Par exemple, quand on crée un objet [`GPUBuffer`](/fr/docs/Web/API/GPUBuffer) avec la méthode [`GPUDevice.createBuffer()`](/fr/docs/Web/API/GPUDevice/createBuffer) de [l'API WebGPU](/fr/docs/Web/API/WebGPU_API), on fournit une propriété `usage` dans le descripteur qui contient un ou plusieurs marqueurs pour activer certaines utilisation du tampon.

```js
usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
```

Ces valeurs sont définies dans le même espace de nom et chacune prend une valeur hexadécimale différente&nbsp;:

| Marqueur                       | Représentation hexadécimale | Équivalent décimal |
| ------------------------------ | --------------------------- | ------------------ |
| `GPUBufferUsage.MAP_READ`      | 0x0001                      | 1                  |
| `GPUBufferUsage.MAP_WRITE`     | 0x0002                      | 2                  |
| `GPUBufferUsage.COPY_SRC`      | 0x0004                      | 4                  |
| `GPUBufferUsage.COPY_DST`      | 0x0008                      | 8                  |
| `GPUBufferUsage.INDEX`         | 0x0010                      | 16                 |
| `GPUBufferUsage.VERTEX`        | 0x0020                      | 32                 |
| `GPUBufferUsage.UNIFORM`       | 0x0040                      | 64                 |
| `GPUBufferUsage.STORAGE`       | 0x0080                      | 128                |
| `GPUBufferUsage.INDIRECT`      | 0x0100                      | 256                |
| `GPUBufferUsage.QUERY_RESOLVE` | 0x0200                      | 512                |

Quand on consulte la propriété [`GPUBuffer.usage`](/fr/docs/Web/API/GPUBuffer/usage) d'un tampon, on obtient un seul nombre qui est la somme des différents marqueurs binaires. Si on récupère `GPUBuffer.usage` à partir de celui créé dans l'exemple précédent, on obtiendra la valeur décimale 6, car&nbsp;:

- La valeur décimale équivalente de `GPUBufferUsage.COPY_SRC` vaut 4
- La valeur décimale équivalente de `GPUBufferUsage.MAP_WRITE` vaut 2
- La somme de 4 et 2 donne 6.

Comme les valeurs de chaque marqueur se situent sur des bits différents de la valeur composite, chaque combinaison fournira une valeur unique. Le programme peut alors déterminer quels marqueurs sont actifs à partir d'une unique valeur. Il est aussi possible de tester les marqueurs présents sur une valeur composite à l'aide des opérateurs binaires&nbsp;:

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // Buffer possède le marqueur MAP_WRITE usage
}
```

## Voir aussi

- [La beauté des marqueurs binaires (en anglais)](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- [La page sur les opérations binaires sur Wikipédia](https://fr.wikipedia.org/wiki/Op%C3%A9ration_bit_%C3%A0_bit)
