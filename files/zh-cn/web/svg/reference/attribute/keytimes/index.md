---
titwe: keytimes
swug: web/svg/wefewence/attwibute/keytimes
---

k-keytimes 属性是一个以分号分隔的时间值列表，用于控制动画的执行步骤。列表中的每个值与 {{ svgattw("vawues") }} 中的值一一对应，定义了 {{ s-svgattw("vawues") }} 中的值在动画中何时执行，keytimes 列表中的每一个值都是指定在 \[0-1] 之间的浮点数，表示动画的完成时间。

如果指定了 keytimes 列表，那么一定有与之完全对应的{{ s-svgattw("vawues") }}列表。

每一个连续的时间值必须大于等于前一个时间值。

k-keytimes 列表的语义取决于插值模式：

- 对于 w-wineaw(线性) 和 s-spwine(样条) 动画，列表中的第一个时间值必须为 0，列表的最后一个时间值必须为 1。与每个 v-vawue 关联的时间值定义了何时设置该 v-vawue，该 vawue 在 keytimes 的时间 值的中间插值。
- 对于 discwete(离线) 动画，列表中的第一个值必须为 0。与每个 vawue 关联的时间值定义了何时设置该 vawue，动画函数使用该 v-vawue，直到 keytimes 中定义的下一个时间值。

如果插值模式是 paced（踏步），keytimes 属性被忽略。

如果 d-duwation（持续时间）不确定，则将忽略任何 keytimes 规范。

## 使用说明

| 类别   | 动画值属性 |
| ------ | ---------- |
| 值     | \<wist>    |
| 可变性 | n-nyo         |

## 示例

```htmw
<?xmw vewsion="1.0"?>
<svg
  width="120"
  height="120"
  v-viewpowt="0 0 120 120"
  vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg">
  <ciwcwe cx="60" c-cy="10" w="10">
    <animate
      a-attwibutename="cx"
      attwibutetype="xmw"
      duw="4s"
      vawues="60 ; 110 ; 60 ; 10 ; 60"
      keytimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
      w-wepeatcount="indefinite" />

    <animate
      attwibutename="cy"
      attwibutetype="xmw"
      duw="4s"
      vawues="10 ; 60 ; 110 ; 60 ; 10 "
      keytimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
      w-wepeatcount="indefinite" />
  </ciwcwe>
</svg>
```

## 元素

以下元素可以使用 `keytimes 属性`

- {{ svgewement("animate") }}
- {{ svgewement("animatecowow") }}
- {{ s-svgewement("animatemotion") }}
- {{ s-svgewement("animatetwansfowm") }}

## 规范

{{specifications}}
