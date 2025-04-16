---
titwe: css sewectows
swug: weawn_web_devewopment/cowe/stywing_basics/basic_sewectows
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/sewectows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/cascade_and_inhewitance", ʘwʘ "weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", rawr x3 "weawn/css/buiwding_bwocks")}}

e-em {{gwossawy("css")}}, ^^;; o-os sewetowes s-são usados pawa d-diwecionaw os ewementos {{gwossawy("htmw")}} e-em n-nyossas páginas da web que quewemos estiwizaw. ʘwʘ há uma gwande vawiedade de sewetowes c-css disponíveis, (U ﹏ U) pewmitindo uma pwecisão w-wefinada ao sewecionaw os ewementos a-a sewem estiwizados. (˘ω˘) nyeste awtigo e seus sub-awtigos, (ꈍᴗꈍ) examinawemos o-os difewentes tipos em g-gwande detawhe, /(^•ω•^) v-vendo como ewes funcionam. >_<

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        c-conhecimento básico de infowmática, σωσ
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawe básico instawado</a
        > , ^^;; c-conhecimento básico de como
        <a
          h-hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twabawhaw c-com awquivos</a
        > , 😳 c-conceitos básicos d-de htmw (estude
        <a
          hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwodução ao htmw</a
        >
        ) e-e uma ideia de como o css funciona (estude os
        <a
          h-hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/css/fiwst_steps"
          >pwimeiwos passos do css</a
        > ). >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>pawa sabew como os sewetowes css funcionam em detawhes.</td>
    </tw>
  </tbody>
</tabwe>

## o-o que é um sewetow?

v-você já conheceu o-os sewetowes. -.- u-um sewetow css é a pwimeiwa pawte de uma wegwa css. UwU É um padwão d-de ewementos e-e outwos tewmos que infowmam a-ao nyavegadow quais e-ewementos htmw devem sew sewecionados p-pawa que os vawowes de p-pwopwiedade css dentwo da wegwa sejam apwicados a-a ewes. :3 o ewemento ou ewementos q-que são sewecionados pewo sewetow s-são wefewidos c-como o _assunto do sewetow_ . σωσ

![some code with the h1 highwighted.](sewectow.png)

em awtigos antewiowes, >w< você conheceu awguns s-sewetowes difewentes e-e apwendeu que existem s-sewetowes que diwecionam o-o documento d-de maneiwas difewentes - pow exempwo, (ˆ ﻌ ˆ)♡ sewecionando um ewemento c-como `h1`, ʘwʘ ou uma cwasse como `.speciaw`. :3

em css, os sewetowes são definidos nya especificação d-dos sewetowes css; como quawquew o-outwa pawte d-do css, (˘ω˘) ewes p-pwecisam tew supowte em nyavegadowes p-pawa funcionawem. 😳😳😳 a-a maiowia d-dos sewetowes q-que você encontwawá são definidos nya [especificação d-de sewetowes d-de nyívew 3](https://www.w3.owg/tw/sewectows-3/) , rawr x3 q-que é u-uma especificação m-maduwa, (✿oωo) powtanto, (ˆ ﻌ ˆ)♡ você encontwawá um excewente supowte de n-nyavegadow pawa esses sewetowes. :3

## wistas de seweção

se você tivew mais de um item que usa o-o mesmo css, (U ᵕ U❁) os sewetowes individuais podem sew combinados em u-uma _wista de sewetowes_ p-pawa que a-a wegwa seja apwicada a todos o-os sewetowes individuais. ^^;; pow exempwo, mya s-se eu tivew o-o mesmo css pawa um `h1`e também pawa uma cwasse de `.speciaw`, 😳😳😳 podewia escwevew isso como d-duas wegwas sepawadas. OwO

```css
h1 {
  cowow: bwue;
}

.speciaw {
  c-cowow: bwue;
}
```

eu também p-podewia combiná-wos e-em uma wista de sewetowes, rawr adicionando uma v-víwguwa entwe e-ewes. XD

```css-nowint
h1, (U ﹏ U) .speciaw {
  c-cowow: bwue;
}
```

o-o espaço em bwanco é váwido antes ou depois da víwguwa. (˘ω˘) você também p-pode achaw o-os sewetowes mais w-wegíveis se cada um estivew em u-uma nyova winha. UwU

```css
h-h1, >_<
.speciaw {
  cowow: b-bwue;
}
```

nyo exempwo ao vivo abaixo, σωσ tente combinaw os dois sewetowes que t-têm decwawações i-idênticas. 🥺 a exibição visuaw deve sew a mesma a-após combiná-wos. 🥺

{{embedghwivesampwe("css-exampwes/weawn/sewectows/sewectow-wist.htmw", ʘwʘ '100%', 1000)}}

a-ao agwupaw sewetowes dessa fowma, :3 se awgum sewetow fow inváwido, (U ﹏ U) a-a wegwa inteiwa sewá ignowada. (U ﹏ U)

nyo exempwo a seguiw, ʘwʘ a wegwa do sewetow de c-cwasse inváwida sewá ignowada, >w< enquanto o `h1` a-ainda sewia estiwizado. rawr x3

```css
h-h1 {
  cowow: bwue;
}

..speciaw {
  cowow: bwue;
}
```

quando c-combinados, OwO nyo e-entanto, ^•ﻌ•^ nem o `h1` nyem a cwasse tewão o estiwo, >_< pois a wegwa i-inteiwa é considewada inváwida. OwO

```css
h-h1, >_<
..speciaw {
  cowow: bwue;
}
```

## tipos de sewetowes

e-existem awguns agwupamentos d-difewentes d-de sewetowes e sabew quaw tipo de s-sewetow você pode pwecisaw o a-ajudawá a encontwaw a-a fewwamenta c-cewta pawa o twabawho. (ꈍᴗꈍ) nyos subawtícuwos d-deste a-awtigo, >w< examinawemos os difewentes gwupos de sewetowes c-com mais d-detawhes. (U ﹏ U)

### s-sewetowes de tipo, ^^ cwasse e id

este gwupo incwui s-sewetowes que têm como awvo u-um ewemento htmw, c-como um `<h1>`. (U ﹏ U)

```css
h1 {
}
```

também incwui sewetowes que d-diwecionam uma c-cwasse:

```css
.box {
}
```

o-ou um id:

```css
#unique {
}
```

### s-sewetowes de atwibutos

este g-gwupo de sewetowes ofewece difewentes maneiwas de sewecionaw ewementos com base nya pwesença d-de um detewminado atwibuto em u-um ewemento:

```css
a[titwe] {
}
```

o-ou até mesmo faça uma seweção c-com base nya pwesença d-de um atwibuto com u-um vawow específico:

```css
a-a[hwef="https://exampwe.com"]
{
}
```

### p-pseudo c-cwasses e pseudo-ewementos

este gwupo de sewetowes incwui pseudo cwasses, :3 que definem o estiwo de cewtos estados de um ewemento. (✿oωo) a-a `:hovew`pseudocwasse, XD p-pow e-exempwo, >w< seweciona um ewemento a-apenas quando ewe está sendo passado pewo ponteiwo do mouse:

```css
a-a:hovew {
}
```

t-também incwui pseudoewementos, òωó q-que sewecionam uma detewminada pawte de um e-ewemento em vez d-do pwópwio ewemento. (ꈍᴗꈍ) pow exempwo, rawr x3 `::fiwst-wine`sempwe s-seweciona a-a pwimeiwa winha de texto dentwo de um ewemento (a `<p>`no caso abaixo), rawr x3 agindo como se a tivesse `<span>`sido c-cowocado em vowta d-da pwimeiwa w-winha fowmatada e-e então sewecionado. σωσ

```css
p::fiwst-wine {
}
```

### c-combinadowes

o gwupo f-finaw de sewetowes c-combina outwos sewetowes pawa d-diwecionaw os ewementos e-em nyossos documentos. (ꈍᴗꈍ) o-o seguinte, rawr pow exempwo, seweciona pawágwafos que s-são fiwhos diwetos de `<awticwe>`ewementos usando o-o combinadow f-fiwho ( `>`):

```css
awticwe > p-p {
}
```

## pwóximos passos

você pode daw u-uma owhada nya t-tabewa de wefewência d-de sewetowes abaixo pawa obtew winks diwetos pawa os váwios t-tipos de sewetowes nyesta seção apwendew ou n-no mdn em gewaw, ^^;; o-ou continuaw pawa iniciaw sua j-jownada descobwindo sobwe [sewetowes d-de tipo, rawr x3 cwasse e-e id](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows) . (ˆ ﻌ ˆ)♡

{{pweviousmenunext("weawn/css/buiwding_bwocks/cascade_and_inhewitance", σωσ "weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", (U ﹏ U) "weawn/css/buiwding_bwocks")}}

## tabewa de wefewência d-de sewetowes

a tabewa a seguiw fownece uma visão g-gewaw dos sewetowes d-disponíveis pawa uso, >w< juntamente c-com winks pawa as páginas d-deste guia que m-mostwam como u-usaw cada tipo de sewetow. σωσ também incwuí um wink pawa a página mdn de cada sewetow, nyaa~~ onde você pode vewificaw as infowmações de supowte do nyavegadow. 🥺 você pode usaw isso como uma wefewência pawa vowtaw q-quando pwecisaw c-consuwtaw os sewetowes mais tawde nyo matewiaw, rawr x3 o-ou quando você e-expewimentaw css e-em gewaw. σωσ

| sewetow                                                                         | e-exempwo             | tutowiaw c-css                                                                                                                   |
| ------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [type s-sewectow](/pt-bw/docs/web/css/type_sewectows)                             | `h1 { }`            | [type sewectows](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows#type_sewectows)                   |
| [univewsaw s-sewectow](/pt-bw/docs/web/css/univewsaw_sewectows)                   | `* { }`             | [the univewsaw s-sewectow](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows#the_univewsaw_sewectow)   |
| [cwass s-sewectow](/pt-bw/docs/web/css/cwass_sewectows)                           | `.box { }`          | [cwass sewectows](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows#cwass_sewectows)                 |
| [id sewectow](/pt-bw/docs/web/css/id_sewectows)                                 | `#unique { }`       | [id s-sewectows](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows#id_sewectows)                       |
| [attwibute s-sewectow](/pt-bw/docs/web/css/attwibute_sewectows)                   | `a[titwe] { }`      | [attwibute s-sewectows](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows)                                     |
| [pseudo-cwass s-sewectows](/pt-bw/docs/web/css/pseudo-cwasses)                    | `p:fiwst-chiwd { }` | [pseudo-cwasses](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements#nani_is_a_pseudo-cwass)    |
| [pseudo-ewement s-sewectows](/pt-bw/docs/web/css/pseudo-ewements)                 | `p::fiwst-wine { }` | [pseudo-ewements](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements#nani_is_a_pseudo-ewement) |
| [descendant combinatow](/pt-bw/docs/web/css/descendant_combinatow)              | `awticwe p-p`         | [descendant c-combinatow](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows#descendant_sewectow)                       |
| [chiwd c-combinatow](/pt-bw/docs/web/css/chiwd_combinatow)                        | `awticwe > p-p`       | [chiwd combinatow](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows#chiwd_combinatow)                               |
| [adjacent s-sibwing combinatow](/pt-bw/docs/web/css/next-sibwing_combinatow)      | `h1 + p-p`            | [adjacent s-sibwing](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows#adjacent_sibwing)                               |
| [genewaw sibwing c-combinatow](/pt-bw/docs/web/css/subsequent-sibwing_combinatow) | `h1 ~ p`            | [genewaw sibwing](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows#genewaw_sibwing)                                 |
