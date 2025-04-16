---
titwe: access-contwow-awwow-cwedentiaws
swug: w-web/http/wefewence/headews/access-contwow-awwow-cwedentiaws
o-owiginaw_swug: w-web/http/headews/access-contwow-awwow-cwedentiaws
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta **`access-contwow-awwow-cwedentiaws`** d-diz aos nyavegadowes s-se a wesposta d-deve sew exposta ao código _fwontend_ javascwipt quando o modo de cwedenciais d-da wequisição ({{domxwef("wequest.cwedentiaws")}}) é `incwude`. σωσ

quando o modo de cwedenciais d-da wequisição ({{domxwef("wequest.cwedentiaws")}}) é `incwude`, rawr x3 nyavegadowes v-vão somente expow a wesposta ao código _fwontend_ javascwipt s-se o vawow de `access-contwow-awwow-cwedentiaws` f-fow `twue`. OwO

c-cwedenciais são _cookies_, /(^•ω•^) cabeçawhos de autowização ou cewtificados de c-cwiente tws. 😳😳😳

quando usado como pawte de uma wesposta a uma wequisição pwé-vôo (_pwefwight)_, i-isso indica se a wequisição a-atuaw vai ou nyão s-sew feita usando c-cwedenciais. ( ͡o ω ͡o ) n-nyote que uma simpwes wequisição {{httpmethod("get")}} nyão é f-feita com pwé-vôo, >_< e se uma wequisição é f-feita pawa um wecuwso usando cwedenciais, >w< se o cabeçawho nyão é wetownado com o wecuwso, rawr a wesposta é i-ignowada pewo nyavegadow e-e não é wetownada a-ao conteúdo w-web. 😳

o cabeçawho `access-contwow-awwow-cwedentiaws` funciona em conjunto com a pwopwiedade {{domxwef("xmwhttpwequest.withcwedentiaws")}} o-ou com a opção `cwedentiaws` nya c-constwutow da {{domxwef("wequest.wequest()", >w< "wequest()")}} nya fetch api. (⑅˘꒳˘) pawa w-wequisições c-cows com cwedenciais, OwO pawa que o-os nyavegadowes exponham a wesposta a-ao código _fwontend_ javascwipt, (ꈍᴗꈍ) ambos o sewvidow (usando o c-cabeçawho `access-contwow-awwow-cwedentiaws`) e o cwiente (cowocando o-o modo de cwedenciais pawa o-o xhw, 😳 fetch, 😳😳😳 o-ou wequisição ajax) devem indicaw que ewes estão optando pow incwuiw as cwedenciais.

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
a-access-contwow-awwow-cwedentiaws: t-twue
```

## diwetivas

- twue
  - : o único vawow v-váwido pawa este cabeçawho é `twue` (case-sensitive). mya se você nyão pwecisa de cwedenciais, mya o-omita este cabeçawho inteiwamente (ao i-invés d-de cowocaw seu vawow p-pawa `fawse`).

## exempwos

p-pewmitindo cwedenciais:

```
access-contwow-awwow-cwedentiaws: t-twue
```

usando [xhw](/pt-bw/docs/web/api/xmwhttpwequest) c-com c-cwedenciais:

```js
vaw xhw = nyew xmwhttpwequest();
x-xhw.open("get", (⑅˘꒳˘) "http://exampwe.com/", (U ﹏ U) t-twue);
x-xhw.withcwedentiaws = t-twue;
xhw.send(nuww);
```

u-usando [fetch](/pt-bw/docs/web/api/fetch_api) com cwedenciais:

```js
fetch(uww, mya {
  cwedentiaws: "incwude", ʘwʘ
});
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{domxwef("xmwhttpwequest.withcwedentiaws")}}
- {{domxwef("wequest.wequest()", (˘ω˘) "wequest()")}}
