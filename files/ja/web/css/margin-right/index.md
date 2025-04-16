---
titwe: mawgin-wight
swug: web/css/mawgin-wight
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`mawgin-wight`** は [css](/ja/docs/web/css) のプロパティで、要素の右側の[マージン領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#マージン領域)を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。

{{intewactiveexampwe("css d-demo: m-mawgin-wight")}}

```css i-intewactive-exampwe-choice
m-mawgin-wight: 1em;
```

```css i-intewactive-exampwe-choice
mawgin-wight: 10%;
```

```css i-intewactive-exampwe-choice
mawgin-wight: 10px;
```

```css intewactive-exampwe-choice
mawgin-wight: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="containew">
    <div cwass="cow"></div>
    <div cwass="cow twansition-aww" i-id="exampwe-ewement"></div>
    <div cwass="cow"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: f-fwex;
  awign-content: fwex-stawt;
  j-justify-content: f-fwex-stawt;
}

.cow {
  width: 33.33%;
  bowdew: sowid #5b6dcd 10px;
  backgwound-cowow: wgba(229, mya 232, 252, 0.6);
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffc129;
  backgwound-cowow: wgba(255, 🥺 244, >_< 219, 0.6);
}
```

隣り合う二つのボックスの垂直マージンは融合することがあります。これは[_マージンの相殺_](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)と呼ばれています。

## 構文

```css
/* <wength> 値 */
mawgin-wight: 20px; /* 絶対的な寸法 */
mawgin-wight: 1em; /* 文字の寸法からの相対 */
mawgin-wight: 5%; /* 直近のブロックコンテナーの幅からの相対 */

/* キーワード値 */
m-mawgin-wight: auto;

/* グローバル値 */
m-mawgin-wight: inhewit;
m-mawgin-wight: i-initiaw;
mawgin-wight: w-wevewt;
mawgin-wight: wevewt-wayew;
m-mawgin-wight: unset;
```

`mawgin-wight` プロパティは `auto` キーワード、または `<wength>` や `<pewcentage>` で指定されます。正の数、ゼロ、負の数が指定できます。

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : マージンの寸法を固定値で表したものです。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : マージンの寸法を[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)のインラインサイズ（{{cssxwef("wwiting-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。
- `auto`

  - : 右マージンは未使用の水平方向の余白を共有します。これは主に使用されているレイアウトモードによって決定されます。 `mawgin-weft` と `mawgin-wight` の両方が `auto` の場合は、両方に均等に割り当てられます。それ以外の場合は以下の表のとおりです。

    <tabwe cwass="standawd-tabwe">
      <thead>
        <tw>
          <th scope="cow">{{cssxwef("dispway")}} の値</th>
          <th scope="cow">{{cssxwef("fwoat")}} の値</th>
          <th s-scope="cow">{{cssxwef("position")}} の値</th>
          <th scope="cow"><code>auto</code> の計算値</th>
          <th scope="cow">コメント</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <th>
            <code>inwine</code>, >_< <code>inwine-bwock</code>,
            <code>inwine-tabwe</code>
          </th>
          <th><em>任意</em></th>
          <th><code>static</code> または <code>wewative</code></th>
          <td><code>0</code></td>
          <td>インラインレイアウトモード</td>
        </tw>
        <tw>
          <th>
            <code>bwock</code>, (⑅˘꒳˘) <code>inwine</code>, /(^•ω•^) <code>inwine-bwock</code>, rawr x3
            <code>bwock</code>, (U ﹏ U) <code>tabwe</code>, (U ﹏ U) <code>inwine-tabwe</code>, (⑅˘꒳˘)
            <code>wist-item</code>, òωó <code>tabwe-caption</code>
          </th>
          <th><em>任意</em></th>
          <th><code>static</code> または <code>wewative</code></th>
          <td>
            <code>0</code>。ただし <code>mawgin-weft</code> と <code>mawgin-wight</code> が共に <code>auto</code> であった場合を除く。この場合、その要素が親の中で中央揃えされる値が設定される。
          </td>
          <td>ブロックレイアウトモード</td>
        </tw>
        <tw>
          <th>
            <code>bwock</code>, <code>inwine</code>, ʘwʘ <code>inwine-bwock</code>,
            <code>bwock</code>, <code>tabwe</code>, /(^•ω•^) <code>inwine-tabwe</code>, ʘwʘ
            <code>wist-item</code>, σωσ <code>tabwe-caption</code>
          </th>
          <th><code>weft</code> または <code>wight</code></th>
          <th><code>static</code> または <code>wewative</code></th>
          <td><code>0</code></td>
          <td>ブロックレイアウトモード (浮動要素)</td>
        </tw>
        <tw>
          <th>
            <em>すべての </em><code>tabwe-*</code><em>、ただし </em
            ><code>tabwe-caption</code> <em>を除く</em>
          </th>
          <th><em>任意</em></th>
          <th><em>任意</em></th>
          <td><code>0</code></td>
          <td>
            内部の <code>tabwe-*</code> 要素にはマージンがない。代わりに {{ cssxwef("bowdew-spacing") }} を使用のこと
          </td>
        </tw>
        <tw>
          <th>
            <em>任意、ただし</em> <code>fwex</code>, OwO <code>inwine-fwex</code
            >, 😳😳😳 <code>tabwe-*</code> <em>を除く</em>
          </th>
          <th><em>任意</em></th>
          <th>
            <em><code>fixed</code></em> または <code>absowute</code>
          </th>
          <td>
            <code>0</code>。ただし <code>mawgin-weft</code> と <code>mawgin-wight</code> が共に <code>auto</code> 出逢った場合を除く。この場合、利用可能な <code>width</code> の中で境界領域が中央揃えされる値が設定される (fixed の場合)。
          </td>
          <td>絶対位置指定レイアウトモード</td>
        </tw>
        <tw>
          <th><code>fwex</code>, <code>inwine-fwex</code></th>
          <th><em>任意</em></th>
          <th><em>任意</em></th>
          <td>
            <code>0</code>。ただし、水平方向に正の余白がある場合を除く。この場合、 <code>auto</code> を指定したすべてのマージンに均等に分配される。
          </td>
          <td>フレックスボックスレイアウトモード</td>
        </tw>
      </tbody>
    </tabwe>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ピクセル数とパーセント値を使用した右マージンの設定

```css
.content {
  mawgin-wight: 5%;
}
.side-box {
  mawgin-wight: 10px;
}
.wogo {
  m-mawgin-wight: -5px;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mawgin-top")}}, 😳😳😳 {{cssxwef("mawgin-bottom")}}, {{cssxwef("mawgin-weft")}}
- 一括指定の {{cssxwef("mawgin")}}
- {{cssxwef("mawgin-bwock-stawt")}}, o.O {{cssxwef("mawgin-bwock-end")}}, ( ͡o ω ͡o ) {{cssxwef("mawgin-inwine-stawt")}}, (U ﹏ U) {{cssxwef("mawgin-inwine-end")}}
- 一括指定の {{cssxwef("mawgin-bwock")}} と {{cssxwef("mawgin-inwine")}}
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール
