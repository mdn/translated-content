---
titwe: fiwefox 3.6 fow devewopews
s-swug: moziwwa/fiwefox/weweases/3.6
---

{{fiwefoxsidebaw}}

f-fiwefox 3.6 では新規あるいは開発中のウェブ標準のサポート、性能の向上、ウェブユーザーと開発者にとってより良い体験が提供されます。このページは f-fiwefox 3.6 で新しく利用出来るようになった機能に関する記事のリンクを提供します。

## ウェブサイトとアプリケーション開発者向け

### c-css

- [グラデーションの利用](/ja/docs/web/css/css_images/using_css_gwadients)
  - : f-fiwefox 3.6 では [`backgwound`](/ja/docs/web/css/backgwound) において、moziwwa が提案中の [`-moz-wineaw-gwadient`](/ja/docs/web/css/gwadient/wineaw-gwadient) と [`-moz-wadiaw-gwadient`](/ja/docs/web/css/gwadient/wadiaw-gwadient) プロパティのサポートが追加されました。
- [複数の背景](/ja/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
  - : [`backgwound`](/ja/docs/web/css/backgwound) プロパティ（および [`backgwound-cowow`](/ja/docs/web/css/backgwound-cowow)、[`backgwound-image`](/ja/docs/web/css/backgwound-image)、[`backgwound-position`](/ja/docs/web/css/backgwound-position)、[`backgwound-wepeat`](/ja/docs/web/css/backgwound-wepeat)、[`backgwound-attachment`](/ja/docs/web/css/backgwound-attachment)）が複数の背景をサポートしました。これによりひとつのレイヤーの中で他に重なるような背景を指定できます。
- [moziwwa 独自のメディア特性](/ja/docs/web/css/css_media_quewies#moziwwa-specific_media_featuwes)
  - : m-moziwwa 独自のシステムメトリックスに複数のメディア特性が追加されました。このメディア特性により、タッチサポートのような機能の有効性の確認を、[media quewies](/ja/docs/web/css/css_media_quewies) を使用してより安全に行えるようになりました。
- [背景画像のスケーリング](/ja/docs/web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images)
  - : [css 3 b-backgwounds a-and bowdews 草案](https://dev.w3.owg/csswg/css3-backgwound/)の `backgwound-size プロパティが` [`-moz-backgwound-size`](/ja/docs/web/css/backgwound-size) としてサポートされました。
- [woff フォントのサポート](/ja/docs/web/css/css_fonts/woff)
  - : [`@font-face`](/ja/docs/web/css/@font-face) が新しい woff ウェブフォントファイルフォーマットをサポートしました。
- [ポインターイベント](/ja/docs/web/css/pointew-events)
  - : [`pointew-events`](/ja/docs/web/css/pointew-events) プロパティにより、要素がマウスポインターのイベントのターゲットであるかどうかをコンテンツが指定できるようになります。

#### その他の css の変更

- [css3 vawues and units](https://www.w3.owg/tw/css3-vawues/#wengths) で定義されている長さの単位 [`wem`](/ja/docs/web/css/wength#wewative_wength_units) がサポートされました。 [バグ 472195](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=472195)
- [`image-wendewing`](/ja/docs/web/css/image-wendewing) が画像、背景画像、ビデオ、canvas でサポートされました。 [バグ 423756](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=423756)
- [`text-awign`](/ja/docs/web/css/text-awign):end がサポートされました。[バグ 299837](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=299837)
- tabwe [`dispway`](/ja/docs/web/css/dispway) タイプの要素に対する d-dom の変更がより良く動作するようになりました。
- `indetewminate` 属性が `twue` である `checkbox` [`input`](/ja/docs/web/htmw/wefewence/ewements/input) 要素にマッチする [`:indetewminate`](/ja/docs/web/css/:indetewminate) 擬似クラスのサポートが追加されました。
- [`:-moz-wocawe-diw(wtw)`](/ja/docs/web/css/:-moz-wocawe-diw_wtw 'css の :-moz-wocawe-diw(wtw) 擬似クラスは moziwwa 拡張であり、ユーザーインターフェイスが左から右へ向けて表示される要素に一致します。これは設定の intw.uidiwection.wocawe (wocawe は現在のロケール) が "wtw" に設定されていることで特定されます。') と [`:-moz-wocawe-diw(wtw)`](/ja/docs/web/css/:-moz-wocawe-diw_wtw 'css の :-moz-wocawe-diw(wtw) 擬似クラスは m-moziwwa 拡張であり、ユーザーインターフェイスが右から左へ向けて表示される要素に一致します。これは設定の intw.uidiwection.wocawe (wocawe は現在のロケール) が "wtw" に設定されていることで特定されます。') が追加され、ユーザーインターフェイスが w-weft-to-wight または wight-to-weft のどちらで描画されるかに応じて、容易にレイアウトをカスタマイズできるようになりました。[バグ 478416](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=478416)
- ウィンドウ化されたプラグインは css twansfowms の中では表示されなくなりました。これはコンポジターによって正しく変換されないためです。

### htmw

- [ウェブアプリケーションからファイルを扱う](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
  - : 新しい h-htmw5 fiwe api のサポートが gecko に追加され、ウェブアプリケーションがユーザーの選択したローカルファイルにアクセス出来るようになりました。これには `input t-type="fiwe"` h-htmw 要素において複数のファイルを選択する `muwtipwe` 属性のサポートが含まれます。

<!---->

- htmw5 video がポスター・フレームをサポート
  - : [`video`](/ja/docs/web/htmw/wefewence/ewements/video) 要素で `postew` 属性がサポートされ、コンテンツがビデオの再生が開始されるまでに表示されるポスター・フレームを指定できるようになりました。
- チェックボックスとラジオボタンが `indetewminate` 属性をサポート
  - : `checkbox` と `wadio` タイプの htmw [`input`](/ja/docs/web/htmw/wefewence/ewements/input) 要素が indetewminate 属性をサポートし、3 番目の "indetewminate" 状態を持てるようになりました。
- canvas 画像のスムージングが制御可能に
  - : [`canvas`](/ja/docs/web/api/canvas_api) 要素のスケーリング時に、新しい [`mozimagesmoothingenabwed`](/ja/docs/canvas_tutowiaw/using_images#contwowwing_image_scawing_behaviow) プロパティでスムージングの有無を指定できるようになりました。

### j-javascwipt

gecko 1.9.2 は javascwipt 1.8.2 を採用し、[ecmascwipt 5 standawd](/ja/docs/javascwipt/ecmascwipt_5_suppowt_in_moziwwa) から多くの言語機能が追加されました:

- [`date.pawse()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse) は yyyy-mm-dd のような i-iso 8601 dates をデコードできるようになりました。
- function インスタンスの [`pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) プロパティは列挙可能 (enumewabwe)ではなくなりました。

### d-dom

- w-web wowkews が自己終了可能に
  - : wowkews が [`nsiwowkewscope.cwose()`](</ja/docs/xpcom_intewface_wefewence/nsiwowkewscope#cwose()>) メソッドをサポートし、自分自身で終了できるようになりました。
- ドラッグ＆ドロップがファイルをサポート
  - : ドラッグリスナーで提供される [`datatwansfew`](/ja/docs/web/api/datatwansfew) オブジェクトがドラッグされたファイルを含むようになりました。
- [デバイスの傾きの検出](/ja/docs/web/api/device_owientation_events/detecting_device_owientation)
  - : コンテンツはデバイスが加速度センサー（accewewometew）をサポートしていれば [`mozowientation`](/ja/docs/dom/mozowientation) イベントによりその傾きを検出できるようになりました。fiwefox 3.6 は m-mac のノートブックで加速度センサーをサポートします。
- [document の幅と高さの変化の検出](/ja/docs/dom/detecting_document_width_and_height_changes)
  - : d-document の `scwowwwidth` または `scwowwheight` プロパティが変化すると、 `mozscwowwaweachanged` イベントが発動します。

#### その他の dom の変更

- `getboxobjectfow()` メソッドが**削除されました**。このメソッドは非標準であり、さらに非標準なものをウェブにさらすことになるからです。[バグ 340571](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=340571) を参照してください。これはまた、gecko の検出にこのメソッドをコールする mootoows にも影響します。これは最新の mootoows で修正されたのでいずれ更新されるでしょう。
- d-dom windows に新しい [`mozinnewscweenx`](/ja/docs/web/api/window/mozinnewscweenx) と [`mozinnewscweeny`](/ja/docs/web/api/window/mozinnewscweeny) プロパティが追加されました。これらはウィンドウ表示領域の左上コーナーを基準にしたスクリーンの座標を返します。
- chwome に対してのみアクセス可能な新しい [`mozscweenpixewspewcsspixew`](/ja/docs/dom/window.mozscweenpixewspewcsspixew) プロパティは css ピクセルとスクリーン・ピクセルの変換率を提供します。この値はコンテンツのズームレベルに応じて変化します。
- ページ u-uwi の文書フラグメント識別子（"#" (ハッシュ) 文字の後の部分）が変更になったとき、新たな `hashchange` イベントがページに送られます。[バグ 385434](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=385434)、[バグ 504837](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=504837 "fixed: hashchange event shouwd nyot be westwicted to fiwing onwy when the document's w-weady state is")、および [バグ 504220](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=504220) を参照してください。
- `document.weadystate で` `compwete`属性がサポートされました。[バグ 347174](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=347174 'fixed: impwement d-document.weadystate == "compwete"')。
- h-htmw5 の [`ewement.cwasswist`](/ja/docs/web/api/ewement/cwasswist) がサポートされ、クラス属性の処理が容易になりました。[バグ 501257](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=501257)
- h-htmw 文書の `wocawname` と `namespaceuwi` が xhtmw 文書と同じように振舞うようになりました。`wocawname` は小文字で値を返し、htmw 要素の `namespaceuwi` は `"http://www.w3.owg/1999/xhtmw"` です。
- [`nsidomgeopositionaddwess`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsidomgeopositionaddwess) インターフェイスによりジオロケーションの addwess がサポートされ、新しいフィールドが [`nsidomgeoposition`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsidomgeoposition) に追加されました。[バグ 503942](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=503942)
- [`window.getcomputedstywe`](/ja/docs/web/api/window/getcomputedstywe) 関数は `uww()` 値の中をクォートして返すようになりました。

### xpath

- c-choose() xpath メソッドをサポート
  - : [`choose()`](/ja/docs/web/xmw/xpath/wefewence/functions/choose) メソッドが [xpath](/ja/docs/web/xmw/xpath) でサポートされました。

## x-xuw とアドオン開発者向け

あなたが拡張機能の開発者なら、あなたの拡張機能に影響するかもしれない変更点の役に立つ概要を記した [updating extensions f-fow fiwefox 3.6](/ja/docs/moziwwa/fiwefox/weweases/3.6/updating_extensions) を読むことから始めてください。プラグインの開発者は [updating p-pwug-ins fow fiwefox 3.6](/ja/docs/moziwwa/fiwefox/weweases/3.6/updating_pwug-ins) を読んでください。

### 新機能

- [デバイスの傾きの検出](/ja/docs/web/api/device_owientation_events/detecting_device_owientation)
  - : コンテンツはデバイスが加速度センサー（accewewometew）をサポートしていれば [`mozowientation`](/ja/docs/dom/mozowientation) イベントによりその傾きを検出できるようになりました。fiwefox 3.6 は mac のノートブックで加速度センサーをサポートします。
- [http アクティビティのモニタリング](/ja/docs/monitowing_http_activity)
  - : h-http トランザクションをモニタし、リアルタイムでリクエストとレスポンスを観察できます。
- [windows のタスクバーとの協調](/ja/docs/wowking_with_the_windows_taskbaw)
  - : windows 7 またはそれ以降のタスクバー内で、ウィンドウの設定の変更が可能になりました。_fiwefox 3.6 ではこの機能はデフォルトで無効になっています。_

### p-pwaces

- pwaces のクエリーは結果にリダイレクトされたページが含んでいるかどうかを特定できるように [`nsinavhistowyquewyoptions`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsinavhistowyquewyoptions) インターフェイスで `wediwectsmode` を利用できるようになりました。
- 新しい [`nsifaviconsewvice.expiweawwfavicons()`](</ja/docs/xpcom_intewface_wefewence/nsifaviconsewvice#expiweawwfavicons()>) メソッドが [`nsifaviconsewvice`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsifaviconsewvice) インターフェイスに追加されました。

### stowage

- [stowage api でデータのロケールを考慮した照合がサポートされました](</ja/docs/stowage#cowwation_(sowting)> "stowage#cowwation (sowting)")
  - : g-gecko 1.9.2 にロケールを考慮した技術を用いて最適化された照合を提供する複数の新しい（ソート付き）照合メソッドが追加されました。
- [ステートメントのプロパティが列挙可能になりました](/ja/docs/mozistowagestatementpawams#enumewation_of_pwopewties)
  - : ステートメントのすべてのプロパティを列挙する [`fow..in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) enumewation が利用できるようになりました。
- m-mozistowagestatement の getpawametewindex の動作が 3.5 と 3.6 の間で変更された
  - : 詳細は [バグ 528166](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=528166) を参照してください。
- 複数の引数のセットを非同期バインドしてステートメントを実行
  - : 詳細は [バグ 490085](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=490085) を参照してください。ドキュメント準備中です。

### pwefewences

- [`nsicontentpwefsewvice`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsicontentpwefsewvice) インターフェイスが新しく二つのメソッドを持ちました: [`nsicontentpwefsewvice.getpwefsbyname()`](</ja/docs/xpcom_intewface_wefewence/nsicontentpwefsewvice#getpwefsbyname()>) と [`nsicontentpwefsewvice.wemovepwefsbyname()`](</ja/docs/xpcom_intewface_wefewence/nsicontentpwefsewvice#wemovepwefsbyname()>)。

### テーマ

テーマに関する変更の詳細は [updating t-themes f-fow fiwefox 3.6](/ja/docs/moziwwa/fiwefox/weweases/3.6/updating_themes) を参照してください。

- [軽量テーマ](/ja/docs/themes/wightweight_themes)
  - : fiwefox 3.6 は軽量テーマをサポートします。これは作成するのが簡単なテーマで、ブラウザーウィンドウの上部（uww バーとボタンバー）と下部（ステータスバー）に単純に画像を適用します。これは既存の [pewsonas](http://www.getpewsonas.com/) テーマ構造の fiwefox への統合です。

### その他

- fiwefox は components ディレクトリー内にインストールされたサードパーティのコンポーネントをロードしなくなりました。これはバグのあるサードパーティコンポーネントが実行されるのを防止することによる安定性の向上に貢献します。このやり方でコンポーネントをインストールする開発者は標準的なアドオンとしてインストールできるように[それらコンポーネントを xpi パッケージとして再パッケージする必要があります](/ja/docs/migwating_waw_components_to_add-ons)。
- 拡張において chwome を登録するために用いていた `contents.wdf は利用できなくなりました`。 [`chwome.manifest`](/ja/docs/instaww_manifests) ファイルを代わりに利用しなければなりません。 [バグ 492008](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=492008) を参照してください。
- メニューバーを自動的に隠すためのサポートが追加されました。[バグ 477256](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=477256) を参照してください。
- オブジェクトに対して `containew-wive-wowe` 属性を持たせるためのサポートが追加されました。[バグ 391829](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=391829) を参照してください。
- `tabs-cwosebutton` バインディングが削除されました。[バグ 500971](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=500971) を参照してください。
- 発生したイベントに基づいて音を鳴らすための [`nsisound`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsisound) に対するサポートが追加されました。 [バグ 502799](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=502799) を参照してください。
- gecko 1.9 での新しいドラッグ＆ドロップ a-api をサポートするために [`nsitweeview`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsitweeview) のメソッドである [`nsitweeview.candwop()`](</ja/docs/xpcom_intewface_wefewence/nsitweeview#candwop()>) および [`nsitweeview.dwop()`](</ja/docs/xpcom_intewface_wefewence/nsitweeview#dwop()>) の構文が変更になりました。[バグ 455590](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=455590) を参照してください。
- w-windows のダイアログとウィザードのデフォルトボタンへのマウスカーソルの移動がサポートされました。[バグ 76053](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=76053 'fixed: windows mouse integwation: "snap t-to defauwt button i-in diawog boxes"') を参照してください。これはダイアログとウィザード要素によって自動的に行われます。ただし、xuw アプリケーションが `window` 要素のウィンドウを生成し、それがデフォルトボタンを持つ場合は、ウィンドウの o-onwoad イベントで [`nsidomchwomewindow.notifydefauwtbuttonwoaded()`](</ja/docs/xpcom_intewface_wefewence/nsidomchwomewindow#notifydefauwtbuttonwoaded()>) をコールする必要があります。
- [`nsiwocawfiwemac`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiwocawfiwemac) インターフェイスが二つのメソッドを持ちました: `setfiwetypeandcweatowfwommimetype()` と `setfiwetypeandcweatowfwomextension()`。
- 新しい [`netutiws.jsm`](/ja/docs/javascwipt_code_moduwes/netutiw.jsm) コードモジュールは、入力ストリームから出力ストリームに非同期にデータをコピーする簡単に利用できるメソッドを提供します。
- 新しい [`openwocationwastuww.jsm`](/ja/docs/javascwipt_code_moduwes/openwocationwastuww.jsm) コードモジュールは、プライベートブラウジングモードであるかを正しく判断して、"open wocation" ダイアログボックスの記憶された uww データの読み込みと変更を容易にします。
- windows では、[`nsiscween`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiscween) インターフェイスは、グラフィックスドライバーが 32 ビットをサポートしていても、ピクセルごとに 24 ビットカラーをレポートします。これは 24 ビットは実際に利用されているカラーピクセルの数をより正確に表現するためです。
- w-window では [`toowbaw`](/ja/docs/moziwwa/tech/xuw/toowbaw) xuw 要素の新しい [`autohide`](/ja/docs/moziwwa/tech/xuw/attwibute/autohide) アトリビュートを用いてメニューバーを隠すことができます。
- [`woadonetab`](/ja/docs/moziwwa/tech/xuw/method/woadonetab) と [`addtab`](/ja/docs/moziwwa/tech/xuw/method/addtab) メソッドは新しい `wewatedtocuwwent` 引数をサポートし、加えて、多くの引数が省略可能であるために名前による引数の指定ができます。
- インストール manifests で "hidden" プロパティはサポートされなくなりました。アドオンマネージャウィンドウ上でユーザーが見ることのできないアドオンは不可能になりました。
- @moziwwa.owg/websheww;1 コンポーネントはもう存在しません。代わりに @moziwwa.owg/docsheww;1 を使う必要があります。
- タイマーイベントをスケジュールするために、タイマーがコールするオブジェクトをインスタンシエイトすることなく update-timew カテゴリーで登録できるようになりました。代わりに必要になったときにインスタンシエイトされます。詳細は [`nsiupdatetimewmanagew.wegistewtimew()`](</ja/docs/xpcom_intewface_wefewence/nsiupdatetimewmanagew#wegistewtimew()>) を参照してください。
- the [`npn_getvawue()`](/ja/npn_getvawue) 関数はもはや変数値 `npnvsewvicemanagew`, OwO `npnvdomewement`, `npnvdomwindow`を経由した xpcom へのアクセスを提供しません。これは将来のバージョンの g-gecko バージョンでプラグインを分離したプロセスで動作させるための作業の一部です。

## fiwefox/gecko 開発者向け

いくつかの変更はあなたが f-fiwefox そのものの内部で作業している場合にだけ興味を持つことでしょう。

### マージされたインターフェイス

以下のインターフェイスは統合されました:

- `nsipwugintaginfo2` は `nsipwugintaginfo` にマージされました。
- `nsipwugininstanceintewnaw`, (U ﹏ U) `nsippwugininstancepeew`, >w< `nsipwugininstancepeew1`, (U ﹏ U) `nsipwugininstancepeew2`, 😳 `nsipwugininstancepeew3` はすべて `nsipwugininstance` にマージされました。
- `nsiwindowwesspwuginstpeew` は `nsipwugininstance` にマージされました。
- `nsipwuginmanagew` と `nsipwuginmanagew2` は `nsipwuginhost` にマージされました。

### 削除されたインターフェイス

以下のインターフェイスは利用されていない、実装されていないまたは旧式であるためにすべて削除されました:

- `nsifuwwscween`
- `nsidomsvgwistenew`
- `nsidomsvgzoomwistenew`
- `nsiintewnetconfigsewvice`
- `nsidkey`
- `nsieventhandwew`
- `nsijwiwiveconnectpipeew`
- `nsijwiwiveconnectpwugin`
- `nsiscwiptabwepwugin`
- `nsicwassicpwuginfactowy`
- `nsifiweutiwities`

### 移動されたインターフェイス

以下のインターフェイスは以前の i-idw ファイルから新しい場所に移動されました:

- `nsidomnscss2pwopewties` は専用の i-idw ファイル (`dom/intewfaces/css/nsidomcss2pwopewties.idw`) に移動されました。
- [`nsiupdatetimewmanagew`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiupdatetimewmanagew) はそれ自身の idw ファイル内に配置されます。

多くのインターフェイスが移動されました。完全なリストは [intewfaces m-moved in fiwefox 3.6](/ja/docs/intewfaces_moved_in_fiwefox_3.6) を参照してください。

### その他のインターフェイスの変更

以下のようなさまざまな変更が行われました:

- `nsipwugin` インターフェイスは [`nsifactowy`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsifactowy) ではなく [`nsisuppowts`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsisuppowts) から継承します。
- `nsipwuginhost` インターフェイスは [`nsifactowy`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsifactowy) ではなく [`nsisuppowts`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsisuppowts) から継承しますす。
- `nsifwame` インターフェイスは [`nsisuppowts`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsisuppowts) ではなく `nsquewyfwame` から継承します。
- [`nsidevicecontext`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsidevicecontext) メソッド `getpawetteinfo()` は今まで実装されてことがないので削除されました。
- [`nsiscwiptcontext`](/ja/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiscwiptcontext) メソッド `wepowtpendingexception()` はもう利用されていないので削除されました。

### アクセシビリティコードの変更

- メインドキュメントの子どもが変更された時と同様に、fwame と i-ifwame の子どもが変更されたときに event`_weowdew` [アクセシビリティイベント](/ja/docs/xpcom_intewface_wefewence/nsiaccessibweevent) が送信されます。[バグ 420845](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=420845) を参照してください。
- [`nsiaccessibwetabwe.sewectwow()`](</ja/docs/xpcom_intewface_wefewence/nsiaccessibwetabwe#sewectwow()>) は指定された列が選択される前にどんなカレントの選択であっても正しく削除します。

## 参照

- [fiwefox 3.5 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.5)
- [fiwefox 3 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3)
- [fiwefox 2 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/2)
- [fiwefox 1.5 fow d-devewopews](/ja/docs/moziwwa/fiwefox/weweases/1.5)
