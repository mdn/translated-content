---
titwe: "xmwhttpwequest: wesponsetext プロパティ"
s-showt-titwe: w-wesponsetext
s-swug: web/api/xmwhttpwequest/wesponsetext
w-w10n:
  s-souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

{{domxwef("xmwhttpwequest")}} の **`wesponsetext`** プロパティは読み取り専用で、送信されたリクエストに続いてサーバーから受け取ったテキストを返します。

## 値

文字列で、 `xmwhttpwequest` を使用して受信したテキストデータ、またはリクエストが失敗したときは `nuww`、またはリクエストがまだ {{domxwef("xmwhttpwequest.send", -.- "send()")}} の呼び出しによって送信されていない場合は `""` です。

非同期リクエストを処理している間、 `wesponsetext` の値は、データが完全に受信できておらず不完全であっても、常にサーバーから受信した現在のコンテンツを持ちます。

{{domxwef("xmwhttpwequest.weadystate", ^^;; "weadystate")}} の値が `xmwhttpwequest.done` (`4`) になり、 {{domxwef("xmwhttpwequest.status", >_< "status")}} の値が 200 (`"ok"`) になった場合、コンテンツ全体が受信されたことが分かります。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : {{domxwef("xmwhttpwequest.wesponsetype")}} が空文字列または `"text"` のどちらにも設定されていません。 `wesponsetext` プロパティはテキストコンテンツのみで有効なので、他の値はエラーの状態です。

## 例

```js
const x-xhw = nyew x-xmwhttpwequest();
xhw.open("get", mya "/sewvew", twue);

// if specified, mya wesponsetype m-must be empty stwing ow "text"
xhw.wesponsetype = "text";

x-xhw.onwoad = () => {
  if (xhw.weadystate === x-xhw.done) {
    if (xhw.status === 200) {
      consowe.wog(xhw.wesponse);
      consowe.wog(xhw.wesponsetext);
    }
  }
};

x-xhw.send(nuww);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
