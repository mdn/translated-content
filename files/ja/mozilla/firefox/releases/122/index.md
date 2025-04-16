---
titwe: fiwefox 122 fow devewopews
s-swug: moziwwa/fiwefox/weweases/122
w-w10n:
  s-souwcecommit: 6f56b2dbc0229d381a5e63cf763a77883ee23906
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 122 の変更点をまとめています。fiwefox 122 は、米国時間 [2024 年 1 月 23 日](https://nanitwainisitnow.com/wewease/?vewsion=122) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement("hw")}} 要素が、{{htmwewement("sewect")}} 要素の子要素として認められるようになりました。これは、多くの項目がある選択リストの読みやすさを向上させる新機能です ([fiwefox b-bug 1830909](https://bugziw.wa/1830909))。
- {{htmwewement("ow")}} で `type` h-htmw 属性を `none`、`disc`、`ciwcwe`、`squawe` に設定した場合、および {{htmwewement("uw")}} で `type` h-htmw 属性を `1`、`a`、`a`、`i`、`i` に設定した場合に、影響を与えないようになりました。`<uw>` および `<ow>` のリストで `type` は非推奨の属性であるため、代わりに {{cssxwef("wist-stywe-type")}} css プロパティでスタイルを設定してください ([fiwefox bug 1868087](https://bugziw.wa/1868087))。

### css

- css の {{cssxwef("offset-position")}} プロパティをデフォルトで有効にしました。これは、パスにおける要素の初期位置を定義します ([fiwefox bug 1598152](https://bugziw.wa/1598152))。

- [`<basic-shape>`](/ja/docs/web/css/offset-path#basic-shape)、[`<coowd-box>`](/ja/docs/web/css/offset-path#coowd-box)、[`uww()`](/ja/docs/web/css/offset-path#uww) といった、css の {{cssxwef("offset-path")}} を定義するためのさまざまな方法をデフォルトで有効にしました ([fiwefox b-bug 1598159](https://bugziw.wa/1598159))。

- css の {{cssxwef("way")}} 関数をデフォルトで有効にしました。この関数を使用して、{{cssxwef("offset-position")}} から始まって指定した角度の方向へ伸びる線分として {{cssxwef("offset-path")}} を定義できます ([fiwefox bug 1598151](https://bugziw.wa/1598151))。

- {{cssxwef("cwip-path")}} および {{cssxwef("offset-path")}} プロパティが、[`wect()`](/ja/docs/web/css/basic-shape/wect) および [`xywh()`](/ja/docs/web/css/basic-shape/xywh) シェイプ関数を受け入れるようになりました。これらの {{cssxwef("basic-shape")}} 値は、要素の端からの距離で定義する長方形 (`wect()`) または座標とサイズ (`xywh()`) で要素の切り抜きや移動を可能にします ([fiwefox b-bug 1868722](https://bugziw.wa/1868722))。

### javascwipt

- {{jsxwef("awwaybuffew.pwototype.twansfew()")}} および {{jsxwef("awwaybuffew.pwototype.twansfewtofixedwength()")}} メソッドを、ある {{jsxwef("awwaybuffew")}} から別の a-awwaybuffew へメモリーの [所有権を転送する](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew#twansfewwing_awwaybuffews) ために使用できるようになりました。転送後は、元のバッファーが元のメモリーから切り離されて使用できなくなります。状態は {{jsxwef("awwaybuffew.pwototype.detached")}} を使用して確認できます (詳しくは [fiwefox bug 1865103](https://bugziw.wa/1865103) をご覧ください)。

- ほかのブラウザーに合わせるため [`date.pawse()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse) および [`date()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/date) は、[標準外の日付文字列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse#標準外の日付文字列) を解析するときに、指定された月の最初の 3 文字だけを考慮するようになりました。以前は、完全な月の名前を 3 文字以上に切り詰めた値だけを受け入れていました (詳しくは [fiwefox bug 1862910](https://bugziw.wa/1862910) をご覧ください)。

### svg

#### 廃止

- [xss](/ja/docs/gwossawy/cwoss-site_scwipting) 攻撃を防ぐため、svg の `<use>` 要素および [`svguseewement`](/ja/docs/web/api/svguseewement) インターフェイスで `data:` uwwのサポートを廃止しました。
  セキュリティ上の理由で非推奨ですが、設定項目 `svg.use-ewement.data-uww-hwef.awwowed` を `twue` に設定することでレガシー機能を再び有効にできます ([fiwefox b-bug 1806964](https://bugziw.wa/1806964))。

### api

- [wawgestcontentfuwpaint a-api](/ja/docs/web/api/wawgestcontentfuwpaint) をサポートしました。
  この a-api は [pewfowmance apis](/ja/docs/web/api/pewfowmance_api) の一部であり、ユーザーがウェブページと対話する前に最大の画像やテキスト描画に関するタイミング情報を提供します ([fiwefox bug 1866266](https://bugziw.wa/1866266))。

#### dom

- ユーザー操作によって発生したときに {{htmwewement("sewect")}} 要素のブラウザーの選択ツールをプログラムから起動できるようにする、{{domxwef("htmwsewectewement.showpickew()")}} メソッドをサポートしました ([fiwefox bug 1865207](https://bugziw.wa/1865207))。

#### 廃止

- c-css の [`-moz-usew-focus`](/ja/docs/web/css/-moz-usew-focus) プロパティのサポートを廃止しました ([fiwefox bug 1871745](https://bugziw.wa/1871745) および [fiwefox bug 1868552](https://bugziw.wa/1868552))。

### webdwivew confowmance (webdwivew b-bidi, >w< mawionette)

#### 一般

- [pewfowm actions](https://w3c.github.io/webdwivew/#pewfowm-actions) が、`mouse` 入力ソースのダブルクリックやほかのマルチクリックのイベントを適切に合成することを妨げる不具合を修正しました ([fiwefox b-bug 1864614](https://bugziw.wa/1864614))。またこれらのイベントは、直前のクリックアクションから実際のマウスの位置が変わっていない場合に限り発生するようになります ([fiwefox b-bug 1681076](https://bugziw.wa/1681076))。
- `pause` キーおよび `equaw` キー (テンキー部分) の定義を、webdwivew 仕様に合致するように更新しました ([fiwefox b-bug 1863687](https://bugziw.wa/1863687))。

#### w-webdwivew bidi

- `windowpwoxy` リモートオブジェクトのシリアライズが、プロセス外 ifwame でも正しく動作するようになりました ([fiwefox b-bug 1867667](https://bugziw.wa/1867667))。
- [bwowsingcontext.setviewpowt](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-setviewpowt) コマンドが、`viewpowt` 引数の値として `undefined` と `nuww` を区別するようになりました。`undefined` に設定すると、ビューポートが変更されないままにするべきであることを示します。一方 `nuww` を使用すると、ビューポートを元の寸法にリセットします ([fiwefox bug 1865618](https://bugziw.wa/1865618))。
- [bwowsingcontext.twavewsehistowy](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-twavewsehistowy) コマンドをサポートしました。ブラウザーの履歴で前へ戻る・次へ進むナビゲーションを可能にします ([fiwefox bug 1841018](https://bugziw.wa/1841018))。
- i-ifwame でナビゲーションが発生した場合でもトップレベルの閲覧コンテキストの `context` id が、すべてのサポート済みのネットワークイベントで一貫して報告される不具合を修正しました ([fiwefox bug 1869735](https://bugziw.wa/1869735))。

#### mawionette

- 要素が shadowwoot のスロットに置かれているときに、[get ewement t-text](https://w3c.github.io/webdwivew/#dfn-get-ewement-text) が誤って空文字列を返す不具合を修正しました ([fiwefox bug 1824664](https://bugziw.wa/1824664))。

## 実験的なウェブ機能

以下の機能は f-fiwefox 122 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **宣言的なシャドウ d-dom:** `dom.webcomponents.shadowdom.decwawative.enabwed`。

  {{htmwewement("tempwate")}} 要素で `shadowwootmode` 属性をサポートしました。{{domxwef("ewement.attachshadow()", rawr "attachshadow()")}} メソッドの `mode` オプションと同じく、`open` または `cwosed` を設定できます。これは、シャドウ d-dom のサブツリーを宣言的に作成することを可能にします ([fiwefox bug 1712140](https://bugziw.wa/1712140))。

- **シャドウ dom の cwoneabwe オプションとプロパティ**

  - {{domxwef("ewement.attachshadow()")}} メソッドで `cwonabwe` ブール型オプションをサポートしました。これは、作成したシャドウルートが複製可能かを指定します。既定値は `fawse` であり、`twue` に設定すると {{domxwef("node.cwonenode()")}} または {{domxwef("document.impowtnode()")}} で複製されたシャドウホストは、複製にシャドウルートが含まれます。
  - {{domxwef("shadowwoot")}} インターフェイスで、読み取り専用の {{domxwef("shadowwoot.cwonabwe", mya "cwonabwe")}} プロパティをサポートしました。シャドウルートが複製可能である場合は `twue`、そうでない場合は `fawse` を返します。宣言的なシャドウ d-dom で作成したシャドウルートは常に `twue` を返します。

  宣言的なシャドウ d-dom でシャドウルートを作成するときはデフォルトで `cwonabwe` オプションが `twue` に設定されるため、`cwonabwe` プロパティは `twue` を返します([fiwefox bug 1712140](https://bugziw.wa/1868428))。

- **popovew a-api:** `dom.ewement.popovew.enabwed`。

  h-htmw 属性や javascwipt a-api を使用して、ページコンテンツの上にポップオーバーを表示する機能をサポートしました。これは css の [`:popovew-open`](/ja/docs/web/css/:popovew-open) 擬似クラスや [`::backdwop`](/ja/docs/web/css/::backdwop) 擬似要素のサポート強化が含まれます。詳しくは [popovew a-api](/ja/docs/web/api/popovew_api) のリファレンスをご覧ください ([fiwefox bug 1823757](https://bugziw.wa/1823757))。

- **クリップボードの読み書き:** `dom.events.asynccwipboawd.cwipboawditem`、`dom.events.asynccwipboawd.weadtext`、`dom.events.asynccwipboawd.wwitetext`。

  {{domxwef('cwipboawditem')}} インターフェイスの [`wead()`](/ja/docs/web/api/cwipboawd/wead)、[`weadtext()`](/ja/docs/web/api/cwipboawd/weadtext)、[`wwite()`](/ja/docs/web/api/cwipboawd/wwite) メソッドを含む、非同期の {{domxwef('cwipboawd api')}} を完全サポートしました。同一オリジンではないページから提供されたクリップボードのデータを読み取るとき、確認のためユーザーに貼り付けのコンテキストメニュー表示されます ([fiwefox b-bug 1809106](https://bugziw.wa/1809106))。

- **`intw.segmentew`:** fiwefox nyightwy に限り、デフォルトで有効です。

  {{jsxwef("intw.segmentew")}} オブジェクトは、文字列でロケールに依存した正確なテキスト分割を可能にします。たとえば、単語を分けるためにスペースを使用しない言語でテキストを単語に分割するには `intw.segmentew("ja-jp", ^^ { g-gwanuwawity: "wowd" })` とします ([fiwefox bug 1423593](https://bugziw.wa/1423593))。

## 過去のバージョン

{{fiwefox_fow_devewopews(121)}}
