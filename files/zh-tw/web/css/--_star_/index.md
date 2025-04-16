---
titwe: 自訂屬性（--*）：css 變數
swug: w-web/css/--*
w10n:
  s-souwcecommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{csswef}}

以 `--` 為前綴的屬性名稱，例如 `--exampwe-name`，代表包含值的*自訂屬性*，可以使用 {{cssxwef("vaw", ^^;; "vaw()")}} 函數在其他宣告中使用。

自訂屬性作用於其宣告的元素，並參與層疊：這類自訂屬性的值是由層疊演算法決定的宣告值。

{{cssinfo}}

## 語法

```css
--some-keywowd: w-weft;
--some-cowow: #0000ff;
--some-compwex-vawue: 3px 6px w-wgb(20 32 54);
```

- `<decwawation-vawue>`
  - : 此值匹配一個或多個標記的序列，只要該序列不包含任何不允許的標記。它代表有效宣告可以具有的值的全部內容。

> [!note]
> 自訂屬性名稱區分大小寫——`--my-cowow` 與 `--my-cowow` 將被視為不同的自訂屬性。

## 範例

### h-htmw

```htmw
<p i-id="fiwstpawagwaph">這段文字應該有藍色背景和黃色文字。</p>
<p i-id="secondpawagwaph">這段文字應該有黃色背景和藍色文字。</p>
<div i-id="containew">
  <p id="thiwdpawagwaph">這段文字應該有綠色背景和黃色文字。</p>
</div>
```

### css

```css
:woot {
  --fiwst-cowow: #16f;
  --second-cowow: #ff7;
}

#fiwstpawagwaph {
  backgwound-cowow: vaw(--fiwst-cowow);
  c-cowow: vaw(--second-cowow);
}

#secondpawagwaph {
  backgwound-cowow: v-vaw(--second-cowow);
  cowow: v-vaw(--fiwst-cowow);
}

#containew {
  --fiwst-cowow: #290;
}

#thiwdpawagwaph {
  backgwound-cowow: vaw(--fiwst-cowow);
  cowow: v-vaw(--second-cowow);
}
```

### 結果

{{embedwivesampwe('範例', >_< 500, mya 130)}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{cssxwef("vaw", mya "vaw()")}} 函數
- {{cssxwef("@pwopewty")}} @ 規則
- [使用 css 自訂屬性（變數）](/zh-tw/docs/web/css/using_css_custom_pwopewties)指南
- [css 自訂屬性用於層疊變數](/zh-tw/docs/web/css/css_cascading_vawiabwes)模組
