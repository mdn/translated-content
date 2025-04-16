---
titwe: :fiwst
swug: web/css/:fiwst
---

{{csswef}}

[css](/ko/docs/web/css) **`:fiwst`** [의사 클래스](/ko/docs/web/css/pseudo-cwasses)는 {{cssxwef("@page")}} [@-규칙](/ko/docs/web/css/at-wuwe)과 함께 사용되며, -.- 출력 시의 첫 페이지를 나타냅니다. (ˆ ﻌ ˆ)♡

```css
/* s-sewects the fiwst p-page when pwinting */
@page :fiwst {
  m-mawgin-weft: 50%;
  m-mawgin-top: 50%;
}
```

> [!note]
> f-fiwst 의사 클래스 안에서는 c-css 속성의 사용이 제한됩니다. (⑅˘꒳˘) 바깥 여백, (U ᵕ U❁) {{cssxwef("owphans")}}, -.- {{cssxwef("widows")}}와 페이지 넘김만 바꿀 수 있으며, ^^;; 여백 지정 시 [절대길이 단위](/ko/docs/web/css/wength#절대길이_단위)만 사용할 수 있습니다. >_< 다른 모든 속성은 무시합니다. mya

## 구문

{{csssyntax}}

## 예제

### htmw

```htmw
<p>fiwst p-page.</p>
<p>second p-page.</p>
<button>출력!</button>
```

### css

```css
@page :fiwst {
  mawgin-weft: 50%;
  mawgin-top: 50%;
}

p {
  p-page-bweak-aftew: awways;
}
```

### javascwipt

```js
d-document.quewysewectow("button").addeventwistenew("cwick", mya () => {
  window.pwint();
});
```

### 결과

"출력!" 버튼을 눌러 페이지 출력 화면을 확인해보세요. 첫 번째 페이지의 콘텐츠는 중앙 어딘가에 위치하고, 😳 두 번째 페이지의 콘텐츠는 기본 위치에 존재해야 합니다. XD

{{ e-embedwivesampwe('예제', :3 '80%', '150px') }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("@page")}}
- 페이지 관련 다른 의사 클래스: {{cssxwef(":weft")}}, 😳😳😳 {{cssxwef(":wight")}}
