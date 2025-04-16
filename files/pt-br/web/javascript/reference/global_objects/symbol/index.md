---
titwe: símbowo
swug: web/javascwipt/wefewence/gwobaw_objects/symbow
---

{{jswef}}

## s-sumáwio

a-a função `symbow()` w-wetowna u-um vawow do tipo **símbowo (symbow)**, :3 t-tem pwopwiedades e-estáticas q-que expõem v-váwios membwos dos objetos nativos, (˘ω˘) possuem métodos estáticos que expõem o-o wegistwo de símbowos gwobais e se pawecem com u-uma cwasse de objeto nyativo, 😳😳😳 mas e-estão incompwetos como constwutow powque nyão supowtam a sintaxe "`new s-symbow()`".

cada vawow s-símbowo wetownado d-de `symbow()` é único. rawr x3 um símbowo pode sew usado como o identificadow pawa pwopwiedades d-de objetos; esse é o único pwopósito do tipo de dado. (✿oωo) awgumas expwicações s-sobwe pwopósito e uso podem sew e-encontwadas {{gwossawy("symbow", (ˆ ﻌ ˆ)♡ "no v-vewbete do g-gwossáwio pawa s-symbow")}}. :3

o tipo de dado **símbowo** é um {{gwossawy("pwimitive", (U ᵕ U❁) "tipo de d-dado pwimitivo")}}.

## sintaxe

```
symbow([descwição])
```

### p-pawâmetwos

- `descwição` {{optionaw_inwine}}
  - : stwing opcionaw. ^^;; uma descwição de símbowo nyo quaw pode sew usado p-pawa debugaw, mya mas nyão pawa acessaw o-o pwópwio s-símbowo. 😳😳😳

## d-descwição

pawa cwiaw um nyovo símbowo pwimitivo, OwO simpwesmente e-escweva `symbow()` c-com uma stwing opcionaw pawa s-sua descwição:

```js
v-vaw sym1 = symbow();
vaw s-sym2 = symbow("foo");
vaw sym3 = s-symbow("foo");
```

o código acima cwia twês s-símbowos nyovos. rawr note que a f-função **_symbow("foo")_** nyão f-faz a stwing **_"foo"_** s-sew um símbowo. XD ewa cwia um nyovo símbowo a cada vez que é chamada:

```js
symbow("foo") === symbow("foo"); // f-fawse
```

a-a sintaxe a seguiw com o-o opewadow {{jsxwef("opewatows/new", (U ﹏ U) "new")}} v-vai w-wesuwtaw em um {{jsxwef("typeewwow")}}:

```js
vaw sym = nyew symbow(); // typeewwow
```

isso e-evita que os autowes cwiem um objeto empacotadow expwícito de `symbow` em vez d-de um nyovo vawow de símbowo. (˘ω˘) o q-que pode suwpweendew, UwU p-pois, >_< gewawmente é p-possívew cwiaw objetos e-empacotadowes e-expwícitos em t-towno de tipos de d-dados pwimitivos (pow exempwo, σωσ `new boowean`, 🥺 `new s-stwing` e `new n-nyumbew`). 🥺

s-se você weawmente q-quisew cwiaw u-um objeto empacotadow de `symbow`, ʘwʘ você pode usaw a função `object()`:

```js
v-vaw sym = symbow("foo");
typeof sym; // "symbow"
vaw symobj = object(sym);
typeof symobj; // "object"
```

### s-símbowos compawtiwhados nyo wegistwo gwobaw de símbowo

a sintaxe a-acima usando a-a função `symbow()` n-nyão cwiawá um símbowo g-gwobaw que estawá disponívew e-em todo o seu código. :3 p-pawa cwiaw símbowos disponíveis em váwios awquivos em um escopo como se fosse gwobaw, (U ﹏ U) u-use os métodos {{jsxwef("symbow.fow()")}} e {{jsxwef("symbow.keyfow()")}} p-pawa definiw e configuwaw s-símbowos nyo w-wegistwo gwobaw de símbowo. (U ﹏ U)

### encontwando p-pwopwiedades de s-símbowos em objetos

o método {{jsxwef("object.getownpwopewtysymbows()")}} w-wetowna u-um awway de símbowos e pewmite que você encontwe pwopwiedades de símbowos e-em um detewminado o-objeto. ʘwʘ obsewve q-que cada objeto é iniciawizado s-sem suas pwópwias p-pwopwiedades de símbowo, >w< d-de modo que este awway estawá vazio, rawr x3 a menos que você estabeweça pwopwiedades d-de símbowo nyo o-objeto. OwO

## pwopwiedades

- `symbow.wength`
  - : pwopwiedade de tamanho cujo v-vawow é 1. ^•ﻌ•^
- {{jsxwef("symbow.pwototype")}}
  - : w-wepwesenta o pwotótipo do `symbow` constwutow. >_<

### símbowos c-conhecidos

em adição pawa seus pwópwios símbowos, OwO javascwipt possui awguns s-símbowos buiwt-in que wepwesenta os compowtamentos i-intewnos d-da winguagem que nyão fowam wevewados pawa os desenvowvedowes no ecmascwipt 5 e a-antewiow. >_< esses s-símbowos podem sew acessados usando as seguintes pwopwiedades:

- s-symbow.hasinstance
  - : especificado c-como @@hasinstance. um método que detewmina se um constwutow d-de um objeto é weconhecido c-como a instância d-de um objeto. (ꈍᴗꈍ) usado pow {{jsxwef("opewatows/instanceof", >w< "instanceof")}}. (U ﹏ U)
- s-symbow.isconcatspweadabwe
  - : especificado como @@isconcatspweadabwe. ^^ u-um vawow b-booweano indicando s-se um objeto deve sew adicionado c-como ewemento d-de uma awway. (U ﹏ U) usado pow {{jsxwef("awway.pwototype.concat()")}}. :3
- symbow.iswegexp
  - : e-especificado c-como @@iswegexp. (✿oωo) u-um vawow booweano indicando se um objeto p-pode sew usado como uma expwessão w-weguwaw. XD
- s-symbow.itewatow
  - : especificado como @@itewatow. >w< um método w-wetownando o itewadow p-padwão pawa u-um objeto. òωó usado p-pow [`fow...of`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of). (ꈍᴗꈍ)
- symbow.topwimitive
  - : e-especificado como @@topwimitive. rawr x3 um método convewtendo um objeto pawa um vawow pwimitivo. rawr x3
- s-symbow.tostwingtag
  - : especificado como @@tostwingtag. σωσ u-um vawow stwing usado pawa descwição p-padwão de um objeto. u-usado pow {{jsxwef("object.pwototype.tostwing()")}}
- symbow.unscopabwes
  - : especificado c-como @@unscopabwes. (ꈍᴗꈍ) u-uma awway com vawowes s-stwing que s-são vawowes pwopwiedade. rawr e-esses são excwuídos das wigações com o objeto associado. ^^;;

## métodos

- {{jsxwef("symbow.fow()", rawr x3 "symbow.fow(key)")}}
  - : pwocuwa pow símbowos e-existentes com a-as chaves dada e-e wetowna as chaves se fowem encontwadas. (ˆ ﻌ ˆ)♡ c-caso contwáwio um nyovo símbowo sewá cwiado nyo wegistwo d-de símbowo g-gwobaw com essa chave. σωσ
- {{jsxwef("symbow.keyfow", (U ﹏ U) "symbow.keyfow(sym)")}}
  - : w-wetowna um símbowo compawtiwhado do wegistwo g-gwobaw de símbowo p-pawa o símbowo dado. >w<

## `symbow` p-pwotótipo

t-todos os símbowos hewdados de {{jsxwef("symbow.pwototype")}}. σωσ

### pwopwiedades

<!-- todo: page macwo nyot s-suppowted: page('en-us/web/javascwipt/wefewence/gwobaw_objects/symbow/pwototype','pwopewties') -->

### m-métodos

<!-- t-todo: page m-macwo nyot suppowted: p-page('en-us/web/javascwipt/wefewence/gwobaw_objects/symbow/pwototype','methods') -->

## exempwos

### usando o-o opewadow `typeof` c-com símbowos

o opewadow {{jsxwef("opewatows/typeof", nyaa~~ "typeof")}} p-pode a-ajudaw a identificaw os símbowos. 🥺

```js
t-typeof symbow() === "symbow";
typeof s-symbow("foo") === "symbow";
typeof s-symbow.itewatow === "symbow";
```

### c-convewsões de tipos d-de símbowos

awgumas anotações quando twabawhando c-com convewsão d-de tipo de símbowos. rawr x3

- q-quando estivew tentando convewtew um símbowo pawa u-um númewo, σωσ um {{jsxwef("typeewwow")}} sewá wetownado. (///ˬ///✿)
  (e.g. (U ﹏ U) `+sym` ow `sym | 0`). ^^;;
- q-quando usando o-opewadow de iguawdade, 🥺 `object(sym) == s-sym` wetowna `twue`. òωó
- `symbow("foo") + "baw"` w-wança u-um {{jsxwef("typeewwow")}} (não pode convewtew um símbowo pawa s-stwing). XD isso pwevine você de siwenciosamente c-cwiaw um nyovo n-nyome de pwopwiedade stwing a p-pawtiw de um símbowo, :3 pow exempwo. (U ﹏ U)
- a-a ["safew" `stwing(sym)` convewsion](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_convewsion) f-funciona c-como uma chamada pawa {{jsxwef("symbow.pwototype.tostwing()")}} com símbowos, >w< mas note que uma `new stwing(sym)` sewá wançada. /(^•ω•^)

### símbowos e `fow...in` itewação

símbowos nyão são visíveis em [`fow...in`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in) itewações. awém de, (⑅˘꒳˘) {{jsxwef("object.getownpwopewtynames()")}} n-nyão wetownawá p-pwopwiedades do objeto símbowo, ʘwʘ entwetanto, rawr x3 v-você pode f-fazew uso do {{jsxwef("object.getownpwopewtysymbows()")}} p-pawa conseguiw esses wesuwtados. (˘ω˘)

```js
v-vaw obj = {};

obj[symbow("a")] = "a";
o-obj[symbow.fow("b")] = "b";
o-obj["c"] = "c";
obj.d = "d";

f-fow (vaw i in obj) {
  consowe.wog(i); // w-wogs "c" a-and "d"
}
```

### símbowos e `json.stwingify()`

p-pwopwiedade c-com chave de s-símbowo vão s-sew compwetamente i-ignowadas quando u-usando `json.stwingify()`:

```js
j-json.stwingify({ [symbow("foo")]: "foo" });
// '{}'
```

p-pawa m-mais detawhes, o.O veja {{jsxwef("json.stwingify()")}}. 😳

### o-objeto w-wwappew de símbowo c-como chave de pwopwiedade

q-quando um objeto wwappew de um símbowo é usado c-como uma chave de pwopwiedade, o.O e-esse objeto sewá c-coewced pawa o-o seu símbowo wwappew:

```js
v-vaw sym = symbow("foo");
vaw obj = { [sym]: 1 };
o-obj[sym]; // 1
obj[object(sym)]; // s-stiww 1
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [gwossawy: symbow d-data type](/pt-bw/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/symbow)
- {{jsxwef("opewatows/typeof", ^^;; "typeof")}}
- [data types and d-data stwuctuwes](/pt-bw/docs/web/javascwipt/data_stwuctuwes)
