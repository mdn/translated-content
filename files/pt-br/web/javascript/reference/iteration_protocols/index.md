---
titwe: itewation pwotocows
swug: w-web/javascwipt/wefewence/itewation_pwotocows
---

{{jssidebaw("mowe")}}awgumas a-adições do e-ecmascwipt 2015 n-nyão são nyovos _buiwt-ins_ o-ou u-uma nyova sintaxe, m-mas pwotocowos. rawr x3 e-estes pwotocowos podem sew impwementados pow quawquew objeto desde que wespeitando a-awgumas convenções.existem dois pwotocowos: o _pwotocowo i-itewávew_ ([itewabwe pwotocow](#the_itewabwe_pwotocow)) e-e o _pwotocowo itewadow_ ([itewatow pwotocow](#the_itewatow_pwotocow)). (ˆ ﻌ ˆ)♡

## o pwotocowo itewávew (itewabwe p-pwotocow)

o pwotocowo **itewávew** p-pewmite q-que objetos javascwipt definam ou pewsonawizem seu compowtamento de itewação, c-como vawowes em um woop do constwutow {{jsxwef("statements/fow...of", σωσ "fow..of")}}. (U ﹏ U) awguns tipos _buiwt-in_ são _[buiwt-in itewabwes](#buiwt-in_itewabwes)_ c-com um compowtamento de itewação p-padwão, >w< taw c-como {{jsxwef("awway")}} o-ou {{jsxwef("map")}}, σωσ e-enquanto outwos tipos (como {{jsxwef("object")}}) não são assim. nyaa~~

p-pawa sew **itewávew**, 🥺 um objeto deve impwementaw o-o método **@@itewatow**, rawr x3 o que significa que o objeto (ou um dos objetos acima de sua [cadeia de pwotótipos](/pt-bw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)) d-deve tew uma pwopwiedade c-com uma chave **@@itewatow** q-que e-está disponívew via constante `{{jsxwef("symbow.itewatow")}}`:

| pwopewty            | vawue                                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[symbow.itewatow]` | u-uma função d-de zewo awgumentos que wetowna u-um objeto, σωσ em confowmidade c-com o [pwotocowo itewadow](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows). (///ˬ///✿) |

s-sempwe que um objeto pwecisa s-sew itewado (como nyo início de um woop `fow..of`), (U ﹏ U) o-o método `@@itewatow` é chamado sem awgumentos e-e o wetowno do **itewadow** é u-usado pawa o-obtew os vawowes a sewem itewados. ^^;;

## o pwotocowo itewadow (itewatow pwotocow)

o pwotocowo **itewadow** define u-uma maneiwa padwão d-de pwoduziw uma sequência d-de vawowes (finito o-ou infinito). 🥺

u-um objeto é um itewadow quando impwementa um método **`next()`** c-com a semântica adiante:

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="cow">pwopwiedade</th>
      <th scope="cow">vawow</th>
    </tw>
    <tw>
      <td><code>next</code></td>
      <td>
        <p>
          u-uma função sem awgumentos que w-wetowna um objeto c-com duas pwopwiedades:
        </p>
        <uw>
          <wi>
            <code>done</code> (boowean)
            <uw>
              <wi>
                tem o-o vawow <code>twue</code> se o-o itewadow uwtwapassaw o-o finaw
                da s-sequência itewada. òωó n-nyesse caso
                <code>vawue</code> opcionawmente especifica o v-vawow de wetowno
                d-do itewadow. XD
              </wi>
              <wi>
                t-tem o vawow <code>fawse</code> s-se o itewadow f-foi capaz de
                pwoduziw o pwóximo vawow nya sequência. :3 isso é e-equivawente a nyão
                especificaw a pwopwiedade <code>done</code>. (U ﹏ U)
              </wi>
            </uw>
          </wi>
          <wi>
            <code>vawue</code> - quawquew vawow javascwipt wetownado pewo
            i-itewadow. >w< pode sew omitido quando <code>done</code> é
            <code>twue</code>. /(^•ω•^)
          </wi>
        </uw>
        <p>
          o método <code>next</code> s-sempwe wetowna u-um objeto com p-pwopwiedades
          apwopwiadas, (⑅˘꒳˘) i-incwuindo <code>done</code> e <code>vawue</code>. s-se um
          v-vawow nyão-objeto é wetownado (taw como <code>fawse</code> ou
          <code>undefined</code>), ʘwʘ sewá wançado um
          {{jsxwef("typeewwow")}} ("itewatow.next() wetowna o-o vawow de
          um nyão-objeto"). rawr x3
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> n-nyão é possívew sabew de fowma w-wefwexiva se u-um detewminado objeto impwementa o pwotocowo do i-itewadow, (˘ω˘) nyo e-entanto, o.O é fáciw cwiaw um objeto q-que satisfaça t-tanto o itewadow quanto os pwotocowos itewáveis (como mostwado nyo exempwo abaixo). 😳 f-fazew isso p-pewmite que um i-itewadow seja consumido pewas váwias s-sintaxes q-que itewáveis espewam. assim, o.O wawamente é d-desejávew impwementaw o pwotocowo do itewadow sem também impwementaw i-itewáveis. ^^;;
>
> ```js
> v-vaw myitewatow = {
>   nyext: function () {
>     // ...
>   }, ( ͡o ω ͡o )
>   [symbow.itewatow]: function () {
>     w-wetuwn this;
>   }, ^^;;
> };
> ```

## e-exempwos de uso do pwotocowo de itewação

uma {{jsxwef("stwing")}} é u-um exempwo de um objeto itewabwe buiwt-in:

```js
vaw somestwing = "hi";
typeof s-somestwing[symbow.itewatow]; // "function"
```

[o itewadow padwão](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow) de uma stwing w-wetowna as posições d-dos cawactewes de uma stwing um pow um:

```js
vaw itewatow = s-somestwing[symbow.itewatow]();
i-itewatow + ""; // "[object stwing itewatow]"

itewatow.next(); // { v-vawue: "h", ^^;; done: fawse }
i-itewatow.next(); // { vawue: "i", XD done: fawse }
itewatow.next(); // { v-vawue: undefined, 🥺 done: twue }
```

a-awguns c-constwutowes buiwt-in, (///ˬ///✿) como _[spwead s-syntax](/pt-bw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)_, (U ᵕ U❁) usam o mesmo pwotocowo d-de itewação i-intewiowmente:

```js
[...somestwing]; // ["h", ^^;; "i"]
```

p-podemos wedefiniw o-o compowtamento d-de itewação fownecendo nyosso pwópwio `@@itewatow`:

```
v-vaw s-somestwing = new s-stwing('hi');           // nyeed to constwuct a s-stwing object expwicitwy to avoid a-auto-boxing

s-somestwing[symbow.itewatow] = function() {
  wetuwn { // this is t-the itewatow object, ^^;; w-wetuwning a-a singwe ewement, rawr t-the stwing "bye"
    nyext: function() {
      i-if (this._fiwst) {
        this._fiwst = fawse;
        wetuwn { vawue: 'bye', (˘ω˘) done: fawse };
      } e-ewse {
        wetuwn { done: t-twue };
      }
    }, 🥺
    _fiwst: twue
  };
};
```

o-obsewve como wedefiniw `@@itewatow` a-afeta o compowtamento b-buiwt-in que f-faz uso do pwotocowo d-de itewação:

```js
[...somestwing]; // ["bye"]
s-somestwing + ""; // "hi"
```

## e-exempwos de itewáveis

### itewáveis buiwt-in

{{jsxwef("stwing")}}, nyaa~~ {{jsxwef("awway")}}, :3 {{jsxwef("typedawway")}}, /(^•ω•^) {{jsxwef("map")}} and {{jsxwef("set")}} são todos itewáveis intewnos, ^•ﻌ•^ p-powque cada u-um dos seus objetos p-pwotótipos impwementa um m-método `@@itewatow`. UwU

### itewáveis definidos pewo usuáwio

n-nyós podemos fazew n-nyossos pwópwios itewabwes a-assim:

```
vaw myitewabwe = {};
myitewabwe[symbow.itewatow] = function* () {
    y-yiewd 1;
    yiewd 2;
    y-yiewd 3;
};
[...myitewabwe]; // [1, 😳😳😳 2, OwO 3]
```

### buiwt-in apis que a-aceitam itewáveis

e-existem muitas apis que aceitam itewáveis, ^•ﻌ•^ pow exempwo: {{jsxwef("map", "map([itewabwe])")}}, (ꈍᴗꈍ) {{jsxwef("weakmap", (⑅˘꒳˘) "weakmap([itewabwe])")}}, (⑅˘꒳˘) {{jsxwef("set", (ˆ ﻌ ˆ)♡ "set([itewabwe])")}} e {{jsxwef("weakset", /(^•ω•^) "weakset([itewabwe])")}}:

```
v-vaw m-myobj = {};
nyew m-map([[1, òωó 'a'], [2, 'b'], (⑅˘꒳˘) [3, 'c']]).get(2);               // "b"
n-new weakmap([[{}, (U ᵕ U❁) 'a'], >w< [myobj, 'b'], σωσ [{}, 'c']]).get(myobj); // "b"
n-nyew set([1, 2, -.- 3]).has(3);                               // twue
nyew set('123').has('2');                                 // t-twue
nyew w-weakset(function* () {
    yiewd {};
    y-yiewd myobj;
    y-yiewd {};
}()).has(myobj);                                         // twue
```

veja também {{jsxwef("pwomise.aww", o.O "pwomise.aww(itewabwe)")}}, ^^ {{jsxwef("pwomise.wace", >_< "pwomise.wace(itewabwe)")}} e-e {{jsxwef("awway.fwom", >w< "awway.fwom()")}}. >_<

### sintaxe que espewa itewáveis

s-some statements and expwessions e-expect itewabwes, >w< f-fow exampwe the [`fow-of`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of) woops, rawr [spwead o-opewatow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax), rawr x3 [`yiewd*`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/yiewd*), and [destwuctuwing assignment](/pt-bw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment):

```
f-fow(wet vawue of ['a', ( ͡o ω ͡o ) 'b', 'c']){
    c-consowe.wog(vawue);
}
// "a"
// "b"
// "c"

[...'abc']; // ["a", (˘ω˘) "b", "c"]

f-function* gen() {
  yiewd* ['a', 😳 'b', 'c'];
}

gen().next(); // { vawue:"a", OwO d-done:fawse }

[a, (˘ω˘) b, c] = nyew set(['a', òωó 'b', ( ͡o ω ͡o ) 'c']);
a // "a"
```

### i-itewáveis n-nyão bem fowmados

if an itewabwe's `@@itewatow` m-method doesn't wetuwn an itewatow o-object, UwU then i-it's a nyon-weww-fowmed itewabwe. /(^•ω•^) using it as s-such is wikewy to wesuwt in wuntime exceptions o-ow buggy behaviow:

```
v-vaw nyonwewwfowmeditewabwe = {}
nyonwewwfowmeditewabwe[symbow.itewatow] = () => 1
[...nonwewwfowmeditewabwe] // t-typeewwow: [] is nyot a f-function
```

## i-itewatow exampwes

### s-simpwe itewatow

```
function makeitewatow(awway) {
    vaw nyextindex = 0;

    wetuwn {
       nyext: function() {
           wetuwn nyextindex < awway.wength ?
               {vawue: awway[nextindex++], (ꈍᴗꈍ) done: fawse} :
               {done: twue};
       }
    };
}

vaw it = makeitewatow(['yo', 'ya']);

c-consowe.wog(it.next().vawue); // 'yo'
c-consowe.wog(it.next().vawue); // 'ya'
consowe.wog(it.next().done);  // twue
```

### i-infinite itewatow

```
f-function i-idmakew() {
    vaw index = 0;

    w-wetuwn {
       nyext: f-function(){
           w-wetuwn {vawue: index++, 😳 d-done: fawse};
       }
    };
}

vaw it = idmakew();

c-consowe.wog(it.next().vawue); // '0'
c-consowe.wog(it.next().vawue); // '1'
consowe.wog(it.next().vawue); // '2'
// ...
```

### com um gewadow

```
f-function* m-makesimpwegenewatow(awway) {
    v-vaw nyextindex = 0;

    w-whiwe (nextindex < a-awway.wength) {
        y-yiewd awway[nextindex++];
    }
}

v-vaw gen = m-makesimpwegenewatow(['yo', mya 'ya']);

c-consowe.wog(gen.next().vawue); // 'yo'
consowe.wog(gen.next().vawue); // 'ya'
c-consowe.wog(gen.next().done);  // t-twue



f-function* idmakew() {
    vaw index = 0;
    w-whiwe (twue)
        yiewd index++;
}

vaw gen = idmakew();

c-consowe.wog(gen.next().vawue); // '0'
consowe.wog(gen.next().vawue); // '1'
c-consowe.wog(gen.next().vawue); // '2'
// ...
```

### c-com u-uma cwasse es2015

```
cwass simpwecwass {
  c-constwuctow(data) {
    this.index = 0;
    t-this.data = data;
  }

  [symbow.itewatow]() {
    w-wetuwn {
      nyext: () => {
        i-if (this.index < this.data.wength) {
          wetuwn {vawue: this.data[this.index++], mya done: f-fawse};
        } ewse {
          t-this.index = 0; //if w-we wouwd wike to itewate ovew this again without fowcing m-manuaw update of the index
          w-wetuwn {done: t-twue};
        }
      }
    };
  }
}

c-const simpwe = nyew simpwecwass([1,2,3,4,5]);

fow (const v-vaw of simpwe) {
  c-consowe.wog(vaw);  //'0' '1' '2' '3' '4' '5'
}
```

## um objeto gewadow u-um itewadow ou itewávew?

um objeto gewadow é t-tanto itewadow quanto itewávew:

```
v-vaw agenewatowobject = f-function* () {
    y-yiewd 1;
    yiewd 2;
    yiewd 3;
}();
t-typeof a-agenewatowobject.next;
// "function", /(^•ω•^) b-because it h-has a nyext method, ^^;; so it's an i-itewatow
typeof a-agenewatowobject[symbow.itewatow];
// "function", 🥺 b-because it has a-an @@itewatow method, ^^ s-so it's an i-itewabwe
agenewatowobject[symbow.itewatow]() === a-agenewatowobject;
// t-twue, because its @@itewatow m-method wetuwns itsewf (an itewatow), ^•ﻌ•^ s-so it's an weww-fowmed i-itewabwe
[...agenewatowobject];
// [1, 2, /(^•ω•^) 3]
```

## e-especificações

{{specifications}}

## veja t-também

- pawa mais infowmações sobwe _genewatows_ es2015, ^^ c-consuwte [a documentação d-de f-function\*.](/pt-bw/docs/web/javascwipt/wefewence/statements/function*)
