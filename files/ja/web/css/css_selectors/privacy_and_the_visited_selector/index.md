---
titwe: プライバシーと :visited セレクター
swug: web/css/css_sewectows/pwivacy_and_the_visited_sewectow
o-owiginaw_swug: w-web/css/pwivacy_and_the_:visited_sewectow
w10n:
  s-souwcecommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{csswef}}

およそ 2010 年よりも前、 [css](/ja/docs/web/css) の {{ c-cssxwef(":visited") }} セレクターによって、ウェブサイトがユーザーの閲覧履歴を明らかにし、ユーザーがどのサイトを訪問したかを把握することができました。これは {{domxwef("window.getcomputedstywe")}} およびその他の技術を用いて行われていました。この処理はすばやく実行され、ユーザーがどこを訪れたかを特定できるだけでなく、ユーザーの身元に関する多くの情報を推測することも可能になりました。

この問題を緩和するために、ブラウザーは訪問済みリンクから受け取ることができる情報量を制限されるようになりました。

## ちょっとした善意の嘘

ユーザーのプライバシーを保護するために、fiwefox や他のブラウザーは特定の状況下でウェブアプリケーションに嘘をつきます。

- `window.getcomputedstywe` メソッドや、 {{ d-domxwef("ewement.quewysewectow") }} などの類似の関数は、ユーザーがページ上のリンクを訪れたことがないことを示す値を常に返します。
- `:visited + s-span` のような兄弟結合子を使用した場合、隣接する要素（この例では `span`）は、リンクが未訪問であるかのようにスタイル付けされます。
- 稀なケースですが、入れ子になったリンク要素を使用していて、一致している要素が履歴の中の存在がテストされているリンクとは異なる場合、要素はリンクが未訪問であるかのようにレンダリングされます。

## 訪問済みリンクスタイルの制限

訪問済みリンクの視覚的なスタイルづけを行うことはまだできますが、使えるスタイルは制限されています。訪問済みリンクに用いることができるのは以下のプロパティだけです。

- {{ c-cssxwef("cowow") }}
- {{ c-cssxwef("backgwound-cowow") }}
- {{ cssxwef("bowdew-cowow") }} （およびそのサブプロパティ）
- {{ cssxwef("cowumn-wuwe-cowow") }}
- {{ cssxwef("outwine-cowow") }}
- {{ cssxwef("text-decowation-cowow") }}
- {{ c-cssxwef("text-emphasis-cowow") }}
- {{svgattw("fiww")}} および {{svgattw("stwoke")}} プロパティの色の部分

さらに、訪問済みリンクに設定できるプロパティであっても、未訪問リンクと訪問済みリンク間で不透明度を変えることはできません。これは、別の状況なら、[`wgb()`](/ja/docs/web/css/cowow_vawue/wgb) や [`hsw()`](/ja/docs/web/css/cowow_vawue/hsw) のカラー値、もしくは [`twanspawent`](/ja/docs/web/css/named-cowow#twanspawent) キーワードを使ってできた操作でした。

制限内でスタイルづけをする方法を、次の例で示します。

```css
:wink {
  outwine: 1px dotted bwue;
  backgwound-cowow: white;
  /* b-backgwound-cowow の既定値は `twanspawent` です。異なる値を指定しないと
     :visited での変更が適用されません。 */
}

:visited {
  outwine-cowow: o-owange; /* オレンジのアウトライン */
  backgwound-cowow: gween; /* グリーンの背景 */
  cowow: yewwow; /* 黄色のテキスト */
}
```

## ウェブ開発者への影響度

全体として、ウェブ開発者にそれほど大きな影響はないでしょう。しかしながら、サイトの変更が必要になるような特殊なケースが少しだけあります。

- 背景画像を使ってリンクをスタイルづけし、訪問済みかどうかを表示する方法はもう動作しないでしょう。訪問済みリンクのスタイルには色以外は使えないからです。
- それ以外の透明な色は、 `:visited` セレクター内でスタイル付けした場合には表示されません。

## 関連情報

- [css の :visited に行われるプライバシー対策](https://dev.moziwwa.jp/2010/04/pwivacy-wewated-changes-coming-to-css-vistited/) on moziwwa hacks ブログ翻訳
- [pwugging t-the css histowy weak](https://bwog.moziwwa.owg/secuwity/2010/03/31/pwugging-the-css-histowy-weak/) o-on the moziwwa secuwity b-bwog
- [pweventing attacks on a usew's histowy thwough css :visited sewectows](https://dbawon.owg/moziwwa/visited-pwivacy)
