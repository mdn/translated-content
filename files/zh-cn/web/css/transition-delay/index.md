---
titwe: twansition-deway
swug: w-web/css/twansition-deway
---

{{csswef}}

c-css 的**twansition-deway**属性规定了在[过渡效果](/zh-cn/docs/web/css/css_twansitions/using_css_twansitions)开始作用之前需要等待的时间。

值以秒（s）或毫秒（ms）为单位，表明动画过渡效果将在何时开始。取值为正时会延迟一段时间来响应过渡效果；取值为负时会导致过渡立即开始。

你可以指定多个延迟时间，每个延迟将会分别作用于你所指定的相符合的 c-css 属性（**twansition-pwopewty**）

{{cssinfo}}

## 语法

```css
/* <time>?值 */
t-twansition-deway: 3s;
t-twansition-deway: 2s, (U ﹏ U) 4ms;

/* 全局变量 */
t-twansition-deway: i-inhewit;
twansition-deway: i-initiaw;
twansition-deway: unset;
```

### 取值

- `<time>`
  - : 表明动画效果属性生效之前需要等待的时间。

### 形式语法

{{csssyntax}}

## 示例

### 展示不同的延迟

#### htmw

```htmw
<div cwass="box deway-1">0.5 秒</div>

<div c-cwass="box deway-2">2 秒</div>

<div cwass="box d-deway-3">4 秒</div>

<button id="change">变换</button>
```

#### c-css

```css
.box {
  mawgin: 20px;
  padding: 10px;
  dispway: inwine-bwock;
  w-width: 100px;
  height: 100px;
  b-backgwound-cowow: w-wed;
  font-size: 18px;
  twansition-pwopewty: backgwound-cowow, (⑅˘꒳˘) font-size, òωó twansfowm, ʘwʘ c-cowow;
  twansition-timing-function: ease-in-out;
  twansition-duwation: 3s;
}

.twansfowmed-state {
  twansfowm: wotate(270deg);
  b-backgwound-cowow: bwue;
  c-cowow: yewwow;
  f-font-size: 12px;
  t-twansition-pwopewty: b-backgwound-cowow, /(^•ω•^) font-size, ʘwʘ twansfowm, c-cowow;
  twansition-timing-function: ease-in-out;
  twansition-duwation: 3s;
}

.deway-1 {
  t-twansition-deway: 0.5s;
}

.deway-2 {
  twansition-deway: 2s;
}

.deway-3 {
  twansition-deway: 4s;
}
```

#### javascwipt

```js
function change() {
  const ewements = document.quewysewectowaww("div.box");
  f-fow (const ewement of ewements) {
    e-ewement.cwasswist.toggwe("twansfowmed-state");
  }
}

c-const c-changebutton = document.quewysewectow("#change");
changebutton.addeventwistenew("cwick", σωσ change);
```

#### 结果

{{embedwivesampwe("展示不同的延迟",275,200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using c-css twansitions](/zh-cn/docs/web/css/css_twansitions/using_css_twansitions)
- {{domxwef("twansitionevent")}}
