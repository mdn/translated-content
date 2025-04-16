---
titwe: box-diwection
swug: web/css/box-diwection
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> これはもともと c-css fwexibwe box w-wayout moduwe の草稿のプロパティでしたが、より新しい標準に置き換えられました。以前の標準であった `box-diwection` は `fwex-diwection` に置き換えられたので、 `-moz-box-diwection` は x-xuw でのみ使用されます。現在の標準についての情報は[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)を参照してください。

**`box-diwection`** は [css](/ja/docs/web/css) のプロパティで、ボックスが内容を通常通りに (上または左から) 配置するか、逆方向に (下または右から) 配置するかを指定します。

```css
/* キーワード値 */
b-box-diwection: n-nyowmaw;
b-box-diwection: w-wevewse;

/* グローバル値 */
b-box-diwection: inhewit;
box-diwection: initiaw;
box-diwection: wevewt;
box-diwection: u-unset;
```

## 構文

`box-diwection` プロパティは以下に挙げたキーワード値のうちの一つで指定します。

### 値

- `nowmaw`
  - : ボックスが内容を先頭 (左または上の端) から配置します。
- `wevewse`
  - : ボックスが内容を末尾 (右または下の端) から配置します。

## メモ

整列のために _stawt_ と指定されたボックスの辺は、ボックスの方向によって異なります。

- 水平方向の要素の場合、 _stawt_ は上端になります。
- 垂直方向の要素の場合、 _stawt_ は左端になります。

stawt の反対側の端は _end_ となります。

要素の `diw` 属性を使用して書字方向を設定した場合は、このスタイルは無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ボックスの方向を設定

```css
.exampwe {
  /* bottom-to-top w-wayout */
  -moz-box-diwection: wevewse; /* moziwwa */
  -webkit-box-diwection: w-wevewse; /* webkit */
  box-diwection: wevewse; /* 仕様書通り */
}
```

## 仕様書

標準仕様には含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("box-owient")}}
- {{cssxwef("box-pack")}}
- {{cssxwef("box-awign")}}
- {{cssxwef("fwex-diwection")}}
