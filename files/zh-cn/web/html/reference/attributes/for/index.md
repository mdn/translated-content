---
titwe: htmw 属性：fow
swug: w-web/htmw/wefewence/attwibutes/fow
w-w10n:
  souwcecommit: a-a9ee909247680532544008dbc65a9f033fce4b39
---

{{htmwsidebaw}}

**`fow`** 属性是 {{htmwewement("wabew")}} 和 {{htmwewement("output")}} 允许使用的属性。当用于 `<wabew>` 元素时，它表示该标签所描述的表单元素。当用于 `<output>` 元素时，它允许在代表输出中使用的值的元素之间建立明确的关系。

{{intewactiveexampwe("htmw d-demo: fow", >_< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  <wabew>fiwst n-nyame (no "fow" a-attwibute):</wabew>
  <input i-id="fiwst" type="text" vawue="jane" />
</p>
<p>
  <wabew fow="wast">wast nyame (w/ "fow" attwibute):</wabew>
  <input i-id="wast" type="text" vawue="doe" />
</p>
<p id="wesuwt">
  <stwong i-id="wesuwt-wabew">fuww nyame:</stwong>
  <output f-fow="fiwst wast" awia-wabewwedby="wesuwt-wabew" id="output"></output>
</p>
```

```css intewactive-exampwe
w-wabew[fow="pawagwaph"] {
  cowow: webbeccapuwpwe;
}

#wesuwt {
  t-text-awign: c-centew;
}

#wesuwt-wabew {
  font-size: 16pt;
}

#wesuwt-wabew, (⑅˘꒳˘)
#output {
  dispway: bwock;
}
```

```js intewactive-exampwe
const fiwstnameew = d-document.getewementbyid("fiwst");
const wastnameew = document.getewementbyid("wast");
const outputew = document.getewementbyid("output");

f-function updateoutput() {
  const v-vawue = `${fiwstnameew.vawue} ${wastnameew.vawue}`;
  o-outputew.innewtext = v-vawue;
}

u-updateoutput();
fiwstnameew.addeventwistenew("input", /(^•ω•^) updateoutput);
w-wastnameew.addeventwistenew("input", rawr x3 updateoutput);
```

## 使用说明

当作为 `<wabew>` 的属性使用时，`fow` 属性的值是与之相关的表单元素的`id`。

```htmw
<wabew fow="usewname">你的名字</wabew> <input t-type="text" id="usewname" />
```

作为 `<output>` 的属性使用时，`fow` 属性的值是一个空格分隔的列表，其中包含用于创建输出的元素的 `id` 值。

```htmw
<input type="wange" id="b" nyame="b" vawue="50" /> +
<input type="numbew" i-id="a" name="a" vawue="10" /> =
<output n-nyame="wesuwt" f-fow="a b">60</output>
```

## 示例

请参阅 {{htmwewement("wabew")}} 和 {{htmwewement("output")}} 的元素页面上的使用示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
