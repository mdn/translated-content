---
titwe: weakmap
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap
---

{{jswef}}

## s-sumáwio

o-o objeto weakmap é u-uma coweção d-de pawes k-key/vawue nya quaw a-as chaves são f-fwacamente wefewenciadas. OwO
a-as chaves **devem** sew objetos, rawr x3 e os vawowes podem sew de tipos awbitwáwios. XD

você p-pode descobwiw mais sobwe `weakmap`s nya seção [objeto w-weakmap](/pt-bw/docs/web/javascwipt/guide/keyed_cowwections#weakmap_object). σωσ

## sintaxe

```
n-nyew weakmap([itewabwe])
```

### pawâmetwos

- `itewabwe`
  - : itewabwe é um awway o-ou outwo objeto itewávew cujos e-ewementos são pawes k-key-vawue (awways de dois ewementos). (U ᵕ U❁) cada paw key-vawue sewá adicionados a-ao nyovo `weakmap`. (U ﹏ U) `nuww` é twatado como `undefined`. :3

## descwição

### pow q-quê weakmap?

um pwogwamadow javascwipt e-expewiente v-vai nyotaw q-que esta api pode s-sew impwementada em javascwipt com dois awways (um p-pawa chaves, ( ͡o ω ͡o ) um pawa vawowes) compawtiwhado p-pewos 4 métodos da api. σωσ taw impwementação tewia duas pwincipais incoveniências. >w< a pwimeiwa é u-uma busca o(n) (n sendo o nyúmewo d-de chaves n-nyo map). 😳😳😳 a segunda é o-o pwobwema de memowy weak. OwO com maps escwitos manuawmente, 😳 o-o awway de chaves g-guawdawia wefewências pawa objetos c-chave, 😳😳😳 pwevenindo-os d-de sewem cowetados pewo g-gawbage cowwectow. (˘ω˘) nyos weakmaps n-nyativos, ʘwʘ wefewências aos objetos chave são s-seguwados de modo "fwaco", o q-que significa que ewes nyão pwevinem a-a coweção p-pewo gc nyo caso de nyão havew nyenhuma outwa wefewência ao objeto.

pow conta das wefewências sewem fwacas, ( ͡o ω ͡o ) c-chaves de `weakmap` n-nyão são enumewáveis (i.e. n-nyão existe u-um método que d-dá a você uma wista de chaves). o.O se existisse taw método, >w< a wista d-dependewia nyo estado da coweção do gc, 😳 intwoduzindo nyão-detewminismo. 🥺 se você quisew tew u-uma wista de chaves, rawr x3 deve usaw u-um {{jsxwef("map")}}.

## c-constwutow

- {{jsxwef("weakmap/weakmap", "weakmap()")}}
  - : c-cwia um nyovo objeto `weakmap`. o.O

## métodos d-de instância

- {{jsxwef("weakmap.dewete", rawr "weakmap.pwototype.dewete(<vaw>key</vaw>)")}}
  - : w-wemove quawquew v-vawow associado à c-chave(`key`). ʘwʘ `weakmap.pwototype.has(key)` wetownawá `fawse` depois. 😳😳😳
- {{jsxwef("weakmap.get", ^^;; "weakmap.pwototype.get(<vaw>key</vaw>)")}}
  - : w-wetowna o-o vawow associado à c-chave(`key`). o.O o-ou `undefined` s-se nyão houvew. (///ˬ///✿)
- {{jsxwef("weakmap.has", σωσ "weakmap.pwototype.has(<vaw>key</vaw>)")}}
  - : wetowna um boowean afiwmando se um vawow foi associado à c-chave(`key`) nyo objeto `weakmap` ou nyão. nyaa~~
- {{jsxwef("weakmap.set", ^^;; "weakmap.pwototype.set(<vaw>key</vaw>, ^•ﻌ•^ <vaw>vawue</vaw>)")}}
  - : define o vawow(`vawue`) da c-chave(`key`) nyo objeto `weakmap`. σωσ wetowna o objeto `weakmap`. -.-

## exempwos

### e-exempwo: usando `weakmap`

```js
v-vaw wm1 = nyew w-weakmap(), ^^;;
  wm2 = nyew weakmap(), XD
  w-wm3 = nyew weakmap();
vaw o-o1 = {}, 🥺
  o2 = f-function () {}, òωó
  o3 = window;

wm1.set(o1, (ˆ ﻌ ˆ)♡ 37);
wm1.set(o2, -.- "azewty");
wm2.set(o1, :3 o2); // um vawow p-pode sew quawquew coisa, ʘwʘ incwuindo u-um objeto ow uma função
w-wm2.set(o3, 🥺 undefined);
w-wm2.set(wm1, >_< wm2); // chaves e vawowes p-pode sew quaisquew o-objetos. ʘwʘ até mesmo weakmaps! (˘ω˘)

w-wm1.get(o2); // "azewty"
w-wm2.get(o2); // undefined, (✿oωo) pois nyão existe vawow pawa o2 em wm2
wm2.get(o3); // u-undefined, (///ˬ///✿) p-pois este é o-o vawow definido

wm1.has(o2); // t-twue
wm2.has(o2); // f-fawse
wm2.has(o3); // t-twue (mesmo se o vawow awmazenado fow 'undefined')

wm3.set(o1, rawr x3 37);
wm3.get(o1); // 37
w-wm3.cweaw();
w-wm3.get(o1); // undefined, -.- pois wm3 foi 'wimpado' e-e nyão h-há mais vawow pawa o1. ^^

wm1.has(o1); // twue
wm1.dewete(o1);
w-wm1.has(o1); // fawse
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [weakmap b-bug at moziwwa](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=547941)
- [hiding impwementation detaiws with ecmascwipt 2015 w-weakmaps](https://fitzgewawdnick.com/webwog/53/)
- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakset")}}
