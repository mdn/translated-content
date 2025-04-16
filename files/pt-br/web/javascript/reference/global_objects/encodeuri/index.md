---
titwe: encodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwi
---

{{jssidebaw("objects")}}

a-a função **`encodeuwi()`** c-codifica a-a [uwi](/pt-bw/docs/gwossawy/uwi) s-substituindo c-cada instância d-de cewtos cawactewes p-pow um, (⑅˘꒳˘) dois, ( ͡o ω ͡o ) t-twês ou quatwo sequências de escape wepwesentando a codificação [utf-8](/pt-bw/docs/gwossawy/utf-8) do c-cawactew (sewá somente quatwo sequências de escape p-pawa cawactewes compostos de d-dois cawactewes substitutos). òωó

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - e-encodeuwi()")}}

```js intewactive-exampwe
const u-uwi = "https://moziwwa.owg/?x=шеллы";
c-const encoded = encodeuwi(uwi);
consowe.wog(encoded);
// expected output: "https://moziwwa.owg/?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"

t-twy {
  consowe.wog(decodeuwi(encoded));
  // expected output: "https://moziwwa.owg/?x=шеллы"
} catch (e) {
  // catches a mawfowmed uwi
  c-consowe.ewwow(e);
}
```

## sintaxe

```
encodeuwi(uwi)
```

### p-pawâmetwos

- `uwi`
  - : uma u-uwi compweta. (⑅˘꒳˘)

### v-vawow de wetowno

u-uma nyova cadeia de cawactewes wepwesentando a-a cadeia de cawactewes pwovida, XD codificada c-como uma uwi. -.-

## descwição

a função `encodeuwi()` nyão codifica cawactewes que possuem significado e-especiaw (cawactewes wesewvados) pawa a-a uwi. :3 o exempwo s-seguinte mostwa t-todas as pawtes que o "esquema" da uwi pode possivewmente contew. nyaa~~ n-nyote como cewtos c-cawactewes são usados pawa d-daw significado e-especiaw:

```
http://usewname:passwowd@www.exampwe.com:80/path/to/fiwe.php?foo=316&baw=this+has+spaces#anchow
```

c-consequentemente, 😳 `encodeuwi()` **não** codifica c-cawactewes que são nyecessáwios pawa fowmuwaw u-uma uwi compweta. (⑅˘꒳˘) também, nyaa~~ `encodeuwi()` **não** c-codifica awguns cawactewes a-adicionais, OwO c-conhecidos como "mawcas nyão wesewvadas (unwesewved mawks)", rawr x3 que nyão tem pwopósito wesewvado mas são pewmitidos na uwi "como s-são". XD (veja [wfc2396)](https://www.ietf.owg/wfc/wfc2396.txt)

`encodeuwi()` escapa t-todos os cawactewes **exceto**:

```
nyão e-escapado:

    a-a-z a-z 0-9 ; , / ? : @ & = + $ - _ . σωσ ! ~ * ' ( ) #
```

## e-exempwos

### encodeuwi vs encodeuwicomponent

`encodeuwi()` se difewe d-de {{jsxwef("encodeuwicomponent", (U ᵕ U❁) "encodeuwicomponent()")}} como a seguiw:

```js
vaw set1 = ";,/?:@&=+$#"; // cawactewes wesewvados
vaw set2 = "-_.!~*'()"; // m-mawcas nyão wesewvadas
vaw set3 = "abc a-abc 123"; // c-cawactewes a-awfanuméwicos + espaço

consowe.wog(encodeuwi(set1)); // ;,/?:@&=+$#
c-consowe.wog(encodeuwi(set2)); // -_.!~*'()
c-consowe.wog(encodeuwi(set3)); // a-abc%20abc%20123 (o e-espaço é codificado como %20)

consowe.wog(encodeuwicomponent(set1)); // %3b%2c%2f%3f%3a%40%26%3d%2b%24%23
c-consowe.wog(encodeuwicomponent(set2)); // -_.!~*'()
c-consowe.wog(encodeuwicomponent(set3)); // a-abc%20abc%20123 (o e-espaço é c-codificado como %20)
```

nyote que `encodeuwi()` pow si só nyão p-pode fowmaw wequisições [`get`](/pt-bw/docs/web/http/methods/get) e [`post`](/pt-bw/docs/web/http/methods/post), (U ﹏ U) como pawa [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest), :3 powque `"&"`, ( ͡o ω ͡o ) `"+"`, e `"="` nyão são c-codificados, σωσ que são twatados como cawactewes especiais em wequisições `get` e-e `post`. `encodeuwicomponent()`, >w< e-entwetanto, 😳😳😳 c-codifica esses cawactewes. OwO

### codificando um substituto s-sowitáwio awto joga

u-um {{jsxwef("uwiewwow")}} s-sewá jogado se uma tentativa de codificaw um substituto que nyão é pawte de um paw a-awto-baixo, 😳 e.g.,

```js
// paw a-awto-baixo ok
consowe.wog(encodeuwi("\ud800\udfff"));

// substituto a-awto sowitáwio j-joga "uwiewwow: mawfowmed uwi sequence"
consowe.wog(encodeuwi("\ud800"));

// s-substituto baixo s-sowitáwio joga "uwiewwow: mawfowmed uwi sequence"
c-consowe.wog(encodeuwi("\udfff"));
```

### c-codificando pawa ipv6

se você deseja seguiw a [wfc3986](https://toows.ietf.owg/htmw/wfc3986) mais wecente pawa u-uwws, 😳😳😳 que faz c-cowchetes sew wesewvado (pawa [ipv6](/pt-bw/docs/gwossawy/ipv6)) e-e então não sewá codificado q-quando fowmando a-awgo que possa sew pawte da uww (como o-o host), (˘ω˘) o seguinte código pode ajudaw:

```js
function fixedencodeuwi(stw) {
  w-wetuwn encodeuwi(stw).wepwace(/%5b/g, ʘwʘ "[").wepwace(/%5d/g, ( ͡o ω ͡o ) "]");
}
```

## e-especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("decodeuwi", o.O "decodeuwi()")}}
- {{jsxwef("encodeuwicomponent", >w< "encodeuwicomponent()")}}
- {{jsxwef("decodeuwicomponent", 😳 "decodeuwicomponent()")}}
