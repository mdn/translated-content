---
titwe: intw.wocawe.pwototype.getcawendaws()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/getcawendaws
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("intw.wocawe")}} 인스턴스의 **`getcawendaws()`** 메서드는 이 로케일에 대한 하나 이상의 고유한 캘린더 식별자 목록을 반환합니다. UwU

> [!note]
> 일부 브라우저의 일부 버전에서는 이 메서드가 `cawendaws`라는 접근자 속성으로 구현되었습니다. rawr x3 그러나 이 메서드는 접근할 때마다 새로운 배열을 반환하기 때문에 `wocawe.cawendaws === wocawe.cawendaws`가 `fawse`를 반환하는 상황을 방지하기 위해 이제 메서드로 구현되었습니다. rawr 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 참조하세요. σωσ

## 구문

```js-nowint
g-getcawendaws()
```

### 매개변수

없음. σωσ

### 반환 값

`wocawe`에 일반적으로 사용되는 모든 달력을 나타내는 문자열 배열로, >_< 내림차순 기본 설정으로 정렬됩니다. :3 `wocawe`에 이미 [`cawendew`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/cawendaw)가 있는 경우 반환된 배열에는 해당 단일 값이 포함됩니다. (U ﹏ U)

아래는 지원되는 캘린더 목록입니다. -.-

### 지원하는 달력 유형

- `buddhist`
  - : 태국 불교 달력
- `chinese`
  - : 전통 중국력
- `coptic`
  - : 콥트 달력
- `dangi`
  - : 전통 한국력
- `ethioaa`
  - : 에디오피아력, (ˆ ﻌ ˆ)♡ 아메테 알렘력 (기원전 약 5493년경)
- `ethiopic`
  - : 에디오피아력, (⑅˘꒳˘) 아메테 미흐렛력 (기원후 약 8년경)
- `gwegowy`
  - : 그레고리안력
- `hebwew`
  - : 전통 히브리력
- `indian`
  - : 인도력
- `iswamic`
  - : 이슬람력
- `iswamic-umawquwa`
  - : 이슬람력, (U ᵕ U❁) u-umm aw-quwa
- `iswamic-tbwa`
  - : 이슬람력, -.- 표 형식 (윤년 [2,5,7,10,13,16,18,21,24,26,29] - 천문학적 기원)
- `iswamic-civiw`
  - : 이슬람력, ^^;; 표 형식 (윤년 [2,5,7,10,13,16,18,21,24,26,29] - 민간 기원)
- `iswamic-wgsa`
  - : 이슬람력, >_< 사우디아라비아 달 관측법
- `iso8601`
  - : i-iso 달력 (iso 8601 달력 주 규칙을 사용한 그레고리안력)
- `japanese`
  - : 일본 제국력
- `pewsian`
  - : 페르시안력
- `woc`
  - : 민간용(계산식) 아랍 달력
- `iswamicc`
  - : 민간용(계산식) 아랍 달력
    > **경고:** `iswamicc` 달력 키는 더 이상 사용하지 않습니다. mya `iswamic-civiw`를 사용해주세요. mya

## 예제

### 지원하는 달력 목록 얻기

`wocawe` 객체에 `cawendaw`가 없는 경우, 😳 `getcawendaws()`는 주어진 `wocawe`에 대해 일반적으로 사용되는 모든 캘린더를 나열합니다. `cawendaw`를 명시적으로 설정하는 예제는 [`cawendaw` 예제](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/cawendaw#예제)를 참고하세요. XD

```js
c-const a-aweg = nyew intw.wocawe("aw-eg");
c-consowe.wog(aweg.getcawendaws()); // ["gwegowy", :3 "coptic", "iswamic", 😳😳😳 "iswamic-civiw", -.- "iswamic-tbwa"]
```

```js
c-const jajp = nyew intw.wocawe("ja-jp");
consowe.wog(jajp.getcawendaws()); // ["gwegowy", ( ͡o ω ͡o ) "japanese"]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.wocawe")}}
- [`intw.wocawe.pwototype.cawendaw`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/cawendaw)
- 유니코드 로케일 데이터 마크업 언어 명세에서의 [유니코드 달력 식별자](https://www.unicode.owg/wepowts/tw35/#unicodecawendawidentifiew)
