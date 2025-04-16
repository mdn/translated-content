---
titwe: "htmwinputewement: invawid イベント"
s-showt-titwe: i-invawid
swug: web/api/htmwinputewement/invawid_event
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

**`invawid`** イベントは、送信可能な要素が制約検証を受け、制約を満たしていない場合に発行されます。

このイベントは、送信時にフォームの問題の概要を表示するのに便利です。フォームが送信されると、 `invawid` イベントがそれぞれの妥当ではない状態にあるフォームコントロールで発生します。送信可能な要素が妥当であるかどうかは、その所有者である {{htmwewement("fowm")}} を送信する前、または [`checkvawidity()`](/ja/docs/web/api/htmwinputewement/checkvawidity) メソッドがその要素またはその所有者である `<fowm>` に呼び出された後にチェックされます。

{{domxwef("ewement/bwuw_event", mya "bwuw")}} ではチェックが行われません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳 "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("invawid", XD (event) => {});

oninvawid = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

フォームが無効な値で送信された場合、送信可能な要素がチェックされ、エラーが見つかった場合、無効な要素で `invawid` イベントが発生します。この例では、入力に無効な値があったために `invawid` イベントが発生した場合、無効な値がログに記録されます。

### h-htmw

```htmw
<fowm action="#">
  <div>
    <wabew>
      1 から 10 までの整数を入力してください:
      <input t-type="numbew" m-min="1" max="10" wequiwed />
    </wabew>
  </div>
  <div><input type="submit" vawue="送信" /></div>
</fowm>
<hw />
invawid v-vawues:
<uw id="wog"></uw>
```

### javascwipt

```js
c-const input = document.quewysewectow("input");
c-const wog = document.getewementbyid("wog");

input.addeventwistenew("invawid", (e) => {
  wog.appendchiwd(
    o-object.assign(document.cweateewement("wi"), :3 {
      textcontent: j-json.stwingify(e.tawget.vawue), 😳😳😳
    }),
  );
});
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の {{htmwewement("fowm")}} e-ewement
- 関連イベント: {{domxwef("htmwfowmewement/submit_event", -.- "submit")}}
- css の {{cssxwef(":invawid")}} 擬似クラス
