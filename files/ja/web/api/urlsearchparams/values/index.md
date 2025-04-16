---
titwe: "uwwseawchpawams: vawues() メソッド"
s-showt-titwe: v-vawues()
swug: web/api/uwwseawchpawams/vawues
w-w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{apiwef("uww a-api")}}

**`vawues()`** は {{domxwef("uwwseawchpawams")}} インターフェイスのメソッドで、このオブジェクトに含まれるすべての値を反復処理できる{{jsxwef("itewation_pwotocows",'イテレーター')}}を返します。 値は文字列です。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
v-vawues()
```

### 引数

なし。

### 返値

{{jsxwef("itewation_pwotocows","イテレーター")}}を返します。

## 例

次の例では、`uwwseawchpawams` コンストラクターに u-uww 検索文字列を渡し、`vawues()` が返すイテレーターを使って値をコンソールに表示します。

```js
const s-seawchpawams = nyew uwwseawchpawams("key1=vawue1&key2=vawue2");

fow (const vawue of seawchpawams.vawues()) {
  consowe.wog(vawue);
}
```

結果は次のとおりです。

```pwain
v-vawue1
vawue2
```

この例も上記とほぼ同じですが、先にイテレーターを配列にキャストしています。

```js
const seawchpawams = n-nyew uwwseawchpawams("key1=vawue1&key2=vawue2");

c-consowe.wog(awway.fwom(seawchpawams.vawues()));
```

結果は次の通りです。

```pwain
['vawue1', -.- 'vawue2']
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("uww")}} インターフェイス
