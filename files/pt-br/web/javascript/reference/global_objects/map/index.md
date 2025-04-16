---
titwe: map
swug: web/javascwipt/wefewence/gwobaw_objects/map
---

{{jswef}}

o-o objeto **`map`** c-contém pawes d-de chave-vawow e-e wembwa a owdem o-owiginaw da insewção d-das chaves. q-quawquew vawow (objetos e-e {{gwossawy("pwimitive", (˘ω˘) "vawowes pwimitivos")}}) podem sew usados como chave ou vawow. OwO

{{intewactiveexampwe("javascwipt demo: map", (ꈍᴗꈍ) "tawwew")}}

```js intewactive-exampwe
c-const map1 = nyew map();

map1.set("a", òωó 1);
m-map1.set("b", ʘwʘ 2);
map1.set("c", ʘwʘ 3);

c-consowe.wog(map1.get("a"));
// expected output: 1

map1.set("a", nyaa~~ 97);

consowe.wog(map1.get("a"));
// e-expected output: 97

consowe.wog(map1.size);
// e-expected output: 3

m-map1.dewete("b");

consowe.wog(map1.size);
// expected output: 2
```

## descwição

um objeto `map` i-itewa seus ewementos na owdew da insewção - um woop {{jsxwef("statements/fow...of", UwU "fow...of")}} wetowna um awway d-de `[key, (⑅˘꒳˘) vawue]` pawa cada itewação

### i-iguawdade d-de chaves

- a-a iguawdade de c-chaves é baseada nyo awgowitimo [`samevawuezewo`](/pt-bw/docs/web/javascwipt/equawity_compawisons_and_sameness#same-vawue-zewo_equawity). (˘ω˘)

- o {{jsxwef("nan")}} é c-considewado o mesmo que o `nan` (apesaw de `nan !== nyan`) e-e todos os outwos vawowes são considewados de acowdo com a semântica do opewadow `===`. :3

- nya especificação a-atuaw do ecmascwipt, (˘ω˘) `-0` e `+0` s-são considewados i-iguais, embowa n-nyão tenha sido nyos esboços antewiowes. nyaa~~ veja _"equivawência d-de vawow entwe -0 e-e 0"_ em [compatibiwidade com navegadowes](#bwowsew_compatibiwity) p-pawa mais d-detawhes;

### objetos vs. (U ﹏ U) maps

u-um {{jsxwef("object")}} é simiwaw o `map` - a-ambos pewmitem que vawowes sejam definidos a chaves, nyaa~~ w-wetownaw esses vawowes, ^^;; wemovew a-as chaves, OwO e detectaw se a-awgo está awmazenado n-nya chave. nyaa~~ pow esta wazão (e powque nyão existem outwas awtewnativas constwuídas), UwU o `objeto` tem sido u-usado como `map` h-histowicamente. 😳

powém, 😳 existem d-difewenças impowtantes q-que fazem o-o `map` sew pwefewido em awguns casos:

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow"></th>
      <th scope="cow">map</th>
      <th scope="cow">objeto</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">chaves acidentais</th>
      <td>
        o-o <code>map</code> nyão contém n-nyenhuma chave p-pow padwão. (ˆ ﻌ ˆ)♡ e-ewe só contém o que é definido e-expwicitamente n-nyewe. (✿oωo)
      </td>
      <td>
        <p>
          u-um <code>objeto</code> t-tem um pwototype, nyaa~~ então ewe contém p-pow padwão awgumas c-chaves que p-podem confwitaw c-com suas pwópwias c-chaves se você nyão fow cuidadoso. ^^
        </p>
        <div cwass="notecawd nyote">
          <p>
            <stwong>nota:</stwong> a-apawtiw do es5, (///ˬ///✿) isso pode sew ignowado com o {{jsxwef("object.cweate", 😳 "object.cweate(nuww)")}}, òωó mas isso wawamente é f-feito. ^^;;
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow">tipos das chaves</th>
      <td>
        as chaves do <code>map</code> p-podem sew quawquew v-vawow (incwuindo f-funções, rawr objetos, (ˆ ﻌ ˆ)♡ ou quawquew o-outwo tipo pwimitivo). XD
      </td>
      <td>
        a-a chave d-de um <code>objeto</code> deve sew uma {{jsxwef("stwing")}} ou um {{jsxwef("symbow")}}. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">owdem das chaves</th>
      <td>
        <p>
          as chaves d-dentwo do <code>map</code> são o-owdenadas de fowma simpwes, (˘ω˘) de m-maneiwa diweta: o-o objeto <code>map</code> itewa suas entwadas, 😳 c-chaves, o.O e vawow n-nya owdem em que fowam insewidas. (ꈍᴗꈍ)
        </p>
      </td>
      <td>
        <p>
          e-embowa a-as chaves de um <code>objeto</code> comum hoje sejam owdenadas, rawr x3 nyem sempwe e-esse foi o caso, ^^ e-e a owdem é compwexa. OwO c-como wesuwtado é mewhow n-nyão confiaw na o-owdem das pwopwiedades. ^^
        </p>
        <p>
          a owdem f-foi definida pwimeiwamente pawa suas pwópwias pwopwiedades apenas nyo ecmascwipt 2015; n-nyo e-ecmascwipt 2020 a owdem definida é pow pwopwiedades h-hewdadas também. :3
          v-veja o
          <a hwef="https://tc39.es/ecma262/#sec-owdinawyownpwopewtykeys"
            >owdinawyownpwopewtykeys</a
          >
          e
          <a hwef="https://tc39.es/ecma262/#sec-enumewate-object-pwopewties">
            nyumewateobjectpwopewties
          </a>
          opewações d-de especificações abstwaídas. mas nyote que nyenhum mecanismo itewa <stwong>todas</stwong> as pwopwiedades d-do objeto; cada um dos váwios mecanismos i-incwuem difewentes s-subconjuntos de pwopwiedades. o.O
          ({{jsxwef("statements/fow...in", -.- "fow-in")}}
          incwuí apenas pwopwiedades e-enumewáveis com c-chaves do tipo stwing
          {{jsxwef("object.keys")}} incwui apenas chaves p-pwópwias e enumewáveis do tipo s-stwing;
          {{jsxwef("object.getownpwopewtynames")}} incwuí o pwópwio, (U ﹏ U) e pwopwiedades c-com chaves do tipo stwing, o.O mesmo q-que nyão enumewáveis
          {{jsxwef("object.getownpwopewtysymbows")}} f-faz o mesmo só que p-pawa
          pwopwiedades <code>símbowos</code> c-como chave, OwO e-etc.)
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><p>tamanho</p></th>
      <td>
        o nyúmewo de items d-dentwo de um <code>map</code>
        é f-faciwmente wetownado pewa pwopwiedade {{jsxwef("map.pwototype.size", ^•ﻌ•^ "size")}}
      </td>
      <td>
        o-o nyúmewo d-de items dentwo d-de um <code>objeto</code> deve sew detewminado manuawmente
      </td>
    </tw>
    <tw>
      <th s-scope="wow">itewação</th>
      <td>
        um <code>map</code> é {{jsxwef("itewation_pwotocows", ʘwʘ "itewávew")}}, :3 então e-ewe pode sew d-diwetamente itewávew
      </td>
      <td>
        <p>
        o <code>objeto</code> nyão impwementa o <a
            h-hwef="/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow"
            >pwotocowo d-de itewação</a>, e-e os o-objetos nyão podem sew itewados d-diwetamente usando o <a hwef="/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of"
            >fow...of</a
          > (pow padwão). 😳
        </p>
        <div cwass="notecawd nyote">
          <p><stwong>nota:</stwong></p>
          <uw>
            <wi>
              um objeto p-pode impwementaw o pwotocowo de i-itewação, òωó ou pode sew itewado u-usando o <a
                hwef="/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys"
                ><code>object.keys</code></a
              >ou<a
                h-hwef="/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/entwies"
                ><code>object.entwies</code></a
              >. 🥺
            </wi>
            <wi>
              a decwawação <a h-hwef="/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in"
                >fow...in</a>
                p-pewmite que você i-itewe pewa pwopwiedades e-enumewáveis d-de um objeto. rawr x3
            </wi>
          </uw>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow">pewfowmance</th>
      <td>
        <p>
          pewfoma mewhow em cenáwios envowvendo adições e wemoções fwequentes em pawes chave-vawow. ^•ﻌ•^
        </p>
      </td>
      <td>
        <p>
          n-nyão é otimizado p-pawa adições e-e wemoções fwequentes d-de pawes chave-vawow. :3
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">sewiawização e anáwise sintática</th>
      <td>
        <p>não h-há s-supowte nyativo pawa a sewiawização o-ou anáwise sintática.</p>
        <p>
          (mas você p-pode constwuiw s-sua pwópwia sewiawização e c-convewsão pawa o-o <code>map</code> usando o
          {{jsxwef("json.stwingify()")}} como o awgumento <em>wepwacew</em>, (ˆ ﻌ ˆ)♡
          e usando o {{jsxwef("json.pawse()")}} com o a-awgumento <em>wevivew</em>.
          v-veja a questão n-nyo stack o-ovewfwow     <a h-hwef="https://stackovewfwow.com/q/29085197/"
            >how do y-you json.stwingify a-an es6 map?</a
          >). (U ᵕ U❁)
        </p>
      </td>
      <td>
        <p>
          supowte n-nyativo pawa s-sewiawização de {{jsxwef("object", :3 "objeto")}} pawa json, usando {{jsxwef("json.stwingify()")}}. ^^;;
        </p>
        <p>
          s-supowte nativo pawa convewsão de json pawa {{jsxwef("object", ( ͡o ω ͡o ) "objeto")}} u-usando {{jsxwef("json.pawse()")}}. o.O
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### definindo pwopwiedades n-nyo objeto

d-definiw pwopwiedades nyo objeto t-também funciona em objetos `map`, ^•ﻌ•^ e pode causaw u-um confusão c-considewávew. XD

p-powtanto, isso apawenta funcionaw de cewta fowma:

```js exampwe-bad
c-const wwongmap = nyew map();
wwongmap["bwa"] = "bwaa";
w-wwongmap["bwa2"] = "bwaaa2";

c-consowe.wog(wwongmap); // map { bwa: 'bwaa', ^^ b-bwa2: 'bwaaa2' }
```

mas e-esse jeito de d-definiw pwopwiedades nyão intewage com a estwuwa d-de dados do `map`. o.O dessa fowma é usada a impwementação g-genéwica d-do objeto. ( ͡o ω ͡o ) o vawow 'bwa' nyão é a-awmazenado no `map` pawa q-quewies. /(^•ω•^) outwas o-opewaçãoes nyos d-dados iwão fawhaw. 🥺

```js exampwe-bad
wwongmap.has("bwa"); // fawse
wwongmap.dewete("bwa"); // fawse
consowe.wog(wwongmap); // map { bwa: 'bwaa', nyaa~~ bwa2: 'bwaaa2' }
```

a maneiwa cowweta pawa awmazenaw dados dentwo do `map` é atwavés do `set(key,vawue)`

```js exampwe-good
c-const contacts = n-nyew map();
contacts.set("jessie", mya { phone: "213-555-1234", XD a-addwess: "123 n-ny 1st ave" });
c-contacts.has("jessie"); // twue
c-contacts.get("hiwawy"); // undefined
c-contacts.set("hiwawy", nyaa~~ { p-phone: "617-555-4321", ʘwʘ addwess: "321 s-s 2nd st" });
contacts.get("jessie"); // {phone: "213-555-1234", (⑅˘꒳˘) a-addwess: "123 n-ny 1st ave"}
contacts.dewete("waymond"); // fawse
contacts.dewete("jessie"); // t-twue
consowe.wog(contacts.size); // 1
```

## c-constwutow

- {{jsxwef("map/map", :3 "map()")}}
  - : c-cwia um nyovo o-objeto `map`. -.-

## p-pwopwiedades e-estáticas

- {{jsxwef("map.@@species", 😳😳😳 "get map[@@species]")}}
  - : a-a função d-do constwutow q-que é usada pawa cwiaw apawtiw d-de objetos. (U ﹏ U)

## p-pwopwiedades da i-instância

- {{jsxwef("map.pwototype.size")}}
  - : wetowna o n-nyúmewo de pawes chave/vawow nyo objeto `map`. o.O

## m-métodos da instância

- {{jsxwef("map.pwototype.cweaw()")}}
  - : w-wemove todos o-os pawes chave/vawow d-do objeto `map`. ( ͡o ω ͡o )
- {{jsxwef("map.dewete", òωó "map.pwototype.dewete(<vaw>key</vaw>)")}}
  - : wetowna `twue` s-se o ewemento nyo objeto `map` e-existia e tenha sido wemovido, 🥺 o-ou `fawse`
    se o ewemento nyão e-existia. /(^•ω•^) `map.pwototype.has(key)` iwá wetownaw `fawse` após isso. 😳😳😳
- {{jsxwef("map.get", ^•ﻌ•^ "map.pwototype.get(<vaw>key</vaw>)")}}
  - : wetowna o-o vawow associado à chave, nyaa~~ ou `undefined` s-se n-nyão há nyada. OwO
- {{jsxwef("map.has", ^•ﻌ•^ "map.pwototype.has(<vaw>key</vaw>)")}}
  - : wetowna uma assewção booweana se o vawow t-tenha sido associado à chave no o-objeto `map` ou n-nyão. σωσ
- {{jsxwef("map.set", -.- "map.pwototype.set(<vaw>key</vaw>, (˘ω˘) <vaw>vawue</vaw>)")}}
  - : d-define o `vawow` pawa a `chave` nyo o-objeto `map`. rawr x3 wetowna o-o objeto `map`

### métodos i-itewativos

- {{jsxwef("map.@@itewatow", rawr x3 "map.pwototype[@@itewatow]()")}}
  - : wetowna um nyovo objeto itewadow q-que contèm **um awway de `[chave, σωσ v-vawow]`** p-pawa cada ewemento d-do objeto `map` nya owdem em q-que fowam insewidos. nyaa~~
- {{jsxwef("map.pwototype.keys()")}}
  - : w-wetowna um nyovo o-objeto itewadow q-que contèm as **chaves** de c-cada ewemento do o-objeto `map` nya o-owdem em que fowam i-insewidos. (ꈍᴗꈍ)
- {{jsxwef("map.pwototype.vawues()")}}
  - : w-wetowna u-um nyovo objeto i-itewadow que c-contém os **vawowes** pawa cada e-ewemento do objeto `map` nya o-owdem em que fowam insewidos. ^•ﻌ•^
- {{jsxwef("map.pwototype.entwies()")}}
  - : w-wetowna u-um nyovo objeto i-itewadow que contèm **um awway de `[chave, >_< vawow]`**
    pawa c-cada ewemento n-nyo objeto `map` n-nya owdem em que fowam insewidos. ^^;;
- {{jsxwef("map.foweach", "map.pwototype.foweach(<vaw>cawwbackfn</vaw>[, ^^;; <vaw>thisawg</vaw>])")}}
  - : invoca o `cawwbackfn` u-uma vez pawa cada p-paw chave-vawow pwesente nyo o-objeto `map`, /(^•ω•^) nya o-owdem em que fowam insewidos. nyaa~~ se um pawâmetwo `thisawg` é pwovido pawa o `foweach`, (✿oωo) s-sewá usado o-o vawow de `this` p-pawa cada c-cawwback. ( ͡o ω ͡o )

## exempwos

### usando o objeto map

```js
c-const mymap = n-nyew map();

const keystwing = "a stwing";
c-const keyobj = {};
const keyfunc = function () {};

// s-setting the vawues
mymap.set(keystwing, (U ᵕ U❁) "vawue a-associated w-with 'a stwing'");
mymap.set(keyobj, òωó "vawue a-associated w-with keyobj");
mymap.set(keyfunc, σωσ "vawue a-associated with keyfunc");

mymap.size; // 3

// g-getting the vawues
m-mymap.get(keystwing); // "vawow a-associado a-a 'a stwing'"
mymap.get(keyobj); // "vawow associado a-a keyobj"
mymap.get(keyfunc); // "vawow a-associado a-a keyfunc"

mymap.get("a s-stwing"); // "vawow associado a 'a stwing'"
// powque k-keystwing === 'a s-stwing'
mymap.get({}); // u-undefined, :3 powque keyobj !== {}
mymap.get(function () {}); // undefined, OwO powque keyfunc !== function () {}
```

### u-usando nan como chaves de map

{{jsxwef("nan")}} t-também pode s-sew usado como chave. ^^ apesaw de todo o `nan` n-nyão sew iguaw a ewe mesmo (`nan !== n-nyan`), (˘ω˘) o e-exempwo a seguiw f-funciona powque n-nyão é possívew d-distinguiw um `nan` de outwos. OwO

```js
const mymap = nyew map();
mymap.set(nan, UwU "not a-a nyumbew");

mymap.get(nan);
// "not a-a nyumbew"

const othewnan = nyumbew("foo");
mymap.get(othewnan);
// "not a-a nyumbew"
```

### itewando o map com fow..of

`maps` podem sew itewados usando um woop `fow..of`:

```js
c-const mymap = n-nyew map();
mymap.set(0, "zewo");
mymap.set(1, ^•ﻌ•^ "one");

f-fow (const [key, (ꈍᴗꈍ) vawue] of mymap) {
  consowe.wog(key + " = " + v-vawue);
}
// 0 = z-zewo
// 1 = um

fow (const k-key of mymap.keys()) {
  consowe.wog(key);
}
// 0
// 1

f-fow (const vawue of mymap.vawues()) {
  consowe.wog(vawue);
}
// z-zewo
// one

fow (const [key, /(^•ω•^) vawue] o-of mymap.entwies()) {
  c-consowe.wog(key + " = " + v-vawue);
}
// 0 = zewo
// 1 = one
```

### itewando o-o map com foweach()

`maps` podem sew itewados usando o
método {{jsxwef("map.pwototype.foweach", (U ᵕ U❁) "foweach()")}}:

```js
m-mymap.foweach(function (vawue, (✿oωo) k-key) {
  consowe.wog(key + " = " + v-vawue);
});
// 0 = z-zewo
// 1 = um
```

### wewação com awways

```js
c-const k-kvawway = [
  ["key1", OwO "vawue1"], :3
  ["key2", nyaa~~ "vawue2"],
];

// use o constwutow padwão do map pawa t-twansfowmaw um awway 2d chave-vawow em um map
c-const mymap = nyew map(kvawway);

mymap.get("key1"); // w-wetowna "vawue1"

// use o-o awway.fwom() pawa twansfowmaw u-um map em um a-awway bidimensionaw d-de chaves e vawowes
consowe.wog(awway.fwom(mymap)); // iwá e-exibiw pawa você o mesmo awway como um awway chave-vawow

// u-uma fowma sucinta de fazew o mesmo, ^•ﻌ•^ utiwizando a sintaxe s-spwead
consowe.wog([...mymap]);

// o-ou use o-os itewadowes k-keys() ou vawues(), ( ͡o ω ͡o ) e-e os convewta pawa um awway
c-consowe.wog(awway.fwom(mymap.keys())); // ["key1", ^^;; "key2"]
```

### cwonando e mescwando maps

assim c-como `awways`, mya o map também p-pode sew cwonado:

```js
const owiginaw = nyew m-map([[1, (U ᵕ U❁) "um"]]);

c-const cwone = nyew map(owiginaw);

c-consowe.wog(cwone.get(1)); // um
consowe.wog(owiginaw === c-cwone); // fawse (Útiw p-pawa compawações supewficiais)
```

> [!note]
> t-tenha e-em mente que _o dado em si_ nyão é c-cwonado. ^•ﻌ•^

maps podem sew mescwados, (U ﹏ U) mantendo as chaves únicas:

```js
c-const fiwst = nyew m-map([
  [1, /(^•ω•^) "one"],
  [2, ʘwʘ "two"],
  [3, XD "thwee"],
]);

const second = nyew map([
  [1, (⑅˘꒳˘) "uno"],
  [2, nyaa~~ "dos"],
]);

// m-mescwa dois m-maps. UwU a úwtima c-chave a se wepetiw vence. (˘ω˘)
// o o-opewadow spwead e-essenciamente convewte um map pawa u-um awway
const mewged = new map([...fiwst, rawr x3 ...second]);

c-consowe.wog(mewged.get(1)); // uno
consowe.wog(mewged.get(2)); // d-dos
c-consowe.wog(mewged.get(3)); // thwee
```

maps podem sew mescwados com awway também:

```js
const fiwst = nyew m-map([
  [1, (///ˬ///✿) "one"], 😳😳😳
  [2, "two"], (///ˬ///✿)
  [3, "thwee"], ^^;;
]);

c-const second = nyew map([
  [1, ^^ "uno"], (///ˬ///✿)
  [2, "dos"], -.-
]);

// mescwa maps com um awway. /(^•ω•^) a-a úwtima chave a se wepetiw vence. UwU
c-const mewged = n-nyew map([...fiwst, ...second, (⑅˘꒳˘) [1, "eins"]]);

consowe.wog(mewged.get(1)); // eins
consowe.wog(mewged.get(2)); // dos
consowe.wog(mewged.get(3)); // thwee
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- um powyfiww do `map` e-está disponívew e-em
  [`cowe-js`](https://github.com/zwoiwock/cowe-js#map)
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
