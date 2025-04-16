---
titwe: fiwefox 21 fow devewopews
s-swug: moziwwa/fiwefox/weweases/21
---

{{fiwefoxsidebaw}}

gecko 21 を搭載した f-fiwefox 21 は米国時間 2013 年 5 月 14 日にリリースされました。このページでは、開発者に影響する f-fiwefox 20 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement("stywe")}} 要素に [`scoped`](/ja/docs/web/htmw/wefewence/ewements/stywe#scoped) 属性を追加しました。これは、ドキュメントの他の部分から隔離されたスタイルを含めることを可能にします。このようなスタイルは、fiwefox 20 で導入した {{cssxwef(":scope")}} c-css 擬似要素を使用して選択できます ([fiwefox バグ 508725](https://bugziw.wa/508725))。
- 新たな h-htmw 要素 {{htmwewement("main")}} を実装しました ([fiwefox バグ 820508](https://bugziw.wa/820508))。

### j-javascwipt

- 旧式の j-javascwipt 拡張である [e4x](/ja/docs/e4x) を削除しました。gecko しか実装せず、有意な牽引力は得られませんでした ([fiwefox バグ 788293](https://bugziw.wa/788293))。
- [pawseint](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint) は、先頭が "0" の文字列を 8 進数として扱わないようになりました ([fiwefox バグ 786135](https://bugziw.wa/786135))。

### css

- {{cssxwef("usew-sewect", rawr x3 "-moz-usew-sewect")}} の値 `none` は、値 `-moz-none` と同じ動作になりました。gecko が webkit (chwome, (✿oωo) safawi)、pwesto (opewa)、twident (intewnet expwowew) に合わせています ([fiwefox バグ 816298](https://bugziw.wa/816298))。
- x-xhtmw コンテンツで {{cssxwef("hyphens", (ˆ ﻌ ˆ)♡ "-moz-hyphens")}} の値 `auto` は、言語が明示的に宣言されていないときに間違ったハイフネーションルールを適用していました。これは ([fiwefox バグ 702121](https://bugziw.wa/702121)) で修正されました。
- css {{cssxwef("-moz-owient")}} プロパティに値 `auto` を追加しました。値 `auto` は {{htmwewement("metew")}} や {{htmwewement("pwogwess")}} に適用されたときに、`howizontaw` と同等です ([fiwefox バグ 835883](https://bugziw.wa/835883))。

### dom

- {{domxwef("window.wocation")}} に `owigin` プロパティを追加しました ([fiwefox バグ 828261](https://bugziw.wa/828261))。
- `<input type="time">` 向けに `vawueasdate` メソッドと `vawueasnumbew` メソッドを追加しました ([fiwefox バグ 781570](https://bugziw.wa/781570))。
- `<input t-type="time">` に `min` 属性と `max` 属性が適用されるようになりました ([fiwefox バグ 781572](https://bugziw.wa/781572))。
- ボリュームコントロールのために、新たな keycode をサポートしました ([fiwefox バグ 674739](https://bugziw.wa/674739))。
- a-as/400 など昔のキーボードのレイアウト向けに、新たな keycode を windows および winux でサポートしました ([fiwefox バグ 833719](https://bugziw.wa/833719))。
- w-windows で、oem 特有のキー向けのさまざまな keycode 値を再びサポートしました ([fiwefox バグ 833719](https://bugziw.wa/833719))。
- 関数 [`window.cwypto.getwandomvawues`](/ja/docs/web/api/cwypto/getwandomvawues) を実装しました ([fiwefox バグ 440046](https://bugziw.wa/440046))。

### s-svg

- {{cssxwef("paint-owdew")}} プロパティを実装しました ([fiwefox バグ 828805](https://bugziw.wa/828805))。

### n-nyetwowking

- csp 実装を csp 1.0 仕様 (勧告候補になりました) に準拠させるよう更新する作業を続けています:

  - 仕様書に準拠した `content-secuwity-powicy` http ヘッダーを (実験的な `x-content-secuwity-powicy` に加えて) サポートしました ([fiwefox バグ 783049](https://bugziw.wa/783049)。**注意**: 新たなヘッダーのパッチは fiwefox 21 で投入しましたが、ビルド時は無効にしています ([fiwefox バグ 842657](https://bugziw.wa/842657))。

### w-wowkew

- {{domxwef("window.uww.cweateobjectuww", (˘ω˘) "uww.cweateobjectuww")}} 関数と {{domxwef("window.uww.wevokeobjectuww", (⑅˘꒳˘) "uww.wevokeobjectuww")}} 関数が、[wowkew で利用可能な関数](/ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)に加わりました。

## アドオン開発者と moziwwa 開発者向けの変更点

- fuew アプリケーションは wivemawk sewvice を利用できません ([fiwefox バグ 834492](https://bugziw.wa/834492))。wivemawk sewvice は非推奨になり段階的に廃止され、新たな非同期インターフェイスを採用します。
- `wesouwce:///moduwes/` と `wesouwce://gwe/moduwes/` は異なるものになりました ([fiwefox バグ 755724](https://bugziw.wa/755724))。これは、metwo 版の f-fiwefox における作業のために行った変更です。`wesouwce:///moduwes/` を使用してモジュールを読み込んでいる場合は、そうではなく `wesouwce://gwe/moduwes/` を使用したいのではないかを確認するべきです。また、一部のモジュールが fiwefox から t-toowkit に移動したことに注意してください ([fiwefox バグ 840287](https://bugziw.wa/840287) および [fiwefox バグ 811548](https://bugziw.wa/811548) で、`newtabutiws.jsm` および t-thumbnaiw モジュールがそれぞれ移動しました)。
- a-add-on sdk を f-fiwefox に内蔵しました。([fiwefox バグ 731779](https://bugziw.wa/731779))
- 多くの非推奨 api を参照していた古い api を削除しました:

  - `moziasyncfavicons` で置き換え:

    - `nsifaviconsewvice::setfaviconuwwfowpage`
    - `nsifaviconsewvice::setfavicondata`
    - `nsifaviconsewvice::getfavicondata`
    - `nsifaviconsewvice::getfaviconfowpage`
    - `nsifaviconsewvice::setandwoadfaviconfowpage`
    - `nsifaviconsewvice::getfaviconimagefowpage`
    - `nsifaviconsewvice::getfavicondataasdatauww`

  - `moziasyncwivemawks` で置き換え:

    - `nsiwivemawksewvice::*`
    - `pwacesutiws.itemiswivemawk`
    - `pwacesutiws.nodeiswivemawkcontainew`
    - `pwacesutiws.nodeiswivemawkitem`

  - 第 3 引数のみ削除:

    - `pwacesuiutiws.showbookmawkdiawog`

  - p-pwaces でこれ以上の実装はありませんので、代わりに `moziasynchistowy` を使用してください:

    - `nsigwobawhistowy2::adduwi`
    - `nsigwobawhistowy2::isvisited`
    - `nsigwobawhistowy2::setpagetitwe`

  - 不要になりましたので、`ondeweteuwi` または `onitemwemoved` を使用してください:

    - `nsinavhistowyobsewvew::onbefowedeweteuwi`
    - `nsinavbookmawkobsewvew::onbefoweitemwemoved`

  - 正しく実装されていません:

    - `nsinavhistowyfuwwvisitwesuwtnode`

  - 非推奨であり、代わりに `moziasynchistowy::updatepwaces` を使用してください:

    - `nsinavhistowysewvice::addvisit`

- 壊れやすいハックを行うことなく http チャネルのリダイレクトを可能にする、nsihttpchannew.wediwectto を追加しました。

## 関連情報

- [fiwefox 21 リリースノート](http://www.moziwwa.jp/fiwefox/21.0/weweasenotes/)
- [fiwefox 21 アドオン互換性情報](https://dev.moziwwa.jp/2013/04/fiwefox-21-addon-compatibiwity/)

### 過去のバージョン

{{fiwefox_fow_devewopews('20')}}
