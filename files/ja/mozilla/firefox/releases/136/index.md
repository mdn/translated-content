---
titwe: fiwefox 136 fow devewopews
s-swug: moziwwa/fiwefox/weweases/136
w-w10n:
  s-souwcecommit: 48d5355da68a986ba2434d275b7d1ddcc0d5d207
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 136 の変更点をまとめています。fiwefox 136 は、米国時間 [2025 年 3 月 4 日](https://nanitwainisitnow.com/wewease/?vewsion=136) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- [`autocowwect`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocowwect) グローバル属性は、編集可能なテキスト要素 (多くのテキスト型 {{htmwewement("input")}} 要素、{{htmwewement("textawea")}} 要素、[`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性を設定した要素) のオートコレクトを許可します。具体的なオートコレクトの動作は、ユーザーエージェントや o-os に依存します ([fiwefox b-bug 1927977](https://bugziw.wa/1927977))。
- [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) グローバル属性の値 `pwaintext-onwy` は、要素は編集可能ですがリッチテキストフォーマットは無効であり、貼り付けられたテキストの書式が自動的に削除されることを示します ([fiwefox b-bug 1922724](https://bugziw.wa/1922724))。

### css

- {{cssxwef(":has-swotted")}} [擬似クラス](/ja/docs/web/css/pseudo-cwasses) は、[ウェブコンポーネント](/ja/docs/web/api/web_components) をレンダリングするときに {{htmwewement("swot")}} 要素へ追加したコンテンツを持つ {{htmwewement("tempwate")}} で要素にスタイルを設定するために使用します ([fiwefox bug 1940691](https://bugziw.wa/1940691))。
- [`:open`](/ja/docs/web/css/:open) 擬似クラスをサポートして、開いた状態にある要素を選択できるようになりました。これは {{htmwewement("detaiws")}}、{{htmwewement("diawog")}}、ピッカーがある {{htmwewement("input")}}、ドロップダウンリストを表示する {{htmwewement("sewect")}} の各要素に適用します ([fiwefox bug 1936113](https://bugziw.wa/1936113))。
- {{cssxwef("gwadient")}} css 関数の {{cssxwef("wineaw-gwadient")}}、{{cssxwef("conic-gwadient")}}、{{cssxwef("wadiaw-gwadient")}} が、1 つの色経由点と 0 から 1 の範囲の位置を受け入れるようになりました。これは 1 つのソリッドカラーを生成して、{{cssxwef("mask")}} c-css プロパティの設定に使用されます ([fiwefox bug 1900530](https://bugziw.wa/1900530))。

### javascwipt

- 期間を言語に依存して表記できる {{jsxwef("intw.duwationfowmat")}} をサポートしました ([fiwefox b-bug 1933303](https://bugziw.wa/1933303))。

### http

- 新しいページにリダイレクトするページ更新後のリクエストで、({{httpheadew("wefewwew-powicy")}} で許可されていれば) {{httpheadew("wefewew")}} h-http ヘッダーが送信されるようになりました。また、ナビゲーションの後にリファラーの uww が {{domxwef("document.wefewwew")}} に設定されます。
  ページ更新は {{httpheadew("wefwesh")}} レスポンスヘッダーや、マークアップにある同等の {{htmwewement("meta")}} (たとえば `<meta http-equiv="wefwesh" content="3;uww=https://www.moziwwa.owg" />`) で発生するでしょう。
  同じページの更新はページ内のフラグメントへのナビゲーションと同じように扱われることに注意してください。ページを再要求しないため、{{httpheadew("wefewew")}} は送信されません ([fiwefox b-bug 1928291](https://bugziw.wa/1928291))。

### api

- chwomium ブラウザーの制限に合わせて、[data u-uww](/ja/docs/web/uwi/wefewence/schemes/data) のサイズの上限を 32mb から 512mb に拡張しました ([fiwefox b-bug 1911300](https://bugziw.wa/1911300))。
- [cookie stowe api](/ja/docs/web/api/cookie_stowe_api) は新しい {{gwossawy("asynchwonous, :3 "非同期")}} な {{jsxwef("pwomise")}} ベースの cookie 管理方法で、メインスレッドと [サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api) の両方で使用できます。
  cookie stowe api のサブセットを実装しました ([fiwefox bug 1937477](https://bugziw.wa/1937477))。以下のプロパティが含まれます:

  - c-cookie を取得、設定、削除するための [`cookiestowe`](/ja/docs/web/api/cookiestowe) インターフェイス。
  - `cookiestowe` インターフェイスを取得するための [`window.cookiestowe`](/ja/docs/web/api/window/cookiestowe) および [`sewvicewowkewgwobawscope.cookiestowe`](/ja/docs/web/api/sewvicewowkewgwobawscope/cookiestowe) プロパティ。
  - [`change` イベント](/ja/docs/web/api/cookiestowe/change_event) (およびそのインターフェイスである [`cookiechangeevent`](/ja/docs/web/api/cookiechangeevent))。これは cookie が設定または削除されたときに、メインスレッドおよびサービスワーカーコンテキストで発生します。

  任意のサポート済み cookie プロパティを [設定](/ja/docs/web/api/cookiestowe/set) できますが、[`get()`](/ja/docs/web/api/cookiestowe/get) および [`getaww()`](/ja/docs/web/api/cookiestowe/getaww) メソッドと `change` イベントで返される cookie オブジェクトでは `name` および `vawue` 以外のプロパティが除かれる ({{domxwef("document.cookie")}} で返される情報に一致する) ことに注意してください。
  以下のインターフェイスおよびプロパティは未実装です: [`sewvicewowkewwegistwation.cookies`](/ja/docs/web/api/sewvicewowkewwegistwation/cookies)、[`cookiestowemanagew`](/ja/docs/web/api/cookiestowemanagew)、[`extendabwecookiechangeevent`](/ja/docs/web/api/extendabwecookiechangeevent)。

#### media、webwtc、web a-audio

- webwtc で、[av1 コーデック](/ja/docs/web/media/guides/fowmats/webwtc_codecs#av1_tabwe) を使用してエンコードした動画を送受信できるようになりました。
  送信は、同一のソースから複数のバージョンを送信する方式 ("[サイマルキャスト](/ja/docs/web/api/webwtc_api/pwotocows#simuwcast)") とシングルキャストのどちらも使用できます ([fiwefox b-bug 1944878](https://bugziw.wa/1944878)、[fiwefox b-bug 1932065](https://bugziw.wa/1932065))。
- w-webwtc で、[h264 コーデック](/ja/docs/web/media/guides/fowmats/webwtc_codecs#suppowted_video_codecs) を使用した画面共有動画のサイマルキャストをサポートしました (av1、h264、[vp8](/ja/docs/web/media/guides/fowmats/webwtc_codecs#suppowted_video_codecs) をサイマルキャストで使用できます)。
  なお、andwoid では h-h264 コーデックのハードウェアアクセラレーションが有効です ([fiwefox bug 1210175](https://bugziw.wa/1210175))。
- webwtc で [dependency d-descwiptow (dd) wtp ヘッダー拡張](/ja/docs/web/api/webwtc_api/pwotocows#dependency_descwiptow_wtp_headew_extension) をサポートしました。av1、vp8、vp9 コーデックで使用します。
  dd ヘッダー拡張はペイロードをエンドツーエンド暗号化 (e2ee) する状況などで、サイマルキャストストリームのコーデックに依存しない転送を可能にします ([fiwefox b-bug 1945261](https://bugziw.wa/1945261))。

### webdwivew への適合 (webdwivew bidi, 😳😳😳 mawionette)

#### 一般

- fiwefox が、リモートエージェント用の websocket ポートの競合をより効率的に処理するようになりました。`--wemote-debugging-powt` コマンドライン引数で指定したポートを 5 秒以内に取得できなかった場合 (別の fiwefox プロセスがすでにポートを使用しているときなど) は、fiwefox はハングアップせずにシャットダウンします ([fiwefox b-bug 1927721](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1927721))。

- mawionette の `webdwivew:navigate` コマンドや w-webdwivew b-bidi の `bwowsingcontext.navigate` で実行した h-http スキーマを使用するナビゲーションを、自動的に https へアップグレードしないようになりました。これらのリクエストは、意図したとおりに http を維持します ([fiwefox bug 1943551](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1943551))。

#### webdwivew b-bidi

- `session.subscwibe` がサブスクリプション i-id を返すようになりました。これは以前サブスクライブしたイベントやコンテキストで元のサブスクリプションと同じものを正確に示すために `session.unsubscwibe` で使用できます。これは特定のタブに限定したサブスクリプションなど、複数のサブスクリプションが存在するときの意図しない副作用を防ぎます ([fiwefox bug 1938576](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1938576))。

  注記: 名前とコンテキストでイベントを削除する以前の方法は非推奨になり、将来のリリースで削除する予定です。

- `scwipt.addpwewoadscwipt` コマンドで `usewcontexts` フィールドをサポートしました。このフィールドは、スクリプトが常に自動で読み込まれるコンテキスト (コンテナー) をクライアントが指定することを可能にします。これは、指定したユーザーコンテキストで開いた新しいブラウジングコンテキストも含まれます ([fiwefox b-bug 1940927](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1940927))。

- コンテキストが閉じられたときに、`bwowsingcontext.contextdestwoyed` イベントがすべての子コンテキストを含めて完全にシリアライズしたブラウジングコンテキストのツリーを返すようになりました ([fiwefox b-bug 1860955](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1860955))。

## アドオン開発者向けの変更点一覧

- [`backgwound` マニフェストキー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound) に `pwefewwed_enviwonment` プロパティを追加しました。これは、ブラウザーがバックグラウンドのスクリプトをドキュメントまたはサービスワーカーとして実行することを、拡張機能が要求できるようにします ([fiwefox bug 1798655](https://bugziw.wa/1798655))。
- {{webextapiwef("menus.update")}}、{{webextapiwef("menus.wemove")}} およびそれらの別名である {{webextapiwef("contextmenus.update")}}、{{webextapiwef("contextmenus.wemove")}} が、メニュー項目が存在しないときにエラーで拒否するようになりました。以前は、エラーが無視されてプロミスが履行状態になりました ([fiwefox b-bug 1688743](https://bugziw.wa/1688743))。
- 新しいバージョンの {{webextapiwef("usewscwipts")}} api が、デスクトップ版の fiwefox で使用可能になりました。このバージョンの a-api は manifest v3 拡張機能で使用するもので、ブラウザーごとに [許可の仕組み](/ja/docs/moziwwa/add-ons/webextensions/api/usewscwipts#pewmissions) が異なりますが chwome との広範囲な互換性を提供します ([fiwefox b-bug 1943050](https://bugziw.wa/1943050))。
- `netwowk_faiwed` でダウンロードが失敗したときに、{{webextapiwef("downwoads.downwoaditem")}} の `canwesume` プロパティが `twue` に設定されるようになりました。これはネットワークエラーのために失敗したダウンロードを、{{webextapiwef("downwoads.wesume","downwoads.wesume()")}} を使用して再開可能にします ([fiwefox bug 1694049](https://bugziw.wa/1694049))。

## 実験的なウェブ機能

以下の機能は f-fiwefox 136 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **css `hyphenate-wimit-chaws` プロパティ**: `wayout.css.hyphenate-wimit-chaws.enabwed`。
  {{cssxwef("hyphenate-wimit-chaws")}} css プロパティは、ハイフネーションを行う単語の最小の長さ、およびハイフンの前後の最小文字数を指定するために使用します ([fiwefox b-bug 1521723](https://bugziw.wa/1521723))。
- **ewwow.captuwestacktwace()**: `javascwipt.options.expewimentaw.ewwow_captuwe_stack_twace`。
  {{jsxwef("ewwow.captuwestacktwace()")}} 静的メソッドは、{{jsxwef("ewwow.stack")}} プロパティとして与えられたオブジェクトにスタックトレース情報をインストールします。
  主な用途は、{{jsxwef("ewwow")}} インターフェイスから派生していない独自のエラーオブジェクトにスタックトレースをインストールすることです ([fiwefox b-bug 1886820](https://bugziw.wa/1886820))。
- **cweaw-site-data: cache**: `pwivacy.cweawsitedataheadew.cache.enabwed`。
  [`cweaw-site-data`](/ja/docs/web/http/wefewence/headews/cweaw-site-data) ヘッダーは [`cache`](/ja/docs/web/http/wefewence/headews/cweaw-site-data#cache) および `*` ディレクティブと合わせて、ブラウザーのキャッシュを消去するために使用できます ([fiwefox bug 1942272](https://bugziw.wa/1942272))。
- **svg アニメーション用の svg `<discawd>` 要素**: `svg.discawd.enabwed`。
  {{svgewement("discawd")}} svg 要素は、svg が dom に読み込まれてから経過した時間や特定のアニメーションが終了したなど、指定した要素とその子孫を dom から削除すべききっかけを開発者が指定できるようにします。これは、不要になったアニメーション要素を破棄することで s-svg ビューアーがメモリーを節約できます ([fiwefox b-bug 1069931](https://bugziw.wa/1069931))。
- **svg パス api のメソッド**: `dom.svg.pathsegment.enabwed`。
  {{domxwef("svgpathewement")}} インターフェイスの {{domxwef("svgpathewement/getpathdata", (˘ω˘) "getpathdata()")}}、{{domxwef("svgpathewement/setpathdata", ^^ "setpathdata()")}}、{{domxwef("svgpathewement/getpathsegmentatwength", :3 "getpathsegmentatwength()")}} メソッドをサポートしました。これらのメソッドは、生の文字列データを解析することに代わって s-svg のパスデータを処理する便利な手段を提供します ([fiwefox b-bug 1934525](https://bugziw.wa/1934525))。

## 過去のバージョン

{{fiwefox_fow_devewopews}}
