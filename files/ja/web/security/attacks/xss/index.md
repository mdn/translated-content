---
title: クロスサイトスクリプティング (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: b07e3b87504a8984cf31d7a735ec373d33a11cd5
---

クロスサイトスクリプティング (XSS) 攻撃とは、攻撃者が標的となるサイトに、あたかもそのサイトの一部であるかのように悪意のあるコードを実行させる攻撃手法です。

## 概要

ウェブブラウザーは、様々なウェブサイトからコードをダウンロードし、ユーザーのコンピューター上で実行します。これらのウェブサイトの中には非常に信頼性の高いものもあり、ユーザーは金融取引や医療相談などの機密性の高い操作にそれらが利用される場合があります。一方、カジュアルなゲームサイトなど、ユーザーがそのような信頼関係を全く持たないサイトも存在します。ブラウザーのセキュリティモデルの基盤は、これらのサイトを互いに分離しておくべきであるという点にあります。つまり、あるサイトからのコードが、別のサイトのオブジェクトや{{glossary("credential", "資格情報")}}にアクセスできないようにすべきです。これは[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)と呼ばれています。

![ブラウザー内の分離された世界における 2 つのサイトの図](same-origin.svg)

XSS 攻撃に成功した場合、攻撃者は標的となるサイトを欺き、あたかも同一オリジンであるかのように、そのサイト自身のコンテキスト内で悪意のあるコードを実行させることで、同一オリジンポリシーを回避することが可能となります。これにより、そのコードはサイトの自身のコードが行えるあらゆる操作を実行できるようになります。例えば次のような操作です。

- サイトの読み込まれたページ上のすべてのコンテンツ、およびローカルストレージ内のあらゆるコンテンツへのアクセスや変更
- ユーザーの資格情報を使用して HTTP リクエストを送信し、ユーザーになりすますことや機密データへのアクセスができるようにする

![標的ウェブサイト上で実行される攻撃者コードの図](xss.svg)

すべての XSS 攻撃は、ウェブサイトが次の 2 つのことを行うことによって発生します。

1. 攻撃者によって作成された可能性のある入力を受け入れること、
2. この入力をサニタイズせずにページに組み込むこと、すなわち、JavaScript として実行可能にならないことを保証しないまま組み込むことです。

## 2 つの XSS の例

この節では、XSS 攻撃に対して脆弱な 2 つのサンプルページについてご説明いたします。

### ブラウザー内のコード挿入

この例では、ユーザーの銀行のウェブサイトが `my-bank.example.com` であると仮定します。ユーザーは通常、このサイトにログインしており、ウェブサイトのコードはユーザーの口座詳細にアクセスし、取引を実行できます。ウェブサイトは、現在のユーザー向けにパーソナライズされたウェルカムメッセージを表示したいと考えています。ウェルカムメッセージは {{htmlelement("Heading_Elements", "heading")}} 要素で表示されます。

```html
<h1 id="welcome"></h1>
```

このページでは、現在のユーザー名を [URL 引数](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#引数)から取得することを前提としております。引数の値を抽出し、その値を用いてパーソナライズされた挨拶メッセージを作成します。

```js
const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const welcome = document.querySelector("#welcome");

welcome.innerHTML = `おかえりなさい、 ${user} さん！`;
```

このページが `https://my-bank.example.com/welcome` から提供されていると仮定します。この脆弱性を悪用するため、攻撃者はユーザーに次のようなリンクを送信します。

```html
<a
  href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
  子猫を無料で譲ります！</a
>
```

ユーザーがリンクをクリックすると、次のようになります。

1. ブラウザーはページを読み込みます。
2. このページは、`user` という名前のURL引数を抽出します。その値は `<img src=x onerror=alert("hello!")>` となります。
3. その後、ページはこの値を `welcome` 要素の `innerHTML` プロパティに割り当てます。これにより、`src` 属性の値が `x` である新しい {{htmlelement("img")}} 要素が生成されます。
4. `src` の値はエラーを生成するため、`onerror` [イベントハンドラープロパティ](/ja/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these)が実行され、攻撃者はページ内でそのコードを実行できるようになります。

この場合、コードは単に警告を表示するだけですが、実際の銀行ウェブサイトでは、攻撃者のコードは銀行自身のフロントエンドコードが行うことができる、あらゆる操作が実行可能となります。

### サーバーへのコード挿入

この例では、検索機能を備えたウェブサイトを考えてみましょう。検索ページの HTML は、次のような構成になる可能性があります。

```html
<h1>検索</h1>

<form action="/results">
  <label for="mySearch">商品を検索:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

ユーザーが検索語句を入力 して "submit" をクリックすると、ブラウザーは "/results" に対してGETリクエストを送信します。この際、検索語句は URL 引数として次のように含められます。

```plain
https://example.org/results?search=bananas
```

サーバーは、ユーザーが検索した内容を示すタイトル付きの検索結果リストを表示します。検索語句は URL 引数から抽出されます。[Express](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) での実装例は以下のようになります。

```js
app.get("/results", (req, res) => {
  const searchQuery = req.query.search;
  const results = getResults(searchQuery); // 実装は見えない
  res.send(`
   <h1>${searchQuery} の検索結果</h1>
   <p>結果はこちらです: ${results}</p>`);
});
```

この脆弱性を悪用するため、攻撃者はユーザーに次のようなリンクを送信します。

```html
<a href="http://example.org/results?search=<img src=x onerror=alert('hello')">
  子猫を無料で譲ります！</a
>
```

ユーザーがリンクをクリックすると、次のようになります。

1. ブラウザ－はサーバーに GET リクエストを送信します。リクエストの URL 引数には悪意のあるコードが含まれています。
2. サーバーは URL 引数の値を抽出し、ページに埋め込みます。
3. サーバーはページをブラウザーへ返します。ブラウザーはそれを実行します。

## XSS 攻撃の仕組み

他の XSS 攻撃と同様に、これらの 2 つの例が可能なのは、当該ウェブサイトが以下の理由によるものです。

1. 攻撃者が作成した可能性のある入力を使用します
2. ページにその入力を含めますが、サニタイズは行いません。

これらの例はいずれも、悪意のある入力に対して同じ攻撃ベクトル（URL 引数）を使用しています。ただし、攻撃者が利用可能な他の攻撃ベクトルも存在します。

例えば、コメント機能付きのブログを考えてみましょう。このような場合、ウェブサイトは次のように動作します。

1. 誰でも {{htmlelement("form")}} 要素を使用してコメントを投稿できるようになります
2. そのコメントをデータベースに格納します
3. ウェブサイトが他のユーザーに提供するページ内にコメントを挿入します。

コメントが適切にサニタイズされていない場合、それらは XSS 攻撃の潜在的な媒介となります。この種の攻撃は保存型または持続型 XSS と呼ばれることもあり、特に深刻な問題です。なぜなら、感染したコンテンツは、そのページにアクセスするすべてのユーザーに対して、アクセスするたびに提供され続けるためです。

### クライアントとサーバーの XSS

この 2 つの例の大きな違いは、悪意のあるコードがウェブサイトのコードベースの異なる部分に注入される点であり、これは各ウェブサイトのアーキテクチャを反映したものです。

クライアントサイドレンダリングを採用するウェブサイト、例えば、{{glossary("SPA", "シングルページアプリ")}}は、{{domxref("document.createElement()")}} などの Web API を用いて、ブラウザー内でページを直接、あるいは React のようなフレームワークを介して間接的に変更します。このプロセスにおいて、XSS インジェクションが発生する可能性があります。最初の例で確認できるのは、まさにこの現象です。悪意のあるコードがブラウザーに挿入されます。これは、ページ内で実行されるスクリプトが URL 引数の値を {{domxref("Element.innerHTML")}} プロパティに割り当てることで発生します。このプロパティはその値を HTML コードとして解釈します。

サーバーサイドレンダリングを採用するウェブサイトでは、Django や Express といったフレームワークを用いて、主にページテンプレートへ値を挿入する形でサーバー上でページを構築します。XSS インジェクションが発生する場合、それはテンプレート処理中のサーバー側で発生します。 2 つ目の例で確認できるのは、まさにこの現象です。Express のコードが URL 引数の値を返す文書へ挿入することで、コードがサーバー側で挿入されるのです。その後、XSS 攻撃コードはブラウザーがページを評価する際に実行されます。

どちらの場合においても、防御の基本的なアプローチは同じであり、これについては次の節で詳しく説明します。ただし、使用する具体的なツールや API は異なります。

## XSS 対策

サイトのページに外部からの入力を取り込む必要がある場合、XSS（クロスサイトスクリプティング）に対する主な防御策は次の 2 つです。

1. 入力が実行可能になることを防ぐため、出力エンコードとサニタイズ処理を使用してください。ブラウザー内でコンテンツをレンダリングする場合、[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) を利用することで、入力がページに組み込まれる前にサニタイズ関数を通過していることを保証できます。
2. [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP) (CSP) を使用して、ブラウザーが実行を許可されるべき JavaScript や CSS リソースを指定します。これはバックアップ防御策です。最初の防御策が失敗し、実行可能な入力がページに混入した場合でも、適切に設定された CSP により、ブラウザーがその実行を阻止します。

### 出力エンコード

出力エンコードとは、入力文字列内の危険な可能性のある文字をエスケープ処理し、HTML などの言語の一部としてではなく、単なるテキストとして扱うようにするプロセスです。

入力内容をテキストとして扱う必要がある場合に適切な選択となります。例えば、ウェブサイトで入力内容をコンテンツに挿入するテンプレートを使用している場合などが該当します。以下のような [Django テンプレート](https://docs.djangoproject.com/en/5.1/ref/templates/language/)の抜粋がその一例です。

```django
<p>\{{ search_term }} の検索結果</p>
```

ほとんどの現代的なテンプレートエンジンは、出力エンコードを自動的に行います。例えば、Django のテンプレートエンジンでは、以下の変換が実行されます。

- `<` は `&lt;` に変換されます

- `>` は `&gt;` に変換されます

- `'` は `&#x27;` に変換されます

- `"` は `&quot;` に変換されます

- `&` は `&amp;` に変換されます

これは、上記の Django テンプレートに `<img src=x onerror=alert('XSS!')>` を渡した場合、`&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` に変換され、以下のテキストとして表示されるということです。

> &lt;img src=x onerror=alert('XSS!')&gt; の検索結果

同様に、React でクライアントサイドレンダリングを行う場合、JSX に埋め込まれた値は自動的にエンコードされます。例えば、次のような JSX コンポーネントを考えてみましょう。

```jsx
import React from "react";

export function App(props) {
  return <div>{props.name} さん、こんにちは!</div>;
}
```

ここで `<img src=x onerror=alert('XSS!')>` を `props.name` に渡すと、次のようにレンダリングされます。

> &lt;img src=x onerror=alert('XSS!')&gt; さん、こんにちは!

XSS 攻撃を防ぐ上で最も重要なのは、堅牢な出力エンコーディングを行う信頼性の高いテンプレートエンジンを使用し、そのドキュメントをよく読み、提供される保護機能に関する注意点や制限事項を理解することです。

#### 文書コンテキスト

たとえ HTML を自動的にエンコードするテンプレートエンジンを使用している場合でも、信頼できないコンテンツをドキュメントのどの位置に含めるかについて注意が必要です。例えば、次のような Django テンプレートがあるとします。

```django
<div>\{{ my_input }}</div>
```

このコンテキストでは、入力は `<div>` タグ内に存在するため、ブラウザーはそれを HTML として評価します。したがって、`my_input` が `<img src=x onerror="alert('XSS')">` のように実行可能コードを定義する HTML である場合に備えて保護する必要があります。Django に組み込まれた出力エンコーディングは、`<` や `>` といった文字を HTML エンティティ `&lt;` や `&gt;` としてエンコードすることで、この攻撃を防ぎます。

ただし、テンプレートが次のようなものであるとします。

```django
<div \{{ my_input }}></div>
```

この場合、ブラウザーは `my_input` 変数を HTML 属性として扱います。Django は引用符をエンコードするため (`"` → `&quot;`, `'` → `&#x27;`)、本体である `onmouseover="alert('XSS')"` は実行されません。
ただし、`onmouseover=alert(1)`（またはバッククォートを使った ``onmouseover=alert(`XSS`)``）のように、引用符で囲まれていない本体は、属性値を引用符で囲むことが必須ではなく、バッククォートはデフォルトでエスケープされないため、実行されます。

ブラウザーは、ウェブページのそれぞれの部分（HTML 要素とそのコンテンツ、HTML 属性、インラインスタイル、インラインスクリプト）を処理するために異なるルールを使用します。入力が補間されるコンテキストによって、必要なエンコーディングの種類は異なります。

ある状況では安全であっても、別の状況では安全でない場合があります。信頼できないコンテンツを含める際の状況を理解し、それに伴う特別な処理を適切に実施することが必要です。

- **HTML のコンテキスト**: ほとんどの HTML 要素のタグ間に挿入された入力（{{htmlelement("style")}} または {{htmlelement("script")}} を除く）は、HTML として解釈されます。テンプレートエンジンによって適用されるエンコーディングは、主にこのコンテキストを対象としています。
- **HTML 属性のコンテキスト**: 入力内容を HTML 属性値として挿入することが、属性によっては安全な場合もあれば、そうでない場合もあります。特に、`onblur` のようなイベントハンドラー属性や、{{htmlelement("iframe")}} 要素の [`src`](/ja/docs/Web/HTML/Reference/Elements/iframe#src) 属性は安全ではありません。

  挿入された属性値のプレースホルダーも引用符で囲むことが重要です。そうしないと、攻撃者が提供された値に追加の安全でない属性を挿入できる可能性があります。例えば、このテンプレートでは挿入された値が引用符で囲まれていません。

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  攻撃者は、`some_id onmouseover=alert(1)` のような入力を使用することで、イベントハンドラー属性を埋め込む攻撃を仕掛ける可能性があります。この攻撃を防ぐには、プレースホルダーを引用符で囲んでください。

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScriptおよびCSSのコンテキスト**： {{htmlelement("script")}} または {{htmlelement("style")}} タグ内に直接入力を行うことは、ほぼ常に安全ではありません。

### サニタイズ

テンプレートエンジンでは通常、開発者が出力エンコードを無効にすることが可能です。これは、開発者が信頼できないコンテンツをテキストではなくHTMLとして挿入したい場合に必要となります。例えば、Django では、[`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/# how-to-turn-it-off) フィルターは出力エンコーディングを無効化し、React では [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) が同様の効果を持ちます。

この場合、コンテンツの安全性を確保するのは開発者の責任であり、適切なサニタイズ処理を行う必要があります。

サニタイズ処理とは、HTML 文字列から安全でない要素（{{htmlelement("script")}} タグやインラインイベントハンドラなど）を除去するプロセスです。出力エンコーディングと同様に、サニタイズ処理は適切に実施するのが難しいため、信頼できるサードパーティ製ライブラリーの利用をお勧めします。[DOMPurify](https://github.com/cure53/DOMPurify) は、[OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization) を含む多くの専門家から推奨されています。

例えば、次のような HTML の文字列があったとします。

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

これを DOMPurify に渡すと、次のような結果が返されます。

```html
<div>
  <img src="x" />
</div>
```

### 信頼型

入力文字列をサニタイズする関数を用意することは一つの手段ですが、コードベース全体で入力文字列のサニタイズが必要な箇所を全て見つけ出すこと自体が、非常に困難な課題となる場合があります。

ブラウザーでクライアントサイドレンダリングを実装する場合、サニタイズされていない信頼できないコンテンツで呼び出すと安全でない Web API が複数存在します。

例えば、以下の API は文字列引数を HTML として解釈し、ページ DOM の更新に使用します。

- {{domxref("Element.innerHTML")}} （React の `dangerouslySetInnerHTML` から内部的に使用されます）
- {{domxref("Element.outerHTML")}}
- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Document.write()")}}

他にも、引数を直接 JavaScript として実行する API があります。

- [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval)
- {{domxref("Window.setTimeout()")}} および {{domxref("Window.setInterval()")}}

[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) により、開発者は入力データがこれらの API に渡される前に常に安全な状態に処理されていることを確認できます。

信頼型の使用を強制する鍵となるのは、CSP の [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブです。このディレクティブが設定されている場合、安全でない API に文字列引数を渡すと例外が発生します。

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // TypeError が発生
```

代わりに、開発者はこれらの API のいずれかに「信頼型」を渡す必要があります。信頼型とは、{{domxref("TrustedTypePolicy")}} オブジェクトによって文字列から作成されるオブジェクトであり、その実装は開発者によって定義されます。例えば、

```js example-good
// DOMPurify ライブラリーを適用して入力文字列をサニタイズし、
// TrustedHTML 値を生成できるポリシーを作成する
const sanitizer = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});

const userInput = "I might be XSS";
const element = document.querySelector("#container");

const trustedHTML = sanitizer.createHTML(userInput);
element.innerHTML = trustedHTML;
```

> [!NOTE]
> 信頼型 API はサニタイズ機能を提供していません。これは、開発者が自分たちが提供するサニタイズ関数が確実に呼び出されることを保証できるフレームワークです。上記の例では、開発者は信頼型フレームワーク内で、HTML シンク用のサニタイザーとして DOMPurify を使用しています。

信頼型 API は、現時点ではクロスブラウザー対応が十分に実現されていませんが、対応が整えば DOM ベースの XSS 攻撃に対する重要な防御手段となるでしょう。

### CSP の配信

出力エンコーディングとサニタイズは、悪意のあるスクリプトがサイトのページに侵入するのを防ぐためのものです。コンテンツセキュリティポリシーの主な機能の一つは、たとえ悪意のあるスクリプトがサイトのページ内に存在しても、その実行を阻止することにあります。つまり、他の防御策が失敗した場合のバックアップとなるのです。

CSP を用いた XSS 対策として推奨されるアプローチは、[厳格な CSP](/ja/docs/Web/HTTP/Guides/CSP#厳格な_csp) です。これは、[ノンス](/ja/docs/Web/HTTP/Guides/CSP#ノンス)または[ハッシュ](/ja/docs/Web/HTTP/Guides/CSP#ハッシュ)を使用して、ブラウザーに対して文書内で期待されるスクリプトを指示します。攻撃者が悪意のある `<script>` 要素を挿入した場合、それらは正しいノンスまたはハッシュを持たないため、ブラウザーは実行しません。さらに、インラインイベントハンドラー、`javascript:` URL、引数を JavaScript として実行する `eval()` のような API など、様々な一般的な XSS 攻撃のベクトルが完全に禁止されます。

## 防衛の要約チェックリスト

- ブラウザーまたはサーバーにおいて、ページへ入力値を挿入する際には、出力エンコーディングを行うテンプレートエンジンを使用しましょう。
- 入力値を挿入するコンテキストを十分に認識し、そのコンテキストにおいて適切な出力エンコーディングが確実に実行されるよう注意しましょう。
- HTML として入力値を含める必要がある場合は、信頼できるライブラリーを使用して入力内容をサニタイズしましょう。ブラウザー上でこれを行う場合は、信頼型フレームワークを使用し、入力内容が確実にサニタイズ関数によって処理されるようにしましょう。
- 厳格な CSP を実装しましょう。

## 関連情報

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) ([owasp.org](https://owasp.org/))
