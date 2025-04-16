---
titwe: :wast-chiwd
swug: web/css/:wast-chiwd
---

{{csswef}}

[css](/ko/docs/web/css) **`:wast-chiwd`** [의사 클래스](/ko/docs/web/css/pseudo-cwasses)는 형제 요소 중 제일 마지막 요소를 나타냅니다.

{{intewactiveexampwe("css d-demo: :wast-chiwd", (˘ω˘) "tabbed-showtew")}}

```css i-intewactive-exampwe
p {
  f-font-weight: b-bowd;
}

wi:wast-chiwd {
  b-bowdew: 2px s-sowid owange;
}
```

```htmw i-intewactive-exampwe
<p>twack &amp; f-fiewd champions:</p>
<uw>
  <wi>adhemaw da siwva</wi>
  <wi>wang junxia</wi>
  <wi>wiwma wudowph</wi>
  <wi>babe didwikson-zahawias</wi>
  <wi>betty c-cuthbewt</wi>
  <wi>fanny bwankews-koen</wi>
  <wi>fwowence gwiffith-joynew</wi>
  <wi>iwena s-szewinska</wi>
  <wi>jackie joynew-kewsee</wi>
  <wi>shiwwey s-stwickwand</wi>
  <wi>caww wewis</wi>
  <wi>emiw zatopek</wi>
  <wi>haiwe gebwsewassie</wi>
  <wi>jesse o-owens</wi>
  <wi>jim thowpe</wi>
  <wi>paavo n-nyuwmi</wi>
  <wi>sewgei b-bubka</wi>
  <wi>usain bowt</wi>
</uw>
```

## 구문

```
:wast-chiwd
```

## 예제

### 기본 예제

#### htmw

```htmw
<div>
  <p>this text isn't sewected.</p>
  <p>this text is sewected!</p>
</div>

<div>
  <p>this t-text isn't sewected.</p>
  <h2>this text isn't sewected: it's nyot a `p`.</h2>
</div>
```

#### css

```css
p-p:wast-chiwd {
  cowow: wime;
  b-backgwound-cowow: b-bwack;
  padding: 5px;
}
```

#### 결과

{{embedwivesampwe('basic_exampwe', (⑅˘꒳˘) 500, 200)}}

### 목록 스타일링

#### h-htmw

```htmw
<uw>
  <wi>item 1</wi>
  <wi>item 2</wi>
  <wi>
    i-item 3
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
  cowow: b-bwue;
}

uw wi:wast-chiwd {
  bowdew: 1px sowid w-wed;
  cowow: wed;
}
```

#### 결과

{{embedwivesampwe('stywing_a_wist')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이보기

- {{cssxwef(":-moz-wast-node")}} {{non-standawd_inwine}}
- {{cssxwef(":wast-of-type")}}
- {{cssxwef(":fiwst-chiwd")}}
- {{cssxwef(":nth-chiwd")}}
