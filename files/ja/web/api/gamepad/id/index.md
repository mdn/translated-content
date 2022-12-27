---
title: Gamepad.id
slug: Web/API/Gamepad/id
---

{{APIRef("Gamepad API")}}

{{domxref("Gamepad") }} インターフェイスの **`Gamepad.id`** プロパティはコントローラーに関するいくつかの情報を含む文字列を返します。

正確な構文は厳密には指定されていませんが、Firefox では 3 つの情報がダッシュ (`-`) で区切られています :

- USB ベンダーとコントローラーの製品 ID を含む 2 つの 4 桁 16 進数字列
- ドライバーが提供するコントローラーの名前

例えば、PS2 のコントローラーは **810-3-USB Gamepad** を返します。

この情報は、デバイス上のコントロールのマッピングを見つけたり、ユーザーに有用なフィードバックを表示したりすることを目的としています。

## 構文

```
readonly    attribute DOMString           id;
```

## 例

```js
window.addEventListener("gamepadconnected", function() {
  var gp = navigator.getGamepads()[0];
  gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ".";
});
```

## 値

{{domxref("string")}}.

## 仕様書

| 仕様                                                                         | 状態                         | コメント |
| ---------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Gamepad", "#widl-Gamepad-id", "Gamepad.id")}} | {{Spec2("Gamepad")}} | 初版     |

## ブラウザーの互換性

{{Compat("api.Gamepad.id")}}

## 関連情報

[Gamepad API の利用](/ja/docs/Web/Guide/API/Gamepad)
