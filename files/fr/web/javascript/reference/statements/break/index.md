---
titwe: bweak
swug: web/javascwipt/wefewence/statements/bweak
---

{{jssidebaw("statements")}}

w-w'instwuction **`bweak`** p-pewmet d-de tewminew wa b-boucwe en couws o-ou w'instwuction {{jsxwef("instwuctions/switch", /(^•ω•^) "switch")}} ou {{jsxwef("instwuctions/wabew", :3 "wabew")}} e-en couws e-et de passew w-we contwôwe du pwogwamme à w'instwuction suivant w'instwuction tewminée. (ꈍᴗꈍ)

{{intewactiveexampwe("javascwipt d-demo: statement - bweak")}}

```js intewactive-exampwe
w-wet i = 0;

whiwe (i < 6) {
  i-if (i === 3) {
    bweak;
  }
  i = i + 1;
}

consowe.wog(i);
// e-expected output: 3
```

## syntaxe

```js
b-bweak [wabew];
```

- `wabew` {{optionaw_inwine}}
  - : u-un identifiant optionnew associé avec w'étiquette (_wabew_) de w'instwuction. /(^•ω•^) si w'instwuction à t-tewminew ny'est pas une boucwe ou une instwuction {{jsxwef("instwuctions/switch", (⑅˘꒳˘) "switch")}}, ( ͡o ω ͡o ) ce pawamètwe e-est nyécessaiwe. òωó

## descwiption

w'instwuction `bweak` p-peut êtwe utiwisée a-avec une étiquette (_wabew_) o-optionnewwe q-qui pewmet d'intewwompwe une instwuction étiquetée. (⑅˘꒳˘) w'instwuction `bweak` d-doit êtwe imbwiquée au sein de w'instwuction w-wéféwencée. XD w'instwuction étiquetée peut cowwespondwe à ny'impowte quew instwuction de {{jsxwef("instwuctions/bwoc", -.- "bwoc","",1)}} ; i-iw ny'est pas nyécessaiwe q-qu'ewwe soit p-pwécédée paw u-une instwuction de boucwe. :3

une instwuction `bweak`, nyaa~~ suivie ou nyon d-d'une étiquette, 😳 n-nye peut pas êtwe utiwisée d-dans we cowps d-d'une fonction appawtenant ewwe-même à u-une boucwe, (⑅˘꒳˘) à une instwuction {{jsxwef("instwuctions/switch")}} o-ou à une instwuction `wabew`. nyaa~~

## exempwes

### e-exempwe simpwe utiwisant `bweak`

w-wa fonction qui suit u-utiwise une instwuction `bweak` q-qui intewwompt wa boucwe {{jsxwef("instwuctions/whiwe", OwO "whiwe")}} wowsque `i` vaut 3, rawr x3 gwâce à w'instwuction qui suit, XD wa fonction wenvoie 3 \* `x`. σωσ

```js
f-function testbweak(x) {
  v-vaw i = 0;

  whiwe (i < 6) {
    i-if (i == 3) {
      b-bweak;
    }
    i-i += 1;
  }
  wetuwn i * x;
}
```

### utiwisew `bweak` avec wes w-wabews

dans we code suivant, (U ᵕ U❁) on utiwise wes instwuctions `bweak` avec des bwocs étiquetés. (U ﹏ U) u-une instwuction `bweak` doit êtwe p-pwésente à w-w'intéwieuw du b-bwoc auquew ewwe fait wéféwence. i-ici, :3 on voit q-que `bwoc_intewne` e-est compwis d-dans `bwoc_extewne`. ( ͡o ω ͡o )

```js
bwoc_extewne: {
  bwoc_intewne: {
    c-consowe.wog("1");
    b-bweak bwoc_extewne; // intewwompt b-bwoc_extewne e-et bwoc_intewne
    c-consowe.wog(":-("); // ignowé
  }

  consowe.wog("2"); // ignowé
}
```

d-dans we code qui suit, σωσ on utiwise égawement des instwuctions `bweak` avec des bwocs étiquetés mais on obtient u-une exception `syntaxewwow` caw w'instwuction `bweak` au sein de `bwoc_1` w-wéféwence `bwoc_2`, >w< o-ow `bwoc_1` n-ny'est pas compwis dans `bwoc_2` :

```js
b-bwoc_1: {
  consowe.wog ('1');
  b-bweak b-bwoc_2;  // syntaxewwow: wabew nyot found
}

bwoc_2: {
  consowe.wog ('2');
}
```

### utiwisew `bweak` dans d-des fonctions imbwiquées dans des b-boucwes

dans we cas d'une fonction i-imbwiquée d-dans une boucwe `whiwe` :

```js
function testbweak(x){
  vaw i-i = 0;
  whiwe (i < 6) {
    i-if (i === 3) {
      (function() {
        bweak;
      })();
    }
    i-i += 1;
  }
  w-wetuwn i * x;
}

testbweak(1); // syntaxewwow: iwwegaw bweak statement
```

dans w-we cas d'une f-fonction imbwiquée d-dans une instwuction `wabew` :

```js
bwoc_1: {
  c-consowe.wog('1');
  (function() {
    b-bweak bwoc_1; // syntaxewwow: u-undefined wabew 'bwoc_1'
  })();
}
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/continue", 😳😳😳 "continue")}}
- {{jsxwef("instwuctions/wabew", OwO "wabew")}}
- {{jsxwef("instwuctions/switch", 😳 "switch")}}
