---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl`** は名前空間オブジェクトで、国際化コンストラクターやその他の言語依存関数に共通する機能などの複数のコンストラクターを含みます。これらは全体で ECMAScript 国際化 API を構成し、言語依存の文字列比較、数値の書式設定、日付と時刻の書式設定などを提供します。

## 解説

ほとんどのグローバルオブジェクトとは異なり、`Intl` はコンストラクターではありません。[`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)と組み合わせて使用したり、`Intl` オブジェクトを関数として呼び出したりすることはできません。`Intl` のすべてのプロパティとメソッドは静的（{{jsxref("Math")}} オブジェクトと同様）です。

国際化コンストラクターや他のコンストラクターの言語を意識したメソッド ([関連情報](#関連情報)に記載) は、ロケールを識別して実際に使用するものを決定するために共通のパターンを使用しています。これらはすべて、 `locales` と `options` の引数を受け取り、 `options.localeMatcher` プロパティで指定したアルゴリズムを使用して 要求されたロケールと対応しているロケールとのネゴシエーションを行います。

### locales 引数

`locales` 引数は、指定された操作に使用するロケールを特定するために使用されます。 JavaScript の実装では `locales` を調べて、表現された指定を満たすものに最も近い、理解可能なロケールを計算します。 `locales` は次のものを取ることができます。

- `undefined` （または省略）：その実装の既定のロケールが使用されます。
- ロケール：ロケール識別子またはロケール識別子を持つ [`Intl.Locale`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) オブジェクトです。
- ロケールのリスト：何らかの他の値で、オブジェクトに変換され、ロケールの配列として扱われます。

後 2 者では、実際に使用されるロケールは、[ロケールネゴシエーション](#ロケールネゴシエーション)によって決定された、最も良く対応しているロケールになります。ロケール識別子が文字列またはオブジェクトでない場合、{{jsxref("TypeError")}} が発生します。ロケール識別子が構文的に無効な文字列である場合、{{jsxref("RangeError")}} が発生します。ロケール識別子が正しく構成されているにもかかわらず、実装がそれを認識しない場合、その識別子は無視され、リスト内の次のロケールが考慮されます。最終的にはシステムのロケールにフォールバックします。ただし、特定のロケール名が無視されるとは限らないため、実装が将来的に任意のロケール用のデータを追加する可能性がある点に注意が必要です。 例えば、 `new Intl.DateTimeFormat("default")` は、 `"default"` が構文的に有効であるが、いかなるロケールとしても認識されないため、実装の既定のロケールのみを使用します。

ロケール識別子は、以下の要素で構成される文字列です。

1. 言語サブタグ（2–3 文字または 5–8 文字）
2. 文字体系サブタグ（4 文字） {{optional_inline}}
3. 地域サブタグ（2 文字または 3 桁の数字） {{optional_inline}}
4. 1 つ以上の変化形サブタグ（すべて固有でなければならない）、それぞれは 5–8 文字の英数字または数字に 3 桁の英数字が続くもの {{optional_inline}}
5. 1 つ以上の {{glossary("BCP 47 language tag", "BCP 47")}} 拡張シーケンス {{optional_inline}}
6. 私的用途の拡張シーケンス {{optional_inline}}

それぞれのサブタグやシーケンスはすべて、ハイフンで区切ります。ロケール識別子は大文字小文字の区別のない {{Glossary("ASCII")}} です。しかし、文字体系サブタグではタイトルケース（最初の文字が大文字で、以降の文字は小文字）を、地域サブタグは大文字、それ以外はすべて小文字を使う習慣があります。

- `"hi"`: ヒンディー語（言語）
- `"de-AT"`: オーストリア（地域）で使用されているドイツ語（言語）
- `"zh-Hans-CN"`: 中国（地域）で使用されている簡体字（文字体系）で書かれている中国語（言語）。
- `"en-emodeng"`: 英語（言語）の "Early modern English" 方言（変化形）

言語、文字体系、地域（国を含む）、（稀に使用される）変化形を識別するサブタグは、 [IANA 言語サブタグレジストリー](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)に登録されています。このレジストリーは長期にわたって定期的に更新されており、実装は常に最新であるとは限らないため、サブタグが広く対応されていることを頼りすぎないようにしてください。

BCP 47 拡張シーケンスは、単一の数字または文字 (`"x"` 以外) と、ハイフンで区切られた 1 つ以上の 2 から 8 文字の文字または数字によるサブタグで構成されています。それぞれの数字または文字に対して 1 つのシーケンスのみが許可されていますので、 "`de-a-foo-a-foo`" は無効です。 BCP 47 拡張サブタグは [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/main/common/bcp47) で定義されています。現在は 2 つの拡張機能の意味のみが定義されています。

- `"u"` (Unicode) 拡張は、`Intl` の API オブジェクトの追加カスタマイズを要求するために使用することができます。例えば次のようなものです。
  - `"de-DE-u-co-phonebk"`: ドイツ語のソート順の電話帳変化形を使用します。このソート順では、ウムラウト付きの母音を、 ä → ae, ö → oe, ü → ue のように、ウムラウトの付かない母音二文字に展開したものと見なした順で並べ替えします。
  - `"th-TH-u-nu-thai"`: 数値書式で、タイの数字 (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) を使用します。
  - `"ja-JP-u-ca-japanese"`: 日時書式で和暦を使用します。すなわち、 2013 年は平成 25 年として表現されます。
  - `"en-GB-u-ca-islamic-umalqura"`: イギリス英語でイスラム暦 (Hijri) を使用します。グレゴリオ暦で 2017 年 10 月 14 日は、 Hijri 暦で 24 Muharram, 1439 です。

- `"t"` (transformed) 拡張は、他のロケールから翻訳されたテキストなど、変換されたコンテンツを示します。現在のところ、 `Intl` の機能で `"t"` 拡張を考慮するものはありません。しかし、この拡張はネストされたロケールを含むことがあります。たとえば、 `"de-t-en"` には英語のロケール識別子が含まれています。入れ子のロケールが存在する場合、それは有効なロケール識別子でなければなりません。例えば、 `"en-emodeng-emodeng"` は（`emodeng` の変化形サブタグが重複しているため）無効なので、`"de-t-en-emodeng-emodeng"` も無効です。

最後に、`"x"` という文字を使った私的用途の拡張シーケンスがあり、その後にハイフンで区切られた 1 ～ 8 文字または数字のサブタグが 1 つ以上続きます。これにより、アプリケーションが独自に使用する情報をエンコードすることができますが、すべての `Intl` の操作では無視されます。

### options 引数

`options` 引数は、コンストラクターや関数ごとに異なるプロパティをもつオブジェクトである必要があります。 `options` 引数が与えられなかった場合、または、未定義の場合、すべてのプロパティに対してデフォルト値が使用されます。

言語を意識するすべてのコンストラクターや関数が対応しているプロパティが一つあります。 `localeMatcher` プロパティで、この値は `"lookup"` または `"best fit"` の文字列である必要があり、上記のロケール照合アルゴリズムのうちから一つを選択します。

### ロケールの識別とネゴシエーション

`locales` 引数は、すべての Unicode 拡張を除去した後、アプリケーションからの優先順位付き要求として解釈されます。ランタイムは、利用可能なロケールと比較し、利用可能なロケールのうち最適なものを選びます。マッチングアルゴリズムは二種類あります。 `"lookup"` マッチャーは、[BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) で指定された Lookup アルゴリズムに従います。 `"best fit"` マッチャーでは、ランタイムが少なくとも、あるいは場合によっては、 Lookup アルゴリズムの結果よりもリクエストに適合したロケールを提供します。アプリケーションが `locales` 引数を提供しなかった場合や、リクエストに一致するロケールをランタイムが持っていなかった場合は、ランタイムの既定のロケールが使用されます。マッチャーは、 `options` 引数のプロパティを使って選択することができます（下記参照）。

ネゴシエーションにより選択された言語タグが Unicode 拡張の部分文字列を持っているとき、その拡張はここで、構築されたオブジェクトや関数の振る舞いをカスタマイズするために使われます。それぞれのコンストラクターや関数は、 Unicode 拡張用のキーのごく一部分のみ対応しており、また、対応する値は、多くの場合言語タグに依存します。例えば、 `"co"` キー（照合順序）は、 {{jsxref("Intl.Collator")}} だけが対応しており、そのキーに対する `"phonebk"` の値はドイツ語だけが対応しています。

## 静的プロパティ

- {{jsxref("Intl.Collator")}}
  - : 言語固有の文字列の比較を可能にするオブジェクトである collator のためのコンストラクターです。
- {{jsxref("Intl.DateTimeFormat")}}
  - : 言語固有の日時の書式化を可能にするオブジェクトのためのコンストラクターです。
- {{jsxref("Intl.DisplayNames")}}
  - : 言語、地域、文字体系の表示名の一貫した翻訳を可能にするオブジェクトのコンストラクターです。
- {{jsxref("Intl.DurationFormat")}}
  - : ロケール固有の期間の書式化ができるオブジェクトのコンストラクターです。
- {{jsxref("Intl.ListFormat")}}
  - : 言語固有のリストの書式化を可能にするオブジェクトのためのコンストラクターです。
- {{jsxref("Intl.Locale")}}
  - : Unicode ロケール識別子を表すオブジェクトのためのコンストラクターです。
- {{jsxref("Intl.NumberFormat")}}
  - : 言語固有の数値の書式化を可能にするオブジェクトのためのコンストラクターです。
- {{jsxref("Intl.PluralRules")}}
  - : 複数形を意識した書式化や複数形の言語規則を可能にするオブジェクトのためのコンストラクターです。
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : 言語を意識した相対時刻の書式化を可能にするオブジェクトのためのコンストラクターです。
- {{jsxref("Intl.Segmenter")}}
  - : ロケールを意識したテキスト区切りを可能にするオブジェクトのためのコンストラクターです。
- `Intl[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Intl"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## 静的メソッド

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : 正規のロケール名を返すメソッド。
- {{jsxref("Intl.supportedValuesOf()")}}
  - : この実装が対応している一意のカレンダー、照合順序、通貨、計数法、単位値を含む、ソートされた配列を返します。

## 例

### 日付と数値の書式化

`Intl` を使用して、特定の言語や地域で一般的な形で日付や数値を書式化することができます。

```js
const count = 26254.39;
const date = new Date("2012-05-24");

function log(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(
      locale,
    ).format(count)}`,
  );
}

log("en-US"); // 5/24/2012 26,254.39

log("de-DE"); // 24.5.2012 26.254,39
```

### ブラウザーの推奨言語の使用

`Intl` メソッドにハードコードされたロケール名を渡す代わりに、 {{domxref("navigator.language")}} で提供されるユーザーの優先言語を使用できます。

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

あるいは、{{domxref("navigator.languages")}} プロパティはユーザーの優先言語をソート済みで提供します。このリストを `Intl` のコンストラクターに直接渡すことで、優先度に基づくロケールのフォールバック選択を実装できます。利用可能な最も適切なロケールを選択するには、[ロケールネゴシエーション](#ロケールの識別とネゴシエーション)プロセスが使用されます。

```js
const count = 26254.39;

const formattedCount = new Intl.NumberFormat(navigator.languages).format(count);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Keyboard.getLayoutMap()")}}
- {{domxref("navigator.language")}}
- {{domxref("navigator.languages")}}
- [The ECMAScript Internationalization API](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html) (Norbert Lindenberg, 2012)
