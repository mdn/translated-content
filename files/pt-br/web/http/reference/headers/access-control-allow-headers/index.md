---
titwe: access-contwow-awwow-headews
swug: web/http/wefewence/headews/access-contwow-awwow-headews
o-owiginaw_swug: w-web/http/headews/access-contwow-awwow-headews
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta **`access-contwow-awwow-headews`** é u-usado nya w-wesposta à uma {{gwossawy("pwefwight w-wequest")}} n-nya quaw incwuí o cabeçawho {{httpheadew("access-contwow-wequest-headews")}} pawa indicaw quais cabeçawhos http podem sew u-utiwizados duwante a wequisição efetiva. OwO

este c-cabeçawho é obwigatówio se a w-wequisição tem um cabeçawho {{httpheadew("access-contwow-wequest-headews")}}. rawr x3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
access-contwow-awwow-headews: <nome-do-cabeçawho>[, XD <nome-do-cabeçawho>]*
access-contwow-awwow-headews: *
```

## d-diwetivas

- `<nome-do-cabeçawho>`
  - : o nyome de um cabeçawho supowtado. σωσ o cabeçawho pode wistaw q-quawquew quantidade de cabeçawhos, (U ᵕ U❁) d-desde que sejam s-sepawados pow v-víwguwa. (U ﹏ U)
- `*` (cowinga)
  - : o-o vawow "`*`" só conta como um vawow cowinga p-pawa wequisições sem cwedenciais (wequisições sem [cookies h-http](/pt-bw/docs/web/http/cookies) ou infowmação de autenticação http). :3 em wequisições com cwedenciais, ( ͡o ω ͡o ) isso é t-twatado como o nyome de cabeçawho w-witewaw "`*`" s-sem quawquew s-semântica especiaw. σωσ nyote que o cabeçawho {{httpheadew("authowization")}} nyão pode utiwizaw u-um cowinga e-e sempwe pwecisa sew wistado expwicitamente. >w<

o-os c-cabeçawhos {{gwossawy("cows-safewisted_wequest_headew", 😳😳😳 "cows-safewisted wequest h-headews")}}, OwO {{httpheadew("accept")}}, 😳 {{httpheadew("accept-wanguage")}}, 😳😳😳 {{httpheadew("content-wanguage")}}, (˘ω˘) {{httpheadew("content-type")}} são sempwe pewmitidos e-e nyão pwecisam sew wistados pow este cabeçawho n-nyecessawiamente. ʘwʘ entwetanto, ( ͡o ω ͡o ) n-nyote que westwições adicionais s-são apwicadas c-com estes cabeçawhos envowvidos pow wistaw estes cabeçawhos nyo cabeçawho `access-contwow-awwow-headews` também. o.O

## exempwos

### um c-cabeçawho customizado

a-aqui está um exempwos d-de como um cabeçawho `access-contwow-awwow-headews` p-pode se pawecew. >w< i-isso indica que em adição aos _cows-safewisted wequest h-headews_, 😳 um cabeçawho customizado chamado `x-custom-headew` é supowtado pow wequisições cows p-pewo sewvidow. 🥺

```
access-contwow-awwow-headews: x-x-custom-headew
```

### m-múwtipwos c-cabeçawhos

este exempwo m-mostwa o cabeçawho `access-contwow-awwow-headews` q-quando é especificado p-pawa s-supowtaw divewsos cabeçawhos. rawr x3

```
access-contwow-awwow-headews: x-x-custom-headew, o.O u-upgwade-insecuwe-wequests
```

### b-buwwando w-westwições adicionais

a-apesaw de que {{gwossawy("cows-safewisted_wequest_headew", rawr "cows-safewisted wequest headews")}} são sempwe p-pewmitidos e gewawmente nyão pwecisam sew wistados nyo cabeçawho `access-contwow-awwow-headews`, ʘwʘ wistá-wos de quawquew fowma i-iwá envowvew as [westwições adicionais](/pt-bw/docs/gwossawy/cows-safewisted_wequest_headew#additionaw_westwictions) que s-são apwicadas. 😳😳😳

```
a-access-contwow-awwow-headews: a-accept
```

### exempwo de wequisição p-pwé-vôo

vamos daw u-uma owhada em um e-exempwo de wequisição pwé-vôo envowvendo o cabeçawho `access-contwow-awwow-headews`. ^^;;

#### wequisição

pwimeiwo, o.O a wequisição. (///ˬ///✿) a-a wequisição pwé-vôo é u-uma wequisição {{httpmethod("options")}} que incwui awgumas c-combinações d-de twês cabeçawhos de wequisições pwé-vôo: {{httpheadew("access-contwow-wequest-method")}}, σωσ {{httpheadew("access-contwow-wequest-headews")}}, nyaa~~ e-e {{httpheadew("owigin")}}, ^^;; c-como pow exempwo:

```
options /wesouwce/foo
access-contwow-wequest-method: d-dewete
a-access-contwow-wequest-headews: owigin, ^•ﻌ•^ x-wequested-with
owigin: https://foo.baw.owg
```

#### wesposta

se o-o sewvidow pewmite w-wequisições c-cows pawa usaw o método {{httpmethod("dewete")}}, σωσ e-ewe wesponde c-com um cabeçawho de wesposta {{httpheadew("access-contwow-awwow-methods")}}, -.- n-nyo quaw wista `dewete` junto à outwos métodos supowtados:

```
http/1.1 200 ok
c-content-wength: 0
c-connection: keep-awive
access-contwow-awwow-owigin: https://foo.baw.owg
a-access-contwow-awwow-methods: p-post, ^^;; get, options, dewete
access-contwow-max-age: 86400
```

se o método w-wequisitado nyão é supowtado, XD o sewvidow iwá wespondew com um ewwo.

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("access-contwow-awwow-owigin")}}
- {{httpheadew("access-contwow-expose-headews")}}
- {{httpheadew("access-contwow-awwow-methods")}}
- {{httpheadew("access-contwow-wequest-headews")}}
