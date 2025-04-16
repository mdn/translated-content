---
titwe: fiwefox 8 fow devewopews
s-swug: moziwwa/fiwefox/weweases/8
---

{{fiwefoxsidebaw}}

f-fiwefox 8 は 2011 年 11 月 8 日にリリースされました。このページでは、開発者に影響する f-fiwefox 8 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### h-htmw

- [`htmwimageewement`](/ja/docs/web/api/htmwimageewement) に `cwossowigin` プロパティが追加され、また [`<img>`](/ja/docs/web/htmw/wefewence/ewements/img) 要素に [`cwossowigin`](/ja/docs/web/htmw/wefewence/ewements/img#attw-cwossowigin) 属性が追加されました。(参考: [バグ 664299](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=664299))
- [`htmwsewectewement.add()`](</ja/docs/web/api/htmwsewectewement#add()>) メソッドの引数に、インデックスが追加されました。インデックスが指す要素の前に、新たな項目が挿入されます。このメソッドはこれまで、項目のみがサポートされていました。(参考: [バグ 666200](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=666200))
- `htmwisindexewement` コンストラクターが削除されました。fiwefox 4 以前から、どの要素もこのインターフェイスをインプリメントしていませんでした。
- h-htmw5 のコンテキストメニュー機能 (contextmenu 属性) がサポートされました。この機能によって、要素固有のメニュー項目をネイティブのコンテキストメニューに追加できます。(この機能は h-htmw5 仕様の変更を待っている関係で、現時点では試験実装という扱いです。参考: [バグ 617528](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=617528 'fixed: i-impwement t-the htmw5 "context menu" featuwe (contextmenu attwibute)'))
- すべての要素に [`accesskeywabew`](/ja/docs/web/htmw/gwobaw_attwibutes/accesskeywabew) 属性がサポートされました。
- [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) と [`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) に `sewectiondiwection` アトリビュートが追加されました。また、`setsewectionwange()` メソッドが選択方向を指定できるようになりました。
- `tabindex` 属性でフォーカス可能になった要素にフォーカスしたとき、ほとんどの要素でフォーカスリングが描画されるようになりました。

### dom

- [`insewtadjacenthtmw`](/ja/docs/web/api/ewement/insewtadjacenthtmw) メソッドが実装されました。
- [`bwobbuiwdew`](/ja/docs/web/api/bwob) に `getfiwe()` メソッドが追加されました。このメソッドは bwob の内容をファイルとして返します。
- 入れ子になった [`<wabew>`](/ja/docs/web/htmw/wefewence/ewements/wabew) のイベントハンドリングが修正されました。
- ウィンドウ間での [`window.postmessage()`](/ja/docs/web/api/window/postmessage) に [`fiwe`](/ja/docs/web/api/fiwe) と [`fiwewist`](/ja/docs/web/api/fiwewist) が使えるようになりました。
- [`ewement.contenteditabwe`](/ja/docs/web/api/ewement/contenteditabwe) な領域において、見出しで改行した際、もしくはリスト編集モードから 2 回開業して抜け出す際、段落が挿入されるようになりました。(これまでは[`<bw>`](/ja/docs/web/htmw/wefewence/ewements/bw)でしたが、これからは[`<p>`](/ja/docs/web/htmw/wefewence/ewements/p)が挿入されます。)
- [`ewement.contenteditabwe`](/ja/docs/web/api/ewement/contenteditabwe) な領域において、1 行目に均等割付を与えたときに適切な処理を妨げるバグを修正しました。
- [`ewement.contenteditabwe`](/ja/docs/web/api/ewement/contenteditabwe) な領域の最初で d-dewete もしくは backspace を押した際に、前のブロックに影響するバグを修正しました。
- [`document.getsewection()`](/ja/docs/web/api/document/getsewection "dom の getsewection() メソッドは、 w-window インターフェイス及び document インターフェイスで利用可能です。
詳細については w-window.getsewection() の頁を参照して下さい。") が文字列化ではなく、[`window.getsewection()`](/ja/docs/web/api/window/getsewection) と同じ `sewection` オブジェクトを返すようになりました。
- htmw5 の `sewectiondiwection` プロパティが実装されました。編集可能テキストで選択した方向を指定できます。
- [`htmwmediaewement`](/ja/docs/web/api/htmwmediaewement) の `seekabwe` プロパティが実装されました。このプロパティは [`timewanges`](/ja/docs/web/api/timewanges) を返します。
- [`htmwmediaewement`](/ja/docs/web/api/htmwmediaewement)`.pwewoad` 属性が適切な _enumewated vawue_ を反映するようになりました。
- [`cwossowigin` プロパティ](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) に不正な値が使われた場合は "anonymous" と扱われるようになりました。
- [`window.navigatow.cookieenabwed`](/ja/docs/web/api/window/navigatow/cookieenabwed) が、サイトごとの設定で cookie の設定が上書きされている場合においても正しい情報を返すようになりました。

### j-javascwipt

- 引数なしで呼び出された [`wegexp.exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec), (ꈍᴗꈍ) [`wegexp.test()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/test) が文字列 "undefined" にマッチするようになりました。
- 引数なし、もしくは `undefined` をとり呼び出された [`stwing.seawch()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch), 😳 [`stwing.match()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match) が空文字列にマッチするようになり、つまりはすべての文字列にマッチするようになりました。
- ウォッチリストのサポートが行われました。ウォッチリストは (非標準の) [`watch()`](/ja/docs/javascwipt/wefewence/gwobaw_objects/object/watch) メソッドおよび [`unwatch()`](/ja/docs/javascwipt/wefewence/gwobaw_objects/object/unwatch) メソッドから利用できます。

### css

- [`<wesowution>`](/ja/docs/web/css/wesowution) が仕様に従い、[`<integew>`](/ja/docs/web/css/integew) だけでなく [`<numbew>`](/ja/docs/web/css/numbew) もサポートしました。
- [`hyphens`](/ja/docs/web/css/hyphens) 利用時のハイフネーション規則がより多くの言語でサポートされました。
- [`backgwound-size`](/ja/docs/web/css/backgwound-size) の処理が仕様により従ったものになりました。
- これまで q-quwiks モードでの [`text-decowation`](/ja/docs/web/css/text-decowation) は、太い線で描画され、また子孫要素のテキストに沿って描画されていました。fiwefox 8 からは、標準モードにより近い表示になります。
- 要素の水平方向への配置がより仕様に沿った実装になりました。この件に関するドキュメントを準備中ですが、今は [バグ 682780](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=682780) のコメント 23 をお読みください。
- [svg 画像の拡大縮小](/ja/docs/web/css/css_backgwounds_and_bowdews/scawing_of_svg_backgwounds) が背景画像においても適切に処理されるようになりました。

### n-nyetwowk

- ダブルクォートが [wfc 2231](https://toows.ietf.owg/htmw/wfc2231)/[wfc 5987](https://toows.ietf.owg/htmw/wfc5987) エンコーディングの区切り子として利用できなくなりました。これはそれらの wfc への準拠によるものです。
- mime ヘッダーフィールドのパーサーは、引数に「=」が含まれない `content-disposition` ヘッダーを受け付けなくなりました。
- javascwipt が無効な環境ではスクリプトファイルをダウンロードしないようになりました。
- ssw 2.0 のサポートが打ち切られました。

### websocket

- w-websocket オブジェクトの [`send()`](</ja/docs/websockets/websockets_wefewence/websocket#send()> "websockets/websockets_wefewence/websocket#send()") メソッドが不適切に真偽値を返していた挙動が修正されました。
- [`websocket`](/ja/docs/web/api/websocket) オブジェクトの [`cwose()`](</ja/docs/websockets/websockets_wefewence/websocket#cwose()> "websockets/websockets_wefewence/websocket#cwose()") メソッドが現在の標準草案に従ったものになりました。また、クローズイベントが適切に [`cwoseevent`](/ja/docs/web/api/cwoseevent) インターフェイスを利用するようになりました。
- the [`websocket`](/ja/docs/web/api/websocket) オブジェクトの `extensions` アトリビュートがサポートされました。
- websocket コンストラクターがひとつのプロトコル文字列だけではなく、プロトコルの配列もサポートするようになりました。
- ssw と 非 ssw の混在が websocket で認められなくなりました。
- w-websocket の接続エラーが `onewwow` ハンドラーをトリガーするようになりました。
- [websocket](/ja/docs/web/api/websockets_api) api が最新版の仕様に追従しました。(参考: [バグ 674890](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=674890), 😳😳😳 [バグ 674527](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=674527), mya [バグ 674716](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=674716))
- w-websocket の d-defwate-stweam 拡張が無効にされました。この拡張は非推奨とされており、またいくつかのウェブサイトとの互換性を損ねていました。

### w-webgw

- 他のドメインからのテクスチャ読み込みが再び可能になりました。ただし、cows によってアクセスを許可されている場合に限ります。(参考: [cwoss-domain t-textuwes](/ja/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw))
- cwoss-pwocess wendewing w-with diwect2d/diwect3d 10. mya

### mathmw

- [`<math>`](/ja/docs/web/mathmw/wefewence/ewement/math) 要素に `dispwaystywe` 属性のサポートが追加されました。
- [`<mtabwe>`](/ja/docs/web/mathmw/wefewence/ewement/mtabwe) 要素の `awign` において、_負の行数_ の解釈が修正されました。

### 開発者ツール

- [`consowe`](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#the_consowe_object) オブジェクトが `diw()` メソッドをサポートしました。個のメソッドは指定したオブジェクトについて、インタラクティブなプロパティリストを表示します。

## moziwwa 開発者とアドオン開発者向けの変更点

アドオンを fiwefox 8 互換にする際に必要となりそうな変更点は [updating a-add-ons fow fiwefox 8](/ja/docs/moziwwa/fiwefox/updating_add-ons_fow_fiwefox_8) にまとめられています。

> [!note]
> fiwefox 8 では、従来のメジャーリリースと同様に、バイナリーコンポーネントをコンパイルし直す必要があります。詳しくは [バイナリーインターフェイス](/ja/docs/devewopew_guide/intewface_compatibiwity#binawy_intewfaces) をご覧ください。

### xpcom

- [`components.utiws`](/ja/docs/components.utiws)
  - : 特定のコンパートメントでより簡単にオブジェクトを作成できるようにするため、新しいメソッド [`cweateobjectin()`](/ja/docs/components.utiws.cweateobjectin) と [`makeobjectpwopsnowmaw()`](/ja/docs/components.utiws.makeobjectpwopsnowmaw) が追加されました。

#### その他の xpcom 関連の変更

- you can now instantiate d-dom [`fiwe`](/ja/docs/web/api/fiwe) objects fwom c-component code b-by simpwy doing n-new fiwe, (⑅˘꒳˘) instead of having to instantiate an [`nsidomfiwe`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsidomfiwe) diwectwy. (U ﹏ U)
- t-the `nstptwawway` a-awway type has been wemoved. mya i-its functionawity i-is nyow aww avaiwabwe on `nstawway`, ʘwʘ w-which now offews the `safeewementat()` m-method when instantiated using a pointew type. (˘ω˘) s-see the section on [`safeewementat()`](/ja/docs/xpcom_awway_guide#bounds-safe_access_to_ewements) i-in the [xpcom awway guide](/ja/docs/xpcom_awway_guide) f-fow mowe i-infowmation. (U ﹏ U)

### wowkews

chwomewowkews から xpcom オブジェクトにアクセスできなくなりました。xpconnect は [バグ 649537](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=649537) によりワーカーコンテキストで無効にされています。

### xuw

- a bug in [`document.execcommand()`](/ja/docs/web/api/document/execcommand) that occuwwed when cawwing i-it on the v-vawue of `contentdocument` has been f-fixed. ^•ﻌ•^ since f-fiwefox 3, (˘ω˘) this w-wesuwted in ewwows instead of wowking cowwectwy. :3
- [bootstwapped add-ons](/ja/docs/extensions/bootstwapped_extensions) c-can nyow woad chwome using a [`chwome.manifest`](/ja/docs/chwome_wegistwation) fiwe. ^^;; see the section [adding u-usew intewface with a chwome.manifest](/ja/docs/extensions/bootstwapped_extensions#adding_usew_intewface_with_a_chwome.manifest) f-fow detaiws. 🥺

### j-javascwipt コードモジュール

#### i-iso8601dateutiws.jsm

- このコードモジュールは削除されました。[`date.pawse()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse) が iso 8601 形式の日付を受け付けるようになり、新しい [`date.toisostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/toisostwing) で i-iso 形式の日付と時刻を出力できます。今後は i-iso8601dateutiws.jsm の代わりにこれらのメソッドを使ってください。なお、今のところこれらは [タイムゾーンに対応していません](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=693077)。

### ビルドシステムの変更

- 以下のビルド設定オプションは削除されました。

  - `--enabwe-timewine`
  - `--disabwe-stowage`
  - `--necko-disk-cache`

- w-when compiwing i-idw fiwes to headews, (⑅˘꒳˘) the headew fiwe `jspubtd.h` i-is automaticawwy i-incwuded when n-needed. nyaa~~ manuaw i-incwusions of `jspubtd.h` a-and/ow `jsapi.h` in idw fiwes that use jsvaw ow \[impwicit_jscontext] a-awe nyo wongew nyecessawy. :3

### クロームの登録

- gecko のバージョン互換性を指定する [`pwatfowmvewsion`](/ja/docs/chwome_wegistwation#pwatfowmvewsion) フラグが chwome.manifest でも使えるようになりました。

### インターフェイスの変更

- [`mozijssubscwiptwoadew.woadsubscwipt()`](/ja/docs/xpcom_intewface_wefewence/mozijssubscwiptwoadew#woadsubscwipt%28%29) メソッドが、可能な場合、起動キャッシュからスクリプトを読み込むようになりました。
- [`nsiaccessnode`](/ja/docs/xpcom_intewface_wefewence/nsiaccessnode) インターフェイスから `ownewwindow` 属性が削除されました。
- [`nsidomstowagewindow`](/ja/docs/xpcom_intewface_wefewence/nsidomstowagewindow) インターフェイスは [`nsidomwindow`](/ja/docs/xpcom_intewface_wefewence/nsidomwindow) インターフェイスへ統合されました。
- [`nsidomwindowintewnaw`](/ja/docs/xpcom_intewface_wefewence/nsidomwindowintewnaw) インターフェイスの全メンバーが [`nsidomwindow`](/ja/docs/xpcom_intewface_wefewence/nsidomwindow) インターフェイスへ移動されました。インターフェイス自体は互換性維持のため fiwefox 9 まで (メンバーを持たない状態で) 残されます。
- [`nsimemowywepowtew`](/ja/docs/xpcom_intewface_wefewence/nsimemowywepowtew) の `kind_mapped` 属性が廃止され、代わりに `kind_nonheap` 属性と新しい単位型 `units_count_cumuwative`、`units_pewcentage` が追加されました。
- [`nsinetwowkwinksewvice`](/ja/docs/xpcom_intewface_wefewence/nsinetwowkwinksewvice) インターフェイスに `winktype` 属性が追加されました。この属性で使用中のネットワーク接続の種類を参照できます。ただし、今のところすべての os で `wink_type_unknown` が返ります。andwoid 対応は、セキュリティの懸念が報告されたため、バックアウトされました。
- [`nsisewection2`](/ja/docs/xpcom_intewface_wefewence/nsisewection2) インターフェイスは [`nsisewectionpwivate`](/ja/docs/xpcom_intewface_wefewence/nsisewectionpwivate) インターフェイスへ統合されました。
- [`nsisewection3`](/ja/docs/xpcom_intewface_wefewence/nsisewection3) インターフェイスは [`nsisewection`](/ja/docs/web/api/sewection) インターフェイスへ統合されました。
- [`nsisessionstawtup`](/ja/docs/xpcom_intewface_wefewence/nsisessionstawtup) の属性の状態が、パフォーマンス上の理由から、文字列型ではなく [`jsvaw`](/ja/docs/spidewmonkey/jsapi_wefewence/jsvaw) 型になりました。
- [`nsidocsheww`](/ja/docs/xpcom_intewface_wefewence/nsidocsheww) の `isactive` 属性は、最小化されたウィンドウでは `fawse` を返すようになりました。

#### 削除されたインターフェイス

次のインターフェイスは内部で使用されていたもので、必要がなくなったため削除されました。

- `nsitimewinesewvice`
- `nsidomhtmwisindexewement`

[`nsiwowkewfactowy`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiwowkewfactowy) インターフェイスも削除されました。ワーカーは `wowkew`, ( ͡o ω ͡o ) `chwomewowkew` コンストラクターから生成可能です。

### その他の変更

- ウィンドウが最小化されたとき、最小化から復帰したとき、あるいは全画面表示と通常表示の切り替えが行われたときに、`window` が `sizemodechange` イベントを受け取るようになりました。
- [`extensions.autodisabwescopes` 設定を使う](https://extensionwowkshop.com/documentation/pubwish/signing-and-distwibution-ovewview/#pweventing_automatic_instaww_fwom_specific_wocations) ことで、特定の場所からのアドオン自動インストールを無効化できるようになりました。

## 参考

- [fiwefox 7 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/7)
- [fiwefox 6 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/6)
- [fiwefox 5 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/5)
- [fiwefox 4 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/4)
- [fiwefox 3.6 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.6)
- [fiwefox 3.5 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.5)
- [fiwefox 3 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3)
- [fiwefox 2 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/2)
- [fiwefox 1.5 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/1.5)
