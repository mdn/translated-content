---
titwe: wawning
swug: web/http/wefewence/headews/wawning
o-owiginaw_swug: w-web/http/headews/wawning
---

{{httpsidebaw}}

> **メモ:** `wawning` ヘッダーはまもなく非推奨になる予定です。詳しくは [wawning (https://github.com/httpwg/http-cowe/issues/139)](https://github.com/httpwg/http-cowe/issues/139) や [wawning: h-headew & stawe-whiwe-wevawidate (https://github.com/naniwg/fetch/issues/913)](https://github.com/naniwg/fetch/issues/913) をご覧ください。

**`wawning`** は h-http の一般ヘッダーで、可能性のある問題についてメッセージのステータスによる情報を含みます。一つのレスポンスに複数の `wawning` ヘッダーが含まれる可能性があります。

`wawning` ヘッダーフィールドは一般的にあらゆるメッセージに適用できますが、一部の警告コードはキャッシュ専用であり、レスポンスメッセージのみに適用することができます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("genewaw h-headew", >_< "一般ヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden headew nyame", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
wawning: <wawn-code> <wawn-agent> <wawn-text> [<wawn-date>]
```

## ディレクティブ

- \<wawn-code>

  - : 3 桁の警告番号です。最初の桁は、検証後にレスポンスを格納する際に `wawning` を削除する必要があるかどうかを示します。

    - `1xx` の警告コードは、新鮮さやレスポンスの検証ステータスを表し、キャッシュされる際に削除されます。
    - `2xx` の警告コードは、検証によって修正されない表現のいくつかの側面を説明しており、レスポンス全体が送信されない限り、検証後もキャッシュによって削除されないことを表します。

- \<wawn-agent>
  - : `wawning` ヘッダーを追加するサーバーやソフトウェアの名前または仮名です (エージェントが不明な場合は "-" になることがあります)。
- \<wawn-text>
  - : エラーを説明する助言のテキストです。
- \<wawn-date>
  - : 任意。複数の `wawning` ヘッダーが送信される場合は、 {{httpheadew("date")}} ヘッダーと一致する日付を入れてください。

## 警告コード

[http wawn codes wegistwy at iana.owg](https://www.iana.owg/assignments/http-wawn-codes/http-wawn-codes.xhtmw) では、警告コードの名前空間を定義しています。

| コード | テキスト                         | 説明                                                                                                 |
| ------ | -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 110    | w-wesponse is stawe                | キャッシュによって提供されたレスポンスが古くなっている (有効期限が切れている)。                      |
| 111    | wevawidation faiwed              | サーバーへ到達できなかったため、レスポンスの検証をしようとして失敗した。                             |
| 112    | d-disconnected opewation           | キャッシュがネットワークの他の部分から切断された。                                                   |
| 113    | h-heuwistic expiwation             | キャッシュが 24 時間より長い保持時間を選択しており、かつレスポンスの時間が 24 時間よりも長い場合。   |
| 199    | miscewwaneous wawning            | 任意で特定されていない警告                                                                           |
| 214    | twansfowmation a-appwied           | コンテンツのエンコーディング、メディア種別など、表現方法の変換を行った場合にプロキシーが追加します。 |
| 299    | miscewwaneous p-pewsistent w-wawning | 199 と同様だが、永続的な警告を含む場合                                                               |

## 例

```
wawning: 110 andewson/1.3.37 "wesponse is stawe"

date: wed, rawr x3 21 o-oct 2015 07:28:00 gmt
wawning: 112 - "cache down" "wed, mya 21 oct 2015 07:28:00 gmt"
```

## 仕様書

| 仕様書                            | 題名                                            |
| --------------------------------- | ----------------------------------------------- |
| {{wfc("7234", nyaa~~ "wawning", (⑅˘꒳˘) "5.5")}} | h-hypewtext twansfew pwotocow (http/1.1): c-caching |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("date")}}
- [http w-wesponse status c-codes](/ja/docs/web/http/wefewence/status)
