---
title: Endianness
slug: Glossary/Endianness
---

"Endian" and "endianness" (ou "ordem-de-bytes") descrevem como os computadores organizam os bytes que compõem os números.

Cada local de armazenamento de memória possui um indice ou endereço. Cada byte pode ser armazenado em um numero de 8-bits (ou seja, entre `0x00` e `0xff`), então você deve reservar mais que um byte para armazenar um numero maior. De longe, o mais comum na ordenação de múltiplos bytes em um único número é o **little-endian,** que é usado em todos os processadores Intel. Little-endian significa armazenar bytes na ordem do menor para o mais significativo (onde o byte menos significativo ocupa o primeiro, ou menor, endereço), comparável a maneira comum de escrever datas na Europa (por exemplo, 31 Dezembro de 2050).

Naturalmente, **big-endian** é a ordem oposta, comparável a uma data ISO (2050-12-31). Big-endian é frequentemente chamada de "ordem de bytes de rede", por que os padrões da internet geralmente exigem que os dados sejam armazenados em big-endian, começando pelo nivel padrão do socket UNIX e indo a todas as estruturas padronizadas de dados binários da Web. Além disso, os computadores Mac mais antigos, que usam a série 68000 e microprocessadores PowerPC, usavam o big-endian.

Exemplos com o numero `0x12345678` (ou seja, 305 419 896 em decimal):

- _little-endian:_ `0x78 0x56 0x34 0x12`
- _big-endian:_ 0x12 0x34 0x56 0x78
- _mixed-endian_ (histórico e muito raro): 0x34 0x12 0x78 0x56

## Veja também

- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [Typed Arrays](/pt-BR/docs/Web/JavaScript/Typed_arrays)
- [Endianness](<https://pt.wikipedia.org/wiki/Extremidade_(ordenação)>) na Wikipedia
