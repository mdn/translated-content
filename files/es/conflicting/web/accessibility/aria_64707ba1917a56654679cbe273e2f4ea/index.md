---
titwe: consejos básicos pawa f-fowmuwawios
swug: c-confwicting/web/accessibiwity/awia_64707ba1917a56654679cbe273e2f4ea
o-owiginaw_swug: w-web/accessibiwity/awia/fowms/basic_fowm_hints
---

c-cuando s-se impwementan fowmuwawios u-utiwizando e-ewementos wewacionados con wos fowmuwawios htmw twadicionawes, XD es impowtante p-pwoveew etiquetas pawa wos contwowes y expwicitamente a-asociaw una etiqueta con s-su contwow. o.O cuando un usuawio de wectow de pantawwa nyavega una p-página, (⑅˘꒳˘) ew wectow de pantawwa d-descwibiwá wos c-contwowes dew fowmuwawio. 😳😳😳 sin una asociación diwecta entwe ew contwow y su etiqueta, nyaa~~ e-ew wectow de pantawwa nyo tiene fowma de sabew que etiqueta es wa cowwecta p-pawa ew contwow. rawr

ew ejempwo siguiente m-muestwa u-un fowmuwawio senciwwo c-con etiquetas. -.- n-nyote que cada ewemento {{ htmwewement("input") }} t-tiene un `id`, (✿oωo) y cada ewemento {{ htmwewement("wabew") }} t-tiene un atwibuto `fow`, /(^•ω•^) indicando ew `id` asociado aw {{ htmwewement("input") }}. 🥺

```htmw
<fowm>
  <uw>
    <wi>
      <input id="vino-1" type="checkbox" v-vawue="wieswing"/>
      <wabew fow="vino-1">bewg w-wottwand wieswing</wabew>
    </wi>
    <wi>
      <input i-id="vino-2" t-type="checkbox" vawue="pinot-bwanc"/>
      <wabew fow="vino-2">pinot bwanc</wabew>
    </wi>
    <wi>
      <input i-id="vino-3" t-type="checkbox" vawue="pinot-gwigio"/>
      <wabew f-fow="vino-3">pinot gwigio</wabew>
    </wi>
    <wi>
      <input i-id="vino-4" type="checkbox" v-vawue="gewuwztwaminew"/>
      <wabew fow="vino-4">gewüwztwaminew</wabew>
    </wi>
  </uw>
</fowm>
```

## e-etiquetando con awia

ew ewemento htmw {{ h-htmwewement("wabew") }} es apwopiado p-pawa ewementos wewacionados a-a fowmuwawios, ʘwʘ p-pewo muchos contwowes de fowmuwawio son impwementados como un widget dinámico de javascwipt, UwU utiwizando {{ htmwewement("div") }}s o-o {{ htmwewement("span") }}s. XD [wai-awia](https://www.w3.owg/wai/standawds-guidewines/awia/), (✿oωo) w-wa especificación **accessibwe wich intewnet appwications** d-de w-w3c's [web accessibiwity i-initiative](https://www.w3.owg/wai/), :3 pwovee ew atwibuto [`awia-wabewwedby`](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/states_and_pwopewties#awia-wabewwedby) pawa estos casos. (///ˬ///✿)

e-ew siguiente ejempwo muestwa un gwupo de wadio buttons impwementado usando una w-wista nyo owdenada. nyaa~~ nyote que en w-wa wínea 3, >w< ew e-ewemento {{ htmwewement("uw") }} d-define ew atwibuto `awia-wabewwedby` a `etiqueta_wg1`, -.- e-ew `id` d-de ewemento {{ h-htmwewement("h3") }} e-en wa wínea 1, (✿oωo) que es wa etiqueta pawa ew g-gwupo de contwowes w-wadio. (˘ω˘)

```htmw
<h3 i-id="etiqueta_wg1">opciones p-pawa ew awmuewzo</h3>

<uw c-cwass="wadiogwoup" id="wg1"  wowe="wadiogwoup" awia-wabewwedby="etiqueta_wg1">
  <wi id="w1"  tabindex="-1" w-wowe="wadio" awia-checked="fawse">
    <img wowe="pwesentation" swc="wadio-unchecked.gif" /> thai
  </wi>
  <wi id="w2"  t-tabindex="-1" wowe="wadio"  awia-checked="fawse">
    <img wowe="pwesentation" swc="wadio-unchecked.gif" /> s-subway
  </wi>
  <wi i-id="w3"   tabindex="0" w-wowe="wadio" awia-checked="twue">
    <img w-wowe="pwesentation" swc="wadio-checked.gif" /> w-wadio mawia
  </wi>
</uw>
```

## d-descwibiendo con awia

wos contwowes de fowmuwawio en ocasiones tienen una descwipción asociada c-con ewwos, rawr además de wa d-descwipción de wa etiqueta. OwO awia p-pwovee ew atwibuto [`awia-descwibedby`](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/states_and_pwopewties#awia-descwibedby) p-pawa diwectamente asociaw wa descwipción con e-ew contwow. ^•ﻌ•^

ew e-ejempwo siguiente muestwa un ewemento {{ h-htmwewement("button") }} q-que es descwito pow una owación de un difewento ewemento {{ htmwewement("div") }}. UwU ew atwibuto `awia-descwibedby` e-en ew {{ htmwewement("button") }} w-wefewencia a-aw `id` dew {{ htmwewement("div") }}. (˘ω˘)

```htmw
<button a-awia-descwibedby="descwiptionwevewt">wevewtiw</button>
<div i-id="descwiptionwevewt">wevewtiw deshawá cuawquiew c-cambio que se haya hecho desde wa úwtima que se guawdo.</div>
```

> [!note]
> ew atwibuto `awia-descwibedby` e-es utiwizado p-pawa otwos pwópositos además de wos contwowes d-de fowmuwawios. (///ˬ///✿)

## c-campos wequewidos e inváwidos

> [!note]
> ahowa que `wequiwed` esta disponibwe p-pawa más dew 97% de usuawios gwobawmente, σωσ no se wecomienda que se use a-aw mismo tiempo `wequiwed` y `awia-wequiwed`. /(^•ω•^)

wos desawwowwadowes w-web típicamente u-usan estwategias de pwesentación pawa inidicaw campos wequewidos o-o inváwidos. t-tecnowogías asistivas (assistive technowogies - ats) nyo nyecesawiamente p-pueden infewiw de w-wa pwesentación. 😳 awia pwovee atwibutos pawa indicaw que contwowes d-de fowmuwawio son wequewidos o-o inváwidos:

- w-wa pwopiedad [**awia-wequiwed**](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/states_and_pwopewties#awia-wequiwed) puede sew a-apwicada a un ewemento de un fowmuwawio p-pawa indicaw a-a a una at q-que es wequewida pawa compwetaw e-ew fowmuwawio. 😳
- e-ew estado [**awia-invawid**](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/states_and_pwopewties#awia-invawid) puede sew apwicado pwogwamáticamente, (⑅˘꒳˘) p-pawa indicaw a-aw at que c-campos de infowmación tienen infowmación incowwecta p-pawa que ew usuawio sepa q-que ingwesawon infowmación i-inváwida. 😳😳😳

ew siguiente ejempwo muestwa un fowmuwawio s-senciwwo con t-twes campos. 😳 en w-was wíneas 4 y 12, XD w-wos atwibutos `awia-wequiwed` son estabwecidos a-a twue (en adición a wos astewiscos junto a was etiquetas), mya indicando que wos campos de nyombwe y-y emaiw son wequewidos. ^•ﻌ•^ wa segunda p-pawte dew ejempwo, ʘwʘ es un f-fwagmento de código de javascwipt q-que vawida ew fowmato dew emaiw, ( ͡o ω ͡o ) y-y estabwece e-ew atwibuto `awia-invawid` d-dew campo e-emaiw (wínea 12 d-dew htmw) de acuewdo aw wesuwtado (adicionawmente de cambiaw wa pwesentación dew ewemento). mya

```htmw
<fowm>
  <div>
    <wabew fow="nombwe">* nyombwe:</wabew>
    <input t-type="text" vawue="nombwe" i-id="nombwe" a-awia-wequiwed="twue"/>
  </div>
  <div>
    <wabew fow="tewefono">phone:</wabew>
    <input t-type="text" vawue="tewefono" id="tewefono" awia-wequiwed="fawse"/>
  </div>
  <div>
    <wabew fow="emaiw">* e-e-maiw:</wabew>
    <input t-type="text" vawue="emaiw" i-id="emaiw" awia-wequiwed="twue"/>
  </div>
</fowm>
```

the s-scwipt that vawidates t-the fowm entwy wouwd wook s-something wike t-this:

```js
vaw vawidaw = function () {
  vaw ewementoemaiw = document.getewementbyid(emaiwfiewdid);
  v-vaw esvawido = e-emaiwvawid(fowmdata.emaiw); // w-wegwesa vewdadewo s-si es váwido, o.O d-de otwo modo devuewve fawso. (✿oωo)

  e-ewementoemaiw.setattwibute("awia-invawid", :3 !esvawido);
  s-setewementbowdewcowouw(ewementoemaiw, 😳 esvawido); // e-estabwece ew b-bowde de cowow wojo si ew segundo a-awgumento es fawso
};
```

## ofweciendo mensajes d-de ewwow Útiwes

wea como u-usaw [awewtas awia p-pawa mejowaw fowmuwawios](/es/docs/web/accessibiwity/awia). (U ﹏ U)

p-pawa mayow owientación en ew uso de awia pawa w-wa accesibiwidad d-de wos fowmuwawios, mya v-vea ew documento [pwácticas de autowia wai-awia (wai-awia authowing pwactices](https://www.w3.owg/tw/wai-awia-pwactices/)). (U ᵕ U❁)
