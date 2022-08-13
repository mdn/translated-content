---
title: ゲーム開発テクニック
slug: Games/Techniques
tags:
  - Games
  - Guide
  - TopicStub
translation_of: Games/Techniques
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

このページは open web テクノロジを使ってゲーム開発をしたい方にとって本質的にコアなテクニック一覧を表示します。

これらがゲーム開発用のアイデアとテクニックです。

- [asm.js 用の非同期スクリプトを使用する](/ja/docs/Games/Techniques/Async_scripts)
  - : 中\~大規模ゲームの作成に必要となる、非同期スクリプトは活用すべき重要テクニックであり、その結果あなたのゲームの JavaScript はメインスレッド外でコンパイルされて、将来のゲーム実行のためにキャッシュされ、その結果ユーザにとっては目覚ましいパフォーマンス改良となります。この記事では方法を説明します。
- [起動パフォーマンスを最適化する](/ja/docs/Apps/Developing/Optimizing_startup_performance "/en-US/docs/Apps/Developing/Optimizing_startup_performance")
  - : 作成したゲームが素早く、スムーズに、ユーザのブラウザや端末が固まったように見えなくする方法。
- [WebRTC の p2p データチャネルを使う](/ja/docs/Games/WebRTC_data_channels "/en-US/docs/Games/WebRTC_data_channels")
  - : オーディオとビデオ通信のサポートに加えて、WebRTC はプレイヤー同士のテキスト・バイナリデータ交換を可能にする、ピア・ツー・ピアのデータチャネルもあります。この記事ではこれでできる事を説明し、簡単に実現するライブラリの使用方法を示します。
- [web ゲーム用の効率的アニメーション](/ja/docs/Games/Techniques/Efficient_animation_for_web_games)
  - : この記事では web ゲーム用の効果的なアニメーション作成のテクニックとアドバイスをモバイルフォンといった下位側の端末サポートに偏って網羅します。CSS トランジションや CSS アニメーション、{{ domxref("window.requestAnimationFrame") }} を含む JavaScript ループについて触れます。
- [Web ゲーム用のオーディオ](/ja/docs/Games/Techniques/Audio_for_Web_Games)
  - : ゲームにとってオーディオは重要部分です — フィードバックと雰囲気を付け加えます。Web ベースのオーディオは早くから成熟していましたが、まだ多くのブラウザに案内するべき違いがあります。この記事では web ゲーム用のオーディオを実装するための詳細なガイドを提供し、現在なるべく広い範囲のプラットフォームで動作するものを観察します。
- [2D 衝突検出](/ja/docs/Games/Techniques/2D_collision_detection)
  - : 2D ゲームの衝突検出についての正確な紹介
- [タイルマップ](/ja/docs/Games/Techniques/Tilemaps)
  - : タイルは 2D ゲームの世界を作るのに、とてもよくあるテクニックです。この記事ではタイルマップと、Canvas API でそれを実装する方法を紹介します。
