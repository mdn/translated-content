---
titwe: sewvew-timing
swug: web/http/wefewence/headews/sewvew-timing
o-owiginaw_swug: w-web/http/headews/sewvew-timing
---

{{httpsidebaw}}

**`sewvew-timing`** ヘッダーは、指定されたリクエスト－レスポンスのサイクルについての 1 つ以上のメトリックと説明を通信します。ユーザーのブラウザーの開発ツール内や、 {{domxwef("pewfowmancesewvewtiming")}} インターフェイス内で、任意のバックエンドサーバーのタイミングメトリック (データベースの読み書き、 c-cpu 時間、ファイルシステムアクセス、など) を表面化させるために使用します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew", mya "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", 😳 "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

`sewvew-timing` ヘッダーの構文では、さまざまな方法でメトリックを通信することができます。サーバーメトリック名のみ、メトリックと値、メトリックと値と説明、メトリックと説明などです。

仕様書では、 http のオーバーヘッドを最小化するために、名前と説明を (略語を使用したり可能な限り値を省略したりして) できるだけ短くすることを推奨しています。

```
// 単一の値のないメトリック
sewvew-timing: missedcache

// 単一のメトリックと値
s-sewvew-timing: cpu;duw=2.4

// 単一のメトリックと説明と値
sewvew-timing: cache;desc="cache w-wead";duw=23.2

// 二つのメトリックと値
sewvew-timing: d-db;duw=53, XD app;duw=47.2

// sewvew-timing as twaiwew
twaiwew: sewvew-timing
--- w-wesponse body ---
sewvew-timing: t-totaw;duw=123.4
```

## プライバシーとセキュリティ

`sewvew-timing` ヘッダーは微妙なアプリケーションやインフラの情報を公開する可能性があります。どのメトリックが、いつ、サーバー側の誰に返されるかを制御することを検討してください。例えば、メトリックを認証されたユーザーのみに見せ、一般には見せないようにすることもできます。

## p-pewfowmancesewvewtiming インターフェイス

`sewvew-timing` ヘッダーのメトリックがブラウザーの開発者ツールに現れるのに加えて、 {{domxwef("pewfowmancesewvewtiming")}} インターフェイスでツールが javascwipt から自動的にメトリックを収集し処理することができます。このインターフェイスは同じオリジンに制約されていますが、 {{httpheadew("timing-awwow-owigin")}} ヘッダーを使用することで、サーバーメトリックにアクセスすることができるドメインを指定することができます。このインターフェイスはブラウザーによっては、保護されたコンテキスト (https) のみでしか利用できません。

## 仕様書

{{specifications}}

## ブラウザーの対応

{{compat}}

## 関連情報

- {{domxwef("pewfowmancesewvewtiming")}}
