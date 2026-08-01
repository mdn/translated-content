---
title: サイト間情報漏洩 (XS-Leaks)
slug: Web/Security/Attacks/XS-Leaks
l10n:
  sourceCommit: 81bf621759d3a52fdf737c2d75f186a0073d1406
---

サイト間情報漏洩（XS-Leaks とも呼ばれる）とは、サイト同士が相互にやり取りを行うことを可能にするウェブプラットフォーム API を悪用し、攻撃者のサイトが標的サイトに関する情報、あるいはユーザーと標的サイトとの関係に関する情報を取得してしまう攻撃の一種です。漏洩する情報には、例えば次のようなものが含まれます。

- ユーザーが対象サイトにアクセスしたことがあるかどうか。
- ユーザーが対象サイトにログインしているかどうか。
- サイト上のユーザーの ID は何か。
- ユーザーが最近そのサイトで何を検索したか。

これは、例えば[クロスサイトスクリプティング](/ja/docs/Web/Security/Attacks/XSS)攻撃などと比べると、被害がはるかに小さい問題のように見えるかもしれませんが、それでもユーザーにとって深刻な結果をもたらす可能性があります。例を示します。

- ユーザーは、公開したくないウェブサイト上のアカウントを持つことができる場合があります。この情報が攻撃者に漏洩すると、恐喝や、抑圧的な政府による報復（例えば、特定の医療処置に関する情報を求めているユーザーに対する報復など）にさらされる恐れがあります。
- ユーザーが特定のサイトにアカウントを持っていることを知ると、特にそのユーザー ID が特定できる場合は、その後のフィッシング攻撃の説得力が格段に高まります。

[XSS](/ja/docs/Web/Security/Attacks/XSS)や[クリックジャッキング](/ja/docs/Web/Security/Attacks/Clickjacking)といった他の攻撃とは異なり、サイト間情報漏洩は単一の手法ではありません。これは、ブラウザーがウェブサイト同士を互いに隔離する方法の脆弱性を悪用する、一連の攻撃の総称です。

このガイドでは、すべてのサイト間情報漏洩攻撃とその防御策について説明するつもりはありません。まず、いくつかの攻撃例を紹介し、それらをすることができる共通の基盤的な脆弱性について概要を述べ、多くの既知の攻撃に対して有効な一般的な防御策について説明します。

## サイト間情報漏洩の例

この節では、3 種類のサイト間情報漏洩について説明し、その仕組みを理解してもらうことが目的です。

- [エラーイベントを利用したページ存在情報の漏洩](#エラーイベントを利用したページ存在情報の漏洩): この攻撃では、攻撃者は、ターゲットサイト内の特定のエンドポイントをリソースとして読み込もうとし、{{domxref("HTMLElement/error_event", "error")}} および {{domxref("HTMLElement/load_event", "load")}} イベントを待ち受けすることで、それらのエンドポイントが HTTP エラーコードを返すかどうかを判断することができます。特定のページがログイン済みのユーザーのみが利用できる場合、攻撃者は、ユーザーがターゲットサイトにログインしているかどうかを特定することができます。
- [ウィンドウ参照を使用して行うフレームカウント](#ウィンドウ参照を使用して行うフレームカウント): この攻撃では、攻撃者は、ターゲットサイト内のページを保持している {{domxref("Window", "window")}} オブジェクトへの参照を取得します。例えば、{{domxref("Window.open()", "window.open()")}} の呼び出しの返値として取得される場合などです。これにより、攻撃者はターゲットページ内の {{htmlelement(「iframe」)}} 要素の数を特定することが可能で、その結果、ユーザーがターゲットサイトにログインしているかどうかも判明する可能性があります。
- [CSP によるリダイレクトの漏洩](#csp_によるリダイレクトの漏洩): この攻撃では、攻撃者のページには、標的サイトの特定のページのみの読み込みを許可する[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)が設定されており、攻撃者はそのページの読み込みを試みます。ページの読み込みがブロックされた場合、攻撃者は標的サイトがリクエストをリダイレクトしたことを把握できます。このリダイレクトは、サイトの仕組みによっては、ユーザーがログインしていたか（あるいはログインしていなかったか）を示唆する可能性があります。

これら 3 つの攻撃はいずれも同様の方法で展開されます。攻撃者は、攻撃を実装するページを作成し、例えばメールを送信したり、リンクを含む投稿を共有したりして、ユーザーにそのページにアクセスするよう誘導します。ユーザーがページにアクセスすると、攻撃が自動的に実行されます。

この章の残りの部分では、これら 3 つの攻撃についてもう少し詳しく記述し、その作業方法を具体的に理解していただけるようにします。これら 3 つの攻撃は、ウェブプラットフォームのかなり異なる部分を標的としていますが、その根本的な原因には共通点があります。それは、ブラウザーが、フレーミング、サブリソースの読み込み、新しいウィンドウの開くといった仕組みを通じて、ウェブサイト同士が相互に接続し、やり取りを行うことをどの程度可能にしているかという点です。

> [!NOTE]
> サイト間情報漏洩に関するより詳細な一覧については、[XS-Leaks Wiki](https://xsleaks.dev/) および [OWASP Cross-site Leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html) を参照してください。

### エラーイベントを利用したページ存在情報の漏洩

この攻撃では、攻撃者は、標的サイトの特定のページをリソースとして埋め込もうとした際にエラーが発生するかどうかを確認することで、それらのページが読み込めるかどうかを検査します。もしこれらのページがログイン済みのユーザーにのみ利用できる場合、攻撃者はユーザーがログインしているかどうかを特定できてしまいます。

この攻撃は、ウェブサイトが別のサイトからリソースを読み込む機能に頼っています。例えば、{{htmlelement("script")}} 要素の `src` 属性をそのリソースの URL に設定することで、次のような攻撃が可能になります。

```js
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

その結果、`https://example.org/` というウェブサイトへの HTTP リクエストが送信されます。このリクエストに、サイトがユーザーを識別するために使用するクッキーが含まれており、かつリクエストされたページがログイン済みのユーザーのみが利用できるものである場合、リクエストの成功や失敗によって、ユーザーがログインしているかどうかが判明します。

リクエストが失敗した場合（例えば、サーバーが HTTP {{httpstatus("404")}} ステータスコードを返した場合など）、その要素は {{domxref("HTMLElement.error_event", "error")}} イベントを発生させます。リクエストが成功した場合、その要素は {{domxref("HTMLElement.load_event", "load")}} イベントを発生させます。これらのイベントを待ち受けすることで、攻撃者はユーザーがログインしているかどうかを特定することができます。

```js
const url = "https://example.org/admin";
const script = document.createElement("script");

script.addEventListener("load", (e) => {
  console.log(`${url} exists`);
});

script.addEventListener("error", (e) => {
  console.log(`${url} does not exist`);
});

script.src = url;
document.head.appendChild(script);
```

攻撃者は、`https://example.org/users/my_username` のようなページが存在するかどうかを確認するために、ページを読み込む操作を反復処理することで、ユーザーの ID を突き止めることさえ可能になることがあります。

### ウィンドウ参照を使用して行うフレームカウント

フレームカウント攻撃では、攻撃者はターゲットページに現在読み込まれているフレームの数を探します。これにより、ターゲットサイトの状態に関する情報が漏洩し、攻撃者は、例えば、ユーザーが現在そのサイトにログインしているかどうかなどを知ることになる場合があります。

攻撃者のサイトが、標的となるサイトが含まれている {{domxref("Window")}} オブジェクトへの参照を取得した場合、攻撃者は {{domxref("Window.length", "window.length")}} プロパティを読み取ることで、標的となるサイト内のフレームの数を数えることができます。

攻撃者は、{{domxref("Window.open()", "window.open()")}} を呼び出すことで、`Window` オブジェクトを取得することができます。

```js
const target = window.open("https://example.org");
const frames = target.length;
```

あるいは、攻撃者は標的となるサイトを {{htmlelement("iframe")}} に埋め込み、そのフレームの {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}} プロパティを取得することも可能です。

```html
<iframe src="https://example.org"></iframe>
```

```js
const target = document.querySelector("iframe").contentWindow;
const frames = target.length;
```

### CSP によるリダイレクトの漏洩

ウェブサイトによっては、ユーザーがログインしているかどうか（あるいはサイト上で何らかの特別なステータスを持っているかどうか）に基づいて、サーバーがリクエストをリダイレクトするか否かを決定します。例えば、管理者向けに `https://admin.example.org/` というページを示すサイトがあるとします。ユーザーがログインしていない状態でこのページにアクセスすると、サーバーは `https://login.example.org/` へリダイレクトする場合があります。
つまり、攻撃者が `https://admin.example.org/` を読み込もうとした際にリダイレクトが発生するかどうかを特定できれば、そのユーザーがサイトの管理者であるかどうかを把握できてしまうということです。

ここで説明する攻撃では、攻撃者は[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) 機能を使用して、サイト間リクエストがリダイレクトされたかどうかを検知します。

- まず、ページを作成し、CSP によって {{htmlelement("iframe")}} 要素のみが `https://admin.example.org/` からのコンテンツを受け取ることができるよう管理します。

- 次に、そのページにイベントリスナーを追加し、{{domxref("Document.securitypolicyviolation_event", "securitypolicyviolation")}} イベントを待ち受けします。

- 最後に、{{htmlelement("iframe")}} 要素を作成し、その `src` 属性を `https://admin.example.org/` に設定します。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="frame-src https://admin.example.org/" />
  </head>
  <body>
    <script>
      document.addEventListener("securitypolicyviolation", () => {
        console.log("Page was redirected");
      });
      const frame = document.createElement("iframe");
      document.body.appendChild(frame);
      frame.src = "https://admin.example.org/";
    </script>
  </body>
</html>
```

- ユーザーが管理者としてログインしている場合、`<iframe>` が読み込まれ、ブラウザーは `securitypolicyviolation` を発生させません。
- ユーザーが管理者としてログインしていない場合、サーバーは `https://login.example.org/` にリダイレクトします。この URL は攻撃者の CSP によって許可されていないため、ブラウザーは `<iframe>` をブロックし、`securitypolicyviolation` イベントを発生させ、攻撃者のイベントハンドラーが実行されます。

なお、この攻撃は、対象サイトが [`frame-ancestors`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) などの仕組みを用いて埋め込みを禁止している場合でも有効であることに注意してください。

## サイト間情報漏洩に対する防御策

サイト間情報漏洩は、ウェブサイト同士が相互に対話できるようにするウェブプラットフォームの仕組みを悪用するものです。したがって、サイト間情報漏洩に対する防御策としては、通常、こうしたサイト間の相互作用を無効または制御することで、対象となるウェブサイトを潜在的な攻撃者から隔離することが挙げられます。

サイト間情報漏洩にはさまざまな方法があるため、それらすべてに対処できる単一の防御策は存在しません。しかし、その多くに対処できる対策がいくつかあり、ここではそれらをまとめて紹介します。

### フェッチメタデータ

[フェッチメタデータ](/ja/docs/Web/HTTP/Guides/Fetch_metadata)とは、HTTP リクエストのコンテキストに関する情報を提供する一連の HTTP リクエストヘッダーを指す用語であり、これには以下が含まれます。

- {{httpheader("Sec-Fetch-Site")}}: そのリクエストが、同一オリジン、同一サイト、サイト間のどれであるか。
- {{httpheader("Sec-Fetch-Mode")}}: そのリクエストの {{domxref("Request.mode", "mode")}}。
- {{httpheader("Sec-Fetch-User")}}: そのリクエストがユーザーによるナビゲーションによるものかどうか。
- {{httpheader("Sec-Fetch-Dest")}}: そのリクエストの{{domxref("Request.destination", "出力先")}}。

フェッチメタデータヘッダーは、それ自体では防御手段とはなりませんが、サイト間情報漏洩や、[クロスサイトリクエストフォージェリー (CSRF)](/ja/docs/Web/Security/Attacks/CSRF) 攻撃などのその他の攻撃に使用されるリクエストを拒否するポリシーをサーバーが実装することができます。

例えば、[エラーイベントを利用したページ存在情報の漏洩](#エラーイベントを利用したページ存在情報の漏洩)の攻撃は、攻撃者がサイト間リクエストを行い、対象のページをリソースとして読み込む方法を使用しています。

```js
// 対象内でページをリソースとして読み込もうとする
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

サーバーは、フェッチメタデータを使用すると、以下の [Express](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) のコードのように、これらのリクエストを拒否することができます。

```js
function isAllowed(req) {
  // 同一オリジン、同一サイト、ユーザーによるリクエストを許可する
  const secFetchSite = req.headers["sec-fetch-site"];
  if (
    secFetchSite === "same-origin" ||
    secFetchSite === "same-site" ||
    secFetchSite === "none"
  ) {
    return true;
  }

  // リンクのクリックなど、サイト間ナビゲーションを許可する
  const secFetchMode = req.headers["sec-fetch-mode"];
  if (secFetchMode === "navigate" && req.method === "GET") {
    return true;
  }

  // それ以外はすべて拒否する
  return false;
}

app.get("/admin", (req, res) => {
  res.setHeader("Vary", "sec-fetch-site, sec-fetch-mode");
  if (isAllowed(req)) {
    // ユーザーが管理者である場合は、管理ページで応答する
    getAdminPage(req, res);
  } else {
    res.status(404).send("Not found.");
  }
});
```

攻撃者のリクエストはサイト間であり、ナビゲーションではないため、ユーザーがログインしているかどうかにかかわらず、このサーバーは常にエラーを返します。

なお、{{httpheader("Vary")}} レスポンスヘッダーも送信している点に注意してください。これにより、レスポンスがキャッシュされた場合、使用しているフェッチメタデータヘッダーの値が同一であるリクエストに対してのみ、キャッシュされたレスポンスが返されるようになります。

このようなポリシーは、リソース分離ポリシーと呼ばれます。フェッチメタデータを使用した分離ポリシーの実装についてさらに詳しく知りたい場合は、[フェッチメタデータによるウェブ攻撃からのリソース保護](https://web.dev/articles/fetch-metadata)<sup>(英語)</sup>および[分離ポリシー](https://xsleaks.dev/docs/defenses/isolation-policies/)<sup>(英語)</sup>をご覧ください。

### SameSite クッキー

[`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) クッキー属性は、別のサイトから発信されたリクエストにおいて、そのクッキーが送信されるかどうかを決定します。

`SameSite` の `Lax` 値は、サイト間リクエストにおいて、そのリクエストが最上位のサイト間ナビゲーション（つまり、基本的にはブラウザーのアドレスバーの表示が対象サイトに変更されること）であり、かつ{{glossary("Safe/HTTP", "安全な")}}メソッドを使用している場合にのみ、クッキーが含まれることを意味します（特に、{{httpmethod("POST")}} リクエストは除外されます）。

この方法により、一部のサイト間情報漏洩を防ぐことが可能です。例えば、[エラーイベントを利用したページ存在情報の漏洩](#エラーイベントを利用したページ存在情報の漏洩)の攻撃は、攻撃者がユーザーのセッションクッキーを含むサイト間リソースリクエストを行うことを前提としています。ユーザーのセッションクッキーの `SameSite` を `Lax` に設定すれば、この攻撃を防ぐことができます。なぜなら、クッキーが攻撃者のリクエストに含まれないため、ログインを要求されるページが返されることは一切なくなるからです。

原則として、`SameSite`は多層防御策の一つとして位置づけ、フェッチメタデータに基づくものなど、より明確な隔離ポリシーと併せて展開すべきです。

### フレームの保護

多くのサイト間情報漏洩は、攻撃元サイトがターゲットを {{htmlelement("iframe")}} として埋め込み可能であることに依存しています。例えば、これは攻撃者がターゲットの {{domxref("Window", "window")}} への参照を取得し、[フレームカウント](#ウィンドウ参照を使用して行うフレームカウント)攻撃をすることができる手法の一つです。

つまり、埋め込みをすることができる必要がない限り、サイトが埋め込み可能にならないようにすることが望ましいですし、埋め込みをすることができる場合でも、可能な限りその範囲を制限すべきです。

ここで関連するツールは 2 つあります。

- [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)の [`frame-ancestors` ディレクティブ](/ja/docs/Web/HTTP/Guides/CSP#clickjacking_protection)。
- {{httpheader("X-Frame-Options")}} レスポンスヘッダー。

`frame-ancestors` ディレクティブは、`X-Frame-Options` を置き換えます。[`frame-ancestors` のブラウザーの対応状況は非常に良い](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#ブラウザーの互換性)のですが、Internet Explorer をはじめとするとても古い一部のブラウザーでは、`frame-ancestors` に対応していません。

`frame-ancestors` と `X-Frame-Options` の両方が設定されている場合、`frame-ancestors` に対応しているブラウザーは `X-Frame-Options` を無視します。つまり、`frame-ancestors` に加えて `X-Frame-Options` も設定しておけば、`frame-ancestors` に対応していないブラウザーでも埋め込みを防止できるため、両方を設定しない理由はありません。

### Cross-Origin Opener Policy (COOP)

[フレームカウント](#ウィンドウ参照を使用して行うフレームカウント)攻撃で見たように、ターゲットの {{domxref("Window", "window")}} への参照を取得するもう 1 つの方法は、{{domxref("Window.open()", "window.open()")}} の呼び出しの返値として取得することです。

```js
const target = window.open("https://example.com");
```

{{httpheader("Cross-Origin-Opener-Policy")}} レスポンスヘッダーは、その文書が、それを開いた文書と同じ{{glossary("Browsing context", "閲覧コンテキストグループ")}}内で開かれるかどうかを決定します。

サーバーがこのヘッダーを送信し、その値をデフォルトの `"unsafe-none"` 以外の値に設定している場合、異なるオリジンからの文書が `window.open()` を使用してそのページを開こうとすると、そのページは別の閲覧コンテキストグループに読み込まれます。これにより、とりわけ、呼び出し元は当該ページの `window` オブジェクトへの参照を取得できなくなるため、フレームカウント攻撃にそれを利用することはできなくなります。

## 防衛の要約チェックリスト

サイト間情報漏洩には、ウェブプラットフォームのさまざまな部分を対象とする一連の攻撃が含まれます。これらすべてに対して単一の防御策が有効というわけではありません。また、CSP を悪用してリダイレクト情報を漏洩させるような攻撃など、一部の漏洩に対しては、現時点では有効な防御策が存在しません。

このガイドでは、サイトを潜在的な攻撃者から隔離するのに役立ついくつかの防御策の概要を説明しました。これらすべてを実装することをお勧めします。

- フェッチメタデータを使用して、リソースの分離ポリシーを実装します。
- セッションクッキーの `SameSite` 属性は、可能であれば `Strict` に、やむを得ない場合は `Lax` に設定します。
- CSP の `frame-ancestors` ディレクティブと `X-Frame-Options` レスポンスヘッダーを使用して、サイトの埋め込みを防止するか、どのサイトがそのサイトを埋め込めるかを制御してします。
- `Cross-Origin-Opener-Policy` レスポンスヘッダーを送信し、他のサイトが `window` グローバルオブジェクトにアクセスできないようにします。

## 関連情報

- [XS-Leaks Wiki](https://xsleaks.dev/) (xsleaks.dev)
- [Cross-site leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html) (OWASP)
