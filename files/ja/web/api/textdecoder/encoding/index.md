---
title: "TextDecoder: encoding プロパティ"
slug: Web/API/TextDecoder/encoding
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("Encoding API")}}

**`TextDecoder.encoding`** は読み取り専用のプロパティで、特定のデコーダオブジェクトが使用するデコードアルゴリズムの名前が入った文字列を返します。

エンコーダーは [コンストラクター](/ja/docs/Web/API/TextDecoder/TextDecoder) の `label` 引数で設定し、既定値は `utf-8` となります。

## 値

小文字の ASCII 文字列で、以下のいずれかの値を取ります。

- ウェブで推奨されているエンコーディング: `'utf-8'`
- 古いシングルバイトのエンコーディング:
  ['ibm866'](https://en.wikipedia.org/wiki/Code_page_866),
  ['iso-8859-2'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-2),
  ['iso-8859-3'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-3),
  ['iso-8859-4'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-4),
  ['iso-8859-5'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-5),
  ['iso-8859-6'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-6),
  ['iso-8859-7'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-7),
  ['iso-8859-8'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-8)'`,
  ['iso-8859-8i'](https://en.wikipedia.org/wiki/ISO-8859-8-I),
  ['iso-8859-10'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-10),
  ['iso-8859-13'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-13),
  ['iso-8859-14'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-14),
  ['iso-8859-15'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-15),
  ['iso-8859-16'](https://ja.wikipedia.org/wiki/ISO/IEC_8859-16),
  ['koi8-r'](https://ja.wikipedia.org/wiki/KOI8-R),
  ['koi8-u'](https://ja.wikipedia.org/wiki/KOI8-U),
  ['macintosh'](https://en.wikipedia.org/wiki/Mac_OS_Roman),
  ['windows-874'](https://ja.wikipedia.org/wiki/Windows-874),
  ['windows-1250'](https://en.wikipedia.org/wiki/Windows-1250),
  ['windows-1251'](https://en.wikipedia.org/wiki/Windows-1251),
  ['windows-1252'](https://ja.wikipedia.org/wiki/Windows-1252),
  ['windows-1253'](https://en.wikipedia.org/wiki/Windows-1253),
  ['windows-1254'](https://en.wikipedia.org/wiki/Windows-1254),
  ['windows-1255'](https://en.wikipedia.org/wiki/Windows-1255),
  ['windows-1256'](https://en.wikipedia.org/wiki/Windows-1256),
  ['windows-1257'](https://en.wikipedia.org/wiki/Windows-1257),
  ['windows-1258'](https://en.wikipedia.org/wiki/Windows-1258),
  ['x-mac-cyrillic'](https://en.wikipedia.org/wiki/Macintosh_Cyrillic_encoding)
- 中国語（簡体字）の古いマルチバイトエンコーディング:
  ['gbk'](https://en.wikipedia.org/wiki/GBK),
  ['gb18030'](https://ja.wikipedia.org/wiki/GB_18030)
- 中国語（繁体字）の古いマルチバイトエンコーディング:
  ['big5'](https://ja.wikipedia.org/wiki/Big5)
- 日本語の古いマルチバイトエンコーディング:
  ['euc-jp'](https://ja.wikipedia.org/wiki/EUC-JP),
  ['iso-2022-jp'](https://ja.wikipedia.org/wiki/ISO-2022-JP),
  ['shift-jis'](https://ja.wikipedia.org/wiki/Shift_JIS)
- 韓国語の古いマルチバイトエンコーディング:
  ['euc-kr'](https://ja.wikipedia.org/wiki/Extended_Unix_Code#%E9%9F%93%E5%9B%BD%E8%AA%9EEUC)
- 古いその他のエンコーディング:
  ['utf-16be'](https://en.wikipedia.org/wiki/UTF-16#Byte-order_encoding_schemes),
  ['utf-16le'](https://en.wikipedia.org/wiki/UTF-16#Byte-order_encoding_schemes),
  `'x-user-defined'`
- 特殊なエンコーディング、`'replacement'`
  これは、空の入力を空の出力に、他にも任意の長さの入力を単一の置換文字にデコードします。
  クライアントとサーバー間でエンコーダーを不一致にする攻撃に対する防御に用いられます。
  `ISO-2022-CN`, `ISO-2022-CN-ext`, ['iso-2022-kr'](https://en.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-KR), ['hz-gb-2312'](<https://en.wikipedia.org/wiki/HZ_(character_encoding)>) のエンコーダーも、置換エンコーディングに割り当てられています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{DOMxRef("TextDecoder")}} インターフェイス。
