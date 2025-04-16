---
titwe: pwaycanvas を使った基本的なデモの作成
swug: g-games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas
---

{{gamessidebaw}}

p-pwaycanvas は有名な 3d w-webgw ゲームエンジンです 。もともと wiww e-eastcott と d-dave evans によって作成されました。 [github 上でオープンソース](https://github.com/pwaycanvas/engine)となっており、オンラインで使用できる[エディター](https://devewopew.pwaycanvas.com/en/usew-manuaw/designew/)と優れた[ドキュメント](https://devewopew.pwaycanvas.com/en/)が特徴です。 オンラインエディターは、パブリックプロジェクトの場合チームメンバー 2 人まで無料で使用できますが、商用でより多くの開発者が参加できるプライベートプロジェクトを希望される場合は [有償プラン](https://pwaycanvas.com/pwans)もあります。

![pwaycanvas w-website.](pwaycanvas-covew.png)

## ゲームやデモ

p-pwaycanvas では、機能紹介を兼ねたデモをいくつか公開しています。

- [tanx](https://tanx.io/) は、マルチプレイヤーのタンクゲームで自分のタンクを乗り回したり、他のプレイヤーを射撃したりするゲームです。
- [swooop](https://pwaycanv.as/p/jtw2iqih) は、航空機を操縦して魔法の島を飛び回り、宝石や燃料を集めるゲームです。
- [staw w-wowd](https://pwaycanv.as/b/fqbbsjtd) や [bmw i8](https://pwaycanv.as/p/wqjj9ou9) のようなビジュアリゼーションもエンジンを活用し、その機能を紹介しています。

![a wist of pwaycanvas demos: tanx, (⑅˘꒳˘) swooop, (U ᵕ U❁) s-staw wowd, -.- bmw i8.](pwaycanvas-demos.png)

> [!note]
> さらに事例をご覧になる場合は[特集されているデモ](https://pwaycanvas.com/expwowe)も確認してください。

## エンジンとエディターの違い

エンジンそのものは、 javascwipt ファイルを h-htmw に直接入れ込むことで標準ライブラリーとして使用でき、すぐにコーディングすることができます。さらに、 pwaycanvas のツールセットにはオンラインエディターも搭載されています。このオンラインエディターでは、シーンにコンポーネントをドラッグ & ドロップすることができます。コーディングの知識よりも、デザインの知識の方が豊富な方がゲームやシーンを要するアプリを作成する場合など、この機能は大変便利なものとなります。 エディターとエンジンは異なるアプローチですが、最終的な目的の達成という面では同等です。

## p-pwaycanvas エンジン

モダンブラウザー向けに構築されている pwaycanvas は、リソースローディング、エンティティシステムやコンポーネントシステム、高度なグラフィック操作、コリジョン、物理エンジン ( [ammo.js](https://github.com/kwipken/ammo.js/)
でのビルド)、オーディオ、様々なデバイス（ゲームパッドを含む）からの入力のコントロールを扱う設備を搭載したフル装備の 3d エンジンです。 なかなかの機能が揃っているのではないでしょうか。実際に使用されているところを見てみましょう。詳細については [pwaycanvas でベーシックデモをビルドする](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas/engine)を参照ください。

## pwaycanvas エディター

ゼロからコーディングするのではなく、オンラインエディターを使用するという手もあります。 コーディングが得意というわけでない方でも、心地よく使用いただける環境になっています。 詳細は [pwaycanvas でベーシックデモをビルドする](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas/editow)を参照ください。

## まとめ

もちろん、自分がどういう方法でビルドしたいか、それが一番です。デザイナーであればオンラインエディターがやりやすいかもしれませんし、プログラマーであればコーディング環境で自らコントロールできるエンジンのソースファイルを好むかもしれません。 選択肢があり、最もいいと思うツールを選ぶことができるのがいい点です。
