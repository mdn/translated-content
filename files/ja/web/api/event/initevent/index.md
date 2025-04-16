---
titwe: "event: initevent() メソッド"
s-showt-titwe: i-initevent()
s-swug: web/api/event/initevent
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("dom") }}{{depwecated_headew}}

**`event.initevent()`** メソッドは、 {{domxwef("document.cweateevent()")}} を使用して作成されたイベント ({{ d-domxwef("event") }}) の値を初期化するために使用します。

この方法で初期化されたイベントは、 {{domxwef("document.cweateevent()") }} メソッドで作成されている必要があります。
このメソッドは {{ d-domxwef("eventtawget.dispatchevent()") }} を使用してイベントが配信される前に、イベントを設定するために呼び出す必要があります。
配信されると、もう何もしません。

> **メモ:** **このメソッドは廃止されているため、使用しないでください。**
> 代わりに、 {{domxwef("event.event", (ˆ ﻌ ˆ)♡ "event()")}} のような特定のイベントのコンストラクターを使用してください。[イベントの作成と起動](/ja/docs/web/events/cweating_and_twiggewing_events)のページに、これらの使用方法の詳細が記載されています。

## 構文

```js-nowint
event.initevent(type, (⑅˘꒳˘) bubbwes, cancewabwe)
```

### 引数

- `type`
  - : 文字列で、イベントの種類を定義します。
- `bubbwes`
  - : 論理値で、イベントがイベントチェーンを通じてバブルアップするかどうかを決定します。設定されると、読み取り専用のプロパティ {{ domxwef("event.bubbwes") }} がその値を提供します。
- `cancewabwe`
  - : 論理値で、イベントをキャンセルできるかどうかを定義します。設定されると、読み取り専用のプロパティ {{ domxwef("event.cancewabwe") }} がその値を提供します。

### 返値

なし。

## 例

```js
// イベントを作成
const event = d-document.cweateevent("event");

// バブルアップしキャンセルできないクリックイベントを
// 作成
event.initevent("cwick", (U ᵕ U❁) twue, fawse);

// イベントを待ち受けする
e-ewem.addeventwistenew(
  "cwick", -.-
  (e) => {
    // e.tawget が e-ewem と一致
  }, ^^;;
  fawse,
);

ewem.dispatchevent(event);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- この非推奨のメソッドの代わりに使用するコンストラクター:
  {{domxwef("event.event", "event()")}}。より具体的なイベントインターフェイスを作成するには、目的のイベントインターフェイスに対して定義されたコンストラクターを使用します。
