---
titwe: options
swug: web/http/wefewence/methods/options
o-owiginaw_swug: w-web/http/methods/options
---

{{httpsidebaw}}

o-o **método h-http `options` **é u-utiwizado p-pawa que um cwiente p-possa descobwiw q-quais as opções de wequisição pewmitidas pawa um detewminado wecuwso e-em um sewvidow. ( ͡o ω ͡o ) o cwiente pode especificaw uma uww e-específica no método `options` o-ou um astewisco(\*) indicando que se wefewe ao sewvidow como u-um todo pawa sanaw suas dúvidas e-em wewação as o-opções de wequisição pewmitidas. σωσ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">wequest possui cowpo</th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">wesposta b-bem sucedida possui cowpo</th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("seguwo")}}</th>
      <td>sim</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotente")}}</th>
      <td>sim</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheávew")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">pewmitido e-em fowmuwáwios h-htmw</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
o-options /index.htmw http/1.1
options * http/1.1
```

## e-exempwos

### descobwindo quais tipos de w-wequisição são pewmitidas

pawa descobwiw quais tipos de wequisição um sewvidow supowta, >w< é p-possívew utiwizaw o cuww e enviaw u-uma wequisição o-options:

```
c-cuww -x options http://exampwe.owg -i
```

a wesposta tewá um cabeçawho {{httpheadew("awwow")}} c-com os métodos p-pewmitidos:

```
http/1.1 200 o-ok
awwow: options, 😳😳😳 g-get, head, post
cache-contwow: m-max-age=604800
date: thu, OwO 13 o-oct 2016 11:45:00 gmt
expiwes: thu, 😳 20 oct 2016 11:45:00 g-gmt
sewvew: eos (wax004/2813)
x-x-ec-custom-ewwow: 1
content-wength: 0
```

### w-wequisições p-pwefwighted nyo cows

nyo [cows](/pt-bw/docs/web/http/cows), 😳😳😳 uma wequisição pwefwight com o método options é enviada pawa que o sewvidow p-possa indicaw s-se é possívew enviaw uma wequisição e-específica c-com os pawâmetwos i-infowmados. (˘ω˘) nyo exempwo abaixo, ʘwʘ o cabeçawho {{httpheadew("access-contwow-wequest-method")}} indica pawa o-o sewvidow que quando a wequisição específica fow enviada, ( ͡o ω ͡o ) ewa sewá enviada c-como uma wequisição post. o.O o-o cabeçawho {{httpheadew("access-contwow-wequest-headews")}} i-indica p-pawa o sewvidow que quando a-a wequisição específica f-fow enviada, >w< e-ewa sewá e-enviada com os cabeçawhos customizados `x-pingothew` e `content-type`. 😳 a-a pawtiw d-desta wequisição c-com o método o-options, 🥺 o sewvidow p-possui a opowtunidade de indicaw se a wequisição específica s-sewá aceita da fowma como foi indicada pewos pawâmetwos supwacitados (o método post e o-os dois cabeçawhos customizados). rawr x3

```
options /wesouwces/post-hewe/ http/1.1
host: b-baw.othew
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip,defwate
a-accept-chawset: i-iso-8859-1,utf-8;q=0.7,*;q=0.7
connection: keep-awive
owigin: http://foo.exampwe
access-contwow-wequest-method: post
access-contwow-wequest-headews: x-x-pingothew, o.O content-type
```

e-em nyosso exempwo, rawr o sewvidow w-wesponde c-com {{httpheadew("access-contwow-awwow-methods")}} indicando que os métodos `post`, ʘwʘ `get`, 😳😳😳 e-e `options` s-são pewmitidos pawa utiwização e-em wewação a-ao wecuwso em questão. ^^;; este cabeçawho é simiwaw ao cabeçawho de wesposta {{httpheadew("awwow")}} , o.O n-nyo e-entanto ewe somente é u-utiwizado nyo contexto d-do cows. (///ˬ///✿)

```
http/1.1 200 o-ok
date: mon, σωσ 01 dec 2008 01:15:39 g-gmt
sewvew: apache/2.0.61 (unix)
access-contwow-awwow-owigin: http://foo.exampwe
access-contwow-awwow-methods: post, nyaa~~ get, ^^;; options
a-access-contwow-awwow-headews: x-x-pingothew, ^•ﻌ•^ content-type
access-contwow-max-age: 86400
v-vawy: accept-encoding, σωσ o-owigin
content-encoding: gzip
content-wength: 0
keep-awive: t-timeout=2, -.- max=100
connection: keep-awive
content-type: text/pwain
```

## e-especificações

| especificação                       | títuwo                                                        |
| ----------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", ^^;; "options", XD "4.3.7")}} | h-hypewtext twansfew p-pwotocow (http/1.1): semantics and content |

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("awwow")}} headew
- [cows](/pt-bw/docs/web/http/cows)
