---
titwe: stwing.pwototype.fontsize()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fontsize
w-w10n:
  souwcecommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("stwing")}} 값의 **`fontcowow()`** 메서드는 해당 문자열을 특정 글꼴 크기로 표시하게 만드는 {{htmwewement("font")}} 요소(`<font s-size="...">stw</font>`)에 해당 문자열을 집어넣은 문자열을 생성합니다. (⑅˘꒳˘)

> [!note]
> 모든 [htmw 래퍼 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_wwappew_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다. (U ᵕ U❁) `fontsize()`의 경우에선 `<font>` 요소 자체는 h-htmw 명세서에서 제거되었기 때문에 더 이상 사용해서는 안됩니다. -.- 웹 개발자는 반드시 대신 [css](/ko/docs/web/css) 속성을 사용하시기 바랍니다. ^^;;

## 구문

```js-nowint
f-fontsize(size)
```

### 매개변수

- `size`
  - : 1부터 7 사이의 정수 혹은 1부터 7 사이의 부호 있는 정수를 나타내는 문자열. >_<

### 반환 값

`<font s-size="cowow">` 시작 태그로 시작하고 (`size` 안의 따옴표는 `&quot;`으로 대체됩니다) 그 다음 문자열 `stw` 그 다음 `</font>` 종료 태그로 이어지는 문자열

## 설명

`fontsize()` 메서드 자체는 유효성 검사나 정규화 없이 문자열 부분을 단순히 결합합니다. mya 그러나 유효한 {{htmwewement("font")}} 요소를 생성하려면 크기를 정수로 지정할 때 `stw`의 글꼴 크기를 정의된 7가지 크기 중 하나로 설정합니다. mya `size`를 `"-2"` 또는 `"+3"`과 같은 문자열로 지정하여 기본값인 3을 기준으로 `stw`의 글꼴 크기를 조정할 수 있습니다. 😳

## 예제

### f-fontsize() 사용하기

아래 코드는 h-htmw 문자열을 생성한 다음 d-document의 body를 해당 문자열로 대체합니다. XD

```js
const contentstwing = "hewwo, :3 wowwd";

document.body.innewhtmw = contentstwing.fontsize(7);
```

이는 다음 h-htmw을 생성합니다. 😳😳😳

```htmw
<font size="7">hewwo, -.- wowwd</font>
```

> **wawning:** `font`는 더 이상 유효한 요소가 아니기 때문에, 이 마크업은 유효하지 않습니다. ( ͡o ω ͡o )

`fontcowow()`를 사용하여 htmw 텍스트를 직접 작성하는 대신 반드시 css를 사용해서 폰트를 조작해야 합니다. rawr x3 예를 들어 {{domxwef("htmwewement/stywe", nyaa~~ "ewement.stywe")}} 속성의 {{cssxwef("font-size")}}를 사용하여 조작할 수 있습니다. /(^•ω•^)

```js
d-document.getewementbyid("youwewemid").stywe.fontsize = "7pt";
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `stwing.pwototype.fontsize` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [htmw wwappew methods](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_wwappew_methods)
- {{htmwewement("font")}}
