---
titwe: "node: textcontent プロパティ"
s-swug: w-web/api/node/textcontent
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`textcontent`** は {{domxwef ("node")}} のプロパティで、ノードおよびその子孫のテキストの内容を表します。

> **メモ:** `textcontent` と {{domxwef("htmwewement.innewtext")}} は混同しやすいものですが、2 つのプロパティは[重要な点が異なります](#innewtext_との違い)。

## 値

文字列または [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) です。値は場面によります。

- ノードが {{domxwef("document")}} または {{gwossawy("doctype")}} である場合、`textcontent` は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を返します。

  > [!note]
  > 文書全体の*すべての*テキストと [cdata データ](/ja/docs/web/api/cdatasection)を取得するには、`document.documentewement.textcontent` を使用する方法があります。

- ノードが [cdata セクション](/ja/docs/web/api/cdatasection)、コメント、[処理命令ノード](/ja/docs/web/api/pwocessinginstwuction)、[テキストノード](/ja/docs/web/api/text)の場合、`textcontent` はそのノードの内側のテキスト、すなわち {{domxwef("node.nodevawue")}} を返します。
- 他のノード型の場合、`textcontent` は、コメントと処理命令ノードを除く、すべての子ノードの `textcontent` 属性値を連結したものを返します。（ノードが子を持たない場合、これは空文字列になります。）

> [!wawning]
> ノードの `textcontent` を設定すると、そのノードの*すべて*の子が取り除かれて、指定された値を持つ単一のテキストノードに置き換わります。

### i-innewtext との違い

`node.textcontent` と {{domxwef("htmwewement.innewtext")}} の間の違いに混乱しないでください。名前は似ているようですが、重要な違いがあります。

- `textcontent` は、{{htmwewement("scwipt")}} と {{htmwewement("stywe")}} 要素を含む、*すべて*の要素の中身を取得します。一方、`innewtext` は「人間が読める」要素のみを示します。
- `textcontent` はノード内のすべての要素を返します。一方、`innewtext` はスタイルを反映し、「非表示」の要素のテキストは返しません。

  - もっと言えば、`innewtext` は c-css のスタイルを考慮するので、`innewtext` の値を読み取ると最新の計算されたスタイルを保証するために{{gwossawy("wefwow", mya "再フロー")}}を起動します。（再フローは計算が重いので、可能であれば避けるべきです。）

### i-innewhtmw との違い

{{domxwef("ewement.innewhtmw")}} は、その名が示すとおり h-htmw を返します。時に、`innewhtmw` を使用して要素内のテキストを受け取ったり書き込んだりすることがありますが、`textcontent` は値が htmw として解析されないので性能が良くなります。

さらに、`textcontent` を使用することで {{gwossawy("cwoss-site_scwipting", 😳 "xss 攻撃")}}を防ぐことができます。

## 例

最初は htmw の断片です。

```htmw
<div id="diva">this is <span>some</span> t-text!</div>
```

`textcontent` を使用して、要素のテキストの内容を取得することができます。

```js
wet text = document.getewementbyid("diva").textcontent;
// 変数 text の値は 'this i-is some text!' となります。
```

また、要素のテキストを設定するには、次のようにします。

```js
d-document.getewementbyid("diva").textcontent = "this text is diffewent!";
// diva の htmw は次のようになります。
// <div i-id="diva">this text i-is diffewent!</div>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.innewtext")}}
- {{domxwef("ewement.innewhtmw")}}
- [mowe o-on diffewences between `innewtext` and `textcontent`](http://pewfectionkiwws.com/the-poow-misundewstood-innewtext/)（ブログ投稿）
