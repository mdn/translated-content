---
title: テキストフラグメント
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

**テキストフラグメント**は、URL フラグメントの特定の構文を使用することにより、作成者が ID で注釈を付けなくても、ウェブ文書内のテキストの特定の部分に直接リンクできるようにするものです。対応しているブラウザーは、リンクされたテキストに注意を引く方法を自由に選べます。例えば、色の強調表示やページ上のコンテンツへのスクロールなどです。これは、ウェブコンテンツの作成者が、使用可能な ID が存在しなくても、制御下にない他のコンテンツに深くリンクすることができるため有益なものです。さらに、ユーザーが互いに交換するための、より効果的なコンテンツ共有リンクを生成するために使用することもできます。

## 概念と使用方法

歴史的には、ウェブの主要な機能の1つは常に、異なる文書間のリンクを指定して提供する能力でした。これがウェブをウェブたらしめているのです。

- 次のように、文書の URL にリンクすることで、その文書の先頭にリンクすることができます。
  - [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a](/ja/docs/Web/HTML/Reference/Elements/a)
- 次のように、文書の URL にその節の _文書フラグメント_ (ID) を加えたものにリンクすることで、文書の特定の節にリンクすることができます。
  - [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a#ブラウザーの互換性](/ja/docs/Web/HTML/Reference/Elements/a#ブラウザーの互換性)

特定の文書フラグメントにリンクする場合の課題は、リンク先のページの作者が _実際に_ リンクするためのアンカーを配置する必要があることです。上の 2 つ目の例は、{{htmlelement("Heading_Elements", "h2")}} 要素の ID が `ブラウザーの互換性` であるものにリンクしています。

```html
<h2 id="ブラウザーの互換性">
  <a href="#ブラウザーの互換性">ブラウザーの互換性</a>
</h2>
```

ID が変更または削除された場合、文書フラグメントは無視され、リンクはページの先頭にリンクされるだけです。これはグレイスフルデグラデーションの観点からは合理的ですが、リンクの作者がページの作者に頼る必要なく、リンク先を完全に制御することができれば、間違いなく良いことでしょう。

**テキストフラグメント**はこれを実現します。これにより、作者はリンク先のテキストコンテンツを、文書フラグメントではなく、柔軟な様式でリンクすることができます。

## 構文

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

テキストフラグメントは URL フラグメントの一種で、`#` の後に記述されます。理解すべき重要な部分は次のとおりです。

- `:~:`
  - : この一連の文字は「フラグメントディレクティブ」とも呼ばれ、次に来るのが 1 つ以上のユーザーエージェント命令であることをブラウザーに指示します。これは、読み込む際に URL から取り除かれ、作成者のスクリプトが直接操作することはできません。ユーザーエージェント命令はディレクティブとも呼ばれます。
- `text=`
  - : テキストディレクティブです。これはブラウザーにテキストフラグメントを渡し、リンク先文書内のどのテキストにリンクされるかを定義します。
- `textStart`
  - : リンク先テキストの始まりを指定する文字列です。
- `textEnd` {{optional_inline}}
  - : リンク先テキストの終わりを指定する文字列です。
- `prefix-` {{optional_inline}}
  - : 後にハイフンが付く文字列で、リンク先テキストの前に来るべきテキストを指定します。これは、複数の一致するテキストがある場合に、ブラウザーが正しいリンク先テキストを選択するために利用されます。
- `-suffix` {{optional_inline}}
  - : 前にハイフンが付く文字列で、リンク先テキストに続くテキストを指定します。これは、複数の一致するテキストがある場合に、ブラウザーが正しいリンク先テキストを選択するために利用されます。

対応しているブラウザーは、リンク先の文書内で指定したディレクティブと一致する最初のテキストフラグメントまでスクロールし、ハイライト表示します。なお、アンパサンド (`&`) 文字で区切ることで、同じ URL でハイライトする複数のテキストフラグメントを指定することが可能です。

### 使用上の注意

- `textStart`、`textEnd`、`prefix-`、`-suffix` の値は[パーセントエンコード](/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)する必要があります。さらに、[この標準](https://wicg.github.io/scroll-to-text-fragment/#syntax)では、 URL で使用される安全なダッシュ文字 `'-'` についても同様にパーセントエンコード方式でエンコードすることが要求されます。
- 照合時は、大文字小文字を区別しません。
- 個々の `textStart`、`textEnd`、`prefix-`、`-suffix` の文字列は、完全に同じ[ブロックレベル要素](/ja/docs/Glossary/Block-level_content)内に存在する必要がありますが、照合処理全体では複数の要素境界をまたぐことができます。
- セキュリティ上の理由から、この機能を使用してオリジン同士が異なるページにリンクする場合は、リンクを `noopener` コンテキストで開く必要があります。この機能を使用する場合、`rel="noopener"` を {{htmlelement("a")}} 要素に追加する必要があり、 {{domxref("window.open()")}} 呼び出し時には `noopener` を追加する必要があります。
- テキストフラグメントは、完全な（同じページでない）、ユーザー主導のナビゲーションの場合にのみ呼び出されます。
- テキストフラグメントはメインフレームにのみ適用されます。 {{htmlelement("iframe")}} の内部ではテキストは検索されませんし、 `iframe` ナビゲーションではテキストフラグメントは呼び出されません。
- オプトアウトを希望するサイトのために、 Chromium ベースのブラウザーは、ユーザーエージェントがテキストフラグメントを処理しないように送信できる[文書ポリシー](https://wicg.github.io/document-policy/)ヘッダーの値に対応しています。

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> 指定されたテキストフラグメントがリンク先の文書内のどのテキストとも一致しない場合、またはブラウザーがテキストフラグメントに対応していない場合、テキストフラグメント全体が無視され、文書の先頭にリンクされます。

## 例

### textStart によるテキストフラグメント

- [https://example.com/#:~:text=for](https://example.com/#:~:text=for) は、文書中の `for` という最初のテキストにスクロールし強調表示します。
- [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a#:~:text=自然](/ja/docs/Web/HTML/Reference/Elements/a#:~:text=自然) は、文書中の `自然` という最初のテキストにスクロールし強調表示します。
- [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a#:~:text=リンクされた%20URL](/ja/docs/Web/HTML/Reference/Elements/a#:~:text=リンクされた%20URL) は、文書中の `リンクされた URL` という最初のテキストにスクロールし強調表示します。

### textStart と textEnd

- [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a#:~:text=自然言語,ヒント](/ja/docs/Web/HTML/Reference/Elements/a#:~:text=自然言語,ヒント) は、文書中の `自然言語` で始まり `ヒント` で終わる最初のテキストにスクロールし強調表示します。
- [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a#:~:text=リンクされた%20URL,値を定義](/ja/docs/Web/HTML/Reference/Elements/a#:~:text=リンクされた%20URL,値を定義) は、文書中の `リンクされた URL` で始まり `値を定義` で終わる最初のテキストにスクロールし強調表示します。なお、この例ではテキストの強調表示が複数のブロックレベル要素をまたがって行われます。

### prefix- や -suffix の例

- [https://example.com/#:~:text=asking-,for](https://example.com/#:~:text=asking-,for) は、文書中の `for` というテキストのうち 2 番目に出現するテキストにスクロールし強調表示します。
- [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a#:~:text=送信される-,リファラー](/ja/docs/Web/HTML/Reference/Elements/a#:~:text=送信される-,リファラー) は、`送信される` というテキストが直前にある `リファラー` というテキストのうち最初のものにスクロールし強調表示します。これは文書中ので 2 番目の `リファラー` という文字列です。接頭辞がない場合は、最初のものが強調表示されます。
- [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a#:~:text=リンク先の%20URL,-を表示](/ja/docs/Web/HTML/Reference/Elements/a#:~:text=リンク先の%20URL,-を表示) は、`リンク先の URL` というテキストの直後に `を表示` というテキストがある最初のものにスクロールし強調表示します。これは文書中ので 4 番目の `リンク先の URL` という文字列です。接尾辞がない場合は、最初のものが強調表示されます。
- [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,referer,ヘッダー,-は](/ja/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,referer,ヘッダー,-は) は、`Referrer ヘッダー` というテキストのうち、直前に `downgrade:` というテキストがあり、直後に `は` というテキストがあるものにスクロールし強調表示します。この例は、接頭辞/接尾辞を使用して、リンクしたい具体的なテキストインスタンスを絞り込む、より複雑な例を示しています。例えば接頭辞を削除して、何が一致するか試してみてください。

### 複数のテキストフラグメントが付いた URL

アンパサンド (`&`) 文字で区切ることで、同じ URL で強調表示する複数のテキストフラグメントを指定することができます。

- [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a#:~:text=リンクされた&text=扱う](/ja/docs/Web/HTML/Reference/Elements/a#:~:text=リンクされた&text=扱う) は、テキスト文字列 `Causes` および `linked` のうち最初に出現するものにスクロールし強調表示します。
- [https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/a#:~:text=リンク先%20URL,-の&text=非推奨の-,属性,属性](/ja/docs/Web/HTML/Reference/Elements/a#:~:text=リンク先%20URL,-の&text=非推奨の-,属性,属性) は、2 つのテキストにスクロールし強調表示します。
  - `リンク先 URL` という文字列の直後に `の` がある最初のもの。
  - `属性` で始まり `属性` で終わるテキスト文字列で、その直前に `非推奨の` があるもの。

構文を正しく指定したはずなのに、複数のテキストフラグメントがハイライトされない場合、想定していたものとは異なる部分がハイライトされているだけかもしれません。ハイライトされていても、画面の外側に表示されている場合もあります。

### 一致するテキストフラグメントのスタイル付け

ブラウザーは、既定の方法でハイライトされたテキストを、自由にスタイル設定することができます。[CSS 擬似要素モジュールレベル 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) では、{{cssxref("::target-text")}} 擬似要素を定義し、独自のスタイル付けができるようにしています。

例えば、[scroll-to-text デモ](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance)では、次の CSS を使用しています。

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

上記のリンクを対応するブラウザーで開くこと、その効果を確認することができます。

### テキストフラグメントへのプログラムからのアクセス

対応しているブラウザーでは、現在の文書で一致するテキストフラグメントの情報は {{domxref("FragmentDirective")}} オブジェクトで得られ、 {{domxref("Document.fragmentDirective")}} プロパティでアクセスすることができます。

対応するブラウザーの開発ツールで、1 つ以上の一致するテキストフラグメントがあるタブの中で、以下のものを実行してみてください。

```js
document.fragmentDirective;
// 対応していれば、空の FragmentDirective オブジェクトを返す
// それ以外の場合は undefined
```

この機能は、現在は主に機能検出を目的としていますが、将来的には、翻訳ヒントなど他の情報を記載するために展開することができます。

## リファレンス

### API

- {{domxref("FragmentDirective")}}
  - : 現在の文書内の強調表示されたテキストフラグメントを表すオブジェクト。
- {{domxref("Document.fragmentDirective")}}
  - : 現在の文書の {{domxref("FragmentDirective")}} を返す。

### CSS

- {{cssxref("::target-text")}}
  - : 現在の文書内の強調表示されたテキストフラグメントを表します。作成者がテキストフラグメントのスタイル設定をカスタマイズすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Boldly link where no one has linked before: Text Fragments](https://web.dev/articles/text-fragments)
