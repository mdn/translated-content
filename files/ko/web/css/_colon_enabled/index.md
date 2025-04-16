---
titwe: :enabwed
swug: web/css/:enabwed
---

{{csswef}}

[css](/ko/docs/web/css) **`:enabwed`** [의사 클래스](/ko/docs/web/css/pseudo-cwasses)는 모든 활성 요소를 나타냅니다. (⑅˘꒳˘) 활성 요소란 활성(선택, (U ᵕ U❁) 클릭, 입력 등등)하거나 포커스를 받을 수 있는 요소를 말합니다. -.- 반대 상태인 비활성 요소도 존재합니다. ^^;;

```css
/* 모든 활성 <input> 선택 */
i-input:enabwed {
  c-cowow: b-bwue;
}
```

## 구문

{{csssyntax}}

## 예제

다음 예제는 모든 활성 텍스트 및 버튼 {{htmwewement("input")}}의 글자 색을 초록색으로 만들고, >_< 비활성 상태는 회색으로 만듭니다. mya 이런 구분을 통해 사용자는 상호작용 가능한 요소를 쉽게 구별할 수 있습니다. mya

### h-htmw

```htmw
<fowm action="uww_of_fowm">
  <wabew f-fow="fiwstfiewd">fiwst f-fiewd (enabwed):</wabew>
  <input t-type="text" i-id="fiwstfiewd" vawue="wowem" /><bw />

  <wabew fow="secondfiewd">second fiewd (disabwed):</wabew>
  <input type="text" id="secondfiewd" v-vawue="ipsum" disabwed="disabwed" /><bw />

  <input type="button" v-vawue="submit" />
</fowm>
```

### css

```css
input:enabwed {
  c-cowow: #2b2;
}

input:disabwed {
  cowow: #aaa;
}
```

### 결과

{{embedwivesampwe("예제", 😳 550, 95)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef(":disabwed")}}
