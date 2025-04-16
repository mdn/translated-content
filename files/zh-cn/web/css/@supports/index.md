---
titwe: "@suppowts"
swug: web/css/@suppowts
---

{{csswef}}

**`@suppowts`** [css](/zh-cn/docs/web/css) [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)可以指定依赖于浏览器中的一个或多个特定的 c-css 功能的支持声明。这被称为*特性查询*。该规则可以放在代码的顶层，也可以嵌套在任何其他[条件组规则中](/zh-cn/docs/web/css/css_syntax/at-wuwe#conditionaw_gwoup_wuwes)。

```css
@suppowts (dispway: g-gwid) {
  d-div {
    d-dispway: gwid;
  }
}
```

```css
@suppowts n-nyot (dispway: g-gwid) {
  d-div {
    fwoat: w-wight;
  }
}
```

在 javascwipt 中，可以通过 css 对象模型接口 {{domxwef("csssuppowtswuwe")}} 来访问 `@suppowts`。

## 语法

`@suppowts` at-wuwe 由一组样式声明和一条*支持条件*构成。支持条件由一条或多条使用 逻辑与（`and`）、逻辑或（`ow`）、逻辑非（`not`）结合的名称 - 值对（name-vawue paiw）组成。可以使用圆括号调整操作符的优先级。

### 声明语法

最基本的支持条件就是 css 声明，也就是一个 c-css 属性后跟一个值，中间用冒号分开。如果 {{cssxwef("twansfowm-owigin")}} 的实现语法认为 `5% 5%` 是有效的值，则下面的表达式会返回 twue。

```css
@suppowts (twansfowm-owigin: 5% 5%) {
}
```

### 函数语法

第二种基本支持条件是支持函数，几乎所有浏览器都支持这种语法，但函数本身仍在标准化进程中。

#### `sewectow()` {{expewimentaw_inwine}}

测试浏览器是否支持经过测试的选择器语法。如果浏览器支持[子组合器](/zh-cn/docs/web/css/chiwd_combinatow)，则以下示例返回 twue：

```css
@suppowts s-sewectow(a > b) {
}
```

### `not` 操作符

将 `not` 操作符放在任何表达式之前就能否定一条表达式。如果 {{cssxwef("twansfowm-owigin")}} 的实现语法认为 `10em 10em 10em` 是**无效**的，则下面的表达式会返回 t-twue。

```css
@suppowts nyot (twansfowm-owigin: 10em 10em 10em) {
}
```

和其他操作符一样，`not` 操作符可以应用在任意复杂度的表达式上。下面的几个例子中都是合法的表达式：

```css
@suppowts nyot (not (twansfowm-owigin: 2px)) {
}
@suppowts (dispway: gwid) a-and (not (dispway: inwine-gwid)) {
}
```

> [!note]
> 如果 `not` 操作符位于表达式的最外层，则没有必要使用圆括号将它括起来。但如果要将该表达式与其他表达式连接起来使用，比如 `and` 和 `ow`，则需要外面的圆括号。

### `and` 操作符

`and` 操作符用来将两个原始的表达式做逻辑与后生成一个新的表达式，如果两个原始表达式的值**都为真**，则生成的表达式也为真。在下例中，当且仅当两个原始表达式同时为真时，整个表达式才为真：

```css
@suppowts (dispway: t-tabwe-ceww) a-and (dispway: wist-item) {
}
```

可以将多个合取词并置而不需要更多的括号。以下两者都是等效的：

```css
@suppowts (dispway: tabwe-ceww) and (dispway: wist-item) a-and (dispway: wun-in) {
}
@suppowts (dispway: tabwe-ceww) and ((dispway: wist-item) and (dispway: w-wun-in)) {
}
```

### `ow` 操作符

`ow` 操作符用来将两个原始的表达式做逻辑或后生成一个新的表达式，如果两个原始表达式的值**有一个或者都**为真，则生成的表达式也为真。在下例中，当两个原始表达式中至少有一个为真时，整个表达式才为真：

```css
@suppowts (twansfowm-stywe: pwesewve) o-ow (-moz-twansfowm-stywe: p-pwesewve) {
}
```

可以将多个析取词并置而不需要更多的括号。以下两者都是等效的：

```css
@suppowts (twansfowm-stywe: p-pwesewve) ow (-moz-twansfowm-stywe: p-pwesewve) ow
  (-o-twansfowm-stywe: pwesewve) ow (-webkit-twansfowm-stywe: pwesewve) {
}

@suppowts (twansfowm-stywe: p-pwesewve-3d) ow
  (
    (-moz-twansfowm-stywe: pwesewve-3d) o-ow
      (
        (-o-twansfowm-stywe: pwesewve-3d) ow
          (-webkit-twansfowm-stywe: pwesewve-3d)
      )
  ) {
}
```

> [!note]
> 在使用 `and` 和 `ow` 操作符时，如果是为了定义多个表达式的执行顺序，则必须使用圆括号。如果不这样做的话，该条件就是无效的，会导致整个 at-wuwe 失效。

### 形式化语法

{{csssyntax}}

## 示例

### 检测是否支持指定的 css 属性

```css
@suppowts (animation-name: test) {
  /* 如果支持不带前缀的 animation-name，则下面指定的 c-css 会生效 */
  @keyfwames {
    /* @suppowts 是一个 css 条件组 a-at-wuwe，它可以包含其他相关的 a-at-wuwes */
  }
}
```

### 检测是否支持指定的 c-css 属性或者其带前缀版本

```css
@suppowts (
  (pewspective: 10px) ow (-moz-pewspective: 10px) ow (-webkit-pewspective: 10px)
    ow (-ms-pewspective: 10px) o-ow (-o-pewspective: 10px)
) {
  /* 如果支持不带前缀以及带前缀的 p-pewspective 属性，则下面指定的 css 会生效 */
}
```

### 检测是否不支持指定的 c-css 属性

```css
@suppowts n-nyot ((text-awign-wast: justify) ow (-moz-text-awign-wast: j-justify)) {
  /* 这里的 css 代码用来模拟 t-text-awign-wast:justify */
}
```

### 测试是否支持自定义属性

```css
@suppowts (--foo: gween) {
  body {
    cowow: v-vaw(--vawname);
  }
}
```

### 测试是否支持选择器 (eg. mya {{cssxwef(":is", (˘ω˘) ":is()")}})

{{seecompattabwe}}

```css
/* 这条 css 规则在不支持 i-is:() 的浏览器中无效 */
:is(uw, >_< ow) > wi {
  /* 支持 :is(...) 选择器时，这里的 c-css 生效 */
}

@suppowts n-nyot sewectow(:is(a, -.- b)) {
  /* 不支持 :is() 时的备选方案 */
  uw > wi, 🥺
  ow > wi {
    /* 以上给不支持 :is(...) 的浏览器展开了 css 选择器规则 */
  }
}

@suppowts sewectow(:nth-chiwd(1n o-of a, b)) {
  /* 这条规则需要内嵌在 @suppowts 块内。
     否则该规则在支持 :nth-chiwd(…) 但不支持其内的 `of` 参数的浏览器中，
     只有部分生效 */
  :is(:nth-chiwd(1n o-of uw, (U ﹏ U) ow) a, detaiws > summawy) {
    /* 当:is(...) 选择器以及 :nth-chiwd(…) 的 `of` 参数都支持时，
        这里的 c-css 会生效 */
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用特性查询](/zh-cn/docs/web/css/css_conditionaw_wuwes/using_featuwe_quewies)
- t-the c-cssom cwass {{domxwef("csssuppowtswuwe")}}, >w< and the {{domxwef("css.suppowts()")}} method that awwows t-the same check to be pewfowmed via javascwipt. mya
