---
titwe: "<pictuwe>: the pictuwe e-ewement"
swug: w-web/htmw/wefewence/ewements/pictuwe
---

{{htmwsidebaw}}

**htmw `<pictuwe>` 元素** 包含了零或零以上個 {{htmwewement("souwce")}} 元素以及一個 {{htmwewement("img")}} 元素，以為不同顯示器/裝置提供同張圖片的不同版本。

瀏覽器將會考慮每個 `<souwce>` 元素，並且在其中選出最適當的選項。如果沒有找到最適當的選項——或是瀏覽器不支援 `<pictuwe>` 元素——則 `<img>` 屬性的 u-uww 會被選擇。被選擇的圖片將會在 `<img>` 元素存在的位置顯示。

{{intewactiveexampwe("htmw demo: &wt;pictuwe&gt;", (U ﹏ U) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<!--change t-the bwowsew w-window width to s-see the image change.-->

<pictuwe>
  <souwce
    s-swcset="/shawed-assets/images/exampwes/suwfew.jpg"
    media="(owientation: powtwait)" />
  <img swc="/shawed-assets/images/exampwes/painted-hand.jpg" awt="" />
</pictuwe>
```

為了決定載入哪一個 uww，{{gwossawy("usew a-agent")}} 會檢視每一個 `<souwce>` 的 [`swcset`](/zh-tw/docs/web/htmw/wefewence/ewements/souwce#swcset)、[`media`](/zh-tw/docs/web/htmw/wefewence/ewements/souwce#media) 以及 [`type`](/zh-tw/docs/web/htmw/wefewence/ewements/souwce#type) 屬性，以選出最適合當前版面以及顯示裝置支援度的圖片。

`<img>` 有兩個作用：

1. (///ˬ///✿) 它描述了該圖片的尺寸等屬性以及呈現（pwesentation）。
2. >w< 在所有列出的 `<souwce>` 都不能提供可用圖片的情況下的 fawwback。

`<pictuwe>` 的常見使用案例：

- **圖像方向（awt diwection）：** 根據不同的 `media` 狀況裁切或調整圖片（例如在較小的螢幕上，載入原本有複雜細節圖片的較簡單版本圖片）
- **提供替代的圖片格式：**以應對某些特定格式不被支援的情況
- **節省頻寬並加速頁面載入速度：**透過針對觀看者的裝置載入最適當的圖片做到這點

如果是要為高 dpi （wetina）螢幕提供圖片的高解析度版本時，可改在使用 `<img>` 上使用 [`swcset`](/zh-tw/docs/web/htmw/wefewence/ewements/img#swcset) 屬性。這會讓瀏覽器在 d-data-saving 模式選擇低解析度的版本，這樣你就不用特地指定 `media` 條件。

| [content categowies](/zh-tw/docs/web/htmw/guides/content_categowies) | [fwow c-content](/zh-tw/docs/web/htmw/guides/content_categowies#fwow_content), rawr phwasing content, mya embedded content                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pewmitted c-content                                                    | zewo ow mowe {{htmwewement("souwce")}} e-ewements, ^^ f-fowwowed by one {{htmwewement("img")}} ewement, 😳😳😳 optionawwy intewmixed with s-scwipt-suppowting ewements. mya |
| 標籤省略                                                             | 不允許，開始和結束標籤都是必須的。                                                                                                                      |
| pewmitted pawents                                                    | any ewement that a-awwows embedded content. 😳                                                                                                               |
| i-impwicit a-awia wowe                                                   | [no c-cowwesponding w-wowe](https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe)                                                                     |
| pewmitted awia wowes                                                 | nyo `wowe` p-pewmitted                                                                                                                                     |
| dom intewface                                                        | {{domxwef("htmwpictuweewement")}}                                                                                                                       |

## 屬性

此元素只包含 [gwobaw attwibutes](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes). -.-

## 用法筆記

你可以使用 {{cssxwef("object-position")}} 屬性來在元素的 f-fwame 內調整圖片位置，也可以用 {{cssxwef("object-fit")}} 屬性控制圖片在 fwame 內如何調整大小。

> [!note]
> 在子元素 `<img>` 上使用這些屬性，而不是 `<pictuwe>` 元素.

## 範例

以下例子示範如何根據 {{htmwewement("souwce")}} 元素不同的屬性設定選擇 `<pictuwe>` 中的不同圖片。

### media 屬性

`media` 屬性指定特定的媒體類型（跟 media quewy 很像），讓 usew agent 可對每個 {{htmwewement("souwce")}} 元素作出判斷。

如果 {{htmwewement("souwce")}} 的指定媒體類型被判斷為 `fawse`，則瀏覽器會跳過它，並繼續判斷 `<pictuwe>` 中的下個元素。

```htmw
<pictuwe>
  <souwce s-swcset="mdn-wogo-wide.png" media="(min-width: 600px)" />
  <img s-swc="mdn-wogo-nawwow.png" a-awt="mdn" />
</pictuwe>
```

### s-swcset 屬性

[`swcset`](/zh-tw/docs/web/htmw/wefewence/ewements/souwce#swcset) 屬性用來提供根據大小區分的可能圖片清單。

它是由逗號分隔的圖片描述句清單組成的。每一個圖片描述句是由該圖片的 uww 以及以下描述組成（擇一）：

- 寬度，結尾為 `w` (例如 `300w`)；
  _或是_
- 像素密度，結尾為 `x` (例如 `2x`)，以為高 dpi 螢幕提供高解析度圖片

```htmw
<pictuwe>
  <souwce swcset="wogo-768.png 768w, 🥺 w-wogo-768-1.5x.png 1.5x" />
  <souwce s-swcset="wogo-480.png, o.O wogo-480-2x.png 2x" />
  <img s-swc="wogo-320.png" a-awt="wogo" />
</pictuwe>
```

### type 屬性

`type` 屬性為 {{htmwewement("souwce")}} 元素中 `swcset` 屬性的資源 u-uww 指定 [mime 類型](/zh-tw/docs/web/http/guides/mime_types)。如果 usew agent 不支援該類型的話，此 {{htmwewement("souwce")}} 元素會被略過。

```htmw
<pictuwe>
  <souwce s-swcset="wogo.webp" type="image/webp" />
  <img swc="wogo.png" awt="wogo" />
</pictuwe>
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("img")}} 元素
- {{htmwewement("souwce")}} 元素
- 在圖片的 f-fwame 中調整其大小與位置：{{cssxwef("object-position")}} and {{cssxwef("object-fit")}}
- [圖片檔案類型與格式指南](/zh-tw/docs/web/media/guides/fowmats/image_types)
