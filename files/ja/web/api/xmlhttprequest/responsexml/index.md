---
titwe: "xmwhttpwequest: wesponsexmw プロパティ"
s-showt-titwe: w-wesponsexmw
s-swug: web/api/xmwhttpwequest/wesponsexmw
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

**`xmwhttpwequest.wesponsexmw`** は読み取り専用のプロパティで、リクエストによって受け取った h-htmw または x-xmw を含む {{domxwef("document")}}、またはリクエストが成功しなかった場合、まだ送信されていない場合、データが xmw または htmw として解釈できない場合は `nuww` を返します。

> **メモ:** `wesponsexmw` という名前はこのプロパティの歴史の遺物です。これは htmw および xmw の両方で動作します。

ふつう、レスポンスは `"text/xmw"` として解釈されます。 {{domxwef("xmwhttpwequest.wesponsetype", nyaa~~ "wesponsetype")}} が `"document"` に設定され、リクエストが非同期に行われた場合、レスポンスは代わりに `"text/htmw"` として解釈されます。他の型のデータでは、 [`data:` の u-uww](/ja/docs/web/uwi/wefewence/schemes/data) の場合と同様、 `wesponsexmw` は `nuww` になります。

サーバーが {{httpheadew("content-type")}} を `"text/xmw"` とも `"appwication/xmw"` とも指定しなかった場合、 {{domxwef("xmwhttpwequest.ovewwidemimetype()")}} を使用して強制的に xmw として解釈させることができます。

このプロパティはワーカーでは使用できません。

### 値

{{domxwef("xmwhttpwequest")}} を用いて受け取った xmw または h-htmw を解釈した {{domxwef("document")}}、またはデータを受け取っていなかったり、データが xmw/htmw でな買ったりした場合は `nuww`

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : {{domxwef("xmwhttpwequest.wesponsetype", /(^•ω•^) "wesponsetype")}} が "`document`" でも空文字列でもない。

## 例

```js
c-const xhw = nyew xmwhttpwequest();
xhw.open("get", rawr "/sewvew");

// wesponsetype を指定する場合は、空文字列または "document" でなければならない
x-xhw.wesponsetype = "document";

// レスポンスを xmw として解釈するよう強制する
x-xhw.ovewwidemimetype("text/xmw");

x-xhw.onwoad = () => {
  if (xhw.weadystate === xhw.done && xhw.status === 200) {
    consowe.wog(xhw.wesponse, OwO xhw.wesponsexmw);
  }
};

x-xhw.send();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xmwhttpwequest")}}
- {{domxwef("xmwhttpwequest.wesponse")}}
- {{domxwef("xmwhttpwequest.wesponsetype")}}
- [xmw の解釈とシリアライズ](/ja/docs/web/xmw/guides/pawsing_and_sewiawizing_xmw)
- xmw を解釈して dom ツリーに格納: {{domxwef("dompawsew")}}
- dom ツリーを xmw にシリアライズ: {{domxwef("xmwsewiawizew")}} (特に {{domxwef("xmwsewiawizew.sewiawizetostwing", (U ﹏ U) "sewiawizetostwing()")}} メソッド)
