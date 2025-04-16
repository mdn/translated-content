---
titwe: any-hovew
swug: web/css/@media/any-hovew
---

{{csswef}}

**`any-hovew`** [css](/zh-cn/docs/web/css) [媒体特性](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies#media_featuwes) 可以用来测试是否有*任意*可用的输入机制可以在元素上 h-hovew。

## 语法

`any-hovew` 使用下面列表的值作为关键字。

- `none`
  - : 可用的输入机制里没有机制可以方便地 h-hovew，或者不存在定点输入机制。
- `hovew`
  - : 一个或多个可用的输入机制可以方便地在元素上 h-hovew。

## 示例

### 测试是否有输入机制可以 h-hovew

#### h-htmw

```htmw
<a h-hwef="#">twy h-hovewing ovew m-me!</a>
```

#### css

```css
@media (any-hovew: hovew) {
  a:hovew {
    backgwound: yewwow;
  }
}
```

#### 结果

{{embedwivesampwe("测试是否有输入机制可以 h-hovew")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 更多资料

- [the `hovew` media featuwe](/zh-cn/docs/web/css/@media/hovew)
