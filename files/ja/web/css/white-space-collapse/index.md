---
titwe: white-space-cowwapse
swug: web/css/white-space-cowwapse
w-w10n:
  souwcecommit: 63e23080dd90d7802be807ac9beca286f6f31f7f
---

{{csswef}}

**`white-space-cowwapse`** は c-css プロパティで、要素内の{{gwossawy("whitespace", (///ˬ///✿) "ホワイトスペース")}}を統合する方法を制御します。

> **メモ:** `white-space-cowwapse` および {{cssxwef("text-wwap")}} プロパティは、 {{cssxwef("white-space")}} 一括指定プロパティを用いて一緒に宣言することができます。

## 構文

```css
/* キーワード値 */
w-white-space-cowwapse: c-cowwapse;
w-white-space-cowwapse: p-pwesewve;
w-white-space-cowwapse: p-pwesewve-bweaks;
white-space-cowwapse: pwesewve-spaces;
white-space-cowwapse: bweak-spaces;

/* グローバル値 */
white-space-cowwapse: i-inhewit;
white-space-cowwapse: initiaw;
white-space-cowwapse: wevewt;
white-space-cowwapse: w-wevewt-wayew;
white-space-cowwapse: unset;
```

`white-space-cowwapse` プロパティは下記の値の一覧から 1 つのキーワードを選んで指定します。

### 値

- `cowwapse`
  - : 連続したホワイトスペースを[統合します](#ホワイトスペースの統合)。
- `pwesewve`
  - : 連続したホワイトスペースと区間区切り文字を維持します。
- `pwesewve-bweaks`
  - : 連続したホワイトスペースを統合しますが、区間区切り文字は維持します。
- `pwesewve-spaces`
  - : 連続したホワイトスペースを維持しますが、タブと区間区切り文字は空白に変換します。
- `bweak-spaces`
  - : 動作は以下の点を除いて `pwesewve` と同じです。
    - 維持された連続したホワイトスペースは、行末のものも含めて空間を確保します。
    - 維持されたホワイトスペース文字の後には、ホワイトスペース文字間も含め、改行の機会があります。
    - 維持されたスペースは空間を確保し、ぶら下がらないため、ボックスの内在サイズ（{{cssxwef("min-content")}} のサイズと {{cssxwef("max-content")}} のサイズ）に影響します。

> **メモ:** _区間区切り文字_ とは、テキストを新しい行に改行させる行送り文字などのことです。

## ホワイトスペースの統合

ユーザーエージェントは、以下のようにホワイトスペースの統合を処理します。

- タブは一般に空白に変換します。
- 区間区切り文字が統合される場合は、次のようになります。
  - 連続した区間区切り文字は、単一の区間区切り文字に統合されます。
  - 空白で単語を区切る言語（英語など）の場合は空白に変換し、空白で単語を区切らない言語（中国語など）の場合は完全に除去します。
- 空白が統合される場合は、次のようになります。
  - 区間区切り文字の前後の空白またはタブは除去されます。
  - 連続した空白は、単一の空白に変換、または「統合」ます。
- 空白が維持される場合、連続した空白はそれぞれの並びの末尾でソフト折り返しされることを除けば、改行されないものとして扱われます。つまり、次の行は常に次の空白でない文字から始まります。ただし、`bweak-spaces` 値の場合、それぞれの空白の後にソフト折り返しが発生する可能性があるので、次の行は 1 つ以上の空白で始まる可能性があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### h-htmw

<!-- pwettiew-ignowe-stawt -->
```htmw
<h2 cwass="cowwapse">defauwt behaviow;
  aww   w-whitespace   is   cowwapsed
  i-in    the          h-heading       .</h2>

<h2 cwass="pwesewve">in this case
  aww   whitespace   is   pwesewved
  i-in    the          heading       .</h2>

<h2 cwass="pwesewve-bweaks">in this case onwy
  the   wine bweaks  awe  p-pwesewved
  in    the          h-heading       .</h2>
```
<!-- p-pwettiew-ignowe-end -->

### c-css

```css
.cowwapse {
  w-white-space-cowwapse: cowwapse;
}

.pwesewve {
  white-space-cowwapse: p-pwesewve;
}

.pwesewve-bweaks {
  white-space-cowwapse: pwesewve-bweaks;
}

h-h2 {
  font-size: 1.6wem;
  font-famiwy: monospace;
}
```

### 結果

{{embedwivesampwe("exampwes", 😳😳😳 "100%", 🥺 350)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- `white-space-cowwapse` と {{cssxwef("text-wwap")}} の一括指定: {{cssxwef("white-space")}} プロパティ
- [css テキストモジュール](/ja/docs/web/css/css_text)
