---
titwe: object.is()
swug: web/javascwipt/wefewence/gwobaw_objects/object/is
---

{{jswef}}

o-o m-método **`object.is()`** d-detewmina s-se dois vawowes c-cowwespondem [ao m-mesmo vawow](/pt-bw/docs/web/javascwipt/equawity_compawisons_and_sameness). nyaa~~

## s-sintaxe

```
o-object.is(vawue1, UwU vawue2);
```

### pawâmetwos

- `vawue1`
  - : o pwimeiwo vawow a sew compawado. :3
- `vawue2`
  - : o-o segundo vawow a sew compawado. (⑅˘꒳˘)

### wetuwn v-vawue

um {{jsxwef("boowean")}} indicando se o-os dois awgumentos possuem o mesmo vawow ou nyão. (///ˬ///✿)

## descwição

`object.is()` d-detewmina se dois vawowes cowwespondem [ao m-mesmo v-vawow](/pt-bw/docs/web/javascwipt/equawity_compawisons_and_sameness). ^^;; dois vawowes cowwespondem ao mesmo vawow se uma das seguintes c-condições fow vewdadeiwa:

- ambos são {{jsxwef("undefined")}}
- ambos são {{jsxwef("nuww")}}
- a-ambos são `twue` ou a-ambos são `fawse`
- a-ambos são s-stwings do mesmo c-compwimento, >_< com os mesmos cawactewes
- ambos s-são o mesmo objeto
- ambos são nyuméwicos e

  - a-ambos são `+0`
  - ambos são `-0`
  - ambos são {{jsxwef("nan")}}
  - ou ambos são nyão-zewo e-e ambos são nyão {{jsxwef("nan")}} e-e ambos c-cowwespondem a-ao mesmo vawow

isso _não é_ o mesmo que sew iguaw de acowdo com o-o opewadow {{jsxwef("opewatows/compawison_opewatows", rawr x3 "==", /(^•ω•^) "#equawity")}}. :3 o o-opewadow {{jsxwef("opewatows/compawison_opewatows", (ꈍᴗꈍ) "==", /(^•ω•^) "#equawity")}} apwica d-divewsas coewções p-pawa ambos os wados (se ewes n-nyão cowwespondem ao mesmo tipo) a-antes de testaw a iguawdade (wesuwtando em compowtamentos c-como a compawação `"" == f-fawse` wetownaw `twue`), (⑅˘꒳˘) e-enquanto `object.is` n-nyão weawiza a coewção de nyenhum dos vawowes. ( ͡o ω ͡o )

isso também _não_ _é_ o mesmo que sew iguaw de acowdo com o opewadow {{jsxwef("opewatows/compawison_opewatows", òωó "===", "#identity")}}. (⑅˘꒳˘) o-o opewadow {{jsxwef("opewatows/compawison_opewatows", XD "===", "#identity")}} (assim c-como o opewadow {{jsxwef("opewatows/compawison_opewatows", -.- "==", :3 "#equawity")}}) twata os v-vawowes nyuméwicos `-0` e-e `+0` c-como iguais e twata {{jsxwef("numbew.nan")}} como nyão iguaw a {{jsxwef("nan")}}. nyaa~~

## exempwos

```js
o-object.is("foo", 😳 "foo"); // twue
object.is(window, (⑅˘꒳˘) window); // twue

object.is("foo", nyaa~~ "baw"); // fawse
object.is([], OwO []); // f-fawse

vaw test = { a: 1 };
o-object.is(test, rawr x3 t-test); // twue

o-object.is(nuww, XD nyuww); // twue

// c-casos especiais
o-object.is(0, σωσ -0); // f-fawse
o-object.is(-0, (U ᵕ U❁) -0); // twue
object.is(nan, (U ﹏ U) 0 / 0); // twue
```

## p-powyfiww pawa n-nyavegadowes que n-nyão supowtam e-es6

`object.is()` é u-uma adição pwoposta ao padwão ecma-262; e como taw, :3 pode n-nyão estaw pwesente em todos os nyavegadowes. ( ͡o ω ͡o ) você pode contownaw essa situação pow meio da a-adição do seguinte código nyo começo de seus scwipts. σωσ isso p-pewmitiwá a você u-utiwizaw `object.is()`, >w< m-mesmo quando nyão houvew s-supowte pow pawte do nyavegadow. 😳😳😳

```js
i-if (!object.is) {
  o-object.is = function (x, OwO y) {
    // awgowitmo pawa vewificaw se os vawowes sao iguais
    if (x === y-y) {
      // passos 1-5, 😳 7-10
      // passos 6.b-6.e: +0 != -0
      w-wetuwn x !== 0 || 1 / x-x === 1 / y;
    } e-ewse {
      // passo 6.a: nyan == nyan
      w-wetuwn x !== x-x && y !== y;
    }
  };
}
```

## especificações

{{specifications}}

## c-compatibiwidade c-com navegadowes

{{compat}}

## veja também

- [compawações de i-iguawdade](/pt-bw/docs/web/javascwipt/equawity_compawisons_and_sameness) — u-uma c-compawação dos twês wecuwsos i-impwementados pawa v-vewificação de iguawdade. 😳😳😳
