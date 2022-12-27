---
title: PromiseRejectionEvent()
slug: Web/API/PromiseRejectionEvent/PromiseRejectionEvent
---

{{APIRef("HTML DOM")}}

**`PromiseRejectionEvent()`** コンストラクタは、JavaScript の {{jsxref("Promise")}} が拒否されたときに発火するイベントを表す {{domxref("PromiseRejectionEvent")}} を新しく生成し返します。

## 構文

```
new PromiseRejectionEvent(type, {
  promise: somePromise,
  reason : someValue
});
```

### パラメータ

_`PromiseRejectionEvent()`_ _コンストラクタは、{{domxref("Event.Event", "Event()")}} からも引数を継承しています。_

- `type`
  - : `PromiseRejectionEvent` の型名を表す文字列。これは大文字小文字を区別し、{{event("rejectionhandled", '"rejectionhandled"')}} か {{event("unhandledrejection", '"unhandledrejection"')}} のいずれかである必要がある。
- `promise`
  - : 拒否された {{jsxref("Promise")}}。
- `reason`
  - : promise が拒否された理由を表すいずれかの値、または {{jsxref("Object")}}。

## 仕様

| 仕様                                                                                                                             | ステータス                       | コメント   |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#promiserejectionevent', 'PromiseRejectionEvent()')}} | {{Spec2('HTML WHATWG')}} | 初期定義。 |

## ブラウザ実装状況

{{Compat("api.PromiseRejectionEvent.PromiseRejectionEvent")}}

## 関連項目

- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
