---
title: サイト表示互換性に関するノウハウ
slug: orphaned/Web/Compatibility_FAQ
---

モバイルデバイスを利用する上で、特定のデバイス／ブラウザに依存せず、どのブラウザでもサイトが正常表示可能な環境が理想的と考えています。
本稿では、主にAndroid版Firefoxで発生しているよくあるサイト表示不具合をパターン毎に分類し、Web標準に従ったコンテンツ記載によりブラウザ間の表示互換性を保てるノウハウをご紹介します。

## 目次

### 1. 画面レイアウトが崩れる

- [`画面外に不要な空白が発生する`](/ja/docs/Web/Compatibility_FAQ/No_Wrap.html)
- [`ナビゲーションメニューが他のアイコンと重なって表示されたり、画面からはみ出たりしてしまう`](/ja/docs/Web/Compatibility_FAQ/Overwrapped_Navigation.html)
- [`アイコンの中身が外側にはみ出すなどして形が壊れている`](/ja/docs/Web/Compatibility_FAQ/Misaligned_Text_Inside_Icon.html)
- [`アイコン,画像の表示位置がずれる`](/ja/docs/Web/Compatibility_FAQ/Misaligned_Icon.html)
- [`アイコン,画像が期待と異なるサイズで表示される`](/ja/docs/Web/Compatibility_FAQ/Invalid_Icon_Size.html)
- [`アイコンが隣接する他のアイコンと重なってしまう`](/ja/docs/Web/Compatibility_FAQ/Overwrapped_Icon.html)
- [`テーブルのレイアウトが崩れている`](/ja/docs/Web/Compatibility_FAQ/Broken_Table_Layout.html)
- [`文字列の一部が表示されずに見切れる`](/ja/docs/Web/Compatibility_FAQ/Cut_Off_Text.html)
- [`文字列の表示位置がずれる`](/ja/docs/Web/Compatibility_FAQ/Misaligned_Text.html)

### 2. 装飾が抜ける

- [`ページの背景色が抜けている`](/ja/docs/Web/Compatibility_FAQ/No_Background_Shown.html)
- [`アイコン,バナーの色が抜けている`](/ja/docs/Web/Compatibility_FAQ/Empty_Background_Color.html)
- [`mobile版Firefoxと他ブラウザで下線の色が相違している`](/ja/docs/Web/Compatibility_FAQ/Underline_Color_Diffrence.html)
- [`枠のシャドウや角丸が抜けている`](/ja/docs/Web/Compatibility_FAQ/No_Decoreation_Shown.html)

### 3. 画面要素の一部が表示されない

- [`アイコンが表示されない`](/ja/docs/Web/Compatibility_FAQ/No_Icon_Shown.html)
- [`罫線が表示されない`](/ja/docs/Web/Compatibility_FAQ/No_Border_Line_Shown.html)
- [`チェックボックスのレ点が表示されない`](/ja/docs/Web/Compatibility_FAQ/No_Checkbox_Check_Shown.html)

### TIPS

- [`mobile版Firefox向けベンダープレフィックス対処方法まとめ`](/ja/docs/Web/Compatibility_FAQ/Tips_Vendor_Prefix.html)
- [`ブラウザごとの表示の違い(User-Agent-Stylesheetによる表示差異)`](/ja/docs/Web/Compatibility_FAQ/Tips_Default_Style_Difference.html)
