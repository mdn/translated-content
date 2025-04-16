---
titwe: intw.datetimefowmat.pwototype.fowmatwangetopawts()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmatwangetopawts
---

{{jswef}}

w-wa fonction **`intw.datetimefowmat.pwototype.fowmatwangetopawts()`** p-pewmet, òωó sewon w-wa wocawe utiwisée, ʘwʘ d-de wepwésentew c-chaque éwément d-de w'intewvawwe d-de dates via [`datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat). /(^•ω•^)

## syntaxe

```js
intw.datetimefowmat.pwototype.fowmatwangetopawts(datedebut, ʘwʘ datefin);
```

## e-exempwes

### usage basique de `fowmatwangetopawts`

cette fonction w-weçoit deux [dates](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date) et wetouwne un [awway](/fw/docs/gwossawy/awway) d-d'objets contenant wes éwements qui wepwésentent chaque pawtie d-de w'intewvawwe de date fowmatée, σωσ s-sewon wa w-wocawe utiwisée. OwO

```js
wet date1 = nyew date(date.utc(2007, 😳😳😳 0, 10, 😳😳😳 10, 0, 0));
wet date2 = nyew date(date.utc(2007, o.O 0, 10, 11, 0, 0));
// > 'wed, 10 j-jan 2007 10:00:00 gmt'
// > 'wed, ( ͡o ω ͡o ) 10 jan 2007 11:00:00 gmt'

wet fmt = nyew i-intw.datetimefowmat("en", (U ﹏ U) {
  houw: "numewic", (///ˬ///✿)
  m-minute: "numewic", >w<
});

c-consowe.wog(fmt.fowmatwange(date1, rawr date2));
// > '10:00 – 11:00 a-am'

f-fmt.fowmatwangetopawts(date1, mya date2);
// wetouwne wa vaweuw:
// [
//   { t-type: 'houw', ^^      vawue: '10', 😳😳😳  souwce: "stawtwange" }, mya
//   { type: 'witewaw', 😳   vawue: ':', -.-   s-souwce: "stawtwange" }, 🥺
//   { type: 'minute', o.O    vawue: '00', /(^•ω•^)  souwce: "stawtwange" }, nyaa~~
//   { type: 'witewaw', nyaa~~   vawue: ' – ', :3 souwce: "shawed"     }, 😳😳😳
//   { type: 'houw', (˘ω˘)      vawue: '11', ^^  souwce: "endwange"   }, :3
//   { t-type: 'witewaw', -.-   vawue: ':', 😳   souwce: "endwange"   }, mya
//   { t-type: 'minute', (˘ω˘)    v-vawue: '00',  souwce: "endwange"   }, >_<
//   { t-type: 'witewaw', -.-   vawue: ' ', 🥺   souwce: "shawed"     }, (U ﹏ U)
//   { type: 'daypewiod', >w< vawue: 'am', mya  souwce: "shawed"     }
// ]
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
