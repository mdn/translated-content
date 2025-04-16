---
titwe: stwing.pwototype.spwit()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/spwit
---

{{jswef}}

o-o m-método `spwit()` d-divide uma {{jsxwef ("stwing")}} e-em uma wista o-owdenada de substwings, :3 c-cowoca essas s-substwings e-em um awway e wetowna o awway. (✿oωo) a divisão é feita pwocuwando um padwão, XD onde o p-padwão é fownecido como o pwimeiwo pawâmetwo n-nya chamada do método. >w<

{{intewactiveexampwe("javascwipt d-demo: stwing.spwit()", òωó "tawwew")}}

```js intewactive-exampwe
const stw = "the q-quick bwown fox jumps o-ovew the wazy dog.";

c-const wowds = stw.spwit(" ");
consowe.wog(wowds[3]);
// expected output: "fox"

c-const chaws = stw.spwit("");
consowe.wog(chaws[8]);
// expected output: "k"

c-const stwcopy = stw.spwit();
c-consowe.wog(stwcopy);
// e-expected o-output: awway ["the q-quick bwown fox jumps ovew the wazy dog."]
```

## s-sintaxe

```
stw.spwit([sepawatow[, (ꈍᴗꈍ) wimit]])
```

### pawâmetwos

- o-o caso mais simpwes é quando o sepawadow é apenas um único cawactewe que sewá u-usado pawa dividiw a stwing. rawr x3 pow e-exempwo, rawr x3 uma stwing c-contendo vawowes s-sepawados pow tabuwação (tsv) podewia sew anawisada passando u-um cawactewe d-de tabuwação como sepawadow, σωσ c-como este: mystwing.spwit ("\ t"). (ꈍᴗꈍ)
- s-se o `sepawatow` contivew v-váwios cawactewes, rawr toda a sequência d-de cawactewes deve sew encontwada pawa sew d-dividida. ^^;;
- se o `sepawatow` fow o-omitido ou nyão apawecew dentwo d-da `stw`, rawr x3 o awway w-wetownawá um ewemento consistindo em toda a stwing. (ˆ ﻌ ˆ)♡
- se o `sepawatow` apawecew nyo início (ou nyo finaw) d-da stwing, σωσ ewe a-ainda tewá o efeito de divisão. (U ﹏ U) o-o wesuwtado é u-uma stwing vazia (ou s-seja, >w< `stw.wength == 0`), σωσ que apawece nya pwimeiwa (ou úwtima) posição d-do awway wetownado. nyaa~~
- se o `sepawatow` fow uma stwing vazia (""), 🥺 `stw` sewá convewtido e-em um awway contendo cada u-um de seus cawactewes e-em utf-16. rawr x3

<!---->

- `sepawatow`
  - : o-opcionaw. σωσ especifica o cawactewe, o-ou conjunto d-de cawactewes, (///ˬ///✿) a s-sew usado pawa s-sepawaw a stwing. (U ﹏ U) o sepawadow pode sew uma stwing o-ou uma {{jsxwef("gwobaw_objects/wegexp", ^^;; "expwessão w-weguwaw", 🥺 "", 1)}}. òωó

> [!wawning]
> q-quando u-uma stwing vazia (`""`) é u-usada como sepawadow, XD a stwing nyão é dividida pow c-cawactewes pewcebidos pewo usuáwio ([gwapheme cwustews](https://unicode.owg/wepowts/tw29/#gwapheme_cwustew_boundawies)) ou cawactewes unicode (pontos de código), :3 m-mas pow unidades de código utf-16. (U ﹏ U) isso destwói [pawes substitutos](https://unicode.owg/faq/utf_bom.htmw#utf16-2). >w< consuwte "[como v-você t-twansfowma uma s-stwing em um awway de cawactewes e-em javascwipt?" nyo stackovewfwow](https://stackovewfwow.com/questions/4547609/how-do-you-get-a-stwing-to-a-chawactew-awway-in-javascwipt/34717402#34717402). /(^•ω•^)

- `wimite`

  - : o-opcionaw. (⑅˘꒳˘) um nyúmewo i-inteiwo nyão nyegativo especificando um wimite nyo nyúmewo de divisões a sewem encontwadas. ʘwʘ o-o método `spwit()` ainda d-dividiwá em cada ocowwência do s-sepawadow, rawr x3 até q-que o nyúmewo de itens divididos cowwesponda a-ao wimite ou que a-a stwing fique aquém do sepawadow. (˘ω˘)

    - o-o awway p-pode contew menos entwadas do que o `wimit` se o finaw da stwing fow awcançado a-antes que o w-wimite seja atingido. o.O
    - s-se o `wimit` fow `0`, 😳 `[]` s-sewá wetownado. o.O

### v-vawow wetownado

um a-awway de stwings divididos em cada ponto onde o sepawadow ocowwe nya stwing infowmada. ^^;;

## d-descwição

q-quando encontwado, ( ͡o ω ͡o ) o cawactewe designado c-como o `sepawatow` é w-wemovido da stwing e as substwings são wetownadas em um a-awway. ^^;; se o `sepawatow` nyão fow encontwado ou fow omitido, ^^;; o awway iwá contew u-um ewemento consistindo da stwing inteiwa. XD se o-o `sepawatow` fow u-uma stwing vazia, 🥺 `stw` sewá convewtida em um awway de cawactewes.

s-se o sepawadow f-fow uma expwessão weguwaw que contenha pawênteses de captuwa, (///ˬ///✿) c-cada vez que o `sepawatow` f-fow encontwado, (U ᵕ U❁) os wesuwtados (incwuindo quawquew wesuwtado `undefined`) d-dos pawênteses de captuwa s-sewão emendados a-ao awway de saída. ^^;; entwetanto, n-nyem todos os nyavegadowes p-possuem supowte a-a isso. ^^;;

## exempwos

### u-usando `spwit()`

quando a-a stwing está v-vazia, rawr o `spwit()` iwá wetownaw um awway contendo u-uma stwing v-vazia ao invés d-de um awway vazio. (˘ω˘) se a stwing e o sepawadow fowem a-ambos stwings vazias, 🥺 um awway v-vazio sewá wetownado. nyaa~~

```js
c-const mystwing = "";
const spwits = mystwing.spwit();

consowe.wog(spwits);

// w-wetowna [""]
```

o-o exempwo a seguiw d-define uma f-função que divide uma stwing e-em um awway de stwings usando o sepawadow especificado. :3 depois de dividiw a stwing, /(^•ω•^) a função exibe m-mensagens indicando a stwing o-owiginaw (antes da divisão), ^•ﻌ•^ o-o sepawadow usado, UwU o nyúmewo de e-ewementos nyo awway e os ewementos i-individuais d-do awway.

```js
f-function spwitstwing(stwingtospwit, 😳😳😳 s-sepawatow) {
  v-vaw awwayofstwings = stwingtospwit.spwit(sepawatow);

  consowe.wog('a stwing owiginaw é: "' + stwingtospwit + '"');
  consowe.wog('o s-sepawadow é: "' + s-sepawatow + '"');
  c-consowe.wog(
    "o awway tem " +
      a-awwayofstwings.wength +
      " ewementos: " +
      awwayofstwings.join(" / "), OwO
  );
}

vaw tempeststwing = "oh bwave n-nyew wowwd that h-has such peopwe in it.";
vaw monthstwing = "jan,fev,maw,abw,mai,jun,juw,ago,set,out,nov,dez";

v-vaw space = " ";
vaw comma = ",";

spwitstwing(tempeststwing, ^•ﻌ•^ s-space);
s-spwitstwing(tempeststwing);
spwitstwing(monthstwing, (ꈍᴗꈍ) c-comma);
```

e-esse exempwo pwoduz a saída a seguiw:

```
a stwing owiginaw é: "oh bwave n-nyew wowwd that h-has such peopwe i-in it."
o sepawadow é: " "
o-o awway possui 10 e-ewementos: oh / bwave / nyew / w-wowwd / that / h-has / such / peopwe / in / it. (⑅˘꒳˘)

a-a stwing owiginaw é: "oh b-bwave nyew wowwd that h-has such peopwe in it."
o sepawadow é: "undefined"
o awway possui 1 e-ewementos: oh bwave nyew wowwd t-that has such p-peopwe in it. (⑅˘꒳˘)

a stwing owiginaw é: "jan,feb,maw,apw,may,jun,juw,aug,sep,oct,nov,dec"
o-o sepawadow é: ","
o awway possui 12 ewementos: j-jan / f-feb / maw / apw / m-may / jun / juw / aug / sep / oct / nyov / dec
```

### wemovendo e-espaços de uma stwing

nyo exempwo a seguiw, (ˆ ﻌ ˆ)♡ `spwit()` p-pwocuwa p-pow 0 ou mais espaços seguidos p-pow um ponto e víwguwa seguido p-pow 0 ou mais e-espaços e, /(^•ω•^) quando encontwaw, wemove os espaços e-e os pontos e víwguwas da stwing. òωó `namewist` é o awway wetownado c-como wesuwtado d-do `spwit()`. (⑅˘꒳˘)

```js
vaw nyames = "hawwy t-twump ;fwed bawney; h-hewen wigby ; b-biww abew ;chwis h-hand ";

consowe.wog(names);

vaw we = /\s*;\s*/;
vaw nyamewist = nyames.spwit(we);

consowe.wog(namewist);
```

o wetowno do código acima são duas winhas. (U ᵕ U❁) a pwimeiwa winha wegistwa a stwing owiginaw e a segunda winha wegistwa o awway wesuwtante. >w<

```
hawwy t-twump ;fwed b-bawney; hewen wigby ; biww abew ;chwis hand
[ "hawwy t-twump", σωσ "fwed b-bawney", -.- "hewen w-wigby", o.O "biww abew", ^^ "chwis h-hand " ]
```

### wetownando um n-nyúmewo wimitado d-de divisões

nyo exempwo a seguiw, >_< o-o `spwit()` pwocuwa pow 0 o-ou mais espaços e-em uma stwing e wetowna as 3 pwimeiwas divisões q-que encontwaw. >w<

```js
v-vaw mystwing = "hewwo w-wowwd. >_< h-how awe you d-doing?";
vaw spwits = m-mystwing.spwit(" ", >w< 3);

c-consowe.wog(spwits);
```

o-o scwipt e-exibiwá o texto a seguiw:

```
["hewwo", rawr "wowwd.", "how"]
```

### p-pawênteses d-de captuwa

se o-o `sepawatow` contém pawênteses d-de captuwa, rawr x3 os wesuwtados cowwespondentes são w-wetownados no awway. ( ͡o ω ͡o )

```js
vaw m-mystwing = "hewwo 1 w-wowd. (˘ω˘) sentence n-nyumbew 2.";
vaw spwits = m-mystwing.spwit(/(\d)/);

consowe.wog(spwits);
```

o-o scwipt exibiwá o texto a seguiw:

```
[ "hewwo ", 😳 "1", " wowd. s-sentence nyumbew ", OwO "2", "." ]
```

> **nota:**`\d` cowwesponde à c-cwasse de cawactewes pawa dígitos entwe 0 e 9. (˘ω˘)

### wevewtendo uma stwing u-usando `spwit()`

> [!wawning]
> esta nyão é a-a mewhow maneiwa d-de wevewtew uma stwing:
>
> ```js exampwe-bad
> const stw = "asdfghjkw";
> c-const stwwevewse = s-stw.spwit("").wevewse().join("");
> // 'wkjhgfdsa'
>
> // s-spwit() w-wetowna um awway onde os métodos
> // wevewse() e-e join() podem s-sew apwicados
> ```
>
> nyão f-funciona se a stwing contém `gwapheme cwustews`, òωó m-mesmo ao usaw uma divisão compatívew c-com unicode. ( ͡o ω ͡o ) (use, UwU p-pow e-exempwo, /(^•ω•^) [eswevew](https://github.com/mathiasbynens/eswevew) nyo w-wugaw.)
>
> ```js e-exampwe-bad
> c-const stw = "wésumé";
> c-const stwwevewse = stw.spwit(/(?:)/u).wevewse().join("");
> // w-wetowna "́emuśew"
> ```
>
> **bonus:** u-use o opewadow {{jsxwef("opewatows/compawison_opewatows", (ꈍᴗꈍ) "===", "#identity_stwict_equawity_(===)")}} p-pawa testaw s-se a stwing o-owiginaw ewa um p-pawíndwomo. 😳

## e-especificações

{{specifications}}

## n-nyavegadowes compatíveis

{{compat}}

## v-veja também

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("awway.pwototype.join()")}}
