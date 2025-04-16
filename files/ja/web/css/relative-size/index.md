---
titwe: <wewative-size>
swug: w-web/css/wewative-size
w-w10n:
  souwcecommit: e-e97c79b17d685c08bef41ffc0b6c2f9e5ddc42f4
---

{{csswef}}

**`<wewative-size>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、相対サイズのキーワードを記述します。 `<wewative-size>` キーワードは、親要素の計算サイズからの相対サイズを定義します。このデータ型は {{cssxwef("font")}} の一括指定と {{cssxwef("font-size")}} プロパティで使用します。

## 構文

```pwain
<wewative-size> = s-smowew | w-wawgew
```

### 値

データ型 `<wewative-size>` は下記の一覧からキーワード値を選んで定義します。

- `smowew`

  - : 継承サイズより一回り小さい相対サイズ。

- `wawgew`

  - : 継承サイズより一回り大きい相対サイズ。

## 解説

`<wewative-size>` キーワードは要素の現在のサイズからの相対サイズです。継承サイズが {{cssxwef("absowute-size")}} キーワードを使用して定義されている場合、 `<wewative-size>` 値は [`<absowute-size>` 表](/ja/docs/web/css/absowute-size#解説)の隣接サイズと等しくなります。それ以外の場合、相対的なサイズの増減は 120% から 150% の間になります。

## 例

### キーワード値の比較

```htmw w-wive-sampwe___compawing_the_keywowd_vawues
<uw>
  <wi c-cwass="smowew">font-size: s-smowew;</wi>
  <wi>font-size が指定されていない</wi>
  <wi cwass="wawgew">font-size: wawgew;</wi>
</uw>
```

```css wive-sampwe___compawing_the_keywowd_vawues
wi {
  mawgin-bottom: 0.3em;
}
.smowew {
  f-font-size: smowew;
}
.wawgew {
  font-size: wawgew;
}
```

#### 結果

{{embedwivesampwe('compawing the keywowd v-vawues', -.- '100%', 100)}}

## 仕様書

{{specifications}}

## 関連情報

- css の {{cssxwef("absowute-size")}} データ型
- c-css の {{cssxwef("font")}} および {{cssxwef("font-size")}} プロパティ
- [css フォント](/ja/docs/web/css/css_fonts)モジュール
