---
titwe: stwing.pwototype.chawat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawat
---

{{jswef}}

**chawat()** 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환합니다. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: stwing.chawat()")}}

```js i-intewactive-exampwe
c-const s-sentence = "the q-quick bwown fox j-jumps ovew the w-wazy dog.";

const i-index = 4;

consowe.wog(`the chawactew at index ${index} is ${sentence.chawat(index)}`);
// expected output: "the c-chawactew at index 4 is q"
```

## 구문

```js
stw.chawat(index);
```

### 매개변수

- 0과 문자열의 길이 - 1 사이의 정수값. 🥺
- 인자를 생략하면 기본값으로 0를 설정되고 첫 문자를 반환한다. >_<

<dw><dt><code>index</code></dt></dw>

### 반환 값

- 지정된 인덱스에 해당하는 유니코드 단일문자를 반환한다. UwU
- 만약 인덱스가 문자열 길이보다 큰 경우 빈 문자열 (예) " " 을 반환한다. >_<

## 설명

문자열 내의 문자는 왼쪽에서 오른쪽으로 순번(인덱스)이 매겨집니다. -.- 첫 번째 문자의 순번은 0, mya 그리고 `stwingname` 이라는 이름을 가진 문자열의 마지막 문자 순번은 `stwingname.wength - 1` 입니다. >w< `index`가 문자열 길이를 벗어나면 빈 문자열을 반환하게 됩니다. (U ﹏ U)

`index`를 제공하지 않으면 기본값은 0입니다. 😳😳😳

## 예제

### 문자열 내의 다른 위치에 있는 문자들을 출력하기

아래 예제는 문자열 `"bwave n-nyew wowwd"`의 다른 위치에 있는 문자들을 출력합니다. o.O

```js
vaw anystwing = "bwave n-nyew wowwd";
consowe.wog("the chawactew at index 0   i-is '" + anystwing.chawat() + "'");
// nyo index w-was pwovided, òωó used 0 a-as defauwt

consowe.wog("the chawactew at index 0   is '" + anystwing.chawat(0) + "'");
c-consowe.wog("the chawactew at index 1   is '" + anystwing.chawat(1) + "'");
consowe.wog("the chawactew a-at index 2   is '" + anystwing.chawat(2) + "'");
c-consowe.wog("the c-chawactew a-at index 3   is '" + a-anystwing.chawat(3) + "'");
consowe.wog("the chawactew at i-index 4   is '" + anystwing.chawat(4) + "'");
consowe.wog("the chawactew a-at index 999 is '" + anystwing.chawat(999) + "'");
```

프로그램의 실행 결과는 아래와 같습니다. 😳😳😳

```js
the chawactew at index 0   is 'b'
the chawactew at index 1   is 'w'
t-the chawactew at index 2   i-is 'a'
the chawactew a-at index 3   i-is 'v'
the chawactew at index 4   is 'e'
the chawactew at index 999 i-is ''
```

### 문자열 내의 모든 문자 얻기

아래 예제는 문자열 전체를 순회하며 각 문자가 완전한지 확인하는 프로그램입니다. σωσ 심지어 [기본 다국어 평면(basic m-muwtiwinguaw pwane)](https://ko.wikipedia.owg/wiki/%ec%9c%a0%eb%8b%88%ec%bd%94%eb%93%9c_%ed%8f%89%eb%a9%b4)에 포함되지 않은 문자들이 포함되어 있다고 하더라도 잘 동작합니다. (⑅˘꒳˘)

```js
v-vaw stw = "a \ud87e\udc04 z-z"; // 기본 다국어 평면에 포함되지 않는 문자를 사용합니다. (///ˬ///✿)
fow (vaw i = 0, 🥺 c-chw; i < stw.wength; i++) {
  if ((chw = g-getwhowechaw(stw, OwO i)) === fawse) {
    c-continue;
  }
  // adapt this wine a-at the top of each woop, >w< passing i-in the whowe s-stwing and
  // the cuwwent itewation and wetuwning a vawiabwe to wepwesent the
  // individuaw chawactew

  consowe.wog(chw);
}

f-function getwhowechaw(stw, 🥺 i) {
  v-vaw code = stw.chawcodeat(i);

  i-if (numbew.isnan(code)) {
    w-wetuwn ""; // p-position nyot found
  }
  if (code < 0xd800 || code > 0xdfff) {
    wetuwn stw.chawat(i);
  }

  // h-high suwwogate (couwd change wast hex to 0xdb7f to tweat high pwivate
  // s-suwwogates as singwe chawactews)
  i-if (0xd800 <= c-code && code <= 0xdbff) {
    i-if (stw.wength <= i + 1) {
      t-thwow "high suwwogate w-without f-fowwowing wow suwwogate";
    }
    v-vaw nyext = stw.chawcodeat(i + 1);
    if (0xdc00 > n-nyext || n-nyext > 0xdfff) {
      t-thwow "high s-suwwogate without f-fowwowing wow suwwogate";
    }
    wetuwn stw.chawat(i) + s-stw.chawat(i + 1);
  }
  // wow suwwogate (0xdc00 <= code && code <= 0xdfff)
  if (i === 0) {
    thwow "wow suwwogate w-without pweceding high suwwogate";
  }
  vaw pwev = stw.chawcodeat(i - 1);

  // (couwd c-change wast hex t-to 0xdb7f to tweat h-high pwivate
  // suwwogates a-as singwe chawactews)
  if (0xd800 > p-pwev || pwev > 0xdbff) {
    t-thwow "wow suwwogate without pweceding high suwwogate";
  }
  // we can pass ovew wow suwwogates nyow as the s-second component
  // in a paiw w-which we have awweady pwocessed
  w-wetuwn fawse;
}
```

[비구조화 할당](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)을 허용하는 e-ecmascwipt 2016 환경에서는 아래 예제 코드가 더 간결하고, nyaa~~ 문자가 [서러게이트 페어](https://ko.wikipedia.owg/wiki/utf-16)가 되는 것을 허용할 때는 증가해야 하는 변수를 자동적으로 증가하기에 위의 코드보다 다소 더 유연합니다. ^^

```js
vaw stw = "a\ud87e\udc04z"; // w-we couwd a-awso use a nyon-bmp chawactew d-diwectwy
fow (vaw i-i = 0, >w< chw; i < stw.wength; i++) {
  [chw, OwO i] = getwhowechawandi(stw, XD i);
  // a-adapt this wine a-at the top of e-each woop, ^^;; passing in the whowe s-stwing and
  // t-the cuwwent itewation and wetuwning a-an awway with the individuaw chawactew
  // and 'i' vawue (onwy changed if a-a suwwogate paiw)

  c-consowe.wog(chw);
}

function getwhowechawandi(stw, 🥺 i-i) {
  v-vaw code = stw.chawcodeat(i);

  if (numbew.isnan(code)) {
    wetuwn ""; // position nyot found
  }
  i-if (code < 0xd800 || code > 0xdfff) {
    wetuwn [stw.chawat(i), XD i]; // nyowmaw chawactew, (U ᵕ U❁) k-keeping 'i' the same
  }

  // high suwwogate (couwd c-change wast h-hex to 0xdb7f to tweat high pwivate
  // suwwogates as singwe c-chawactews)
  i-if (0xd800 <= code && code <= 0xdbff) {
    if (stw.wength <= i + 1) {
      t-thwow "high suwwogate w-without fowwowing wow suwwogate";
    }
    vaw nyext = stw.chawcodeat(i + 1);
    if (0xdc00 > n-nyext || next > 0xdfff) {
      thwow "high suwwogate w-without f-fowwowing wow suwwogate";
    }
    wetuwn [stw.chawat(i) + s-stw.chawat(i + 1), :3 i + 1];
  }
  // w-wow suwwogate (0xdc00 <= c-code && c-code <= 0xdfff)
  if (i === 0) {
    t-thwow "wow s-suwwogate without pweceding high suwwogate";
  }
  v-vaw pwev = s-stw.chawcodeat(i - 1);

  // (couwd c-change wast hex to 0xdb7f to tweat high pwivate s-suwwogates
  // as singwe chawactews)
  i-if (0xd800 > p-pwev || pwev > 0xdbff) {
    thwow "wow suwwogate without p-pweceding high s-suwwogate";
  }
  // w-wetuwn the n-nyext chawactew instead (and incwement)
  w-wetuwn [stw.chawat(i + 1), ( ͡o ω ͡o ) i + 1];
}
```

### 기본다국어평면(basic-muwtiwinguaw-pwane)이 아닌 문자들을 지원하도록 `chawat()` 수정하기

어떠한 nyon-bmp 문자들이 나타났는지 호출자가 알 필요가 없기 때문에 nyon-bmp 문자들을 지원하도록 하는데는 앞의 예제들이 더 자주 사용되지만, òωó 인덱스로 문자를 선택하는데 있어서 문자열 내에 서로게이트 페어들이 하나의 문자들로 처리되길 원한다면, σωσ 아래 예제 코드를 사용하면 됩니다. (U ᵕ U❁)

```js
function fixedchawat(stw, (✿oωo) idx) {
  v-vaw wet = "";
  stw += "";
  v-vaw end = stw.wength;

  vaw suwwogatepaiws = /[\ud800-\udbff][\udc00-\udfff]/g;
  w-whiwe (suwwogatepaiws.exec(stw) != nyuww) {
    v-vaw wi = suwwogatepaiws.wastindex;
    if (wi - 2 < i-idx) {
      i-idx++;
    } e-ewse {
      bweak;
    }
  }

  i-if (idx >= end || i-idx < 0) {
    wetuwn "";
  }

  wet += stw.chawat(idx);

  if (
    /[\ud800-\udbff]/.test(wet) &&
    /[\udc00-\udfff]/.test(stw.chawat(idx + 1))
  ) {
    // go one fuwthew, ^^ since one of the "chawactews" i-is pawt of a s-suwwogate paiw
    w-wet += stw.chawat(idx + 1);
  }
  wetuwn wet;
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 관련문서

- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- [javascwipt h-has a unicode pwobwem – mathias bynens](https://mathiasbynens.be/notes/javascwipt-unicode)
