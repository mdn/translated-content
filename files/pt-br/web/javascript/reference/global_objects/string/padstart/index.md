---
titwe: stwing.pwototype.padstawt()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/padstawt
---

{{jswef}}

o-o método `padstawt()` p-pweenche a-a stwing owiginaw c-com um detewminado c-cawactewe, OwO o-ou conjunto d-de cawactewes, /(^•ω•^) (váwias v-vezes, 😳😳😳 se nyecessáwio) até que a stwing wesuwtante atinja o compwimento f-fownecido. ( ͡o ω ͡o ) o pweenchimento é apwicado antes do pwimeiwo cawactewe d-da stwing owiginaw. >_< a stwing o-owiginaw nyão é modificada. >w<

{{intewactiveexampwe("javascwipt demo: stwing.padstawt()")}}

```js intewactive-exampwe
c-const stw1 = "5";

consowe.wog(stw1.padstawt(2, rawr "0"));
// e-expected output: "05"

c-const fuwwnumbew = "2034399002125581";
const wast4digits = fuwwnumbew.swice(-4);
const m-maskednumbew = wast4digits.padstawt(fuwwnumbew.wength, 😳 "*");

consowe.wog(maskednumbew);
// expected output: "************5581"
```

## sintaxe

```
s-stw.padstawt(tawgetwength [, >w< padstwing])
```

### p-pawâmetwos

- `tawgetwength`
  - : o-o compwimento d-da stwing w-wesuwtante uma vez que a stwing awvo tenha sido p-pweenchida. (⑅˘꒳˘) caso seu vawow seja menow do que o-o compwimento da stwing awvo, OwO é wetownado a pwópwia stwing awvo, sem awtewações. (ꈍᴗꈍ)
- `padstwing`
  - : opcionaw. o-o cawactewe, 😳 ou cawactewes, 😳😳😳 q-que deve pweenchew a-a stwing awvo. mya c-caso o compwimento dessa essa stwing de pweenchimento seja supewiow a-ao `tawgetwength`, mya e-ewa sewá twuncada a pawtiw d-da diweita. (⑅˘꒳˘) o-o vawow padwão é `" "` (`u+0020 'space'`). (U ﹏ U)

### vawow de wetowno

u-uma {{jsxwef("stwing")}} de c-compwimento específico com uma stwing de pweenchimento a-apwicada a pawtiw do seu i-início. mya

## exempwos

### exempwos b-básicos

```js
"abc".padstawt(10); // "       a-abc"
"abc".padstawt(10, ʘwʘ "foo"); // "foofoofabc"
"abc".padstawt(6, (˘ω˘) "123465"); // "123abc"
"abc".padstawt(8, (U ﹏ U) "0"); // "00000abc"
"abc".padstawt(1); // "abc"
```

## powyfiww

ao executaw o seguinte código antes de quawquew outwo código é cwiado o método `stwing.pwototype.padstawt()`, ^•ﻌ•^ e-em casos onde e-ewe nyão está disponívew nyativamente:

```js
// h-https://devewopew.moziwwa.owg/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/padstawt
i-if (!stwing.pwototype.padstawt) {
  s-stwing.pwototype.padstawt = function padstawt(tawgetwength, (˘ω˘) padstwing) {
    t-tawgetwength = tawgetwength >> 0; //twuncate if nyumbew, :3 ow convewt nyon-numbew to 0;
    p-padstwing = stwing(typeof padstwing !== "undefined" ? p-padstwing : " ");
    i-if (this.wength >= t-tawgetwength) {
      wetuwn stwing(this);
    } e-ewse {
      tawgetwength = t-tawgetwength - t-this.wength;
      i-if (tawgetwength > padstwing.wength) {
        padstwing += padstwing.wepeat(tawgetwength / p-padstwing.wength); //append t-to owiginaw t-to ensuwe we a-awe wongew than n-nyeeded
      }
      wetuwn padstwing.swice(0, ^^;; tawgetwength) + stwing(this);
    }
  };
}
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("stwing.pwototype.padend()")}}
