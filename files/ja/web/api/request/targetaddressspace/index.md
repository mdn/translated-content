---
title: "Request: targetAddressSpace プロパティ"
short-title: targetAddressSpace
slug: Web/API/Request/targetAddressSpace
l10n:
  sourceCommit: b0db98a5c5a6cc7dbc519c272ab0572f6481afc6
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

**`targetAddressSpace`** は {{DOMxRef("Request")}} インターフェイスの読み取り専用プロパティで、リクエストのターゲットアドレス空間を返します。これにより、そのリクエストがループバック、ローカル、パブリックのどれを意図しているかが示されます。

## 値

列挙値で、以下のいずれかです。

- `local`
  - : このリクエストはローカルアドレス宛てのものであり、ローカルネットワーク上でのみアクセス可能です。その対象はネットワークによって異なります。例えば、`192.168.0.1`などです。
- `loopback`
  - : このリクエストはループバックアドレス宛てのものであり、ローカル端末上でのみアクセス可能です。その対象は端末ごとに異なります。例えば、一般に `localhost` として知られる `127.0.0.1` などです。
- `public`
  - : このリクエストは、インターネット上のどこからでも利用できるアドレス宛てに行われ、その対象は世界中のすべての端末で同じです。例えば、`104.18.27.120`（`example.com` の IP アドレス）などです。
- `unknown`
  - : リクエストに `targetAddressSpace` を設定していませんでした。

## 解説

[ローカルネットワークアクセス](/ja/docs/Web/Security/Defenses/Local_network_access)仕様に対応するブラウザーでは、ループバックリクエストとローカルリクエストは、それぞれ `local-network` および `loopback-network` という特定の権限によって制御されます。このようなリクエストにユーザーの権限を要求することで、ルーターやプリンターなどのローカルネットワーク端末に対する[クロスサイトリクエストフォージェリー (CSRF)](/ja/docs/Web/Security/Attacks/CSRF) 攻撃のリスクを軽減し、サイトがこれらのリクエストを使用してユーザーのローカルネットワークをフィンガープリンティングする可能性を縮小することができます。

これらの権限は、保護されたコンテキストに限定されています。これらの権限が付与されると、ローカルネットワークへのリクエストに対して、[混在コンテンツ](/ja/docs/Web/Security/Defenses/Mixed_content)のブロックがさらに緩和されます。これは、多くのローカル端末が、さまざまな理由で公的に信頼された TLS 証明を取得できないため、必要な措置です。例えば、これにより、公開されているウェブサイトが、HTTP で動作しているローカルのテストサーバーや端末にアクセスできるようになります。

`targetAddressSpace` プロパティを、新しいリクエスト（{{domxref("Request.Request", "Request()")}} コンストラクターで、または {{domxref("Window.fetch", "fetch()")}} メソッド内で直接）で `local` または `loopback` に設定すると、対応するブラウザーでは、混在コンテンツのチェックをスキップするよう明示的に指示します。これは、URL が公開ドメインのアドレスであるものの、実際には `http://internal.example.com` のようにローカルネットワークのアドレスに解決されてしまう場合などに必要となります。

プライベート IP リテラル（例えば `192.168.0.1`）や `.local` アドレス（例えば `http://router.local`）など、一部のアドレスについては、ローカルネットワークへのアクセス権限が付与されている場合、混在コンテンツチェックが緩和されるため、`targetAddressSpace` プロパティを設定する必要はありません。ただし、ローカルネットワークへのアクセス権限が付与されていない場合は、`targetAddressSpace` が設定されているかどうかにかかわらず、混在コンテンツのチェックが引き続き適用されます。

## 例

### 基本的な使い方

```js
const req = new Request("http://localhost:8888", {
  method: "get",
  mode: "cors",
  targetAddressSpace: "loopback",
});

console.log(req.targetAddressSpace);
// loopback

fetch(req);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ローカルネットワークアドレス](/ja/docs/Web/Security/Defenses/Local_network_access)
- {{httpheader("Permissions-Policy/local-network", "local-network")}} 権限ポリシー
- {{httpheader("Permissions-Policy/loopback-network", "loopback-network")}} 権限ポリシー
