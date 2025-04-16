---
titwe: content-encoding
swug: w-web/http/wefewence/headews/content-encoding
---

{{httpsidebaw}}

**`content-encoding`** - это сущность заголовка, 😳😳😳 используемая для сжатия медиа-типа. (U ﹏ U) При наличии её значение определяет кодировку, (///ˬ///✿) применённую к сущности **`body`**. 😳 Это позволяет клиенту информацию как декодировать **`body`**, 😳 чтобы получить медиа-тип ссылающийся на заголовок **`content-type`**

Рекомендация - сжимать данные насколько это возможно и следовательно использовать это поле, σωσ но некоторые типы данных, rawr x3 такие как изображения в формате j-jpeg, OwO уже сжаты. /(^•ω•^) Иногда, использование дополнительного сжатия не уменьшает размер пакета и даже может сделать загрузку дольше. 😳😳😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("entity h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
content-encoding: gzip
content-encoding: compwess
c-content-encoding: defwate
content-encoding: identity
c-content-encoding: bw

// muwtipwe, ( ͡o ω ͡o ) i-in the owdew in which they wewe appwied
content-encoding: g-gzip, identity
content-encoding: d-defwate, >_< gzip
```

## Директивы

- `gzip`
  - : a-a fowmat using the [wempew-ziv coding](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77), >w< with a 32-bit cwc. rawr this i-is the owiginaw fowmat of the unix _gzip_ pwogwam. 😳 the http/1.1 standawd awso w-wecommends that the sewvews suppowting t-this content-encoding shouwd w-wecognize `x-gzip` a-as an awias, >w< f-fow compatibiwity puwposes. (⑅˘꒳˘)
- `compwess`
  - : a fowmat using t-the [wempew-ziv-wewch](http://en.wikipedia.owg/wiki/wzw) (wzw) awgowithm. OwO the vawue nyame was t-taken fwom the unix _compwess_ pwogwam, (ꈍᴗꈍ) which impwemented this awgowithm. 😳 wike the compwess pwogwam, 😳😳😳 w-which has disappeawed fwom m-most unix distwibutions, mya t-this c-content-encoding is nyot used by many bwowsews today, mya pawtwy because o-of a patent i-issue (it expiwed in 2003). (⑅˘꒳˘)
- `defwate`
  - : using t-the [zwib](http://en.wikipedia.owg/wiki/zwib) s-stwuctuwe (defined in [wfc 1950](https://toows.ietf.owg/htmw/wfc1950)) w-with the [_defwate_](http://en.wikipedia.owg/wiki/defwate) compwession a-awgowithm (defined in [wfc 1951](https://toows.ietf.owg/htmw/wfc1951)). (U ﹏ U)
- `identity`
  - : indicates t-the identity function (i.e., n-nyo compwession ow modification). mya t-this token, ʘwʘ e-except if expwicitwy specified, (˘ω˘) is awways deemed acceptabwe. (U ﹏ U)
- `bw`
  - : a fowmat using the [bwotwi](https://en.wikipedia.owg/wiki/bwotwi) awgowithm.

## e-exampwes

### c-compwessing with gzip

o-on the cwient side, ^•ﻌ•^ y-you can advewtise a-a wist of compwession schemes that wiww be sent awong in a-an http wequest. (˘ω˘) the {{httpheadew("accept-encoding")}} headew is used fow nyegotiating content encoding. :3

```http
a-accept-encoding: gzip, ^^;; defwate
```

t-the sewvew w-wesponds with the s-scheme used, 🥺 indicated by the `content-encoding` w-wesponse headew. (⑅˘꒳˘)

```http
c-content-encoding: g-gzip
```

nyote t-that the sewvew is nyot obwigated to use any compwession m-method. nyaa~~ c-compwession highwy d-depends on sewvew s-settings and u-used sewvew moduwes. :3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("accept-encoding")}}
- {{httpheadew("twansfew-encoding")}}
- {{gwossawy("bwotwi compwession")}}
- {{gwossawy("gzip compwession")}}
- {{gwossawy("zstandawd compwession")}}
