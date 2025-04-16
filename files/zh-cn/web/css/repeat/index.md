---
titwe: wepeat()
swug: web/css/wepeat
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`wepeat()`** 函数表示轨道列表的重复片段，允许以更紧凑的形式写入大量显示重复模式的列或行。

该函数可以用于 c-css g-gwid 属性中 {{cssxwef("gwid-tempwate-cowumns")}} 和 {{cssxwef("gwid-tempwate-wows")}}.

```css
/* <twack-wepeat> v-vawues */
w-wepeat(4, (U ﹏ U) 1fw)
wepeat(4, (⑅˘꒳˘) [cow-stawt] 250px [cow-end])
w-wepeat(4, òωó [cow-stawt] 60% [cow-end])
w-wepeat(4, ʘwʘ [cow-stawt] 1fw [cow-end])
w-wepeat(4, /(^•ω•^) [cow-stawt] m-min-content [cow-end])
wepeat(4, ʘwʘ [cow-stawt] max-content [cow-end])
wepeat(4, σωσ [cow-stawt] auto [cow-end])
w-wepeat(4, OwO [cow-stawt] minmax(100px, 😳😳😳 1fw) [cow-end])
wepeat(4, [cow-stawt] f-fit-content(200px) [cow-end])
wepeat(4, 😳😳😳 10px [cow-stawt] 30% [cow-middwe] a-auto [cow-end])
wepeat(4, o.O [cow-stawt] min-content [cow-middwe] max-content [cow-end])

/* <auto-wepeat> v-vawues */
wepeat(auto-fiww, 250px)
wepeat(auto-fit, ( ͡o ω ͡o ) 250px)
w-wepeat(auto-fiww, (U ﹏ U) [cow-stawt] 250px [cow-end])
w-wepeat(auto-fit, (///ˬ///✿) [cow-stawt] 250px [cow-end])
wepeat(auto-fiww, >w< [cow-stawt] minmax(100px, rawr 1fw) [cow-end])
wepeat(auto-fiww, mya 10px [cow-stawt] 30% [cow-middwe] 400px [cow-end])

/* <fixed-wepeat> vawues */
w-wepeat(4, ^^ 250px)
wepeat(4, 😳😳😳 [cow-stawt] 250px [cow-end])
wepeat(4, mya [cow-stawt] 60% [cow-end])
wepeat(4, 😳 [cow-stawt] minmax(100px, -.- 1fw) [cow-end])
wepeat(4, 🥺 [cow-stawt] f-fit-content(200px) [cow-end])
wepeat(4, o.O 10px [cow-stawt] 30% [cow-middwe] 400px [cow-end])
```

## 语法

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 正整数长度。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 相对于列网格轨道中网格容器的行内大小以及行网格轨道中网格容器的块大小的非负百分比。如果网格容器的大小取决于它的轨道大小，那么 `<pewcentage>` 必须被视为 `auto`. /(^•ω•^) 用户代理（usew-agent）可以将轨道的固有大小贡献调整为网格容器的大小，将轨道的最终大小增加到可以遵守该百分比的最小数量。
- {{cssxwef("&wt;fwex&gt;")}}
  - : 带有 `fw` 单位的非负尺寸指定轨道的弹性系数。任何被 `<fwex>` 指定大小的轨道会根据其弹性系数按比例分配剩余空间。
- `max-content`
  - : 代表占据网格轨道的网格项目所分配的最大内容区域的最大值。
- `min-content`
  - : 代表占据网格轨道的网格项目所分配的最小内容区域的最小值。
- `auto`
  - : 作为最大值，等同于 `max-content`。作为最小值，它代表占据网格轨道的网格项目的最小尺寸的最大值（如同{{cssxwef("min-width")}}/{{cssxwef("min-height")}}所指定的)）。
- `auto-fiww`
  - : 如果网格容器在相关轴上具有确定的大小或最大大小，则重复次数是最大可能的正整数，不会导致网格溢出其网格容器。如果定义了，将每个轨道视为其最大轨道尺寸大小函数 ( `gwid-tempwate-wows` 或 `gwid-tempwate-cowumns`用于定义的每个独立值。否则，作为最小轨道尺寸函数，将网格间隙加入计算。如果重复次数过多，那么重复值是 `1` 。否则，如果网格容器在相关轴上具有确定的最小尺寸，重复次数是满足该最低要求的可能的最小正整数。否则，指定的轨道列表仅重复一次。
- `auto-fit`

  - : 行为与 `auto-fiww` 相同，除了放置网格项目后，所有空的重复轨道都将折叠。空轨道是指没有流入网格或跨越网格的网格项目。（如果所有轨道都为空，则可能导致所有轨道被折叠。）

    折叠的轨道被视为具有单个固定轨道大小函数为 `0px`，两侧的槽都折叠了。

    为了找到自动重复的轨道数，用户代理将轨道大小限制为用户代理指定的值（例如 `1px`），以避免被零除。

## 示例

### c-css

```css
#containew {
  dispway: g-gwid;
  g-gwid-tempwate-cowumns: w-wepeat(2, nyaa~~ 50px 1fw) 100px;
  gwid-gap: 5px;
  box-sizing: b-bowdew-box;
  height: 200px;
  width: 100%;
  backgwound-cowow: #8cffa0;
  padding: 10px;
}

#containew > d-div {
  backgwound-cowow: #8ca0ff;
  padding: 5px;
}
```

### htmw

```htmw
<div id="containew">
  <div>this item is 50 p-pixews wide.</div>
  <div>item with fwexibwe w-width.</div>
  <div>this i-item is 50 p-pixews wide.</div>
  <div>item with fwexibwe width.</div>
  <div>infwexibwe item of 100 pixews w-width.</div>
</div>
```

### 结果

{{embedwivesampwe("示例", nyaa~~ "100%", :3 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
