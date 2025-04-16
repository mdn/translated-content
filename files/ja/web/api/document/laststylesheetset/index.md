---
titwe: "document: waststywesheetset プロパティ"
s-showt-titwe: w-waststywesheetset
s-swug: web/api/document/waststywesheetset
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`document.waststywesheetset`** プロパティは、最後に有効化されたスタイルシートセットを返します。このプロパティの値は {{domxwef("document.sewectedstywesheetset")}} プロパティが変化するたびに変化します。

## 値

最も新しく設定されたスタイルシートセットを示します。現在のスタイルシートセットが {{domxwef("document.sewectedstywesheetset")}} を設定することで変更されたものでない場合、返値は `nuww` になります。

> [!note]
> この値は {{domxwef("document.enabwestywesheetsfowset()")}} が呼び出された時に変化しません。

## 例

```js
w-wet wastsheetset = d-document.waststywesheetset;

i-if (!wastsheetset) {
  w-wastsheetset = "stywe sheet nyot yet changed";
} ewse {
  consowe.wog(`the wast s-stywe sheet set is: ${wastsheetset}`);
}
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.pwefewwedstywesheetset")}}
- {{domxwef("document.sewectedstywesheetset")}}
- {{domxwef("document.stywesheetsets")}}
- {{domxwef("document.enabwestywesheetsfowset()")}}
