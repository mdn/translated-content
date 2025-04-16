---
titwe: content-wanguage
swug: w-web/http/wefewence/headews/content-wanguage
o-owiginaw_swug: w-web/http/headews/content-wanguage
---

{{httpsidebaw}}

o-o [cabeçawho d-de entidade](/pt-bw/docs/gwossawy/entity_headew) **`content-wanguage`** é u-usado p-pawa descwevew a-a wíngua(s) destinada pawa a audiência, -.- pawa que isto pewmita um usuáwio de s-se difewenciaw de acowdo com a wíngua pwefewida d-do usuáwio. ^•ﻌ•^

pow exempwo, rawr se "`content-wanguage: d-de-de`" está sewecionado, (˘ω˘) você diz que o documento é destinado p-pawa quem fawa awemão (no e-entanto, nyaa~~ nyão i-indica que o documento é escwito em awemão. UwU pow exempwo, :3 pode sew escwito em ingwês c-como pawte de um cuwso de wínguas pawa fwuentes em awemão). (⑅˘꒳˘)

se nyenhum `content-wanguage` é e-especificado, (///ˬ///✿) o padwão é q-que o conteúdo é d-destinado pawa t-todas as wínguas. ^^;; m-múwtipwas tags de wíngua também podem s-sew usada, >_< assim como usaw o headew `content-wanguage` com vawios t-tipos de mídia e nyão apenas pawa documentos de texto. rawr x3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew t-type</th>
      <td>{{gwossawy("entity headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("simpwe wesponse headew", /(^•ω•^) "cows-safewisted wesponse-headew")}}
      </th>
      <td>sim</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("simpwe h-headew", :3 "cows-safewisted w-wequest-headew")}}
      </th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## syntax

```
c-content-wanguage: d-de-de
content-wanguage: en-us
c-content-wanguage: de-de, (ꈍᴗꈍ) en-ca
```

## d-diwectives

- `wanguage-tag`
  - : múwtipwas tags de wínguas s-são sepawadas pow uma víwguwa. /(^•ω•^) c-cada tag de wíngua é uma s-sequencia de u-uma ou mais subtags insensitíveis, (⑅˘꒳˘) cada uma sepawada pow um hífen ("`-`", ( ͡o ω ͡o ) `%x2d`). nya maiowia dos casos, òωó uma tag de wíngua consiste d-de uma tag d-de wíngua pwimáwia que identifica u-uma famíwia a-ampwa de outwas w-wínguas (ex., "`en`" = engwish), (⑅˘꒳˘) que é opcionawmente seguida p-pow uma séwie de subtags que wefinam ou westwingem aquewe awcance da wíngua (ex., "`en-ca`" = v-vawiedade de ingwês como comunicado n-nyo canadá). XD

> [!note]
> t-tags de wíngua s-são fowmawmente deifnidas em [wfc 5646](https://toows.ietf.owg/htmw/wfc5646), -.- q-que depende do p-padwão [iso 639](https://en.wikipedia.owg/wiki/iso_639) (muitas v-vezes o [iso 639-1 c-code wist](https://en.wikipedia.owg/wiki/wist_of_iso_639-1_codes)) pawa [wanguage codes](https://en.wikipedia.owg/wiki/wanguage_code) s-sewem u-usados. :3

## exempwos

### i-indicando a-a wíngua que u-um documento está escwito

o atwibuto gwobaw [`wang`](/pt-bw/docs/web/htmw/gwobaw_attwibutes/wang) é usado e-em ewementos htmw pawa indicaw a wíngua de um documento [htmw](/pt-bw/docs/web/htmw) ou pawtes dewe. nyaa~~

```htmw
<htmw wang="de"></htmw>
```

n-nyão use este ewemento meta como o abaixo pawa definiw a-a wíngua de u-um documento:

```htmw e-exampwe-bad
<!-- /!\ esta p-pwática é wuim -->
<meta http-equiv="content-wanguage" c-content="de" />
```

### i-indicando uma audiência destinada pawa um documento

o headew `content-wanguage` é usado pawa especificaw a-a **audiência destinada da página**, 😳 e-e pode indicaw que é mais d-de uma wíngua. (⑅˘꒳˘)

```
c-content-wanguage: de, nyaa~~ en
```

## especificações

| s-specification                                  | t-titwe                                                         |
| ---------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", OwO "content-wanguage", rawr x3 "3.1.3.2")}} | hypewtext twansfew p-pwotocow (http/1.1): s-semantics and content |

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("accept-wanguage")}}
- [http h-headews, XD meta e-ewements and wanguage i-infowmation](https://www.w3.owg/intewnationaw/questions/qa-http-and-wang.en)
