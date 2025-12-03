---
title: 無信頼の iframe
slug: Web/HTTP/Guides/IFrame_credentialless
original_slug: Web/Security/IFrame_credentialless
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}{{SeeCompatTable}}

**無信頼の iframe** は、開発者が新しい、一時的なコンテキストを使用して {{htmlelement("iframe")}} でサードパーティ製のリソースを読み込むためのメカニズムを提供します。これは、通常のオリジンのネットワーク、クッキー、ストレージデータにアクセスすることはできません。最上位の文書の寿命を限度とした新しいコンテキストを使用します。結果的に {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) 埋め込みルールを解除することができるので、COEP を設定した文書に、そうでないサードパーティーの文書を埋め込むことができます。

## 問題

例えば、{{jsxref("SharedArrayBuffer")}} や {{domxref("DOMHighResTimeStamp", "high-resolution timers", "", "nocode")}} などの様々なウェブ API の機能が、オリジン間分離を選択しているサイトでのみ使用できます。 これは、このような機能が [Spectre 攻撃](https://spectreattack.com/spectre.pdf)で悪用され、被害者の機密情報がサイドチャネル経由で流出し、攻撃者に捕捉される危険性があるためです。

オリジン間分離を採用するためには、リソースは {{httpheader("Cross-Origin-Opener-Policy")}} の値が `same-origin` （攻撃者からオリジンを保護）、{{httpheader("Cross-Origin-Embedder-Policy")}} が `credentialless` または `require-corp` （被害者からオリジンを保護）で提供する必要があります。後者は、{{httpheader("Cross-Origin-Resource-Policy")}} または[オリジン間リソース共有](/ja/docs/Web/HTTP/Guides/CORS) を用いて明示的に文書を許可していない、資格情報のある別オリジンのあらゆるリソースを文書が読み込むのを防止します。

オリジン間分離の採用を制限する主要な課題は、`Cross-Origin-Embedder-Policy` が再帰的に適用されることです。`Cross-Origin-Embedder-Policy` が設定された文書内の `<iframe>` に読み込まれるサードパーティーのコンテンツは、埋め込みに成功するために `Cross-Origin-Embedder-Policy` を展開している必要があります。これは、サードパーティーのコンテンツ（広告ネットワークコンテンツなど）をアプリに埋め込む開発者にとって、一般的に制御することができないため問題となります。今までは、サードパーティーのコンテンツプロバイダーが `Cross-Origin-Embedder-Policy` を実装するのを待つしかなかったからです。

この問題が、無信頼の iframe で解決できます。

## 解決策 — 無信頼の iframe

`<iframe>` は、[`credentialless`](/ja/docs/Web/HTML/Reference/Elements/iframe#credentialless) 属性を適用するか、同等の DOM プロパティ {{domxref("HTMLIFrameElement.credentialless")}} を `true` を設定して信頼性を確保することができます。

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

Or:

```html
<iframe width="960" height="600"> </iframe>
```

```js
const iframeElem = document.querySelector("iframe");

iframeElem.credentialless = true;
iframeElem.title = "Spectre vulnerability Wikipedia page";
iframeElem.src =
  "https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)";
```

> [!NOTE]
> {{domxref("Window.credentialless")}} プロパティは、`<iframe>` に埋め込まれた文書が、無信頼のコンテキストで実行されているかどうかを調べるために、問い合わせることができます。値が `true` の場合、埋め込まれている `<iframe>` が無信頼であることを意味します。

この結果、無信頼の `<iframe>` 内の文書は、新しい、一時的なコンテキストを使用して読み込まれることになります。それらのコンテキストは、そのオリジンに関連するデータ、例えば[クッキー](/ja/docs/Web/HTTP/Guides/Cookies)や[ローカルストレージ](/ja/docs/Web/API/Window/localStorage)にアクセスすることはできません。無信頼のストレージは、最上位の文書ごとに 1 回設定されるノンス ("number used once") 値で変更されたストレージキーで別個に分割されます。したがって、ある無信頼の `<iframe>` に設定されたクッキーは、同じ最上位の文書の下に埋め込まれた他の同じオリジンの無信頼の `<iframe>` からしかアクセスできなくなります。

ノンスは、同じ最上位文書の子孫であるすべての無信頼の iframe で共有されるが、ユーザーが移動したそれぞれの異なる最上位の文書では異なり、ユーザーが移動した後はもうアクセスできません。無信頼の iframe は異なるページ間でストレージを共有しません。上記のクッキーを返すと、文書を再読み込みした際、異なるコンテキストで無信頼の `<iframe>` が読み込まれるため、前回設定したクッキーはどれも利用できません。

それに加えて、以下のことが言えます。

- 無信頼の iframe で開くためのポップアップは、[`rel="noopener"`](/ja/docs/Web/HTML/Reference/Attributes/rel/noopener) を設定して開かれます。これにより、OAuth ポップアップフローが無信頼の iframe で使用されることを防ぐことができます。
- ブラウザーによる自動入力やパスワード管理機能は、無信頼の `<iframe>` では利用できません。

この結果、無信頼の `<iframe>` に読み込まれた文書は、事実上、ユーザーの機密情報でカスタマイズされていないバニラ版または「公開」版となります。これらの文書からは利用できる機密情報がないため、攻撃者にとって使用することはなく、これらの iframe では Cross-Origin Embedder Policy の要件は削除されます。

## 子 iframe 内の再帰的な無信頼の iframe

`credentialless` が `<iframe>` に設定され、その中に読み込まれた文書内に子 `<iframe>` があった場合、それらの子 `<iframe>` は無信頼の設定を継承する。

## ライブデモ

無信頼の iframe をその場で確認するには [https://anonymous-iframe.glitch.me/](https://anonymous-iframe.glitch.me/) のデモを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{httpheader("Cross-Origin-Opener-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
- {{httpheader("Cross-Origin-Resource-Policy")}}
- [オリジン間リソース共有](/ja/docs/Web/HTTP/Guides/CORS)
- `<iframe>` の [`credentialless`](/ja/docs/Web/HTML/Reference/Elements/iframe#credentialless) 属性
- {{domxref("HTMLIFrameElement.credentialless")}}
