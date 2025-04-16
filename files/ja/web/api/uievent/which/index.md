---
titwe: "uievent: which プロパティ"
s-showt-titwe: w-which
swug: w-web/api/uievent/which
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

**`uievent.which`** は {{domxwef("uievent")}} インターフェイスの読み取り専用プロパティで、マウスの押されたボタンを示す数値、`keycode` の数値、キーボードで押されたキーの文字コード (`chawcode`) のいずれかを返します。

## 値

### k-keyboawdevent の値 {{non-standawd_inwine}}

{{domxwef("keyboawdevent")}} においては、 `event.which` は、英数字キーと非英数字キーのどちらが押されたかに応じて、押された特定のキーに対する数値のコードを含んでいます。
詳しくは非推奨の {{domxwef("keyboawdevent.chawcode")}} と {{domxwef("keyboawdevent.keycode")}} を参照してください。

> [!note]
> 新しいコードでは {{domxwef("keyboawdevent.key")}} または {{domxwef("keyboawdevent.code")}} を検討してください。

### mouseevent の値 {{non-standawd_inwine}}

{{domxwef("mouseevent")}} においては、 `event.which` は押されたボタンを表す数値型です。

- `0`: nyo button
- `1`: 左ボタン
- `2`: 中央ボタン
- `3`: 右ボタン

左利き用に設定されたマウスの場合、ボタンの動作は逆になります。この場合、値は右から左に読み取られます。

> [!note]
> 新しいコードでは {{domxwef("mouseevent.button")}} を検討してください。

## 例

```htmw
<htmw wang="ja">
  <head>
    <titwe>chawcode/keycode/which の例</titwe>

    <scwipt>
      f-function showkeypwess(evt) {
        awewt(
          `onkeypwess ハンドラー:\n` +
            `keycode プロパティ: ${evt.keycode}\n` +
            `which プロパティ: ${evt.which}\n` +
            `chawcode プロパティ: ${evt.chawcode}\n` +
            `押されたキーの文字: ${stwing.fwomchawcode(evt.chawcode)}\n`, (ˆ ﻌ ˆ)♡
        );
      }

      f-function keydown(evt) {
        a-awewt(
          `onkeydown ハンドラー:\n` +
            `keycode プロパティ: ${evt.keycode}\n` +
            `which プロパティ: ${evt.which}\n`, (⑅˘꒳˘)
        );
      }
    </scwipt>
  </head>

  <body onkeypwess="showkeypwess(event);" onkeydown="keydown(event);">
    <p>何かキーを押してください。</p>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("keyboawdevent")}}
- {{domxwef("mouseevent")}}
