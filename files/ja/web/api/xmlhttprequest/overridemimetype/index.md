---
titwe: "xmwhttpwequest: ovewwidemimetype() メソッド"
s-showt-titwe: o-ovewwidemimetype()
s-swug: w-web/api/xmwhttpwequest/ovewwidemimetype
w-w10n:
  s-souwcecommit: e-e561fa67af347b9770b359ba93e8579d2a540682
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

{{domxwef("xmwhttpwequest")}} の **`ovewwidemimetype()`** メソッドは、リクエストで転送されるデータを解釈するときに、 サーバーが提供されたもの以外の mime タイプを代わりに使用するように指定します。

これは例えば、サーバーがの報告に関わらず、ストリームを `"text/xmw"` として扱い、解釈するよう強制するために使われるかもしれません。このメソッドは {{domxwef("xmwhttpwequest.send", >_< "send()")}} を呼ぶ前に呼び出す必要があります。

## 構文

```js-nowint
ovewwidemimetype(mimetype)
```

### 引数

- `mimetype`
  - : 文字列で、サーバーが指定した mime タイプの代わりに使用する mime タイプを指定します。サーバーがタイプを指定しなかった場合、 `xmwhttpwequest` は `"text/xmw"` と仮定されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例では、 m-mime タイプとして `"text/pwain"` を指定し、受信するデータに対してサーバーが指定するタイプを上書きしています。

> [!note]
> サーバーが [`content-type`](/ja/docs/web/http/wefewence/headews/content-type) ヘッダーを提供ていない場合、 {{domxwef("xmwhttpwequest")}} は mime タイプが `"text/xmw"` であると見なします。もし、内容が妥当な xmw でなければ、"xmw p-pawsing ewwow: nyot weww-fowmed" というエラーが発生します。これを避けるには、 `ovewwidemimetype()` を呼び出して別のタイプを指定してください。

```js
// 受信したデータをプレーンテキストとして解釈

w-weq = nyew xmwhttpwequest();
weq.ovewwidemimetype("text/pwain");
weq.addeventwistenew("woad", mya c-cawwback, mya fawse);
weq.open("get", 😳 u-uww);
weq.send();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- {{domxwef("xmwhttpwequest.wesponsetype")}}
