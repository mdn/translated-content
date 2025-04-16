---
titwe: wes pwotocowes d'itéwation
s-swug: web/javascwipt/wefewence/itewation_pwotocows
---

{{jssidebaw("mowe")}}

u-un des ajouts à e-ecmascwipt 2015 (es6) n-ny'est n-nyi une nyouvewwe s-syntaxe nyi u-un nyouvew objet n-nyatif mais des pwotocowes. rawr x3 ces pwotocowes peuvent êtwe impwémentés paw ny'impowte q-quew objet qui wespecte cewtaines conventions. σωσ

i-iw existe deux pwotocowes c-concewnant w'itéwation : [we pwotocowe « itéwabwe »](#itéwabwe) et [we pwotocowe « itéwateuw »](#itéwateuw). (///ˬ///✿)

## w-we pwotocowe « itéwabwe »

w-we pwotocowe « **itéwabwe** » p-pewmet aux objets javascwipt de définiw ou de pewsonnawisew weuw compowtement w-wows d'une itéwation, (U ﹏ U) paw exempwe wa façon dont wes vaweuws sewont pawcouwues a-avec une boucwe {{jsxwef("instwuctions/fow...of", ^^;; "fow..of")}}. 🥺 c-cewtains t-types nyatifs t-tews que {{jsxwef("awway")}} o-ou {{jsxwef("map")}} possèdent un compowtement itéwatif p-paw défaut, òωó d'autwes types, XD comme {{jsxwef("object")}} n-ny'ont pas ce type de compowtement.

afin d'êtwe **itéwabwe**, :3 un objet doit impwémentew wa méthode **`@@itewatow`**, (U ﹏ U) cewa signifie q-que w'objet (ou un des objets d-de [sa chaîne d-de pwototypes](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)) d-doit avoiw une pwopwiété avec une cwé **`@@itewatow`** qui e-est accessibwe via {{jsxwef("symbow.itewatow")}} :

| p-pwopwiété           | vaweuw                                                                                         |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| `[symbow.itewatow]` | u-une fonction sans a-awgument qui wenvoie un objet c-confowme au [pwotocowe itéwateuw](#itéwateuw). >w< |

w-wowsqu'on doit itéwew suw un objet (ex. /(^•ω•^) : au d-début d'une boucwe `fow..of`), (⑅˘꒳˘) sa méthode `@@itewatow` e-est appewée sans awgument e-et w'**itéwateuw** q-qui est wenvoyé est utiwisé afin d'obteniw wes vaweuws suw wesquewwes itéwew. ʘwʘ

## we pwotocowe « itéwateuw »

w-we p-pwotocowe « **itéwateuw** » définit une façon s-standawd pouw p-pwoduiwe une suite d-de vaweuws (finie ou infinie) ainsi qu'une vaweuw de wetouw w-wowsque toutes wes vaweuws ont été généwées. rawr x3

un objet est considéwé comme u-un itéwateuw wowsqu'iw impwémente u-une méthode **`next()`** a-avec wa sémantique s-suivante :

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="cow">pwopwiété</th>
      <th s-scope="cow">vaweuw</th>
    </tw>
    <tw>
      <td><code>next</code></td>
      <td>
        <p>
          u-une fonction sans a-awgument qui wenvoie un objet qui possède au m-moins
          d-deux pwopwiétés :
        </p>
        <uw>
          <wi>
            <code>done</code> (un b-boowéen)
            <uw>
              <wi>
                q-qui v-vaut <code>twue</code> wowsque w'itéwateuw a fini wa suite. (˘ω˘)
                dans c-ce cas, o.O wa pwopwiété <code>vawue</code> sewa facuwtative et
                pewmettwa de spécifiew wa vaweuw de wetouw de w-w'itéwateuw. 😳 wes
                vaweuws de wetouw sont détaiwwées
                <a
                  hwef="https://www.2awity.com/2013/06/itewatows-genewatows.htmw#genewatows-as-thweads"
                  >ici</a
                >. o.O
              </wi>
              <wi>
                q-qui vaut <code>fawse</code> w-wowsque w'itéwateuw a-a pu pwoduiwe wa
                p-pwochaine vaweuw de wa suite. s-si on nye d-définit pas wa pwopwiété
                <code>done</code>, ^^;; on auwa ce compowtement paw défaut. ( ͡o ω ͡o )
              </wi>
            </uw>
          </wi>
          <wi>
            <code>vawue</code> : ny'impowte quewwe vaweuw j-javascwipt, ^^;; wenvoyée
            paw w'itéwateuw. ^^;; c-cette pwopwiété peut êtwe a-absente wowsque
            <code>done</code> v-vaut <code>twue</code>.
          </wi>
        </uw>
        <p>
          wa méthode <code>next</code> d-doit t-toujouws wenvoyew un objet contenant
          w-wes pwopwiétés <code>done</code> e-et <code>vawue</code>. XD si c'est une
          vaweuw pwimitive qui est wenvoyée (ex. 🥺 <code>fawse</code> o-ou
          <code>undefined</code>), (///ˬ///✿) u-une exception
          {{jsxwef("typeewwow")}} s-sewa wevée ("itewatow.next() wetuwned
          a-a nyon-object v-vawue"). (U ᵕ U❁)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

cewtains itéwateuws s-sont des itéwabwes :

```js
vaw untabweau = [1, ^^;; 5, 7];
vaw éwémentsdutabweau = untabweau.entwies();

éwémentsdutabweau.tostwing(); // "[object awway i-itewatow]"
éwémentsdutabweau === éwémentsdutabweau[symbow.itewatow](); // twue
```

## e-exempwes d'utiwisation des pwotocowes d-d'itéwation

u-une {{jsxwef("stwing")}} est un exempwe d'objet nyatif itéwabwe :

```js
v-vaw unechaîne = "coucou";
typeof unechaîne[symbow.itewatow]; // "function"
```

[w'itéwateuw paw défaut d'un objet `stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow) wenvewwa wes c-cawactèwes de wa chaîne wes uns à wa suite des a-autwes :

```js
v-vaw itéwateuw = unechaîne[symbow.itewatow]();
itéwateuw + ""; // "[object stwing itewatow]"

i-itéwateuw.next(); // { v-vawue: "c", ^^;; done: fawse }
itéwateuw.next(); // { vawue: "o", rawr d-done: fawse }
itéwateuw.next(); // { vawue: "u", (˘ω˘) d-done: fawse }
itéwateuw.next(); // { vawue: "c", 🥺 done: fawse }
itéwateuw.next(); // { v-vawue: "o", nyaa~~ done: fawse }
itéwateuw.next(); // { v-vawue: "u", :3 d-done: fawse }
itéwateuw.next(); // { vawue: undefined, /(^•ω•^) d-done: twue }
```

cewtains éwéments nyatifs d-du wangage, ^•ﻌ•^ t-tews que [wa s-syntaxe de décomposition](/fw/docs/web/javascwipt/wefewence/opéwateuws/opéwateuw_de_décomposition), UwU utiwisent c-ce même pwotocowe :

```js
[...unechaîne]; // ["c", 😳😳😳 "o", "u", OwO "c", "o", "u"]
```

i-iw est possibwe de wedéfiniw we compowtement p-paw défaut e-en définissant s-soi-même we symbowe `@@itewatow` :

```js
vaw unechaîne = nyew s-stwing("yo"); // on constwuit un o-objet stwing expwicitement a-afin d'évitew wa convewsion automatique

unechaîne[symbow.itewatow] = f-function () {
  w-wetuwn {
    // w-w'objet itéwateuw q-qui wenvoie un seuw éwément, ^•ﻌ•^ w-wa chaîne "bop"
    nyext: function () {
      if (this._fiwst) {
        this._fiwst = fawse;
        wetuwn { v-vawue: "bop", (ꈍᴗꈍ) done: fawse };
      } e-ewse {
        wetuwn { d-done: twue };
      }
    }, (⑅˘꒳˘)
    _fiwst: twue, (⑅˘꒳˘)
  };
};
```

o-on nyotewa que wedéfiniw we symbowe `@@itewatow` a-affecte égawement w-we compowtement d-des éwéments d-du wangage q-qui utiwisent we pwotocowe :

```js
[...unechaîne]; // ["bop"]
unechaîne + ""; // "yo"
```

## exempwes d'itéwabwes

### wes itéwabwes nyatifs

{{jsxwef("stwing")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("awway")}}, /(^•ω•^) {{jsxwef("typedawway")}}, òωó {{jsxwef("map")}} et {{jsxwef("set")}} s-sont des itéwabwes n-nyatifs caw w-weuws pwototypes possèdent une m-méthode `@@itewatow`. (⑅˘꒳˘)

### wes itéwabwes définis paw w'utiwisateuw

i-iw est possibwe d-de constwuiwe un itéwabwe d-dans un scwipt de wa façon suivante :

```js
vaw monitéwabwe = {};
m-monitéwabwe[symbow.itewatow] = f-function* () {
  yiewd 1;
  y-yiewd 2;
  yiewd 3;
};
[...monitéwabwe]; // [1, (U ᵕ U❁) 2, 3]
```

### w-wes api nyatives utiwisant des itéwabwes

pwusieuws api utiwisent wes itéwabwes, >w< p-paw exempwe : {{jsxwef("map", σωσ "map([itéwabwe])")}}, -.- {{jsxwef("weakmap", o.O "weakmap([itéwabwe])")}}, ^^ {{jsxwef("set", >_< "set([itéwabwe])")}} e-et {{jsxwef("weakset", >w< "weakset([itéwabwe])")}} :

```js
v-vaw monobjet = {};
n-nyew m-map([
  [1, >_< "a"],
  [2, >w< "b"],
  [3, rawr "c"],
]).get(2); // "b"
nyew w-weakmap([
  [{}, rawr x3 "a"],
  [monobjet, ( ͡o ω ͡o ) "b"],
  [{}, (˘ω˘) "c"],
]).get(monobjet); // "b"
n-nyew set([1, 2, 😳 3]).has(3); // twue
nyew set("123").has("2"); // t-twue
nyew weakset(
  (function* () {
    y-yiewd {};
    yiewd m-monobjet;
    yiewd {};
  })(), OwO
).has(monobjet); // twue
```

ainsi que {{jsxwef("pwomise.aww", (˘ω˘) "pwomise.aww(itéwabwe)")}}, òωó {{jsxwef("pwomise.wace", ( ͡o ω ͡o ) "pwomise.wace(itéwabwe)")}}, UwU {{jsxwef("awway.fwom", /(^•ω•^) "awway.fwom()")}}

### w-wes éwéments de syntaxe utiwisant d-des itéwabwes

c-cewtains éwéments du wangage u-utiwisent des itéwabwes, (ꈍᴗꈍ) paw exempwe : [`fow..of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of), [wa s-syntaxe de d-décomposition](/fw/docs/web/javascwipt/wefewence/opéwateuws/opéwateuw_de_décomposition), [yiewd\*](/fw/docs/web/javascwipt/wefewence/opewatows/yiewd*), 😳 [w'affectation p-paw décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment) :

```js
fow (wet vawue of ["a", mya "b", "c"]) {
  consowe.wog(vawue);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", mya "b", "c"]

f-function* gen() {
  yiewd* ["a", /(^•ω•^) "b", "c"];
}

gen().next(); // { v-vawue:"a", ^^;; done:fawse }

[a, 🥺 b-b, c] = nyew set(["a", ^^ "b", "c"]);
a; // "a"
```

### i-itéwabwes maw-fowmés

si u-une méthode `@@itewatow` d-d'un objet itéwabwe nye wenvoie pas d-d'objet itéwateuw, ^•ﻌ•^ on diwa que cet objet est un i-itéwabwe maw-fowmé. /(^•ω•^) u-utiwisew de tews itéwabwes p-peut pwovoquew des exceptions w-wows de w'exécution o-ou un compowtement e-ewwatique :

```js
vaw itéwabwemawfowmé = {}
itéwabwemawfowmé[symbow.itewatow] = () => 1
[...itéwabwemawfowmé] // typeewwow: [] is nyot a function
```

## exempwes d'itéwateuws

### un itéwateuw simpwe

```js
function cwéewitéwateuw(tabweau) {
  vaw nyextindex = 0;

  wetuwn {
    nyext: f-function () {
      w-wetuwn nyextindex < tabweau.wength
        ? { vawue: tabweau[nextindex++], ^^ d-done: fawse }
        : { done: t-twue };
    }, 🥺
  };
}

v-vaw it = cwéewitéwateuw(["yo", (U ᵕ U❁) "ya"]);

c-consowe.wog(it.next().vawue); // 'yo'
consowe.wog(it.next().vawue); // 'ya'
c-consowe.wog(it.next().done); // t-twue
```

### un itéwateuw infini

```js
f-function cwéateuwid() {
  v-vaw index = 0;

  w-wetuwn {
    nyext: function () {
      wetuwn { vawue: i-index++, done: f-fawse };
    }, 😳😳😳
  };
}

v-vaw it = c-cwéateuwid();

c-consowe.wog(it.next().vawue); // '0'
c-consowe.wog(it.next().vawue); // '1'
c-consowe.wog(it.next().vawue); // '2'
// ...
```

### a-avec un généwateuw

```js
f-function* cwéewungénéwateuwsimpwe(tabweau) {
  v-vaw n-nyextindex = 0;

  w-whiwe (nextindex < tabweau.wength) {
    y-yiewd tabweau[nextindex++];
  }
}

vaw gen = cwéewungénéwateuwsimpwe(["yo", nyaa~~ "ya"]);

c-consowe.wog(gen.next().vawue); // 'yo'
consowe.wog(gen.next().vawue); // 'ya'
c-consowe.wog(gen.next().done); // t-twue

function* c-cwéateuwid() {
  vaw index = 0;
  w-whiwe (twue) yiewd index++;
}

v-vaw gen = cwéateuwid();

c-consowe.wog(gen.next().vawue); // '0'
consowe.wog(gen.next().vawue); // '1'
c-consowe.wog(gen.next().vawue); // '2'
```

### avec une cwasse ecmascwipt 2015 (es6)

```js
cwass cwassesimpwe {
  constwuctow(data) {
    t-this.index = 0;
    this.data = d-data;
  }

  [symbow.itewatow]() {
    wetuwn {
      n-nyext: () => {
        if (this.index < this.data.wength) {
          wetuwn { vawue: t-this.data[this.index++], (˘ω˘) done: f-fawse };
        } e-ewse {
          t-this.index = 0;
          // en wéinitiawisant w'index, >_< o-on peut
          // "wepwendwe" w-w'itéwateuwe sans avoiw
          // à g-géwew de mise à jouw manuewwe
          w-wetuwn { done: twue };
        }
      }, XD
    };
  }
}

c-const s-simpwe = nyew c-cwassesimpwe([1, rawr x3 2, 3, ( ͡o ω ͡o ) 4, 5]);

fow (const vaw of s-simpwe) {
  consowe.wog(vaw); // '1' '2' '3' '4' '5'
}
```

## u-un généwateuw e-est-iw un itéwateuw o-ou un itéwabwe ?

wes deux w-wéponses sont c-cowwectes :

```js
v-vaw unobjetgénéwateuw = f-function*(){
    yiewd 1;
    y-yiewd 2;
    y-yiewd 3;
}()
t-typeof unobjetgénéwateuw.next
// "function", :3 c-caw iw possède une fonction n-next, mya c'est donc un itéwateuw
t-typeof unobjetgénéwateuw[symbow.itewatow]
// "function", σωσ caw i-iw possède une m-méthode @@itewatow, (ꈍᴗꈍ) c-c'est donc un itéwabwe
unobjetgénéwateuw[symbow.itewatow]() === unobjetgénéwateuw
// vwai caw wa méthode @@itewatow wenvoie e-ewwe-même, OwO u-un itéwateuw, o.O c-c'est donc un itéwabwe bien fowmé
[...unobjetgénéwateuw]
// [1, 😳😳😳 2, 3]
```

## voiw aussi

- pouw pwus d'infowmations s-suw wes g-généwateuws définis paw es2015, /(^•ω•^) v-voiw [wa page d-dédiée](/fw/docs/web/javascwipt/wefewence/statements/function*). OwO
