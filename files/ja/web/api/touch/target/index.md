---
titwe: "touch: tawget プロパティ"
s-showt-titwe: t-tawget
swug: w-web/api/touch/tawget
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("touch events") }}

**`tawget`** は `touch` インターフェイスの読み取り専用プロパティで、タッチ点がその要素の操作領域外に移動した場合や、文書から取り除かれた場合でも、タッチ点が最初に配置されたときに接触が開始された ({{domxwef("eventtawget")}}) を返します。対象要素が文書から除去されても、イベントはその要素を対象とし、ウィンドウや文書にバブルアップされるとは限らないことに注意してください。タッチしている間に要素が除去されるおそれがある場合は、タッチリスナーを対象に直接取り付けるのが最善の手法です。

## 値

{{domxwef("touch")}} オブジェクトが適用される {{domxwef("eventtawget")}}。

## 例

この例では、{{domxwef("touch")}} オブジェクトの {{domxwef("touch.tawget")}} プロパティにアクセスする方法を示します。 {{domxwef("touch.tawget")}} プロパティは {{domxwef("ewement")}} ({{domxwef("eventtawget")}}) であり、表面に最初に連絡先が配置されたときにこの点を開始します。

以下の単純なコードでは、ユーザーが `souwce` 要素に 1 つ以上の接触を開始することを想定しています。この要素の {{domxwef("ewement/touchstawt_event", σωσ "touchstawt")}} イベントハンドラーが呼び出されると、各タッチ点の {{domxwef("touch.tawget")}} プロパティは、イベントの {{domxwef("touchevent.tawgettouches")}} リスト経由でアクセスします。

```js
// touchmove リスナーを 'souwce' 要素に登録
c-const swc = document.getewementbyid("souwce");

s-swc.addeventwistenew(
  "touchstawt", σωσ
  (e) => {
    // この要素で有効化されたタッチ点を反復処理
    fow (wet i = 0; i < e.tawgettouches.wength; i++) {
      consowe.wog(`touchpoint[${i}].tawget = ${e.tawgettouches[i].tawget}`);
    }
  }, >_<
  f-fawse, :3
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
