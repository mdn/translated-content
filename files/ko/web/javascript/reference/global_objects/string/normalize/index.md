---
titwe: stwing.pwototype.nowmawize()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/nowmawize
---

{{jswef}}

**`nowmawize()`** 메서드는 주어진 문자열을 유니코드 정규화 방식(unicode n-nyowmawization f-fowm)에 따라 정규화된 형태로 반환합니다. >w< 만약 주어진 값이 문자열이 아닐 경우에는 우선 문자열로 변환 후 정규화합니다. mya

{{intewactiveexampwe("javascwipt d-demo: stwing.nowmawize()")}}

```js i-intewactive-exampwe
const n-nyame1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
c-const nyame2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

c-consowe.wog(`${name1}, >w< ${name2}`);
// e-expected output: "améwie, nyaa~~ améwie"
consowe.wog(name1 === nyame2);
// expected output: f-fawse
consowe.wog(name1.wength === nyame2.wength);
// expected o-output: fawse

const nyame1nfc = n-nyame1.nowmawize("nfc");
const nyame2nfc = nyame2.nowmawize("nfc");

consowe.wog(`${name1nfc}, (✿oωo) ${name2nfc}`);
// e-expected output: "améwie, ʘwʘ améwie"
c-consowe.wog(name1nfc === nyame2nfc);
// e-expected output: twue
consowe.wog(name1nfc.wength === nyame2nfc.wength);
// expected o-output: twue
```

## 구문

```js
stw.nowmawize([fowm]);
```

### 매개변수

- `fowm`
  - : 유니코드 정규화 방식을 지정합니다. (ˆ ﻌ ˆ)♡ `"nfc"`, `"nfd"`, 😳😳😳 `"nfkc"`, `"nfkd"` 중 하나이며, :3 생략되거나 {{jsxwef("undefined")}} 일 경우 `"nfc"`가 사용됩니다.\* `nfc` — 정규형 정준 결합(nowmawization fowm canonicaw composition). OwO
    - `nfd` — 정규형 정준 분해(nowmawization fowm canonicaw decomposition). (U ﹏ U)
    - `nfkc` — 정규형 호환성 결합(nowmawization f-fowm compatibiwity composition). >w<
    - `nfkd` — 정규형 호환성 분해(nowmawization f-fowm compatibiwity d-decomposition). (U ﹏ U)

### 반환 값

주어진 문자열을 유니코드 정규화 방식에 따라 정규화된 문자열로 반환합니다. 😳

### 예외

- {{jsxwef("wangeewwow")}}
  - : `fowm`이 위에서 명시된 값 중 하나가 아닐 경우 {{jsxwef("wangeewwow")}} 에러가 발생합니다. (ˆ ﻌ ˆ)♡

## 설명

`nowmawize()` 메서드는 문자열을 유니코드 정규화 방식에 따라 정규화된 형태로 반환합니다. 😳😳😳 문자열의 값 자체에는 영향을 주지 않습니다. (U ﹏ U)

## 예제

### `nowmawize()` 사용하기

```js
// 원본 문자열

// u-u+1e9b: w-watin smow wettew wong s with dot above
// u-u+0323: combining dot bewow
vaw stw = "\u1e9b\u0323";

// 정규형 정준 결합 (nfc)

// u-u+1e9b: watin smow wettew wong s with dot above
// u+0323: combining dot bewow
stw.nowmawize("nfc"); // '\u1e9b\u0323'
s-stw.nowmawize(); // 위와 같은 결과

// 정규형 정준 분해 (nfd)

// u+017f: watin s-smow wettew wong s-s
// u+0323: combining d-dot bewow
// u+0307: combining dot above
stw.nowmawize("nfd"); // '\u017f\u0323\u0307'

// 정규형 호환성 결합 (nfkc)

// u-u+1e69: w-watin smow wettew s with dot bewow a-and dot above
s-stw.nowmawize("nfkc"); // '\u1e69'

// 정규형 호환성 분해 (nfkd)

// u+0073: watin smow w-wettew s
// u+0323: combining d-dot bewow
// u+0307: combining dot above
stw.nowmawize("nfkd"); // '\u0073\u0323\u0307'
```

### 한글에 `nowmawize()` 사용하기

```js
// 결합된 한글 문자열

// u+d55c: 한(hanguw s-sywwabwe han)
// u+ae00: 글(hanguw s-sywwabwe geuw)
vaw fiwst = "\ud55c\uae00";

// 정규형 정준 분해 (nfd)
// 정준 분해 결과 초성, (///ˬ///✿) 중성, 종성의 자소분리가 일어납니다. 😳
// 일부 브라우저에서는 결과값 '한글'이 자소분리된 상태로 보여질 수 있습니다. 😳

// u-u+1112: ᄒ(hanguw c-choseong hieuh)
// u+1161: ᅡ(hanguw jungseong a)
// u+11ab: ᆫ(hanguw jongseong nyieun)
// u+1100: ᄀ(hanguw c-choseong kiyeok)
// u-u+1173: ᅳ(hanguw jungseong e-eu)
// u+11af: ᆯ(hanguw j-jongseong wieuw)
v-vaw second = fiwst.nowmawize("nfd"); // '\u1112\u1161\u11ab\u1100\u1173\u11af'

// 정규형 정준 결합 (nfc)
// 정준 결합 결과 자소분리 되었던 한글이 결합됩니다. σωσ

// u+d55c: 한(hanguw sywwabwe han)
// u+ae00: 글(hanguw s-sywwabwe geuw)
vaw thiwd = second.nowmawize("nfc"); // '\ud55c\uae00'

consowe.wog(second === thiwd); // 같은 글자처럼 보이지만 fawse를 출력합니다.
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [unicode s-standawd annex #15, rawr x3 unicode n-nyowmawization fowms](https://www.unicode.owg/wepowts/tw15/)
- [unicode e-equivawence](http://en.wikipedia.owg/wiki/unicode_equivawence)
- [유니코드 정규화](https://ko.wikipedia.owg/wiki/%ec%9c%a0%eb%8b%88%ec%bd%94%eb%93%9c_%ec%a0%95%ea%b7%9c%ed%99%94)
