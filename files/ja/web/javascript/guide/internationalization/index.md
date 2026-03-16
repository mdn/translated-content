---
title: 国際化
slug: Web/JavaScript/Guide/Internationalization
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{PreviousNext("Web/JavaScript/Guide/Resource_management", "Web/JavaScript/Guide/Modules")}}

{{jsxref("Intl")}} オブジェクトは、 ECMAScript Internationalization API の名前空間であり、ロケールや文化を考慮した幅広いデータや操作を提供します。

## 概要

`Intl` オブジェクトは、使い道に強く依存しています。ロケール固有のロジックが要求されるそれぞれの用途に対して、個別のオブジェクトを提供します。現在、以下の機能を提供しています。

- [ロケールについての情報の取得](#ロケール情報)（{{jsxref("Intl.Locale")}} を使用）
- [データの書式化](#データの書式化)（{{jsxref("Intl.DateTimeFormat")}}、{{jsxref("Intl.DurationFormat")}}、{{jsxref("Intl.ListFormat")}}、{{jsxref("Intl.NumberFormat")}}、{{jsxref("Intl.RelativeTimeFormat")}} を使用）
- [照合順序](#照合順序)（つまり、並べ替えや検索における文字列の比較、{{jsxref("Intl.Collator")}} を使用）
- [複数形の選択](#複数形規則)（{{jsxref("Intl.PluralRules")}} を使用）
- [テキストの区切り](#区切り文字)（単語、文、文字などの単位などに分割するため、{{jsxref("Intl.Segmenter")}} を使用）
- [表示される名前の取得](#表示名)（通貨、言語、文字体系、地域、タイムゾーン、{{jsxref("Intl.DisplayNames")}} を使用）

ほとんどの `Intl` API は同様の設計を採用しています（{{jsxref("Intl.Locale")}} のみが例外です）。まず、目的のロケールとオプションを指定してインスタンスを作成します。これにより、目的の操作（書式化、照合、区切りなど）を行うための一連のルールが定義されます。その後、`format()`、`compare()`、`segment()` などのメソッドをインスタンスに対して呼び出すと、オブジェクトは渡されたデータに指定されたルールを適用します。

```js
// 1. ロケールと書式設定オプションを指定して、書式化オブジェクトを作成
const price = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// 2. 書式化オブジェクトの `format` メソッドを使用して数値を書式化
console.log(price.format(5.259)); // $5.26
```

コンストラクターの一般的な形式は次のとおりです。

```js-nolint
new Intl.SomeObject(locales, options)
```

- `locales` {{optional_inline}}
  - : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}、{{jsxref("Intl.Locale")}} のインスタンス、またはそれらのロケール識別子の配列を含む文字列です。`undefined` が渡された場合、または指定されたロケール識別子のいずれにも対応していない場合は、ランタイムのデフォルトのロケールが使用されます。`locales` 引数の一般的な方法と解釈については、[`Intl` のメインページにある引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)を参照してください。
- `options` {{optional_inline}}
  - : 操作の特定の側面をカスタマイズするプロパティが含まれているオブジェクトであり、それぞれの `Intl` オブジェクトを使用する上で重要な要素です。

## ロケール情報

ロケールは、`Intl` のあらゆる動作の基盤となります。ロケールとは一連の慣習の集合であり、`Intl` API では {{jsxref("Intl.Locale")}} オブジェクトによって表されます。言語タグを受け入れるすべての `Intl` コンストラクターは、`Intl.Locale` オブジェクトも受け入れます。

それぞれのロケールは、主に 4 つの要素で定義されます。それは、言語 ({{jsxref("Intl/Locale/language", "language")}})、文字体系 ({{jsxref("Intl/Locale/script", "script")}})、地域 ({{jsxref("Intl/Locale/region", "region")}})、そして場合によってはいくつかのバリアント ({{jsxref("Intl/Locale/variants", "variants")}}) です。これらを `-` でその順序でつなぐと、{{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}を形成します。

- 言語はロケールの最も重要な要素であり、必須です。`en` や `fr` のように言語が単独で指定された場合、残りの情報を推測するためのアルゴリズムがあります（{{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}} を参照）。
- ただし、同じ言語を話す地域同士でも慣習が大きく異なる場合があるため、多くの場合、地域も指定したい場面があります。例えば、日付の書式は米国では MM/DD/YYYY であるのに対し、英国では DD/MM/YYYY となるため、`en-US` や `en-GB` を指定することが重要です。
- 文字体系を同時に指定することもできます。文字体系とは、その言語を書き表すために使用する書き方や文字のことです。実際には、ある地域で使用される言語は多くの場合、一つの文字体系でしか表記されないため、文字体系を指定する必要はありません。ただし、ラテン文字とキリル文字の両方で表記できるセルビア語（`sr-Latn` および `sr-Cyrl`）や、簡体字と繁体字の両方で表記できる中国語（`zh-Hans` および `zh-Hant`）など、例外もあります。
- これらのバリエーションはめったに使用されません。通常、これらは異なる正書法を表します。例えば、ドイツ語には `1901` と `1996` の正書法バリエーションがあり、それぞれ `de-1901` および `de-1996` と表記されます。

```js
// これら 2 つは、他の Intl API に渡すと同等です
const locale1 = new Intl.Locale("en-US");
const locale2 = new Intl.Locale("en-Latn-US");

console.log(locale1.language, locale1.script, locale1.region); // "en", undefined, "US"
console.log(locale2.language, locale2.script, locale2.region); // "en", "Latn", "US"
```

ロケールには、その具体的な文化圏で使用されている一連の慣習も含まれています。

<table>
<thead><tr><th>用途</th><th>プロパティ</th><th>解説</th><th>拡張サブタグ</th></tr></thead>
<tbody>
<tr>
<td rowspan="2">日付や時刻の書式化</td>
<td>{{jsxref("Intl/Locale/calendar", "calendar")}}</td>
<td>日を年、月、週に分け、それらに名前を割り当てるために使用されます。例えば、<code>gregory</code> 暦の "2022-01-01" は、<code>hebrew</code> 暦では "28 Tevet 5782" となります。</td>
<td><code>ca</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/hourCycle", "hourCycle")}}</td>
<td>時刻を 12 時間制で表示させるか 24 時間制で表示させるか、また、最小の時の数字を 0 にするか 1 にするかを決定します。</td>
<td><code>hc</code></td>
</tr>
<tr>
<td>数値の書式化、日付、時刻、期間なども含む</td>
<td>{{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}}</td>
<td>数値をロケール固有の表記に変換します。通常の <code>0123456789</code> システムは、 <code>latn</code>（ラテン）と呼ばれます。多くの場合、それぞれの文字体系には桁ごとの対応による数値表記法がありますが、複数の数値表記法を持つ文字体系もあれば、その文字体系で通常は数字を書かないものもあります（例えば、中国語には独自の <code>hanidec</code> 数値表記法がありますが、ほとんどのテキストでは標準の <code>latn</code> システムが使用されています）。また、特別な変換アルゴリズムが要求されるもの （例えば、ローマ数字 — <code>roman</code>）もあります。</td>
<td><code>nu</code></td>
</tr>
<tr>
<td rowspan="3">照合順序</td>
<td>{{jsxref("Intl/Locale/collation", "collation")}}</td>
<td>一般的な照合順序アルゴリズムを定義します。例えば、ドイツ語の <code>phonebk</code> 照合順序が使用されている場合、"ä" は "ae" として扱われ、"ad" と "af" の間にソートされます。</td>
<td><code>co</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/caseFirst", "caseFirst")}}</td>
<td>大文字と小文字のどちらを先に並べ替えるか、あるいは大文字・小文字を区別しないかを決定します。</td>
<td><code>kf</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/numeric", "numeric")}}</td>
<td>数値を数値としてソートするか、文字列としてソートするかを決定します。例えば、true に設定すると、"10" は "2" の後にソートされます。</td>
<td><code>kn</code></td>
</tr>
</tbody>
</table>

`Intl.Locale` を生成する際、あるいは他の `Intl` コンストラクターに言語タグを渡す際に、このプロパティを明示的に指定することができます。これを行うのが最適な方法は、言語タグに追加するか、オプションとして指定するかの 2 つです。

- これらを言語タグに追加するには、まず文字列 `-u`（「Unicode 拡張」という意味）を追加し、次に指定された拡張サブタグ、そして値を順に追加します。
- これらをオプションとして指定するには、指定されたプロパティ名とその値を `options` オブジェクトに追加するだけです。

`Intl.DateTimeFormat` を例にとると、以下の 2 つの行はどちらも、ヘブライ暦で日付を書式化するフォーマッターを作成します。

```js
const df1 = new Intl.DateTimeFormat("en-US-u-ca-hebrew");
const df2 = new Intl.DateTimeFormat("en-US", { calendar: "hebrew" });
```

認識されないプロパティは無視されるため、`Intl.NumberFormat` でも上記とまったく同じ構文を使用することができますが、数値の書式化では `calendar` プロパティが使用されないため、単に `en-US` を渡すのと何ら変わりはありません。

これらのロケール設定のデフォルト値を取得するのは少し厄介です。`new Intl.Locale("en-US").calendar` は `undefined` を返します。これは、`Locale` オブジェクトには、渡された情報しか含まれていないためです。デフォルトのカレンダーは、理論的にはそれを使用する API によって異なります。したがって、`Intl.DateTimeFormat`で使用される `en-US` のデフォルトカレンダーを取得するには、その {{jsxref("Intl/DateTimeFormat/resolvedOptions", "resolvedOptions()")}} メソッドを使用することができます。それ以外にも、他のプロパティについても同様です。

```js
const locale = new Intl.Locale("en-US");
console.log(locale.calendar); // undefined; 提供されていない
console.log(new Intl.DateTimeFormat(locale).resolvedOptions().calendar); // "gregory"
```

`Intl.Locale` オブジェクトは、2 つの役割を同時に果たします。すなわち、（以上のように）構文解析済みの BCP 47 言語タグを表すことと、そのロケールに関する情報を提供することです。`calendar` などのすべてのプロパティは、デフォルト値についてデータソースに問い合わせることなく、入力データからのみ抽出されます。一方、このオブジェクトには、ロケールに関する実際の情報を取得するためのメソッド群が用意されています。例えば、{{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}、{{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}、{{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}、{{jsxref("Intl/Locale/getCollations", "getCollations()")}} の各メソッドは `calendar`、`hourCycle`、`numberingSystem`、`collation` の各プロパティを補完するものであり、それぞれ、そのプロパティの推奨値の配列を返します。

```js
const locale = new Intl.Locale("ar-EG");
console.log(locale.getCalendars()); // ['gregory', 'coptic', 'islamic', 'islamic-civil', 'islamic-tbla']
```

`Intl.Locale` のインスタンスには、{{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}、{{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}}、{{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}} など、有用な情報を取得するためのメソッドも含まれています。

## ロケールの特定

国際化に関して多くの人が抱く共通の懸念は、「使用するロケールをどのように知るのか」という点です。

最も明白な答えは「ユーザーが推奨するもの」です。ブラウザーは、{{domxref("Navigator/languages", "navigator.languages")}} プロパティを通じて、ユーザーの言語設定を公開しています。これは言語識別子の配列であり、フォーマッターのコンストラクターに直接渡すことができます（これについては後述します）。ユーザーはこのリストをブラウザーの設定で変更できます。空の配列や `undefined` を同時に渡すことも可能で、いずれもブラウザーのデフォルトのロケールが使用されます。

```js
const numberFormatter = new Intl.NumberFormat(navigator.languages);
console.log(numberFormatter.format(1234567.89));

const numberFormatter2 = new Intl.NumberFormat([]);
```

しかし、これが常に望ましい結果になるとは限りません。`Intl` フォーマッターで書式化された文字列は、サイトに表示されるテキストのごく一部に過ぎません。ローカライズされたコンテンツの大部分は、サイト開発者であるあなた自身が指定しているものです。例えば、あるサイトが英語とフランス語の 2 言語のみに対応しているとします。日本語圏のユーザーがサイトを訪れ、英語でサイトを利用しようとした場合、英語のテキストの中に日本語の数値や日付が混在していると、戸惑ってしまうでしょう。

通常、ブラウザーのデフォルト言語を使用するのは避けたいところです。サイト全体で提供されているのと同じ言語を使用したいでしょう。もしサイトに、ユーザーの選択を格納するために言語切り替え機能を持っているなら、それを直接使用することができます。

```js
// このことをサイト全体の設定で変更可能だと仮定
const userSettings = {
  locale: "en-US",
  colorMode: "dark",
};
const numberFormatter = new Intl.NumberFormat(userSettings.locale);
console.log(numberFormatter.format(1234567.89));
```

サイトのバックエンドで、ユーザーの {{httpheader("Accept-Language")}} ヘッダーに基づいて動的に言語を選択し、それに応じて異なる HTML を返す仕組みになっている場合は、HTML 要素の {{domxref("HTMLElement.lang")}} プロパティを `new Intl.NumberFormat(document.documentElement.lang)` の形で使用することもできます。

サイトが 1 つの言語でしか提供されていない場合は、`new Intl.NumberFormat("en-US")` のようにコード内でロケールを同時にハードコーディングすることも可能です。

前述の通り、コンストラクターにロケールの配列を渡して、代替候補のリストを指定することも可能です。`navigator.languages` を使用した最初の例がこれに該当します。ユーザーが設定した最初のロケールが特定の操作で対応していない場合、次のロケールが試され、ランタイムがデータを保持している要求されたロケールが見つかるまで、この処理が繰り返されます。この処理は手動で行うことも可能です。下記例では、香港中国語の話者が理解できる可能性の高い言語を表すロケールを、詳細度の高い順にリストとして指定しています。これにより、フォーマッターは対応している中で最も具体性の高いロケールを選択します。

```js
const numberFormatter = new Intl.NumberFormat([
  "yue-Hant",
  "zh-Hant-HK",
  "zh-Hant",
  "zh",
]);
```

対応してすべてのロケールを一覧表示する API はありませんが、ロケール一覧を処理するためのメソッドはいくつかあります。

- {{jsxref("Intl.getCanonicalLocales()")}}: この関数は、ロケール識別子のリストを受け取り、正規化されたロケール識別子のリストを返します。これは、それぞれの `Intl` コンストラクターの正規化プロセスを理解するのに有益です。 -それぞれの `Intl` オブジェクトにおける `supportedLocalesOf()` 静的メソッド（{{jsxref("Intl.DateTimeFormat.supportedLocalesOf()")}} など）: このメソッドはコンストラクターと同じ引数（`locales` および `options`）を受け取り、指定されたデータに一致するロケールタグのサブセットを返します。これは、具体的な操作に対してランタイムがどのロケールに対応しているかを把握するのに役立ちます。例えば、対応している言語のみを含む言語切替ツールを表示させる場合などに有用です。

## 返値を理解する

すべてのオブジェクトに共通する 2 つ目の懸念事項は、「メソッドは何を返すのか？」という点です。返値の構造や型を超えてこの問いに答えるのは困難です。なぜなら、正確に何を返すべきかを定めた規範的な仕様が存在しないからです。多くの場合、メソッドの結果は一貫しています。しかし、出力は実装によって異なることがあり、同じロケール内でも異なる場合があります。このような出力のばらつきは設計上の意図によるものであり、仕様上も許容されています。また、期待した通りの結果にならない可能性もあります。例えば、`format()` によって返される文字列には、非改行スペースが含まれていたり、双方向制御文字で囲まれていたりする場合があります。`Intl` メソッドの結果をハードコードされた定数と比較してはならず、ユーザーに表示させるためだけに使用すべきです。

もちろん、この答えでは物足りないと感じるでしょう。ほとんどの開発者は、出力の見た目を制御したいと考えているからです。少なくとも、意味不明な出力によってユーザーが混乱するような事態は避けたいはずです。自動テストであれ手動テストであれ、実際にテストを実施したい場合のためのガイドラインを以下に示します。

- ユーザーが使用する可能性のあるすべてのロケールをテストしてください。対応しているロケールが固定されている場合（例えば、言語切り替え機能を使用している場合など）、テストはより簡単になります。ユーザーが推奨するロケールを使用する場合、ユーザーに一般的なものをいくつか選んでテストすることもできますが、ユーザーに表示される内容は異なる可能性があることに留意してください。通常、テストランナーの設定や `Intl` のコンストラクターをモックすることで、ユーザーの設定をシミュレートできます。
- 複数の JavaScript エンジンでテストしてください。`Intl` API は JavaScript エンジンによって直接実装されているため、例えば Node.js と Chrome（いずれも V8 を使用）では同じ出力が得られると予想されますが、Firefox（SpiderMonkey を使用）では異なる出力になる可能性があります。すべてのエンジンが CLDR データを使用していると思われますが、通常、その処理方法はそれぞれ異なります。例えば、一部のブラウザーのビルド設定（インストールサイズの縮小など）によって、対応しているロケールやオプションが異なる場合があります。
- 出力を仮定してはいけません。つまり、`expect(result).toBe("foo")` のように、手動で出力を記述すべきではありません。代わりに、スナップショットテストを使用するか、テスト実行時の出力から文字列値をコピーしてください。

## データの書式化

`Intl` の主な用途は、構造化データを表すロケール固有のテキストを出力することです。これは翻訳ソフトに似ていますが、任意のテキストを翻訳させるのではなく、日付、数値、リストなどのデータを受け取り、ロケール固有のルールに従って書式化を行います。

{{jsxref("Intl.DateTimeFormat")}}、{{jsxref("Intl.DurationFormat")}}、{{jsxref("Intl.ListFormat")}}、{{jsxref("Intl.NumberFormat")}}、{{jsxref("Intl.RelativeTimeFormat")}} の各オブジェクトは、それぞれ 1 種類のデータを書式化します。それぞれのインスタンスは 2 つのメソッドを提供します。

- `format()`: 指定されたデータを受け取り、ロケールとオプションに基づいて決定された書式設定ルールを使用して文字列を返します。
- `formatToParts()`: 同じデータを受け取り、同じ文字列を返しますが、その文字列は複数の部分に分割されており、各部分は `type` と `value` を持つオブジェクトとなっています。これは、書式化されたテキストを他のテキストと交互に配置するといった、より高度な用途に役立ちます。

例えば、{{jsxref("Intl.NumberFormat")}} オブジェクトの典型的な使用例は次のとおりです。

```js
// 1. ロケールと書式化オプションを指定して、フォーマッターオブジェクトを作成する
const price = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// 2. フォーマッターオブジェクトの `format` メソッドを使用して、数値の書式化を行う
console.log(price.format(5.259)); // $5.26

// あるいは、`formatToParts` メソッドを使用して、書式化された数値を
// 構成要素ごとに取得することもできる
console.table(price.formatToParts(5.259));
// |   | type       | value |
// | 0 | "currency" | "$"   |
// | 1 | "integer"  | "5"   |
// | 2 | "decimal"  | "."   |
// | 3 | "fraction" | "26"  |
```

文字列の書式化を行うために、常にフォーマッターオブジェクトを構築する必要はありません。日常的な使用では、ロケールとオプションを引数として渡して、データに対して同時に `toLocaleString()` メソッドを呼び出すこともできます。`toLocaleString()` メソッドは、 {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}、{{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}、{{jsxref("Number.prototype.toLocaleString()")}} などに実装されています。書式化するデータのドキュメントを参照し、`toLocaleString()` が対応しているかどうか、またどのフォーマッターオプションに対応しているかを確認してください。

```js
console.log(
  (5.259).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
); // $5.26
```

`toLocaleString()` は、フォーマッターオブジェクトを直接使用するよりも効率が悪い可能性があることに注意してください。`toLocaleString` が呼び出されるたびに、ローカライズ文字列の巨大なデータベース内を検索する必要があるためです。同じ引数でこのメソッドを何度も呼び出す場合は、フォーマッターオブジェクトを作成し、その `format()` メソッドを使用する方が適切です。フォーマッターオブジェクトは渡された引数を記憶しており、データベースの一部をキャッシュする可能性があるため、その後の `format` 呼び出しでは、より制約されたコンテキスト内でローカライズ文字列を検索できるようになるからです。

### 日付と時刻の書式化

{{jsxref("Intl.DateTimeFormat")}} は、日付と時刻、および日付と時刻の範囲を書式化します。`DateTimeFormat` オブジェクトは、{{jsxref("Date")}}、{{jsxref("Temporal.PlainDateTime")}}、{{jsxref("Temporal.PlainTime")}}、{{jsxref("Temporal.PlainDate")}}、{{jsxref("Temporal.PlainYearMonth")}}、{{jsxref("Temporal.PlainMonthDay")}} のいずれかの形で日付/時刻の入力を受け取ります。

> [!NOTE] > {{jsxref("Temporal.ZonedDateTime")}} オブジェクトは、タイムゾーンがすでにオブジェクト内で固定されているため、直接渡すことはできません。{{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} を使用するか、事前に {{jsxref("Temporal.PlainDateTime")}} に変換するかしてください。

日付と時刻の形式を地域に合わせて調整する一般的な用途には、次のようなものがあります。

- 同じ日付と時刻を、イスラム暦、ヘブライ暦、中国暦などの異なる暦体系で出力する。
- 同じ実時間（時点）を、別のタイムゾーンで出力する。
- 日付と時刻の特定の要素（年や月など）のみを選択的に出力し、それらを特定の形式（「木曜日」や「木」など）で表示する。
- 地域ごとの慣習に従って日付を表示する。例えば、米国では MM/DD/YYYY、英国では DD/MM/YYYY、日本では YYYY/MM/DD といった形式です。
- 12 時間制や 24 時間制など、地域ごとの慣習に従って時刻を出力する。

書式化文字列の表示形式を決定するには、まずカレンダー（年、月、週、日の計算に影響します）とタイムゾーン（正確な時刻や、場合によっては日付にも影響します）を選択します。これは、前述の `calendar` オプション（またはロケール識別子内の `-ca-` 拡張キー）と、`timeZone` オプションを使用して行います。

- `Date` オブジェクトは、ユーザーのタイムゾーンおよび ISO 8601 カレンダーにおける固有の時点を表す（{{jsxref("Date.prototype.getHours()")}} や {{jsxref("Date.prototype.getMonth()")}} などのメソッドによって返される値と同様）。これらは、その瞬間を保持したまま指定された `calendar` および `timeZone` に変換されるため、日付と時刻の成分が変更されることがあります。
- 各種の {{jsxref("Temporal")}} オブジェクトにはすでにカレンダーが組み込まれているため、`calendar` オプションはオブジェクトのカレンダーと一致しなければならない。ただし、日付のカレンダーが `"iso8601"` である場合は、リクエストされた `calendar` に変換される。これらのオブジェクトにはタイムゾーンが設定されていないため、指定された `timeZone` で変換されることなく直接表示される。

ここでは、`calendar` と `timeZone` の設定を組み合わせることで、同じ瞬間がどのように異なる形式で表現されるかを示します。

```js
// ローカルタイムゾーンが UTC であると想定
const targetDate = new Date(2022, 0, 1); // ローカルタイムゾーンでの 2022-01-01 の真夜中
const results = [];

for (const calendar of ["gregory", "hebrew"]) {
  for (const timeZone of ["America/New_York", "Asia/Tokyo"]) {
    const df = new Intl.DateTimeFormat("ja-JP", {
      calendar,
      timeZone,
      // これらについてはまた後で
      dateStyle: "full",
      timeStyle: "full",
    });
    results.push({ calendar, timeZone, output: df.format(targetDate) });
  }
}

console.table(results);
```

出力結果は次のようになります。

| 暦        | タイムゾーン       | 出力結果                                                        |
| --------- | ------------------ | --------------------------------------------------------------- |
| 'gregory' | 'America/New_York' | '2021年12月31日金曜日 10時00分00秒 米国東部標準時' |
| 'gregory' | 'Asia/Tokyo'       | '2022年1月1日土曜日 0時00分00秒 日本標準時'   |
| 'hebrew'  | 'America/New_York' | 'AM5782年4月27日金曜日 10時00分00秒 米国東部標準時'     |
| 'hebrew'  | 'Asia/Tokyo'       | 'AM5782年4月28日土曜日 0時00分00秒 日本標準時'     |

日付と時刻は、`weekday`、`era`、`year`、`month`、`day`、`dayPeriod`、`hour`、`minute`、`second`、`fractionalSecondDigits`、`timeZoneName`という成分で構成されています。次に、出力にどの要素を含めるか、またそれらをどのような形式で表示するかを決定する必要があります。選択肢は 2 つあります。

- それぞれの要素は、その要素と同じ名前のオプションを使用して手動で設定できます。指定した要素のみが、指定された形式で出力に含まれます。
- あらかじめ定義された要素のセットである `dateStyle` および `timeStyle` の省略形を使用することができます。これらは、ロケールに応じて一連の要素オプションに展開されます。

これら 2 つの方法のうち、どちらか一方を選択してください。これらは互いに排他的であるため、両方を同時に使用するとエラーが発生します。

基本的に、要素の組み合わせをリクエストすると、`DateTimeFormat` オブジェクトはリクエストされた要素に一致する「テンプレート」を見ていき、値を一つずつ埋めていくだけで済みます。ただし、すべての要素の組み合わせに事前定義されたテンプレートを持つわけではありません。`DateTimeFormat` には `formatMatcher` オプションがあり、これによって、要素をリクエストされたものより詳しくしたり短くしたり、あるいは要素を省略したり追加したりすることで、どのように交渉するかを決定します。かなり技術的な内容になるため、この処理方法をより深く理解するには、[`Intl.DateTimeFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#日時成分オプション) のリファレンスを参照することをお勧めします。

ここでは、要素の書式化を行う一般的な方法をいくつか紹介します。

```js
const df1 = new Intl.DateTimeFormat("en-US", {
  // すべての成分を含む（通常）
  dateStyle: "full",
  timeStyle: "full",
});

const df2 = new Intl.DateTimeFormat("en-US", {
  // 暦の日を表示
  era: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const df3 = new Intl.DateTimeFormat("en-US", {
  // デジタル時計のような時刻の表示
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "shortOffset",
});

const targetDate = new Date(2022, 0, 1, 12, 34, 56); // ローカルタイムゾーンでの 2022-01-01 12:34:56
console.log(df1.format(targetDate));
// Saturday, January 1, 2022 at 12:34:56 PM Coordinated Universal Time
// January 1, 2022 AD
// 12:34:56 PM GMT
```

それ以外にもカスタマイズオプションがあります。例えば、`hourCycle` オプションを使用すると、時間を 12 時間制または 24 時間制で表示させたり、真夜中や正午を 12:00 または 0:00 と表示させたりすることができます。また、`numberingSystem` オプションを使用すると、任意の数値を別の表記法で表示させることも可能です。

`format()` のほかにも、日付や時刻の範囲を書式化する重要なメソッドがもう一つあります。{{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}} です。このメソッドは、同じ型の日付・時刻を 2 つ受け取り、それぞれを書式化した後、区切り文字（ハイフンなど）で結合し、重複する部分を削除します。

```js
const springBreak = {
  start: new Date(2023, 2, 10),
  end: new Date(2023, 2, 26),
};

const df = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });
console.log(df.formatRange(springBreak.start, springBreak.end));
// March 10 – 26, 2023
```

### 数値の書式化

数値の書式化は、{{jsxref("Intl.NumberFormat")}} オブジェクトを使用して行います。`NumberFormat` オブジェクトは、数値、文字列、長整数型の値を受け入れます。数値の代わりに文字列や長整数を渡すことで、JavaScript で正確に表せないほど大きすぎる、あるいは小さすぎる数値の書式化を行うことができます。

数値の書式化のローカライズにおける一般的な用途は、次のようなものです。

- その数値を、中国式、アラビア式、ローマ式などの別の記数法で出力する。
- 小数点記号（英語では "." だが、多くのヨーロッパ諸国では ","）や桁区切り（英語では 3 桁だが、他の文化圏では 4 桁や 2 桁の場合があり、","、" "、"." が使用されることもある）など、地域固有の表記規則に従って数値を出力しする。
- その数値を「370万」や「2千」のような指数表記を付けて出力する。
- 数値を通貨形式で出力し、特定の通貨記号と四捨五入のルールを適用する。例えば、米国では 1 セント未満、日本では 1 円未満の金額は、表示させても意味がない場合がある。
- その数値をパーセント値として出力し、ロケール固有の換算および書式設定ルールを適用します。
- 数値に単位をつけて、「メートル」や「リットル」などの単位名（翻訳されたもの）をつけて出力する。

書式付き文字列の外観を決めるには、まず記数法を選択します（これは数字に使用されている文字に影響します）。記数法の目的については、[ロケール情報](#ロケール情報)ですでに説明しています。 もう 1 つ決定する必要があるオプションは `style` です。これは数値が何を表すかのコンテキストを設定し、他のオプションのデフォルト値に影響を与える可能性があります。値は `"decimal"`、`"percent"`、`"currency"`、`"unit"` のいずれかです。通貨の書式化を行う場合は、`currency` オプションも提供する必要があります。単位の書式化を行う場合は、`unit` オプションも提供する必要があります。

```js
const results = [];
for (const options of [
  { style: "decimal" }, // 数値を単位のない小数として書式化
  { style: "percent" }, // 数値をパーセント値書式で表示。数値に 100 が掛けられる
  { style: "currency", currency: "USD" }, // 数値を米ドル金額として書式化する
  { style: "unit", unit: "meter" }, // 数値をメートル単位で書式化する
]) {
  const nf = new Intl.NumberFormat("ja", options);
  results.push({ style: options.style, output: nf.format(1234567.89) });
}
console.table(results);
```

出力結果は次のようになります。

| style      | 出力結果         |
| ---------- | ---------------- |
| 'decimal'  | '1,234,567.89'   |
| 'percent'  | '123,456,789%'   |
| 'currency' | '$1,234,567.89'  |
| 'unit'     | '1,234,567.89 m' |

次のグループのオプションは、すべて数値部分の表示形式を指定するものです。まず、非常に大きな値を、より読み取り可能な形で表したい場合があるでしょう。`notation` オプションを `"scientific"` または `"engineering"` に設定すると、どちらも `1.23e+6` のような表記が使用されます。両者の違いは、後者が指数に3の倍数を使用し、[仮数](https://en.wikipedia.org/wiki/Scientific_notation)（`e` 記号より前の部分）を 1 から 1000 の範囲に収めるのに対し、前者は指数に任意の整数を使用することができますが、仮数を 1 から 10 の範囲に収めます。同時に、`notation` を `"compact"` に設定すると、より人間が読み取り可能な表記を使用することもできます。

```js
const results = [];
for (const options of [
  { notation: "scientific" },
  { notation: "engineering" },
  { notation: "compact", compactDisplay: "short" }, // "short" がデフォルト
  { notation: "compact", compactDisplay: "long" },
]) {
  const nf = new Intl.NumberFormat("en-US", options);
  results.push({
    notation: options.compactDisplay
      ? `${options.notation}-${options.compactDisplay}`
      : options.notation,
    output: nf.format(12000),
  });
}
console.table(results);
```

出力結果は次のようになります。

| notation        | 出力結果      |
| --------------- | ------------- |
| 'scientific'    | '1.2E4'       |
| 'engineering'   | '12E3'        |
| 'compact-short' | '12K'         |
| 'compact-long'  | '12 thousand' |

次に、数値が長くなりすぎないように、数値を丸めることをお勧めします（`notation` を指定している場合は、仮数部のみが対象となります）。以下に、桁数の設定オプションを記載します。

- `minimumIntegerDigits`
- `minimumFractionDigits`
- `maximumFractionDigits`
- `minimumSignificantDigits`
- `maximumSignificantDigits`
- `roundingPriority`
- `roundingIncrement`
- `roundingMode`

これらのオプションの正確な相互作用はかなり複雑であり、ここでは網羅する価値はありません。詳細については、[桁オプション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#桁オプション)のリファレンスを参照してください。とはいえ、基本的な仕組みは単純です。まず、保持したい小数点以下の桁数を探し、その後、最後の桁の値に応じて切り捨てまたは切り上げを行い、余分な小数点を丸めます。

```js
const results = [];
for (const options of [
  { minimumFractionDigits: 4, maximumFractionDigits: 4 },
  { minimumSignificantDigits: 4, maximumSignificantDigits: 4 },
  { minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor" },
  {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    roundingMode: "floor",
    roundingIncrement: 10,
  },
]) {
  const nf = new Intl.NumberFormat("en-US", options);
  results.push({
    options,
    output: nf.format(1234.56789),
  });
}
console.table(results);
```

出力結果は次のようになります。

| options                                                                                                | 出力結果     |
| ------------------------------------------------------------------------------------------------------ | ------------ |
| `{ minimumFractionDigits: 4, maximumFractionDigits: 4 }`                                               | '1,234.5679' |
| `{ minimumSignificantDigits: 4, maximumSignificantDigits: 4 }`                                         | '1,235'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor" }`                        | '1,234'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor", roundingIncrement: 10 }` | '1,230'      |

それ以外にもカスタマイズオプションがあります。例えば、`useGrouping` や `signDisplay` オプションを使用することができます。これにより、グループ区切り文字（"1,234,567.89" の "," など）や符号を表示させるかどうか、またその表示方法をカスタマイズできます。ただし、グループ区切り文字、小数点、符号に使用される文字はロケールに依存するため、直接カスタマイズすることはできない点にご注意ください。

`format()` の他に、数値の範囲を書式化するためにもう一つ重要なメソッド、{{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}} があります。このメソッドは 2 つの数値表現を受け取り、それぞれを書式化した後、区切り文字（ハイフンなど）で結合し、共通部分を重複排除する場合もあります。

```js
const heightRange = {
  min: 1.63,
  max: 1.95,
};

const nf = new Intl.NumberFormat("en-US", { style: "unit", unit: "meter" });
console.log(nf.formatRange(heightRange.min, heightRange.max));
// 1.63–1.95 m
```

### リストの書式化

すでに次のようなコードを書いたことがあるかもしれません。

```js example-bad
const fruits = ["apple", "banana", "cherry"];
console.log(`I like ${fruits.join(", ")}.`);
// I like apple, banana, cherry.
```

このコードは国際化対応していません。言語によっては、リストの区切り文字がカンマではない場合があります。_ほとんどの_言語（英語を含む）では、最後のアイテムの前に接続詞が必要です。しかし、単に手動で "and" を追加しただけでは、すべての英語話者にとって正しいとは限りません。なぜなら、英語には[オックスフォードカンマ](https://en.wikipedia.org/wiki/Serial_comma)に関する議論があるからです。"apple, banana, and cherry" と "apple, banana and cherry" のどちらが正しいかという問題です。

{{jsxref("Intl.ListFormat")}} オブジェクトはこの問題を解決します。このオブジェクトは文字列の配列を受け取り、ロケールに応じた方法でそれらを連結し、結果が結合 (and)、選択 (or)、単位のリストを表すようにします。

```js
const fruits = ["apple", "banana", "cherry"];
const lf = new Intl.ListFormat("en-US", { style: "long", type: "conjunction" });
console.log(`I like ${lf.format(fruits)}.`);
// I like apple, banana, and cherry.

const lf = new Intl.ListFormat("en-US", { style: "long", type: "disjunction" });
console.log(`I can give you ${lf.format(fruits)}.`);
// I can give you apple, banana, or cherry.
```

それ以外のレイヤオプションについては、 {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}} を確認してください。

### 相対時刻の書式化

{{jsxref("Intl.RelativeTimeFormat")}} は、時間差を書式化します。`RelativeTimeFormat` オブジェクトは、2 つの引数、（符号を問わない）数値と、`"day"`、`"hour"`、`"minute"` などの時間単位の形で相対時間を指定します。

これは複数のことを一度に行います。

- 時間単位を地域に合わせて表示し、数値の書式化と同様に複数形に変換する（例: "1 day" と "2 days"）。
- 過去や未来の時点を表すのに適切な表現（「1 日後」や「1 日前」など）を選ぶ。
- 「1 日前」と「昨日」のように、特定の時間単位に対して特別な表現が選択されることがあります。

```js
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
console.log(rtf.format(1, "day")); // tomorrow
console.log(rtf.format(2, "day")); // in 2 days
console.log(rtf.format(-1, "hour")); // 1 hour ago
```

その他の例やオプションについては {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}} を参照してください。

### 期間の書式化

{{jsxref("Intl.DurationFormat")}} は、「3 時間 4 分 5 秒」のような期間の書式化を提供します。これは独自のフォーマッターを持つ単独の操作ではなく、内部で {{jsxref("Intl.NumberFormat")}} および {{jsxref("Intl.ListFormat")}} を使用してそれぞれの期間の要素を書式化し、リスト区切り文字でそれらを結合します。`DurationFormat` オブジェクトは、{{jsxref("Temporal.Duration")}} オブジェクト、または同じプロパティを持つ単純なオブジェクトの形で期間を受け取ります。

番号付け方式のカスタマイズに加え、期間の書式化オプションでは、それぞれの要素を表示させるかどうか、およびその長さをどのように設定するかを決定します。

```js
console.log(
  new Intl.DurationFormat("ja", {
    style: "long",
  }).format({ hours: 3, minutes: 4, seconds: 5 }),
);
// 3 時間 4 分 5 秒
```

それ以外の例やオプションは {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}} を参照してください。

## 照合順序

{{jsxref("Intl.Collator")}} オブジェクトは、文字列の比較やソートに役立ちます。このオブジェクトは 2 つの文字列を受け取り、{{jsxref("Array.prototype.sort")}} メソッドの `compareFn` 引数と同様に、それらの相対的な順序を示す数値を返します。

ユーザー向けの文字列を比較する際に、`===` や `>` といった JavaScript の演算子を使用すべきでない理由が数多くあります。

- 無関係な綴りの違いがあります。例えば、英語では "naïve" と "naive" は同じ単語の異なる綴りに過ぎず、同等に扱うべきです。
- 大文字と小文字を区別しない場合があります。文字列を比較する際、大文字と小文字を区別しないようにしたい多くの場合があります。例えば、 "apple" と "Apple" は同一とみなされるべきです。
- Unicode コードポイントの順序には一貫性がありません。`>` のような比較演算子は Unicode コードポイントの順序に基づいて比較を行いますが、これは辞書における文字の順序とは異なります。例えば、コードポイントの順序では "ï" は "z" の後に来ますが、辞書では "i" の隣に並んでほしいものです。
- Unicode の正規化。Unicode では、同じ文字が複数の表現を持つことができる場合があります。例えば、"ñ" は単一の文字として表されたり、"n" に結合用チルダが続く形として表されたりします（{{jsxref("String.prototype.normalize()")}} を参照）。これらは同一のものとして扱われるべきです。
- 数値の比較。文字列内の数値は、文字列としてではなく数値として比較する必要があります。例えば、"test-10" は "test-2" よりも後に来るようにしたいでしょう。

照合には、**ソート**と**検索**という 2 つの明確な用途があります。ソートとは、文字列のリストがあり、何らかのルールに従ってそれらを並べ替える場合を指します。検索とは、文字列のリストがあり、問い合わせに一致する文字列を探したい場合を指します。検索を行う際は、比較結果が 0（等しい）かどうかだけに注意を払い、結果の符号には注意を払う必要はありません。

同じロケール内でも、並べ替えの方法にはさまざまなものがあります。例えば、ドイツ語には実際、「電話帳順」と「辞書順」という 2 つの異なるソート順があります。電話帳順では音が強調され、ソート前に "ä", "ö" などの文字が "ae", "oe" などのように展開されたかのように表示されます。

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// ["Hochberg", "Hoenigswald", "Holzman"]; であるかのようにソートされる
console.log(names.sort(germanPhonebook.compare));
// ['Hochberg', 'Hönigswald', 'Holzman']
```

ドイツ語にはウムラウト付きで活用する単語があるため、辞書ではウムラウトを無視して並べ替えるのが合理的です（schon と schön のような、ウムラウトのみが異なる単語を並べる場合を除く）。

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// ["Hochberg", "Honigswald", "Holzman"] であるかのようにソートされる
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

## 複数形規則

{{jsxref("Intl.PluralRules")}} オブジェクトは、単語の正しい複数形を選択するのに有用です。このオブジェクトは自動的に単語を複数形に変換するわけではありませんが（例えば、"apple" を渡して "apples" が返ってくることを期待することはできません）、数値に基づいてどの複数形を使用すべきかを指示してくれます。すでに次のような使い方をされているかもしれません。

```js
function formatMessage(n) {
  return `You have ${n} ${n === 1 ? "apple" : "apples"}.`;
}
```

しかし、この規則をすべての言語に一概に当てはめるのは難しく、特に複数形が多数存在する言語ではなおさらです。複数形の規則に関する一般的な概要については、{{jsxref("Intl.PluralRules")}} を参照してください。ここでは、いくつか一般的な用途を紹介するにとどめます。

```js
const prCard = new Intl.PluralRules("en-US");
const prOrd = new Intl.PluralRules("en-US", { type: "ordinal" });

const englishOrdinalSuffixes = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
};

const catPlural = {
  one: "cat",
  other: "cats",
};

function formatMessage(n1, n2) {
  return `The ${n1}${englishOrdinalSuffixes[prOrd.select(n1)]} U.S. president had ${n2} ${catPlural[prCard.select(n2)]}.`;
}

console.log(formatMessage(42, 1)); // The 42nd U.S. president had 1 cat.
console.log(formatMessage(45, 0)); // The 45th U.S. president had 0 cats.
```

## 区切り文字

{{jsxref("Intl.Segmenter")}} オブジェクトは、文字列をセグメントに分割するのに有益です。`Intl` を使用しなくても、[UTF-16 コード単位および Unicode コードポイント](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)に基づいて文字列を分割することは可能です。

```js
const str = "🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷";
console.log(str.split(""));
// Array(20) ['\uD83C', '\uDDFA', '\uD83C', ...]
console.log([...str]);
// Array(10) ['🇺', '🇸', '🇨', '🇳', '🇷', '🇺', '🇬', '🇧', '🇫', '🇷']
```

しかし、お分かりのように、Unicode コードポイントは、人間のユーザーが個別の文字として認識するものと一致するわけではありません。これは絵文字で多くの場合現れる現象であり、単一の絵文字が複数のコードポイントで表されることがあります。ユーザーがテキストを操作する際、書記素とは、削除や選択など、ユーザーが操作できるテキストの最小単位のことです。`Segmenter` オブジェクトは、書記素単位の区切りができるようにし、文字数のカウントやテキストの幅の測定などで役立ちます。このオブジェクトは文字列を受け取り、反復可能オブジェクト [segments](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) を返します。このオブジェクトのそれぞれの要素には、その区間のテキストを表す `segment` プロパティがあります。

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
console.log([...segmenter.segment("🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷")].map((s) => s.segment));
// ['🇺🇸', '🇨🇳', '🇷🇺', '🇬🇧', '🇫🇷']
```

このセグメンターは、単語単位や文単位の分割など、より高レベルの分割処理も行うことが可能です。これらの場合、必然的に言語に依存します。例えば、以下は単語カウントの非常に拙い実装例です。

```js example-bad
const wordCount = (str) => str.split(/\s+/).length;
console.log(wordCount("Hello, world!")); // 2
```

この問題にはいくつかの問題があります。すべての言語が単語の区切りとして空白を扱うわけではなく、すべての空白が単語の区切りであるわけでもなく、またすべての単語が空白で区切られているわけでもないからです。これを解決するには、`granularity: "word"` を指定して `Segmenter` を使用します。その結果、入力文字列が単語と非単語の区間に分割されます。単語数をカウントする場合は、それぞれの区間の `isWordLike` プロパティを調べて、非単語を除外する必要があります。

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "word" });
const str = "It can even split non-space-separated words";
console.table([...segmenter.segment(str)]);
// ┌─────────────┬───────┬────────────┐
// │ segment     │ index │ isWordLike │
// ├─────────────┼───────┼────────────┤
// │ 'It'        │ 0     │ true       │
// │ ' '         │ 2     │ false      │
// │ 'can'       │ 3     │ true       │
// │ ' '         │ 6     │ false      │
// │ 'even'      │ 7     │ true       │
// │ ' '         │ 11    │ false      │
// │ 'split'     │ 12    │ true       │
// │ ' '         │ 17    │ false      │
// │ 'non'       │ 18    │ true       │
// │ '-'         │ 21    │ false      │
// │ 'space'     │ 22    │ true       │
// │ '-'         │ 27    │ false      │
// │ 'separated' │ 28    │ true       │
// │ ' '         │ 37    │ false      │
// │ 'words'     │ 38    │ true       │
// └─────────────┴───────┴────────────┘

console.log(
  [...segmenter.segment(str)].filter((s) => s.isWordLike).map((s) => s.segment),
);
// ['It', 'can', 'even', 'split', 'non', 'space', 'separated', 'words']
```

単語の区切り機能は、文字ベースの言語でも利用できます。例えば、中国語では複数の文字が 1 つの単語を表しますが、それらの間には空白が挿入されません。この区切り機能は、単語をダブルクリックすることでブラウザーの標準的な単語区切り機能と同じ動作を発生させます。

```js
const segmenter = new Intl.Segmenter("zh-Hans", { granularity: "word" });
console.log([...segmenter.segment("我是这篇文档的作者")].map((s) => s.segment));
// ['我是', '这', '篇', '文', '档', '的', '作者']
```

文の区切りも同様に複雑です。例えば、英語には文の終わりを示す区切り文字が数多くあります（"."、"!"、"?" といった具合に）。

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "sentence" });
console.log(
  [...segmenter.segment("I ate a sandwich. Then I went to bed.")].map(
    (s) => s.segment,
  ),
);
// ['I ate a sandwich. ', 'Then I went to bed.']
```

なお、このセグメンターは文字を除去することはありません。単に文字列を区間に分割するだけで、それぞれの区間は 1 つの文となります。必要に応じて、その後で句読点を除去することができます。また、現在のセグメンターの実装では、文の分割抑制（"Mr." や "Approx." のようなピリオドの後に文が分割されないようにする機能）は対応していないのですが、この機能の対応状況は改善されています。

## 表示名

これほど多くのオプションや動作を紹介したところで、それらをユーザーにどのように提示すればよいか迷うかもしれません。`Intl` には、ユーザーインターフェイスを構築するための 2 つの便利な API が用意されています。それは、{{jsxref("Intl.supportedValuesOf()")}} と {{jsxref("Intl.DisplayNames")}} です。

{{jsxref("Intl.supportedValuesOf()")}} 関数は、指定されたオプションに対して対応している値の配列を返します。例えば、この関数を使用することで、ユーザーが日付を表示するために選択できる、対応している暦のドロップダウンリストを作成することができます。

```js
const supportedCal = Intl.supportedValuesOf("calendar");
console.log(supportedCal);
// ['buddhist', 'chinese', 'coptic', 'dangi', ...]
```

しかし、多くの場合、これらの識別子はユーザーフレンドリーではありません。例えば、暦をユーザーの言語で示したり、略語を展開したりしたい場合があります。{{jsxref("Intl.DisplayNames")}} オブジェクトは、こうした用途に有益です。これはフォーマッターに似ていますが、テンプレートベースではありません。その代わりに、言語に依存しない識別子からローカライズされた名称への直接的な対応付けを行います。言語、地域、文字体系（BCP 47 言語タグの 3 つのサブフィールド）、通貨、暦、日時フィールドの書式化に対応しています。

次のデモを試してみてください。

```html live-sample___display_names
<select id="lang"></select>
<select id="calendar"></select>
<output id="output"></output>
```

```css hidden live-sample___display_names
output {
  display: block;
  margin: 1em;
  font-size: x-large;
}

rt {
  font-weight: bold;
}

ruby {
  border-bottom: 1px dotted;
  ruby-position: under;
  ruby-align: center;
}
```

```js live-sample___display_names
const langSelect = document.getElementById("lang");
const calSelect = document.getElementById("calendar");
const fieldset = document.querySelector("fieldset");
const output = document.getElementById("output");

// A few examples
const langs = [
  "en-US",
  "zh-Hans-CN",
  "ja-JP",
  "ar-EG",
  "ru-RU",
  "es-ES",
  "fr-FR",
  "de-DE",
  "hi-IN",
  "pt-BR",
  "bn-BD",
  "he-IL",
];
const calendars = Intl.supportedValuesOf("calendar");

for (const lang of langs) {
  const option = document.createElement("option");
  option.value = lang;
  option.textContent = new Intl.DisplayNames(lang, { type: "language" }).of(
    lang,
  );
  langSelect.appendChild(option);
}

function renderCalSelect() {
  const lang = langSelect.value;
  calSelect.innerHTML = "";
  const dn = new Intl.DisplayNames(lang, { type: "calendar" });
  const preferredCalendars = new Intl.Locale(lang).getCalendars?.() ?? [
    "gregory",
  ];
  for (const cal of [
    ...preferredCalendars,
    ...calendars.filter((c) => !preferredCalendars.includes(c)),
  ]) {
    const option = document.createElement("option");
    option.value = cal;
    option.textContent = dn.of(cal);
    calSelect.appendChild(option);
  }
}

function renderFieldInputs() {
  const lang = langSelect.value;
  fieldset.querySelectorAll("label").forEach((label) => label.remove());
  const dn = new Intl.DisplayNames(lang, { type: "dateTimeField" });
  for (const field of fields) {
    const label = document.createElement("label");
    label.textContent = dn.of(field);
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = field;
    label.appendChild(input);
    fieldset.appendChild(label);
  }
}

function renderTime() {
  const lang = langSelect.value;
  const cal = calSelect.value;
  const df = new Intl.DateTimeFormat(lang, {
    calendar: cal,
    dateStyle: "full",
    timeStyle: "full",
  });
  const now = new Date();
  const dn = new Intl.DisplayNames(lang, { type: "dateTimeField" });
  output.innerHTML = "";
  for (const component of df.formatToParts(now)) {
    const text = document.createElement("span");
    text.textContent = component.value;
    if (
      ![
        "era",
        "year",
        "quarter",
        "month",
        "weekOfYear",
        "weekday",
        "day",
        "dayPeriod",
        "hour",
        "minute",
        "second",
        "timeZoneName",
      ].includes(component.type)
    ) {
      output.appendChild(text);
      continue;
    }
    const title = dn.of(component.type);
    const field = document.createElement("ruby");
    field.appendChild(text);
    const rt = document.createElement("rt");
    rt.textContent = title;
    field.appendChild(rt);
    output.appendChild(field);
  }
}

renderCalSelect();
renderTime();
langSelect.addEventListener("change", renderCalSelect);
langSelect.addEventListener("change", renderTime);
calSelect.addEventListener("change", renderTime);
setInterval(renderTime, 500);
```

{{EmbedLiveSample("display_names", "", 300)}}

{{PreviousNext("Web/JavaScript/Guide/Resource_management", "Web/JavaScript/Guide/Modules")}}
