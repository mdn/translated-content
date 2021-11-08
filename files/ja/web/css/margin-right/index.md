---
title: margin-right
slug: Web/CSS/margin-right
tags:
  - CSS
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.margin-right
translation_of: Web/CSS/margin-right
---
{{CSSRef}}

**`margin-right`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の右側の[マージン領域](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#マージン領域)を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。

{{EmbedInteractiveExample("pages/css/margin-right.html")}}

隣り合う二つのボックスの垂直マージンは融合することがあります。これは[_マージンの相殺_](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)と呼ばれています。

## 構文

```css
/* <length> 値 */
margin-right: 20px;  /* 絶対的な寸法 */
margin-right: 1em;   /* 文字の寸法からの相対 */
margin-right: 5%;    /* 直近のブロックコンテナーの幅からの相対 */

/* キーワード値 */
margin-right: auto;

/* グローバル値 */
margin-right: inherit;
margin-right: initial;
margin-right: revert;
margin-right: unset;
```

`margin-right` プロパティは `auto` キーワード、または `<length>` や `<percentage>` で指定されます。正の数、ゼロ、負の数が指定できます。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : マージンの寸法を固定値で表したものです。
- {{cssxref("&lt;percentage&gt;")}}
  - : マージンの寸法を包含ブロックの*幅*に対するパーセント値で表したものです。
- `auto`

  - : 右マージンは未使用の水平方向の余白を共有します。これは主に使用されているレイアウトモードによって決定されます。 `margin-left` と `margin-right` の両方が `auto` の場合は、両方に均等に割り当てられます。それ以外の場合は以下の表のとおりです。

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">{{cssxref("display")}} の値</th>
          <th scope="col">{{cssxref("float")}} の値</th>
          <th scope="col">{{cssxref("position")}} の値</th>
          <th scope="col"><code>auto</code> の計算値</th>
          <th scope="col">コメント</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <code>inline</code>, <code>inline-block</code>,
            <code>inline-table</code>
          </th>
          <th><em>任意</em></th>
          <th><code>static</code> または <code>relative</code></th>
          <td><code>0</code></td>
          <td>インラインレイアウトモード</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>,
            <code>block</code>, <code>table</code>, <code>inline-table</code>,
            <code>list-item</code>, <code>table-caption</code>
          </th>
          <th><em>任意</em></th>
          <th><code>static</code> または <code>relative</code></th>
          <td>
            <code>0</code>。ただし <code>margin-left</code> と <code>margin-right</code> が共に <code>auto</code> であった場合を除く。この場合、その要素が親の中で中央揃えされる値が設定される。
          </td>
          <td>ブロックレイアウトモード</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>,
            <code>block</code>, <code>table</code>, <code>inline-table</code>,
            <code>list-item</code>, <code>table-caption</code>
          </th>
          <th><code>left</code> または <code>right</code></th>
          <th><code>static</code> または <code>relative</code></th>
          <td><code>0</code></td>
          <td>ブロックレイアウトモード (浮動要素)</td>
        </tr>
        <tr>
          <th>
            <em>すべての </em><code>table-*</code><em>、ただし </em
            ><code>table-caption</code> <em>を除く</em>
          </th>
          <th><em>任意</em></th>
          <th><em>任意</em></th>
          <td><code>0</code></td>
          <td>
            内部の <code>table-*</code> 要素にはマージンがない。代わりに {{ cssxref("border-spacing") }} を使用のこと
          </td>
        </tr>
        <tr>
          <th>
            <em>任意、ただし</em> <code>flex</code>, <code>inline-flex</code
            >, <code>table-*</code> <em>を除く</em>
          </th>
          <th><em>任意</em></th>
          <th>
            <em><code>fixed</code></em> または <code>absolute</code>
          </th>
          <td>
            <code>0</code>。ただし <code>margin-left</code> と <code>margin-right</code> が共に <code>auto</code> 出逢った場合を除く。この場合、利用可能な <code>width</code> の中で境界領域が中央揃えされる値が設定される (fixed の場合)。
          </td>
          <td>絶対位置指定レイアウトモード</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th><em>任意</em></th>
          <th><em>任意</em></th>
          <td>
            <code>0</code>。ただし、水平方向に正の余白がある場合を除く。この場合、 <code>auto</code> を指定したすべてのマージンに均等に分配される。
          </td>
          <td>フレックスボックスレイアウトモード</td>
        </tr>
      </tbody>
    </table>
 </dd>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ピクセル数とパーセント値を使用した右マージンの設定

```css
.content { margin-right: 5%; }
.sidebox { margin-right: 10px; }
.logo    { margin-right: -5px; }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} と {{cssxref("margin")}} 一括指定
- 対応付けられる論理的プロパティ: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}} および一括指定の {{cssxref("margin-block")}} と {{cssxref("margin-inline")}}
