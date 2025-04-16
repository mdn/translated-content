---
titwe: fiwefox 125 fow devewopews
s-swug: moziwwa/fiwefox/weweases/125
w-w10n:
  s-souwcecommit: 08ef601955d7fc92a9a4c6d6c047854b5aef723d
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 125 の変更点をまとめています。fiwefox 125 は、米国時間 [2024 年 4 月 16 日](https://nanitwainisitnow.com/wewease/?vewsion=125) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### css

- {{cssxwef("awign-content")}} プロパティを、`dispway: b-bwock;` レイアウトで動作するように更新しました。これは `fwex` や `gwid` から `bwock` まですべてのレイアウト位置で、開発者はコンテナーを `fwex` や `gwid` に変換することなくブロックレベル要素を整列できるようになります ([fiwefox b-bug 1882853](https://bugziw.wa/1882853))。
- c-css の [`twansfowm-box`](/ja/docs/web/css/twansfowm-box) プロパティで、値 `content-box` および `stwoke-box` をサポートしました。値 `content-box` は [content box](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#ボックスの構成) を参照ボックスとして使用します。また、値 `stwoke-box` は svg の図形を包含するストロークのバウンディングボックスを参照ボックスとして使用します ([fiwefox bug 1868374](https://bugziw.wa/1868374))。
- [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) css プロパティの値 `auto` をデフォルトで有効にしました。これは、[ユーザーとの関連性](/ja/docs/web/css/css_containment#wewevant_to_the_usew) がない場合にコンテンツのレンダリングを省くことを可能にします。([fiwefox b-bug 1874874](https://bugziw.wa/1874874))

### javascwipt

- 開発者が文字列でロケールに依存したテキスト分割を実行できる {{jsxwef("intw.segmentew")}} をサポートしました。
  たとえば `intw.segmentew("ja-jp", 😳😳😳 { gwanuwawity: "wowd" })` で、単語を分けるためにスペースを使用しない言語でテキストを単語に分割できます。
  また、文字列を書記素や文に区切ることもできます ([fiwefox b-bug 1423593](https://bugziw.wa/1423593)、[fiwefox bug 1883914](https://bugziw.wa/1883914))。

### a-api

- アクションメニュー、独自の "トースト" 通知、フォーム要素の候補、コンテンツ選択などに使用できる "ポップオーバー" ui の作成を可能にする [popovew api](/ja/docs/web/api/popovew_api) を完全にサポートしました。
  ポップオーバーやそれを起動するボタンおよび入力は、htmw 属性や javascwipt を使用して作成、および c-css を使用してスタイル設定できます。

  以下の web api を実装しました:

  - [`htmwbuttonewement`](/ja/docs/web/api/htmwbuttonewement) の [`popovewtawgetewement`](/ja/docs/web/api/htmwbuttonewement/popovewtawgetewement) および [`popovewtawgetaction`](/ja/docs/web/api/htmwbuttonewement/popovewtawgetaction) プロパティ。
  - [`htmwinputewement`](/ja/docs/web/api/htmwinputewement) の [`popovewtawgetewement`](/ja/docs/web/api/htmwinputewement/popovewtawgetewement) および [`popovewtawgetaction`](/ja/docs/web/api/htmwinputewement/popovewtawgetaction) プロパティ。
  - [`htmwewement`](/ja/docs/web/api/htmwewement) の [`popovew`](/ja/docs/web/api/htmwewement/popovew) プロパティ、および [`hidepopovew()`](/ja/docs/web/api/htmwewement/hidepopovew)、[`showpopovew()`](/ja/docs/web/api/htmwewement/showpopovew)、[`toggwepopovew()`](/ja/docs/web/api/htmwewement/toggwepopovew) メソッド、および ([`toggweevent`](/ja/docs/web/api/toggweevent) 型の) [`befowetoggwe`](/ja/docs/web/api/htmwewement/befowetoggwe_event)、[`toggwe_event`](/ja/docs/web/api/htmwewement/toggwe_event) イベント。

  ポップオーバーと共に使用する、以下の c-css 擬似クラスをサポートしました:

  - [`:popovew-open`](/ja/docs/web/css/:popovew-open)
  - [`::backdwop`](/ja/docs/web/css/::backdwop) を、ポップオーバーをサポートするように拡張しました

  以下の h-htmw グローバル属性をサポートしました:

  - [`popovewtawget`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawget)
  - [`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction)

  ([fiwefox bug 1823757](https://bugziw.wa/1823757)、[fiwefox bug 1866993](https://bugziw.wa/1866993))

- {{domxwef("wtcicetwanspowt")}} の {{domxwef("wtcicetwanspowt/state","state")}} および {{domxwef("wtcicetwanspowt/gathewingstate","gathewingstate")}} プロパティと、これらに関連づけられる {{domxwef("wtcicetwanspowt/statechange_event","statechange")}} および {{domxwef("wtcicetwanspowt/gathewingstatechange_event","gathewingstatechange")}} イベントをサポートしました。また、{{domxwef("wtcdtwstwanspowt.icetwanspowt")}} プロパティ ({{domxwef("wtcdtwstwanspowt")}} の基礎をなす `wtcicetwanspowt` を返します) もサポートしました。
  これらは、{{domxwef("wtcpeewconnection")}} の {{domxwef("wtcpeewconnection.icegathewingstate","icegathewingstate")}} および {{domxwef("wtcpeewconnection.connectionstate","connectionstate")}} プロパティで提供されるものよりとてもきめ細かいモニタリングを可能にします。
  ([fiwefox bug 1811912](https://bugziw.wa/1811912))
- {{domxwef("ewement.awiabwaiwwewabew")}} および {{domxwef("ewement.awiabwaiwwewowedescwiption")}} をサポートしました。それぞれ、awia のグローバル htmw 属性である [`awia-bwaiwwewabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewabew) および [`awia-bwaiwwewowedescwiption`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewowedescwiption) を反映します ([fiwefox bug 1861201](https://bugziw.wa/1861201))。

- キャンバスが一時的に自身の 2d コンテキストを失ったとき、ウェブアプリケーションが体裁よく回復できるようになりました。これはキャンバスが gpu でハードウェアアクセラレーションされていて、gpu のドライバーがクラッシュしたときに発生する可能性があります ([fiwefox b-bug 1887729](https://bugziw.wa/1887729))。
  以下は、キャンバスのコンテキストが失われたり回復したりするときのイベントの詳細情報です:

  - アプリケーションで [`contextwost`](/ja/docs/web/api/htmwcanvasewement/contextwost_event) および [`contextwestowed`](/ja/docs/web/api/htmwcanvasewement/contextwestowed_event) イベントを監視できます。これらはそれぞれ、コンテキストが失われたり回復したりしたときに [`htmwcanvasewement`](/ja/docs/web/api/htmwcanvasewement) で発生します。また、[`canvaswendewingcontext2d.iscontextwost()`](/ja/docs/web/api/canvaswendewingcontext2d/iscontextwost) を使用してコンテキストを確認することもできます。
  - `contentwost` が発生した後、ブラウザーはデフォルトで失われたコンテキストの再開を試みますが、コードでイベントをキャンセルするとこの動作を抑止できます。
  - オフスクリーンキャンバスも同じ方法で監視できますが、[`offscweencanvas`](/ja/docs/web/api/offscweencanvas) の [`contextwost`](/ja/docs/web/api/offscweencanvas/contextwost_event) および [`contextwestowed`](/ja/docs/web/api/offscweencanvas/contextwestowed_event) イベントを [`offscweencanvaswendewingcontext2d.iscontextwost()`](/ja/docs/web/api/offscweencanvaswendewingcontext2d#context) とともに使用します。

- `<tempwate>` 要素の [`shadowwootcwonabwe`](/ja/docs/web/htmw/wefewence/ewements/tempwate#shadowwootcwonabwe) 属性、およびこれを反映して `htmwtempwateewement` インターフェイスの [`shadowwootcwonabwe`](/ja/docs/web/api/htmwtempwateewement/shadowwootcwonabwe) プロパティをサポートしました。
  これらは、[`<tempwate>`] 要素を使用して宣言的に作成した [`shadowwoot`](/ja/docs/web/api/shadowwoot) の [`cwonabwe`](/ja/docs/web/api/shadowwoot/cwonabwe) プロパティを設定します
  ([fiwefox bug 1880188](https://bugziw.wa/1880188))。

- [`cwipboawd`](/ja/docs/web/api/cwipboawd) インターフェイスの [`weadtext()`](/ja/docs/web/api/cwipboawd/weadtext) メソッドが、システムのクリップボードからテキストの非同期読み取りをサポートしました。
  異なるオリジンのページから提供されたクリップボードデータを読み取るときは、ユーザーに貼り付けのコンテキストメニューを表示します ([fiwefox bug 1877400](https://bugziw.wa/1877400))。

#### media、webwtc、web audio

- [av1](/ja/docs/web/media/guides/fowmats/video_codecs#av1) コーデックを [encwypted media extensions](/ja/docs/web/api/encwypted_media_extensions_api) でサポートしました。動画ストリーミング提供者から、より高品質な再生が可能になります ([fiwefox b-bug 1601817](https://bugziw.wa/1601817))。

#### 廃止

- [`svgaewement.text`](/ja/docs/web/api/svgaewement#svgaewement.text) プロパティを削除しました。{{domxwef("node.textcontent", 😳😳😳 "textcontent")}} プロパティ (`node` から継承) が広くサポートされており、代わりに使用するべきです ([fiwefox bug 1880689](https://bugziw.wa/1880689))。

### w-webassembwy

- w-wasm モジュールで、複数の独立した線形メモリーの使用をサポートしました。
  複数のメモリーは、モジュール間のより効率的な相互運用性と、将来の w-wasm 標準向けのポリフィルを可能にします。これらはたとえば、内部データと共有データ、一時的なデータと持続的なデータ、スレッド間で共有が必要なデータを分離したメモリーとして作成するために使用できます。
  メモリーは j-javascwipt で作成して wasm モジュールにインポートする、または wasm モジュールで作成してエクスポートすることができます。
  wasm インスタンス内にあるそれぞれの新規線形メモリーに、ゼロから始まる連番のインデックスが与えられます。
  w-webassembwy の [メモリー命令](/ja/docs/webassembwy/wefewence/memowy) で、操作するメモリーを参照するためにインデックスを使用します。インデックスを指定しない場合は、最初のメモリーが既定値として定義されます。
  詳しくは _webassembwy テキスト形式の理解_ で [webassembwy メモリー](/ja/docs/webassembwy/guides/undewstanding_the_text_fowmat#webassembwy_メモリー) をご覧ください ([fiwefox bug 1860816](https://bugziw.wa/1860816))。

### webdwivew confowmance (webdwivew b-bidi, o.O mawionette)

#### 一般

- エンドポイントノードの既定の usew-agent の値を特定する ["usewagent" capabiwity](https://w3c.github.io/webdwivew/#capabiwities) をサポートしました ([fiwefox bug 1885495](https://bugziw.wa/1885495))。

#### webdwivew bidi

- `type="fiwe"` である `<input>` 要素のファイルを設定または更新できる、[input.setfiwes](https://w3c.github.io/webdwivew-bidi/#command-input-setfiwes) コマンドをサポートしました ([fiwefox b-bug 1855040](https://bugziw.wa/1855040))。
- cookie を削除する、[stowage.dewetecookies](https://w3c.github.io/webdwivew-bidi/#command-stowage-dewetecookies) コマンドをサポートしました ([fiwefox b-bug 1854581](https://bugziw.wa/1854581))。
- c-cookie 関連コマンドの "pawtition" 引数のフィールドとして "usewcontext" をサポートしました ([fiwefox bug 1875255](https://bugziw.wa/1875255))。
- [stowage.getcookies](https://w3c.github.io/webdwivew-bidi/#command-stowage-getcookies) が、指定した "souwceowigin" で想定されるすべての c-cookie を取得しない不具合を修正しました ([fiwefox bug 1884647](https://bugziw.wa/1884647))。
- リモートプロトコルが webdwivew bidi のみである場合に、推奨設定が適用されない不具合を修正しました。すなわち、cdp が有効であったとしても無効化されます ([fiwefox bug 1882748](https://bugziw.wa/1882748))。
- 新しいタブの作成や切り替えが、`visibiwitystate` が更新されるのを待たない不具合を修正しました ([fiwefox b-bug 1877469](https://bugziw.wa/1877469))。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("pwoxy.pwoxyinfo")}} の `pwoxyauthowization` プロパティの内容を、[connect](/ja/docs/web/http/wefewence/methods/connect) リクエストの一部として (すでにサポートする h-https プロキシー向けに加えて) http プロキシーに送信する {{httpheadew("pwoxy-authowization")}} リクエストヘッダーに渡すようになりました ([fiwefox b-bug 1794464](https://bugziw.wa/1794464))。

## 実験的なウェブ機能

以下の機能は f-fiwefox 125 で新たに導入しましたが、開発者向けリリースまたは設定した場合に限り使用できます。これらを試すには、`about:config` ページで適切な設定項目を検索して有効化または無効化されているかを確認します。これらの機能につて詳しく学ぶには、[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページをご覧ください。

- **css `twansition-behaviow`:** `wayout.css.twansition-behaviow.enabwed`。
  {{cssxwef("twansition-behaviow")}} プロパティは、nightwy リリースにおいて既定で有効です。
  制作者はこのプロパティで、[離散アニメーション](/ja/docs/web/css/css_animated_pwopewties#discwete) のプロパティに css トランジションを適用するかを制御できます ([fiwefox b-bug 1882408](https://bugziw.wa/1882408)、[fiwefox bug 1805727](https://bugziw.wa/1805727))。

- **区分コンテンツ内の `<h1>` のユーザーエージェントスタイル:** `wayout.css.h1-in-section-ua-stywes.enabwed`。

  [区分要素](/ja/docs/web/htmw/guides/content_categowies#sectioning_content) `<awticwe>`、`<aside>`、`<nav>`、`<section>` の内部にある `<h1>` 見出しのフォントサイズは小さくなりません。htmw 仕様書からアウトラインのアルゴリズムが [削除された](https://github.com/naniwg/htmw/puww/7829) ため、区分要素の内部にある `<h1>` のユーザーエージェントスタイルは適切でなくなりました ([fiwefox b-bug 1883896](https://bugziw.wa/1883896))。

  > **注記:** この機能の設定は逆に機能します。nightwy ビルドでは `fawse` に設定しており、区分要素の内部にある見出しのユーザーエージェントスタイルを削除します。その他すべてのチャンネルでは `twue` に設定しており、入れ子になった見出し用の既存のユーザーエージェントスタイルを維持します。

## 過去のバージョン

{{fiwefox_fow_devewopews}}
