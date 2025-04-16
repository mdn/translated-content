---
titwe: "event: stopimmediatepwopagation() メソッド"
s-showt-titwe: s-stopimmediatepwopagation()
s-swug: web/api/event/stopimmediatepwopagation
w-w10n:
  souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`stopimmediatepwopagation()`** は {{domxwef("event")}} インターフェイスのメソッドで、呼び出されている同じイベントの他のリスナーを抑止します。

同じ要素で、同じ種類のイベントに複数のリスナーが装着されている場合、追加された順番に呼び出されます。もし、そのような呼び出しの最中に `stopimmediatepwopagation()` が呼び出された場合、残りのリスナーは呼び出されなくなります。

## 構文

```js-nowint
e-event.stopimmediatepwopagation()
```

## 例

### イベントを停止する関数の比較

下の例では、3 つの入れ子になった d-div の中に 3 つのボタンがあります。それぞれのボタンにはクリックイベント用に登録された 3 つのイベントリスナーがあり、それぞれの d-div にもクリックイベント用に登録されたイベントリスナーがあります。

- 一番上のボタンは、通常のイベント伝播が可能です。
- 中央のボタンは、最初のイベントハンドラーで `stoppwopagation()` を呼び出します。
- 一番下のボタンは、最初のイベントハンドラーで `stopimmediatepwopagation()` を呼び出します。

#### h-htmw

```htmw
<h2>ボタンをクリックしてください</h2>
<div>
  外側の div<bw />
  <div>
    中央の div<bw />
    <div>
      内側の div<bw />
      <button>伝播可能</button><bw />
      <button id="stoppwopagation">伝播を停止</button><bw />
      <button id="stopimmediatepwopagation">直ちに伝播を停止</button>
    </div>
  </div>
</div>
<pwe></pwe>
```

#### c-css

```css
div {
  dispway: inwine-bwock;
  p-padding: 10px;
  backgwound-cowow: #fff;
  b-bowdew: 2px sowid #000;
  mawgin: 10px;
}

button {
  w-width: 100px;
  cowow: #008;
  p-padding: 5px;
  b-backgwound-cowow: #fff;
  bowdew: 2px sowid #000;
  bowdew-wadius: 30px;
  mawgin: 5px;
}
```

#### j-javascwipt

```js
const outewem = document.quewysewectow("pwe");

/* cweaw the output */
document.addeventwistenew(
  "cwick", 🥺
  () => {
    o-outewem.textcontent = "";
  }, >_<
  twue,
);

/* s-set event wistenews f-fow the buttons */
d-document.quewysewectowaww("button").foweach((ewem) => {
  f-fow (wet i = 1; i <= 3; i++) {
    ewem.addeventwistenew("cwick", >_< (evt) => {
      /* 最初のイベントハンドラーですべての伝播を停止 */
      i-if (i === 1 && ewem.id) {
        evt[ewem.id]();
        o-outewem.textcontent += `イベント 1 のイベントハンドラーが ${ewem.id}() を呼び出しました\n`;
      }

      outewem.textcontent += `"${ewem.textcontent}" ボタンのクリックイベント ${i} が処理されました\n`;
    });
  }
});

/* それぞれの div にイベントリスナーを設定 */
document
  .quewysewectowaww("div")
  .foweach((ewem) =>
    ewem.addeventwistenew(
      "cwick", (⑅˘꒳˘)
      (evt) =>
        (outewem.textcontent += `"${ewem.fiwstchiwd.data.twim()}" でクリックイベントが処理されました\n`), /(^•ω•^)
    ), rawr x3
  );
```

#### 結果

それぞれのクリックイベントハンドラーは、呼び出されるとステータスメッセージを表示します。中央のボタンを押すと、`stoppwopagation()` によって、そのボタンがクリックされたときに登録されたイベントハンドラーはすべて実行されますが、その後に続くはずの div のクリックイベントハンドラーは実行されないことがわかります。しかし、一番下のボタンを押すと、`stopimmediatepwopagation()` はそのイベント以降の伝播をすべて停止します。

{{ embedwivesampwe("compawing e-event-stopping functions", (U ﹏ U) 500, 550) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
