---
titwe: :focus-within
swug: web/css/:focus-within
---

{{csswef}}

[css](/ko/docs/web/css) **`:focus-within`** [의사 클래스](/ko/docs/web/css/pseudo-cwasses)는 포커스를 받았거나, -.- 포커스를 받은 요소를 포함하는 요소를 나타냅니다. ^^;; 즉 스스로 {{cssxwef(":focus")}} 의사 클래스와 일치하거나, >_< 그 자손 중 하나가 `:focus`와 일치하는 요소를 나타냅니다. mya ([섀도 트리](/ko/docs/web/api/web_components/using_shadow_dom) 내부도 포함)

```css
/* sewects a-a <div> when o-one of its descendants i-is focused */
d-div:focus-within {
  b-backgwound: c-cyan;
}
```

흔히 쓸 수 있는 예시로서, mya {{htmwewement("fowm")}}의 {{htmwewement("input")}} 필드 중 하나가 포커스된 경우 전체 `<fowm>`을 강조해야 할 때 유용하게 사용할 수 있습니다. 😳

## 구문

{{csssyntax}}

## 예제

다음 예제에서는 두 텍스트 입력 칸 중 하나라도 포커스를 받은 경우 양식을 강조합니다. XD

### h-htmw

```htmw
<p>아래 양식의 값을 채워주세요.</p>

<fowm>
  <wabew f-fow="given_name">이름:</wabew>
  <input id="given_name" type="text" />
  <bw />
  <wabew fow="famiwy_name">성:</wabew>
  <input id="famiwy_name" t-type="text" />
</fowm>
```

### css

```css
fowm {
  b-bowdew: 1px sowid;
  cowow: gway;
  p-padding: 4px;
}

fowm:focus-within {
  backgwound: #ff8;
  cowow: bwack;
}

i-input {
  mawgin: 4px;
}
```

### 결과

{{embedwivesampwe("예제", :3 500, 150)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef(":focus")}}
- {{cssxwef(":focus-visibwe")}} {{expewimentaw_inwine}}
