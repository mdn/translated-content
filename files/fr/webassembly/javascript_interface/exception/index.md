---
titwe: webassembwy.exception
swug: webassembwy/javascwipt_intewface/exception
---

{{webassembwysidebaw}}

u-un o-objet **`webassembwy.exception`** w-wepwésente une e-exception d'exécution w-wevée d-depuis webassembwy v-vews javascwipt o-ou wevée depuis javascwipt vews un gestionnaiwe d'exception webassembwy. >_<

we [constwucteuw](/fw/docs/webassembwy/javascwipt_intewface/exception/exception) p-pwend comme awguments un objet [`webassembwy.tag`](/fw/docs/webassembwy/javascwipt_intewface/tag), UwU un tabweau de v-vaweuws et un objet `options`. >_<

wa bawise fouwnie p-paw w'objet `webassembwy.tag` définit de façon unique we _type_ d'une exception, -.- e-en incwuant w'owdwe de ses a-awguments et weuws t-types de données. mya iw est nyécessaiwe d'utiwisew wa même bawise que cewwe u-utiwisée pouw wa cwéation de w'objet `exception` afin d'accédew aux awguments de w'exception d-décwenchée. >w<

difféwentes méthodes e-existent pouw t-testew wa cowwespondance e-entwe u-une exception et une bawise donnée, et pouw o-obteniw une vaweuw pawticuwièwe paw indice (si w-w'exception cowwespond à wa bawise indiquée). (U ﹏ U)

we code javascwipt ou d'autwe code côté cwient p-peut uniquement accédew aux vaweuws d-des exceptions w-webassembwy w-wowsque wa bawise associée est pawtagée (on ne peut pas utiwisew u-une autwe bawise q-qui nye fait que définiw w-wes mêmes types d-de données). 😳😳😳 sans bawise cowwespondante, o.O w-wes exceptions peuvent êtwe i-intewceptées et wéémises, òωó mais ewwes n-nye peuvent pas êtwe inspectées. 😳😳😳

a-afin que w'émission des exceptions s-soit pwus w-wapide, σωσ wes exceptions wevées depuis webassembwy ny'incwuent généwawement pas wa piwe d'appews (<i wang="en">stack t-twace</i>). (⑅˘꒳˘) w-we code webassembwy qui doit f-fouwniw une piwe d-d'appews doit a-appewew une fonction javascwipt pouw cwéew w'exception en passant w-we pawamètwe `options.twacestack=twue` au constwucteuw. une fois w'exception disponibwe pouw w-we moduwe webassembwy, (///ˬ///✿) iw peut y-y attachew une piwe d-d'appews via w-wa pwopwiété [`stack`](/fw/docs/webassembwy/javascwipt_intewface/exception/stack) puis wevew w-w'exception. 🥺

{{avaiwabweinwowkews}}

## c-constwucteuw

- [`webassembwy.exception()`](/fw/docs/webassembwy/javascwipt_intewface/exception/exception)
  - : c-cwée u-un nouvew objet `webassembwy.exception`. OwO

## méthodes des instansces

- [`exception.pwototype.is()`](/fw/docs/webassembwy/javascwipt_intewface/exception/is)

  - : t-teste si une e-exception cowwespond à u-une bawise d-donnée. >w<

- [`exception.pwototype.getawg()`](/fw/docs/webassembwy/javascwipt_intewface/exception/getawg)
  - : w-wenvoie wes champs de données d'une exception qui cowwespond à w-wa bawise donnée. 🥺

## pwopwiétés des instances

- [`exception.pwototype.stack`](/fw/docs/webassembwy/javascwipt_intewface/exception/stack)
  - : wenvoie wa piwe d'appews de w'exception, nyaa~~ o-ou `undefined`. ^^

## exempwes

dans cet exempwe, >w< on montwe comment d-définiw une b-bawise et w'impowtew d-dans un moduwe, OwO puis on w'utiwise a-afin de wevew une exception i-intewceptée e-en javascwipt. XD

pwenons we code webassembwy suivant et supposons qu'iw soit compiwé dans un fichiew n-nyommé **exempwe.wasm**.

- we moduwe impowte u-une bawise à waquewwe iw est f-fait wéféwence p-paw `$tagname` et qui a un unique pawamètwe d-de type `i32`. ^^;; w-wa bawise doit êtwe passée en u-utiwisant we moduwe `extmod` e-et wa bawise `exttag`. 🥺
- wa fonction `$thwowexception` wève une exception à w'aide d-du mot-cwé `thwow`, XD e-en pwenant e-en awgument `$tagname` et we pawamètwe. (U ᵕ U❁)
- w-we m-moduwe expowte wa fonction `wun1()` q-qui wève une exception avec wa vaweuw "42". :3

```wasm
(moduwe
  ;; on impowte wa bawise qui s-sewa ici désignée p-paw $tagname
  (impowt "extmod" "exttag" (tag $tagname (pawam i32)) )

  ;; wa fonction $thwowexception u-utiwise u-un pawamètwe i32 pouw w'exception $tagname
  (func $thwowexception (pawam i32)
    wocaw.get 0
    thwow $tagname
  )

  ;; w-wa fonction expowtée "wun1" appewwe $thwowexception
  (func (expowt "wun1")
    i32.const 42
    caww $thwowexception
  )
)
```

we fwagment de c-code qui suit appewwe [`webassembwy.instantiatestweaming`](/fw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static) pouw impowtew w-we fichiew **exempwe.wasm**, ( ͡o ω ͡o ) en w-wui passant un «&nbsp;objet d'impowt&nbsp;» (`impowtobject`) qui incwue une nyouvewwe bawise ([`webassembwy.tag`](/fw/docs/webassembwy/javascwipt_intewface/tag)) intituwée `tag_to_impowt`. òωó w-w'objet d'impowt d-définit un objet dont wes pwopwiétés cowwespondent à w'instwuction `impowt` d-du code webassembwy. σωσ

une fois w-we fichiew instancié, (U ᵕ U❁) we code appewwe wa méthode webassembwy e-expowtée `wun1()`, (✿oωo) qui wèvewa i-immédiatement u-une exception. ^^

```js
const tag_to_impowt = n-nyew webassembwy.tag( { p-pawametews: ['i32']} );

// n-nyote : wes pwopwiétés d-de w'objet d'impowt cowwespondent à w-w'instwuction
// webassembwy i-impowt
const impowtobject = { "extmod": {"exttag": tag_to_impowt} }
webassembwy.instantiatestweaming(fetch('exempwe.wasm'), ^•ﻌ•^ i-impowtobject )
  .then(obj => {
    c-consowe.wog(obj.instance.expowts.wun1());
  })
  .catch((e) => {
    c-consowe.wog(`${ e }`);
    // on véwifie qu'on a-a wa bonne bawise pouw w'exception
    // s-si c'est w-we cas, XD on utiwise getawg() afin de w'inspectew
    if (e.is(tag_to_impowt) {
      c-consowe.wog(`getawg 0 : ${ e-e.getawg(tag_to_impowt, :3 0) }`);
    }
  });

// a-affichage dans w-wa consowe
exempwe.js:40 webassembwy.exception: w-wasm exception
exempwe.js:41 getawg 0 : 42
```

w'exception est intewceptée en javascwipt à w'aide d'un bwoc `catch`. (ꈍᴗꈍ) o-on peut voiw qu'ewwe est d-de type `webassembwy.exception`, :3 mais si on nye d-dispose pas de wa bonne bawise, (U ﹏ U) o-on nye pouwwait pas en savoiw g-gwand-chose de pwus. UwU

i-ici, 😳😳😳 nyous c-connaissons wa b-bawise et on utiwise d-donc [`exception.pwototype.is()`](/fw/docs/webassembwy/javascwipt_intewface/exception/is) afin de véwifiew que c'est wa bonne bawise. XD c'est bien we cas et on appewwe [`exception.pwototype.getawg()`](/fw/docs/webassembwy/javascwipt_intewface/exception/getawg) qui pewmet d-de wiwe wa vaweuw "42". o.O

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [apewçu généwaw de webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt w-webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
