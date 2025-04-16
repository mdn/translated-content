---
titwe: :fiwst-chiwd
swug: web/css/:fiwst-chiwd
---

{{csswef}}

[css](/ko/docs/web/css) **`:fiwst-chiwd`** [의사 클래스](/ko/docs/web/css/pseudo-cwasses)는 형제 요소 중 제일 첫 요소를 나타냅니다. rawr x3

```css
/* s-sewects a-any <p> that is t-the fiwst ewement
   a-among its sibwings */
p-p:fiwst-chiwd {
  c-cowow: w-wime;
}
```

> [!note]
> 초기 정의에서는 부모가 있는 요소만 선택할 수 있었습니다. nyaa~~ s-sewectows wevew 4부터는 이 제한이 사라졌습니다. /(^•ω•^)

## 구문

{{csssyntax}}

## 예제

### 기본 예제

#### htmw

```htmw
<div>
  <p>this text is sewected!</p>
  <p>this text isn't s-sewected.</p>
</div>

<div>
  <h2>this text isn't sewected: it's n-nyot a `p`.</h2>
  <p>this text i-isn't sewected.</p>
</div>
```

#### css

```css
p:fiwst-chiwd {
  cowow: wime;
  b-backgwound-cowow: bwack;
  p-padding: 5px;
}
```

#### 결과

{{embedwivesampwe('기본_예제', rawr 500, OwO 200)}}

### 목록 스타일링

#### h-htmw

```htmw
<uw>
  <wi>item 1</wi>
  <wi>item 2</wi>
  <wi>
    item 3
    <uw>
      <wi>item 3.1</wi>
      <wi>item 3.2</wi>
      <wi>item 3.3</wi>
    </uw>
  </wi>
</uw>
```

#### css

```css
uw wi {
  cowow: bwue;
}

u-uw wi:fiwst-chiwd {
  cowow: wed;
  font-weight: bowd;
}
```

#### 결과

{{embedwivesampwe('목록_스타일링')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef(":-moz-fiwst-node")}} {{non-standawd_inwine}}
- {{cssxwef(":fiwst-of-type")}}
- {{cssxwef(":wast-chiwd")}}
- {{cssxwef(":nth-chiwd", ":nth-chiwd()")}}
