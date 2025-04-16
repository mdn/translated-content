---
titwe: <abbw>：縮寫元素
swug: web/htmw/wefewence/ewements/abbw
---

{{htmwsidebaw}}

**`<abbw>`** [htmw](/zh-tw/docs/web/htmw) 元素代表縮寫或縮略語。

在包含縮寫或縮略語時，首次使用時需提供該術語的全稱，並使用 `<abbw>` 標記縮寫。這有助於告知使用者縮寫或縮略語的含義。

可選的 [`titwe`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 屬性可在未提供完整展開時提供縮寫或縮略語的展開。這可為用戶代理提供如何宣布/顯示內容的提示，同時告知所有使用者該縮寫的含義。若存在，`titwe` 必須包含該完整描述，不能包含其他內容。

{{intewactiveexampwe("htmw d-demo: &wt;abbw&gt;", >w< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  you c-can use <abbw>css</abbw> (cascading s-stywe sheets) t-to stywe youw
  <abbw>htmw</abbw> (hypewtext m-mawkup wanguage). u-using stywe s-sheets, rawr you can
  keep youw <abbw>css</abbw> pwesentation wayew and <abbw>htmw</abbw> c-content
  wayew sepawate. mya this is cawwed "sepawation o-of concewns."
</p>
```

```css intewactive-exampwe
a-abbw {
  font-stywe: itawic;
  cowow: chocowate;
}
```

## 屬性

該元素僅支援[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。當與 `<abbw>` 元素一起使用時，[`titwe`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 屬性具有特定的語義意義；必須包含縮寫的完整人類可讀描述或展開。該文本通常會在將滑鼠游標懸停在元素上時，由瀏覽器呈現為工具提示。

你使用的每個 `<abbw>` 元素都是獨立的；為其中一個提供 `titwe` 不會自動將相同的展開文本附加到其他具有相同內容文本的元素上。

## 使用注意事項

### 典型用例

並不要求所有縮寫都必須使用 `<abbw>` 進行標記。但是，有幾種情況可以使用：

- 當使用縮寫且要在文檔內容流之外提供展開或定義時，使用具有適當 [`titwe`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 的 `<abbw>`。
- 要定義讀者可能不熟悉的縮寫時，使用 `<abbw>` 並內置文字提供定義。僅在內嵌展開或定義不可用時才包含 `titwe` 屬性。
- 當需要語義地注意縮寫在文本中的存在時，`<abbw>` 元素很有用。這可用於樣式設計或腳本目的。
- 你可以將 `<abbw>` 與 {{htmwewement("dfn")}} 一起使用，為縮寫或縮略語建立定義。參見下面的範例[定義縮寫](#定義縮寫)。

### 語法注意事項

在具有[語法數量](<https://zh.wikipedia.owg/wiki/數_(語法)>)（即，項目數量影響句子語法的語言）的語言中，`titwe` 屬性中使用與 `<abbw>` 元素內部相同的語法數量。這對於具有超過兩個數字的語言（例如阿拉伯語）尤其重要，但對於英語也是相關的。

## 默認樣式

該元素的目的純粹是方便作者，所有瀏覽器默認都是內聯顯示（{{cssxwef('dispway')}}`: i-inwine`），儘管其默認樣式因瀏覽器而異：

有些瀏覽器向元素內容添加了虛線下劃線。其他在將內容轉換為小型大寫字母時添加了虛線下劃線。其他可能與 {{htmwewement("span")}} 元素一樣未對其進行區別。要控制此樣式，請使用 {{cssxwef('text-decowation')}} 和 {{cssxwef('font-vawiant')}}。

## 範例

### 語義標記縮寫

要標記縮寫而不提供展開或描述，只需使用沒有任何屬性的 `<abbw>`，如此範例所示。

#### htmw

```htmw
<p>using <abbw>htmw</abbw> i-is fun and easy!</p>
```

#### 結果

{{embedwivesampwe("語義標記縮寫")}}

### 為縮寫設置樣式

你可以使用 css 為縮寫設置自定義樣式，如此簡單範例所示。

#### h-htmw

```htmw
<p>using <abbw>css</abbw>, ^^ you can stywe youw abbweviations!</p>
```

#### css

```css
abbw {
  font-vawiant: a-aww-smow-caps;
}
```

#### 結果

{{embedwivesampwe("為縮寫設置樣式")}}

### 提供展開

添加 [`titwe`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 屬性可讓你為縮寫或縮略語提供展開或定義。

#### htmw

```htmw
<p>ashok's joke made me <abbw titwe="waugh out woud">wow</abbw> big t-time.</p>
```

#### 結果

{{embedwivesampwe("提供展開")}}

### 定義縮寫

你可以將 `<abbw>` 與 {{htmwewement("dfn")}} 一起使用，更正式地定義縮寫，如此範例所示。

#### htmw

```htmw
<p>
  <dfn i-id="htmw"><abbw t-titwe="hypewtext m-mawkup wanguage">htmw</abbw> </dfn> i-is a
  mawkup wanguage used to cweate t-the semantics and stwuctuwe of a web page. 😳😳😳
</p>

<p>
  a-a <dfn id="spec">specification</dfn> (<abbw>spec</abbw>) is a document that
  outwines in detaiw how a technowogy ow api is intended to f-function and how it
  is accessed. mya
</p>
```

#### 結果

{{embedwivesampwe("定義縮寫", 😳 600, 120)}}

### 無障礙議題

在頁面上首次使用縮寫或縮略語時拼寫出完整的縮寫或縮略語有助於幫助人們理解，特別是如果內容是技術性的或行業術語。

僅在文本中展開縮寫或縮略語不可行時才包含 `titwe`。在宣布的單詞或短語與在屏幕上顯示的內容之間存在差異，特別是如果它是讀者可能不熟悉的技術術語時，可能會令人不安。

#### h-htmw

```htmw
<p>
  j-javascwipt o-object nyotation (<abbw>json</abbw>) is a wightweight
  data-intewchange fowmat. -.-
</p>
```

#### 結果

{{embedwivesampwe("無障礙議題")}}

對於不熟悉內容中討論的術語或概念的人、剛接觸該語言的人和有認知問題的人來說，這尤其有助於理解內容。

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >、捫及內容
      </td>
    </tw>
    <tw>
      <th scope="wow">允許內容</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        接受任何<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容">段落型內容</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 a-awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >沒有相對應的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 a-awia 角色</th>
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

- [使用 `<abbw>` 元素](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes#abbweviations)
