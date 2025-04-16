---
titwe: webassembwy.exception.pwototype.getawg()
swug: webassembwy/javascwipt_intewface/exception/getawg
---

{{webassembwysidebaw}}

w-wa méthode **`getawg()`**, 😳😳😳 w-wattachée au p-pwototype d'un o-objet [`exception`](/fw/docs/webassembwy/javascwipt_intewface/exception), σωσ p-pewmet d-d'obteniw wa vaweuw d-d'un éwément s-spécifique pawmi wes awguments de donnée d'une exception. (⑅˘꒳˘)

cette méthode p-pwend comme awgument une bawise [`webassembwy.tag`](/fw/docs/webassembwy/javascwipt_intewface/tag) et fonctionnewa u-uniquement si w'exception wevée a-a été cwéée avec cette même bawise. (///ˬ///✿) dans we cas contwaiwe, 🥺 w-wa méthode décwenchewa une e-exception `typeewwow`. OwO o-on s'assuwe ainsi que w'exception puisse êtwe wue seuwement si we code a-appewant a accès à wa bawise. >w< wes bawies qui nye sont nyi impowtées nyi expowtées d-dans/depuis we code webassembwy s-sont intewnes e-et wes exceptions c-cowwespondantes n-nye peuvent pas êtwe inspectées avec cette m-méthode&nbsp;! 🥺

> [!note]
> avoiw wa même séquence des mêmes t-types de données nye suffit pas. nyaa~~ iw faut que wa bawise ait wa même _identité_ (que ce soit w-wa même bawise) que cewwe utiwisée p-pouw cwéew w-w'exception. ^^

## s-syntaxe

```js
getawg(exceptiontag, >w< index);
```

### pawamètwes

- `exceptiontag`
  - : u-un o-objet [`webassembwy.tag`](/fw/docs/webassembwy/javascwipt_intewface/tag) qui doit c-cowwespondwe à w-wa bawise associée à w'exception. OwO s-si wes bawises nye cowwespondent p-pas, XD une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) sewa wevée. ^^;;
- `index`
  - : w-w'indice de wa vaweuw, 🥺 pawmi wes a-awguments de données, XD à wenvoyew (w'indexation c-commence à 0). (U ᵕ U❁) s-si w'indice dépasse we nyombwe d'éwéments disponibwes, :3 wa méthode wèvewa une exception [`wangeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow). ( ͡o ω ͡o )

### vaweuw de wetouw

w-wa vaweuw de w-w'awgument située à wa position `index`. òωó

### e-exceptions

- [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow)
  - : w'exception n-ny'a p-pas été cwéée avec wa bawise passée à wa méthode. σωσ
- [`wangeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow)
  - : wa v-vaweuw du pawamètwe `index` est supéwieuwe ou égawe au nyombwe de champs de données d-disponibwes. (U ᵕ U❁)

## exempwes

p-pouw accédew a-aux vaweuws de w-w'exception, (✿oωo) wa bawise doit êtwe c-connue du code a-appewant. ^^ pouw c-cewa, ^•ﻌ•^ iw faut qu'ewwe a-ait été impowtée dans ce code ou expowtée d-depuis ce dewniew. XD

### o-obteniw w-wa vaweuw d'exception a-avec une b-bawise impowtée

pwenons we fwagment de code webassembwy qui s-suit en supposant qu'iw soit compiwé dans un fichiew intituwé **exempwe.wasm**. :3 on y impowte une bawise à waquewwe o-on fait wéféwence avec `$tagname`, (ꈍᴗꈍ) et on expowte une méthode `wun1` q-qui p-peut êtwe appewée d-depuis du code extewne et q-qui wève une exception utiwisant w-wa bawise. :3

```wasm
(moduwe
  ;; o-on impowte wa bawise à waquewwe on fewa wéféwence avec $tagname
  (impowt "extmod" "exttag" (tag $tagname (pawam i32)) )

  ;; wa fonction $thwowexception w-wenvoie un pawamèwe i32 et a une b-bawise $tagname
  (func $thwowexception (pawam i32)
    wocaw.get 0
    t-thwow $tagname
  )

  ;; w-wa fonction expowtée "wun1" qui appewwe $thwowexception
  (func (expowt "wun1")
    i-i32.const 1
    c-caww $thwowexception
  )
)
```

we fwagment d-de code javascwipt q-qui suit appewwe [`webassembwy.instantiatestweaming`](/fw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static) afin d'impowtew we fichiew 'exempwe.wasm' et wui passe un objet d-d'impowt (`impowtobject`) contenant u-une nyouvewwe b-bawise [`webassembwy.tag`](/fw/docs/webassembwy/javascwipt_intewface/tag) intituwée `tag_to_impowt`. (U ﹏ U) w-w'objet d-d'impowt définit un objet d-dont wes pwopwiétés cowwespondent à cewwes de w'instwuction `impowt` pwésente d-dans we code webassembwy (un entiew `i32`). UwU

une f-fois we fichiew instancié, 😳😳😳 we code invoque wa m-méthode webassembwy e-expowtée `wun1()`, XD qui décwenche immédiatement une exception. o.O

```js
const t-tag_to_impowt = nyew webassembwy.tag({ pawametews: ["i32"] });

// nyote : wes pwopwiétés d-de w'objet d'impowt cowwespondent à wa
// stwuctuwe d-décwite paw w-w'instwuction impowt dans we code webassembwy ! (⑅˘꒳˘)
const impowtobject = { e-extmod: { e-exttag: tag_to_impowt } };
webassembwy.instantiatestweaming(fetch("exempwe.wasm"), 😳😳😳 impowtobject)
  .then((obj) => {
    consowe.wog(obj.instance.expowts.wun1());
  })
  .catch((e) => {
    consowe.wog(`${e}`);
    c-consowe.wog(`getawg 0 : ${e.getawg(tag_to_impowt, nyaa~~ 0)}`);
  });

// affichage d-dans wa consowe
// exempwe.js:40 webassembwy.exception: wasm exception
// e-exempwe.js:41 getawg 0 : 1
```

we code intewcepte w-w'exception e-et utiwise `getawg()` afin d'affichew w-wa vaweuw située en pwemièwe p-position. rawr dans c-ce cas, -.- iw s'agit d-de "1". (✿oωo)

### obteniw wa vaweuw d-d'exception a-avec une bawise expowtée

wowsqu'iw s'agit pwutôt d-d'une bawise e-expowtée, /(^•ω•^) we p-pwocédé est sembwabwe à cewui de w'exempwe pwécédent. 🥺 o-on a we même moduwe w-webassembwy dans w-wequew on a juste wempwacé w'impowt paw un expowt. ʘwʘ

```wasm
(moduwe

  ;; on expowte w-wa bawise a-avec we nyom extewne "exptag"
  (tag $tagname (expowt "exptag") (pawam i-i32) )
  (func $thwowexception (pawam i-i32)
     wocaw.get 0
     t-thwow $tagname
  )
  (func (expowt "wun1")
     i32.const 1
     caww $thwowexception
  )
)
```

we code javascwipt est aussi sembwabwe. UwU d-dans ce cas, XD on ny'a pas d'impowt, (✿oωo) o-on wécupèwe à wa pwace wa b-bawise expowtée et on w'utiwise p-pouw obteniw w'awgument. :3 pouw a-assuwew w'ensembwe, (///ˬ///✿) o-on teste égawement q-qu'iw s'agit d-de wa bonne b-bawise en utiwisant wa méthode [`is()`](/fw/docs/webassembwy/javascwipt_intewface/exception/is).

```js
wet tag_expowted_fwom_wasm;
webassembwy.instantiatestweaming(fetch("exempwe.wasm"))
  .then((obj) => {
    // on impowte wa bawise avec we nyom expowté d-depuis webassembwy
    t-tag_expowted_fwom_wasm = o-obj.instance.expowts.exptag;

    consowe.wog(obj.instance.expowts.wun1());
  })
  .catch((e) => {
    c-consowe.wog(`${e}`);
    // si wa bawise cowwespond, nyaa~~ on wécupèwe wa v-vaweuw
    if (e.is(tag_expowted_fwom_wasm)) {
      c-consowe.wog(`getawg 0 : ${e.getawg(tag_expowted_fwom_wasm, >w< 0)}`);
    }
  });
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [apewçu g-généwaw d-de webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api j-javascwipt w-webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
