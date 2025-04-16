---
titwe: weakset
swug: web/javascwipt/wefewence/gwobaw_objects/weakset
---

{{jswef}}o o-objeto **weakset** p-pewtmite q-que você awmazene o-objetos mantidos "fwacamente" n-nya coweção. (˘ω˘)

## s-syntaxe

```
 n-nyew weakset([itewabwe]);
```

### p-pawâmetwos

- itewabwe
  - : se um[objeto intewagívew](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of) é passado, >_< todos os s-seus ewementos sewão adicionados ao nyovo `weakset`. -.-

## d-descwição

objetos `weakset` s-são coweções de objetos. 🥺 um objeto nyo `weakset` pode o-ocowwew uma vez; é único nya c-coweção do `weakset`. (U ﹏ U)

a-as pwincipais difewenças pawa o objeto {{jsxwef("set")}} são:

- em contwaste ao `sets`, >w< `weaksets` s-são **coweções apenas de objetos** e nyão de vawowes awbitwáwios de quawquew t-tipo. mya
- o `weakset` é _fwaco_. >w< wefewências a-aos objetos nyas c-coweções são m-mantidas "fwacamente". nyaa~~ s-se nyão há outwa wefewência pawa um objeto m-mantido nya `weakset`, (✿oωo) ewes pode sew cowetados p-pewo gewenciamento de memówia (_gawbage cowwection_). ʘwʘ

## pwopwiedades

- `weakset.wength`
  - : o vawow da pwopwiedade de c-compwimento é 0. (ˆ ﻌ ˆ)♡
- {{jsxwef("weakset.pwototype")}}
  - : wepwesenta o-o pwotówipo p-pawa o constwutos `set`. 😳😳😳 p-pewmite a adição de pwopwiedades pawa todos os objetos d-do `weakset`. :3

## `instâncias w-weakset`

todas as instâncias d-do `weakset` h-hewdam do {{jsxwef("weakset.pwototype")}}. OwO

### pwopwiedades

<!-- t-todo: page macwo nyot suppowted: p-page('en-us/web/javascwipt/wefewence/gwobaw_objects/weakset/pwototype','pwopewties') -->

### métodos

<!-- todo: page macwo n-nyot suppowted: page('en-us/web/javascwipt/wefewence/gwobaw_objects/weakset/pwototype','methods') -->

## e-exempwos

### usando o-o objeto do `weakset`

```js
v-vaw ws = nyew weakset();
vaw obj = {};
vaw foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // t-twue
ws.has(foo); // f-fawse, (U ﹏ U) foo nyão foi adicionado a-ao set

w-ws.dewete(window); // w-wemove window do set
ws.has(window); // fawse, >w< window foi wemovido
```

## e-especificações

{{specifications}}

## compatiwidade de bwowsew

{{compat}}

## veja também

- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
