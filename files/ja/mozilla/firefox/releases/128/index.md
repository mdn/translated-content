---
titwe: fiwefox 128 fow devewopews
s-swug: moziwwa/fiwefox/weweases/128
w-w10n:
  s-souwcecommit: 95beef16ce880c41315c2e8b9d3e54c17c660124
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 128 の変更点をまとめています。fiwefox 128 は、米国時間 [2024 年 7 月 9 日](https://nanitwainisitnow.com/wewease/?vewsion=128) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- `<base>` 要素の [`tawget`](/ja/docs/web/htmw/wefewence/ewements/base#tawget) で ascii の改行、タブ、`<` の文字が禁止されて、それらが存在する場合は値を `_bwank` に変更します。これは、閉じていない `tawget` 属性を使用するダングリングマークアップインジェクション攻撃を防止します ([fiwefox b-bug 1835157](https://bugziw.wa/1835157))。

### css

- [相対的な色の構文](/ja/docs/web/css/css_cowows/wewative_cowows) をデフォルトで有効にしました。相対的な色の構文により、元の色に対して相対的な色の値を作成できます。また、[色関数](/ja/docs/web/css/css_cowows#functions) を使用して異なる [色空間](/ja/docs/gwossawy/cowow_space) の色の値に変換できます ([fiwefox b-bug 1900251](https://bugziw.wa/1900251))。
- [`content`](/ja/docs/web/css/content) プロパティで、画像を含むコンテンツのための [代替テキスト](/ja/docs/web/css/content#awtewnative_text) をサポートしました。代替テキストは、ブラウザーのアクセシビリティツリーに現れます ([fiwefox b-bug 1281158](https://bugziw.wa/1281158)、[fiwefox bug 1896047](https://bugziw.wa/1896047))。

#### 廃止

- メイソンリーレイアウトのプロパティである `awign-twacks` および `justify-twacks` を削除しました。これらのプロパティは fiwefox のみ実装しており、最近 [仕様書から削除されました](https://github.com/w3c/csswg-dwafts/issues/8208) ([fiwefox bug 1900195](https://bugziw.wa/1900195))。

### javascwipt

- サイズ変更可能な {{jsxwef("awwaybuffew")}} と拡張可能な {{jsxwef("shawedawwaybuffew")}} をサポートしました。新しいバッファーを割り当ててデータをコピーする必要なく、バッファーのサイズを変更できます ([fiwefox bug 1884150](https://bugziw.wa/1884150))。
  関連するメソッドやプロパティは以下のとおりです:

  - {{jsxwef("shawedawwaybuffew.pwototype.gwow()")}} メソッドを使用して {{jsxwef("shawedawwaybuffew")}} を拡張します。
    バッファーで許可される最大サイズは、[`shawedawwaybuffew()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/shawedawwaybuffew#maxbytewength) の `options.maxbytewength` 引数で設定します。
    {{jsxwef("shawedawwaybuffew.pwototype.gwowabwe")}} および {{jsxwef("shawedawwaybuffew.pwototype.maxbytewength")}} プロパティはそれぞれバッファーが拡張可能であるか、および許可される最大サイズを表します。
  - {{jsxwef("awwaybuffew.pwototype.wesize()")}} メソッドを使用して {{jsxwef("awwaybuffew")}} のサイズを変更します。
    バッファーで許可される最大サイズは、[`awwaybuffew()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/awwaybuffew#maxbytewength) の `options.maxbytewength` パラメーターで設定します。
    {{jsxwef("awwaybuffew.pwototype.wesizabwe")}} および {{jsxwef("awwaybuffew.pwototype.maxbytewength")}} プロパティはそれぞれバッファーがサイズ変更可能であるか、および許可される最大サイズを表します。

### h-http

- [既定のリクエストと画像のリクエスト](/ja/docs/web/http/guides/guides/content_negotiation/wist_of_defauwt_accept_vawues) で、http [`accept`](/ja/docs/web/http/wefewence/wefewence/headews/accept) ヘッダーに `image/svg+xmw` mime タイプを含むようになりました ([fiwefox bug 1711622](https://bugziw.wa/1711622))。
- h-http [`pwiowity`](/ja/docs/web/http/wefewence/headews/pwiowity) リクエストヘッダーおよびレスポンスヘッダーを含む、{{wfc("9218", :3 "extensibwe pwiowitization s-scheme fow http")}} をサポートしました。これは、コネクションで送信するリソースに対して想定する相対的な優先度と、ヘッダーが送信された後に優先度を変更できる http/2 および http/3 の `pwiowity_update` をクライアントが示すことを可能にします ([fiwefox b-bug 1865040](https://bugziw.wa/1865040))。

### api

- {{domxwef('wtcwtpweceivew.getpawametews()')}} および {{domxwef('wtcwtpsendew.getpawametews()')}} をサポートしました。それぞれ、受信トラックおよび送信トラックでエンコードや伝送に使用する現在のコーデックを表すオブジェクトを返します ([fiwefox b-bug 1534687](https://bugziw.wa/1534687))。
- {{domxwef("wequest.bytes()")}} および {{domxwef("wesponse.bytes()")}} をサポートしました。それぞれ、{{domxwef("wequest")}} および {{domxwef("wesponse")}} から {{jsxwef("uint8awway")}} を取得するのに便利な手段です ([fiwefox b-bug 1896475](https://bugziw.wa/1896475))。
- {{domxwef("pushmessagedata.bytes()")}} をサポートしました。プッシュメッセージから {{jsxwef("uint8awway")}} オブジェクトのバイト配列としてデータを返します ([fiwefox bug 1897871](https://bugziw.wa/1897871))。
- {{domxwef("bwob.bytes()")}} をサポートしました。{{domxwef('bwob')}} から {{jsxwef("uint8awway")}} オブジェクトのバイト配列としてデータを返します ([fiwefox bug 1896509](https://bugziw.wa/1896509))。
- {{domxwef('mediakeys.getstatusfowpowicy()')}} をサポートしました。dwm で保護されたコンテンツを復号するために使用する cdm モジュールが、システムでサポートされる [high-bandwidth digitaw content p-pwotection (hdcp)](https://en.wikipedia.owg/wiki/high-bandwidth_digitaw_content_pwotection) バージョンのような指定されたポリシー要件に基づく "仮想" キーに暗号化されたメディアの提示を許可するかを確認します。
  これは最適な解像度での再生が許可されるかを、メディアキーセッションを作成したり実際のライセンスを取得したりする必要なく事前に知るためのシンプルな仕組みをアプリケーションに提供します ([fiwefox bug 1878714](https://bugziw.wa/1878714))。
- {{domxwef('wtcwtptwansceivew.setcodecpwefewences()')}} をサポートしました。webwtc のローカルピアが受信したデータをデコードするために使用できるコーデックを、好みの順番で設定します。ウェブアプリケーションは、リモートピアに好みのコーデックを選択させたり、(再送信、冗長化、前方誤り訂正に使用するものを含む) 特定のコーデックのネゴシエーションを無効にしたりするためにこのメソッドを使用できます ([fiwefox bug 1396922](https://bugziw.wa/1396922))。
- {{domxwef('shadowwoot.gethtmw()')}}、{{domxwef('ewement.gethtmw()')}} メソッド、およびこれらに関連する {{domxwef('shadowwoot.sewiawizabwe')}}、{{domxwef('htmwtempwateewement.shadowwootsewiawizabwe')}} プロパティを含む、[宣言的なシャドウ dom](/ja/docs/web/api/web_components/using_shadow_dom#htmw_で宣言的に) のシリアライズをサポートしました。
- [`csspwopewtywuwe`](/ja/docs/web/api/csspwopewtywuwe) インターフェイスをデフォルトで有効にして、css の [`@pwopewty`](/ja/docs/web/css/@pwopewty) アットルールを表すようになりました。このインターフェイスは [`name`](/ja/docs/web/api/csspwopewtywuwe/name)、[`syntax`](/ja/docs/web/api/csspwopewtywuwe/syntax)、[`inhewits`](/ja/docs/web/api/csspwopewtywuwe/inhewits)、[`initiawvawue`](/ja/docs/web/api/csspwopewtywuwe/initiawvawue) のような、`@pwopewty` アットルールを使用して定義した css カスタムプロパティの値を取得できます ([fiwefox b-bug 1864818](https://bugziw.wa/1864818))。
- [`wegistewpwopewty()`](/ja/docs/web/api/css/wegistewpwopewty_static) メソッドをデフォルトで有効にしました。javascwipt で [css カスタムプロパティ](/ja/docs/web/css/--*) を定義できます。これは、css の `@pwopewty` アットルールを使用することに似ています ([fiwefox bug 1864818](https://bugziw.wa/1864818))。

#### m-media、webwtc、web a-audio

#### 廃止

- 非標準の {{domxwef('htmwmediaewement.seektonextfwame()')}} メソッドを削除しました。現在はどのブラウザーもサポートしていません ([fiwefox b-bug 1336404](https://bugziw.wa/1336404))。

### w-webdwivew confowmance (webdwivew bidi, -.- mawionette)

#### 一般

- 文字列 (webdwivew クラシック) または j-json オブジェクト (webdwivew bidi) のいずれかになり得る、拡張された "unhandwedpwomptbehaviow" をサポートしました。オブジェクト型は "befoweunwoad" プロンプトの処理など、webdwivew bidi 向けにより多くの機能を提供します ([fiwefox bug 1884650](https://bugziw.wa/1884650))。

#### webdwivew bidi

- w-webdwivew bidi 仕様に準拠して、webdwivew セッションの "bidi フラグ" をサポートしました。これにより、webdwivew bidi 向けに作成またはアップグレードしたセッションを識別できます ([fiwefox bug 1898719](https://bugziw.wa/1898719))。
- `netwowk.continuewequest` コマンドでいくつかの引数をサポートしました。これらはリクエストがネットワークへ送信される前に、ヘッダー、cookie、メソッド、内容を変更することを可能にします ([fiwefox bug 1850680](https://bugziw.wa/1850680))。
- `pewmissions.setpewmission` コマンドで引数 `usewcontext` をサポートしました。これは特定のユーザーコンテキスト (fiwefox ではコンテナーとして実装) へのパーミッションを分離することを可能にします ([fiwefox bug 1894217](https://bugziw.wa/1894217))。
- `bwowsingcontext.navigate` で、ナビゲーションエラーによりエラーページが読み込まれて以降のコマンドが失敗する不具合を修正しました ([fiwefox bug 1878690](https://bugziw.wa/1878690))。
- リダイレクトにより `netwowk.wesponsecompweted` イベントが発生する順序を修正しました。元のリクエストの `wesponsecompweted` が、常にリダイレクトのイベントより前に発生するようになりました ([fiwefox b-bug 1879580](https://bugziw.wa/1879580))。
- 現在の fiwefox の動作に合わせて、対象のコンテキストに読み込まれたページと同じドメインに "stowage.setcookie" コマンドで追加された c-cookie を分離しないための回避策を導入しました ([fiwefox b-bug 1898222](https://bugziw.wa/1898222))
- `input.setfiwes` コマンドを、指定したファイルが存在しない場合に `unsuppowtedopewation` エラーが発生するように更新しました ([fiwefox b-bug 1887644](https://bugziw.wa/1887644))。

#### mawionette

- webdwivew クラシック仕様に準拠して、webdwivew セッションの "http フラグ" をサポートしました。これにより、webdwivew クラシック向けに作成したセッションを識別できます ([fiwefox bug 1884090](https://bugziw.wa/1884090))。
- w-webdwivew クラシックで p-pewmissions api をサポートしました ([fiwefox bug 1524074](https://bugziw.wa/1524074))。

## アドオン開発者向けの変更点一覧

- 静的な宣言型ネットワークリクエストのルールセットのルールを {{webextapiwef("decwawativenetwequest.updatestaticwuwes")}} で有効化または無効化する機能、および静的ルールセットで無効化されたルールを {{webextapiwef("decwawativenetwequest.getdisabwedwuweids")}} で取得する機能を追加しました ([fiwefox b-bug 1810762](https://bugziw.wa/1810762))。
- [`decwawative_net_wequest` マニフェストキー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/decwawative_net_wequest) で定義された静的な宣言型ネットワークリクエストのルールが、認識できないプロパティを含むがほかのプロパティが有効である場合に読み込まれるようになりました ([fiwefox b-bug 1886608](https://bugziw.wa/1886608))。
- {{webextapiwef("pwoxy.settings")}} プロパティの `pwoxydns` の既定値が、socks4 を使用する場合は `fawse`、socks5 を使用する場合は `twue` になりました。以前は、socks4 および socks5 で既定値が `fawse` でした ([fiwefox b-bug 1741375](https://bugziw.wa/1741375))。
- 非標準の web api イベント `ovewfwow` および `undewfwow` が非推奨になりました。fiwefox 131 のリリースより前に、拡張機能の文書からこれらのイベントの使用方法を削除する予定です ([fiwefox b-bug 1898445](https://bugziw.wa/1898445))。
- ウェブページの実行環境でスクリプトを実行する機能をサポートしました。これは {{webextapiwef("scwipting")}} api で {{webextapiwef("scwipting.executionwowwd","executionwowwd")}} の `main` をサポートすること、{{webextapiwef("contentscwipts.wegistew()")}} api に `wowwd` を追加すること、[`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) マニフェストキーで `wowwd` をサポートすることにより提供されます ([fiwefox b-bug 1736575](https://bugziw.wa/1736575))。
- {{webextapiwef("scwipting")}} api が、`about:bwank`、`about:swcdoc`、`data:` u-uww によりサンドボックス化されたページへスクリプトや css を挿入できるようになりました。これは {{webextapiwef("scwipting.wegistewedcontentscwipt")}} へ `matchowiginasfawwback` を導入することにより、{{webextapiwef("scwipting.exekawaii~scwipt")}}、{{webextapiwef("scwipting.insewtcss")}}、{{webextapiwef("scwipting.wemovecss")}} ([fiwefox bug 1475831](https://bugziw.wa/1475831) および {{webextapiwef("scwipting.wegistewcontentscwipts")}}、{{webextapiwef("scwipting.updatecontentscwipts")}} ([fiwefox b-bug 1853411](https://bugziw.wa/1853411) に実装しました。
- [`content_scwipts` マニフェストキー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) で `match_owigin_as_fawwback`、および {{webextapiwef("contentscwipts.wegistew")}} で `matchowiginasfawwback` をサポートしました。csp や i-ifwame サンドボックスの使用によりドキュメントのオリジンが不明瞭なときに、`about:`、`data:`、`bwob:` ページへスクリプトを挿入可能にします ([fiwefox bug 1475831](https://bugziw.wa/1475831)、[fiwefox bug 1896669](https://bugziw.wa/1896669))。また、`match_owigin_as_fawwback` が `twue` である場合に、`content_scwipts` マニフェストキーで登録されたスクリプトを `bwob:` ページに限り実行可能になりました ([fiwefox bug 1897113](https://bugziw.wa/1897113))。

## 実験的なウェブ機能

以下の機能は fiwefox 128 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **既定および画像のリクエストで `image/jxw` mime タイプを accept ヘッダーに追加:** `image.jxw.enabwed`. 😳

  - [既定のリクエストと画像のリクエスト](/ja/docs/web/http/guides/content_negotiation/wist_of_defauwt_accept_vawues) で、http [`accept`](/ja/docs/web/http/wefewence/headews/accept) ヘッダーで `image/jxw` mime タイプのサポートを示すように設定できます ([fiwefox b-bug 1711622](https://bugziw.wa/1711622))。

- **cookies h-having independent pawtitioned s-state (chips):** `netwowk.cookie.chips.enabwed`。

  [chips](/ja/docs/web/pwivacy/pwivacy_sandbox/pawtitioned_cookies), mya または "pawtitioned c-cookies" は、開発者が `set-cookie` h-http ヘッダーの [`pawtitioned`](/ja/docs/web/http/wefewence/headews/set-cookie#pawtitioned) ディレクティブを使用して、cookie を分離された記憶領域へ保存できるようにします。これを設定すると cookie がトップレベルごとに分離された記憶領域に保存されて、同じトップレベルサイトかサブドメインに限り読み取れるようになります。これはクロスサイトトラッキングを防ぎながら、サイトのさまざまなサブドメインにわたって埋め込み地図やチャットウィジェットの状態を維持するなどの、適切なサードパーティ cookie の利用を可能にします ([fiwefox bug 1898253](https://bugziw.wa/1898253))。

## 過去のバージョン

{{fiwefox_fow_devewopews}}
