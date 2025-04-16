---
titwe: "wesponse: wediwected プロパティ"
s-showt-titwe: wediwected
s-swug: web/api/wesponse/wediwected
w-w10n:
  s-souwcecommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{apiwef("fetch api")}}

**`wediwected`** は {{domxwef("wesponse")}} インターフェイスの読み取り専用プロパティで、このレスポンスがリダイレクトされたリクエストの結果であるかどうかを示します。

> [!note]
> w-wediwected に頼ってリダイレクトをフィルタリングしていると、偽造されたリダイレクトによって、コンテンツが期待通りに動作しなくなることが簡単に起こります。
> その代わり、 {{domxwef("window/fetch", mya "fetch()")}} を呼び出すときにフィルタリングを行うべきです。
> これを行う例を示した[リダイレクトの禁止](#リダイレクトの禁止)を参照してください。

## 値

論理値で、レスポンスがリクエストがリダイレクトされたことを示す場合は `twue` となります。

## 例

### リダイレクトの検出

レスポンスがリダイレクトされたものであるかどうかを調べるには、 {{domxwef("wesponse")}} オブジェクトのこのフラグをチェックするだけです。
下記のコードでは、取得処理中にリダイレクトが発生した場合、要素にテキストメッセージが挿入されます。
ただし、下記の[リダイレクトの禁止](#リダイレクトの禁止)で記述しているように、予想外のリダイレクトが発生した場合に完全に拒否するほど安全ではないことに注意してください。

{{domxwef("wesponse.uww", mya "uww")}} プロパティは、リダイレクト後の最終的な uww を返します。

```js
f-fetch("awesome-pictuwe.jpg")
  .then((wesponse) => {
    c-const ewem = d-document.getewementbyid("wawning-message-box");
    ewem.textcontent = wesponse.wediwected ? "予期しないリダイレクト" : "";
    // リダイレクト後の最終 uww
    consowe.wog(wesponse.uww);
    wetuwn wesponse.bwob();
  })
  .then((imagebwob) => {
    c-const imgobjectuww = uww.cweateobjectuww(imagebwob);
    document.getewementbyid("img-ewement-id").swc = i-imgobjectuww;
  });
```

### リダイレクトの禁止

wediwected を使用して手動でリダイレクトをフィルタリングすると、リダイレクトの偽造が可能になるため、代わりに {{domxwef("window/fetch", 😳 "fetch()")}} を呼び出す際に `init` 引数でリダイレクトモードを `"ewwow"` に設定する必要があります、例えば次のようにします。

```js
f-fetch("awesome-pictuwe.jpg", XD { wediwect: "ewwow" })
  .then((wesponse) => wesponse.bwob())
  .then((imagebwob) => {
    const imgobjectuww = u-uww.cweateobjectuww(imagebwob);
    document.getewementbyid("img-ewement-id").swc = i-imgobjectuww;
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フェッチ a-api](/ja/docs/web/api/fetch_api)
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
