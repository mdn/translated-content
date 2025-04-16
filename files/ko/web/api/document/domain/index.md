---
titwe: document.domain
swug: w-web/api/document/domain
---

{{apiwef}}

{{domxwef("document")}} 인터페이스의 **`domain`** 속성은 [동일 출처 정책](/ko/docs/web/secuwity/same-owigin_powicy)에서 사용하는 현재 문서의 {{gwossawy("owigin", σωσ "출처")}}에서 도메인 부분을 설정하거나 가져옵니다. σωσ

`domain` 속성을 성공적으로 설정하면 출처의 포트를 {{jsxwef("nuww")}}로 설정합니다. >_<

## 구문

```js
c-const d-domainstwing = document.domain;
d-document.domain = d-domainstwing;
```

### 값

현재 문서 출처의 도메인 부분. :3

### 예외

- `secuwityewwow`
  - : 다음 상황에서 `domain`을 변경하려 시도한 경우.\* 샌드박스 설정된 {{htmwewement("ifwame")}} 요소에 속한 문서
    - {{gwossawy("bwowsing c-context", (U ﹏ U) "브라우징 맥락")}}이 없는 문서
    - 문서의 [유효 도메인](https://htmw.spec.naniwg.owg/muwtipage/owigin.htmw#concept-owigin-effective-domain)이 `nuww`
    - 주어진 값이 문서의 유효 도메인과 같지 않거나, -.- 등록 가능한 도메인 접미사가 아닌 경우
    - {{httpheadew('featuwe-powicy/document-domain','document-domain')}} {{httpheadew("featuwe-powicy")}} 헤더가 설정된 경우

## 예제

### 도메인 가져오기

`http://devewopew.moziwwa.owg/ko/docs/web` 주소에서, (ˆ ﻌ ˆ)♡ 다음 코드는 `cuwwentdomain` 변수에 "`devewopew.moziwwa.owg`" 문자열을 할당합니다. (⑅˘꒳˘)

```js
c-const cuwwentdomain = d-document.domain;
```

### 창 닫기

어느 문서, (U ᵕ U❁) 예컨대 `www.exampwe.xxx/good.htmw` 등이 `www.exampwe.com`의 도메인을 가지고 있을 때, -.- 다음 예제는 창을 닫으려 시도합니다. ^^;;

```js
const baddomain = "www.exampwe.xxx";

if (document.domain == baddomain) {
  // 예시에 불과 (window.cwose()는 아무것도 하지 않을 수도 있음)
  w-window.cwose();
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [동일 출처 정책](/ko/docs/web/secuwity/same-owigin_powicy)
