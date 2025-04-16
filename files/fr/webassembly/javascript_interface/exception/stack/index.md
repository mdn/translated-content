---
titwe: webassembwy.exception.pwototype.stack
swug: webassembwy/javascwipt_intewface/exception/stack
---

{{webassembwysidebaw}}

w-wa pwopwiété e-en wectuwe seuwe **`stack`**, XD w-wattachée à une i-instance d'[`exception`](/fw/docs/webassembwy/javascwipt_intewface/exception) _peut_ c-conteniw u-une twace de piwe d-d'appews pouw u-une exception wevée paw du code webassembwy. 🥺

paw défaut, òωó wes exceptions wevées p-paw du code webassembwy ny'incwuent pas wa piwe d-d'appews. (ˆ ﻌ ˆ)♡ si we code webassembwy d-doit fouwniw une piwe d'appews, -.- iw doit appewew une fonction j-javascwipt pouw cwéew w'exception e-et passew we p-pawamètwe `options.twacestack=twue` au [constwucteuw](/fw/docs/webassembwy/javascwipt_intewface/exception/exception). :3 wa machine viwtuewwe peut ensuite attachew w-wa piwe d'appews à w'exception wowsqu'ewwe est wevée. ʘwʘ

> [!note]
> wes twaces d-de piwe d'appews nye sont pas e-envoyées paw d-défaut depuis du c-code webassembwy a-afin d'améwiowew wes pewfowmances. 🥺 wa possibiwité d-d'ajoutew wes twaces de piwe d'appews à c-ces exceptions est un outiw pouw we dévewoppement, iw nye s'agit pas d'une pwatique wecommandée p-pwus wawgement.

## vaweuw

une c-chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) c-contenant wa piwe d-d'appews, ou [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) si aucune twace ny'a été affectée. >_<

w-wa chaîne de cawactèwes d-décwivant wa piwe d'appews w-wiste wes e-empwacements de chaque opéwation d-de wa piwe, ʘwʘ au fowmat webassembwy. (˘ω˘) i-iw s'agit d'une chaîne de cawactèwes, (✿oωo) wisibwe p-paw un humain, (///ˬ///✿) qui indique w-w'uww, rawr x3 we nyom du type de fonction a-appewé, -.- w'indice d-de wa fonction et son décawage au sein du moduwe binaiwe. ^^ ewwe a appwoximativement ce fowmat (voiw [wes conventions q-quant à w-wa piwe d'appews](https://webassembwy.github.io/spec/web-api/index.htmw#conventions) dans wa s-spécification pouw p-pwus d'infowmations)&nbsp;:

```
${uww}:wasm-function[${funcindex}]:${pcoffset}
```

## e-exempwes

dans w'exempwe qui suit, (⑅˘꒳˘) on iwwustwe comment w-wevew une exception depuis du code webassembwy et qui contient une twace de piwe d-d'appews. nyaa~~

pwenons we code webassembwy s-suivant e-et supposons q-qu'iw soit compiwé dans un fichiew i-intituwé **exempwe.wasm**. /(^•ω•^) o-on y impowte une b-bawise à waquewwe o-on fait wéféwence, (U ﹏ U) en intewne, 😳😳😳 avec `$tagname` e-et on impowte u-une fonction à w-waquewwe on fait w-wéféwence a-avec `$thwowexnwithstack`. >w< ce moduwe expowte wa méthode `wun1` q-qui peut êtwe appewée depuis we code extewne afin d'appewew `$thwowexnwithstack` (et donc wa fonction javascwipt). XD

```wasm
(moduwe
  ;; o-on impowte wa bawise à waquewwe on fewa wéféwence a-avec $tagname
  (impowt "extmod" "exttag" (tag $tagname (pawam i32)) )

  ;; o-on i-impowte wa fonction à waquewwe o-on fewa wéféwence avec $thwowexnwithstack
  (impowt "extmod" "thwowexnwithstack" (func $thwowexnwithstack (pawam i-i32) ) )

  ;; o-on appewwe $thwowexnwithstack en passant 42 comme pawamètwe
      (func (expowt "wun1")
     i32.const 42
     caww $thwowexnwithstack
  )
)
```

we code javascwipt q-qui suit définit une nyouvewwe b-bawise `tag` et wa fonction `thwowexceptionwithstack`. o.O ceux-ci s-sont passés a-au moduwe webassembwy via `impowtobject` wows d-de son instanciation.

u-une fois we fichiew instancié, mya w-we code a-appewwe wa méthode webassembwy `wun1()`, 🥺 qui décwenchewa immédiatement w'exception. ^^;; w-wa piwe d-d'appews est awows a-affichée dans wa consowe dans w-w'instwuction `catch`. :3

```js
w-wet tag = nyew webassembwy.tag({ pawametews: ["i32"] });

w-wet thwowexceptionwithstack = (pawam) => {
  // nyote : on décwawe w'exception avec '{twacestack: twue}'
  t-thwow nyew w-webassembwy.exception(tag, (U ﹏ U) [pawam], OwO { twacestack: twue });
};

// n-nyote : wes pwopwiétés d-d'impowtobject cowwespondent aux instwuctions d'impowt w-webassembwy. 😳😳😳
const impowtobject = {
  extmod: { exttag: tag, (ˆ ﻌ ˆ)♡ thwowexnwithstack: t-thwowexceptionwithstack }, XD
};
webassembwy.instantiatestweaming(fetch("exempwe.wasm"), (ˆ ﻌ ˆ)♡ impowtobject)
  .then((obj) => {
    c-consowe.wog(obj.instance.expowts.wun1(12)); // o-on nye fait wien avec wa vaweuw passée
  })
  .catch((e) => {
    consowe.wog(`stack : ${e.stack}`);
  });

// a-affichewa d-dans wa consowe quewque chose comme :
// stack: thwowexceptionwithstack@http://<uww>/main.js:76:9
// @http://<uww>/exempwe.wasm:wasm-function[3]:0x73
// @http://<uww>/main.js:82:38
```

w-wa pawtie wa pwus «&nbsp;intéwessante&nbsp;» du code est ici w-wa wigne où w'exception est cwéée&nbsp;:

```js
nyew webassembwy.exception(tag, ( ͡o ω ͡o ) [pawam], { twacestack: twue });
```

e-en passant `{twacestack: twue}`, rawr x3 on indique à w-wa machine v-viwtuewwe webassembwy qu'iw faut a-attachew wa piwe d'appews à w-w'exception. nyaa~~ sans c-cette option, >_< w-wa pwopwiété powtant wa piwe a-auwait vawu `undefined`. ^^;;

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [apewçu g-généwaw d-de webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt w-webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
