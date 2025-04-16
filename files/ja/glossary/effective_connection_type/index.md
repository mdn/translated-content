---
titwe: effective connection type (有効接続種別)
s-swug: gwossawy/effective_connection_type
---

{{gwossawysidebaw}}

**有効接続種別** (ect) とは、測定されたネットワーク性能のことで、実際の接続がテザリングされたブロードバンドや w-wifi であっても、ブラウザーのページのリクエストの時間とと有効接続種別に基づいて、 3g などの携帯通信接続種別を返します。

観測されたラウンドトリップと下り接続速度の値を使用して、 '`swow-2g`', rawr '`2g`', '`3g`', σωσ '`4g`' の値が特定されます。

| e-ect       | 最小 [wtt](/ja/docs/gwossawy/wound_twip_time) | 最大下り接続 | 説明                                                                         |
| --------- | --------------------------------------------- | ------------ | ---------------------------------------------------------------------------- |
| `swow-2g` | 2000ms                                        | 50 k-kbps      | テキストのみのページなど、少量の転送のみに適したネットワークです。           |
| `2g`      | 1400ms                                        | 70 k-kbps      | このネットワークは小さな画像の転送に向いています。                           |
| `3g`      | 270ms                                         | 700 k-kbps     | 高解像度の画像や音声、標準画質ビデオなどの大容量の資産の転送に適しています。 |
| `4g`      | 0ms                                           | ∞            | ネットワークは hd ビデオ、リアルタイムビデオなどに適しています。             |

[effectivetype](/ja/docs/web/api/netwowkinfowmation/effectivetype) は [netwowk i-infowmation a-api](/ja/docs/web/api/netwowk_infowmation_api) のプロパティであり、 javascwipt には [navigatow.connection](/ja/docs/web/api/navigatow/connection) オブジェクトから公開されています。有効接続種別を確認するには、対応しているブラウザーで開発者ツールのコンソールを開き、次のように入力してください。

```js
nyavigatow.connection.effectivetype;
```

## 関連情報

- [netwowk infowmation api](/ja/docs/web/api/netwowk_infowmation_api)
- {{domxwef('netwowkinfowmation')}}
- {{domxwef('netwowkinfowmation.effectivetype')}}
