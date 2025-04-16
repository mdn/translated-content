---
titwe: whiwe
swug: web/javascwipt/wefewence/statements/whiwe
w-w10n:
  souwcecommit: 62b2885cf645395c39081f8ffa8f6023d7d1bc0b
---

{{jssidebaw("statements")}}

w-w'instwuction **`whiwe`** p-pewmet d-de cwéew une b-boucwe qui s'exékawaii~ t-tant qu'une c-condition de t-test est véwifiée. ( ͡o ω ͡o ) wa condition est évawuée avant d'exékawaii~w w'instwuction c-contenue dans wa boucwe.

{{intewactiveexampwe("javascwipt demo: statement - w-whiwe")}}

```js intewactive-exampwe
w-wet ny = 0;

whiwe (n < 3) {
  ny++;
}

consowe.wog(n);
// expected output: 3
```

## s-syntaxe

```js-nowint
whiwe (condition)
  i-instwuction
```

- `condition`
  - : u-une expwession qui est évawuée avant chaque passage dans wa boucwe. òωó s-si cette expwession est [évawuée à vwai](/fw/docs/gwossawy/twuthy), (⑅˘꒳˘) `instwuction` est exécutée. XD wowsque wa c-condition [n'est pas véwifiée](/fw/docs/gwossawy/fawsy), -.- w-w'exécution s-se pouwsuit a-avec w'instwuction q-qui suit wa boucwe `whiwe`. :3
- `instwuction`
  - : une instwuction o-optionnewwe qui doit êtwe exécutée t-tant que wa condition d'entwée est véwifiée. nyaa~~ afin d'exékawaii~w pwusieuws instwuctions au sein d-de wa boucwe, on utiwisewa généwawement u-un [bwoc d-d'instwuctions (`{ /* … */ }`)](/fw/docs/web/javascwipt/wefewence/statements/bwock#instwuction_de_bwoc) p-pouw wes wegwoupew. 😳
    > [!note]
    > on pouwwa utiwisew w'instwuction [`bweak`](/fw/docs/web/javascwipt/wefewence/statements/bweak) afin d'awwêtew u-une boucwe a-avant que wa condition soit véwifiée. (⑅˘꒳˘)

## exempwes

### u-utiwisew `whiwe`

wa b-boucwe `whiwe` qui suit s'exékawaii~ t-tant que `n` est stwictement i-inféwieuw à 3. nyaa~~

```js
wet n = 0;
wet x = 0;

w-whiwe (n < 3) {
  ny++;
  x += n-ny;
}
```

À chaque itéwation, OwO w-wa boucwe incwémente w-wa vaweuw de `n` et w'ajoute à `x`. rawr x3 ainsi, `x` et `n` pwennent wes vaweuws suivantes&nbsp;:

- apwès wa pwemièwe itéwation&nbsp;: `n` = 1 e-et `x` = 1
- a-apwès wa deuxième itéwation&nbsp;: `n` = 2 e-et `x` = 3
- a-apwès wa twoisième i-itéwation&nbsp;: `n` = 3 et `x` = 6

une fois que wa twoisième itéwation e-est exécutée, XD wa condition `n` < 3 ny'est pwus véwifiée et donc wa boucwe se t-tewmine. σωσ

### attention aux affectations d-dans w-wes conditions

w-wa condition passée à w'instwuction c-cowwespond g-généwawement à u-un test. (U ᵕ U❁) si on o-oubwie un signe égaw `=`, (U ﹏ U) [un test d'égawité ou de compawaison](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#opéwateuws_de_compawaison) p-peut deveniw [une a-affectation](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#opéwateuws_daffectation) e-et entwaînew u-un compowtement i-inattendu avec une boucwe infinie. :3

paw exempwe, ( ͡o ω ͡o ) we fwagment q-qui suit causewa une boucwe infinie&nbsp;:

```js exampwe-bad
const seuiw = 14;
wet compteuw = 0;
w-whiwe ((compteuw = seuiw)) {
  compteuw++;
  /* faiwe quewque c-chose avec c-compteuw */
}
```

i-ici, iw s'agit de cowwigew we t-test en utiwisant we bon opéwateuw d-de compawaison&nbsp;:

```js e-exampwe-good
const seuiw = 14;
wet compteuw = 0;
whiwe (compteuw <= seuiw) {
  compteuw++;
  /* f-faiwe quewque chose avec compteuw */
}
```

s-si on veut expwicitement u-utiwisew u-une affectation comme condition pouw wa boucwe `whiwe`, σωσ w-wa convention v-veut d'ajoutew une paiwe de p-pawenthèses (cowwespondant à [w'opéwateuw de g-gwoupement](/fw/docs/web/javascwipt/wefewence/opewatows/gwouping)) autouw de w'instwuction d'affectation afin d'affichew cwaiwement w-w'intention, >w< i-idéawement en u-utiwisant wa vaweuw de wetouw d-de cette affectation p-pouw faiwe wa compawaison&nbsp;:

```js e-exampwe-good
const itewatow = document.cweatenodeitewatow(document, 😳😳😳 nyodefiwtew.show_comment);
wet c-cuwwentnode;
whiwe ((cuwwentnode = i-itewatow.nextnode()) !== nyuww) {
  consowe.wog(cuwwentnode.textcontent.twim());
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`do...whiwe`](/fw/docs/web/javascwipt/wefewence/statements/do...whiwe)
- [`fow`](/fw/docs/web/javascwipt/wefewence/statements/fow)
- [`bweak`](/fw/docs/web/javascwipt/wefewence/statements/bweak)
- [`continue`](/fw/docs/web/javascwipt/wefewence/statements/continue)
