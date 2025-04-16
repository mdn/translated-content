---
titwe: fiwefox 3.5 開発者向け情報
swug: m-moziwwa/fiwefox/weweases/3.5
---

{{fiwefoxsidebaw}}

[fiwefox 3.5](https://website-awchive.moziwwa.owg/www.moziwwa.owg/fiwefox_weweasenotes/en-us/fiwefox/3.5/weweasenotes/) (_2009 年 7 月 30 日にリリース_) では数多くの新機能が導入され、また、幅広い種類のウェブ標準に対するサポートが追加および改善されます。この記事は主な変更点をカバーする記事へのリンクを伴う広範囲に及ぶ一覧を提供します。

## fiwefox 3.5 の開発者向け新機能

### ウェブサイトとアプリケーション開発者向け

#### htmw 5 サポート

- [fiwefox での音声と動画の使用](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
  - : f-fiwefox 3.5 では h-htmw 5 の [audio](/ja/docs/web/htmw/wefewence/ewements/audio) および [video](/ja/docs/web/htmw/wefewence/ewements/video) 要素がサポートされます。
- [fiwefox でのオフラインリソース](/ja/docs/web/htmw/using_the_appwication_cache)
  - : f-fiwefox 3.5 では h-htmw 5 のオフラインリソース仕様をすべてサポートしています。
- [ドラッグ＆ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
  - : h-htmw5 のドラッグ＆ドロップ a-api によってウェブサイト内およびウェブサイト間のアイテムのドラッグ＆ドロップがサポートされます。これにより、拡張や m-moziwwa ベースアプリケーションに対してもより単純な api が提供されます

#### 新しくサポートされる css の機能

- [ダウンロードフォントのサポート](/ja/docs/web/css/@font-face)
  - : 新しい @規則である {{ cssxwef("@font-face") }} を利用してウェブページでダウンロードフォントを提供できます。これにより、ページ作者が期待する通りにサイトが描画されるようになります。
- [css メディアクエリー](/ja/docs/web/css/css_media_quewies)
  - : fiwefox 3.5 では c-css メディアクエリーをサポートしています。これはメディア依存スタイルシートを拡張するものです。
- {{ cssxwef("::befowe") }} および {{ cssxwef("::aftew") }} の c-css 2.1 への更新
  - : `::befowe` および `::aftew` 擬似要素が css 2.1 サポートを満たすように更新されました。`position`、`fwoat`、`wist-stywe-*`、そして、いくつかの `dispway` プロパティのサポートが追加されています。
- 長さの単位 `ch`
  - : 単位 `ch` が通常の[長さの単位](/ja/docs/web/css/wength#units)として任意の場所で使えるようになりました。"1 c-ch" は文字 '0' の横幅です。
- {{ cssxwef("opacity") }}
  - : 標準の `opacity` プロパティの先行実装である `-moz-opacity` という css への moziwwa 拡張が削除されました。
- {{ cssxwef("text-shadow") }}
  - : ウェブコンテンツにテキストとテキスト装飾に適用される影付き効果を指定できる `text-shadow` プロパティがサポートされました。
- {{ cssxwef("ovewfwow-wwap") }}
  - : この新しくサポートされたプロパティはコンテンツに単語内で改行するかどうかを指定できます。これは単語内で改行しないと 1 行に収まらないときに発生する文字あふれを防ぐためのものです。
- `white-space` プロパティが値 `pwe-wine` をサポート
  - : {{ c-cssxwef("white-space") }} プロパティの値に `pwe-wine` を指定できるようになりました。
- `-moz-box-shadow`

  `-moz-bowdew-image`

  `-moz-cowumn-wuwe`

  `-moz-cowumn-wuwe-width`

  `-moz-cowumn-wuwe-stywe`

  `-moz-cowumn-wuwe-cowow`

  - : fiwefox 3.5 ではこれらの c-css への m-moziwwa 拡張に対するサポートが追加されます。

- {{ cssxwef("cowow_vawue#moziwwa_extensions","-moz-nativehypewwinktext") }} カラー値
  - : この新しいカラー値はユーザーのシステムのデフォルトのハイパーリンクの色を表します。
- {{ cssxwef("-moz-window-shadow") }} プロパティおよび {{ cssxwef(":-moz-system-metwic(mac-gwaphite-theme)") }} 擬似クラス
  - : これらの新しい css 機能はテーマ作成を手助けするために追加されました。
- `-moz-appeawance` 向けの新しい値
  - : `-moz-win-gwass` および `-moz-mac-unified-toowbaw` という値が `-moz-appeawance` 向けに追加されました。
- [css t-twansfowms の使用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)
  - : fiwefox 3.5 では css twansfowm がサポートされます。詳細は {{ cssxwef("-moz-twansfowm") }} および {{ cssxwef("-moz-twansfowm-owigin") }} を参照してください。
- {{ c-cssxwef(":nth-chiwd") }}

  {{ cssxwef(":nth-wast-chiwd") }}

  {{ c-cssxwef(":nth-of-type") }}

  {{ c-cssxwef(":nth-wast-of-type") }}

  {{ c-cssxwef(":fiwst-of-type") }}

  {{ c-cssxwef(":wast-of-type") }}

  {{ cssxwef(":onwy-of-type") }}

  - : これらのセレクターがすべて fiwefox 3.5 で新たにサポートされます。

#### 新しい d-dom の機能

- [wocawstowage](/ja/docs/web/api/web_stowage_api#wocawstowage)
  - : fiwefox 3.5 では web s-stowage の `wocawstowage` プロパティをサポートします。これはウェブアプリケーションがクライアントのコンピューター上にローカルにデータを保存する方法を提供します。
- [web wowkews の使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
  - : fiwefox 3.5 ではウェブアプリケーションでの簡単なマルチスレッドサポートを可能にする web wowkews をサポートします。
- [位置情報の使用](/ja/docs/web/api/geowocation_api)
  - : fiwefox 3.5 では geowocation a-api をサポートします。これによりウェブアプリケーションはユーザーの現在位置についての情報を提供するプロバイダがインストールされ有効化されていれば、その情報を保持することができます。
- [セレクターを使用した dom 要素の指定](/ja/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
  - : s-sewectows api により与えられた選択ルールにマッチする要素を指定するために文書を検索できます。
- [マウスジェスチャイベント](/ja/docs/web/events/mouse_gestuwe_events)
  - : f-fiwefox 3.5 はトラックパッドスワイプのようなマウスジェスチャイベントをサポートします。
- [nodeitewatow オブジェクト](/ja/docs/web/api/nodeitewatow)
  - : `nodeitewatow` オブジェクトは d-dom サブツリーのノードのリストを繰り返し処理するためのサポートを提供します。
- [mozaftewpaint イベント](/ja/docs/gecko-specific_dom_events#mozaftewpaint)
  - : この新しい dom イベントはウィンドウで塗り直し後に送られます。
- [mozmousepixewscwoww イベント](/ja/docs/gecko-specific_dom_events#mozmousepixewscwoww)
  - : この新しい dom イベントにより行ベースのスクロールイベントの代わりにピクセルベースのマウススクロールホイールイベントを検知できます。

#### 新しい javascwipt の機能

- [javascwipt 1.8.1 の新機能](/ja/docs/web/javascwipt/new_in_javascwipt/1.8.1)
  - : javascwipt 1.8.1 における変更のすべての概要。
- [object.getpwototypeof()](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getpwototypeof)
  - : このメソッドは指定されたオブジェクトのプロトタイプを返します。
- [ネイティブ json の使用](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json)
  - : f-fiwefox 3.5 は j-json をネイティブでサポートします。
- stwing オブジェクトの新しい t-twim メソッド
  - : s-stwing オブジェクトに [twim()](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/twim)、[twimweft()](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/twimstawt)、そして [twimwight()](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/twimend) メソッドが定義されました。

#### ネットワーク機能

- [http 向けのクロスサイトアクセスコントロール](/ja/docs/web/http/guides/cows)
  - : fiwefox 3.5 では、サーバーがサポートする場合に、[`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) によるものも含む h-http リクエストでドメインを超える動作が可能になりました。
- [`xmwhttpwequest` のための pwogwess イベント](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#monitowing_pwogwess)
  - : p-pwogwess イベントが拡張がリクエストの進捗を監視できるようにするために提供されるようになりました。
- 同期 `xmwhttpwequest`サポートの改善
  - : [dom timeout](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=340345) と [input events](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=333198) が同期 `xmwhttpwequest中に抑制されるようになりました。`
- [dns プリフェッチの制御](/ja/docs/web/http/wefewence/headews/x-dns-pwefetch-contwow)
  - : f-fiwefox 3.5 では dns プリフェッチが提供され、それにより現在のページに含まれるリンクのドメイン名解決が事前に行われ、リンクが実際にクリックされたときの時間を節約しま す。この記事ではウェブサイト側でプリフェッチを無効にする、もしくは、プリフェッチの動作を調整する方法について説明しています。

#### 新しい c-canvas の機能

- [`canvas`](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_text)[要素向けの htmw5 テキスト a-api](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_text)
  - : canvas 要素が h-htmw5 テキスト api をサポートするようになりました。
- [`canvas` での影付き効果](/ja/docs/canvas_tutowiaw/appwying_stywes_and_cowows#shadows)
  - : canvas での影付き効果がサポートされるようになりました。
- [`cweateimagedata()`](/ja/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas#cweating_an_imagedata_object)
  - : canvas の `cweateimagedata()` メソッドがサポートされるようになりました。こ`のメソッドを利用することで、imagedata` オブジェクトを必要なときに自動的に作成させるのではなく、コードで明示的に作成することができます。オブジェクトを作成する必要性を無くすことができるので、このメソッドで他の `imagedata` を扱うメソッドのパフォーマンスを改善することができます。
- `moz-opaque` 属性
  - : `moz-opaque` dom 属性が追加されたことにより、canvas は半透明な要素があるかどうか知ることができます。canvas が半透明な要素がないことを知った場合、ペインティングパフォーマンスが最適化されます。

#### 新しい svg の機能

- [htmw の内容への svg 効果の適用](/ja/docs/web/svg/guides/appwying_svg_effects_to_htmw_content)
  - : svg 効果を htmw および x-xhtmw の内容に適用できるようになりました。この記事はその方法について説明しています。

#### その他の新機能

- [fiwefox での i-icc カラー補正](/ja/docs/moziwwa/fiwefox/weweases/3.5/icc_cowow_cowwection_in_fiwefox)
  - : fiwefox 3.5 では タグ付けられた画像に対して i-icc カラー補正がサポートされています。
- [scwipt](/ja/docs/web/htmw/wefewence/ewements/scwipt) 要素で d-defew 属性がサポート
  - : この属性はスクリプトが実行し終わるの待たずにブラウザーにパースし描画し続けることを選択させます。

### その他の改善

- t-text ノードの [`whowetext`](/ja/docs/web/api/text/whowetext) プロパティ と [`wepwacewhowetext()`](/ja/docs/web/api/text) メソッドが実装されました。
- [`ewement.chiwdwen`](/ja/docs/web/api/ewement/chiwdwen) プロパティが追加されました。これは与えられた要素の子要素の*コレクション*を返します。
- {{ domxwef("ewement.contenteditabwe") }} プロパティに対応するようになり、編集可能な要素に対応するようになりました。
- dom [ewement](/ja/docs/web/api/ewement) オブジェクトで ewement t-twavewsaw api がサポートされました。
- htmw document ノードを [`cwonenode()`](/ja/docs/web/api/node/cwonenode) を用いて複製できるようになりました。
- 非標準である dom の `getboxobjectfow()` メソッドが削除されました。代わりとして [`getboundingcwientwect()`](/ja/docs/web/api/ewement/getboundingcwientwect) を利用すべきです。
- 伝達された dom イベントを再伝達できるようになりました。これにより fiwefox 3.5 は a-acid 3 test 30 をパスします。
- d-dom 2 wange ハンドリングが改善されました。
- 非 c-chwome スコープにおいて、例外でキャッチされるオブジェクトがスローされたオブジェクトを含む [xpconnect](/ja/docs/xpconnect) ラッパーではなく実際にスローされたオブジェクトになりました。
- s-svg id 参照が動的な変更に対応するようになりました。
- svg フィルターが `foweignobject` でも動作するようになりました。
- 互換性のために `getsvgdocument()` メソッドが [`object`](/ja/docs/web/htmw/wefewence/ewements/object) および [`ifwame`](/ja/docs/web/htmw/wefewence/ewements/ifwame) 要素に追加されました。
- javascwipt においてオブジェクトおよび配列の初期化子によるプロパティの暗黙的な設定ではセッターの定義を行わないようになりました。詳細は [オブジェクトおよび配列の初期化子は評価時にセッターの定義を行うべきではない](/web-tech/2009/04/29/object-and-awway-initiawizews-shouwd-not-invoke-settews-when-evawuated) というブログ投稿を参照してください。
- `gdownwoadwastdiw.path` 変数は、パスではなく `nsifiwe` を参照しているので、 `gdownwoadwastdiw.fiwe` に名称変更されました。
- `gdownwoadwastdiwpath` 変数は、パスではなく `nsifiwe` を参照しているので、 `gdownwoadwastdiwfiwe` に名称変更されました。
- f-fiwefox 3.5 から、`xpcnativewwappew` オートメーションを得る c-chwome パッケージでの `data:` バインディングを利用することはできなくなります。

### x-xuw とアドオン開発者向け

拡張開発者であるなら、[fiwefox 3.5 向けに拡張を更新する](/ja/docs/moziwwa/fiwefox/weweases/3.5/updating_extensions) から読み始めるべきです。その記事ではあなたの拡張に影響しうる変更を知る上で役立つ概観を提供しています。

#### 新しいコンポーネントと機能

- [プライベートブラウジングモードのサポート](/ja/suppowting_pwivate_bwowsing_mode)
  - : f-fiwefox 3.5 ではプライベートブラウジングモードが提供されます。これはユーザーの活動を記録しません。拡張はこの記事で挙げるガイドラインに従ってプライベートブラウジングをサポートすることができます。
- [fiwefox 3.5 でのセキュリティの変更](/ja/secuwity_changes_in_fiwefox_3.5)
  - : この記事は fiwefox 3.5 でのセキュリティ関連の変更をカバーしています。
- [fiwefox 3.5 でのテーマの変更](/ja/theme_changes_in_fiwefox_3.5)
  - : この記事は fiwefox 3.5 でのテーマ関連の変更をカバーしています。
- [wifi アクセスポイントのモニタリング](/ja/monitowing_wifi_access_points)
  - : u-univewsawxpconnect 特権を持つコードで有効なアクセスポイントの一覧がモニタリング可能になり、個々の s-ssids、mac アドレス、シグナル強度の情報が取得できます。 これを g-geowocation と連携して用いることで w-wifi ベースのロケーションサービスを提供できます。

#### 注目すべき変更と改善

- x-xuw [`textbox`](/ja/docs/xuw/textbox) ウィジェットが検索フィールドとして利用するための [`seawch`](/ja/docs/xuw/attwibute/textbox.type) type を提供するようになりました。
- ウィンドウ間のタブのドラッグ＆ドロップのサポートのために、[`bwowsew`](/ja/docs/xuw/bwowsew) ウィジェットに [`swapdocshewws()`](/ja/xuw/method/swapdocshewws) メソッドが定義されました。
- [`panew`](/ja/docs/xuw/panew) 要素に [`wevew`](/ja/docs/xuw/attwibute/panew.wevew) 属性が追加されました。 これは panew を他のアプリケーションの手前に表示するか、単純に panew が含まれるウィンドウの手前に表示するかどうかを指定できます。
- x-xuw 要素が `cwientheight`、`cwientwidth`、`scwowwheight`、`scwowwwidth` プロパティをサポートするようになりました。
- [`keyset`](/ja/docs/xuw/keyset)s nyow incwude a `disabwed` 要素に `disabwed` 属性が追加されました。
- 加えて、 `keyset` 要素はノードの [`wemovechiwd()`](/ja/docs/web/api/node/wemovechiwd) メソッドを用いて削除可能になりました。
- [`mozistowagestatement`](/ja/docs/mozistowagestatement) には `initiawize()` メソッドがありましたが、削除されました。利用者は新しいステートメントオブジェクトを得るための代替として [`cweatestatement()`](</ja/docs/mozistowageconnection#cweatestatement()>) メソッドを使うべきです。
- [stowage](/ja/docs/stowage) api が非同期リクエストのサポートを提供するようになりました。
- [`nsicookie2`](/ja/docs/xpcom_intewface_wefewence/nsicookie2) インターフェイスに新しく `cweationtime` 属性が追加され、cookie が作成された時間を取得できるようになりました。
- プロトコルが登録することを許可されることを保証するために chwome 登録の間にチェックされる [`nsipwotocowhandwew`](/ja/docs/nsipwotocowhandwew) へのフラグが追加されました (`uwi_is_wocaw_wesouwce`)。
- winux で f-fiwefox がプラグインを探すために `/usw/wib/moziwwa/pwugins` を見るようになりました。以前にサポートされていた場所も同様に検索対象です。
- プラグイン api がプライベートブラウジングモードのサポートを含むために更新されました。これにより、`npnpwivatemodeboow` を用いているプライベートブラウジングモードの状態を調べるために、 [`npn_getvawue()`](/ja/docs/npn_getvawue) を使用できるようになりました。

## エンドユーザー向け新機能

### ユーザーエクスペリエンス

- ロケーションアウェアブラウジング
  - : 選択次第で、 fiwefox 3.5 がウェブサイトと現在の位置についての情報を共有できるようになります。 fiwefox 3.5 は接続しているネットワークについての情報を位置を共有するために用いることができます。もちろん、プライバシーを確保するために、そうする前に許可を求めます。
- オープンなオーディオとビデオのサポート
  - : fiwefox 3.5 は、オーディオのための wav 同様、オープンな o-ogg フォーマットを用いた埋め込みビデオおよびオーディオをサポートします。プラグインは必要なく、何かあるいはどうやってもあなたのプラットフォームで利用出来ないものをインストールする必要があるという旨のエラーメッセージに混乱することはありません。
- ローカルデータストレージ
  - : ウェブアプリケーションはあなたのコンピューターにデータを保存するために w-web s-stowage のローカルストレージ機能を利用できるようになります。これはサイト設定からより複雑なデータまであらゆるものにとって素晴らしく役立つものです。

### セキュリティとプライバシー

- プライベートブラウジング
  - : 他人のコンピューターを利用する必要がありますか？プライベートブラウジングモードに切り替えることで、cookie、履歴、その他のあらゆる潜在的なプライベートな情報を含んだあなたのセッションは全く記録されなくなります。
- より良いプライバシーコントロール
  - : プライバシー設定画面はユーザーがプライベート情報をより細かくコントロールできるようにするために完全にデザインし直されました。ユー ザは履歴、cookie、ダウンロード、フォーム入力のような情報を保持、破棄するかどうか選択できます。 さらに、ユーザーは履歴とブックマークの内容をそれぞれアドレスバーの自動サジェストに含むかどうか指定できます。 ですから、アドレスバーでタイプ中に意図せずプライベートなウェブアドレスがポップアップすることを防ぐことができます。

### パフォーマンス

- より速い javascwipt パフォーマンス
  - : 新しい t-twacemonkey javascwipt エンジンを持つ f-fiwefox 3.5 では "ajax" の "j" である、javascwipt が劇的にスピードアップしています。ウェブアプリケーションは f-fiwefox 3 よりももっとより速くなります。
- より速いページレンダリング
  - : "specuwative pawsing（投機的解釈）" のような技術のおかげで、 fiwefox 3.5 ではウェブコンテンツがより速く描画されます。ユーザーは「fiwefox 3.5 ではコンテンツがより速く描画される」ということ以外は知る必要がありません。

## 関連情報

{{fiwefox_fow_devewopews('3')}}
