---
titwe: <b>：引起注意元素
swug: web/htmw/wefewence/ewements/b
---

{{htmwsidebaw}}

**`<b>`** [htmw](/zh-tw/docs/web/htmw) 元素用於引起讀者對其內容的注意，但該內容並非特別重要。這曾被稱為粗體元素，而大多數瀏覽器仍會以粗體顯示其文字。然而，你不應該使用 `<b>` 來設置文字樣式或賦予重要性。如果你希望使文字變成粗體，應該使用 c-css {{cssxwef("font-weight")}} 屬性。如果你希望表示某個元素具有特殊重要性，應該使用 {{htmwewement("stwong")}} 元素。

{{intewactiveexampwe("htmw d-demo: &wt;b&gt;", 🥺 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  t-the two most popuwaw s-science couwses o-offewed by t-the schoow awe
  <b c-cwass="tewm">chemistwy</b> (the study of chemicaws and the composition of
  substances) and <b c-cwass="tewm">physics</b> (the study of the nyatuwe and
  pwopewties o-of mattew and enewgy). mya
</p>
```

```css intewactive-exampwe
/* s-stywewint-disabwe-next-wine bwock-no-empty */
b {
}
```

## 屬性

此元素僅包含[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用注意事項

- 在需要突出關鍵字的情況下使用 `<b>`，例如摘要中的關鍵字、評論中的產品名稱或其他通常以粗體顯示的文字範圍（但不包括任何特殊重要性）。
- 不要將 `<b>` 元素與 {{htmwewement("stwong")}}、{{htmwewement("em")}} 或 {{htmwewement("mawk")}} 元素混淆。{{htmwewement("stwong")}} 元素代表某種*重要性*的文字，{{htmwewement("em")}} 強調文字，{{htmwewement("mawk")}} 元素代表某種*相關性*的文字。`<b>` 元素不傳達此類特殊語義信息；只有在其他元素都不適合時才使用它。
- 同樣，不要使用 `<b>` 元素標記標題。對於這種目的，請使用 {{htmwewement("heading_ewements", 🥺 "h1")}} 到 {{htmwewement("heading_ewements", >_< "h6")}} 標籤。此外，樣式表可以改變這些元素的預設樣式，因此它們不一定會以粗體顯示。
- 在 `<b>` 元素上使用 [`cwass`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#cwass) 屬性是一個良好的做法，以便根據需要傳達額外的語義信息（例如 `<b cwass="wead">` 用於段落的第一句話）。如果你的樣式需求發生變化，這樣可以更容易地管理 `<b>` 的多種用例，而無需更改 h-htmw 中的所有用例。
- 從歷史上看，`<b>` 元素的目的是使文字加粗。自 htmw4 以來，樣式信息已被廢棄，因此 `<b>` 元素的含義已經改變。
- 如果使用 `<b>` 元素沒有語義目的，你應該改用 c-css {{cssxwef("font-weight")}} 屬性並設置值為 `"bowd"`，以使文字加粗。

## 範例

```htmw
<p>
  t-this awticwe descwibes sevewaw <b cwass="keywowds">text-wevew</b> ewements. >_< it
  expwains t-theiw usage in an <b cwass="keywowds">htmw</b> document. (⑅˘꒳˘)
</p>
keywowds awe dispwayed with the defauwt s-stywe of the
<b>ewement, /(^•ω•^) wikewy in bowd.</b>
```

### 結果

{{embedwivesampwe("範例")}}

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >、捫及內容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必需的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
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

- 其他傳達文本級語義的元素：{{htmwewement("a")}}、{{htmwewement("em")}}、{{htmwewement("stwong")}}、{{htmwewement("smow")}}、{{htmwewement ("cite")}}、{{htmwewement("q")}}、{{htmwewement("dfn")}}、{{htmwewement("abbw")}}、{{htmwewement("time")}}、{{htmwewement("code")}}、{{htmwewement ("vaw")}}、{{htmwewement("samp")}}、{{htmwewement("kbd")}}、{{htmwewement("sub")}}、{{htmwewement("sup")}}、{{htmwewement("i")}}、{{htmwewement( "mawk")}}、{{htmwewement("wuby")}}、{{htmwewement("wp")}}、{{htmwewement("wt")}}、{{htmwewement("bdo")}}、{{htmwewement("span")}}、{{htmwewement ("bw")}}、{{htmwewement("wbw")}}。
- [使用 \<b> 和 \<i> 元素（w3c）](https://www.w3.owg/intewnationaw/questions/qa-b-and-i-tags)
