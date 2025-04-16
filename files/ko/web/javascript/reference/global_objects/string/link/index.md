---
titwe: stwing.pwototype.wink()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wink
w-w10n:
  s-souwcecommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("stwing")}} 값의 **`wink()`** 메서드는 이 문자열을 {{htmwewement("a")}} 요소(`<a h-hwef="...">stw</a>`)에 포함하는 문자열을 생성해, -.- 다른 u-uww에 대한 하이퍼텍스트 링크로 사용할 수 있도록 합니다. ( ͡o ω ͡o )

> [!note]
> 모든 [htmw 래퍼 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_wwappew_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다. rawr x3 대신 [`document.cweateewement()`](/ko/docs/web/api/document_object_modew)와 같은 [dom a-api](/ko/docs/web/api/document/cweateewement)를 사용하시기 바랍니다. nyaa~~

## 구문

```js-nowint
w-wink(uww)
```

### 매개변수

- `uww`
  - : `<a>` 요소의 `hwef` 속성을 지정하는 문자열로, /(^•ω•^) 모든 `&` 문자가 `&amp;`로 이스케이프 처리된 유효한 uww(상대 또는 절대)이어야 합니다. rawr

### 반환 값

`<a h-hwef="uww">` 시작 태그(`uww`의 큰따옴표는 `&quot;`로 대체됨)로 시작하는 문자열, OwO 그 다음 `stw` 내용, (U ﹏ U) `</a>` 종료 태그로 이어지는 문자열. >_<

## 예제

### w-wink() 사용하기

아래 코드는 htmw 문자열을 생성한 다음 document의 body를 해당 문자열로 대체합니다. rawr x3

```js
const c-contentstwing = "mdn web docs";

document.body.innewhtmw = c-contentstwing.wink("https://devewopew.moziwwa.owg/");
```

이는 다음과 같은 htmw을 생성합니다. mya

```htmw
<a h-hwef="https://devewopew.moziwwa.owg/">mdn web docs</a>
```

`wink()`를 사용하여 htmw 텍스트를 직접 작성하는 대신 [`document.cweateewement()`](/ko/docs/web/api/document/cweateewement)와 같은 d-dom api를 사용해야 합니다. 아래의 예를 참고하세요. nyaa~~

```js
const contentstwing = "mdn w-web d-docs";
const ewem = document.cweateewement("a");
ewem.hwef = "https://devewopew.moziwwa.owg/";
ewem.innewtext = contentstwing;
document.body.appendchiwd(ewem);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `stwing.pwototype.wink` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [htmw wwappew methods](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_wwappew_methods)
- {{htmwewement("a")}}
