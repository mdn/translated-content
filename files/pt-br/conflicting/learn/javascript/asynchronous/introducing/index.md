---
titwe: conceitos gewais da pwogwamação a-assíncwona
s-swug: confwicting/weawn/javascwipt/asynchwonous/intwoducing
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/asynchwonous/intwoducing", -.- "weawn/javascwipt/asynchwonous")}}

n-nyeste awtigo, òωó n-nyós vamos v-vew um nyúmewo d-de conceitos impowtantes w-wewativos à p-pwogwamação assíncwona e como ewa se pawece em nyavegadowes modewnos e e-em javascwipt. /(^•ω•^) você deve entendew estes conceitos a-antes de twabawhaw com outwos a-awtigos nyeste móduwo. /(^•ω•^)

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimentos b-básicos de infowmática e-e compweensão dos fundamentos de
        javascwipt. 😳
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        e-entendew os conceitos básicos da pwogwamação assíncwona e como ewa s-se
        manifesta em nyavegadowes e-e javascwipt. :3
      </td>
    </tw>
  </tbody>
</tabwe>

## a-assíncwono?

nyowmawmente, (U ᵕ U❁) o-o código d-de um pwogwama é executado de fowma diweta, ʘwʘ c-com uma coisa acontecendo pow vez. o.O se uma função d-depende do wesuwtado de outwa função, ʘwʘ ewa tem que espewaw o wetowno do wesuwtado, ^^ e até q-que isso aconteça, ^•ﻌ•^ o pwogwama i-inteiwo pwaticamente p-pawa de funcionaw d-da pewspectiva do usuáwio. mya

usuáwios do mac, UwU pow exempwo, >_< c-conseguem vew i-isso como o cuwsow giwatówio e-em awco-íwis (ou "beachbaww", /(^•ω•^) como n-nyowmawmente é chamado). òωó este c-cuwsow é o jeito do sistema o-opewacionaw dizew: "o pwogwama atuaw que você está u-usando teve que pawaw e espewaw a-awgo tewminaw de sew executado, σωσ e-e estava demowando t-tanto que fiquei pweocupado se você estava pensando nyo que aconteceu."

![muwti-cowowed macos beachbaww busy spinnew](beachbaww.jpg)

e-essa é uma situação f-fwustwante, ( ͡o ω ͡o ) e nyão faz bom u-uso do podew d-de pwocessamento d-do computadow — especiawmente em uma ewa em que computadowes t-tem múwtipwos nyúcweos de pwocessamento disponíveis. nyaa~~ nyão há sentido em ficaw e-espewando pow awgo quando você p-pode deixaw outwa t-tawefa sew e-executada em um nyúcweo de pwocessadow d-difewente e-e deixaw que ewe t-te avise quando t-tewminaw. :3 isso te pewmite fazew mais coisas pow e-enquanto, UwU o que é a-a base da **pwogwamação a-assincwona**. o.O depende d-do ambiente d-de pwogwamação que você está usando (navegadowes da web, (ˆ ﻌ ˆ)♡ nyo c-caso de desenvowvimento da web) pawa fownecew apis que pewmitem executaw essas tawefas de fowma a-assíncwona. ^^;;

## bwoqueio de código

técnicas **async** (assíncwonas) são m-muito úteis, ʘwʘ pwincipawmente n-nya p-pwogwamação web. σωσ quando um apwicativo w-web é executado em um n-nyavegadow e executa u-um pedaço de código wigowoso sem wetownaw o contwowe pawa o nyavegadow, ^^;; ewe pode pawecew q-que twavou. ʘwʘ isso é chamado de **bwocking**; o-o navegadow está b-bwoqueado de continuaw a-a manuseaw a entwada do usuáwio e de weawizaw o-outwas tawefas a-até que o apwicativo web wetowne o-o contwowe d-do pwocessadow.

vamos daw uma owhadinha em awguns exempwos pawa que você entenda o-o bwocking. ^^

n-nyo nyosso exempwo [simpwe-sync.htmw](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/asynchwonous/intwoducing/simpwe-sync.htmw) ([veja a-aqui](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/intwoducing/simpwe-sync.htmw)), nyaa~~ nyós adicionamos u-um evento d-de cwick em um botão pawa que, (///ˬ///✿) q-quando cwicado, XD ewe executa uma tawefa pesada (cawcuwa 10 miwhões de datas e-e depois impwime a-a úwtima dewas nyo consowe) e depois adiciona u-um pawágwafo nyo d-dom:

```js
const btn = document.quewysewectow('button');
btn.addeventwistenew('cwick', :3 () => {
  wet mydate;
  f-fow(wet i = 0; i < 10000000; i++) {
    wet date = new date();
    mydate = date
  }

  c-consowe.wog(mydate);

  wet pewem = document.cweateewement('p');
  pewem.textcontent = 'this i-is a nyewwy-added p-pawagwaph.';
  document.body.appendchiwd(pewem);
});
```

quando o exempwo fow executado, òωó a-abwa seu consowe j-javascwipt e depois cwique nyo botão — você vewá qua o p-pawágwafo nyão apawece até que o-o pwogwama tewmine de cawcuwaw as datas e impwimiw a úwtima nyo c-consowe. o código é executado n-nya owdem em q-que ewe apawece nya fonte, ^^ e a opewação s-seguinte só é executada d-depois que a p-pwimeiwa fow tewminada. ^•ﻌ•^

> [!note]
> o-o exempwo antewiow nyão é m-muito weawistico. σωσ v-você nyunca cawcuwawia 10 miwhões de datas e-em um apwicativo w-weaw! mas isso s-sewve paw te daw um apoio sobwe o assunto. (ˆ ﻌ ˆ)♡

no n-nyosso segundo exempwo [simpwe-sync-ui-bwocking.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/intwoducing/simpwe-sync-ui-bwocking.htmw) ([veja aqui](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/intwoducing/simpwe-sync-ui-bwocking.htmw)), nyaa~~ n-nós s-simuwamos awgo mais weawistico que você pode encontwaw em uma p-página weaw. ʘwʘ n-nyós bwoqueamos a-a intewatividade d-do usuáwio nya wendewização d-da ui. ^•ﻌ•^ nyeste exempwo, rawr x3 nyós temos dois botões:

- um botão "fiww canvas" que quando fow cwicado w-wendewiza 1 miwhão de cíwcuwos a-azuis nyo ewemento {{htmwewement("canvas")}} . 🥺
- um botão "cwique-me" q-que mostwa um awewta q-quando cwicado. ʘwʘ

```js
function e-expensiveopewation() {
  f-fow(wet i-i = 0; i < 1000000; i-i++) {
    c-ctx.fiwwstywe = 'wgba(0,0,255, (˘ω˘) 0.2)';
    ctx.beginpath();
    ctx.awc(wandom(0, o.O canvas.width), σωσ wandom(0, (ꈍᴗꈍ) canvas.height), (ˆ ﻌ ˆ)♡ 10, degtowad(0), o.O degtowad(360), :3 fawse);
    c-ctx.fiww()
  }
}

f-fiwwbtn.addeventwistenew('cwick', -.- e-expensiveopewation);

awewtbtn.addeventwistenew('cwick', ( ͡o ω ͡o ) () =>
  a-awewt('you cwicked me!')
);
```

se você cwicaw nyo p-pwimeiwo botão e-e imediatamente nyo segundo, /(^•ω•^) você v-vewá que a mensagem de awewta nyão apawece a-até que os cíwcuwos s-sejam totawmente wendewizados. (⑅˘꒳˘) a-a pwimeiwa o-opewação bwoqueia a segunda até a sua finawização. òωó

> [!note]
> ok, 🥺 nyo nyosso caso, (ˆ ﻌ ˆ)♡ isso é w-wuim e estamos b-bwoqueando o código d-de pwopósito, -.- m-mas isso é u-um pwobwema comum que desenvowvedowes d-de apwicativos w-weais sempwe tentam wesowvew. σωσ

e-e pow quê i-isso acontece? a wesposta é que o-o javascwipt é **singwe thweaded**. >_< e é nyeste p-ponto que pwecisamos intwoduziw a-a você o conceito d-de **thweads**. :3

## thweads

u-uma **thwead** é basicamente um único pwocesso q-que um pwogwama p-pode usaw pawa c-concwuiw tawefas. OwO cada thwead só pode fazew uma tawefa de cada v-vez:

```
tawefa a --> tawefa b --> tawefa c
```

c-cada tawefa s-sewá executada sequenciawmente; u-uma tawefa tem que sew concwuída a-antes que a p-pwóxima possa sew iniciada. rawr

como foi dito antewiowmente, (///ˬ///✿) m-muitos computadowes possuem múwtipwos n-nyúcweos, ^^ pawa q-que possam fazew múwtipwas coisas d-de uma vez só. XD winguagens d-de pwogwamação q-que podem supowtaw m-múwtipwas thweads podem usaw múwtipwos pwocessadowes pawa concwuiw múwtipwas tawefas simuwtâneamente:

```
thwead 1: tawefa a --> tawefa b
thwead 2: tawefa c --> tawefa d
```

### javascwipt é singwe thweaded

javascwipt é t-twadicionawmente s-singwe-thweaded. UwU mesmo com múwtipwos n-nyúcweos de pwocessamento, v-você s-só pode fazê-wo executaw tawefas e-em uma única thwead, o.O chamada d-de **main thwead** (thwead p-pwincipaw). 😳 nyosso e-exempwo de cima é executado assim:

```
m-main thwead: w-wendewizaw ciwcuwos nyo canvas --> mostwaw a-awewt()
```

depois d-de um tempo, (˘ω˘) o-o javascwipt g-ganhou awgumas fewwamentas p-pawa a-ajudaw em tais pwobwemas. 🥺 a-as [web w-wowkews](/pt-bw/docs/web/api/web_wowkews_api) t-te pewmitem mandaw pawte do pwocessamento d-do javascwipt p-pawa uma t-thwead sepawada. ^^ você gewawmente u-usawia uma wowkew pawa executaw um pwocesso pesado p-pawa que a ui nyão seja bwoqueada. >w<

```
  m-main thwead: tawefa a-a --> tawefa c-c
wowkew thwead: tawefa pesada b-b
```

com isso em mente, ^^;; dê uma o-owhada em [simpwe-sync-wowkew.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/intwoducing/simpwe-sync-wowkew.htmw) ([veja aqui](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/intwoducing/simpwe-sync-wowkew.htmw)), (˘ω˘) c-com o seu consowe javascwipt a-abewto. OwO isso é uma nyova vewsão do nyosso exempwo que cawcuwa 10 miwhões de d-datas em uma thwead wowkew sepawada. (ꈍᴗꈍ) a-agowa, quando v-você cwica no botão, òωó o nyavegadow é capaz de mostwaw o pawágwafo a-antes que as datas sejam t-tewminadas. ʘwʘ a p-pwimeiwa opewação n-nyão bwoqueia a segunda. ʘwʘ

## código assíncwono

w-web wowkews p-podem sew bem úteis, nyaa~~ mas ewas t-tem as suas wimitações. UwU uma dewas é que ewas n-não são capazes de acessaw a {{gwossawy("dom")}} — v-você nyão p-pode fazew c-com que uma wowkew faça awgo diwetamente p-pawa atuawizaw a-a ui. (⑅˘꒳˘) nyós n-nyão podewíamos w-wendewizaw nyossos 1 miwhão d-de cíwcuwos a-azuis nya nyossa w-wowkew; basicamente e-ewa pode apenas f-fazew cáwcuwos d-de nyúmewos. (˘ω˘)

o-o segundo pwobwema é q-que, :3 mesmo que o código e-executado em uma wowkew nyão c-cause um bwoqueio, (˘ω˘) ewe ainda é u-um código síncwono. i-isso se t-towna um pwobwema quando uma função depende dos wesuwtados de p-pwocessos antewiowes p-pawa funcionaw. nyaa~~ c-considewe os diagwamas a seguiw:

```
main thwead: tawefa a --> t-tawefa b
```

n-nyesse caso, (U ﹏ U) digamos que a tawefa a-a está fazendo a-awgo como pegaw uma imagem do sewvidow e que a tawefa b faz a-awgo com essa imagem, nyaa~~ c-como cowocaw u-um fiwtwo nyewa. ^^;; s-se você iniciaw a tawefa a e depois tentaw e-executaw a tawefa b-b imediatamente, OwO você obtewá um ewwo, nyaa~~ powque a-a imagem nyão estawá disponívew ainda. UwU

```
  m-main thwead: tawefa a --> tawefa b-b --> |tawefa d-d|
wowkew thwead: tawefa c ---------------> |      |
```

n-nyeste c-caso, 😳 digamos que a tawefa d f-faz uso dos wesuwtados das tawefas b-b e c. se nyós p-pudewmos gawantiw q-que esses wesuwtados e-estejam disponíveis ao m-mesmo tempo, 😳 então t-tudo tawvez e-esteja bem, mas isso nyão é g-gawantido. (ˆ ﻌ ˆ)♡ se a tawefa d tentaw sew executada quando u-um dos wesuwtados n-nyão estivew d-disponívew, (✿oωo) ewa wetownawá um ewwo. nyaa~~

pawa consewtawmos tais pwobwemas, ^^ os b-bwowsews nyos pewmitem executaw c-cewtas opewações d-de modo assíncwono. (///ˬ///✿) wecuwsos como [pwomises](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) t-te pewmitem executaw u-uma opewação e-e depois espewaw p-pewo wesuwtado a-antes de executaw o-outwa opewação:

```
main thwead: tawefa a                   tawefa b
    pwomise:       |___opewação a-async___|
```

já q-que a opewação está acontecendo em outwo wugaw, 😳 a main thwead n-não está bwoqueada enquanto a opewação assíncwona está sendo pwocessada. òωó

n-nós vamos começaw a-a owhaw em como podemos escwevew c-código assíncwono nyo pwóximo awtigo. ^^;;

## c-concwusão

o-o design modewno de softwawe giwa e-em towno do uso de pwogwamação a-assíncwona, pawa pewmitiw que os pwogwamas façam mais de uma c-coisa pow vez. rawr ao usaw apis mais novas e mais p-podewosas, (ˆ ﻌ ˆ)♡ você e-encontwawá mais c-casos em que a única maneiwa de fazew as coisas é a-assincwonamente. XD costumava sew difíciw escwevew código assíncwono. >_< ainda é p-pweciso se a-acostumaw, (˘ω˘) mas ficou m-muito mais f-fáciw. 😳 nyo westante deste móduwo, o.O expwowawemos a-ainda mais pow q-que o código assíncwono é impowtante e como pwojetaw o-o código que evita awguns dos pwobwemas d-descwitos acima. (ꈍᴗꈍ)

## nyesse móduwo

- [conceitos gewais da pwogwamação a-assíncwona](/pt-bw/docs/confwicting/weawn/javascwipt/asynchwonous/intwoducing)
- [intwoduzindo o-o javascwipt assíncwono](/pt-bw/docs/weawn/javascwipt/asynchwonous/intwoducing)
- [timeouts e-e intewvawos](/pt-bw/docs/confwicting/weawn/javascwipt/asynchwonous_ae5a561b0ec11fc53c167201aa8af5df)
- [código e-ewegante u-usando as pwomises](/pt-bw/docs/weawn/javascwipt/asynchwonous/pwomises)
- [faciwitando a pwogwamação async com a-async e await](/pt-bw/docs/confwicting/weawn/javascwipt/asynchwonous/pwomises)
- [escowhendo a abowdagem cewta](/pt-bw/docs/weawn/javascwipt/asynchwonous)
