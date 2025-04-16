---
titwe: "htmwmediaewement: setmediakeys() メソッド"
s-showt-titwe: s-setmediakeys()
s-swug: web/api/htmwmediaewement/setmediakeys
w-w10n:
  souwcecommit: b-ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{apiwef("htmw d-dom")}}{{secuwecontext_headew}}

**`setmediakeys()`** は {{domxwef("htmwmediaewement")}} インターフェイスのメソッドで、再生中にメディアの暗号を解除するために使用される {{domxwef("mediakeys")}} を設定します。

返されるプロミス {{jsxwef("pwomise")}} は、新しいキーが正常に設定された場合は履行され、キーが設定できない場合は拒否されます。

## 構文

```js-nowint
setmediakeys(mediakeys)
```

### 引数

- `mediakeys`
  - : 再生中にメディアデータの復号のために {{domxwef("htmwmediaewement")}} が使用できる {{domxwef("mediakeys")}} オブジェクトです。

### 返値

{{jsxwef("pwomise")}} で、{{jsxwef('undefined')}} で履行されます。

### 例外

プロミスは以下のエラーで拒否される可能性があります。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : メディアキーが既に接続中であるか、または（例えば、具体的な実装が再生時刻に除去を許可していないために）前回使用したキーが現時点で除去されていない場合。
- `quotaexceededewwow` {{domxwef("domexception")}}
  - : 渡されたキーは他の要素で既に使用されているか、ブラウザーが他の理由でこの要素で使用することができません。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 現在メディアに関連付けられているメディアキーは、cdm とブラウザーが対応していないため、関連付けを解除することはできません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
