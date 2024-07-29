---
title: "XRSystem: isSessionSupported() メソッド"
short-title: isSessionSupported()
slug: Web/API/XRSystem/isSessionSupported
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("XRSystem")}} の **`isSessionSupported()`** メソッドは、指定した WebXR セッションモードがユーザーの WebXR 端末で対応している場合は `true` に解決するプロミスを返します。そうでない場合、プロミスは `false` に解決されます。

利用できる端末がないか、ブラウザーに XR 端末を使用する権限がない場合、プロミスは適切な {{domxref("DOMException")}} で拒否されます。

## 構文

```js-nolint
isSessionSupported(mode)
```

### 引数

- `mode`

  - : 文字列 ({{jsxref("String")}}) で、対応を調べる WebXR セッションモードを指定します。調べる可能なモード：

    - `immersive-ar` {{Experimental_Inline}}
    - `immersive-vr`
    - `inline`

### 返値

プロミス ({{jsxref("Promise")}}) で、指定したセッションモードを対応している場合は `true` に解決し、そうでない場合は `false` に解決します。

### 例外

`isSessionSupported()` は実際の例外を発生させるのではなく、{{domxref("DOMException")}} という名前の文字列をハンドラーに渡して、返されたプロミスを拒否します。

- `SecurityError`
  - : この機能の使用が `xr-spatial-tracking` [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)によってブロックされています。

## 例

この例では、 `isSessionSupported()` を使用して、 `immersive-vr` セッションに対応しているかどうかを調べることで、端末が VR モードに対応しているかどうかを検出しています。もし対応していれば、 "Enter XR" というボタンを設定し、 `onButtonClicked()` というメソッドを呼び出してボタンを有効にします。

まだセッションが開始されていない場合は、VRセッションをリクエストし、成功した場合は `onSessionStarted()` と呼ばれるメソッドでセッションを設定します。ボタンがクリックされたときにセッションが既に進行中であれば、 `xrSession` オブジェクトの {{domxref("XRSession.end", "end()")}} メソッドを呼び出して WebXR セッションをシャットダウンします。

```js
if (navigator.xr) {
  navigator.xr.isSessionSupported("immersive-vr").then((isSupported) => {
    if (isSupported) {
      userButton.addEventListener("click", onButtonClicked);
      userButton.textContent = "Enter XR";
      userButton.disabled = false;
    }
  });
}

function onButtonClicked() {
  if (!xrSession) {
    navigator.xr.requestSession("immersive-vr").then((session) => {
      xrSession = session;
      // onSessionStarted() は、簡潔かつ明瞭にするために示しません。
      onSessionStarted(xrSession);
    });
  } else {
    // ボタンはトグルボタンです。
    xrSession.end();
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
