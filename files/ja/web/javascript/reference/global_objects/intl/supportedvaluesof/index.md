---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{JSRef}}

静的メソッド **`Intl.supportedValuesOf()`** は、実装で対応している暦、文字列の比較方法、通貨、数え方、単位が格納された配列を返します。

重複した値は除かれ、配列は辞書順の昇順で (より正確には、比較関数を `undefined` に設定した {{jsxref("Array/sort", "Array.prototype.sort()")}} を用いて) ソートされています。

このメソッドは、特定の実装が値に対応しているかの機能テストを行い、必要な場合のみポリフィルをダウンロードするために用いることができます。また、たとえば UI が WebGL やサーバーサイドで構築される場合に、ユーザーが好きなローカライズされた値を選択できる UI を構築するためにも使用できます。

このメソッドはロケールを認識しません。特定の識別子は、特定のロケールでのみ対応している、または推奨されている場合があります。特定のロケールで推奨される値を決定したい場合は、{{jsxref("Intl.Locale")}} オブジェクト ({{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}} など) を使用してください。

{{InteractiveExample("JavaScript デモ: Intl.supportedValuesOf()", "taller")}}

```js interactive-example
console.log(Intl.supportedValuesOf("calendar"));
console.log(Intl.supportedValuesOf("collation"));
console.log(Intl.supportedValuesOf("currency"));
console.log(Intl.supportedValuesOf("numberingSystem"));
console.log(Intl.supportedValuesOf("timeZone"));
console.log(Intl.supportedValuesOf("unit"));
// 予想される結果: Array ['key'] (for each key)

try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  console.log(err.toString());
  // 予想される結果: RangeError: invalid key: "someInvalidKey"
}
```

## 構文

```js-nolint
Intl.supportedValuesOf(key)
```

### 引数

- `key`
  - : 返される値のカテゴリーを示すキー文字列。これは、次のいずれかです。
    - `"calendar"`: [対応している暦](#対応している暦)を参照してください。
    - `"collation"`: [対応している照合型](#対応している照合型)を参照してください。
    - `"currency"`: [対応している通貨識別子](#対応している通貨識別子)を参照してください。
    - `"numberingSystem"`: [対応している命数法](#対応している命数法)を参照してください。
    - `"timeZone"`: [対応しているタイムゾーン識別子](#対応しているタイムゾーン識別子)を参照してください。
    - `"unit"`: [対応している単位識別子](#対応している単位識別子)を参照してください。

### 返値

指定のキーに対応する、実装で対応している値を表す重複のない文字列のソート済み配列です。

#### 対応している暦

次に示すのは、 `calendar` キーでブラウザーが一般的に対応しているすべての値です。これらの値は、 {{jsxref("Intl.DateTimeFormat")}} などのオブジェクトを作成する場合の `calendar` オプションまたは `ca` [Unicode 拡張キー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)、および {{jsxref("Temporal")}} 日時オブジェクトの作成に使用することができます。

| 値                 | 説明                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buddhist`         | タイ仏教暦                                                                                                                                                                                                                                                                                                                                                                                            |
| `chinese`          | 中国の旧暦                                                                                                                                                                                                                                                                                                                                                                                            |
| `coptic`           | コプト暦                                                                                                                                                                                                                                                                                                                                                                                              |
| `dangi`            | 韓国の旧暦                                                                                                                                                                                                                                                                                                                                                                                            |
| `ethioaa`          | エチオピア暦、アメテ・アレム、単一時代型（元期は紀元前5493年頃）                                                                                                                                                                                                                                                                                                                                      |
| `ethiopic`         | エチオピア暦、アメテ・ミヘレット、二時代型（元期は西暦8年頃、アメテ・ミヘレット以前の年はアメテ・アレム）                                                                                                                                                                                                                                                                                             |
| `gregory`          | グレゴリオ暦（プロレプティック、ユリウス暦とのハイブリッドではありません）                                                                                                                                                                                                                                                                                                                            |
| `hebrew`           | ヘブライの旧暦                                                                                                                                                                                                                                                                                                                                                                                        |
| `indian`           | インド歴                                                                                                                                                                                                                                                                                                                                                                                              |
| `islamic`          | ヒジュラ暦、アルゴリズムは指定されていません。**メモ:** 2025 年 4 月現在、これは、引数が文書化されておらず、ソフトウェア以外のコンテキストにおける特定のヒジュラ暦のバリエーションと一致することが知られていない、天文学のシミュレーションです。明確に指定された結果を得るには、3つの特定のバリエーション（`islamic-umalqura`、`islamic-tbla`、または `islamic-civil`）のいずれかを使用してください。 |
| `islamic-umalqura` | ヒジュラ暦、ウム・アル・クラー（1300 AH の初めから 1600 AH の終わりまで KACST によって計算された月を使用し、その範囲外では「イスラム暦」に戻ります）                                                                                                                                                                                                                                                  |
| `islamic-tbla`     | ヒジュラ暦、表形式/規則ベース、閏年規則 II（30 年周期（1 から始まる番号）で 2、5、7、10、13、16、18、21、24、29 が閏年）、木曜日/天文元期（622 年 7 月 15 日 / 0622-07-18 ISO）                                                                                                                                                                                                                       |
| `islamic-civil`    | ヒジュラ暦、表形式/規則ベース、閏年規則 II（30 年周期（1 ベースの数値）で 2、5、7、10、13、16、18、21、24、26、29 が閏年）、金曜日/民間の元期（622 年 7 月 16 日 / 0622-07-19 ISO）                                                                                                                                                                                                                   |
| `iso8601`          | ISO カレンダー (グレゴリオ暦の変形版で、週の規則および書式化引数が地域に依存しないもの)                                                                                                                                                                                                                                                                                                               |
| `japanese`         | 日本皇暦（このカレンダーは、新しい天皇の即位ごとに元号を追加するため、将来のエンジンバージョンでコードを実行した場合、将来の日付の出力年と元号が入力年と一致しない場合があります）                                                                                                                                                                                                                    |
| `persian`          | ペルシャ暦                                                                                                                                                                                                                                                                                                                                                                                            |
| `roc`              | 中華民国暦                                                                                                                                                                                                                                                                                                                                                                                            |

以下の型は CLDR で指定されていますが、ブラウザーでは上記のカレンダーとは別の実装は存在しません。

| 値                               | 説明                                   | メモ                                                                                                                                                                                                          |
| -------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `islamicc` {{deprecated_inline}} | 民間の（アルゴリズムによる）アラビア暦 | これは `islamic-civil` の別名であるため、 `supportedValuesOf()` では返されません。代わりに `islamic-civil` を使用してください。                                                                               |
| `islamic-rgsa`                   | ヒジュラ暦、サウジアラビアの観測       | ブラウザーは過去の観測データを持たないため、将来の観測は発生していません。 2025 年 4 月現在、このカレンダーは `islamic` と同じ動作をします。メッカに基づく天文計算には `islamic-umalqura` を使用してください。|

参考文献:

- [CLDR Calendar type keys](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Dates](https://unicode.org/reports/tr35/tr35-dates.html)
- [Islamic calendar types](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types) (CLDR design proposal)

#### 対応している照合型

以下は、 `collation` キーとしてブラウザーで一般的に対応しているすべての値です。これらの値は、 `collation` オプションまたは `co` [Unicode 拡張キー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)として、 {{jsxref("Intl.Collator")}} などのオブジェクトを作成する際に使用することができます。

| 値         | 説明                                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `compat`   | 以前のバージョンの並び順、互換性目的（アラビア語のため）                                                                                                                               |
| `dict`     | 辞書式順（シンハラ語など）。`dictionary` としても認識されます。                                                                                                                 |
| `emoji`    | 絵文字の推奨順序                                                                                                                                                        |
| `eor`      | ヨーロッパの並び順のルール                                                                                                                                                                          |
| `phonebk`  | 電話帳のスタイル順 (ドイツ語など)。`phonebook` としても認識されます。                                                                                                                    |
| `phonetic` | 音声順（発音に基づく並び順、リンガラ語用）                                                                                                                                  |
| `pinyin`   | ラテン文字および CJK 文字（中国語で使用）のピンイン順                                                                                                                               |
| `searchjl` | 韓国語の頭子音検索用の特別な照合型です。**警告:** この照合は、 {{jsxref("Intl.Collator")}} の `usage: "sort"` でのみ使用できますが、整列用ではありません。 |
| `stroke`   | ラテン文字のピンイン順、CJK 文字の筆順（中国語で使用）                                                                                                                     |
| `trad`     | 伝統的なスタイル順（スペイン語など）。`traditional` としても認識されます。                                                                                                               |
| `unihan`   | ラテン文字のピンイン順、CJK 文字のユニハン部首順（中国語で使用されています）                                                                                                   |
| `zhuyin`   | ラテン文字のピンイン順、ボポモフォおよび CJK 文字の注音符号順（中国語で使用）                                                                                                        |

下記の型は CLDR データで指定されていますが、非推奨であり、明示的な使用は控えるべきであり、また、さまざまな理由により、ブラウザーが対応していることを示さない場合があります。これらの使用は避けてください。

| 値                               | 説明                                                                                                    | メモ                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `big5han` {{deprecated_inline}}  | ラテン文字のピンイン順、CJK 文字（中国語で使用）の big5 文字セット順                                    | 非推奨。                                                                                                                                                                                                                                                                                                           |
| `direct` {{deprecated_inline}}   | バイナリコードポイントの順序（ヒンディー語で使用）                                                      | 非推奨。                                                                                                                                                                                                                                                                                                           |
| `ducet`                          | 既定の Unicode 照合要素表の順序                                                                         | `ducet` 照合型は、ウェブでは利用できません。                                                                                                                                                                                                                                                                       |
| `gb2312` {{deprecated_inline}}   | ラテン文字のピンイン順、CJK 文字（中国語）の gb2312han 文字セット順。`gb2312han` としても認識されます。 | 非推奨。                                                                                                                                                                                                                                                                                                           |
| `reformed` {{deprecated_inline}} | 改訂された順序（スウェーデン語など）                                                                    | 非推奨。これは、[他の言語とは照合順序の命名法が異なっていた](https://unicode-org.atlassian.net/browse/CLDR-15603)スウェーデン語の既定の照合順序の旧名です。これは既定であったため、`sv-u-co-reformed` をリクエストする代わりに `sv` をリクエストしてください。                                                     |
| `search`                         | 文字列検索用の特別な照合型                                                                              | {{jsxref("Intl.Collator")}} では、この照合は `usage: "search"` オプションによって有効になるため、照合型としては使用しないでください。現在、部分文字列検索用の API はありません。そのため、これは、キーと各リストアイテムの完全文字列の一致を試みて、文字列のリストをフィルタリングする場合にのみ良く使用できます。 |
| `standard`                       | 中国語（および以前のスウェーデン語）を除く各言語の既定の順序                                            | 明示的に使用しないでください。通常、これを明示的に指定する必要はありません。また、スウェーデン語では過去の意味が異なるため、これを指定すると問題になります。                                                                                                                                                       |

参考文献:

- [CLDR Collation type keys](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Collation](https://unicode.org/reports/tr35/tr35-collation.html)

#### 対応している通貨識別子

通貨識別子は、ISO 4217 で定義されている 3 文字の大文字のコードです。これらの値は、 {{jsxref("Intl.NumberFormat")}} などのオブジェクトを作成する際に `currency` オプションとして、また {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}} にも使用できます。一般的に使用されている識別子は 300 以上あるため、ここではすべては掲載しません。実現可能な識別子の完全なリストについては、[ウィキペディアの記事](https://ja.wikipedia.org/wiki/ISO_4217#有効なコード)を参照してください。

参考文献:

- [CLDR Currency type keys](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [ISO 4217 Currency codes](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Currencies](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### 対応している命数法

次のものは、 `numberingSystem` キーに対してブラウザーが一般的に対応しているすべての値です。これらの値は、 `numberingSystem` オプションまたは `nu` [Unicode 拡張キー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_引数)として {{jsxref("Intl.NumberFormat")}} などのオブジェクトを作成する際に使用することができます。「数字の文字」の行の場合、ランタイムは追加の操作を行わずに数字を 1 つずつ対応させます。それ以外で「アルゴリズム」とマークされているものは、数字を対応させるために追加のアルゴリズムが必要です。 Unicode コードポイントが高いほど、数値体系は新しく、すべてのブラウザーで対応していない可能性が高くなります。

| 値         | 説明                                                                       | 数字の文字                                                                                        |
| ---------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Adlam digits                                                               | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 to U+1E959)                                                                       |
| `ahom`     | Ahom digits                                                                | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 to U+11739)                                                                       |
| `arab`     | Arabic-Indic digits                                                        | `٠١٢٣٤٥٦٧٨٩` (U+0660 to U+0669)                                                                         |
| `arabext`  | Extended Arabic-Indic digits                                               | `۰۰۱۲۳۴۵۶۷۸۹` (U+06F0 to U+06F9)                                                                        |
| `armn`     | Armenian upper case numerals                                               | アルゴリズム                                                                                             |
| `armnlow`  | Armenian lower case numerals                                               | アルゴリズム                                                                                             |
| `bali`     | Balinese digits                                                            | `᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙` (U+1B50 to U+1B59)                                                                         |
| `beng`     | Bengali digits                                                             | `০১২৩৪৫৬৭৮৯` (U+09E6 to U+09EF)                                                                         |
| `bhks`     | Bhaiksuki digits                                                           | `𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙` (U+11C50 to U+11C59)                                                                       |
| `brah`     | Brahmi digits                                                              | `𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯` (U+11066 to U+1106F)                                                                       |
| `cakm`     | Chakma digits                                                              | `𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿` (U+11136 to U+1113F)                                                                       |
| `cham`     | Cham digits                                                                | `꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙` (U+AA50 to U+AA59)                                                                         |
| `cyrl`     | Cyrillic numerals                                                          | アルゴリズム                                                                                             |
| `deva`     | Devanagari digits                                                          | `०१२३४५६७८९` (U+0966 to U+096F)                                                                         |
| `diak`     | Dives Akuru digits                                                         | `𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙` (U+11950 to U+11959)                                                                       |
| `ethi`     | Ethiopic numerals                                                          | アルゴリズム                                                                                             |
| `fullwide` | 全角数字                                                          | `０１２３４５６７８９` (U+FF10 ～ U+FF19)                                                               |
| `gara`     | Garay digits                                                               | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 to U+10D49)                                                                       |
| `geor`     | Georgian numerals                                                          | アルゴリズム                                                                                             |
| `gong`     | Gunjala Gondi digits                                                       | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 to U+11DA9)                                                                       |
| `gonm`     | Masaram Gondi digits                                                       | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 to U+11D59)                                                                       |
| `grek`     | Greek upper case numerals                                                  | アルゴリズム                                                                                             |
| `greklow`  | Greek lower case numerals                                                  | アルゴリズム                                                                                             |
| `gujr`     | Gujarati digits                                                            | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 to U+0AEF)                                                                         |
| `gukh`     | Gurung Khema digits                                                        | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 to U+16139)                                                                       |
| `guru`     | Gurmukhi digits                                                            | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 to U+0A6F)                                                                         |
| `hanidays` | 旧暦/その他の伝統的な暦の漢数字による日付の番号付け |                                                                                                         |
| `hanidec`  | 数字として漢字を使用する桁取り十進法        | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | 簡体字中国語の数字                                                | アルゴリズム                                                                                             |
| `hansfin`  | 簡体字中国語の金融数字                                      | アルゴリズム                                                                                             |
| `hant`     | 繁体字中国語の数字                                               | アルゴリズム                                                                                             |
| `hantfin`  | 繁体字中国語の金融数字                                     | アルゴリズム                                                                                             |
| `hebr`     | ヘブライ数字                                                            | アルゴリズム                                                                                             |
| `hmng`     | Pahawh Hmong digits                                                        | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 to U+16B59)                                                                       |
| `hmnp`     | Nyiakeng Puachue Hmong digits                                              | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 to U+1E149)                                                                       |
| `java`     | Javanese digits                                                            | `꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 to U+A9D9)                                                                         |
| `jpan`     | 日本語の数字                                                          | アルゴリズム                                                                                             |
| `jpanfin`  | 日本語の金融数字                                                | アルゴリズム                                                                                             |
| `jpanyear` | 日本の暦における最初の年を元年とした数字                 | アルゴリズム                                                                                             |
| `kali`     | Kayah Li digits                                                            | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 to U+A909)                                                                         |
| `kawi`     | Kawi digits                                                                | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 to U+11F59)                                                                       |
| `khmr`     | Khmer digits                                                               | `០១២៣៤៥៦៧៨៩` (U+17E0 to U+17E9)                                                                         |
| `knda`     | Kannada digits                                                             | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 to U+0CEF)                                                                         |
| `krai`     | Kirat Rai digits                                                           | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 to U+16D79)                                                                       |
| `lana`     | Tai Tham Hora (secular) digits                                             | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 to U+1A89)                                                                         |
| `lanatham` | Tai Tham (ecclesiastical) digits                                           | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 to U+1A99)                                                                         |
| `laoo`     | Lao digits                                                                 | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 to U+0ED9)                                                                         |
| `latn`     | ラテン数字                                                               | `0123456789` (U+0030 ～ U+0039)                                                                         |
| `lepc`     | Lepcha digits                                                              | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 to U+1C49)                                                                         |
| `limb`     | Limbu digits                                                               | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 to U+194F)                                                                         |
| `mathbold` | 数式用の太字数字                                                   | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE ～ U+1D7D7)                                                                       |
| `mathdbl`  | 数式用の二重打刻数字                                          | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 ～ U+1D7E1)                                                                       |
| `mathmono` | 数式用等幅数字 digits                                              | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 ～ U+1D7FF)                                                                       |
| `mathsanb` | 数式用サンセリフ太字数字                                        | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC ～ U+1D7F5)                                                                       |
| `mathsans` | 数式用サンセリフ数字                                             | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 ～ U+1D7EB)                                                                       |
| `mlym`     | Malayalam digits                                                           | `൦൧൨൩൪൫൬൭൮൯` (U+0D66 to U+0D6F)                                                                         |
| `modi`     | Modi digits                                                                | `𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙` (U+11650 to U+11659)                                                                       |
| `mong`     | Mongolian digits                                                           | `᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙` (U+1810 to U+1819)                                                                         |
| `mroo`     | Mro digits                                                                 | `𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩` (U+16A60 to U+16A69)                                                                       |
| `mtei`     | Meetei Mayek digits                                                        | `꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹` (U+ABF0 to U+ABF9)                                                                         |
| `mymr`     | Myanmar digits                                                             | `၀၁၂၃၄၅၆၇၈၉` (U+1040 to U+1049)                                                                         |
| `mymrepka` | Myanmar Eastern Pwo Karen digits                                           | `𑛚𑛛𑛜𑛝𑛞𑛟𑛠𑛡𑛢𑛣` (U+116DA to U+116E3)                                                                       |
| `mymrpao`  | Myanmar Pao digits                                                         | `𑛐𑛑𑛒𑛓𑛔𑛕𑛖𑛗𑛘𑛙` (U+116D0 to U+116D9)                                                                       |
| `mymrshan` | Myanmar Shan digits                                                        | `႐႑႒႓႔႕႖႗႘႙` (U+1090 to U+1099)                                                                         |
| `mymrtlng` | Myanmar Tai Laing digits                                                   | `꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹` (U+A9F0 to U+A9F9)                                                                         |
| `nagm`     | Nag Mundari digits                                                         | `𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹` (U+1E4F0 to U+1E4F9)                                                                       |
| `newa`     | Newa digits                                                                | `𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙` (U+11450 to U+11459)                                                                       |
| `nkoo`     | N'Ko digits                                                                | `߀߁߂߃߄߅߆߇߈߉` (U+07C0 to U+07C9)                                                                         |
| `olck`     | Ol Chiki digits                                                            | `᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙` (U+1C50 to U+1C59)                                                                         |
| `onao`     | Ol Onal digits                                                             | `𞗱𞗲𞗳𞗴𞗵𞗶𞗷𞗸𞗹𞗺` (U+1E5F1 to U+1E5FA)                                                                       |
| `orya`     | Oriya digits                                                               | `୦୧୨୩୪୫୬୭୮୯` (U+0B66 to U+0B6F)                                                                         |
| `osma`     | Osmanya digits                                                             | `𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩` (U+104A0 to U+104A9)                                                                       |
| `outlined` | 古いコンピューターの縁取り数字                                           | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 ～ U+1CCF9)                                                                       |
| `rohg`     | Hanifi Rohingya digits                                                     | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 to U+10D39)                                                                       |
| `roman`    | 大文字のローマ数字                                                  | アルゴリズム                                                                                             |
| `romanlow` | 小文字のローマ数字                                                   | アルゴリズム                                                                                             |
| `saur`     | Saurashtra digits                                                          | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 to U+A8D9)                                                                         |
| `segment`  | 古いコンピューターのデジタル数字                                          | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 ～ U+1FBF9)                                                                       |
| `shrd`     | Sharada digits                                                             | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 to U+111D9)                                                                       |
| `sind`     | Khudawadi digits                                                           | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 to U+112F9)                                                                       |
| `sinh`     | Sinhala Lith digits                                                        | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 to U+0DEF)                                                                         |
| `sora`     | Sora_Sompeng digits                                                        | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 to U+110F9)                                                                       |
| `sund`     | Sundanese digits                                                           | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 to U+1BB9)                                                                         |
| `sunu`     | Sunuwar digits                                                             | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 to U+11BF9)                                                                       |
| `takr`     | Takri digits                                                               | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 to U+116C9)                                                                       |
| `talu`     | New Tai Lue digits                                                         | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 to U+19D9)                                                                         |
| `taml`     | Tamil numerals                                                             | アルゴリズム                                                                                             |
| `tamldec`  | Modern Tamil decimal digits                                                | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 to U+0BEF)                                                                         |
| `telu`     | Telugu digits                                                              | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 to U+0C6F)                                                                         |
| `thai`     | Thai digits                                                                | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 to U+0E59)                                                                         |
| `tibt`     | Tibetan digits                                                             | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 to U+0F29)                                                                         |
| `tirh`     | Tirhuta digits                                                             | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 to U+114D9)                                                                       |
| `tnsa`     | Tangsa digits                                                              | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 to U+16AC9)                                                                       |
| `vaii`     | Vai digits                                                                 | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 to U+A629)                                                                         |
| `wara`     | Warang Citi digits                                                         | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 to U+118E9)                                                                       |
| `wcho`     | Wancho digits                                                              | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 to U+1E2F9)                                                                       |

3 つの特別な値、`native`、`traditio`、`finance` があります。これらは、その意味はロケールに依存し、ロケールに応じて適切なシステムに解決されます。したがって、`resolvedOptions()` メソッドはこれらの値を返すことはありませんが、`Intl.Locale.prototype.numberingSystem` は（入力として指定された場合）これらの値を返します。

参考文献:

- [CLDR Numbering system type keys](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [CLDR Numbering system definitions](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Numbering systems](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### 対応しているタイムゾーン識別子

対応しているタイムゾーン識別子は、 `timeZone` オプションに使用して、 {{jsxref("Intl.DateTimeFormat")}} などのオブジェクトを作成したり、 {{jsxref("Temporal")}} 日時オブジェクトを作成したりすることができます。一般的に使用されている識別子は 400 以上あるため、ここではすべてを記載しません。実現可能な識別子の完全なリストについては、[Wikipedia の記事](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)（英語）または [IANA タイムゾーンデータベース](https://www.iana.org/time-zones)を参照してください。

リストを閲覧する際は、 `Temporal` の標準化により、ブラウザーは常に IANA データベースのプライマリ識別子を返すよう要求されていることにご注意ください。プライマリ識別子は時間経過に伴う変更の可能性があります。詳細については、[タイムゾーンとオフセット](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)を参照してください。例えば、返される配列には `"Asia/Calcutta"` ではなく `"Asia/Kolkata"` が含まれます。これは、後者は前者の別名であり、どちらもインドに対応しているためです。ただし、 `"Africa/Abidjan"` と `"Atlantic/Reykjavik"` の場合、後者は前者の別名ですが、異なる国にあるため、両方とも含まれます。

参考文献:

- [IANA Time Zone Database](https://www.iana.org/time-zones)
- [UTS 35, Time Zone Identifiers](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### 対応している単位識別子

以下は、ブラウザーが `unit` キーに対して一般的に対応しているすべての値です。これらの値は、{{jsxref("Intl.NumberFormat")}} などのオブジェクトを作成する際に、`unit` オプションとして使用することができます。このリストは、ECMA-402 仕様で明示的に認可されている CLDR のサブセットであるため、すべての実装で一貫性があります。

- `acre`
- `bit`
- `byte`
- `celsius`
- `centimeter`
- `day`
- `degree`
- `fahrenheit`
- `fluid-ounce`
- `foot`
- `gallon`
- `gigabit`
- `gigabyte`
- `gram`
- `hectare`
- `hour`
- `inch`
- `kilobit`
- `kilobyte`
- `kilogram`
- `kilometer`
- `liter`
- `megabit`
- `megabyte`
- `meter`
- `microsecond`
- `mile`
- `mile-scandinavian`
- `milliliter`
- `millimeter`
- `millisecond`
- `minute`
- `month`
- `nanosecond`
- `ounce`
- `percent`
- `petabyte`
- `pound`
- `second`
- `stone`
- `terabit`
- `terabyte`
- `week`
- `yard`
- `year`

単位を指定する場合、2 つの単位を "-per-" という区切り文字で組み合わせることもできます。例えば、 `meter-per-second` や `liter-per-megabyte` などです。

参考文献:

- [ECMA-402 sanctioned single units](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [CLDR Unit validity data](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Unit identifiers](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

### 例外

- {{jsxref("RangeError")}}
  - : 引数として未対応のキーが渡されたとき投げられます。

## 例

### 機能テスト

`undefined` と比較することで、このメソッドに対応しているかをチェックできます。

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // メソッドに対応している
}
```

### キーに対応するすべての値を取得する

暦に関する対応している値を取得するには、キー `"calendar"` を指定してこのメソッドを呼び出します。
その後、以下のように返された配列を走査できます。

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

他の値も、同様にして取得できます。

```js
Intl.supportedValuesOf("collation").forEach((collation) => {
  // "compat", "dict", "emoji", etc.
});

Intl.supportedValuesOf("currency").forEach((currency) => {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", etc.
});

Intl.supportedValuesOf("numberingSystem").forEach((numberingSystem) => {
  // "adlm", "ahom", "arab", "arabext", "bali", etc.
});

Intl.supportedValuesOf("timeZone").forEach((timeZone) => {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", etc.
});

Intl.supportedValuesOf("unit").forEach((unit) => {
  // "acre", "bit", "byte", "celsius", "centimeter", etc.
});
```

### 無効なキーでは RangeError が投げられる

```js
try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  // RangeError: invalid key: "someInvalidKey"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.supportedValuesOf` のポリフィル (FormatJS)](https://formatjs.github.io/docs/polyfills/intl-supportedvaluesof/)
- {{jsxref("Intl")}}
