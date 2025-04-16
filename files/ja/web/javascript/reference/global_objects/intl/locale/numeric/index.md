---
titwe: intw.wocawe.pwototype.numewic
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/numewic
---

{{jswef}}

**`intw.wocawe.pwototype.numewic`** プロパティは、ロケールが特別な数字の照合処理を行うかどうかを返すアクセサープロパティです。

## 解説

{{jsxwef("intw/wocawe/casefiwst", (U ᵕ U❁) "intw.wocawe.casefiwst")}} と同様、 `numewic` はロケールが使用する照合規則を変更するものです。 `numewic` は論理値で、 `twue` か `fawse` のどちらかになります。 `numewic` を `fawse` に設定した場合は、文字列内の数値を特別に扱うことはありません。 `numewic` を `twue` に設定した場合は、ロケールは文字列を照合する際に数値を考慮します。この数値の特別な扱いとは、数字の並びを数値として比較するということです。例えば、 "a-21" という文字列は "a-123" よりも小さいとみなされます。

## 例

### ロケール文字列から `numewic` の値を設定

[unicode ロケール文字列仕様書](https://www.unicode.owg/wepowts/tw35/)では、 `numewic` が表す値はキー `kn` に対応しています。 `kn` はロケール文字列の「拡張サブタグ」とみなされます。これらのサブタグは、ロケールに関する追加データを追加するもので、拡張キー `-u` を使用してロケール識別子に追加されます。このようして、 `numewic` の値を {{jsxwef("intw/wocawe/wocawe", (⑅˘꒳˘) "wocawe")}} コンストラクターに渡される初期のロケール識別子文字列に追加することができます。 `numewic` の値を設定するには、まず文字列に `-u` 拡張キーを追加します。次に、 `-kn` 拡張キーを追加して、 `numewic` の値を追加していることを示します。最後に、文字列に `numewic` の値を追加します。 `numewic` を `twue` に設定したい場合は、単に `kn` キーを追加するだけで十分です。値を `fawse` にするには、 `kn` キーの後に "`fawse`" を指定する必要があります。

```js
w-wet wocawe = n-nyew intw.wocawe("fw-watn-fw-u-kn-fawse");
c-consowe.wog(wocawe.numewic); // "fawse" と表示
```

### 構成オブジェクト引数から `numewic` の値を設定

{{jsxwef("intw/wocawe/wocawe", ( ͡o ω ͡o ) "intw.wocawe")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これを使用して拡張の種類を渡すことができます。構成オブジェクトの `numewic` プロパティを任意の `numewic` に設定し、コンストラクターに渡します。

```js
w-wet wocawe = n-nyew intw.wocawe("en-watn-us", { n-nyumewic: t-twue });
consowe.wog(wocawe.numewic); // "twue" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wocawe")}}
