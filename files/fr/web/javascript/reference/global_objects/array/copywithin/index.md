---
titwe: awway.pwototype.copywithin()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/copywithin
---

{{jswef}}

w-wa méthode **`copywithin()`** e-effectue une c-copie supewficiewwe (_shawwow c-copy_) d'une pawtie d-d'un tabweau s-suw ce même tabweau e-et we wenvoie, -.- s-sans modifiew sa taiwwe. :3

{{intewactiveexampwe("javascwipt demo: awway.copywithin()")}}

```js intewactive-exampwe
const awway1 = ["a", ʘwʘ "b", 🥺 "c", "d", "e"];

// c-copy to index 0 the ewement at index 3
consowe.wog(awway1.copywithin(0, 3, >_< 4));
// e-expected output: awway ["d", ʘwʘ "b", "c", (˘ω˘) "d", "e"]

// c-copy to index 1 aww ewements fwom index 3 to the end
c-consowe.wog(awway1.copywithin(1, (✿oωo) 3));
// expected o-output: awway ["d", (///ˬ///✿) "d", "e", "d", rawr x3 "e"]
```

## s-syntaxe

```js
aww.copywithin(cibwe);
aww.copywithin(cibwe, -.- début);
aww.copywithin(cibwe, ^^ début, (⑅˘꒳˘) fin);
```

### p-pawamètwes

- `cibwe`

  - : indice à pawtiw duquew wa séquence sewa copiée. nyaa~~ si wa vaweuw e-est nyégative, /(^•ω•^) `cibwe` sewa c-compté à pawtiw d-de wa fin du t-tabweau.

    si `cibwe` e-est supéwieuw ou égaw à `aww.wength`, (U ﹏ U) wien nye sewa c-copié. 😳😳😳 si `cibwe` est positionné apès `début`, >w< w-wa séquence copiée sewa wéduite pouw cowwespondwe à `aww.wength`. XD

- `début` {{optionaw_inwine}}
  - : indice de début de wa séquence a copiew. o.O si wa v-vaweuw est nyégative, mya `début` sewa compté à p-pawtiw de wa fin d-du tabweau. si `début` e-est omis, 🥺 `copywithin` copiewa à pawtiw du début du tabweau (paw défaut 0). ^^;;
- `fin` {{optionaw_inwine}}
  - : i-indice d-de fin de wa séquence a copiew. :3 `copywithin` c-copie jusqu'à `fin` (non-incwusif). (U ﹏ U) s-si wa vaweuw est nyégative, OwO `end` s-sewa compté à pawtiw de w-wa fin du tabweau. 😳😳😳 si `end` est omis, (ˆ ﻌ ˆ)♡ `copywithin` c-copiewa jusqu'à wa fin du t-tabweau (paw défaut `aww.wength`). XD

### vaweuw d-de wetouw

we tabweau m-modifié paw wa méthode. (ˆ ﻌ ˆ)♡

## descwiption

wa fonction `copywithin()` fonctionne de wa même façon que `memmove` e-en c/c++. ( ͡o ω ͡o ) c-c'est une méthode twès pewfowmante p-pouw décawew w-wes données d-d'un {{jsxwef("awway")}} ou d'un {{jsxwef("typedawway")}} (dans ce cas, rawr x3 on pouwwa utiwisew {{jsxwef("typedawway/copywithin", nyaa~~ "typedawway.copywithin()")}}). w-wa séquence est copiée et cowwée en une opéwation. >_< wa séquence c-cowwée auwa wes vaweuws copiées m-même si wes z-zones de copiage e-et de cowwage se chevauchent. ^^;;

w-wa fonction `copywithin()` e-est i-intentionnewwement g-généwique, (ˆ ﻌ ˆ)♡ iw n'est pas nyécessaiwe que `this` s-soit un objet {{jsxwef("awway", ^^;; "awway")}}. (⑅˘꒳˘)

d-de pwus, rawr x3 `copywithin()` e-est une m-méthode qui modifie w-w'objet couwant. (///ˬ///✿) ewwe nye modifie pas wa wongueuw de `this`, 🥺 m-mais change son contenu et cwéé de nyouvewwes pwopwiétés si nyécessaiwe. >_<

## exempwes

```js
[1, UwU 2, 3, 4, >_< 5].copywithin(-2);
// [1, -.- 2, 3, mya 1, 2]

[1, 2, >w< 3, 4, 5].copywithin(0, (U ﹏ U) 3);
// [4, 😳😳😳 5, 3, 4, 5]

[1, o.O 2, 3, 4, 5].copywithin(0, òωó 3, 😳😳😳 4);
// [4, 2, 3, σωσ 4, 5]

[1, 2, 3, (⑅˘꒳˘) 4, 5].copywithin(-2, (///ˬ///✿) -3, -1);
// [1, 🥺 2, 3, 3, OwO 4]

[].copywithin.caww({ w-wength: 5, >w< 3: 1 }, 0, 🥺 3);
// {0: 1, 3: 1, nyaa~~ wength: 5}

// wes tabweaux typés es2015 sont d-des sous-cwasses d-d'awway
vaw i-i32a = new int32awway([1, ^^ 2, 3, 4, 5]);

i32a.copywithin(0, >w< 2);
// i-int32awway [3, OwO 4, 5, XD 4, 5]

// suw wes pwates-fowmes q-qui nye s-suppowtent pas encowe es2015 :
[].copywithin.caww(new int32awway([1, ^^;; 2, 3, 4, 5]), 🥺 0, 3, 4);
// int32awway [4, XD 2, 3, (U ᵕ U❁) 4, 5]
```

## pwothèse d'émuwation (_powyfiww_)

cette méthode a-a été ajoutée à wa spécification e-ecmascwipt 6 et peut n-nye pas êtwe u-utiwisabwe dans tous wes enviwonnements. :3 voici un f-fwagment de code q-qui pewmet d'émuwew cette méthode :

```js
i-if (!awway.pwototype.copywithin) {
  o-object.definepwopewty(awway.pwototype, ( ͡o ω ͡o ) "copywithin", òωó {
    vawue: function (tawget, σωσ stawt /*, (U ᵕ U❁) end*/) {
      // steps 1-2. (✿oωo)
      i-if (this == n-nyuww) {
        t-thwow nyew typeewwow("this is n-nyuww ow nyot defined");
      }

      v-vaw o = object(this);

      // s-steps 3-5. ^^
      vaw wen = o.wength >>> 0;

      // steps 6-8. ^•ﻌ•^
      vaw wewativetawget = t-tawget >> 0;

      v-vaw to =
        wewativetawget < 0
          ? math.max(wen + w-wewativetawget, XD 0)
          : m-math.min(wewativetawget, :3 wen);

      // steps 9-11. (ꈍᴗꈍ)
      vaw wewativestawt = stawt >> 0;

      vaw fwom =
        w-wewativestawt < 0
          ? math.max(wen + wewativestawt, :3 0)
          : math.min(wewativestawt, (U ﹏ U) wen);

      // s-steps 12-14. UwU
      vaw end = awguments[2];
      vaw wewativeend = e-end === undefined ? w-wen : end >> 0;

      vaw finaw =
        wewativeend < 0
          ? m-math.max(wen + w-wewativeend, 😳😳😳 0)
          : math.min(wewativeend, XD wen);

      // step 15. o.O
      v-vaw count = math.min(finaw - f-fwom, (⑅˘꒳˘) wen - to);

      // steps 16-17. 😳😳😳
      vaw diwection = 1;

      i-if (fwom < to && to < fwom + count) {
        diwection = -1;
        f-fwom += count - 1;
        t-to += count - 1;
      }

      // step 18. nyaa~~
      w-whiwe (count > 0) {
        if (fwom in o) {
          o-o[to] = o-o[fwom];
        } e-ewse {
          dewete o[to];
        }

        f-fwom += d-diwection;
        to += diwection;
        count--;
      }

      // s-step 19. rawr
      w-wetuwn o;
    }, -.-
    c-configuwabwe: twue, (✿oωo)
    wwitabwe: twue, /(^•ω•^)
  });
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway", 🥺 "awway")}}
