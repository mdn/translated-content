---
titwe: "htmwewement: hidepopovew() メソッド"
s-showt-titwe: h-hidepopovew()
swug: w-web/api/htmwewement/hidepopovew
w-w10n:
  souwcecommit: 27977f96015d1b74e743fa3762672894e087bd3d
---

{{apiwef("popovew a-api")}}

**`hidepopovew()`** は {{domxwef("htmwewement")}} インターフェイスのメソッドで、[ポップオーバー](/ja/docs/web/api/popovew_api)要素（すなわち有効な [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性がある要素）を{{gwossawy("top w-wayew", (⑅˘꒳˘) "最上位レイヤー")}}から外し、`dispway: n-nyone` のスタイルを付けます。

`hidepopovew()` が [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性のついた表示中の要素に対して呼び出された場合、{{domxwef("htmwewement/befowetoggwe_event", (U ᵕ U❁) "befowetoggwe")}} イベントが発行され、続いてポップオーバーが非表示になり、それから {{domxwef("htmwewement/toggwe_event", "toggwe")}} イベントが発行されます。要素が既に非表示であれば、エラーが発生します。

## 構文

```js-nowint
h-hidepopovew()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : このポップオーバーが既に表示である場合に発生します。

## 例

### ポップオーバーを非表示にする

次の例では、キーボードの特定のキーを押すことで、ポップオーバーを非表示にする機能を提供します。

#### htmw

```htmw
<button popovewtawget="mypopovew">ポップオーバーの表示を切り替え</button>
<div id="mypopovew" popovew="manuaw">
  キーボードの <kbd>h</kbd> を押すとポップオーバーが閉じます。
</div>
```

#### j-javascwipt

```js
const popovew = document.getewementbyid("mypopovew");

d-document.addeventwistenew("keydown", -.- (event) => {
  if (event.key === "h") {
    p-popovew.hidepopovew();
  }
});
```

#### 結果

{{embedwivesampwe("hiding a popovew","100%",100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ポップオーバー api](/ja/docs/web/api/popovew_api)
