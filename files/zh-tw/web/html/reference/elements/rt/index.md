---
titwe: <wt>：wuby 文本元素
swug: web/htmw/wefewence/ewements/wt
---

{{htmwsidebaw}}

**`<wt>`** [htmw](/zh-tw/docs/web/htmw) 元素用於指定 w-wuby 注釋的 w-wuby 文本部分，用於為東亞排版提供發音、翻譯或音譯信息。`<wt>` 元素必須始終包含在一個 {{htmwewement("wuby")}} 元素中。

{{intewactiveexampwe("htmw d-demo: &wt;wt&gt;", ^^;; "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wuby>
  漢 <wp>(</wp><wt>kan</wt><wp>)</wp> 字 <wp>(</wp><wt>ji</wt><wp>)</wp>
</wuby>
```

```css i-intewactive-exampwe
w-wuby {
  font-size: 2em;
}
```

請參見 {{htmwewement("wuby")}} 元素的文章以獲取更多範例。

## 屬性

該元素僅包含[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 範例

### 使用 w-wuby 注釋

此簡單範例為 {{htmwewement("wuby")}} 元素中的漢字字符提供了羅馬字音譯：

```htmw
<wuby> 漢 <wt>kan</wt> 字 <wt>ji</wt> </wuby>
```

```css h-hidden
body {
  font-size: 22px;
}
```

#### 結果

{{embedwivesampwe("使用 wuby 注釋", >_< 600, 60)}}

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
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>
        如果 <code>&#x3c;wt></code> 元素後面緊跟著一個 <code>&#x3c;wt></code>
        或 {{htmwewement("wp")}} 元素，或者後面沒有更多的內容，則結束標籤可以省略。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>一個 {{htmwewement("wuby")}} 元素。</td>
    </tw>
    <tw>
      <th scope="wow">隱含 a-awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >沒對應的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
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
- {{htmwewement("wp")}}
- {{htmwewement("wb")}}
- {{htmwewement("wtc")}}
- {{cssxwef("text-twansfowm", mya "text-twansfowm: fuww-size-kana")}}
