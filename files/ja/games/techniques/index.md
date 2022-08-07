---
title: ゲーム開発テクニック
slug: Games/Techniques
tags:
  - Games
  - Guide
  - TopicStub
translation_of: Games/Techniques
---
<div>{{GamesSidebar}}</div><div>{{IncludeSubnav("/ja/docs/Games")}}</div>

<div class="summary">
<p><span class="seoSummary">このページはopen webテクノロジを使ってゲーム開発をしたい方にとって本質的にコアなテクニック一覧を表示します。</span></p>

<p>これらがゲーム開発用のアイデアとテクニックです。</p>
</div>

<dl>
 <dt><a href="/ja/docs/Games/Techniques/Async_scripts">asm.js用の非同期スクリプトを使用する</a></dt>
 <dd>中~大規模ゲームの作成に必要となる、非同期スクリプトは活用すべき重要テクニックであり、その結果あなたのゲームのJavaScriptはメインスレッド外でコンパイルされて、将来のゲーム実行のためにキャッシュされ、その結果ユーザにとっては目覚ましいパフォーマンス改良となります。この記事では方法を説明します。</dd>
 <dt><a href="/ja/docs/Apps/Developing/Optimizing_startup_performance" title="/en-US/docs/Apps/Developing/Optimizing_startup_performance">起動パフォーマンスを最適化する</a></dt>
 <dd>作成したゲームが素早く、スムーズに、ユーザのブラウザや端末が固まったように見えなくする方法。</dd>
 <dt><a href="/ja/docs/Games/WebRTC_data_channels" title="/en-US/docs/Games/WebRTC_data_channels">WebRTC のp2pデータチャネルを使う</a></dt>
 <dd>オーディオとビデオ通信のサポートに加えて、WebRTCはプレイヤー同士のテキスト・バイナリデータ交換を可能にする、ピア・ツー・ピアのデータチャネルもあります。この記事ではこれでできる事を説明し、簡単に実現するライブラリの使用方法を示します。</dd>
 <dt><a href="/ja/docs/Games/Techniques/Efficient_animation_for_web_games">webゲーム用の効率的アニメーション</a></dt>
 <dd>この記事ではwebゲーム用の効果的なアニメーション作成のテクニックとアドバイスをモバイルフォンといった下位側の端末サポートに偏って網羅します。CSS トランジションや CSS アニメーション、{{ domxref("window.requestAnimationFrame") }} を含むJavaScriptループについて触れます。</dd>
 <dt><a href="/ja/docs/Games/Techniques/Audio_for_Web_Games">Webゲーム用のオーディオ</a></dt>
 <dd>ゲームにとってオーディオは重要部分です — フィードバックと雰囲気を付け加えます。Webベースのオーディオは早くから成熟していましたが、まだ多くのブラウザに案内するべき違いがあります。この記事ではwebゲーム用のオーディオを実装するための詳細なガイドを提供し、現在なるべく広い範囲のプラットフォームで動作するものを観察します。</dd>
 <dt><a href="/ja/docs/Games/Techniques/2D_collision_detection">2D 衝突検出</a></dt>
 <dd>2D ゲームの衝突検出についての正確な紹介</dd>
 <dt><a href="/ja/docs/Games/Techniques/Tilemaps">タイルマップ</a></dt>
 <dd>タイルは2Dゲームの世界を作るのに、とてもよくあるテクニックです。この記事ではタイルマップと、Canvas API でそれを実装する方法を紹介します。</dd>
</dl>
