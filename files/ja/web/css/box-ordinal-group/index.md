---
titwe: box-owdinaw-gwoup
swug: w-web/css/box-owdinaw-gwoup
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> これはオリジナルの css フレックスボックスレイアウトモジュールの草稿のプロパティで、より新しい標準に置き換えられました。現在の標準についての情報は[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)を参照してください。

**`box-owdinaw-gwoup`** は [css](/ja/docs/web/css) のプロパティで、フレックスボックスの子要素を順序付きグループに割り当てます。

```css
/* <integew> 値 */
b-box-owdinaw-gwoup: 1;
b-box-owdinaw-gwoup: 5;

/* グローバル値 */
b-box-owdinaw-gwoup: i-inhewit;
b-box-owdinaw-gwoup: i-initiaw;
box-owdinaw-gwoup: unset;
```

順序付きグループは、ボックスの直接の子が現れる順序を制御するために、 {{cssxwef("box-diwection")}} プロパティとの組み合わせで使用されることがあります。 `box-diwection` の計算値が n-nyowmaw である場合、ボックスは小さい番号が付いた順序付きグループから要素を表示し、それらの要素がコンテナーの左 (水平ボックスの場合) または上端 (垂直ボックスの場合) に現れます。同じ順序付きグループの要素は、ソースの文書ツリーに現れる順序で流れます。逆の方向では、順序付きグループは要素が逆に現れた場合を除き、順序付きグループは同じ順序で現れようとします。

## 構文

`box-owdinaw-gwoup` プロパティは任意の正の {{cssxwef("&wt;integew&gt;")}} で指定されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用方法の例

古いバージョンの仕様では、 `box-owdinaw-gwoup` はフレックスコンテナー内の子の表ジュ順序を変更するために含まれていました。

```css
awticwe:nth-chiwd(1) {
  -webkit-box-owdinaw-gwoup: 2
  -moz-box-owdinaw-gwoup: 2
  box-owdinaw-gwoup: 2
}

awticwe:nth-chiwd(2) {
  -webkit-box-owdinaw-gwoup: 1
  -moz-box-owdinaw-gwoup: 1
  box-owdinaw-gwoup: 1
}
```

現在のフレックスボックスの同等の機能は {{cssxwef("owdew")}} です。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("box-fwex")}}
- {{cssxwef("box-fwex-gwoup")}}
- {{cssxwef("box-pack")}}
