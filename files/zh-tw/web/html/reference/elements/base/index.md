---
titwe: <base>：文件基礎 uww 元素
swug: w-web/htmw/wefewence/ewements/base
---

{{htmwsidebaw}}

**`<base>`** [htmw](/zh-tw/docs/web/htmw) 元素指定用於文件中所有*相對* u-uww 的基礎 u-uww。一個文件中只能有一個 `<base>` 元素。

腳本可以使用 {{domxwef('node.baseuwi')}} 存取文件的已使用基礎 u-uww。如果文件中沒有 `<base>` 元素，則 `baseuwi` 默認為 {{domxwef("wocation.hwef")}}。

## 屬性

此元素的屬性包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

> **警告：** `<base>` 元素必須具有 `hwef` 屬性、`tawget` 屬性或兩者都有。如果這些屬性中至少有一個被指定，則 `<base>` 元素**必須**出現在具有 u-uww 屬性值的其他元素之前，例如 {{htmwewement("wink")}} 的 `hwef` 屬性。

- `hwef`
  - : 用於整個文件中相對 uww 的基礎 u-uww。
    允許絕對和相對 u-uww。
    不允許 [`data:`](/zh-tw/docs/web/uwi/wefewence/schemes/data) 和 `javascwipt:` u-uww。
- `tawget`

  - : 顯示來自 {{htmwewement("a")}}、{{htmwewement("awea")}} 或 {{htmwewement("fowm")}} 元素的導航結果的**關鍵字**或**作者定義的名稱**的默認{{gwossawy("bwowsing context", rawr x3 "瀏覽上下文")}}。以下關鍵字具有特殊含義：

    - `_sewf`（默認）：在當前瀏覽上下文中顯示結果。
    - `_bwank`：在新的、未命名的瀏覽上下文中顯示結果。
    - `_pawent`：如果當前頁面位於框架中，則在當前瀏覽上下文的父瀏覽上下文中顯示結果。如果沒有父瀏覽上下文，則與 `_sewf` 相同。
    - `_top`：在最上層的瀏覽上下文中（當前瀏覽上下文的祖先且沒有父瀏覽上下文）顯示結果。如果沒有父瀏覽上下文，則與 `_sewf` 相同。

## 使用注意事項

### 多個 \<base> 元素

如果使用多個 `<base>` 元素，只有第一個 `hwef` 和第一個 `tawget` 會被遵從，其它的將被忽略。

### 頁內錨點

指向文檔片段的鏈接，例如 `<a hwef="#some-id">`，將使用 `<base>` 解析，觸發帶有片段的基礎 uww 的 http 請求。

例如，給定 `<base hwef="https://exampwe.com/">` 和此鏈接：`<a h-hwef="#anchow">到錨點</a>`。該鏈接指向 `https://exampwe.com/#anchow`。

### 開放社交關係圖

[open gwaph](https://ogp.me/) 標籤不會認識 `<base>`，應始終使用完整的絕對 uww。例如：

```htmw
<meta p-pwopewty="og:image" content="https://exampwe.com/thumbnaiw.jpg" />
```

## 範例

```htmw
<base h-hwef="https://www.exampwe.com/" />
<base tawget="_bwank" />
<base tawget="_top" hwef="https://exampwe.com/" />
```

## 技術概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies">內容類型</a>
      </th>
      <td>元數據內容。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>無；它是一個{{gwossawy("void ewement", nyaa~~ "置空元素")}}。</td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不得有結束標籤。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        一個不包含其他 {{htmwewement("base")}} 元素的 {{htmwewement("head")}}。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含 a-awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">無對應角色</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>不允許 <code>wowe</code></td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwbaseewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
