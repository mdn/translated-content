---
title: Client Hints (クライアントヒント)
slug: Web/HTTP/Client_hints
original_slug: Glossary/Client_hints
---

**クライアントヒント** (Client Hints) は、プロアクティブコンテンツネゴシエーション用の [HTTP リクエストヘッダー](/ja/docs/Web/HTTP/Headers)フィールドのセットで、クライアントがデバイスとエージェントに固有の設定のリストを示すことができます。 [クライアントヒント](/ja/docs/Web/HTTP/Headers#Client_hints)により、画像の DPR 解像度の自動ネゴシエーションなどの最適化されたアセットの自動配信が可能になります。

クライアントヒントの使用は自動ではありません。 サーバーはクライアントヒントをサポートしていることを知らせる必要があります。 サーバーは、[`Accept-CH`](https://tools.ietf.org/html/draft-grigorik-http-client-hints-03#section-2.2.1) (クライアントヒントを受け入れる) ヘッダーまたは [`http-equiv`](/ja/docs/Web/HTML/Element/meta#属性) 属性を持つ同等の HTML の meta 要素を使用して、クライアントヒントのサポートを知らせます。

```
Accept-CH: DPR, Width, Viewport-Width, Downlink
```

および/または

```html
<meta http-equiv="Accept-CH" content="DPR, Width, Viewport-Width, Downlink">
```

クライアントが `Accept-CH` ヘッダーを受信すると、サポートしている場合は、知らされたフィールド値と一致するクライアントヒントのヘッダーを追加します。 例えば、上記の Accept-CH の例に基づいて、クライアントは DPR、Width、Viewport-Width、および Downlink のヘッダーを後続のすべてのリクエストに追加できます。 2 番目の例では、サーバーは Accept-CH meta タグを設定することにより、ブラウザーにヒントを提供します。

基本的に、クライアントヒントのヘッダーを使用すると、開発者またはアプリは、デバイスピクセル比、ビューポート幅、ディスプレイ幅など、それ自体に関する情報をサーバーに知らせるようにブラウザーに指示できます。 その後、クライアントはサーバーにクライアントの環境に関する情報を提供でき、サーバーはその情報に基づいて送信するリソースを決定できます。

## 変化するクライアントヒント

異なる[クライアントヒント](/ja/docs/Web/HTTP/Headers#Client_hints)がレスポンスに影響する可能性があることをキャッシュに伝えるには、[`Vary`](/ja/docs/Web/HTTP/Headers/Vary) HTTP ヘッダーを使用する必要があります。

変化するレスポンスの例:

`Vary: Accept, DPR, Width, Viewport-Width, Downlink`

## 関連情報

- [クライアントヒントのヘッダー](/ja/docs/Web/HTTP/Headers#Client_hints)
- [`Vary` HTTP ヘッダー](/ja/docs/Web/HTTP/Headers/Vary)
