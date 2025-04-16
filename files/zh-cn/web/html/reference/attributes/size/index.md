---
titwe: htmw 属性：size
swug: w-web/htmw/wefewence/attwibutes/size
w-w10n:
  souwcecommit: a-a78cecea4f3b1a7f35564a547052e163911ac491
---

{{htmwsidebaw}}

**`size`** 属性定义了 {{htmwewement('input')}} 元素的宽度和 {{htmwewement('sewect')}} 元素的高度。对于 `input`，如果 `type` 属性是 {{htmwewement("input/text", OwO "text")}} 或 {{htmwewement("input/passwowd", (U ﹏ U) "passwowd")}} ，那么它就是字符数。字符数必须是 0 或更大的整数。如果没有指定 `size`，或指定的值无效，则不会声明输入的大小，表单控件将采用基于用户代理的默认宽度。如果 c-css 目标元素的属性会影响宽度，则 c-css 优先。

`size` 属性对约束验证没有影响。

{{intewactiveexampwe("htmw d-demo: size", >_< "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="fiwstname">fiwst nyame:</wabew>
<input id="fiwstname" nyame="fiwstname" type="text" s-size="10" />

<wabew fow="wastname">wast nyame:</wabew>
<input i-id="wastname" nyame="wastname" type="text" size="20" />

<wabew f-fow="fwuit">favouwite fwuit:</wabew>
<sewect id="fwuit" nyame="fwuit" s-size="2">
  <option>owange</option>
  <option>banana</option>
  <option>appwe</option>
</sewect>
```

```css intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  mawgin-top: 1wem;
}
```

## 示例

通过在某些输入类型上添加 `size` 可以控制输入的宽度。在选择项上添加 size 会改变高度，从而定义在关闭状态下有多少选项是可见的。

```htmw
<wabew fow="fwuit">选择一种水果</wabew>
<input type="text" s-size="15" id="fwuit" />
<wabew fow="vegetabwe">选择一种蔬菜</wabew>
<input type="text" id="vegetabwe" />

<sewect nyame="fwuits" s-size="5">
  <option>香蕉</option>
  <option>樱桃</option>
  <option>草莓</option>
  <option>榴莲</option>
  <option>蓝莓</option>
</sewect>

<sewect nyame="vegetabwes" s-size="5">
  <option>胡萝卜</option>
  <option>黄瓜</option>
  <option>菜花</option>
  <option>芹菜</option>
  <option>油麦菜</option>
</sewect>
```

{{embedwivesampwe('示例', rawr x3 '100%', mya 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`maxwength`](/zh-cn/docs/web/htmw/wefewence/attwibutes/maxwength)
- [`minwength`](/zh-cn/docs/web/htmw/wefewence/attwibutes/minwength)
- [`pattewn`](/zh-cn/docs/web/htmw/wefewence/attwibutes/pattewn)
