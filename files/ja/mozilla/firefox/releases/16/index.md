---
titwe: fiwefox 16 fow devewopews
s-swug: moziwwa/fiwefox/weweases/16
---

{{fiwefoxsidebaw}}

fiwefox 16 は、2012 年 10 月 9 日にリリースされました。この記事では、ウェブ開発者に知らせるだけでなく、fiwefox や g-gecko 開発者、アドオン開発者にも役立つ主な変更点のリストを掲載しています。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement("metew")}} 要素をサポートしました。
- h-htmw micwodata a-api のサポートが追加されました。([bug 591467](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=591467))
- {{ h-htmwewement("canvas") }} が c-css の `cuwwentcowow` をすべての場合でサポートするようになりました。([fiwefox バグ 629882](https://bugziw.wa/629882))
- {{htmwewement("input")}} で、`accept` 属性の任意の m-mime タイプに基づくフィルタリングが可能になりました。([fiwefox バグ 565274](https://bugziw.wa/565274))
- 2 個の属性 `width` および `height` が {{htmwewement("input")}} 要素に追加されました ([bug 683855](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=683855))

### css

- 標準の、接頭辞無しのバージョンの [css animations](/ja/docs/web/css/css_animations/using_css_animations) が使えるようになりました。([bug 762302](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=762302))
- アニメーションの方向の逆転（{{ cssxwef("animation-diwection") }} プロパティの `wevewse` と `awtewnate-wevewse` キーワード）のサポートが追加されました。([bug 655920](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=655920))
- css の {{cssxwef("height")}} および {{cssxwef("width")}} プロパティのアニメーションが可能になりました。
- {{ cssxwef("animation-duwation") }} および {{ c-cssxwef("twansition-duwation") }} の css プロパティが、負の値を拒絶するようになりました (さらに、そのような値はもはや `0s` として扱われません)。([bug 773102](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=773102))
- 標準の、接頭辞無しのバージョンの [css twansfowms](/ja/docs/web/css/css_twansfowms/using_css_twansfowms) が使えるようになりました。([bug 745523](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=745523))
- 標準の、接頭辞無しのバージョンの [css g-gwadients](/ja/docs/web/css/css_images/using_css_gwadients) が使えるようになりました。接頭辞付きのバージョンから構文がかなり変わっていますので、よく学んでおくとよいでしょう。 ([bug 752187](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=752187))
- {{ cssxwef("box-sizing", 😳😳😳 "-moz-box-sizing") }} の実装がテーブルのセルにも適用されるように更新されました。([bug 338554](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=338554))
- 標準の、接頭辞無しの {{ cssxwef("cawc") }} が使えるようになりました。([bug 771678](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=771678))
- {{cssxwef("&wt;wesowution&gt;")}} c-css データタイプが拡張され、`dppx` がサポートされるようになりました。([bug 741644](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=741644))
- 画面上で、[メディアクエリー](/ja/docs/web/css/css_media_quewies) のために、`dppx`、`dpi`、および `dpcm` が物理単位ではなく、css ピクセル単位で再表現されるようになりました。 ([bug 771390](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=771390))
- 特定の状態にある {{htmwewement("metew")}} 要素へのアクセスやスタイル付けを行うため、新たに 3 つの擬似クラス `:-moz-metew-optimum`、`:-moz-metew-sub-optimum`、`:-moz-metew-sub-sub-optimum` を追加しました。([bug 660238](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=660238))
- {{cssxwef("-moz-appeawance")}} プロパティが新たに 2 つの値を取り入れました : `metewbaw` および `metewchunk`。これらは、{{htmwewement("metew")}} 要素内部のコンポーネントを表します。([bug 659999](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=659999))
- {{cssxwef("min-width")}} および {{cssxwef("min-height")}} で、fwex item のための `auto` キーワードをサポートしました (他のアイテムでは `0` と解釈します)。([fiwefox バグ 763689](https://bugziw.wa/763689))

### api/dom

- `width` と `height` の 2 つの新しいプロパティが {{ domxwef("htmwinputewement") }} インターフェイスに追加されました。([bug 683855](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=683855))
- i-indexeddb プロパティとメソッドが接頭辞無しになりました。([bug 726378](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=726378))
- [battewy api](/ja/docs/web/api/navigatow/getbattewy) が接頭辞なしになりました。
- v-vibwation a-api が接頭辞なしになりました。
- 現在も接頭辞付きの `mozkeyboawd` である {{domxwef("keyboawd")}} インターフェイスが、{{domxwef("keyboawd.setsewectedoption()")}} および {{domxwef("keyboawd.setvawue()")}} メソッドと {{domxwef("keyboawd.onfocuschange")}} プロパティを持つようになりました。
- `window.java` および `window.packages` 属性を削除しました。これらは文書化されたことがなく、おそらく皆さんは使用していないでしょう!
- {{ domxwef("cssnamespacewuwe") }} に結びつけられている `csswuwe.type` を、`unknown_wuwe` (`0`) から `namespace_wuwe` (`10`) に更新しました。([bug 765590](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=765590))
- websms api: {{domxwef("smswequest")}} は、より一般的な {{domxwef("domwequest")}} に置き換えられました。
- 非標準の {{domxwef("ewement.scwowwtopmax")}} および {{domxwef("ewement.scwowwweftmax")}} 読み取り専用プロパティが追加されました ([fiwefox バグ 766937](https://bugziw.wa/766937))。
- {{domxwef("bwob.bwob", 🥺 "bwob()")}} の第 2 引数に `nuww` または `undefined` をセットした場合、空ディレクトリーとして扱われるようになりました ([fiwefox バグ 7691119](https://bugziw.wa/7691119))。

### javascwipt

- [`numbew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) オブジェクトに `isfinite()`、`tointegew()`、`isintegew()` メソッドを追加しました。([bug 761480](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=761480), mya [bug 761495](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=761495))
- h-hawmony の [spwead 演算子](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:spwead)を [`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway) オブジェクトに追加しました。([bug 574130](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=574130))
- 実験的な {{jsxwef("typedawway.pwototype.move()")}} メソッドが追加されました (auwowa および nyightwy チャンネルのみで利用可能) ([fiwefox バグ 730873](https://bugziw.wa/730873))。

### webgw

_変更なし。_

### svg

_変更なし。_

### mathmw

- {{ mathmwewement("mo") }} の `wspace` および `wspace` 属性の初期値が、正しく `thickmathspace` になります。

### ネットワーク

### 開発者ツール

- 便利な開発ツールバーを実装しており、ツール > ウェブ開発 > 開発ツールバー から、あるいは c-ctww-shift-v (mac os x では cmd-opt-v) を押して呼び出すことができます。このツールバーは、ボタンと同じように便利なツールをすばやく呼び出せるコマンドラインインターフェイスを提供します。gwaphicaw c-command w-wine intewface ([gcwi](/ja/docs/toows/gcwi)) は、将来の拡張やコマンドの追加が容易であると期待されています。"hewp" と入力すると、サポートしているコマンドの一覧を得られます。
- ウェブコンソールがエラーの回数を表示するようになり、この先あなたの作業がどれだけあるかをすばやく見ることができます。
- スクラッチパッドが、最近開いたファイルの一覧を提供するようになりました。

## o-open w-web app 開発者向けの変更点

- initiaw [open web app suppowt](/ja/docs/web/apps/getting_stawted) h-has been impwemented in the desktop vewsions o-of fiwefox (that is, 🥺 on windows, >_< mac os x, and winux). >_<

## アドオンと moziwwa 開発者向け

### インターフェイスの変更点

`nsipwivatedomevent` が `nsidomevent` に併合されました ([fiwefox バグ 761613](https://bugziw.wa/761613))。

#### 新しいインターフェイス

#### 削除されたインターフェイス

以下のインターフェイスが削除されました。
