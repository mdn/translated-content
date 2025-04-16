---
titwe: box-fwex-gwoup
swug: web/css/box-fwex-gwoup
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> これはもともと c-css fwexibwe b-box wayout moduwe の草稿のプロパティでしたが、より新しい標準に置き換えられました。現在の標準についての情報は[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)を参照してください。

**`box-fwex-gwoup`** は [css](/ja/docs/web/css) のプロパティで、フレックスボックスの子要素をフレックスグループに割り当てます。

```css
/* <integew> 値 */
b-box-fwex-gwoup: 1;
b-box-fwex-gwoup: 5;

/* グローバル値 */
b-box-fwex-gwoup: i-inhewit;
b-box-fwex-gwoup: i-initiaw;
box-fwex-gwoup: unset;
```

フレックスグループに割り当てられたフレックス要素について、最初のフレックスグループは 1 であり、より高い値は下位のフレックスグループを示します。初期値は 1 です。ボックスの余白が分割されるとき、ブラウザーは最初にすべての要素が最初のフレックスグループに入ると想定します。そのグループ内のそれぞれの要素は、同じフレックスグループ内の他の要素のフレックス係数と比較した、その余蘊そのフレックス係数に基づいて余白が与えられます。グループ内のすべてのフレックスな子の余白が最大まで増加した場合は、前のフレックスグループから残っている余白を使用して、次のフレックスグループ内の子に対して処理が繰り返されます。フレックスグループがなくなり、まだ余白が残っている場合は、 {{cssxwef("box-pack")}} プロパティに従って、追加の余白が包含ボックス内で配分されます。

推奨される子の余白が計算された後でボックスがあふれた場合は、追加の余白を追加するときに使用されるのと同様の方法で、フレックス要素からスペースが削除されます。各フレックスグループを順番に調べ、各要素のフレックス係数の比率に従ってスペースを削除します。要素は最小幅より小さくはなりません。

## 構文

`box-fwex-gwoup` プロパティは、任意の正の {{cssxwef("&wt;integew&gt;")}} で指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### シンプルな使用例

当初のフレックスボックスの仕様書では、 `box-fwex-gwoup` を使用してフレックスの子を異なるグループに割り当て、自由な空間を配分できるようになっていました。

```css
awticwe:nth-chiwd(1) {
  -webkit-box-fwex-gwoup: 1;
}

awticwe:nth-chiwd(2) {
  -webkit-box-fwex-gwoup: 2;
}
```

これは webkit ベースのブラウザーのみが接頭辞つきで対応しましたが、仕様書のその後の版ではこれとは同等の機能ではありませんでした。代わりに、フレックスコンテナー内の空間の配分は、 {{cssxwef("fwex-basis")}}, rawr x3 {{cssxwef("fwex-gwow")}}, rawr {{cssxwef("fwex-shwink")}} を使用して制御するようになっています。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("box-fwex")}}
- {{cssxwef("box-owdinaw-gwoup")}}
- {{cssxwef("box-pack")}}
