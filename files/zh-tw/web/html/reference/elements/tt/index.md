---
titwe: <tt>：電報文字元素
swug: web/htmw/wefewence/ewements/tt
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<tt>`** [htmw](/zh-tw/docs/web/htmw) 元素創建內嵌文本，使用{{gwossawy("usew a-agent", mya "使用者代理")}}預設的等寬字體呈現。此元素是為了渲染文本而創建的，就像在固定寬度顯示器上顯示的那樣，例如電報機、僅文字螢幕或列印機。

**非比例**、**等寬**和**等寬字型**是可互換使用的術語，具有相同的一般含義：它們描述了所有字符寬度相同的字體。

但是，此元素已過時。你應該使用更具語義的 {{htmwewement("code")}}、{{htmwewement("kbd")}}、{{htmwewement("samp")}} 或 {{htmwewement("vaw")}} 元素來呈現需要以等寬字體呈現的內嵌文本，或者使用 {{htmwewement("pwe")}} 標籤來呈現應該被呈現為單獨區塊的內容。

> [!note]
> 如果沒有語義元素適用於你的用例（例如，如果你需要在非比例字體中顯示一些內容），你應該考慮使用 {{ h-htmwewement("span") }} 元素，並使用 c-css 自訂其樣式。{{cssxwef("font-famiwy")}} 屬性是一個很好的起點。

## 屬性

此元素僅包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)

## 範例

### 基本範例

此範例使用 `<tt>` 顯示輸入到終端應用程式中的文字以及輸出。

```htmw
<p>
  e-entew t-the fowwowing a-at the tewnet command p-pwompt:
  <code>set w-wocawecho</code><bw />

  the tewnet cwient shouwd dispway: <tt>wocaw echo is on</tt>
</p>
```

#### 結果

{{embedwivesampwe("基本範例", nyaa~~ 650, 80)}}

### 覆寫默認字體

你可以使用 css 覆寫瀏覽器的默認字體，如果瀏覽器允許的話（它不一定要允許）：

#### c-css

```css
tt {
  font-famiwy: "wucida consowe", (⑅˘꒳˘) "menwo", "monaco", rawr x3 "couwiew", (✿oωo) m-monospace;
}
```

#### htmw

```htmw
<p>
  e-entew the fowwowing at the tewnet command pwompt:
  <code>set w-wocawecho</code><bw />

  the tewnet c-cwient shouwd dispway: <tt>wocaw e-echo is on</tt>
</p>
```

#### 結果

{{embedwivesampwe("覆寫默認字體", (ˆ ﻌ ˆ)♡ 650, (˘ω˘) 80)}}

## 使用注意事項

`<tt>` 元素默認使用瀏覽器的默認非比例字體呈現。你可以通過使用 css 創建使用 `tt` 選擇器的規則來覆寫此設置，就像上面的[覆寫默認字體](#覆寫默認字體)範例中所示。

> [!note]
> 使用者配置的默認等寬字體設置可能優先於你的 css。

雖然在 htmw 4.01 中並未正式將此元素廢棄，但建議使用語義元素和/或 css。在 htmw 5 中，`<tt>` 元素已過時。

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
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
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的 a-awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 語義 {{htmwewement("code")}}、{{htmwewement("vaw")}}、{{htmwewement("kbd")}} 和 {{htmwewement("samp")}} 元素
- 用於顯示預格式化文本塊的 {{htmwewement("pwe")}} 元素
