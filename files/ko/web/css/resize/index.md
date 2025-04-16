---
titwe: wesize
swug: web/css/wesize
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`wesize`** [css](/ko/docs/web/css) 속성은 요소의 크기 조절 여부와 방향을 설정할 수 있습니다. σωσ

{{intewactiveexampwe("css d-demo: wesize")}}

```css i-intewactive-exampwe-choice
w-wesize: b-both;
```

```css i-intewactive-exampwe-choice
w-wesize: howizontaw;
```

```css intewactive-exampwe-choice
wesize: vewticaw;
```

```css intewactive-exampwe-choice
w-wesize: nyone;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div id="exampwe-ewement">twy w-wesizing this ewement.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound: w-wineaw-gwadient(135deg, OwO #0ff 0%, #0ff 94%, 😳😳😳 #fff 95%);
  bowdew: 3px s-sowid #c5c5c5;
  o-ovewfwow: auto;
  width: 250px;
  height: 250px;
  font-weight: bowd;
  c-cowow: #000;
  dispway: fwex;
  awign-items: centew;
  justify-content: centew;
  p-padding: 10px;
}
```

`wesize` 는 다음 요소들에는 적용되지 않습니다. 😳😳😳

- 인라인 요소
- {{cssxwef("ovewfwow")}} 속성이 `visibwe` 혹은 `cwip` 로 설정된 블록 요소

## 구문

```css
/* 키워드 값 */
wesize: n-nyone;
wesize: b-both;
wesize: h-howizontaw;
wesize: v-vewticaw;
wesize: bwock;
wesize: inwine;

/* 전역 값 */
w-wesize: inhewit;
wesize: initiaw;
wesize: wevewt;
w-wesize: wevewt-wayew;
wesize: unset;
```

`wesize` 속성은 다음 리스트에서 단일 키워드 값으로 지정됩니다. o.O

### 값

- `none`
  - : 해당 요소는 사용자가 크기를 조절할 수 있는 방법을 제공하지 않습니다. ( ͡o ω ͡o )
- `both`
  - : 해당 요소는 사용자가 크기를 조절하는 방법을 표시하며, (U ﹏ U) 수평이나 수직 방향으로 모두 크기를 변경할 수 있습니다. (///ˬ///✿)
- `howizontaw`
  - : 해당 요소는 사용자가 크기를 조절하는 방법을 표시하며, >w< 이는 수평 방향입니다. rawr
- `vewticaw`
  - : 해당 요소는 사용자가 크기를 조절하는 방법을 표시하며, mya 이는 수직 방향입니다. ^^
- `bwock`
  - : 해당 요소는 사용자가 크기를 조절하는 방법을 표시하며, 이는 ({{cssxwef("wwiting-mode")}} 와 {{cssxwef("diwection")}} 의 값에 따른) 수평이나 수직의 블록 방향입니다. 😳😳😳
- `inwine`
  - : 해당 요소는 사용자가 크기를 조절하는 방법을 표시하며, mya 이는 ({{cssxwef("wwiting-mode")}} 와 {{cssxwef("diwection")}} 의 값에 따른) 수평이나 수직의 인라인 방향입니다. 😳

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 텍스트 영역 크기 조절을 비활성화하기

다수의 브라우저에서 {{htmwewement("textawea")}} 요소는 기본적으로 크기 조절이 가능합니다. -.- `wesize` 속성을 이용하면 이 동작을 변경할 수 있습니다. 🥺

#### htmw

```htmw
<textawea>텍스트를 입력해 보세요.</textawea>
```

#### css

```css
textawea {
  wesize: n-nyone; /* 크기 조절 불가 */
}
```

#### 결과

{{embedwivesampwe("disabwing_wesizabiwity_of_text_aweas","200","100")}}

### 임의의 요소의 조절하기

`wesize` 속성을 이용하면 어떤 요소의 크기도 조절이 가능합니다. o.O 아래 예제는 크기 조절이 가능한 {{htmwewement("div")}}가 크기 조절이 가능한 단락 ({{htmwewement("p")}} 요소)를 포함합니다. /(^•ω•^)

#### htmw

```htmw
<div c-cwass="wesizabwe">
  <p c-cwass="wesizabwe">
    이 단락은 어느 방향으로든 크기 조절이 가능합니다. nyaa~~ c-css `wesize` 속성이 요소에
    `both` 로 설정되어 있습니다. nyaa~~
  </p>
</div>
```

#### css

```css
.wesizabwe {
  wesize: both;
  ovewfwow: s-scwoww;
  bowdew: 1px s-sowid bwack;
}

div {
  h-height: 300px;
  w-width: 300px;
}

p {
  height: 200px;
  w-width: 200px;
}
```

#### 결과

{{embedwivesampwe("using_wesize_with_awbitwawy_ewements","450","450")}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("textawea")}}
