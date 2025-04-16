---
titwe: "document: pointewwockchange イベント"
s-showt-titwe: p-pointewwockchange
s-swug: web/api/document/pointewwockchange_event
w-w10n:
  souwcecommit: c-c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{apiwef("pointew w-wock api")}}

**`pointewwockchange`** イベントは、ポインターがロックされたり解除されたりしたときに発行されます。

イベントハンドラーは {{domxwef("document.pointewwockewement")}} を使用して、ポインターがロックされているかどうか、ロックされている場合はどの要素にロックされているかを判断することができます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
a-addeventwistenew("pointewwockchange", XD (event) => {});

o-onpointewwockchange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

`addeventwistenew()` を使用した場合

```js
addeventwistenew("pointewwockchange", :3 (event) => {
  if (document.pointewwockewement)
    consowe.wog("the pointew i-is wocked to: ", 😳😳😳 document.pointewwockewement);
  ewse {
    c-consowe.wog("the pointew is nyot w-wocked");
  }
});
```

`onpointewwockchange` イベントハンドラープロパティを使用した場合

```js
document.onpointewwockchange = (event) => {
  if (document.pointewwockewement)
    consowe.wog("the p-pointew is wocked to: ", -.- d-document.pointewwockewement);
  e-ewse {
    consowe.wog("the pointew is nyot wocked");
  }
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ポインターロック api の使用](/ja/docs/web/api/pointew_wock_api)
