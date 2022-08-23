---
title: サイト表示互換性に関するノウハウ
slug: orphaned/Web/Compatibility_FAQ
tags:
  - Compatibility
original_slug: Web/Compatibility_FAQ
---
<hr>
<p>モバイルデバイスを利用する上で、特定のデバイス／ブラウザに依存せず、どのブラウザでもサイトが正常表示可能な環境が理想的と考えています。<br>
 本稿では、主にAndroid版Firefoxで発生しているよくあるサイト表示不具合をパターン毎に分類し、Web標準に従ったコンテンツ記載によりブラウザ間の表示互換性を保てるノウハウをご紹介します。</p>

<h2 id="目次">目次</h2>

<hr>
<h3 id="1._画面レイアウトが崩れる"><strong>1. 画面レイアウトが崩れる</strong></h3>

<ul>
 <li>
  <h4 id="画面外に不要な空白が発生する"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/No_Wrap.html">画面外に不要な空白が発生する</a></code></strong></h4>
 </li>
 <li>
  <h4 id="ナビゲーションメニューが他のアイコンと重なって表示されたり、画面からはみ出たりしてしまう"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Overwrapped_Navigation.html">ナビゲーションメニューが他のアイコンと重なって表示されたり、画面からはみ出たりしてしまう</a></code></strong></h4>
 </li>
 <li>
  <h4 id="アイコンの中身が外側にはみ出すなどして形が壊れている"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Misaligned_Text_Inside_Icon.html">アイコンの中身が外側にはみ出すなどして形が壊れている</a></code></strong></h4>
 </li>
 <li>
  <h4 id="アイコン画像の表示位置がずれる"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Misaligned_Icon.html">アイコン,画像の表示位置がずれる</a></code></strong></h4>
 </li>
 <li>
  <h4 id="アイコン画像が期待と異なるサイズで表示される"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Invalid_Icon_Size.html">アイコン,画像が期待と異なるサイズで表示される</a></code></strong></h4>
 </li>
 <li>
  <h4 id="アイコンが隣接する他のアイコンと重なってしまう"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Overwrapped_Icon.html">アイコンが隣接する他のアイコンと重なってしまう</a></code></strong></h4>
 </li>
 <li>
  <h4 id="テーブルのレイアウトが崩れている"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Broken_Table_Layout.html">テーブルのレイアウトが崩れている</a></code></strong></h4>
 </li>
 <li>
  <h4 id="文字列の一部が表示されずに見切れる"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Cut_Off_Text.html">文字列の一部が表示されずに見切れる</a></code></strong></h4>
 </li>
 <li>
  <h4 id="文字列の表示位置がずれる"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Misaligned_Text.html">文字列の表示位置がずれる</a></code></strong></h4>
 </li>
</ul>

<h3 id="2._装飾が抜ける"><strong>2. 装飾が抜ける</strong></h3>

<ul>
 <li>
  <h4 id="ページの背景色が抜けている"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/No_Background_Shown.html">ページの背景色が抜けている</a></code></strong></h4>
 </li>
 <li>
  <h4 id="アイコンバナーの色が抜けている"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Empty_Background_Color.html">アイコン,バナーの色が抜けている</a></code></strong></h4>
 </li>
 <li>
  <h4 id="mobile版Firefoxと他ブラウザで下線の色が相違している"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Underline_Color_Diffrence.html">mobile版Firefoxと他ブラウザで下線の色が相違している</a></code></strong></h4>
 </li>
 <li>
  <h4 id="枠のシャドウや角丸が抜けている"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/No_Decoreation_Shown.html">枠のシャドウや角丸が抜けている</a></code></strong></h4>
 </li>
</ul>

<h3 id="3._画面要素の一部が表示されない"><strong>3. 画面要素の一部が表示されない</strong></h3>

<ul>
 <li>
  <h4 id="アイコンが表示されない"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/No_Icon_Shown.html">アイコンが表示されない</a></code></strong></h4>
 </li>
 <li>
  <h4 id="罫線が表示されない"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/No_Border_Line_Shown.html">罫線が表示されない</a></code></strong></h4>
 </li>
 <li>
  <h4 id="チェックボックスのレ点が表示されない"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/No_Checkbox_Check_Shown.html">チェックボックスのレ点が表示されない</a></code></strong></h4>
 </li>
</ul>

<hr>
<h3 id="TIPS"><strong>TIPS</strong></h3>

<ul>
 <li>
  <h4 id="mobile版Firefox向けベンダープレフィックス対処方法まとめ"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Tips_Vendor_Prefix.html">mobile版Firefox向けベンダープレフィックス対処方法まとめ</a></code></strong></h4>
 </li>
 <li>
  <h4 id="ブラウザごとの表示の違い(User-Agent-Stylesheetによる表示差異)"><strong><code><a href="https://developer.mozilla.org/ja/docs/Web/Compatibility_FAQ/Tips_Default_Style_Difference.html">ブラウザごとの表示の違い(User-Agent-Stylesheetによる表示差異)</a></code></strong></h4>

  <p> </p>
 </li>
</ul>

<hr>
