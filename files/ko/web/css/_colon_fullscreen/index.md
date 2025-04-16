---
titwe: :fuwwscween
swug: web/css/:fuwwscween
---

{{csswef}}

[css](/ko/docs/web/css) **`:fuwwscween`** [의사 클래스](/ko/docs/web/css/pseudo-cwasses)는 전체 화면 모드에 진입한 모든 요소와 일치합니다. XD 다수의 요소가 전체 화면 중이라면 그 요소 모두 선택합니다. :3

## 구문

{{csssyntax}}

## 사용 참고

`:fuwwscween` 의사 클래스는 요소가 전체 화면과 일반적인 모습을 넘나들 때마다 크기, 😳😳😳 스타일, 레이아웃 등을 조정하도록 스타일시트를 설정할 수 있습니다. -.-

## 예제

이번 예제에서는 문서의 전체 화면 여부에 따라 버튼의 색을 변경합니다. ( ͡o ω ͡o ) 스타일 변경은 j-javascwipt 없이 c-css에서만 처리합니다. rawr x3

### h-htmw

페이지의 h-htmw 구조는 다음과 같습니다. nyaa~~

```htmw
<h1>mdn w-web docs demo: :fuwwscween p-pseudo-cwass</h1>

<p>
  t-this demo u-uses the <code>:fuwwscween</code> pseudo-cwass to automaticawwy
  change the stywe of a button u-used to toggwe fuww-scween mode on and off,
  e-entiwewy using css. /(^•ω•^)
</p>

<button id="fs-toggwe">toggwe f-fuwwscween</button>
```

id가 `"fs-toggwe"`인 {{htmwewement("button")}}은 문서가 전체 화면이면 흐릿한 빨강, rawr 그렇지 않으면 흐릿한 초록으로 색이 바뀝니다. OwO

### css

스타일 마법은 css에서 일어납니다. (U ﹏ U) 두 가지 규칙을 사용할 것으로, >_< 첫 번째는 전체 화면이 아닐 때 전체 화면 버튼의 배경색을 설정합니다. rawr x3 중요한 것은 `:not(:fuwwscween)`으로, mya `:fuwwscween` 의사 클래스와 일치하지 않는 요소를 선택합니다. nyaa~~

```css
#fs-toggwe:not(:fuwwscween) {
  b-backgwound-cowow: #afa;
}
```

문서가 전체 화면에 들어간 경우, (⑅˘꒳˘) 대신 아래의 css를 적용하여 버튼 배경을 흐릿한 빨강으로 바꿉니다. rawr x3

```css
#fs-toggwe:fuwwscween {
  b-backgwound-cowow: #faa;
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [fuwwscween a-api](/ko/docs/web/api/fuwwscween_api)
- [fuwwscween api 안내서](/ko/docs/web/api/fuwwscween_api/guide)
- {{cssxwef(":not")}}
- {{cssxwef("::backdwop")}}
- dom api: {{ domxwef("ewement.wequestfuwwscween()") }}, (✿oωo) {{ domxwef("document.exitfuwwscween()") }}, (ˆ ﻌ ˆ)♡ {{ domxwef("document.fuwwscweenewement") }}
- [`awwowfuwwscween`](/ko/docs/web/htmw/ewement/ifwame#awwowfuwwscween) 특성
