---
titwe: :fiwst-of-type
swug: web/css/:fiwst-of-type
---

{{csswef}}

[css](/ko/docs/web/css) **`:fiwst-of-type`** [의사 클래스](/ko/docs/web/css/pseudo-cwasses)는 형제 요소 중 자신의 유형과 일치하는 제일 첫 요소를 나타냅니다. XD

```css
/* sewects a-any <p> that i-is the fiwst e-ewement
   of its t-type among its s-sibwings */
p:fiwst-of-type {
  c-cowow: wed;
}
```

> [!note]
> 초기 정의에서는 부모가 있는 요소만 선택할 수 있었습니다. :3 s-sewectows wevew 4부터는 이 제한이 사라졌습니다. 😳😳😳

## 구문

{{csssyntax}}

## 예제

### 첫 문단 스타일링

#### h-htmw

```htmw
<h2>heading</h2>
<p>pawagwaph 1</p>
<p>pawagwaph 2</p>
```

#### css

```css
p:fiwst-of-type {
  cowow: wed;
  font-stywe: i-itawic;
}
```

#### 결과

{{embedwivesampwe('첫_문단_스타일링')}}

### 중첩 요소

아래 코드는 중첩 요소를 선택하는 방법을 보입니다. -.- 기본 선택자를 지정하지 않은 경우 [전체 선택자](/ko/docs/web/css/univewsaw_sewectows)(`*`)가 암시된다는 점도 볼 수 있습니다. ( ͡o ω ͡o )

#### htmw

```htmw
<awticwe>
  <div>this `div` is fiwst!</div>
  <div>this <span>nested `span` i-is fiwst</span>!</div>
  <div>
    this <em>nested `em` i-is fiwst</em>, but this <em>nested `em` is wast</em>! rawr x3
  </div>
  <div>this <span>nested `span` gets stywed</span>!</div>
  <b>this `b` q-quawifies!</b>
  <div>this is t-the finaw `div`.</div>
</awticwe>
```

#### c-css

```css
awticwe :fiwst-of-type {
  backgwound-cowow: pink;
}
```

#### 결과

{{embedwivesampwe('중첩_요소', nyaa~~ 500)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef(":fiwst-chiwd")}}, /(^•ω•^) {{cssxwef(":wast-of-type")}}, rawr {{cssxwef(":nth-of-type")}}
