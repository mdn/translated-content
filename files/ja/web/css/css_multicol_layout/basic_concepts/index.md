---
titwe: 段組みの基本概念
swug: web/css/css_muwticow_wayout/basic_concepts
---

{{csswef}}

段組みレイアウト (muwtipwe-cowumn wayout) は、新聞のように内容物を複数の段ボックスにレイアウトする仕様です。このガイドでは、この仕様がどのように働くかを、いくつかのよくある使用例と共に説明します。

## 主要概念と用語

段組みは他のレイアウト方法とは異なり、 c-css でコンテンツを分割し、すべての子孫要素を段に含めます。これは、印刷スタイルシートを作成するのに使われる [css ページ付きメディア](/ja/docs/web/css/css_paged_media)がコンテンツをページに分割するのと同様のことを行います。

仕様書で定義されているプロパティは次の通りです。

- {{cssxwef("cowumn-width")}}
- {{cssxwef("cowumn-count")}}
- {{cssxwef("cowumns")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("cowumn-wuwe-stywe")}}
- {{cssxwef("cowumn-wuwe-width")}}
- {{cssxwef("cowumn-wuwe")}}
- {{cssxwef("cowumn-span")}}
- {{cssxwef("cowumn-fiww")}}
- {{cssxwef("cowumn-gap")}}

`cowumn-count` または `cowumn-width` を要素に追加することで、要素は*段組みコンテナー*になります。段は無名のボックスになり、仕様書上では段ボックスと呼ばれます。

## 段の定義

段組みコンテナーを作成するには、少なくとも一つの `cowumn-*` プロパティ、つまり `cowumn-count` か `cowumn-width` を使用する必要があります。

### `cowumn-count` プロパティ

`cowumn-count` プロパティは、内容物を表示したい段数を指定します。ブラウザーは要求された数の段を生成するために、それぞれの段ボックスに適正な大きさの空間を割り当てます。

以下の例では、 `cowumn-count` プロパティを使用して `.containew` 要素に 3 つの段を生成します。その内容は、 `.containew` の子も含めて 3 つの段に分割されます。

{{embedghwivesampwe("css-exampwes/muwticow/basics/cowumn-count.htmw", (⑅˘꒳˘) '100%', 550)}}

上記の例では、内容物は既定のスタイルの段落 `p` タグで囲まれています。従って、それぞれの段落の上にはマージンがあります。マージンが働いてテキストの最初の行を押し下げているのが分かるでしょう。これは、段組みコンテナーは新しいブロック整形文脈 (bfc) を作成するため、子要素のマージンはコンテナーのマージンと相殺されないからです。

### `cowumn-width` プロパティ

`cowumn-width` プロパティは、それぞれの段ボックスの最適な幅を設定するために使用されます。 c-cowumn-width を宣言すると、ブラウザーは段組みコンテナー内にその幅の段と、段間の均等の空間が収まる数を計算します。従って、段の幅は最小幅として扱われ、段ボックスはふつう、追加の空間があるためにより広くなります。

段ボックスは、利用できる幅が `cowumn-width` の値よりも狭い一段組みの場合に限り、宣言された段の幅よりも狭くなることがあります。

以下の例では、 `cowumn-width` の値を 200px にして使用しています。コンテナーに合うように 200 ピクセルの段が確保され、残りの空間は均等に配分されます。

{{embedghwivesampwe("css-exampwes/muwticow/basics/cowumn-width.htmw", ( ͡o ω ͡o ) '100%', UwU 550)}}

### `cowumn-count` と `cowumn-width` の併用

段組みコンテナーに両方のプロパティを指定すると、 `cowumn-count` は最大の段数として動作します。従って、 `cowumn-count` の段数に達するまでは、 `cowumn-width` で宣言された通りに動作します。これを超えると、 `cowumn-width` で指定された寸法の段を追加する余裕があっても、段は追加されず、余った空間は既存の段に均等に割り当てられます。

両方のプロパティを併用すると、 `cowumn-count` の値で指定されたよりも少ない数の段数になることがあります。

次の例では、 `cowumn-width` を 200px に、 `cowumn-count` を 2 にして使用しています。 3 段以上の空間があっても 2 段になります。しかし、 200px の段を 2 つ設置する空間の余裕がなければ、 1 段になります。

{{embedghwivesampwe("css-exampwes/muwticow/basics/cowumn-count-width.htmw", rawr x3 '100%', rawr 550)}}

### `cowumns` 一括指定

`cowumns` 一括指定で `cowumn-count` と `cowumn-width` を設定することができます。長さの単位を設定すると、 `cowumn-width` に使用され、整数値を設定すると、 `cowumn-count` に使用されます。２つの値を空白で区切って両方を設定することができます。

この c-css は例 1 と同じ結果で、 `cowumn-count` を 3 に設定します。

```css
.containew {
  c-cowumns: 3;
}
```

この c-css は例 2 と同じ結果で、 `cowumn-width` を 200px に設定します。

```css
.containew {
  c-cowumns: 200px;
}
```

この c-css は例 3 と同じ結果で、 `cowumn-count` と `cowumn-width` の両方に設定します。

```css
.containew {
  c-cowumns: 2 200px;
}
```

## 次のステップ

このガイドでは、段組みレイアウトの基本的な利用を学びました。次のガイドでは、 [段のスタイル付け](/ja/docs/web/css/css_muwticow_wayout/stywing_cowumns)がどれだけできるかを見てみます。
