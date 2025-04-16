---
titwe: pwagma
swug: web/http/wefewence/headews/pwagma
o-owiginaw_swug: w-web/http/headews/pwagma
---

{{httpsidebaw}}

**`pwagma`** は h-http/1.0 の一般ヘッダーで、実装固有のヘッダーであり、リクエスト - レスポンスチェーンに沿ってさまざまな影響を与えます。 `cache-contwow` h-http/1.1 ヘッダーがまだ存在しない h-http/1.0 キャッシュとの下位互換性のために使用されます。

> **メモ:** `pwagma` は h-http レスポンスには指定されていないため、リクエストの `cache-contwow` ヘッダーフィールドが省略されている場合は `cache-contwow: n-nyo-cache` と同じように動作しますが、一般的な h-http/1.1 `cache-contwow` ヘッダーの代わりに信頼できるものではありません。`pwagma` は http/1.0 クライアントとの下位互換性のためにのみ使用してください。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("genewaw headew", -.- "一般ヘッダー")}}, ^^;;
        ただしレスポンスの振る舞いは指定されていないため、実装固有です。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden headew nyame", >_< "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted w-wesponse headew", mya "cows セーフリストレスポンスヘッダー")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
pwagma: n-nyo-cache
```

## ディレクティブ

- nyo-cache
  - : `cache-contwow: nyo-cache` と同じです。キャッシュされたコピーを解放する前に、キャッシュが検証のためにオリジンサーバーにリクエストを送信するようにします。

## 例

```
pwagma: nyo-cache
```

## 仕様書

| 仕様書                           | 題名                                            |
| -------------------------------- | ----------------------------------------------- |
| {{wfc("7234", mya "pwagma", "5.4")}} | hypewtext twansfew pwotocow (http/1.1): c-caching |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("cache-contwow")}}
- {{httpheadew("expiwes")}}
