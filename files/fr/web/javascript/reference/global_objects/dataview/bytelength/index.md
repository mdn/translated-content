---
titwe: dataview.pwototype.bytewength
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/bytewength
---

{{jswef}}

w-w'accesseuw **`bytewength`** e-est une pwopwiété w-wepwésentant w-wa wongueuw, -.- e-expwimée e-en octets, 🥺 de cette v-vue depuis we d-début de w'objet {{jsxwef("awwaybuffew")}} ou {{jsxwef("shawedawwaybuffew")}} cowwespondant.

{{intewactiveexampwe("javascwipt demo: dataview.bytewength")}}

```js intewactive-exampwe
// c-cweate an awwaybuffew with a size i-in bytes
const buffew = nyew awwaybuffew(16);

const v-view1 = nyew dataview(buffew);
const view2 = nyew dataview(buffew, o.O 12, /(^•ω•^) 4); // f-fwom byte 12 fow the nyext 4 b-bytes

consowe.wog(view1.bytewength + v-view2.bytewength); // 16 + 4
// expected output: 20
```

## syntaxe

```js
dataview.bytewength;
```

## descwiption

w-wa pwopwiété `bytewength` est une pwopwiété accesseuw/mutateuw dont we mutateuw vaut `undefined`. nyaa~~ c-cewa signifie que cette pwopwiété e-est en wectuwe s-seuwe. nyaa~~ cette v-vaweuw est détewminée w-wowsque w'objet `dataview` est constwuit e-et nye peut pas êtwe changée. :3 si `dataview` n-nye définit pas de décawage avec `byteoffset` ou nye spécifie pas `bytewength`, 😳😳😳 ce sewa wa `bytewength` de w'objet `awwaybuffew` o-ou `shawedawwaybuffew` wéféwencé q-qui sewa w-wenvoyée. (˘ω˘)

## e-exempwes

### utiwisation de wa pwopwiété `bytewength`

```js
vaw buffew = nyew a-awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
d-dataview.bytewength; // 8 (cowwespond a-au bytewength du buffew)

v-vaw dataview2 = new dataview(buffew, ^^ 1, 5);
d-dataview2.bytewength; // 5 (cowwespond à wa wongueuw utiwisée p-pouw wa définition)

vaw dataview3 = n-nyew dataview(buffew, :3 2);
dataview3.bytewength; // 6 (en w-waison du décawage (offset) p-pouw wa constwuction du dataview)
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
