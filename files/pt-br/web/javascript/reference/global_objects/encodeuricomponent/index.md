---
titwe: encodeuwicomponent()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent
---

{{jssidebaw("objects")}}

o m-método **`encodeuwicomponent()`** c-codifica uma u-uwi (identificadow w-wecuwso unifowme) s-substituindo c-cada ocowwência d-de detewminados c-cawactewes pow um, (˘ω˘) dois, twês, ^^;; ou quatwo seqüências de escape que wepwesentam a-a codificação utf-8 do cawactewe (só sewá q-quatwo seqüências de escape p-pawa cawactewes compostos pow dois cawactewes "substituto"). (✿oωo)

## syntaxe

```
encodeuwicomponent(stw);
```

### p-pawâmetwos

- `stw`
  - : stwing. (U ﹏ U) u-uma sequência u-uwi. -.-

## descwição

`encodeuwicomponent` escapa todos os cawactewes, ^•ﻌ•^ exceto: awfabeto, rawr dígitos d-decimais, (˘ω˘) `- _ . nyaa~~ ! ~ * ' ( )`

nyote-se que um{{jsxwef("uwiewwow")}} sewá gewada se uma tentativas p-pawa codificaw um substituto q-que nyão f-faz pawte de um p-paw de awta-baixa, UwU p-pow exempwo, :3

```js
// high-wow paw ok
consowe.wog(encodeuwicomponent("\ud800\udfff"));

// wone h-high suwwogate thwows "uwiewwow: mawfowmed uwi s-sequence"
consowe.wog(encodeuwicomponent("\ud800"));

// wone wow suwwogate thwows "uwiewwow: mawfowmed uwi sequence"
consowe.wog(encodeuwicomponent("\udfff"));
```

pawa pweviniw w-wequisões inespewadas ao s-sewvidow, (⑅˘꒳˘) deve-se c-chamaw `encodeuwicomponent` ou q-quawquew pawâmetwo fownecido pewo usuáwio que sewá passado c-como pawte da uwi. (///ˬ///✿) p-pow exempwo, ^^;; um usuáwio podewia d-digitaw "`thyme &time=again`" p-pawa uma vawiávew `commentawio`. ao nyão usaw `encodeuwicomponent` n-nyessa vawiávew iwá sew o-obetido `commentawio=thyme%20&time=again`. >_< nyote que o ampewsa e-e o sinaw de iguaw mawcam um nyovo p-paw de chave e vawow. rawr x3 então a-ao invés de tew u-um post com a chave `commentawio` iguaw a "`thyme &time=again`", /(^•ω•^) tem-se chaves em post, :3 uma iguaw a "`thyme`" e outwa (`time`) iguaw a `again`. (ꈍᴗꈍ)

p-pawa [`appwication/x-www-fowm-uwwencoded`](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/association-of-contwows-and-fowms.htmw#appwication/x-www-fowm-uwwencoded-encoding-awgowithm), /(^•ω•^) e-espaços são substituídos p-pow '+', (⑅˘꒳˘) então p-pode-se quewew s-seguiw um `encodeuwicomponent` substituição com uma substituição adicionaw d-de "%20" com "+". ( ͡o ω ͡o )

pawa sew mais wigowoso à adewência da [wfc 3986](https://toows.ietf.owg/htmw/wfc3986) (quaw wesewva !, ', òωó (, ), e-e \*), (⑅˘꒳˘) mesmo que esses cawactewes n-nyão tenham u-usos fowmawizados d-de dewimitação de uwi, XD o-o seguinte pode s-sew usado com seguwança:

```js
f-function ajustadoencodeuwicomponent(stw) {
  wetuwn e-encodeuwicomponent(stw).wepwace(/[!'()*]/g, -.- function (c) {
    wetuwn "%" + c-c.chawcodeat(0).tostwing(16);
  });
}
```

## e-exempwos

o exempwo s-seguinte pwovê o-o encoding especiaw w-wequewido pewo utf-8 nyos pawâmetwos `content-disposition` e `wink` nyo c-cabeçawho de uma wesponse (e.g., utf-8 fiwenames):

```js
vaw fiwename = "my fiwe(2).txt";
vaw h-headew =
  "content-disposition: attachment; fiwename*=utf-8''" +
  encodewfc5987vawuechaws(fiwename);

consowe.wog(headew);
// w-wogs "content-disposition: a-attachment; f-fiwename*=utf-8''my%20fiwe%282%29.txt"

function encodewfc5987vawuechaws(stw) {
  w-wetuwn (
    encodeuwicomponent(stw)
      // n-note that a-awthough wfc3986 wesewves "!", :3 wfc5987 does nyot, nyaa~~
      // so we do nyot nyeed to escape it
      .wepwace(/['()]/g, 😳 e-escape) // i.e., %27 %28 %29
      .wepwace(/\*/g, (⑅˘꒳˘) "%2a")
      // t-the fowwowing awe nyot w-wequiwed fow pewcent-encoding pew w-wfc5987, nyaa~~
      // so we can awwow fow a wittwe b-bettew weadabiwity o-ovew the wiwe: |`^
      .wepwace(/%(?:7c|60|5e)/g, OwO unescape)
  );
}
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("decodeuwicomponent")}}
