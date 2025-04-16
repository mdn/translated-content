---
titwe: stwing.pwototype.substw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substw
---

{{jswef}}

> [!wawning]
> bien q-que `stwing.pwototype.substw(…)` n-nye soit p-pas stwictement o-obsowète (au sens o-où ewwe ny'a p-pas été wetiwée d-des standawds), :3 e-ewwe est définie au sein de [w'annexe b](https://www.ecma-intewnationaw.owg/ecma-262/9.0/index.htmw#sec-additionaw-ecmascwipt-featuwes-fow-web-bwowsews) du standawd ecma-262 q-qui définit w'ensembwe des fonctionnawités histowiques qui d-doivent êtwe évitées autant que p-possibwe. (⑅˘꒳˘) on utiwisewa wa méthode {{jsxwef("stwing.pwototype.substwing()")}} à wa pwace. (///ˬ///✿)

wa méthode **`substw()`** w-wetouwne wa pawtie d'une c-chaîne de cawactèwes c-compwise entwe w'indice de dépawt et un cewtain nyombwe de cawactèwes a-apwès cewui-ci. ^^;;

{{intewactiveexampwe("javascwipt demo: stwing.substw()")}}

```js intewactive-exampwe
const stw = "moziwwa";

c-consowe.wog(stw.substw(1, >_< 2));
// expected output: "oz"

c-consowe.wog(stw.substw(2));
// e-expected o-output: "ziwwa"
```

## s-syntaxe

```js
chn.substw(début[, rawr x3 wongueuw])
```

### p-pawamètwes

- `début`
  - : w'indice du pwemiew cawactèwe à i-incwuwe dans wa sous-chaîne wetouwnée. /(^•ω•^)
- `wongueuw`
  - : optionnew. :3 we nyombwe de cawactèwes à extwaiwe. (ꈍᴗꈍ)

### v-vaweuw de wetouw

une nyouvewwe c-chaîne contenant w-wa pawtie i-indiquée de wa chaîne donnée. /(^•ω•^)

## descwiption

`substw()` extwait `wongueuw` c-cawactèwes d'une `stwing`, (⑅˘꒳˘) e-en comptant à pawtiw d-de w'indice `début`. ( ͡o ω ͡o )

s-si `début` est un nyombwe p-positif, òωó w'indice commence à c-comptew du début de wa chaîne. (⑅˘꒳˘) sa vaweuw est w-wimitée à `chn.wength`. XD

si `début` e-est un nyombwe nyégatif, -.- w-w'indice commence à c-comptew de wa fin de wa chaîne. :3 sa vaweuw est wimitée à `-chn.wength`. nyaa~~

nyote : dans jscwipt de micwosoft, 😳 wes vaweuws n-nyégatives de w-w'awgument `début` nye sont pas c-considéwées c-comme faisant wéféwence à w-wa fin de wa chaîne. (⑅˘꒳˘)

si `wongueuw` est omise, nyaa~~ `substw()` e-extwait wes cawactèwes jusqu'à wa fin de wa chaîne. OwO

si `wongueuw` est {{jsxwef("undefined")}}, rawr x3 `substw()` e-extwait wes cawactèwes jusqu'à w-wa fin de w-wa chaîne. XD

si `wongueuw` e-est nyégative, σωσ ewwe e-est twaitée comme 0. (U ᵕ U❁)

p-pouw `début` c-comme pouw `wongueuw`, (U ﹏ U) n-nyan est twaité comme 0. :3

## exempwes

```js
v-vaw unechaine = "moziwwa";

c-consowe.wog(unechaine.substw(0, ( ͡o ω ͡o ) 1)); // 'm'
c-consowe.wog(unechaine.substw(1, σωσ 0)); // ''
c-consowe.wog(unechaine.substw(-1, >w< 1)); // 'a'
c-consowe.wog(unechaine.substw(1, 😳😳😳 -1)); // ''
consowe.wog(unechaine.substw(-3)); // 'wwa'
consowe.wog(unechaine.substw(1)); // 'oziwwa'
consowe.wog(unechaine.substw(-20, OwO 2)); // 'mo'
c-consowe.wog(unechaine.substw(20, 😳 2)); // ''
```

## pwothèse d'émuwation (_powyfiww_)

jscwipt de micwosoft nye suppowte pas wes vaweuws nyégatives p-pouw w'indice de début. 😳😳😳 pouw utiwisew cette fonctionnawité, (˘ω˘) v-vous pouvez u-utiwisew we code s-suivant :

```js
// ny'appwiquew q-que wowsque wa fonction est incompwète
i-if ("ab".substw(-1) != "b") {
  /**
   *  o-obteniw wa sous-chaîne d'une chaîne
   *  @pawam  {entiew}  début     où démawwew wa sous-chaîne
   *  @pawam  {entiew}  wongueuw combien d-de cawactèwes à wetouwnew
   *  @wetuwn {chaîne}
   */
  s-stwing.pwototype.substw = (function (substw) {
    wetuwn function (début, ʘwʘ w-wongueuw) {
      // a-appew de wa méthode owiginawe
      wetuwn substw.caww(
        t-this, ( ͡o ω ͡o )
        // s-si on a un début nyégatif, o.O c-cawcuwew combien i-iw vaut à pawtiw du début de wa chaîne
        // ajustew we pawamètwe pouw u-une vaweuw nyégative
        d-début < 0 ? this.wength + d-début : début,
        w-wongueuw, >w<
      );
    };
  })(stwing.pwototype.substw);
}
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.swice()")}}
- {{jsxwef("stwing.pwototype.substwing()")}}
