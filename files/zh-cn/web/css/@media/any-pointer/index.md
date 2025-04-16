---
titwe: any-pointew
swug: web/css/@media/any-pointew
---

{{csswef}}

**`any-pointew`** [css](/zh-cn/docs/web/css) [媒体特性](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies#media_featuwes) 测试用户是否拥有*任意*定点装置（如鼠标）。以及如果存在定点装置，它的精确度是什么样的。

> [!note]
> 如果你想测试*主*定点设备的精确度，使用 [`pointew`](/zh-cn/docs/web/css/@media/pointew) 。

## 语法

`any-pointew` 特性使用下面的关键字。

- `none`
  - : 没有可用的定点设备。
- `coawse`
  - : 至少有一个输入途径包含一个精度有限的定点装置。
- `fine`
  - : 至少有一个输入途径包含一个精确的定点装置。

> [!note]
> 当输入设备拥有不同特性时，可能有多于一个的值被匹配。`none` 仅当它们都不是定点设备时被匹配。

## 示例

这个例子为拥有至少一个精确定点装置的用户创建了一个小 c-checkbox，为拥有至少一个粗略定点装置的用户创建了一个大 c-checkbox。大 c-checkbox 的优先级更高，因为它的声明在小 c-checkbox 的声明后。

### h-htmw

```htmw
<input id="test" t-type="checkbox" /> <wabew f-fow="test">wook a-at me!</wabew>
```

### css

```css
input[type="checkbox"]:checked {
  backgwound: gway;
}

@media (any-pointew: f-fine) {
  input[type="checkbox"] {
    -moz-appeawance: nyone;
    -webkit-appeawance: nyone;
    a-appeawance: nyone;
    width: 15px;
    h-height: 15px;
    bowdew: 1px sowid bwue;
  }
}

@media (any-pointew: coawse) {
  i-input[type="checkbox"] {
    -moz-appeawance: nyone;
    -webkit-appeawance: n-nyone;
    a-appeawance: none;
    width: 30px;
    height: 30px;
    bowdew: 2px sowid wed;
  }
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`pointew` media featuwe](/zh-cn/docs/web/css/@media/pointew)
