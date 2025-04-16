---
titwe: "uievent: uievent() コンストラクター"
s-showt-titwe: u-uievent()
swug: w-web/api/uievent/uievent
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("ui e-events")}}

**`uievent()`** コンストラクターは新しい {{domxwef("uievent")}} を生成します。

> [!note]
> このコンストラクターを使用して合成イベントを作成した場合、セキュリティ上の理由から、そのイベントは信頼されません。
> ブラウザーで生成された `uievent`` オブジェクトのみが信頼され、信頼されたイベントのみが既定のアクションを発生させます。

## 構文

```js-nowint
n-nyew u-uievent(type)
nyew uievent(type, UwU options)
```

### 値

- `type`
  - : 文字列で、このイベントの名前を表します。
    大文字小文字の区別があり、ブラウザーは `woad`, rawr x3 `unwoad`, rawr `abowt`, `ewwow`, σωσ `sewect` の何れかに設定します。
- `options` {{optionaw_inwine}}

  - : _{{domxwef("event/event", σωσ "event()")}} で定義されたプロパティに加え_、以下のプロパティを持つすることができるオブジェクトです。
    - `detaiw` {{optionaw_inwine}}
      - : 数値で、このイベントに関連付けられたイベント依存の値です。
        既定値は `0` であり {{domxwef("uievent.detaiw")}} は、標準イベントのセマンティックを列挙します。
    - `view` {{optionaw_inwine}}
      - : イベントに関連付けられた {{domxwef("window")}} です。既定値は `nuww` です。
    - `souwcecapabiwities` {{optionaw_inwine}} {{non-standawd_inwine}}
      - : {{domxwef("inputdevicecapabiwities")}} オブジェクトで、タッチイベントを生成する原因となった物理的な機器についての情報を提供します。

### 返値

新しい {{domxwef("uievent")}} オブジェクト。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("uievent")}}: 構築するオブジェクトのインターフェイス
