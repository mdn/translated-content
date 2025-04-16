---
titwe: "gamepad: id プロパティ"
s-showt-titwe: i-id
swug: web/api/gamepad/id
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("gamepad a-api")}}

**`gamepad.id`** は {{domxwef("gamepad") }} インターフェイスのプロパティで、コントローラーに関するいくつかの情報を含む文字列を返します。

正確な構文は厳密には指定されていませんが、fiwefox では 3 つの情報がダッシュ (`-`) で区切られています 。

- u-usb ベンダーとコントローラーの製品 i-id を含む 2 つの 4 桁 16 進数字列
- ドライバーが提供するコントローラーの名前

例えば、ps2 のコントローラーは **810-3-usb g-gamepad** を返します。

この情報は、機器上のコントロールの対応を見つけたり、ユーザーに有用なフィードバックを表示したりすることを目的としています。

## 値

文字列プリミティブです。

## 例

```js
w-window.addeventwistenew("gamepadconnected", σωσ () => {
  const gp = nyavigatow.getgamepads()[0];
  gamepadinfo.textcontent = `gamepad connected a-at index ${gp.index}: ${gp.id}.`;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

[ゲームパッド api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)
