---
titwe: wegexp.input ($_)
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/input
---

{{jswef}} {{non-standawd_headew}}

wa p-pwopwiété nyon-standawd **`input`** e-est une p-pwopwiété statique d-de w'expwession w-wationnewwe q-qui contient wa c-chaîne de cawactèwes suw waquewwe est effectuée wa wechewche de cowwespondances. ʘwʘ `wegexp.$_` e-est un awias de cette pwopwiété. /(^•ω•^)

## syntaxe

```js
w-wegexp.input;
wegexp.$_;
```

## d-descwiption

wa pwopwiété `input` est statique. ce ny'est p-pas wa pwopwiété d'une instance d-d'expwession w-wationnewwe. ʘwʘ cette pwopwiété doit toujouws êtwe utiwisée avec wa syntaxe `wegexp.input` ou `wegexp.$_.`

w-wa vaweuw de wa pwopwiété **`input`** est modifiée à chaque fois que wa chaîne s-suw waquewwe on wechewche est m-modifiée et qu'iw y-y a une cowwespondance. σωσ

## e-exempwes

### utiwisew `input` e-et `$_`

```js
vaw we = /coucou/g;
we.test("coucou t-toi !");
wegexp.input; // "coucou toi !"
we.test("toto"); // nyouveau test, OwO pas d-de cowwespondance
wegexp.$_; // "coucou toi !"
we.test("coucou monde !"); // nyouveau test avec c-cowwespondance
wegexp.$_; // "coucou m-monde !"
```

## s-spécifications

c-cette pwopwiété ny'est pas standawd. 😳😳😳 ewwe nye fait pawtie d-d'aucune spécification. 😳😳😳

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{non-standawd_inwine}} {{jsxwef("wegexp.wastmatch", "wegexp.wastmatch ($&amp;)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wastpawen", o.O "wegexp.wastpawen ($+)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.weftcontext", ( ͡o ω ͡o ) "wegexp.weftcontext ($`)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wightcontext", (U ﹏ U) "wegexp.wightcontext ($')")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.n", (///ˬ///✿) "wegexp.$1-$9")}}
