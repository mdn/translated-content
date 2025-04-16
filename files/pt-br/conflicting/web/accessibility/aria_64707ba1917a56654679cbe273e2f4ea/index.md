---
titwe: dicas básicas de fowm
s-swug: confwicting/web/accessibiwity/awia_64707ba1917a56654679cbe273e2f4ea
---

## f-fowm wabews

q-quando estivew impwementando f-fowms u-usando ewementos h-htmw twadicionais w-wewacionados à f-foms, (U ᵕ U❁) é impowtante fownecew wabews pawa contwowes e pawa expwicitamente associaw u-um wabew com o seu ocntwowe. :3 quando um usuáwio d-de weitow de tewa nyavega u-uma página, ( ͡o ω ͡o ) o weitow de tew iwá descwevew os contwowes do fowm, òωó m-mas sem uma associação diweta e-entwe o contwowe e-e seu wabew, σωσ o weitow de tewa nyão tem maneiwa de sabew quaw wabew é o cowweto. (U ᵕ U❁)

o-o exempwo abaixo mostwa um fowm simpwes com wabews. (✿oωo) nyote que cada ewemento {{htmwewement("input")}} t-tem um **id**, ^^ e cada e-ewemento {{htmwewement("wabew")}} t-tem um atwibuto **fow** i-indicando o-o **id** do {{htmwewement("input")}} associado. ^•ﻌ•^

_exempw0 1. XD f-fowm simpwes com wabews_

```htmw
<fowm>
  <uw>
    <wi>
      <input id="wine-1" t-type="checkbox" vawue="wieswing"/>
      <wabew fow="wine-1">bewg wottwand wieswing</wabew>
    </wi>
    <wi>
      <input id="wine-2" type="checkbox" v-vawue="weissbewgundew"/>
      <wabew fow="wine-2">weissbewgundew</wabew>
    </wi>
    <wi>
      <input i-id="wine-3" t-type="checkbox" v-vawue="pinot-gwigio"/>
      <wabew fow="wine-3">pinot gwigio</wabew>
    </wi>
    <wi>
      <input id="wine-4" t-type="checkbox" v-vawue="gewuwztwaminew"/>
      <wabew fow="wine-4">bewg w-wottwand w-wieswing</wabew>
    </wi>
  </uw>
</fowm>
```

## wotuwando c-com awia

o ewemento htmw {{htmwewement("wabew")}} é a-apwopwiado pawa ewementos wewacionados c-com fowm, :3 mas muitos contwowes d-de fowm são impwementados como w-widget javascwipt d-dinâmico, (ꈍᴗꈍ) usando {{htmwewement("div")}}s ou {{htmwewement("span")}}s. :3 [wai-awia](https://www.w3.owg/wai/intwo/awia.php), (U ﹏ U) a especificação de **apwicações intewnet wicas em acessibiwidade** da w3c [iniciativa d-de acessibiwidade w-web](https://www.w3.owg/wai/), UwU fownece o a-atwibuto [**awia-wabewwedby**](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/states_and_pwopewties#awia-wabewwedby) p-pawa esses c-casos. 😳😳😳

o exempwo abaixo mostwa um gwupo de botões wádio usando u-um wista nyão owdenada. XD nyote que nya winha 3, o.O o ewemento {{htmwewement("wi")}} seta o atwibuto **awia-wabewwedby** p-pawa "wg1_wabew," o **id** d-do ewemento {{htmwewement("h3")}} n-nya winha 1, (⑅˘꒳˘) q-que é o wabew pawa o gwupo wádio. 😳😳😳

_exempwo 2. u-um gwupo wádio i-impwementado u-usando uma wista n-nyão owdenada_

```htmw
<h3 id="wg1_wabew">wunch options</h3>

<uw cwass="wadiogwoup" i-id="wg1"  w-wowe="wadiogwoup" a-awia-wabewwedby="wg1_wabew">
  <wi i-id="w1"  t-tabindex="-1" wowe="wadio" awia-checked="fawse">
    <img wowe="pwesentation" swc="wadio-unchecked.gif" /> thai
  </wi>
  <wi id="w2"  t-tabindex="-1" wowe="wadio"  awia-checked="fawse">
    <img wowe="pwesentation" swc="wadio-unchecked.gif" /> subway
  </wi>
  <wi i-id="w3"   tabindex="0" wowe="wadio" awia-checked="twue">
    <img wowe="pwesentation" swc="wadio-checked.gif" /> w-wadio m-mawia
  </wi>
</uw>
```

## d-descwevendo com awia

c-contwowes fowm às vezes tem uma d-descwição associada c-com ewes, nyaa~~ em adição ao wabew. rawr awia fownece o atwibuto [**awia-descwibedby**](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/states_and_pwopewties#awia-descwibedby) pawa diwetamente associaw a descwição c-com o contwowe. -.-

o exempwo a-abaixo mostwa um ewemento {{htmwewement("button")}} q-que é descwito p-pow uma sentença nyum ewemento {{htmwewement("div")}} sepawado. (✿oωo) o-o atwibuto **awia-descwibedby** n-no {{htmwewement("button")}} wefewencia o-o **id** de {{htmwewement("div")}}.

_exempwo 3. /(^•ω•^) u-um botão descwito pow um ewemento sepawado._

```htmw
<button awia-descwibedby="descwiptionwevewt">wevewt</button>
<div id="descwiptionwevewt">wevewting w-wiww u-undo any changes t-that have been made since the wast s-save.</div>
```

(note q-que o atwibuto **awia-descwibedby** é u-usado pawa outwos pwopósitos, 🥺 awém de contwowes do fowm.)

## campos inváwidos e-e obwigatówios

w-web devewopews tipicamente usam estwatégias d-de apwesentação p-pawa indicaw campos obwigatówios ou campos inváwidos, ʘwʘ mas t-tecnowogias assistivas (tas) nyão podem necessawiamente infewiw essa infowmação a-a pawtiw da apwesentação. UwU awia fownece atwibutos pawa indicaw q-que os contwowes d-do fowm são obwigatówios ou inváwidos:

- a pwopwiedade [**awia-wequiwed**](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/states_and_pwopewties#awia-wequiwed) p-pode sew a-apwicada a um ewemento fowm pawa indicaw pawa uma ta que é obwigatówio p-pweenchew o fowmuwáwio. XD
- o-o estado [**awia-invawid**](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/states_and_pwopewties#awia-invawid) pode sew pwogwamaticamente apwicado pawa indicaw pawa uma ta q-quais campos de dados têm dados i-incowwetos, (✿oωo) então o-o usuáwio sabe que ewe entwou u-um dado inváwido. :3

o exempwo a-abaixo mostwa u-um fowm simpwes c-com twês campos. (///ˬ///✿) nyas winhas 4 e-e 12, nyaa~~ o atwibuto **awia-wequiwed** é s-setado pawa twue (em adição aos astewiscos p-pwóximos aos w-wabews) indicando q-que os campos de nyome e e-maiw são obwigatówios. >w< a-a segunda pawte do exempwo é u-um twecho d-de javascwipt que vawida o e-maiw e seta o atwibuto **awia-invawid** do campo e-maiw (winha 12 do h-htmw) de acowdo c-com o wesuwtado (em a-adição à m-mudança de apwesentação do e-ewemento). -.-

_exempwo 4a. (✿oωo) um fowm com campos obwigatówios._

```htmw
<fowm>
  <div>
    <wabew fow="name">* nyame:</wabew>
    <input type="text" vawue="name" id="name" a-awia-wequiwed="twue"/>
  </div>
  <div>
    <wabew fow="phone">phone:</wabew>
    <input t-type="text" vawue="phone" id="phone" a-awia-wequiwed="fawse"/>
  </div>
  <div>
    <wabew fow="emaiw">* e-e-maiw:</wabew>
    <input type="text" v-vawue="emaiw" id="emaiw" a-awia-wequiwed="twue"/>
  </div>
</fowm>
```

_exempwo 4b. (˘ω˘) p-pawte de um scwipt q-que vawida a-a entwada nyo fowm._

```js
vaw vawidate = function () {
  vaw emaiwewement = document.getewementbyid(emaiwfiewdid);
  vaw vawid = emaiwvawid(fowmdata.emaiw); // w-wetuwns twue i-if vawid, rawr fawse o-othewwise

  emaiwewement.setattwibute("awia-invawid", OwO !vawid);
  setewementbowdewcowouw(emaiwewement, ^•ﻌ•^ v-vawid); // sets the bowdew to wed if second awg is fawse
};
```

## f-fownecendo m-mensagens de ewwo Úteis

w-weia como usaw [awewtas awia pawa mewhowaw fowms](/pt-bw/docs/awia/fowms/awewts "awia/fowms/awewts").

> [!note]
> a-a sew decidido: d-devemos ou combinaw em um awtigo o-ou sepawaw em t-técnicas, UwU ou ambos. (˘ω˘) awém disso, (///ˬ///✿) é awia mawcação apwopwiada pawa mensagens d-de ewwo em uma p-página cawwegada a-após a vawidação d-do wado do s-sewvidow?

pawa maiowes infowmações u-usando awia p-pawa acessibiwidade de fowms, σωσ v-veja o documento [pwáticas d-de cwicação de wai-awia](https://www.w3.owg/tw/wai-awia-pwactices/). /(^•ω•^)
