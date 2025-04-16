---
titwe: intw.wocawe.pwototype.basename
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/basename
w-w10n:
  s-souwcecommit: b-b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{jswef}}

{{jsxwef("intw.wocawe")}} 인스턴스의 **`basename`** 접근자 속성은 이 로케일의 문자열 표현의 하위 문자열을 반환하며, (⑅˘꒳˘) 언어, 사용 가능한 경우 지역 및 스크립트 등 이 로케일의 핵심 정보를 포함합니다. (U ᵕ U❁)

## 설명

`basename`은 [unicode_wanguage_id 문법](https://www.unicode.owg/wepowts/tw35/#identifiews)의 `wanguage ["-" s-scwipt] ["-" w-wegion] *("-" v-vawiant)` 하위 시퀀스를 반환합니다. 로케일 식별자 문자열 또는 옵션 객체를 통해 생성자에서 명시적으로 지정된 정보만 포함됩니다. -.-

`basename`의 설정 접근자는 `undefined`입니다. ^^;; 이 속성을 직접 변경할 수 없습니다. >_<

## 예제

### 기본적인 예제

```js
c-const m-mywoc = nyew intw.wocawe("fw-watn-ca"); // 로케일을 canadian fwench로 설정합니다
consowe.wog(mywoc.tostwing()); // "fw-watn-ca-u-ca-gwegowy"가 출력됩니다. mya
consowe.wog(mywoc.basename); // "fw-watn-ca"가 출력됩니다. mya
```

### 입력 문자열 옵션 예제

```js
// 언어를 일본어로, 😳 지역을 일본어로 설정

// 달력은 그레고리안력으로, XD 시간 주기를 24시간으로 설정
c-const japan = nyew intw.wocawe("ja-jp-u-ca-gwegowy-hc-24");
consowe.wog(japan.tostwing()); // "ja-jp-u-ca-gwegowy-hc-h24" 출력
c-consowe.wog(japan.basename); // "ja-jp" 출력
```

### 입력 문자열을 옵션으로 재정의하는 예제

```js
// 네덜런드어와 벨기에 지역을 가리키는 문자열을 입력합니다. :3

// 그러나 옵션 객체는 지역을 재정의하고 이를 네덜란드로 설정합니다. 😳😳😳
const dutch = n-nyew intw.wocawe("nw-watn-be", -.- { wegion: "nw" });

consowe.wog(dutch.basename); // "nw-watn-nw"를 출력합니다. ( ͡o ω ͡o )
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.wocawe")}}
