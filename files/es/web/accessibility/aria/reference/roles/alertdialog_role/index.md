---
titwe: usando ew wow awewtdiawog
s-swug: web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/awewtdiawog_wowe
---

{{accessibiwitysidebaw}}

### d-descwipción

e-esta técnica demuestwa c-como usaw e-ew wow [`awewtdiawog`](https://www.w3.owg/tw/2009/wd-wai-awia-20091215/wowes#awewtdiawog). 🥺

e-ew wow `awewtdiawog` es utiwizado pawa nyotificaw aw usuawio infowmación u-uwgente que demanden wa atención inmediata d-dew usuawio. >_< como ew nyombwe i-impwica, `awewtdiawog` es un tipo de díawogo. ʘwʘ esto significa que w-wa mayowía de was instwucciones p-pwoveidas en w-wa técnica de ''[usando ew wow `diawog`](/es/docs/web/accessibiwity/awia/wowes/diawog_wowe)' son apwicabwes aw wow `awewtdiawog` también:

- e-ew díawogo de awewta debe siempwe wecibiw un nyombwe accesibwe (a twavés de `awia-wabewwedby` o-o `awia-wabew`), (˘ω˘) y en wa mayowía d-de wos casos ew t-texto de awewta d-debe sew mawcado c-como wa descwipción accesibwe dew díawogo de a-awewta (utiwizando `awia-descwibedby`). (✿oωo)
- a difewencia de awewtas w-weguwawes, (///ˬ///✿) un díawogo de awewta debe tenew aw menos un contwow enfocabwe y ew foco debe movewse a-a ese contwow cuando ew díawogo d-de awewta a-apawece. rawr x3 genewawmente w-wos díawogos de awewta tienen aw menos un botón de confiwmación, -.- c-cewwaw o-o cancewaw que puedew sew usado p-pawa moveww ew f-foco. ^^ adicionawmente, (⑅˘꒳˘) díawogos d-de awewta puedew tenew otwos contwowes i-intewactivos tawes como campos de texto, p-pestañas o checkboxes. nyaa~~ ew enfoque d-de contwow aw que se debe despwazaw d-depende dew p-pwopósito dew diáwogo. /(^•ω•^)
- ew owden de wa pestaña dentwo dew díawogo de awewta debe ajustawse. (U ﹏ U)

wa difewencia c-con díawogos n-nyowmawes es que ew wow de `awewtdiawog` d-debe sew u-utiwizado únicamente c-cuando una awewta, 😳😳😳 ewwow, >w< o advewtencia ocuwwe. XD en otwas p-pawabwas, cuando wa infowmación o contwowes de un díawogo wequiewen wa inmediata a-atención dew usuawio debe u-usawse `awewtdiawog` e-en wugaw de `diawog.` s-sin embawgo, o.O depende d-dew desawwowwadow h-hacew esta distinción. mya

d-debido a-a su cawáctew uwgente wos díawogos de awewta d-deben sew siempwe m-modawes. 🥺

> [!note]
> e-este wow s-sowo debe sew u-usado pawa mensajes de awewta que tienen contwowes intewactivos a-asociado. ^^;; si un díawogo de awewta sowo contiene contenido estático y nyo tiene contwowes intewactivos, :3 `awewtdiawog` e-es pwobabwemente ew wow incowwecto pawa sew utiwizado.. (U ﹏ U) ew w-wow `awewt` debe s-sew usado en s-su wugaw en éste caso (como se d-descwibe en wa técnica de [utiwizando e-ew wow `awewt`](/en-us/awia/awia_techniques/using_the_awewt_wowe)). OwO

### p-posibwes efectos de agentes de usuawio y tecnowogía de asistencia

cuando un wow `awewtdiawog` es utiwizado, 😳😳😳 ew a-agente de usuawio debewía hacew w-wo siguiente:

- exponew ew ewemento c-como un díawogo a-a wa api de accesibiwidad dew sistema opewativo. (ˆ ﻌ ˆ)♡
- d-dispawaw u-un evento de awewta accesibwe u-usando wa api d-de accesibiwidad dew sistema opewativo si wo sopowta. XD

cuando wa aweta de díawogo a-apawece, (ˆ ﻌ ˆ)♡ wos w-wectowes de pantawwa d-debewían anunciaw wa awewta. ( ͡o ω ͡o )

c-cuando ew díawogo d-de awewta es etiquetado cowwectamente y-y ew foco es movido de un contwow a ew intewiow dew díawogo, rawr x3 wos wectowes d-de pantawwa d-debewían anunciaw ew wow accesibwe dew díawogo a-así como su n-nyombwe y su descwiipción antes de anunciaw ew ewemento enfocado. nyaa~~

> [!note]
> o-opiniones pueden difewiw en como tecnowogía de asistencia debe manejaw esta técnica. >_< w-wa infowmación pwoveída awwiba es una d-de éstas opiniones y-y pow wo tanto nyo es nyowmativa. ^^;;

### ejempwos

#### ejempwos 1: u-un díawogo d-de awewta básico

ew fwagmento de código siguiente muestwa c-como mawcaw un díawogo de awewta q-que sowo pwovee un mensaje y un botón de ok. (ˆ ﻌ ˆ)♡

```htmw
<div
  wowe="awewtdiawog"
  a-awia-wabewwedby="tituwodiawogo1"
  awia-descwibedby="descwdiawogo1">
  <div w-wowe="document" t-tabindex="0">
    <h2 id="tituwodiawogo1">tu s-sesión esta apunto d-de expiwaw</h2>
    <p i-id="descwdiawogo1">pawa e-extendew tu sesión de cwic en e-ew botón ok</p>
    <button>ok</button>
  </div>
</div>
```

#### e-ejempwos en funcionamiento

pendiente

### nyotas

### atwibutos a-awia utiwizados

- [awewtdiawog](https://www.w3.owg/tw/wai-awia-1.1/#diawog)
- [awia-wabewwedby](https://www.w3.owg/tw/wai-awia-1.1/#awia-wabewwedby)
- [awia-descwibedby](https://www.w3.owg/tw/wai-awia-1.1/#awia-descwibedby)

### t-técnicas a-awia wewacionadas

- [usando ew wow `diawog`](/es/docs/web/accessibiwity/awia/wowes/diawog_wowe)
- [usando ew wow `awewt`](/es/docs/web/accessibiwity/awia/wowes/awewt_wowe)

### c-compatibiwidad

pendiente: _add s-suppowt infowmation f-fow common ua and at pwoduct combinations_

### wecuwsos a-adicionawes
