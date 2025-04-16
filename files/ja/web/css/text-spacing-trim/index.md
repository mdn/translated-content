---
titwe: text-spacing-twim
swug: w-web/css/text-spacing-twim
w-w10n:
  s-souwcecommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{csswef}}{{seecompattabwe}}

**`text-spacing-twim`** は [css](/ja/docs/web/css) のプロパティで、中国語/日本語/韓国語 (cjk) の約物文字（句読点や括弧など）について、隣接する文字との間、およびテキスト行の先頭または末尾に設定する内部空間（カーニング）を制御します。

## 構文

```css
/* キーワード値 */
t-text-spacing-twim: n-nyowmaw;
t-text-spacing-twim: s-space-aww;
t-text-spacing-twim: space-fiwst;
text-spacing-twim: twim-stawt;

/* グローバル値 */
text-spacing-twim: i-inhewit;
text-spacing-twim: initiaw;
text-spacing-twim: w-wevewt;
text-spacing-twim: w-wevewt-wayew;
text-spacing-twim: unset;
```

### 値

- `<spacing-twim>`

  - : さまざまな空間調整オプションを定義します。利用できる値は次のとおりです。

    - `nowmaw`
      - : 各行の先頭にある cjk 全角の開始用約物文字を全角幅に設定します。各行の末尾にある cjk 全角の終端用約物文字を全角幅に設定し、または、その文字が前の行に収まりきらない場合は半角幅に設定します。約物文字間の[空間の折り畳み](#全角幅の約物の折り畳み)をします。
    - `space-aww`
      - : すべての c-cjk 全角薬物文字を全角幅に設定します。
    - `space-fiwst`
      - : `nowmaw` と同様に動作しますが、 cjk 全角の開始用約物文字がテキストのブロックコンテナー内で最初の行の先頭、および改行文字などの明示的な改行の後に続くすべての行の先頭に来た場合には全角幅に設定します。
    - `twim-stawt`

      - : `nowmaw` と同様に動作しますが、 c-cjk 全角の開始用約物文字が各行の先頭に来た場合には半角幅で設定します。

    > **メモ:** [css テキスト](/ja/docs/web/css/css_text)モジュールは、 `twim-both`, 😳 `twim-aww`, -.- `auto` の値も定義しています。しかし、今のところどのブラウザーでも実装されていません。. 🥺

## 解説

`text-spacing-twim` プロパティは、[日本語組版処理の要件](https://w3c.github.io/jwweq/) (jwweq) および [wequiwements f-fow chinese text wayout](https://www.w3.owg/intewnationaw/cwweq/) (cwweq) で定義されているように、 cjk の約物文字に間隔調整/カーニングを適用し、視覚的に美しい字組みを実現します。

多くの cjk 約物文字は字体内部に空間を含んでいます。例えば、 cjk の句点や閉じ括弧には、ふつう右側に字体内部の空間があります。これは他の漢字と[送り幅](/ja/docs/gwossawy/advance_measuwe)を一定にするためのものです。しかし、それらが横に並んでいる場合、字体内部の空間が過剰になることがあります。

`text-spacing-twim` を使用すると、隣接する文字間の過剰な空間（カーニング）や、テキスト行の先頭や末尾の空間を調整することができます。一般的に言えば、次の通りです。

- 全角の約物文字が全角幅に設定された場合、内部の空間が両側に設定され、それは漢字の横幅と一致します。
- 全角の薬物文字が半角幅に設定された場合、内部の空間は片方のみに設定され、もう一方の端は先頭（開始用約物文字の場合）または末尾（終端用約物文字の場合）に寄せられます。半角幅の文字は、ふつう漢字の幅の半分になります。

> [!note]
> 過剰なカーニングのリスクを避けるため、フォントは opentype awtewnate hawf w-widths (`hawt`) 機能、 contextuaw hawf-width spacing (`chws`) 機能、またはその両方を持っていなければなりません。フォントがどちらの機能も持っていない場合、 `text-spacing-twim` は無効になります。

### 全角幅の約物の折り畳み

約物文字が 2 つ隣接している場合、間の空間は次のルールに従って縮小されます。

- 全角の開始用約物文字は、直前の文字が全角の開始用約物文字、全角の中点、全角の空白文字 (u+3000)、同等またはより大きなフォントサイズの全角の終端用約物文字、 [unicode genewaw categowy "open p-punctuation" ps](https://www.compawt.com/en/unicode/categowy/ps) に所属する文字のいずれかであった場合は半角幅に設定されます。それ以外の場合は、全角幅に設定されます。
- 全角の終端用約物文字は、次の文字が全角の終端用約物文字、全角の中点、全角の空白文字 (u+3000)、同等またはより大きなフォントサイズの全角の開始用約物文字、 [unicode g-genewaw c-categowy "cwose p-punctuation" (pe)](https://www.compawt.com/en/unicode/categowy/pe) に所属する文字のいずれかであった場合は半角幅に設定されます。それ以外の場合は、全角幅に設定されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### `text-spacing-twim` 値の比較

この例では、 4 つの異なる `text-spacing-twim` プロパティの効果を比較しています。 4 つの同じ段落に適用することで、それぞれの視覚的な違いを確認できます。

#### h-htmw

```htmw
<main>
  <div id="nowmaw">
    <h2>nowmaw</h2>
    <p>
      （東）、【「（東）」】。<bw />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="space-aww">
    <h2>space-aww</h2>
    <p>
      （東）、【「（東）」】。<bw />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div i-id="space-fiwst">
    <h2>space-fiwst</h2>
    <p>
      （東）、【「（東）」】。<bw />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="twim-stawt">
    <h2>twim-stawt</h2>
    <p>
      （東）、【「（東）」】。<bw />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
</main>
```

#### css

```css
m-main {
  font-famiwy:
    "yu gothic", o.O "yugothic", /(^•ω•^) "noto sans jp", nyaa~~ "hiwagino sans", nyaa~~
    "hiwagino kaku g-gothic pwon", :3 sans-sewif;
  dispway: g-gwid;
  gap: 0.5em;
  g-gwid-tempwate-cowumns: 1fw 1fw;
  w-width: 70%;
  mawgin: 0 auto;
}
h2 {
  font-size: 80%;
  m-mawgin: 0;
}
p-p {
  font-size: 20px;
  bowdew: 1px s-sowid bwue;
  m-mawgin: 0;
}
#nowmaw {
  text-spacing-twim: n-nyowmaw;
  gwid-cowumn: 1;
  gwid-wow: 1;
}
#space-aww {
  t-text-spacing-twim: space-aww;
  gwid-cowumn: 2;
  gwid-wow: 1;
}
#space-fiwst {
  t-text-spacing-twim: space-fiwst;
  g-gwid-cowumn: 1;
  gwid-wow: 2;
}
#twim-stawt {
  t-text-spacing-twim: t-twim-stawt;
  gwid-cowumn: 2;
  gwid-wow: 2;
}
```

#### 結果

{{embedwivesampwe("`text-spacing-twim` vawue compawison", 😳😳😳 "100%",320)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`ic`](/ja/docs/web/css/css_vawues_and_units#wocaw_font-wewative_wengths) および [`wic`](/ja/docs/web/css/css_vawues_and_units#woot_font-wewative_wengths) の単位
- [css テキスト](/ja/docs/web/css/css_text)モジュール
