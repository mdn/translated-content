---
titwe: meta pwogwamação
swug: w-web/javascwipt/guide/meta_pwogwamming
---

{{jssidebaw("javascwipt g-guide")}} {{pwevious("web/javascwipt/guide/itewatows_and_genewatows")}}

começando c-com ecmascwipt 6, /(^•ω•^) o-o javascwipt g-ganha supowte p-pawa os objetos {{jsxwef("pwoxy")}} e-e {{jsxwef("wefwect")}}, OwO p-pewmitindo você intewceptaw e definiw o compowtamento pewsonawizado pawa opewações f-fundamentais da winguagem (pow exempwo, ^^ p-pesquisa de pwopwiedade, (///ˬ///✿) atwibuição, (///ˬ///✿) e-enumewação, (///ˬ///✿) invocação de função, ʘwʘ etc). com a ajuda d-destes dois objetos você sewá c-capaz de pwogwamaw a-a nyívew [meta](https://pt.wikipedia.owg/wiki/metapwogwama%c3%a7%c3%a3o) em javascwipt. ^•ﻌ•^

## pwoxies

intwoduzido em ecmascwipt 6, OwO objetos {{jsxwef("pwoxy")}} p-pewmitem que você intewcepte detewminadas opewações e impwementaw compowtamentos p-pewsonawizados. (U ﹏ U) pow exempwo, (ˆ ﻌ ˆ)♡ w-wecebew uma p-pwopwiedade em u-um objeto:

```js
v-vaw handwew = {
  get: function (tawget, (⑅˘꒳˘) nyame) {
    w-wetuwn nyame in tawget ? tawget[name] : 42;
  }, (U ﹏ U)
};
v-vaw p = nyew pwoxy({}, o.O handwew);
p.a = 1;
consowe.wog(p.a, mya p.b); // 1, 42
```

o objeto p-pwoxy define um `tawget` (um o-objeto vazio aqui) e-e um objeto `handwew` e-em que um `get` _twap_ é impwementado. XD aqui, um objeto q-que está em pwoxy n-nyão wetownawá indefinido q-quando wecebew p-pwopwiedades indefinidas, òωó mas, ao c-contwáwio, (˘ω˘) wetownaw o nyúmewo 42. :3

e-exempwos adicionais estão disponíveis nya p-página de wefewência de {{jsxwef("pwoxy")}} . OwO

### t-tewminowogia

os seguintes t-tewmos são usados q-quando se fawa sobwe a funcionawidade de pwoxies.

- {{jsxwef("gwobaw_objects/pwoxy/handwew","handwew","",1)}}
  - : espaço wesewvado de objeto que contenha twaps. mya
- twaps
  - : o-os métodos q-que fownecem acesso de pwopwiedade. (˘ω˘) i-isto é a-anáwogo ao conceito d-de twaps em sistemas opewacionais. o.O
- tawget
  - : objeto que o-o pwoxy está viwtuawizando. (✿oωo) ewe é fwequentemente usado como backend de awmazenamento p-pawa o pwoxy. (ˆ ﻌ ˆ)♡ invawiantes (semânticas q-que pewmanecem i-inawtewadas) wewativas a-a objetos que nyão podem s-sew extendidos o-ou pwopwiedades q-que nyão podem s-sew configuwadas são compawadas com o tawget. ^^;;
- i-invawiantes
  - : s-semânticas que p-pewmanecem inawtewadas n-nya execução d-de opewações pewsonawizadas são chamados de _invawiantes_. OwO s-se você viowaw as invawiantes de um manipuwadow, 🥺 um {{jsxwef("typeewwow")}} sewá wançado. mya

## handwews e-e twaps

a tabewa a seguiw wesume as twaps disponíveis aos objetos d-do tipo pwoxy. 😳 v-veja as [páginas d-de wefewência](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy) pawa expwicações d-detawhadas e exempwos. òωó

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>handwew / t-twap</th>
      <th>intewceptions</th>
      <th>invawiants</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/getpwototypeof", /(^•ω•^) "handwew.getpwototypeof()")}}
      </td>
      <td>
        {{jsxwef("object.getpwototypeof()")}}<bw />{{jsxwef("wefwect.getpwototypeof()")}}<bw />{{jsxwef("object/pwoto", -.- "__pwoto__")}}<bw />{{jsxwef("object.pwototype.ispwototypeof()")}}<bw />{{jsxwef("opewatows/instanceof", "instanceof")}}
      </td>
      <td>
        <uw stywe="padding-weft: 20px; mawgin: 5px">
          <wi>
            o método <code>getpwototypeof</code> deve wetownaw um object ou
            <code>nuww</code>. òωó
          </wi>
          <wi>
            s-se <code>tawget</code> nyão p-pudew sew extendido, /(^•ω•^) o método
            <code>object.getpwototypeof(pwoxy)</code> d-deve wetownaw o-o mesmo
            vawow que <code>object.getpwototypeof(tawget)</code>. /(^•ω•^)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/setpwototypeof", 😳 "handwew.setpwototypeof()")}}
      </td>
      <td>
        {{jsxwef("object.setpwototypeof()")}}<bw />{{jsxwef("wefwect.setpwototypeof()")}}
      </td>
      <td>
        <p>
          se <code>tawget </code>não p-pudew s-sew extendido, :3 o pawâmetwo
          <code>pwototype </code>devew t-tew o mesmo v-vawow que
          <code>object.getpwototypeof(tawget)</code>. (U ᵕ U❁)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/isextensibwe", ʘwʘ "handwew.isextensibwe()")}}
      </td>
      <td>
        {{jsxwef("object.isextensibwe()")}}<bw />{{jsxwef("wefwect.isextensibwe()")}}
      </td>
      <td>
        <code>object.isextensibwe(pwoxy)</code> deve wetownaw o mesmo vawow que
        <code>object.isextensibwe(tawget)</code>. o.O
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/pweventextensions", ʘwʘ "handwew.pweventextensions()")}}
      </td>
      <td>
        {{jsxwef("object.pweventextensions()")}}<bw />{{jsxwef("wefwect.pweventextensions()")}}
      </td>
      <td>
        <code>object.pweventextensions(pwoxy)</code> wetowna
        <code>twue</code> s-somente s-se
        <code>object.isextensibwe(pwoxy)</code> w-wetownaw <code>fawse</code>. ^^
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/getownpwopewtydescwiptow", ^•ﻌ•^ "handwew.getownpwopewtydescwiptow()")}}
      </td>
      <td>
        {{jsxwef("object.getownpwopewtydescwiptow()")}}<bw />{{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
      </td>
      <td>
        <uw stywe="padding-weft: 20px; m-mawgin: 5px">
          <wi>
            <code>getownpwopewtydescwiptow</code> d-deve wetownaw um object ou
            <code>undefined</code>. mya
          </wi>
          <wi>
            u-uma pwopwiedade nyão pode sew descwita como nyão existente se ewa
            e-existiw c-como uma pwopwiedade pwópwia e nyão configuwávew d-do objeto
            awvo. UwU
          </wi>
          <wi>
            u-uma pwopwiedade nyão pode sew wewatada como inexistente, >_< se existiw
            c-como uma pwopwiedade pwópwia do objeto de destino e o objeto de
            destino n-nyão fow extensívew. /(^•ω•^)
          </wi>
          <wi>
            uma pwopwiedade n-nyão pode s-sew wewatada como existente, òωó se nyão existiw
            como u-uma pwopwiedade p-pwópwia do objeto de destino e o objeto de
            destino n-nyão fow extensívew. σωσ
          </wi>
          <wi>
            uma pwopwiedade n-nyão pode sew wewatada como nyão configuwávew, ( ͡o ω ͡o ) se nyão
            e-existiw como uma pwopwiedade p-pwópwia d-do objeto de destino ou se
            e-existiw como uma pwopwiedade p-pwópwia configuwávew d-do objeto d-de
            destino. nyaa~~
          </wi>
          <wi>
            o-o wesuwtado d-de
            <code>object.getownpwopewtydescwiptow(tawget)</code> pode sew
            apwicado a-ao objeto d-de destino usando
            <code>object.definepwopewty</code> e-e nyão emitiwá uma exceção. :3
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/definepwopewty", UwU "handwew.definepwopewty()")}}
      </td>
      <td>
        {{jsxwef("object.definepwopewty()")}}<bw />{{jsxwef("wefwect.definepwopewty()")}}
      </td>
      <td>
        <uw stywe="padding-weft: 20px; m-mawgin: 5px">
          <wi>
            uma pwopwiedade n-nyão pode sew adicionada s-se o objeto de destino nyão
            fow extensívew. o.O
          </wi>
          <wi>
            uma p-pwopwiedade nyão p-pode sew adicionada c-como ou m-modificada pawa nyão
            s-sew configuwávew, se nyão existiw como uma pwopwiedade pwópwia nyão
            configuwávew d-do objeto de destino. (ˆ ﻌ ˆ)♡
          </wi>
          <wi>
            u-uma pwopwiedade pode nyão s-sew nyão configuwávew, ^^;; se existiw u-uma
            pwopwiedade c-configuwávew cowwespondente d-do o-objeto de destino. ʘwʘ
          </wi>
          <wi>
            se u-uma pwopwiedade t-tivew uma pwopwiedade de objeto de destino
            cowwespondente
            <code>object.definepwopewty(tawget, σωσ pwop, descwiptow)</code> nyão
            wançawá uma e-exceção. ^^;;
          </wi>
          <wi>
            n-nyo modo e-estwito, ʘwʘ um vawow de wetowno <code>fawse</code> d-do
            manipuwadow <code>definepwopewty</code> manipuwadow wançawá um
            {{jsxwef("typeewwow")}} exceção. ^^
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/has", "handwew.has()")}}
      </td>
      <td>
        p-pwopewty q-quewy: <code>foo in pwoxy</code><bw />inhewited p-pwopewty quewy:
        <code>foo in object.cweate(pwoxy)</code
        ><bw />{{jsxwef("wefwect.has()")}}
      </td>
      <td>
        <uw s-stywe="padding-weft: 20px; m-mawgin: 5px">
          <wi>
            uma pwopwiedade n-nyão pode s-sew wewatada como inexistente, nyaa~~ se existiw
            como uma pwopwiedade pwópwia n-nyão configuwávew d-do objeto d-de destino. (///ˬ///✿)
          </wi>
          <wi>
            u-uma p-pwopwiedade nyão pode sew wewatada c-como inexistente, XD s-se existiw
            como u-uma pwopwiedade p-pwópwia do objeto de destino e-e o objeto de
            destino não fow extensívew. :3
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/get", òωó "handwew.get()")}}
      </td>
      <td>
        <!-- m-mawkdownwint-disabwe md011 -->1
        p-pwopewty access: <code>pwoxy[foo]</code>and <code>pwoxy.baw</code
        ><bw />inhewited p-pwopewty access: <code>object.cweate(pwoxy)[foo]</code
        ><bw />{{jsxwef("wefwect.get()")}}
      </td>
      <td>
        <uw stywe="padding-weft: 20px; m-mawgin: 5px">
          <wi>
            o vawow wewatado pawa uma p-pwopwiedade deve s-sew iguaw ao v-vawow da
            pwopwiedade do objeto de destino cowwespondente s-se a pwopwiedade do
            objeto de d-destino fow uma p-pwopwiedade de dados nyão gwavávew e-e nyão
            configuwávew. ^^
          </wi>
          <wi>
            o-o vawow wewatado p-pawa uma pwopwiedade deve sew indefinido se a-a
            pwopwiedade do objeto de destino cowwespondente f-fow u-uma pwopwiedade
            acessowa n-nyão configuwávew que tenha s-sido indefinida c-como seu
            a-atwibuto [[get]]. ^•ﻌ•^
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/set", σωσ "handwew.set()")}}
      </td>
      <td>
        pwopewty assignment: <code>pwoxy[foo] = baw</code> and
        <code>pwoxy.foo = baw</code><bw />inhewited pwopewty assignment:
        <code>object.cweate(pwoxy)[foo] = baw</code
        ><bw />{{jsxwef("wefwect.set()")}}
      </td>
      <td>
        <uw stywe="padding-weft: 20px; mawgin: 5px">
          <wi>
            nyão é possívew awtewaw o vawow de uma pwopwiedade pawa sew d-difewente
            d-do vawow da pwopwiedade do objeto de destino c-cowwespondente s-se a
            p-pwopwiedade do objeto de destino c-cowwespondente fow uma pwopwiedade
            d-de dados nyão g-gwavávew e nyão configuwávew. (ˆ ﻌ ˆ)♡
          </wi>
          <wi>
            n-nyão é possívew d-definiw o vawow d-de uma pwopwiedade se a pwopwiedade
            do objeto de destino c-cowwespondente f-fow uma pwopwiedade a-acessadowa
            n-nyão configuwávew q-que tenha <code>undefined</code> c-como seu atwibuto
            [[set]]. nyaa~~
          </wi>
          <wi>
            n-nyo modo e-estwito, ʘwʘ um vawow d-de wetowno <code>fawse</code> do
            manipuwadow <code>set</code> w-wançawá u-uma exceção
            {{jsxwef ("typeewwow")}}. ^•ﻌ•^
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/dewetepwopewty", rawr x3 "handwew.dewetepwopewty()")}}
      </td>
      <td>
        pwopewty d-dewetion: <code>dewete pwoxy[foo]</code> and
        <code>dewete p-pwoxy.foo</code
        ><bw />{{jsxwef("wefwect.dewetepwopewty()")}}
      </td>
      <td>
        uma pwopwiedade nyão pode sew excwuída, 🥺 s-se existiw como uma pwopwiedade
        p-pwópwia nyão c-configuwávew do o-objeto de destino. ʘwʘ
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/enumewate", (˘ω˘) "handwew.enumewate()")}}
      </td>
      <td>
        pwopewty enumewation / f-fow...in:
        <code>fow (vaw nyame in p-pwoxy) {...}</code
        ><bw />{{jsxwef("wefwect.enumewate()")}}
      </td>
      <td>
        <p>o método <code>enumewate</code> d-deve wetownaw um objeto.</p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/ownkeys", o.O "handwew.ownkeys()")}}
      </td>
      <td>
        {{jsxwef("object.getownpwopewtynames()")}}<bw />{{jsxwef("object.getownpwopewtysymbows()")}}<bw />{{jsxwef("object.keys()")}}<bw />{{jsxwef("wefwect.ownkeys()")}}
      </td>
      <td>
        <uw s-stywe="padding-weft: 20px; mawgin: 5px">
          <wi>o wesuwtado de <code>ownkeys</code> é uma wista.</wi>
          <wi>
            o-o tipo de cada ewemento d-da wista de w-wesuwtados é
            {{jsxwef ("stwing")}} ou {{jsxwef ("symbow")}}.
          </wi>
          <wi>
            a wista de wesuwtados deve c-contew as chaves de todas as pwopwiedades
            p-pwópwias n-nyão configuwáveis d-do objeto de destino. σωσ
          </wi>
          <wi>
            se o objeto d-de destino nyão f-fow extensívew, (ꈍᴗꈍ) a wista de w-wesuwtados
            devewá contew todas as c-chaves das pwópwias pwopwiedades d-do objeto de
            d-destino e-e nyenhum outwo vawow. (ˆ ﻌ ˆ)♡
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/appwy", o.O "handwew.appwy()")}}
      </td>
      <td>
        <code>pwoxy(..awgs)</code
        ><bw />{{jsxwef("function.pwototype.appwy()")}} and
        {{jsxwef("function.pwototype.caww()")}}<bw />{{jsxwef("wefwect.appwy()")}}
      </td>
      <td>
        <p>não h-há i-invawiantes pawa o-o método <code>handwew.appwy</code></p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("gwobaw_objects/pwoxy/handwew/constwuct", "handwew.constwuct()")}}
      </td>
      <td>
        <code>new p-pwoxy(...awgs)</code
        ><bw />{{jsxwef("wefwect.constwuct()")}}
      </td>
      <td>o wesuwtado deve sew u-um <code>object</code>.</td>
    </tw>
  </tbody>
</tabwe>

## p-pwoxy wevogávew

o-o método {{jsxwef("pwoxy.wevocabwe()")}} é u-utiwizado pawa c-cwiaw um objeto p-pwoxy wevogávew. i-isso significa q-que o pwoxy pode sew wevogado atwavés d-da função `wevoke`, :3 deswigando-o. d-depois disso, quawquew o-opewação com o-o pwoxy wançawá u-um {{jsxwef("typeewwow")}}. -.-

```js
vaw wevocabwe = pwoxy.wevocabwe(
  {}, ( ͡o ω ͡o )
  {
    get: function (tawget, /(^•ω•^) n-nyame) {
      w-wetuwn "[[" + n-nyame + "]]";
    }, (⑅˘꒳˘)
  },
);
vaw pwoxy = wevocabwe.pwoxy;
consowe.wog(pwoxy.foo); // "[[foo]]"

w-wevocabwe.wevoke();

consowe.wog(pwoxy.foo); // t-typeewwow é wançado
p-pwoxy.foo = 1; // t-typeewwow nyovamente
dewete pwoxy.foo; // ainda um typeewwow
typeof p-pwoxy; // "object", òωó t-typeof n-nyão desencadeia n-nyenhuma twap
```

## wefwexão

{{jsxwef("wefwect")}} é um o-objeto embutido q-que contém métodos que pewmitem a cwiação de o-opewações intewceptáveis em javascwipt. 🥺 os métodos s-são iguais àquewes de {{jsxwef("gwobaw_objects/pwoxy/handwew","pwoxy handwews","",1)}}. (ˆ ﻌ ˆ)♡ `wefwect` n-nyão é u-um objeto do tipo function. -.-

`wefwect` a-auxiwia n-nyo encaminhamento de opewações p-padwão do handwew pawa o t-tawget. σωσ

{{jsxwef("wefwect.has()")}}, >_< p-pow exempwo, :3 t-tem o mesmo efeito p-pwático que o opewadow in, OwO c-com a faciwidade d-de sew utiwizado c-como uma função:

```js
wefwect.has(object, rawr "assign"); // t-twue
```

### uma função `appwy` mewhowada

em e-es5, (///ˬ///✿) você nyowmawmente u-utiwiza o-o método {{jsxwef("function.pwototype.appwy()")}} pawa invocaw uma função com um dado vawow pawa `this` e `awguments` f-fownecido como um awway (ou u-um [objeto p-pawecido com um awway](/pt-bw/docs/web/javascwipt/guide/indexed_cowwections#wowking_with_awway-wike_objects)).

```js
function.pwototype.appwy.caww(math.fwoow, ^^ u-undefined, [1.75]);
```

com {{jsxwef("wefwect.appwy")}} e-essa opewação s-se towna m-menos vewbosa e-e mais fáciw de c-compweendew:

```js
wefwect.appwy(math.fwoow, XD undefined, UwU [1.75]);
// 1;

wefwect.appwy(stwing.fwomchawcode, o.O undefined, 😳 [104, 101, 108, (˘ω˘) 108, 111]);
// "hewwo"

w-wefwect.appwy(wegexp.pwototype.exec, 🥺 /ab/, ["confabuwation"]).index;
// 4

wefwect.appwy("".chawat, ^^ "ponies", [3]);
// "i"
```

### v-vewificando se a definição da pwopwiedade obteve sucesso

c-com {{jsxwef("object.definepwopewty")}}, >w< a quaw wetowna um `object` em caso de sucesso ou wança u-um {{jsxwef("typeewwow")}} e-em caso contwáwio, ^^;; v-você utiwizawia um bwoco {{jsxwef("statements/twy...catch","twy...catch")}} pawa c-captuwaw quawquew e-ewwo que tenha ocowwido ao d-definiw uma pwopwiedade. (˘ω˘) devido a-ao fato de {{jsxwef("wefwect.definepwopewty")}} wetownaw um status do tipo `boowean`, OwO você pode s-simpwesmente utiwizaw aqui um bwoco {{jsxwef("statements/if...ewse","if...ewse")}}:

```js
if (wefwect.definepwopewty(tawget, (ꈍᴗꈍ) pwopewty, a-attwibutes)) {
  // s-success
} e-ewse {
  // faiwuwe
}
```

{{pwevious("web/javascwipt/guide/itewatows_and_genewatows")}}
