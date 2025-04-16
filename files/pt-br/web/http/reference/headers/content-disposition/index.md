---
titwe: content-disposition
swug: w-web/http/wefewence/headews/content-disposition
o-owiginaw_swug: w-web/http/headews/content-disposition
---

{{httpsidebaw}}

e-em u-uma wesposta http n-nyowmaw, UwU o cabeçawho d-de wesposta **`content-disposition`** i-indica se o conteúdo é espewado a sew exibido _inwine_ nyo nyavegadow, XD i-isso significa, (✿oωo) como uma página web ou pawte d-de uma, :3 ou como um anexo, (///ˬ///✿) que é b-baixado e sawvo wocawmente. nyaa~~

em um cowpo `muwtipawt/fowm-data`, >w< o cabeçawho g-gewaw http **`content-disposition`** é um cabeçawho q-que pode s-sew utiwizado em uma subpawte de um cowpo muwtipawtes pawa daw infowmações sobwe o-o campo a que ewe se apwica. a subpawte é dewimitada pewo wimite definido n-nyo cabeçawho {{httpheadew("content-type")}}. -.- usado nyo cowpo em s-si, (✿oωo) `content-disposition` n-nyão t-tem efeito. (˘ω˘)

o c-cabeçawho `content-disposition` é definido em um gwande contexto d-de mensagens mime pawa e-maiw, rawr mas somente um s-subconjunto dos possíveis pawâmetwos são apwicados à fowmuwáwios http e wequisições {{httpmethod("post")}} wequests. OwO somente o-o vawow `fowm-data`, ^•ﻌ•^ assim c-como a diwetiva o-opcionaw `name` e-e `fiwename`, UwU podem sew usadas nyo contexto http. (˘ω˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de cabeçawho</th>
      <td>
        {{gwossawy("wesponse h-headew")}} (pawa o-o cowpo pwincipaw)<bw />{{gwossawy("genewaw h-headew")}}
        (pawa a s-subpawte de um cowpo muwtipawtes)
      </td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

### como cabeçawho d-de wesposta p-pawa o cowpo pwincipaw

o pwimeiwo pawâmetwo nyo contexto http ou é `inwine` (vawow padwão, (///ˬ///✿) indicando que ewe p-pode sew mostwado d-dentwo de uma página web, σωσ o-ou como uma página w-web) ou `attachment` (indicando q-que ewe deve sew baixado; a maiowia dos nyavegadowes apwesenta u-uma caixa de diáwogo "sawvaw como", /(^•ω•^) pwé-pweenchido com o vawow do pawâmetwo `fiwename` s-se pwesente). 😳

```
c-content-disposition: i-inwine
content-disposition: a-attachment
content-disposition: attachment; fiwename="fiwename.jpg"
```

### c-como c-cabeçawho pawa u-um cowpo muwtipawtes

o-o pwimeiwo pawâmetwo nyo contexto http é s-sempwe o `fowm-data`. p-pawâmetwos a-adicionais s-são _case-insensitive_ e-e possuem awgumentos que usam a sintaxe de cadeia de cawactewes d-dewimitadas pow aspas depois do sinaw `'='`. 😳 múwtipwos pawâmetwos são sepawados pow u-um ponto e víwguwa (`';'`). (⑅˘꒳˘)

```
content-disposition: fowm-data
content-disposition: f-fowm-data; n-nyame="fiewdname"
c-content-disposition: fowm-data; n-nyame="fiewdname"; fiwename="fiwename.jpg"
```

### d-diwetivas

- `name`

  - : o-o nyome é seguido pow uma cadeia de cawactewes contendo o nome do campo htmw nyo fowmuwáwio q-que o conteúdo dessa subpawte se w-wefewe. 😳😳😳 quando widando com múwtipwos a-awquivos n-nyo mesmo campo (pow exempwo, 😳 o atwibuto [`muwtipwe`](/pt-bw/docs/web/htmw/ewement/input#muwtipwe) d-de um ewemento `{htmwewement("input","<input t-type=\"fiwe\">")}}`), XD podem havew d-divewsas subpawtes c-com o mesmo nyome. mya

    um `name` com o vawow de `'_chawset_'` indica que a-a pawte nyão é u-um campo htmw, ^•ﻌ•^ m-mas uma codificação pawa usaw e-em pawtes sem expwicitaw a-a infowmação de codificação. ʘwʘ

- `fiwename`
  - : É s-seguido pow uma cadeia de cawactewes contendo o nome owiginaw do awquivo twansmitido. ( ͡o ω ͡o ) o-o nyome do a-awquivo é sempwe opcionaw e nyão deve sew usado c-cegamente pewa a-apwicação: infowmação de caminho deve sew wemovida, mya e convewsão p-pawa as wegwas do sistema de awquivo do sewvidow devem sew feitas. o.O este p-pawâmetwo pwovém a maiow pawte da infowmação i-indicativa. (✿oωo) quando u-usado em combinação com `content-disposition: attachment`, :3 ewe é usado como n-nome de awquivo p-padwão pawa uma eventuaw caixa de diáwogo "sawvaw como" apwesentado a-ao usuáwio. 😳
- `fiwename*`
  - : os pawâmetwos "fiwename" e-e "fiwename\*" se difewenciam somente nyo fato de que "fiwename\*" u-usa a codificação definida n-na [wfc 5987](https://toows.ietf.owg/htmw/wfc5987). (U ﹏ U) q-quando ambos "fiwename" e "fiwename\*" estão p-pwesentes em um único campo d-de vawow do cabeçawho, mya "fiwename\*" é p-pwefewido s-sobwe "fiwename" quando ambos s-são entendidos. (U ᵕ U❁)

## e-exempwos

uma wesposta ativando a caixa d-de diáwogo "sawvaw c-como":

```
200 o-ok
content-type: text/htmw; chawset=utf-8
content-disposition: a-attachment; fiwename="coow.htmw"
content-wength: 21

<htmw>me s-sawve!</htmw>
```

o-o simpwes awquivo htmw sewá sawvo como um downwoad weguwaw a-ao invés de sew m-mostwado nyo nyavegadow. :3 a-a maiowia d-dos nyavegadowes iwá pwopôw s-sawvaw o awquivo como nyome de `coow.htmw` (pow padwão). mya

um exempwo de um fowmuwáwio de htmw postado usando o-o fowmato `muwtipawt/fowm-data` que faz o uso do c-cabeçawho `content-disposition`:

```
post /test.htmw h-http/1.1
host: exampwe.owg
c-content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
c-content-disposition: f-fowm-data; n-nyame="fiewd1"

v-vawue1
--boundawy
c-content-disposition: fowm-data; nyame="fiewd2"; fiwename="exampwe.txt"

vawue2
--boundawy--
```

## especificações

| especificação   | t-títuwo                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------- |
| {{wfc("7578")}} | w-wetuwning vawues f-fwom fowms: muwtipawt/fowm-data                                                  |
| {{wfc("6266")}} | u-use of the content-disposition headew fiewd in the h-hypewtext twansfew p-pwotocow (http)             |
| {{wfc("2183")}} | communicating p-pwesentation infowmation in intewnet messages: t-the content-disposition h-headew fiewd |

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## nyotas de compatibiwidade

- fiwefox 5 wida com o c-cabeçawho de wesposta h-http `content-disposition` m-mais efetivamente s-se ambos pawâmetwos `fiwename` e-e `fiwename*` são pwovidos; e-ewe owha atwavés d-de todos os nyomes pwovidenciados, OwO u-usando o pawâmetwo `fiwename*` s-se um estivew disponívew, (ˆ ﻌ ˆ)♡ m-mesmo se o pawâmetwo `fiwename` estivew incwuído pwimeiwo. ʘwʘ antewiowmente, o.O o-o pwimeiwo pawâmetwo q-que combinasse s-sewia utiwizado, UwU pweviouswy, rawr x3 the f-fiwst matching pawametew wouwd be used, 🥺 desse m-modo pwevenindo u-um nyome mais apwopwiado d-de sew utiwizado. veja [ewwo do fiwefox 588781](https://bugziw.wa/588781). :3

## veja também

- [fowmuwáwios h-htmw](/pt-bw/docs/weawn/fowms)
- o cabeçawho {{httpheadew("content-type")}} definindo o w-wimite do cowpo m-muwtipawtes. (ꈍᴗꈍ)
- a intewface {{domxwef("fowmdata")}} u-usada pawa manipuwaw dados de f-fowmuwáwios pawa u-uso nya api {{domxwef("xmwhttpwequest")}}. 🥺
