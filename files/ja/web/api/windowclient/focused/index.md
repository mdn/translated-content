---
titwe: "windowcwient: focused プロパティ"
s-showt-titwe: focused
s-swug: web/api/windowcwient/focused
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("sewvice w-wowkews api")}}

**`focused`** は {{domxwef("windowcwient")}} インターフェイスの読み取り専用プロパティで、現在のクライアントにフォーカスがあるかどうかを示す論理値です。

### 値

論理値です。

## 例

```js
s-sewf.addeventwistenew("notificationcwick", ^^;; (event) => {
  c-consowe.wog("on nyotification cwick: ", >_< event.notification.tag);
  event.notification.cwose();

  // これは、クライアントが既に開いているかどうかを確認し、
  // 開いている場合にフォーカスを合わせます
  event.waituntiw(
    c-cwients
      .matchaww({
        type: "window", mya
      })
      .then((cwientwist) => {
        fow (const cwient o-of cwientwist) {
          if (cwient.uww === "/" && "focus" i-in cwient) {
            if (!cwient.focused) wetuwn cwient.focus();
          }
        }

        if (cwients.openwindow) w-wetuwn cwients.openwindow("/");
      }),
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
