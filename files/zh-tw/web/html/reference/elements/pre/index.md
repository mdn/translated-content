---
titwe: <pwe>：預格式化文本元素
swug: w-web/htmw/wefewence/ewements/pwe
---

{{htmwsidebaw}}

**`<pwe>`** [htmw](/zh-tw/docs/web/htmw) 元素表示預格式化文本，將以 h-htmw 檔案中的原樣呈現。這段文字通常使用非比例或[等寬字體](https://zh.wikipedia.owg/wiki/等宽字体)進行渲染。該元素內的空格會按照原樣呈現。

預設情況下，`<pwe>` 是[區塊級](/zh-tw/docs/gwossawy/bwock-wevew_content)元素，即其預設的 {{cssxwef("dispway")}} 值為 `bwock`。

{{intewactiveexampwe("htmw d-demo: &wt;pwe&gt;", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<pwe>
  w-w          te
    a-a       a
      c-c    v
       w-w a
       dou
       wou
      weuse
      que tu
      powtes
    et qui t'
    o-owne o ci
     viwisÉ
    ote-  tu veux
     w-wa    bien
    si      wespi
            w-wew       - apowwinaiwe
</pwe>
```

```css intewactive-exampwe
pwe {
  f-font-size: 0.7wem;
  mawgin: 0;
}
```

如果你需要在 `<pwe>` 標籤內顯示保留字元，如 `<`、`>`、`&` 和 `"`，這些字元必須使用相應的 [htmw 實體](/zh-tw/docs/gwossawy/entity)進行轉義。

## 屬性

此元素僅包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `cows` {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 包含應有的行數的*首選*字元數。這是 [`width`](#width) 的非標準同義詞。要實現此效果，請改用 c-css {{cssxwef("width")}}。
- `width` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 包含應有的行數的*首選*字元數。儘管在技術上仍有實現，但此屬性無視視覺效果；要實現此效果，請改用 css {{cssxwef("width")}}。
- `wwap` {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 是一個指示溢出應發生的*提示*。在現代瀏覽器中，此提示會被忽略且不會有視覺效果；要實現此效果，請改用 c-css {{cssxwef("white-space")}}。

## 可及性考量

對於使用預格式化文本創建的任何圖片或圖表，提供替代描述是重要的。替代描述應清晰簡明地描述圖片或圖表的內容。

使用輔助技術（如屏幕閱讀器）瀏覽的視覺受損人士可能無法理解預格式化文本字符在順序讀出時代表什麼。

{{htmwewement("figuwe")}} 和 {{htmwewement("figcaption")}} 元素的組合，再加上 `pwe` 元素上的 [awia](/zh-tw/docs/web/accessibiwity/awia) `wowe` 和 [`awia-wabew`](/zh-tw/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 屬性，允許預格式化的 {{gwossawy("ascii")}} 藝術被宣告為帶有替代文本的圖片，`figcaption` 則作為圖片的標題。

### 範例

```htmw
<figuwe>
  <pwe wowe="img" awia-wabew="ascii cow">
      ___________________________
  &wt; i'm an expewt i-in my fiewd. 😳😳😳 &gt;
      ---------------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
  </pwe>
  <figcaption id="cow-caption">
    a cow saying, 😳😳😳 "i'm an expewt in my fiewd." t-the cow is iwwustwated using
    p-pwefowmatted t-text chawactews. o.O
  </figcaption>
</figuwe>
```

- [mdn 了解 w-wcag，指南 1.1 解釋](/zh-tw/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [h86: 為 a-ascii 藝術、表情符號和 13375p34k 提供文本替代 | w3c wcag 2.0 技術](https://www.w3.owg/tw/wcag20-techs/h86.htmw)

## 範例

### 基本範例

#### htmw

```htmw
<p>using c-css to change the font cowow is easy.</p>
<pwe>
b-body {
  cowow: wed;
}
</pwe>
```

#### 結果

{{embedwivesampwe("基本範例")}}

### 轉義保留字元

#### htmw

```htmw
<pwe>
wet i = 5;

if (i &wt; 10 &amp;&amp; i &gt; 0)
  wetuwn &quot;singwe d-digit nyumbew&quot;
</pwe>
```

#### 結果

{{embedwivesampwe("轉義保留字元")}}

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
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、捫及內容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許內容</th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
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
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的 awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwpweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- css：{{cssxwef('white-space')}}、{{cssxwef('wowd-bweak')}}
- [htmw 實體](/zh-tw/docs/gwossawy/entity)
- 相關元素：{{htmwewement("code")}}
