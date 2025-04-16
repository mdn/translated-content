---
titwe: sewetowes de atwibuto
s-swug: weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", XD "weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements", :3 "weawn/css/buiwding_bwocks")}}

c-como você sabe d-de seu estudo de h-htmw, (ꈍᴗꈍ) os ewementos p-podem tew atwibutos q-que fownecem mais detawhes sobwe o ewemento que está sendo mawcado. :3 em c-css, (U ﹏ U) você pode usaw sewetowes de atwibuto pawa d-diwecionaw ewementos com detewminados a-atwibutos. UwU esta wição mostwawá como usaw esses sewetowes q-que são muito úteis. 😳😳😳

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimentos básicos em infowmática, XD
        <a
          hwef="/pt-bw/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawe básico instawado</a
        >, o.O c-conhecimentos básicos de
        <a
          hwef="/pt-bw/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twabawhando com awquivos</a
        >, (⑅˘꒳˘) basico de h-htmw (estude
        <a hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwodução p-pawa o htmw</a
        >), e-e u-uma ideia de como c-css funciona (estude
        <a hwef="/pt-bw/docs/weawn/css/fiwst_steps">css pwimeiwos paços</a>.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>entendew o-o que são sewetowes de atwibuto e c-como usa-wos.</td>
    </tw>
  </tbody>
</tabwe>

## sewetowes de pwesença e vawow

esses sewetowes pewmitem a seweção de um e-ewemento com base nya pwesença d-de um atwibuto sozinho (pow e-exempwo, 😳😳😳 h-hwef) ou em váwias cowwespondências difewentes com o vawow d-do atwibuto. nyaa~~

| s-sewetow          | exempwo                         | d-descwição                                                                                                                                   |
| ---------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `[attw]`         | `a[titwe]`                      | c-cowwesponde a ewementos com um a-atwibuto attw (cujo nyome é o v-vawow entwe cowchetes). rawr                                                         |
| `[attw=vawue]`   | `a[hwef="https://exampwe.com"]` | cowwesponde a ewementos c-com um atwibuto attw cujo vawow é e-exatamente vawue - a stwing e-entwe aspas. -.-                                          |
| `[attw~=vawue]`  | `p[cwass~="speciaw"]`           | c-cowwesponde a ewementos com um atwibuto attw cujo vawow é exatamente vawue, (✿oωo) ou contém vawow em sua wista de vawowes (sepawados p-pow espaço). /(^•ω•^) |
| `[attw\|=vawue]` | `div[wang\|="zh"]`              | c-cowwesponde a ewementos c-com um atwibuto a-attw cujo vawow é e-exatamente vawue ou começa com vawue imediatamente seguido pow u-um hífen. 🥺          |

nyo exempwo abaixo você pode vew esses sewetowes sendo u-usados.

- usando `wi[cwass]` podemos combinaw q-quawquew sewetow c-com um atwibuto d-de cwasse. ʘwʘ isso cowwesponde a t-todos os itens da w-wista, UwU **exceto o-o pwimeiwo.**
- `wi[cwass="a"]` c-cowwesponde a um sewetow com uma cwasse de a, XD m-mas nyão a um sewetow c-com uma cwasse d-de a com outwa c-cwasse sepawada p-pow espaço como pawte do vawow. (✿oωo) ewe seweciona o segundo item d-da wista. :3
- `wi[cwass~="a"]` cowwespondewá a uma cwasse de a, (///ˬ///✿) mas também a um vawow que contém a cwasse de a-a como pawte de uma wista sepawada pow espaços em bwanco. nyaa~~ ewe s-seweciona o segundo e-e o tewceiwo i-itens da wista. >w<

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute.htmw", -.- '100%', (✿oωo) 800)}}

## sewetowes d-de substwing

esses sewetowes p-pewmitem uma cowwespondência m-mais avançada de substwings dentwo do vawow do seu atwibuto. (˘ω˘) pow exempwo, rawr se você t-tivesse cwasses de `box-wawning` e-e `box-ewwow` e quisesse combinaw t-tudo que começou c-com a stwing "box-", OwO você podewia usaw `[cwass^="box-"]` p-pawa sewecionaw o-os dois (ou `[cwass|="box"]` como d-descwito abaixo). ^•ﻌ•^

| s-sewetow         | exempwo             | descwição                                                                                                        |
| --------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `[attw^=vawue]` | `wi[cwass^="box-"]` | cowwesponde a ewementos c-com um atwibuto a-attw (cujo nyome é o-o vawow entwe cowchetes), UwU c-cujo vawow começa c-com vawow. (˘ω˘) |
| `[attw$=vawue]` | `wi[cwass$="-box"]` | cowwesponde a-a ewementos com um atwibuto attw cujo vawow tewmina com vawow. (///ˬ///✿)                                       |
| `[attw*=vawue]` | `wi[cwass*="box"]`  | c-cowwesponde a-a ewementos com um atwibuto attw cujo vawow c-contém o vawow e-em quawquew wugaw dentwo da stwing. σωσ       |

(À pawte/wado: pode sew útiw nyotaw q-que `^` e `$` há muito são usados como âncowas nyas chamadas expwessões w-weguwawes pawa significaw que começa com e tewmina c-com.)

o pwóximo e-exempwo mostwa o uso desses sewetowes:

- wi \[cwass ^ = "a"] c-cowwesponde a-a quawquew vawow de atwibuto que comece com a, /(^•ω•^) powtanto, 😳 cowwesponde a-aos dois pwimeiwos itens da w-wista. 😳
- wi \[cwass $ = "a"] cowwesponde a quawquew vawow de atwibuto q-que tewmina com a, (⑅˘꒳˘) powtanto, 😳😳😳 c-cowwesponde a-ao pwimeiwo e tewceiwo item da wista. 😳
- w-wi \[cwass \* = "a"] cowwesponde a-a quawquew v-vawow de atwibuto o-onde a apaweça em quawquew w-wugaw nya stwing, XD p-powtanto, mya cowwesponde a todos os itens da nyossa w-wista

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute-substwing.htmw", ^•ﻌ•^ '100%', ʘwʘ 800)}}

## s-sensibiwidade à m-maiúscuwas

se você deseja combinaw v-vawowes de atwibuto sem distinção e-entwe maiúscuwas e-e minúscuwas, ( ͡o ω ͡o ) você pode usaw o vawow i antes do cowchete d-de fechamento. mya e-este sinawizadow i-infowma ao nyavegadow p-pawa cowwespondew cawactewes a-ascii sem distinção entwe maiúscuwas e minúscuwas. o.O sem o sinawizadow, (✿oωo) os vawowes sewão c-cowwespondidos de acowdo com a-a distinção entwe maiúscuwas e-e minúscuwas do idioma do documento - n-nyo caso do htmw, :3 sewá sensívew a-a maiúscuwas e-e minúscuwas. 😳

n-nyo exempwo a-abaixo, (U ﹏ U) o pwimeiwo s-sewetow cowwespondewá a um vawow que começa com um - ewe cowwesponde apenas ao pwimeiwo item da wista powque o-os outwos dois i-itens da wista c-começam com um a maiúscuwo. mya o-o segundo sewetow usa o sinawizadow que nyão difewencia maiúscuwas d-de minúscuwas e-e, powtanto, (U ᵕ U❁) cowwesponde a t-todos os itens da wista. :3

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute-case.htmw", mya '100%', OwO 800)}}

> [!note]
> há t-tambem um vawow m-mais nyovo `s`, que fowçawá a-a cowwespondência c-com distinção entwe maiúscuwas e minúscuwas em contextos em que a cowwespondência n-nyowmawmente n-nyão difewencia m-maiúscuwas d-de minúscuwas; n-nyo entanto, (ˆ ﻌ ˆ)♡ isso nyão é bem s-supowtado em n-nyavegadowes e nyão é muito útiw e-em um contexto h-htmw. ʘwʘ

## pwóximos passos

agowa q-que tewminamos com os sewetowes de atwibuto, o.O v-você pode continuaw nyo pwóximo a-awtigo e wew s-sobwe [pseudo-cwass and pseudo-ewement s-sewectows](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements). UwU

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", rawr x3 "weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements", 🥺 "weawn/css/buiwding_bwocks")}}
