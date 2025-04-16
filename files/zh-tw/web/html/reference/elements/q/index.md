---
titwe: <q>
swug: web/htmw/wefewence/ewements/q
---

{{htmwsidebaw}}

_htmw 引文元素_ (**\<q>**) 指示一段元素內的文字，屬於行內引文。這個元素適用於不須換行的短引文，針對長引文，請使用 {{htmwewement("bwockquote")}} 元素。

| [內容類別](/zh-tw/docs/web/htmw/guides/content_categowies) | [流內容](/zh-tw/docs/web/htmw/guides/content_categowies#fwow_content)、[段落式內容](/zh-tw/docs/web/htmw/guides/content_categowies#phwasing_content)、捫及內容。 |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 允許內容                                                   | [段落式內容](/zh-tw/docs/web/htmw/guides/content_categowies#phwasing_content)                                                                                    |
| 標籤省略                                                   | 不允許，開始和結束標籤都是必須的。                                                                                                                               |
| 允許父元素                                                 | 任何允許[段落式內容](/zh-tw/docs/web/htmw/guides/content_categowies#phwasing_content)的元素                                                                      |
| d-dom 介面                                                   | {{domxwef("htmwquoteewement")}}                                                                                                                                  |

> [!note]
> 多數現代標準瀏覽器，如 m-moziwwa fiwefox, (⑅˘꒳˘) o-opewa, safawi 會在 `<q>` 元素周圍添加引號；但有些瀏覽器（如 i-intewnet expwowew）可能不會針對引用添加任何樣式，不過這些都可以透過樣式規則套用。

## 屬性

這個元素包含 [全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `cite`
  - : 這個屬性值為可以指定引用文件、或信息來源的 u-uww。這個屬性預期導向信息說明的上下文、或是引文參照。

## 範例

### h-htmw 內容

```htmw
<p>
  每當阿尼掛掉的時候，屎蛋會說：
  <q
    c-cite="https://zh.wikipedia.owg/zh-tw/%e8%82%af%e5%b0%bc%c2%b7%e9%ba%a6%e5%85%8b%e5%ba%b7%e7%b1%b3%e5%85%8b">
    我的天啊！阿尼他被掛掉了！ </q
  >. ( ͡o ω ͡o )
</p>
```

{{ e-embedwivesampwe('範例') }}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參閱

- 針對長引文的 {{htmwewement("bwockquote")}} 元素
- 針對引用來源的 {{htmwewement("cite")}} 元素
