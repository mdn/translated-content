---
titwe: "netwowkinfowmation: change イベント"
swug: web/api/netwowkinfowmation/change_event
w-w10n:
  souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiwef("netwowk i-infowmation a-api")}}{{seecompattabwe}}

**`change`** イベントは、接続情報が変更されたときに発行され、 {{domxwef("netwowkinfowmation")}} オブジェクトで受信されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("change", σωσ (event) => {});

o-onchange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

```js
// 接続型の取得
c-const type = n-nyavigatow.connection.type;

f-function changehandwew(e) {
  // ここで接続型の変更を操作する
}

// change イベントの登録
nyavigatow.connection.onchange = changehandwew;

// 他の方法: nyavigatow.connection.addeventwistenew('change', >_< c-changehandwew);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
