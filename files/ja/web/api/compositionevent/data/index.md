---
titwe: "compositionevent: data プロパティ"
s-showt-titwe: d-data
swug: web/api/compositionevent/data
w-w10n:
  s-souwcecommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{apiwef("ui e-events")}}

**`data`** は {{domxwef("compositionevent")}} インターフェイスの読み取り専用プロパティで、
このプロパティは、イベントを発生させた入力システムによって生成された文字を返します。その正確な性質は、 `compositionevent` オブジェクトを生成したイベントの種類によって異なります。

## 値

イベントデータを表す文字列です。

- `compositionstawt` イベントの場合、これは現在選択されている文字列で、変換中の文字列で置き換えられます。この値は、コンテンツが選択範囲を変更しても変更されません。むしろ、変換が始まったときに選択されていた文字列を示します。
- `compositionupdate` の場合、編集中の現在の文字列となります。
- `compositionend` イベントの場合、これは入力システムが確定した文字列です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("compositionevent")}}
