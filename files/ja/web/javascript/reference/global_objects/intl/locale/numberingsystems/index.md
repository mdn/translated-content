---
title: Intl.Locale.prototype.numberingSystems
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystems
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
  - numberingSystems
browser-compat: javascript.builtins.Intl.Locale.numberingSystems
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystems
---
{{JSRef}}

**`Intl.Locale.prototype.numberingSystems`** プロパティは、 `Locale` が使用する[命数法](https://en.wikipedia.org/wiki/Numeral_system)に関わる 1 つ以上の識別子を返すアクセサープロパティです。

## 解説

命数法とは、数値を表現するための体系のことです。 `numberingSystem` プロパティは、世界中のさまざまな国、地域、文化で使用されているさまざまな命数法を表現する支援をします。ほとんどの国際化スキーマと同様に、 `Locale` オブジェクトで `numberingSystem` によって表現できる命数法は、 Unicode で標準化されています。標準的な Unicode の命数法の表を以下に示します。

| 値    | 説明                                                                |
| -------- | -------------------------------------------------------------------------- |
| adlm     | アドラム数字                                                               |
| ahom     | アコム数字                                                                |
| arab     | アラビア・インド数字                                                        |
| arabext  | 拡張アラビア・インド数字                                               |
| armn     | 大文字のアルメニア数字 — アルゴリズム                                 |
| armnlow  | 小文字のアルメニア数字 — アルゴリズム                                 |
| bali     | Balinese digits                                                            |
| beng     | Bengali digits                                                             |
| bhks     | Bhaiksuki digits                                                           |
| brah     | Brahmi digits                                                              |
| cakm     | Chakma digits                                                              |
| cham     | Cham digits                                                                |
| cyrl     | キリル数字 — アルゴリズム                                            |
| deva     | Devanagari digits                                                          |
| ethi     | エチオピア数字 — アルゴリズム                                            |
| finance  | 金融数字 — アルゴリズムの場合あり                                    |
| fullwide | 全角数字                                                          |
| geor     | ジョージア数字 — アルゴリズム                                            |
| gong     | Gunjala Gondi digits                                                       |
| gonm     | Masaram Gondi digits                                                       |
| grek     | 大文字のギリシャ数字 — アルゴリズム                                    |
| greklow  | 小文字のギリシャ数字 — アルゴリズム                                    |
| gujr     | Gujarati digits                                                            |
| guru     | Gurmukhi digits                                                            |
| hanidays | 太陰暦またはその他の旧暦向けの漢字による日付の数字 |
| hanidec  | 漢数字表意文字による位置決め十進法        |
| hans     | 簡体字の漢数字 — アルゴリズム                                  |
| hansfin  | 簡体字の金融用漢数字 — アルゴリズム                        |
| hant     | 繁体字の漢数字 — アルゴリズム                                 |
| hantfin  | 繁体字の金融用漢数字 — アルゴリズム                       |
| hebr     | ヘブライ数字 — アルゴリズム                                              |
| hmng     | Pahawh Hmong digits                                                        |
| hmnp     | Nyiakeng Puachue Hmong digits                                              |
| java     | Javanese digits                                                            |
| jpan     | 日本語の漢数字 — アルゴリズム                                            |
| jpanfin  | 日本語の金融用漢数字 — アルゴリズム                                  |
| jpanyear | 最初の年を元年とした日本の暦用の命数法                 |
| kali     | Kayah Li digits                                                            |
| khmr     | Khmer digits                                                               |
| knda     | Kannada digits                                                             |
| lana     | Tai Tham Hora (secular) digits                                             |
| lanatham | Tai Tham (ecclesiastical) digits                                           |
| laoo     | Lao digits                                                                 |
| latn     | ラテン数字                                                               |
| lepc     | Lepcha digits                                                              |
| limb     | Limbu digits                                                               |
| mathbold | 数学的太数字                                                   |
| mathdbl  | 数学的二重打鍵の数字                                          |
| mathmono | 数学的等幅数字                                              |
| mathsanb | 数学的三セリフ太字数字                                        |
| mathsans | 数学的サンセリフ数字                                             |
| mlym     | Malayalam digits                                                           |
| modi     | Modi digits                                                                |
| mong     | Mongolian digits                                                           |
| mroo     | Mro digits                                                                 |
| mtei     | Meetei Mayek digits                                                        |
| mymr     | Myanmar digits                                                             |
| mymrshan | Myanmar Shan digits                                                        |
| mymrtlng | Myanmar Tai Laing digits                                                   |
| native   | ネイティブの数字                                                              |
| newa     | Newa digits                                                                |
| nkoo     | N'Ko digits                                                                |
| olck     | Ol Chiki digits                                                            |
| orya     | Oriya digits                                                               |
| osma     | Osmanya digits                                                             |
| rohg     | Hanifi Rohingya digits                                                     |
| roman    | 大文字のローマ数字 — アルゴリズム                                    |
| romanlow | 小文字のローマ数字 — アルゴリズム                                     |
| saur     | Saurashtra digits                                                          |
| shrd     | Sharada digits                                                             |
| sind     | Khudawadi digits                                                           |
| sinh     | Sinhala Lith digits                                                        |
| sora     | Sora_Sompeng digits                                                        |
| sund     | Sundanese digits                                                           |
| takr     | Takri digits                                                               |
| talu     | New Tai Lue digits                                                         |
| taml     | タミル数字 — アルゴリズム                                               |
| tamldec  | Modern Tamil decimal digits                                                |
| telu     | Telugu digits                                                              |
| thai     | Thai digits                                                                |
| tirh     | Tirhuta digits                                                             |
| tibt     | Tibetan digits                                                             |
| traditio | 伝統的な数字 — アルゴリズムの場合あり                                  |
| vaii     | Vai digits                                                                 |
| wara     | Warang Citi digits                                                         |
| wcho     | Wancho digits                                                              |

## 例

### ロケール文字列から `numberingSystem` の値を受け取る

[Unicode ロケール文字列仕様書](https://www.unicode.org/reports/tr35/)では、 `numberingSystem` が表す値はキー `nu` に対応しています。 `nu` はロケール文字列の「拡張サブタグ」とみなされます。これらのサブタグは、ロケールに関する追加データを追加するもので、拡張キー `-u` を使用してロケール識別子に追加されます。このようして、 `numberingSystem` の値を {{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターに渡される初期のロケール識別子文字列に追加することができます。 `numeric` の値を設定するには、まず文字列に `-u` 拡張キーを追加します。次に、 `-nu` 拡張キーを追加して、 `numberingSystem` の値を追加していることを示します。最後に、文字列に `numberingSystem` の値を追加します。

指定された `Locale` が対応する命数法の一覧を出力します。

```js
let arEG = new Intl.Locale("ar-EG");
console.log(arEG.numberingSystems); // logs ["arab"]
```

```js
let ja = new Intl.Locale("ja");
console.log(ja.numberingSystems); // logs ["latn"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- [標準 Unicode 命数法の詳細](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
