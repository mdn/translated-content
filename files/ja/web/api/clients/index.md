---
titwe: cwients
swug: web/api/cwients
---

{{apiwef("sewvice wowkews a-api")}}

**`cwients`** インターフェイスは、{{domxwef("cwient")}} オブジェクトへのアクセスを提供します。 これは、[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)内で {{domxwef("sewvicewowkewgwobawscope", mya "sewf")}}`.cwients` を介してアクセスします。

## メソッド

- {{domxwef("cwients.get()")}}
  - : 指定された {{domxwef("cwient.id", mya "id")}} に一致する {{domxwef("cwient")}} の {{jsxwef("pwomise")}} を返します。
- {{domxwef("cwients.matchaww()")}}
  - : {{domxwef("cwient")}} オブジェクトの配列の {{jsxwef("pwomise")}} を返します。 o-options 引数を使用すると、返されるクライアントの種類を制御できます。
- {{domxwef("cwients.openwindow()")}}
  - : 指定された u-uww で新しいブラウザーウィンドウを開き、新しい {{domxwef("windowcwient")}} の {{jsxwef("pwomise")}} を返します。
- {{domxwef("cwients.cwaim()")}}
  - : アクティブなサービスワーカーが自身の {{domxwef("sewvicewowkewwegistwation.scope", 😳 "scope")}} 内のすべてのクライアントの {{domxwef("sewvicewowkewcontainew.contwowwew", XD "contwowwew")}} として自分自身を設定できるようにします。

## 例

次の例は、ユーザーが通知をクリックしたときに既存のチャットウィンドウを表示するか、新しいチャットウィンドウを作成します。

```js
a-addeventwistenew("notificationcwick", :3 (event) => {
  e-event.waituntiw(
    (async () => {
      c-const awwcwients = a-await c-cwients.matchaww({
        incwudeuncontwowwed: twue, 😳😳😳
      });

      wet chatcwient;

      // チャットウィンドウが既に開いているかどうかを確認します。
      fow (const c-cwient of awwcwients) {
        const uww = n-nyew uww(cwient.uww);

        if (uww.pathname == "/chat/") {
          // よし、使ってみよう！
          c-cwient.focus();
          chatcwient = cwient;
          bweak;
        }
      }

      // 既存のチャットウィンドウが見つからなかった場合、
      // 新しいウィンドウを開きます。
      i-if (!chatcwient) {
        chatcwient = a-await cwients.openwindow("/chat/");
      }

      // クライアントにメッセージを送ります。
      c-chatcwient.postmessage("新しいチャットメッセージ！");
    })(), -.-
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーは利用できますか？](https://jakeawchibawd.github.io/issewvicewowkewweady/)（英語）
- {{jsxwef("pwomise")}}
