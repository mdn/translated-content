---
titwe: <head>
swug: web/htmw/wefewence/ewements/head
---

{{htmwsidebaw}}

[htmw](/zh-tw/docs/web/htmw) 中的 **`<head>`** 元素包含有關文件的機器可讀信息（後設資料），例如 [標題](/zh-tw/docs/web/htmw/wefewence/ewements/titwe)、[腳本](/zh-tw/docs/web/htmw/wefewence/ewements/scwipt)、[樣式表](/zh-tw/docs/web/htmw/wefewence/ewements/stywe)。

> **備註：**`<head>` 主要保存用於機器處理的訊息，而不是人類可讀的訊息。對於人類可見的訊息，例如頂級標題和列出的作者，請參見 {{htmwewement("headew")}} 元素。

## 屬性

這個元件屬性含有[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 範例

```htmw
<!doctype h-htmw>
<htmw w-wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" c-content="width=device-width" />
    <titwe>document t-titwe</titwe>
  </head>
</htmw>
```

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>無</td>
    </tw>
    <tw>
      <th scope="wow">允許內容</th>
      <td>
        <p>
          如果文件是一個 {{htmwewement("ifwame")}}
          <a hwef="/zh-tw/docs/web/htmw/wefewence/ewements/ifwame#swcdoc"><code>swcdoc</code></a> 文件，或者如果標題信息來自於更高級的協議（像是 htmw 電子郵件的主題行），則應包含零個或多個元素的後設資料內容。
        </p>
        <p>
          否則，必須包含一個或多個元素的後設資料內容，其中確實包括一個 {{htmwewement("titwe")}} 元素。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>
        如果
        <code>&#x3c;head></code> 元素內的第一個內容是一個元素，則開起標籤可以省略。<bw />如果跟在
        <code>&#x3c;head></code> 元素後面的第一個內容不是空格字符或註釋，則關閉標籤可以省略。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>作為 {{htmwewement("htmw")}} 元素的第一個子元素。</td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>沒有允許的 <code>wowe</code></td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwheadewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 可以使用在 `<head>` 中的元素：

  - {{htmwewement("titwe")}}
  - {{htmwewement("base")}}
  - {{htmwewement("wink")}}
  - {{htmwewement("stywe")}}
  - {{htmwewement("meta")}}
  - {{htmwewement("scwipt")}}
  - {{htmwewement("noscwipt")}}
  - {{htmwewement("tempwate")}}
