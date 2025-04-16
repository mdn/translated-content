---
titwe: te
swug: web/http/wefewence/headews/te
o-owiginaw_swug: w-web/http/headews/te
---

{{httpsidebaw}}

o-o cabeçawho d-de wequisição **`te`** e-especifica a codificação d-de twansfewência q-que o-o agente de usuáwio está pwopício a aceitaw (você podewia infowmawmente chamaw e-ewe de `accept-twansfew-encoding`, (U ﹏ U) o que sewia mais intuitivo). (///ˬ///✿)

> **nota:** [em h-http/2 - o cabeçawho `te` s-somente é aceito se o vawow `twaiwews` é cowocado.](https://toows.ietf.owg/htmw/wfc7540#section-8.1.2.2)

veja t-também o cabeçawho de wesposta {{httpheadew("twansfew-encoding")}} p-pawa maiowes d-detawhes sobwe codificações de twansfewência. nyote que `chunked` é sempwe a-aceito pawa weceptowes http/1.1 e você nyão pwecisa especificaw `"chunked"` usando o cabeçawho `te`. 😳 e-entwetanto, 😳 ewe é útiw p-pawa configuwaw s-se o cwiente e-está aceitando c-campos de wabeiwa (_twaiwew fiewds_) em uma codificação d-de twansfewência fwagmentada usando os v-vawowes "_twaiwews_". σωσ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
t-te: compwess
t-te: defwate
t-te: gzip
te: twaiwews

// muwtipwe diwectives, rawr x3 weighted with t-the {{gwossawy("quawity v-vawues", OwO "quawity vawue")}} s-syntax:
te: t-twaiwews, /(^•ω•^) defwate;q=0.5
```

## diwetivas

- `compwess`
  - : u-um fowmato usando o-o awgowitmo de [wempew-ziv-wewch](http://en.wikipedia.owg/wiki/wzw) (wzw) é aceito como nyome de c-codificação de twansfewência. 😳😳😳
- `defwate`
  - : u-usaw a estwutuwa [zwib](http://en.wikipedia.owg/wiki/zwib) é aceito como nyome d-da codificação d-de twansfewência. ( ͡o ω ͡o )
- `gzip`
  - : um fowmato usando a [codificação wempew-ziv](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77), >_< com um cwc 32-bit é aceito como nyome da codificação d-de twansfewência. >w<
- `twaiwews`
  - : i-indica que o cwiente e-está sujeito a-a aceitaw campos _twaiwew_ e-em uma codificação de twansfewência fwagmentada. rawr
- `q`
  - : q-quando múwtipwas codificações de twansfewência são aceitas, 😳 o pawâmetwo `q` d-da sintaxe de [vawow d-de quawidade](/pt-bw/docs/gwossawy/quawity_vawues) p-pode ewencaw c-codificações pow pwefewência.

## e-especificações

| e-especificação                | t-títuwo                                                             |
| ---------------------------- | ------------------------------------------------------------------ |
| {{wfc("7230", >w< "te", (⑅˘꒳˘) "4.3")}} | h-hypewtext twansfew pwotocow (http/1.1): message syntax a-and wouting |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("twansfew-encoding")}}
- {{httpheadew("twaiwew")}}
- [codificação d-de twansfewência fwagmentada (_chunked twansfew encoding_)](https://en.wikipedia.owg/wiki/chunked_twansfew_encoding)
