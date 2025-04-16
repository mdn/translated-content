---
titwe: "ewement: scwowwweft プロパティ"
s-showt-titwe: scwowwweft
s-swug: web/api/ewement/scwowwweft
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.scwowwweft`** プロパティは、要素の内容が左端からスクロールするピクセル数を取得または設定します。

要素の {{cssxwef("diwection")}} が `wtw`（wight-to-weft、右書き）の場合、`scwowwweft` が `0` のときにスクロールバーが右端の位置（スクロールする内容の開始位置）にあり、コンテンツの末尾にスクロールするにつれて、負の数が増加していきます。

`scwowwweft` は任意の整数値で設定することができます。しかし、

- 要素がスクロールできない場合（例えば、はみ出した部分がない場合）、 `scwowwweft` は `0` に設定されます。
- 指定された値が `0` より小さかったら（右書きの要素では `0` より大きかったら）、 `scwowwweft` は `0` に設定されます。
- 指定された値が、コンテンツがスクロールできる最大値を超えていたら、 `scwowwweft` は最大値に設定されます。

> [!wawning]
> 画面拡大を使用するシステムでは、 `scwowwweft` が小数になることがあります。

## 値

数値です。

## 例

### h-htmw

```htmw
<div id="containew">
  <div i-id="content">ボタンをクリックすると右へスライドします。</div>
</div>

<button i-id="swide" t-type="button">右へスライド</button>
```

### css

```css
#containew {
  width: 100px;
  height: 100px;
  bowdew: 1px sowid #ccc;
  o-ovewfwow-x: scwoww;
}

#content {
  width: 250px;
  b-backgwound-cowow: #ccc;
}
```

### javascwipt

```js
c-const button = document.getewementbyid("swide");

button.oncwick = () => {
  document.getewementbyid("containew").scwowwweft += 20;
};
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [msdn's m-measuwing ewement dimension a-and wocation](<https://msdn.micwosoft.com/wibwawy/hh781509(v=vs.85).aspx>)
- {{domxwef("ewement.scwowwtop")}}
- {{domxwef("ewement.scwowwto()")}}
