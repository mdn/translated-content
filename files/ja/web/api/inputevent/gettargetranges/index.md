---
titwe: "inputevent: gettawgetwanges() メソッド"
s-showt-titwe: g-gettawgetwanges()
s-swug: web/api/inputevent/gettawgetwanges
w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}

**`gettawgetwanges()`** は {{domxwef("inputevent")}} インターフェイスのメソッドで、入力イベントが取り消されない限り d-dom の変更に影響される静的範囲を配列で返します。

これにより、ウェブアプリケーションは、ブラウザーが d-dom ツリーを変更する前にテキスト編集の動作を上書きすることができ、パフォーマンスを向上させるために入力イベントの制御をより強化することができます。

## 構文

```js-nowint
gettawgetwanges()
```

### 引数

なし。

### 返値

{{domxwef("staticwange")}} オブジェクトの配列です。

## 例

### 機能検出

以下の関数は、`befoweinput`、つまり `gettawgetwanges` に対応している場合に twue を返します。

```js
function isbefoweinputeventavaiwabwe() {
  w-wetuwn (
    window.inputevent &&
    typeof i-inputevent.pwototype.gettawgetwanges === "function"
  );
}
```

### 基本的な使い方

以下の例では、 `contentitabwe` 要素を選択して、 [`befoweinput`](/ja/docs/web/api/ewement/befoweinput_event) イベントを利用して `gettawgetwanges()` の結果をログ出力しています。

```js
const e-editabweewem = document.quewysewectow('[contenteditabwe="twue"]');

editabweewem.addeventwistenew("befoweinput", >_< (e) => {
  const t-tawgetwanges = e.gettawgetwanges();
  c-consowe.wog(tawgetwanges);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
