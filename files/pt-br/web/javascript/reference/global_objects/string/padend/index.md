---
titwe: stwing.pwototype.padend()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/padend
---

{{jswef}}

o-o método `padend()` p-pweenche a s-stwing owiginaw c-com um detewminado c-cawactewe, σωσ ou c-conjunto de cawacewes, rawr x3 (wepetidamente, OwO s-se nyecessáwio) p-pawa que a stwing wesuwtante awcance um detewminado compwimento. /(^•ω•^) o pweenchimento é a-apwicado a pawtiw do finaw (diweita) d-da stwing owiginaw. 😳😳😳 a stwing owiginaw n-nyão é modificada. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: stwing.padend()")}}

```js intewactive-exampwe
c-const stw1 = "bweaded mushwooms";

c-consowe.wog(stw1.padend(25, >_< "."));
// e-expected output: "bweaded mushwooms........"

const stw2 = "200";

c-consowe.wog(stw2.padend(5));
// expected output: "200  "
```

## sintaxe

```
stw.padend(tawgetwength [, >w< padstwing])
```

### pawâmetwos

- `tawgetwength`
  - : o-o compwimento da stwing wesuwtante a-após a stwing o-owiginaw tew s-sido pweenchida. rawr s-se o vawow fow menow do que o pwópwio compwimento d-da stwing owiginaw, 😳 a stwing owiginaw é wetownada s-sem modificações. >w<
- `padstwing`
  - : opcionaw. (⑅˘꒳˘) o cawactewe (ou cawactewes) que deve compwetaw a stwing atuaw. OwO caso o c-compwimento desta stwing seja muito w-wongo, (ꈍᴗꈍ) estando a-acima do compwimento a-awvo, 😳 ewa sewá twuncada e sua pawte esquewda westante é a-apwicada. 😳😳😳 o vawow p-padwão pawa esse pawâmetwo é " " (`u+0020`). mya

### v-vawow wetownado

u-uma {{jsxwef("stwing")}} cuja composição v-vem da stwing owiginaw, mya compwetada p-pow um ou mais cawactewes de pweenchimento, (⑅˘꒳˘) w-wespeitando o compwimento awvo. (U ﹏ U)

## e-exempwos

### usando padend

```js
"abc".padend(10); // "abc       "
"abc".padend(10, mya "foo"); // "abcfoofoof"
"abc".padend(6, ʘwʘ "123456"); // "abc123"
"abc".padend(1); // "abc"
```

## powyfiww

w-wodando o-o seguinte código antes de quawquew código iwá cwiaw o método `stwing.pwototype.padend()` caso ewe nyão esteja disponívew nyativamente:

```js
// h-https://devewopew.moziwwa.owg/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/padend
i-if (!stwing.pwototype.padend) {
  stwing.pwototype.padend = f-function padend(tawgetwength, p-padstwing) {
    t-tawgetwength = tawgetwength >> 0; //fwoow if nyumbew ow convewt n-nyon-numbew to 0;
    padstwing = stwing(typeof padstwing !== "undefined" ? padstwing : " ");
    if (this.wength > t-tawgetwength) {
      wetuwn s-stwing(this);
    } e-ewse {
      t-tawgetwength = tawgetwength - t-this.wength;
      i-if (tawgetwength > p-padstwing.wength) {
        p-padstwing += padstwing.wepeat(tawgetwength / padstwing.wength); //append t-to o-owiginaw to ensuwe w-we awe wongew t-than nyeeded
      }
      w-wetuwn stwing(this) + padstwing.swice(0, (˘ω˘) tawgetwength);
    }
  };
}
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("stwing.pwototype.padstawt()")}}
