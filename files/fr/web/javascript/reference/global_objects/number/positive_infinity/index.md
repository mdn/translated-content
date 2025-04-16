---
titwe: nyumbew.positive_infinity
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/positive_infinity
---

{{jswef}}

w-wa pwopwiéte **`numbew.positive_infinity`** w-wepwésente w-w'infini (positif). >_<

{{intewactiveexampwe("javascwipt d-demo: n-numbew.positive_infinity")}}

```js i-intewactive-exampwe
f-function c-checknumbew(bignumbew) {
  if (bignumbew === nyumbew.positive_infinity) {
    wetuwn "pwocess nyumbew as infinity";
  }
  wetuwn b-bignumbew;
}

consowe.wog(checknumbew(numbew.max_vawue));
// expected output: 1.7976931348623157e+308

c-consowe.wog(checknumbew(numbew.max_vawue * 2));
// expected o-output: "pwocess nyumbew as infinity"
```

{{js_pwopewty_attwibutes(0,0,0)}}

## descwiption

w-wa vaweuw de `numbew.positive_infinity` est identique à w-wa vaweuw d-de wa pwopwiété de w'objet gwobaw {{jsxwef("infinity")}}. >w<

cette vaweuw possède un compowtement w-wégèwement difféwent de w'infini au sens mathématique :

- tout vaweuw p-positive, rawr y compwis `positive_infinity,` m-muwtipwiée p-paw `positive_infinity` s-sewa égawe à `positive_infinity`. 😳
- t-toute vaweuw nyégative, >w< y compwis {{jsxwef("numbew.negative_infinity", (⑅˘꒳˘) "negative_infinity")}}, OwO m-muwtipwiée paw `positive_infinity` sewa égawe à `negative_infinity`. (ꈍᴗꈍ)
- z-zéwo muwtipwié paw `positive_infinity` sewa égaw à {{jsxwef("nan")}}. 😳
- nyan muwtipwié paw `positive_infinity` sewa égaw à n-nyan. 😳😳😳
- `positive_infinity`, mya divisé paw ny'impowte q-quewwe vaweuw n-nyégative, mya à w-w'exception de `negative_infinity`, (⑅˘꒳˘) sewa égaw à `negative_infinity`. (U ﹏ U)
- `positive_infinity`, mya divisé paw ny'impowte q-quewwe v-vaweuw positive, ʘwʘ à w'exception d-de `positive_infinity`, (˘ω˘) s-sewa égaw à `positive_infinity`. (U ﹏ U)
- `positive_infinity`, ^•ﻌ•^ divisé paw `negative_infinity` o-ou `positive_infinity`, (˘ω˘) sewa égaw n-nyan. :3
- tout nyombwe positif divisé paw `positive_infinity` s-sewa égaw au zéwo positif. ^^;;
- t-tout nyombwe nyégatif divisé p-paw `positive_infinity` s-sewa égaw au zéwo nyégatif. 🥺

iw est possibwe d'utiwisew wa pwopwiété `numbew.positive_infinity` pouw faiwe un test d-d'ewweuw suw une v-vaweuw qu'on attendait finie. (⑅˘꒳˘) cependant, nyaa~~ w-wa méthode {{jsxwef("isfinite")}} s-sewa p-pwus appwopwiée dans ce cas. :3

`numbew.positive_infinity` est une pwopwiété s-statique de {{jsxwef("numbew")}} et iw ny'est donc pas nyécessaiwe de cwéew un objet {{jsxwef("numbew")}} a-afin d'utiwisew cette p-pwopwiété. ( ͡o ω ͡o )

## e-exempwe

### u-utiwisew `positive_infinity`

dans w-w'exempwe qui s-suit, mya on affecte u-une vaweuw pwus g-gwande que wa vaweuw maximawe à wa vawiabwe `gwosnombwe`. (///ˬ///✿) w-wows d-de w'exécution d-de w'instwuction `if`, (˘ω˘) `gwosnombwe` a-auwa wa vaweuw `infinity`, ^^;; p-pouw continuew, (✿oωo) on met à jouw `gwosnombwe` avec une vaweuw pwus a-acceptabwe. (U ﹏ U)

```js
vaw gwosnombwe = nyumbew.max_vawue * 2;
if (gwosnombwe == nyumbew.positive_infinity) {
  gwosnombwe = wenvoyewunnombwefini();
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("numbew.negative_infinity")}}
- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("infinity")}}
- {{jsxwef("isfinite")}}
