---
title: <details>：揭露細節元素
slug: Web/HTML/Element/details
---

{{HTMLSidebar}}

**`<details>`** [HTML](/zh-TW/docs/Web/HTML) 元素創建了一個揭露小部件，在小部件被切換為「開啟」狀態時，信息只有可見。必須使用 {{HTMLElement("summary")}} 元素提供摘要或標籤。

通常，揭露小部件在螢幕上以小三角形呈現，該三角形旋轉（或扭曲）以指示開啟/關閉狀態，並帶有三角形旁邊的標籤。`<summary>` 元素的內容用作揭露小部件的標籤。`<details>` 的內容提供了 `<summary>` 的{{glossary("accessible description", "無障礙描述")}}。

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

`<details>` 小部件可以處於兩種狀態之一。默認的「關閉」狀態僅顯示三角形和 `<summary>` 內的標籤（或如果沒有 `<summary>`，則是{{Glossary("user agent", "使用者代理")}}定義的默認字串）。

當用戶點擊小部件或將焦點放在小部件上並按空格鍵時，它會「扭轉」開啟，顯示其內容。常見的使用旋轉或扭曲三角形來表示打開或關閉小部件的用法，這就是為什麼有時被稱為「旋鈕」的原因。

你可以使用 CSS 來設置揭露小部件的樣式，並且可以通過設置/刪除其 [`open`](#open) 屬性來以編程方式打開和關閉小部件。不幸的是，目前沒有內建的方法來在開啟和關閉之間實現過渡動畫。

默認情況下，在關閉時，小部件的高度僅足以顯示揭露三角形和摘要。打開時，它會展開以顯示其中包含的細節。

完全符合標準的實現會自動將 CSS `{{cssxref("display")}}: list-item` 應用於 {{HTMLElement("summary")}} 元素。你可以使用這個來進一步自定義其外觀。有關更多詳情，請參閱[自定義揭露小部件](#自定義揭露小部件)。

## 屬性

此元素包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `open`

  - : 此布林屬性指示詳細信息——即 `<details>` 元素的內容——目前是否可見。當此屬性存在時，顯示詳細信息，或者當此屬性不存在時，隱藏詳細信息。默認情況下，此屬性不存在，這意味著詳細信息不可見。

    > [!NOTE]
    > 你必須完全刪除此屬性才能使詳細信息隱藏。`open="false"` 會使詳細信息可見，因為此屬性是布林型的。

- `name`

  - : 此屬性使多個 `<details>` 元素連接在一起，一次只能打開一個。這使開發人員可以輕鬆創建 UI 功能，如手風琴，而無需腳本。

    `name` 屬性指定一個組名——給多個 `<details>` 元素相同的 `name` 值以將它們分組。只能同時打開組中的一個 `<details>` 元素——打開一個將導致另一個關閉。如果多個分組的 `<details>` 元素都具有 `open` 屬性，則僅在源順序中的第一個元素會呈現為打開狀態。

    > **備註：** `<details>` 元素不必在源中相鄰以成為同一組的一部分。

## 事件

除了 HTML 元素支持的常規事件外，`<details>` 元素還支持 {{domxref("HTMLDetailsElement/toggle_event", "toggle")}} 事件，當其狀態在開啟和關閉之間更改時，該事件將分派給 `<details>` 元素。它在狀態更改後發送，儘管如果在瀏覽器能夠分派事件之前狀態多次更改，則事件將合併，以便僅發送一次。

你可以使用 `toggle` 事件的事件監聽器來檢測小部件何時更改狀態：

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* the element was toggled open */
  } else {
    /* the element was toggled closed */
  }
});
```

## 範例

### 簡單的揭露範例

此範例顯示一個簡單的 `<details>` 元素及其 `<summary>`。

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("簡單的揭露範例", 650, 150)}}

### 創建打開的揭露框

要在其打開狀態下開始 `<details>` 框，請添加布林值 `open` 屬性：

```html
<details open>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("創建打開的揭露框", 650, 150)}}

### 自定義外觀

現在讓我們應用一些 CSS 來自定義揭露框的外觀。

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details[open] > summary {
  background-color: #ccf;
}
```

此 CSS 創建了一個類似標籤界面的外觀，點擊標籤將其展開以顯示其內容。

選擇器 `details[open]` 可用於為打開的元素設置樣式。

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("自定義外觀", 650, 150)}}

### 自定義揭露小部件

揭露三角形本身可以進行自定義，儘管這種做法得到的廣泛支持並不多。由於在標準化時，瀏覽器支持這種自定義的方式存在差異，因此我們將不得不在一段時間內使用多種方法。

{{HTMLElement("summary")}} 元素支持 {{cssxref("list-style")}} 簡寫屬性及其分解屬性，例如 {{cssxref("list-style-type")}}，用於將揭露三角形更改為你選擇的任何內容（通常使用 {{cssxref("list-style-image")}}）。例如，我們可以通過設置 `list-style: none` 來刪除揭露小部件圖標。

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
  list-style: none;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}
```

此 CSS 創建了一個類似標籤界面的外觀，激活標籤會展開並打開以顯示其內容。

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("自定義揭露小部件", 650, 150)}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類別</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、章節根、<a href="/zh-TW/docs/Web/HTML/Content_categories#互動型內容"
          >互動型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th<td>
        一個 {{HTMLElement("summary")}} 元素，後面跟著
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>不允許 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLDetailsElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("summary")}}
