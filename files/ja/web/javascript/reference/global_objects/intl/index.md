---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
---

{{JSRef}}

**`Intl`** オブジェクトは、 ECMAScript の国際化 API の名前空間で、言語に依存した文字列の比較、数値の書式化と、日付の書式化を提供します。 **`Intl`** オブジェクトは、いくつかのコンストラクターに加え、国際化コンストラクターや他の言語に関する関数に共通する機能へのアクセスを提供します。

## コンストラクタープロパティ

- {{jsxref("Global_Objects/Intl/Collator/Collator", "Intl.Collator()")}}
  - : 言語に依存した文字列の比較を可能にするオブジェクトである collator のためのコンストラクターです。
- {{jsxref("Global_Objects/Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : 言語に依存した日時の書式化を可能にするオブジェクトのためのコンストラクターです。
- {{jsxref("Global_Objects/Intl/DisplayNames/DisplayNames", "Intl.DisplayNames()")}}
  - : 言語、地域、文字体系の表示名の一貫した翻訳を可能にするオブジェクトのコンストラクターです。
- {{jsxref("Global_Objects/Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : 言語に依存したリストの書式化を可能にするオブジェクトのためのコンストラクターです。
- {{jsxref("Global_Objects/Intl/Locale/Locale", "Intl.Locale()")}}
  - : Unicode ロケール識別子を表すオブジェクトのためのコンストラクターです。
- {{jsxref("Global_Objects/Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : 言語に依存した数値フォーマットを可能にするオブジェクトのためのコンストラクターです。
- {{jsxref("Global_Objects/Intl/PluralRules/PluralRules", "Intl.PluralRules()")}}
  - : 複数形を意識した書式化や複数形の言語規則を可能にするオブジェクトのためのコンストラクターです。
- {{jsxref("Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - : 言語を意識した相対時刻の書式化を可能にするオブジェクトのためのコンストラクターです。
- {{jsxref("Global_Objects/Intl/Segmenter/Segmenter", "Intl.Segmenter()")}}
  - : ロケールを意識したテキスト区切りを可能にするオブジェクトのためのコンストラクターです。

## メソッド

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : 正規のロケール名を返すメソッド。
- {{jsxref("Intl.supportedValuesOf()")}}
  - : この実装が対応している一意のカレンダー、照合順序、通貨、計数法、単位値を含む、ソートされた配列を返します。

## ロケールの識別とネゴシエーション

国際化コンストラクターや他のコンストラクターの言語を意識したメソッド ([関連情報](#関連情報)に記載) は、ロケールを識別して実際に使用するものを決定するために共通のパターンを使用しています。これらはすべて、 `locales` と `options` の引数を受け取り、 `options.localeMatcher` プロパティで指定したアルゴリズムを使用して 要求されたロケールと対応しているロケールとのネゴシエーションを行います。

### locales 引数

`locales` 引数は、指定された操作に使用するロケールを特定するために使用されます。 JavaScript の実装では `locales` を調べて、表現された指定を満たすものに最も近い、理解可能なロケールを計算します。 `locales` は次のものを取ることができます。

- `undefined` (または省略): その実装の既定のロケールが使用されます。
- ロケール: ロケール識別子またはロケール識別子を持つ [`Intl.Locale`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) オブジェクトです。
- ロケールのリスト: 何らかの他の値で、オブジェクトに変換され、ロケールの配列として扱われます。

後 2 者では、実際に使用されるロケールは、[ロケールネゴシエーション](#ロケールネゴシエーション)によって決定された、最も良く対応しているロケールになります。

ロケール識別子は以下のものから成る文字列です。

1. 言語サブタグ
2. (任意で) 文字体系サブタグ
3. (任意で) 地域 (または国) サブタグ
4. (任意で) 1 つ以上の変化形サブタグ (すべて固有でなければならない)
5. (任意で) 1 つ以上の BCP 47 拡張シーケンス
6. (任意で) 私的に使用する拡張シーケンス

...存在するサブタグやシーケンスはすべて、ハイフンで区切ります。ロケール識別子は大文字小文字の区別のない ASCII です。しかし、文字体系サブタグではタイトルケース (最初の文字が大文字で、以降の文字は小文字) を、地域サブタグは大文字、それ以外はすべて小文字を使う習慣があります。

- "`hi`": ヒンディー語 (主たる言語)
- "`de-AT`": オーストリア (地域) で使用されているドイツ語 (言語)
- "`zh-Hans-CN`": 中国 (地域) で使用されている簡体字 (文字体系) で書かれている中国語 (言語)。
- "`en-emodeng`": 英語 (言語) の "Early modern English" 方言 (変化形)

言語、文字体系、地域 (国を含む)、 (稀に使用される) 変化形を識別するサブタグは、 [IANA 言語サブタグレジストリー](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)に登録されています。このレジストリーは長期にわたって定期的に更新されており、実装は常に最新であるとは限らないため、サブタグが広く対応されていることを頼りすぎないようにしてください。

BCP 47 拡張シーケンスは、単一の数字または文字 (`"x"` 以外) と、ハイフンで区切られた 1 つ以上の 2 から 8 文字の文字または数字によるサブタグで構成されています。それぞれの数字または文字に対して 1 つのシーケンスのみが許可されていますので、 "`de-a-foo-a-foo`" は無効です。 BCP 47 拡張サブタグは [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/main/common/bcp47) で定義されています。現在は 2 つの拡張機能の意味のみが定義されています。

- `"u"` (Unicode) 拡張は {{jsxref("Intl.Collator")}}, {{jsxref("Intl.NumberFormat")}}, {{jsxref("Intl.DateTimeFormat")}} の各オブジェクトにおいて、ロケール固有の動作のカスタマイズを要求するために使用することができます。

  - "`de-DE-u-co-phonebk`": ドイツ語のソート順の電話帳変化形を使用します。このソート順では、ウムラウト付きの母音を、 ä → ae, ö → oe, ü → ue のように、ウムラウトの付かない母音二文字に展開したものと見なした順で並べ替えします。
  - "`th-TH-u-nu-thai`": 数値書式で、タイの数字 (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) を使用します。
  - "`ja-JP-u-ca-japanese`": 日時書式で和暦を使用します。すなわち、 2013 年は平成 25 年として表現されます。
  - "`en-GB-u-ca-islamic`": イギリス英語でイスラム暦 (Hijri) を使用します。グレゴリオ暦で2017年10月14日は、 Hijri 暦で 24 Muharram, 1439 です。

- `"t"` (transformed) 拡張は、他のロケールから翻訳されたテキストなど、変換されたコンテンツを示します。現在のところ、 `Intl` の機能で `"t"` 拡張を考慮するものはありません。しかし、この拡張はネストされたロケールを含むことがあります。たとえば、 "`de-t-en`" には英語のロケール識別子が含まれています。入れ子のロケールが存在する場合、それは有効なロケール識別子でなければなりません。例えば、 "`en-emodeng-emodeng`" は (`emodeng` の変化形サブタグが重複しているため) 無効なので、"`de-t-en-emodeng-emodeng`"も無効です。

最後に、"x "という文字を使った私的使用の拡張シーケンスがあり、その後にハイフンで区切られた 1 ～ 8 文字または数字のサブタグが 1 つ以上続きます。これにより、アプリケーションが独自に使用する情報をエンコードすることができますが、すべての `Intl` の操作では無視されます。

### ロケールネゴシエーション

`locales` 引数は、すべての Unicode 拡張を除去した後、アプリケーションからの優先順位付き要求として解釈されます。ランタイムは、利用可能なロケールと比較し、利用可能なロケールのうち最適なものを選びます。マッチングアルゴリズムは二種類あります。 "`lookup`" マッチャーは、[BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) で指定された Lookup アルゴリズムに従います。 "`best fit`" マッチャーでは、ランタイムが少なくとも、あるいは場合によっては、 Lookup アルゴリズムの結果よりもリクエストに適合したロケールを提供します。アプリケーションが `locales` 引数を提供しなかった場合や、リクエストに一致するロケールをランタイムが持っていなかった場合は、ランタイムの既定のロケールが使用されます。マッチャーは、 `options` 引数のプロパティを使って選択することができます (下記参照)。

ネゴシエーションにより選択された言語タグが Unicode 拡張の部分文字列を持っているとき、その拡張はここで、構築されたオブジェクトや関数の振る舞いをカスタマイズするために使われます。それぞれのコンストラクターや関数は、 Unicode 拡張用のキーのごく一部分のみ対応しており、また、対応する値は、多くの場合言語タグに依存します。例えば、 "`co`" キー (コレクション)は、 {{jsxref("Intl.Collator")}} だけが対応しており、そのキーに対する "`phonebk`" の値はドイツ語だけが対応しています。

### options 引数

`options` 引数は、コンストラクターや関数ごとに異なるプロパティをもつオブジェクトである必要があります。 `options` 引数が与えられなかった場合、または、未定義の場合、すべてのプロパティに対して既定値が使用されます。

言語を意識するすべてのコンストラクターや関数が対応しているプロパティが一つあります。 `localeMatcher` プロパティで、この値は "`lookup`" または "`best fit`" の文字列である必要があり、上記のロケールマッチングアルゴリズムのうちから一つを選択します。

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

log("en-US");
// 期待される出力: 5/24/2012 26,254.39

log("de-DE");
// 期待される出力: 24.5.2012 26.254,39
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 導入: [The ECMAScript Internationalization API](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
- コンストラクター

  - {{jsxref("Intl/Collator", "Intl.Collator()")}}
  - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - {{jsxref("Intl/ListFormat", "Intl.ListFormat()")}}
  - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat()")}}
  - {{jsxref("Intl/PluralRules", "Intl.PluralRules()")}}
  - {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - {{jsxref("Intl/Locale", "Intl.Locale()")}}
  - {{jsxref("Intl/Segmenter", "Intl.Segmenter()")}}

- メソッド

  - {{jsxref("String.prototype.localeCompare()")}}
  - {{jsxref("Number.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleDateString()")}}
  - {{jsxref("Date.prototype.toLocaleTimeString()")}}
