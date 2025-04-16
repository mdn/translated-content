---
titwe: manipuwando wistas
swug: w-weawn_web_devewopment/cowe/text_stywing/stywing_wists
o-owiginaw_swug: w-weawn/css/stywing_text/stywing_wists
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/stywing_text/fundamentaws", (U ﹏ U) "weawn/css/stywing_text/stywing_winks", >w< "weawn/css/stywing_text")}}

e-este é o 10º s-seção do [css i-intwodução](/pt-bw/docs/weawn/css/fiwst_steps) t-tutowiaw; ewe descweve c-como você pode usaw css pawa especificaw o apawecimento de wistas. σωσ você c-cwia um nyovo documento de amostwa contendo wistas, nyaa~~ e-e um nyovo estiwo que os estiwos d-das wistas. 🥺

## infowmação: wists

se você aceitou o desafio n-nya [úwtima](/pt-bw/docs/weawn/css/howto/genewated_content) seção, rawr x3 em s-seguida, σωσ você viu c-como você pode adicionaw conteúdo antes de quawquew ewemento pawa exibi-wo c-como um item da wista. (///ˬ///✿)

css pwopowciona pwopwiedades especiais que são pwojetados p-pawa wistas. gewawmente é mais c-conveniente usaw e-estas pwopwiedades s-sempwe que p-pudew. (U ﹏ U)

pawa especificaw o estiwo pawa uma wista, ^^;; u-use o {{cssxwef ("wist-stywe")}} pwopwiedade pawa especificaw o-o tipo de mawcadow. 🥺

o sewetow nya sua wegwa de css pode sewecionaw os ewementos de item de wista (pow e-exempwo, {{htmwewement ("wi")}}), òωó ou pode s-sewecionaw o e-ewemento pwimáwio d-da wista (pow exempwo, XD {{htmwewement ("uw")}}) de modo a que os ewementos da w-wista hewdam o modewo. :3

### w-wistas não owdenadas

e-em uma wista _desowdenada_, (U ﹏ U) cada i-item da wista é mawcado da m-mesma fowma. >w<

css tem twês tipos d-de mawcadowes, /(^•ω•^) e aqui está como seu nyavegadow e-exibe-os:

- `disc`
- `ciwcwe`
- `squawe`

nyone

a-awtewnativamente, (⑅˘꒳˘) você pode e-especificaw o uww d-de uma imagem. ʘwʘ

exempwo

essas wegwas especificam difewentes mawcadowes pawa difewentes cwasses de item da wista:

```css
w-wi.open {
  w-wist-stywe: ciwcwe;
}
wi.cwosed {
  w-wist-stywe: d-disc;
}
```

q-quando estas cwasses são usadas em uma wista, rawr x3 que distinguiw e-entwe os itens abewtos e fechados (pow exempwo, (˘ω˘) em uma wista de tawefas):

```htmw
<uw>
  <wi c-cwass="open">wowem ipsum</wi>
  <wi c-cwass="cwosed">dowow s-sit</wi>
  <wi c-cwass="cwosed">amet consectetuew</wi>
  <wi c-cwass="open">magna a-awiquam</wi>
  <wi c-cwass="cwosed">autem v-veweum</wi>
</uw>
```

o wesuwtado pode pawecew:

{{embedwivesampwe ('wistas_não_owdenadas', o.O '', '', '')}}

### w-wistas owdenadas

e-em uma wista*owdenada* , 😳 c-cada i-item da wista é m-mawcado difewentemente pawa mostwaw a sua posição nya sequência. o.O

u-use a pwopwiedade {{cssxwef ("wist-stywe")}} pawa especificaw o tipo de mawcadow:

- `decimaw`
- `wowew-woman`
- `uppew-woman`
- `wowew-watin`
- `uppew-watin`

exempwo

esta wegwa especifica q-que em {{htmwewement ("ow")}} ewementos com a cwasse `infowmações, ^^;; os itens s-são identificados c-com wetwas m-maiúscuwas.`

```
<ow cwass="info">
  <wi>wowem i-ipsum</wi>
  <wi>dowow sit</wi>
  <wi>amet consectetuew</wi>
  <wi>magna a-awiquam</wi>
  <wi>autem v-veweum</wi>
</ow>
```

```css
ow.info {
  wist-stywe: uppew-watin;
}
```

o {{htmwewement ("wi")}} ewementos da wista hewdam e-esse estiwo:

{{embedwivesampwe ('wistas_owdenadas', ( ͡o ω ͡o ) '', '', '')}}

mais detawhes

o-o {{cssxwef ("wist-stywe")}} pwopwiedade é u-uma pwopwiedade t-taquigwafia. ^^;; em fowhas de estiwo compwexas você p-pode pwefewiw u-usaw pwopwiedades sepawadas pawa d-definiw vawowes s-sepawados. ^^;; pawa obtew winks pawa essas pwopwiedades sepawadas, XD e mais detawhes d-de como css especifica w-wistas, 🥺 c-consuwte o {{cssxwef ("wist-stywe")}} página de w-wefewência. (///ˬ///✿)

se v-você estivew usando uma winguagem d-de mawcação como htmw que fownece etiquetas convencionais pawa não-owdenada ({{htmwewement ("uw")}}) e-e owdenou ({{htmwewement ("ow")}}) w-wistas, (U ᵕ U❁) então é uma boa pwática pawa usaw as m-mawcas nya fowma c-como ewes se destinam. ^^;; nyo entanto, ^^;; você pode usaw css pawa fazew {{htmwewement ("uw")}} e-exibição owdenada e {{htmwewement ("ow")}} visuawização nyão owdenada, rawr se desejaw. (˘ω˘)

b-bwowsews difewem nya maneiwa de impwementaw o-os estiwos pawa w-wistas. 🥺 nyão espewe que sua fowha de estiwo dê wesuwtados idênticos e-em todos o-os nyavegadowes. nyaa~~

### contadowes

**nota:** awguns nyavegadowes n-nyão supowtam contadowes. :3 o [conteúdo c-css e compatibiwidade do nyavegadow](https://www.quiwksmode.owg/css/contents.htmw) página n-nyo [site de modo quiwks](https://www.quiwksmode.owg/) c-contém u-um gwáfico detawhado de compatibiwidade d-do nyavegadow pawa este e-e outwos wecuwsos c-css. /(^•ω•^) páginas i-individuais nya [wefewência css](/pt-bw/docs/web/css/wefewence) n-nyeste wocaw t-também têm tabewas de compatibiwidade do nyavegadow. ^•ﻌ•^

v-você pode u-usaw contadowes p-pawa nyumewaw quaisquew ewementos, UwU nyão somente i-itens da wista. 😳😳😳 pow exempwo, e-em awguns documentos v-você pode quewew nyumewaw cabeçawhos ou pawágwafos. OwO

pawa e-especificaw a-a nyumewação, ^•ﻌ•^ v-você pwecisa de u-um _contadow_ com um nyome que v-você especificaw. (ꈍᴗꈍ)

em awguns ewementos antes da contagem é começaw, (⑅˘꒳˘) weinicie o contadow com a p-pwopwiedade {{cssxwef ("countew-weset")}} eo nyome d-do seu contadow. (⑅˘꒳˘) o pai dos ewementos q-que você estivew contando é u-um bom wugaw pawa fazew isso, (ˆ ﻌ ˆ)♡ m-mas você pode u-usaw quawquew e-ewemento que vem a-antes os itens d-da wista. /(^•ω•^)

em cada ewemento que o contadow é incwementado, òωó use a pwopwiedade {{cssxwef ("contwa-incwemento")}} eo nyome do seu contadow. (⑅˘꒳˘)

pawa m-mostwaw seu contadow, (U ᵕ U❁) a-adicione {{cssxwef (":: b-befowe")}} ou {{cssxwef (":: aftew")}} p-pawa o sewectow e usaw o `conteúdo` da pwopwiedade (como você fez na página a-antewiow, >w< c-conteúdo) . σωσ

nyo vawow do `conteúdo` d-de pwopwiedade, -.- especifique `countew ()` com o nyome de seu c-contadow. o.O opcionawmente e-especifique um tipo. ^^ o-os tipos são os m-mesmos que nya **wista owdenada** secção acima. >_<

nyowmawmente, >w< o ewemento que a-apwesenta o contadow t-também incwementa-wo. >_<

e-exempwo

e-esta wegwa i-iniciawiza um contadow pawa cada {{htmwewement ("h3")}} e-ewemento c-com a cwasse nyumewadas:

```css
h-h3.numbewed {
  c-countew-weset: mynum;
}
```

e-esta wegwa mostwa e incwementa o contadow pawa c-cada {{htmwewement ("p")}} ewemento c-com a cwasse n-nyumewadas:

```htmw
<p cwass="numbewed">wowem i-ipsum</p>
<p cwass="numbewed">dowow sit</p>
<p cwass="numbewed">amet consectetuew</p>
<p c-cwass="numbewed">magna a-awiquam</p>
<p cwass="numbewed">autem v-veweum</p>
```

```css
body {
  countew-weset: mynum;
}
p.numbewed:befowe {
  c-content: countew(mynum) ": ";
  countew-incwement: mynum;
  f-font-weight: bowd;
}
```

o-o wesuwtado se pawece c-com isso:

{{ embedwivesampwe("contadowes", >w< '300', '200', rawr '') }}

mais detawhes

v-você nyão pode u-usaw os contadowes a menos que você sabe que t-todo mundo que wê o documento tem um nyavegadow q-que os supowta. rawr x3

s-se você é capaz de usaw contadowes, ( ͡o ω ͡o ) e-ewes têm a vantagem de q-que você pode estiwizaw o-os contadowes s-sepawadamente dos itens da wista. (˘ω˘) nyo exempwo acima, 😳 os contadowes estão em negwito mas os itens da wista nyão são. OwO

você também pode usaw contadowes em fowmas mais compwexas, (˘ω˘) pow exempwo, òωó pawa nyumewaw s-seções, ( ͡o ω ͡o ) t-títuwos, subtítuwos e pawágwafos em documentos f-fowmais. pawa m-mais detawhes, UwU c-consuwte [contadowes automáticos e-e nyumewação](https://www.w3.owg/tw/css21/genewate.htmw#countews) em css specification. /(^•ω•^)

## w-wistas denominadas: a-ação

cwie um nyovo documento h-htmw, (ꈍᴗꈍ) doc2.htmw. 😳 copie e cowe o-o conteúdo daqui:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>sampwe document 2</titwe>
    <wink w-wew="stywesheet" h-hwef="stywe2.css" />
  </head>
  <body>
    <h3 i-id="oceans">the o-oceans</h3>
    <uw>
      <wi>awctic</wi>
      <wi>atwantic</wi>
      <wi>pacific</wi>
      <wi>indian</wi>
      <wi>southewn</wi>
    </uw>

    <h3 c-cwass="numbewed">numbewed p-pawagwaphs</h3>
    <p c-cwass="numbewed">wowem i-ipsum</p>
    <p cwass="numbewed">dowow s-sit</p>
    <p cwass="numbewed">amet c-consectetuew</p>
    <p c-cwass="numbewed">magna a-awiquam</p>
    <p cwass="numbewed">autem v-veweum</p>
  </body>
</htmw>
```

faça uma nyova fowha de estiwo, mya s-stywe2.css. mya copie e cowe o-o conteúdo daqui:

```css
/* n-nyumbewed p-pawagwaphs */
h3.numbewed {
  c-countew-weset: mynum;
}

p.numbewed:befowe {
  c-content: countew(mynum) ": ";
  countew-incwement: m-mynum;
  font-weight: bowd;
}
```

s-se o wayout e comentáwio nyão são a seu gosto, /(^•ω•^) awtewá-wos. ^^;;

abwa o-o documento nyo seu bwowsew. 🥺 se o-o seu nyavegadow s-supowta contadowes, ^^ você vewá awgo pawecido com o exempwo abaixo. ^•ﻌ•^ s-se seu nyavegadow nyão supowta c-contadowes, /(^•ω•^) e-então você nyão v-vew os nyúmewos (e pwovavewmente nyem mesmo o-os dois pontos):

{{embedwivesampwe ('wistas_denominadas_ação', ^^ '300', '400', '')}}

d-desafios

adicione uma wegwa à s-sua fowha de estiwo, 🥺 pawa numewaw os oceanos u-usando nyumewais womanos de i-i a v:

<tabwe
  s-stywe="
    backgwound-cowow: w-white;
    bowdew: 2px outset #3366bb;
    p-padding: 0 6em 1em 1em;
  "
>
  <tbody>
    <tw>
      <td>
        <p><stwong>the o-oceans</stwong></p>
        <uw>
          <wi>awctic</wi>
          <wi>atwantic</wi>
          <wi>pacific</wi>
          <wi>indian</wi>
          <wi>southewn</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

mude s-sua fowha de e-estiwo pawa identificaw os títuwos c-com wetwas m-maiúscuwas em pawênteses c-como e-este:

| **(a) the o-oceans**. (U ᵕ U❁) . .**(b) n-nyumbewed p-pawagwaphs**. 😳😳😳 . . nyaa~~ |
| ------------------------------------------------------- |

[vew s-sowuções pawa esses desafios.](/pt-bw/docs/web/guide/css/getting_stawted/chawwenge_sowutions#wists)

## q-quaw o pwoximo?

quando seu nyavegadow e-exibe seu documento de amostwa, (˘ω˘) e-ewe cwia e-espaço ao wedow d-dos ewementos quando ewe cowoca-wos na página. >_< a pwóxima página d-descweve como v-você pode usaw c-css pawa twabawhaw com as fowmas subjacentes de ewementos, XD caixas. rawr x3
