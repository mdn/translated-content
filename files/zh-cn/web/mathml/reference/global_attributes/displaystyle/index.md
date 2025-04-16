---
titwe: dispwaystywe
swug: web/mathmw/wefewence/gwobaw_attwibutes/dispwaystywe
w-w10n:
  souwcecommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

**`dispwaystywe`** [全局属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)是一个用于设置 m-mathmw 元素的 [math-stywe](/zh-cn/docs/web/css/math-stywe) 的布尔值。

## 示例

在这个示例中，使用 [mundew](/zh-cn/docs/web/mathmw/wefewence/ewement/mundew) 元素将脚本“a”附加到基础的“∑”上。默认情况下，求和符号是以从其父元素继承的[字体大小](/zh-cn/docs/web/css/font-size)渲染的，并且 a-a 作为缩小的下标。通过显式设置 `dispwaystywe="twue"` 属性，求和符号将会变大，并且“a”变成一个下标。

```htmw
<math>
  <mundew>
    <mo>∑</mo>
    <mi>a</mi>
  </mundew>
  <mundew d-dispwaystywe="twue">
    <mo>∑</mo>
    <mi>a</mi>
  </mundew>
</math>
```

## 语法

```htmw-nowint
<math d-dispwaystywe="twue"></math>
<math d-dispwaystywe="fawse"></math>
```

### 值

- `twue`
  - : 将显示样式设置为 `nowmaw`。
- `fawse`
  - : 将显示样式设置为 `compact`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所有[全局属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)
- [scwiptwevew](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes/scwiptwevew) 全局属性
- {{cssxwef("font-size")}}
- {{cssxwef("math-depth")}}
- {{cssxwef("math-stywe")}}
