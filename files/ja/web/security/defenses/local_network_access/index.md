---
title: ローカルネットワークへのアクセス
slug: Web/Security/Defenses/Local_network_access
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

[**ローカルネットワークへのアクセス**](https://wicg.github.io/local-network-access/) 技術は、ウェブサイトがユーザーのローカルネットワークに対してリクエストを行う機能を制限し、クロスサイトリクエストフォージェリー (CSRF) などの攻撃リスクを軽減します。この記事では、ローカルネットワークへのアクセスの仕組みと、ウェブ開発者がこれに対応するために必要な手順について解説します。

## 背景

サイトがローカルネットワークに対してリクエストを送信したいと思うような状況はいくつかあります。

- トラブルシューティングの際に、ローカル端末にアクセスして診断情報を取得するウェブサイト。
- セットアップ手順中に、設定の詳細情報を提供するためにローカル端末にアクセスするウェブサイト。
- 認証情報を提供するため、またはテスト環境の一環として、ローカルサイト（イントラネットなど）に接続するウェブサイト。

ローカルネットワークへのアクセスを許可するとリスクが伴います。攻撃者は、このようなリクエストを利用して、ルーターやプリンターなどのローカルネットワーク上の端末に対して、特定の種類の[クロスサイトリクエストフォージェリー (CSRF)](/ja/docs/Web/Security/Attacks/CSRF) 攻撃を仕掛ける可能性があります。

一般的な攻撃の手口としては、攻撃者のサイトがユーザーのルーターにアクセスし、DNS 設定を変更しようとするケースが挙げられます。これが成功すると、DNS 問い合わせは攻撃者が指定した DNS サーバーによって解決されることになります。つまり、攻撃者はユーザーを意図するサイト（フィッシングサイトやクリックジャッキングサイトなど）に誘導し、ユーザーの資格情報を盗み出す可能性が生じます。

また、攻撃者はルーターのファームウェアを置き換えて悪意のあるサイトをホストしたり、広告トラフィックを盗み出してそれ以外にも他のサイトにリダイレクトしたりすることも可能です。多くのユーザーがローカル端末のデフォルトの管理パスワードを変更していないという事実が、この種の攻撃を容易にしています。

ローカルネットワークへのアクセスを制限することで、これらのリスクを軽減できます。具体的には、一連の権限確認プロンプトや {{httpheader("Permissions-Policy")}} ディレクティブを通じて、ローカルネットワークへのアクセスを制御します。

## アドレス空間

ローカルネットワークへのアクセスでは、3 つの異なる**アドレス空間**が定義されており、すべてのネットワークアドレスはこれらに分類されます。

- ローカル
  - : ローカルアドレスはローカルネットワーク上でのみアクセス可能です。ネットワークによって対象とする宛先は異なります。例えば、`192.168.0.1` などです。
- ループバック
  - : ループバックアドレスはローカル端末上でのみアクセス可能であり、その対象は端末ごとに異なります。例えば、一般に `localhost` として知られる `127.0.0.1` などです。
- パブリック
  - : パブリックアドレスはインターネット上のどこからでも利用できるものであり、世界中のすべての端末を対象とします。例えば、`104.18.27.120`（`example.com` の IP アドレス）などです。

リクエストの URL がどのアドレス空間に分類されるかによって、ブラウザーはその権限を異なる方法で処理します。

## どの種類のリクエストが影響を受けるのか

ローカルネットワークへのアクセス制限は、以下に適用されます。

- サブリソースへのリクエスト
- {{domxref("Window.fetch", "fetch()")}} リクエスト
- サブフレームのナビゲーション
- [サービスワーカー](/ja/docs/Web/API/Service_Worker_API)。これには、ナビゲート先の {{domxref("WindowClient")}} がサブフレームである場合に {{domxref("WindowClient.navigate()")}} を通じて行われるリクエストも含まれます。
- [WebSockets](/ja/docs/Web/API/WebSockets_API)
- [WebTransport](/ja/docs/Web/API/WebTransport_API)
- [WebRTC](/ja/docs/Web/API/WebRTC_API)

## ローカルネットワークへのアクセス権限

ローカルネットワークアクセス仕様に対応するブラウザーでは、ループバックおよびローカルへのリクエストは、それぞれ `local-network` および `loopback-network` という特定の権限によって制御されます。つまり、ウェブサイトがローカル IP アドレスやループバックアドレスに対してリクエストを送信する場合、あるいはローカルのウェブサイト（イントラネットなど）がループバックアドレスに対してリクエストを送信する場合、ユーザーにはそのリクエストを許可するか拒否するかを尋ねる権限ダイアログが表示されます。

{{domxref("Permissions.query()")}} メソッドを使用すると、権限の状態を調べることができます。例えば、ローカルリクエストが成功するかどうかを確認し、それに応じてユーザーに案内を行う場合などに利用できます。

```js
navigator.permissions.query({ name: "local-network" }).then((result) => {
  if (result !== "granted") {
    adviseUserOnRemediation();
  }
});
```

```js
navigator.permissions.query({ name: "loopback-network" }).then((result) => {
  if (result !== "granted") {
    adviseUserOnRemediation();
  }
});
```

その権限は保護されたコンテキストに限定されています。保護されていないコンテキストでは、すべてのリクエストが失敗します。

## 混在コンテンツの緩和

権限が許可された場合、ローカルネットワークへのリクエストに対する[混在コンテンツ](/ja/docs/Web/Security/Defenses/Mixed_content)のブロックも緩和されます。これは、多くのローカル端末がさまざまな理由で、公的に信頼された TLS 証明書を取得できないため、必要な措置です。例えば、これにより、一般のウェブサイトが、HTTP で動作しているローカルのテストサーバーや端末にアクセスできるようになります。

対応しているブラウザーに対して、混在コンテンツのチェックをスキップするよう明示的に指示するには、新しいリクエストにおいて（{{domxref("Request.Request", "Request()")}} コンストラクターを介して、または {{domxref("Window.fetch", "fetch()")}} メソッド内で直接）、{{domxref("Request.targetAddressSpace")}} プロパティを `local` または `loopback` に設定してください。

例を示します。

```js
const req = new Request("http://localhost:8888", {
  method: "get",
  mode: "cors",
  targetAddressSpace: "loopback",
});

console.log(req.targetAddressSpace);
// loopback
```

URL がパブリックドメインのアドレスであるにもかかわらず、実際には `http://internal.example.com` のようにローカルネットワークのアドレスに解決されてしまう場合、`targetAddressSpace: "loopback"`を設定する必要があります。これを省略すると、HTTPS サイトから HTTP リソースにアクセスしようとするリクエストは、混在コンテンツチェックに失敗します。

プライベート IP リテラル（例えば `192.168.0.1`）や `.local` アドレス（例えば `http://router.local`）などの一部のアドレスについては、ローカルネットワークへのアクセス権限が付与されている場合、混在コンテンツのチェックが緩和されるため、`targetAddressSpace` プロパティを設定する必要はありません。ただし、ローカルネットワークへのアクセス権限が付与されていない場合は、`targetAddressSpace` が設定されているかどうかにかかわらず、混在コンテンツのチェックが引き続き適用されます。

## ローカルネットワークへのアクセス権限ポリシー

{{httpheader('Permissions-Policy/local-network','local-network')}} および {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} ディレクティブを {{httpheader('Permissions-Policy')}} で使用することで、ドキュメント単位でローカルアドレスおよびループバックアドレスへのアクセスを制御できます。

これらのディレクティブのデフォルトの許可リストは `self` です。これは、現在のドキュメントおよび同一オリジン内の埋め込み閲覧コンテキストからのリクエストのみが許可されることを意味します。具体的なオリジンに対するドキュメントレベルでのローカルまたはループバックリクエストを許可するには、HTTP の `Permissions-Policy` ヘッダー内で以下のディレクティブを使用してください。

```http
Permissions-Policy: local-network=("https://example.com")

Permissions-Policy: loopback-network=("https://example.com")
```

または、埋め込み文書の場合は `<iframe>` の [`allow`](/ja/docs/Web/HTML/Reference/Elements/iframe#allow) 属性の中で次のようにします。

```html
<iframe src="https://example.com" allow="local-network"></iframe>

<iframe src="https://example.com" allow="loopback-network"></iframe>
```

埋め込み文書からローカルネットワークへのリクエストが行われた場合、そのリクエストは、埋め込み元文書がローカルネットワークへのアクセス許可をリクエストしたものとみなされ、ユーザーによる権限の決定はすべて、埋め込み元文書のオリジンに関連付けられます。`<iframe>` 内の文書から、同時にローカルネットワークへのリクエストを行う他の文書へ移動する場合、権限ポリシーにおいてそれらのすべてのオリジンを指定する必要があります。

例えば、`https://example.com` から `<iframe>` を経由して `https://example2.com` に移動し、`https://example.com` と `https://example2.com` の両方がローカルネットワークへのアクセス要求を行った場合、次のように両方のオリジンに対して明示的にその権限を委譲する必要があります。

```html
<iframe
  src="https://example.com"
  allow="local-network https://example.com https://example2.com"></iframe>
```

また、`allow="local-network *"` を指定することで、`<iframe>` で読み込まれたすべてのオリジンがローカルネットワークへのリクエストを行うことができるようになります。これは、`<iframe>` が `localhost` へリダイレクトする前に、別のオリジンへ任意のリダイレクトを行う場合（SSO など）に役立ちます。

## `local-network-access` の別名

ローカルネットワークアクセス技術は当初、{{httpheader('Permissions-Policy/local-network-access','local-network-access')}} 権限で指定されており、これを使用してローカルアドレスとループバックアドレスへのネットワークリクエストをまとめて制御していました。この権限は、よりきめ細かな {{httpheader('Permissions-Policy/local-network','local-network')}} および {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} 権限に更新されました。今後はこれらを使用しましょう。

ただし、`local-network-access` 権限は、下位互換性を確保するため、[すでに実装されている場合](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access#ブラウザーの互換性)、`local-network` および `loopback-network` の別名として引き続き対応します。

### `local-network-access` の権限状態

例えば、`local-network-access` の権限の状態を照会する場合は次のようにします。

```js
navigator.permissions.query({ name: "local-network-access" }).then((result) => {
  // ...
});
```

返される結果は、直近の 2 つの権限の状態を組み合わせたものです。`local-network` または `loopback-network` のいずれか一方のみが `prompt` 以外の状態である場合、その値が返されます。いずれかの権限が前回 `denied` であった場合、`local-network-access` 権限も `denied` を返します。以下の表に、考えられるすべての権限の結果をまとめました。

| `local-network` 権限 | `loopback-network` 権限 | `local-network-access` 権限 |
| -------------------- | ----------------------- | --------------------------- |
| `allowed`            | `allowed`               | `allowed`                   |
| `allowed`            | `prompt`                | `allowed`                   |
| `allowed`            | `denied`                | `denied`                    |
| `prompt`             | `allowed`               | `allowed`                   |
| `prompt`             | `prompt`                | `prompt`                    |
| `prompt`             | `denied`                | `denied`                    |
| `denied`             | `allowed`               | `denied`                    |
| `denied`             | `prompt`                | `denied`                    |
| `denied`             | `denied`                | `denied`                    |

### `local-network-access` の権限ポリシー

`local-network-access` に対する権限ポリシーを設定することは、`local-network` と `loopback-network` の両方に同時に権限ポリシーを設定することと同じです。

例えば、ここに示されている `allow` 属性、

```html
<iframe src="https://example.com" allow="local-network-access"></iframe>
```

は次のものと同じです。

```html
<iframe
  src="https://example.com"
  allow="local-network; loopback-network"></iframe>
```

下位互換性を確保するために、`<iframe>` 内で権限ポリシーのすべての形式を許可する必要がある場合は、次のどちらかを指定することができます。

```html
<iframe
  src="https://example.com"
  allow="local-network-access; local-network; loopback-network"></iframe>
```

または

```html
<iframe
  src="https://example.com"
  allow="local-network-access *; local-network *; loopback-network *"></iframe>
```

## 関連情報

- [クロスサイトリクエストフォージェリー (CSRF)](/ja/docs/Web/Security/Attacks/CSRF) 攻撃
- {{httpheader('Permissions-Policy/local-network','local-network')}} および {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{httpheader('Permissions-Policy')}} ディレクティブ
- {{domxref("Request.targetAddressSpace")}}
