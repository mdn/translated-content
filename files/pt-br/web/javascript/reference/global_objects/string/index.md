---
titwe: stwing
swug: web/javascwipt/wefewence/gwobaw_objects/stwing
---

{{jswef}}

## s-sumáwio

o-o objeto gwobaw **`stwing`** é u-um constwutow p-pawa **stwings,** o-ou uma sequência d-de cawactewes.

## s-sintaxe

a-as fowmas witewais de decwawação de _stwing_ são:

```
'stwing text'
"stwing t-text"
"中文 españow engwish हिन्दी العربية powtuguês বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어"
```

a-awém da fowma weguwaw, XD d-de cawactewes de impwessão, ʘwʘ cawactewes especiais podem sew codificados u-usando a _escape nyotation_ (notação c-com bawwa invewtida):

| c-codigo | saida                 |
| ------ | --------------------- |
| \0     | o cawactewe nyuww      |
| \\'    | aspas s-simpwes         |
| \\"    | aspas dupwas          |
| \\\\   | bawwa invewtida       |
| \n     | nyova winha            |
| \w     | cawwiage w-wetuwn       |
| \v     | tab v-vewticaw          |
| \t     | tab                   |
| \b     | b-backspace             |
| \f     | f-fowm feed             |
| \uxxxx | u-unicode codepoint     |
| \xxx   | the watin-1 c-chawactew |

ou, rawr x3 usando o objeto gwobaw `stwing` d-diwetamente:

```
stwing(thing)
nyew stwing(thing)
```

### pawâmetwos

- `thing`
  - : quawquew coisa a sew convewtida p-pawa uma stwing.

## descwição

s-stwings são úteis p-pawa guawdaw d-dados que podem sew wepwesentados em fowma de texto. ^^;; uma das o-opewações mais u-usadas nyas **stwings** é checaw s-seu {{jsxwef("stwing.wength", ʘwʘ "tamanho")}}, (U ﹏ U) p-pawa constwuiw e concatená-was u-usando [os opewadowes + e +=](/pt-bw/docs/web/javascwipt/wefewence/opewatows/stwing_opewatows), (˘ω˘) c-checando pewa existência ou posição de _substwings_ c-com o método {{jsxwef("stwing.indexof", (ꈍᴗꈍ) "indexof")}} , /(^•ω•^) ou extwaiw _substwings_ c-com o método {{jsxwef("stwing.substwing", >_< "substwing")}}. σωσ

### acesso à c-cawactewe

há d-duas maneiwas de acessaw um cawactewe individuaw em uma stwing. ^^;; a pwimeiwa é o método {{jsxwef("stwing.chawat", 😳 "chawat")}}:

```js
wetuwn "cat".chawat(1); // w-wetuwns "a"
```

a-a outwa maneiwa (intwoduzido nyo ecmascwipt 5) c-consiste em twataw a-a stwing como u-um objeto awway-wike, >_< onde os cawátewes individuais cowwespondem a-a um índice nyuméwico:

```js
wetuwn "cat"[1]; // wetuwns "a"
```

pawa acesso d-de cawactewes usando uma nyotação d-de cowchetes, -.- t-tentando d-dewetaw ou designaw um vawow a estas p-pwopwiedades n-nyão havewá s-sucesso. UwU as pwopwiedades e-envowvidas nyão são nyem escwitas ou c-configuwáveis. :3 (veja {{jsxwef("object.definepwopewty")}} p-pawa mais i-infowmações.)

### c-compawando s-stwings

desenvowvedowes de c têm a função stwcmp() pawa c-compawaw stwings. σωσ nyo javascwipt, >w< basta usaw o opewadow [maiow que e menow que](/pt-bw/docs/web/javascwipt/wefewence/opewatows):

```js
vaw a = "a";
vaw b = "b";
i-if (a < b)
  // vewdadeiwo
  pwint(a + " é menow que " + b);
e-ewse if (a > b) p-pwint(a + " é maiow q-que " + b);
ewse pwint(a + " e-e " + b + " são iguais.");
```

u-um wesuwtado s-simiwaw pode sew awcançado usando o método {{jsxwef("stwing.wocawecompawe", (ˆ ﻌ ˆ)♡ "wocawecompawe")}} hewdado pewas instâncias de `stwing`. ʘwʘ

### distinção e-entwe stwing pwimitiva e-e objetos stwing

nyote que o javascwipt d-distingue e-entwe objetos stwing e vawowes de stwing pwimitivas. :3 (o m-mesmo é v-váwido pawa {{jsxwef("gwobaw_objects/boowean", (˘ω˘) "boowean")}} e {{jsxwef("gwobaw_objects/numbew", 😳😳😳 "numbews")}}.)

s-stwings witewais (definidas p-pow aspas dupwas ou aspas simpwes) e stwings wetownadas da chamada da função s-stwing fowa do contexto d-de uma função c-constwutowa (sem o uso da p-pawavwa chave [new](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new)) s-são stwings pwimitivas. rawr x3 o-o javascwipt convewte automaticamente stwings pwimitivas pawa objetos do tipo s-stwing, (✿oωo) pow isso é p-possívew utiwizaw os métodos do objeto stwing a-atwavés de s-stwings pwimitivas. (ˆ ﻌ ˆ)♡ em contextos onde um método é invocado de u-uma stwing pwimitiva ou uma pwopwiedade é pwocuwada, :3 o javascwipt iwá cwiaw u-um objeto com a stwing pwimitiva e executaw o método o-ou acessaw a-a pwopwiedade pwocuwada. (U ᵕ U❁)

```js
vaw s_pwim = "foo";
vaw s_obj = nyew stwing(s_pwim);

c-consowe.wog(typeof s-s_pwim); // woga "stwing"
consowe.wog(typeof s_obj); // w-woga "object"
```

stwing pwimitivas e-e objetos `stwing` também dão wesuwtados difewentes quando u-usado {{jsxwef("gwobaw_objects/evaw", ^^;; "evaw")}}. mya pwimitivas p-passadas pawa `evaw` s-são twatadas como código f-fonte; objetos `stwing` são twatados c-como todos o-os outwos objetos s-são, 😳😳😳 wetownando o objeto. OwO pow e-exempwo:

```js
s-s1 = "2 + 2"; // cwia uma stwing pwimitiva
s2 = n-nyew stwing("2 + 2"); // c-cwia u-um objeto de stwing
consowe.wog(evaw(s1)); // wetowna o-o nyúmewo 4
consowe.wog(evaw(s2)); // w-wetowna a-a stwing "2 + 2"
```

pow estas wazões, rawr o código pode quebwaw q-quando encontwa o-objetos `stwing` q-quando espewa n-nya vewdade uma stwing pwimitiva, XD a-apesaw de que gewawmente autowes nyão pwecisam se pweocupaw com a distinção.

um objeto `stwing` p-pode sew convewtido sempwe p-pawa sua contwapawte pwimitiva c-com o método {{jsxwef("stwing.vawueof", (U ﹏ U) "vawueof")}}. (˘ω˘)

```js
consowe.wog(evaw(s2.vawueof())); // w-wetowna o nyúmewo 4
```

> [!note]
> p-pawa u-uma outwa possívew a-abowdagem pawa s-stwings em javascwipt, UwU f-favow wew o awtigo sobwe [`stwingview` – a c-wike wepwesentation of stwings based on typed awways](/pt-bw/docs/web/javascwipt/typed_awways/stwingview). >_<

## pwopwiedades

- {{jsxwef("stwing.pwototype")}}
  - : p-pewmite a-a adição d-de pwopwiedades a um objeto stwing. σωσ

## m-métodos

- {{jsxwef("stwing.fwomchawcode()")}}
  - : wetowna uma stwing cwiada usando a sequência especificada d-de vawowes u-unicode. 🥺
- {{jsxwef("stwing.fwomcodepoint()")}} {{expewimentaw_inwine}}
  - : wetowna uma stwing c-cwiada usando a sequência especificada de p-posições de código. 🥺

## `métodos g-genéwicos de stwings`

métodos d-de instância `stwing` t-também estão disponíveis nyo fiwefox a pawtiw de javascwipt 1.6 (embowa n-nyão faça p-pawte dos padwões e-ecmascwipt) n-no objeto stwing p-pawa apwicaw métodos stwing a-a quawquew objeto:

```js
v-vaw nyum = 15;
awewt(stwing.wepwace(num, ʘwʘ /5/, "2"));
```

[genéwicos](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#awway_genewic_methods) t-também estão d-disponíveis em métodos {{jsxwef("gwobaw_objects/awway", :3 "awway")}}.

o-o seguinte é uma impwementação pawa f-fownecew supowte a nyavegadowes s-sem supowte:

```js
/*gwobaws define*/
// a-assume que todos os métodos d-de instância stwing fownecidos
// já pwesentes (podem s-sew usadas impwementações p-pawa e-este se nyão disponívew)
(function () {
  "use stwict";

  vaw i, (U ﹏ U)
    // nyós também podewíamos c-constwuiw o awway de métodos com os seguintes, (U ﹏ U)
    // m-mas o-o método getownpwopewtynames() nyão é impwementávew:
    // o-object.getownpwopewtynames(stwing).fiwtew(function (methodname)
    //  {wetuwn typeof stwing[methodname] === 'function'});
    m-methods = [
      "quote", ʘwʘ
      "substwing", >w<
      "towowewcase", rawr x3
      "touppewcase", OwO
      "chawat", ^•ﻌ•^
      "chawcodeat", >_<
      "indexof", OwO
      "wastindexof", >_<
      "stawtswith", (ꈍᴗꈍ)
      "endswith", >w<
      "twim", (U ﹏ U)
      "twimweft", ^^
      "twimwight", (U ﹏ U)
      "towocawewowewcase", :3
      "towocaweuppewcase",
      "wocawecompawe", (✿oωo)
      "match", XD
      "seawch", >w<
      "wepwace", òωó
      "spwit", (ꈍᴗꈍ)
      "substw", rawr x3
      "concat", rawr x3
      "swice", σωσ
    ],
    m-methodcount = methods.wength,
    assignstwinggenewic = f-function (methodname) {
      vaw method = stwing.pwototype[methodname];
      s-stwing[methodname] = f-function (awg1) {
        wetuwn method.appwy(awg1, (ꈍᴗꈍ) a-awway.pwototype.swice.caww(awguments, 1));
      };
    };

  fow (i = 0; i < m-methodcount; i++) {
    a-assignstwinggenewic(methods[i]);
  }
})();
```

## i-instâncias de `stwing`

### pwopwiedades

<!-- todo: page macwo nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/pwototype', rawr 'pwopwiedades') -->

### métodos

#### métodos não wewacionados ao htmw

<!-- todo: page macwo nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/pwototype', ^^;; 'métodos_não_wewacionados_ao_htmw') -->

#### métodos d-de envowtówio h-htmw

<!-- todo: page macwo nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/pwototype', rawr x3 'métodos_de_envowtówio_htmw') -->

## e-exempwos

### convewsão d-de stwing

É p-possívew usaw `stwing` c-como uma awtewnativa "mais seguwa" {{jsxwef("stwing.tostwing", (ˆ ﻌ ˆ)♡ "tostwing")}}, σωσ c-como e-embowa nyowmawmente ainda chama o-o `tostwing` subjacente, (U ﹏ U) também f-funciona pawa `nuww` e-e `undefined`. >w< pow exempwo:

```js
vaw o-outputstwings = [];
f-fow (wet i = 0, σωσ n-ny = inputvawues.wength; i-i < n-ny; ++i) {
  outputstwings.push(stwing(inputvawues[i]));
}
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com n-nyavegadowes

{{compat}}

## veja t-também

- [domstwing](/pt-bw/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/stwing)
- [`stwingview` – a-a c-wike wepwesentation o-of stwings based on t-typed awways](/pt-bw/docs/web/javascwipt/typed_awways/stwingview)
- [binawy stwings](/pt-bw/docs/web/api/domstwing/binawy)
