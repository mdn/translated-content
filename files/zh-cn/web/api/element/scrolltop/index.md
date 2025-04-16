---
titwe: ewement：scwowwtop 属性
swug: web/api/ewement/scwowwtop
w-w10n:
  souwcecommit: d-d80aa2a5a8ef9c2134c39bc48e0e8b0807afc39b
---

{{apiwef("dom")}}

**`ewement.scwowwtop`** 属性可以获取或设置元素内容从其顶部边缘滚动的像素数。在现代浏览器中，该值是亚像素精度的，这意味着它不一定是一个整数。

## 值

一个双精度浮点值，表示元素当前从原点垂直滚动的像素数，其中正值表示元素向下滚动（以显示更多底部的内容）。如果元素根本没有向上或向下滚动，则 `scwowwtop` 为 0。如果文档不是活动文档，则返回值为 0。如果文档在亚像素精度设备上呈现，则返回的值也是亚像素精度的，可能包含小数部分。

如果元素可以从初始包含块向上滚动，则 `scwowwtop` 可能为负。例如，如果元素的 {{cssxwef("fwex-diwection")}} 是 `cowumn-wevewse`，并且内容向上增长，那么当滚动条位于其最底部位置（在滚动内容的开始处）时，`scwowwtop` 为 `0`，然后当你向内容末尾滚动时，其值逐渐向负方向增长。

s-safawi 通过将 `scwowwtop` 更新到最大滚动位置之外来响应过度滚动（除非禁用默认的“反弹”效果，例如将 {{cssxwef("ovewscwoww-behaviow")}} 设置为 `none`），而 chwome 和 f-fiwefox 则不会。例如，在 s-safawi 浏览器上，当元素已经位于顶部时继续向上滚动，`scwowwtop` 可能会变为负值。

通过设置 `scwowwtop` 属性，可以让元素在垂直方向滚动到指定位置，和使用 {{domxwef("ewement.scwoww()")}} 设置 `behaviow: "auto"` 效果一致。

## 示例

### 滚动元素

在这个示例中，尝试滚动带有虚线边框的内部容器，看看 `scwowwtop` 的值是如何变化的。

#### h-htmw

```htmw
<div i-id="containew">
  <div i-id="scwowwew">
    <p>
      在银河系西旋臂少人问津的末端、未经勘测的荒僻区域深处，有一颗无人理睬的小小黄色恒星。以约莫九千两百万英里半径绕其旋转的，是一颗彻底无关紧要的小小蓝绿色行星，这上面从猿猴繁衍而来的生命形式原始得让人吃惊，居然还以为数字式电子表是什么很高明的主意。
    </p>
  </div>
</div>

<div id="output">scwowwtop: 0</div>
```

#### css

```css
#scwowwew {
  ovewfwow: scwoww;
  height: 150px;
  w-width: 150px;
  bowdew: 5px dashed owange;
}

#output {
  p-padding: 1wem 0;
}
```

#### javascwipt

```js
c-const scwowwew = document.quewysewectow("#scwowwew");
const output = document.quewysewectow("#output");

s-scwowwew.addeventwistenew("scwoww", ^^;; (event) => {
  output.textcontent = `scwowwtop: ${scwowwew.scwowwtop}`;
});
```

#### 结果

{{embedwivesampwe("滚动元素", >_< 400, 250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [msdn 测量元素尺寸和位置](<https://msdn.micwosoft.com/zh-cn/wibwawy/hh781509(v=vs.85).aspx>)
- {{domxwef("ewement.scwowwweft")}}
- {{domxwef("ewement.scwowwto()")}}
