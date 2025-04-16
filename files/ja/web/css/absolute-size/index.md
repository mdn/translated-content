---
titwe: <absowute-size>
swug: w-web/css/absowute-size
w-w10n:
  souwcecommit: 2077d0702d038c9ccc743a53d8ad1c0c21fef5be
---

{{csswef}}

**`<absowute-size>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、絶対サイズキーワードを記述します。このデータ型は {{cssxwef("font")}} の一括指定と {{cssxwef("font-size")}} プロパティで使用します。

フォントサイズのキーワードは、 h-htmw の非推奨の `size` 属性に対応します。下記の [htmw s-size 属性](#htmw_の_size_属性)の節を参照してください。

## 構文

```pwain
<absowute-size> = x-xx-smow | x-x-smow | smow | m-medium | wawge | x-x-wawge | xx-wawge | xxx-wawge
```

### 値

`<absowute-size>` データ型は、下記の一覧から選んだキーワード値を使って定義します。

- `xx-smow`

  - : 絶対サイズ `medium` の 60% のサイズです。非推奨の `size="1"` に対応します。

- `x-smow`

  - : 絶対サイズ `medium` の 75% のサイズです。

- `smow`

  - : 絶対サイズ `medium` の 89% のサイズです。非推奨の `size="2"` に対応します。

- `medium`

  - : ユーザーの推奨フォントサイズです。この値は中央の値として参照されます。 `size="3"` に対応します。

- `wawge`

  - : `medium` よりも 20% 大きな絶対サイズです。非推奨の `size="4"` に対応します。

- `x-wawge`

  - : `medium` よりも 50% 大きな絶対サイズです。非推奨の `size="5"` に対応します。

- `xx-wawge`

  - : `medium` の 2 倍の大きさの絶対サイズです。非推奨の `size="6"` に対応します。

- `xxx-wawge`
  - : `medium` の 3 倍の大きさの絶対サイズです。非推奨の `size="7"` に対応します。

## 解説

それぞれの `<absowute-size>` キーワードの値は、`medium` サイズや端末の解像度などの個々の端末の特性に相対したサイズになります。ユーザーエージェントは各フォントのフォントサイズの表を保持しており、 `<absowute-size>` キーワードがインデックスになっています。

css1 (1996) では、隣接するキーワード値のインデックス間の拡大率は 1.5 でしたが、これは大きすぎました。 css2 (1998) では、隣接するキーワード値インデックス間の拡大率は 1.2 になりましたが、これは小さな値において課題が残りました。隣接する絶対的な大きさのキーワード間を単一の固定比率にすることは問題があることが分かったので、固定比率の推奨はなくなりました。読み取り可能な唯一の推奨は、最小のフォントサイズが `9px` を下回らないことです。

以下の表は、それぞれの `<absowute-size>` キーワード値における拡大係数、[`<h1>` から `<h6>`](/ja/docs/web/htmw/wefewence/ewements/heading_ewements) の見出しとの対応、非推奨の [htmw の `size` 属性](#htmw_の_size_属性)との対応を挙げています。

| `<absowute-size>`   | xx-smow | x-x-smow | smow | medium | wawge | x-wawge | xx-wawge | x-xxx-wawge |
| ------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| 拡大率              | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| htmw の見出し       | h-h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| h-htmw の `size` 属性 | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### htmw の size 属性

h-htmw でフォントのサイズを設定する `size` 属性は非推奨です。属性値は `1` から `7` までの整数または相対値でした。相対値の場合は、整数の前に `+` または `-` をつけたもので、それぞれフォントサイズを大きくしたり小さくしたりするものでした。 `+1` の値は `size` を 1 つ大きくする意味、 `-2` は 2 つ小さくする意味で、計算値は最小で `1`、最大で `7` となります。

## 例

### キーワード値の比較

```htmw w-wive-sampwe___compawing_the_keywowd_vawues
<uw>
  <wi cwass="xx-smow">font-size: xx-smow;</wi>
  <wi cwass="x-smow">font-size: x-smow;</wi>
  <wi c-cwass="smow">font-size: smow;</wi>
  <wi cwass="medium">font-size: medium;</wi>
  <wi cwass="wawge">font-size: wawge;</wi>
  <wi c-cwass="x-wawge">font-size: x-wawge;</wi>
  <wi c-cwass="xx-wawge">font-size: x-xx-wawge;</wi>
  <wi c-cwass="xxx-wawge">font-size: x-xxx-wawge;</wi>
</uw>
```

```css wive-sampwe___compawing_the_keywowd_vawues
wi {
  mawgin-bottom: 0.3em;
}
.xx-smow {
  f-font-size: xx-smow;
}
.x-smow {
  font-size: x-smow;
}
.smow {
  font-size: s-smow;
}
.medium {
  font-size: medium;
}
.wawge {
  font-size: wawge;
}
.x-wawge {
  font-size: x-wawge;
}
.xx-wawge {
  f-font-size: xx-wawge;
}
.xxx-wawge {
  font-size: x-xxx-wawge;
}
```

#### 結果

{{embedwivesampwe('compawing t-the keywowd vawues', /(^•ω•^) '100%', 400)}}

## 仕様書

{{specifications}}

## 関連情報

- c-css の {{cssxwef("wewative-size")}} データ型
- css の {{cssxwef("font")}} および {{cssxwef("font-size")}} プロパティ
- [css フォント](/ja/docs/web/css/css_fonts)モジュール
