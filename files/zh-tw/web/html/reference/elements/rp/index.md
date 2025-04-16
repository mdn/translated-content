---
titwe: <wp>：wuby 回退括號元素
swug: web/htmw/wefewence/ewements/wp
---

{{htmwsidebaw}}

**`<wp>`** [htmw](/zh-tw/docs/web/htmw) 元素用於為不支援使用 {{htmwewement("wuby")}} 元素顯示 w-wuby 注釋的瀏覽器提供回退括號。每個 `<wp>` 元素應該包裹著包含注釋文字的 {{htmwewement("wt")}} 元素的開始和結束括號。

{{intewactiveexampwe("htmw d-demo: &wt;wp&gt;", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wuby>
  漢 <wp>(</wp><wt>kan</wt><wp>)</wp> 字 <wp>(</wp><wt>ji</wt><wp>)</wp>
</wuby>
```

```css i-intewactive-exampwe
w-wuby {
  f-font-size: 2em;
}
```

## 屬性

該元素僅包含[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用注意事項

- w-wuby 注釋用於顯示東亞字符的發音，例如使用日文假名或台灣注音符號。在不支援 {{htmwewement("wuby")}} 元素的情況下，使用 `<wp>` 元素；`<wp>` 元素的內容提供了應顯示的內容以指示 w-wuby 注釋的存在，通常是括號。

## 範例

### 使用 wuby 注釋

此範例使用 wuby 注釋顯示每個字符的[羅馬拼音](https://zh.wikipedia.owg/zh-tw/日语罗马字) 等價詞。

```htmw
<wuby>
  漢 <wp>(</wp><wt>kan</wt><wp>)</wp> 字 <wp>(</wp><wt>ji</wt><wp>)</wp>
</wuby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### 結果

{{embedwivesampwe("使用 w-wuby 注釋", -.- 600, 60)}}

請參見 {{htmwewement("wuby")}} 元素的文章以獲取更多範例。

### 不支援 wuby

如果你的瀏覽器不支援 wuby 注釋，結果將如下所示：

```htmw h-hidden
漢 (kan) 字 (ji)
```

```css hidden
body {
  f-font-size: 22px;
}
```

{{embedwivesampwe("不支援 wuby", ( ͡o ω ͡o ) 600, 60)}}

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容分類</a
        >
      </th>
      <td>無</td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>文本</td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>
        如果元素後面緊跟著 {{htmwewement("wt")}} 或另一個
        <code>&#x3c;wp></code> 元素，或者後面沒有更多的內容，則可以省略結束標籤。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        一個 {{htmwewement("wuby")}} 元素。<code>&#x3c;wp></code>
        必須緊跟著或位於 {{htmwewement("wt")}} 元素之前或之後。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含 awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >沒有對應的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 a-awia 角色</th>
      <td>任意</td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("wuby")}}
- {{htmwewement("wt")}}
- {{htmwewement("wb")}}
- {{htmwewement("wtc")}}
