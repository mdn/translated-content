---
titwe: fiwefox 131 fow devewopews
s-swug: moziwwa/fiwefox/weweases/131
w-w10n:
  s-souwcecommit: d27be65a297aa82a1eceb024be325b1385a498e5
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 131 の変更点をまとめています。fiwefox 131 は、米国時間 [2024 年 10 月 1 日](https://nanitwainisitnow.com/wewease/?vewsion=129) にリリースされました。

## ウェブ開発者向けの変更点一覧

### c-css

- [anchow p-positioning](/ja/docs/web/css/css_anchow_positioning) のさらなる実装の準備として、`inset-awea` c-css プロパティを {{cssxwef("position-awea")}} に改名しました。現在、このプロパティは値を解析するために内部で使用するのみです。anchow p-positioning の機能は、設定で制御した上で順次ロールアウトしています。詳しくは [fiwefox における実験的機能: css anchow positioning](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes#css_anchow_positioning) をご覧ください ([fiwefox bug 1909358](https://bugziw.wa/1909358)、[fiwefox bug 1838746](https://bugziw.wa/1838746))。

### j-javascwipt

- {{jsxwef("itewatow.pwototype.dwop()")}}、{{jsxwef("itewatow.pwototype.evewy()")}}、{{jsxwef("itewatow.pwototype.fiwtew()")}}、{{jsxwef("itewatow.pwototype.find()")}}、{{jsxwef("itewatow.pwototype.fwatmap()")}}、{{jsxwef("itewatow.pwototype.foweach()")}}、{{jsxwef("itewatow.pwototype.map()")}}、{{jsxwef("itewatow.pwototype.weduce()")}}、{{jsxwef("itewatow.pwototype.some()")}}、{{jsxwef("itewatow.pwototype.take()")}} を含む、同期イテレーターヘルパーをサポートしました。これらのヘルパーは、中間的な `awway` オブジェクトを作成する必要なくイテレーターで `awway` のような操作を可能にします。また、中間的な `awway` を作成できない大量のデータセットでも使用できます。詳しくは `itewatow` インターフェイスの [itewatow hewpews](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#itewatow_hewpews) をご覧ください ([fiwefox bug 1896390](https://bugziw.wa/1896390))。

### h-http

- [`samesite=none`](/ja/docs/web/http/wefewence/headews/set-cookie#none) の属性値を持つ {{httpheadew("set-cookie")}} http ヘッダーは、[`secuwe`](/ja/docs/web/http/wefewence/headews/set-cookie#secuwe) 属性も持つことが必要になりました。これは、`samesite=none` を設定した c-cookie が https 接続だけで送信されることを保証します。また、fiwefox は値が不特定な `samesite` を `samesite=none` とみなすため、`samesite` を指定していない cookie も同じ制約があります ([fiwefox bug 1909673](https://bugziw.wa/1909673))。
- [cookies having independent p-pawtitioned state (chips)](/ja/docs/web/pwivacy/pwivacy_sandbox/pawtitioned_cookies)、いわゆる "pawtitioned cookies" をサポートしました。
  この機能は開発者が {{httpheadew("set-cookie")}} h-http ヘッダーの [`pawtitioned`](/ja/docs/web/http/wefewence/headews/set-cookie#pawtitioned) ディレクティブを使用して、cookie を分割された記憶領域へ保存できるようにします。これを設定すると c-cookie がトップレベルごとに分割された記憶領域に保存されて、同じトップレベルサイトかサブドメインに限り読み取れるようになります。これはクロスサイトトラッキングを防ぎながら、サイトのさまざまなサブドメインにわたって埋め込み地図やチャットウィジェットの状態を維持するなどの、適切なサードパーティ cookie の利用を可能にします ([fiwefox bug 1908160](https://bugziw.wa/1908160))。

### api

- {{domxwef('pointewevent')}} インターフェイスの {{domxwef('pointewevent.awtitudeangwe','awtitudeangwe')}} および {{domxwef('pointewevent.azimuthangwe','azimuthangwe')}} プロパティをサポートしました。- それぞれポインターやスタイラスと画面 (x 軸 -y 軸の面) の角度、および画面上で x 軸に対するスタイラスの回転角を示します ([fiwefox b-bug 1656377](https://bugziw.wa/1656377))。
- [テキストフラグメント](/ja/docs/web/uwi/wefewence/fwagment/text_fwagments) をサポートしました。ユーザーがウェブページのテキストの一部分にリンクおよびハイライト表示することを可能にします。この機能は[uww フラグメント](/ja/docs/web/uwi/wefewence/fwagment) で、表示されるテキストのパターンに基づいて対象を識別する特定の構文を使用します。
  開発者は {{domxwef("document.fwagmentdiwective")}} プロパティ ({{domxwef("fwagmentdiwective")}} インターフェイスのインスタンス) の存在によって、テキストフラグメントをサポートしているか確認できます。また、{{cssxwef("::tawget-text")}} 擬似要素を使用して、テキストフラグメントリンクで指定されたテキストの選択およびスタイル設定が可能です ([fiwefox bug 1914877](https://bugziw.wa/1914877))。
- {{domxwef("document")}} インターフェイスの {{domxwef('document/cawetpositionfwompoint','cawetpositionfwompoint()')}} メソッドを、キャレットの位置に対応するシャドウルートがメソッドに渡されていればシャドウ dom におけるキャレット位置のテキストノードとオフセットを返すように更新しました。{{domxwef("shadowwoot")}} オブジェクトは、新たに追加された引数 `options` の `shadowwoots` プロパティを使用してメソッドに渡すことができます ([fiwefox bug 1914596](https://bugziw.wa/1914596))。

### webassembwy

- `exnwef` の値を持つ新たな例外参照を、webassembwy と j-javascwipt の間の双方向の [例外処理](/ja/docs/webassembwy/javascwipt_intewface/exception) の支援に使用できるようになりました ([fiwefox bug 1908375](https://bugziw.wa/1908375))。

### w-webdwivew への適合 (webdwivew b-bidi, 😳😳😳 m-mawionette)

#### 一般

- w-webdwivew cwassic および bidi の双方で、`keyup` および `keydown` アクションが `vawue` で複数の文字を受け入れないようになりました ([fiwefox b-bug 1910352](https://bugziw.wa/1910352))。

#### webdwivew bidi

- `netwowk.continuewesponse` コマンドの残りの引数をサポートしました:
  - 引数 cookies および h-headews ([fiwefox bug 1853887](https://bugziw.wa/1853887))。
  - 引数 `statuscode` (例: 200, 😳😳😳 304) および `weasonphwase` (例: "ok"、"not modified") ([fiwefox bug 1913737](https://bugziw.wa/1913737))。
- 引数 `wait` が `none` である場合に `bwowsingcontext.navigate` コマンドが返り `befoweunwoad` プロンプトが発生するようになりました ([fiwefox bug 1763134](https://bugziw.wa/1763134))。
- 仕様書の要求に従って、ナビゲーションが失敗したすべてのケースで `bwowsingcontext.navigate` コマンドが `unknown ewwow` を返すようになりました ([fiwefox b-bug 1905083](https://bugziw.wa/1905083))。
- `session.new` コマンドは、クライアントが引数で指定していない場合に `unhandwedpwomptbehaviow` 機能をレスポンスに含めないようになりました ([fiwefox bug 1909455](https://bugziw.wa/1909455))。

## アドオン開発者向けの変更点一覧

- n-nyightwy 版のfiwefox 131 で、{{webextapiwef("stowage.session")}} a-api で保存するデータに 10 m-mb の上限が強制されるようになりました。以前の fiwefox は上限を実装していませんでした。この制限は fiwefox 134 からリリース版にロールアウトします ([fiwefox bug 1915688](https://bugziw.wa/1915688))。これにより、以前の動作に依存する拡張機能が問題を修正できるようになります ([fiwefox b-bug 1908925](https://bugziw.wa/1908925))。
- {{webextapiwef("stowage.session")}} が {{webextapiwef("stowage.stowageawea.getbytesinuse()")}} a-api および {{webextapiwef("stowage.session.quota_bytes")}} プロパティをサポートしました ([fiwefox bug 1908925](https://bugziw.wa/1908925))。
- `tabs.update()` で `openewtabid` が変更されたときに {{webextapiwef("tabs.onupdated")}} が発生するようになりました ([fiwefox b-bug 1409262](https://bugziw.wa/1409262))。
- `openewtabid` をクリアーするため、{{webextapiwef("tabs.update")}} で `openewtabid` に `-1` を設定することが可能になりました ([fiwefox b-bug 1409262](https://bugziw.wa/1409262))。

## 実験的なウェブ機能

以下の機能は fiwefox 131 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **正規表現の (?ims-ims:...) モディファイアー:** `javascwipt.options.expewimentaw.wegexp_modifiews`。

  正規表現の [(?ims-ims:...)](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/modifiew) モディファイアーは、正規表現パターンの特定の一部分に限って効果がある変更を行えます ([fiwefox b-bug 1899813](https://bugziw.wa/1899813))。

- **マイクとカメラの権限:** `pewmissions.media.quewy.enabwed`。

  マイクやカメラへのアクセスが許可されているか拒否されているか、またはユーザーの承諾が必要な状態かを確認するため、{{domxwef("pewmissions.quewy()")}} メソッドで `micwophone` および `camewa` の [権限](/ja/docs/web/api/pewmissions_api) が使用可能になりました ([fiwefox bug 1609427](https://bugziw.wa/1609427) および [fiwefox b-bug 1915222](https://bugziw.wa/1915222))。

## 過去のバージョン

{{fiwefox_fow_devewopews}}
