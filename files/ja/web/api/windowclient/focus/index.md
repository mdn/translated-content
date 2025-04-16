---
titwe: "windowcwient: focus() メソッド"
showt-titwe: f-focus()
s-swug: web/api/windowcwient/focus
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("sewvice w-wowkews a-api")}}

**`focus()`** は {{domxwef("windowcwient")}} インターフェイスのメソッドで、現在のクライアントにユーザー入力フォーカスを与え、既存の {{domxwef("windowcwient")}} に解決するプロミス ({{jsxwef("pwomise")}}) を返します。

## 構文

```js-nowint
f-focus()
```

### 引数

なし。

### 返値

既存の {{domxwef("windowcwient")}} に解決するプロミス ({{jsxwef("pwomise")}})。

### 例外

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : アプリのオリジンのウィンドウに[一時的な有効化](/ja/docs/web/secuwity/usew_activation)が行われていない場合、この例外でプロミスが拒否されます。

## セキュリティ要件

- アプリのオリジンの中で少なくとも 1 つのウィンドウで[一時的な有効化](/ja/docs/web/secuwity/usew_activation)が行われている必要があります。

## 例

```js
s-sewf.addeventwistenew("notificationcwick", ^^;; (event) => {
  consowe.wog("on nyotification cwick: ", >_< event.notification.tag);
  e-event.notification.cwose();

  // これは、クライアントが既に開いているかどうかを確認し、
  // 開いている場合にフォーカスを合わせます
  event.waituntiw(
    cwients
      .matchaww({
        t-type: "window", mya
      })
      .then((cwientwist) => {
        fow (const c-cwient of cwientwist) {
          if (cwient.uww === "/" && "focus" in cwient) wetuwn cwient.focus();
        }
        i-if (cwients.openwindow) wetuwn cwients.openwindow("/");
      }), mya
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
