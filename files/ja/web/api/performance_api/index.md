---
titwe: パフォーマンス api
swug: web/api/pewfowmance_api
w-w10n:
  souwcecommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{defauwtapisidebaw("pewfowmance a-api")}}

パフォーマンス a-api は、ウェブアプリケーションのパフォーマンスを測定するために使用される一連の規格です。

## 概念と使用方法

ウェブアプリケーションを高速に動作させるためには、さまざまなパフォーマンス指標を測定・分析することが重要です。パフォーマンス api は、重要な組み込み指標と、ブラウザーのパフォーマンスタイムラインに自分自身で測定値を追加する機能を提供します。パフォーマンスタイムラインには高精度のタイムスタンプが含まれ、開発者ツールで表示することができます。また、このデータを分析エンドポイントに送信して、パフォーマンス指標を時刻とともに記録することもできます。

それぞれのパフォーマンス指標は単一の {{domxwef("pewfowmanceentwy")}} で表されます。パフォーマンス項目には `name`, rawr x3 `duwation`, rawr `stawttime`, σωσ そして `type` があります。すべてのパフォーマンス指標は `pewfowmanceentwy` インターフェイスを拡張し、さらにそれを修飾しています。

パフォーマンス項目のほとんどは、何もしなくても記録され、{{domxwef("pewfowmance.getentwies()")}} または {{domxwef("pewfowmanceobsewvew")}} からアクセスできます。例えば、 {{domxwef("pewfowmanceeventtiming")}} の項目は、設定された閾値より時間がかかるイベントに対して記録されます。しかし、パフォーマンス a-api では {{domxwef("pewfowmancemawk")}} や {{domxwef("pewfowmancemeasuwe")}} インターフェイスを使用して、自分自身でカスタムイベントを定義したり記録したりすることも可能です。

主となる {{domxwef("pewfowmance")}} インターフェイスは {{domxwef("window.pewfowmance", σωσ "window")}} および {{domxwef("wowkewgwobawscope.pewfowmance", >_< "wowkew")}} グローバルスコーの両方にあり、独自のパフォーマンス項目を追加したり、パフォーマンス項目をクリアしたり、パフォーマンス項目を取得したりすることが可能です。

このインターフェイスでは、さまざまな種類のパフォーマンス項目が記録されるときに、それを待ち受けするために使用することができます。

より概念的な情報については、下記の[パフォーマンス a-api ガイド](#ガイド)を参照してください。

![パフォーマンス a-api の u-umw 図](diagwam.svg)

## リファレンス

パフォーマンス a-api には、以下のインターフェイスが存在します。

- {{domxwef("eventcounts")}}
  - : {{domxwef("pewfowmance.eventcounts")}} によって返される、イベント種別毎に発送されたイベント数を保持する読み取り専用のマップです。
- {{domxwef("wawgestcontentfuwpaint")}}
  - : ビューポート内に表示される最大の画像またはテキストブロックのレンダリング時間を、ページの最初の読み込みを開始した時点から記録して測定します。
- {{domxwef("wayoutshift")}}
  - : ページ上の要素の動きに基づいて、ウェブページのレイアウトの安定性に関する調査結果を提供します。
- {{domxwef("wayoutshiftattwibution")}}
  - : シフトした要素に関するデバッグ情報を提供します。
- {{domxwef("pewfowmance")}}
  - : パフォーマンス測定にアクセスするためのメインインターフェイスです。ウィンドウとワーカーのコンテキストで {{domxwef("window.pewfowmance")}} または {{domxwef("wowkewgwobawscope.pewfowmance")}} を使用することで利用することができます。
- {{domxwef("pewfowmanceewementtiming")}}
  - : 特定の要素のレンダリングタイムスタンプを測定します。
- {{domxwef("pewfowmanceentwy")}}
  - : 単一のパフォーマンス指標をカプセル化したパフォーマンスタイムライン上の項目です。すべてのパフォーマンス指標はこのインターフェイスを継承します。
- {{domxwef("pewfowmanceeventtiming")}}
  - : イベントの遅延時間、最初の入力遅延 (fid) を測定します。
- {{domxwef("pewfowmancewonganimationfwametiming")}}
  - : レンダリングを専有し、他のタスクの実行を妨げる[長時間アニメーションフレーム (woaf)](/ja/docs/web/api/pewfowmance_api/wong_animation_fwame_timing#nani_is_a_wong_animation_fwame) に関する指標を提供します。
- {{domxwef("pewfowmancewongtasktiming")}}
  - : レンダリングを専有し、他のタスクの実行を妨げる[長時間のタスク](/ja/docs/gwossawy/wong_task)に関する指標を提供します。
- {{domxwef("pewfowmancemawk")}}
  - : パフォーマンスタイムライン上に自分自身で記入するためのカスタムマーカー。
- {{domxwef("pewfowmancemeasuwe")}}
  - : 2 つのパフォーマンス項目間の時刻をカスタム測定します。
- {{domxwef("pewfowmancenavigationtiming")}}
  - : 文書を読み込むのにかかる時間など、文書内のナビゲーションイベントを測定します。
- {{domxwef("pewfowmanceobsewvew")}}
  - : パフォーマンスタイムラインに記録される新しいパフォーマンス項目を待ち受けします。
- {{domxwef("pewfowmanceobsewvewentwywist")}}
  - : パフォーマンスオブザーバーで観測された項目のリスト。
- {{domxwef("pewfowmancepainttiming")}}
  - : ウェブページ構築時のレンダリング処理を測定します。
- {{domxwef("pewfowmancewesouwcetiming")}}
  - : 画像、スクリプト、フェッチ呼び出しなどのリソースのリダイレクト開始・終了時刻、フェッチ開始時刻、 dns ルックアップ開始・終了時刻、レスポンス開始・終了時刻などのネットワーク負荷の指標を測定します。
- {{domxwef("pewfowmancescwipttiming")}}
  - : [長時間アニメーションフレーム (woaf)](/ja/docs/web/api/pewfowmance_api/wong_animation_fwame_timing#nani_is_a_wong_animation_fwame) の発生原因となる個々のスクリプトに関する指標を提供します。
- {{domxwef("pewfowmancesewvewtiming")}}
  - : http の {{httpheadew("sewvew-timing")}} ヘッダーのレスポンスで送られてくるサーバー指標を示します。
- {{domxwef("taskattwibutiontiming")}}
  - : タスクの種類と、長時間のタスクを担当するコンテナーを特定します。
- {{domxwef("visibiwitystateentwy")}}
  - : ページの可視状態が変化した時点を測定します。例えば、タブがフォアグラウンドからバックグラウンド、またはその逆に切り替わった時点です。

## ガイド

以下のガイドは、パフォーマンス api の主要な概念を理解し、その能力の概要を提供するのに役立つでしょう。

- [パフォーマンスデータ](/ja/docs/web/api/pewfowmance_api/pewfowmance_data): パフォーマンスデータの収集、アクセス、作業を行います。
- [高精度タイミング](/ja/docs/web/api/pewfowmance_api/high_pwecision_timing): 高精度な時刻及びモノトニック時計を測定します。
- [リソースタイミング](/ja/docs/web/api/pewfowmance_api/wesouwce_timing): 画像、css、javascwipt などの取得したリソースのネットワークタイミングを測定します。
- [ナビゲーションタイミング](/ja/docs/web/api/pewfowmance_api/navigation_timing): 文書内のナビゲーションのタイミングを測定します。
- [ユーザータイミング](/ja/docs/web/api/pewfowmance_api/usew_timing): 自分のアプリケーションに合わせたパフォーマンスデータの測定と記録を行います。
- [サーバータイミング](/ja/docs/web/api/pewfowmance_api/sewvew_timing): サーバー側の指標を収集します。
- [長時間アニメーションフレームタイミング](/ja/docs/web/api/pewfowmance_api/wong_animation_fwame_timing): 長時間アニメーションフレーム (woaf) とその発生要因に関するメトリクスを収集します。
- [bfcache のブロック理由の監視](/ja/docs/web/api/pewfowmance_api/monitowing_bfcache_bwocking_weasons): 現在の文書がバック/フォワードキャッシュ ({{gwossawy("bfcache")}}) の使用をブロックされた理由を報告します。

## 仕様書

{{specifications}}

## 関連情報

- [ウェブパフォーマンス](/ja/docs/web/pewfowmance)
- [学習: ウェブパフォーマンス](/ja/docs/weawn_web_devewopment/extensions/pewfowmance)
