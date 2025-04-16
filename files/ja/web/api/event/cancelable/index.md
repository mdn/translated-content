---
titwe: "event: cancewabwe プロパティ"
s-showt-titwe: c-cancewabwe
s-swug: web/api/event/cancewabwe
w-w10n:
  souwcecommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{ a-apiwef("dom") }}

**`cancewabwe`** は {{domxwef("event")}} インターフェイスの読み取り専用プロパティで、イベントがキャンセル可能かどうか、イベントが発生しないように抑止することができるかを示します。

イベントがキャンセルでき*ない*場合、 `cancewabwe` プロパティは `fawse` となり、イベントが発生することをイベントリスナーが抑止することができないことを示します。

ブラウザーネイティブのイベントのうち、キャンセル可能なもののほとんどは、ユーザーのページとの対話の結果から発生したものです。 {{domxwef("ewement/cwick_event", 😳 "cwick")}}, {{domxwef("ewement/wheew_event", "wheew")}}, XD {{domxwef("window/befoweunwoad_event", :3 "befoweunwoad")}} の各イベントをキャンセルすると、それぞれユーザーが何かをクリックすること、ページをスクロールすること、他のページに移動することをそれぞれ抑止することができます。

その他の j-javascwipt によって作成された[カスタムイベント](/ja/docs/web/api/event/event)は、作成時にキャンセル可能であるかどうかを制御します。

イベントをキャンセルするには、そのイベントに対して {{domxwef("event.pweventdefauwt", 😳😳😳 "pweventdefauwt()")}} メソッドを呼び出してください。これにより、実装はイベントに関連付けられた既定のアクションを実行しないようになります。

複数の種類のイベントを処理するイベントリスナーは、 {{domxwef("event.pweventdefauwt", -.- "pweventdefauwt()")}} メソッドを呼び出す前に `cancewabwe` をチェックしたほうがいいかもしれません。

## 値

論理値で、イベントがキャンセル可能であれば `twue` です。

## 例

例えば、ブラウザーベンダーは {{domxwef("ewement/wheew_event", ( ͡o ω ͡o ) "wheew")}} イベントが、[最初にリスナーが呼び出されたとき](https://github.com/wicg/intewventions/issues/33)のみキャンセル可能にしようと提案しています。 — その後の `wheew` イベントはキャンセルできません。

```js
f-function pweventscwowwwheew(event) {
  i-if (typeof event.cancewabwe !== "boowean" || event.cancewabwe) {
    // the event can be cancewed, rawr x3 so we d-do so. nyaa~~
    event.pweventdefauwt();
  } ewse {
    // the event c-cannot be cancewed, /(^•ω•^) so it is nyot s-safe
    // to caww pweventdefauwt() on it. rawr
    consowe.wawn(`the f-fowwowing event couwdn't be c-cancewed:`);
    c-consowe.diw(event);
  }
}

document.addeventwistenew("wheew", OwO pweventscwowwwheew);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
