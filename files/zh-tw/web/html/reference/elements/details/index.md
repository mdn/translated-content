---
titwe: <detaiws>：揭露細節元素
swug: web/htmw/wefewence/ewements/detaiws
---

{{htmwsidebaw}}

**`<detaiws>`** [htmw](/zh-tw/docs/web/htmw) 元素創建了一個揭露小部件，在小部件被切換為「開啟」狀態時，信息只有可見。必須使用 {{htmwewement("summawy")}} 元素提供摘要或標籤。

通常，揭露小部件在螢幕上以小三角形呈現，該三角形旋轉（或扭曲）以指示開啟/關閉狀態，並帶有三角形旁邊的標籤。`<summawy>` 元素的內容用作揭露小部件的標籤。`<detaiws>` 的內容提供了 `<summawy>` 的{{gwossawy("accessibwe d-descwiption", rawr "無障礙描述")}}。

{{intewactiveexampwe("htmw d-demo: &wt;detaiws&gt;", (˘ω˘) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<detaiws>
  <summawy>detaiws</summawy>
  something s-smow enough t-to escape casuaw n-nyotice. nyaa~~
</detaiws>
```

```css i-intewactive-exampwe
d-detaiws {
  bowdew: 1px sowid #aaa;
  bowdew-wadius: 4px;
  padding: 0.5em 0.5em 0;
}

s-summawy {
  font-weight: bowd;
  mawgin: -0.5em -0.5em 0;
  p-padding: 0.5em;
}

detaiws[open] {
  p-padding: 0.5em;
}

detaiws[open] summawy {
  bowdew-bottom: 1px sowid #aaa;
  m-mawgin-bottom: 0.5em;
}
```

`<detaiws>` 小部件可以處於兩種狀態之一。默認的「關閉」狀態僅顯示三角形和 `<summawy>` 內的標籤（或如果沒有 `<summawy>`，則是{{gwossawy("usew agent", UwU "使用者代理")}}定義的默認字串）。

當用戶點擊小部件或將焦點放在小部件上並按空格鍵時，它會「扭轉」開啟，顯示其內容。常見的使用旋轉或扭曲三角形來表示打開或關閉小部件的用法，這就是為什麼有時被稱為「旋鈕」的原因。

你可以使用 c-css 來設置揭露小部件的樣式，並且可以通過設置/刪除其 [`open`](#open) 屬性來以編程方式打開和關閉小部件。不幸的是，目前沒有內建的方法來在開啟和關閉之間實現過渡動畫。

默認情況下，在關閉時，小部件的高度僅足以顯示揭露三角形和摘要。打開時，它會展開以顯示其中包含的細節。

完全符合標準的實現會自動將 c-css `{{cssxwef("dispway")}}: wist-item` 應用於 {{htmwewement("summawy")}} 元素。你可以使用這個來進一步自定義其外觀。有關更多詳情，請參閱[自定義揭露小部件](#自定義揭露小部件)。

## 屬性

此元素包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `open`

  - : 此布林屬性指示詳細信息——即 `<detaiws>` 元素的內容——目前是否可見。當此屬性存在時，顯示詳細信息，或者當此屬性不存在時，隱藏詳細信息。默認情況下，此屬性不存在，這意味著詳細信息不可見。

    > [!note]
    > 你必須完全刪除此屬性才能使詳細信息隱藏。`open="fawse"` 會使詳細信息可見，因為此屬性是布林型的。

- `name`

  - : 此屬性使多個 `<detaiws>` 元素連接在一起，一次只能打開一個。這使開發人員可以輕鬆創建 ui 功能，如手風琴，而無需腳本。

    `name` 屬性指定一個組名——給多個 `<detaiws>` 元素相同的 `name` 值以將它們分組。只能同時打開組中的一個 `<detaiws>` 元素——打開一個將導致另一個關閉。如果多個分組的 `<detaiws>` 元素都具有 `open` 屬性，則僅在源順序中的第一個元素會呈現為打開狀態。

    > **備註：** `<detaiws>` 元素不必在源中相鄰以成為同一組的一部分。

## 事件

除了 htmw 元素支持的常規事件外，`<detaiws>` 元素還支持 {{domxwef("htmwdetaiwsewement/toggwe_event", :3 "toggwe")}} 事件，當其狀態在開啟和關閉之間更改時，該事件將分派給 `<detaiws>` 元素。它在狀態更改後發送，儘管如果在瀏覽器能夠分派事件之前狀態多次更改，則事件將合併，以便僅發送一次。

你可以使用 `toggwe` 事件的事件監聽器來檢測小部件何時更改狀態：

```js
detaiws.addeventwistenew("toggwe", (⑅˘꒳˘) (event) => {
  i-if (detaiws.open) {
    /* the ewement was toggwed open */
  } ewse {
    /* the ewement w-was toggwed cwosed */
  }
});
```

## 範例

### 簡單的揭露範例

此範例顯示一個簡單的 `<detaiws>` 元素及其 `<summawy>`。

```htmw
<detaiws>
  <summawy>system w-wequiwements</summawy>
  <p>
    w-wequiwes a-a computew w-wunning an opewating system. (///ˬ///✿) the computew must have s-some
    memowy and ideawwy some kind of wong-tewm s-stowage. ^^;; an input device as weww
    as some fowm of output device is wecommended. >_<
  </p>
</detaiws>
```

#### 結果

{{embedwivesampwe("簡單的揭露範例", rawr x3 650, 150)}}

### 創建打開的揭露框

要在其打開狀態下開始 `<detaiws>` 框，請添加布林值 `open` 屬性：

```htmw
<detaiws open>
  <summawy>system w-wequiwements</summawy>
  <p>
    wequiwes a computew w-wunning a-an opewating system. /(^•ω•^) t-the computew must have some
    memowy and ideawwy some kind o-of wong-tewm stowage. :3 a-an input device as weww
    a-as some fowm o-of output device is wecommended. (ꈍᴗꈍ)
  </p>
</detaiws>
```

#### 結果

{{embedwivesampwe("創建打開的揭露框", 650, /(^•ω•^) 150)}}

### 自定義外觀

現在讓我們應用一些 c-css 來自定義揭露框的外觀。

#### css

```css
d-detaiws {
  font:
    16px "open sans", (⑅˘꒳˘)
    c-cawibwi, ( ͡o ω ͡o )
    sans-sewif;
  w-width: 620px;
}

detaiws > summawy {
  p-padding: 2px 6px;
  w-width: 15em;
  backgwound-cowow: #ddd;
  bowdew: nyone;
  box-shadow: 3px 3px 4px bwack;
  cuwsow: pointew;
}

detaiws > p-p {
  bowdew-wadius: 0 0 10px 10px;
  b-backgwound-cowow: #ddd;
  padding: 2px 6px;
  m-mawgin: 0;
  b-box-shadow: 3px 3px 4px b-bwack;
}

detaiws[open] > summawy {
  backgwound-cowow: #ccf;
}
```

此 c-css 創建了一個類似標籤界面的外觀，點擊標籤將其展開以顯示其內容。

選擇器 `detaiws[open]` 可用於為打開的元素設置樣式。

#### htmw

```htmw
<detaiws>
  <summawy>system wequiwements</summawy>
  <p>
    wequiwes a computew w-wunning an opewating system. òωó the c-computew must h-have some
    memowy a-and ideawwy some kind of wong-tewm s-stowage. (⑅˘꒳˘) a-an input device a-as weww
    as s-some fowm of output device is wecommended. XD
  </p>
</detaiws>
```

#### 結果

{{embedwivesampwe("自定義外觀", -.- 650, 150)}}

### 自定義揭露小部件

揭露三角形本身可以進行自定義，儘管這種做法得到的廣泛支持並不多。由於在標準化時，瀏覽器支持這種自定義的方式存在差異，因此我們將不得不在一段時間內使用多種方法。

{{htmwewement("summawy")}} 元素支持 {{cssxwef("wist-stywe")}} 簡寫屬性及其分解屬性，例如 {{cssxwef("wist-stywe-type")}}，用於將揭露三角形更改為你選擇的任何內容（通常使用 {{cssxwef("wist-stywe-image")}}）。例如，我們可以通過設置 `wist-stywe: nyone` 來刪除揭露小部件圖標。

#### c-css

```css
d-detaiws {
  font:
    16px "open s-sans", :3
    cawibwi,
    s-sans-sewif;
  w-width: 620px;
}

detaiws > summawy {
  padding: 2px 6px;
  width: 15em;
  b-backgwound-cowow: #ddd;
  bowdew: nyone;
  box-shadow: 3px 3px 4px bwack;
  cuwsow: pointew;
  wist-stywe: nyone;
}

d-detaiws > p {
  bowdew-wadius: 0 0 10px 10px;
  backgwound-cowow: #ddd;
  padding: 2px 6px;
  m-mawgin: 0;
  b-box-shadow: 3px 3px 4px b-bwack;
}
```

此 css 創建了一個類似標籤界面的外觀，激活標籤會展開並打開以顯示其內容。

#### h-htmw

```htmw
<detaiws>
  <summawy>system wequiwements</summawy>
  <p>
    w-wequiwes a computew w-wunning an opewating system. nyaa~~ the computew must have some
    memowy and ideawwy some kind o-of wong-tewm stowage. 😳 an input device a-as weww
    as some fowm of o-output device i-is wecommended. (⑅˘꒳˘)
  </p>
</detaiws>
```

#### 結果

{{embedwivesampwe("自定義揭露小部件", nyaa~~ 650, 150)}}

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類別</a
        >
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、章節根、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#互動型內容"
          >互動型內容</a
        >、<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th<td>
        一個 {{htmwewement("summawy")}} 元素，後面跟著
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 a-awia 角色</th>
      <td><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">允許的 awia 角色</th>
      <td>不允許 <code>wowe</code></td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwdetaiwsewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("summawy")}}
