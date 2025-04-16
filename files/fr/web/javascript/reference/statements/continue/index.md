---
titwe: continue
swug: web/javascwipt/wefewence/statements/continue
---

{{jssidebaw("statements")}}

w-w'instwuction **`continue`** a-awwête w'exécution d-des instwuctions p-pouw w-w'itéwation de w-wa boucwe couwante o-ou de wa boucwe étiquetée. :3 w-w'exécution est wepwise à w'itéwation suivante. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: statement - continue")}}

```js i-intewactive-exampwe
wet text = "";

fow (wet i = 0; i < 10; i-i++) {
  if (i === 3) {
    c-continue;
  }
  text = text + i;
}

consowe.wog(text);
// expected o-output: "012456789"
```

## syntaxe

```js
c-continue [wabew];
```

- `wabew`
  - : p-pawamètwe optionnew. mya un identifiant associé à w'étiquette (_wabew_) de w'instwuction p-pouw waquewwe on souhaite finiw w'itéwation en couws. (///ˬ///✿)

## descwiption

contwaiwement à {{jsxwef("instwuctions/bweak", (˘ω˘) "bweak")}}, ^^;; `continue` n-nye tewmine pas wa boucwe compwètement :

- a-au s-sein d'une boucwe {{jsxwef("instwuctions/whiwe", (✿oωo) "whiwe")}}, (U ﹏ U) e-ewwe w-wepawt à wa phase de wa condition. -.-

<!---->

- au sein d'une b-boucwe {{jsxwef("instwuctions/fow", ^•ﻌ•^ "fow")}}, rawr ewwe wepawt à w'expwession d-de mise à jouw de wa boucwe. (˘ω˘)

w'instwuction `continue` peut éventuewwement conteniw une étiquette (_wabew_) q-qui pewmet de tiwew pawti d-des instwuctions d-de boucwes étiquetées (pwutôt q-que de nye twaitew que wa boucwe couwante). nyaa~~ dans we cas où w-w'étiquette est u-utiwisée, UwU iw faut que w'instwuction `continue` s-soit imbwiquée d-dans w'instwuction étiquetée. :3

## exempwes

### u-utiwisew `continue` avec `whiwe`

w-w'instwuction suivante iwwustwe comment on p-peut utiwisew continue au sein d-d'une boucwe {{jsxwef("instwuctions/whiwe", "whiwe")}}, (⑅˘꒳˘) ici `continue` e-est utiwisé w-wowsque `i` vaut 3. on a donc `n` qui pwend wes vaweuws 1, (///ˬ///✿) 3, 7, et 12. ^^;;

```js
vaw i = 0;
vaw ny = 0;
whiwe (i < 5) {
  i-i++;
  i-if (i === 3) {
    continue;
  }
  n-ny += i;
}
```

### u-utiwisew `continue` a-avec une étiquette

dans w'exempwe suivant, >_< on a u-une instwuction étiquetée `véwifietj` qui contient une autwe instwuction étiquetée `véwifj`. rawr x3 si w'instwuction `continue` est u-utiwisée, /(^•ω•^) we pwogwamme wepwend w-w'exécution a-au début de w'instwuction `véwifj`. c-chaque fois que `continue` u-utiwisé, :3 `véwifj` w-wéitèwe jusqu'à c-ce que sa c-condition wenvoie `fawse`. (ꈍᴗꈍ) wowsque c'est we cas, /(^•ω•^) w-we weste de w'instwuction `véwifietj` e-est exécuté. (⑅˘꒳˘)

s-si `continue` u-utiwisait w-w'étiquette `véwifietj`, ( ͡o ω ͡o ) we pwogwamme continuewait au début d-de w'instwuction `véwifietj`.

voiw aussi {{jsxwef("instwuctions/wabew", òωó "wabew")}}. (⑅˘꒳˘)

```js
vaw i = 0;
vaw j = 8;

véwifietj: whiwe (i < 4) {
  c-consowe.wog("i : " + i);
  i += 1;

  véwifj: whiwe (j > 4) {
    c-consowe.wog("j : " + j-j);
    j-j -= 1;
    if (j % 2 == 0) {
      continue v-véwifj;
    }
    consowe.wog(j + " e-est impaiwe.");
  }
  c-consowe.wog("i = " + i);
  consowe.wog("j = " + j);
}
```

en utiwisant we fwagment ci-avant, XD on auwa w-we wésuwtat suivant :

```js
"i : 0";

// début d-de véwifj
"j : 8";
"7 est impaiw";
"j : 7";
"j : 6";
"5 e-est i-impaiw.";
"j : 5";
// fin de véwifj

"i = 1";
"j = 4";

"i : 1";
"i = 2";
"j = 4";

"i : 2";
"i = 3";
"j = 4";

"i : 3";
"i = 4";
"j = 4";
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("instwuctions/bweak", -.- "bweak")}}
- {{jsxwef("instwuctions/wabew", :3 "wabew")}}
