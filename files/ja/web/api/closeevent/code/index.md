---
title: CloseEvent.code
slug: Web/API/CloseEvent/code
tags:
  - API
  - プロパティ
  - リファレンス
  - closeEvent
browser-compat: api.CloseEvent.code
translation_of: Web/API/CloseEvent/code
---
{{APIRef("Websockets API")}}

**`code`** は {{domxref("CloseEvent")}} インターフェイスの読み取り専用プロパティで、サーバーが接続を閉じた理由を示す [WebSocket 接続クローズコード](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)を返します。

## 値

整数の [WebSocket 接続クローズコード](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)であり、 `1000`-`4999` の範囲でサーバーが接続を閉じた理由を示します。

<table class="no-markdown">
  <thead>
    <tr>
      <th>ステータスコード</th>
      <th>意味</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code>–<code>999</code></td>
      <td></td>
      <td>未使用。</td>
    </tr>
    <tr>
      <td><code>1000</code></td>
      <td>通常のクローズ</td>
      <td>
        この接続は、作成された目的を正常に完了した。
      </td>
    </tr>
    <tr>
      <td><code>1001</code></td>
      <td>消滅</td>
      <td>
        サーバーの故障か、ブラウザーが接続を開いたページから移動しているため、エンドポイントが消えている。
      </td>
    </tr>
    <tr>
      <td><code>1002</code></td>
      <td>プロトコルエラー</td>
      <td>
        このエンドポイントはプロトコルエラーにより接続を終了した。
      </td>
    </tr>
    <tr>
      <td><code>1003</code></td>
      <td>未対応のデータ</td>
      <td>
        エンドポイントが受け付けない種類のデータを受信したため、接続を終了した。（例えば、テキストのみのエンドポイントがバイナリデータを受信した場合など。）
      </td>
    </tr>
    <tr>
      <td><code>1004</code></td>
      <td>予約</td>
      <td>
        <strong>予約済み。</strong>意味は今後定義されるかもしれない。
      </td>
    </tr>
    <tr>
      <td><code>1005</code></td>
      <td>ステータス未受信</td>
      <td>
        <strong>予約済み。</strong>ステータスコードが期待されたにもかかわらず、提供されなかったことを示す。
      </td>
    </tr>
    <tr>
      <td><code>1006</code></td>
      <td>異常クローズ</td>
      <td>
       <strong>予約済み。</strong>ステータスコードが期待される接続が異常終了した（close frame が送信されない）ことを示す。
      </td>
    </tr>
    <tr>
      <td><code>1007</code></td>
      <td>フレームペイロードデータが無効</td>
      <td>
        矛盾するデータ（テキストメッセージ内に UTF-8 ではないデータがあった場合など）を含むメッセージを受信したため、エンドポイントが接続を終了した。
      </td>
    </tr>
    <tr>
      <td><code>1008</code></td>
      <td>ポリシー違反</td>
      <td>
        エンドポイントは、そのポリシーに違反するメッセージを受信したため、接続を終了しています。これは一般的なステータスコードで、コード 1003 や 1009 が適切でない場合に使用されます。
      </td>
    </tr>
    <tr>
      <td><code>1009</code></td>
      <td>メッセージが大きすぎる</td>
      <td>
        大きすぎるデータフレームを受信したため、エンドポイントが接続を終了しています。
      </td>
    </tr>
    <tr>
      <td><code>1010</code></td>
      <td>必須の拡張機能</td>
      <td>
        クライアントが接続を終了している。サーバーが 1 つまたは複数の拡張機能を交渉することを期待したが、サーバーがそうしなかったため。
      </td>
    </tr>
    <tr>
      <td><code>1011</code></td>
      <td>内部エラー</td>
      <td>
        サーバーが接続を終了している。リクエストを実行できない予期せぬ状況に遭遇したため。
      </td>
    </tr>
    <tr>
      <td><code>1012</code></td>
      <td><a href="http://www.ietf.org/mail-archive/web/hybi/current/msg09670.html">サービス再起動</a></td>
      <td>
        サーバーが再起動するため、接続を終了しようとしている。
      </td>
    </tr>
    <tr>
      <td><code>1013</code></td>
      <td><a href="http://www.ietf.org/mail-archive/web/hybi/current/msg09670.html">後で再試行</a></td>
      <td>
        サーバーが過負荷のため、一部のクライアントを切断するなど、一時的な状態により接続を終了している。
      </td>
    </tr>
    <tr>
      <td><code>1014</code></td>
      <td><a href="https://www.ietf.org/mail-archive/web/hybi/current/msg10748.html">ゲートウェイ違反</a></td>
      <td>
        サーバーがゲートウェイまたはプロキシーとして動作しており、上流サーバーから無効な応答を受け取った。これは、 HTTP の 502 ステータスコードと同様です。
      </td>
    </tr>
    <tr>
      <td><code>1015</code></td>
      <td>TLS ハンドシェイク</td>
      <td>
        <strong>予約済み。</strong> TLS ハンドシェイクの失敗（サーバー証明書の確認ができないなど）により、接続が切断されたことを示す。
      </td>
    </tr>
    <tr>
      <td><code>1016</code>–<code>2999</code></td>
      <td></td>
      <td>
        WebSocket プロトコル仕様の今後の改訂による定義、および拡張仕様による定義用。
      </td>
    </tr>
    <tr>
      <td><code>3000</code>–<code>3999</code></td>
      <td></td>
      <td>
        ライブラリー、フレームワーク、アプリケーションで使用されます。これらのステータスコードは、 <a href="https://www.iana.org/assignments/websocket/websocket.xml#close-code-number">IANA に直接登録されています</a>。これらのコードの解釈は、WebSocket プロトコルでは未定義です。
      </td>
    </tr>
    <tr>
      <td><code>4000</code>–<code>4999</code></td>
      <td></td>
      <td>
         私的利用向けのものであり、登録はできない。このコードは、 WebSocket アプリケーション間の事前の合意により使用することができる。これらのコードの解釈は、 WebSocket プロトコルでは未定義。
      </td>
    </tr>
  </tbody>
</table>

## 例

次の例は、 `code` の値をコンソールに表示します。

```js
WebSocket.onclose = function(event) {
  console.log(event.code);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) （WebSocket プロトコル仕様書）
- [WebSocket Close Code Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#close-code-number) (IANA)
