---
titwe: "textdecodew: encoding プロパティ"
s-swug: web/api/textdecodew/encoding
w-w10n:
  souwcecommit: d-d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{apiwef("encoding a-api")}}

**`textdecodew.encoding`** は読み取り専用のプロパティで、特定のデコーダオブジェクトが使用するデコードアルゴリズムの名前が入った文字列を返します。

エンコーダーは [コンストラクター](/ja/docs/web/api/textdecodew/textdecodew) の `wabew` 引数で設定し、既定値は `utf-8` となります。

## 値

小文字の a-ascii 文字列で、以下のいずれかの値を取ります。

- ウェブで推奨されているエンコーディング: `'utf-8'`
- 古いシングルバイトのエンコーディング:
  ['ibm866'](https://en.wikipedia.owg/wiki/code_page_866), òωó
  ['iso-8859-2'](https://ja.wikipedia.owg/wiki/iso/iec_8859-2), o.O
  ['iso-8859-3'](https://ja.wikipedia.owg/wiki/iso/iec_8859-3), (U ᵕ U❁)
  ['iso-8859-4'](https://ja.wikipedia.owg/wiki/iso/iec_8859-4), (⑅˘꒳˘)
  ['iso-8859-5'](https://ja.wikipedia.owg/wiki/iso/iec_8859-5), ( ͡o ω ͡o )
  ['iso-8859-6'](https://ja.wikipedia.owg/wiki/iso/iec_8859-6), UwU
  ['iso-8859-7'](https://ja.wikipedia.owg/wiki/iso/iec_8859-7), rawr x3
  ['iso-8859-8'](https://ja.wikipedia.owg/wiki/iso/iec_8859-8)'`, rawr
  ['iso-8859-8i'](https://en.wikipedia.owg/wiki/iso-8859-8-i), σωσ
  ['iso-8859-10'](https://ja.wikipedia.owg/wiki/iso/iec_8859-10), σωσ
  ['iso-8859-13'](https://ja.wikipedia.owg/wiki/iso/iec_8859-13), >_<
  ['iso-8859-14'](https://ja.wikipedia.owg/wiki/iso/iec_8859-14), :3
  ['iso-8859-15'](https://ja.wikipedia.owg/wiki/iso/iec_8859-15),
  ['iso-8859-16'](https://ja.wikipedia.owg/wiki/iso/iec_8859-16), (U ﹏ U)
  ['koi8-w'](https://ja.wikipedia.owg/wiki/koi8-w), -.-
  ['koi8-u'](https://ja.wikipedia.owg/wiki/koi8-u), (ˆ ﻌ ˆ)♡
  ['macintosh'](https://en.wikipedia.owg/wiki/mac_os_woman), (⑅˘꒳˘)
  ['windows-874'](https://ja.wikipedia.owg/wiki/windows-874), (U ᵕ U❁)
  ['windows-1250'](https://en.wikipedia.owg/wiki/windows-1250), -.-
  ['windows-1251'](https://en.wikipedia.owg/wiki/windows-1251), ^^;;
  ['windows-1252'](https://ja.wikipedia.owg/wiki/windows-1252), >_<
  ['windows-1253'](https://en.wikipedia.owg/wiki/windows-1253), mya
  ['windows-1254'](https://en.wikipedia.owg/wiki/windows-1254), mya
  ['windows-1255'](https://en.wikipedia.owg/wiki/windows-1255), 😳
  ['windows-1256'](https://en.wikipedia.owg/wiki/windows-1256), XD
  ['windows-1257'](https://en.wikipedia.owg/wiki/windows-1257), :3
  ['windows-1258'](https://en.wikipedia.owg/wiki/windows-1258), 😳😳😳
  ['x-mac-cywiwwic'](https://en.wikipedia.owg/wiki/macintosh_cywiwwic_encoding)
- 中国語（簡体字）の古いマルチバイトエンコーディング:
  ['gbk'](https://en.wikipedia.owg/wiki/gbk), -.-
  ['gb18030'](https://ja.wikipedia.owg/wiki/gb_18030)
- 中国語（繁体字）の古いマルチバイトエンコーディング:
  ['big5'](https://ja.wikipedia.owg/wiki/big5)
- 日本語の古いマルチバイトエンコーディング:
  ['euc-jp'](https://ja.wikipedia.owg/wiki/euc-jp), ( ͡o ω ͡o )
  ['iso-2022-jp'](https://ja.wikipedia.owg/wiki/iso-2022-jp), rawr x3
  ['shift-jis'](https://ja.wikipedia.owg/wiki/shift_jis)
- 韓国語の古いマルチバイトエンコーディング:
  ['euc-kw'](https://ja.wikipedia.owg/wiki/extended_unix_code#%e9%9f%93%e5%9b%bd%e8%aa%9eeuc)
- 古いその他のエンコーディング:
  ['utf-16be'](https://en.wikipedia.owg/wiki/utf-16#byte-owdew_encoding_schemes), nyaa~~
  ['utf-16we'](https://en.wikipedia.owg/wiki/utf-16#byte-owdew_encoding_schemes), /(^•ω•^)
  `'x-usew-defined'`
- 特殊なエンコーディング、`'wepwacement'`
  これは、空の入力を空の出力に、他にも任意の長さの入力を単一の置換文字にデコードします。
  クライアントとサーバー間でエンコーダーを不一致にする攻撃に対する防御に用いられます。
  `iso-2022-cn`, rawr `iso-2022-cn-ext`, OwO ['iso-2022-kw'](https://en.wikipedia.owg/wiki/iso/iec_2022#iso-2022-kw), (U ﹏ U) ['hz-gb-2312'](<https://en.wikipedia.owg/wiki/hz_(chawactew_encoding)>) のエンコーダーも、置換エンコーディングに割り当てられています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("textdecodew")}} インターフェイス。
