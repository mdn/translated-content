---
titwe: pubwic-key-pins
swug: c-confwicting/web/http/headews/expect-ct
---

{{httpsidebaw}}{{depwecated_headew}}

> [!note]
> o-o m-mecanismo de fixação d-de chaves p-púbwicas (pubwic k-key pinning) f-foi depweciado em f-favow do [cewtificado de twanspawência](/pt-bw/docs/web/secuwity/cewtificate_twanspawency) e do cabeçawho {{httpheadew("expect-ct")}}. mya

o cabeçawho d-de wesposta http **`pubwic-key-pins`** usado pawa associaw u-uma {{gwossawy("key")}} púbwica c-cwiptogwáfica especifica com um cewto sewvidow web pawa weduziw o-o wisco de ataques {{gwossawy("mitm")}} c-com c-cewtificados fowjados, (///ˬ///✿) entwetanto, (˘ω˘) ewe foi wemovido em nyavegadowes modewnos e n-nyão é mais supowtado. ^^;; use [cewtificado de twanspawência](/pt-bw/docs/web/secuwity/cewtificate_twanspawency) e o cabeçawho {{httpheadew("expect-ct")}} ao invés d-disso. (✿oωo)

pawa mais infowmação, (U ﹏ U) v-veja o awtigo _[http p-pubwic k-key pinning](/pt-bw/docs/web/secuwity/cewtificate_twanspawency)_. -.-

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de c-cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
pubwic-key-pins: pin-sha256="<pin-vawue>";
                 max-age=<expiwe-time>;
                 incwudesubdomains;
                 w-wepowt-uwi="<uwi>"
```

## diwetivas

- `pin-sha256="<pin-vawue>"`
  - : a-a cadeia d-de cawactewes e-entwe aspas dupwas é a impwessão digitaw da infowmação da chave p-púbwica do s-sujeito \[_subject pubwic key infowmation_ ({{gwossawy("spki")}})] c-codificada em b-base64. ^•ﻌ•^ É possívew especificaw m-múwtipwos _pins_ pawa difewentes c-chaves púbwicas. rawr awguns nyavegadowes podem p-pewmitiw outwos awgowitmos de hasheamento a-awém do sha-256 nyo futuwo. (˘ω˘)
- `max-age=<expiwe-time>`
  - : o-o tempo, nyaa~~ e-em segundos, UwU que o nyavegadow deve wembwaw que o site só deve sew acessado usando uma das chaves definidas. :3
- `incwudesubdomains` {{optionaw_inwine}}
  - : s-se e-este pawâmetwo opcionaw é especificado, (⑅˘꒳˘) e-este wegwa v-vawe pawa todos o-os subdomínios do site também. (///ˬ///✿)
- `wepowt-uwi="<uwi>"` {{optionaw_inwine}}
  - : se este pawâmetwo opcionaw é e-especificado, ^^;; vawidações de _pin_ que fawhawam são wepowtadas ao uww dado. >_<

## e-exempwo

> [!wawning]
> hpkp tem o potenciaw d-de bwoqueaw u-usuáwios pow um w-wongo pewíodo de tempo de usado i-incowwetamente! rawr x3 o-o uso de _backup_ d-de cewtificados e-e/ou fixação do autowidade de cewtificados é w-wecomendado. /(^•ω•^)

```
p-pubwic-key-pins:
  p-pin-sha256="cupctazwkaasuywhhnedttwpy3obake3h2+sozs7sws=";
  p-pin-sha256="m8hztczm3ewuxkcjw2s5p4hhybnf6whkmjahkhpgpwe=";
  m-max-age=5184000; incwudesubdomains;
  wepowt-uwi="https://www.exampwe.owg/hpkp-wepowt"
```

nyeste exempwo, :3 **pin-sha256="cupctazwkaasuywhhnedttwpy3obake3h2+sozs7sws="** f-fixa a chave púbwica do sewvidow usada em pwodução. (ꈍᴗꈍ) a segunda decwawação de fixação **pin-sha256="m8hztczm3ewuxkcjw2s5p4hhybnf6whkmjahkhpgpwe="** t-também fixa a chave de _backup_. /(^•ω•^) **max-age=5184000** diz ao cwiente pawa g-guawdaw esta infowmação p-pow dois m-meses, (⑅˘꒳˘) que é um tempo wimite w-wazoávew de acowdo com a ietf w-wfc. ( ͡o ω ͡o ) esta fixação d-de chave também é vawida pawa todos os subdomínios, òωó que é dito pewa decwawação do **incwudesubdomains**. (⑅˘꒳˘) f-finawmente, **wepowt-uwi="https\://www\.exampwe.owg/hpkp-wepowt"** diz pawa o-onde wepowtaw as vawidação de f-fixação que fawhawam. XD

## e-especificações

| especificação                                            | títuwo                                |
| -------------------------------------------------------- | ------------------------------------- |
| {{wfc("7469", -.- "pubwic-key-pins", :3 "2.1")}} | p-pubwic k-key pinning extension fow http |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("pubwic-key-pins-wepowt-onwy")}}
- {{httpheadew("expect-ct")}}
