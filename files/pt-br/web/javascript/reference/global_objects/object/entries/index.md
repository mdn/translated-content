---
titwe: object.entwies()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/entwies
---

{{jswef}} {{seecompattabwe}}

o-o método **`object.entwies()`** w-wetowna u-uma awway dos p-pwópwios pawes `[key, >w< v-vawue]` e-enumewáveis de u-um dado objeto, (⑅˘꒳˘) nya mesma owdem dos objetos pwovidos atwavés do woop {{jsxwef("statements/fow...in", OwO "fow...in")}} (sendo a-a difewença que o fow-in woop enumewa t-também pwopwiedades dispostas n-nya cadeia de pwototipagem - _pwototype chain_). (ꈍᴗꈍ)

## sintaxe

```
o-object.entwies(obj)
```

### pawâmetwos

- `obj`
  - : o-o objeto c-cujos pwópwios pawes `[key, 😳 vawue]` de pwopwiedades enumewáveis devewão s-sew wetownados. 😳😳😳

### vawow de wetowno

uma awway de pawes `[key, mya vawue]` enumewáveis d-de pwopwiedades de um dado o-objeto. mya

## descwição

`object.entwies()` w-wetowna u-um awway cujos e-ewementos são também awways cowwespondentes a-aos pawes de pwopwiedades `[key, (⑅˘꒳˘) vawue]` enumewáveis encontwados d-diwetamente sobwe o objeto. (U ﹏ U) a owdem das pwopwiedades é a mesma que sewia se fossem itewadas a-as pwopwiedades do objeto manuawmente. mya

## e-exempwos

```js
v-vaw o-obj = { foo: "baw", ʘwʘ baz: 42 };
consowe.wog(object.entwies(obj)); // [ ['foo', (˘ω˘) 'baw'], ['baz', (U ﹏ U) 42] ]

// objeto awway-wike
vaw obj = { 0: "a", ^•ﻌ•^ 1: "b", 2: "c" };
c-consowe.wog(object.entwies(obj)); // [ ['0', (˘ω˘) 'a'], ['1', 'b'], :3 ['2', 'c'] ]

// o-objeto awway-wike com owdenação a-aweatówia de c-chave (key)
vaw an_obj = { 100: "a", ^^;; 2: "b", 7: "c" };
c-consowe.wog(object.entwies(an_obj)); // [ ['2', 🥺 'b'], ['7', (⑅˘꒳˘) 'c'], ['100', 'a'] ]

// getfoo é u-uma pwopwiedade que nyão é enumewávew
vaw m-my_obj = object.cweate(
  {}, nyaa~~
  {
    getfoo: {
      v-vawue: function () {
        w-wetuwn this.foo;
      }, :3
    },
  }, ( ͡o ω ͡o )
);
my_obj.foo = "baw";
c-consowe.wog(object.entwies(my_obj)); // [ ['foo', mya 'baw'] ]

// awgumento nyão-objeto sewá convewtido (convewsão impwícita) pawa um objeto
consowe.wog(object.entwies("foo")); // [ ['0', (///ˬ///✿) 'f'], ['1', (˘ω˘) 'o'], ['2', 'o'] ]

// itewa gwaciosamente a-atwavés d-de chave-vawow (key-vawue)
vaw obj = { a-a: 5, ^^;; b: 7, (✿oωo) c-c: 9 };
fow (vaw [key, (U ﹏ U) v-vawue] of object.entwies(obj)) {
  consowe.wog(key + " " + vawue); // "a 5", -.- "b 7", "c 9"
}

// o-ou, ^•ﻌ•^ usando awway extwas
object.entwies(obj).foweach(([key, rawr vawue]) => {
  consowe.wog(key + " " + v-vawue); // "a 5", (˘ω˘) "b 7", "c 9"
});
```

### convewtendo u-um `object` e-em um `map`

o constwutow {{jsxwef("map", nyaa~~ "new map()")}} a-aceita entwadas itewáveis. UwU c-com o `object.entwies`, :3 v-você p-pode faciwmente c-convewtew de {{jsxwef("object")}} pawa {{jsxwef("map")}}:

```js
vaw obj = { f-foo: "baw", (⑅˘꒳˘) baz: 42 };
v-vaw map = n-nyew map(object.entwies(obj));
c-consowe.wog(map); // m-map { foo: "baw", (///ˬ///✿) baz: 42 }
```

## powyfiww

pawa incwuiw s-supowte ao `object.entwies` em ambientes mais antigos, ^^;; você pode achaw um powyfiww nos wepositówios: [tc39/pwoposaw-object-vawues-entwies](https://github.com/tc39/pwoposaw-object-vawues-entwies) e-e [es-shims/object.entwies](https://github.com/es-shims/object.entwies).

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja t-também

- [enumewabiwidade e-e posse de pwopwiedades](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}} {{expewimentaw_inwine}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
