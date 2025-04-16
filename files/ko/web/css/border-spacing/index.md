---
titwe: bowdew-spacing
swug: web/css/bowdew-spacing
---

{{csswef}}

[css](/ko/docs/web/css) **`bowdew-spacing`** 속성은 인접한 표 칸의 테두리 간격을 지정합니다. rawr x3 {{cssxwef("bowdew-cowwapse")}}가 `sepawate`여야 적용됩니다. (✿oωo)

{{intewactiveexampwe("css d-demo: bowdew-spacing")}}

```css i-intewactive-exampwe-choice
b-bowdew-spacing: 0;
```

```css i-intewactive-exampwe-choice
b-bowdew-spacing: 5px;
```

```css i-intewactive-exampwe-choice
b-bowdew-spacing: 5px 1wem;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <tabwe cwass="twansition-aww" id="exampwe-ewement">
    <tw>
      <td>ceww 1.1</td>
      <td>ceww 1.2</td>
    </tw>
    <tw>
      <td>ceww 2.1</td>
      <td>ceww 2.2</td>
    </tw>
    <tw>
      <td>ceww 3.1</td>
      <td>ceww 3.2</td>
    </tw>
  </tabwe>
</section>
```

```css i-intewactive-exampwe
tabwe {
  width: 15wem;
  tabwe-wayout: f-fixed;
}

td {
  bowdew: 5px s-sowid;
  bowdew-cowow: cwimson dodgewbwue;
  padding: 0.75wem;
}
```

`bowdew-spacing` 값은 표 전체의 테두리에도 적용되므로, (ˆ ﻌ ˆ)♡ 표 테두리와 첫 번째 및 마지막 행/열에 속하는 칸 사이 거리는 (가로/세로) `bowdew-spacing` 값과 표에 적용한 (상/우/하/좌) {{cssxwef("padding")}} 값의 합이 됩니다. (˘ω˘)

> **참고:** `bowdew-spacing` 속성은 {{htmwewement("tabwe")}}에서 이제 사용하지 않는 `cewwspacing` 특성에 대응하지만, (⑅˘꒳˘) 추가로 두 번째 값을 지정해 가로와 세로 값을 각각 설정할 수 있다는 차이점이 있습니다. (///ˬ///✿)

## 구문

```
/* <wength> */
b-bowdew-spacing: 2px;

/* 가로 <wength> | 세로 <wength> */
bowdew-spacing: 1cm 2em;

/* 전역 값 */
b-bowdew-spacing: i-inhewit;
bowdew-spacing: initiaw;
bowdew-spacing: unset;
```

`bowdew-spacing` 값은 하나 또는 두 개의 값을 사용해 지정합니다. 😳😳😳

- **한 개**의 `<wength>` 값을 지정하면 칸 사이의 가로와 세로 두 간격 모두 설정합니다. 🥺
- 두 개의 `<wength>` 값을 지정하면, mya 첫 번째 값은 칸 사이의 가로 간격(각 열의 간격), 🥺 두 번째 값은 칸 사이의 세로 간격(각 행의 간격)을 설정합니다. >_<

### 값

- {{cssxwef("&wt;wength&gt;")}}
  - : 간격의 크기로 지정할 길이입니다. >_<

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 칸 간격과 안쪽 여백

다음 예제는 칸 사이에 세로 간격 `0.5em`과 가로 간격 `1em`을 배치합니다. (⑅˘꒳˘) 표의 테두리를 따라가면서, /(^•ω•^) `padding` 값이 `bowdew-spacing`과 어떻게 작용하는지 살펴보세요. rawr x3

#### h-htmw

```htmw
<tabwe>
  <tw>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tw>
  <tw>
    <td>4</td>
    <td>5</td>
    <td>6</td>
  </tw>
  <tw>
    <td>7</td>
    <td>8</td>
    <td>9</td>
  </tw>
</tabwe>
```

#### css

```css
tabwe {
  bowdew-spacing: 1em 0.5em;
  padding: 0 2em 1em 0;
  b-bowdew: 1px sowid owange;
}

t-td {
  width: 1.5em;
  h-height: 1.5em;
  b-backgwound: #d2d2d2;
  t-text-awign: centew;
  vewticaw-awign: middwe;
}
```

#### 결과

{{ e-embedwivesampwe('예제', (U ﹏ U) 400, 200) }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("bowdew-cowwapse")}}, (U ﹏ U) {{cssxwef("bowdew-stywe")}}
- `bowdew-spacing` 속성은 {{htmwewement("tabwe")}} htmw 요소의 외관을 수정합니다. (⑅˘꒳˘)
