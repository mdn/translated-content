---
title: ローカライゼーションと文字エンコーディング
slug: orphaned/Web/Guide/Localizations_and_character_encodings
---

ブラウザは内部的にテキストを Unicode として処理します。ただし、ネットワークを介してブラウザにテキストを転送するには、文字をバイトで表現する方法 (文字エンコーディング) が使用されます。[HTML 仕様](http://www.whatwg.org/specs/web-apps/current-work/multipage/semantics.html#charset)では、UTF-8 エンコーディング (これはすべての Unicode を表すことができます) の使用を推奨しています。使用されるエンコーディングにかかわらず、Web コンテンツがどのエンコーディングを使用するかを宣言する必要があります。

ページの文字エンコーディングを指定するためには、{{HTMLElement("meta")}} 要素の [`charset`](/ja/docs/Web/HTML/Element/meta#charset) 属性を使用します。これは {{HTMLElement("head")}} ブロックの中で使用する**必要があります**。

例えばページが (推奨されている通りに) UTF-8 文字エンコーディングを使用していることを指定するには、{{HTMLElement("head")}} ブロックの中に次の行を記述します:

```html
<meta charset="utf-8">
```

## 詳細とブラウザの内部

HTML 仕様が要求するように Web コンテンツでエンコーディングが宣言されている場合、Firefox はそのエンコーディングを用いてバイトを内部表現に変換します。残念ながら、UTF-8 を使うことや、UTF-8 の使用を宣言することは、Web コンテンツを提供する上で必ずしも一般的な方法ではありませんでした。1990 年代には、エンコーディングを宣言せずに、すべての Unicode を表現できない地域固有のエンコーディングを使うことが広まっていました。

Firefox は、エンコーディングを宣言していないレガシーなコンテンツに対して使用するフォールバックエンコーディングを必要とします。ほとんどのロケールでは、フォールバックエンコーディングは (しばしば ISO-8859-1 と呼ばれる) windows-1252 となります。これは 1990 年代にほとんどの Windows アプリケーションで使用されていたエンコーディングであり、またほとんどの Unix アプリケーションで使用されていたエンコーディングのスーパーセットでもあり、アメリカや西ヨーロッパで展開されていました。しかし、1990 年代にはすでに Web パブリッシングが一般的になっていたものの、windows-1252 エンコーディングがその地域の言語に適していなかったようなロケールがあります。これらのロケールにおいて、エンコーディングを宣言していないレガシーなコンテンツは、windows-1252 以外のレガシーなエンコーディングを通常使用しています。レガシーなコンテンツに対応するために、Firefox の一部のローカライゼーションにおいては、windows-1252 ではないフォールバックエンコーディングが必要となります。

残念ながらこのことは、Web と接する際の Firefox の機能がロケールごとに異なること、そして、フォールバックエンコーディングが異なるロケールをまたいでレガシーなコンテンツを読むのは困難であることを意味します。UTF-8 の採用後に Web パブリッシングが盛んになったロケールでこの問題が発生しないように、1990 年代の慣習から windows-1252 以外のレガシーなエンコーディングをもたないロケールは、フォールバックエンコーディングを windows-1252 とし、フォールバックエンコーディングが windows-1252 である古いロケールをまたぐコンテンツの読解に支障をきたさないようにする必要があります。新しく作成されたロケールネイティブな UTF-8 コンテンツはエンコーディングを宣言することが期待されますが、その場合フォールバックエンコーディングがコンテンツの処理に関与することはありません。

さらに、1990 年代に地域固有のエンコーディングが一つに定まっておらず、複数のレガシーなエンコーディングをヒューリスティックに検出する機能が Web ブラウザに導入されたロケールが少数存在します。その後 Web 製作者がヒューリスティック検出機能の存在を前提とするようになったことから、Firefox は現在もこれらのロケールにおいてヒューリスティック検出機能を備えています。

## Finding canonical encoding names

The text below refers to canonical names of encodings. The canonical names are the values to the right of the equals sign in [unixcharset.properties](https://mxr.mozilla.org/mozilla-central/source/intl/locale/unix/unixcharset.properties).

## Specifying the fallback encoding

**As of Firefox 28, this section is obsolete, since the preference `intl.charset.default` no longer exists. The mapping from locales onto fallback encodings is now built into Gecko itself.**

The fallback encoding is specified by the preference `intl.charset.default` in `intl.properties`. It should be set to the canonical name of the legacy encoding that users of the localizations are most likely to encounter when browsing non-conforming legacy Web content that doesn't declare its encoding. Note that the fallback encoding as defined by the previous sentence does not necessarily need to be able to represent the characters needed for the language of the localization!

The fallback encoding should be left to windows-1252 for Western European locales, North, Central and South American locales, African locales, Central Asian locales and Oceanian locales. It typically needs to be set to something other than windows-1252 for Central and Eastern European locales, Middle Eastern locales and East Asian locales.

In order to avoid the problem of Web authors creating new UTF-8 content without declaring that the content uses UTF-8 and in order to maximize the ability of users to read content cross-locale, _do not_ set the fallback encoding to UTF-8 for any newly-introduced localization. Note that Firefox no longer sends the `Accept-Charset` HTTP header, so there is no need to consider what gets advertised in `Accept-Charset` when setting the fallback encoding.

For locales where the fallback encoding is currently ISO-8859-1, it should be changed to windows-1252. ISO-8859-1 is decoded in the exact same way as windows-1252, but Firefox is moving to treating windows-1252 as the preferred label for this encoding in accordance with the [Encoding Standard](http://encoding.spec.whatwg.org/).

For locales where Internet Explorer has more market share than Firefox, the fallback encoding should typically be set to the same value as in Internet Explorer. You can see the fallback encoding a particular browser has by loading a [test page](http://hsivonen.iki.fi/test/moz/check-charset.htm). (Be sure to use a browser installation that has its settings left to the defaults when investigating!)

For locales where Firefox has more market share than Internet Explorer, it's probably best not to change the fallback encoding even if it doesn't follow the guidance given above. (For example, the fallback encoding for the Polish, Hungarian and Czech locales should probably continue to be ISO-8859-2 even though IE has a different fallback encoding.)

When in doubt, use windows-1252 as the fallback encoding.

## ヒューリスティック検出モードの指定

ヒューリスティック検出モードは `intl.properties` にある `intl.charset.detector` という設定により指定します。この設定値は、ロシア語、ウクライナ語、そして日本語以外のすべてのロケールでは*必ず*空でなければなりません。どのような場合においても "universal" 検出器を指定してはいけません。その名前とは裏腹に、*まったく普遍的 (universal) ではない*ためです!

## 少数言語に関する例外

If the localization is for minority language and the users are typically literate in the majority language of the region and read Web content written in the majority language very often, it is appropriate to specify the fallback encoding and the heuristic detection mode to be the same as for the localization for the majority language of the region. For example, for a localization for minority language in Russia, it is appropriate to copy the settings from the Russian localization.

## いくつかのエンコーディングを文字エンコーディングメニューから選びやすくする

The preference `intl.charsetmenu.browser.static` in `intl.properties` makes some character encodings more easily available in the Character Encoding menu in the browser. The value should be a comma-separated list of canonical encoding names. The list should include at least the fallback encoding, windows-1252 and UTF-8. For locales where there are multiple common legacy encodings, all those encodings should be included. For example, the fallback encoding for Japanese is Shift_JIS, but there are other legacy encodings: ISO-2022-JP and EUC-JP. Therefore, it makes sense for the list to be Shift_JIS, EUC-JP, ISO-2022-JP, windows-1252, UTF-8.
