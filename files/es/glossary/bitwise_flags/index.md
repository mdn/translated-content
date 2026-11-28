---
title: Banderas de bits
slug: Glossary/Bitwise_flags
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Las **banderas de bits** son conjuntos de variables, normalmente valores numéricos simples, que sirven para habilitar o deshabilitar usos o funcionalidades específicos de un método u otra estructura de código. Lo hacen de forma rápida y eficiente porque operan a nivel de bit. Las banderas relacionadas de un mismo grupo suelen tener valores complementarios que representan distintas posiciones de bit en un único valor (por ejemplo, en hexadecimal), de modo que un único valor puede representar la configuración de varias banderas.

Por ejemplo, en la {{domxref("WebGPU API", "WebGPU API", "", "nocode")}}, se crea una instancia de {{domxref("GPUBuffer")}} con el método {{domxref("GPUDevice.createBuffer()")}}. Al invocar este método, defines en el descriptor una propiedad `usage` con una o más banderas que habilitan los distintos usos permitidos de ese búfer.

```js
const descriptor = {
  usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE,
};
```

Estos valores se definen dentro del mismo espacio de nombres, y cada uno tiene un valor hexadecimal:

| Bandera de uso                 | Representación hexadecimal | Equivalente decimal |
| ------------------------------ | -------------------------- | ------------------- |
| `GPUBufferUsage.MAP_READ`      | 0x0001                     | 1                   |
| `GPUBufferUsage.MAP_WRITE`     | 0x0002                     | 2                   |
| `GPUBufferUsage.COPY_SRC`      | 0x0004                     | 4                   |
| `GPUBufferUsage.COPY_DST`      | 0x0008                     | 8                   |
| `GPUBufferUsage.INDEX`         | 0x0010                     | 16                  |
| `GPUBufferUsage.VERTEX`        | 0x0020                     | 32                  |
| `GPUBufferUsage.UNIFORM`       | 0x0040                     | 64                  |
| `GPUBufferUsage.STORAGE`       | 0x0080                     | 128                 |
| `GPUBufferUsage.INDIRECT`      | 0x0100                     | 256                 |
| `GPUBufferUsage.QUERY_RESOLVE` | 0x0200                     | 512                 |

Al consultar la propiedad {{domxref("GPUBuffer.usage")}}, obtienes un único número decimal, que es la suma de los valores decimales de las distintas banderas de uso. En el ejemplo anterior, al consultar `GPUBuffer.usage` en el `GPUBuffer` creado con el uso indicado antes, se obtendría lo siguiente:

- El equivalente decimal de `GPUBufferUsage.COPY_SRC`, 4
- Más el equivalente decimal de `GPUBufferUsage.MAP_WRITE`, 2
- El resultado es 6.

Debido a los valores elegidos para las distintas banderas, cada combinación de valores es única, así que el programa puede saber de un vistazo qué banderas están activadas a partir de un único valor. Además, puedes comprobar fácilmente qué banderas están activadas en el valor combinado con el operador AND bit a bit:

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // El búfer tiene el uso MAP_WRITE
}
```

## Véase también

- [Bitwise Flags are Beautiful, and Here's Why](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- [Operación bit a bit](https://es.wikipedia.org/wiki/Operador_a_nivel_de_bits) en Wikipedia
