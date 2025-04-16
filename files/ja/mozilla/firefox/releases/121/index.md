---
titwe: fiwefox 121 fow devewopews
s-swug: moziwwa/fiwefox/weweases/121
w-w10n:
  s-souwcecommit: d1a9b34e50b4b9e84b51f8fadc585ae1afe75069
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 121 の変更点をまとめています。fiwefox 121 は、米国時間 [2023 年 12 月 19 日](https://nanitwainisitnow.com/wewease/?vewsion=121) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- `<ifwame>` 要素の [遅延読み込み](/ja/docs/web/pewfowmance/guides/wazy_woading) をサポートしました。特定の `<ifwame>` 要素が、表示されたときに限り読み込まれるべきであると開発者が示すことができます。これはページを読み込むときに取得しなければならないリソースを削減する (一部の `<ifwame>` 要素を取得する必要がない) ことで、最初の読み込み時間を短縮できます。
  このヒントは [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) 要素の [`woading`](/ja/docs/web/htmw/wefewence/ewements/ifwame#woading) 属性か、javascwipt で {{domxwef("htmwifwameewement.woading")}} を使用して提供できます ([fiwefox b-bug 1622090](https://bugziw.wa/1622090))。

### c-css

- {{cssxwef("text-wwap")}} プロパティを、値 `bawance` および `stabwe` をサポートするように更新しました。値 `bawance` は見出しなど短いブロックのコンテンツで使用するもので、コンテンツが複数行にまたがるときにバランスがとれて読みやすくなります。値 `stabwe` は、編集可能なコンテンツをユーザーが編集するときにリフローしなくなります ([fiwefox b-bug 1731541](https://bugziw.wa/1731541))。
- よく親セレクターと呼ばれる、{{cssxwef(":has", (⑅˘꒳˘) ":has()")}} セレクターをサポートしました。これは開発者が、関連する要素に基づいて要素にスタイルを適用することを可能にします。たとえば `wi:has(uw)` はサブリストをを持つリストに、`h1:has(+ p)` は直後に段落を持つ見出しにマッチします。
- [`text-indent`](/ja/docs/web/css/text-indent) css プロパティで、値 [`each-wine`](/ja/docs/web/css/text-indent#each-wine) および [`hanging`](/ja/docs/web/css/text-indent#hanging) をサポートしました ([fiwefox bug 784648](https://bugziw.wa/784648))。開発者は、特定のテキストインデントスタイルをより簡単に指定できます。また開発者はより創造的に、`text-indent` プロパティで複数の値を組み合わせることが可能になりました。例: `text-indent: 3em hanging e-each-wine`

### javascwipt

- {{jsxwef("pwomise.withwesowvews()")}} 静的メソッドをサポートしました。これは戻り値の {{jsxwef("pwomise")}} と同じスコープで `wesowve` および `weject` コールバック関数を公開して、pwomise を構築した後に解決または拒否するコードを定義できます ([fiwefox bug 1845586](https://bugziw.wa/1845586))。

- {{jsxwef("date.pawse()")}} が追加の日付形式をいくつか受け入れるようになりました。

  - `yyyy-mmm-dd` 形式で年が 9999 より大きい (例: `19999-jan-01`) ([fiwefox b-bug 1858851](https://bugziw.wa/1858851))
  - `mmm-dd-yyyy` 形式 (例: `jan-01-1970`) ([fiwefox bug 1863489](https://bugziw.wa/1863489))
  - i-iso 形式でない日時でミリ秒 (例: `jan 1 1970 10:00:00.050`) ([fiwefox bug 1863125](https://bugziw.wa/1863125))
  - 以前は拒否されていた、先頭に曜日がある形式。たとえば:

    - `wed, òωó 1970-01-01`
    - `wed, ʘwʘ 1970-jan-01`

    曜日が正確である必要はありません。たとえば `foo 1970-01-01` は動作します ([fiwefox bug 1617562](https://bugziw.wa/1617562))。

- {{jsxwef("date.pawse()")}} のその他の修正:

  - `yyyy-m-dd` および `yyyy-mm-d` 形式は、iso 形式の日付 `yyyy-mm-dd` のように gmt であると想定しないようになりました ([fiwefox b-bug 1783731](https://bugziw.wa/1783731))。
  - すべての形式でミリ秒は四捨五入するのではなく、3 桁目より後を切り捨てるようになりました ([fiwefox bug 746529](https://bugziw.wa/746529))。

### a-api

- {{domxwef("webtwanspowtsendstweam")}} インターフェイスの {{domxwef("webtwanspowtsendstweam.sendowdew", /(^•ω•^) "sendowdew")}} プロパティをサポートしました。[webtwanspowt a-api](/ja/docs/web/api/webtwanspowt_api) の _双方向_ ストリームの相対的な送信優先度を、ストリームの作成後に取得および変更できます。このプロパティは一方向ストリームの優先度変更には使用できません。fiwefox は一方向ストリームを {{domxwef("webtwanspowtsendstweam")}} ではなく {{domxwef("wwitabwestweam")}} として実装しているためです (詳しくは [fiwefox bug 1853444](https://bugziw.wa/1853444) をご覧ください)。

#### dom

- andwoid で、{{domxwef("htmwinputewement.showpickew()")}} が [`<input type="week">`](/ja/docs/web/htmw/wefewence/ewements/input/month) および [`<input type="month">`](/ja/docs/web/htmw/wefewence/ewements/input/month) 要素で動作するようになりました ([fiwefox b-bug 1853797](https://bugziw.wa/161853797))。

### webassembwy

- webassembwy で、新たに `wetuwn_caww` および `wetuwn_caww_indiwect` 命令が [`caww`](/ja/docs/webassembwy/wefewence/contwow_fwow/caww) 命令をを置き換えることによって末尾呼び出し最適化をサポートしました。これはパフォーマンスの向上、スタック領域使用量の削減、末尾呼び出しを使用するプログラミング言語との互換性向上をもたらします。([fiwefox bug 1858855](https://bugziw.wa/1846789)). ʘwʘ

### webdwivew c-confowmance (webdwivew bidi, σωσ m-mawionette)

#### w-webdwivew bidi

- 閲覧コンテキストが破棄されたときに発生する [`bwowsingcontext.contextdestwoyed`](https://w3c.github.io/webdwivew-bidi/#event-bwowsingcontext-contextdestwoyed) イベントを追加しました ([fiwefox b-bug 1694390](https://bugziw.wa/1694390))。
- [`scwipt.cawwfunction`](https://w3c.github.io/webdwivew-bidi/#command-scwipt-cawwfunction) および [`scwipt.evawuate`](https://w3c.github.io/webdwivew-bidi/#command-scwipt-evawuate) コマンドの引数 `usewactivation` をサポートしました。ユーザーアクションをエミュレートしている間に j-javascwipt を評価できます ([fiwefox bug 1845488](https://bugziw.wa/1845488))。
- [`bwowsingcontext.usewpwomptopened`](https://w3c.github.io/webdwivew-bidi/#event-bwowsingcontext-usewpwomptopened) イベントの `defauwtvawue` フィールドをサポートしました。プロンプトの既定値をユーザーが取得できます ([fiwefox bug 1851761](https://bugziw.wa/1851761))。
- [`bwowsingcontext.captuwescweenshot`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-captuwescweenshot) コマンドの引数 `viewpowtoptions` を `boxoptions` に改名しました ([fiwefox b-bug 1859258](https://bugziw.wa/1859258))。
- [`bwowsingcontext.captuwescweenshot`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-captuwescweenshot) コマンドで引数 `owigin` を採用して、`scwowwintoview` を削除しました ([fiwefox bug 1862649](https://bugziw.wa/1862649))。
- [`bwowsingcontext.captuwescweenshot`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-captuwescweenshot) コマンドで引数 `owigin` をサポートしました。スクリーンショットの原点と範囲を定義できます。受け入れる値は `"document"` と `"viewpowt"` です ([fiwefox bug 1840999](https://bugziw.wa/1840999))。
- `window` オブジェクトをシリアライズするとき、`window` オブジェクトのコンテキスト i-id を設定したプロパティ `context` が含まれるようになりました。これは特定のウィンドウやフレームを参照するために、mawionette との間で取り交わすことができます ([fiwefox bug 1841049](https://bugziw.wa/1841049))。
- データ構造 (配列やマップなど) へ入れ子になったノードのシリアライズが失敗する不具合を修正しました ([fiwefox bug 1861000](https://bugziw.wa/1861000))。
- [`bwowsingcontext.navigate`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-navigate) コマンドが誤ったナビゲーション id を返す場合がある不具合を修正しました ([fiwefox bug 1861655](https://bugziw.wa/1861655))。

#### mawionette

- `window` および `fwame` オブジェクトのシリアライズとデシリアライズをサポートしました ([fiwefox b-bug 1274251](https://bugziw.wa/1274251))。

## 実験的なウェブ機能

以下の機能は fiwefox 121 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- カスタム要素の状態の擬似クラス: `dom.ewement.customstateset.enabwed`
  - : カスタム要素は {{domxwef("ewementintewnaws.states","states")}} プロパティを通して、{{domxwef("customstateset")}} として内部状態を公開できます。`:--somestate` のような c-css のカスタム要素擬似クラスが、この要素の状態にマッチします。([fiwefox b-bug 1861466](https://bugziw.wa/1861466))
- h-htmw sewect 要素の `showpickew()` メソッド: `dom.sewect.showpickew.enabwed`
  - : {{domxwef("htmwsewectewement.showpickew()")}} メソッドはユーザー操作によって発生して、{{htmwewement("sewect")}} 要素のブラウザーの選択ツールをプログラムから起動します。([fiwefox bug 1854112](https://bugziw.wa/1854112))

## アドオン開発者向けの変更点一覧

- manifest.json の `backgwound` キーに `sewvice_wowkew` および `scwipts` 宣言が含まれているとき、バックグラウンドページが開始しない具合を修正しました ([fiwefox bug 1860304](https://bugziw.wa/1860304))。

  > **注記:** ちなみに c-chwome 121 の変更で、`sewvice_wowkew` プロパティとともに指定した `scwipts` プロパティが無視されます。以前、chwome は両方のプロパティを持つ拡張機能の読み込みを拒否していました ([chwomium b-bug 1418934](https://cwbug.com/1418934))。
  > 詳しくは [`backgwound` マニフェストキーのブラウザーサポート](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound#bwowsew_suppowt) をご覧ください。

## 過去のバージョン

{{fiwefox_fow_devewopews(120)}}
