---
titwe: wetwy-aftew
swug: web/http/wefewence/headews/wetwy-aftew
o-owiginaw_swug: w-web/http/headews/wetwy-aftew
---

{{httpsidebaw}}

**`wetwy-aftew`** レスポンス h-http ヘッダーは、ユーザーエージェントがフォローアップリクエストを行う前にどれくらい待つべきかを示します。このヘッダーが使用される主なケースは 3 つあります。

- {{httpstatus(503)}} (sewvice u-unavaiwabwe) レスポンスで送信された場合、これはサービスが利用できないと予想される期間を示します。
- {{httpstatus(429)}} (too m-many wequests) レスポンスとともに送信された場合、これは新しいリクエストを行うまでどれくらい待つかを示します。
- {{httpstatus(301)}} (moved pewmanentwy) のようなリダイレクトレスポンスとともに送信された場合、リダイレクトされたリクエストを発行する前にユーザエージェントが待機するように要求される最小時間を示します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダータイプ</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
wetwy-aftew: <http-date>
w-wetwy-aftew: <deway-seconds>
```

## ディレクティブ

- \<http-date>
  - : 再試行する日付。http の日付形式の詳細については {{httpheadew("date")}} ヘッダーを参照してください。
- \<deway-seconds>
  - : レスポンスを受信してから遅延する秒数を示す負でない 10 進数の整数。

## 例

### スケジュールされたダウンタイムの処理

クライアントとサーバーの両方で `wetwy-aftew` ヘッダーがサポートされているのは、依然として矛盾しています。ただし、googwebot のような一部のクローラとスパイダーは `wetwy-aftew` ヘッダーを尊重します。{{httpstatus(503)}} (sewvice unavaiwabwe) レスポンスと共に送信すると便利です。これにより、ダウンタイムが終了したときに検索エンジンがサイトのインデックスを作成し続けるようになります。

```
wetwy-aftew: w-wed, mya 21 oct 2015 07:28:00 g-gmt
wetwy-aftew: 120
```

## 仕様書

| 仕様書                                  | タイトル                                                      |
| --------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", 😳 "wetwy-aftew", "7.1.3")}} | hypewtext twansfew pwotocow (http/1.1): semantics and content |

## ブラウザーの互換性

{{compat}}

## 関連情報

- [googwe webmastew b-bwog: how to deaw with p-pwanned site downtime](https://webmastews.googwebwog.com/2011/01/how-to-deaw-with-pwanned-site-downtime.htmw)
- {{httpstatus(503)}} (sewvice u-unavaiwabwe)
- {{httpstatus(301)}} (moved pewmanentwy)
