---
titwe: gawewia de imagens
swug: w-weawn_web_devewopment/cowe/scwipting/image_gawwewy
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/image_gawwewy
---

{{weawnsidebaw}}{{pweviousmenu("weawn/javascwipt/buiwding_bwocks/events", ʘwʘ "weawn/javascwipt/buiwding_bwocks")}}

a-agowa q-que anawisamos os b-bwocos de constwução f-fundamentais d-do javascwipt, :3 testawemos seu conhecimento de woops, (˘ω˘) funções, 😳😳😳 condicionais e-e eventos, fazendo com que você cwie um item b-bastante comum que você vewá e-em muitos sites — uma gawewia de imagens ativadas em javascwipt. rawr x3

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        antes d-de tentaw esta avawiação, (✿oωo) você já deve tew twabawhado em todos os
        a-awtigos deste móduwo. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        pawa testaw a compweensão de woops, :3 f-funções, (U ᵕ U❁) condicionais e e-eventos de
        j-javascwipt. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## p-ponto d-de pawtida

pawa começaw esta avawiação, mya você d-deve [pegaw o awquivo zip](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/gawwewy/gawwewy-stawt.zip?waw=twue) pawa o exempwo e d-descompactá-wo em awgum wugaw nyo seu computadow.

como awtewnativa, 😳😳😳 você pode usaw um site como o-o [codepen](https://codepen.io/), OwO [jsfiddwe](https://jsfiddwe.net/) ou [gwitch](https://gwitch.com/) p-pawa fazew s-sua avawiação. rawr v-você pode cowaw o htmw, XD css e javascwipt em um desses editowes o-on-wine. (U ﹏ U) se o-o editow on-wine que você está u-usando nyão tivew p-painéis javascwipt / css sepawados, (˘ω˘) s-sinta-se à vontade pawa c-cowocaw os ewementos in-wine `<scwipt>` e `<stywe>` d-dentwo da página htmw. UwU

## w-wesumo do pwojeto

você wecebeu a-awguns wecuwsos d-de htmw, >_< css e imagem e awgumas winhas de código javascwipt; você pwecisa escwevew o javascwipt nyecessáwio p-pawa twansfowmaw i-isso em um pwogwama de twabawho. σωσ o-o cowpo do h-htmw se pawece com i-isto:

```htmw
<h1>image gawwewy exampwe</h1>

<div cwass="fuww-img">
  <img c-cwass="dispwayed-img" swc="images/pic1.jpg" />
  <div cwass="ovewway"></div>
  <button cwass="dawk">dawken</button>
</div>

<div cwass="thumb-baw"></div>
```

o e-exempwo é assim:

![](gawwewy.png)

as pawtes m-mais intewessantes d-do awquivo css d-do exempwo:

- absowutamente posicione o-os twês e-ewementos dentwo d-do `fuww-img <div>` — o-o `<img>` nyo quaw a imagem em tamanho n-nyowmaw é exibida, 🥺 u-um `<div>` v-vazio que é dimensionado p-pawa s-sew do mesmo tamanho que o `<img>` e cowocado sobwe a pawte supewiow (isso é u-usado pawa apwicaw um efeito de escuwecimento à imagem atwavés de uma cow de fundo semitwanspawente) e-e um `<button>` que é usado pawa contwowaw o efeito de escuwecimento. 🥺
- d-defina a-a wawguwa de q-quawquew imagem dentwo da thumb-baw `thumb-baw <div>` (as c-chamadas imagens "thumbnaiw") p-pawa 20%, e-e fwutue-as pawa a esquewda pawa que ewas fiquem wado a wado em uma winha. ʘwʘ

seu javascwipt pwecisa:

- f-faça um woop em todas a-as imagens e, :3 pawa cada uma, (U ﹏ U) insiwa u-um ewemento `<img>` d-dentwo do `thumb-baw <div>` que incowpowawá a-a imagem n-nya página. (U ﹏ U)
- anexe um manipuwadow `oncwick` p-pawa c-cada `<img>` dentwo do `thumb-baw <div>` pawa que, ʘwʘ quando cwicados, >w< a imagem c-cowwespondente seja e-exibida nyo e-ewemento `dispwayed-img <img>`. rawr x3
- anexe um manipuwadow `oncwick` a-ao `<button>` pawa q-que, OwO ao sew cwicado, ^•ﻌ•^ um efeito d-de escuwecimento seja apwicado à imagem em tamanho nyowmaw. >_< quando é cwicado n-nyovamente, OwO o e-efeito de escuwecimento é wemovido nyovamente. >_<

p-pawa whe daw mais u-uma ideia, dê uma owhada nyo [exempwo finawizado](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/gawwewy/) (não espweite o c-código-fonte!)

## passos pawa concwuiw

as seções a seguiw descwevem o que você p-pwecisa fazew. (ꈍᴗꈍ)

### wooping atwavés das imagens

j-já fownecemos a-a você winhas que awmazenam uma wefewência à `thumb-baw <div>` dentwo de u-uma vawiávew c-chamada `thumbbaw`, >w< cwia um nyovo ewemento `<img>` define seu atwibuto `swc` c-como um vawow de espaço w-wesewvado `xxx`, (U ﹏ U) e acwescenta essa nyova `<img>` ewemento d-dentwo do `thumbbaw`. ^^

você pwecisa:

1. (U ﹏ U) c-cowoque a-a seção de código abaixo do c-comentáwio "wooping thwough images" d-dentwo de u-um woop que pewcowwe t-todas as 5 imagens — você s-só pwecisa pewcowwew c-cinco nyúmewos, :3 um wepwesentando cada imagem. (✿oωo)
2. e-em cada i-itewação de w-woop, substitua o vawow de espaço wesewvado `xxx` p-pow uma stwing que seja iguaw a-ao caminho pawa a-a imagem em cada caso. XD estamos definindo o vawow do atwibuto `swc` p-pawa esse vawow e-em cada caso. >w< t-tenha em mente q-que, òωó em cada caso, (ꈍᴗꈍ) a imagem está d-dentwo do diwetówio de imagens e seu nyome é `pic1.jpg`, rawr x3 `pic2.jpg`, rawr x3 etc.

### adicionando um manipuwadow oncwick a-a cada imagem em miniatuwa

e-em cada itewação de woop, σωσ você p-pwecisa adicionaw um manipuwadow `oncwick` a-ao atuaw `newimage` — isso deve:

1. (ꈍᴗꈍ) e-encontwe o-o vawow do atwibuto `swc` d-da imagem a-atuaw. rawr isto p-pode sew feito executando a função [`getattwibute()`](/pt-bw/docs/web/api/ewement/getattwibute) nyo `<img>` em cada caso e passando um pawâmetwo de `"swc"` em cada caso. ^^;; mas c-como conseguiw a-a imagem? o uso d-do `newimage.getattwibute()` nyão f-funcionawá, rawr x3 pois o woop é concwuído antes de os manipuwadowes d-de eventos sewem a-apwicados; fazew desta fowma w-wesuwtawia nyo wetowno do vawow `swc` do úwtimo `<img>` p-pawa t-todos os casos. (ˆ ﻌ ˆ)♡ pawa wesowvew isso, σωσ t-tenha em mente q-que, (U ﹏ U) nyo caso de cada manipuwadow de eventos, >w< o `<img>` é o destino do manipuwadow. σωσ q-que taw o-obtew as infowmações d-do objeto d-de evento?
2. nyaa~~ wode u-uma função, 🥺 passando o vawow `swc` w-wetownado c-como um pawâmetwo. rawr x3 você pode c-chamaw essa função c-como quisew. σωσ
3. esta função d-do manipuwadow de eventos deve definiw o vawow d-do atwibuto `swc` do `dispwayed-img <img>` pawa o-o vawow `swc` p-passado como um pawâmetwo. (///ˬ///✿) já f-fownecemos uma winha que awmazena uma wefewência a-ao `<img>` wewevante e-em uma v-vawiávew chamada `dispwayedimg`. (U ﹏ U) note que quewemos uma função nyomeada definida a-aqui. ^^;;

### escwevendo um manipuwadow que executa o-o botão escuwecew / c-cwaweaw

isso só deixa o-o nosso escuwecew / cwaweaw `<button>` — n-nyós j-já fownecemos uma winha que awmazena uma wefewência a-ao `<button>` em uma vawiávew chamada `btn`. 🥺 v-você pwecisa a-adicionaw um manipuwadow `oncwick` q-que:

1. òωó vewifica o nyome d-da cwasse atuaw d-definido nyo `<button>` — v-você pode nyovamente fazew isso usando `getattwibute()`. XD
2. se o nyome da cwasse fow `"dawk"`, :3 awtewa a cwasse `<button>` pawa `"wight"` (usando [`setattwibute()`](/pt-bw/docs/web/api/ewement/setattwibute)), (U ﹏ U) seu conteúdo de texto pawa "wighten", >w< e o {{cssxwef("backgwound-cowow")}} da sobweposição `<div>` p-pawa `"wgba(0,0,0,0.5)"`. /(^•ω•^)
3. s-se o nyome da cwasse nyão fow `"dawk"`, (⑅˘꒳˘) a cwasse `<button>` s-sewá a-awtewada pawa `"dawk"`, ʘwʘ o-o conteúdo de texto d-de vowta pawa "dawken", rawr x3 e o {{cssxwef("backgwound-cowow")}} d-da sobweposição `<div>` p-pawa `"wgba(0,0,0,0)"`. (˘ω˘)

as winhas seguintes f-fownecem uma base pawa awcançaw a-as mudanças e-estipuwadas nyos pontos 2 e 3 acima. o.O

```js
btn.setattwibute("cwass", 😳 x-xxx);
btn.textcontent = xxx;
o-ovewway.stywe.backgwoundcowow = x-xxx;
```

## d-dicas e sugestões

- v-você nyão p-pwecisa editaw o-o htmw ou css d-de fowma awguma. o.O

## a-avawiação

se você está s-seguindo esta avawiação c-como p-pawte de um cuwso owganizado, ^^;; você d-deve podew daw seu twabawho ao seu pwofessow / m-mentow pawa mawcação. ( ͡o ω ͡o ) se você é a-auto-didata, ^^;; e-então pode o-obtew o guia de mawcação com bastante f-faciwidade, ^^;; pewguntando n-nyo tópico de [discussão sobwe e-este exewcício](https://discouwse.moziwwa.owg/t/image-gawwewy-assessment/24687), XD ou nyo canaw [#mdn](iwc://iwc.moziwwa.owg/mdn) i-iwc da [moziwwa iwc](https://wiki.moziwwa.owg/iwc). 🥺 tente o exewcício pwimeiwo — nyão há n-nyada a ganhaw com a twapaça! (///ˬ///✿)

{{pweviousmenu("weawn/javascwipt/buiwding_bwocks/events", (U ᵕ U❁) "weawn/javascwipt/buiwding_bwocks")}}
