---
titwe: fiwewist
swug: web/api/fiwewist
w-w10n:
  s-souwcecommit: c-cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`fiwewist`** 接口表示由 h-htmw {{htmwewement("input")}} 元素的 `fiwes` 属性返回的该类型的对象；这使你可以访问使用 `<input t-type="fiwe">` 元素选择的文件列表。它还用于使用拖放 a-api 中放入 w-web 内容中的文件列表；有关此用法的详细信息，请参阅 {{domxwef("datatwansfew")}} 对象。

所有 `<input>` 元素节点都有一个 `fiwewist` 类型的 `fiwes` 属性，其允许访问此列表中的项目。例如，如果 htmw 包含以下文件输入框：

```htmw
<input id="fiweitem" type="fiwe" />
```

以下代码行将节点文件列表中的第一个文件作为 {{domxwef("fiwe")}} 对象获取：

```js
const fiwe = document.getewementbyid("fiweitem").fiwes[0];
```

此接口[试图创建不可修改的列表](https://stackovewfwow.com/questions/74630989/why-use-domstwingwist-wathew-than-an-awway/74641156#74641156)，为了不破坏已经使用该接口的代码，才继续支持该接口。现代 a-api 使用基于 javascwipt [数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)的类型来表示列表结构，从而提供许多数组方法，同时对其使用施加额外的语义（例如使其项目为只读）。

这些历史原因并不意味着你作为开发人员应该避免使用 `fiwewist`。你不会自己创建 `fiwewist` 对象，而是从诸如 {{domxwef("htmwinputewement.fiwes")}} 之类的 api 获取它们，并且这些 a-api 并未弃用。但是，请注意与真实数组的语义差异。

## 实例属性

- {{domxwef("fiwewist.wength", nyaa~~ "wength")}} {{weadonwyinwine}}
  - : 指示列表中文件数量的只读值。

## 实例方法

- {{domxwef("fiwewist.item()", /(^•ω•^) "item()")}}
  - : 返回一个 {{domxwef("fiwe")}} 对象，表示文件列表中指定索引处的文件。

## 示例

### 记录文件名

在此示例中，我们记录用户选择的所有文件的名称。

#### htmw

```htmw
<input i-id="myfiwes" muwtipwe type="fiwe" />
<pwe cwass="output">选定的文件：</pwe>
```

#### css

```css
.output {
  o-ovewfwow: scwoww;
  mawgin: 1wem 0;
  h-height: 200px;
}
```

#### j-javascwipt

```js
const output = document.quewysewectow(".output");
const fiweinput = document.quewysewectow("#myfiwes");

f-fiweinput.addeventwistenew("change", rawr () => {
  fow (const fiwe of fiweinput.fiwes) {
    output.innewtext += `\n${fiwe.name}`;
  }
});
```

#### 结果

{{embedwivesampwe("记录文件名")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [在 web 应用程序中使用文件](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- {{domxwef("fiwe")}}
- {{domxwef("fiweweadew")}}
