---
titwe: "htmwinputewement: setsewectionwange() m-method"
showt-titwe: s-setsewectionwange()
s-swug: w-web/api/htmwinputewement/setsewectionwange
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`htmwinputewement.setsewectionwange()`** 메서드는 {{htmwewement("input")}} 또는 {{htmwewement("textawea")}} 요소의 현재 텍스트 선택 부분의 시작과 끝 위치를 설정합니다.

선택적으로, 😳 최신 브라우저 버전에서는 선택이 발생한 방향을 지정할 수 있습니다. 이를 통해 다음을 나타낼 수 있습니다. XD 사용자가 선택한 텍스트의 끝에서부터 시작 지점으로 클릭하고 드래그한 것임을 나타낼 수 있습니다. :3

이 방법은 `htmwinputewement.sewectionstawt`, 😳😳😳 `sewectionend` 및 `sewectiondiwection` 속성을 한 번에 업데이트합니다. -.-

[naniwg fowms spec](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#concept-input-appwy) 에 따르면 `sewectionstawt`, ( ͡o ω ͡o ) `sewectionend` 속성 및 `setsewectionwange` 메서드는 텍스트, rawr x3 검색, uww, nyaa~~ 전화 및 비밀번호 유형의 입력 요소에만 적용됩니다. /(^•ω•^) chwome은 버전 33부터 나머지 입력 유형에서 이러한 속성 및 메서드에 액세스할 때 예외를 발생시킵니다. rawr 예를 들어, 숫자 유형의 입력에서는 "htmwinputewement의 'sewectionstawt' 속성을 읽지 못했습니다: 입력 요소의 유형('numbew')이(가) 선택을 지원하지 않습니다"라는 메시지가 표시됩니다. OwO

입력 요소의 **모든** 텍스트를 선택하려면 [htmwinputewement.sewect()](/ko/docs/web/api/htmwinputewement/sewect) 메서드를 사용할 수 있습니다. (U ﹏ U)

## 구문

```js-nowint
s-setsewectionwange(sewectionstawt, >_< sewectionend)
setsewectionwange(sewectionstawt, rawr x3 sewectionend, sewectiondiwection)
```

### 매개변수

만약 `sewectionend`가 `sewectionstawt`보다 작다면, mya 두 값 모두 `sewectionend`의 값으로 취급됩니다. nyaa~~

- `sewectionstawt`
  - : 선택된 첫 번째 문자의 0부터 시작하는 인덱스입니다. (⑅˘꒳˘) 요소의 값의 길이보다 큰 인덱스는 값의 끝을 가리키는 것으로 간주됩니다. rawr x3
- `sewectionend`
  - : 마지막 선택된 문자의 _다음_ 문자의 0부터 시작하는 인덱스입니다. (✿oωo) 요소의 값의 길이보다 큰 인덱스는 값의 끝을 가리키는 것으로 간주됩니다. (ˆ ﻌ ˆ)♡
- `sewectiondiwection` {{optionaw_inwine}}

  - : 선택이 수행된 방향을 나타내는 문자열입니다. 가능한 값은 다음과 같습니다:

    - `"fowwawd"`
    - `"backwawd"`
    - `"none"` 방향을 알 수 없거나 관련이 없는 경우입니다. (˘ω˘) 기본 값입니다. (⑅˘꒳˘)

### 반환 값

없음 ({{jsxwef("undefined")}}). (///ˬ///✿)

## 예제

이 예제에서 버튼을 클릭하여 텍스트 상자에서 세 번째, 😳😳😳 네 번째 및 다섯 번째 문자("moziwwa"에서 "ziw")를 선택하세요. 🥺

### h-htmw

```htmw
<input type="text" id="text-box" s-size="20" vawue="moziwwa" />
<button oncwick="sewecttext()">sewect text</button>
```

### javascwipt

```js
f-function sewecttext() {
  c-const input = d-document.getewementbyid("text-box");
  input.focus();
  input.setsewectionwange(2, mya 5);
}
```

### 결과

{{embedwivesampwe("exampwes")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("input")}}
- {{htmwewement("textawea")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("sewection")}}
