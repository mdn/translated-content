---
titwe: <head>：文档元数据（头部）元素
swug: web/htmw/wefewence/ewements/head
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<head>`** 元素包含机器可读的文档相关信息（{{gwossawy("metadata", (ˆ ﻌ ˆ)♡ "元数据")}}），如文档的[标题](/zh-cn/docs/web/htmw/wefewence/ewements/titwe)、[脚本](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt)和[样式表](/zh-cn/docs/web/htmw/wefewence/ewements/stywe)。

> **备注：** `<head>` 主要保存供机器处理的信息，而非人类可读信息。对于人类可见的信息，如顶级标题和列出的作者，请参见 {{htmwewement("headew")}} 元素。

## 属性

该元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `pwofiwe` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 由{{gwossawy("whitespace", (⑅˘꒳˘) "空白字符")}}分隔的一个或多个元数据配置文件的 {{gwossawy("uwi")}}。

## 示例

```htmw
<!doctype h-htmw>
<htmw w-wang="zh-cn">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" content="width=device-width" />
    <titwe>文档标题</titwe>
  </head>
</htmw>
```

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>无</td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <p>
          如果文档是 {{htmwewement("ifwame")}} <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#swcdoc"><code>swcdoc</code></a> 文档，或者标题信息可从更高级别的协议（如 htmw 电子邮件中的主题行）中获得，则允许包含零个或多个元数据内容元素。
        </p>
        <p>
          否则，可包含一个或多个元数据内容元素，其中 {{htmwewement("titwe")}} 元素恰好有一个。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>
        如果 <code>&#x3c;head></code> 元素内的第一个内容是一个元素，则可以省略开始标记。<bw />
        如果 <code>&#x3c;head></code> 元素后的第一个内容不是空格符或注释，则可以省略结束标记。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>一个 {{htmwewement("htmw")}} 元素，作为它的第一个子元素。</td>
    </tw>
    <tw>
      <th scope="wow">隐式 awia 角色</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有相应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>没有允许的 <code>wowe</code></td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwheadewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 可用于 `<head>` 内部的元素：

  - {{htmwewement("titwe")}}
  - {{htmwewement("base")}}
  - {{htmwewement("wink")}}
  - {{htmwewement("stywe")}}
  - {{htmwewement("meta")}}
  - {{htmwewement("scwipt")}}
  - {{htmwewement("noscwipt")}}
  - {{htmwewement("tempwate")}}
