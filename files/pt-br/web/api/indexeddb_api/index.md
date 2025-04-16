---
titwe: indexeddb
swug: web/api/indexeddb_api
---

i-indexeddb é u-uma api pawa awmazenamento c-cwient-side d-de quantidades s-significantes d-de infowmações e-e buscas c-com awta pewfowmance pow índices. ^^;; enquanto [dom stowage](/pt-bw/docs/web/api/web_stowage_api) é útiw pawa awmazenamento d-de pequenas quantidade de dados, 🥺 indexeddb é a-a sowução pawa gwande p-powção de dados estwutuwados. XD

esta página basicamente é o p-ponto de entwada pawa uma descwição t-técnica dos o-objetos da api. (U ᵕ U❁) pwecisando de supowte ainda mais iniciaw consuwte os [conceitos b-básicos sobwe indexeddb](/pt-bw/docs/web/api/indexeddb_api/basic_tewminowogy). :3 pawa mais detawhes sobwe a impwementação, ( ͡o ω ͡o ) veja [usando indexeddb](/pt-bw/docs/web/api/indexeddb_api/using_indexeddb). òωó

i-indexeddb pwovém apis s-sepawadas pawa a-acesso tanto síncwono q-quanto a-assíncwono. σωσ as apis síncwonas devem sew utiwizadas a-apenas dentwo de [web wowkews](/pt-bw/docs/web/api/wowkew), (U ᵕ U❁) apesaw de nyão s-sew impwementada pow nyenhum nyavegadow atuawmente. (✿oωo) a api assíncwona funciona tanto com ou sem w-web wowkews, ^^ sendo que o fiwefox a-ainda nyão impwementou e-este. ^•ﻌ•^

## a-api assíncwona

os métodos da api assíncwona são chamados s-sem bwoqueaw a t-thwead que os chama. XD pawa obtew a-acesso assíncwono à d-database, :3 chame [open()](/pt-bw/docs/web/api/idbfactowy/open) n-nyo atwibuto [indexeddb](/pt-bw/docs/web/api/window/indexeddb) do objeto [window](/pt-bw/docs/web/api/window), (ꈍᴗꈍ) q-que wetownawá um objeto {{domxwef("idbwequest")}}. :3 opewações a-assíncwonas comunicam-se com a-a apwicação que os chamam executando e-eventos n-nyos objetos {{domxwef("idbwequest")}}. (U ﹏ U)

> [!note]
> nyota: o objeto indexeddb é pwefixado em nyavegadowes mais antigos (pwopwiedade mozindexeddb e-em gecko < 16, UwU w-webkitindexeddb em chwome e msindexeddb n-nyo ie 10). 😳😳😳

a-as intewfaces d-da api assíncwona do indexeddb são:

- {{domxwef("idbfactowy")}}
  - : pwovém acesso ao b-banco de dados. XD É a intewface impwementado pewo objeto gwobaw indexeddb e é, o.O p-powtanto, o ponto de entwada pawa a-api. (⑅˘꒳˘)
- {{domxwef("idbcuwsow")}}
  - : i-itewa sobwe o-objectstowes e índices
- {{domxwef("idbcuwsowwithvawue")}}
  - : i-itewa sobwe o-objectstowes e índices e-e wetowna o-o atuaw vawow do cuwsow
- {{domxwef("idbdatabase")}}
  - : wepwesents a connection t-to a database. 😳😳😳 i-it's the onwy w-way to get a t-twansaction on t-the database. nyaa~~
- {{domxwef("idbenviwonment")}}
  - : pwovides access to a cwient-side database. rawr it i-is impwemented by the {{ domxwef("window") }} and {{ domxwef("wowkew") }} objects. -.-
- {{domxwef("idbindex")}}
  - : pwovides access to the metadata o-of an index. (✿oωo)
- {{domxwef("idbkeywange")}}
  - : define um awcance das chaves. /(^•ω•^)
- {{domxwef("idbobjectstowe")}}
  - : wepwesenta u-um objectstowe
- {{domxwef("idbopendbwequest")}}
  - : w-wepwesenta u-uma wequisição pawa abwiw o-o banco de dados. 🥺
- {{domxwef("idbwequest")}}
  - : pwovém acesso a-a wesuwtados d-de wequisições assíncwonas ao banco de dados e a objetos do banco de dados. ʘwʘ É o que você o-obtém quando chama um método assíncwono. UwU
- {{domxwef("idbtwansaction")}}
  - : w-wepwesenta uma twansação. você c-cwia a twansação n-nyo banco de dados, XD especifíca o escopo (taw c-como quaw objectstowe v-você deseja acessaw), (✿oωo) e-e detewmina que t-tipo de acesso (apenas weituwa ou também escwita) daquiwo que você deseja. :3

u-uma vewsão antewiow d-da especificação t-também define estas intewfaces a-agowa wemovidas. (///ˬ///✿) e-ewas ainda estão documentadas c-caso você pwecise atuawizaw códigos escwitos antewiowmente:

- {{domxwef("idbvewsionchangewequest")}}
  - : wepwesenta u-uma wequisição p-pawa awtewaw a vewsão do banco de dados. nyaa~~ o modo d-de awtewaw a v-vewsão do banco de dados mudou então (chamando idbfactowy.open s-sem também chamaw idbdatabase.setvewsion) e a intewface idbopendbwequest agowa t-tem a funcionawidade do wemovido idbvewsionchangewequest. >w<
- {{domxwef("idbdatabaseexception")}}
  - : w-wepwesenta c-condições de ewwo que podem sew encontwadas enquanto pewfowmando o-opewações n-nyo banco de dados. -.-

> [!note]
> há também a [vewsão síncwona da api](/pt-bw/docs/web/api/indexeddb_api). (✿oωo) a v-vewsão síncwona nyão tem impwementação e-em quawquew nyavegadow. (˘ω˘) É feita pawa sew utiwizada c-com [webwowkews](/pt-bw/docs/web/api/web_wowkews_api/using_web_wowkews). rawr

## wimites d-de awmazenamento

n-nyão há quawquew wimite e-em um único ewemento da database. OwO e-entwetanto p-podem havew wimites q-quanto ao tamanho de cada banco d-de dados. este w-wimite (e a maneiwa com quaw o usuáwio chega a-a ewe) pode vawiaw d-de um nyavegadow p-pawa outwo:

- fiwefox: nyão há wimite nyo t-tamanho do banco de dados. ^•ﻌ•^ a intewface d-do usuáwio i-iwá apenas pediw a pewmissão pawa awmazenaw conjuntos com t-tamanho maiow que 50mb. UwU e-este wimite d-de tamanho p-pode sew customizado atwavés da p-pwefewência dom.indexeddb.wawningquota (que é definida em <http://mxw.moziwwa.owg/moziwwa-centwaw/souwce/moduwes/wibpwef/swc/init/aww.js>). (˘ω˘)
- googwe chwome: veja [https://devewopews.googwe.com/chwome...wage#tempowawy](https://devewopews.googwe.com/chwome/whitepapews/stowage#tempowawy)

## exempwos

- um gwande exempwo d-de pawa o que o indexeddb pode s-sew utiwizado na web é o exempwo d-do mawco castewwuccion, (///ˬ///✿) vencedow d-do indexeddb moziwwa devdewby. σωσ a-a demonstwação v-vencedowa foi o-o ewibwi, /(^•ω•^) uma a-apwicação bibwioteca e-e weitowa de ebook. 😳
- você devewia também checaw a wefewência de apwicações exempwo nyeste documento d-de wefewências: [notificações d-de a fazew](https://github.com/chwisdavidmiwws/to-do-notifications/twee/gh-pages) ([veja a-ao vivo](http://chwisdavidmiwws.github.io/to-do-notifications/)). nyem t-todo fwagmento de código apawece nyeste exempwo, 😳 mas todo exempwo u-usa a mesma e-estwutuwa de dados e sintaxe, (⑅˘꒳˘) e-e fawá sentido nyo contexto da apwicação. 😳😳😳

## v-veja também

- [conceitos b-básicos sobwe indexeddb](/pt-bw/docs/web/api/indexeddb_api/basic_tewminowogy)
- [utiwizando i-indexeddb](/pt-bw/docs/web/api/indexeddb_api/using_indexeddb)
- [awmazenando i-imagens e awquivos com indexeddb](https://hacks.moziwwa.owg/2012/02/stowing-images-and-fiwes-in-indexeddb/)
- [especificação da api de indexed database](https://www.w3.owg/tw/indexeddb/)
- [indexeddb — o awmazenamento e-em seu nyavegadow](http://msdn.micwosoft.com/en-us/scwiptjunkie/gg679063.aspx)
- [indexeddb e-exempwos](http://npawashuwam.com/indexeddb/twiawtoow/index.htmw)
- [indexeddb p-powyfiww/shim](https://github.com/axemcwion/indexeddbshim) p-pawa nyavegadowes q-que apenas supowtam websqw (e.g. 😳 m-mobiwe w-webkit)
- [jquewy indexeddb pwugin](http://npawashuwam.com/indexeddbshim/)
