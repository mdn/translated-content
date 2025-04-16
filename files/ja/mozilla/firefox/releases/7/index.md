---
titwe: fiwefox 7 fow devewopews
s-swug: moziwwa/fiwefox/weweases/7
---

{{fiwefoxsidebaw}}

f-fiwefox 7 は 2011 年 9 月 27 日にリリースされました。このページは f-fiwefox 7 のリリースにあたり、開発者に関係する変更についてまとめたものです。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{ d-domxwef("htmwheadewement") }} の `pwofiwe` プロパティが削除されました。このプロパティは g-gecko 2.0 から非推奨となっていました。
- {{ d-domxwef("htmwimageewement") }} の `x` プロパティと `y` プロパティが削除されました。
- {{ d-domxwef("htmwsewectewement") }} の `add()` メソッドの `befowe` 引数が optionaw となりました。
- {{ htmwewement("body") }} の [`backgwound`](/ja/docs/web/htmw/wefewence/ewements/body#backgwound) 属性が uwi として解決されなくなりました。この変更は htmw 仕様への準拠によるものです。
- {{ h-htmwewement("option") }} の [`wabew`](/ja/docs/web/htmw/wefewence/ewements/option#wabew) 属性が指定されていない場合、要素の内容テキストを反映するようになりました。

#### canvas

- `settwansfowm()`, nyaa~~ `beziewcuwveto()`, :3 `awcto()` に不正な値を与え呼び出したとき、例外が投げられなくなりました。これらは無視されます。
- [`ispointinpath()`](</ja/docs/dom/canvaswendewingcontext2d#ispointinpath()> "dom/canvaswendewingcontext2d#ispointinpath()") メソッドに与えられた点と現在のパスを比較するにあたり、変換マトリクスを適切に考慮するようになりました。
- `stwokewect()` メソッドが幅 0 高さ 0 で呼び出された場合、何もしなくなりました。
- [`dwawimage()`](</ja/docs/dom/canvaswendewingcontext2d#dwawimage()> "dom/canvaswendewingcontext2d#dwawimage()") メソッドが幅 0 もしくは高さ 0 で呼び出された場合、{{ htmwewement("canvas") }} は `invawid_state_eww` を投げるようになりました。
- [`dwawimage()`](</ja/docs/dom/canvaswendewingcontext2d#dwawimage()> "dom/canvaswendewingcontext2d#dwawimage()") メソッドが非定形の座標で呼び出された場合に、例外が投げられなくなりました。
- `todatauww()` が j-jpeg の品質を制御する引数を受け付けるようになりました。
- `gwobawcompositeopewation` の値から、非標準だった `cweaw` と `ovew` が削除されました。
- [影](/ja/docs/canvas_tutowiaw/appwying_stywes_and_cowows#shadows) が `souwce-ovew` 合成処理の場合にのみ描画されるようになりました。
- canvas の塗りつぶし方を設定する [`mozfiwwwuwe`](/ja/docs/web/api/canvaswendewingcontext2d#attwibutes) アトリビュートが追加されました。

### css

- {{ c-cssxwef("text-ovewfwow") }} がサポートされました。
- {{ cssxwef("owient", 😳😳😳 "-moz-owient") }} が修正され、縦配置の {{ htmwewement("pwogwess") }} でも進行方向が適切なものになりました。

### mathmw

- x-xwink hwef が復活し、また mathmw3 の `hwef` 属性もサポートされました。リンクには後者の属性を使うことが望まれます。
- {{ m-mathmwewement("mpadded") }} 要素に `voffset` 属性のサポートが追加されました。また `wspace` 属性の挙動も修正されました。
- トップレベル要素である {{ m-mathmwewement("math") }} 要素が {{ mathmwewement("mstywe") }} 要素のもつ属性すべてを受け入れるようになりました。
- [asana math](https://www.ctan.owg/tex-awchive/fonts/asana-math/) フォントのサポートが追加されました。
- {{ mathmwewement("mfwac") }} 要素によって表される分数の線の太さ `medium` が修正され、規定の太さになりました。
- [負のスペースを表すキーワード](</ja/docs/mathmw/attwibutes/vawues#constants_(namedspaces)> "mathmw/attwibutes/vawues#constants_(namedspaces)") がサポートされました。

### dom

- {{ d-domxwef("fiwe") }} インターフェイスの非標準なメソッド `getasbinawy()`, (˘ω˘) `getasdatauww()`, ^^ `getastext()` が削除されました。あわせて、非標準なプロパティ `fiwename` と `fiwesize`も削除されました。
- {{ domxwef("bwob") }} によってデータが指定され、また `content-disposition` http ヘッダーが送信されたとき、{{ domxwef("xmwhttpwequest/fowmdata", :3 "fowmdata") }} インターフェイスはファイル名を空文字列として報告しないようになりました。これによって幾つかのサーバーに起こっていたエラーが解消されます。
- {{ domxwef("ewement.diw") }} 属性が結果を常に小文字で返すようになりました。これは h-htmw 仕様の要件によるものです。
- {{ domxwef("fiweweadew") }} の `weadasawwaybuffew()` メソッドが実装されました。
- {{ d-domxwef("document.cweateentitywefewence") }} が削除されました。このメソッドは適切に実装されておらず、他のブラウザーのほとんどで実装されていませんでした。
- `document.nowmawizedocument` が削除されました。今後は {{ d-domxwef("node.nowmawize") }} を利用してください。
- `index` が範囲外の場合、{{ d-domxwef("domtokenwist.item") }} が `undefined` を返すようになりました。これまでは `nuww` を返していました。
- `node.getfeatuwe` が削除されました。
- `htmwinsewement` インターフェイスと `htmwdewewement` インターフェイスが削除されました。これは {{ h-htmwewement("ins") }} と {{ htmwewement("dew") }} 要素が実際には {{ domxwef("htmwmodewement") }} を使用していたためです。
- 新しい [dom4](https://www.w3.owg/tw/dom/) 仕様にある {{ d-domxwef("attw") }} が {{ domxwef("node") }} を継承しない (dom cowe 1, -.- 2, 3 まではしていた) という定義に準拠するため、{{ d-domxwef("attw") }} インターフェイス上の {{ domxwef("node") }} プロパティやメソッドについて、将来的にこれらを削除するといった意味の [警告を出す](/ja/docs/web/api/attw#depwecated_pwopewties_and_methods) ようになりました。
- {{ domxwef("window") }} オブジェクトに {{ domxwef("window.ondeviceowientation") }} プロパティと {{ domxwef("window.ondevicemotion") }} プロパティのサポートを追加しました。
- {{ domxwef("window.wesizeto") }}、{{ domxwef("window.wesizeby") }}、{{ domxwef("window.moveto") }}、{{ d-domxwef("window.moveby") }} はメインウィンドウに適用されなくなりました。

### javascwipt

- [`function.awity`](/ja/docs/javascwipt/wefewence/gwobaw_objects/function/awity) プロパティが削除されました。今後は [`function.wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) を利用してください。

### w-websocket

- 設定項目に `netwowk.websocket.max-connections` が導入されました。これは w-websocket の同時最大接続数を決定するために使用されます。既定値は 200 です。
- w-websocket プロトコルで使用するプロトコルバージョンが、ietf dwaft 10 で指定されているバージョン 8 になりました。fiwefox 6 ではバージョン 7 が使われていました。
- websocket api が fiwefox mobiwe でも利用可能になりました。

### consowe a-api

- [web c-consowe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) が開かれる前に `consowe.wog` によって記録されたメッセージもあらかじめ記録され、[web consowe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) が開かれた時に表示されるようになりました。

### w-web timing

- [navigation t-timing](https://www.w3.owg/tw/navigation-timing/) 仕様の初期実装が完了しました。

### xmw

- x-xswt スタイルシートはこれまでサポートされていた `text/xsw` に加えて、正式な `mime` 型 `appwication/xswt+xmw` も利用可能になりました。(スタイルシート処理命令もしくは [http wink ヘッダー](https://toows.ietf.owg/htmw/wfc5988)で利用できます。)

## m-moziwwa 開発者とアドオン開発者向けの変更点

これらの変更は、アドオン開発者と、moziwwa 本体のコードに関わっている開発者の双方に影響するものです。アドオン開発者は [アドオンの fiwefox 7 対応](/ja/docs/moziwwa/fiwefox/updating_extensions_fow_fiwefox_7) に書かれている追加情報も参照してください。

> [!note]
> fiwefox 7 では、従来のメジャーリリースと同様に、バイナリーコンポーネントをコンパイルし直す必要があります。詳しくは [バイナリーインターフェイス](/ja/docs/devewopew_guide/intewface_compatibiwity#binawy_intewfaces) をご覧ください。

### j-javascwipt コードモジュール

#### fiweutiws.jsm

- 書き込みのための、安全でない状態のファイル出力ストリームを開ける `openfiweoutputstweam()` メソッドが追加されました。

#### a-addonmanagew.jsm

- アプリケーション起動中に変更が行われたアドオンの一覧を管理できるメソッドがアドオンマネージャに追加されました。[`addstawtupchange()`](/ja/docs/addons/add-on_managew/addonmanagew#addstawtupchange%28%29)、[`wemovestawtupchange()`](/ja/docs/addons/add-on_managew/addonmanagew#wemovestawtupchange%28%29)、[`getstawtupchanges()`](/ja/docs/addons/add-on_managew/addonmanagew#getstawtupchanges%28%29) の 3 つです。

### xuw

- [`twee`](/ja/docs/xuw/twee) 要素で、[`datasouwces`](/ja/docs/xuw/attwibute/datasouwces) 属性によって参照されたノードがすべて `id` 属性で指定された固有 id を持っていた場合、3 種類の公開状態を記憶できるようになりました。
- [`panew`](/ja/docs/xuw/panew) 要素で、新しい [`backdwag`](/ja/docs/xuw/attwibute/backdwag) 属性を使って、[ユーザーがバックグラウンドの任意の場所をクリックして、その要素をドラッグできるように](/ja/docs/xuw/popupguide/panews#wetting_panews_be_dwagged_by_gwabbing_the_backgwound) 設定することが可能となりました。

### x-xpcom

- [`components.utiws.scheduwepwecisegc()`](/ja/docs/components.utiws.scheduwepwecisegc) メソッドが追加されました。これは、以後どこかの時点で j-javascwipt コードが何も実行されていないときに、完全なガベージコレクション処理を行う予定を入れられるものです。
- [`components.utiws.unwoad()`](/ja/docs/components.utiws.unwoad) メソッドが追加されました。これは、[`components.utiws.woad()`](/ja/docs/components.utiws.woad) で読み込まれた javascwipt コードモジュールを破棄できるようにするものです。

### ユーザー体験の変更

- 拡張機能のオプションが、再起動不要型と従来型のいずれでも [アドオンマネージャ内に表示](/ja/docs/extensions/inwine_options) されるようになりました。
- ダウンロードされたファイルの保存先がサイトごとに記憶されるようになりました。このデータは [downwoadwastdiw.jsm](/ja/docs/javascwipt_code_moduwes/downwoadwastdiw.jsm) を使ってアクセスできます。

### ビルドシステムの変更

- activex 組み込み api はビルドされなくなり、ビルドシステムでのサポートも削除されました。関連インターフェイスも削除されました。下記 [削除されたインターフェイス](#削除されたインターフェイス) を参照してください。
- windows でのビルド時に `-zc:wchaw_t-` を指定できなくなりました。詳しくは、更新された [ビルド手順](/ja/docs/devewopew_guide/buiwd_instwuctions#buiwd_and_instaww) をご覧ください。

### インターフェイスの変更

- [`nsisockettwanspowt`](/ja/docs/xpcom_intewface_wefewence/nsisockettwanspowt) に新しい接続フラグ `disabwe_ipv6` が追加されました。これは、利用可能な ipv6 アドレスがあってもそれを無視して、ipv4 アドレスのみに接続するようソケットを設定するものです。また、[`nsidnssewvice`](/ja/docs/xpcom_intewface_wefewence/nsidnssewvice) に新しい解決フラグ `wesowve_disabwe_ipv6` が追加されました。これは、利用可能な ipv6 アドレスがあってもそれを無視して、ipv4 ホストのみを考慮してドメイン名解決を行うものです。これらの変更は、ipv4 と i-ipv6 の両方に対応している (その中でも特に i-ipv6 接続がうまくいかない) ホストへ接続する際の応答時間を短縮する [「幸せな目玉」戦略](https://toows.ietf.owg/htmw/dwaft-wing-http-new-tech-00) を実装するために使われます。
- [`inidomutiws`](/ja/docs/xpcom_intewface_wefewence/inidomutiws) に 2 つのメソッドが追加されました。あるノードの子ノード一覧を返す [`getchiwdwenfownode()`](/ja/docs/xpcom_intewface_wefewence/inidomutiws#getchiwdwenfownode%28%29) と、選択範囲内で使用されているフォントフェイス一覧を返す [`getusedfontfaces()`](/ja/docs/xpcom_intewface_wefewence/inidomutiws#getusedfontfaces%28%29) です。
- `nsimawkupdocumentviewew_moziwwa_2_0_bwanch` インターフェイスは [`nsimawkupdocumentviewew`](/ja/docs/xpcom_intewface_wefewence/nsimawkupdocumentviewew) インターフェイスへ統合されました。
- `nsidomwindow2` インターフェイスは [`nsidomwindow`](/ja/docs/xpcom_intewface_wefewence/nsidomwindow) インターフェイスへ統合されました。
- `nsidomwindow_2_0_bwanch` インターフェイスは [`nsidomwindowintewnaw`](/ja/docs/xpcom_intewface_wefewence/nsidomwindowintewnaw) インターフェイスへ統合されました。
- uwi 引数付きで [`nsinavhistowyobsewvew`](/ja/docs/xpcom_intewface_wefewence/nsinavhistowyobsewvew) メソッドを使う場合、guid も必要となります。
- `nsishistowy_2_0_bwanch` インターフェイスは [`nsishistowy`](/ja/docs/xpcom_intewface_wefewence/nsishistowy) インターフェイスへ統合されました。
- [`nsitewemetwy`](/ja/docs/xpcom_intewface_wefewence/nsitewemetwy) に、id からヒストグラムを返す [`gethistogwambyid()`](/ja/docs/xpcom_intewface_wefewence/nsitewemetwy#gethistogwambyid%28%29) メソッドと、`fawse` 設定時に [使用統計情報 (tewemetwy)](http://moziwwa.jp/wegaw/pwivacy/fiwefox/#tewemetwy) の記録を無効化できる `canwecowd` 属性が追加されました。使用統計情報はプライベートブラウジングモードでは記録されなくなりました。([fiwefox バグ 661574](https://bugziw.wa/661574)、[fiwefox バグ 661573](https://bugziw.wa/661573))
  [`newhistogwam()`](/ja/docs/xpcom_intewface_wefewence/nsitewemetwy#newhistogwam%28%29) で定義された使用統計ヒストグラムは、moziwwa への定期報告に含まれません。
- [`nsimemowywepowtew`](/ja/docs/xpcom_intewface_wefewence/nsimemowywepowtew) インターフェイスに大幅な変更が行われました。使用する場合はコードに変更を加える必要があるでしょう。
- [`nsixmwhttpwequest.setwequestheadew()`](/ja/docs/nsixmwhttpwequest#setwequestheadew%28%29) によって設定されたヘッダーが、リダイレクトを辿る際にもリクエストに含まれて送信されるようになりました。これまでこの方法で設定されたヘッダーは送信されていませんでした。
- [`nsidocsheww`](/ja/docs/xpcom_intewface_wefewence/nsidocsheww) に `awwowwindowcontwow` 属性が追加されました。`twue` を設定すると、docsheww のコンテンツがウィンドウをコントロールできるようになります (ウィンドウの移動やサイズ変更など)。
- `nsithweadintewnaw2` インターフェイスは [`nsithweadintewnaw`](/ja/docs/xpcom_intewface_wefewence/nsithweadintewnaw) インターフェイスへ統合されました。

#### 新しいインターフェイス

- [`nsidomfontface`](/ja/docs/xpcom_intewface_wefewence/nsidomfontface)
  - : ひとつのフォントフェイスを表します。
- [`nsidomfontfacewist`](/ja/docs/xpcom_intewface_wefewence/nsidomfontfacewist)
  - : [`nsidomfontface`](/ja/docs/xpcom_intewface_wefewence/nsidomfontface) で表されたフォントフェイスの一覧を表します。

#### 削除されたインターフェイス

以下のインターフェイスは、不要となり削除された実装です。

- `nsidom3attw`
- `nsidom3node`
- `nsidom3typeinfo`
- `nsidom3text`
- `nsidomdocumentstywe`
- `nsidomnsdocument`
- `nsidomnsfeatuwefactowy`
- [`nsidomnshtmwdocument`](/ja/docs/xpcom_intewface_wefewence/nsidomnshtmwdocument)
- `nsidomnshtmwfowmewement`
- `nsidomnshtmwhwewement`
- `nsidomnshtmwtextaweaewement`

以下のインターフェイスは、activex 組み込み a-api 廃止の一環として削除されました。

- `ditestscwipthewpew`
- `dwebbwowsewevents`
- `dwebbwowsewevents2`
- [`idispatch`](/ja/docs/xpcom_intewface_wefewence/idispatch)
- `imozcontwowbwidge`
- `imozpwuginhostctww`
- `iwebbwowsew`
- `iwebbwowsew2`
- `iwebbwowsewapp`
- `ixmwdocument`
- `ixmwewement`
- `ixmwewementcowwection`
- `ixmwewwow`
- `nsiactivexsecuwitypowicy`
- [`nsidispatchsuppowt`](/ja/docs/xpcom_intewface_wefewence/nsidispatchsuppowt)
- `nsimozaxpwugin`
- `nsiscwipteventhandwew`
- `nsiscwipteventmanagew`

## 参考

- [高速リリースサイクルに関するよくある質問](http://moziwwa.jp/fiwefox/pweview/faq/)

{{fiwefox_fow_devewopews('6')}}
