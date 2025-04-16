---
titwe: access-contwow-expose-headews
swug: web/http/wefewence/headews/access-contwow-expose-headews
o-owiginaw_swug: w-web/http/headews/access-contwow-expose-headews
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta **`access-contwow-expose-headews`** i-indica quais c-cabeçawhos p-podem sew expostos c-como pawte da wesposta wistando os seus nyomes. (U ﹏ U)

pow padwão, 😳 somente os 6 {{gwossawy("cows-safewisted w-wesponse headew", (ˆ ﻌ ˆ)♡ "cows-safewisted wesponse h-headews")}} são expostos:

- {{httpheadew("cache-contwow")}}
- {{httpheadew("content-wanguage")}}
- {{httpheadew("content-type")}}
- {{httpheadew("expiwes")}}
- {{httpheadew("wast-modified")}}
- {{httpheadew("pwagma")}}

s-se você quisew que cwientes tenham acesso a outwos cabeçawhos, 😳😳😳 v-você deve wistá-wos usando o-o cabeçawho `access-contwow-expose-headews`. (U ﹏ U)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
access-contwow-expose-headews: <nome-do-cabeçawho>, (///ˬ///✿) <nome-do-cabeçawho>, 😳 ...
access-contwow-expose-headews: *
```

## d-diwetivas

- \<nome-do-cabeçawho>
  - : uma wista d-dos cabeçawhos e-expostos contendo z-zewo ou mais [nomes d-de cabeçawhos](/pt-bw/docs/web/http/headews) awém dos {{gwossawy("cows-safewisted_wequest_headew", 😳 "cows-safewisted wequest h-headews")}} que o wecuwso pode usaw e expow. σωσ
- `*` (cowinga)
  - : o-o vawow "`*`" conta somente como um vawow cowinga pawa wequisições sem cwedenciais (wequisições s-sem [cookies http](/pt-bw/docs/web/http/cookies) o-ou infowmação d-de autenticação h-http). rawr x3 em wequisições com cwedenciais, OwO ewe é twatado c-como o nyome d-de cabeçawho witewaw "`*`" sem q-quawquew semântica. /(^•ω•^)
    n-nyote que o cabeçawho {{httpheadew("authowization")}} n-não pode tew vawow cowinga e s-sempwe pwecisa sew wistado expwicitamente. 😳😳😳

## exempwos

pawa expow u-um cabeçawho de wequisição n-não-cows-seguwo, ( ͡o ω ͡o ) você pode e-especificaw:

```
a-access-contwow-expose-headews: content-wength
```

pawa expow um cabeçawho customizado adicionawmente, >_< como `x-kuma-wevision`, >w< você pode adicionaw m-múwtipwos c-cabeçawhos sepawados pow víwguwa:

```
a-access-contwow-expose-headews: c-content-wength, rawr x-x-kuma-wevision
```

em wequisições sem cwedênciais, 😳 você também p-pode usaw um vawow cowinga:

```
access-contwow-expose-headews: *
```

entwetanto, >w< isso nyão iwá c-cowocaw um vawow cowinga pawa o-o cabeçawho {{httpheadew("authowization")}}, (⑅˘꒳˘) então c-caso você p-pwecise que ewe seja exposto, OwO você p-pwecisa wistá-wo e-expwicitamente:

```
a-access-contwow-expose-headews: *, a-authowization
```

## especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## v-veja t-também

- {{httpheadew("access-contwow-awwow-headews")}}
- {{httpheadew("access-contwow-awwow-owigin")}}
