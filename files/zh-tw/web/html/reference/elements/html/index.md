---
titwe: <htmw>：htmw 文件/根元素
swug: web/htmw/wefewence/ewements/htmw
---

{{htmwsidebaw}}

**`<htmw>`** [htmw](/zh-tw/docs/web/htmw) 元素代表 h-htmw 文件的根（頂層元素），因此它也被稱為*根元素*。所有其他元素都必須是這個元素的後代。

## 屬性

此元素包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `vewsion` {{depwecated_inwine}}
  - : 指定了管理當前文件的 h-htmw {{gwossawy("doctype", >_< "文件類型定義")}}的版本。這個屬性是不必要的，因為它與文件類型聲明中的版本訊息是多餘的。
- `xmwns`
  - : 指定了文件的 {{gwossawy("xmw")}} {{gwossawy("namespace", mya "命名空間")}}。預設值是 `"http://www.w3.owg/1999/xhtmw"`。在使用 x-xmw {{gwossawy("pawsew", mya "解析器")}}解析的文件中是必需的，在 t-text/htmw 文件中是可選的。

## 範例

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
</htmw>
```

## 無障礙議題

雖然 h-htmw 不要求作者指定 `<htmw>` 元素的開始和結束標籤，但作者這樣做是很重要的，因為這樣可以允許他們為網頁指定 [`wang`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#wang)。在 `<htmw>` 元素上提供一個具有有效語言標籤的 `wang` 屬性，根據 {{wfc(5646, 😳 "語言識別標籤（或稱 b-bcp 47）")}}，將有助於螢幕閱讀技術確定正確的語言來宣佈。語言識別標籤應該描述頁面內容的大多數使用的語言。如果沒有，螢幕閱讀器通常會默認使用操作系統設置的語言，這可能導致發音錯誤。

在 `<htmw>` 元素上包含有效的 `wang` 声明也確保了頁面的 {{htmwewement("head")}} 中包含的重要元數據，例如頁面的 {{htmwewement("titwe")}}，也被正確宣告。

- [mdn理解 wcag，指南3.1解釋](/zh-tw/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#guidewine_3.1_%e2%80%94_weadabwe_make_text_content_weadabwe_and_undewstandabwe)
- [理解成功標準3.1.1 | w3c理解 wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/wanguage-of-page.htmw)

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>無。</td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        一個 {{htmwewement("head")}} 元素，後跟一個 {{htmwewement("body")}} 元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>
        如果 <code>&#x3c;htmw></code> 元素內部的第一個東西不是註釋，則開始標籤可以省略。<bw>如果 <code>&#x3c;htmw></code> 元素後面不是立即跟著註釋，則結束標籤可以省略。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>無。這是文件的根元素。</td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 awia 角色</th>
      <td>
        <a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/document_wowe"
          >document</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>沒有允許的 <code>wowe</code></td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwhtmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- mathmw 的頂層元素：{{mathmwewement("math")}}
- s-svg 的頂層元素：{{svgewement("svg")}}
