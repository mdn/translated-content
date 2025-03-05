---
title: margin-left
slug: Web/CSS/margin-left
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

**`margin-left`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の左側の[マージン領域](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#マージン領域)を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。

{{EmbedInteractiveExample("pages/css/margin-left.html")}}

2 つの隣り合うボックスの垂直マージンは融合することがあります。これは[_マージンの相殺_](/ja/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)と呼ばれています。

まれに幅の制約がきつすぎると (つまり、 `width`, `margin-left`, `border`, `padding`, コンテンツ領域, `margin-right` がすべて定義されていた場合)、 `margin-left` は無視され、 `auto` が設定されていたときと同じ計算値になります。

## 構文

```css
/* <length> 値 */
margin-left: 10px; /* 絶対的な寸法 */
margin-left: 1em; /* 文字の寸法からの相対 */
margin-left: 5%; /* 直近のブロックコンテナーの幅からの相対 */

/* キーワード値 */
margin-left: auto;

/* グローバル値 */
margin-left: inherit;
margin-left: initial;
margin-left: revert;
margin-left: revert-layer;
margin-left: unset;
```

`margin-left` プロパティは `auto` キーワード、または `<length>` や `<percentage>` で指定されます。正の数、ゼロ、負の数が指定できます。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : マージンの寸法を固定値で表したものです。
- {{cssxref("&lt;percentage&gt;")}}
  - : マージンの寸法を[包含ブロック](/ja/docs/Web/CSS/Containing_block)のインラインサイズ（{{cssxref("writing-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。
- `auto`

  - : 左マージンは未使用の水平方向の余白を共有します。これは主に使用されているレイアウトモードによって決定されます。 `margin-left` と `margin-right` の両方が `auto` の場合は、両方に均等に割り当てられます。それ以外の場合は以下の表のとおりです。

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

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### margin-left をパーセント値で指定

`margin-left` をパーセント値で指定すると、コンテナーのインラインサイズに対する相対サイズになります。

#### HTML

```html live-sample___setting_margin-left_as_a_percentage
<p>
  A large rose-tree stood near the entrance of the garden: the roses growing on
  it were white, but there were three gardeners at it, busily painting them red.
</p>
<p class="example">
  Alice thought this a very curious thing, and she went nearer to watch them,
  and just as she came up to them she heard one of them say, "Look out now,
  Five! Don't go splashing paint over me like that!"
</p>
<p>
  "I couldn't help it," said Five, in a sulky tone; "Seven jogged my elbow."
</p>
```

#### CSS

```css live-sample___setting_margin-left_as_a_percentage
.example {
  margin-left: 50%;
}
```

### 結果

{{EmbedLiveSample("Setting margin-left as a percentage","","250")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}
- 一括指定の {{cssxref("margin")}}
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}
- 一括指定の {{cssxref("margin-block")}} と {{cssxref("margin-inline")}}
- [CSS ボックスモデル](/ja/docs/Web/CSS/CSS_box_model)モジュール
