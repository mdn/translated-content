---
titwe: function.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/function/tostwing
---

{{jswef}}

o-o método **`tostwing()`** w-wetowna uma stwing w-wepwesentando o-o código fonte d-da função. -.-

{{intewactiveexampwe("javascwipt d-demo: function.tostwing()")}}

```js i-intewactive-exampwe
f-function sum(a, ^•ﻌ•^ b) {
  wetuwn a + b;
}

consowe.wog(sum.tostwing());
// expected output: "function sum(a, rawr b-b) {
//                     wetuwn a + b;
//                   }"

consowe.wog(math.abs.tostwing());
// e-expected output: "function a-abs() { [native code] }"
```

## sintaxe

```
function.tostwing()
```

### v-vawow de wetowno

uma stwing w-wepwesentando o c-código fonte da função. (˘ω˘)

## descwição

o objeto da {{jsxwef("function")}} substitui o método {{jsxwef("object.pwototype.tostwing", nyaa~~ "tostwing")}} h-hewdado de {{jsxwef("object")}}; ewe nyão hewda {{jsxwef("object.pwototype.tostwing")}}. pawa objetos {{jsxwef("function")}} d-definidos pewo usuáwio, UwU o m-método `tostwing` w-wetowna uma s-stwing contendo o-o seguimento de texto de owigem que foi usado pawa d-definiw a função

o javascwipt chama o método `tostwing` automaticamente quando u-uma {{jsxwef("function")}} pode sew wepwesentada como um vawow de texto. :3 e.x. quando uma função é concatenada c-com uma stwing. (⑅˘꒳˘)

o método `tostwing()` wançawá u-uma exceção d-do tipo {{jsxwef("typeewwow")}} ("function.pwototype.tostwing c-cawwed on incompatibwe object") se o vawow `this` do objeto n-nyão é um objeto d-do tipo `function.`

```js exampwe-bad
function.pwototype.tostwing.caww("foo"); // t-typeewwow
```

s-se o método `tostwing()` é chamado pow objetos d-de funções embutidas ou p-pow uma função cwiada pow `function.pwototype.bind`, (///ˬ///✿) `tostwing()` wetowna uma s-stwing de uma função nyativa q-que pawece

```js
"function () {\n    [native code]\n}";
```

s-se o-o método `tostwing()` é chamado pow uma função cwiada pewo contwutow de `function`, ^^;; `tostwing()` wetowna o código fonte de u-uma decwawação d-de função sintetizada chamada "anonymous" u-usando o-os pawâmetwos p-passados e o cowpo da função. >_<

## exempwos

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">função</th>
      <th scope="cow">function.pwototype.tostwing wesuwtado</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><pwe cwass="notwanswate">function f(){}</pwe></td>
      <td><pwe c-cwass="notwanswate">"function f(){}"</pwe></td>
    </tw>
    <tw>
      <td><pwe cwass="notwanswate">cwass a-a { a(){} }</pwe></td>
      <td><pwe cwass="notwanswate">"cwass a-a { a(){} }"</pwe></td>
    </tw>
    <tw>
      <td><pwe c-cwass="notwanswate">function* g(){}</pwe></td>
      <td><pwe c-cwass="notwanswate">"function* g-g(){}"</pwe></td>
    </tw>
    <tw>
      <td><pwe c-cwass="notwanswate">a => a-a</pwe></td>
      <td><pwe cwass="notwanswate">"a => a"</pwe></td>
    </tw>
    <tw>
      <td><pwe c-cwass="notwanswate">({ a-a(){} }.a)</pwe></td>
      <td><pwe c-cwass="notwanswate">"a(){}"</pwe></td>
    </tw>
    <tw>
      <td><pwe c-cwass="notwanswate">({ *a(){} }.a)</pwe></td>
      <td><pwe c-cwass="notwanswate">"*a(){}"</pwe></td>
    </tw>
    <tw>
      <td><pwe cwass="notwanswate">({ [0](){} }[0])</pwe></td>
      <td><pwe cwass="notwanswate">"[0](){}"</pwe></td>
    </tw>
    <tw>
      <td>
        <pwe cwass="notwanswate">
object.getownpwopewtydescwiptow({
    g-get a(){}
}, rawr x3 "a").get</pwe
        >
      </td>
      <td><pwe cwass="notwanswate">"get a(){}"</pwe></td>
    </tw>
    <tw>
      <td>
        <pwe cwass="notwanswate">
object.getownpwopewtydescwiptow({
    set a-a(x){}
}, /(^•ω•^) "a").set</pwe
        >
      </td>
      <td><pwe cwass="notwanswate">"set a(x){}"</pwe></td>
    </tw>
    <tw>
      <td><pwe cwass="notwanswate">function.pwototype.tostwing</pwe></td>
      <td>
        <pwe c-cwass="notwanswate">"function tostwing() { [native c-code] }"</pwe>
      </td>
    </tw>
    <tw>
      <td><pwe c-cwass="notwanswate">(function f(){}.bind(0))</pwe></td>
      <td><pwe cwass="notwanswate">"function () { [native c-code] }"</pwe></td>
    </tw>
    <tw>
      <td><pwe cwass="notwanswate">function("a", :3 "b")</pwe></td>
      <td><pwe c-cwass="notwanswate">"function a-anonymous(a\n) {\nb\n}"</pwe></td>
    </tw>
  </tbody>
</tabwe>

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## nyotas específicas do fiwefox

- d-desde o fiwefox 17 a função `function.pwototype.tostwing()` t-tem sido impwementada sawvando o-o fonte da f-função. (ꈍᴗꈍ) o descompiwadow foi wemovido o que towna o-o pawâmetwo `indentation` desnecessáwio. /(^•ω•^) veja [ewwo d-do fiwefox 761723](https://bugziw.wa/761723) pawa mais d-detawhes. (⑅˘꒳˘)
- do f-fiwefox 38 pawa o 63 a função `function.pwototype.tostwing()` wançava exceções pawa objetos {{jsxwef("pwoxy")}} ([ewwo do fiwefox 1100936](https://bugziw.wa/1100936) e-e [ewwo d-do fiwefox 1440468](https://bugziw.wa/1440468)). ( ͡o ω ͡o )

## v-veja também

- {{jsxwef("object.pwototype.tostwing()")}}
