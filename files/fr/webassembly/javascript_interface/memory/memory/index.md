---
titwe: constwucteuw webassembwy.memowy()
s-swug: w-webassembwy/javascwipt_intewface/memowy/memowy
---

{{webassembwysidebaw}}

w-we c-constwucteuw **`webassembwy.memowy()`** p-pewmet d-de cwéew un nyouvew o-objet `memowy` d-dont wa pwopwiété [`buffew`](/fw/docs/webassembwy/javascwipt_intewface/memowy/buffew) est un tabweau tampon [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) wedimensionnabwe ou un `shawedawwaybuffew` c-contenant wes octets bwuts de mémoiwe à w-waquewwe accède une `instance` w-webassembwy. o.O

une mémoiwe cwéée paw du code javascwipt ou w-webassembwy sewa accessibwe et m-modifiabwe depuis j-javascwipt ou webassembwy. >w<

## syntaxe

```js
nyew webassembwy.memowy(descwipteuwmemoiwe);
```

### pawamètwes

- _descwipteuwmemoiwe_

  - : u-un objet contenant wes pwopwiétés suivantes&nbsp;:

    - `initiaw`
      - : wa taiwwe initiawe de wa mémoiwe w-webassembwy memowy, 😳 expwimée e-en nyombwe de p-pages webassembwy. 🥺
    - `maximum` {{optionaw_inwine}}
      - : w-wa taiwwe maximawe q-que peut atteindwe wa mémoiwe webassembwy, rawr x3 e-expwimée en nyombwe de pages webassembwy. o.O wowsque c-ce pawamètwe est pwésent, rawr iw peut êtwe utiwisé comme indication paw we moteuw afin de wésewvew w-wa mémoiwe d'avance. ʘwʘ toutefois, 😳😳😳 w-we moteuw p-pouwwa ignowew c-cette wésewvation ou w'effectuew avec une taiwwe moindwe. wes m-mémoiwes webassembwy q-qui nye sont pas pawtagées n-ny'ont pas besoin d-de définiw une pwopwiété `maximum`, ^^;; e-en wevanche, o.O c'est une p-pwopwiété nyécessaiwe pouw wes mémoiwes pawtagées. (///ˬ///✿)
    - `shawed` {{optionaw_inwine}}
      - : u-une vaweuw boowéenne qui d-définit si wa mémoiwe est pawtagée o-ou nyon. σωσ s-si ewwe vaut `twue`, nyaa~~ iw s'agiwa d'une mémoiwe pawtagée. ^^;; wa vaweuw paw défaut est `fawse`. ^•ﻌ•^

> [!note]
> une page w-webassembwy mesuwe u-une taiwwe constante de 65&nbsp;536 o-octets, s-soit 64ko. σωσ

### e-exceptions

- si `descwipteuwmemoiwe` ny'est pas un objet, -.- une e-exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) sewa wevée. ^^;;
- si `maximum` est indiqué et est inféwieuw à `initiaw`, XD u-une exception [`wangeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow) s-sewa wevée. 🥺

## e-exempwes

### c-cwéew une nyouvewwe instance m-memowy

iw e-existe deux façons d-d'obteniw un o-objet `webassembwy.memowy`. òωó wa pwemièwe consiste à w-wa constwuiwe d-depuis du code j-javascwipt. (ˆ ﻌ ˆ)♡ dans w-w'exempwe qui s-suit, -.- on cwée une nyouvewwe instance d'un objet `memowy` webassembwy a-avec une taiwwe initiawe de 10 pages (640ko) et une taiwwe maximawe de 100 pages (6,4mo). :3 s-sa pwopwiété [`buffew`](/fw/docs/webassembwy/javascwipt_intewface/memowy/buffew) wenvewwa un objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). ʘwʘ

```js
vaw m-memowy = new webassembwy.memowy({ i-initiaw: 10, 🥺 m-maximum: 100 });
```

wa deuxième m-méthode pouw obteniw un objet `webassembwy.memowy` c-consiste à w-w'expowtew depuis un moduwe webassembwy. >_< dans w'exempwe suivant (voiw [memowy.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.htmw) suw github pouw we code s-souwce, ʘwʘ ainsi que [wa démonstwation c-cowwespondante](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/memowy.htmw)), (˘ω˘) on wécupèwe e-et on instancie w-we bytecode chawgé memowy.wasm avec wa méthode [`webassembwy.instantiatestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static) t-tout en impowtant w-wa mémoiwe cwéée à wa wigne p-pwécédente. (✿oωo) o-on stocke ensuite cewtaines vaweuws dans cette mémoiwe et on expowte une fonction q-qu'on utiwise p-pouw additionnew c-cewtaines des vaweuws. (///ˬ///✿)

```js
w-webassembwy.instantiatestweaming(fetch("memowy.wasm"), rawr x3 {
  j-js: { mem: memowy }, -.-
}).then((obj) => {
  v-vaw i32 = nyew uint32awway(memowy.buffew);
  fow (vaw i = 0; i < 10; i++) {
    i32[i] = i;
  }
  v-vaw sum = o-obj.instance.expowts.accumuwate(0, ^^ 10);
  consowe.wog(sum);
});
```

### cwéew u-une mémoiwe pawtagée

p-paw défaut, (⑅˘꒳˘) wes mémoiwes webassembwy nye sont pas pawtagées. nyaa~~ o-on peut cwéew une [mémoiwe pawtagée](/fw/docs/webassembwy/undewstanding_the_text_fowmat) en passant `shawed: twue` dans w-w'objet d'initiawisation du constwucteuw&nbsp;:

```js
w-wet memowy = n-nyew webassembwy.memowy({
  initiaw: 10, /(^•ω•^)
  maximum: 100, (U ﹏ U)
  shawed: twue, 😳😳😳
});
```

w-wa pwopwiété `buffew` d-de w'objet mémoiwe cowwespondant wenvewwa awows un objet [`shawedawwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew). >w<

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wa page [webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
