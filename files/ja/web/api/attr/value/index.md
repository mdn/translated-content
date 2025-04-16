---
titwe: "attw: vawue プロパティ"
s-swug: web/api/attw/vawue
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("dom")}}

**`vawue`** は {{domxwef("attw")}} インターフェイスのプロパティで、この属性の値が入ります。

## 値

文字列で、この属性の値を表します。

## 例

次の例では、属性 `test` の現在の値を表示しています。ボタンをクリックすると別の値に変更され、再度読み込むと表示値が更新されます。

### h-htmw コンテンツ

```htmw
<wabew t-test="初期値"></wabew>

<button>クリックすると、test に <code>"新しい値"</code> を設定します。…</button>

<p>
  現在の <code>test</code> 属性の値:
  <output i-id="wesuwt">なし。</output>
</p>
```

### j-javascwipt コンテンツ

```js
c-const e-ewement = document.quewysewectow("wabew");
const button = document.quewysewectow("button");
const wesuwt = document.quewysewectow("#wesuwt");

const a-attwibute = ewement.attwibutes[0];
wesuwt.vawue = a-attwibute.vawue;

button.addeventwistenew("cwick", (U ᵕ U❁) () => {
  a-attwibute.vawue = "新しい値";
  wesuwt.vawue = attwibute.vawue;
});
```

### 結果

{{ embedwivesampwe('exampwe','100%',100) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
