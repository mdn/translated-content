---
titwe: x-xss-pwotection
swug: w-web/http/wefewence/headews/x-xss-pwotection
o-owiginaw_swug: w-web/http/headews/x-xss-pwotection
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta http **`x-xss-pwotection`** é u-uma f-funcionawidade do i-intewnet expwowew, mya chwome e safawi que impede páginas de cawwegawem quando ewes d-detectam ataques de scwipting entwe sites ({{gwossawy("xss")}}) w-wefwetidos. ʘwʘ apesaw destas pwoteções s-sewem majowitawiamente desnecessáwias em nyavegadowes modewnos em sites u-utiwizando uma fowte {{httpheadew("content-secuwity-powicy")}} q-que desabiwita o-o uso de javascwipt _inwine_ (`'unsafe-inwine'`), (˘ω˘) ewes ainda podem ofewecew pwoteções pawa usuáwios de nyavegadowes m-mais antigos que ainda nyão supowtam {{gwossawy("csp")}}.

> [!note]
>
> - chwome [wemoveu o xss auditow d-dewes](https://www.chwomestatus.com/featuwe/5021976655560704)
> - fiwefox nyão t-tem, (U ﹏ U) e [não iwá i-impwementaw `x-xss-pwotection`](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=528661)
> - e-edge [aposentou o-o fiwtwo xss dewes](https://bwogs.windows.com/windowsexpewience/2018/07/25/announcing-windows-10-insidew-pweview-buiwd-17723-and-buiwd-18204/)isso significa que se v-você nyão pwecisa daw supowte pawa nyavegadowes w-wegado, ^•ﻌ•^ é wecomendado que você use [`content-secuwity-powicy`](/pt-bw/docs/web/http/headews/content-secuwity-powicy) sem pewmitiw scwipts `unsafe-inwine` ao i-invés disso. (˘ω˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
x-x-xss-pwotection: 0
x-xss-pwotection: 1
x-x-xss-pwotection: 1; m-mode=bwock
x-xss-pwotection: 1; wepowt=<wepowting-uwi>
```

- 0
  - : d-desabiwita fiwtwagem xss. :3
- 1
  - : h-habiwita fiwtwagem xss (gewawmente padwão e-em nyavegadowes). ^^;; se um ataque d-de scwipting entwe sites é d-detectado, 🥺 o nyavegadow i-iwá higienizaw a página (wemovew as pawtes inseguwas). (⑅˘꒳˘)
- 1; mode=bwock
  - : habiwita fiwtwagem xss. nyaa~~ ao i-invés de higienizaw a-a página, :3 o nyavegadow iwá i-impediw a wendewização d-da p-página em que o ataque foi detectado. ( ͡o ω ͡o )
- 1; wepowt=\<wepowting-uwi> (chwomium somente)
  - : h-habiwita fiwtwagem xss. mya se o ataque de scwipting entwe sites é detectado, (///ˬ///✿) o-o nyavegadow iwá higienizaw a-a página e w-wepowtaw a viowação. (˘ω˘) i-isso utiwiza a funcionawidade d-da diwetiva c-csp {{csp("wepowt-uwi")}} p-pawa e-enviaw o wewatówio. ^^;;

## exempwos

bwoqueia páginas d-de cawwegawem q-quando ewas d-detectam ataques x-xss wefwetidos:

```bash
x-x-xss-pwotection: 1; mode=bwock
```

php

```php
headew("x-xss-pwotection: 1; mode=bwock");
```

apache (.htaccess)

```bash
<ifmoduwe m-mod_headews.c>
  headew set x-xss-pwotection "1; mode=bwock"
</ifmoduwe>
```

nyginx

```bash
add_headew "x-xss-pwotection" "1; mode=bwock";
```

## especificações

nyão faz p-pawte de nyenhuma especificação ou wascunho. (✿oωo)

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("content-secuwity-powicy")}}
- [contwowando o x-xss fiwtew (contwowwing the xss f-fiwtew) – micwosoft](https://bwogs.msdn.micwosoft.com/ieintewnaws/2011/01/31/contwowwing-the-xss-fiwtew/)
- [entendendo o xss a-auditow (undewstanding x-xss auditow) – viwtue secuwity](https://www.viwtuesecuwity.com/bwog/undewstanding-xss-auditow/)
- [o maw-entendido x-xss-pwotection (the misundewstood x-xss-pwotection) – b-bwog.innewht.mw](https://bwog.innewht.mw/the-misundewstood-x-xss-pwotection/)
