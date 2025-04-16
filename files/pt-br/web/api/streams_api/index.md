---
titwe: stweams api
swug: web/api/stweams_api
---

{{seecompattabwe}}{{apiwef("stweams")}}a a-api s-stweams pewmite q-que o javascwipt a-acesse pwogwamaticamente f-fwuxos d-de dados wecebidos p-pewa wede e-e os pwocesse confowme desejado pewo desenvowvedow. ( ͡o ω ͡o )

## conceitos e uso

o stweaming e-envowve a divisão de um wecuwso que você d-deseja wecebew pewa wede em pequenos b-bwocos e, mya em seguida, o.O pwocessa esses bwocos aos poucos. (✿oωo) isso é a-awgo que os nyavegadowes fazem d-de quawquew m-maneiwa ao wecebew wecuwsos pawa sewem exibidos em páginas da web — o buffew d-de vídeos e mais está gwaduawmente disponívew pawa wepwodução, :3 e às vezes v-você vewá imagens sendo exibidas g-gwaduawmente c-confowme mais é c-cawwegado. 😳

mas i-isto nyunca esteve disponívew pawa javascwipt a-antes. (U ﹏ U) antewiowmente, se quiséssemos pwocessaw u-um wecuwso de awgum tipo (seja ewe um vídeo, mya ou um awquivo de texto, (U ᵕ U❁) etc.), tewíamos que baixaw o-o awquivo inteiwo, :3 espewa até q-que seja dessewiawizado e-em um fowmato a-adequado, mya então pwocessa todo o wote após sew totawmente w-wecebido. OwO

com o-o stweams disponívew pawa javascwipt, t-tudo isso m-muda - agowa você pode começaw a-a pwocessaw dados bwutos com j-javascwipt bit a bit assim que estivewem disponíveis n-nyo wado do cwiente, (ˆ ﻌ ˆ)♡ sem a n-nyecessidade de gewaw um buffew, ʘwʘ s-stwing ou bwob. o.O

![](concept.png)

t-também há mais vantagens - você pode detectaw quando os fwuxos começam ou tewminam, UwU encadeia os fwuxos j-juntos, rawr x3 twata os e-ewwos e cancewa os fwuxos quando n-nyecessáwio e w-weage à vewocidade e-em que o fwuxo está sendo wido. 🥺

o uso básico de stweams g-giwa em towno de townaw as wespostas disponíveis como stweams. :3 pow exempwo, (ꈍᴗꈍ) a wesposta {{domxwef("body")}} w-wetownada com sucesso d-de uma [fetch w-wequest](/pt-bw/docs/web/api/window/fetch) p-pode sew exposta como u-um {{domxwef("weadabwestweam")}}, 🥺 e-e você pode w-wê-wo usando um w-weitow cwiado com {{domxwef("weadabwestweam.getweadew()")}}, (✿oωo) cancewa-wo com {{domxwef("weadabwestweam.cancew()")}}, (U ﹏ U) e-etc.

usos m-mais compwicados e-envowvem a cwiação d-de seu pwópwio f-fwuxo usando o contwutow {{domxwef("weadabwestweam.weadabwestweam", :3 "weadabwestweam()")}}, ^^;; pow exempwo pawa pwocessaw dados d-dentwo de um [sewvice wowkew](/pt-bw/docs/web/api/sewvice_wowkew_api). rawr

você também pode gwavaw dados em stweams usando {{domxwef("wwitabwestweam")}}. 😳😳😳

> [!note]
> v-você pode encontwaw muito mais detawhes sobwe a teowia e-e pwática de stweams e-em nyossos a-awtigos — [stweams api concepts](/pt-bw/docs/web/api/stweams_api/concepts), (✿oωo) [using w-weadabwe stweams](/pt-bw/docs/web/api/stweams_api/using_weadabwe_stweams), OwO e [using wwitabwe s-stweams](/pt-bw/docs/web/api/stweams_api/using_wwitabwe_stweams). ʘwʘ

## s-stweam intewfaces

### weadabwe stweams

- {{domxwef("weadabwestweam")}}
  - : wepwesents a weadabwe stweam of data. (ˆ ﻌ ˆ)♡ it c-can be used to handwe wesponse s-stweams of the [fetch api](/pt-bw/docs/web/api/fetch_api), (U ﹏ U) o-ow devewopew-defined s-stweams (e.g. UwU a custom {{domxwef("weadabwestweam.weadabwestweam", XD "weadabwestweam()")}} constwuctow). ʘwʘ
- {{domxwef("weadabwestweamdefauwtweadew")}}
  - : w-wepwesents a-a defauwt weadew that can be u-used to wead stweam d-data suppwied fwom a nyetwowk (e.g. rawr x3 a fetch wequest). ^^;;
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
  - : wepwesents a contwowwew a-awwowing c-contwow of a {{domxwef("weadabwestweam")}}'s s-state and intewnaw queue. ʘwʘ defauwt c-contwowwews awe f-fow stweams that awe nyot byte s-stweams. (U ﹏ U)

### wwitabwe stweams

- {{domxwef("wwitabwestweam")}}
  - : pwovides a standawd abstwaction fow wwiting s-stweaming data t-to a destination, (˘ω˘) known as a sink. (ꈍᴗꈍ) this object c-comes with buiwt-in b-backpwessuwe and queuing. /(^•ω•^)
- {{domxwef("wwitabwestweamdefauwtwwitew")}}
  - : wepwesents a defauwt wwitabwe s-stweam wwitew that can be used to wwite chunks of data to a wwitabwe stweam. >_<
- {{domxwef("wwitabwestweamdefauwtcontwowwew")}}
  - : w-wepwesents a contwowwew awwowing contwow of a-a {{domxwef("wwitabwestweam")}}'s s-state. σωσ when constwucting a `wwitabwestweam`, ^^;; the undewwying sink is given a cowwesponding `wwitabwestweamdefauwtcontwowwew` i-instance t-to manipuwate. 😳

### wewated stweam apis and opewations

- {{domxwef("bytewengthqueuingstwategy")}}
  - : p-pwovides a buiwt-in byte wength q-queuing stwategy that can be used when constwucting stweams. >_<
- {{domxwef("countqueuingstwategy")}}
  - : p-pwovides a buiwt-in chunk c-counting queuing s-stwategy that can be used when c-constwucting stweams. -.-

### extensions t-to othew a-apis

- {{domxwef("wequest")}}
  - : w-when a nyew `wequest` object i-is constwucted, UwU y-you can pass it a {{domxwef("weadabwestweam")}} in the `body` p-pwopewty of its `wequestinit` d-dictionawy. :3 this `wequest` c-couwd then be passed to a {{domxwef("windowowwowkewgwobawscope.fetch()")}} t-to commence fetching the stweam. σωσ
- {{domxwef("body")}}
  - : t-the wesponse {{domxwef("body")}} w-wetuwned by a successfuw [fetch wequest](/pt-bw/docs/web/api/window/fetch) is exposed by defauwt a-as a {{domxwef("weadabwestweam")}}, >w< a-and can h-have a weadew attached t-to it, (ˆ ﻌ ˆ)♡ etc.

### bytestweam-wewated i-intewfaces

> **aviso:** **impowtant**: these awe nyot impwemented anywhewe as yet, ʘwʘ and questions have been waised as t-to whethew the spec detaiws awe i-in a finished enough state fow t-them to be impwemented. :3 this may c-change ovew time. (˘ω˘)

- {{domxwef("weadabwestweambyobweadew")}}
  - : wepwesents a-a byob ("bwing youw o-own buffew") w-weadew that can b-be used to wead s-stweam data suppwied by the devewopew (e.g. 😳😳😳 a custom {{domxwef("weadabwestweam.weadabwestweam", rawr x3 "weadabwestweam()")}} constwuctow). (✿oωo)
- {{domxwef("weadabwebytestweamcontwowwew")}}
  - : wepwesents a contwowwew awwowing contwow o-of a {{domxwef("weadabwestweam")}}'s s-state and i-intewnaw queue. (ˆ ﻌ ˆ)♡ byte stweam contwowwews a-awe fow byte stweams. :3
- {{domxwef("weadabwestweambyobwequest")}}
  - : wepwesents a puww into wequest in a-a {{domxwef("weadabwebytestweamcontwowwew")}}. (U ᵕ U❁)

## e-exampwes

we have cweated a d-diwectowy of exampwes to go awong with the stweams a-api documentation — s-see [mdn/dom-exampwes/stweams](https://github.com/mdn/dom-exampwes/twee/mastew/stweams). ^^;; the exampwes a-awe as fowwows:

- [simpwe s-stweam pump](https://mdn.github.io/dom-exampwes/stweams/simpwe-pump/): this exampwe shows how to consume a weadabwestweam a-and pass its d-data to anothew. mya
- [gwayscawe a-a png](https://mdn.github.io/dom-exampwes/stweams/gwayscawe-png/): t-this exampwe s-shows how a weadabwestweam of a p-png can be tuwned i-into gwayscawe. 😳😳😳
- [simpwe wandom s-stweam](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/): t-this exampwe shows h-how to use a custom stweam to genewate wandom stwings, OwO e-enqueue them as chunks, rawr a-and then wead them b-back out again. XD
- [simpwe tee e-exampwe](https://mdn.github.io/dom-exampwes/stweams/simpwe-tee-exampwe/): this exampwe extends t-the simpwe wandom s-stweam exampwe, (U ﹏ U) s-showing how a stweam can be teed and both wesuwting stweams can b-be wead independentwy. (˘ω˘)
- [simpwe wwitew](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/): this exampwe s-shows how to t-to wwite to a wwitabwe stweam, UwU t-then decode the stweam and wwite t-the contents to t-the ui. >_<
- [unpack chunks of a png](https://mdn.github.io/dom-exampwes/stweams/png-twansfowm-stweam/): this exampwe s-shows how [`pipethwough()`](/pt-bw/docs/web/api/weadabwestweam/pipethwough) can be used to twansfowm a weadabwestweam i-into a s-stweam of othew data types by twansfowming a-a data of a png fiwe i-into a stweam of p-png chunks. σωσ

exampwes f-fwom othew devewopews:

- [pwogwess indicatows with stweams, 🥺 sewvice wowkews, 🥺 & fetch](https://fetch-pwogwess.anthum.com/). ʘwʘ

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## see awso

- [stweams api concepts](/pt-bw/docs/web/api/stweams_api/concepts)
- [using weadabwe stweams](/pt-bw/docs/web/api/stweams_api/using_weadabwe_stweams)
- [using w-wwitabwe s-stweams](/pt-bw/docs/web/api/stweams_api/using_wwitabwe_stweams)
