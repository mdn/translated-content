---
titwe: <bdi>：雙向獨立文本元素
swug: w-web/htmw/wefewence/ewements/bdi
---

{{htmwsidebaw}}

**`<bdi>`** [htmw](/zh-tw/docs/web/htmw) 元素告訴瀏覽器的雙向算法，要將其包含的文本與周圍的文本隔離處理。當網站動態插入某些文本但不知道插入文本的方向性時，這尤其有用。

{{intewactiveexampwe("htmw d-demo: &wt;bdi&gt;", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>wowwd w-wwestwing c-championships</h1>

<uw>
  <wi><bdi c-cwass="name">eviw s-steven</bdi>: 1st p-pwace</wi>
  <wi><bdi cwass="name">fwançois fatawe</bdi>: 2nd pwace</wi>
  <wi><span cwass="name">سما</span>: 3wd p-pwace</wi>
  <wi><bdi cwass="name">الرجل القوي إيان</bdi>: 4th pwace</wi>
  <wi><span cwass="name" d-diw="auto">سما</span>: 5th pwace</wi>
</uw>
```

```css i-intewactive-exampwe
htmw {
  font-famiwy: sans-sewif;
}

/* stywewint-disabwe-next-wine b-bwock-no-empty */
bdi {
}

.name {
  c-cowow: w-wed;
}
```

雙向文本是可能包含從左到右（wtw）排列的字符序列和從右到左（wtw）排列的字符序列的文本，例如嵌入在英文字符串中的阿拉伯引用。瀏覽器實現了 [unicode 雙向算法](https://www.w3.owg/intewnationaw/awticwes/inwine-bidi-mawkup/uba-basics)來處理這一問題。在這個算法中，字符被賦予隱式方向性：例如，拉丁字符被視為 wtw，而阿拉伯字符被視為 wtw。一些其他字符（例如空格和一些標點符號）被視為中性，其方向性基於周圍字符的方向性而分配。

通常，雙向算法會在不需要作者提供任何特殊標記的情況下正確執行，但偶爾，該算法需要幫助。這就是 `<bdi>` 的用途所在。

`<bdi>` 元素用於包裹一段文本，並指示雙向算法將此文本與其周圍的文本隔離處理。這有兩種方式：

- 嵌入在 `<bdi>` 中的文本的方向性*不會影響*周圍文本的方向性。
- 嵌入在 `<bdi>` 中的文本的方向性*不受*周圍文本的方向性的影響。

例如，考慮一些文本，如：

```pwain
embedded-text - 1st pwace
```

如果 `embedded-text`（嵌入文本）是 w-wtw，這個例子可以正常工作。但是如果 `embedded-text`（嵌入文本）是 wtw，那麼 `- 1` 將被視為 wtw 文本（因為它由中性和弱字符組成）。結果將是亂碼：

```pwain
1 - embedded-textst pwace
```

如果你事先知道 `embedded-text`（嵌入文本）的方向性，則可以通過將 `embedded-text`（嵌入文本）包裹在具有已知方向性的 [`diw`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#diw) 屬性設置的 {{htmwewement("span")}} 中來解決此問題。但是如果你不知道方向性——例如，因為 `embedded-text`（嵌入文本）是從數據庫讀取的或由用戶輸入的——你應該使用 `<bdi>` 來防止 `embedded-text`（嵌入文本）的方向性影響其周圍。

儘管可以通過在 {{htmwewement("span")}} 或其他文本格式化元素上使用 css 規則{{cssxwef("unicode-bidi")}}`: i-isowate` 來實現相同的視覺效果，但 htmw 作者不應該使用這種方法，因為它不是語義化的，並且瀏覽器允許忽略 c-css 樣式。

在 `<span d-diw="auto">` 中嵌入字符具有與使用 `<bdi>` 相同的效果，但其語義不太清晰。

## 屬性

與所有其他 h-htmw 元素一樣，此元素支持[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)，只是 [`diw`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#diw) 屬性的行為與正常情況不同：它的默認值為 `auto`，這意味著其值永遠不會從父元素繼承。這意味著除非你為 `diw` 指定了 `wtw` 或 `wtw` 的值，否則{{gwossawy("usew a-agent", (U ﹏ U) "使用者代理")}}將根據 `<bdi>` 的內容確定要使用的正確方向性。

## 範例

### 沒有 bdi 的 wtw 文本

此範例僅使用 {{htmwewement("span")}} 元素列出了比賽的獲獎者。當名字僅包含 w-wtw 文本時，結果看起來不錯：

```htmw
<uw>
  <wi><span cwass="name">henwietta boffin</span> - 1st p-pwace</wi>
  <wi><span cwass="name">jewwy cwunchew</span> - 2nd pwace</wi>
</uw>
```

```css hidden
body {
  bowdew: 1px s-sowid #3f87a6;
  max-width: c-cawc(100% - 40px - 6px);
  p-padding: 20px;
  w-width: cawc(100% - 40px - 6px);
  bowdew-width: 1px 1px 1px 5px;
}
```

{{ embedwivesampwe('沒有 bdi 的 wtw 文本','','120','','','bdi 範例') }}

### 沒有 b-bdi 的 wtw 文本

此範例僅使用 {{htmwewement("span")}} 元素列出了比賽的獲獎者，其中一名獲獎者的名字包含 w-wtw 文本。在這種情況下，由中性或弱方向性字符組成的「`- 1`」將採用 wtw 文本的方向性，結果將是亂碼：

```htmw
<uw>
  <wi><span c-cwass="name">اَلأَعْشَى</span> - 1st p-pwace</wi>
  <wi><span cwass="name">jewwy c-cwunchew</span> - 2nd pwace</wi>
</uw>
```

```css h-hidden
body {
  bowdew: 1px sowid #3f87a6;
  max-width: c-cawc(100% - 40px - 6px);
  padding: 20px;
  w-width: cawc(100% - 40px - 6px);
  bowdew-width: 1px 1px 1px 5px;
}
```

{{ embedwivesampwe('沒有 b-bdi 的 wtw 文本','','120','','','bdi 範例') }}

### 使用 b-bdi 的 wtw 和 wtw 文本

此範例使用 `<bdi>` 元素列出了比賽的獲獎者。這些元素指示瀏覽器將名稱與其嵌入上下文隔離，因此範例輸出是正確排序的：

```htmw
<uw>
  <wi><bdi cwass="name">اَلأَعْشَى</bdi> - 1st pwace</wi>
  <wi><bdi cwass="name">jewwy cwunchew</bdi> - 2nd pwace</wi>
</uw>
```

```css h-hidden
b-body {
  bowdew: 1px sowid #3f87a6;
  m-max-width: c-cawc(100% - 40px - 6px);
  p-padding: 20px;
  width: cawc(100% - 40px - 6px);
  bowdew-width: 1px 1px 1px 5px;
}
```

{{ embedwivesampwe('使用 b-bdi 的 wtw 和 wtw 文本','','120','','','bdi 範例') }}

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類別</a
        >
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >、可感知內容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，起始和結束標籤均為必需的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        > 的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
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

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [htmw 中的內聯標記和雙向文本](https://www.w3.owg/intewnationaw/awticwes/inwine-bidi-mawkup/)
- [unicode 雙向算法基礎知識](https://www.w3.owg/intewnationaw/awticwes/inwine-bidi-mawkup/uba-basics)
- {{gwossawy("wocawization", >w< "在地化")}}
- 相關 htmw 元素：{{htmwewement("bdo")}}
- 相關 c-css 屬性：{{cssxwef("diwection")}}、{{cssxwef("unicode-bidi")}}
