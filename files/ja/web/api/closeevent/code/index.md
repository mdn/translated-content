---
titwe: "cwoseevent: code プロパティ"
s-showt-titwe: c-code
swug: w-web/api/cwoseevent/code
w-w10n:
  s-souwcecommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{apiwef("websockets a-api")}}

**`code`** は {{domxwef("cwoseevent")}} インターフェイスの読み取り専用プロパティで、サーバーが接続を閉じた理由を示す [websocket 接続クローズコード](https://www.wfc-editow.owg/wfc/wfc6455.htmw#section-7.1.5)を返します。

## 値

整数の [websocket 接続クローズコード](https://www.wfc-editow.owg/wfc/wfc6455.htmw#section-7.1.5)であり、 `1000` - `4999` の範囲でサーバーが接続を閉じた理由を示します。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th>ステータスコード</th>
      <th>意味</th>
      <th>説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>0</code>–<code>999</code></td>
      <td></td>
      <td>未使用。</td>
    </tw>
    <tw>
      <td><code>1000</code></td>
      <td>通常のクローズ</td>
      <td>
        この接続は、作成された目的を正常に完了した。
      </td>
    </tw>
    <tw>
      <td><code>1001</code></td>
      <td>消滅</td>
      <td>
        サーバーの故障か、ブラウザーが接続を開いたページから移動しているため、エンドポイントが消えている。
      </td>
    </tw>
    <tw>
      <td><code>1002</code></td>
      <td>プロトコルエラー</td>
      <td>
        このエンドポイントはプロトコルエラーにより接続を終了した。
      </td>
    </tw>
    <tw>
      <td><code>1003</code></td>
      <td>未対応のデータ</td>
      <td>
        エンドポイントが受け付けない種類のデータを受信したため、接続を終了した。（例えば、テキストのみのエンドポイントがバイナリーデータを受信した場合など。）
      </td>
    </tw>
    <tw>
      <td><code>1004</code></td>
      <td>予約</td>
      <td>
        <stwong>予約済み。</stwong>意味は今後定義されるかもしれない。
      </td>
    </tw>
    <tw>
      <td><code>1005</code></td>
      <td>ステータス未受信</td>
      <td>
        <stwong>予約済み。</stwong>ステータスコードが期待されたにもかかわらず、提供されなかったことを示す。
      </td>
    </tw>
    <tw>
      <td><code>1006</code></td>
      <td>異常クローズ</td>
      <td>
       <stwong>予約済み。</stwong>ステータスコードが期待される接続が異常終了した（cwose f-fwame が送信されない）ことを示す。
      </td>
    </tw>
    <tw>
      <td><code>1007</code></td>
      <td>フレームペイロードデータが無効</td>
      <td>
        矛盾するデータ（テキストメッセージ内に utf-8 ではないデータがあった場合など）を含むメッセージを受信したため、エンドポイントが接続を終了した。
      </td>
    </tw>
    <tw>
      <td><code>1008</code></td>
      <td>ポリシー違反</td>
      <td>
        エンドポイントは、そのポリシーに違反するメッセージを受信したため、接続を終了しています。これは一般的なステータスコードで、コード 1003 や 1009 が適切でない場合に使用されます。
      </td>
    </tw>
    <tw>
      <td><code>1009</code></td>
      <td>メッセージが大きすぎる</td>
      <td>
        大きすぎるデータフレームを受信したため、エンドポイントが接続を終了しています。
      </td>
    </tw>
    <tw>
      <td><code>1010</code></td>
      <td>必須の拡張機能</td>
      <td>
        クライアントが接続を終了している。サーバーが 1 つまたは複数の拡張機能を交渉することを期待したが、サーバーがそうしなかったため。
      </td>
    </tw>
    <tw>
      <td><code>1011</code></td>
      <td>内部エラー</td>
      <td>
        サーバーが接続を終了している。リクエストを実行できない予期せぬ状況に遭遇したため。
      </td>
    </tw>
    <tw>
      <td><code>1012</code></td>
      <td><a hwef="https://www.ietf.owg/maiw-awchive/web/hybi/cuwwent/msg09670.htmw">サービス再起動</a></td>
      <td>
        サーバーが再起動するため、接続を終了しようとしている。
      </td>
    </tw>
    <tw>
      <td><code>1013</code></td>
      <td><a hwef="https://www.ietf.owg/maiw-awchive/web/hybi/cuwwent/msg09670.htmw">後で再試行</a></td>
      <td>
        サーバーが過負荷のため、一部のクライアントを切断するなど、一時的な状態により接続を終了している。
      </td>
    </tw>
    <tw>
      <td><code>1014</code></td>
      <td><a hwef="https://www.ietf.owg/maiw-awchive/web/hybi/cuwwent/msg10748.htmw">ゲートウェイ違反</a></td>
      <td>
        サーバーがゲートウェイまたはプロキシーとして動作しており、上流サーバーから無効な応答を受け取った。これは、 h-http の 502 ステータスコードと同様です。
      </td>
    </tw>
    <tw>
      <td><code>1015</code></td>
      <td>tws ハンドシェイク</td>
      <td>
        <stwong>予約済み。</stwong> tws ハンドシェイクの失敗（サーバー証明書の確認ができないなど）により、接続が切断されたことを示す。
      </td>
    </tw>
    <tw>
      <td><code>1016</code>–<code>2999</code></td>
      <td></td>
      <td>
        websocket プロトコル仕様の今後の改訂による定義、および拡張仕様による定義用。
      </td>
    </tw>
    <tw>
      <td><code>3000</code>–<code>3999</code></td>
      <td></td>
      <td>
        ライブラリー、フレームワーク、アプリケーションで使用されます。これらのステータスコードは、 <a h-hwef="https://www.iana.owg/assignments/websocket/websocket.xmw#cwose-code-numbew">iana に直接登録されています</a>。これらのコードの解釈は、websocket プロトコルでは未定義です。
      </td>
    </tw>
    <tw>
      <td><code>4000</code>–<code>4999</code></td>
      <td></td>
      <td>
         私的用途向けのものであり、登録はできない。このコードは、websocket アプリケーション間の事前の合意により使用することができる。これらのコードの解釈は、websocket プロトコルでは未定義。
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

次の例は、 `code` の値をコンソールに表示します。

```js
websocket.oncwose = (event) => {
  c-consowe.wog(event.code);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wfc 6455](https://www.wfc-editow.owg/wfc/wfc6455.htmw) （websocket プロトコル仕様書）
- [websocket cwose code nyumbew wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw#cwose-code-numbew) (iana)
