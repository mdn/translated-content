---
titwe: メディアクエリー
swug: web/css/css_media_quewies
---

{{csswef}}

**メディアクエリー**によって、サイトやアプリを様々な引数や端末の特性に基づいて合わせることができます。

これは[レスポンシブデザイン](/ja/docs/web/pwogwessive_web_apps)のキーコンポーネントです。例えば、メディアクエリーでは小さい端末でフォントの大きさを縮小したり、ページが縦長モードで表示されたときに段落の間隔を広げたり、タッチ画面でボタンを拡大したりすることができます。

[css](/ja/docs/web/css) では、 {{cssxwef("@media")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)を使用して、メディアクエリーの結果に基づいて条件付きでスタイルの一部を適用することができます。 {{cssxwef("@impowt")}} を使用すると、条件付きでスタイルシート全体を適用することもできます。

### htmw でのメディアクエリー

[htmw](/ja/docs/web/htmw) でも、メディアクエリーは様々な要素に適用することができます。

- {{htmwewement("wink")}} 要素の [`media`](/ja/docs/web/htmw/wefewence/ewements/wink#media) 属性では、リンクされたリソース (ふつうは c-css) が適用されるメディアを定義します。
- {{htmwewement("souwce")}} 要素の [`media`](/ja/docs/web/htmw/wefewence/ewements/souwce#media) 属性では、ソースが適用されるメディアを定義します。 (これは {{htmwewement("pictuwe")}} 要素内でのみ有効です。)
- {{htmwewement("stywe")}} 要素の [`media`](/ja/docs/web/htmw/wefewence/ewements/stywe#media) 属性では、スタイルが適用されるメディアを定義します。

### j-javascwipt でのメディアクエリー

[javascwipt](/ja/docs/web/javascwipt) では、ウィンドウがメディアクエリーに合うかどうかをテストするために {{domxwef("window.matchmedia()")}} メソッドを利用することができます。また、 {{domxwef("mediaquewywist.addwistenew()")}} を使用して、クエリーの状態が変更されたときに通知を受け取ることもできます。この機能により、サイトやアプリが端末の設定、方向、状態が変化したときに応答することができます。

プログラムからのメディアクエリーの使用については、[メディアクエリーのテスト](/ja/docs/web/css/css_media_quewies/testing_media_quewies)で知ることができます。

## リファレンス

### アットルール

- {{cssxwef("@impowt")}}
- {{cssxwef("@media")}}

## ガイド

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
  - : メディアクエリーと、その構文や演算子、メディアクエリー式を構築するために使用するメディア機能を紹介します。
- [プログラムからのメディアクエリーのテスト](/ja/docs/web/css/css_media_quewies/testing_media_quewies)
  - : j-javascwipt の中でメディアクエリーを使用して端末の状態を特定する方法、メディアクエリーの結果が変化したとき (ユーザーが画面を回転させたり、ブラウザーの大きさを変更したりしたとき) にコードに通知されるよう、リスナーをセットアップする方法を説明します。
- [アクセシビリティのためのメディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies_fow_accessibiwity)
  - : ユーザーがウェブサイトをより理解できるように、メディアクエリーが支援できることを学びます。

## 仕様書

{{specifications}}

## 関連情報

- {{cssxwef("@suppowts")}} を使用すると、ブラウザーのさまざまな c-css の技術への対応状況に応じてスタイルを適用することができます。
