---
title: <fencedframe>：圍欄頁框元素
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: 8964db8251cf2825fa81270309a45a475184aab1
---

{{HTMLSidebar}}{{SeeCompatTable}}

**`<fencedframe>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表了一個巢狀的{{Glossary("browsing context", "瀏覽上下文")}}，將另一個 HTML 頁面嵌入到當前頁面中。`<fencedframe>` 在形式和功能上與 {{htmlelement("iframe")}} 元素非常相似，不同之處在於：

- `<fencedframe>` 內容和其嵌入站點之間的通信受限。
- `<fencedframe>` 可以訪問跨站點數據，但只有在一個非常特定的一組受控情況下才能保護用戶隱私。
- `<fencedframe>` 無法通過常規腳本（例如讀取或設置源 URL）來操控或訪問其數據。`<fencedframe>` 內容只能通過[特定的 API](/zh-TW/docs/Web/API/Fenced_frame_API#use_cases) 來嵌入。
- `<fencedframe>` 無法訪問嵌入上下文的 DOM，嵌入上下文也無法訪問 `<fencedframe>` 的 DOM。

`<fencedframe>` 元素是一種具有更多本地隱私功能的 `<iframe>`。它解決了 `<iframe>` 的一些缺陷，例如對第三方 cookie 的依賴和其他隱私風險。詳細信息請參見 [Fenced frame API](/zh-TW/docs/Web/API/Fenced_frame_API)。

## 屬性

該元素包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `allow` {{experimental_inline}}

  - : 為 `<fencedframe>` 指定一個[權限策略](/zh-TW/docs/Web/HTTP/Permissions_Policy)，該策略基於請求的原始位置定義了哪些功能對 `<fencedframe>` 可用。有關可以通過設置在圍欄頁框上的策略來控制哪些功能的更多詳細信息，請參見[可用於圍欄頁框權限策略](#可用於圍欄頁框權限策略)。

- `height` {{experimental_inline}}

  - : 一個無單位的整數，表示圍欄頁框的高度，以 CSS 像素為單位。默認值為 `150`。

- `width` {{experimental_inline}}
  - : 一個無單位的整數，表示圍欄頁框的寬度，以 CSS 像素為單位。默認值為 `300`。

## 可用於圍欄頁框權限策略

從頂層上下文委派給圍欄頁框的允許和拒絕功能的權限策略可以用作通信通道，因此構成一種隱私威脅。因此，標準 Web 功能可以通過[權限策略](/zh-TW/docs/Web/HTTP/Headers/Permissions-Policy)（例如 [`camera`](/zh-TW/docs/Web/HTTP/Headers/Permissions-Policy/camera) 或 [`geolocation`](/zh-TW/docs/Web/HTTP/Headers/Permissions-Policy/geolocation)）控制其可用性的**不可用**在圍欄頁框內。

可以通過策略在圍欄頁框內啟用的唯一功能是專為在圍欄頁框內使用而設計的特定功能：

- [受保護的受眾 API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`
- [共享存儲 API](/zh-TW/docs/Web/API/Shared_Storage_API)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`

目前，在圍欄頁框內始終啟用這些功能。將來，哪些功能被啟用將可以使用 `<fencedframe>` 的 `allow` 屬性來控制。通過這種方式阻止隱私沙箱功能還將阻止圍欄頁框加載——完全沒有通信通道。

## 跨越圍欄頁框邊界進行對焦

將文件的活動焦點從圍欄頁框邊界（即從框框外的元素到內部元素，或反之）移動的能力受到限制。用戶啟動的操作，如單擊或切換，可以這樣做，因為那裡沒有指紋識別風險。

然而，試圖通過 API 調用（例如 {{domxref("HTMLElement.focus()")}}）是被禁止的——惡意腳本可以使用一系列這樣的調用來跨越邊界洩露推斷的信息。

## 定位和縮放

作為[替換元素](/zh-TW/docs/Web/CSS/Replaced_element)，`<fencedframe>` 允許使用 {{cssxref("object-position")}} 屬性調整嵌入文件在其框內的位置。

> **備註：** {{cssxref("object-fit")}} 屬性對 `<fencedframe>` 元素沒有影響。

嵌入內容的大小可以由 `<fencedframe>` 的 {{domxref("HTMLFencedFrameElement.config", "config")}} 物件的內部 `contentWidth` 和 `contentHeight` 屬性設置。在這種情況下，改變 `<fencedframe>` 的 `width` 或 `height` 將改變頁面上嵌入容器的大小，但容器內部的文件將被視覺縮放以適應。嵌入文件的報告寬度和高度（即 {{domxref("Window.innerWidth")}} 和 {{domxref("Window.innerHeight")}}）將保持不變。

## 無障礙

使用輔助技術，如螢幕閱讀器的人，可以使用 `<fencedframe>` 的 [`title` 屬性](/zh-TW/docs/Web/HTML/Global_attributes/title)來標記其內容。標題的值應該簡要描述嵌入的內容：

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

如果沒有此標題，他們必須進入 `<fencedframe>` 才能確定其嵌入的內容。這種上下文轉換可能會令人困惑和耗時，特別是對於包含多個 `<fencedframe>` 的頁面和／或嵌入包含互動內容（如視訊或音訊）的情況。

## 範例

要設置 `<fencedframe>` 中顯示的內容，需要使用 API（例如[受保護的受眾](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)或[共享存儲](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)）生成一個 {{domxref("FencedFrameConfig")}} 物件，然後將其設置為 `<fencedframe>` 的 `config` 屬性的值。

以下範例從受保護的受眾 API 的廣告拍賣中獲取了一個 `FencedFrameConfig`，然後將其用於在 `<fencedframe>` 中顯示獲勝的廣告：

```html
<fencedframe width="640" height="320"></fencedframe>
```

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.querySelector("fencedframe");
frame.config = frameConfig;
```

> [!NOTE]
> 必須在 `runAdAuction()` 調用中傳遞 `resolveToConfig: true`，以獲取一個 `FencedFrameConfig` 物件。如果未設置，則生成的 {{jsxref("Promise")}} 將解析為一個只能在 {{htmlelement("iframe")}} 中使用的 URN。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#嵌入型內容"
          >嵌入型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#互動型內容"
          >互動型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>無。</td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>任何接受嵌入型內容的元素。</td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有相對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>、
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>、
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLFencedFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [圍欄頁框 API](/zh-TW/docs/Web/API/Fenced_frame_API)
- [在 developers.google.com 上的圍欄頁框](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame)
- 在 developers.google.com 上的[隱私沙箱](https://developers.google.com/privacy-sandbox)
