---
title: Intl.Collator() コンストラクター
short-title: Intl.Collator()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl.Collator()`** コンストラクターは
{{jsxref("Intl.Collator")}} オブジェクトを生成します。

{{InteractiveExample("JavaScript デモ: Intl.Collator")}}

```js interactive-example
console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("de").compare));
// 予想される結果: Array ["a", "ä", "z", "Z"]

console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("sv").compare));
// 予想される結果: Array ["a", "z", "Z", "ä"]

console.log(
  ["Z", "a", "z", "ä"].sort(
    new Intl.Collator("de", { caseFirst: "upper" }).compare,
  ),
);
// 予想される結果: Array ["a", "ä", "Z", "z"]
```

## 構文

```js-nolint
new Intl.Collator()
new Intl.Collator(locales)
new Intl.Collator(locales, options)

Intl.Collator()
Intl.Collator(locales)
Intl.Collator(locales, options)
```

> [!NOTE]
> `Intl.Collator()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けても付けなくても呼び出すことができます。どちらも新しい `Intl.Collator` インスタンスを生成します。

### 引数

- `locales` {{optional_inline}}
  - : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}の文字列、またはそのような文字列の配列です。`undefined` が渡された場合、または指定されたロケール識別子のいずれも対応していない場合は、ランタイムのデフォルトのロケールが使用されます。`locales` 引数の一般的な形と解釈については、[`Intl` メインページの引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。

    以下の Unicode 拡張キーが使用可能です。
    - `co`
      - : [`collation`](#collation) を参照してください。
    - `kn`
      - : [`numeric`](#numeric) を参照してください。
    - `kf`
      - : [`caseFirst`](#casefirst) を参照してください。

    これらのキーは通常、 `options` でも設定することができます（下記でリストアップします）。両方が設定されている場合は、 `options` のプロパティが優先されます。

- `options` {{optional_inline}}
  - : 以下のプロパティ（取得順、すべてオプション）が含まれているオブジェクトです。
    - `usage`
      - : 比較が文字列のリストの並べ替えのためであるか、それともキーによる文字列リストの曖昧検索（ラテン文字のアクセント記号や大文字と小文字を区別しない）か。以下の値が指定できます。
        - `"sort"` （デフォルト）
          - : 文字列のリストの並べ替えのため。
        - `"search"`
          - : 各リストアイテムをキーに対して完全一致を検査することで、文字列のリストをフィルタリングするために使用します。`"search"` を使用する場合、呼び出し側は `compare()` が 0 を返すか 0 以外を返すかのみに注目し、0 以外の返値同士を判別すべきではありません。つまり、`"search"` を並べ替えや順序付けに使用することは適切ではありません。
    - `localeMatcher`
      - : 使用するロケール照合アルゴリズムです。利用可能な値は `"lookup"` と `"best fit"` です。既定値は `"best fit"` です。このオプションについての詳細は、[ロケールの識別とネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)のページを参照してください。
    - `collation`
      - : `"emoji"`、`"pinyin"`、`"stroke"` などの、特定のロケール向けの変化形の照合順序です。`usage` が `"sort"` の場合にのみ有効です（`"search"` は、その基盤となる独自の照合型であるためです）。対応している照合型のリストについては、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している照合型) をご覧ください。デフォルトは `"default"` です。このオプションは、Unicode の `co` 拡張キーを通じて設定することも可能です。両方が指定された場合、この `options` プロパティが優先されます。
    - `numeric`
      - : 数値のソート順序として "1" < "2" < "10" のような順序を使用するかどうか。指定可能な値は `true` および `false` で、デフォルトは `false` です。このオプションは、Unicode の `kn` 拡張キーを通じて設定することも可能です。両方が指定された場合、この `options` プロパティが優先されます。
    - `caseFirst`
      - : 大文字と小文字のどちらを先に並べるかを指定します。使用できる値は `"upper"`, `"lower"`, `"false"` （ロケールのデフォルトを使用）です。。このオプションは、Unicode の `kf` 拡張キーを通じて設定することも可能です。両方が指定された場合、この `options` プロパティが優先されます。
    - `sensitivity`
      - : 文字の違いをどの程度までを区別するかです。以下の値が指定可能です。
        - `"base"`
          - : ベース文字が異なる場合にのみ、異なる文字であると評価します。たとえば a ≠ b, a = á, a = A となります。Unicode の照合順序アルゴリズムにおいては、これは第一優先度レベルに相当します。
        - `"accent"`
          - : ベース文字が異なるか、またはアクセントその他の発音区別符号が異なれば、異なる文字であると評価します。例えば a ≠ b, a ≠ á, a = A となります。Unicode の照合順序アルゴリズムにおいては、これは第二優先度レベルに相当します。
        - `"case"`
          - : ベース文字が異なるか、ベース文字が同一でも大文字小文字が異なれば、異なる文字であると評価します。例えば a ≠ b, a = á, a ≠ A となります。Unicode の照合順序アルゴリズムにおいては、これはケースレベル処理付きの第一優先度レベルに相当します。
        - `"variant"`
          - : ベース文字、アクセントその他の発音区別符号、および大文字小文字のいずれかが異なれば、異なる文字であると評価します。他の違いも考慮されるかもしれません。例えば a ≠ b, a ≠ á, a ≠ A となります。Unicode の照合順序アルゴリズムにおいては、これは第三優先度レベルに相当します。

        `"sort"` を使用する場合、デフォルトは `"variant"` です。仕様上、`"search"` を使用する場合はロケールに依存しますが、通常は `"variant"` となります。`"search"` のコア機能はアクセントや大文字と小文字を区別しないフィルタリングであるため、`"base"`（あるいは `"case"`）に設定するのが最も理にかなっています。

    - `ignorePunctuation`
      - : 句読点を無視するかどうか。指定可能な値は `true` または `false` です。デフォルトでは、タイ語 (`th`) は `true`、それ以外のすべての言語は `false` です。

### 例外

- {{jsxref("RangeError")}}
  - : `locales` または `options` に不正な値が含まれている場合に発生します。

## 例

### Collator の使用

次の例では、文字列が別の文字列の前であるか、後であるか、または同じレベルで発生したのかの様々な可能性のある結果を示しています。

```js
console.log(new Intl.Collator().compare("a", "c")); // -1 またはその他の負の値
console.log(new Intl.Collator().compare("c", "a")); // 1 またはその他の正の値
console.log(new Intl.Collator().compare("a", "a")); // 0
```

上記のコードで示された結果は、ブラウザーやブラウザーのバージョンによって異なる可能性があることに注意してください。これは、値が実装固有のものであるためです。つまり、仕様では前後の値が負と正の値であることだけが要求されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
