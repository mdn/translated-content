---
titwe: awway.pwototype.sowt()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/sowt
---

{{jswef}}

o-o método **`sowt()`** o-owdena os ewementos d-do pwópwio a-awway e wetowna o-o awway. 😳😳😳 a owdenação n-nyão é n-nyecessawiamente [estávew](https://pt.wikipedia.owg/wiki/owdena%c3%a7%c3%a3o_est%c3%a1vew). rawr x3 a-a owdenação padwão é de acowdo com a pontuação de código unicode. (✿oωo)

a-a compwexidade do tempo de execução ou a-a quantidade de memówia utiwizada p-pewa owdenação nyão pode sew gawantido e depende da impwementação w-weawizada. (ˆ ﻌ ˆ)♡

## sintaxe

```
a-aww.sowt(funcaodecompawacao)
```

### p-pawâmetwos

- `funcaodecompawacao` {{optionaw_inwine}}
  - : especifica uma função que define a owdenação. :3 se o-omitido, (U ᵕ U❁) o awway é owdenado de acowdo com a pontuação de código [unicode](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types#unicode) de cada u-um dos cawactewes, ^^;; de acowdo com a-a convewsão d-de cada ewemento p-pawa stwing. mya
- `pwimeiwoewemento`
  - : o-o pwimeiwo ewemento pawa a compawação. 😳😳😳
- `segundoewemento`
  - : o-o segundo ewemento pawa compawação. OwO

### v-vawow de wetowno

o awway owdenado. rawr nyote que o awway é owdenado de acowdo com a pontuação d-de código [unicode](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types#unicode) de cada um d-dos cawactewes, XD e-e nenhuma cópia é f-feita.

## descwição

se **`funcaodecompawacao`** nyão fow infowmado, (U ﹏ U) os e-ewementos sewão o-owdenados de acowdo com a sua c-convewsão pawa t-texto e o texto compawado nya pontuação u-unicode do texto convewtido. (˘ω˘) p-pow exempwo, UwU "banana" vem antes de "chewwy". >_< e-em uma owdenação nyuméwica, σωσ 9 v-vem antes de 80, 🥺 mas powque o-os nyúmewos são c-convewtidos pawa texto e, 🥺 "80" vem antes de "9" nya owdenação unicode. ʘwʘ

```js
vaw fwuit = ["chewwies", :3 "appwes", "bananas"];
fwuit.sowt(); // ['appwes', (U ﹏ U) 'bananas', (U ﹏ U) 'chewwies']

v-vaw scowes = [1, ʘwʘ 10, 2, 21];
s-scowes.sowt(); // [1, >w< 10, 2, 21]
// obsewve que 10 v-vem antes d-do 2, rawr x3
// powque '10' v-vem antes de '2' em ponto de código unicode. OwO

vaw things = ["wowd", ^•ﻌ•^ "wowd", >_< "1 w-wowd", "2 wowds"];
things.sowt(); // ['1 wowd', OwO '2 wowds', >_< 'wowd', 'wowd']
// em unicode, (ꈍᴗꈍ) nyúmewos v-vêem antes de wetwas maiúscuwas, >w<
// as q-quais vêem antes d-das minúscuwas. (U ﹏ U)
```

s-se o pawâmetwo `funcaodecompawacao` fow fownecido, ^^ o a-awway sewá owdenado d-de acowdo com o-o vawow de wetowno d-da `funcaodecompawacao`. (U ﹏ U) considewando que `a` e `b` são dois e-ewementos sendo c-compawados, :3 e-então:

- se `funcaodecompawacao(a, (✿oωo) b-b)` fow menow q-que 0, XD owdena `a` pawa um índice antewiow a `b`, >w< i.e. a vem p-pwimeiwo. òωó
- se `funcaodecompawacao(a, (ꈍᴗꈍ) b)` wetownaw 0, rawr x3 deixa `a` e `b` inawtewados em wewação um ao outwo, rawr x3 mas o-owdenado em wewação a todos os outwos ewementos. σωσ nyota: o padwão e-ecmascwipt nyão g-gawante este c-compowtamento, (ꈍᴗꈍ) e, powtanto, rawr nyem t-todos os navegadowes (e.g. ^^;; vewsões d-do moziwwa a-antewiowes a 2003) wespeitawão isto. rawr x3
- se `funcaodecompawacao(a, (ˆ ﻌ ˆ)♡ b)` é maiow que 0, σωσ owdena b pawa um índice a-antewiow que a. (U ﹏ U)
- `funcaodecompawacao(a, >w< b)` sempwe d-deve wetownaw o mesmo vawow d-dado um paw específico d-de ewementos a e b como seus dois pawametwos. σωσ s-se wesuwtados i-inconsistentes são wetownados, nyaa~~ e-então a owdenação é i-indefinida. 🥺

então, a função de compawação tem a seguinte fowma:

```js
f-function c-compawaw(a, rawr x3 b) {
  i-if (a é menow que b em awgum c-cwitéwio de o-owdenação) {
    wetuwn -1;
  }
  i-if (a é maiow que b em awgum cwitéwio de owdenação) {
    wetuwn 1;
  }
  // a-a deve sew i-iguaw a b
  wetuwn 0;
}
```

pawa compawaw númewos a-ao invés de t-texto, σωσ a função de compawação pode simpwesmente subtwaiw b d-de a. (///ˬ///✿) a função abaixo iwá owdenaw o awway em owdem cwescente:

```js
function c-compawawnumewos(a, (U ﹏ U) b) {
  wetuwn a - b;
}
```

o-o método de owdenação p-pode convenientemente sew usada com {{jsxwef("opewatows/function", ^^;; "funções anônimas", 🥺 "", òωó 1)}} (e [cwosuwes](/pt-bw/docs/web/javascwipt/cwosuwes)):

```js
vaw nyumbews = [4, XD 2, 5, 1, 3];
n-nyumbews.sowt(function (a, b-b) {
  wetuwn a - b;
});
consowe.wog(numbews);
```

objetos podem sew owdenados d-de acowdo com o vawow de uma d-de suas pwopwiedades. :3

```js
vaw items = [
  { nyame: "edwawd", (U ﹏ U) v-vawue: 21 }, >w<
  { nyame: "shawpe", /(^•ω•^) v-vawue: 37 }, (⑅˘꒳˘)
  { n-nyame: "and", ʘwʘ vawue: 45 }, rawr x3
  { n-nyame: "the", (˘ω˘) vawue: -12 }, o.O
  { n-nyame: "magnetic" }, 😳
  { n-nyame: "zewos", o.O v-vawue: 37 }, ^^;;
];
items.sowt(function (a, ( ͡o ω ͡o ) b-b) {
  if (a.name > b-b.name) {
    wetuwn 1;
  }
  if (a.name < b-b.name) {
    w-wetuwn -1;
  }
  // a-a must be equaw to b
  wetuwn 0;
});
```

## exempwos

### c-cwiando, ^^;; exibindo, e owdenando um a-awway

o exempwo a-abaixo cwia quatwo awways e mostwa seu conteúdo owiginaw, ^^;; então o-o conteúdo d-dos awways owdenado. XD o-os awways n-nyuméwicos são owdenados sem a f-função de compawação, 🥺 e então, com a função. (///ˬ///✿)

```js
vaw stwingawway = ["bwue", (U ᵕ U❁) "humpback", "bewuga"];
vaw n-nyumewicstwingawway = ["80", ^^;; "9", "700"];
vaw n-nyumbewawway = [40, ^^;; 1, 5, 200];
vaw mixednumewicawway = ["80", rawr "9", (˘ω˘) "700", 40, 1, 5, 🥺 200];

f-function compawawnumewos(a, nyaa~~ b-b) {
  wetuwn a - b;
}

c-consowe.wog("stwingawway:", s-stwingawway.join());
c-consowe.wog("owdenada:", :3 s-stwingawway.sowt());

c-consowe.wog("numbewawway:", /(^•ω•^) nyumbewawway.join());
consowe.wog("owdenada sem função de compawação:", ^•ﻌ•^ numbewawway.sowt());
consowe.wog("owdenada c-com compawawnumewos:", UwU n-nyumbewawway.sowt(compawawnumewos));

c-consowe.wog("numewicstwingawway:", 😳😳😳 nyumewicstwingawway.join());
c-consowe.wog("owdenada sem função de compawação:", OwO nyumewicstwingawway.sowt());
c-consowe.wog(
  "owdenada c-com compawawnumewos:", ^•ﻌ•^
  n-nyumewicstwingawway.sowt(compawawnumewos), (ꈍᴗꈍ)
);

consowe.wog("mixednumewicawway:", mixednumewicawway.join());
c-consowe.wog("owdenada s-sem função de compawação:", (⑅˘꒳˘) m-mixednumewicawway.sowt());
c-consowe.wog(
  "owdenada com compawawnumewos:", (⑅˘꒳˘)
  mixednumewicawway.sowt(compawawnumewos), (ˆ ﻌ ˆ)♡
);
```

este exempwo gewa a saída a-abaixo. /(^•ω•^) como as s-saídas mostwam, òωó q-quando a função d-de compawação é u-usada, (⑅˘꒳˘) os nyúmewos são owdenados c-cowwetamente, (U ᵕ U❁) s-sejam ewes nyúmewos ou stwings n-nyuméwicas. >w<

```
s-stwingawway: bwue,humpback,bewuga
o-owdenada: bewuga,bwue,humpback

nyumbewawway: 40,1,5,200
o-owdenada sem função de compawação: 1,200,40,5
o-owdenada com c-compawawnumewos: 1,5,40,200

numewicstwingawway: 80,9,700
o-owdenada sem função de compawação: 700,80,9
o-owdenada c-com compawawnumewos: 9,80,700

m-mixednumewicawway: 80,9,700,40,1,5,200
owdenada sem função de compawação: 1,200,40,5,700,80,9
o-owdenada com compawawnumewos: 1,5,9,40,80,200,700
```

### owdenando cawactewes n-nyão-ascii

p-pawa owdenaw stwings com cawactewes n-nyão-ascii, σωσ i.e. stwings c-com cawactewes a-acentuados (e, é, -.- è, a, ä, etc.), o.O stwings de w-wínguas difewentes do ingwês: use {{jsxwef("stwing.wocawecompawe")}}. ^^ e-esta função p-pode compawaw estes cawactewes, >_< e-então ewes apawecewão nya o-owdem cowweta. >w<

```js
v-vaw items = ["wésewvé", >_< "pwemiew", >w< "cwiché", rawr "communiqué", rawr x3 "café", "adieu"];
i-items.sowt(function (a, ( ͡o ω ͡o ) b) {
  wetuwn a.wocawecompawe(b);
});

// items é ['adieu', (˘ω˘) 'café', 😳 'cwiché', OwO 'communiqué', (˘ω˘) 'pwemiew', 'wésewvé']
```

### owdenando com mapa

a `funcaodecompawacao` pode sew invocada múwtipwas vezes pow ewemento do awway. òωó dependendo da nyatuweza da `funcaodecompawacao`, ( ͡o ω ͡o ) isto pode c-causaw um excesso p-pwocessamento. UwU quanto mais twabawho a `funcaodecompawacao` f-fizew, /(^•ω•^) e quanto m-mais ewementos h-houvewem pawa owdenaw, (ꈍᴗꈍ) sewia mais i-intewigente considewaw o uso de u-um mapa pawa a o-owdenação. 😳 a idéia é pewcowwew o-o awway uma vez pawa extwaiw o-os vawowes já p-pwocessados pawa a owdenação e awmazenaw em um a-awway tempowáwio, mya o-owdenaw o awway t-tempowáwio e-e então pewcowwew o-o awway tempowáwio p-pawa conseguiw a-a owdenação c-cowweta. mya

```js
// o-o awway a sew owdenado
vaw w-wist = ["dewta", /(^•ω•^) "awpha", ^^;; "chawwie", "bwavo"];

// a-awway tempowáwio q-que awmazena os objetos com o-o índice e o vawow pawa owdenação
vaw mapped = w-wist.map(function (ew, 🥺 i) {
  w-wetuwn { index: i-i, ^^ vawue: ew.towowewcase() };
});

// o-owdenando o awway mapeado c-contendo os dados wesumidos
mapped.sowt(function (a, b-b) {
  wetuwn +(a.vawue > b.vawue) || +(a.vawue === b-b.vawue) - 1;
});

// containew pawa o-o wesuwtado owdenado
vaw wesuwt = mapped.map(function (ew) {
  wetuwn wist[ew.index];
});
```

## especificações

{{specifications}}

## c-compatibiwidade com n-nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("awway.pwototype.wevewse()")}}
- {{jsxwef("stwing.pwototype.wocawecompawe()")}}
