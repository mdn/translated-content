---
title: Intl.Locale.prototype.numeric
short-title: numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

**`numeric`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、このロケールが特別な数字の照合処理を行うかどうかを返します。

## 解説

{{jsxref("Intl/Locale/caseFirst", "caseFirst")}} と同様、 `numeric` はロケールが使用する照合規則を変更するものです。 `numeric` は論理値で、 `true` か `false` のどちらかになります。 `numeric` を `false` に設定した場合は、文字列内の数値を特別に扱うことはありません。 `numeric` を `true` に設定した場合は、ロケールは文字列を照合する際に数値を考慮します。この数値の特別な扱いとは、数字の並びを数値として比較するということです。例えば、 "A-21" という文字列は "A-123" よりも小さいとみなされます。

`numeric` プロパティの値は、ロケール識別子の `kn` キー、または {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `numeric` オプションを通じて、構築時に設定されます。両方が存在する場合、後者が優先されます。どちらも存在しない場合、プロパティの値は `undefined` となります。

`numeric` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

他のロケールサブタグと同様に、`numeric` 値はロケール文字列を介して、またはコンストラクターへの設定オブジェクト引数として、{{jsxref("Intl.Locale")}} オブジェクトに追加できます。

### ロケール文字列から `numeric` の値を設定

[Unicode ロケール文字列仕様書](https://www.unicode.org/reports/tr35/)では、 `numeric` は「拡張サブタグ」の一つです。これらのサブタグは、ロケールに関する追加データを追加するもので、拡張キー `-u` を使用してロケール識別子に追加されます。このようして、 `numeric` の値を {{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターに渡される初期のロケール識別子文字列に追加することができます。 `numeric` の値を設定するには、まず文字列に `-u` 拡張キーを追加します。次に、 `-kn` 拡張キーを追加して、 `numeric` の値を追加していることを示します。最後に、文字列に `numeric` の値を追加します。 `numeric` を `true` に設定したい場合は、単に `kn` キーを追加するだけで十分です。値を `false` にするには、 `kn` キーの後に `"false"` を指定する必要があります。

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(locale.numeric); // "false" と表示
```

### 構成オブジェクト引数から `numeric` の値を設定

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これを使用して拡張の種類を渡すことができます。構成オブジェクトの `numeric` プロパティを任意の `numeric` に設定し、コンストラクターに渡します。

```js
const locale = new Intl.Locale("en-Latn-US", { numeric: true });
console.log(locale.numeric); // "true" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
