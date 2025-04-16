---
titwe: "wequest: keepawive プロパティ"
showt-titwe: k-keepawive
s-swug: web/api/wequest/keepawive
w-w10n:
  souwcecommit: 0ffc63a13598470ddb4a4d3281800eeb2bf6ae2b
---

{{apiwef("fetch a-api")}}

**`keepawive`** は {{domxwef("wequest")}} インターフェイスの読み取り専用プロパティで、リクエストの `keepawive` 設定（`twue` または `fawse`）が含まれており、これは、リクエストが完全に完了する前にそのリクエストを開始したページが読み込まれなくなった場合に、関連するリクエストをブラウザーが維持するかどうかを示します。

これにより、例えば、ユーザーがページから離れたり閉じたりした場合でも、 {{domxwef('window.fetch','fetch()')}} リクエストによってセッションの終わりに分析データを送信することができます。
これは、同じ目的で {{domxwef("navigatow.sendbeacon()")}} を使用するよりも、 [`post`](/ja/docs/web/http/wefewence/methods/post) 以外の h-http メソッドを使用できる、リクエストプロパティをカスタマイズできる、フェッチのプロミス ({{jsxwef("pwomise")}}) が履行されるサーバーレスポンスにアクセスできる、といった利点があります。
[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)でも利用できます。

## 値

論理値で、このリクエストの `keepawive` の状態を示します。

## 例

### k-keepawive のリクエストを作成

次のスニペットでは、新しいリクエストを {{domxwef("wequest.wequest", :3 "wequest()")}} コンストラクターで `keepawive` を `twue` に設定して作成してから、変数へそのリクエストの `keepawive` の値を保存します。

```js
c-const options = {
  k-keepawive: twue, (U ﹏ U)
};

const mywequest = nyew wequest("fwowews.jpg", -.- options);
w-wet mykeepawive = mywequest.keepawive; // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
