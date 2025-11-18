---
title: プライバシーと :visited セレクター
short-title: プライバシーと :visited
slug: Web/CSS/Guides/Selectors/Privacy_and_:visited
original_slug: Web/CSS/CSS_selectors/Privacy_and_the_visited_selector
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

もともと、 [CSS](/ja/docs/Web/CSS) の {{ cssxref(":visited") }} セレクターによって、ウェブサイトがユーザーの閲覧履歴を明らかにし、ユーザーがどのサイトを訪問したかを把握することができました。これは {{domxref("window.getComputedStyle")}} およびその他の技術を用いて行われていました。この処理はすばやく実行され、ユーザーがどこを訪れたかを特定できるだけでなく、ユーザーの身元に関する多くの情報を推測することも可能になりました。

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

さらに、上記のスタイルであっても、未訪問リンクと訪問済みリンクの透過率の違いは適用されません。この制限により、さまざまな {{cssxref("color_value", "&lt;color&gt;")}} 関数や [`transparent`](/ja/docs/Web/CSS/Reference/Values/named-color#transparent) キーワードを使用して、2 つの状態を判別することができなくなります。

制限内でスタイルづけをする方法を、次の例で示します。

```css
:link {
  outline: 1px dotted blue;
  background-color: white;
  /* background-color の既定値は `transparent` です。異なる値を指定しないと
     :visited での変更が適用されません。 */
}

:visited {
  outline-color: orange; /* 訪問したリンクはオレンジ色の概要で表示されます */
  background-color: green; /* 訪問したリンクは緑色の背景で表示されます */
  color: yellow; /* 訪問したリンクは黄色で表示されます */
}
```

## ウェブ開発者への影響度

サイトを開発する際には、次の点を考慮するとよいでしょう。

- リンクの訪問状態に基づいて {{cssxref("background-image")}} の値を変更しても、訪問したリンクのスタイル設定には色しか使用できないため、動作しません。
- それ以外の透明な色は、 `:visited` セレクター内でスタイル付けした場合には表示されません。

## 関連情報

- [Preventing attacks on a user's history through CSS `:visited` selectors](https://dbaron.org/mozilla/visited-privacy) (2010)
