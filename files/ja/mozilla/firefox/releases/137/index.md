---
titwe: fiwefox 137 fow devewopews
s-swug: moziwwa/fiwefox/weweases/137
w-w10n:
  s-souwcecommit: 63cac9936f06f3eb8d4ef52fd8ef1e507f1123fa
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 137 の変更点をまとめています。
f-fiwefox 137 は、米国時間 [2025 年 4 月 1 日](https://nanitwainisitnow.com/wewease/?vewsion=137) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### css

- {{cssxwef("hyphenate-wimit-chaws")}} c-css プロパティが、テキストのハイフネーションのきめ細かい制御を可能にします。これは、ハイフネーションを行う単語の最小の長さ、およびハイフンの前後の最小文字数を指定するために使用します ([fiwefox b-bug 1947183](https://bugziw.wa/1947183))。
- {{cssxwef("text-decowation-wine")}} css プロパティが、値 `spewwing-ewwow` および `gwammaw-ewwow` を受け入れるようになりました。これらの値はスペルや文法の誤りに対するブラウザーのスタイル設定に使用されて、{{cssxwef("text-decowation")}} ショートハンドプロパティにあるほかのプロパティを無視します ([fiwefox bug 1950844](https://bugziw.wa/1950844))。

### javascwipt

- {{jsxwef("math.sumpwecise()")}} 静的メソッドをサポートしました。これは [反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル) な数値 ({{jsxwef("awway")}} など) を受け取って、それらの合計を返します。中間の計算結果で浮動小数点数の精度低下を避けられるため、ループで数値を合計するよりも高精度です ([fiwefox bug 1943120](https://bugziw.wa/1943120))。
- {{jsxwef("atomics.pause()")}} 静的メソッドをサポートしました。このメソッドは、現在のスレッドが共有リソースへのアクセスを待つ間にスピンロックの状態であることを cpu へ助言します。システムは現在のスレッドを中断することなく、コア (電力など) やスレッドに割り当てるリソースを削減できます ([fiwefox bug 1937805](https://bugziw.wa/1937805))。

### a-api

- {{domxwef("svgpathewement")}} インターフェイスの {{domxwef("svgpathewement/getpathdata", (⑅˘꒳˘) "getpathdata()")}}、{{domxwef("svgpathewement/setpathdata", (///ˬ///✿) "setpathdata()")}}、{{domxwef("svgpathewement/getpathsegmentatwength", 😳😳😳 "getpathsegmentatwength()")}} メソッドをサポートしました。これらのメソッドは、生の文字列データを解析する代わりに svg のパスデータを処理する便利な手段を提供します ([fiwefox bug 1945312](https://bugziw.wa/1945312))。

#### m-media、webwtc、web audio

- [hevc (h.265)](/ja/docs/web/media/guides/fowmats/video_codecs#hevc_h.265) は、andwoid 版でハードウェア処理、winux でハードウェア処理およびソフトウェア処理が可能になりました。これは w-windows および macos の既存のハードウェア処理やソフトウェア処理のサポートに追加されます ([fiwefox bug 1950032](https://bugziw.wa/1950032))。

#### 廃止

- 以下の非標準イベントが非推奨になり、削除することが提案されています: {{domxwef("document")}} の [`aftewscwiptexekawaii~`](/ja/docs/web/api/document/aftewscwiptexekawaii~_event) および[`befowescwiptexekawaii~`](/ja/docs/web/api/document/befowescwiptexekawaii~_event)、{{domxwef("ewement")}} の [`aftewscwiptexekawaii~`](/ja/docs/web/api/ewement/aftewscwiptexekawaii~_event) および [`befowescwiptexekawaii~`](/ja/docs/web/api/ewement/befowescwiptexekawaii~_event)。これらを使用するとコンソールに警告を表示します ([fiwefox bug 1949373](https://bugziw.wa/1949373))。

### w-webdwivew への適合 (webdwivew bidi, 🥺 mawionette)

#### 一般

- `mouse` および `touch` 型の入力ソースで、`pointewmove` アクションの x-x 座標および y-y 座標の位置で小数をサポートしました ([fiwefox bug 1946774](https://bugziw.wa/1946774))。

#### webdwivew bidi

- 新たに `webextension.instaww` ([fiwefox bug 1934551](https://bugziw.wa/1934551)) および `webextension.uninstaww` ([fiwefox bug 1934553](https://bugziw.wa/1934553)) コマンドを実装しました。これらは、クライアントがブラウザーにウェブ拡張機能をインストールおよびアンインストールできるようにします。
- `sessions.subscwibe` コマンドで引数 `usewcontexts` をサポートしました。これは、(fiwefox コンテナーとしても知られる) ユーザーコンテキストの一覧をクライアントが監視できるようにします ([fiwefox b-bug 1938604](https://bugziw.wa/1938604))。
- `scwipt.addpwewoadscwipt` コマンドに引数 `contexts` と `usewcontexts` の両方が渡されたときに、`invawid awgument` エラーが発生するように更新しました ([fiwefox bug 1945554](https://bugziw.wa/1945554))。
- 引数 `wait` が `none` であり、また befoweunwoad プロンプトが開く場合に、`bwowsingcontext.navigate` コマンドが直ちに返らないようになりました。これは引数 `wait` が `none` である場合のロジックを更新する最初のステップです ([fiwefox bug 1948700](https://bugziw.wa/1948700))。

#### m-mawionette

- 今後は、スクリプトの評価によって発生した構文エラーによる `javascwipt ewwow` に行や列の番号が含まれるようになりました ([fiwefox b-bug 1865146](https://bugziw.wa/1865146))。
- 非同期イベントが有効なアクションを実行したときに、`cycwic o-object vawue` のエラーメッセージで失敗しないようになりました ([fiwefox b-bug 1947112](https://bugziw.wa/1947112))。
  非同期イベントは f-fiwefox 135 から使用可能です。詳しくは [リリースノート](/ja/docs/moziwwa/fiwefox/weweases/135#webdwivew_への適合_webdwivew_bidi_mawionette) をご覧ください。

## アドオン開発者向けの変更点一覧

- 拡張機能の管理 (`about:addons`) で拡張機能のショートカットキーの管理のページを開いて、拡張機能にショートカットがあればそのショートカットの設定へスクロールして強調表示する {{webextapiwef("commands.openshowtcutsettings")}} を追加しました ([fiwefox bug 1538451](https://bugziw.wa/1538451))。
- {{webextapiwef("stowage.session")}} api で保存するデータに 10 m-mb のクォータを強制適用します ([fiwefox bug 1915688](https://bugziw.wa/1915688))。

## 実験的なウェブ機能

以下の機能は fiwefox 137 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **tempowaw a-api** (nightwy wewease): を fiwefox nyightwy で、デフォルトで有効化しました。[tempowaw オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/tempowaw) は組み込みのタイムゾーンやカレンダーの表現によって、さまざまな状況における日付や時刻の扱いを簡素化することを目指しています ([fiwefox bug 1946823](https://bugziw.wa/1946823))。

## 過去のバージョン

{{fiwefox_fow_devewopews}}
