---
title: PlayCanvas でベーシックデモをビルドする
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas
tags:
  - 3D
  - Canvas
  - WebGL
  - PlayCanvas
  - アニメーション
  - カメラ
  - ゲーム
  - チュートリアル
  - ライト
  - レンダリング
  - 初心者
---

{{GamesSidebar}}

PlayCanvas は有名な 3D WebGL ゲームエンジンです ​。 Will Eastcott と Dave Evans によって作成されました。 [GitHub 上でオープンソース](https://github.com/playcanvas/engine)となっており、オンラインで使用できる[エディター](https://developer.playcanvas.com/en/user-manual/designer/)と優れた[ドキュメント](https://developer.playcanvas.com/en/)が特徴です。 オンラインエディターは、パブリックプロジェクトの場合チームメンバー 2 人まで無料で使用できますが、商用でより多くのデベロッパーが参加できるプライベートプロジェクトを希望される場合は [有償プラン](https://playcanvas.com/plans)もあります。

![PlayCanvas website.](playcanvas-cover.png)

## ゲームやデモ

PlayCanvas では、機能紹介を兼ねたデモをいくつか公開しています。

- [Tanx](https://playcanv.as/p/aP0oxhUr) は、マルチプレイヤーのタンクゲームで自分のタンクを乗り回したり、他のプレイヤーを射撃したりするゲームです。
- [Swooop](https://playcanv.as/p/JtL2iqIH) は、航空機を操縦して魔法の島を飛び回り、宝石や燃料を集めるゲームです。
- [Star Lord](https://playcanv.as/b/FQbBsJTd) や [BMW i8](https://playcanv.as/p/RqJJ9oU9) のようなビジュアリゼーションもエンジンを活用し、その機能を紹介しています。

![A list of PlayCanvas demos: Tanx, Swooop, Star Lord, BMW i8.](playcanvas-demos.png)

> **Note:** さらに事例をご覧になる場合は[特集されているデモ](https://playcanvas.com/explore)も確認してください。

## エンジンとエディターの違い

エンジンそのものは、 JavaScript ファイルを HTML に直接入れ込むことで標準ライブラリとして使用でき、すぐにコーディングすることができます。さらに、 PlayCanvas のツールセットにはオンラインエディターも搭載されています。このオンラインエディターでは、シーンにコンポーネントをドラッグ & ドロップすることができます。
コーディングの知識よりも、デザインの知識の方が豊富な方がゲームやシーンを要するアプリを作成する場合など、この機能は大変便利なものとなります。 エディターとエンジンは異なるアプローチですが、最終的な目的の達成という面では同等です。

## PlayCanvas エンジン

モダンブラウザー向けに構築されている PlayCanvas は、リソースローディング、エンティティシステムやコンポーネントシステム、高度なグラフィック操作、コリジョン、物理エンジン ( [ammo.js](https://github.com/kripken/ammo.js/)
でのビルド)、オーディオ、様々なデバイス（ゲームパッドを含む）からの入力のコントロールを扱う設備を搭載したフル装備の 3D エンジンです。 なかなかの機能が揃っているのではないでしょうか。実際に使用されているところを見てみましょう。詳細については [PlayCanvas でベーシックデモをビルドする](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine)を参照ください。

## PlayCanvas エディター

ゼロからコーディングするのではなく、オンラインエディターを使用するという手もあります。 コーディングが得意というわけでない方でも、心地よく使用いただける環境になっています。 詳細は [PlayCanvas でベーシックデモをビルドする](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor)を参照ください。

## まとめ

もちろん、自分がどういう方法でビルドしたいか、それが一番です。デザイナーであればオンラインエディターがやりやすいかもしれませんし、プログラマーであればコーディング環境で自らコントロールできるエンジンのソースファイルを好むかもしれません。 選択肢があり、最もいいと思うツールを選ぶことができるのがいい点です。
