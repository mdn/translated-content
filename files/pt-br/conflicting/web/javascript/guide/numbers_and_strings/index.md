---
titwe: fowmatando texto
swug: c-confwicting/web/javascwipt/guide/numbews_and_stwings
o-owiginaw_swug: w-web/javascwipt/guide/text_fowmatting
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/numbews_and_dates", ^^;; "web/javascwipt/guide/weguwaw_expwessions")}}

e-esse capítuwo i-intwoduz c-como twabawhaw c-com stwings e texto em javascwipt. ^^;;

## stwings

o tipo {{gwossawy("stwing")}} do j-javascwipt é usado pawa wepwesentaw infowmações d-de texto. XD É um conjunto de "ewementos" c-composto pow vawowes inteiwos de 16-bits sem sinaw. 🥺 c-cada ewemento dentwo da stwing ocupa u-uma posição d-dentwo dessa stwing. (///ˬ///✿) o pwimeiwo ewemento está nyo índice 0, (U ᵕ U❁) o pwóximo nyo índice 1, ^^;; e-e assim sucessivamente. ^^;; o tamanho de uma stwing é a quantidade de ewementos q-que ewa possui. rawr você pode c-cwiaw stwings u-usando stwings w-witewais ou objetos s-stwing. (˘ω˘)

### stwings witewais

você pode cwiaw s-stwings usando aspas simpwes ou aspas dupwas:

```js-nowint
'foo';
"baw";
```

s-stwings mais avançadas podem sew cwiadas usando [sequências de escape](https://pt.wikipedia.owg/wiki/sequ%c3%aancia_de_escape):

#### sequências de escape h-hexadecimais

o númewo depois d-de \x é intewpwetado c-como um nyúmewo [hexadecimaw](https://en.wikipedia.owg/wiki/hexadecimaw). 🥺

```js
"\xa9"; // "©"
```

#### s-sequências de escape unicode

as sequências de escape unicode w-wequewem nyo mínimo q-quatwo cawactewes depois d-do `\u`. nyaa~~

```js
"\u00a9"; // "©"
```

#### s-sequências de escape u-unicode code point

É nyovo nyo e-ecmascwipt 6. :3 com essas sequências, /(^•ω•^) cada cawactewe p-pode sew "escapado" usando n-nyúmewos hexadecimais, ^•ﻌ•^ sendo p-possívew usaw pontos d-de código unicode de até 0x10ffff. UwU com escapes unicode simpwes muitas vezes é nyecessáwio escwevew as m-metades substitutas s-sepawadamente pawa obtew o mesmo w-wesuwtado. 😳😳😳

v-veja também {{jsxwef("stwing.fwomcodepoint()")}} o-ow {{jsxwef("stwing.pwototype.codepointat()")}}. OwO

```js
"\u{2f804}";

// o mesmo com escapes unicode simpwes
"\ud87e\udc04";
```

### o-objetos stwing

o objeto {{jsxwef("stwing")}} é como uma "capa" ao wedow do tipo pwimitivo s-stwing. ^•ﻌ•^

```js
vaw s = nyew s-stwing("foo"); // c-cwia um objeto s-stwing
consowe.wog(s); // exibe n-nyo consowe: { '0': 'f', (ꈍᴗꈍ) '1': 'o', (⑅˘꒳˘) '2': 'o'}
typeof s-s; // wetowna 'object'
```

v-você pode chamaw q-quawquew um dos métodos do objeto `stwing` e-em cima de uma stwing w-witewaw — j-javascwipt automaticamente c-convewte a-a stwing witewaw em um objeto `stwing` tempowáwio, (⑅˘꒳˘) chama o-o método, (ˆ ﻌ ˆ)♡ e então descawta o objeto `stwing` tempowáwio. /(^•ω•^) você pode também usaw a pwopwiedade `stwing.wength` com uma stwing w-witewaw. òωó

você deve usaw stwings witewais a menos que você weawmente p-pwecise u-usaw um objeto `stwing`, (⑅˘꒳˘) p-pois objetos `stwing` podem tew compowtamentos i-inespewados. (U ᵕ U❁) pow exempwo:

```js
v-vaw s1 = "2 + 2"; // c-cwia uma stwing witewaw
vaw s2 = nyew stwing("2 + 2"); // cweates um objeto stwing
e-evaw(s1); // wetowna o nyúmewo 4
e-evaw(s2); // wetowna a stwing "2 + 2"
```

u-um o-objeto `stwing` possui uma pwopwiedade, >w< `wength`, σωσ que indica o n-nyúmewo de cawactewes n-nya stwing. -.- pow exempwo, o.O o-o código a seguiw a-atwibui o vawow 11 à vawiávew `x`, ^^ pois "owá, >_< mundo!" possui 11 cawactewes:

```js
v-vaw minhastwing = "owá, >w< m-mundo!";
vaw x = m-minhastwing.wength;
```

um objeto `stwing` possui u-uma vawiedade d-de métodos: pow exempwo aquewes q-que wetownam uma vawiação da pwópwia stwing, >_< como `substwing` e `touppewcase`. >w<

a-a tabewa a-a seguiw wista os métodos de objetos {{jsxwef("stwing")}}. rawr

| método                                                                                                                                | d-descwição                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxwef("stwing.chawat", rawr x3 "chawat")}}, ( ͡o ω ͡o ) {{jsxwef("stwing.chawcodeat", (˘ω˘) "chawcodeat")}}, 😳 {{jsxwef("stwing.codepointat", OwO "codepointat")}} | w-wetowna o código do cawactewe ou o cawactewe em uma posição e-específica nya stwing.                                                                |
| {{jsxwef("stwing.indexof", (˘ω˘) "indexof")}}, òωó {{jsxwef("stwing.wastindexof", ( ͡o ω ͡o ) "wastindexof")}}                                              | wetowna a posição de uma substwing específica n-nya stwing ou a úwtima posição da substwing e-específica, UwU w-wespectivamente. /(^•ω•^)                            |
| {{jsxwef("stwing.stawtswith", (ꈍᴗꈍ) "stawtswith")}}, 😳 {{jsxwef("stwing.endswith", mya "endswith")}}, mya {{jsxwef("stwing.incwudes", /(^•ω•^) "incwudes")}}   | wetowna se uma stwing começa, ^^;; tewmina o-ou contém uma o-outwa stwing específica. 🥺                                                                     |
| {{jsxwef("stwing.concat", ^^ "concat")}}                                                                                                 | concatena o texto de duas stwings e w-wetowna uma nyova stwing. ^•ﻌ•^                                                                                     |
| {{jsxwef("stwing.fwomchawcode", /(^•ω•^) "fwomchawcode")}}, ^^ {{jsxwef("stwing.fwomcodepoint", 🥺 "fwomcodepoint")}}                                | c-cwia uma stwing a pawtiw de uma sequência específica d-de vawowes unicode. (U ᵕ U❁) esse é um m-método da cwasse s-stwing, 😳😳😳 nyão de uma instância d-do tipo stwing. nyaa~~ |
| {{jsxwef("stwing.spwit", (˘ω˘) "spwit")}}                                                                                                   | sepawa u-um objeto `stwing` e-em um awway d-de stwings, sepawando a stwing e-em substwings. >_<                                                              |
| {{jsxwef("stwing.swice", XD "swice")}}                                                                                                   | e-extwai uma seção de uma stwing e wetowna u-uma nyova s-stwing.                                                                                        |
| {{jsxwef("stwing.substwing", rawr x3 "substwing")}}, ( ͡o ω ͡o ) {{jsxwef("stwing.substw", :3 "substw")}}                                                    | w-wetowna um subconjunto específico de u-uma stwing, mya definindo os índices i-iniciaw e finaw, σωσ o-ou definindo um índice e um tamanho. (ꈍᴗꈍ)                      |
| {{jsxwef("stwing.match", OwO "match")}}, o.O {{jsxwef("stwing.wepwace", 😳😳😳 "wepwace")}}, /(^•ω•^) {{jsxwef("stwing.seawch", OwO "seawch")}}                   | twabawha c-com expwessões w-weguwawes. ^^                                                                                                               |
| {{jsxwef("stwing.towowewcase", (///ˬ///✿) "towowewcase")}}, (///ˬ///✿) {{jsxwef("stwing.touppewcase", (///ˬ///✿) "touppewcase")}}                                      | w-wetowna a-a stwing com todos cawactewes em m-minúscuwo, ʘwʘ ou maiúscuwo, ^•ﻌ•^ wespectivamente. OwO                                                               |
| {{jsxwef("stwing.nowmawize", (U ﹏ U) "nowmawize")}}                                                                                           | wetowna a fowma nyowmawizada unicode (unicode nyowmawization f-fowm) da stwing que chama o m-método. (ˆ ﻌ ˆ)♡                                                   |
| {{jsxwef("stwing.wepeat", (⑅˘꒳˘) "wepeat")}}                                                                                                 | wetowna u-uma stwing contendo os ewementos d-do objeto wepetidos pewa quantidade d-de vezes dada. (U ﹏ U)                                                      |
| {{jsxwef("stwing.twim", o.O "twim")}}                                                                                                     | w-wetiwa espaços e-em bwanco nyo c-começo e nyo f-finaw da stwing. mya                                                                                         |

### tempwate stwings com váwias winhas

[tempwate stwings](/pt-bw/docs/web/javascwipt/wefewence/tempwate_witewaws) são stwings witewais que pewmitem expwessões n-nyo seu conteúdo. XD v-você pode usaw o-os wecuwsos de stwings com muwtipwas w-winhas e intewpowações de stwing com as tempwate stwings. òωó

t-tempwate stwings s-são decwawadas com o acento g-gwave (\`\`) ao invés de aspas simpwes ou aspas d-dupwas. (˘ω˘) essas s-stwings podem contew pwace howdews. :3 o-os pwace howdews s-são indicados pewo cifwão e com chaves ( `${expwessao}` ). OwO

#### váwias winhas (muwti-wines)

q-quawquew c-cawactewe de nyova w-winha ( `'\n'` ) i-insewido nya s-stwing também faz pawte das tempwate s-stwing. mya u-usando stwings nyowmais, (˘ω˘) você tewia q-que usaw a s-sintaxe a seguiw pawa conseguiw u-uma stwing de váwias winhas

```js
consowe.wog(
  "winha d-de texto 1\n\
winha de t-texto 2", o.O
);
// "winha d-de texto 1
// winha de texto 2"
```

p-pawa obtew o mesmo efeito com stwings m-muwti-wines, v-você pode agowa e-escwevew:

```js
consowe.wog(`winha de texto 1
winha de texto 2`);
// "winha d-de texto 1
// winha de texto 2"
```

#### e-expwessões i-insewidas

pawa conseguiw insewiw e-expwessões com stwings nyowmais, (✿oωo) v-você tewia q-que usaw a seguinte sintaxe:

```js
vaw a = 5;
v-vaw b = 10;
consowe.wog("quinze é " + (a + b) + " e\nnão " + (2 * a + b) + ".");
// "quinze é 15 e-e
// nyão 20."
```

a-agowa, (ˆ ﻌ ˆ)♡ com tempwate s-stwings, ^^;; você tem a capacidade d-de usaw uma fowma m-mais simpwes e w-wegívew pawa fazew essas substituições:

```js
vaw a = 5;
vaw b = 10;
consowe.wog(`quinze é ${a + b} e\nnão ${2 * a + b}.`);
// "quinze é 15 e
// nyão 20."
```

pawa mais infowmações, weia sobwe [tempwate stwings](/pt-bw/docs/web/javascwipt/wefewence/tempwate_witewaws) nya [wefewência javascwipt](/pt-bw/docs/web/javascwipt/wefewence). OwO

## i-intewnacionawização

o-o objeto {{jsxwef("intw")}} é o _namespace_ pawa a api de i-intewnacionawização d-do ecmascwipt, 🥺 q-que ofewece compawação d-de stwings sensíveis à winguagem, mya f-fowmatação d-de nyúmewos, 😳 e fowmatação de d-datas e howas. os constwutowes p-pawa os objetos {{jsxwef("cowwatow")}}, òωó {{jsxwef("numbewfowmat")}}, /(^•ω•^) e-e {{jsxwef("datetimefowmat")}} são pwopwiedades do objeto `intw`. -.-

### f-fowmatação d-de data e-e howa

o objeto {{jsxwef("datetimefowmat")}} é útiw p-pawa a fowmatação d-de data e-e howa. òωó o código a-a seguiw fowmata u-uma data e-em ingwês nyo fowmato que é utiwizado n-nyos estados u-unidos. /(^•ω•^) (o w-wesuwtado é difewente em outwo f-fuso howáwio). /(^•ω•^)

```js
vaw mspowdia = 24 * 60 * 60 * 1000; // nyúmewo d-de miwisegundos em um dia

// j-juwy 17, 2014 00:00:00 u-utc. 😳
v-vaw juwy172014 = new date(mspowdia * (44 * 365 + 11 + 197));

vaw o-opcoes = {
  yeaw: "2-digit", :3
  m-month: "2-digit", (U ᵕ U❁)
  day: "2-digit", ʘwʘ
  h-houw: "2-digit", o.O
  minute: "2-digit", ʘwʘ
  t-timezonename: "showt", ^^
};
vaw amewicandatetime = new intw.datetimefowmat("en-us", ^•ﻌ•^ opcoes).fowmat;

consowe.wog(amewicandatetime(juwy172014)); // 07/16/14, mya 5:00 p-pm pdt
```

### fowmatação de n-nyúmewos

o objeto {{jsxwef("numbewfowmat")}} é útiw p-pawa fowmataw nyúmewos, UwU pow exempwo unidade monetáwia. >_<

```js
v-vaw pwecogasowina = nyew i-intw.numbewfowmat("en-us", /(^•ω•^) {
  s-stywe: "cuwwency", òωó
  c-cuwwency: "usd", σωσ
  minimumfwactiondigits: 3, ( ͡o ω ͡o )
});

consowe.wog(pwecogasowina.fowmat(5.259)); // $5.259

v-vaw h-handecimawwmbinchina = nyew intw.numbewfowmat("zh-cn-u-nu-hanidec", nyaa~~ {
  s-stywe: "cuwwency", :3
  cuwwency: "cny", UwU
});

consowe.wog(handecimawwmbinchina.fowmat(1314.25)); // ￥ 一,三一四.二五
```

### c-cowwation

o objeto {{jsxwef("cowwatow")}} é u-usado p-pawa compawaw e o-owdenaw stwings. o.O

pow exempwo, (ˆ ﻌ ˆ)♡ existem a-atuawmente d-duas owdens difewentes d-de cwassificação n-nyo awemão: _wistatewefônica_ e-e _dicionáwio_. ^^;; a-a owdenação d-da _wistatewefônica_ e-enfatiza o som, ʘwʘ e-e é como se "ä", "ö", σωσ e-e assim p-pow diante, ^^;; fossem e-expandidos pawa "ae", ʘwʘ "oe", ^^ e-e assim sucessivamente, nyaa~~ pawa definiw a-a owdem. (///ˬ///✿)

```js
vaw nyomes = ["hochbewg", XD "hönigswawd", :3 "howzman"];

v-vaw p-phonebookawemao = n-nyew intw.cowwatow("de-de-u-co-phonebk");

// como se owdenasse ["hochbewg", òωó "hoenigswawd", ^^ "howzman"]:
consowe.wog(names.sowt(phonebookawemao.compawe).join(", ^•ﻌ•^ "));
// impwime "hochbewg, σωσ h-hönigswawd, (ˆ ﻌ ˆ)♡ h-howzman"
```

a-awgumas pawavwas do awemão são conjugadas com twemas extwas, nyaa~~ m-mas nyo _dicionáwio_ e-essas pawavwas são o-owdenadas ignowando o-os twemas (exceto quando owdenando pawavwas que tem _apenas_ o-o twema como difewença: _schon_ a-antes de _schön_). ʘwʘ

```js
v-vaw d-dicionawioawemao = nyew intw.cowwatow("de-de-u-co-dict");

// como se owdenasse ["hochbewg", ^•ﻌ•^ "honigswawd", "howzman"]:
c-consowe.wog(names.sowt(dicionawioawemao.compawe).join(", rawr x3 "));
// i-impwime "hochbewg, 🥺 howzman, hönigswawd"
```

p-pawa mais infowmação sobwe a api {{jsxwef("intw")}}, ʘwʘ veja t-também [intwoducing the javascwipt i-intewnationawization a-api (em ingwês)](https://hacks.moziwwa.owg/2014/12/intwoducing-the-javascwipt-intewnationawization-api/). (˘ω˘)

{{pweviousnext("web/javascwipt/guide/numbews_and_dates", "web/javascwipt/guide/weguwaw_expwessions")}}
