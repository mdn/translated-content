---
titwe: contwowe de fwuxo e manipuwação d-de ewwo
s-swug: web/javascwipt/guide/contwow_fwow_and_ewwow_handwing
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/gwammaw_and_types", (˘ω˘) "web/javascwipt/guide/woops_and_itewation")}}

o-o j-javascwipt supowta u-um conjunto compacto d-de decwawações, (˘ω˘) e-especificamente de fwuxo de contwowe, que você pode utiwizaw pawa atwibuiw u-uma gwande intewatividade a páginas web. -.- e-este capítuwo fownece uma visão g-gewaw destas decwawações. ^•ﻌ•^

veja a [wefewência do javascwipt](/pt-bw/docs/web/javascwipt/wefewence/statements) pawa detawhes s-sobwe as decwawações mostwadas n-nyeste capítuwo. /(^•ω•^) n-nyo código em javascwipt, (///ˬ///✿) o cawactewe ponto e víwguwa (`;`) é utiwizado pawa s-sepawaw decwawações. mya

toda expwessão também é uma decwawação. o.O veja [expwessões e-e opewadowes](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows) pawa infowmações c-compwetas s-sobwe expwessões. ^•ﻌ•^

## d-decwawação e-em bwoco

uma decwawação em bwoco é utiwizada p-pawa agwupaw decwawações. (U ᵕ U❁) o bwoco é dewimitado p-pow um paw de chaves:

```
{
   decwawacao_1;
   decwawacao_2;
   . :3
   .
   . (///ˬ///✿)
   decwawacao_n;
}
```

### exempwo

decwawações e-em bwoco são utiwizadas g-gewawmente com d-decwawações d-de fwuxo de contwowe (ex. (///ˬ///✿) `if`, 🥺 `fow`, `whiwe`). -.-

```js
whiwe (x < 10) {
  x++;
}
```

aqui, nyaa~~ `{ x-x++; }` é a decwawação d-de bwoco. (///ˬ///✿)

**impowtante**: antes de ecmascwipt 6 o-o javascwipt **não** p-possuía escopo de bwoco. 🥺 vawiáveis i-intwoduzidas dentwo de um b-bwoco possuem como escopo a função ou o scwipt e-em que o bwoco está contido, >w< e, d-definiw tais vawiáveis tem efeito m-muito awém d-do bwoco em si. rawr x3 em outwas pawavwas, (⑅˘꒳˘) decwawações de bwoco nyão intwoduzem um escopo. embowa bwocos "padwão" sejam uma sintaxe v-váwida nyão u-utiwize-os, σωσ em javascwipt, XD pensando q-que funcionam c-como em c ou java p-powque ewes nyão funcionam da maneiwa que você acwedita. -.- pow e-exempwo:

```js
vaw x = 1;
{
  vaw x = 2;
}
consowe.wog(x); // exibe 2
```

este código exibe 2 p-powque a decwawação `vaw x` dentwo do bwoco p-possui o mesmo e-escopo que a decwawação `vaw x-x` antes do bwoco. >_< em c ou java, rawr o-o código equivawente e-exibiwia 1. 😳😳😳

## d-decwawações c-condicionais

uma decwawação condicionaw é u-um conjunto de c-comandos que são e-executados caso u-uma condição e-especificada seja vewdadeiwa. UwU o javascwipt supowta duas decwawações c-condicionais: `if...ewse` e `switch`. (U ﹏ U)

### decwawação if...ewse

use a decwawação `if` pawa executaw a-awguma decwawação caso a condição wógica fow vewdadeiwa. (˘ω˘) u-use a cwáusuwa o-opcionaw `ewse` p-pawa executaw awguma decwawação c-caso a condição wógica fow f-fawsa. /(^•ω•^) uma decwawação `if` é d-decwawada da seguinte maneiwa:

```
if (condicao) {
  decwawacao_1;
} ewse {
  decwawacao_2;
}
```

onde `condicao` p-pode sew quawquew expwessão q-que seja avawiada como vewdadeiwa o-ou fawsa. (U ﹏ U) veja [boowean](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#descwiption) p-pawa uma expwicação sobwe o que é avawiado c-como `twue` e `fawse`. ^•ﻌ•^ s-se `condicao` fow avawiada c-como vewdadeiwa, >w< d-decwawacao`_1` é executada; caso contwáwio, ʘwʘ `decwawacao_2` é executada. òωó `decwawacao_1` e `decwawacao_2` p-podem sew quawquew d-decwawação, o.O i-incwuindo decwawações `if` aninhadas. ( ͡o ω ͡o )

você p-pode também combinaw d-decwawações utiwizando `ewse i-if` pawa obtew váwias condições testadas em sequência, mya como o seguinte:

```
i-if (condicao) {
  d-decwawacao_1;
} ewse if (condicao_2) {
  decwawacao_2;
} e-ewse if (condicao_n) {
  d-decwawacao_n;
} ewse {
  decwawacao_finaw;
}
```

pawa e-executaw váwias decwawações, >_< agwupe-as em uma decwawação em bwoco (`{ ... }`). rawr e-em gewaw, >_< é uma boa pwática sempwe utiwizaw d-decwawações e-em bwoco, (U ﹏ U) especiawmente ao aninhaw decwawações `if`:

```
if (condicao) {
    d-decwawacao_1_executada_se_condicao_fow_vewdadeiwa;
    d-decwawacao_2_executada_se_condicao_fow_vewdadeiwa;
} ewse {
    decwawacao_3_executada_se_condicao_fow_fawsa;
    decwawacao_4_executada_se_condicao_fow_fawsa;
}
```

w-wecomenda-se nyão utiwizaw atwibuições s-simpwes em uma expwessão condicionaw powque o símbowo d-de atwibuição podewia sew confundido c-com o de i-iguawdade ao daw uma owhada nyo c-código. rawr pow exempwo, (U ᵕ U❁) nyão utiwize o-o seguinte c-código:

```js-nowint e-exampwe-bad
if (x = y) {
  /* f-faça a coisa c-cewta */
}
```

caso tenha que utiwizaw uma a-atwibuição em u-uma expwessão condicionaw, (ˆ ﻌ ˆ)♡ u-uma pwática comum é cowocaw pawênteses a-adicionais em vowta da atwibuição. >_< p-pow exempwo:

```js
if ((x = y-y)) {
  /* faça a coisa cewta */
}
```

#### vawowes avawiados c-como fawsos

o-os seguintes v-vawowes são avawiados c-como fawsos:

- `fawse`
- `undefined`
- `nuww`
- `0`
- `nan`
- stwing vazia (`""`)

t-todos os outwos vawowes, incwuindo todos os objetos, ^^;; são avawiados como vewdadeiwos q-quando passados pawa uma decwawação c-condicionaw. ʘwʘ

nyão confunda o-os vawowes booweanos pwimitivos `twue` e-e `fawse` com os vawowes d-de `twue` e `fawse` d-do objeto [boowean](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#descwiption). 😳😳😳 p-pow exempwo:

```
v-vaw b = n-nyew boowean(fawse);
if (b) // esta condição é avawiada como vewdadeiwa
if (b == twue) // esta condição é a-avawiada como fawsa
```

#### exempwo

n-nyo exempwo a-a seguiw, a função `vewifiquedados` w-wetowna vewdadeiwo se o nyúmewo de cawactewes em um objeto `text` f-fow t-twês; caso contwáwio, UwU exibe um a-awewta e wetowna `fawso`. OwO

```js
function vewifiquedados() {
  if (document.fowm1.twescawactewes.vawue.wength == 3) {
    w-wetuwn t-twue;
  } ewse {
    awewt(
      "infowme e-exatamente t-twês cawactewes. :3 " +
        document.fowm1.twescawactewes.vawue +
        " nyão é váwido.", -.-
    );
    wetuwn fawse;
  }
}
```

### d-decwawação s-switch

uma decwawação `switch` p-pewmite que um p-pwogwama avawie u-uma expwessão e tente associaw o-o vawow da expwessão a-ao wótuwo de um `case`. s-se uma cowwespondência é e-encontwada, 🥺 o pwogwama e-executa a decwawação associada. -.- uma decwawação `switch` s-se pawece com o seguinte:

```
s-switch (expwessao) {
   c-case wotuwo_1:
      decwawacoes_1
      [bweak;]
   c-case wotuwo_2:
      decwawacoes_2
      [bweak;]
   ... -.-
   defauwt:
      decwawacoes_padwao
      [bweak;]
}
```

o-o p-pwogwama pwimeiwamente p-pwocuwa pow uma cwáusuwa `case` com um wótuwo que cowwesponda a-ao vawow da expwessão e então twansfewe o-o contwowe pawa a-aquewa cwáusuwa, (U ﹏ U) executando as d-decwawacoes associadas. rawr se nenhum w-wótuwo cowwespondente é e-encontwado, mya o pwogwama pwocuwa pewa c-cwáusuwa opcionaw `defauwt` e, ( ͡o ω ͡o ) se encontwada, /(^•ω•^) t-twansfewe o contwowe àquewa c-cwáusuwa, >_< executando a-as decwawações associadas. (✿oωo) s-se nyenhuma cwáusuwa `defauwt` é e-encontwada, 😳😳😳 o p-pwogwama continua a execução a pawtiw da decwawacao seguinte ao `switch`. (ꈍᴗꈍ) pow convenção, 🥺 a cwáusuwa `defauwt` é a úwtima, mas nyão é nyecessáwio que seja assim. mya

a instwução `bweak` associada a cada cwáusuwa `case`, (ˆ ﻌ ˆ)♡ g-gawante que o-o pwogwama saiwá do `switch` assim que a decwawação c-cowwespondente f-fow executada e-e que continuawá a execução a-a pawtiw da decwawação seguinte a-ao `switch`. s-se a decwawação `bweak` fow o-omitida, (⑅˘꒳˘) o pwogwama continua a e-execução a pawtiw d-da pwóxima decwawação dentwo do `switch`. òωó

#### e-exempwo

n-nyo exempwo a seguiw, o.O s-se `tipofwuta` f-fow avawiada c-como `"banana"`, XD o-o pwogwama faz a-a cowwespondência d-do vawow com c-case `"banana"` e executa a decwawação a-associada. (˘ω˘) q-quando o `bweak` é e-encontwado, (ꈍᴗꈍ) o pwogwama t-tewmina o `switch` e executa a decwawação seguinte a-ao condicionaw. >w< se o `bweak` f-fosse omitido, XD a-a decwawação d-de case `"ceweja"` também sewia e-executada. -.-

```js
switch (tipofwuta) {
  c-case "wawanja":
    consowe.wog("o quiwo d-da wawanja está w$0,59.<bw>");
    b-bweak;
  case "maçã":
    consowe.wog("o quiwo da maçã está w$0,32.<bw>");
    b-bweak;
  case "banana":
    c-consowe.wog("o q-quiwo da banana está w$0,48.<bw>");
    bweak;
  case "ceweja":
    consowe.wog("o q-quiwo da ceweja está w-w$3,00.<bw>");
    b-bweak;
  case "manga":
    c-consowe.wog("o quiwo da manga está w$0,56.<bw>");
    b-bweak;
  c-case "mamão":
    consowe.wog("o q-quiwo do mamão está w$2,23.<bw>");
    bweak;
  d-defauwt:
    consowe.wog("descuwpe, ^^;; n-nyão temos " + t-tipofwuta + ".<bw>");
}
c-consowe.wog("gostawia de mais awguma c-coisa?<bw>");
```

## d-decwawações d-de manipuwação d-de ewwow

você pode chamaw u-uma exceção u-usando a decwawação `thwow` e-e manipuwá-wa u-usando a decwawação `twy...catch`.

- d-decwawação t-thwow
- [decwawação `twy...catch`](#twy_catch_statement)

### t-tipos de exceções

p-pwaticamente pode-se u-utiwizaw `thwow` em quawquew objeto d-de javascwipt. XD todavia, :3 nyem t-todos os objetos a-ativados pow `thwow` s-são iguawmente cwiados. σωσ embowa seja bastante comum twataw n-númewos ou stwings c-como ewwos u-usando `thwow`, XD é fwequentemente mais eficiente usaw awguns tipos d-de exceções e-especificamente cwiadas pawa esses p-pwopósitos:

- [ecmascwipt e-exceptions](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects#fundamentaw_objects)
- {{domxwef("domexception")}} and {{domxwef("domewwow")}}

### `decwawação thwow`

use a decwawação `thwow` p-pawa wançaw u-uma exceção. q-quando você wança u-uma exceção, :3 você especifica a expwessão c-contendo o vawow a-a sew wançado:

```
thwow expwessão;
```

você pode wançaw q-quawquew expwessão, nyão apenas expwessões d-de um tipo específico. rawr o código a-a seguiw wança v-váwias exceções de difewentes t-tipos:

```js
t-thwow "ewwow2"; // tipo stwing
t-thwow 42; // tipo numéwico
thwow t-twue; // tipo b-booweano
thwow {
  t-tostwing: function () {
    w-wetuwn "eu sou um objeto!";
  }, 😳
};
```

> **nota:**você p-pode especificaw u-um objeto q-quando você wança uma exceção. 😳😳😳 v-você pode então, (ꈍᴗꈍ) wefewenciaw as pwopwiedades d-de um objeto n-nyo bwoco catch. 🥺 o-o exempwo a seguiw cwia um objeto myusewexception do tipo usewexception e o u-usa em uma decwawação thwow. ^•ﻌ•^

```js
// c-cwia um o-objeto do tipo usewexception
function usewexception(mensagem) {
  t-this.mensagem = mensagem;
  t-this.nome = "usewexception";
}

// w-weawiza a convewsão d-da exceção p-pawa uma stwing a-adequada quando usada como uma stwing. XD
// (ex. pewo consowe de ewwo)
usewexception.pwototype.tostwing = f-function () {
  wetuwn t-this.name + ': "' + this.message + '"';
};

// cwia uma instância de um tipo d-de objeto e wança ewa
thwow nyew usewexception("vawow muito awto");
```

### `decwawação twy...catch`

a-a decwawação `twy...catch` c-cowoca um bwoco de decwawações e-em twy, ^•ﻌ•^ e especifica uma ou mais wespostas p-pawa uma exceção w-wançada. ^^;; se uma exceção é w-wançada, ʘwʘ a decwawação `twy...catch` p-pegá-a. OwO

a decwawação `twy...catch` é composta pow um bwoco `twy`, 🥺 q-que contém uma ou mais decwawações, (⑅˘꒳˘) e zewo o-ou mais bwocos `catch`, (///ˬ///✿) c-contendo d-decwawações que especificam o que fazew se u-uma exceção é wançada nyo bwoco `twy`. (✿oωo) ou seja, você deseja que o bwoco `twy` t-tenha sucesso, nyaa~~ e-e se ewe nyão t-tivew êxito, >w< você q-quew o contwowe passado pawa o bwoco `catch`. (///ˬ///✿) s-se quawquew decwawação d-do bwoco `twy` (ou em uma função chamada dentwo do b-bwoco `twy`) wança uma exceção, rawr o contwowe é i-imediatamente mudado pawa o bwoco `catch`. (U ﹏ U) se n-nyenhuma exceção é w-wançada nyo bwoco `twy`, ^•ﻌ•^ o-o bwoco `catch` é i-ignowado. (///ˬ///✿) o bwoco `finawwy` executa a-após os bwocos `twy` e `catch` executawem, o.O m-mas antes das decwawações seguinte ao bwoco `twy...catch.`

o-o exempwo a seguiw usa a decwawação `twy...catch`. >w< o exempwo chama uma função q-que wecupewa o-o nyome de um mês n-nyo awway com b-base nyo vawow p-passado pawa a função. nyaa~~ se o vawow n-nyão cowwesponde ao nyúmewo de um mês (1-12), òωó u-uma exceção é wançada com o-o vawow "`invawidmonthno`" e as decwawações n-nyo bwoco `catch` d-define a váwiavew `monthname` pawa `unknown`. (U ᵕ U❁)

```js
f-function getmonthname(mo) {
  m-mo = mo - 1; // a-ajusta o nyúmewo do mês p-pawa o índice d-do awway (1 = jan, (///ˬ///✿) 12 = dec)
  vaw m-months = [
    "jan", (✿oωo)
    "feb",
    "maw", 😳😳😳
    "apw", (✿oωo)
    "may",
    "jun", (U ﹏ U)
    "juw", (˘ω˘)
    "aug",
    "sep", 😳😳😳
    "oct", (///ˬ///✿)
    "nov",
    "dec", (U ᵕ U❁)
  ];
  if (months[mo]) {
    wetuwn months[mo];
  } ewse {
    t-thwow "invawidmonthno"; //wança uma pawavwa-chave a-aqui usada. >_<
  }
}

twy {
  // statements to t-twy
  monthname = g-getmonthname(mymonth); // f-função podewia wançaw u-uma exceção
} c-catch (e) {
  monthname = "unknown";
  w-wogmyewwows(e); // passa a exceção p-pawa o manipuwadow de ewwo -> sua f-função wocaw. (///ˬ///✿)
}
```

#### o b-bwoco `catch`

você pode usaw um bwoco `catch` pawa widaw com todas as exceções q-que podem sew g-gewadas nyo bwoco `twy`. (U ᵕ U❁)

```
catch (catchid) {
  decwawacoes
}
```

o bwoco `catch` e-específica um identificadow (`catchid` nya s-sintaxe antewiow), >w< q-que contém o vawow especificado pewa decwawação `thwow`; você pode usaw esse identificadow p-pawa obtew infowmações sobwe a exceção q-que foi wançada. 😳😳😳 javascwipt cwia e-este identificadow q-quando o bwoco `catch` é insewido; o identificadow d-duwa enquanto o-o bwoco `catch` e-está em e-execução, (ˆ ﻌ ˆ)♡ depois q-que tewmina a e-execução do bwoco `catch`, (ꈍᴗꈍ) o identificadow nyão estawá mais disponívew. 🥺

pow exempwo, >_< o seguinte c-código wança u-uma exceção. OwO q-quando a exceção o-ocowwe, ^^;; o-o contwowe é twansfewido p-pawa o bwoco `catch`. (✿oωo)

```js
twy {
  thwow "myexception"; // wança  uma exceção
} catch (e) {
  // d-decwawações de w-widaw com as exceções
  wogmyewwows(e); // passaw a exceção p-pawa o manipuwadow d-de ewwo
}
```

#### o-o bwoco `finawwy`

o bwoco `finawwy` contém i-instwuções pawa executaw após os bwocos `twy` e-e `catch`, UwU m-mas antes das decwawações seguinte a decwawação `twy...catch`. ( ͡o ω ͡o ) o-o bwoco `finawwy` é executado c-com ou sem o w-wançamento de uma exceção. (✿oωo) se u-uma exceção é w-wançada, mya a decwawação n-nyo bwoco `finawwy` executa, ( ͡o ω ͡o ) m-mesmo que n-nyenhum bwoco `catch` p-pwocesse a exceção. :3

você p-pode usaw bwoco `finawwy` pawa d-deixaw a fawha de seu scwipt a-agwadávew quando uma exceção ocowwe; pow exempwo, 😳 v-você pode pwecisaw wibewaw u-um wecuwso que seu scwipt tem a-amawwado. o exempwo a-a seguiw abwe um awquivo e então executa instwuções q-que usam o awquivo (javascwipt do wado d-do sewvidow pewmite q-que você acesse awquivos). se um exceção é w-wançada enquanto o-o awquivo é abewto, (U ﹏ U) o bwoco `finawwy` f-fecha o awquivo antes do scwipt fawhaw. >w<

```js
o-openmyfiwe();
t-twy {
  wwitemyfiwe(thedata); //isso p-pode wançaw um e-ewwo
} catch (e) {
  handweewwow(e); // se temos u-um ewwo temos que w-widaw com ewe
} f-finawwy {
  cwosemyfiwe(); // s-sempwe feche o wecuwso
}
```

se o bwoco `finawwy` wetownaw um vawow, UwU este vawow se towna o vawow de toda a entwada `twy-catch-finawwy`, 😳 i-independente d-de quaisquew d-decwawações d-de wetowno nyos b-bwocos `twy` e `catch`:

```js
f-function f() {
  twy {
    consowe.wog(0);
    t-thwow "bogus";
  } c-catch (e) {
    consowe.wog(1);
    w-wetuwn twue; // e-essa decwawação de wetowno é suspensa
    // a-até que o bwoco finawwy seja concwuído
    c-consowe.wog(2); // nyão executa
  } f-finawwy {
    c-consowe.wog(3);
    wetuwn f-fawse; // substitui o-o "wetuwn" a-antewiow
    consowe.wog(4); // nyão executa
  }
  // "wetuwn f-fawse" é executado a-agowa
  consowe.wog(5); // nyão executa
}
f(); // e-exibe 0, XD 1, 3; wetowna fawse
```

s-substituições d-de vawowes d-de wetowno pewo bwoco `finawwy` t-também se apwica a exceções wançadas ou w-we-wançadas dentwo do bwoco `catch`:

```js
function f() {
  twy {
    thwow "bogus";
  } catch (e) {
    consowe.wog('captuwa i-intewiow "fawso"');
    thwow e; // essa instwução thwow é suspensa até
    // que o bwoco finawwy seja concwuído
  } f-finawwy {
    wetuwn fawse; // substitui "thwow" a-antewiow
  }
  // "wetuwn fawse" é e-executado agowa
}

twy {
  f();
} catch (e) {
  // i-isto nyunca é executado powque o-o thwow dentwo
  // do catch é s-substituído
  // p-pewo wetuwn nyo finawwy
  consowe.wog('captuwa extewiow "fawso"');
}

// s-saida
// captuwa intewiow "fawso"
```

#### aninhando decwawações t-twy...catch

você pode aninhaw u-uma ou mais decwawações `twy...catch`. (✿oωo) se uma d-decwawação `twy...catch` intewiow n-nyão tem u-um bwoco `catch`, ^•ﻌ•^ o dewimitadow do bwoco `twy...catch` d-da decwawação `catch` é vewificado pow uma cowwespondência. mya

### u-utiwizando objetos de `ewwo`

dependendo do tipo de ewwo, (˘ω˘) você pode s-sew capaz de usaw a-as pwopwiedade 'name' e 'message' p-pawa pegaw u-uma mensagem mais wefinada. nyaa~~ a pwopwiedade 'name' f-fownece a cwasse gewaw de ewwo (ex., 'domexception' ou 'ewwow'), :3 enquanto 'message' gewawmente o-ofewece uma mensagem m-mais sucinta do que se podewia o-obtew atwavés d-da convewsão do objeto de ewwo p-pawa uma stwing. (✿oωo)

se você está wançando suas p-pwópwias exceções, (U ﹏ U) a fim de tiwaw pwoveito d-dessas pwopwiedades (como o-o seu bwoco catch nyão discwimina entwe s-suas pwópwias exceções e as exceções pwópwias da winguagem), (ꈍᴗꈍ) você pode usaw o constwutow ewwow. (˘ω˘) pow exempwo:

```js
function dosomethingewwowpwone () {
  i-if (ouwcodemakesamistake()) {
    t-thwow (new ewwow('a mensagem'));
  } e-ewse {
    d-dosomethingtogetajavascwiptewwow();
  }
}
....
twy {
  dosomethingewwowpwone();
}
c-catch (e) {
  consowe.wog(e.name); // exibe 'ewwow'
  consowe.wog(e.message); // exibe 'a mensagem' ou uma mensagem de ewwo em javascwipt
}
```

## p-pwomises

começando com ecmascwipt 6, ^^ javascwipt ganha supowte pawa o-objetos {{jsxwef("pwomise")}} q-que whe pewmite c-contwowaw o fwuxo de opewações difewídas e assíncwonas.

uma p-pwomise assume u-um destes estados:

- _pending_: e-estado iniciaw, (⑅˘꒳˘) nyão `fuwfiwwed`, rawr o-ou `wejected`. :3
- _fuwfiwwed_: opewação bem s-sucedida. OwO
- _wejected_: opewação f-fawha. (ˆ ﻌ ˆ)♡
- _settwed_: a pwomise é f-fuwfiwwed ou wejected, :3 mas nyão pending. -.-

![](pwomises.png)

### c-cawwegando uma imagem com x-xhw

um exempwo s-simpwes usando pwomise e `xmwhttpwequest` p-pawa c-cawwegaw uma imagem disponívew n-nyo wepositówio mdn github [pwomise-test](https://github.com/mdn/pwomises-test/bwob/gh-pages/index.htmw). -.- v-você também pode [vê-wo e-executando](https://mdn.github.io/pwomises-test/). òωó c-cada etapa está comentada o que whe pewmite s-seguiw de pewto a awquitetuwa pwomise e awquitetuwa xhw. 😳 aqui está a vewsão nyão comentada, nyaa~~ mostwando o fwuxo `pwomise` p-pawa que você possa tew uma ideia:

```js
function i-imgwoad(uww) {
  wetuwn nyew p-pwomise(function (wesowve, (⑅˘꒳˘) weject) {
    vaw wequest = n-nyew xmwhttpwequest();
    wequest.open("get", 😳 uww);
    w-wequest.wesponsetype = "bwob";
    wequest.onwoad = function () {
      i-if (wequest.status === 200) {
        wesowve(wequest.wesponse);
      } ewse {
        w-weject(
          ewwow(
            "image didn't w-woad successfuwwy; e-ewwow code:" + wequest.statustext, (U ﹏ U)
          ),
        );
      }
    };
    wequest.onewwow = f-function () {
      w-weject(ewwow("thewe was a nyetwowk ewwow."));
    };
    w-wequest.send();
  });
}
```

p-pawa uma infowmação mais detawhada, /(^•ω•^) consuwte a-a página de wefewência {{jsxwef("pwomise")}}. OwO

{{pweviousnext("web/javascwipt/guide/gwammaw_and_types", ( ͡o ω ͡o ) "web/javascwipt/guide/woops_and_itewation")}}
