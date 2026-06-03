---
title: Cross-Origin-Opener-Policy (COOP) ヘッダー
short-title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

HTTP の **`Cross-Origin-Opener-Policy`** (COOP) は{{glossary("response header","レスポンスヘッダー")}}で、使用する、ウェブサイトは、{{domxref("Window.open()")}} または新しいページへのナビゲーションによって開かれた新しい最上位文書を、同じ{{glossary("Browsing context","閲覧コンテキストグループ")}} (BCG) で開くか、新しい閲覧コンテキストグループで開くかを制御することができます。

新しい BCG で開くと、新しい文書とその開いた文書間の参照は切断され、新しい文書は開いた文書からプロセス分離される場合があります。
これにより、潜在的な攻撃者が {{domxref("Window.open()")}} を使用して文書を開き、返された値を使用してそのグローバルオブジェクトにアクセスすることを確実に防止し、 [XS-Leaks](https://xsleaks.dev/) と呼ばれるオリジンをまたいだ攻撃を防止します。

また、新しい BCG で文書によって開かれたオブジェクトは、 [`window.opener`](/ja/docs/Web/API/Window/opener) を使用してアクセスできないことも意味します。
これにより、 [`rel=noopener`](/ja/docs/Web/HTML/Reference/Attributes/rel/noopener) （送信ナビゲーションには影響するが、 {{domxref("Window.open()")}} で開かれた文書には影響しない）よりも、ウィンドウへの参照をより細かく制御することができます。

この動作は、新しい文書とその開いた文書の両方のポリシー、および新しい文書がナビゲーションに従って開かれたか、 {{domxref("Window.open()")}} を使用して開かれたかによって異なります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Cross-Origin-Opener-Policy: unsafe-none
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Opener-Policy: noopener-allow-popups
```

### ディレクティブ

- `unsafe-none`
  - : この文書は、その閲覧コンテキストグループを他の文書と共有することを許可しているため、安全ではない可能性があります。
    プロセス分離のために COOP を使用しないように文書をオプトアウトするために使用されます。
    これが既定値です。

    ナビゲーションでは、`unsafe-none` が指定された文書は常に新しい BCG で開かれます。ただし、それ以外の文書にも `unsafe-none` が指定されている（または COOP ディレクティブの値が指定されていない）場合はこの限りではありません。

    `Window.open()` を使用すると、 `unsafe-none` の文書は、それ以外の値を持つ文書を常に新しい BCG で開きます。
    ただし、 `unsafe-none` を持つ文書は、開く側にディレクティブ `same-origin-allow-popups`、`noopener-allow-popups`、`unsafe-none` のいずれかが指定されている場合、同じ BCG 内で開くことができます。
    `same-origin` を持つ文書は、`unsafe-none` を持つ文書を常に新しい BCG で開きます。

- `same-origin`
  - : この文書は、 COOP を使用し、同一オリジンの文書のみが含まれている BCG への読み込みを許可します。
    これは BCG に[オリジン間分離](/ja/docs/Web/API/Window/crossOriginIsolated)を提供するために使用されます。

    `same-origin` が指定された文書は、両方の文書が同じ BCG であり、`same-origin` ディレクティブが指定されている場合にのみ、同じ BCG 内で開くことができます。

- `same-origin-allow-popups`
  - : これは [`same-origin`](#same-origin) ディレクティブと似ていますが、COOP 値が `unsafe-none` の文書は、同じ BCG 内で {{domxref("Window.open()")}} を使用して開くことができる点が異なります。

    このディレクティブは、オリジン間分離の利点が必要であるが、信頼できるオリジン間の文書を開き、その参照を保持する必要がある統合において、`same-origin` 制限を緩和するために使用されます。
    例えば、OAuth や支払いにオリジン間のサービスワーカースクリプトを使用する場合です。

    このディレクティブを持つ文書は、COOP 値が `unsafe-none` の場合、 {{domxref("Window.open()")}} を使用して同じ BCG 内の文書を開くことができます。
    この場合、開く文書が異なるサイトにあるか同じサイトにあるかは問題ではありません。

    それ以外の場合、`same-origin-allow-popups` が指定されている文書は、両方の文書が同じオリジンであり、`same-origin-allow-popups` ディレクティブが指定されている場合にのみ、同じ BCG 内で開くことができます。

- `noopener-allow-popups`
  - : このディレクティブが指定された文書は、`noopener-allow-popups` も指定されている文書から移動して開いた場合を除き、常に新しい BCG で開かれます。
    これは、同じオリジンの文書をプロセス分離して処理する必要がある場合に対応するために使用されます。

    これにより、新しい文書とその開いた文書との接続が切断され、開いた文書の閲覧コンテキストが、開いた文書のオリジンに関係なく、現在の文書で分離されます。
    これにより、開いた文書でスクリプトを実行したり、その逆を行ったりすることができなくなります。これらは、同一オリジンの文書同士であっても同様です。

    ナビゲーションでは、このディレクティブが指定された文書は、同じオリジンであり、`noopener-allow-popups` ディレクティブが指定されていない限り、常に新しい BCG で他の文書を開きます。
    {{domxref("Window.open()")}} を使用すると、このディレクティブを含む文書は、 `unsafe-none` が指定されていない限り、新しい BCG で文書を開きます。この場合、それらが同じサイトにあるか、異なるサイトにあるかは問題ではありません。

## 解説

通常、相互にスクリプトを実行する必要がある同一オリジンおよび信頼されたオリジン間のリソースのみ、同じ閲覧コンテキストグループで開くことを許可するようにポリシーを設定する必要があります。
それ以外のリソースは、自分自身でオリジンを分離したグループに配置する必要があります。

次のセクションでは、プログラムによってナビゲーションまたはウィンドウを開いた場合に、文書が同じ BCG で開かれるか、新しい BCG で開かれるかを示します。

> [!NOTE]
> 仕様では、 {{domxref("Window.open()")}} を使用して開いた文書を、それがポップアップ、タブ、ウィンドウ、その他のコンテキストであるかを問わず、「ポップアップ」という用語で参照しています。

### ナビゲーション

文書間を移動する場合、2 つの文書の「coop ポリシーが一致している」場合は新しい文書は同じ BCG で開かれます。それ以外の場合は新しい BCG で開かれます。

ポリシーは、2 つの文書が両方とも `unsafe-none` ポリシーである場合、またはポリシーが同じで文書が同一オリジンである場合に一致します。

以下の表は、このルールが、さまざまなディレクティブ値に対して、文書が同じ BCG で開かれるか新しい BCG で開かれるかにどのように影響するかを示しています。

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| 開く側 (↓) / 開かれる側 (→) | `unsafe-none` | `same-origin-allow-popups` | `same-origin`            | `noopener-allow-popups`  |
| --------------------------- | ------------- | -------------------------- | ------------------------ | ------------------------ |
| `unsafe-none`               | 同じ          | 新規                       | 新規                     | 新規                     |
| `same-origin-allow-popups`  | 新規          | 同一オリジンであれば同じ   | 新規                     | 新規                     |
| `same-origin`               | 新規          | 新規                       | 同一オリジンであれば同じ | 新規                     |
| `noopener-allow-popups`     | 新規          | 新規                       | 新規                     | 同一オリジンであれば同じ |

### Window.open() で開く場合

`Window.open()` を使用して文書を開く場合、新しい文書は、次のルールに従って新しい BCG で開かれます。ルールは順番に評価されます。

1. 新しい文書に COOP が `noopener-allow-popups` に設定されている場合 => 新しい文書を新しい BCG で開きます
2. 新しい文書で COOP が `unsafe-none` に設定されており、開く文書で COOP が `same-origin-allow-popups` または `noopener-allow-popups` に設定されている場合 => 新しい文書を同じ BCG で開きます
3. 新しい文書と開く文書の [COOP ポリシーが一致](#ナビゲーション)する場合 => 同じ BCG で新しい文書を開きます

以下の表は、さまざまなディレクティブ値に対して、これらのルールが文書を同じ BCG で開くか新しい BCG で開くかにどのように影響するかを示しています。

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| 開く側 (↓) / 開かれる側 (→) | `unsafe-none` | `same-origin-allow-popups` | `same-origin`            | `noopener-allow-popups` |
| --------------------------- | ------------- | -------------------------- | ------------------------ | ----------------------- |
| `unsafe-none`               | 同じ          | 新規                       | 新規                     | 新規                    |
| `same-origin-allow-popups`  | 同じ          | 同一オリジンであれば同じ   | 新規                     | 新規                    |
| `same-origin`               | 新規          | 新規                       | 同一オリジンであれば同じ | 新規                    |
| `noopener-allow-popups`     | 同じ          | 新規                       | 新規                     | 新規                    |

## 例

### オリジン間分離に依存する機能

{{jsxref("SharedArrayBuffer")}} オブジェクトや {{domxref("Performance.now()")}} といった非スロットルタイマーなどの特定の機能は、文書が{{domxref("Window.crossOriginIsolated","オリジン間分離","","nocode")}}されている場合のみ利用できます。

文書内でこれらの機能を使用するには、COOP ヘッダーを `same-origin` に、 {{HTTPHeader("Cross-Origin-Embedder-Policy")}} ヘッダーを `require-corp` （または `credentialless`）に設定する必要があります。さらに、この機能は {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} によってブロックされてはなりません。

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

{{domxref("Window.crossOriginIsolated")}} および {{domxref("WorkerGlobalScope.crossOriginIsolated")}} プロパティを使用すると、文書がオリジン間分離されているかどうか、つまり機能が制限されているかどうかを調べることができます。

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

### 開く側との関係を断ち切る

同じオリジンに 2 つのまったく異なるアプリケーションがある、架空のオリジン `example.com` を考えてみましょう。

- `/chat` にあるチャットアプリケーション。このアプリケーションでは、すべてのユーザーが他のユーザーに連絡してメッセージを送信できます。
- `/passwords` にあるパスワード管理アプリケーション。このアプリケーションには、さまざまなサービスにわたるすべてのユーザーのパスワードが含まれています。

"passwords" アプリケーションの管理者は、その性質上 XSS 攻撃の対象となる領域が広い「chat」アプリケーションから、このアプリケーションが直接スクリプト化されないように確実にしたいと考えています。
これらのアプリケーションを分離する「正しい方法」は、異なるオリジンでホストすることですが、場合によってはそれが実現不可能であり、歴史的、ビジネス、またはブランディング上の理由から、2 つのアプリケーションを単一のオリジンに置かなければならない場合もあります。

`Cross-Origin-Opener-Policy: noopener-allow-popups` ヘッダーを使用すると、文書を開いた文書によってその文書がスクリプト実行されないようにすることができます。

`example.com/passwords` が `noopener-allow-popups` で提供されている場合、 {{domxref("Window.open()")}} によって返される `WindowProxy` は、ウィンドウが閉じられている（{{domxref("Window.closed")}} が `true` である）ことを示します。そのため、開く側はパスワードアプリをスクリプト実行できません。

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // 新しいウィンドウは閉じられるため、スクリプト実行することはできません。
}
```

これだけでは十分なセキュリティ対策とはみなされませんのでご注意ください。
サイトでは、次のことも行う必要があります。

- Fetch Metadata を使用して、ナビゲーションリクエストではない、より機密性の高いアプリへの同一オリジンリクエストをブロックしてください。
- 認証クッキーがすべて `HttpOnly` であることを確認してください。
- 機密性の低いアプリによってルートレベルのサービスワーカーがインストールされていないことを確認してください。
- 機密性の高いアプリ上の `postMessage` または `BroadcastChannel` が、それ以外の同じオリジンを持つアプリに機密情報を公開しないようにしてください。
- パスワードマネージャーの自動入力はオリジンに基づいて適用されるため、ログインページは別個のオリジンで提供されるようにしてください。
- ブラウザーは、機密性の高いアプリを機密性の低いアプリと同じプロセスに割り当て、 Spectre などの攻撃に対して脆弱にする可能性があることを理解してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
