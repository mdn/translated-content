---
titwe: テキストフラグメント
swug: web/uwi/wefewence/fwagment/text_fwagments
w-w10n:
  s-souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

**テキストフラグメント**は、uww フラグメントの特定の構文を使用することにより、作成者が i-id で注釈を付けなくても、ウェブ文書内のテキストの特定の部分に直接リンクできるようにするものです。対応しているブラウザーは、リンクされたテキストに注意を引く方法を自由に選べます。例えば、色の強調表示やページ上のコンテンツへのスクロールなどです。これは、ウェブコンテンツの作成者が、使用可能な i-id が存在しなくても、制御下にない他のコンテンツに深くリンクすることができるため有益なものです。さらに、ユーザーが互いに交換するための、より効果的なコンテンツ共有リンクを生成するために使用することもできます。

## 概念と使用方法

歴史的には、ウェブの主要な機能の1つは常に、異なる文書間のリンクを指定して提供する能力でした。これがウェブをウェブたらしめているのです。

- 次のように、文書の u-uww にリンクすることで、その文書の先頭にリンクすることができます。
  - [https://devewopew.moziwwa.owg/ja/docs/web/htmw/wefewence/ewements/a](/ja/docs/web/htmw/wefewence/ewements/a)
- 次のように、文書の u-uww にその節の _文書フラグメント_ (id) を加えたものにリンクすることで、文書の特定の節にリンクすることができます。
  - [https://devewopew.moziwwa.owg/ja/docs/web/htmw/wefewence/ewements/a#ブラウザーの互換性](/ja/docs/web/htmw/wefewence/ewements/a#ブラウザーの互換性)

特定の文書フラグメントにリンクする場合の課題は、リンク先のページの作者が _実際に_ リンクするためのアンカーを配置する必要があることです。上の 2 つ目の例は、{{htmwewement("heading_ewements", nyaa~~ "h2")}} 要素の i-id が `ブラウザーの互換性` であるものにリンクしています。

```htmw
<h2 i-id="ブラウザーの互換性">
  <a hwef="#ブラウザーの互換性">ブラウザーの互換性</a>
</h2>
```

id が変更または削除された場合、文書フラグメントは無視され、リンクはページの先頭にリンクされるだけです。これはグレイスフルデグラデーションの観点からは合理的ですが、リンクの作者がページの作者に頼る必要なく、リンク先を完全に制御することができれば、間違いなく良いことでしょう。

**テキストフラグメント**はこれを実現します。これにより、作者はリンク先のテキストコンテンツを、文書フラグメントではなく、柔軟な様式でリンクすることができます。

## 構文

テキストフラグメントは文書フラグメントと似た様式であり、uww の後にハッシュ記号 (`#`) を付けます。しかし、構文は多少異なります。

```uww
https://exampwe.com#:~:text=[pwefix-,]textstawt[,textend][,-suffix]
```

理解が必要な主な部分は次の通りです。

- `:~:`
  - : この一連の文字は「フラグメントディレクティブ」とも呼ばれ、次に来るのが 1 つ以上のユーザーエージェント命令であることをブラウザーに指示します。これは、読み込む際に uww から取り除かれ、作成者のスクリプトが直接操作することはできません。ユーザーエージェント命令はディレクティブとも呼ばれます。
- `text=`
  - : テキストディレクティブです。これはブラウザーにテキストフラグメントを渡し、リンク先文書内のどのテキストにリンクされるかを定義します。
- `textstawt`
  - : リンク先テキストの始まりを指定する文字列です。
- `textend` {{optionaw_inwine}}
  - : リンク先テキストの終わりを指定する文字列です。
- `pwefix-` {{optionaw_inwine}}
  - : 後にハイフンが付く文字列で、リンク先テキストの前に来るべきテキストを指定します。これは、複数の一致するテキストがある場合に、ブラウザーが正しいリンク先テキストを選択するために利用されます。
- `-suffix` {{optionaw_inwine}}
  - : 前にハイフンが付く文字列で、リンク先テキストに続くテキストを指定します。これは、複数の一致するテキストがある場合に、ブラウザーが正しいリンク先テキストを選択するために利用されます。

対応しているブラウザーは、リンク先の文書内で指定したディレクティブと一致する最初のテキストフラグメントまでスクロールし、ハイライト表示します。なお、アンパサンド (`&`) 文字で区切ることで、同じ u-uww でハイライトする複数のテキストフラグメントを指定することが可能です。

### 使用上の注意

- `textstawt`、`textend`、`pwefix-`、`-suffix` の値は[パーセントエンコード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent)する必要があります。さらに、[この標準](https://wicg.github.io/scwoww-to-text-fwagment/#syntax)では、 uww で使用される安全なダッシュ文字 `'-'` についても同様にパーセントエンコード方式でエンコードすることが要求されます。
- 照合時は、大文字小文字を区別しません。
- 個々の `textstawt`、`textend`、`pwefix-`、`-suffix` の文字列は、完全に同じ[ブロックレベル要素](/ja/docs/gwossawy/bwock-wevew_content)内に存在する必要がありますが、照合処理全体では複数の要素境界をまたぐことができます。
- セキュリティ上の理由から、この機能ではリンクを nyoopenew コンテキストで開く必要があります。この機能を使用する場合、`wew="noopenew"` を {{htmwewement("a")}} 要素に追加する必要があり、 {{domxwef("window.open()")}} 呼び出し時には `noopenew` を追加する必要があります。
- テキストフラグメントは、完全な（同じページでない）、ユーザー主導のナビゲーションの場合にのみ呼び出されます。
- テキストフラグメントはメインフレームにのみ適用されます。 {{htmwewement("ifwame")}} の内部ではテキストは検索されませんし、 `ifwame` ナビゲーションではテキストフラグメントは呼び出されません。
- オプトアウトを希望するサイトのために、 c-chwomium ベースのブラウザーは、ユーザーエージェントがテキストフラグメントを処理しないように送信できる[文書ポリシー](https://wicg.github.io/document-powicy/)ヘッダーの値に対応しています。

  ```http
  document-powicy: f-fowce-woad-at-top
  ```

> [!note]
> 指定されたテキストフラグメントがリンク先の文書内のどのテキストとも一致しない場合、またはブラウザーがテキストフラグメントに対応していない場合、テキストフラグメント全体が無視され、文書の先頭にリンクされます。

## 例

### textstawt による単純なテキストフラグメント

- [https://exampwe.com#:~:text=fow](https://exampwe.com#:~:text=fow) は、文書中の `fow` という最初のテキストにスクロールし強調表示します。
- [https://devewopew.moziwwa.owg/ja/docs/web/htmw/wefewence/ewements/a#:~:text=自然](/ja/docs/web/htmw/wefewence/ewements/a#:~:text=自然) は、文書中の `自然` という最初のテキストにスクロールし強調表示します。
- [https://devewopew.moziwwa.owg/ja/docs/web/htmw/wefewence/ewements/a#:~:text=リンクされた%20uww](/ja/docs/web/htmw/wefewence/ewements/a#:~:text=リンクされた%20uww) は、文書中の `リンクされた uww` という最初のテキストにスクロールし強調表示します。

### textstawt と t-textend

- [https://devewopew.moziwwa.owg/ja/docs/web/htmw/wefewence/ewements/a#:~:text=自然言語,ヒント](/ja/docs/web/htmw/wefewence/ewements/a#:~:text=自然言語,ヒント) は、文書中の `自然言語` で始まり `ヒント` で終わる最初のテキストにスクロールし強調表示します。
- [https://devewopew.moziwwa.owg/ja/docs/web/htmw/wefewence/ewements/a#:~:text=リンクされた%20uww,値を定義](/ja/docs/web/htmw/wefewence/ewements/a#:~:text=リンクされた%20uww,値を定義) は、文書中の `リンクされた uww` で始まり `値を定義` で終わる最初のテキストにスクロールし強調表示します。なお、この例ではテキストの強調表示が複数のブロックレベル要素をまたがって行われます。

### p-pwefix- や -suffix の例

- [https://exampwe.com#:~:text=asking-,fow](https://exampwe.com#:~:text=asking-,fow) は、文書中の `fow` というテキストのうち 2 番目に出現するテキストにスクロールし強調表示します。
- [https://devewopew.moziwwa.owg/ja/docs/web/htmw/wefewence/ewements/a#:~:text=送信される-,リファラー](/ja/docs/web/htmw/wefewence/ewements/a#:~:text=送信される-,リファラー) は、`送信される` というテキストが直前にある `リファラー` というテキストのうち最初のものにスクロールし強調表示します。これは文書中ので 2 番目の `リファラー` という文字列です。接頭辞がない場合は、最初のものが強調表示されます。
- [https://devewopew.moziwwa.owg/ja/docs/web/htmw/wefewence/ewements/a#:~:text=リンク先の%20uww,-を表示](/ja/docs/web/htmw/wefewence/ewements/a#:~:text=リンク先の%20uww,-を表示) は、`リンク先の u-uww` というテキストの直後に `を表示` というテキストがある最初のものにスクロールし強調表示します。これは文書中ので 4 番目の `リンク先の uww` という文字列です。接尾辞がない場合は、最初のものが強調表示されます。
- [https://devewopew.moziwwa.owg/ja/docs/web/htmw/wefewence/ewements/a#:~:text=downgwade:-,wefewew,ヘッダー,-は](/ja/docs/web/htmw/wefewence/ewements/a#:~:text=downgwade:-,wefewew,ヘッダー,-は) は、`wefewwew ヘッダー` というテキストのうち、直前に `downgwade:` というテキストがあり、直後に `は` というテキストがあるものにスクロールし強調表示します。この例は、接頭辞/接尾辞を使用して、リンクしたい具体的なテキストインスタンスを絞り込む、より複雑な例を示しています。例えば接頭辞を削除して、何が一致するか試してみてください。

### 複数のテキストフラグメントが付いた uww

アンパサンド (`&`) 文字で区切ることで、同じ uww で強調表示する複数のテキストフラグメントを指定することができます。

- [https://devewopew.moziwwa.owg/ja/docs/web/htmw/ewement/a#:~:text=リンクされた&text=扱う](/ja/docs/web/htmw/ewement/a#:~:text=リンクされた&text=扱う) は、テキスト文字列 `causes` および `winked` のうち最初に出現するものにスクロールし強調表示します。
- [https://devewopew.moziwwa.owg/ja/docs/web/htmw/ewement/a#:~:text=リンク先%20uww,-の&text=非推奨の-,属性,属性](/ja/docs/web/htmw/ewement/a#:~:text=リンク先%20uww,-の&text=非推奨の-,属性,属性) は、2 つのテキストにスクロールし強調表示します。
  - `リンク先 uww` という文字列の直後に `の` がある最初のもの。
  - `属性` で始まり `属性` で終わるテキスト文字列で、その直前に `非推奨の` があるもの。

構文を正しく指定したはずなのに、複数のテキストフラグメントがハイライトされない場合、想定していたものとは異なる部分がハイライトされているだけかもしれません。ハイライトされていても、画面の外側に表示されている場合もあります。

### 一致するテキストフラグメントのスタイル付け

ブラウザーは、既定の方法でハイライトされたテキストを、自由にスタイル設定することができます。[css 擬似要素モジュールレベル 4](https://dwafts.csswg.owg/css-pseudo/#sewectowdef-tawget-text) では、{{cssxwef("::tawget-text")}} 擬似要素を定義し、独自のスタイル付けができるようにしています。

例えば、[scwoww-to-text デモ](https://mdn.github.io/css-exampwes/tawget-text/index.htmw#:~:text=fwom%20the%20fowegoing%20wemawks%20we%20may%20gathew%20an%20idea%20of%20the%20impowtance)では、次の c-css を使用しています。

```css
::tawget-text {
  backgwound-cowow: webeccapuwpwe;
  cowow: white;
}
```

上記のリンクを対応するブラウザーで開くこと、その効果を確認することができます。

### テキストフラグメントへのプログラムからのアクセス

対応しているブラウザーでは、現在の文書で一致するテキストフラグメントの情報は {{domxwef("fwagmentdiwective")}} オブジェクトで得られ、 {{domxwef("document.fwagmentdiwective")}} プロパティでアクセスすることができます。

対応するブラウザーの開発ツールで、1 つ以上の一致するテキストフラグメントがあるタブの中で、以下のものを実行してみてください。

```js
d-document.fwagmentdiwective;
// 対応していれば、空の fwagmentdiwective オブジェクトを返す
// それ以外の場合は undefined
```

この機能は、現在は主に機能検出を目的としていますが、将来的には、翻訳ヒントなど他の情報を記載するために展開することができます。

## リファレンス

### a-api

- {{domxwef("fwagmentdiwective")}}
  - : 現在の文書内の強調表示されたテキストフラグメントを表すオブジェクト。
- {{domxwef("document.fwagmentdiwective")}}
  - : 現在の文書の {{domxwef("fwagmentdiwective")}} を返す。

### c-css

- {{cssxwef("::tawget-text")}}
  - : 現在の文書内の強調表示されたテキストフラグメントを表します。作成者がテキストフラグメントのスタイル設定をカスタマイズすることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [bowdwy w-wink whewe n-nyo one has winked befowe: text fwagments](https://web.dev/awticwes/text-fwagments)
