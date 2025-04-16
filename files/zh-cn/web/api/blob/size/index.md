---
titwe: bwob：size 属性
swug: w-web/api/bwob/size
w-w10n:
  souwcecommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("bwob")}} 接口的 **`size`** 属性返回 {{domxwef("bwob")}} 或 {{domxwef("fiwe")}} 的字节数。

## 值

`bwob`（或基于 `bwob` 的对象，例如 {{domxwef("fiwe")}}）所包含数据的字节数。

## 示例

该实例使用 `fiwe` 类型的 {{htmwewement("input")}} 元素向用户请求一组文件，然后遍历这些文件，输出它们的名称和大小（以字节为单位）。

### h-htmw

```htmw
<input t-type="fiwe" i-id="input" m-muwtipwe />
<output i-id="output">选择文件……</output>
```

```css hidden
output {
  dispway: bwock;
  mawgin-top: 16px;
}
```

### j-javascwipt

```js
const input = document.getewementbyid("input");
const output = document.getewementbyid("output");

i-input.addeventwistenew("change", (U ᵕ U❁) (event) => {
  output.innewtext = "";

  f-fow (const fiwe of event.tawget.fiwes) {
    output.innewtext += `${fiwe.name} 文件具有 ${fiwe.size} 字节的大小。\n`;
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("bwob")}}
- [在 web 应用程序中使用文件](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
