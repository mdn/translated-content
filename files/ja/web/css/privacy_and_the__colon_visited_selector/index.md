---
title: プライバシーと :visited セレクター
slug: Web/CSS/Privacy_and_the_:visited_selector
l10n:
  sourceCommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{CSSRef}}

およそ 2010 年よりも前、 [CSS](/ja/docs/Web/CSS) の {{ cssxref(":visited") }} セレクターによって、ウェブサイトがユーザーの閲覧履歴を明らかにし、ユーザーがどのサイトを訪問したかを把握することができました。これは {{domxref("window.getComputedStyle")}} およびその他の技術を用いて行われていました。この処理はすばやく実行され、ユーザーがどこを訪れたかを特定できるだけでなく、ユーザーの身元に関する多くの情報を推測することも可能になりました。

この問題を緩和するために、ブラウザーは訪問済みリンクから受け取ることができる情報量を制限されるようになりました。

## ちょっとした善意の嘘

ユーザーのプライバシーを保護するために、Firefox や他のブラウザーは特定の状況下でウェブアプリケーションに嘘をつきます。

- `window.getComputedStyle` メソッドや、 {{ domxref("element.querySelector") }} などの類似の関数は、ユーザーがページ上のリンクを訪れたことがないことを示す値を常に返します。
- `:visited + span` のような兄弟結合子を使用した場合、隣接する要素（この例では `span`）は、リンクが未訪問であるかのようにスタイル付けされます。
- 稀なケースですが、入れ子になったリンク要素を使用していて、一致している要素が履歴の中の存在がテストされているリンクとは異なる場合、要素はリンクが未訪問であるかのようにレンダリングされます。

## 訪問済みリンクスタイルの制限

訪問済みリンクの視覚的なスタイルづけを行うことはまだできますが、使えるスタイルは制限されています。訪問済みリンクに用いることができるのは以下のプロパティだけです。

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} （およびそのサブプロパティ）
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- {{SVGAttr("fill")}} および {{SVGAttr("stroke")}} プロパティの色の部分

さらに、訪問済みリンクに設定できるプロパティであっても、未訪問リンクと訪問済みリンク間で不透明度を変えることはできません。これは、別の状況なら、[`rgb()`](/ja/docs/Web/CSS/color_value/rgb) や [`hsl()`](/ja/docs/Web/CSS/color_value/hsl) のカラー値、もしくは [`transparent`](/ja/docs/Web/CSS/named-color#transparent) キーワードを使ってできた操作でした。

制限内でスタイルづけをする方法を、次の例で示します。

```css
:link {
  outline: 1px dotted blue;
  background-color: white;
  /* background-color の既定値は `transparent` です。異なる値を指定しないと
     :visited での変更が適用されません。 */
}

:visited {
  outline-color: orange; /* オレンジのアウトライン */
  background-color: green; /* グリーンの背景 */
  color: yellow; /* 黄色のテキスト */
}
```

## ウェブ開発者への影響度

全体として、ウェブ開発者にそれほど大きな影響はないでしょう。しかしながら、サイトの変更が必要になるような特殊なケースが少しだけあります。

- 背景画像を使ってリンクをスタイルづけし、訪問済みかどうかを表示する方法はもう動作しないでしょう。訪問済みリンクのスタイルには色以外は使えないからです。
- それ以外の透明な色は、 `:visited` セレクター内でスタイル付けした場合には表示されません。

## 関連情報

- [CSS の :visited に行われるプライバシー対策](https://dev.mozilla.jp/2010/04/privacy-related-changes-coming-to-css-vistited/) on Mozilla Hacks ブログ翻訳
- [Plugging the CSS History Leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) on the Mozilla Security Blog
- [Preventing attacks on a user's history through CSS :visited selectors](https://dbaron.org/mozilla/visited-privacy)
