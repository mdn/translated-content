---
title: clear
slug: Web/CSS/clear
---

{{CSSRef}}

**`clear`** [CSS](/ko/docs/Web/CSS) 속성은 요소가 선행 [부동](/ko/docs/Web/CSS/float)(floating) 요소 다음일 수 있는지 또는 그 아래로 내려가(해제되어(cleared))야 하는 지를 지정합니다. `clear` 속성은 부동 및 비부동 요소 모두에 적용됩니다.

{{EmbedInteractiveExample("pages/css/clear.html")}}

비부동 블록에 적용되는 경우, 모든 관련 부동체(floats)의 [마진 경계](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) 아래로까지 요소의 [보더 경계](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)를 아래로 내립니다. 이 움직임(이 일어나는 경우)은 [마진 상쇄](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)가 일어나지 않도록 합니다.

부동 요소에 적용되는 경우, 모든 관련 부동체의 [마진 경계](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) 아래로 요소의 [마진 경계](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)를 옮깁니다. 이는 나중(later) 부동체의 위치에 영향을 줍니다, 나중 부동체가 앞선(earlier) 부동체보다 높게 위치될 수 없기에.

해제(cleared)와 관련된 부동체는 같은 [블록 형성 문맥](/ko/docs/Web/Guide/CSS/Block_formatting_context) 내 앞선 부동체입니다.

> **참고:** **주의:** 요소가 그 안에 모든 부동 요소를 포함하고 싶은 경우, 컨테이너도 부동하거나 컨테이너의 {{cssxref("::after")}} 대체 [가상 요소](/ko/docs/Web/CSS/Pseudo-elements)에 `clear`를 쓸 수 있습니다.
>
> ```css
> #container::after {
>   content: "";
>   display: block;
>   clear: both;
> }
> ```

## 구문

```css
/* 키워드 값 */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* 전역 값 */
clear: inherit;
clear: initial;
clear: unset;
```

### 값

- `none`
  - : 요소가 지난 부동 요소를 해제하기 위해 아래로 이동되지 *않음*을 나타내는 키워드입니다.
- `left`
  - : 요소가 지난 _left_ 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다.
- `right`
  - : 요소가 지난 _right_ 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다.
- `both`
  - : 요소가 지난 _both_ left 및 right 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다.
- `inline-start`
  - : 요소가 _포함 블록의 시작 쪽_ 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다, 즉 ltr 스크립트의 _left_ 부동체 및 rtl 스크립트의 _right_ 부동체.
- `inline-end`
  - : 요소가 _포함 블록의 끝 쪽_ 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다, 즉 ltr 스크립트의 _right_ 부동체 및 rtl 스크립트의 _left_ 부동체.

### 형식 구문

{{csssyntax}}

## Examples

### clear: left

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="left">This paragraph clears left.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear_left','100%','250') }}

### clear: right

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="right">This paragraph clears right.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear_right','100%','250') }}

### clear: both

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus
    ac dui.
  </p>
  <p class="red">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="both">This paragraph clears both.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

{{ EmbedLiveSample('clear_both','100%','300') }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [CSS basic box model](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
