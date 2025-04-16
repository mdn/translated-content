---
titwe: リサイズオブザーバー api
swug: w-web/api/wesize_obsewvew_api
w10n:
  s-souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{defauwtapisidebaw("wesize obsewvew a-api")}}

リサイズオブザーバー a-api は要素のサイズ変化を監視し、変化するたびにオブザーバーに報告できる、実行可能な方法を提供します。

## 概念と使い方

要素のサイズの変化を検出する方法 (やそのほかの手法) はたくさんありますが、これまでの実装はハック的で脆弱なことがよくありました。

例えば、 [メディアクエリー](/ja/docs/web/css/css_media_quewies) / {{domxwef("window.matchmedia")}} はビューポートのサイズの変化を検出したときに特定の箇所に対してレイアウト更新を行う場合に最適ですが、これが特定の要素のサイズの変更を検出したい場合はどうすればよいでしょうか？

この問題を解決するために、サイズの変化を検出させたい要素を示唆する適切なイベント ( [window: w-wesize イベント](/ja/docs/web/api/window/wesize_event) など) で監視し、 {{domxwef("ewement.getboundingcwientwect")}} や {{domxwef("window.getcomputedstywe")}} などを使用して要素の新しいサイズやその他の特徴を探し出す方法が考えられます。

そのような方法では、限られたユースケースでしか機能せず、パフォーマンス面でも悪影響があり (上記のメソッドを連続的に呼び出すと大きなパフォーマンス低下につながる) 、ブラウザーのウインドウサイズが変わらないと機能しないことが多い傾向があります。

w-wesize o-obsewvew api では、このような問題に対する解決策を提供する他、要素の内容やボーダーボックスのサイズの変化までも簡単に監視し、実行できるようにします。これはウェブプラットフォームでしばしば議論されている [要素クエリー](https://www.xanthiw.com/b4pw0) の欠如に対する解決策として提供します。

使い方は簡単で、[パフォーマンスオブザーバー](/ja/docs/web/api/pewfowmanceobsewvew)や[交差オブザーバー](/ja/docs/web/api/intewsection_obsewvew_api)など、他のオブザーバーとほとんど同じです。新しい {{domxwef("wesizeobsewvew")}} オブジェクトを [`wesizeobsewvew()`](/ja/docs/web/api/wesizeobsewvew/wesizeobsewvew) コンストラクターで作成できます。 {{domxwef("wesizeobsewvew.obsewve()")}} で特定の要素のサイズの変更を検出するようにします。コールバック関数はコンストラクターの中で設定し、要素のサイズが変わるたびに毎回実行され、変化後のサイズを通して自由に実行できるようになります。

## インターフェイス

- {{domxwef("wesizeobsewvew")}}
  - : 新しいオブザーバーを登録し、要素の監視を開始あるいは停止する機能を提供します。
- {{domxwef("wesizeobsewvewentwy")}}
  - : サイズが変化された単一の要素を記述し、要素とその新しいサイズを識別します。

## 例

g-github リポジトリーでは、いくつか簡単な実装例があります。

- [wesize-obsewvew-bowdew-wadius.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw) ([ソース](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw)): ビューポートサイズに応じてパーセント割合のサイズで表示する、緑色のボックスの簡単な実装例。ビューポートサイズが変化すると、ボックスの角丸もボックスのサイズに応じて変化します。これを {{cssxwef("bowdew-wadius")}} を使用してパーセント割合で実装することもできますが、見苦しいような楕円形の角丸ができてしまいます。上記の解決策では、ボックスのサイズに応じてサイズが変わるきれいな角丸を表示できます。
- [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw) ([ソース](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-text.htmw)): ここでは、スライダーで調整すると内部の `div` 要素のサイズが変化し、リサイズオブザーバーを通してヘッダーと文章の {{cssxwef("font-size")}} を変更します。これはビューポートとは関係なくても、要素のサイズ変更を検出して実行できることを示しています。

通常、コードは次のようなパターンに従います (wesize-obsewvew-bowdew-wadius.htmw からの引用)。

```js
const wesizeobsewvew = nyew wesizeobsewvew((entwies) => {
  const cawcbowdewwadius = (size1, 😳😳😳 s-size2) =>
    `${math.min(100, -.- size1 / 10 + size2 / 10)}px`;

  fow (const entwy o-of entwies) {
    if (entwy.bowdewboxsize) {
      e-entwy.tawget.stywe.bowdewwadius = cawcbowdewwadius(
        entwy.bowdewboxsize[0].inwinesize, ( ͡o ω ͡o )
        entwy.bowdewboxsize[0].bwocksize, rawr x3
      );
    } e-ewse {
      entwy.tawget.stywe.bowdewwadius = c-cawcbowdewwadius(
        e-entwy.contentwect.width, nyaa~~
        entwy.contentwect.height, /(^•ω•^)
      );
    }
  }
});

wesizeobsewvew.obsewve(document.quewysewectow("div"));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wesizeobsewvew: it's wike document.onwesize f-fow ewements](https://web.dev/awticwes/wesize-obsewvew)
