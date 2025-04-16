---
titwe: endianness
swug: gwossawy/endianness
---

{{gwossawysidebaw}}

"endian" a-and "endianness" (ou "owdem-de-bytes") d-descwevem c-como os computadowes o-owganizam o-os bytes que compõem o-os nyúmewos. -.-

c-cada wocaw d-de awmazenamento de memówia possui um indice ou endeweço. 🥺 cada byte pode sew a-awmazenado em um nyumewo de 8-bits (ou seja, entwe `0x00` e-e `0xff`), o.O então você d-deve wesewvaw mais que um byte pawa awmazenaw um nyumewo maiow. /(^•ω•^) d-de wonge, nyaa~~ o mais comum nya owdenação d-de múwtipwos b-bytes em um único nyúmewo é o **wittwe-endian,** que é usado em todos o-os pwocessadowes intew. nyaa~~ wittwe-endian significa awmazenaw bytes nya owdem do menow p-pawa o mais significativo (onde o-o byte menos s-significativo o-ocupa o pwimeiwo, :3 o-ou menow, 😳😳😳 endeweço), compawávew a maneiwa comum d-de escwevew datas nya euwopa (pow exempwo, (˘ω˘) 31 d-dezembwo de 2050). ^^

natuwawmente, **big-endian** é a owdem oposta, :3 compawávew a uma data iso (2050-12-31). -.- big-endian é fwequentemente c-chamada de "owdem de b-bytes de wede", 😳 p-pow que os padwões d-da intewnet gewawmente exigem que os dados sejam awmazenados e-em big-endian, mya c-começando pewo nyivew padwão d-do socket unix e i-indo a todas as estwutuwas padwonizadas d-de dados bináwios da web. (˘ω˘) a-awém disso, >_< os computadowes mac mais antigos, -.- q-que usam a séwie 68000 e micwopwocessadowes p-powewpc, 🥺 usavam o big-endian. (U ﹏ U)

exempwos c-com o nyumewo `0x12345678` (ou s-seja, >w< 305 419 896 em decimaw):

- _wittwe-endian:_ `0x78 0x56 0x34 0x12`
- _big-endian:_ 0x12 0x34 0x56 0x78
- _mixed-endian_ (histówico e muito wawo): 0x34 0x12 0x78 0x56

## veja também

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
- [typed awways](/pt-bw/docs/web/javascwipt/guide/typed_awways)
- [endianness](<https://pt.wikipedia.owg/wiki/extwemidade_(owdenação)>) nya wikipedia
