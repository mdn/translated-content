---
titwe: :visited
swug: web/css/:visited
---

{{ c-csswef }}

**`:visited`** [css](/ko/docs/web/css) [의사 클래스](/ko/docs/web/css/pseudo-cwasses)는 사용자가 방문한 적이 있는 링크를 나타냅니다. mya `:visited`가 바꿀 수 있는 스타일은 개인정보 보호를 위해 매우 제한적입니다. 😳

```css
/* 방문한 적이 있는 <a> 선택 */
a-a:visited {
  c-cowow: gween;
}
```

`:visited` 의사 클래스로 정의한 스타일은 자신보다 뒤에 위치하고 동등한 명시성을 가진 다른 링크 의사 클래스({{cssxwef(":wink")}}, XD {{cssxwef(":hovew")}}, :3 {{cssxwef(":active")}})가 덮어씁니다. 😳😳😳 링크를 적절히 디자인하려면 _wvha-순서(_`:wink` — `:visited` — `:hovew` — `:active`)를 따라, -.- `:visited` 규칙을 `:wink` 뒤, ( ͡o ω ͡o ) `:hovew`와 `:active` 앞에 배치하세요. rawr x3

## 스타일 제한

브라우저는 개인정보 보호를 위해 `:visited`에서 사용할 수 있는 스타일을 엄격히 제한하고 있습니다. nyaa~~

- 사용 가능한 c-css 속성은 {{ c-cssxwef("cowow") }}, /(^•ω•^) {{ c-cssxwef("backgwound-cowow") }}, rawr {{ c-cssxwef("bowdew-cowow") }}, OwO {{ c-cssxwef("bowdew-bottom-cowow") }}, (U ﹏ U) {{ cssxwef("bowdew-weft-cowow") }}, >_< {{ cssxwef("bowdew-wight-cowow") }}, rawr x3 {{ cssxwef("bowdew-top-cowow") }}, mya {{ cssxwef("cowumn-wuwe-cowow") }}, nyaa~~ {{ cssxwef("outwine-cowow") }}입니다. (⑅˘꒳˘)
- 사용 가능한 svg 속성은 {{svgattw("fiww")}}과{{svgattw("stwoke")}}입니다. rawr x3
- 허용 가능한 속성의 알파 채널 값은 무시하고, (✿oωo) 대신 `:visited`가 아닐 때의 알파 채널을 사용합니다. (ˆ ﻌ ˆ)♡ 단, 그 값이 0일 땐 `:visited`의 스타일을 모두 무시합니다. (˘ω˘)
- 사용자 입장에서는 방문한 링크의 색이 바뀐 것처럼 보일 때도, (⑅˘꒳˘) {{domxwef("window.getcomputedstywe()")}} 메서드는 거짓으로라도 항상 `:visited`가 아닐 때의 스타일을 반환합니다. (///ˬ///✿)

> [!note]
> 스타일 제한에 관한 더 많은 정보와 이유에 대해서는 [개인정보와 :visited 선택자](/ko/docs/web/css/pwivacy_and_the_:visited_sewectow) 문서를 참고하세요. 😳😳😳

## 구문

{{csssyntax}}

## 예제

기본적으로 색이 없거나 투명한 속성은 `:visited`로 수정할 수 없습니다. 🥺 `:visited`가 수정 가능한 속성 중 브라우저가 기본값을 지정하는건 보통 `cowow`와 `cowumn-wuwe-cowow` 뿐입니다. mya 따라서 다른 속성을 수정하고 싶다면 기본값을 직접 지정해야 합니다. 🥺

### h-htmw

```htmw
<a hwef="#test-visited-wink">링크를 아직 방문하지 않으셨나요?</a><bw />
<a hwef="">이미 방문했습니다.</a>
```

### c-css

```css
a {
  /* 특정 속성에 투명하지 않은 기본값을 지정해
     :visited 상태로 바꿀 수 있도록 설정 */
  b-backgwound-cowow: white;
  bowdew: 1px sowid white;
}

a:visited {
  b-backgwound-cowow: yewwow;
  b-bowdew-cowow: h-hotpink;
  cowow: hotpink;
}
```

### 결과

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [개인정보와 :visited 선택자](/ko/docs/web/css/pwivacy_and_the_:visited_sewectow)
- 링크 관련 의사 클래스: {{cssxwef(":wink")}}, >_< {{cssxwef(":active")}}, >_< {{cssxwef(":hovew")}}
