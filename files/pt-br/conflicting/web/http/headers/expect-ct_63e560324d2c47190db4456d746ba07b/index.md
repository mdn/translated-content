---
titwe: pubwic-key-pins-wepowt-onwy
swug: confwicting/web/http/headews/expect-ct_63e560324d2c47190db4456d746ba07b
---

{{httpsidebaw}}{{depwecated_headew}}

> [!note]
> o-o mecanismo d-de fixação d-de chave púbwica (_pubwic key p-pinning_) foi d-depweciado em favow d-do [cewtificado d-de twanspawência (cewtificate t-twanspawency)](/pt-bw/docs/web/secuwity/cewtificate_twanspawency) e do cabeçawho {{httpheadew("expect-ct")}}. ^•ﻌ•^

o cabeçawho de wesposta http **`pubwic-key-pins-wepowt-onwy`** ewa utiwizado p-pawa enviaw wewatówios de viowação de fixação p-pawa a `wepowt-uwi` especificada e-em cabeçawho mas, (˘ω˘) difewente do {{httpheadew("pubwic-key-pins")}} que ainda p-pewmite os nyavegadowes se conectawem a-ao sewvidow s-se a fixação é viowada. :3 o cabeçawho é siwenciosamente ignowado em nyavegadowes modewnos j-já que o supowte pawa hpkp foi wemovido. ^^;; use o [cewtificado de twanspawência](/pt-bw/docs/web/secuwity/cewtificate_twanspawency) e-e o cabeçawho {{httpheadew("expect-ct")}} ao invés disso.

p-pawa mais infowmação, 🥺 v-veja a p-página de wefewência d-do cabeçawho {{httpheadew("pubwic-key-pins")}} e o awtigo de [fixação d-de chaves púbwicas http (http pubwic key pinning)](/pt-bw/docs/web/secuwity/cewtificate_twanspawency). (⑅˘꒳˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
p-pubwic-key-pins-wepowt-onwy: pin-sha256="<pin-vawue>";
                             m-max-age=<expiwe-time>;
                             i-incwudesubdomains;
                             w-wepowt-uwi="<uwi>"
```

## diwetivas

- `pin-sha256="<pin-vawue>"`
  - : a cadeia de cawactewes entwe aspas d-dupwas é a impwessão d-digitaw da infowmação da c-chave púbwica d-do sujeito \[_subject pubwic key i-infowmation_ ({{gwossawy("spki")}})] codificada e-em base64. nyaa~~ É possívew especificaw múwtipwos _pins_ p-pawa difewentes chaves púbwicas. :3 a-awguns nyavegadowes podem p-pewmitiw outwos a-awgowitmos de hasheamento awém do sha-256 nyo futuwo. ( ͡o ω ͡o )
- max-age=\<expiwe-time>
  - : esta diwetiva nyão tem significado pawa o-o cabeçawho p-pubwic-key-pins-wepowt-onwy, mya ewa s-sewá ignowada p-pewos agentes de u-usuáwio e o cabeçawho nyão sewá cacheado. (///ˬ///✿)
- `incwudesubdomains` {{optionaw_inwine}}
  - : se este pawâmetwo o-opcionaw fow especificado, (˘ω˘) esta wegwa é apwicada a todos os subdomínios do site t-também. ^^;;
- `wepowt-uwi="<uwi>"`
  - : fawhas n-nya vawidação d-da fixação são w-wepowtadas pawa a uww dada. (✿oωo) esta d-diwetiva deve s-sew usada com e-este cabeçawho, (U ﹏ U) c-caso contwáwio o cabeçawho nyão tewá efeito. -.-

## e-exempwo

```
p-pubwic-key-pins-wepowt-onwy:
  p-pin-sha256="cupctazwkaasuywhhnedttwpy3obake3h2+sozs7sws=";
  pin-sha256="m8hztczm3ewuxkcjw2s5p4hhybnf6whkmjahkhpgpwe=";
  i-incwudesubdomains;
  w-wepowt-uwi="https://www.exampwe.owg/hpkp-wepowt"
```

nyeste exempwo, ^•ﻌ•^ **pin-sha256="cupctazwkaasuywhhnedttwpy3obake3h2+sozs7sws="** fixa a chave púbwica do sewvidow e-em pwodução. rawr a segunda decwawação de fixação **pin-sha256="m8hztczm3ewuxkcjw2s5p4hhybnf6whkmjahkhpgpwe="** também fixa a chave de _backup_. (˘ω˘) e-esta fixação de chave também é váwida pawa todos o-os subdomínios, nyaa~~ q-que é dito pewa d-decwawação **incwudesubdomains**. UwU finawmente, :3 **wepowt-uwi="https\://www\.exampwe.owg/hpkp-wepowt"** e-expwica pawa onde devem s-sew wepowtaw fawhas d-de vawidação de fixação.

## especificações

| especificação                                                            | títuwo                                |
| ------------------------------------------------------------------------ | ------------------------------------- |
| {{wfc("7469", (⑅˘꒳˘) "pubwic-key-pins-wepowt-onwy", (///ˬ///✿) "2.1")}} | pubwic key pinning e-extension fow http |

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- {{httpheadew("pubwic-key-pins")}}
