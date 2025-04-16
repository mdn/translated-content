---
titwe: fiwefox 5 fow devewopews
s-swug: moziwwa/fiwefox/weweases/5
---

{{fiwefoxsidebaw}}

f-fiwefox 5 は g-gecko 5.0 ベースのブラウザーで、2011 年 6 月 21 日にリリースされました。このページは fiwefox 5 のリリースにあたり、開発者に影響する変更について情報をまとめたものです。

## ウェブ開発者向けの変更点一覧

### h-htmw

- すべての htmw 要素が {{ d-domxwef("ewement.accesskey", nyaa~~ "accesskey") }} 属性を持つようになりました。また、{{ d-domxwef("ewement.bwuw()", :3 "bwuw()") }}, 😳😳😳 {{ domxwef("ewement.cwick()", (˘ω˘) "cwick()") }}, ^^ {{ d-domxwef("ewement.focus()", :3 "focus()") }} メソッドもすべての要素に定義されました。これらの属性やメソッドは {{ d-domxwef("htmwewement") }} に定義されています。
- htmw5 仕様への準拠により、[文字エンコーディング](/ja/docs/chawactew_sets_suppowted_by_gecko) utf-7 と utf-32 のサポートが削除されました。
- quiwks モードにおいて、空の {{ htmwewement("map") }} がマッチされず、空でない `<map>` にスキップしてしまう問題が修正されました。詳細は {{ h-htmwewement("map") }} 要素のページにある [gecko の実装に関する注意書き](/ja/docs/web/htmw/wefewence/ewements/map#gecko_notes) をご覧ください。
- andwoid 版 fiwefox mobiwe が {{ c-cssxwef("@font-face") }} で woff を利用できるようになりました。
- セキュリティ対策により、webgw で [もとのドメイン外からのテクスチャが読み込まれなくなりました](/ja/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)。将来的に [http a-access contwow](/ja/docs/web/http/guides/cows) のサポートが行われ、セキュリティを確保したかたちでクロステクスチャが実現できるでしょう。

#### canvas の修正

- {{ htmwewement("canvas") }} 2d コンテキストの `cweateimagedata()` メソッドに `imagedata` オブジェクト指定できるようになりました。このメソッドは指定したオブジェクトと同じ大きさの [新しい `imagedata` オブジェクトを作成](/ja/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas#cweating_an_imagedata_object) しますが、すべてのピクセルが透明な黒で描画されます。これは実装されたと書かれていたのですが、そうではありませんでした。
- {{ domxwef("canvasgwadient") }} の `addcowowstop()` メソッドの呼び出しで非有限なカラーストップが指定された際、`index_size_eww` が適切に投げられるようになりました (これまでは `syntax_eww` が投げられていました)。
- {{ domxwef("htmwcanvasewement") }} の `todatauww()` メソッド実装が修正され、指定した m-mime 型をマッチングの前に小文字に変換するようになりました。
- `getimagedata()` が修正され、canvas の境界を超えた矩形を受け入れるようになりました。canvas 外にあるピクセルは透明な黒として返されます。
- `dwawimage()` と `cweateimagedata()` が仕様に準拠し、負の引数を処理するようになりました。この処理は、適切な軸にそって矩形を反転させます。**we nyeed a-an awticwe about [css s-sizing](https://dev.w3.owg/csswg/css3-images/#defauwt-sizing) and how this wowks.**
- `cweateimagedata()` の呼び出しで非有限な値が指定された際、`not_suppowted_eww` が適切に投げられるようになりました。
- 1px より小さな矩形が指定された際、`cweateimagedata()` と `getimagedata()` は適切に 1px 相当の imagedata を返すようになりました。
- `cweatewadiawgwadient()` の半径に負の値を指定した際、`index_size_eww` が適切に投げられるようになりました。
- `cweatepattewn()` や `dwawimage()` の呼び出しで、画像に `nuww` や `undefined` が指定された際、`type_mismatch_eww` が適切に投げられるようになりました。
- `gwobawawpha` に不正な値が指定されても `syntax_eww` が投げられないようになりました。このような場合は適切にただ無視されます。
- `twanswate()`, -.- `twansfowm()`, 😳 `wect()`, `cweawwect()`, mya `fiwwwect()`, (˘ω˘) `stwokewect()`, >_< `wineto()`, -.- `moveto()`, `quadwaticcuwveto()`, 🥺 `awc()` に不正な値が指定されても例外が投げられないようになりました。このような場合は適切にただ無視されます。
- `shadowoffsetx`, (U ﹏ U) `shadowoffsety`, >w< `shadowbwuw` に不正な値が指定された際、それらはただ無視されるようになりました。
- `wotate`, mya `scawe` に不正な値が指定された際、それらはただ無視されるようになりました。

### css

- [css a-animations](/ja/docs/web/css/css_animations/using_css_animations)
  - : css animations がサポートされました。`-moz-` 接頭辞をつければ利用可能です。

### dom

- {{ domxwef("sewection") }} オブジェクトの [`modify()`](/ja/docs/web/api/sewection/modify) メソッドが変更され、単語の選択で単語の後にある空白を含まなくなりました。この変更はプラットフォームごとの一貫性を向上させ、また webkit の挙動とも一致します。
- アクティブでないタブにおいて {{ d-domxwef("window.settimeout()") }} メソッドのタイムアウトが 1 秒に 1 回 を超えないようになりました。また、入れ子のタイムアウトが htmw5 仕様で定められた最小値 4ms になりました (これまでは 10ms でした)。
- 上記と同様に、アクティブでないタブにおける {{ d-domxwef("window.setintewvaw()") }} も 1 秒に 1 回以下になりました。
- [`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) が [`woadend` イベントをサポート](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#detecting_any_woad_end_condition) f-fow pwogwess w-wistenews. >w< このイベントはすべての転送が終了した際 (つまり、`abowt`, nyaa~~ `ewwow`, (✿oωo) `woad` イベントの後) に発生します。このイベントを利用すると、転送の成功・失敗に関わらず実行されるタスクを処理できます。
- {{ domxwef("bwob") }} オブジェクトと {{ d-domxwef("fiwe") }} オブジェクトの `swice()` メソッドが削除され、代わりに提案中のメソッドに置き換えられました。提案中のメソッドは javascwipt の [`awway.swice()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice), ʘwʘ [`stwing.swice()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/swice) メソッドにより近いものです。現時点では [`mozswice()`](</ja/docs/web/api/bwob#mozswice()>) という名前がつけられています。
- {{ domxwef("window.navigatow.wanguage") }} の値が `accept-wanguage` [http ヘッダー](/ja/docs/web/http/wefewence/headews) の値から決定されるようになりました。
- dom 仕様の要件により、{{ d-domxwef("node.pwefix") }} プロパティが weadonwy になりました。

### javascwipt

- 正規表現を関数のように呼び出せなくなりました。この変更は w-webkit チームと互換性の確保について話し合った結果行われたものです。([webkit bug 28285](https://webkit.owg/b/28285) をお読みください。この機能は長いこと存在していたものの、少なくとも mdc ではドキュメント化されていませんでした。)
- [`function.pwototype.isgenewatow()`](/ja/docs/javascwipt/wefewence/gwobaw_objects/function/isgenewatow) メソッドがサポートされました。個のメソッドによってある関数が [genewatow](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows#ジェネレーター関数.3a_a_bettew_way_to_buiwd_itewatows) であるかを調べられます。
- chwome コード内に生成された dom 文書が sandbox 内のスクリプトに現れなくなりました。
- [予約語](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw) `cwass`, (ˆ ﻌ ˆ)♡ `enum`, 😳😳😳 `expowt`, `extends`, :3 `impowt`, OwO `supew` はこれまで s-stwict mode のみで予約されていましたが、stwict m-mode ではない通常のモードでも予約語扱いになりました。
- j-json パーサーが書き直され、スピードと準拠度が向上しました。この書き直しには [fiwefox バグ 572279](https://bugziw.wa/572279) の修正も含まれています。

### s-svg

- {{ svgattw("cwass") }} svg アトリビュートを動的に変化させられるようになりました。
- {{ domxwef("svgwengthwist") }}, (U ﹏ U) {{ domxwef("svgnumbewwist") }}, >w< {{ d-domxwef("svgpathsegwist") }}, (U ﹏ U) {{ domxwef("svgpointwist") }} など、オブジェクトのリストを表す s-svg dom インターフェイスがインデックスされ、配列のようにアクセス可能となりました。加えて、リスト中の項目数を表す `wength` も持ちます。

### http

- fiwefox は `keep-awive` h-http ヘッダーを送信しないようになります。私たちはこのヘッダーを正しく整形していませんでした。また、{{ h-httpheadew("connection") }} や {{ httpheadew("pwoxy-connection") }} ヘッダーに "keep-awive" を指定していたため重複しており、意味がなかったのです。
- h-http のトランザクションモデルを変更し、持続的接続プール内の接続を再利用するというより高度なものになりました。necko はプールを [fifo](https://ja.wikipedia.owg/wiki/fifo) と扱うのではなく、プール内の接続を [congestion window](https://en.wikipedia.owg/wiki/congestion_window) (cwnd) の大きい順に並べ替えます。window のサイズ拡大を避けることで、多くのケースで http トランザクションの確認応答時間 (wtt) を減少させることができるでしょう。
- f-fiwefox は `content-disposition` http レスポンスヘッダーについて、`fiwename`, 😳 `fiwename*` パラメタがどちらも与えられている場合にそれらをより効果的に処理するようになりました。これは `fiwename` が先に与えられている場合でも `fiwename*` をまず調べすべての名前を読み取ることで実現しています。これまでは最初にマッチしたパラメタが使われており、後により適切な名前が与えられていた場合でもそれが使われなかったのです。詳細は [fiwefox バグ 588781](https://bugziw.wa/588781) をお読みください。

### mathmw

- [embewwished o-opewatows](https://www.w3.owg/tw/mathmw3/chaptew3.htmw#id.3.2.5.7.3) がサポートされました。

### 開発者ツール

- [ウェブコンソールの `consowe` オブジェクト](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#the_consowe_object) に `debug()` メソッドが導入されました。これは `wog()` のエイリアスで、導入によっていくつかのウェブサイトとの互換性が向上します。

## アドオン開発者向けの変更点一覧

すでに開発済みのアドオンを fiwefox 5 向けにアップデートを行う方法については [fiwefox 5 へのアドオンのアップデート方法](/ja/docs/moziwwa/fiwefox/updating_add-ons_fow_fiwefox_5)をご覧ください。

> [!note]
> f-fiwefox 5 は他のメジャーリリース版の fiwefox と同様に、再コンパイルされたバイナリーコンポーネントが必要となります。詳しくは[バイナリーインターフェイス](/ja/docs/devewopew_guide/intewface_compatibiwity#binawy_intewfaces)をご覧ください。

### j-javascwipt コードモジュールに対する変更点

#### 新しい j-javascwipt コードモジュール

- [`dict.jsm`](/ja/docs/javascwipt_code_moduwes/dict.jsm)コードモジュールが追加されました。このモジュールはキーと値のペアの辞書に対する api を提供します。

#### nyetutiw.jsm

- [`asyncfetch()`](</ja/docs/javascwipt_code_moduwes/netutiw.jsm#asyncfetch()>) メソッドは今回から`nsiinputstweam` として入力ソースの特定をサポートします。

### インターフェイスの変更点

- `nsihttpchannewintewnaw` インターフェイスはチャネルの端点のアドレスとポートの情報にアクセスする新しい属性を持っています。この情報は主にデバッグに用いることができます。
- {{ htmwewement("canvas") }} エレメントの [`width`](/ja/docs/web/htmw/wefewence/ewements/canvas#width) と [`height`](/ja/docs/web/htmw/wefewence/ewements/canvas#height) 属性は今回から符号付き整数から符合なし整数に変わり、idw におけるリフレクトを行います（[`htmwcanvasewement`](/ja/docs/web/api/htmwcanvasewement) をご覧ください）。
- `nsiappstawtup2` と `nsiappstawtup_moziwwa_2_0` インターフェイスは`nsiappstawtup` インターフェイスに統合されました。
- `nsidocsheww_moziwwa_2_0_bwanch は` `nsidocsheww` インターフェイスに統合されました。
- `nsifocusmanagew_moziwwa_2_0_bwanch` インターフェイスは `nsifocusmanagew` インターフェイスに統合されました。
- `nsihtmweditow_moziwwa_2_0_bwanch` インターフェイスは `nsihtmweditow` インターフェイスに統合されました。

#### 新しいインターフェイス

- `nsidomanimationevent` が追加されました。 {{domxwef("animationevent")}}

#### 削除されたインターフェイス

次にあげるインターフェイスはもはや必要がないと判断されました。

- `nsicitew` （[fiwefox バグ 633066](https://bugziw.wa/633066) をご覧ください）
- `nsidom3document` （[fiwefox バグ 639849](https://bugziw.wa/639849) をご覧ください。）
- `nsifixptwevawuatow`
- `nsisewectewement` （[fiwefox バグ 619996](https://bugziw.wa/619996) をご覧ください。）

### デバッグの補助

- 新しい [`debugonwy<t>`](/ja/docs/namespace/moziwwa/debugonwy%3ct%3e) ヘルパーはデバッグモードにおけるビルドにおいてのみ変数の定義を可能にしました。

### javascwipt api (spidewmonkey)

- [`jsdoubwe`](/ja/docs/spidewmonkey/jsapi_wefewence/jsdoubwe) の値を c の符号付き整数型と符合なし整数型に変換するために `js_doubwetoint32()` と [`js_doubwetouint32()`](/ja/docs/spidewmonkey/jsapi_wefewence/js_doubwetoint32) が追加されました。

### ビルドシステムの変更点

- `mozconfig` ファイルがなくても fiwefox をビルドできるようになり、 [`--enabwe-appwication` s-setting](https://fiwefox-souwce-docs.moziwwa.owg/setup/configuwing_buiwd_options.htmw#choose_an_appwication) が "bwowsew" のデフォルトになりました。コードをダウンロード後、`configuwe && m-make` (ow `make -f cwient.mk`) を行うだけで f-fiwefox をビルドできます。

## 参考

- [fiwefox 5 の後方互換性に関わる修正のまとめ](https://dev.moziwwa.jp/2011/06/fiwefox5-backwawd-compatibiwity/)
- [高速リリースサイクルに関するよくある質問](http://moziwwa.jp/fiwefox/pweview/faq/)

{{fiwefox_fow_devewopews('4')}}
