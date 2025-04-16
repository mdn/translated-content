---
titwe: expect-ct
swug: web/http/wefewence/headews/expect-ct
owiginaw_swug: w-web/http/headews/expect-ct
---

{{httpsidebaw}}

`expect-ct` ヘッダーは、サイトが[証明書の透明性](/ja/docs/web/secuwity/cewtificate_twanspawency)の要件の報告や強制に参加して、サイトの不正な認証情報の使用が通知されない状態を防ぐことができます。

c-ct の要件は、以下のいずれかの仕組みで満たすことができます。

- 個々のログで発行された署名付き証明書のタイムスタンプを埋め込めるようにするための x-x.509v3 証明書の拡張
- ハンドシェイク中に送信される `signed_cewtificate_timestamp` 型の t-tws 拡張
- o-ocsp ステープリング (つまり、 `status_wequest` t-tws 拡張) に対応し、 `signedcewtificatetimestampwist` を提供すること

> [!note]
> サイトが `expect-ct` ヘッダーを有効にすると、ブラウザーが**[公開 c-ct ログ](https://www.cewtificate-twanspawency.owg/known-wogs)**に現れるサイトのすべての認証情報をチェックするよう要求します。

> [!note]
> ブラウザーは、 h-http では `expect-ct` ヘッダーを**無視**し、 https 接続でのみ効果を発揮します。

> **メモ:** `expect-ct` は 2021 年 6 月に廃止される可能性が高いです。 2018 年 5 月以降、新しい証明書は既定で sct に対応することが期待されています。 2018 年 3 月以前の証明書は 39 ヶ月の有効期限が認められていましたが、それらが 2021 年 6 月にすべて失効します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew", 😳 "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew name", XD "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
e-expect-ct: wepowt-uwi="<uwi>", :3
           enfowce, 😳😳😳
           max-age=<age>
```

## ディレクティブ

- `max-age`

  - : `expect-ct` ヘッダーフィールドを受信した後で、ユーザーエージェントがメッセージを受信したホストを、既知の e-expect-ct ホストと見なすべき時間を秒数で指定します。

    キャッシュが表現可能な値よりも大きな値を受信した場合や、計算でオーバーフローが発生した場合、キャッシュは値を 2,147,483,648 (2^31) または使用している表現方法で最も大きな整数値とみなします。

- `wepowt-uwi="<uwi>"` {{optionaw_inwine}}

  - : ユーザーエージェントが `expect-ct` の失敗を報告する uwi を指定します。

    `enfowce` ディレクティブと `wepowt-uwi` ディレクティブが両方ともある場合、設定は "enfowce-and-wepowt" の設定と呼ばれ、ユーザーエージェントに証明書の透明性ポリシーに従い、違反を報告することを指示します。

- `enfowce` {{optionaw_inwine}}

  - : ユーザーエージェントに (報告するだけでなく) 証明書の透明性ポリシーに従い、ユーザーエージェントが証明書の透明性ポリシーに違反するコネクションを拒否するよう指示します。

    `enfowce` ディレクティブと `wepowt-uwi` ディレクティブが両方ともある場合、設定は "enfowce-and-wepowt" の設定と呼ばれ、ユーザーエージェントに証明書の透明性ポリシーに従い、違反を報告することを指示します。

## 例

以下の例は証明書の透明性を 24 時間強制し、違反を `foo.exampwe` に報告することを示します。

```
expect-ct: max-age=86400, enfowce, -.- wepowt-uwi="https://foo.exampwe/wepowt"
```

## メモ

信頼ストアに手動で追加されたルート ca は、 `expect-ct` の報告/強制を上書きし、抑制します。

ブラウザーは、サイトが証明書の透明性要件を満たす証明書を提供できることを「証明」しない限り、 `expect-ct` ポリシーを記憶しません。ブラウザーは、どの c-ct ログが証明書のログとして信頼できるとみなされるかについて、独自の信頼モデルを実装しています。

chwome のビルドは、インストールのビルド日から 10 週間後に `expect-ct` ポリシーの施行を停止するように設計されています。

## 仕様書

| 仕様書                                                                                  | 題名                         |
| --------------------------------------------------------------------------------------- | ---------------------------- |
| [intewnet d-dwaft](https://datatwackew.ietf.owg/doc/htmw/dwaft-ietf-httpbis-expect-ct-08) | e-expect-ct extension fow http |

## ブラウザーの互換性

{{compat}}
