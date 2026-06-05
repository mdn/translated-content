---
title: "Document: write() メソッド"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> `document.write()` メソッドの使用は強く避けるべきです。
> 使用を避け、可能であれば既存コード内で置き換えてください。
>
> [HTML 仕様書自体で次のように警告しています](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > このメソッドの挙動はとても特異です。
> > 場合によっては、このメソッドは構文解析の実行中に [HTML パーサー](https://html.spec.whatwg.org/multipage/parsing.html#html-parser)の状態に影響を与え、結果として文書のソースに対応しない DOM を生成することがあります（例えば、書き込まれた文字列が "`<plaintext>`" や "`<!--`" であった場合など）。
> > 他にも、{{domxref("document.open()")}} が呼び出されたかのように、最初に現在のページをクリアしてしまう場合もあります。
> > さらに多くの場合、メソッドは単に無視されるか、例外が発生します。ユーザーエージェントは [このメソッドで挿入された `script` 要素の実行を回避することが明確に許可されています](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention)。
> > さらに悪いことに、このメソッドの正確な動作はネットワークの遅延に依存する場合があり、デバッグがとても難しい失敗につながる可能性があります。これらすべての理由から、このメソッドを使用することは固く推奨されません。
> > したがって、このメソッドを使用することは強く避けるべきです。

> [!WARNING]
> このメソッドは、入力を HTML として構文解析し、DOM に書き込みます。
> このような API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、入力が攻撃者から来たものであれば、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)攻撃の経路となる可能性があります。
>
> このリスクを軽減するには、文字列の代わりに常に {{domxref("TrustedHTML")}} オブジェクトを割り当て、[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)ようにしてください。
> 詳しくは[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) を参照してください。

**`write()`** は {{domxref("Document")}} インターフェイスのメソッドで、1 つ以上の {{domxref("TrustedHTML")}} または文字列の引数を {{domxref("document.open()")}} で開かれた文書ストリームに書き込みます。

## 構文

```js-nolint
write(markup)
write(markup, markup2)
write(markup, markup2, /* …, */ markupN)
```

### 引数

- `markup`, …, `markupN`
  - : 文書に書き出すマークアップの入った {{domxref("TrustedHTML")}} オブジェクトまたは文字列です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : このメソッドが、XML 文書に対して呼び出されたか、パーサーが独自の要素のコンストラクターを実行している最中に呼び出されました。
- `TypeError`
  - : [信頼型が強制されている場合](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)で、かつ {{domxref("TrustedHTML")}} オブジェクトを生成するための[デフォルトのポリシーが定義されていない場合](/ja/docs/Web/API/TrustedTypePolicyFactory/createPolicy#既定のポリシーの作成)に、文字列が引数の 1 つとして渡されました。

## 解説

`document.write()` は、引数として渡されたオブジェクト内のマークアップテキストを、引数が指定された順序で構文解析し、開いている文書のオブジェクトモデル（ドキュメントオブジェクトモデル）に取り込みます。

`document.write()` は文書の**ストリーム**に書き込むため、閉じられた（読み込まれた）文書に対して（先に {{domxref("document.open()")}} を呼び出さずに）`document.write()` を呼び出すと、自動的に {{domxref("document.open()")}} が呼び出され、文書の内容がクリアされてしまいます。

ただし、`document.write()` の呼び出しがインラインの HTML の `<script>` タグ内に埋め込まれている場合、`document.open()` は自動的に呼び出されません。

```html
<script>
  document.write("<h1>メインタイトル</h1>");
</script>
```

`document.write()`（および {{domxref("document.writeln")}}）は、XML や XHTML では使用できません。使用しようとすると、`InvalidStateError` 例外が発生します。
これは、.xhtml ファイル拡張子を持つローカルファイルを開く場合や、`application/xhtml+xml` の MIME タイプで配信される文書の場合に当てはまります。
詳細の情報は、[W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) にあります。

[遅延実行](/ja/docs/Web/HTML/Reference/Elements/script#defer)または [非同期実行](/ja/docs/Web/HTML/Reference/Elements/script#async)のスクリプト内で `document.write()` を使用すると、その呼び出しは無視され、エラーコンソールに「非同期で読み込まれた外部スクリプトからの `document.write()` の呼び出しが無視されました」といったメッセージが表示されます。

Edge のみですが、{{HTMLElement("iframe")}} 内で `document.write()` を複数の回呼び出すと、"SCRIPT70: Permission denied" というエラーが発生します。

### セキュリティの注意事項

このメソッドは、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となり得ます。これは、ユーザーから指定された安全性が保証されていない文字列が、まず無害化されることなく DOM に挿入されてしまうためです。
このメソッドは、一部のブラウザーにおいて、{{HTMLElement("script")}} 要素が挿入された際の実行をブロックする場合がありますが（Chrome については [document.write() への介入](https://developer.chrome.com/blog/removing-document-write/)を参照）、攻撃者が悪意のある JavaScript を実行するために HTML を細工する他の多くの方法に対しては脆弱です。

これらの課題を軽減するには、文字列の代わりに常に {{domxref("TrustedHTML")}} オブジェクトを渡すようにし、CSP の [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブを使用して[信頼型を強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)することで、これらの問題を軽減できます。
これにより、入力は変換関数を通過することになり、挿入される前に入力を[無害化](/ja/docs/Web/Security/Attacks/XSS#無害化)して、潜在的に危険なマークアップ（{{htmlelement("script")}} 要素やイベントハンドラー属性など）を除去することが可能になります。

## 例

### TrustedHTML の書き込み

この例では、[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) を使用して、{{htmlelement("script")}} 要素の HTML 文字列を、文書内に書き込まれる前に無害化しています。

この例では、最初にデフォルトのテキストとボタンが表示されます。
ボタンをクリックすると、現在の文書が開かれ、3 つの HTML 文字列が {{domxref("TrustedHTML")}} インスタンスに変換されて文書に書き込まれ、その後文書が閉じられます。
これにより、例示されているフレーム内の文書が置き換えられ、ボタン用の元々の HTML や更新を行った JavaScript も記載されます。

#### HTML

```html
<p>いくらかの元の文書コンテンツ。</p>
<button id="replace" type="button">文書コンテンツを置き換え</button>
```

#### JavaScript

まず、{{domxref("Window.trustedTypes")}} プロパティを使用してグローバルな {{domxref("TrustedTypePolicyFactory")}} にアクセスし、その {{domxref("TrustedTypePolicyFactory/createPolicy","createPolicy()")}} メソッドを使用して、`"docPolicy"` という名前のポリシーを定義します。

新しいポリシーでは、`write()` メソッドに渡す {{domxref("TrustedHTML")}} オブジェクトを生成するための変換関数 `createHTML()` を定義しています。
このメソッドは、入力文字列に対して何らかの処理を行うことができます。信頼型 API では、入力データをポリシー変換関数に通すことのみが要求されており、変換関数が具体的な処理を行うことは要求されていません。

このメソッドを使用して、{{htmlelement("script")}} タグやイベントハンドラー属性など、安全性が確保されていない可能性のある要素を除去し、入力を[無害化](/ja/docs/Web/Security/Attacks/XSS#無害化)します。
サニタイズは適切な方法で実施するのが難しいため、このプロセスでは通常、[DOMPurify](https://github.com/cure53/DOMPurify) のような信頼できるサードパーティー製ライブラリーが使用されます。

ここでは、説明のために、スクリプトの開始タグおよび終了タグ内の `<` 記号を `&lt;` 文字に置き換える、ごく基本的な「サニタイザー」を実装します。

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

その後、返されたポリシーに対して {{domxref("TrustedTypePolicy.createHTML()")}} メソッドを使用することで、元の入力文字列から {{domxref("TrustedHTML")}} オブジェクトを作成できます。
これらは、ユーザーがボタンをクリックした際に `write()` 関数に渡されます。

```js
const oneInput = "<h1>Out with the old</h1>";
const twoInput = "<p>in with the new!</p>";
const threeInput = "<script>alert('邪悪な企み')<" + "/script>";
const replace = document.querySelector("#replace");

replace.addEventListener("click", () => {
  document.open();
  document.write(
    policy.createHTML(oneInput),
    policy.createHTML(twoInput),
    policy.createHTML(threeInput),
  );
  document.close();
});
```

#### 結果

ボタンを押すと、（この例では）信頼できる HTML 要素が挿入されますが、信頼できない {{htmlelement("script")}} 要素はプレーンテキストとして表示されることにご注目ください。

{{EmbedLiveSample("Writing TrustedHTML")}}

### 文字列の書き込み

これは前の例と同じですが、信頼型が使用も強制もされない点が異なります。
サニタイズされていない文字列を出力しているため、[XSS 攻撃](/ja/docs/Web/Security/Attacks/XSS)の攻撃経路となることがあります。

この例では、最初にデフォルトのテキストとボタンが表示されます。
ボタンがクリックされると、現在の文書が開かれ、3 つの HTML 文字列が文書に書き込まれ、その後文書が閉じられます。
これにより、この例のフレーム内の文書が置き換えられ、ボタンの元の HTML や更新を行った JavaScript も含まれます。

#### HTML

```html
<p>いくらかの元の文書コンテンツ。</p>
<button id="replace" type="button">文書コンテンツを置き換え</button>
```

#### JavaScript

```js
const replace = document.querySelector("#replace");

const oneInput = "<h1>Out with the old</h1>";
const twoInput = "<p>in with the new!</p>";
const threeInput = "<script>alert('邪悪な企み')<" + "/script>";

replace.addEventListener("click", () => {
  document.open();
  document.write(oneInput, twoInput, threeInput);
  document.close();
});
```

#### 結果

ボタンを押すと、すべての HTML 要素が挿入されることにご留意ください。
これには {{htmlelement("script")}} 要素も含まれており、実際のアプリケーションでは、この要素によって悪意のあるコードが実行されていた可能性があります。

{{EmbedLiveSample("Writing strings")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.writeln()")}}
- {{domxref("element.innerHTML")}}
- {{domxref("document.createElement()")}}
- [信頼型 API](/ja/docs/Web/API/Trusted_Types_API)
- [クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)
