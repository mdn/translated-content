---
title: Effective connection type (有効接続種別)
slug: Glossary/Effective_connection_type
---

**有効接続種別** (ECT) とは、測定されたネットワーク性能のことで、実際の接続がテザリングされたブロードバンドや WiFi であっても、ブラウザーのページのリクエストの時間とと有効接続種別に基づいて、 3G などの携帯通信接続種別を返します。

観測されたラウンドトリップと下り接続速度の値を使用して、 '`slow-2g`', '`2g`', '`3g`', '`4g`' の値が特定されます。

| ECT       | 最小 [RTT](</ja/docs/Glossary/Round_Trip_Time_(RTT)>) | 最大下り接続 | 説明                                                                         |
| --------- | ----------------------------------------------------- | ------------ | ---------------------------------------------------------------------------- |
| `slow-2g` | 2000ms                                                | 50 Kbps      | テキストのみのページなど、少量の転送のみに適したネットワークです。           |
| `2g`      | 1400ms                                                | 70 Kbps      | このネットワークは小さな画像の転送に向いています。                           |
| `3g`      | 270ms                                                 | 700 Kbps     | 高解像度の画像や音声、標準画質ビデオなどの大容量の資産の転送に適しています。 |
| `4g`      | 0ms                                                   | ∞            | ネットワークは HD ビデオ、リアルタイムビデオなどに適しています。             |

[effectiveType](/ja/docs/Web/API/NetworkInformation/effectiveType) は [Network Information API](/ja/docs/Web/API/Network_Information_API) のプロパティであり、 JavaScript には [navigator.connection](/ja/docs/Web/API/Navigator/connection) オブジェクトから公開されています。有効接続種別を確認するには、対応しているブラウザーで開発者ツールのコンソールを開き、次のように入力してください。

```js
navigator.connection.effectiveType;
```

## See Also

- [Network Information API](/ja/docs/Web/API/Network_Information_API)
- {{domxref('NetworkInformation')}}
- {{domxref('NetworkInformation.effectiveType')}}
