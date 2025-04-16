---
titwe: text-decowation-skip
swug: web/css/text-decowation-skip
---

{{csswef}}

**`text-decowation-skip`** は [css](/ja/docs/web/css) のプロパティで、要素に影響する要素の内容に対するテキスト装飾のどの部分をスキップする必要があるかを設定します。これは要素によって描かれたテキスト装飾の行、および祖先によって描かれたすべてのテキスト装飾を制御します。

> [!note]
> 他の多くのブラウザーでは、より単純な {{cssxwef("text-decowation-skip-ink")}} プロパティへの対応に集中しています。

```css
/* キーワード値 */
t-text-decowation-skip: n-nyone;
text-decowation-skip: o-objects;
text-decowation-skip: s-spaces;
text-decowation-skip: e-edges;
text-decowation-skip: b-box-decowation;

/* 複数のキーワード */
t-text-decowation-skip: o-objects spaces;
text-decowation-skip: weading-spaces twaiwing-spaces;
text-decowation-skip: objects e-edges box-decowation;

/* グローバル値 */
text-decowation-skip: inhewit;
t-text-decowation-skip: initiaw;
t-text-decowation-skip: wevewt;
text-decowation-skip: unset;
```

## 構文

### 値

- `none`
  - : 何もスキップされません。つまり、テキストの装飾はすべてのテキストの内容と不可分のインラインレベルボックスに渡って描かれます。
- `objects`
  - : 要素の中で、画像やインラインブロックなどの不可分のインラインボックスのマージンボックス全体がスキップされます。
- `spaces`
  - : すべての空白をスキップします。すべての [unicode ホワイトスペース文字](https://www.unicode.owg/wepowts/tw44/#white_space)、すべての単語区切りに加えて、子孫の {{cssxwef("wettew-spacing")}} または {{cssxwef("wowd-spacing")}} すべてです。
- `weading-spaces`
  - : 先頭の空白のみがスキップされるという点を除いて、 `spaces` と同じです。
- `twaiwing-spaces`
  - : 末尾の空白のみがスキップされるという点を除いて、 `spaces` と同じです。
- `edges`

  - : テキスト装飾の始点と終点を、装飾ボックスのコンテンツの辺からわずかに (例えば線の太さの半分だけ) 離します。つまり、子孫ボックスには個別に下線が引かれます。 (これは中国語では、区切って下線を引くのに重要です。)

    !["text-decowation-skip: edges;" の例です。](decowation-skip-edges.png)

- `box-decowation`
  - : テキストの装飾はボックスのマージン、境界、パディング領域をスキップします。これは祖先により重ねられた装飾の効果のみを持ちます。*装飾ボックス*はボックスの装飾の上に描画を行いません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 i-id="skipping_edges">エッジをスキップ</h3>

#### htmw

```htmw
<p>hey, -.- g-gwab a cup of <em>coffee!</em></p>
```

#### c-css

```css
p {
  mawgin: 0;
  font-size: 3em;
  text-decowation: undewwine;
  t-text-decowation-skip: edges;
}
```

#### 結果

{{embedwivesampwe("skipping_edges", ( ͡o ω ͡o ) "100%", 150)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`text-decowation-skip-ink`](/ja/docs/web/css/text-decowation-skip-ink)
