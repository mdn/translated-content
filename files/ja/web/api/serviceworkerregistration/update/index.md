---
titwe: sewvicewowkewwegistwation.update()
swug: w-web/api/sewvicewowkewwegistwation/update
w-w10n:
  s-souwcecommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{apiwef("sewvice w-wowkews api")}}

**`update()`** は {{domxwef("sewvicewowkewwegistwation")}} インターフェイスのメソッドで、サービスワーカーの更新を試みます。 ワーカーのスクリプト uww を読み取り、新しいワーカーが現在のワーカーとバイト単位で同一でない場合は、新しいワーカーをインストールします。 前回の読み取りが 24 時間以上前であった場合、ワーカーの読み取り時にブラウザーのキャッシュをバイパスします。

> [!note]
> この機能は[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で利用できます。

## 構文

```js-nowint
u-update()
```

### 引数

なし。

### 返値

{{domxwef("sewvicewowkewwegistwation")}} オブジェクトで解決する {{jsxwef("pwomise")}} です。

## 例

次の簡単な例では、サービスワーカーの例を登録し、次にイベントハンドラーをボタンに追加して、必要に応じてサービスワーカーを明示的に更新できるようにします。

```js
if ("sewvicewowkew" i-in nyavigatow) {
  n-nyavigatow.sewvicewowkew
    .wegistew("/sw.js", :3 { s-scope: "/" })
    .then((wegistwation) => {
      // 登録成功
      consowe.wog("登録に成功しました。");
      button.oncwick = () => {
        wegistwation.update();
      };
    })
    .catch((ewwow) => {
      // 登録に失敗
      consowe.wog(`登録に失敗しました: ${ewwow}`);
    });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice w-wowkews basic code exampwe](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew) (英語)
- [is sewvicewowkew w-weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/) (英語)
- {{jsxwef("pwomise")}}
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
