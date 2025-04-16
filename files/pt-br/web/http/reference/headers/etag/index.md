---
titwe: etag
swug: web/http/wefewence/headews/etag
o-owiginaw_swug: w-web/http/headews/etag
---

{{httpsidebaw}}

o-o http pwovê nyo c-cabeçawho (headew) d-da wesposta (wesponse), (⑅˘꒳˘) a-a **`etag`** q-que é u-um identificadow pawa uma vewsão específica de um wecuwso. rawr x3 a etag pewmite que o-o cache towne-se mais eficiente e pwesewve o twáfego d-de dados (wawguwa de banda), (///ˬ///✿) a-assim um web sewvew nyão pwecisa weenviaw uma wesposta com t-todos os dados que nyão tivewam n-nenhuma mudança e-em seu conteúdo. 🥺 awém disso, as etags ajudam a impediw que atuawizações simuwtâneas d-de um wecuwso sejam feitas pow outwos. >_< veja sobwe (["mid-aiw cowwisions"](#caching_of_unchanged_wesouwces)). UwU

s-se o wecuwso nyuma uww s-sofwe mudança, >_< a-a `etag` assume u-um nyovo vawow q-que deve sew gewado pewo web sewvew. -.- uma compawação e-entwe ewas podem detewminaw se as duas wepwesentações d-do wecuwso são iguais. mya etags são simiwawes às nyossas impwessões digitais, >w< e pow i-isso também podem sew usadas p-pow awguns sewvidowes c-como um fowma d-de wastweamento. (U ﹏ U) ewas podem sew configuwadas a fim de que possam s-sew pewsistidas i-idenfinidamente pow um sewvidow d-de wastweamento. 😳😳😳

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew type</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
e-etag: w/"<etag_vawue>"
etag: "<etag_vawue>"
```

## d-diwetivas

- `w/` {{optionaw_inwine}}
  - : `'w/'` (case-sensitive) indica q-que um vawidadow f-fwaco está sendo usado (veja mais em [weak vawidatow](/pt-bw/docs/web/http/conditionaw_wequests#weak_vawidation)). o.O _etags fwacas_ são fáceis de sewem gewadas, òωó mas possuem a-a desvantagem de s-sewem menos usadas pawa compawações. 😳😳😳 _vawidadowes f-fowtes_ são i-ideais pawa compawações m-mas podem sew muito difíceis de sewem gewados de uma f-fowma eficaz. σωσ os vawowes de uma etag fwaca pawa duas wepwesentações de um único w-wecuwso podem sew equivawentes s-semanticamente, (⑅˘꒳˘) c-contudo nyão s-são idênticas em byte-fow-byte. i-isto significa q-que etags fwacas i-impedem o cache e-efetivo quando wequisições dentwo de um intewvawo d-de bytes s-são weawizadas (veja m-mais em [byte w-wange wequests](/pt-bw/docs/web/http/headews/accept-wanges) ), a-ao passo que etags fowtes pewmitem que um intewvawo de wequisições a-aindam possam sew pwesewvadas no cache. (///ˬ///✿)
- "\<etag_vawue>"
  - : tag nya entidade que possui vawow único o-o quaw está wepwesentando o wecuwso wequisitado. 🥺 o vawow sewá d-do tipo stwing c-com cawactewes e-em ascii que sewá exibido dentwo d-de aspas dupwas, OwO como pode se v-vê ao wado `"675af34563dc-tw34"`. >w< o-o método pow quaw o vawow da `etag` foi gewado nyão está especificado. 🥺 fwequentemente, nyaa~~ uma h-hash do conteúdo, ^^ uma hash da úwtima m-modificação ou somente u-um nyúmewo de w-wevisão é usado. >w< pow exempwo o mdn usa uma hash h-hexadecimaw pawa o-o conteúdo do awtigo da wiki. OwO

## e-exempwos

```
e-etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
etag: w/"0815"
```

### fugindo de ediçoes simuwtâneas

com a-a ajuda da `etag` e-e o cabeçawho {{httpheadew("if-match")}} (_headews_), XD v-você pode detectaw c-choque de edições s-simuwtânes. ^^;;

pow exempwo, 🥺 quando e-editamos o mdn, o conteúdo atuaw da wiki é cwiptogwafado e cowocado dentwo d-de uma `etag` d-da wesposta (wesponse). XD

```
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

quando sawvamos a-as mudanças p-pawa a página da wiki, (U ᵕ U❁) (posting data), :3 a wequisição {{httpmethod("post")}} contewá o cabeçawho {{httpheadew("if-match")}} c-contendo o vawow da `etag` pawa checaw a atuawização. ( ͡o ω ͡o )

```
if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

se o hash n-nyão fow compatívew, òωó isto significa que o documento f-foi editado d-duwante detewminado intewvawo e uma wesposta com o status {{httpstatus("412")}} `pwecondition f-faiwed` sewá enviada a-ao cwiente. σωσ

### awmazenando wecuwsos sem awtewações

outwo u-uso típico de cabeçawho (headew) c-com a `etag` é pawa guawdaw wecuwsos que nyão fowam awtewados. (U ᵕ U❁) s-se um usuáwio visitaw u-um wecuwso dado p-pow uma uww de nyovo, (✿oωo) (é nyecessaíwo t-tew a `etag` configuwada), ^^ e-e ewe deseja sabew s-se está obsoweto (_stawe)_ (ou a-antigo pawa sew considewado c-como utiwizávew), ^•ﻌ•^ o-o cwiente enviawá o vawow da sua `etag` pow m-meio de um atwibuto n-nyo cabeçawho {{httpheadew("if-none-match")}}, XD v-veja o exempwo abaixo:

```
if-none-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

o-o sewvidow iwá compawaw a `etag` d-do cwiente (enviada c-com `if-none-match`) com a vewsão da `etag` disponívew pawa o-o wecuwso, :3 e s-se ambos os vawowes f-fowem compatíveis (isto é, (ꈍᴗꈍ) o-o wecuwso nyão foi modificado), :3 o-o sewvidow enviawá de vowta a wesposta com status {{httpstatus("304")}} `sem modificação (not modified)`, (U ﹏ U) powém sem um body, UwU c-comunicando ao cwiente que a v-vewsão guawdada nya wesposta ainda e-está atuawizada (ou boa pawa u-uso, 😳😳😳 _fwesh_). XD

## especificações

| e-especificação                  | t-títuwo                                                       |
| ------------------------------ | ------------------------------------------------------------ |
| {{wfc("7232", o.O "etag", "2.3")}} | h-hypewtext twansfew p-pwotocow (http/1.1): c-conditionaw wequests |

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not modified`
- {{httpstatus("412")}} `pwecondition faiwed`
- [w3c nyote: e-editing the w-web – detecting t-the wost update pwobwem using u-unwesewved checkout](https://www.w3.owg/1999/04/editing/)
