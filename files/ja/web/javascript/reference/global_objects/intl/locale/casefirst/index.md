---
title: Intl.Locale.prototype.caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
---

{{JSRef}}

**`Intl.Locale.prototype.caseFirst`** プロパティは、ロケールの照合規則に大文字小文字を考慮するかどうかを返すアクセサープロパティです。

## 解説

ロケールの照合規則は、そのロケールでの文字列の並び順を決定するために用いられます。ロケールによっては、照合処理で文字の大文字小文字を使用する場合があります。この追加ルールは、 {{jsxref("Intl/Locale", "Locale")}} の `caseFirst` プロパティで表現することができます。

`caseFirst` プロパティには下記の表にある通り、 3 種類の値を指定することができます。

### `caseFirst` の値

| 値      | 説明                                       |
| ------- | ------------------------------------------ |
| `upper` | 大文字が小文字よりも前に並べられます。     |
| `lower` | 小文字が大文字よりも前に並べられます。     |
| `false` | 大文字と小文字で特別な並べ替えはしません。 |

## 例

### ロケール文字列による `caseFirst` 値の設定

[Unicode ロケール文字列仕様書](https://www.unicode.org/reports/tr35/)では、 `caseFirst` が表す値は `kf` キーに対応します。 `kf` はロケール文字列の「拡張子サブタグ」として扱われます。これらのサブタグは、ロケールに関するデータを追加するもので、 `-u` 拡張を使用してロケール識別子に追加されます。つまり、 `caseFirst` の値は、 `Locale` コンストラクターに渡される初期のロケール識別子文字列に追加することができます。 `caseFirst` の値を追加するには、まず文字列に `-u` 拡張キーを追加します。次に、照合順序の型を追加することを示すために `-kf` 拡張キーを追加します。最後に、 `caseFirst` の値を文字列に追加します。

```js
let locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // "upper" と表示
```

### 構成オブジェクト引数による caseFirst の値の設定

{{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターには、オプションで構成オブジェクトの引数があり、拡張の種類を渡すために使用することができます。構成オブジェクトの `caseFirst` プロパティを望みの `caseFirst` の値に設定し、コンストラクターに渡します。

```js
let locale = new Intl.Locale("en-Latn-US", { caseFirst: "lower" });
console.log(locale.caseFirst); // "lower" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [Unicode case first collation spec](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
