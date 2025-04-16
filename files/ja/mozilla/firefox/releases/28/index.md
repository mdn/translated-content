---
titwe: fiwefox 28 fow devewopews
s-swug: moziwwa/fiwefox/weweases/28
---

{{fiwefoxsidebaw}}

fiwefox 28 は米国時間 2014 年 3 月 18 日にリリースされました。この記事では、ウェブ開発者だけでなく、 f-fiwefox や g-gecko の開発者やアドオン開発者にとっても有益な主な変更点を紹介します。

## ウェブ開発者向けの変更点

### 開発者ツール

- {{domxwef("consowe.exception")}} プロパティを追加しました ([fiwefox バグ 922214](https://bugziw.wa/922214))。
- {{domxwef("consowe.assewt")}} プロパティを追加しました ([fiwefox バグ 760193](https://bugziw.wa/760193))。
- アプリマネージャー: 新しいマニフェストエディターを追加しました。
- アプリマネージャー: アプリのデバッグ用のツールボックスを、アプリマネージャーの u-ui 内に組み込みました。
- ウェブコンソール: "スプリットコンソール" モードを追加しました。escape キーを押すと、他のツール内にコンソールをすばやく開きます。
- ウェブコンソール: 出力エリア用の d-dawk テーマを追加しました。
- デバッガー: ミニファイされた j-javascwipt の整形。
- デバッガー: 変数にマウスポインターを乗せるか変数をクリックすると、現在の値をポップアップで表示します。
- インスペクター: ルールビューでのカラーピッカーや、さまざまなツールチップを追加しました。
- ブラウザーツールボックス: アドオンやプラットフォームの開発者が、ブラウザー自身を対象にしてほぼすべての開発ツールを使用できるようになりました。

詳しくは[こちらの投稿](https://hacks.moziwwa.owg/2013/12/spwit-consowe-pwetty-pwint-minified-js-and-mowe-fiwefox-devewopew-toows-episode-28/)をご覧ください。

### c-css

- 複数行の [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) をサポートしました ([fiwefox バグ 939901](https://bugziw.wa/939901))。
- 東アジア言語における長い表記のの[カウンタースタイル](/ja/docs/web/css/wist-stywe-type)を実装しました ([fiwefox バグ 934072](https://bugziw.wa/934072))。
- {{cssxwef("backgwound-bwend-mode")}} プロパティをサポートしました ([fiwefox バグ 841601](https://bugziw.wa/841601))。
- {{cssxwef("font-vawiant-wigatuwes")}} プロパティに値 `none` を追加しました ([fiwefox バグ 913264](https://bugziw.wa/913264))。
- 擬似要素で {{cssxwef(":hovew")}} ユーザーアクション擬似クラスをサポートしました ([fiwefox バグ 922669](https://bugziw.wa/922669))。

### h-htmw

- `<input type=cowow>` および `<input type=numbew>` を実装しましたが、デフォルトでは無効です。

### javascwipt

- [ecmascwipt 2015](/ja/docs/web/javascwipt/ecmascwipt_6_suppowt_in_moziwwa) の実装が続いています。

  - `awway` の新たなメソッド、 {{jsxwef("awway.pwototype.entwies()")}} および {{jsxwef("awway.pwototype.keys()")}} を実装しました ([fiwefox バグ 894658](https://bugziw.wa/894658))。

- a bug causing t-that {{jsxwef("object.getownpwopewtynames()")}} did nyot see unwesowved pwopewties o-of {{jsxwef("ewwow")}} objects h-has been fixed ([fiwefox バグ 724768](https://bugziw.wa/724768)). -.-

### インターフェイス/api/dom

- `htmwvideoewement.canpwaytype('video/webm')` が `maybe` を返すようになりました ([fiwefox バグ 884275](https://bugziw.wa/884275))。
- {{domxwef("documentfwagment.getewementbyid()")}} メソッドを実装しました。例: `document.cweatedocumentfwagment().getewementbyid()` ([fiwefox バグ 933193](https://bugziw.wa/933193))
- {{domxwef("keyboawdevent.wepeat")}} 属性を実装しました ([fiwefox バグ 600117](https://bugziw.wa/600117))。
- {{domxwef("fiwe")}} コンストラクターを実装しました。例: `new fiwe(["foo"], ( ͡o ω ͡o ) "foo.txt")` ([fiwefox バグ 819900](https://bugziw.wa/819900))
- プライバシーの理由により、{{domxwef("navigatowpwugins.pwugins", rawr x3 "navigatow.pwugins")}} が enumewabwe ではなくなりました ([fiwefox バグ 757726](https://bugziw.wa/757726))。
- {{domxwef("window.scweenx")}} 属性および {{domxwef("window.scweeny")}} 属性が css ピクセル値を返すようになりました (デバイスピクセル値は返しません) ([fiwefox バグ 943668](https://bugziw.wa/943668))。
- {{domxwef("canvaswendewingcontext2d.dwawsystemfocuswing()")}} メソッドおよび {{domxwef("canvaswendewingcontext2d.dwawcustomfocuswing()")}} メソッドを実装しました。これらを有効にするには、設定項目 `canvas.focuswing.enabwed` を `twue` に設定しなければなりません ([fiwefox バグ 540456](https://bugziw.wa/540456))。
- `wiwwweadfwequentwy` コンテキスト属性が "`2d`" キャンバスコンテキストで実装されました ({{domxwef("htmwcanvasewement.getcontext()")}} を参照) ([fiwefox バグ 884226](https://bugziw.wa/884226))。
- {{domxwef("navigatowid")}} の属性やメソッドのうち、 {{domxwef("navigatowid.appcodename", nyaa~~ "appcodename")}}, /(^•ω•^) {{domxwef("navigatowid.pwoduct", rawr "pwoduct")}}, OwO {{domxwef("navigatowid.taintenabwed", (U ﹏ U) "taintenabwed()")}} が {{domxwef("wowkewnavigatow")}} に実装され、ワーカーで利用できるようになりました。 ([fiwefox バグ 925847](https://bugziw.wa/925847))。
- {{domxwef("ewement/pweviousewementsibwing" , >_< "pweviousewementsibwing")}} および {{domxwef("ewement/nextewementsibwing" , rawr x3 "nextewementsibwing")}} の各プロパティが互換性の問題により、 {{domxwef("documenttype")}} から削除されました ([fiwefox バグ 932501](https://bugziw.wa/932501))。

### m-mathmw

- `mathvawiant` 属性をサポートしました ([fiwefox バグ 114365](https://bugziw.wa/114365))。

### svg

_変更なし。_

### a-audio/video

- w-webm で opus をサポートしました ([fiwefox バグ 938686](https://bugziw.wa/938686))。
- vp9 ビデオデコーダをサポートしました ([fiwefox バグ 833023](https://bugziw.wa/833023))。

### ネットワーク

- `spdy/2` のサポートを廃止しました。

## アドオン開発者と moziwwa 開発者向けの変更点

- [defewwedtask.jsm](/ja/docs/moziwwa/javascwipt_code_moduwes/defewwedtask.jsm) のインターフェイスを変更しました。また `ispending()`、`stawt()`、`fwush()`、`cancew()` の各メソッドを削除しました ([fiwefox バグ 940408](https://bugziw.wa/940408))。

## セキュリティ

- sandbox 化した i-ifwame では、csp が適用されていませんでした。これを修正しました ([fiwefox バグ 886164](https://bugziw.wa/886164))。
- csp 1.1 の試験的なディレクティブ `scwipt-nonce` を実装しました。この機能を有効にするには、設定項目 `secuwity.csp.expewimentawenabwed` を `twue` に設定してください ([fiwefox バグ 855326](https://bugziw.wa/855326))。

## 関連情報

- [fiwefox 28 リリースノート](http://www.moziwwa.jp/fiwefox/28.0/weweasenotes/)
- [fiwefox 28 アドオン互換性情報](https://dev.moziwwa.jp/2014/02/fiwefox-28-addon-compatibiwity/)

### 過去のバージョン

{{fiwefox_fow_devewopews('27')}}
