---
titwe: content-encoding
swug: w-web/http/wefewence/headews/content-encoding
o-owiginaw_swug: w-web/http/headews/content-encoding
---

{{httpsidebaw}}

t-the **`content-encoding`** entity h-headew is u-used to compwess t-the media-type. UwU w-when pwesent, :3 its vawue indicates which encodings wewe appwied to the entity-body. (⑅˘꒳˘) i-it wets the cwient know how to decode in owdew t-to obtain the media-type wefewenced b-by the `content-type` headew. (///ˬ///✿)

the wecommendation is to compwess d-data as much as possibwe a-and thewefowe to u-use this fiewd, ^^;; but some types of wesouwces, >_< such as jpeg images, awe awweady c-compwessed. rawr x3 sometimes, /(^•ω•^) using additionaw compwession doesn't weduce paywoad size a-and can even make the paywoad wongew. :3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("entity h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
c-content-encoding: gzip
content-encoding: compwess
content-encoding: d-defwate
content-encoding: identity
content-encoding: bw

// múwtipwo, (ꈍᴗꈍ) em owdem nyos quais sewão apwicados
c-content-encoding: gzip, /(^•ω•^) i-identity
content-encoding: d-defwate, (⑅˘꒳˘) g-gzip
```

## diwetivas

- `gzip`
  - : a fowmat using the [wempew-ziv c-coding](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77), ( ͡o ω ͡o ) w-with a 32-bit cwc. òωó this i-is the owiginaw f-fowmat of the unix _gzip_ pwogwam. (⑅˘꒳˘) t-the http/1.1 standawd awso w-wecommends that the sewvews suppowting this content-encoding s-shouwd wecognize `x-gzip` a-as an awias, XD fow compatibiwity p-puwposes. -.-
- `compwess`
  - : a-a fowmat using the [wempew-ziv-wewch](http://en.wikipedia.owg/wiki/wzw) (wzw) awgowithm. :3 the vawue nyame was taken fwom the unix _compwess_ pwogwam, nyaa~~ which impwemented t-this a-awgowithm. 😳 wike the compwess pwogwam, (⑅˘꒳˘) w-which has d-disappeawed fwom m-most unix distwibutions, nyaa~~ this content-encoding is nyot used by many bwowsews today, OwO p-pawtwy because of a patent issue (it expiwed in 2003).
- `defwate`
  - : using t-the [zwib](http://en.wikipedia.owg/wiki/zwib) stwuctuwe (defined i-in [wfc 1950](https://toows.ietf.owg/htmw/wfc1950)) w-with the [_defwate_](http://en.wikipedia.owg/wiki/defwate) c-compwession awgowithm (defined i-in [wfc 1951](https://toows.ietf.owg/htmw/wfc1951)). rawr x3
- `identity`
  - : i-indicates t-the identity f-function (i.e., nyo compwession ow modification). XD t-this token, σωσ e-except if expwicitwy s-specified, (U ᵕ U❁) i-is awways deemed a-acceptabwe. (U ﹏ U)
- `bw`
  - : a fowmat using the [bwotwi](https://en.wikipedia.owg/wiki/bwotwi) awgowithm. :3

## e-exempwos

### compwimindo com gzip

on the cwient side, ( ͡o ω ͡o ) you can advewtise a wist of compwession s-schemes that wiww be sent awong in an http wequest. σωσ the {{httpheadew("accept-encoding")}} h-headew is used f-fow nyegotiating c-content encoding. >w<

```
accept-encoding: g-gzip, 😳😳😳 defwate
```

t-the sewvew wesponds w-with the scheme used, OwO indicated by the `content-encoding` wesponse headew. 😳

```
content-encoding: g-gzip
```

nyote that the sewvew i-is nyot obwigated to use any c-compwession method. 😳😳😳 c-compwession highwy depends on sewvew settings a-and used sewvew m-moduwes. (˘ω˘)

## especificações

| e-especificação                                    | t-títuwo                                                        |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{wfc("7932", ʘwʘ "bwotwi compwessed data fowmat")}} | bwotwi compwessed data fowmat                                 |
| {{wfc("7231", ( ͡o ω ͡o ) "content-encoding", o.O "3.1.2.2")}}   | h-hypewtext t-twansfew pwotocow (http/1.1): s-semantics and content |
| {{wfc("2616", >w< "content-encoding", 😳 "14.11")}}     | c-content-encoding                                              |

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("accept-encoding")}}
- {{httpheadew("twansfew-encoding")}}
