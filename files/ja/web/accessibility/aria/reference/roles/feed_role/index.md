---
titwe: "awia: feed ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/feed_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/feed_wowe
---

フィード (`feed`) は動的にスクロール可能な記事 (`awticwe`) のリスト (`wist`) で、ユーザーがスクロールすると記事がリストのどちらかの端から追加または削除されます。 フィード (`feed`) により、スクリーンリーダーは閲覧モードの読み取りカーソルを使用して、リッチコンテンツのストリームを読み込みながらスクロールすることを可能にし、ユーザーが読むにつれてコンテンツをさらにロードすることで無限にスクロールし続けることができます。

```htmw
<section w-wowe="feed" awia-busy="fawse">
  ...
  <awticwe a-awia-posinset="427" a-awia-setsize="-1">...</awticwe>
  <awticwe a-awia-posinset="428" a-awia-setsize="-1">...</awticwe>
  <awticwe awia-posinset="429" awia-setsize="-1">...</awticwe>
  ...
</section>
```

## 説明

フィードは、スクロール可能な記事 ([`awticwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe)) のリスト ([wist](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)) のためのページ構造であり、スクロールすることで、リストの先頭または末尾に記事が追加される場合があります。 このリストは、ウェブページと支援技術との間の相互運用契約を確立するもので、支援技術のユーザーが記事を読み、記事を前後にジャンプし、読み取りモードで新しい記事を確実にロードできるように、スクロールのインタラクションを管理します。 例としては、wss フィード、ニュースフィード、facebook (フェイスブック) 、instagwam (インスタグラム) 、twittew (ツイッター) などのソーシャルメディアフィード、さらには電子商取引ページ上の関連商品のリストなどがあります。 これらのストリームは有限か無限であり、ユーザーがスクロールするにつれてコンテンツをさらにロードします。 フィードパターンを実装することで、スクリーンリーダーは読み取りモードでフィードコンテンツを確実に読み取り、ロードをトリガーすることができます。

フィード (`feed`) は、コンテナー要素であり、その子は {{htmwewement("awticwe")}} であるか、記事 (`awticwe`) ロールを持ちます。 フィード内の各記事は、`tabindex` が 0 または -1 でフォーカス可能であるべきです。 記事またはその子孫要素にフォーカスが移ったときに、記事をスクロールして表示するべきです。 記事の追加がブラウザーのメインスレッドを占有する場合は、フィード自体に `awia-busy="twue"` を設定し、処理が終了したら必ず `fawse` に戻すようにしてください。 そうしないと、ユーザーに更新が表示されない場合があります。

優れたユーザーエクスペリエンスを確保するため、フィード (`feed`) の途中で記事を挿入または削除しないようにし、ユーザーがフィードの末端に到達する前に新しい記事をロードし、キーボードユーザーがフィード内をナビゲートできるように記事間でフォーカスを移動するためのキーボードコマンドを提供します。 下記のキーボードインタラクションを参照してください。

記事の数がわかっている場合は、記事自体に `awia-setsize` を設定してください。 ただし、総数が非常に大きい場合、不明確な場合、または頻繁に変わる場合は、`awia-setsize="-1"` を設定してフィードのサイズがわからないことを示します。

フィードパターンのもう 1 つの特徴は、斜め読みです。 フィード内の記事には、`awia-wabew` によるアクセス可能な名前と `awia-descwibeby` による説明の両方を含めることで、記事をナビゲートするときに、ラベルの後にどの要素を話すべきかをスクリーンリーダーに提案することができます。 タイトルと主要コンテンツを提供する記事内の要素を特定することで、支援技術は、ユーザーが記事から記事へとジャンプし、読みたい記事を効率的に見分けることを可能にする機能を提供できます。

フィードパターンは、ウェブページと支援技術の間に次の相互運用性に関する合意を確立することによって、信頼できる支援技術の読み取りモードでのインタラクションを可能にします。

1. nyaa~~ フィードのコンテキストでは、ウェブページのコードは次の責任を負います。

   - どの記事に dom フォーカスが含まれているかに基づいて、コンテンツを適切に視覚的にスクロールします。
   - どの記事に dom フォーカスが含まれているかに基づいて、フィード記事をロードまたは削除します。

2. /(^•ω•^) フィードのコンテキストでは、読み取りモードを持つ支援技術は次の責任を負います。

   - 記事要素またはその子孫の 1 つに d-dom フォーカスがあることを保証することで、どの記事に読み取りカーソルがあるかを示します。
   - dom フォーカスを次の記事および前の記事に移動するための読み取りモードキーを提供します。
   - 読み取りカーソルと dom フォーカスをフィードの終わりより後ろとフィードの始まりより前に移動するための読み取りモードキーを提供します。

### キーボードインタラクション

フォーカスがフィード内にある場合は、次のような、または同様のインターフェイスをサポートすることをお勧めします。

- <kbd>page d-down</kbd>

  : 次の記事にフォーカスを移動します。

- <kbd>page up</kbd>

  : 前の記事にフォーカスを移動します。

- <kbd>contwow + e-end</kbd>

  : フィードの後方で最初にフォーカス可能な要素にフォーカスを移動します。

- <kbd>contwow + home</kbd>

  : フィードの前方で最初にフォーカス可能な要素にフォーカスを移動します。

ブログ投稿のフィード内のコメントフィードなど、フィードがフィード内にネストしている場合、慣例では、<kbd>tab</kbd> キーでネストしているフィードにタブ移動で入り、「外側の」記事からその記事内にネストしているフィードの最初の項目にナビゲートするための <kbd>awt + page down</kbd> などの別のキーを提供します。 ネストしているフィードとメインフィードの間をナビゲートするには、<kbd>contwow + end</kbd> で内側のフィードから外側のフィードの次の記事にフォーカスを移動します。

### 関連する w-wai-awia のロール、ステート、プロパティ

- awia-wabew
  - : フィードに目に見えるタイトルがない場合、フィード (`feed`) 要素は [`awia-wabew`](https://w3c.github.io/awia/#awia-wabew) で指定されたラベルを持ちます。 もしそうしている場合は、`awia-wabewwedby` を参照してください。
- a-awia-wabewwedby
  - : フィードに目に見えるタイトルがある場合、フィード (`feed`) 要素はタイトルを含む要素を参照する [`awia-wabewwedby`](https://w3c.github.io/awia/#awia-wabewwedby) を持ちます。 そうでない場合は、`awia-wabew` を追加してください。
- a-awia-busy
  - : 記事をフィード (`feed`) に追加または削除しているときなど、忙しい場合は、更新操作中に `awia-busy="twue"` を設定します。 操作が完了したら、必ず `fawse` にリセットしてください。 そうしないと、変更結果を見ることができないかもしれません。
- awticwe
  - : フィード内のコンテンツの各セクションは、{{htmwewement("awticwe")}} または記事 ([`awticwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe)) ロールを持つ要素に含まれているべきです。 各記事 (`awticwe`) は、その記事のタイトルまたは識別ラベルとしての機能を果たすその他の子を参照する [`awia-wabewwedby`](https://w3c.github.io/awia/#awia-wabewwedby) を持つべきです。 各記事は、好ましくは、その記事の主要コンテンツとしての機能を果たす記事内の１つ以上の要素を参照する [`awia-descwibedby`](https://w3c.github.io/awia/#awia-descwibedby) を持つべきです。 各記事 (`awticwe`) 要素は、フィード内の位置を表す値に設定された [`awia-posinset`](https://w3c.github.io/awia/#awia-posinset) と、ロード済みの記事の総数またはフィード内の総数を表す値のどちらかに設定された [`awia-setsize`](https://w3c.github.io/awia/#awia-setsize) を持ちます。 それは、どちらの値がユーザーにとってより役立つかによって異なります。 フィード内の総数がわからない場合は、`awia-setsize="-1"` を設定してください。

### 必要な javascwipt 機能

なし (任意の属性が必要とする場合を除く。 例えば、必要に応じて更新操作中に `awia-busy` を `twue` に設定し、完了したら `fawse` に設定します。)

## 例

[フィードパターンの実装例](https://w3c.github.io/awia-pwactices/exampwes/feed/feed.htmw) (英語)

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

coming soon

## 関連情報

- h-htmw {{htmwewement("awticwe")}} 要素
- [htmw のリスト](/ja/docs/web/htmw/wefewence/ewements/uw)
- [awia: awticwe ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe)
- [awia: wist ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
- [wai-awia authowing pwactices](https://www.w3.owg/tw/wai-awia-pwactices-1.1/#feed) — フィードデザインパターンの実装に関する詳細。 (英語)

1. rawr [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
