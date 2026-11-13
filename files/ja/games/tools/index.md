---
title: ゲーム開発のためのツール
slug: Games/Tools
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

このページにはゲーム開発ツールに関する記事へのリンクがまとまっています。ゆくゆくはフレームワークやコンパイラー、デバッグ用ツールもカバーすることを目指しています。

- [asm.js](/ja/docs/Games/Tools/asm.js)
  - : asm.js は極めて限定された JavaScript のサブセットで、ahead-of-time (AOT) コンパイラーで最適化されて、通常の JavaScript コードよりも極めて高速に動作します。これはもちろん、ゲーム用に優れています。
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : LLVM から JavaScript へのコンパイラーです。これを利用することで、C++ や LLVM バイトコードを出力する言語のコードを、高速に動作する JavaScript へコンパイルすることができます。これはアプリをウェブに移植する優秀なツールです。[有用な Emscripten のチュートリアル](https://github.com/emscripten-core/emscripten/wiki/Tutorial)がウィキにあります。
- [Firefox プロファイラー](https://profiler.firefox.com/docs/#/)
  - : Firefox プロファイラーを使えば、コードのプロファイリングを行い、パフォーマンスの課題がどこにあるのかを特定できるため、ゲームを最高の速度で実行可能です。
- ゲーム開発とデバッグのためのツールチェーン
  - : 通常のウェブアプリのデバッグとどう違うのでしょうか？どのような専用ツールが利用できるのでしょうか？この点については、Will が[ツール](https://firefox-source-docs.mozilla.org/devtools-user/index.html)<sup>(英語)</sup>で網羅的に解説する予定ですが、ここでは、Will の記事へのリンクをつけて、ゲームのデバッグに役立つ実践的なツールチェーンのチュートリアルを紹介したいと思います。
    - 基本的なツールの概要
    - [シェーダエディター](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)<sup>(英語)</sup>
    - パフォーマンスツール（現在開発中、2014 年初頭予定）

## ウェブ技術

<table class="no-markdown standard-table">
  <caption>ゲーム開発におけるウェブ技術とその役割</caption>
  <thead>
    <tr>
      <th scope="col"><strong>役割</strong></th>
      <th scope="col"><strong>技術</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>オーディオ</strong></td>
      <td><a href="/ja/docs/Web/API/Web_Audio_API">ウェブオーディオ API</a></td>
    </tr>
    <tr>
      <td><strong>グラフィック</strong></td>
      <td>
        <a href="/ja/docs/Web/API/WebGL_API">WebGL</a> (<a
          href="https://www.khronos.org/opengles/"
          >OpenGL ES</a
        >
        2.0)
      </td>
    </tr>
    <tr>
      <td><strong>入力</strong></td>
      <td>
        <a href="/ja/docs/Web/API/Touch_events">タッチイベント</a>,
        <a href="/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API"
          >ゲームパッド API</a
        >, 端末のセンサー, <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/ja/docs/Web/API/Fullscreen_API">全画面 API</a>,
        <a href="/ja/docs/Web/API/Pointer_Lock_API">ポインターロック API</a>
      </td>
    </tr>
    <tr>
      <td><strong>言語</strong></td>
      <td>
        <a href="/ja/docs/Web/JavaScript">JavaScript</a>（または C/C++ で
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> を使用して
        JavaScript へコンパイル）
      </td>
    </tr>
    <tr>
      <td><strong>ネットワーク</strong></td>
      <td>
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> や
        <a href="/ja/docs/Web/API/WebSockets_API">WebSockets</a>
      </td>
    </tr>
    <tr>
      <td><strong>ストレージ</strong></td>
      <td>
        <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> または「クラウド」
      </td>
    </tr>
    <tr>
      <td><strong>ウェブ</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML">HTML</a>,
        <a href="/ja/docs/Web/CSS">CSS</a>,
        <a href="/ja/docs/Web/SVG">SVG</a>（その他たくさん）
      </td>
    </tr>
  </tbody>
</table>

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
  - : ウェブサーバーとの間で、新しいゲームのステージやアートワークのダウンロードから、非リアルタイムのゲームステータス情報の送受信に至るまで、あらゆる種類のデータを自由にやり取りできます。
- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
  - : 全画面でゲームをプレイします。
- [ゲームパッド API](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : ゲームパッドやその他のゲームコントローラーを使用します。
- [HTML](/ja/docs/Web/HTML) および [CSS](/ja/docs/Web/CSS)
  - : ゲームのインターフェイスを構築し、スタイル設定やレイアウトを設定します。
- [HTML audio](/ja/docs/Web/HTML/Reference/Elements/audio)
  - : 単純な効果音や音楽を簡単に再生できます。
- [IndexedDB](/ja/docs/Web/API/IndexedDB_API)
  - : ユーザーデータを各自のコンピューターや端末に格納します。
- [JavaScript](/ja/docs/Web/JavaScript)
  - : ゲームのコードを書くための高速なウェブプログラミング言語です。
    既存のゲームを簡単に移植するには、[Emscripten](https://github.com/emscripten-core/emscripten/wiki) または [Asm.js](http://asmjs.org/spec/latest/) をご利用ください。
- [ポインターロック API](/ja/docs/Web/API/Pointer_Lock_API)
  - : ゲームのインターフェイス内に、マウスやその他のポインティングデバイスをロックします。
- [SVG](/ja/docs/Web/SVG) (Scalable Vector Graphics)
  - : ユーザーのディスプレイのサイズや解像度に関係なく、スムーズに変倍されるベクターグラフィックを作成します。
- [型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript で生のバイナリーデータにアクセスし、GL テクスチャやゲームデータなど、何らかのデータを操作できます。
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
  - : 音声の再生、合成、および加工をリアルタイムで制御します。
- [WebGL](/ja/docs/Web/API/WebGL_API)
  - : 高性能でハードウェアアクセラレーション対応の三次元（および二次元）グラフィックを作成します。[OpenGL ES](https://www.khronos.org/opengles/) 2.0 です。
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
  - : 音声と映像データを制御するためのリアルタイム通信。これには、テレビ会議や、チャット同様に 2 人のユーザー間でアプリケーションデータをやり取りする機能などが含まれます。
- [WebSocket](/ja/docs/Web/API/WebSockets_API)
  - : アプリやサイトをサーバーに接続して、データをリアルタイムでやり取りしましょう。マルチプレイヤーゲームやチャットサービスなどに最適です。
- [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : マルチコアプロセッサー向けに、独自の JavaScript コードを実行するバックグラウンドスレッドを生成します。

## ネイティブゲームをウェブに移植する

ネイティブ開発者（例えば、C++ でゲームを開発している方）で、自分のゲームをウェブに移植する方法に関心があるなら、当社の [Emscripten](https://emscripten.org/index.html) について詳しく知っておくことをお勧めします。これは LLVM から JavaScript へのコンパイラーであり、LLVM バイトコード（例：Clang を使用して C/C++ から生成されたもの、あるいは他の言語から生成されたもの）を受け取り、ウェブ上で実行可能な [asm.js](/ja/docs/Games/Tools/asm.js) にコンパイルします。

まずは、以下をご覧ください。

- [Emscripten について](https://emscripten.org/docs/introducing_emscripten/about_emscripten.html)<sup>(英語)</sup>では、概要や大まかな詳細を含む。
- [ダウンロードとインストール](https://emscripten.org/docs/getting_started/downloads.html)<sup>(英語)</sup>では、ツールチェーンのインストール方法について解説しています。
- [Emscripten チュートリアル](https://emscripten.org/docs/getting_started/Tutorial.html)<sup>(英語)</sup>では、使い始め方を解説するチュートリアルを提供しています。
