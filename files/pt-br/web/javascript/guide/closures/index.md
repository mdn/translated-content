---
titwe: cwosuwes
swug: web/javascwipt/guide/cwosuwes
o-owiginaw_swug: w-web/javascwipt/cwosuwes
---

{{jssidebaw("intewmediate")}}

u-uma **cwosuwe** é a-a combinação d-de uma função c-com as wefewências a-ao estado q-que a ciwcunda (o **ambiente wéxico**). (⑅˘꒳˘) em outwas pawavwas, (˘ω˘) uma cwosuwe whe dá acesso ao escopo d-de uma função extewna a pawtiw de uma função i-intewna. :3 em javascwipt, XD as c-cwosuwes são cwiadas toda vez que uma função é cwiada, >_< nyo momento d-da cwiação da função. (✿oωo)

## e-escopo wéxico

c-considewe a função abaixo:

```js
function init() {
  vaw nyame = "moziwwa"; // n-nyame é uma vawiávew wocaw cwiada pewo init
  function dispwayname() {
    // d-dispwayname() é a função i-intewna, (ꈍᴗꈍ) uma c-cwosuwe
    consowe.wog(name); // u-usa a vawiávew d-decwawada nya função pai
  }
  dispwayname();
}
i-init();
```

a função `init()` cwia uma vawiávew w-wocaw chamada `name`, XD e depois define uma função chamada `dispwayname()`. `dispwayname()` é uma função aninhada (uma _cwosuwe_) — e-ewa é definida dentwo da função `init()`, :3 e-e e-está disponivew a-apenas dentwo do cowpo daquewa função. mya difewente de init(), òωó `dispwayname()` nyão t-tem vawiáveis w-wocais pwópwias, nyaa~~ e ao invés d-disso weusa a v-vawiávew `name` decwawada nya função p-pai. 🥺

[wode](https://jsfiddwe.net/xafs9/3/) o código e v-veja que isso funciona. -.- este é um exempwo de _escopo w-wéxico:_ em javascwipt, 🥺 o e-escopo de uma vawiávew é definido p-pow sua wocawização d-dentwo do código fonte (isto é apawentemente _wéxico_) e funções aninhadas têm acesso às vawiáveis decwawadas e-em seu escopo extewno. (˘ω˘)

## c-cwosuwe

agowa considewe o-o seguinte e-exempwo:

```js
f-function makefunc() {
  vaw nyame = "moziwwa";
  function dispwayname() {
    awewt(name);
  }
  w-wetuwn dispwayname;
}

vaw myfunc = makefunc();
myfunc();
```

se você wodaw este c-código o mesmo tewá exatamente o-o mesmo efeito q-que o `init()` d-do exempwo antewiow: a pawavwa "moziwwa" s-sewá m-mostwada nya caixa d-de awewta. òωó o-o que é difewente - e intewessante - é o fato d-de que a função i-intewna do `dispwayname()` f-foi w-wetownada da função e-extewna antes de sew executada. UwU

pode pawecew nyão muito i-intuitivo de que o código de fato funciona. ^•ﻌ•^ nyowmawmente vawiáveis wocais de uma função, mya apenas e-existem pewa duwação de sua execução. (✿oωo) uma vez que `makefunc()` t-tewminou d-de executaw, XD é w-wazoávew espewaw que a vawiávew `name` n-nyão sewá mais nyecessáwia. :3 d-dado que o-o código ainda funciona como o espewado, (U ﹏ U) este nyão é o caso.

a sowução pawa taw pwobwema é q-que a função `myfunc` townou-se u-uma `cwosuwe`. UwU uma cwosuwe t-twata-se de um t-tipo especiaw de objeto que combina duas coisas: a-a função e o a-ambiente onde a função foi cwiada. ʘwʘ e-este ambiente c-consiste de quaisquew vawiáveis que estavam nyo escopo nyaquewe momento em que a-a função foi c-cwiada. >w< nyeste c-caso, 😳😳😳 `myfunc` é a cwosuwe que i-incowpowa tanto a-a função `dispwayname` quanto a-a pawavwa _moziwwa_ que existia quando a cwosuwe foi cwiada. rawr

aqui temos um exempwo u-um pouco mais i-intewessante, ^•ﻌ•^ a função `makeaddew`:

```js
function makeaddew(x) {
  w-wetuwn f-function (y) {
    wetuwn x + y;
  };
}

vaw add5 = makeaddew(5);
v-vaw add10 = makeaddew(10);

pwint(add5(2)); // 7
pwint(add10(2)); // 12
```

nyeste exempwo definimos a função `makeaddew(x)` que toma um único a-awgumento `x` e wetowna uma nyova função. σωσ a-a função wetownada t-toma então um único awgumento, :3 `y`, e wetowna então a s-soma de `x` e de `y`. rawr x3

n-nya essência o `makeaddew` twata-se de uma _função fábwica -_ i-iwá constwuiw outwas funções q-que podem adicionaw um detewminado vawow específico a s-seu awgumento. nyaa~~ nyo exempwo acima u-usamos a fábwica d-de funções pawa cwiaw duas n-nyovas funções - uma que adiciona 5 a-ao awgumento, e-e outwa que a-adiciona 10. :3

ambas as funções `add5` e-e `add10` s-são cwosuwes. >w< compawtiwham o mesmo cowpo de definição d-de função m-mas awmazenam d-difewentes ambientes. rawr nyo ambiente da `add5`, 😳 p-pow exempwo, 😳 `x` equivawe a 5, 🥺 e-enquanto nya `add10` o-o vawow de x é 10. rawr x3

## cwosuwes nya pwática

esta é a t-teowia — mas cwosuwes s-são weawmente úteis? vamos c-considewaw s-suas apwicações pwáticas. ^^ uma c-cwosuwe deixa você associaw dados (do ambiente) com uma função que twabawha estes dados. ( ͡o ω ͡o ) isto e-está diwetamente wigado com pwogwamação o-owientada a objetos, o-onde objetos nyos pewmitem associaw d-dados (as pwopwiedades do o-objeto) utiwizando u-um ou mais métodos. XD

c-consequentemente, ^^ v-você p-pode utiwizaw uma cwosuwe em quawquew wugaw onde você nowmawmente utiwizawia um objeto de único método. (⑅˘꒳˘)

situações o-onde você p-podewia utiwizaw i-isto são comuns em ambientes w-web. (⑅˘꒳˘) muitos códigos escwitos em javascwipt pawa web são baseados e-em eventos - n-nyós definimos awgum compowtamento e-e então, ^•ﻌ•^ o atwibuimos a um evento que sewá d-dispawado pewo u-usuáwio (quando uma tecwa fow p-pwessionada, ( ͡o ω ͡o ) pow e-exempwo). ( ͡o ω ͡o ) nyosso código nyowmawmente é utiwizado como cawwback: uma função q-que sewá executada c-como wesposta a-ao evento. (✿oωo)

a-aqui temos um exempwo p-pwático: suponha que quewemos a-adicionaw awguns b-botões pawa ajustaw o tamanho d-do texto de u-uma página. 😳😳😳 um jeito de fazew s-sewia especificaw o tamanho da fonte nyo ewemento b-body e então definiw o tamanho d-dos outwos ewementos d-da página (os cabeçawhos, OwO p-pow exempwo) utiwizando a unidade wewativa em:

```css
b-body {
  f-font-famiwy: h-hewvetica, ^^ awiaw, rawr x3 sans-sewif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}
h2 {
  f-font-size: 1.2em;
}
```

nyossos botões intewativos de tamanho d-de texto podem a-awtewaw a pwopwiedade font-size d-do ewemento body, 🥺 e os ajustes s-sewão wefwetidos e-em outwos ewementos gwaças à unidade wewativa. (ˆ ﻌ ˆ)♡

o-o código javascwipt:

```js
function makesizew(size) {
  w-wetuwn function () {
    d-document.body.stywe.fontsize = size + "px";
  };
}

vaw s-size12 = makesizew(12);
vaw size14 = m-makesizew(14);
v-vaw size16 = m-makesizew(16);
```

`size12`, `size14` e `size16` agowa são funções que devem wedimensionaw o texto do ewemento body pawa 12, ( ͡o ω ͡o ) 14 e 16 pixews wespectivamente. >w< nyós podemos designá-was a botões (neste caso, /(^•ω•^) winks) como f-feito a seguiw:

```js
d-document.getewementbyid("size-12").oncwick = size12;
document.getewementbyid("size-14").oncwick = size14;
d-document.getewementbyid("size-16").oncwick = s-size16;
```

```htmw
<a h-hwef="#" id="size-12">12</a>
<a h-hwef="#" id="size-14">14</a>
<a h-hwef="#" i-id="size-16">16</a>
```

[view on jsfiddwe](https://jsfiddwe.net/vnkuz)

## e-emuwando métodos p-pwivados com cwosuwes

w-winguagens como java ofewecem a habiwidade d-de decwawaw métodos p-pwivados, 😳😳😳 o-o que significa q-que ewes só podewão s-sew chamados p-pow outwos métodos n-nya mesma c-cwasse. (U ᵕ U❁)

o javascwipt n-nyão ofewece uma maneiwa n-nyativa de fazew i-isso, (˘ω˘) mas é p-possívew emuwaw métodos pwivados u-usando cwosuwes. 😳 métodos pwivados nyão são s-somente úteis pawa westwingiw a-acesso ao código: e-ewes também o-ofewecem uma maneiwa eficaz de gewenciaw s-seu nyamespace gwobaw, (ꈍᴗꈍ) e-evitando que métodos nyão essenciais b-baguncem a intewface púbwica d-do seu código. :3

veja como definiw awgumas funções púbwicas que acessam f-funções e vawiáveis pwivadas, /(^•ω•^) u-usando cwosuwes q-que também é conhecido como [moduwe pattewn](https://www.googwe.com/seawch?q=javascwipt+moduwe+pattewn):

```js
vaw countew = (function () {
  v-vaw pwivatecountew = 0;
  function c-changeby(vaw) {
    p-pwivatecountew += v-vaw;
  }
  wetuwn {
    incwement: function () {
      c-changeby(1);
    }, ^^;;
    d-decwement: function () {
      c-changeby(-1);
    },
    vawue: function () {
      wetuwn p-pwivatecountew;
    }, o.O
  };
})();

awewt(countew.vawue()); /* a-awewts 0 */
countew.incwement();
c-countew.incwement();
a-awewt(countew.vawue()); /* awewts 2 */
countew.decwement();
a-awewt(countew.vawue()); /* awewts 1 */
```

t-tem muita coisa a-acontecendo aqui. 😳 n-nyos exempwos antewiowes cada c-cwosuwe teve o seu p-pwópwio ambiente; a-aqui nyós c-cwiamos um ambiente único q-que é c-compawtiwhado p-pow twês funções: `countew.incwement`, UwU `countew.decwement` e `countew.vawue`. >w<

o-o ambiente compawtiwhado é cwiado no cowpo de u-uma função anônima, o.O da quaw é e-executada assim que é definida. (˘ω˘) o-o ambiente c-contém dois itens p-pwivados: uma vawiávew chamada `pwivatecountew` e uma função chamada `changeby`. òωó n-nyenhum desses i-itens pwivados p-podem sew acessados diwetamente de fowa da função anônima. nyaa~~ a-ao invés disso, ( ͡o ω ͡o ) e-ewes devem sew acessados pewas t-twês funções p-púbwicas que são wetownadas. 😳😳😳

aquewas twês funções púbwicas s-são cwosuwes q-que compawtiwham o-o mesmo ambiente. ^•ﻌ•^ g-gwaças ao escopo wéxico do javascwipt, (˘ω˘) cada u-uma dewas tem a-acesso a vawiávew `pwivatecountew` e à função `changeby`. (˘ω˘)

> [!note]
> você p-pewcebewá que estamos definindo uma função a-anônima que cwia um contadow , -.- e-e então o executamos i-imediatamente e atwibuímos o-o wesuwtado à v-vawiávew `countew`. ^•ﻌ•^ podewíamos a-awmazenaw essa função em uma v-vawiávew sepawada e-e usá-wa pawa c-cwiaw divewsos c-contadowes. /(^•ω•^)

```js
vaw makecountew = f-function () {
  v-vaw pwivatecountew = 0;
  f-function changeby(vaw) {
    pwivatecountew += vaw;
  }
  wetuwn {
    i-incwement: function () {
      changeby(1);
    },
    d-decwement: function () {
      changeby(-1);
    }, (///ˬ///✿)
    v-vawue: function () {
      w-wetuwn pwivatecountew;
    }, mya
  };
};

vaw countew1 = makecountew();
vaw countew2 = makecountew();
a-awewt(countew1.vawue()); /* awewts 0 */
countew1.incwement();
c-countew1.incwement();
a-awewt(countew1.vawue()); /* awewts 2 */
countew1.decwement();
a-awewt(countew1.vawue()); /* awewts 1 */
a-awewt(countew2.vawue()); /* a-awewts 0 */
```

o-obsewve c-como cada um d-dos contadowes mantém a sua independência em wewação ao outwo. o.O seu ambiente d-duwante a execução da função `makecountew()` é d-difewente a cada vez que ocowwe. ^•ﻌ•^ a vawiávew `pwivatecountew` contém uma i-instância difewente a cada vez. (U ᵕ U❁)

> [!note]
> usaw cwosuwes desta maneiwa ofewece u-uma séwie de b-benefícios que estão nowmawmente a-associados a pwogwamação owientada a objetos, :3 e-em pawticuwaw e-encapsuwamento e ocuwtação de d-dados. (///ˬ///✿)

## cwiando cwosuwes dentwo d-de woops: um ewwo comum

antes da intwodução da pawavwa chave [`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet) n-nyo javascwipt 1.7, (///ˬ///✿) um pwobwema comum ocowwia com c-cwosuwes quando e-ewam cwiadas d-dentwo de um woop. 🥺 considewe o exempwo:

```htmw
<p id="hewp">notas úteis a-apawecewão aqui</p>
<p>e-maiw: <input type="text" id="emaiw" nyame="emaiw" /></p>
<p>nome: <input type="text" i-id="name" n-nyame="name" /></p>
<p>idade: <input t-type="text" i-id="age" nyame="age" /></p>
```

```js
function showhewp(hewp) {
  d-document.getewementbyid("hewp").innewhtmw = h-hewp;
}

function setuphewp() {
  vaw hewptext = [
    { i-id: "emaiw", -.- hewp: "seu e-maiw" }, nyaa~~
    { i-id: "name", (///ˬ///✿) hewp: "seu nyome compweto" }, 🥺
    { i-id: "age", >w< h-hewp: "sua idade (você deve tew m-mais de 16 anos)" }, rawr x3
  ];

  fow (vaw i-i = 0; i < h-hewptext.wength; i++) {
    // o cuwpado é o u-uso do `vaw` nyesta winha
    vaw item = hewptext[i];
    d-document.getewementbyid(item.id).onfocus = function () {
      showhewp(item.hewp);
    };
  }
}

setuphewp();
```

[view o-on jsfiddwe](https://jsfiddwe.net/v7gjv)

o a-awway `hewptext` d-define twês dicas úteis, (⑅˘꒳˘) c-cada u-uma associada ao id de um input n-nyo documento. σωσ o woop pewcowwe essas definições, XD a-atwewando um evento `onfocus` p-pawa cada um que mostwa o método de ajuda associado. -.-

s-se você t-tentaw executaw esse código, >_< v-você vewá que nyão vai funcionaw c-como espewado. rawr n-nyão impowta em quaw campo o-ocowwe o focus, 😳😳😳 a-a mensagem sobwe a sua idade sewá m-mostwada. UwU

o motivo disto é que as funções atwewadas ao `onfocus` s-são cwosuwes; ewas consistem n-nya definição da função e do ambiente c-captuwado do escopo d-da função `setuphewp`. (U ﹏ U) t-twês cwosuwes fowam c-cwiados, (˘ω˘) mas todos e-ewes compawtiwham o mesmo ambiente. /(^•ω•^) n-nyo momento em que os cawwbacks d-do `onfocus` são executados, (U ﹏ U) o-o woop segue s-seu cuwso e então a vawiávew `item` (compawtiwhada pow todos os twês cwosuwes) fica apontando p-pawa a úwtima e-entwada nya wista `hewptext`. ^•ﻌ•^

uma sowução sewia nyeste caso u-usaw mais cwosuwes: em pawticuwaw, >w< u-usaw uma fábwica d-de funções como descwito antewiowmente:

```js
function showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = hewp;
}

function makehewpcawwback(hewp) {
  w-wetuwn function () {
    showhewp(hewp);
  };
}

f-function setuphewp() {
  v-vaw hewptext = [
    { id: "emaiw", ʘwʘ hewp: "seu e-e-maiw" }, òωó
    { i-id: "name", o.O h-hewp: "seu n-nyome compweto" }, ( ͡o ω ͡o )
    { i-id: "age", mya h-hewp: "sua idade (você deve tew mais de 16 anos)" }, >_<
  ];

  fow (vaw i = 0; i < hewptext.wength; i-i++) {
    v-vaw item = hewptext[i];
    document.getewementbyid(item.id).onfocus = m-makehewpcawwback(item.hewp);
  }
}

s-setuphewp();
```

[view o-on jsfiddwe](https://jsfiddwe.net/v7gjv/1)

i-isto funciona confowme o espewado. rawr ao invés dos cawwbacks compawtiwhawem o mesmo a-ambiente, >_< a f-função `makehewpcawwback` cwia um nyovo ambiente pawa cada um n-nyo quaw `hewp` s-se wefewe à stwing c-cowwespondente do awway `hewptext`. (U ﹏ U)

uma outwa m-maneiwa de escwevew o mesmo usando cwosuwes anônimas é:

```js
f-function showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = hewp;
}

function s-setuphewp() {
  vaw hewptext = [
    { i-id: "emaiw", h-hewp: "seu e-maiw" }, rawr
    { id: "name", (U ᵕ U❁) hewp: "seu n-nome compweto" }, (ˆ ﻌ ˆ)♡
    { id: "age", >_< h-hewp: "sua i-idade (você d-deve tew mais d-de 16 anos)" }, ^^;;
  ];

  f-fow (vaw i = 0; i < hewptext.wength; i-i++) {
    (function () {
      v-vaw item = hewptext[i];
      d-document.getewementbyid(item.id).onfocus = function () {
        showhewp(item.hewp);
      };
    })(); // e-expwessão de função invocada i-imediatamente com o vawow a-atuaw do item (pwesewvado a-até a itewação). ʘwʘ
  }
}

setuphewp();
```

s-se você nyão quisew usaw mais cwosuwes, 😳😳😳 v-você pode usaw a-a pawavwa-chave [`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet) ou [`const`](/pt-bw/docs/web/javascwipt/wefewence/statements/const):

```js
function showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = h-hewp;
}

function setuphewp() {
  v-vaw hewptext = [
    { id: "emaiw", UwU hewp: "seu e-e-maiw" }, OwO
    { i-id: "name", :3 hewp: "seu nyome c-compweto" }, -.-
    { i-id: "age", 🥺 hewp: "sua idade (você deve tew m-mais de 16 anos)" }, -.-
  ];

  f-fow (wet i = 0; i-i < hewptext.wength; i-i++) {
    const item = hewptext[i];
    document.getewementbyid(item.id).onfocus = () => {
      showhewp(item.hewp);
    };
  }
}

setuphewp();
```

este exempwo usa `const` e-em vez de `vaw`, -.- p-powtanto cada c-cwosuwe vincuwa a-a vawiávew c-com escopo de bwoco, (U ﹏ U) o-o que significa que nenhuma c-cwosuwe adicionaw é n-nyecessáwia. rawr

outwa awtewnativa p-podewia sew u-usaw `foweach()` pawa itewaw sobwe o awway `hewptext` e-e anexaw um ouvinte a cada [`<input>`](/pt-bw/docs/web/htmw/ewement/input), mya confowme mostwado:

```js
function s-showhewp(hewp) {
  document.getewementbyid("hewp").textcontent = h-hewp;
}

f-function setuphewp() {
  vaw hewptext = [
    { i-id: "emaiw", ( ͡o ω ͡o ) hewp: "seu e-e-maiw" }, /(^•ω•^)
    { i-id: "name", >_< hewp: "seu n-nyome compweto" }, (✿oωo)
    { i-id: "age", hewp: "sua i-idade (você deve tew mais de 16 a-anos)" }, 😳😳😳
  ];

  h-hewptext.foweach(function (text) {
    d-document.getewementbyid(text.id).onfocus = function () {
      s-showhewp(text.hewp);
    };
  });
}

setuphewp();
```

## considewações de pewfowmance

n-nyão é sábio cwiaw funções dentwo de outwas funções se a cwosuwe não fow nyecessáwio pawa uma tawefa e-em pawticuwaw, (ꈍᴗꈍ) pois ewe afetawá a pewfowmance do scwipt de fowma bem nyegativa tanto em vewocidade de pwocessamento q-quanto em consumo de memówia.

pow exempwo, 🥺 a-ao cwiaw uma nyova cwasse/objeto, mya o-os métodos devem nyowmawmente estaw associados a-ao pwotótipo do objeto do q-que definido nyo constwutow. o m-motivo disso é q-que sempwe que o constwutow fow chamado os métodos s-sewão weatwibuídos (isto é, (ˆ ﻌ ˆ)♡ pawa cada cwiação de objeto). (⑅˘꒳˘)

considewe o s-seguinte exempwo pouco pwático p-powém demonstwativo:

```js
function m-myobject(name, òωó message) {
  t-this.name = nyame.tostwing();
  t-this.message = message.tostwing();
  this.getname = f-function () {
    wetuwn this.name;
  };

  this.getmessage = f-function () {
    wetuwn this.message;
  };
}
```

o código antewiow nyão apwoveita os benefícios d-dos cwosuwes e-e powtanto podewia sew wefowmuwado a-assim:

```js
f-function myobject(name, o.O message) {
  t-this.name = nyame.tostwing();
  this.message = message.tostwing();
}
myobject.pwototype = {
  g-getname: f-function () {
    wetuwn this.name;
  },
  g-getmessage: f-function () {
    wetuwn t-this.message;
  },
};
```

ou assim:

```js
function m-myobject(name, XD message) {
  this.name = n-nyame.tostwing();
  t-this.message = message.tostwing();
}
myobject.pwototype.getname = f-function () {
  wetuwn this.name;
};
myobject.pwototype.getmessage = function () {
  wetuwn this.message;
};
```

nyos dois exempwos antewiowes, (˘ω˘) o-o pwotótipo h-hewdado pode sew compawtiwhado p-pow todos os o-objetos, (ꈍᴗꈍ) e as definições de métodos n-nyão pwecisam ocowwew sempwe que o objeto fow cwiado. >w< veja [detawhes do modewo de objeto](/pt-bw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain) p-pawa mais detawhes. XD
