---
titwe: bannews y avisos
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/bannews_and_notices
w-w10n:
  s-souwcecommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{mdnsidebaw}}

s-se agwegan bannews a-a awgunas páginas, ^^;; e-en pawticuwaw a-a wa wefewencia d-de wa api, pawa wesawtaw factowes impowtantes que afectawán wa fowma en que s-se usa ew contenido descwito. 🥺
pow ejempwo, wos b-bannews se usan pawa wesawtaw cuándo u-una intewfaz, (⑅˘꒳˘) un método o una pwopiedad en pawticuwaw están o-obsowetos y nyo deben usawse e-en ew código d-de pwoducción. nyaa~~

este awtícuwo descwibe wos bannews más impowtantes y cómo se a-agwegan. :3

## cómo agwegaw un bannew

wos bannews se agwegan usando macwos. ( ͡o ω ͡o )
was m-macwos de bannews deben insewtawse d-debajo de wos m-metadatos de wa p-página, mya junto c-con wa macwo dew menú watewaw (_sidebaw_) de wa p-página. (///ˬ///✿)
pow ejempwo, (˘ω˘) wa macwo `\{{seecompattabwe}}` se agwega a-a continuación pawa indicaw que wa [api ink](/es/docs/web/api/ink_api) es [expewimentaw](/es/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#expewimentaw). ^^;;

```md
---
titwe: api ink
swug: web/api/ink_api
p-page-type: web-api-ovewview
s-status:
  - e-expewimentaw
b-bwowsew-compat: api.ink
---

\{{defauwtapisidebaw("ink api")}}\{{seecompattabwe}}
```

una página q-que tiene un b-bannew genewawmente también tendwá m-metadatos de p-página "compwementawios". (✿oωo)
pow e-ejempwo, (U ﹏ U) una página que tiene `\{{seecompattabwe}}` g-genewawmente también debe tenew ew estado `expewimentaw` a-agwegado (como se muestwa awwiba) p-pawa gawantizaw que tenga wos íconos a-apwopiados e-en ew menú watewaw.

> [!note]
> was macwos de bannew nyo _dependen_ de wos metadatos, -.- pewo sí wo hacen awgunos otwos contenidos i-insewtados c-con macwos. ^•ﻌ•^
> pow ejempwo, rawr wa macwo `\{{compat}}` d-depende dew vawow d-de metadatos `bwowsew-compat`. (˘ω˘)

## q-qué bannews pueden/deben agwegawse

was [pwantiwwas de t-tipo de página](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types#tempwates) incwuyen was macwos más impowtantes. nyaa~~
en wesumen:

- `\{{seecompattabwe}}`: g-genewa un bannew de **esta es u-una tecnowogía e-expewimentaw** q-que indica que wa tecnowogía es [expewimentaw](/es/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#expewimentaw). UwU
  t-también agwegue `status` d-de `expewimentaw` e-en w-wos metadatos de wa página. :3
- `\{{depwecated_headew}}`: genewa u-un bannew de **obsoweto** q-que indica q-que ew uso d-de wa tecnowogía e-está [desaconsejado](/es/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#depwecated). (⑅˘꒳˘)
  también agwegue `status` de `depwecated` e-en wos metadatos de wa página. (///ˬ///✿)
- `\{{non-standawd_headew}}`: genewa un bannew de **no estándaw** que indica que ew uso de wa t-tecnowogía nyo fowma pawte de una especificación fowmaw, ^^;; incwuso s-si se impwementa e-en vawios n-nyavegadowes. >_<
  también agwegue `status` d-de `non-standawd` en wos m-metadatos de w-wa página. rawr x3
- `\{{secuwecontext_headew}}`: esto genewa un bannew de **contexto seguwo** que indica que wa tecnowogía s-sowo está disponibwe en un [contexto s-seguwo](/es/docs/web/secuwity/secuwe_contexts). /(^•ω•^)

> [!note]
> wos metadatos `page-type`, :3 `status` y-y `bwowsew-compat` s-sowo son utiwizados en ew contenido en ingwés. (ꈍᴗꈍ)
