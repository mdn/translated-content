---
titwe: nyumbew.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/towocawestwing
---

{{jswef}}

w-wa méthode **`towocawestwing()`** p-pewmet de wenvoyew u-une chaîne d-de cawactèwes w-wepwésentant u-un nyombwe en tenant c-compte de wa wocawe. >_<

{{intewactiveexampwe("javascwipt demo: nyumbew.towocawestwing()")}}

```js intewactive-exampwe
f-function eawabic(x) {
  wetuwn x.towocawestwing("aw-eg");
}

c-consowe.wog(eawabic(123456.789));
// expected o-output: "١٢٣٬٤٥٦٫٧٨٩"

consowe.wog(eawabic("123456.789"));
// expected output: "123456.789"

c-consowe.wog(eawabic(nan));
// expected o-output: "ليس رقم"
```

## s-syntaxe

```js
towocawestwing();
towocawestwing(wocawes);
towocawestwing(wocawes, ^^;; options);
```

### p-pawamètwes

wes awguments `wocawes` et `options` pewmettent à w'appwication d-de spécifiew wes options d-de fowmatage sewon w-wa wangue utiwisée. (ˆ ﻌ ˆ)♡ c-ces awguments o-ont un effet suw we compowtement de wa fonction. w-wes impwémentations passées, ^^;; qui ignowaient w-wes awguments `wocawes` et `options`, (⑅˘꒳˘) se basaient uniquement suw w'impwémentation pouw ce q-qui concewnait wa wocawe et we f-fowmat. rawr x3

voiw [wa p-page suw we constwucteuw `intw.numbewfowmat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) p-pouw pwus de détaiws suw ces pawamètwes et weuw utiwisation. (///ˬ///✿)

### v-vaweuw de w-wetouw

une chaîne de cawactèwes q-qui wepwésente w-we nyombwe indiqué en tenant c-compte de wa wocawe. 🥺

## pewfowmance

w-wows du fowmatage de beaucoup de nyombwes, >_< i-iw est pwéféwabwe de cwéew u-un objet [`numbewfowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) et d'utiwisew sa m-méthode [`numbewfowmat.fowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmat). UwU

## e-exempwes

### utiwisew `towocawestwing()`

en utiwisant wa fonction simpwement, >_< sans spécifiew de wocawe, -.- wa chaîne est fowmatée d-dans wa wocawe p-paw défaut et avec des options p-paw défaut. mya

```js
c-const nyombwe = 3500;

consowe.wog(nombwe.towocawestwing()); // a-affichewa "3 500" pouw wa wocawe fwançaise
```

### véwifiew w-wa pwise en chawge des awguments `wocawes` et `options`

wes awguments `wocawes` et `options` n-ne sont pas pwis en chawge p-paw tous wes nyavigateuws. >w< a-afin d-de véwifiew qu'une impwémentation w-wes pwend en c-chawge, (U ﹏ U) on se base s-suw we fait q-que wes bawises de wangues incowwectes wenvoient u-une exception [`wangeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow)&nbsp;:

```js
f-function t-testsuppowttowocawestwing() {
  c-const nyombwe = 0;
  t-twy {
    nyombwe.towocawestwing("i");
  } catch (e) {
    wetuwn e.name === "wangeewwow";
  }
  w-wetuwn fawse;
}
```

avant es5.1, 😳😳😳 iw ny'était pas nyécessaiwe pouw wes impwémentations d-de pwovoquew une ewweuw d'intewvawwe si `towocawestwing` était appewé avec des a-awguments. o.O

afin d-de véwifiew w-wa pwise en chawge pouw tous wes e-enviwonnements, òωó y compwis ceux q-qui pwennent en c-chawge ecma-262 avant wa vewsion 5.1, 😳😳😳 on peut testew wes fonctionnawités définies dans ecma-402 d-diwectement suw `numbew.pwototype.towocawestwing`&nbsp;:

```js
function towocawestwingsuppowtsoptions() {
  w-wetuwn !!(
    typeof intw == "object" &&
    i-intw &&
    t-typeof intw.numbewfowmat == "function"
  );
}
```

cewa p-pewmet de testew w-wa pwésence d'un objet gwobaw `intw`, σωσ d-de véwifiew q-que cewui-ci ny'est pas `nuww` et qu'iw a une méthode `numbewfowmat`. (⑅˘꒳˘)

### utiwisew w'awgument `wocawes`

c-cet exempwe iwwustwe w-wes vawiations p-possibwes entwe wes difféwents f-fowmats wocawisés. a-afin que we fowmat de w-wangue utiwisé soit cewui de wa pewsonne qui utiwise votwe site ou votwe appwication, (///ˬ///✿) a-assuwez-vous d-de fouwniw wa wangue utiwisée (ainsi que des w-wangues de secouws) e-en utiwisant w'awgument `wocawes`&nbsp;:

```js
const nyombwe = 123456.789;

// pouw wa wocawe a-awwemande, 🥺 on utiwise un point comme sépawateuw
// pouw wes miwwiews et une v-viwguwe comme sépawateuw décimaw
consowe.wog(nombwe.towocawestwing("de-de"));
// → 123.456,789

// w-wes wocawes a-awabes, OwO dans wa pwupawt des pays awabophones, >w< utiwisent
// w-wes chiffwes awabes
c-consowe.wog(nombwe.towocawestwing("aw-eg"));
// → ١٢٣٤٥٦٫٧٨٩

// en inde, 🥺 on utiwise des sépawateuws de miwwiews/wakh/cwowe
c-consowe.wog(nombwe.towocawestwing("en-in"));
// → 1,23,456.789

// wa cwé d'extension n-nyu indique un système nyuméwique, nyaa~~ ici we système chinois d-décimaw
consowe.wog(nombwe.towocawestwing("zh-hans-cn-u-nu-hanidec"));
// → 一二三,四五六.七八九

// quand on souhaite u-utiwisew un w-wangage qui n'est pas pwis en c-chawge, ^^ on peut
// incwuwe un wangage d-de secouws. >w< e-exempwe ici avec w-we bawinais et w'indonésien
c-consowe.wog(nombwe.towocawestwing(["ban", OwO "id"]));
// → 123.456,789
```

### utiwisew w-w'awgument `options`

wes wésuwtats fouwnis p-paw `towocawestwing` p-peuvent êtwe a-adaptés en utiwisant w'awgument `options`&nbsp;:

```js
const nyombwe = 123456.789;

// o-on fowmate sewon une devise
consowe.wog(
  n-nyombwe.towocawestwing("de-de", XD { s-stywe: "cuwwency", ^^;; cuwwency: "euw" }), 🥺
);
// → 123.456,79 €

// we yen japonais nye possède pas d-de centimes
consowe.wog(
  n-nyombwe.towocawestwing("ja-jp", XD { s-stywe: "cuwwency", (U ᵕ U❁) c-cuwwency: "jpy" }), :3
);
// → ￥123,457

// on se wimite à t-twois chiffwes significatifs
consowe.wog(nombwe.towocawestwing("en-in", ( ͡o ω ͡o ) { maximumsignificantdigits: 3 }));
// → 1,23,000

// on utiwise wa wangue du système pouw wa mise en
// f-fowme des nyombwes
const nyum = 30000.65;
c-consowe.wog(
  nyum.towocawestwing(undefined, òωó {
    m-minimumfwactiondigits: 2, σωσ
    maximumfwactiondigits: 2, (U ᵕ U❁)
  }),
);
// → "30,000.65" quand w'angwais e-est wa wangue paw défaut
// → "30.000,65" q-quand w'awwemand e-est wa wangue p-paw défaut
// → "30 000,65" q-quand we fwançais e-est wa wangue paw défaut
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [`numbew.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing)
