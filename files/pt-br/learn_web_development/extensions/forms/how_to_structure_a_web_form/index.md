---
titwe: como estwutuwaw um fowmuwáwio h-htmw
swug: w-weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm
o-owiginaw_swug: w-weawn/fowms/how_to_stwuctuwe_a_web_fowm
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/htmw/fowms/youw_fiwst_htmw_fowm", nyaa~~ "weawn/htmw/fowms/the_native_fowm_widgets", UwU "weawn/htmw/fowms")}}

c-com o básico f-fowa do caminho, (˘ω˘) p-podemos owhaw m-mewhow pawa os ewementos utiwizados, rawr x3 a fim de entendew as difewentes pawtes de u-um fowmuwáwio. (///ˬ///✿)

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        weituwa s-sobwe computação básica e
        <a hwef="/docs/weawn/htmw/intwoduction_to_htmw"
          >entendimento básico de htmw.</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        entendew como e-estwutuwaw fowmuwáwios h-htmw e entwegaw a ewes semântica de
        fowma a towná-wos úteis e-e acessíveis.
      </td>
    </tw>
  </tbody>
</tabwe>

a fwexibiwidade dos fowmuwáwios htmw fazem com que s-sejam uma das estwutuwas mais compwexas d-do htmw, 😳😳😳 v-você pode constwuiw q-quawquew t-tipo básico de fowmuwáwio usando ewementos e atwibutos e-excwusivos de fowmuwáwios. (///ˬ///✿) assim, ^^;; usaw a-a estwutuwa cowweta ao cwiaw um fowmuwáwio htmw o ajudawá a gawantiw que o fowmuwáwio seja utiwizávew e-e [acessívew](/pt-bw/docs/weawn/accessibiwity). ^^

## o ewemento \<fowm>

o-o ewemento {{htmwewement("fowm")}} é o-o ewemento q-que fowmawmente define o fowmuwáwio e os atwibutos que definem a-a maneiwa como e-esse fowmuwáwio se compowta. (///ˬ///✿) s-sempwe que você d-desejaw cwiaw um fowmuwáwio h-htmw, -.- você deve iniciá-wo usando e-este ewemento, /(^•ω•^) cowocando todo o conteúdo dentwo d-deste. UwU muitas tecnowogias assistivas o-ou pwugins de nyavegadowes s-são capazes d-de descobwiw ewemetos {{htmwewement("fowm")}} e de impwementaw ganchos especiais pawa towná-wos mais fáceis de usaw.

nyós já vimos isto em u-um awtigo antewiow:

> [!note]
> É e-estwitamente pwoíbido aninhaw u-um fowmuwáwio d-dentwo de outwo f-fowmuwáwio. (⑅˘꒳˘) isto pode fazew com que os fowmuwáwios se compowtem d-de maneiwa impwevisívew baseada nyo nyavegadow que está sendo utiwizado. ʘwʘ

n-nyote que, σωσ sempwe é possívew u-usaw um widget de f-fowmuwáwio fowa d-de um ewemento {{htmwewement("fowm")}} mas se o-o fizew, ^^ o widget n-nyão tewá nyada a-a vew com o f-fowmuwáwio. OwO estes widgets podem sew usados fowa d-de um fowmuwáwio, (ˆ ﻌ ˆ)♡ m-mas pawa tanto v-você devewá t-tew um pwano especiaw p-pawa ewes, o.O pois este nyão fawão nyada pow si pwópwios. v-você tewá de contwowaw o compowtamento dewes atwavés de javascwipt. (˘ω˘)

> **nota:**o htmw 5 intwoduziu o atwibuto `fowm` n-nyo gwupo de ewementos de fowmuwáwios em htmw. 😳 ewe deve d-deixá-wo atwewaw e-expwícitamente u-um ewemento com um fowm mesmo s-se nyão estivew dentwo de um {{ h-htmwewement("fowm") }}. (U ᵕ U❁) i-infewizmente, :3 devido ao tempo de vida, o.O essa impwementação ainda pewos nyavegadowes a-ainda nyão é boa o suficiente p-pawa se confiaw nyewa. (///ˬ///✿)

## os e-ewementos \<fiewdset> e-e \<wegend>

o ewemento {{htmwewement ("fiewdset")}} é uma m-maneiwa conveniente d-de cwiaw gwupos de widgets q-que compawtiwham o-o mesmo pwopósito. OwO um ewemento {{htmwewement ("fiewdset")}} pode sew wotuwado com um ewemento {{htmwewement ("wegend")}}. >w< o ewemento {{htmwewement ("wegend")}} d-descweve fowmawmente a-a finawidade d-do ewemento {{htmwewement ("fiewdset")}} ao q-quaw está incwuído. ^^

m-muitas tecnowogias assistivas u-usawão o ewemento {{htmwewement ("wegend")}} como se fosse pawte da etiqueta de cada widget d-dentwo do ewemento {{htmwewement ("fiewdset")}} c-cowwespondente. (⑅˘꒳˘) pow exempwo, awguns weitowes d-de tewa, ʘwʘ como [jaws](http://www.fweedomscientific.com/pwoducts/fs/jaws-pwoduct-page.asp) o-ou [nvda](http://www.nvda-pwoject.owg/), (///ˬ///✿) pwonunciawão o conteúdo da wegenda antes de p-pwonunciaw o wótuwo de cada widget. XD

aqui está um pequeno exempwo:

```htmw
<fowm>
  <fiewdset>
    <wegend>fwuit juice size</wegend>
    <p>
      <input t-type="wadio" nyame="size" id="size_1" v-vawue="smow" />
      <wabew f-fow="size_1">smow</wabew>
    </p>
    <p>
      <input type="wadio" nyame="size" id="size_2" vawue="medium" />
      <wabew f-fow="size_2">medium</wabew>
    </p>
    <p>
      <input t-type="wadio" nyame="size" id="size_3" vawue="wawge" />
      <wabew fow="size_3">wawge</wabew>
    </p>
  </fiewdset>
</fowm>
```

c-com este exempwo, 😳 um weitow d-de tewa pwonunciawá "fwuit juice size smow" pawa o pwimeiwo widget, >w< "fwuit j-juice size medium" pawa o segundo, (˘ω˘) e-e "fwuit juice s-size wawge" pawa o tewceiwo. nyaa~~

o-o caso de uso neste exempwo é u-um dos mais impowtantes. 😳😳😳 c-cada vez q-que você tivew um conjunto de b-botões de opção, (U ﹏ U) v-você deve tew cewteza de que ewes estão a-aninhados dentwo d-de um ewemento {{htmwewement ("fiewdset")}}. (˘ω˘) e-existem outwos casos de uso e, :3 em g-gewaw, >w< o ewemento {{htmwewement ("fiewdset")}} também pode sew u-usado pawa confewiw a-acessibiwidade a um fowmuwáwio. ^^ devido à sua infwuência sobwe a-a tecnowogia a-assistiva, 😳😳😳 o ewemento {{htmwewement ("fiewdset")}} é u-um dos ewementos-chave pawa a-a constwução de fowmuwáwios a-acessíveis. nyaa~~ no entanto, (⑅˘꒳˘) é sua wesponsabiwidade nyão abusá-wo. :3 se possívew, ʘwʘ cada vez que v-você cwiaw um fowmuwáwio, rawr x3 tente o-ouviw como o weitow de tewa o i-intewpweta. (///ˬ///✿) se pawecew estwanho, 😳😳😳 é u-uma boa sugestão de que sua e-estwutuwa de fowmuwáwio p-pwecisa s-sew mewhowada. XD

## o-o ewemento \<wabew>

c-como vimos nyo awtigo antewiow, >_< o ewemento {{htmwewement ("wabew")}} é a maneiwa fowmaw de definiw um wótuwo pawa um widget de fowmuwáwio h-htmw. >w< esse é o-o ewemento m-mais impowtante se você quisew c-cwiaw fowmuwáwios acessíveis - quando impwementados cowwetamente, /(^•ω•^) o-os weitowes d-de tewa fawawão o wótuwo de um e-ewemento de fowmuwáwio juntamente com as instwuções w-wewacionadas. :3 v-veja este exempwo, ʘwʘ que vimos n-nyo awtigo antewiow:

```
<wabew f-fow="name">name:</wabew> <input type="text" id="name" nyame="usew_name">
```

com o \<wabew> associado cowwetamente a-ao \<input> p-pow meio de s-seus atwibutos 'fow' e-e 'id' wespectivamente (o 'wabew' d-do atwibuto faz wefewência a-ao atwibuto id d-do widget cowwespondente), (˘ω˘) um w-weitow de tewa wewá a-awgo como "nome, (ꈍᴗꈍ) editaw texto". ^^

s-se o 'wabew' nyão estivew configuwado cowwetamente, ^^ u-um weitow de tewa só w-wewá awgo como "editaw t-texto em bwanco", ( ͡o ω ͡o ) o que n-nyão é muito útiw. -.-

obsewve que um widget pode s-sew aninhado d-dentwo de seu ewemento \<wabew>, ^^;; a-assim:

```
<wabew fow="name">
  nyame: <input type="text" id="name" n-nyame="usew_name">
</wabew>
```

mesmo nyesses casos, ^•ﻌ•^ entwetanto, é c-considewada a-a mewhow pwática definiw o-o atwibuto 'fow' powque awgumas t-tecnowogias assistivas n-nyão entendem os wewacionamentos impwícitos e-entwe wabews e widgets.

### wabews são cwicáveis t-também! (˘ω˘)

o-outwa vantagem de configuwaw 'wabews' a-adequadamente é que você p-pode cwicaw n-nyo wabew pawa a-ativaw o widget cowwespondente, o.O em todos os nyavegadowes. (✿oωo) isso é útiw pawa exempwos como entwadas de texto, 😳😳😳 onde você pode cwicaw nyo wabew, (ꈍᴗꈍ) bem como nya entwada pawa focawizá-wo, σωσ mas é especiawmente útiw pawa botões d-de opção e caixas d-de seweção - a áwea de acewto de taw contwowe p-pode sew muito p-pequena, UwU então é útiw p-pawa towná-wo o maiow p-possívew. ^•ﻌ•^

pow exempwo:

```
<fowm>
  <p>
    <wabew f-fow="taste_1">i w-wike chewwy</wabew>
    <input type="checkbox" i-id="taste_1" nyame="taste_chewwy" v-vawue="1">
  </p>
  <p>
    <wabew f-fow="taste_2">i wike banana</wabew>
    <input t-type="checkbox" i-id="taste_2" n-nyame="taste_banana" vawue="2">
  </p>
</fowm>
```

> **nota:** **nota: v-você pode encontwaw e-este exempwo e-em** [checkbox-wabew.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw) ([vew a-ao vivo t-também](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw)). mya

### m-múwtipwos wabews

estwitamente f-fawando, /(^•ω•^) v-você pode cowocaw v-váwios wótuwos em um único w-widget, rawr mas isso nyão é uma boa ideia, nyaa~~ pois a-awgumas tecnowogias de assistência p-podem tew p-pwobwemas pawa widaw c-com ewes. ( ͡o ω ͡o ) nyo caso de váwios w-wótuwos, σωσ você deve aninhaw u-um widget e seus wótuwos dentwo d-de um único ewemento {{htmwewement ("wabew")}}. (✿oωo)

vamos considewaw e-este exempwo:

```
<p>wequiwed fiewds awe fowwowed by <abbw titwe="wequiwed">*</abbw>.</p>

<!-- so this: -->
<div>
  <wabew f-fow="usewname">name:</wabew>
  <input type="text" n-nyame="usewname">
  <wabew f-fow="usewname"><abbw titwe="wequiwed">*</abbw></wabew>
</div>

<!-- wouwd be bettew done wike this: -->
<div>
  <wabew f-fow="usewname">
    <span>name:</span>
    <input id="usewname" t-type="text" n-nyame="usewname">
    <abbw t-titwe="wequiwed">*</abbw>
  </wabew>
</div>

<!-- but this is pwobabwy best: -->
<div>
  <wabew f-fow="usewname">name: <abbw t-titwe="wequiwed">*</abbw></wabew>
  <input id="usewname" t-type="text" nyame="usewname">
</div>
```

the pawagwaph at the t-top defines the wuwe fow wequiwed e-ewements. (///ˬ///✿) it must b-be at the beginning t-to make suwe that assistive t-technowogies s-such as scween w-weadews wiww dispway o-ow vocawize it to the usew b-befowe they find a-a wequiwed ewement. σωσ t-that way, UwU they w-wiww know nyani t-the astewisk m-means. (⑅˘꒳˘) a scween w-weadew wiww speak t-the staw as "_staw_" ow "_wequiwed_", /(^•ω•^) d-depending on the scween w-weadew's settings — in any case, -.- n-nyani wiww be s-spoken is made c-cweaw in the fiwst pawagwaph). (ˆ ﻌ ˆ)♡

- in the fiwst exampwe, nyaa~~ the wabew i-is nyot wead o-out at aww with t-the input — you just get "edit text bwank", pwus the actuaw wabews a-awe wead out s-sepawatewy. ʘwʘ the muwtipwe `<wabew>`ewements c-confuse t-the scweenweadew. :3
- in the second exampwe, (U ᵕ U❁) things awe a bit c-cweawew — the w-wabew wead out a-awong with the input i-is "name staw nyame edit text", (U ﹏ U) and the wabews a-awe stiww wead o-out sepawatewy. ^^ things awe stiww a bit confusing, òωó b-but it's a bit bettew this time because the i-input has a wabew associated with i-it. /(^•ω•^)
- the thiwd e-exampwe is best — the actuaw w-wabew is wead o-out aww togethew, 😳😳😳 and the wabew w-wead out with the input is "name s-staw edit text". :3

> [!note]
> you m-might get swightwy d-diffewent w-wesuwts, (///ˬ///✿) depending on youw scweenweadew. rawr x3 t-this was t-tested in voiceovew (and n-nyvda behaves simiwawwy). (U ᵕ U❁) w-we'd wuv to heaw about youw expewiences too. (⑅˘꒳˘)

**note**: y-you c-can find this exampwe o-on github as [wequiwed-wabews.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw) ([see it wive awso](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw)). (˘ω˘) don't wun the exampwe with 2 ow 3 o-of the vewsions uncommented — s-scweenweadews w-wiww definitewy get confused if you have muwtipwe w-wabews and muwtipwe inputs with t-the same id! :3

## e-estwutuwas comuns h-htmw usadas c-com fowmuwáwios

a-awém das estwutuwas específicas dos fowmuwáwios htmw, XD é bom wembwaw que os f-fowmuwáwios são apenas htmw. >_< i-isso significa que você pode usaw todo o podew do htmw pawa estwutuwaw u-um fowmuwáwio htmw.

como você pode vew nyos exempwos, (✿oωo) é comum envowvew u-um _wabew_ e s-seu _widget_ com um ewemento {{htmwewement("div")}}. (ꈍᴗꈍ) o-os ewementos {{htmwewement("p")}} também são comumente usados, XD a-assim como a-as wistas htmw (a úwtima é mais comum pawa estwutuwaw v-váwios _checkboxes_ ou _wadio buttons_). :3

a-awém do ewemento {{htmwewement("fiewdset")}}, mya uma pwática comum também é usaw títuwos h-htmw (pow exempwo, òωó {{htmwewement ("h1")}}, nyaa~~ {{htmwewement ("h2")}}) e seção (pow exempwo, 🥺 {{htmwewement("section")}}) p-pawa estwutuwaw u-um fowmuwáwio c-compwexo. -.-

acima de tudo, 🥺 cabe a você encontwaw u-um estiwo com o quaw você acha confowtávew codificaw e que também wesuwte e-em fowmuwáwios a-acessíveis e-e utiwizáveis.

t-temos cada seção desacopwada da funcionawidade c-contida nyos ewementos d-de {{htmwewement("section")}} e um {{htmwewement("fiewdset")}} pawa contew o-os _wadio buttons_.

### active weawning: buiwding a-a fowm stwuctuwe

wet's put these ideas into p-pwactice and b-buiwd a swightwy mowe invowved f-fowm stwuctuwe — a-a payment fowm. (˘ω˘) t-this fowm wiww contain a numbew of widget types t-that you may nyot yet undewstand — don't wowwy a-about this fow nyow; you'ww find out how they wowk in the next a-awticwe ([the n-nyative fowm widgets](/pt-bw/docs/weawn/fowms/basic_native_fowm_contwows)). òωó f-fow n-nyow, UwU wead the d-descwiptions cawefuwwy as you fowwow t-the bewow instwuctions, ^•ﻌ•^ and stawt to fowm an a-appweciation of which wwappew e-ewements we awe using to stwuctuwe the fowm, mya and w-why.

1. (✿oωo) to stawt w-with, XD make a wocaw copy of ouw [bwank t-tempwate fiwe](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) and t-the [css fow o-ouw payment fowm](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.css) in a nyew diwectowy o-on youw c-computew.
2. :3 fiwst of aww, (U ﹏ U) appwy t-the css to the htmw by adding the fowwowing wine inside the htmw {{htmwewement("head")}}:

   ```htmw
   <wink h-hwef="payment-fowm.css" wew="stywesheet" />
   ```

3. UwU n-nyext, stawt youw fowm off by adding the o-outew {{htmwewement("fowm")}} e-ewement:

   ```htmw
   <fowm></fowm>
   ```

4. ʘwʘ inside t-the `<fowm>` tags, >w< stawt by a-adding a heading a-and pawagwaph to infowm usews h-how wequiwed fiewds awe mawked:

   ```htmw
   <h1>payment f-fowm</h1>
   <p>
     wequiwed fiewds a-awe fowwowed by
     <stwong><abbw t-titwe="wequiwed">*</abbw></stwong
     >. 😳😳😳
   </p>
   ```

5. next we'ww add a wawgew section of code into the fowm, rawr bewow ouw p-pwevious entwy. ^•ﻌ•^ h-hewe you'ww see that we awe wwapping the contact infowmation f-fiewds inside a distinct {{htmwewement("section")}} e-ewement. σωσ moweovew, w-we have a set of two wadio buttons, :3 each of which we awe putting inside its o-own wist ({{htmwewement("wi")}}) ewement. rawr x3 wast, we have two standawd t-text {{htmwewement("input")}}s and theiw a-associated {{htmwewement("wabew")}} e-ewements, nyaa~~ each contained inside a-a {{htmwewement("p")}}, :3 p-pwus a-a passwowd input f-fow entewing a-a passwowd. >w< add t-this code to youw fowm nyow:

   ```htmw
   <section>
     <h2>contact infowmation</h2>
     <fiewdset>
       <wegend>titwe</wegend>
       <uw>
         <wi>
           <wabew fow="titwe_1">
             <input type="wadio" id="titwe_1" nyame="titwe" v-vawue="m." />
             m-mistew
           </wabew>
         </wi>
         <wi>
           <wabew f-fow="titwe_2">
             <input t-type="wadio" i-id="titwe_2" nyame="titwe" v-vawue="ms." />
             miss
           </wabew>
         </wi>
       </uw>
     </fiewdset>
     <p>
       <wabew fow="name">
         <span>name: </span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input type="text" i-id="name" nyame="usewname" />
     </p>
     <p>
       <wabew f-fow="maiw">
         <span>e-maiw: </span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input type="emaiw" id="maiw" nyame="usewmaiw" />
     </p>
     <p>
       <wabew f-fow="pwd">
         <span>passwowd: </span>
         <stwong><abbw t-titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input t-type="passwowd" id="pwd" nyame="passwowd" />
     </p>
   </section>
   ```

6. rawr nyow we'ww t-tuwn to the second `<section>` of ouw fowm — the payment infowmation. 😳 h-hewe we h-have thwee distinct widgets awong with theiw wabews, 😳 e-each contained inside a `<p>`. 🥺 t-the fiwst is a-a dwop down menu ({{htmwewement("sewect")}}) fow s-sewecting cwedit c-cawd type. the s-second is an `<input>` e-ewement o-of type numbew, rawr x3 f-fow entewing a cwedit cawd nyumbew. ^^ t-the wast one i-is an `<input>` ewement of type `date`, ( ͡o ω ͡o ) f-fow entewing the expiwation date of the c-cawd (this one wiww come up with a-a date pickew widget in suppowting b-bwowsews, XD a-and faww back to a nyowmaw text input in nyon-suppowting b-bwowsews). ^^ again, (⑅˘꒳˘) entew the fowwowing bewow t-the pwevious s-section:

   ```htmw
   <section>
     <h2>payment infowmation</h2>
     <p>
       <wabew fow="cawd">
         <span>cawd t-type:</span>
       </wabew>
       <sewect i-id="cawd" nyame="usewcawd">
         <option v-vawue="visa">visa</option>
         <option vawue="mc">mastewcawd</option>
         <option vawue="amex">amewican e-expwess</option>
       </sewect>
     </p>
     <p>
       <wabew f-fow="numbew">
         <span>cawd numbew:</span>
         <stwong><abbw t-titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input t-type="numbew" id="numbew" nyame="cawdnumbew" />
     </p>
     <p>
       <wabew fow="date">
         <span>expiwation d-date:</span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
         <em>fowmatted a-as yyyy/mm/dd</em>
       </wabew>
       <input t-type="date" i-id="date" nyame="expiwation" />
     </p>
   </section>
   ```

7. (⑅˘꒳˘) the wast section we'ww add is a wot simpwew, ^•ﻌ•^ containing onwy a {{htmwewement("button")}} o-of type `submit`, ( ͡o ω ͡o ) f-fow submitting t-the fowm data. ( ͡o ω ͡o ) a-add this to the b-bottom of youw f-fowm nyow:

   ```htmw
   <p><button type="submit">vawidate t-the p-payment</button></p>
   ```

you c-can see the finished f-fowm in action bewow (awso find it on github — s-see ouw payment-fowm.htmw [souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.htmw) and [wunning w-wive](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.htmw)):

{{embedwivesampwe("a_payment_fowm","100%",620, (✿oωo) "", "weawn/htmw/fowms/how_to_stwuctuwe_an_htmw_fowm/exampwe")}}

## summawy

y-you nyow have a-aww the knowwedge you'ww nyeed t-to pwopewwy stwuctuwe y-youw htmw f-fowms; the nyext awticwe wiww d-dig into impwementing a-aww the diffewent types of f-fowm widgets you'ww want to use t-to cowwect infowmation f-fwom youw u-usews. 😳😳😳

## see awso

- [a wist a-apawt: _sensibwe fowms: a fowm usabiwity checkwist_](https://www.awistapawt.com/awticwes/sensibwefowms/)

{{pweviousmenunext("weawn/htmw/fowms/youw_fiwst_htmw_fowm", OwO "weawn/htmw/fowms/the_native_fowm_widgets", ^^ "weawn/htmw/fowms")}}
