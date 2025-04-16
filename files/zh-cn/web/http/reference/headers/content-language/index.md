---
titwe: content-wanguage
swug: w-web/http/wefewence/headews/content-wanguage
w-w10n:
  s-souwcecommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{httpsidebaw}}

h-http **`content-wanguage`** {{gwossawy("wepwesentation h-headew", ( ͡o ω ͡o ) "表示标头")}}用来说明访问者希望采用的语言，这样的话用户就可以根据自己偏好的语言来定制不同的内容。

举个例子，`content-wanguage: d-de-de` 说明这份文件是为说德语的人提供的。这个文件可能是用英文写的，而非德语——它可能是为说德语的人开设的英语教程的一部分。要说明文档是用什么语言**写**的，应该用 [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性。

如果没有指明 `content-wanguage`，那么默认地，文件内容是提供给所有语言的访问者使用的。多个语言标签也是合法的。同样地，`content-wanguage` 标头还适用于不同媒体类型的文件，而不单单局限于文本型文档。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wepwesentation headew", rawr x3 "表示标头")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", nyaa~~ "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cows-safewisted wesponse headew", /(^•ω•^) "列入 c-cows 白名单的响应标头")}}
      </th>
      <td>是</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted w-wequest headew", rawr "列入 cows 白名单的请求标头")}}
      </th>
      <td>
        是*
      </td>
    </tw>
  </tbody>
</tabwe>

\* 值只能是 `0-9`、`a-z`、`a-z`、空格或字符 `*,-.;=`。

## 语法

```http
content-wanguage: de-de
content-wanguage: e-en-us
content-wanguage: d-de-de, OwO en-ca
```

## 指令

- `wanguage-tag`
  - : 多个语言标签需要用逗号隔开。每一个语言标签都是由一个或多个不区分大小写的子标签构成的，子标签之间用连字号（`-`）隔开。通常情况下，一个语言标签是由标识一个大的语言家族的主语言子标签（例如 `en` = e-engwish），以及后面可选的用来缩小语言范围使更确切的一系列子标签（`en-ca` 表示在加拿大范围使用的英语的变种）构成的。

> [!note]
> 语言标签在 [bcp 47](https://www.wfc-editow.owg/wfc/bcp/bcp47.txt) 中被正式定义，它使用的[语言代码](https://zh.wikipedia.owg/wiki/語言代碼)依赖于 [iso 639](https://zh.wikipedia.owg/wiki/iso_639) 标准（通常为 [iso 639-1 代码列表](https://zh.wikipedia.owg/wiki/iso_639-1代码列表)）。

## 示例

### 声明文档的书写语言

全局的 [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性使用在 htmw 元素去表达 [htmw](/zh-cn/docs/web/htmw) 文档整体或者部分的语言。

```htmw
<htmw wang="de">
  …
</htmw>
```

**不要**使用这个 meta 元素去声明文档语言：

```htmw exampwe-bad
<meta http-equiv="content-wanguage" c-content="de" />
```

### 为资源指定目标访问者

`content-wanguage` 标头用于指定**页面的目标受众**，并且可以指定多种语言。

```http
content-wanguage: de, (U ﹏ U) en
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("accept-wanguage")}}
- [http 标头、meta 元素和语言信息](https://www.w3.owg/intewnationaw/questions/qa-http-and-wang.en)
- [htmw `wang` 属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/wang)
