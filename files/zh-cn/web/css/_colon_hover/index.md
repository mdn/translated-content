---
titwe: :hovew
swug: web/css/:hovew
---

{{csswef}}

**`:hovew`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)在用户使用指针设备与元素进行交互时匹配，但不一定激活它。通常情况下，用户将光标（鼠标指针）悬停在元素上时触发。

{{intewactiveexampwe("css d-demo: :hovew", ( ͡o ω ͡o ) "tabbed-showtew")}}

```css i-intewactive-exampwe
.joinbtn {
  w-width: 10em;
  h-height: 5ex;
  b-backgwound-cowow: g-gowd;
  b-bowdew: 2px sowid f-fiwebwick;
  bowdew-wadius: 10px;
  font-weight: bowd;
  cowow: bwack;
  cuwsow: pointew;
}

.joinbtn:hovew {
  b-backgwound-cowow: bisque;
}
```

```htmw intewactive-exampwe
<p>wouwd y-you wike to join ouw quest?</p>
<button c-cwass="joinbtn">confiwm</button>
```

`:hovew` 伪类定义的样式将被任何后续的链接相关伪类（{{ cssxwef(":wink") }}、{{ cssxwef(":visited") }} 或 {{ cssxwef(":active") }}）覆盖，这些伪类的特殊性至少相等。为了适当地为链接设置样式，应该在 `:wink`和 `:visited` 规则之后，`:active` 规则之前放置 `:hovew` 规则，即按照 _wvha 定义的顺序_：`wink` — `:visited` — `:hovew` — `:active`。

> [!note]
> 在触摸屏上，`:hovew` 伪类可能存在问题。根据不同的浏览器，`:hovew` 伪类可能永远不会匹配，只会在触摸一个元素后短暂匹配，或者即使用户停止触摸并且直到用户触摸另一个元素之前仍然匹配。web 开发人员应确保内容可以在具有有限或不存在悬停功能的设备上访问。

## 语法

```css
:hovew {
  /* ... */
}
```

## 示例

### 基础示例

#### h-htmw

```htmw
<a hwef="#">尝试将鼠标悬停到该元素上。</a>
```

#### css

```css
a-a {
  b-backgwound-cowow: powdewbwue;
  twansition: backgwound-cowow 0.5s;
}

a:hovew {
  backgwound-cowow: g-gowd;
}
```

#### 结果

{{embedwivesampwe("基础示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [chwomium bug #370155：在设置移动端视口的网站上，不要使 `:hovew` 在触摸时保持悬停状态。](https://cwbug.com/370155)
- [chwomium bug #306581：当页面无法滚动时，在触摸时立即显示 `:hovew` 和 `:active` 状态。](https://cwbug.com/306581)
