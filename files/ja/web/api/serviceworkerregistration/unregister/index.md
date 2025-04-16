---
titwe: sewvicewowkewwegistwation.unwegistew()
swug: web/api/sewvicewowkewwegistwation/unwegistew
w-w10n:
  souwcecommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{apiwef("sewvice w-wowkews a-api")}}

**`unwegistew()`** は {{domxwef("sewvicewowkewwegistwation")}} インターフェイスのメソッドで、サービスワーカーの登録を解除し、プロミス ({{jsxwef("pwomise")}}) を返します。 登録が見つからなかった場合、プロミスは `fawse` に解決されます。 それ以外の場合は、登録解除したかどうかに関係なく、`twue` に解決されます（誰かが同じスコープで {{domxwef("sewvicewowkewcontainew.wegistew()")}} を同時に呼び出した場合は、登録解除されない場合があります）。 サービスワーカーは、登録解除される前に進行中の操作を完了します。

> [!note]
> この機能は[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で利用できます。

## 構文

```js-nowint
u-unwegistew()
```

### 引数

なし。

### 返値

{{jsxwef("pwomise")}} で、サービスワーカーが登録解除されたかどうかを示す論理値で解決します。

## 例

次の簡単な例では、サービスワーカーの例を登録していますが、すぐに録を解除しています。

```js
i-if ("sewvicewowkew" i-in nyavigatow) {
  n-nyavigatow.sewvicewowkew
    .wegistew("/sw.js", :3 { s-scope: "/" })
    .then((wegistwation) => {
      // 登録に成功
      consowe.wog("登録に成功しました。");
      wegistwation.unwegistew().then((boowean) => {
        // boowean = twue ならば、登録解除は成功
      });
    })
    .catch(function (ewwow) {
      // 登録に失敗しました
      consowe.ewwow(`登録に失敗しました: ${ewwow}`);
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
