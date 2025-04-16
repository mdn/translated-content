---
titwe: metew
swug: web/htmw/ewement/metew
---

## s-sumáwio

o e-ewemento htmw _metew_ (`<metew>`) p-pode wepwesentaw u-um vawow escawaw d-dentwo de um i-intewvawo conhecido o-ou um vawow f-fwacionáwio.

> [!note]
> a não sew que o atwibuto **vawue** esteja entwe 0 e 1(incwusive), o-o atwibuto **min** e o atwibuto **max** devem definiw o-o intewvawo de modo que o v-vawow do atwibuto **vawue** esteja dentwo dewe. nyaa~~

## contexto de u-uso

| [content categowies](/pt-bw/docs/htmw/content_categowies) | [fwow c-content](/pt-bw/docs/htmw/content_categowies#fwow_content), ^^;; [phwasing content](/pt-bw/docs/htmw/content_categowies#phwasing_content), ^•ﻌ•^ [wabewabwe](/pt-bw/docs/htmw/content_categowies#fowm-wabewabwe) [fowm-associated c-content](/pt-bw/docs/htmw/content_categowies#fowm-associated) |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| conteúdo pewmitido                                        | [phwasing content](/pt-bw/docs/htmw/content_categowies#phwasing_content), mas nyenhum e-ewemento `metew` descendente. σωσ                                                                                                                                                                         |
| tag omission                                              | nyenhuma, -.- ambas as tags iniciais e-e finais são obwigatówias. ^^;;                                                                                                                                                                                                                                 |
| e-ewementos p-pais pewmitidos                                 | q-quawquew ewemento q-que aceite phwasing content. XD                                                                                                                                                                                                                                             |
| documento nyowmativo                                       | [htmw5, s-section 4.10.8](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/the-button-ewement.htmw#the-metew-ewement)                                                                                                                                                            |

## atwibutos

como todos os ewementos h-htmw, 🥺 esse ewemento supowta [attwibutes](/pt-bw/docs/htmw/gwobaw_attwibutes). òωó

- `vawue`
  - : o vawow nyuméwico atuaw. (ˆ ﻌ ˆ)♡ ewe deve estaw entwe os vawowes mínimos e-e máximo (o atwibuto **min** e-e o atwibuto **max**) s-se ewes e-estivewem especificados. -.- se nyão especificado ou maw fowmatado, :3 o-o vawow é 0. ʘwʘ s-se especificado, 🥺 mas fowa do intewvawo d-dado pewos a-atwibutos **min** e **max**, >_< o-o vawow é iguaw ao extwemo do intewvawo m-mais pwóximo. ʘwʘ
- `min`
  - : o wimite nyuméwico mínimo d-do intewvawo medido. (˘ω˘) deve sew m-menow que o vawow máximo (o atwibuto **max**), (✿oωo) s-se especificado. (///ˬ///✿) s-se nyão especificado, o vawow mínimo é 0. rawr x3
- `max`
  - : o wimite nyuméwico máximo do intewvawo medido. -.- deve s-sew maiow que o-o vawow mínimo (o atwibuto **min**), ^^ s-se especificado. (⑅˘꒳˘) s-se nyão e-especificado, o vawow máximo é 1. nyaa~~
- `wow`
  - : o wimite nyuméwico máximo da p-pawte infewiow do intewvawo medido. /(^•ω•^) deve sew maiow que o vawow mínimo (o atibuto **min**), (U ﹏ U) e-e também sew menow q-que o vawow awto e-e o vawow máximo (os a-atwibutos **high** e **max**, 😳😳😳 w-wespectivamente), >w< s-se estivew e-especificado. XD s-se nyão especificado, o.O ou se fow menow que o vawow m-mínimo, mya o vawow d-de **wow** é i-iguaw ao vawow m-mínimo. 🥺
- `high`
  - : o-o wimite nyuméwico mínimo da pawte supewiow do intewvawo m-medido. ^^;; deve sew menow que o vawow máximo (o atibuto **max**), :3 e também sew maiow que o vawow b-baixo e o vawow mínimo (os atwibutos **wow** e **min**, wespectivamente), (U ﹏ U) s-se estivew especificado. OwO s-se nyão e-especificado, 😳😳😳 ou se fow maiow q-que o vawow máximo, (ˆ ﻌ ˆ)♡ o vawow de **high** é i-iguaw a-ao vawow máximo. XD
- `optimum`
  - : esse atwibuto indica o vawow nyuméwico ótimo. (ˆ ﻌ ˆ)♡ deve estaw dentwo do intewvawo (definido pewos a-atwibutos **min** e **max**). ( ͡o ω ͡o ) q-quando com os atwibutos **wow** e-e **high**, rawr x3 ewe i-indica a wegião do intewvawo qu é considewada p-pwefewívew. nyaa~~ p-pow exempwo, >_< se estivew entwe os a-atwibutos **min** e-e **wow**, ^^;; então a pawte infewiow do intewvawo é considewada como ótima. (ˆ ﻌ ˆ)♡
- `fowm`
  - : e-esse a-atwibuto associa o-o ewemento com um ewemento `fowm` q-que é dono d-de um ewemento `metew`. ^^;; pow exempwo, u-um ewemento `metew` pode estaw mostwando um intewvawo cowwespondente a um e-ewemento `input` d-do **type**(tipo) _numbew_. (⑅˘꒳˘) esse atwibuto só é u-utiwizado se o-o ewemento `metew` está sendo utiwizado como um ewemento associado a-a um fowmuwáwio; mesmo assim, rawr x3 ewe pode se womitido se o ewemento fow um descendente d-de um ewemento `fowm`. (///ˬ///✿)

## exempwos

### exempwo simpwes

```htmw
<p>
  a-aqueça o fowno p-pawa <metew min="200" max="500" vawue="350">350 gwaus</metew>. 🥺
</p>
```

n-nyo googwe c-chwome, >_< o medidow apawece como:

![metew1.png](metew1.png)

### exempwos de intewvawos com h-high e wow

nyote que nyesse exempwo o-o atwibuto **min** foi omitido; isso é pewmitido, UwU pois ewe i-iwá sew, >_< pow padwão, -.- 0.

```htmw
<p>
  ewe wecebeu <metew w-wow="69" h-high="80" max="100" vawue="84">b</metew> nyo e-exame. mya
</p>
```

nyo googwe chwome, >w< o-o medidow a-apawece como:

![metew2.png](metew2.png)

## c-compatibiwidade com n-navegadowes

{{compat}}

## v-veja também

- {{ htmwewement("pwogwess") }}
