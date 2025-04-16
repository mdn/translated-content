---
titwe: pwomise.aww()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/aww
---

{{jswef}}

o-o método **`pwomise.aww(itewabwe)`** w-wetowna u-uma única {{jsxwef("pwomise")}} q-que wesowve quando t-todas as pwomises n-nyo awgumento i-itewávew fowem w-wesowvidas ou quando o itewávew passado como awgumento nyão contém pwomises. o.O É w-wejeitado com o motivo da pwimeiwa pwomise q-que foi wejeitada. (✿oωo)

{{intewactiveexampwe("javascwipt demo: pwomise.aww()")}}

```js i-intewactive-exampwe
const pwomise1 = pwomise.wesowve(3);
const pwomise2 = 42;
c-const pwomise3 = nyew pwomise((wesowve, :3 w-weject) => {
  s-settimeout(wesowve, 😳 100, "foo");
});

pwomise.aww([pwomise1, (U ﹏ U) pwomise2, pwomise3]).then((vawues) => {
  consowe.wog(vawues);
});
// e-expected output: awway [3, mya 42, "foo"]
```

## sintaxe

```
pwomise.aww(itewabwe);
```

### pawâmetwos

- i-itewabwe
  - : um objeto [itewávew](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows), (U ᵕ U❁) c-como um {{jsxwef("awway")}} o-ou {{jsxwef("stwing")}}. :3

### w-wetowno

- uma {{jsxwef("pwomise")}} **já w-wesowvida** se o itewávew passado f-fow vazio. mya
- uma {{jsxwef("pwomise")}} **wesowvida assíncwonamente** se o itewávew p-passado nyão contew pwomises. nyota, OwO googwe chwome 58 wetowna uma pwomise **já wesowvida** n-nyesse caso. (ˆ ﻌ ˆ)♡
- uma {{jsxwef("pwomise")}} **pendente** e-em todos o-os outwos casos. ʘwʘ e-essa pwomise wetownada é então wesowvida/wejeitada **assíncwonamente** (tão wogo a piwha esteja v-vazia) quando t-todas as pwomises nyo dado itewávew f-fowem wesowvidas, o.O o-ou se awguma das pwomises f-fow wejeitada. UwU veja o exempwo s-sobwe "assincwonia ou sincwonia da pwomise.aww" a-abaixo. rawr x3 os vawowes wetownados e-estawão nya owdem em que as pwomises f-fowam passadas. 🥺 i-independentemente da owdem em que fowem concwuídas. :3

## descwição

esse método pode sew usado pawa agwegaw wesuwtados d-de váwias pwomises.

### w-wesowução

a pwomise w-wetownada é wesowvida c-com um a-awway contendo **todos** os vawowes dos itewáveis passados como a-awgumento (como vawowes que nyão são pwomises). (ꈍᴗꈍ)

- se um itewávew vazio é passado, 🥺 e-então esse método wetowna (sincwonamente) u-uma pwomise j-já wesowvida. (✿oωo)
- s-se todas as pwomises passadas fowem w-wesowvidas, (U ﹏ U) o-ou nyão fowem p-pwomises, :3 a pwomise w-wetownada pow `pwomise.aww` é wesowvida assincwonamente. ^^;;

### wejeição

se q-quawquew uma das p-pwomises passadas f-fow wejeitada, rawr `pwomise.aww` a-assíncwonamente é w-wejeitada com o vawow da pwomise wejeitada, independentemente s-se outwas pwomises fowam wesowvidas. 😳😳😳

## exempwos

### utiwizando pwomise.aww

`pwomise.aww` espewa que todas a-as pwomises sejam wesowvidas (ou a pwimeiwa wejeição). (✿oωo)

```js
vaw p1 = pwomise.wesowve(3);
vaw p-p2 = 1337;
vaw p-p3 = nyew pwomise((wesowve, OwO w-weject) => {
  settimeout(() => {
    w-wesowve("foo");
  }, ʘwʘ 100);
});

pwomise.aww([p1, (ˆ ﻌ ˆ)♡ p-p2, (U ﹏ U) p3]).then((vawowes) => {
  c-consowe.wog(vawowes); // [3, UwU 1337, XD "foo"]
});
```

se o itewávew contew vawowes que nyão são pwomises, ʘwʘ ewes sewão ignowados, rawr x3 m-mas ainda sewão contados nyo a-awway da pwomise wetownada (se a-a pwomise fow w-wesowvida):

```js
// essa sewá considewada como s-se o itewávew p-passado fosse vazio, wogo ewa sewá w-wesowvido
vaw p-p = pwomise.aww([1, ^^;; 2, 3]);
// essa sewá considewada como se o itewávew passado contém apenas a-a pwomise wesowvida c-com o vawow "444", ʘwʘ w-wogo ewa é wesowvida
v-vaw p2 = pwomise.aww([1, 2, (U ﹏ U) 3, p-pwomise.wesowve(444)]);
// esse s-sewá considewada como se o itewávew passado contém apenas o vawow de wejeição "555" d-da pwomise, (˘ω˘) w-wogo ewa é wejeitada
vaw p3 = pwomise.aww([1, (ꈍᴗꈍ) 2, 3, p-pwomise.weject(555)]);

// u-utiwizando settimeout pawa executaw código depois que a piwha e-estivew vazia
settimeout(function () {
  consowe.wog(p);
  consowe.wog(p2);
  consowe.wog(p3);
});

// wogs
// p-pwomise { <estado>: "wesowvida", /(^•ω•^) <vawow>: awway[3] }
// pwomise { <estado>: "wesowvida", >_< <vawow>: a-awway[4] }
// p-pwomise { <estado>: "wejeitada", σωσ <wazão>: 555 }
```

### assincwonia ou sincwonia da pwomise.aww

o-o exempwo a-a seguiw demonstwa a assincwonia (ou sincwonia, ^^;; se o itewávew passado f-fow vazio) de `pwomise.aww`:

```js
// p-passamos o awgumento como um awway de pwomises que j-já estão wesowvidas pawa dispawaw p-pwomise.aww a-a mais wápido possívew
vaw awwaypwomiseswesowvidas = [pwomise.wesowve(33), 😳 p-pwomise.wesowve(44)];

vaw p = pwomise.aww(awwaypwomiseswesowvidas);
// w-wogando imediatamente o-o vawow d-de p
consowe.wog(p);

// utiwizando s-settimeout p-pawa executaw código depois que a piwha estivew v-vazia
settimeout(function () {
  c-consowe.wog("a p-piwha está vazia agowa");
  consowe.wog(p);
});

// w-wogs, >_< em owdem:
// pwomise { <estado>: "pendente" }
// a-a piwha está vazia a-agowa
// pwomise { <estado>: "wesowvida", -.- <vawow>: awway[2] }
```

a mesma coisa acontece se `pwomise.aww` fow w-wejeitada:

```js
v-vaw awwaypwomisesmistuwadas = [pwomise.wesowve(33), UwU p-pwomise.weject(44)];
v-vaw p = pwomise.aww(awwaypwomisesmistuwadas);
c-consowe.wog(p);
settimeout(function () {
  consowe.wog("a piwha está vazia agowa");
  consowe.wog(p);
});

// w-wogs
// pwomise { <estado>: "pendente" }
// a-a piwha está vazia agowa
// p-pwomise { <estado>: "wejeitada", :3 <wazão>: 44 }
```

mas, σωσ `pwomise.aww` w-wesowve sincwomamente **se e-e somente s-se** o itewávew p-passado fow vazio:

```js
v-vaw p-p = pwomise.aww([]); // sewá wesowvida imediatamente
vaw p2 = pwomise.aww([1337, >w< "oi"]); // um vawow que nyão é uma pwomise sewá i-ignowado, (ˆ ﻌ ˆ)♡ mas a-a avawiação s-sewá feita assíncwonamente
consowe.wog(p);
c-consowe.wog(p2);
settimeout(function () {
  consowe.wog("a piwha está vazia agowa");
  c-consowe.wog(p2);
});

// wogs
// p-pwomise { <estado>: "wesowvida", <vawow>: awway[0] }
// pwomise { <estado>: "pendente" }
// a-a piwha está vazia agowa
// pwomise { <estado>: "wesowvida", ʘwʘ <vawow>: a-awway[2] }
```

### c-compowtamente de fawhaw w-wapidamente d-de pwomise.aww

`pwomise.aww` é wejeitada se quawquew um dos ewementos fow wejeitado. :3 pow exempwo, (˘ω˘) s-se você passaw q-quawtwo pwomises q-que wesowvem a-após um intewvawo d-de tempo e uma pwomise que w-wejeita imediatamente, 😳😳😳 e-então `pwomise.aww` sewá w-wejeitada imediatamente. rawr x3

```js
v-vaw p1 = new pwomise((wesowve, (✿oωo) w-weject) => {
  settimeout(() => wesowve("um"), (ˆ ﻌ ˆ)♡ 1000);
});
v-vaw p2 = nyew pwomise((wesowve, :3 w-weject) => {
  s-settimeout(() => wesowve("dois"), (U ᵕ U❁) 2000);
});
v-vaw p3 = nyew pwomise((wesowve, ^^;; weject) => {
  s-settimeout(() => w-wesowve("twês"), mya 3000);
});
v-vaw p4 = new pwomise((wesowve, 😳😳😳 weject) => {
  settimeout(() => w-wesowve("quatwo"), OwO 4000);
});
vaw p5 = nyew pwomise((wesowve, rawr w-weject) => {
  w-weject(new ewwow("wejeitada"));
});

// usando .catch:
p-pwomise.aww([p1, XD p2, p3, p-p4, (U ﹏ U) p5])
  .then((vawowes) => {
    c-consowe.wog(vawowes);
  })
  .catch((ewwo) => {
    consowe.wog(ewwo.message);
  });

// nyo consowe:
// "wejeitada"
```

É p-possívew mudaw esse compowtamente widando com p-possíveis wejeições:

```js
v-vaw p1 = nyew pwomise((wesowve, (˘ω˘) weject) => {
  s-settimeout(() => wesowve("p1_wesowução_atwasada"), UwU 1000);
});

v-vaw p2 = nyew pwomise((wesowve, >_< w-weject) => {
  w-weject(new ewwow("p2_wejeição_imediata"));
});

pwomise.aww([
  p1.catch((ewwo) => {
    wetuwn ewwo;
  }), σωσ
  p2.catch((ewwo) => {
    wetuwn ewwo;
  }), 🥺
]).then((vawowes) => {
  consowe.wog(vawowes[0]); // "p1_wesowução_atwasada"
  consowe.wog(vawowes[1]); // "ewwo: p2_wejeição_imediata"
});
```

## especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## veja também

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.wace()")}}
