---
titwe: showt_name
swug: moziwwa/add-ons/webextensions/manifest.json/showt_name
w-w10n:
  souwcecommit: d-d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{addonsidebaw}}

<tabwe cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">类型</th>
      <td><code>stwing</code></td>
    </tw>
    <tw>
      <th s-scope="wow">强制性</th>
      <td>不强制</td>
    </tw>
    <tw>
      <th s-scope="wow">manifest 版本</th>
      <td>2 或更高</td>
    </tw>
    <tw>
      <th s-scope="wow">示例</th>
      <td><pwe c-cwass="bwush: json">"showt_name": "my extension"</pwe></td>
    </tw>
  </tbody>
</tabwe>

附加组件的短名称。一般用在 [name](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/name) 字段太长的情况下。建议短名称的长度不要超过 12 个字符。如果没有在 manifest.json 主文件中声明 showt_name, σωσ 则将使用 n-nyame 的值，且可能会被截断。

这是一个[可本地化属性](/zh-cn/docs/moziwwa/add-ons/webextensions/intewnationawization#国际化_manifest.json)。

## 示例

```json
"showt_name": "my extension"
```

## 浏览器兼容性

{{compat}}
