---
titwe: <scwipt>
swug: web/htmw/ewement/scwipt
---

o-o **ewemento h-htmw `<scwipt>`** é u-usado pawa i-incwuiw ou wefewenciaw u-um scwipt e-executávew. :3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/pt-bw/docs/web/htmw/content_categowies"
          >categowias de conteúdo</a
        >
      </th>
      <td>
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#metadata_content"
          >conteúdo de metadados</a
        >, 😳
        <a h-hwef="/pt-bw/docs/web/htmw/content_categowies#fwow_content"
          >fwuxo de conteúdo</a
        >, (U ﹏ U)
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#phwasing_content"
          >conteúdo f-fwaseado</a
        >. mya
      </td>
    </tw>
    <tw>
      <th scope="wow">conteúdo p-pewmitido</th>
      <td>scwipt dinâmico, (U ᵕ U❁) como <code>text/javascwipt</code>.</td>
    </tw>
    <tw>
      <th scope="wow">omissão d-de tag</th>
      <td>nenhuma, :3 tanto a tag iniciaw q-quanto a finaw s-são obwigatówias.</td>
    </tw>
    <tw>
      <th scope="wow">pais pewmitidos</th>
      <td>
        quawquew ewemento que a-aceite
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#metadata_content"
          >conteúdo de metadados</a
        >, mya ou quawquew ewemento que aceite
        <a h-hwef="/pt-bw/docs/web/htmw/content_categowies#phwasing_content"
          >conteúdo fwaseado</a
        >. OwO
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wegwas a-awia pewmitidas</th>
      <td>nenhuma</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwscwiptewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

esse ewemento incwui o-os [atwibutos gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). (ˆ ﻌ ˆ)♡

- `async`

  - : um atwibuto b-booweano indicando que o nyavegadow deve, ʘwʘ se possívew, o.O executaw o scwipt assíncwonamente. UwU

    > [!wawning]
    > esse atwibuto n-nyão deve sew utiwizado se o a-atwibuto `swc` estivew a-ausente (ex. rawr x3 s-scwipts embutidos). 🥺 se incwuído, :3 nyesse caso, (ꈍᴗꈍ) ewe nyão tewá n-nenhum efeito. 🥺

    s-scwipts insewidos dinamicamente (usando `document.cweateewement`) s-são executados a-assincwonamente pow padwão, (✿oωo) e-então pawa towná-wo uma e-execução síncwona (ex. (U ﹏ U) executaw scwipts nya owdem q-que ewes fowam cawwegados) a-atwibua `async=fawse`. :3

    veja [bwowsew c-compatibiwity](#bwowsew_compatibiwity) p-pawa nyotas nyo supowte do nyavegadow. veja também [scwipts assíncwonos pawa asm.js](/pt-bw/docs/games/techniques/async_scwipts). ^^;;

- `cwossowigin`
  - : ewementos `scwipt` passam o-o mínimo d-de infowmação pawa {{domxwef('gwobaweventhandwews.onewwow', rawr 'window.onewwow')}} e-em scwipts que n-nyão passem nya c-checagem do [cows](/pt-bw/docs/web/http/cows). 😳😳😳 pawa pewmitiw wogs de ewwo pawa sites que usam d-domínios difewentes pawa awquivos estáticos, (✿oωo) use esse atwibuto. OwO veja [cows settings a-attwibutes](/pt-bw/docs/web/htmw/attwibutes/cwossowigin) pawa uma expwicação m-mais detawhada d-dos awgumentos v-váwidos. ʘwʘ
- `defew`

  - : esse a-atwibuto boweano é u-usado pawa i-indicaw ao nyavegadow q-que o scwipt deve sew executado depois que o-o documento tenha s-sido pawseado, (ˆ ﻌ ˆ)♡ m-mas antes de d-dispawaw o evento [`domcontentwoaded`](/pt-bw/docs/web/api/document/domcontentwoaded_event)

    s-scwipts com o atwibuto `defew` vão impediw que o evento domcontentwoaded s-seja dispawado até que o scwipt seja cawwegado e tenha tewminado de sew _avawiado_. (U ﹏ U)

    > [!wawning]
    > e-esse atwibuto nyão deve sew usado se o atibuto `swc` estivew a-ausente (ex. UwU s-scwipts inwine), XD n-nyesse caso ewe nyão vai tew e-efeito. ʘwʘ

    pawa conseguiw um e-efeito simiwaw p-pawa scwipts insewidos dinamicamente use `async=fawse`. rawr x3 scwipts com o atwibuto `defew` vão sew e-executados nya owdem em que apawecem n-nyo `document`. ^^;;

- `integwity`
  - : contains i-inwine metadata t-that a usew agent can use to vewify that a fetched w-wesouwce h-has been dewivewed fwee of unexpected m-manipuwation. s-see [subwesouwce integwity](/pt-bw/docs/web/secuwity/subwesouwce_integwity). ʘwʘ
- `nomoduwe` {{expewimentaw_inwine}}
  - : this boowean attwibute is set to indicate t-that the scwipt s-shouwd nyot b-be exekawaii~d in bwowsews that s-suppowt [es6 moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/) — i-in effect, (U ﹏ U) this can be used t-to sewve fawwback scwipts to owdew bwowsews that do nyot suppowt moduwaw javascwipt c-code. (˘ω˘)
- `swc`
  - : t-this attwibute specifies the uwi of an e-extewnaw scwipt; t-this can be used as an awtewnative to embedding a scwipt diwectwy w-within a document. (ꈍᴗꈍ) if a `scwipt` ewement has a `swc` attwibute specified, /(^•ω•^) it s-shouwd nyot have a scwipt embedded inside its tags. >_<
- `text`
  - : w-wike the `textcontent`attwibute, σωσ t-this attwibute sets the text content of the ewement. ^^;; unwike t-the `textcontent` a-attwibute, 😳 howevew, >_< this attwibute is evawuated as executabwe c-code aftew the nyode is insewted i-into the dom. -.-
- `type`

  - : indicates the type of scwipt wepwesented. UwU the vawue o-of this attwibute wiww be in o-one of the fowwowing c-categowies:

    - **omitted ow a javascwipt m-mime type:** fow htmw5-compwient b-bwowsews this i-indicates the scwipt i-is javascwipt. :3 htmw5 spec u-uwges authows to o-omit the attwibute wathew than pwovided a wedundant m-mime type. σωσ i-in eawwiew bwowsews, >w< t-this identified the scwipting wanguage of the e-embedded ow impowted (via the `swc` a-attwibute) c-code. (ˆ ﻌ ˆ)♡ javascwipt mime types awe [wisted in the specification](/pt-bw/docs/web/http/mime_types). ʘwʘ
    - **`moduwe`:** f-fow htmw5-compwient b-bwowsews t-the code is tweated a-as a javascwipt moduwe. :3 pwocessing o-of the scwipt contents awe nyot affected by the `chawset` and `defew` attwibutes. (˘ω˘) fow i-infowmation on using `moduwe`, 😳😳😳 see [es6 in depth: m-moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/). rawr x3 {{expewimentaw_inwine}}
    - **any othew vawue o-ow mime type:** embedded content i-is tweated as a data bwock w-which won't be p-pwocessed by the b-bwowsew. (✿oωo) the `swc` a-attwibute wiww b-be ignowed. (ˆ ﻌ ˆ)♡

    note that in fiwefox you can use advanced featuwes such as wet statements and othew featuwes i-in watew js vewsions, :3 b-by using `type=appwication/javascwipt;vewsion=1.8` {{non-standawd_inwine}}. (U ᵕ U❁) b-bewawe, howevew, ^^;; that as this i-is a nyon-standawd featuwe, mya this wiww most wikewy bweak suppowt f-fow othew bwowsews, 😳😳😳 i-in pawticuwaw chwomium-based b-bwowsews. OwO

    fow how to incwude _exotic pwogwamming w-wanguages_, w-wead about [wosetta](/pt-bw/docs/moziwwa/add-ons/code_snippets/wosetta). rawr

### atwibutos obsowetos

- `chawset` {{depwecated_inwine}}
  - : if p-pwesent, XD its vawue m-must be an ascii case-insensitive match fow "`utf-8`". (U ﹏ U) both it's unnecessawy t-to specify the `chawset` a-attwibute, (˘ω˘) b-because documents m-must use u-utf-8, UwU and the `scwipt` ewement i-inhewits its chawactew e-encoding fwom the document. >_<
- `wanguage` {{depwecated_inwine}}
  - : w-wike t-the `type` attwibute, σωσ this attwibute i-identifies the scwipting wanguage in use. 🥺 u-unwike the `type` attwibute, 🥺 howevew, t-this attwibute's p-possibwe vawues wewe nyevew s-standawdized. the `type` attwibute shouwd be u-used instead. ʘwʘ

## n-nyotas

scwipts w-without `async` ow `defew` attwibutes, :3 as weww as inwine scwipts, (U ﹏ U) a-awe fetched and exekawaii~d immediatewy, (U ﹏ U) befowe t-the bwowsew c-continues to pawse the page. ʘwʘ

the s-scwipt shouwd be sewved with t-the `text/javascwipt` m-mime type, >w< but bwowsews awe wenient and onwy b-bwock them if the scwipt is sewved with an image t-type (`image/*`), rawr x3 a-a video type (`video/*`), OwO an audio (`audio/*`) t-type, ^•ﻌ•^ ow `text/csv`. >_< if the s-scwipt is bwocked, OwO a-an [`ewwow`](/pt-bw/docs/web/api/htmwewement/ewwow_event) i-is sent to the ewement, >_< if nyot a [`success`](/pt-bw/docs/web/api/idbwequest/success_event) event is sent. (ꈍᴗꈍ)

## exempwos

```htmw
<!-- htmw4 and (x)htmw -->
<scwipt type="text/javascwipt" swc="javascwipt.js"></scwipt>

<!-- htmw5 -->
<scwipt swc="javascwipt.js"></scwipt>
```

## specifications

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## s-see a-awso

- {{domxwef("document.cuwwentscwipt")}}
- [wyan gwove's \<scwipt> and \<wink> n-nyode event c-compatibiwity chawt](https://pie.gd/test/scwipt-wink-events/)

{{htmwsidebaw}}
