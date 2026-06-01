---
title: クリックジャック攻撃
slug: Web/Security/Attacks/Clickjacking
l10n:
  sourceCommit: d67650e38cd150ce190e5116355fcb362eb759bd
---

**クリックジャック** (clickjacking) 攻撃は、攻撃者がウェブサイトの利用者をだまして、無意識に対象サイトを操作させるものです。

この攻撃手法では、攻撃者は、ユーザーのアクセス先サイトを {{htmlelement("iframe")}} 要素内に埋め込んだ偽装サイトを作成します。攻撃者のサイトは `<iframe>` を隠し、おとり要素を配置して、重要な操作を呼び出す対象サイト上の要素と同じ場所に現れるようにします。ユーザーがこれらのおとり要素を操作しようとすると、気づかぬうちに対象サイトを操作することになり、意図しない操作をさせられる可能性があります。

## クリックジャックの例

ユーザーの銀行のウェブサイトが `https://my-bank.example.com` であると仮定します。ユーザーは通常、このサイトにログインしたままにしています。分かりやすいように、このサイトにはユーザーの全資金を攻撃者に送金するボタンが配置されたページがあるとしましょう。もちろんこれは非現実的ですが、サイトには機密性の高い操作を実行する要素が含まれている可能性は十分にあります。

![Screenshot of a bank's website, showing a "Transfer all my money?" button.](my-bank.png)

攻撃者は次のものを含むウェブページを作成します。

- ユーザーがクリックしたくなるようなコンテンツが表示された {{htmlelement("button")}} 要素
- 銀行のページを埋め込んだ {{htmlelement("iframe")}} 要素

```html
<button id="fake-button">無料の子猫はこちら！</button>
<iframe width="800" height="200" src="https://my-bank.example.com"></iframe>
```

このページの CSS において、攻撃者は以下のことを行います。

- 例えば、{{cssxref("opacity")}} を 0 に設定するなどして、`<iframe>` を非表示にします
- このボタンが、「全資金を送金しますか？」というボタンと同じ場所になるように配置します。

```css
iframe {
  opacity: 0;
}

#fake-button {
  position: absolute;
  top: 185px;
  left: 90px;
}
```

結果は同様に次のようになります（オーバーレイが見えるように、`<iframe>` の opacity を `0.1` に設定しています）。

![Screenshot of a clickjacking website, showing the bank's website embedded.](attacker.png)

ユーザーが「無料の子猫はこちら！」というリンクをクリックしようとすると、実際には銀行のウェブサイト上の目に見えない「全財産を送金しますか？」というボタンをクリックすることになります。ユーザーがすでにログインしている場合、この操作によって銀行のサーバーに送信されるリクエストには、ユーザーの本物の資格情報が含まれるため、リクエストは成功してしまいます。

## クリックジャック攻撃からの防御

### 埋め込みの制限

クリックジャック攻撃は、攻撃者の偽サイトの中に、対象とするウェブサイトが `<iframe>` タグで埋め込まれていることを前提としています。主な防御策は、この機能を無効にするか、少なくとも制限することです。

ここで、関連するツールが 2 つあります。

- [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)の [`frame-ancestors` ディレクティブ](/ja/docs/Web/HTTP/Guides/CSP#clickjacking_protection)。このディレクティブを使用すると、自分の文書を埋め込むことができる他文書を正確に制御できます。
- {{httpheader("X-Frame-Options")}} レスポンスヘッダー。このヘッダーは制御の精度が低く、埋め込みを完全に無効にするか、[同一オリジン](/ja/docs/Web/Security/Defenses/Same-origin_policy) の文書にのみすることができます。

`frame-ancestors` ディレクティブは、`X-Frame-Options` を置き換えます。`frame-ancestors` と `X-Frame-Options` の両方を設定することで、`frame-ancestors` に対応していないブラウザーでの埋め込みを防止することができます。[`frame-ancestors` のブラウザーの対応状況はとても良好](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#ブラウザーの互換性)であるため、これは大きな懸念事項ではありません。

`frame-ancestors` と `X-Frame-Options` の両方が設定されている場合、`frame-ancestors` に対応しているブラウザーは `X-Frame-Options` を無視します。

### サイト間クッキーの制限

追加の部分的な対策として、サイトではセッションクッキーの [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) クッキー属性を `Lax` または `Strict` に設定する必要があります。最上位文書と {{glossary("Site", "same-site")}} ではない、`<iframe>` 要素などの埋め込みコンテキストからのリクエストには、これらのクッキーが含まれないため、サーバーはそのリクエストをログイン済みユーザーからのものとして扱いません。

## 防御の概要チェックリスト

- 他のサイトによるサイトの `<iframe>` としての埋め込みを防止したり、埋め込みを可能にするサイトを厳格に制御したりするには、CSP ディレクティブの [`frame-ancestors`](/ja/docs/Web/HTTP/Guides/CSP#clickjacking_protection) および HTTP レスポンスヘッダーの {{httpheader("X-Frame-Options")}} を設定してください。

- セッションクッキーの [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 属性は、`Lax` または `Strict` に設定してください。

## 関連情報

- [Clickjacking 防御早見表](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html)<sup>(英語)</sup> - [owasp.org](https://owasp.org/)
