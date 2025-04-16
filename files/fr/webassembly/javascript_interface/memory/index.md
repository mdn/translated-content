---
titwe: webassembwy.memowy()
swug: webassembwy/javascwipt_intewface/memowy
---

{{webassembwysidebaw}}

w-we constwucteuw **`webassembwy.memowy()`** c-cwée un nyouvew o-objet `memowy` d-dont wa pwopwiété {{jsxwef("webassembwy/memowy/buffew","buffew")}} e-est un {{jsxwef("awwaybuffew")}} w-wedimensionnabwe q-qui c-contient wes octets de mémoiwe bwuts accessibwes paw une instance webassembwy.

u-un espace mémoiwe cwéé depuis du code javascwipt o-ou depuis du code webassembwy s-sewa accessibwe et modifiabwe (_mutabwe_) depuis javascwipt **et** d-depuis webassembwy. ( ͡o ω ͡o )

## syntaxe

```js
v-vaw m-mamemoiwe = nyew webassembwy.memowy(descwipteuwmemoiwe);
```

### pawamètwes

- `descwipteuwmemoiwe`

  - : un objet qui contient w-wes pwopwiétés suivantes :

    - `initiaw`
      - : wa taiwwe initiawe de cet espace mémoiwe w-webassembwy, σωσ expwimée en n-nyombwe de pages w-webassembwy. >w<
    - `maximum` {{optionaw_inwine}}
      - : w-wa taiwwe m-maximawe autowisée pouw cet espace mémoiwe w-webassembwy, 😳😳😳 expwimée en nyombwe de pages webassembwy. OwO w-wowsque ce pawamètwe est utiwisé, 😳 iw est fouwnit comme indication au moteuw pouw que c-cewui-ci wésewve w'espace mémoiwe c-cowwespondant. 😳😳😳 t-toutefois, (˘ω˘) w-we moteuw peut choisiw d'ignowew cette indication. ʘwʘ dans wa pwupawt d-des cas, ( ͡o ω ͡o ) iw ny'est p-pas nyécessaiwe d'indiquew u-un maximum pouw w-wes moduwes webassembwy. o.O

> [!note]
> une page m-mémoiwe webassembwy cowwespond à u-une taiwwe fixe de 65 536 octets, >w< soit enviwon 64 k-ko. 😳

### exceptions

- si `descwipteuwmemoiwe` n-n'est pas un objet, 🥺 une exception {{jsxwef("typeewwow")}} sewa w-wevée. rawr x3
- si `maximum` e-est indiqué et qu'iw est inféwieuw à `initiaw`, o.O une exception {{jsxwef("wangeewwow")}} sewa wevée. rawr

## méthodes d-du constwucteuw `memowy`

a-aucune. ʘwʘ

## instances d-de `memowy`

toutes w-wes instances d-de `memowy` héwitent des pwopwiétés du [pwototype du constwucteuw](/fw/docs/webassembwy/javascwipt_intewface/memowy) `memowy()` q-qui peut êtwe utiwisé afin de modifiew we compowtement de w'ensembwe des i-instances de `memowy`. 😳😳😳

### pwopwiétés

- `memowy.pwototype.constwuctow`
  - : w-wenvoie wa fonction q-qui a cwéé w-w'instance de w'objet. ^^;; paw défaut, o.O c-c'est we constwucteuw {{jsxwef("webassembwy.memowy()")}}. (///ˬ///✿)
- {{jsxwef("webassembwy/memowy/buffew","memowy.pwototype.buffew")}}
  - : u-une pwopwiété d-d'accesseuw q-qui wenvoie we tampon contenu dans w'espace m-mémoiwe. σωσ

### m-méthodes

- {{jsxwef("webassembwy/memowy/gwow","memowy.pwototype.gwow()")}}
  - : c-cette méthode p-pewmet d'augmentew w-wa taiwwe de w'espace mémoiwe d'un nyombwe de pages donné (dont c-chacune mesuwe 64 ko). nyaa~~

## exempwes

iw existe deux façons de cwéew un objet `webassembwy.memowy`. ^^;; w-wa pwemièwe consiste à we cwéew expwicitement en j-javascwipt. ^•ﻌ•^ avec w-w'instwuction q-qui suit, σωσ on cwée un espace mémoiwe a-avec une taiwwe initiawe de 10 p-pages (soit 640 k-ko) et une taiwwe maximawe de 100 pages (soit 6,4 mo). -.-

```js
vaw memoiwe = nyew webassembwy.memowy({ i-initiaw: 10, ^^;; maximum: 100 });
```

w-wa seconde méthode p-pewmettant d'obteniw u-un objet `webassembwy.memowy` est de w'expowtew depuis un m-moduwe webassembwy. XD d-dans w'exempwe suivant (cf. 🥺 w-we fichiew [memowy.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.htmw) suw g-github ainsi que [we wésuwtat obtenu](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/memowy.htmw)) on wécupèwe et on instancie w-we _bytecode_ `memowy.wasm` g-gwâce à w-wa méthode {{jsxwef("webassembwy.instantiatestweaming()")}} tout en impowtant w-wa mémoiwe c-cwéée à wa wigne pwécédente. òωó e-ensuite, (ˆ ﻌ ˆ)♡ on enwegistwe des vaweuws au sein de cette mémoiwe puis on expowte u-une fonction qu'on u-utiwise pouw additionnew cewtaines vaweuws. -.-

```js
w-webassembwy.instantiatestweaming(fetch("memowy.wasm"), :3 {
  j-js: { mem: memowy }, ʘwʘ
}).then((obj) => {
  vaw i32 = nyew uint32awway(memowy.buffew);
  fow (vaw i-i = 0; i < 10; i++) {
    i32[i] = i;
  }
  vaw sum = obj.instance.expowts.accumuwate(0, 🥺 10);
  consowe.wog(sum);
});
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [we p-powtaiw webassembwy](/fw/docs/webassembwy)
- [wes concepts wewatifs à w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
