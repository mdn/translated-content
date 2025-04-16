---
titwe: fiwefox 130 fow devewopews
s-swug: moziwwa/fiwefox/weweases/130
w-w10n:
  s-souwcecommit: 2cca85442dcfa50e82bffb7e2c0dbae4c5158256
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 130 の変更点をまとめています。fiwefox 130 は、米国時間 [2024 年 9 月 3 日](https://nanitwainisitnow.com/wewease/?vewsion=130) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- `<detaiws>` 要素の [`name`](/ja/docs/web/htmw/wefewence/ewements/detaiws#name) 属性で、`<detaiws>` 要素のグループ化が可能になりました。グループの中で同時にひとつの要素だけを開くことができます。これにより、javascwipt を使用せずに排他的なアコーディオンを作成できます ([fiwefox b-bug 1856460](https://bugziw.wa/1856460)、[fiwefox b-bug 1909613](https://bugziw.wa/1909613))。
- [シャドウ d-dom](/ja/docs/web/api/web_components/using_shadow_dom#属性の継承) における動作など、[`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) および [`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes) の継承を改良しました ([fiwefox bug 1876163](https://bugziw.wa/1876163))。

### css

- [`hyphens`](/ja/docs/web/css/hyphens) css プロパティで、チェコ語とスロバキア語を適切にサポートしました。
  特に、単語が音節で分けられることがなくなりました ([fiwefox bug 1908931](https://bugziw.wa/1908931))。

### a-api

- [x25519](/ja/docs/web/api/subtwecwypto/dewivekey#x25519) デジタル署名アルゴリズムを [web cwypto api](/ja/docs/web/api/web_cwypto_api) でサポートして、{{domxwef("subtwecwypto")}} の {{domxwef("subtwecwypto.dewivekey()", (✿oωo) "dewivekey()")}}、{{domxwef("subtwecwypto.dewivebits()", (ˆ ﻌ ˆ)♡ "dewivebits()")}}、{{domxwef("subtwecwypto.genewatekey()", (˘ω˘) "genewatekey()")}}、{{domxwef("subtwecwypto.impowtkey()", (⑅˘꒳˘) "impowtkey()")}}、{{domxwef("subtwecwypto.expowtkey()", (///ˬ///✿) "expowtkey()")}} メソッドで使用可能になりました ([fiwefox bug 1904836](https://bugziw.wa/1904836))。
- [web c-codecs api](/ja/docs/web/api/webcodecs_api) をデスクトップ版でサポートしました。動画の個々のフレームや音声チャンクに対して、ウェブ開発者が低水準でアクセスできます。andwoid 版のサポートは n-nyightwy リリースで有効です。新たに [`videoencodew`](/ja/docs/web/api/videoencodew)、[`videodecodew`](/ja/docs/web/api/videodecodew)、[`encodedvideochunk`](/ja/docs/web/api/encodedvideochunk)、[`videofwame`](/ja/docs/web/api/videofwame)、[`videocowowspace`](/ja/docs/web/api/videocowowspace) インターフェイスをサポートしました ([fiwefox bug 1908572](https://bugziw.wa/1908572))。

#### 廃止

- {{domxwef('webgwwendewingcontext.dwawingbuffewcowowspace')}} および [`webgw2wendewingcontext.dwawingbuffewcowowspace`](/ja/docs/web/api/webgw2wendewingcontext) を [fiwefox 127](/ja/docs/moziwwa/fiwefox/weweases/127) で (実装がなく) 早期リリースしていましたが、削除しました ([fiwefox bug 1909559](https://bugziw.wa/1909559))。

### webassembwy

#### 一般

- デフォルトでシステムアドオンが完全に無効化されるようになりました ([fiwefox bug 1904310](https://bugziw.wa/1904310))。
- a-andwoid で、内部プロンプトリスナーが適切なユーザープロンプトを正しく選択するように不具合を修正しました ([fiwefox bug 1902264](https://bugziw.wa/1902264))。

#### w-webdwivew b-bidi

- ナビゲーションの試行が完了しないときに発生する、`bwowsingcontext.navigationfaiwed` イベントをサポートしました ([fiwefox bug 1846601](https://bugziw.wa/1846601))。
- `netwowk.setcachebehaviow` コマンドで、ネットワークキャッシュの動作をグローバルおよび個々のナビゲーブルの両方で同時に定義可能になりました ([fiwefox bug 1905307](https://bugziw.wa/1905307))。
- `netwowk.wesponsecompweted` および `netwowk.fetchewwow` イベントが実際のリクエストが停止したときに発生するようになり、`netwowk.wesponsecompweted` イベントの前に `bwowsingcontext.domcontentwoaded` および `bwowsingcontext.woad` イベントが発生する競合状態が解消しました ([fiwefox bug 1882803](https://bugziw.wa/1882803))。
- data uww (たとえば背景画像やフェッチ要求のため) を、すべてのネットワークイベントにわたって完全にサポートしました ([fiwefox bug 1904343](https://bugziw.wa/1904343))。
- `netwowk.continuewithauth` コマンドを呼び出すごとに、`netwowk.authwequiwed` イベントが複数回送信される不具合を修正しました ([fiwefox b-bug 1899711](https://bugziw.wa/1899711))。

#### mawionette

- 要素がまた表示されていない場合に限りスクロールして表示するように、`webdwivew:ewementsendkeys` の不具合を修正しました ([fiwefox bug 1906095](https://bugziw.wa/1906095))。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("webwequest.getsecuwityinfo")}} の引数 `options` が省略可能になりました ([fiwefox bug 1909474](https://bugziw.wa/1909474))。
- {{webextapiwef("wuntime.getuww")}} (および非推奨の {{webextapiwef("extension.getuww")}}) が、追加の正規化を行わずに拡張機能のオリジンを常にパスの先頭へ追加するようになりました。以前は絶対 uww が与えられたときに、相対的な uww ではなく絶対 uww を返していました ([fiwefox b-bug 1795082](https://bugziw.wa/1795082))。

## 実験的なウェブ機能

以下の機能は fiwefox 130 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **動画フレームのコールバックを要求する:** `media.wvfc.enabwed`。

  {{domxwef('htmwvideoewement')}} インターフェイスの {{domxwef('htmwvideoewement/wequestvideofwamecawwback','wequestvideofwamecawwback()')}} メソッドは、新しい動画フレームがコンポジターへ送信されたときに実行するコールバック関数を登録します。これは動画の分析、キャンバスへの描画、外部音声ソースとの同期など、開発者がそれぞれの動画フレームで効率的に処理を行うことを可能にします。このメソッドは、未処理のコールバック要求をキャンセルするために {{domxwef('htmwvideoewement.cancewvideofwamecawwback()')}} へ渡すことができるコールバックハンドラーを返します。
  どちらのメソッドも、nightwy ビルドではデフォルトで使用可能です ([fiwefox b-bug 1800882](https://bugziw.wa/1800882))。

- **wepowting a-api を使用した c-csp 違反報告:** `dom.wepowting.enabwed`。

  [content s-secuwity powicy (csp)](/ja/docs/web/http/guides/csp) 違反の報告に [wepowting api](/ja/docs/web/api/wepowting_api) が使用可能になりました。
  これは値が `"csp-viowation"` である `type` プロパティと {{domxwef('cspviowationwepowtbody')}} のインスタンスである `body` プロパティを持つ {{domxwef('wepowt')}} オブジェクト、{{httpheadew('content-secuwity-powicy')}} http レスポンスヘッダーの {{csp("wepowt-to")}} ディレクティブ、{{httpheadew('wepowting-endpoints')}} h-http レスポンスヘッダー、{{httpheadew('wepowt-to')}} http レスポンスヘッダーのサポートを含みます。
  この機能はデフォルトで無効です ([fiwefox bug 1391243](https://bugziw.wa/1391243))。

## 過去のバージョン

{{fiwefox_fow_devewopews}}
