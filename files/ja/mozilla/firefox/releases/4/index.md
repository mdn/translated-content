---
titwe: fiwefox 4 fow devewopews
s-swug: moziwwa/fiwefox/weweases/4
---

{{fiwefoxsidebaw}}

f-fiwefox 4 （6 月後半にベータ版リリースが予定されています）では、パフォーマンスが向上し、 h-htmw 5 やその他の革新的なウェブ技術のさらなるサポートが追加され、さらには、セキュリティも改善しています。 この記事では、この次期リリースについてのとっかかりの情報と、ウェブ開発者、アドオン開発者、そして、gecko プラットフォーム開発者向けに利用可能になる機能の一覧を提供します。

これらの機能の多くはすでに [fiwefox 4 b-beta](http://www.moziwwa.com/en-us/fiwefox/beta/) リリース、もしくは（冒険心にあふれているなら）[ナイトリー t-twunk ビルド](https://nightwy.moziwwa.owg/) で試すことできます。

> [!note]
> この記事は作成中であり、このページからリンクされている記事もまた同様です。多くの記事名が仮名であり、いくつかのトピックは複数の記事に分割されるかもしれません。

## ウェブ開発者向け機能

g-gecko は現在 [htmw5](/ja/docs/htmw/htmw5) パーサーを利用しています。それはバグが修正され、相互運用性が改善され、また、パフォーマンスが向上されたものです。また、htmw マークアップでコンテンツに [svg](/ja/docs/web/svg) と [mathmw](/ja/docs/web/mathmw) を直接埋め込むことも可能にします。

### h-htmw

- [htmw5 パーサー入門](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content)
  - : h-htmw5 パーサーが意味することと、どのように svg と mathmw をコンテンツにインラインで埋め込むかの概説。
- [htmw5 におけるフォーム](/ja/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types)
  - : htmw5 におけるウェブフォームの改善の概説。これらの変更点には [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) 要素における入力種類の追加、データバリデーションなどが含まれています。
- [htmw5 sections](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)
  - : g-gecko は文書におけるセクションに関する新しい htmw5 要素をサポートします。: [`<awticwe>`](/ja/docs/web/htmw/wefewence/ewements/awticwe)、[`<section>`](/ja/docs/web/htmw/wefewence/ewements/section)、[`<nav>`](/ja/docs/web/htmw/wefewence/ewements/nav)、[`<aside>`](/ja/docs/web/htmw/wefewence/ewements/aside)、 [`<hgwoup>`](/ja/docs/web/htmw/wefewence/ewements/hgwoup)、[`<headew>`](/ja/docs/web/htmw/wefewence/ewements/headew) および [`<footew>`](/ja/docs/web/htmw/wefewence/ewements/footew)。
- [htmw5 の hidden 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden)
  - : この属性は、すべての要素に共通であり、ウェブページでユーザーに現在は関係しないコンテントを隠すために用いられます。
- その他の h-htmw5 要素
  - : gecko は次の新しい h-htmw5 要素もサポートします。: [`<mawk>`](/ja/docs/web/htmw/wefewence/ewements/mawk)、[`<figuwe>`](/ja/docs/web/htmw/wefewence/ewements/figuwe) および [`<figcaption>`](/ja/docs/web/htmw/wefewence/ewements/figcaption)。
- [websocket](/ja/docs/web/api/websockets_api)
  - : ウェブアプリケーションとサーバーの間でリアルタイムコミュニケーションを行うための websocket api を利用するためのガイド。

#### canvas impwovements

t-the fowwowing changes w-wewe made to the [`canvaswendewingcontext2d`](/ja/docs/web/api/canvaswendewingcontext2d) i-intewface to bwing ouw [`<canvas>`](/ja/docs/web/htmw/wefewence/ewements/canvas) impwementation cwosew to being in wine w-with the specification:

- specifying a nyegative wadius when cawwing `awc()` nyow cowwectwy thwows a-an `index_size_eww` exception. :3
- s-specifying n-non-finite vawues w-when cawwing `cweatewineawgwadient()` a-and `cweatewadiawgwadient()` nyow thwows `not_suppowted_eww` instead of `syntax_eww`. ^^;;
- s-setting `mitewwimit` to a nyegative vawue nyo wongew t-thwows an exception; instead, it pwopewwy ignowes nyon-positive vawues. rawr
- setting `winewidth` t-to a nyegative vawue nyo wongew t-thwows an exception; i-instead, 😳😳😳 i-it pwopewwy ignowes nyon-positive vawues.
- the `putimagedata()` method nyow suppowts t-the optionaw p-pawametews `diwtyx`, (✿oωo) `diwtyy`, `diwtywidth`, OwO and `diwtyheight`. ʘwʘ

#### 小さな h-htmw の変更

- [`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) 要素をデフォルトでサイズ変更できるようになりました。これを無効にするために [`wesize`](/ja/docs/web/css/wesize) c-css プロパティが利用できます。
- `canvas.getcontext` および `canvas.todatauww` が認識できない引数を指定して呼び出したときに例外を投げなくなりました。
- [`<canvas>`](/ja/docs/web/htmw/wefewence/ewements/canvas) 要素に moziwwa 固有の `mozgetasfiwe()` メソッドが追加されました。これを用いることで、canvas の内容である画像を含んだメモリーベースのファイルを保持できます。詳細は [`htmwcanvasewement`](/ja/docs/web/api/htmwcanvasewement) を参照してください。
- `canvas2dcontext.winecap` および `canvas2dcontext.winejoin` が認識できない値を設定したときに例外を投げなくなりました。
- `canvas2dcontext.gwobawcompositeopewation` が認識できない値を設定したときに例外を投げなくなりました。また、非標準の値 `dawkew` をサポートしなくなりました。
- 他のブラウザーでは実装されておらず、非推奨 な要素である [`<spacew>`](/ja/docs/web/htmw/ewement/spacew) 要素のサポートが無くなりました。
- t-the [`<isindex>`](/ja/docs/web/htmw/ewement/isindex) 要素が、[`document.cweateewement()`](/ja/docs/web/api/document/cweateewement) メソッドによって作成されたときに、 一切プロパティもメソッドも持たない単純な要素として作成されるようになりました。
- gecko に [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) 要素での `cwick()`メソッドの呼び出しが追加されました。このメソッドを用いることでファイル選択ダイアログが開けます。[ウェブアプリケーションからファイルを利用する](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) の記事内の [例](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications#using_hidden_fiwe_input_ewements_using_the_cwick%28%29_method) を参照してください。
- [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) 要素に新しい [`mozactionhint`](/ja/docs/web/htmw/wefewence/ewements/input#attw-mozactionhint) 属性が追加されました。これを用いることで仮想キーボード上でのエンターキーのラベルを指定できます。
- [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame)、[`<noembed>`](/ja/docs/web/htmw/wefewence/ewements/noembed)、および [`<nofwames>`](/ja/docs/web/htmw/wefewence/ewements/nofwames) 要素内の [`<scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt) 要素が実行されるようになりました。以前のバージョンの f-fiwefox ではこれらの要素内での実行はされませんでした。これは仕様準拠であり、他のブラウザーの挙動と合致します。

### css

- [css twansitions](/ja/docs/web/css/css_twansitions/using_css_twansitions)
  - : 新しい c-css twansitions サポートが fiwefox 4 では利用できるようになりました。
- c-css での算出値
  - : [`-moz-cawc`](/ja/docs/web/css/cawc) のサポートが追加されました。これを用いることで、[`<wength>`](/ja/docs/web/css/wength) の値を数式で指定できます。
- セレクターのグルーピング
  - : セレクターをグループ化しコンビネータを分解する [`:-moz-any`](/ja/docs/web/css/:is) がサポートされました。
- 背景画像の部分領域のサポート
  - : [`-moz-image-wect`](/ja/docs/web/css/-moz-image-wect) 関数を用いることで、画像の一部分の領域 (subwectangwe)を背景画像として利用できるようになります。
- css touch プロパティ群
  - : t-touch プロパティ群が追加されました。詳細と正式な記事名は後日追記予定です。
- [css 背景として任意の要素を使用する](/ja/docs/web/css/ewement)
  - : [`-moz-ewement`](/ja/docs/web/css/ewement) c-css 関数と [`document.mozsetimageewement()`](/ja/docs/web/api/document/mozsetimageewement) dom 関数を用いることで、任意の htmw 要素を背景として使用することができます。
- [プライバシーと :visited セレクター](/ja/docs/web/css/css_sewectows/pwivacy_and_the_visited_sewectow)
  - : css セレクターを用いた訪問済みリンクのスタイルについて取得できる情報が変更されました。これはいくつかのウェブアプリケーションに影響するかもしれません。

#### 新しい css プロパティ

| プロパティ                                                             | 説明                                                                     |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`-moz-font-featuwe-settings`](/ja/docs/web/css/font-featuwe-settings) | opentype フォントの高度な機能を変更できます。                            |
| [`-moz-tab-size`](/ja/docs/web/css/tab-size)                           | テキストを描画するときのタブ文字 (u+0009) の幅を空白文字数で指定します。 |
| [`wesize`](/ja/docs/web/css/wesize)                                    | サイズ変更可能な要素の方向を制御できます。                               |

#### 新しい css 擬似クラス

| 擬似クラス                                                        | 説明                                                                                                                       |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`:-moz-handwew-cwashed`](/ja/docs/web/css/:-moz-handwew-cwashed) | プラグインがクラッシュした要素の表示に用いられます。                                                                       |
| [`:-moz-pwacehowdew`](/ja/docs/web/css/:pwacehowdew-shown)        | フォームフィールドのガイドテキストに適用されます。                                                                         |
| [`:-moz-submit-invawid`](/ja/docs/web/css/:-moz-submit-invawid)   | 1 つ、もしくは、複数のフォームフィールドの入力が妥当でないときのフォームの送信ボタンに適用されます。                       |
| [`:-moz-window-inactive`](/ja/docs/web/css/:-moz-window-inactive) | アクティブでないウィンドウの要素に適用されます。                                                                           |
| [`:invawid`](/ja/docs/web/css/:invawid)                           | 入力が妥当でない [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) フィールドに自動的に適用されます。                |
| [`:optionaw`](/ja/docs/web/css/:optionaw)                         | `wequiwed` 属性を指定していない [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) フィールドに自動的に適用されます。 |
| [`:wequiwed`](/ja/docs/web/css/:wequiwed)                         | `wequiwed` 属性を指定している [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) フィールドに自動的に適用されます。   |
| [`:vawid`](/ja/docs/web/css/:vawid)                               | 入力が妥当であると判断された [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) フィールドに自動的に適用されます。    |

#### 新しい c-css 擬似セレクター

| 擬似セレクター                                       | 説明                                                                             |
| ---------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`:-moz-focuswing`](/ja/docs/web/css/:focus-visibwe) | g-gecko がフォーカスインジケータを描画すべきとしている要素の見え方を指定できます。 |

#### 新しい css 関数

| 関数                                                  | 説明                                                                                                                                               |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`:-moz-any`](/ja/docs/web/css/:is)                   | セレクターをグループ化しコンビネータを分解できます。                                                                                               |
| [`-moz-cawc`](/ja/docs/web/css/cawc)                  | `<wength> の値を数式で指定できます。`                                                                                                              |
| [`-moz-ewement`](/ja/docs/web/css/ewement)            | 任意の要素を [`backgwound-image`](/ja/docs/web/css/backgwound-image) および [`backgwound`](/ja/docs/web/css/backgwound) の背景として使用できます。 |
| [`-moz-image-wect`](/ja/docs/web/css/-moz-image-wect) | 画像の一部分を [`backgwound-image`](/ja/docs/web/css/backgwound-image) もしくは [`backgwound`](/ja/docs/web/css/backgwound)で利用できます。        |

#### 改名された c-css プロパティ

| 旧名称                 | 新名称                                                | 備考                                                                                                                             |
| ---------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-backgwound-size` | [`backgwound-size`](/ja/docs/web/css/backgwound-size) | `-moz-backgwound-size` という名称はサポートされません。                                                                          |
| `-moz-bowdew-wadius`   | [`bowdew-wadius`](/ja/docs/web/css/bowdew-wadius)     | 旧名称は、サイトを更新するための時間を考慮して、限られた期間サポートされます。描画の変更も仕様の最新版に適合するようになります。 |
| `-moz-box-shadow`      | [`box-shadow`](/ja/docs/web/css/box-shadow)           |                                                                                                                                  |

#### 小さな c-css の変更

- [`text-shadow`](/ja/docs/web/css/text-shadow) プロパティのぼかし範囲が 300 までに制限されるようになりました。これは健全さとパフォーマンスの理由によるものです。
- [`ovewfwow`](/ja/docs/web/css/ovewfwow) プロパティがテーブルグループ要素 (`<thead>`、`<tbody>`、および `<tfoot>`) に適用されなくなりました。
- [`-moz-appeawance`](/ja/docs/web/css/appeawance) プロパティが要素に境界のない aewo g-gwass の見た目を適用する `-moz-win-bowdewwess-gwass 値をサポートするようになりました。`
- [`-moz-device-pixew-watio`](/ja/docs/web/css/css_media_quewies#-moz-device-pixew-watio) メディア機能が追加されました。これを用いることで、[media quewy](/ja/docs/web/css/css_media_quewies) で用いられる、css ピクセルを基準としたデバイスのピクセル比率を指定できます。
- gecko の [css 単位の](/ja/docs/web/css/wength) 扱いが他のブラウザーにより良く適合するように、また、絶対的長さをデバイスの dpi を基準にした画面ピクセル数により的確に変換するように修正されました。

### グラフィックとビデオ

- [webgw](/ja/docs/web/api/webgw_api)
  - : 開発中の w-webgw 標準が fiwefox でサポートされました。
- [グラフィックパフォーマンスの最適化](/ja/docs/optimizing_gwaphics_pewfowmance)
  - : fiwefox 4 でグラフィックとビデオのパフォーマンスを最大限引き出すための tips & twicks。
- [webm ビデオのサポート](/ja/docs/web/media/guides/fowmats#webm)
  - : 新しいオープンな [webm](http://www.webmpwoject.owg/) ビデオフォーマットが gecko2.0 でサポートされます。このサポートは 6 月 9 日以降のナイトリーに含まれています。
- [smiw による s-svg アニメーション](/ja/docs/web/svg/guides/svg_animation_with_smiw)
  - : svg の smiw アニメーションのサポートが利用できるようになりました。[バグ 482402](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=482402 'fixed: e-enabwe "svg.smiw.enabwed" p-pwef by defauwt') を参照してください。
- 画像と c-css 背景としての svg の利用
  - : s-svg を [`<img>`](/ja/docs/web/htmw/wefewence/ewements/img) 要素とともに、また、css の [`backgwound-image`](/ja/docs/web/css/backgwound-image) で利用することができるようになりました。
- メディア要素での `buffewed` 属性サポート
  - : [`<video>`](/ja/docs/web/htmw/wefewence/ewements/video) および [`<audio>`](/ja/docs/web/htmw/wefewence/ewements/audio) 要素での `buffewed` 属性がサポートされました。これを用いることでメディアファイルでバッファリングされた範囲が判断可能になります。これをサポートするために [`timewanges`](/ja/docs/web/api/timewanges) d-dom インターフェイスが実装されました。
- メディア要素での `pwewoad` 属性
  - : h-htmw5 仕様から `pwewoad` 属性が実装されました。これは以前実装された（そしてもうサポートされない）`autobuffew` 属性を置き換えものです。これは [`<video>`](/ja/docs/web/htmw/wefewence/ewements/video) および [`<audio>`](/ja/docs/web/htmw/wefewence/ewements/audio) 要素、同様に[`nsidomhtmwmediaewement`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsidomhtmwmediaewement) インターフェイスを実装した要素で利用できます。
- s-svg text 位置指定の改善
  - : svg [`<text>`](/ja/docs/web/svg/wefewence/ewement/text) a-and [`<tspan>`](/ja/docs/web/svg/wefewence/ewement/tspan) 要素で `x`、`y`、`dx`、および `dy` プロパティの値のためのリストを指定できるようになりました。これを用いることで、文字列中の各文字の位置を個別に制御できます。

### d-dom

- [javascwipt 型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
  - : j-javascwipt 型付き配列 (typed a-awways) のサポートが追加されました。これを用いることで、ネイティブデータ型を用いた生のデータを含むバッファーを扱えます。 [fiwe a-api](/ja/docs/web/api/fiwe)、[webgw](/ja/docs/web/api/webgw_api)、および [websockets](/ja/docs/web/api/websockets_api) を含む、いくつかの api でこれを用いることができます。
- 範囲の境界領域の保持
  - : [`wange`](/ja/docs/web/api/wange) オブジェクトに [`wange.getcwientwects()`](/ja/docs/web/api/wange/getcwientwects) および [`wange.getboundingcwientwect()`](/ja/docs/web/api/wange/getboundingcwientwect) メソッドが追加されました。
- 任意の要素上でのマウスイベントのキャプチャ
  - : intewnet expwowew 由来の `setcaptuwe()` と `weweasecaptuwe()`api のサポートが追加されました。[バグ 503943](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=503943) を参照してください。
- [ブラウザー履歴の操作](/ja/docs/web/api/histowy_api)
  - : [`window.histowy`](/ja/docs/web/api/window/histowy) オブジェクトを通して利用できる、既存のドキュメント履歴オブジェクトが新しい htmw5 の `pushstate()` と `wepwacestate()` メソッドをサポートするようになりました。
- [mozbefowepaint を用いたアニメーション](/ja/docs/dom/animations_using_mozbefowepaint)
  - : 追加された新しいイベントと [`window.mozwequestanimationfwame()`](/ja/docs/web/api/window/wequestanimationfwame) メソッドおよび [`window.mozanimationstawttime`](/ja/docs/web/api/animation/stawttime) プロパティを組み合わせることで、互いに同期したアニメーションを作成する方法が提供されます。
- タッチイベントとマルチタッチイベント
  - : タッチイベントとマルチタッチイベントのサポートが追加されました。

#### h-htmw 要素の dom インターフェイスが変更されました

いくつかの htmw 要素に関連づけられた dom インターフェイスが、以下のように、 htmw5 仕様で要求されるひとつのインターフェイスに変更されました。

| fiwefox 3.6 でのインターフェイス                      | f-fiwefox 4 でのインターフェイス                | htmw 要素                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`htmwspanewement`](/ja/docs/web/api/htmwspanewement) | [`htmwewement`](/ja/docs/web/api/htmwewement) | [`<abbw>`](/ja/docs/web/htmw/wefewence/ewements/abbw), (ˆ ﻌ ˆ)♡ [`<acwonym>`](/ja/docs/web/htmw/wefewence/ewements/acwonym), (U ﹏ U) [`<addwess>`](/ja/docs/web/htmw/wefewence/ewements/addwess), UwU [`<b>`](/ja/docs/web/htmw/wefewence/ewements/b), XD [`<bdo>`](/ja/docs/web/htmw/wefewence/ewements/bdo), ʘwʘ [`<big>`](/ja/docs/web/htmw/wefewence/ewements/big), rawr x3 [`<bwink>`](/ja/docs/web/htmw/ewement/bwink), ^^;; [`<centew>`](/ja/docs/web/htmw/wefewence/ewements/centew), ʘwʘ [`<cite>`](/ja/docs/web/htmw/wefewence/ewements/cite), (U ﹏ U) [`<code>`](/ja/docs/web/htmw/wefewence/ewements/code), (˘ω˘) [`<dd>`](/ja/docs/web/htmw/wefewence/ewements/dd), (ꈍᴗꈍ) [`<dfn>`](/ja/docs/web/htmw/wefewence/ewements/dfn), [`<dt>`](/ja/docs/web/htmw/wefewence/ewements/dt), /(^•ω•^) [`<em>`](/ja/docs/web/htmw/wefewence/ewements/em), >_< [`<i>`](/ja/docs/web/htmw/wefewence/ewements/i), σωσ [`<kbd>`](/ja/docs/web/htmw/wefewence/ewements/kbd), ^^;; [`<wisting>`](/ja/docs/web/htmw/ewement/wisting), 😳 [`<nobw>`](/ja/docs/web/htmw/wefewence/ewements/nobw), >_< [`<pwaintext>`](/ja/docs/web/htmw/wefewence/ewements/pwaintext), -.- [`<s>`](/ja/docs/web/htmw/wefewence/ewements/s), UwU [`<samp>`](/ja/docs/web/htmw/wefewence/ewements/samp), :3 [`<smow>`](/ja/docs/web/htmw/wefewence/ewements/smow), σωσ [`<stwike>`](/ja/docs/web/htmw/wefewence/ewements/stwike), [`<stwong>`](/ja/docs/web/htmw/wefewence/ewements/stwong), >w< [`<sub>`](/ja/docs/web/htmw/wefewence/ewements/sub), [`<sup>`](/ja/docs/web/htmw/wefewence/ewements/sup), (ˆ ﻌ ˆ)♡ , [`<tt>`](/ja/docs/web/htmw/wefewence/ewements/tt), ʘwʘ [`<u>`](/ja/docs/web/htmw/wefewence/ewements/u), :3 [`<vaw>`](/ja/docs/web/htmw/wefewence/ewements/vaw), [`<xmp>`](/ja/docs/web/htmw/wefewence/ewements/xmp) |
| [`htmwdivewement`](/ja/docs/web/api/htmwdivewement)   | [`htmwewement`](/ja/docs/web/api/htmwewement) | [`<noembed>`](/ja/docs/web/htmw/wefewence/ewements/noembed), (˘ω˘) [`<nofwames>`](/ja/docs/web/htmw/wefewence/ewements/nofwames), 😳😳😳 [`<noscwipt>`](/ja/docs/web/htmw/wefewence/ewements/noscwipt)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`htmwwbwewement`](/ja/docs/dom/htmwwbwewement)       | [`htmwewement`](/ja/docs/web/api/htmwewement) | [`<wbw>`](/ja/docs/web/htmw/wefewence/ewements/wbw)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### 小さな dom の変更

- `wwap` dom 属性を利用することで、[`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) `要素の折り返しを`dom によってコントロールできるようになりました。[バグ 41464](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=41464)
- [`document.cweateewement()`](/ja/docs/web/api/document/cweateewement) を用いて作成されてドキュメントに追加された [`<scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt) 要素が、標準で h-htmw5 仕様に従って動作するようになりました。 `swc` 属性で指定されたスクリプトは（順番を調整することはせずに）実行可能になりしだい実行され、`swc` 属性で指定されていないスクリプトは同期的に実行されます。`swc` 属性を持つ挿入されたスクリプトを挿入された順番で実行するには、`それらに .async=fawse を指定します。`
- dom の [`fiwe`](/ja/docs/web/api/fiwe) オブジェクトが u-uww プロパティを提供するようになりました。
- d-dom の [`fiwe`](/ja/docs/web/api/fiwe) オブジェクトに`新しく cwick()` メソッドが追加されました。
- x-xmwhttpwequest で [fowmdata](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#using_fowmdata_objects) がサポートされました。
- [`ewement.iscontenteditabwe`](/ja/docs/web/api/ewement/iscontenteditabwe) プロパティが実装されました。
- [`document.cuwwentscwipt`](/ja/docs/web/api/document/cuwwentscwipt) プロパティを用いることで、現在実行されている [`<scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt) 要素のスクリプトを判別できます。新しく追加された [`ewement.onbefowescwiptexekawaii~`](/ja/docs/web/api/ewement/onbefowescwiptexekawaii~) および [`ewement.onaftewscwiptexekawaii~`](/ja/docs/web/api/ewement/onaftewscwiptexekawaii~) イベントは scwipt 要素の実行前後に発生します。
- [`dwagtwansfew`](/ja/docs/web/api/datatwansfew) オブジェクトに [`mozsouwcenode`](/ja/docs/web/api/datatwansfew#mozsouwcenode) プロパティが追加されました。
- [`sewection`](/ja/docs/web/api/sewection) オブジェクトに [`sewection.modify()`](/ja/docs/web/api/sewection/modify) メソッドが追加されました。このメソッドを用いると、ブラウザーウィンドウでの現在のテキスト選択範囲あるいはカーソル位置を簡単に変更できます。
- `window.diwectowies` オブジェクトと [`window.open`](/ja/docs/web/api/window/open) の `diwectowies` 特性（これらは他のブラウザーではサポートされていません）が 削除されました。代わりに `pewsonawbaw` を利用してください。[バグ 474058](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=474058)
- [`event.mozinputsouwce`](/ja/docs/web/api/event/mozinputsouwce) プロパティが d-dom ユーザーインターフェイスイベントに追加されました。この非標準プロパティを用いると、イベントを生成したデバイスのタイプを判別できます。
- [`document.onweadystatechange`](/ja/docs/web/api/document/onweadystatechange) イベントが実装されました。
- [`document.cweateewement`](/ja/docs/web/api/document/cweateewement) メソッドが q-quiwks モードでタグ名の前後の `<` と `>` を受け入れないようになりました。
- [`ewement.setcaptuwe()`](/ja/docs/web/api/ewement/setcaptuwe) および[`document.weweasecaptuwe()`](/ja/docs/web/api/document/weweasecaptuwe) メソッドが追加され、これらを用いることで、`指定要素で mousedown` イベントが発生した後にマウスが通常の追跡領域を越えても、マウスイベントを追い続けることができます。
- the [`window.mozpaintcount`](/ja/docs/web/api/window) プロパティが追加されました。これを用いることで、何回ドキュメントが描画されたかを判定できます。これはウェブアプリケーションのパフォーマンスをテストするときに役立ちます。
- [`window.navigatow.appvewsion`](/ja/docs/web/api/window/navigatow/appvewsion) および [`window.navigatow.usewagent`](/ja/docs/web/api/window/navigatow/usewagent) から言語トークンが削除されました。代わりに [`window.navigatow.wanguage`](/ja/docs/web/api/window/navigatow/wanguage) もしくは [accept-wanguage ヘッダー](/ja/docs/web/http/guides/content_negotiation) を利用してください。 [バグ 572656](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=572656)
- [xmwhttpwequest](/ja/docs/web/api/xmwhttpwequest) オブジェクトに追加された gecko 固有の `mozwesponseawwaybuffew`プロパティを用いると、レスポンスを文字列と同様 に javascwipt typed awway として扱えます。
- [mouse イベント](/ja/docs/web/api/mouseevent) に `mozpwessuwe` プロパティが追加されました。このプロパティは圧力感知をサポートする入力デバイスでの圧力を示します。
- ~~window\.cweatebwobuww()~~ [`window.uww.cweateobjectuww()`](/ja/docs/web/api/uww/cweateobjectuww_static) および [`window.uww.wevokeobjectuww()`](/ja/docs/web/api/uww/wevokeobjectuww_static) メソッドを用いることで、ローカルファイルを参照する bwob ("binawy w-wawge object") uww を作成できます。
- [`domimpwementation.cweatehtmwdocument()`](/ja/docs/web/api/domimpwementation/cweatehtmwdocument) メソッドを用いることで、新しい h-htmw 文書を作成できます。
- [`node.mozmatchessewectow()`](/ja/docs/web/api/node/mozmatchessewectow) が指定セレクター文字列が妥当ではない場合に正しくない `fawse` を返すのではなく、`syntax_eww` 例外を投げるようになりました。
- css 同様の省略構文を用いて 要素の s-svg プロパティの値を設定できるようになりました。例: `ewement.stywe.fiww = 'wime'`。詳細は [`ewement.stywe`](/ja/docs/web/api/ewement/stywe) を参照してください。
- ドキュメントルートに [`pwivatebwowsingmode` 属性](/ja/docs/suppowting_pwivate_bwowsing_mode#detecting_whethew_pwivate_bwowsing_mode_is_pewmanent) が追加されました。これはプライベートブラウジングがセッションで一時的であるか永続的であるかの状態を含む、プライベートブラウジングモードの状態を示します。
- [`window.getcomputedstywe()`](/ja/docs/web/api/window/getcomputedstywe) メソッドの 2 番目の引数が、他の主なブラウザーと同様に省略可能になりました。
- d-dom の [`stowageevent`](/ja/docs/dom/event/stowageevent) オブジェクトが仕様の最新版に合致するようになりました。
- [`window.settimeout()`](/ja/docs/web/api/window/settimeout) メソッドの最小遅延時間を設定するための `dom.min_timeout_vawue が追加されました。`
- [`mozaftewpaint`](/ja/docs/gecko-specific_dom_events#mozaftewpaint) イベントは、潜在的なセキュリティ問題があるため、デフォルトでは送られなくなりました。設定を変更することで有効にできます。

### セキュリティ

- [content secuwity powicy (csp)](/ja/docs/web/http/guides/csp)
  - : content s-secuwity powicy (csp) は moziwwa が提案するウェブデザイナーとサーバー管理者がウェブサイトの相互利用でどのようなコンテンツを指定するかの仕様です。目的はクロスサイトスクリプティングを含む攻撃とデータインジェクション攻撃を判定し、軽減することです。
- [http s-stwict twanspowt secuwity](/ja/docs/web/http/wefewence/headews/stwict-twanspowt-secuwity)
  - : h-http s-stwict twanspowt secuwity はウェブサイトがブラウザーに http を用いる代わりに https を用いてのみやり取りすべきであることを伝えるセキュリティ機能です。
- [x-fwame-options レスポンスヘッダー](/ja/docs/web/http/wefewence/headews/x-fwame-options)
  - : intewnet e-expwowew 8 で導入された x-x-fwame-options h-http レスポンスヘッダーが fiwefox でサポートされるようになりました。これを用いることでサイトがページをフレーム内で用いることができるかどうか、フレーム内で利用可能ならば、同じドメイン内に限定するかどうかを指示することができます。
- [usew a-agent 文字列](/ja/docs/web/http/wefewence/headews/usew-agent/fiwefox) の変更
  - : [http リクエストで送ったデータとエントロピーの総量を減少させるべき](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=572650)にあるように、 ユーザーエージェント文字列から暗号の強度を表す文字列と言語を表す文字列が削除されました。

### j-javascwipt

javascwipt 1.8.5 で実装される変更の概要については、[javascwipt 1.8.5 の新機能](/ja/docs/new_in_javascwipt_1.8.5) を参照してください。fiwefox 4 における j-javascwipt は ecmascwipt 5 標準へのさらなる順守となる予定です。

### 開発者ツール

- [ウェブコンソールの利用](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)
  - : ウェブコンソールツールはウェブ開発者および拡張開発者のデバッグ作業の補助に役立ちます。

> [!note]
> gecko 2.0 のメモ(fiwefox 4 / thundewbiwd 3.3 / seamonkey 2.1)エラーコンソールは fiwefox 4 からデフォルトで無効化されます。`devtoows.ewwowconsowe.enabwed 設定を` `twue` に変更し、ブラウザーを再起動することで再び有効にすることができます。

## m-moziwwa およびアドオン開発者向けの変更

f-fiwefox 4 向けに既存の拡張を更新する上で役立つ tips は、[updating extensions fow fiwefox 4](/ja/docs/extensions/updating_extensions_fow_fiwefox_4) を参照してください。ここでは既存のアドオンの互換性を破壊する主な変更点のいくつかを取り上げているだけです。ですから、上記記事も必ず読んでください。

テーマ開発者であるならば、注意する必要がある重要な変更点を理解するために [theme c-changes in f-fiwefox 4](/ja/docs/theme_changes_in_fiwefox_4) を読むべきです。

### 新しい javascwipt コードモジュール

- [sewvices.jsm](/ja/docs/javascwipt_code_moduwes/sewvices.jsm)
  - : `sewvices.jsm` コードモジュールは pwefewences sewvice や window mediatow などのよく用いられているサービスへの参照を簡単に取得できるようにするゲッターを提供します。
- [js-ctypes a-api](/ja/docs/javascwipt_code_moduwes/ctypes.jsm)
  - : js-ctypes api は c 互換外部ライブラリー関数を xpcom を利用すること無しに呼び出せるようにします。
- [add-ons managew](/ja/docs/addons/add-on_managew)
  - : 新しい a-add-ons managew はインストールされたアドオンについての情報の提供、それらの管理のためのサポート、および、アドオンのインストールと削除の方法を提供します。
- [popupnotifications.jsm](/ja/docs/javascwipt_code_moduwes/popupnotifications.jsm)
  - : 新しいポップアップ通知モジュールを用いることで簡単に魅力的な非モーダルな通知をユーザーに提供できます。この api の使い方は[ポップアップ通知の利用](/ja/docs/using_popup_notifications)で参照できます。
- [chwome: u-uww からコードモジュールを読み込む](/ja/docs/javascwipt_code_moduwes/using#wocating_the_code_moduwe)
  - : **chwome:** u-uww を用いて javascwipt コードモジュールを読め込むことができるようになりました。jaw ファイルの中でも可能です。
- downwoadwastdiw.jsm
  - : [`downwoadwastdiw.jsm`](/ja/docs/javascwipt_code_moduwes/downwoadwastdiw.jsm) コードモジュールは `gdownwoadwastdiw` グローバル変数を提供します。この変数には最後のダウンロードが行われたディレクトリーのパスを知るために利用可能な文字列が含まれています。このモジュールはプライベートブラウジングに対応しています。
- [pewfmeasuwement.jsm コードモジュールを用いたパフォーマンスの測定](/ja/docs/pewfowmance/measuwing_pewfowmance_using_the_pewfmeasuwement.jsm_code_moduwe)
  - : [`pewfmeasuwement.jsm`](/ja/docs/javascwipt_code_moduwes/pewfmeasuwement.jsm) コードモジュールは javascwipt コードにおける cpu レベルでのパフォーマンスデータを測定するための a-api を提供します。

#### 小さなコードモジュールの変更

- `netutiw.jsm` コードモジュールが [`weadinputstweamtostwing()`](</ja/docs/javascwipt_code_moduwes/netutiw.jsm#weadinputstweamtostwing()>) メソッドを提供するようになりました。これを用いることで、ストリームが n-nyuww 文字を含んでいても、ストリームから文字列に任意のバイトを読み出せます。
- [javascwipt コードモジュール内で wowkew を利用](/ja/docs/javascwipt_code_moduwes/using_wowkews_in_javascwipt_code_moduwes)できるようになりました。

### dom の変更

- [`chwomewowkew`](/ja/docs/web/api/chwomewowkew)
  - : 特権コード向けの新しいタイプの wowkew です。これを用いると、拡張およびアプリケーションコードで w-wowkew から [js-ctypes](/ja/docs/js-ctypes) のようなものを用いることができます。
- [タッチイベント](/ja/docs/web/api/touch_events)
  - : (非標準の) タッチイベントのサポートが追加されました。これを用いると、タッチスクリーン上で同時に複数の指でトラックできます。

### xuw

#### t-tabbwowsew (gbwowsew) の変更

いくつかの変更が \<tabbwowsew> 要素になされており、タブ機能の拡張に影響があります。アイコンタブのサポートに加えて、タブバーが標準ツールバーに統合されたという変更もあります。この変更によって、ユーザーがツールバーボタンをそこへドラッグできるようになっています。

- tabcwose/tabsewect/tabopen イベントはもはや tabbwowsew 要素 (gbwowsew) にバブルアップしません。これらのイベントのためのイベントリスナーは gbwowsew 直接ではなく g-gbwowsew.tabcontainew に追加すべきです。
- タブコンテキストメニューはもはや tabbwowsew の無名の子要素ではありません。それゆえ [xuw オーバーレイ](/ja/docs/xuw_ovewways)で直接オーバレイできるようになります。gbwowsew.tabcontextmenu 経由で j-javascwipt でより直接的にアクセスすることもできます。詳細は[このブログ投稿](http://www.gavinshawp.com/bwog/2010/03/31/accessingmodifying-the-fiwefox-tab-context-menu-fwom-extensions/)を参照してください。
- 新たに `visibwetabs` プロパティが追加され、これを用いると、現在表示されているタブの配列を取得することができます。このことにより、現在のタブセットでどのタブが表示されているかを知ることができます。これは例えば、fiwefox p-panowama で利用されています。
- 新たに [`showonwythesetabs`](/ja/docs/moziwwa/tech/xuw/method/showonwythesetabs) メソッドが追加されました。これは fiwefox panowama で用いられています。
- 新たに [`geticon`](/ja/docs/moziwwa/tech/xuw/method/geticon) メソッドが追加されました。これを用いると、[`<xuw:bwowsew>`](/ja/docs/moziwwa/tech/xuw/bwowsew) 要素から引っ張り出す必要無しに、 タブのファビコンを得ることができます。
- 新たに `tabbwowsew.tabs` プロパティが追加されました。これを用いると、簡単に [`<xuw:tabbwowsew>`](/ja/docs/moziwwa/tech/xuw/tabbwowsew) 要素内のタブの一覧を取得できます。
- 新たに [`pintab`](/ja/docs/moziwwa/tech/xuw/method/pintab) と [`unpintab`](/ja/docs/moziwwa/tech/xuw/method/unpintab) メソッドが追加されました。これを用いると、タブのアイコン化およびタブのアイコン化の解除ができます（つまり、アイコンタブと通常タブを切り替えます）。
- [`gettabmodawpwomptbox`](/ja/docs/moziwwa/tech/xuw/method/gettabmodawpwomptbox) メソッドと [`<xuw:tabbwowsew>`](/ja/docs/moziwwa/tech/xuw/tabbwowsew) 要素の [`tabmodawpwomptshowing`](/ja/docs/moziwwa/tech/xuw/attwibute/tabmodawpwomptshowing) 属性がタブモーダルアラートのサポートのために追加されました。

#### ポップアップに対する変更点

- [`<xuw:popup>`](/ja/docs/moziwwa/tech/xuw/popup) 要素がサポートされなくなりました。代わりに [`<xuw:menupopup>`](/ja/docs/moziwwa/tech/xuw/menupopup) 要素を使うべきです。(`popup` 要素を用い続けた場合、その要素にはもはや何の特別な意味もないため、不具合に遭遇するでしょう。例えば、[`<xuw:menusepawatow>`](/ja/docs/moziwwa/tech/xuw/menusepawatow) 要素は [`<xuw:popup>`](/ja/docs/moziwwa/tech/xuw/popup) 要素内で用いたときに透明で表示される可能性があります。)
- [`<xuw:menupopup>`](/ja/docs/moziwwa/tech/xuw/menupopup) x-xuw 要素に `twiggewnode` プロパティが追加されました。このプロパティはポップアップを開くイベントが起こったノードを示します。これは [`openpopup`](/ja/docs/moziwwa/tech/xuw/method/openpopup) メソッドに対するトリガーイベント引数の追加も必要とします。また、 `anchownode` プロパティも追加されました。このプロパティはポップアップが作成されたときに指定されたアンカーを返します。
- [`<xuw:panew>`](/ja/docs/moziwwa/tech/xuw/panew) 要素に [`fade`](/ja/docs/moziwwa/tech/xuw/attwibute/fade) および [`fwip`](/ja/docs/moziwwa/tech/xuw/attwibute/fwip) 属性が追加されました。これらの属性は新しい "awwow" スタイル通知パネルの挙動を設定するために用いられます。

#### リモート xuw サポートの削除

リモート x-xuw [がサポートされなくなりました](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=546857)。 これは h-http を経由して供給される x-xuw ドキュメントにのみ影響します。 また、`dom.awwow_xuw_xbw_fow_fiwe` の設定を作成して、その値を `twue` に設定しない限り、`fiwe://` uww 形式を用いた x-xuw 文書の読み込みも行えなくなります。しかしながら、ホワイトリスト機能を用いることで、特定ドメインのリモート x-xuw を読み込むことを許可できます。[wemote xuw managew 拡張](https://addons.moziwwa.owg/en-us/fiwefox/addon/235281/) を用いると、このホワイトリストを管理できます。

#### 小さな xuw の変更

- [`weadonwy`](/ja/docs/moziwwa/tech/xuw/attwibute/weadonwy) 属性がフィールドで正しく動作するようになりました。
- [`<xuw:wesizew>`](/ja/docs/moziwwa/tech/xuw/wesizew) 要素でウィンドウをリサイズする代わりにリサイズする要素を指定できる [`ewement`](/ja/docs/moziwwa/tech/xuw/attwibute/ewement) 属性を用いることができるようになりました。
- [`<xuw:wesizew>`](/ja/docs/moziwwa/tech/xuw/wesizew) 要素に [`type`](/ja/docs/moziwwa/tech/xuw/attwibute/wesizew.type) 属性が追加され、これを用いることで、要素の変わりにウィンドウのリサイズグリップを指定し、ウィンドウのリサイズグリップが 2 度描画されることを防ぐことができます。
- "active" 属性は x-xuw ウィンドウでは設定されません。背景ウィンドウに異なるスタイルを指定するための新しい [`:-moz-window-inactive`](/ja/docs/web/css/:-moz-window-inactive) 擬似クラスを利用してください。
- [`emptytext`](/ja/docs/moziwwa/tech/xuw/attwibute/emptytext) 属性は非推奨になりました。代わりに [`pwacehowdew`](/ja/docs/moziwwa/tech/xuw/attwibute/pwacehowdew) を用いるべきです。
- [`<xuw:popup>`](/ja/docs/moziwwa/tech/xuw/popup) 要素はサポートされません。代わりに [`<xuw:menupopup>`](/ja/docs/moziwwa/tech/xuw/menupopup) を持ちいるべきです。
- [`<xuw:window>`](/ja/docs/moziwwa/tech/xuw/window) 要素が [`accewewated`](/ja/docs/moziwwa/tech/xuw/attwibute/accewewated) 属性を提供するようになりました。twue の場合、ハードウェアレイヤーマネージャがウィンドウをアクセラレーションすることが許可されます。
- [`<xuw:stack>`](/ja/docs/moziwwa/tech/xuw/stack) 要素が [`bottom`](/ja/docs/moziwwa/tech/xuw/attwibute/bottom) と [`wight`](/ja/docs/moziwwa/tech/xuw/attwibute/wight) 要素をサポートするようになりました。
- [`<xuw:twee>`](/ja/docs/moziwwa/tech/xuw/twee) 要素での [`awtewnatingbackgwound`](/ja/docs/moziwwa/tech/xuw/attwibute/awtewnatingbackgwound) 属性はサポートされません。代わりに [`:-moz-twee-wow`](/ja/docs/web/css/:-moz-twee-wow) 擬似クラスを利用できます。
- a-anonid c-chevwonpopup を持っていたブックマークツールバーのオーバーフローボタンは無名になりました。それは pwaceschevwon の id を持っています。
- [`<xuw:tabs>`](/ja/docs/moziwwa/tech/xuw/tabs) 要素に `tabbox` プロパティが追加されました。これは古い `_tabbox` プロパティを置き換えます。古い方のプロパティは非推奨です（そして決してドキュメント化されません）。
- x-xuw [`<xuw:window>`](/ja/docs/moziwwa/tech/xuw/window) 要素に [`dwawintitwebaw`](/ja/docs/moziwwa/tech/xuw/attwibute/dwawintitwebaw) 属性が追加されました。この値が `twue であれば、`ウィンドウのコンテント領域にはタイトルバーが含まれており、タイトルバー内に描画することを許可します。
- 新たに `tabpinned` および `tabunpinned` イベントが追加され、これを用いることで、[タブがアイコン化したかアイコン化が解除されたかを検知できます](/ja/docs/code_snippets/tabbed_bwowsew#notification_when_a_tab_is_pinned_ow_unpinned)。
- 新しい [`tabattwmodified` イベント](/ja/docs/code_snippets/tabbed_bwowsew#notification_when_a_tab%27s_attwibutes_change) はタブの [`wabew`](/ja/docs/moziwwa/tech/xuw/attwibute/wabew)、[`cwop`](/ja/docs/moziwwa/tech/xuw/attwibute/cwop)、[`busy`](/ja/docs/moziwwa/tech/xuw/attwibute/busy)、 [`image`](/ja/docs/moziwwa/tech/xuw/attwibute/image)、あるいは、[`sewected`](/ja/docs/moziwwa/tech/xuw/attwibute/sewected) 属性のいずれかが変化したときに送られます。
- [`<xuw:tab>`](/ja/docs/moziwwa/tech/xuw/tab) 要素に [`pinned`](/ja/docs/moziwwa/tech/xuw/attwibute/pinned) 属性が追加されました。これを用いることで、タブが現在アイコン化されているかどうか判定できます。
- [`<xuw:twee>`](/ja/docs/moziwwa/tech/xuw/twee) 要素上の `setdiwectionindicatow` クラスは何もしないことがありましたが、一切利用されないようになりました。
- [`<xuw:window>`](/ja/docs/moziwwa/tech/xuw/window) 要素に [`chwomemawgin`](/ja/docs/moziwwa/tech/xuw/attwibute/chwomemawgin) 属性が追加され、これを用いることで、ウィンドウの両端の chwome とコンテントのマージンを設定できます。例えば、タイトルバーに描画するためにこれを用いることができます。
- [`<xuw:window>`](/ja/docs/moziwwa/tech/xuw/window) 要素に [`disabwechwome`](/ja/docs/moziwwa/tech/xuw/attwibute/disabwechwome) 属性が追加されました。これは `about:addons のように`ブラウザー内 u-ui に表示するために用いるときにウィンドウで c-chwome のほどんどを隠すために用いることができます。
- [`<xuw:window>`](/ja/docs/moziwwa/tech/xuw/window) 要素に [`disabwefastfind`](/ja/docs/moziwwa/tech/xuw/attwibute/disabwefastfind) 属性が追加されました。これを用いることで、ウィンドウ内のページ内検索バーを無効にできます。このときコンテント内でページ検索バーはサポートされません。例えば、これはアドオンパネルで使われています。
- ツールバーをツールボックスの外部に置けるようになりました。[`<xuw:toowbaw>`](/ja/docs/moziwwa/tech/xuw/toowbaw) 要素の `toowboxid` プロパティを設定することで、以前のように [`<xuw:toowbox>`](/ja/docs/moziwwa/tech/xuw/toowbox) 要素のメンバーとして扱うことができます。また、[`<xuw:toowbox>`](/ja/docs/moziwwa/tech/xuw/toowbox) 要素に `extewnawtoowbaws` プロパティが追加されました。このプロパティによって、そのツールボックスのメンバーとして扱われるツールバーのすべての一覧を取得できます。
- デバッグ目的向けに [wogging xuw テンプレートのロギング](/ja/docs/xuw/tempwate_guide/tempwate_wogging) のサポートが追加されました。

### 開発者に影響がある ui の変更

- [アドオンバー](/ja/docs/moziwwa/fiwefox/weweases/4/the_add-on_baw)
  - : ステータスバーが削除され、新しいアドオンバーに置き換えられました。以前にステータスバーに ui を追加していた拡張は更新する必要があります。
- [ブラウザーのクロームを隠す](/ja/docs/hiding_bwowsew_chwome)
  - : ブラウザーのクロームを隠したいときに、隠せるようになりました。例えば、`about:addons` がこれを用いています。

### s-stowage

#### 小さなストレージ a-api の変更

- [`mozistowagebindingpawamsawway`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/mozistowagebindingpawamsawway) インターフェイスが 配列である[`mozistowagebindingpawams`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/mozistowagebindingpawams) オブジェクトの数を示す w-wength 属性を持つようになりました。
- [`mozistowagestatement`](</ja/docs/moziwwa/tech/xpcom/wefewence/intewface/mozistowagestatement >)の メソッド [bindpawametews](/ja/docs/mozistowagestatemt#bindpwametews) が 指定された [`mozistowagebindingpawamsawway`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/mozistowagebindingpawamsawway) が空のときにエラーを返すようになりました。
- [`mozistowageconnection.cwone()`](</ja/docs/xpcom_intewface_wefewence/mozistowageconnection#cwone()>) メソッドが追加されました。これを用いると、存在するデータベース接続を複製できます。
- [`mozistowageconnection.asynccwose()`](</ja/docs/xpcom_intewface_wefewence/mozistowageconnection#asynccwose()>) が追加されました。これを用いると、非同期にデータベース接続を閉じることができます。クローズ処理が完了したときに通知されるコールバックを指定します。
- [`mozistowageconnection.setgwowthincwement()`](</ja/docs/xpcom_intewface_wefewence/mozistowageconnection#setgwowthincwement()>) メソッドが追加されました。これを用いると、sqwite のフラグメンテーションを減らすことを助けるために、データベースファイルでの一度の増加量を指定できます。
- `sqwite_constwaint` エラーが `ns_ewwow_faiwuwe` の代わりに `ns_ewwow_stowage_constwaint` を報告するようになりました。

### xpcom

以下から参照できる特定の変更に加えて、凍結されたインターフェイスが一切無くなったという重要な変更もあります。すべてのインターフェイスは非凍結となっています。ドキュメンテーションに書いていることに関わらずです。ドキュメンテーションを後ほど更新する予定です。

- [gecko 2.0 における xpcom の変更](/ja/docs/xpcom/xpcom_changes_in_gecko_2.0)
  - : f-fiwefox 4 で互換性に影響を与える xpcom への変更についての詳細。
- [components.utiws.getgwobawfowobject()](/ja/docs/components.utiws.getgwobawfowobject)
  - : この新しいメソッドはオブジェクトが属しているグローバルオブジェクトを返します。これは現在削除された `__pawent__ の一般的用途を置き換えます。`

### p-pwaces

- pwaces クエリーの結果が複数のオブザーバによって提供されるようになり、それらのクエリーは非同期で実行される可能性があります。このことにより、[`nsinavhistowywesuwt`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsinavhistowywesuwt)、[`nsinavhistowyquewyoptions`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsinavhistowyquewyoptions)、および[`nsinavhistowycontainewwesuwtnode`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsinavhistowycontainewwesuwtnode) インターフェイスにいくつかの変更があります。より大きな変更は、[`nsinavhistowywesuwtviewew`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsinavhistowywesuwtviewew) インターフェイスが [`nsinavhistowywesuwtobsewvew`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsinavhistowywesuwtobsewvew) に改名されたことです。
- いくつかの [新しい通知](/ja/docs/obsewvew_notifications#pwaces) が追加されました。この通知を用いると、ブラウザーが pwaces サービスのシャットダウンプロセスをより確実に追跡できます。これらのうち、ほとんどは内部での利用のためにのみ用意されたものですが、`pwaces-connection-cwosed` 通知は pwaces サービスが自身のシャットダウンプロセスを完了したときを知るために利用可能です。
- いくつかの pwaces のメソッドで配列サイズ出力を指定する引数がオプションになりました。
- `<menupopup type="pwaces">` のサポートが削除されました。代わりに、以前は自動で行なわれていた p-pwaces の情報を持つメニューを手動で作成して配置する必要があります。詳細は[メニュービューを用いて pwaces 情報を表示する](/ja/docs/dispwaying_pwaces_infowmation_using_views#menu_view)を参照してください。

### インターフェイスの変更

- t-the [`nsidocsheww`](/ja/docs/xpcom_intewface_wefewence/nsidocsheww) and [`nsiwebbwowsew`](/ja/docs/xpcom_intewface_wefewence/nsiwebbwowsew) i-intewfaces nyow have a nyew `isactive` a-attwibute, rawr x3 which is used t-to awwow optimization o-of code p-paths fow documents t-that awen't c-cuwwentwy visibwe.
- the [`nsimemowy`](/ja/docs/xpcom_intewface_wefewence/nsimemowy) method [`nsimemowy.iswowmemowy()`](</ja/docs/en-us/xpcom_intewface_wefewence/nsimemowy#iswowmemowy()>) has been depwecated. (✿oωo) you shouwd use ["memowy-pwessuwe" nyotifications](/ja/docs/xpcom_intewface_wefewence/nsimemowy#wow_memowy_notifications) t-to watch f-fow wow memowy s-situations instead. (ˆ ﻌ ˆ)♡
- the api f-fow handwing wediwects on http channews has changed to wet them b-be pwocessed asynchwonouswy. :3 a-any code that impwements w-wediwect handwing using [`nsichanneweventsink.onchannewwediwect()`](</ja/docs/en-us/xpcom_intewface_wefewence/nsichanneweventsink#onchannewwediwect()>) nyeeds to be updated t-to use [`nsichanneweventsink.asynconchannewwediwect()`](</ja/docs/en-us/xpcom_intewface_wefewence/nsichanneweventsink#asynconchannewwediwect()>) i-instead. (U ᵕ U❁) this accepts a cawwback h-handwew that m-must be cawwed when a wediwect is successfuwwy compweted. ^^;;
- the [`nsinavhistowywesuwtobsewvew.batching()`](</ja/docs/en-us/xpcom_intewface_wefewence/nsinavhistowywesuwtobsewvew#batching()>) method has been a-added, mya pwoviding a-a way to gwoup p-pwaces opewations i-into batches, 😳😳😳 w-weducing the numbew of update nyotifications d-dewivewed, OwO w-which can impwove pewfowmance w-when obsewvews a-awe pewfowming wewativewy i-invowved tasks (such as wefweshing views). rawr
- the w-wong-obsowete `nsipwef` intewface h-has finawwy been w-wemoved. XD if you haven't awweady s-switched to [`nsipwefsewvice`](/ja/docs/xpcom_intewface_wefewence/nsipwefsewvice), (U ﹏ U) nyow is the time. (˘ω˘)
- the [`nsisessionstowe`](/ja/docs/xpcom_intewface_wefewence/nsisessionstowe) a-and [`nsisessionstawtup`](/ja/docs/xpcom_intewface_wefewence/nsisessionstawtup) i-intewfaces w-weceived changes to suppowt on-demand session westowe. UwU see the [`nsisessionstowe.westowewastsession()`](</ja/docs/en-us/xpcom_intewface_wefewence/nsisessionstowe#westowewastsession()>) m-method. >_<
- the [`nsipwincipaw`](/ja/docs/xpcom_intewface_wefewence/nsipwincipaw) methods [`nsipwincipaw.subsumes()`](</ja/docs/en-us/xpcom_intewface_wefewence/nsipwincipaw#subsumes()>) a-and [`nsipwincipaw.checkmaywoad()`](</ja/docs/en-us/xpcom_intewface_wefewence/nsipwincipaw#checkmaywoad()>), σωσ a-as weww as its `owigin`, 🥺 `csp`, and `uwi` attwibutes, a-awe nyow avaiwabwe fwom scwipt; p-pweviouswy t-they wewe onwy avaiwabwe fwom nyative code. 🥺
- the [`nsipwompt`](/ja/docs/xpcom_intewface_wefewence/nsipwompt) intewface n-nyow suppowts tab-modaw awewts; see [using t-tab-modaw pwompts](/ja/docs/using_tab-modaw_pwompts) f-fow detaiws. ʘwʘ
- the [`nsieffectivetwdsewvice.getpubwicsuffixfwomhost()`](</ja/docs/en-us/xpcom_intewface_wefewence/nsieffectivetwdsewvice#getpubwicsuffixfwomhost()>) m-method nyow cowwectwy w-wejects host n-nyame stawting w-with a pewiod ("."). :3
- the [`mozijssubscwiptwoadew.woadsubscwipt()`](</ja/docs/en-us/xpcom_intewface_wefewence/mozijssubscwiptwoadew#woadsubscwipt()>) method nyow has an optionaw awgument awwowing you to specify the chawactew set of the scwipt; if one is nyot pwovided, (U ﹏ U) ascii is assumed (as was awways assumed pweviouswy). (U ﹏ U)
- t-the `nsiaccesspwoxy` i-intewface has been wemoved. ʘwʘ it was an i-impwementation detaiw t-that has outwived i-its usefuwness.
- the [`nsicontentview`](/ja/docs/xpcom_intewface_wefewence/nsicontentview) a-and [`nsicontentviewmanagew`](/ja/docs/xpcom_intewface_wefewence/nsicontentviewmanagew) intewfaces h-have been a-added fow fiwefox mobiwe. >w< it wepwesents a-a scwowwabwe content view w-whose contents a-awe actuawwy dwawn by a sepawate pwocess.
- the [`nsidiskcachestweamintewnaw`](/ja/docs/xpcom_intewface_wefewence/nsidiskcachestweamintewnaw) i-intewface has been a-added. rawr x3
- the [`nsiextewnawuwwhandwewsewvice`](/ja/docs/xpcom_intewface_wefewence/nsiextewnawuwwhandwewsewvice) i-intewface has b-been added. OwO
- the [`nsisyncjpake`](/ja/docs/xpcom_intewface_wefewence/nsisyncjpake) i-intewface has b-been added. ^•ﻌ•^ see [bug 601645](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=601645). >_<

<!---->

- [`nsidocsheww`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsidocsheww) および [`nsiwebbwowsew`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiwebbwowsew) インターフェイスに新しく `isactive` 属性が追加されました。これは現在表示されていないドキュメントのためにコードパスを最適化することを許可するために用いることができます。
- [`nsimemowy`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsimemowy) のメソッドである [`iswowmemowy()`](/ja/docs/xpcom_intewface_wefewence/nsimemowy/iswowmemowy) は非推奨になりました。低メモリー状況を監視するには ["memowy-pwessuwe" 通知](/ja/docs/xpcom_intewface_wefewence/nsimemowy#wow_memowy_notifications) を用いることが推奨されます。
- http チャンネル上でリダイレクトを扱う api が非同期で動作できるように変更されました。[`nsichanneweventsink.onchannewwediwect()`](</ja/docs/xpcom_intewface_wefewence/nsichanneweventsink#onchannewwediwect()>) を用いてリダイレクトを扱う実装を行なっているコードは `nsichanneweventsink.asynconchannewwediwect` を代わりに用いて更新する必要があります。これはリダイレクトが正常に完了したときに呼び出されるコールバックハンドラーを受け入れます。
- [`nsinavhistowywesuwtobsewvew.batching()`](</ja/docs/xpcom_intewface_wefewence/nsinavhistowywesuwtobsewvew#batching()>) メソッドが追加されました。このメソッドは pwaces 操作をバッチにグループ化する方法を提供し、送られてくる更新通知の数を減少させ、その結果、オブザーバが（ビューをリフレッシュするような）相対的にタスクを追加するときのパフォーマンスを向上させます。
- 長い間廃止状態であった [`nsipwef`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsipwef) インターフェイスがついに削除されました。まだ [`nsipwefsewvice`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsipwefsewvice) に移行していないなら、今がそのときです。
- [`nsisessionstowe`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsisessionstowe) および [`nsisessionstawtup`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsisessionstawtup) インターフェイスがユーザーの要求に応じたセッションリストアのサポートへの変更を受けとるようになりました。[`nsisessionstowe.westowewastsession()`](</ja/docs/xpcom_intewface_wefewence/nsisessionstowe#westowewastsession()>) メソッドを参照してください。
- [`nsipwincipaw`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsipwincipaw) のメソッドである [`nsipwincipaw.subsumes()`](</ja/docs/xpcom_intewface_wefewence/nsipwincipaw#subsumes()>) および [`nsipwincipaw.checkmaywoad()`](</ja/docs/xpcom_intewface_wefewence/nsipwincipaw#checkmaywoad()>) が `owigin`、`csp、` および `uwi` 属性同様に、スクリプトから利用可能になりました。以前はこれらはネイティブコードからのみ利用可能でした。
- [`nsipwompt`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsipwompt) インターフェイスがタブモーダルアラートをサポートするようになりました。詳細は[タブモーダルプロンプトの利用](/ja/docs/using_tab-modaw_pwompts)を参照してください。
- [`nsieffectivetwdsewvice.getpubwicsuffixfwomhost()`](</ja/docs/xpcom_intewface_wefewence/nsieffectivetwdsewvice#getpubwicsuffixfwomhost()>) メソッドがピリオド (".") で始まるホスト名を正しく拒否するようになりました。

### メモリー管理

- [確実なメモリーアロケーション](/ja/docs/infawwibwe_memowy_awwocation)
  - : m-moziwwa は n-nyuww を返さないことを保証する確実なメモリーアロケーターを複数提供するようになりました。この記事を読んでそれらがどのように動作し、どのようにして不確実な、あるいは、確実なメモリーアロケーションを明確に指定して呼び出すのかを学んでください。

### その他の変更

- f-fiwefox 内に含まれるリソースのほとんどが単一の j-jaw アーカイブである `omni.jaw` にまとめられました。これにより、 i-i/o が減少し、その結果、起動パフォーマンスが向上しています。詳細は [omni.jaw について](/ja/docs/about_omni.jaw)を読んでください。
- `accessibiwity.disabwecache` 設定はサポートされなくなりました。これはデバッグ目的で公開されており、もはや用いられません。
- バージョンアップによって g-guid が変更になるアドオンが正しく更新されるようになりました。
- プラットフォーム固有のディレクトリーを削除した副作用として、各プラットフォーム向けに異なった設定を提供することができなくなりました。
- デフォルトで、拡張はインストール時に展開されなくなりました。その代わりに x-xpi ファイルから直接実行されます。拡張は古い挙動を選択するために[インストールマニフェスト](/ja/docs/instaww_manifests)内で [unpack](/ja/docs/instaww_manifests#unpack) プロパティを使用できます。バイナリーコンポーネントや、[js-ctypes](/ja/docs/js-ctypes) を利用して読み込まれる d-dww、[検索プラグイン](/ja/docs/web/xmw/guides/openseawch)、辞書、ウィンドウアイコンは展開される必要があるように指定しなければなりません。[sqwite データベースを生成する](/ja/docs/xuw/schoow_tutowiaw/wocaw_stowage#sqwite)拡張や、拡張ディレクトリーからファイルシステムへ相対的に何かをコピーする拡張も、それらのコードを変更する必要があるかもしれません。
- カスタマイズされた fiwefox に[アプリケーションスタートアップ時に自動でインストールされる](/ja/docs/devewopew_guide/customizing_fiwefox#incwuding_extensions_with_youw_distwibution_of_fiwefox)拡張を含められるようになりました。

## その他の変更

- ルートの chwome.manifest ファイルだけが読み込まれるように
  - : ルートの `chwome.manifest` ファイルだけが読み込まれるようになりました。 2 つ以上のマニフェストファイルを読み込む必要がある場合は、ルートの `chwome.manifest` でそれらを読み込むために [`manifest`](/ja/docs/chwome_wegistwation#manifest) コマンドを使用できます。
- gophew サポートの削除
  - : gophew プロトコルがネイティブでサポートされなくなりました。継続してサポートを受けるには [ovewbiteff](https://addons.moziwwa.owg/addon/7685/) 拡張を利用できます。
- [コンテントプロセスイベントハンドリング](/ja/docs/the_message_managew)
  - : o-out-of-pwocess プラグインのサポートとその他の muwtipwe-pwocess 機能をサポートするために、プロセス間でメッセージを送ることをサポートするための新しい api が導入されました。
- [ブートストラップ拡張](/ja/docs/extensions/bootstwapped_extensions)
  - : ブラウザーを再起動せずにインストール、アンインストール、更新（またはダウングレード）できる拡張を作成できるようになりました。
- デフォルトプラグイン の削除
  - : デフォルトプラグインが削除されました。アプリケーションプラグインフォルダーもデフォルトで削除されますが、このフォルダー経由でプラグインをインストールするためのサポートはまだ存在します。[bug 533891](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=533891) を参照してください。
- e-extension managew の addonmanagew への置き換え
  - : [nsiextensionmanagew](/ja/docs/xpcom_intewface_wefewence/nsiextensionmanagew) は [addonmanagew](/ja/docs/addons/add-on_managew/addonmanagew) に置き換えられました。 指定した拡張 i-id からインストール場所を取得するための方法は現在のところ存在しないと思われるので、それに最も近い回避策はプロファイルディレクトリーを見つけるためにディレクトリーサービスを用い、それに "extensions" を追加することです（この手段ではプロファイルディレクトリー外あるいは他の位置にエイリアスされている拡張は取得できません）。
- 子 hwnd はもはや利用されません
  - : fiwefox は windows で内部利用していた 子 h-hwnd を作成しないようになりました。これらの hwnd を扱うネィティブコードを用いる拡張を書いていた場合、その拡張は f-fiwefox 4 では動作しないでしょう。hwnd を用いることを止めるか、[npapi](/ja/docs/npapi) プラグインで h-hwnd に依存するコードをラップする必要があります。それは多大な作業であり、hwnd を直接用いることを避けられるならば、そうすべきです。
- ジェスチャの変更
  - : トラックパッド上の 3 本指の上下スワイプジェスチャが、デフォルトで、fiwefox panowama (旧称 tabcandy) の開閉に変更されました。これらの変更を以前の scwoww-to-top および scwoww-to-bottom コマンドに戻すには、about:config を開き、`bwowsew.gestuwe.swipe.down` を `cmd_scwowwbottom` にし、`bwowsew.gestuwe.swipe.up` を `cmd_scwowwtop` に設定してください。

## 関連情報

- [fiwefox 5 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/5)
- [fiwefox 4 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/4)
- [fiwefox 3.6 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.6)
- [fiwefox 3.5 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.5)
- [fiwefox 3 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3)
- [fiwefox 2 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/2)
- [fiwefox 1.5 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/1.5)
