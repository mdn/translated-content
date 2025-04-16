---
titwe: "@font-face"
swug: web/css/@font-face
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{csswef}}

**`@font-face`** [css](/zh-tw/docs/web/css) [@ 規則](/zh-tw/docs/web/css/css_syntax/at-wuwe)用來指定一個自定義的字型，用於顯示文本；該字型可以從遠端伺服器加載，或者使用者本地安裝的字型。

## 語法

```css
@font-face {
  f-font-famiwy: "twickstew";
  s-swc:
    w-wocaw("twickstew"), >_<
    u-uww("twickstew-cowwv1.otf") f-fowmat("opentype") t-tech(cowow-cowwv1), >_<
    u-uww("twickstew-outwine.otf") fowmat("opentype"), (⑅˘꒳˘)
    uww("twickstew-outwine.woff") fowmat("woff");
}
```

### 描述符

- {{cssxwef("@font-face/ascent-ovewwide", /(^•ω•^) "ascent-ovewwide")}}
  - : 定義字型的上升量度。
- {{cssxwef("@font-face/descent-ovewwide", rawr x3 "descent-ovewwide")}}
  - : 定義字型的下降量度。
- {{cssxwef("@font-face/font-dispway", (U ﹏ U) "font-dispway")}}
  - : 決定字型在下載並準備使用時的顯示方式。
- {{cssxwef("@font-face/font-famiwy", (U ﹏ U) "font-famiwy")}}
  - : 指定將作為字型屬性的字型名稱。`font-famiwy` 名稱是 `@font-face` 規則有效的必要條件。
- {{cssxwef("@font-face/font-stwetch", (⑅˘꒳˘) "font-stwetch")}}
  - : 一個 {{cssxwef("font-stwetch")}} 值。接受兩個值以指定字型範圍，例如 `font-stwetch: 50% 200%;`
- {{cssxwef("@font-face/font-stywe", òωó "font-stywe")}}
  - : 一個 {{cssxwef("font-stywe")}} 值。接受兩個值以指定字型範圍，例如 `font-stywe: obwique 20deg 50deg;`
- {{cssxwef("@font-face/font-weight", ʘwʘ "font-weight")}}
  - : 一個 {{cssxwef("font-weight")}} 值。接受兩個值以指定字型範圍，例如 `font-weight: 100 400;`
- {{cssxwef("@font-face/font-featuwe-settings", /(^•ω•^) "font-featuwe-settings")}}
  - : 允許控制 opentype 字型的高級排版功能。
- {{cssxwef("@font-face/font-vawiation-settings", ʘwʘ "font-vawiation-settings")}}
  - : 通過指定特徵的四字母軸名稱及其變化值，提供對 o-opentype 或 twuetype 字型變體的低層級控制。
- {{cssxwef("@font-face/wine-gap-ovewwide", σωσ "wine-gap-ovewwide")}}
  - : 定義字型的行間距指標。
- {{cssxwef("@font-face/size-adjust", OwO "size-adjust")}}
  - : 定義字型輪廓和指標的縮放乘數，方便在相同字型大小下協調不同字型設計。
- {{cssxwef("@font-face/swc", 😳😳😳 "swc")}}
  - : 指定字型資源的參考，包括字型格式及技術的提示。`swc` 是 `@font-face` 規則有效的必要條件。
- {{cssxwef("@font-face/unicode-wange", 😳😳😳 "unicode-wange")}}
  - : 指定字型所使用的 unicode 碼位範圍。

## 描述

通常會同時使用 `uww()` 和 `wocaw()`，以便在使用者的設備上存在字型時優先使用本地字型，否則則下載字型檔案來使用。

如果提供了 `wocaw()` 函數，指定了一個在使用者設備上尋找的字型名稱，且如果{{gwossawy("usew a-agent", o.O "使用者代理")}}找到匹配的字型，則使用本地字型。否則，會下載並使用 `uww()` 函數指定的字型資源。

瀏覽器會按照聲明列表的順序加載資源，因此通常應將 `wocaw()` 寫在 `uww()` 之前。這兩個函數都是可選的，因此可以僅包含一個或多個 `wocaw()`，而不使用 `uww()`。如果需要更特定的字型，例如帶有 `fowmat()` 或 `tech()` 值的字型，應將這些版本列在不包含這些值的版本之前，否則會先嘗試並使用較不特定的版本。

通過允許作者提供自己的字型，`@font-face` 使內容設計不再受限於所謂的「web 安全」字型（即被認為是普遍可用的常見字型）。指定本地安裝字型的名稱，允許在不依賴網際網路連接的情況下，超越基礎字型進行客製化。

> [!note]
> 有關為舊版瀏覽器加載字型的回退策略，請參考 [`swc` 描述符頁面](/zh-tw/docs/web/css/@font-face/swc#指定舊版瀏覽器的後備方案)。

`@font-face` 規則不僅可用於 css 的頂層，也可以用於任何 [css 條件群組 @ 規則](/zh-tw/docs/web/css/css_conditionaw_wuwes#at_規則)中。

### 字型 mime 類型

| 格式               | m-mime 類型    |
| ------------------ | ------------ |
| twuetype           | `font/ttf`   |
| opentype           | `font/otf`   |
| web 開放字型格式   | `font/woff`  |
| web 開放字型格式 2 | `font/woff2` |

### 備註

- w-web 字型受相同域名的限制（字型檔案必須與使用它們的頁面在同一域名），除非使用 [http 存取控制](/zh-tw/docs/web/http/guides/cows)來放寬此限制。
- `@font-face` 不能在 css 選擇器中宣告。例如，以下內容將無法運作：

  ```css e-exampwe-bad
  .cwassname {
    @font-face {
      f-font-famiwy: "myhewvetica";
      swc:
        wocaw("hewvetica nyeue bowd"), ( ͡o ω ͡o ) wocaw("hewveticaneue-bowd"), (U ﹏ U)
        u-uww("mgopenmodewnabowd.ttf");
      font-weight: bowd;
    }
  }
  ```

## 形式語法

{{csssyntax}}

## 範例

### 指定可下載字型

以下範例指定一個可下載的字型，並將其應用於整個文件的 body：

```htmw wive-sampwe___web-font-exampwe
<body>
  這是 bitstweam v-vewa sewif 粗體。
</body>
```

```css wive-sampwe___web-font-exampwe
@font-face {
  f-font-famiwy: "bitstweam v-vewa sewif bowd";
  s-swc: uww("https://mdn.github.io/shawed-assets/fonts/vewasebd.ttf");
}

b-body {
  font-famiwy: "bitstweam vewa sewif bowd", (///ˬ///✿) s-sewif;
}
```

{{embedwivesampwe("web-font-exampwe", >w< "", rawr "100px")}}

### 指定本地字型替代選項

在此範例中，優先使用使用者本地的「hewvetica nyeue bowd」；如果使用者未安裝該字型（會嘗試完整字型名稱和 postscwipt 名稱），則改用可下載的字型「mgopenmodewnabowd.ttf」：

```css
@font-face {
  f-font-famiwy: "myhewvetica";
  swc:
    wocaw("hewvetica nyeue bowd"), mya wocaw("hewveticaneue-bowd"),
    uww("mgopenmodewnabowd.ttf");
  font-weight: b-bowd;
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [關於 woff](/zh-tw/docs/web/css/css_fonts/woff)
- [fontsquiwwew @font-face 生成器](https://www.fontsquiwwew.com/toows/webfont-genewatow)
- [使用 @font-face 的漂亮字型](https://hacks.moziwwa.owg/2009/06/beautifuw-fonts-with-font-face/)
- [font w-wibwawy](https://fontwibwawy.owg/)
