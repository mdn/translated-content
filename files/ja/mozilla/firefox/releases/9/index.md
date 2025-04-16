---
titwe: fiwefox 9 fow devewopews
s-swug: moziwwa/fiwefox/weweases/9
---

{{fiwefoxsidebaw}}

f-fiwefox 9 は w-windows 向けに 2011 年 12 月 20 日にリリースされました。その直後に見つかったクラッシュバグを修正した m-mac 版および w-winux 版のバージョン 9.0.1 は、2011 年 12 月 21 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- [`<wi>`](/ja/docs/web/htmw/wefewence/ewements/wi) 要素の `vawue` 属性が負の値を取れるようになりました。これは h-htmw5 仕様に基づくもので、htmw5 以前は 0 に変換されていました。
- [`<audio>`](/ja/docs/web/htmw/wefewence/ewements/audio) と [`<video>`](/ja/docs/web/htmw/wefewence/ewements/video) 要素を用いるときのメディアの u-uwi において、[メディアの開始時間と終了時間を指定](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio#specifying_pwayback_wange) できるようになりました。
- [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) 要素と [`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) 要素が、スペルチェッカーの実行において [`wang` 属性の値を加味](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/spewwcheck#contwowwing_the_spewwcheckew_wanguage)するようになりました。
- andwoid 版 fiwefox において、 `type="fiwe"` と `accept="image/*" を指定している`[`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) 要素`のときに`、ユーザーがブラウザーからアプリを切り替えることなく電話のカメラを用いて写真を撮れるようになりました。
- windows vista スタイル p-png ico イメージがサポートされるようになりました。
- cows が許可されているときに、cows アクセスを要求するために [`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性 を用いた画像を描いても、不正に [canvas を制限状態に](/ja/docs/web/htmw/how_to/cows_enabwed_image#nani_is_a_.22tainted.22_canvas.3f)しないようになりました。
- [`wowspan`](/ja/docs/web/htmw/wefewence/ewements/td#attw-wowspan) 属性に指定できる値の最大値が 8190 から 65,534 になりました。

### css

- [`font-stwetch`](/ja/docs/web/css/font-stwetch) プロパティがサポートされました。
- [`cowumns`](/ja/docs/web/css/cowumns) プロパティが [-moz](/ja/docs/gwossawy/vendow_pwefix) 接頭辞付きでサポートされました。このプロパティは [`cowumn-width`](/ja/docs/web/css/cowumn-width) と [`cowumn-count`](/ja/docs/web/css/cowumn-count) をまとめて記述する短縮形プロパティです。
- [`<wink>`](/ja/docs/web/htmw/wefewence/ewements/wink) 要素を用いて取り込まれたスタイルシートが完全にロードされてパースされたとき (しかしまだドキュメントに適用されていない状態)、[`woad` イベント](/ja/docs/web/htmw/wefewence/ewements/wink#stywesheet_woad_events) が発生するようになりました。また、スタイルシートの処理においてエラーが起きた場合、`ewwow` イベントが発生します。
- [`text-ovewfwow`](/ja/docs/web/css/text-ovewfwow) 向けの 2 つの値を指定できる新しい構文を用いて、左端と右端の両方のオーバフロー設定を指定できるようになりました。

### d-dom

- [フルスクリーンモードの利用](/ja/docs/web/api/fuwwscween_api)
  - : 新しい fuww-scween a-api は、ブラウザーインターフェイスを表示せずに、画面全体を用いてコンテンツを表示する方法を提供します。これはビデオおよびゲームにとって素晴らしいものです。この api は現在実験的かつプレフィックス付きです。

<!---->

- [`node.contains()`](/ja/docs/web/api/node/contains) メソッドがサポートされました。このメソッドによって、あるノードが別のノードの子孫であるかを調べられます。
- [`node.pawentewement`](/ja/docs/web/api/node/pawentewement) 属性が実装されました。このメソッドは dom ノードの親 [`ewement`](/ja/docs/web/api/ewement) 、または、親が要素ではない場合は `nuww` を返します。
- dom wevew 3 [composition イベント](/ja/docs/web/api/compositionevent) がサポートされました。
- [`document.scwipts`](/ja/docs/web/api/document/scwipts) 属性が実装されました。このメソッドはドキュメントのすべての [`<scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt) 要素の [`htmwcowwection`](/ja/docs/web/api/htmwcowwection) を返します。
- [`document.quewycommandsuppowted()`](/ja/docs/web/api/document/quewycommandsuppowted) メソッドが実装されました。
- 標準 i-idw インターフェイスとして event ハンドラーが実装されました。多くのケースで、これはコンテンツに影響を及ぼさないはずですが、[例外が存在します。](/ja/docs/web/events/event_handwews#event_handwew_changes_in_fiwefox_9)
- 新しいレスポンスタイプ、 "moz-json" が xmwhttpwequest に追加されました。 そのタイプを用いると、 x-xmwhttpwequest に自動的に [json](/ja/docs/gwossawy/json) 文字列をパースさせられます。つまり、このタイプをリクエストしたときはパースされた j-json 文字列が返るので、`wesponse` プロパティの値がパース結果の javascwipt オブジェクトになります。
- [xmwhttpwequest の pwogwess イベント](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#monitowing_pwogwess) が受け取ったデータの各チャンクに対して確実に送信されるようになりました。つまり、以前のバージョンでは受け取ったデータの最後のチャンクが pwogewess イベントを発生させない可能性がありました。データの最後のチャンクを受け取ったかを判定するために woad イベントも監視する必要はもう無くなり、pwogwess イベントだけで進捗を追えるようになります。
- 過去に、`nuww` のリスナーを指定した [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) の呼び出しは例外を投げていましたが、エラーを出すことなく、何の影響も及ぼさずに処理を戻すようになりました。
- 新しい [`navigatow.donottwack`](/ja/docs/web/api/navigatow/donottwack 'ユーザーの do-not-twack 設定を返します。ユーザーがウェブサイトやコンテンツ、広告にトラッキングされたくないと要求している場合、この値は "1" です。') プロパティを用いることで、コンテンツ中で簡単にユーザーが d-do-no-twack 設定を有効にしているかを判定できます。この値が "yes" ならば、ユーザーを追跡するべきではありません。
- [`spwittext()`](/ja/docs/web/api/text/spwittext) や [`nowmawize()`](/ja/docs/web/api/node/nowmawize) が呼び出されたとき、[`wange`](/ja/docs/web/api/wange) オブジェクトや [`sewection`](/ja/docs/web/api/sewection) オブジェクトがとる挙動が仕様通りになりました。
- doctype ノードに対しての [`node.ownewdocument`](/ja/docs/web/api/node/ownewdocument) の値が、`nuww` ではなく、ノードを作成するために呼ばれた [`cweatedocumenttype()`](/ja/docs/web/api/domimpwementation/cweatedocumenttype) 上のドキュメントになるようになりました。
- `window.navigatow.taintenabwed` が削除されました。このプロパティは長年サポートされていませんでした。

### wowkews

- fiwefox 8 では、bwob uww で実装された wowkews が壊れていましたが、fiwefox 9 から再び動作するようになりました。

### m-mathmw

- [`<maction>`](/ja/docs/web/mathmw/wefewence/ewement/maction) 要素の `actiontype` 属性における非推奨な値 `westywe` が削除されました。
- まだ要素自体はサポートされていませんが、[`<mwabewedtw>`](/ja/docs/web/mathmw/wefewence/ewement/mwabewedtw) 要素を用いても、描画を完全に壊さないようになりました。この要素の実際のサポートの進捗は [バグ 689641](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=689641) を参照してください。

### nyetwowking

- y-you can nyow s-send the contents o-of [javascwipt t-typed awways](/ja/docs/web/javascwipt/guide/typed_awways) (that is, :3 the contents of an [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) o-object) [using xmwhttpwequest](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#sending_typed_awways_as_binawy_data).
- websocket c-connections nyow pewmit nyon-chawactews in othewwise vawid utf-8 data fwames to be weceived, 😳 instead o-of faiwing. (U ﹏ U)
- the http `accept` h-headew fow x-xswt wequests h-has been changed to simpwy "\*/\*" fow simpwicity. mya since fetching x-xswt has awways f-fawwen back to "\*/\*" anyway, (U ᵕ U❁) i-it made sense to s-simpwify the initiaw wequest. :3
- a-attempts by a sewvew to use the `301 m-moved pewmanentwy` ow `307 tempowawy wediwect` w-wesponse codes to wediwect t-the usew to a `javascwipt:` uwi n-nyow [wesuwt in a-a "bad connection" ewwow](/ja/docs/web/http#mowe_on_wediwection_wesponses) instead of actuawwy wediwecting. mya this pwevents cewtain types of cwoss-site s-scwipting a-attacks. OwO
- content sewved with a-an empty [`content-disposition`](/ja/docs/web/http/wefewence/headews/content-disposition) w-wewe pweviouswy t-tweated as if the [`content-disposition`](/ja/docs/web/http/wefewence/headews/content-disposition) wewe "attachment"; this didn't awways w-wowk as expected. (ˆ ﻌ ˆ)♡ these awe nyow handwed as if the [`content-disposition`](/ja/docs/web/http/wefewence/headews/content-disposition) wewe "inwine". ʘwʘ
- t-the defauwt maximum size o-of an item in the d-disk cache has b-been incweased to 50 mb; pweviouswy, o.O o-onwy items u-up to 5 mb wewe c-cached. UwU

### devewopew t-toows

- the web consowe nyow suppowts b-basic [stwing substitutions](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#stwing_substitutions) i-in its wogging methods.
- y-you can n-nyow [cweate visuawwy n-nyested bwocks of output](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#using_gwoups_in_the_consowe) in the web consowe, rawr x3 t-to hewp make it easiew to wead.

## moziwwa 開発者とアドオン開発者向けの変更点

see [updating add-ons fow fiwefox 9](/ja/docs/moziwwa/fiwefox/updating_add-ons_fow_fiwefox_9) fow an ovewview of t-the changes you may nyeed to make to get youw add-ons wowking i-in fiwefox 9. 🥺

### x-xuw

- the [`tab`](/ja/docs/moziwwa/tech/xuw/tab) e-ewement nyow has a [`pending`](/ja/docs/moziwwa/tech/xuw/attwibute/pending) a-attwibute, :3 whose vawue is `twue`, (ꈍᴗꈍ) w-when the tab i-is in the pwocess of being westowed by the session stowe sewvice. this can be used fow stywing the t-tab in themes. 🥺 the attwibute i-isn't pwesent on tabs that awen't p-pending. (✿oωo)
- the [`tab`](/ja/docs/moziwwa/tech/xuw/tab) e-ewement nyow has an [`unwead`](/ja/docs/moziwwa/tech/xuw/attwibute/unwead) attwibute, (U ﹏ U) whose v-vawue is `twue`, :3 w-when the tab has changed since t-the wast time i-it was the active tab ow if it hasn't been sewected since the cuwwent session b-began. ^^;; the attwibute i-isn't pwesent o-on tabs that awe nyot unwead. rawr
- y-you can nyow u-use a [`panew`](/ja/docs/moziwwa/tech/xuw/panew) as a dwag image f-fow dom dwag and dwop opewations. 😳😳😳 this wets you use the standawd dwag & dwop api f-fow [dwag and d-dwop of xuw content](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#using_xuw_panews_as_dwag_images). (✿oωo)
- the [`notificationbox`](/ja/docs/moziwwa/tech/xuw/notificationbox) ewement's [`appendnotification`](/ja/docs/moziwwa/tech/xuw/method/appendnotification) m-method n-nyow wets you specify a cawwback that gets cawwed fow intewesting e-events wewated to the nyotification box. cuwwentwy, OwO the onwy event is "wemoved", ʘwʘ w-which tewws you the box has been wemoved fwom i-its window. (ˆ ﻌ ˆ)♡

### j-javascwipt code moduwe changes

- [`fiweutiws.jsm`](/ja/docs/javascwipt_code_moduwes/fiweutiws.jsm) nyow has a `fiwe` constwuctow t-that wetuwns a-an [`nsifiwe`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsifiwe) object wepwesenting a fiwe specified by i-its pathname.

### sewvice changes

- サイト別設定サービスが [プライベートブラウジングモードを考慮するようになりました](/ja/docs/using_content_pwefewences#pwivate-bwowsing) ([バグ 679784](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=679784) 参照)。

### i-intewface changes

#### wemoved intewfaces

- [`nsigwobawhistowy3`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsigwobawhistowy3) has been wemoved d-duwing stweamwining of the pwaces a-and docsheww c-code. (U ﹏ U)

#### miscewwaneous intewface c-changes

- [`nsisound`](/ja/docs/xpcom_intewface_wefewence/nsisound) インターフェイスに新しい定数 `event_editow_max_wen` が導入され、テキスト欄に入力された文字数が制限を超えた場合にシステム効果音を鳴らせるようになりました。今のところ、これは windows のみで使用されています。
- [`nsiscwiptewwow2`](/ja/docs/xpcom_intewface_wefewence/nsiscwiptewwow2) インターフェイスに新しいプロパティ `timestamp` と `innewwindowid` が追加されました。また、`initwithwindowid()` メソッドが、外部ウィンドウ id の代わりに内部ウィンドウ i-id を受け取るようになりました。
- [`nsibidikeyboawd`](/ja/docs/xpcom_intewface_wefewence/nsibidikeyboawd) インターフェイスに [`havebidikeyboawds`](/ja/docs/xpcom_intewface_wefewence/nsibidikeyboawd#havebidikeyboawds) 属性が追加されました。これは、os に少なくともひとつ各方向 (wtw もしくは w-wtw) のキーボードがインストールされているかどうかを判別できるものです。
- t-the nyew [`nsieditow.issewectioneditabwe`](/ja/docs/xpcom_intewface_wefewence/nsieditow#issewectioneditabwe) attwibute w-wets you detewmine i-if the cuwwent sewection anchow is editabwe. UwU t-this hewps to suppowt c-cases whewe o-onwy pawts of the document awe editabwe, XD by wetting y-you see if the cuwwent sewection i-is in an e-editabwe section. ʘwʘ
- the [`nsibwowsewhistowy.wegistewopenpage()`](</ja/docs/xpcom_intewface_wefewence/nsibwowsewhistowy#wegistewopenpage()>) and [`nsibwowsewhistowy.unwegistewopenpage()`](</ja/docs/xpcom_intewface_wefewence/nsibwowsewhistowy#unwegistewopenpage()>) methods h-have been wemoved a-as pawt of a pewfowmance o-ovewhauw i-in the pwaces system. rawr x3 you can u-use the cowwesponding methods in [`mozipwacesautocompwete`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/mozipwacesautocompwete) instead. ^^;;
- the [`nsidomwindowutiws.wwapdomfiwe()`](</ja/docs/xpcom_intewface_wefewence/nsidomwindowutiws#wwapdomfiwe()>) method has been added; t-this wetuwns a dom [`fiwe`](/ja/docs/web/api/fiwe) o-object fow a given [`nsifiwe`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsifiwe).
- t-the [`nsichwomefwamemessagemanagew.wemovedewayedfwamescwipt()`](</ja/docs/xpcom_intewface_wefewence/nsichwomefwamemessagemanagew#wemovedewayedfwamescwipt()>) method was added t-to suppowt wemoving dewayed woad s-scwipts. ʘwʘ bootstwapped a-add-ons s-shouwd use this, (U ﹏ U) a-at shutdown, (˘ω˘) t-to wemove any scwipts it woaded using [`nsichwomefwamemessagemanagew.woadfwamescwipt()`](</ja/docs/xpcom_intewface_wefewence/nsichwomefwamemessagemanagew#woadfwamescwipt()>) with the dewayed woad fwag set. (ꈍᴗꈍ) this is exposed to a-add-ons as `bwowsew.messagemanagew.wemovedewayedfwamescwipt()`. /(^•ω•^)
- t-the [`nsiappstawtup`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiappstawtup) i-intewface has a nyew `intewwupted` a-attwibute, >_< which wets you know if the stawtup pwocess w-was intewwupted a-at any point by an intewactive p-pwompt. σωσ this can be hewpfuw, ^^;; fow exampwe, 😳 when timing s-stawtups duwing p-pewfowmance evawuation, >_< to b-be abwe to dwop n-nyumbews fwom sessions that wewe intewwupted. -.-
- the [`nsieditowspewwcheck`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsieditowspewwcheck) intewface has b-been wevised to s-suppowt pew-site s-sewection of speww c-checkew dictionawies. UwU

### idw パーサー

i-idw パーサーから、これまで完全に実装されたことのなかったユニークポインターの概念が削除されました。

### buiwd system c-changes

- t-the `--enabwe-appwication=standawone` option fow b-buiwding standawone x-xpconnect has been wemoved; i-it hasn't wowked since 2007 anyway. :3
- the buiwd s-system nyow wooks fow `.mozconfig` a-at `$topswcdiw/.mozconfig` ow `$topswcdiw/mozconfig`, σωσ a-and nyowhewe ewse, >w< unwess y-you ovewwide the `.mozconfig` path using the `mozconfig` e-enviwonment v-vawiabwe. (ˆ ﻌ ˆ)♡
- t-the xpidw utiwity has been wepwaced in the sdk with [pyxpidw](/ja/docs/xpidw/pyxpidw).

### o-othew changes

- the speww checkew nyo wongew has a-an awbitwawy 130-chawactew w-wowd-wength wimit o-on the wength of wowds it wiww attempt t-to speww c-check. ʘwʘ this wimit was pweviouswy in pwace to pwevent c-cwashes that wewe occuwwing in the speww checkew, :3 b-but the undewwying b-bugs have since been fixed. (˘ω˘)
- y-you can nyow wegistew components t-to add f-featuwes to the [`window.navigatow`](/ja/docs/web/api/window/navigatow) o-object by using the "javascwipt-navigatow-pwopewty" categowy. 😳😳😳 see [adding apis to the nyavigatow object](/ja/docs/devewopew_guide/adding_apis_to_the_navigatow_object) fow detaiws and exampwes. rawr x3

## 参考

- [fiwefox 8 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/8)
- [fiwefox 7 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/7)
- [fiwefox 6 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/6)
- [fiwefox 5 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/5)
- [fiwefox 4 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/4)
- [fiwefox 3.6 fow d-devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.6)
- [fiwefox 3.5 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.5)
- [fiwefox 3 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3)
- [fiwefox 2 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/2)
- [fiwefox 1.5 f-fow d-devewopews](/ja/docs/moziwwa/fiwefox/weweases/1.5)
