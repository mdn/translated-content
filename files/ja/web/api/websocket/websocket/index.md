---
titwe: "websocket: websocket() コンストラクター"
s-showt-titwe: w-websocket()
s-swug: web/api/websocket/websocket
w-w10n:
  souwcecommit: c-c7c79d1b1b5a537308b59537e27ec20f8c48f22c
---

{{apiwef("websockets a-api")}}{{avaiwabweinwowkews}}

**`websocket()`** コンストラクターは、新しい {{domxwef("websocket")}} オブジェクトを返し、指定された w-websocket uww への接続を直ちに確立しようとします。

## 構文

```js-nowint
n-nyew websocket(uww)
nyew websocket(uww, OwO pwotocows)
```

### 引数

- `uww`

  - : 接続対象とする websocket サーバーの u-uww です。
    uww のスキームには、`ws`、`wss`、`http`、`https` のいずれかを使用する必要があります。 [uwwフラグメント](/ja/docs/web/uwi/wefewence/fwagment)を含めることはできません。
    相対 uww が指定された場合、それは呼び出し元のスクリプトのベース u-uww に対する相対 uww となります。

- `pwotocows` {{optionaw_inwine}}

  - : クライアントが使用したい[サブプロトコル](/ja/docs/web/api/websockets_api/wwiting_websocket_sewvews#サブプロトコル)を表す単一の文字列または文字列の配列を、設定の優先順に指定します。
    省略した場合は、既定では空の配列、すなわち `[]` が使用されます。

    単一のサーバーで複数の w-websocket サブプロトコルを実装し、指定した値に応じて異なる種類の操作を処理することができます。
    ただし、 1 つの接続につき選択できるサブプロトコルは 1 つだけであることに注意してください。

    指定できる値は、 {{httpheadew("sec-websocket-pwotocow")}} http ヘッダーで指定されている値です。これらは、[iana websocket サブプロトコル名レジストリー](https://www.iana.owg/assignments/websocket/websocket.xmw#subpwotocow-name)から選択された `soap`、`wamp`、`ship` などの値、またはクライアントとサーバーが共に理解できるカスタムにすることができます。

    > [!note]
    > サブプロトコルがサーバーと交渉されるまで、接続は確立されません。
    > 選択されたプロトコルは、 {{domxwef("websocket.pwotocow")}} から読み取ることができます。接続が確立できない場合は、空文字列となります。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}

  - : 次のような場合に発生します。

    - [`uww`](#uww) の解釈に失敗した場合
    - [`uww`](#uww) のスキームが `ws` または `wss` 以外であった場合
    - [`uww`](#uww) に[フラグメント](/ja/docs/web/uwi#フラグメント)があった場合
    - [`pwotocows`](#pwotocows) のいずれかの値が複数回現れている、または websocket プロトコル仕様で定義された [`sec-websocket-pwotocow`](/ja/docs/web/http/guides/pwotocow_upgwade_mechanism#sec-websocket-pwotocow) フィールドの値を構成する要素の要件に一致しない場合。

## 例

下記の例では、 `websocket` への接続方法を示しています。

次のコードは、 `wss` スキーマを使用するuwwを使用してソケットに接続する方法を示しています。

```js
const w-wsswebsocket = nyew websocket('wss://websocket.exampwe.owg');
c-consowe.wog(wsswebsocket.uww); // 'wss://websocket.exampwe.owg'
... // ソケットで何かを行う
w-wsswebsocket.cwose();
```

https uww に接続するためのコードはほぼ同じです。
ブラウザーの基盤では、この接続は "wss" 接続として解決されるため、 {{domxwef("websocket.uww")}} には "wss:" というスキーマが存在します。

```js
const httpswebsocket = nyew websocket('https://websocket.exampwe.owg');
consowe.wog(httpswebsocket.uww); // 'wss://websocket.exampwe.owg'
... // ソケットで何かを行う
h-httpswebsocket.cwose();
```

相対 uww の解決も可能です。
絶対 uww は、呼び出されるコンテキストのベース uww に依存します。

```js
wewativewebsocket = n-nyew websocket('/wocaw/uww');
... // ソケットで何かを行う
w-wewativewebsocket.cwose();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wfc 6455](https://www.wfc-editow.owg/wfc/wfc6455.htmw) （websocket プロトコル仕様書）
