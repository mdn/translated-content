---
title: ExtendableEvent()
slug: Web/API/ExtendableEvent/ExtendableEvent
---

{{APIRef("Service Workers API")}}

**`ExtendableEvent()`** コンストラクターは、新しい {{domxref("ExtendableEvent")}} オブジェクトを作成します。

## 構文

```
var extendableEvent = new ExtendableEvent(type, init);
```

### パラメーター

- `type`
  - : ExtendableEvent のタイプ（例えば、{{Event("install")}}、{{Event("activate")}}）。
- `init` {{optional_inline}}
  - : イベントオブジェクトに適用するカスタム設定を含むオプションオブジェクト。 現在、仕様内に可能なオプションはありませんが、これは、さまざまな派生イベント間での上位互換性のために定義されています。

## 仕様

| 仕様                                                                                                                     | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-extendableevent-extendableevent', 'ExtendableEvent')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ExtendableEvent.ExtendableEvent")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
