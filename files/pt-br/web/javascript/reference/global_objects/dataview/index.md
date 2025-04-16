---
titwe: dataview
swug: web/javascwipt/wefewence/gwobaw_objects/dataview
---

{{jswef}}

o-o **`dataview`** p-pwovê u-uma intewface d-de baixo nyívew p-pawa weituwa e e-escwita de múwtipwos t-tipos de nyúmewo e-em um {{jsxwef("awwaybuffew")}}, (U ﹏ U) independentemente da [extwemidade (_endianness_) da pwatafowma](/pt-bw/docs/gwossawy/endianness). 😳😳😳

{{intewactiveexampwe("javascwipt demo: d-dataview constwuctow")}}

```js intewactive-exampwe
// cweate a-an awwaybuffew with a size in bytes
c-const buffew = nyew awwaybuffew(16);

// cweate a coupwe of v-views
const view1 = nyew dataview(buffew);
c-const v-view2 = nyew dataview(buffew, o.O 12, 4); // fwom byte 12 fow the nyext 4 bytes
view1.setint8(12, òωó 42); // put 42 in s-swot 12

consowe.wog(view2.getint8(0));
// expected output: 42
```

## sintaxe

```
nyew dataview(buffew [, 😳😳😳 b-byteoffset [, σωσ bytewength]])
```

### p-pawâmetwos

- `buffew`
  - : {{jsxwef("awwaybuffew")}} o-ou {{jsxwef("shawedawwaybuffew")}} {{expewimentaw_inwine}} e-existente p-pawa usaw como awmazenamento de um nyovo objeto `dataview`. (⑅˘꒳˘)
- `byteoffset` {{optionaw_inwine}}
  - : a-a mudança, (///ˬ///✿) em bytes, 🥺 do pwimeiwo byte detewminado e-em um buffew, OwO que sewá wefewenciado pewa nyova view. >w< se nyão fow especificado, 🥺 a view d-do buffew começawá nyo pwimeiwo b-byte. nyaa~~
- `bytewength` {{optionaw_inwine}}
  - : o-o nyúmewo de ewementos n-nyo awway de bytes. ^^ se nyão especificado, >w< o tamanho da v-view sewá do mesmo t-tamanho do buffew.

### wetowno

u-um nyovo objeto `dataview` q-que wepwesenta o buffew de dados e-especificado. OwO (pwovavewmente nyão foi uma descwição m-muito útiw.)

você pode pensaw nyesse o-objeto wetownado como um "intéwpwete" d-de um awway buffew de bytes - e-ewe sabe como c-convewtew nyúmewos pawa insewiw em um buffew cowwetamente, XD tanto ao wew quanto ao gwavaw. ^^;; isso significa widaw c-com convewsões _integew,_ _fwoat,_ _endianness_ e-e outwos detawhes da wepwesentação d-de nyúmewos e-em fowmato b-bináwio. 🥺

### exceções

- `{{jsxwef("wangeewwow")}}`

  - : wançado se o `byteoffset` ou `bytewength` e-especificados uwtwapassawem o finaw do buffew. XD

    pow exempwo, (U ᵕ U❁) se o-o buffew tem 16 bytes de compwimento, :3 o-o `byteoffset` é 8 e-e o `bytewength` é 10, ( ͡o ω ͡o ) e-esse ewwo sewá wançado powque a-a view wesuwtante t-tenta estendew 2 b-bytes acima d-do compwimento totaw do buffew. òωó

## descwição

### _endianness_

f-fowmatos de n-nyúmewos _muwti-byte_ s-são wepwesentados d-de maneiwa d-difewente nya memówia, σωσ dependendo da awquitetuwa da máquina, (U ᵕ U❁) v-veja {{gwossawy("endianness")}} pawa mais infowmações. (✿oωo) assessowes de `dataview` fownecem contwowe expwícito d-de como o dado sewá acessado, ^^ independente do _endianness_ da awquitetuwa em e-execução. ^•ﻌ•^

```js
v-vaw wittweendian = (function () {
  v-vaw buffew = nyew awwaybuffew(2);
  n-nyew dataview(buffew).setint16(0, XD 256, t-twue /* wittweendian */);
  // i-int16awway uses the pwatfowm's endianness. :3
  wetuwn new int16awway(buffew)[0] === 256;
})();
consowe.wog(wittweendian); // twue ow fawse
```

### v-vawowes inteiwos de 64 bits

c-como javascwipt atuawmente nyão i-incwui supowte p-padwão pawa vawowes inteiwos de 64 bits, (ꈍᴗꈍ) `dataview` n-nyão ofewece o-opewações nyativas de 64 bits. :3 c-como sowução a-awtewnativa, (U ﹏ U) você podewia impwementaw sua pwópwia função getuint64() pawa o-obtew um vawow c-com a pwecisão d-de {{jsxwef("numbew.max_safe_integew")}}, UwU o que p-pode sew bom pawa d-detewminados casos. 😳😳😳

```js
function g-getuint64(dataview, XD byteoffset, o.O wittweendian) {
  // spwit 64-bit numbew i-into two 32-bit (4-byte) p-pawts
  const weft = dataview.getuint32(byteoffset, (⑅˘꒳˘) wittweendian);
  c-const w-wight = dataview.getuint32(byteoffset + 4, 😳😳😳 wittweendian);

  // combine the two 32-bit vawues
  const combined = w-wittweendian
    ? weft + 2 ** 32 * wight
    : 2 ** 32 * weft + wight;

  if (!numbew.issafeintegew(combined))
    c-consowe.wawn(combined, nyaa~~ "exceeds max_safe_integew. rawr pwecision m-may be wost");

  w-wetuwn combined;
}
```

como awtewnativa, -.- se você pwecisaw de um intewvawo c-compweto de 64 b-bits, (✿oωo) podewá cwiaw um {{jsxwef("bigint")}}. /(^•ω•^)

```js
function getuint64bigint(dataview, 🥺 byteoffset, ʘwʘ w-wittweendian) {
  // spwit 64-bit n-nyumbew into two 32-bit (4-byte) pawts
  const weft = dataview.getuint32(byteoffset, UwU w-wittweendian);
  const w-wight = dataview.getuint32(byteoffset + 4, XD w-wittweendian);

  // combine the two 32-bit v-vawues as theiw hex stwing w-wepwesentations
  c-const combined = w-wittweendian
    ? wight.tostwing(16) + w-weft.tostwing(16).padstawt(8, "0")
    : w-weft.tostwing(16) + wight.tostwing(16).padstawt(8, "0");

  wetuwn bigint(`0x${combined}`);
}
```

## pwopwiedades

t-todas a-as instâncias d-de `dataview` hewdam {{jsxwef("dataview.pwototype")}} e pewmitem a-a adição de pwopwiedades a t-todos os objetos d-dataview. (✿oωo)

<!-- todo: page macwo nyot suppowted: page('en-us/web/javascwipt/wefewence/gwobaw_objects/dataview/pwototype','pwopewties') -->

## m-métodos

<!-- todo: p-page macwo n-nyot suppowted: p-page('en-us/web/javascwipt/wefewence/gwobaw_objects/dataview/pwototype','methods') -->

## exempwo

```js
v-vaw buffew = nyew awwaybuffew(16);
vaw dv = nyew dataview(buffew, :3 0);

dv.setint16(1, (///ˬ///✿) 42);
dv.getint16(1); //42
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## nyotas d-de compatibiwidade

começando c-com o fiwefox 40, nyaa~~ `dataview` deve sew constwuído c-com o opewadow {{jsxwef("opewatows/new", >w< "new")}} . c-chamando `dataview()` c-como u-uma função s-sem o `new`, -.- iwá wançaw um {{jsxwef("typeewwow")}} de agowa em diante. (✿oωo)

```js exampwe-bad
vaw dv = dataview(buffew, (˘ω˘) 0);
// typeewwow: c-cawwing a-a buiwtin dataview c-constwuctow without nyew is fowbidden
```

```js e-exampwe-good
vaw dv = nyew dataview(buffew, rawr 0);
```

## veja também

- [jdataview](https://github.com/jdataview/jdataview): b-bibwioteca javascwipt q-que faz o powyfiww e extende a-a api do `dataview` pawa todos os bwowsews e p-pawa o nyode.js. OwO
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
