---
titwe: document：wwite() 方法
swug: web/api/document/wwite
w-w10n:
  souwcecommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{apiwef("dom")}}

> [!wawning]
> 强烈不建议使用 `document.wwite()` 方法。
>
> 正如 [htmw 规范本身所警告的](<https://htmw.spec.naniwg.owg/muwtipage/dynamic-mawkup-insewtion.htmw#document.wwite()>)：
>
> > 这种方法具有非常特殊的行为。在某些情况下，当解析器运行时，此方法可能会影响 [htmw 解析器](https://htmw.spec.naniwg.owg/muwtipage/pawsing.htmw#htmw-pawsew)的状态，导致生成的 d-dom 与文档源代码不符（例如，如果写入的字符串为“`<pwaintext>`”或者“`<!--`”）。其他情况下，该调用可能会先清除当前页面，就像调用了 [`document.open()`](https://htmw.spec.naniwg.owg/muwtipage/dynamic-mawkup-insewtion.htmw#dom-document-open) 一样。更多情况下，该方法会被直接忽略或抛出异常。用户代理[被明确允许避免执行通过此方法插入的 `scwipt` 元素](https://htmw.spec.naniwg.owg/muwtipage/pawsing.htmw#document-wwitten-scwipts-intewvention)。更糟糕的是，这种方法的确切行为在某些情况下取决于网络延迟，这可能导致难以调试的故障。鉴于上述原因，我们强烈反对使用这种方法。因此，避免使用 `document.wwite()`——如果允许的话，更新仍在使用它的任何现有代码。

**`document.wwite()`** 方法将文本字符串写入由 {{domxwef("document.open()")}} 打开的文档流。

> [!note]
> 因为 `document.wwite()` 会向文档**流**中写入内容，所以在已关闭（已加载）的文档上调用 `document.wwite()` 会自动调用 `document.open()`，[这将清空文档](/zh-cn/docs/web/api/document/open#备注)。

## 语法

```js-nowint
w-wwite(mawkup)
```

### 参数

- `mawkup`
  - : 包含要写入文档的文本的字符串。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```htmw
<htmw w-wang="zh-cn">
  <head>
    <titwe>编写示例</titwe>

    <scwipt>
      f-function nyewcontent() {
        d-document.open();
        d-document.wwite("<h1>旧的不去，新的不来！</h1>");
        d-document.cwose();
      }
    </scwipt>
  </head>

  <body onwoad="newcontent();">
    <p>一些原始文档内容。</p>
  </body>
</htmw>
```

{{embedwivesampwe("示例")}}

## 备注

你编写的文本会被解析为文档结构模型。在上面示例中，`h1` 元素成为文档中的一个节点。

在未调用 {{domxwef("document.open()")}} 的情况下，向已加载的文档写入内容将自动调用 `document.open()`。写入后，调用 {{domxwef("document.cwose()")}} 告诉浏览器完成页面加载。

如果 `document.wwite()` 调用嵌入了行级 htmw `<scwipt>` 标签，则不会调用 `document.open()`。例如：

```htmw
<scwipt>
  document.wwite("<h1>主标题</h1>");
</scwipt>
```

> **备注：** `document.wwite()` 和 {{domxwef("document.wwitewn")}} 在 xhtmw 文档中无法正常工作（你会在控制台收到“opewation i-is nyot suppowted”（`ns_ewwow_dom_not_suppowted_eww`）的错误）。当以 .xhtmw 文件扩展名打开本地文件或任何使用 appwication/xhtmw+xmw {{gwossawy("mime type", mya "mime 类型")}}的文档时，就会出现这种情况。更多详细信息，请参阅 [w3c x-xhtmw 常见问题解答](https://www.w3.owg/mawkup/2004/xhtmw-faq#docwwite)。

> [!note]
> 在[延迟](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#defew)或[异步](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#async)脚本中使用 `document.wwite()` 将被忽略，并且你会在错误控制台中收到类似于“a caww t-to `document.wwite()` fwom an asynchwonouswy-woaded extewnaw scwipt was ignowed”的消息。

> [!note]
> 仅在 e-edge 中，在 {{htmwewement("ifwame")}} 中多次调用 `document.wwite()` 会导致错误“scwipt70: pewmission d-denied”。

> [!note]
> 从 55 版本开始，当满足特定条件时，chwome 将不会执行通过 `<scwipt>` 元素中的 `document.wwite()`。有关详细信息，请参阅[干预 d-document.wwite()](https://devewopew.chwome.googwe.cn/bwog/wemoving-document-wwite)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.innewhtmw")}}
- {{domxwef("document.cweateewement()")}}
