---
title: HTTP クライアントヒント
short-title: クライアントヒント
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**クライアントヒント** (Client hints) は、サーバーがクライアントに積極的にリクエストすることで、端末、ネットワーク、ユーザー、およびユーザーエージェント固有の環境設定に関する情報を取得することができる [HTTP リクエストヘッダー](/ja/docs/Web/HTTP/Reference/Headers) フィールド群です。
サーバーは、クライアントが提供することを選んだ情報に基づいて、送信するリソースを決定することができます。

一連の「ヒント」ヘッダーは、 [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers#クライアントヒント) のトピックに挙げられている他、[下記にもまとめています](#hint_types)。

## 概要

サーバーはクライアントヒントに対応していることを知らせる必要があります。 {{HTTPHeader("Accept-CH")}} を使用して、受信したいヒントを指定します。
クライアントヒントに対応しているクライアントは、`Accept-CH` ヘッダーを受け取ると、列挙されているクライアントヒントヘッダーの一部または全部を、それ以降のリクエストに追加することを選択することができます。

例えば、下記のレスポンスの `Accept-CH` の後で、クライアントは {{HTTPHeader("Width")}}、 {{HTTPHeader("Downlink")}}、{{HTTPHeader("Sec-CH-UA")}} ヘッダーを以降のすべてのリクエストに付加することができます。

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

この手法は、サーバーが有益に処理することができる情報のみをリクエストされるという点で効率的です。
また、どの情報を安全に共有できるかを決めるのはクライアント次第という点で、比較的「プライバシー保護」にもなっています。

リクエストされなかった場合、クライアントイベントによって送信される可能性のある、[低エントロピーのクライアントヒントヘッダー](#低エントロピーヒント)も少しあります。

> [!NOTE]
> クライアントヒントは、 HTML で {{HTMLElement("meta")}} 要素に [`http-equiv`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv) 属性を使用して指定することも可能です。
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## キャッシュとクライアントヒント

レスポンスで送信されるリソースを決定するクライアントヒントは、一般に、影響を受けるレスポンスの {{HTTPHeader("Vary")}} ヘッダーに記載すべきです。
これにより、ヒントヘッダーの値が異なる場合に、それぞれ別のリソースがキャッシュされることが保証されます。

```http
Vary: Accept, Width, ECT
```

値が頻繁に変更されるクライアントヒントヘッダーについては、 {{HTTPHeader("Vary")}} を指定しないか、 他の方法を使用したほうがよいでしょう。これは、リソースを効果的にキャッシュできなくしてしまうからです。( それぞれの固有の値に対して、新しいキャッシュ項目が作成されます)。
これは特に {{HTTPHeader("Downlink")}} や {{HTTPHeader("RTT")}} のようなネットワーククライアントヒントに当てはまります。
詳細な情報は、[HTTP キャッシュ > レスポンスの変化](/ja/docs/Web/HTTP/Guides/Caching#vary) を参照してください。

## ヒントの期限

サーバーは、取得したいクライアントヒントヘッダーを `Accept-CH` レスポンスヘッダーで指定します。
ユーザーエージェントはリクエストされたクライアントヒントヘッダー、または少なくともそのサーバーと共有するサブセットを、現在の閲覧セッションにおけるそれ以降のすべてのリクエストに付加します。

言い換えれば、特定のヒント集合に対するリクエストは、ブラウザーが終了するまで期限切れになりません。

サーバーが受け取りたいクライアントヒントの集合を置き換えるには、 `Accept-CH` レスポンスヘッダーを新しいリストで再送することで行うことができます。
例えば、何もリクエストしないようにするには、空のリストで `Accept-CH` を送ります。

> [!NOTE]
> 特定のオリジンに対して設定されたクライアントヒントは、そのオリジン内の URL に対して {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}} レスポンスヘッダーを送信することでクリアすることもできます。

## 低エントロピーヒント

クライアントヒントは、高エントロピーと低エントロピーのヒントに大別されます。
低エントロピーヒントは、特定のユーザーを[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)（識別）するために使用される可能性がある情報を多くは与えないものです。
これらは、サーバーの `Accept-CH` レスポンスヘッダーに関係なく、権限ポリシーに応じて、すべてのクライアントリクエストで既定で送信される可能性があります。

- {{HTTPHeader("Save-Data")}}
- {{HTTPHeader("Sec-CH-UA")}}
- {{HTTPHeader("Sec-CH-UA-Mobile")}}
- {{HTTPHeader("Sec-CH-UA-Platform")}}

## 高エントロピーヒント

高エントロピーヒントは、ユーザーのフィンガープリンティングに使用される可能性のある、より多くの情報を保持することができるものです。したがって、そのため、提供するかどうかをユーザーエージェントが選択できるような形で制限を設けています。
その決定はユーザーの環境設定、許可リクエスト、または権限ポリシーに基づいて行われる可能性があります。
低エントロピーヒントでないすべてのクライアントヒントは、高エントロピーヒントとみなされます。

## 重要なクライアントヒント

「重要なクライアントヒント」とは、レスポンスを適用することでレンダリングされるページが大きく変化する可能性があるもので、不快感を与えたりユーザビリティに影響を与える可能性があるため、コンテンツがレンダリングされる前に適用する必要があるものです。
例えば、`Sec-CH-Prefers-Reduced-Motion` は一般に重要なヒントとして扱われます。なぜなら、アニメーションの動作に著しく影響を与える可能性があり、この環境設定を選んだユーザーはそれを設定する必要があるためです。

サーバーは {{HTTPHeader("Critical-CH")}} レスポンスヘッダーを `Accept-CH` と共に使用することで、 受け入れられたクライアントヒントが重要なクライアントヒントで もあることを指定することができます（`Critical-CH` のヘッダーは `Accept-CH` にも現れる必要があります）。
`Critical-CH` のレスポンスを受け取ったユーザーエージェントは、示された Crtical ヘッダーが元のリクエストで送信されたかどうかを調べなければなりません。送信されていなかった場合、ユーザーエージェントはページをレンダリングせずに、リクエストを再試行します。
この手法は、重要なクライアントヒントを使用して設定されたクライアント環境設定が、たとえ最初のリクエストに含まれていなかったとしても、あるいはサーバーの設定が変更されたとしても、常に使用されることを保証するものです。

例えばこの例では、サーバーは {{httpheader("Accept-CH")}} によって `Sec-CH-Prefers-Reduced-Motion` を受け入れることをクライアントに指示し、 {{httpheader("Critical-CH")}} は `Sec-CH-Prefers-Reduced-Motion` が重要なクライアントヒントと見なされることを指定するのに使用されます。

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> `Sec-CH-Prefers-Reduced-Motion` も {{httpheader("Vary")}} ヘッダーに指定することで、ブラウザーに対して、 URL は同じであってもこのヘッダー値に基づいて提供するコンテンツが異なるので、ブラウザーはキャッシュされた既存のレスポンスをそのまま使用せず、このレスポンスを別途キャッシュすべきなのだと示しています。 `Critical-CH` ヘッダーに掲載されている各ヘッダーは `Accept-CH` ヘッダーと `Vary` ヘッダーにも存在しなければなりません。

`Sec-CH-Prefers-Reduced-Motion` は元のリクエストにはなかった重要なヒントなので、クライアントは自動的にリクエストを再試行します。今度は `Sec-CH-Prefers-Reduced-Motion` を通じて、動きの少ないアニメーションを好むユーザーであることをサーバーに指示します。

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## ヒントの種類

### ユーザーエージェントクライアントヒント

ユーザーエージェント (UA) クライアントヒントヘッダーを使用すると、サーバーはユーザーエージェント（ブラウザー）、オペレーティングシステム、および端末に基づいてレスポンスを変更することができます。
`Sec-CH-UA-*` ヘッダーの一覧については、[ユーザーエージェントクライアントヒントヘッダー](/ja/docs/Web/HTTP/Reference/Headers#ユーザーエージェントクライアントヒント)を参照してください。

クライアントヒントは、[ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API) を通じて、ウェブページの JavaScript が利用できます。

> [!NOTE]
> サーバーは現在、 {{HTTPHeader("User-Agent")}} ヘッダーを解釈することによって、同じ情報のほとんどを取得することができます。
> 歴史的な理由から、このヘッダーはほとんど無関係な情報、および特定のユーザーを使用されるかもしれない情報を多く格納しています。
> UA クライアントヒントは、望ましい情報を取得するための、より効率的でプライバシーを維持した方法を提供します。
> 最終的にこの古い手法を置き換えることが期待されています。

> [!NOTE]
> ユーザーエージェントのクライアントヒントは、[フェンスフレーム](/ja/docs/Web/API/Fenced_frame_API)では利用できません。これは、クライアントヒントが[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)の委任に依存しており、その委任がデータの漏洩に使用される可能性があるためです。

### ユーザー環境設定メディア特性クライアントヒント

ユーザー環境設定メディア特性クライアントヒントは、配色や動きの縮小などの [CSS メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#media_features)に対するユーザーエージェントの環境設定に基づいて、サーバーがレスポンスを変更することができるようにします。
ヘッダーには {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} などがあります。

### 端末クライアントヒント

端末クライアントヒントは、利用できるメモリーや画面のプロパティなど、端末の特性に応じてサーバーがレスポンスを変化させることができるようにします。
ヘッダーには {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}} などがあります。

### ネットワーククライアントヒント

ネットワーククライアントヒントにより、サーバーはユーザーの選択、ネットワーク帯域、レイテンシーに基づいてレスポンスを変化させることができます。
ヘッダーには {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}} などがあります。

## 関連情報

- [クライアントヒントのヘッダー](/ja/docs/Web/HTTP/Reference/Headers#クライアントヒント)
- [`Vary` HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)（英語）
- [ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API)
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)（英語）
