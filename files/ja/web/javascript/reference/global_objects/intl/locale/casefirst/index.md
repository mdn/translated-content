---
title: Intl.Locale.prototype.caseFirst
short-title: caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**`caseFirst`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、ロケールの照合規則に大文字小文字を考慮するかどうかを返します。

## 解説

ロケールの照合規則は、そのロケールでの文字列の並び順を決定するために用いられます。ロケールによっては、照合処理で文字の大文字小文字を使用する場合があります。この追加ルールは、 {{jsxref("Intl.Locale")}} の `caseFirst` プロパティで表現することができます。`caseFirst` プロパティには下記の表にある通り、 3 種類の値を指定することができます。

| 値      | 説明                                       |
| ------- | ------------------------------------------ |
| `upper` | 大文字が小文字よりも前に並べられます。     |
| `lower` | 小文字が大文字よりも前に並べられます。     |
| `false` | 大文字と小文字で特別な並べ替えはしません。 |

`caseFirst` プロパティの値は、ロケール識別子の `kf` キー、または {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターの `caseFirst` オプションを通じて、構築時に設定されます。両方が存在する場合、後者が優先されます。どちらも存在しない場合、プロパティの値は `undefined` となります。

`caseFirst` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

他のロケールサブタグと同様に、 `caseFirst` の値はロケール文字列を介して、またはコンストラクターへの構成オブジェクト引数として、{{jsxref("Intl.Locale")}} オブジェクトに追加できます。

### ロケール文字列による caseFirst 値の設定

[Unicode ロケール文字列仕様書](https://www.unicode.org/reports/tr35/)では、 `caseFirst` は「拡張サブタグ」の一つです。これらのサブタグは、ロケールに関するデータを追加するもので、 `-u` 拡張を使用してロケール識別子に追加されます。`caseFirst` 値を、{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} コンストラクターに渡される初期ロケール識別子文字列に追加するには、まず `-u` 拡張キーが存在しない場合に追加します。次に、`caseFirst` の値を追加していることを示す `-kf` 拡張を追加します。最後に、 `caseFirst` の値を追加します。

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // "upper"
```

### 構成オブジェクト引数による caseFirst の値の設定

{{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターには、オプションで構成オブジェクトの引数があり、拡張の種類を渡すために使用することができます。構成オブジェクトの `caseFirst` プロパティを望みの `caseFirst` の値に設定し、コンストラクターに渡します。

```js
const locale = new Intl.Locale("en-Latn-US", { caseFirst: "lower" });
console.log(locale.caseFirst); // "lower"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [Unicode case first collation spec](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
