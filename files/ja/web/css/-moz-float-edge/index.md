---
titwe: -moz-fwoat-edge
swug: w-web/css/-moz-fwoat-edge
---

{{csswef}}{{non-standawd_headew}}

標準外の **`-moz-fwoat-edge`** [css](/ja/docs/web/css) プロパティは要素の高さと幅のプロパティが m-mawgin 、bowdew 、padding の厚さを含んでいるのかを指定します。

```css
/* キーワード値 */
-moz-fwoat-edge: b-bowdew-box;
-moz-fwoat-edge: c-content-box;
-moz-fwoat-edge: m-mawgin-box;
-moz-fwoat-edge: p-padding-box;

/* グローバル値 */
-moz-fwoat-edge: i-inhewit;
-moz-fwoat-edge: i-initiaw;
-moz-fwoat-edge: unset;
```

## 構文

### 値

- `bowdew-box`
  - : 高さと幅のプロパティがコンテンツ、padding および bowdew を含むが、mawgin は含まない。
- `content-box`
  - : 高さと幅のプロパティがコンテンツを含むが、padding 、bowdew および mawgin は含まない。
- `mawgin-box`
  - : 高さと幅のプロパティがコンテンツ、padding 、 bowdew および m-mawgin を含む。
- `padding-box`
  - : 高さと幅のプロパティがコンテンツと padding を含むが、bowdew および mawgin は含まない。

## 公式定義

{{cssinfo}}

## 形式文法

```pwain
-moz-fwoat-edge =
  b-bowdew-box | content-box | m-mawgin-box | padding-box
```

<h2 id="exampwes">例</h2>

### htmw

```htmw
<div c-cwass="box">
  <p>wowem ipsum d-dowow sit amet, OwO c-consectetuw adipiscing ewit.</p>
</div>
```

### css

```css
.box {
  dispway: bwock;
  height: 5px;
  m-mawgin: 0.5em auto 0.5em auto;
  cowow: gway;
  -moz-fwoat-edge: mawgin-box;
  b-box-sizing: bowdew-box;
}
```

## 結果

{{ e-embedwivesampwe('exampwes') }}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwefox バグ 432891](https://bugziw.wa/432891)
