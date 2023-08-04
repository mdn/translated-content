---
title: HTML5 ゲーム開発入門
slug: Games/Introduction_to_HTML5_Game_Development
---

{{GamesSidebar}}

## 長所

1. HTML5 で作られたゲームはスマートフォン、タブレット、PC、スマート TV で動作します。
2. 他のメディアと同様に、ウェブ全体でゲームを広告、宣伝することができます。
3. 支払い。好きな支払い処理サービスを使って課金できます。
4. 好きな時にゲームを更新できます。
5. 自身のアナリティクスを集められます。
6. 顧客ともっと身近に繋がれます。
7. プレイヤーはいつでもどこでもゲームをプレイできます。

## ウェブ技術

<table class="no-markdown standard-table">
  <thead>
    <tr>
      <th scope="col"><strong>機能</strong></th>
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
        <a href="/ja/docs/Web/API/Touch_events">タッチイベント</a>、
        <a href="/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API">Gamepad API</a>、端末センサー、<a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a>、<a href="/ja/docs/Web/API/Fullscreen_API">全画面 API</a>、<a href="/ja/docs/Web/API/Pointer_Lock_API">ポインターロック API</a>
      </td>
    </tr>
    <tr>
      <td><strong>言語</strong></td>
      <td>
        <a href="/ja/docs/Web/JavaScript">JavaScript</a> (<a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> を使って C/C++ を JavaScript にコンパイルする)
      </td>
    </tr>
    <tr>
      <td><strong>ネットワーク</strong></td>
      <td><a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> や <a href="/ja/docs/Web/API/WebSockets_API">WebSockets</a></td>
    </tr>
    <tr>
      <td><strong>ストレージ</strong></td>
      <td><a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> や「クラウド」</td>
    </tr>
    <tr>
      <td><strong>ウェブ</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML">HTML</a>,
        <a href="/ja/docs/Web/CSS">CSS</a>,
        <a href="/ja/docs/Web/SVG">SVG</a>,
        <a href="/ja/docs/Social_API">ソーシャル API</a> (およびその他いろいろ！)
      </td>
    </tr>
  </tbody>
</table>

- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
  - : 全画面のゲームプレイに使います。
- [Gamepad API](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : ゲームパッドやゲームコントローラーを使用します。
- [HTML](/ja/docs/Web/HTML) および [CSS](/ja/docs/Web/CSS)
  - : ゲームのユーザーインターフェイスを構築し、装飾し、レイアウトします。
- [HTML audio](/ja/docs/Web/HTML/Element/audio)
  - : 簡単な効果音や音楽を簡単に再生することができます。
- [IndexedDB](/ja/docs/Web/API/IndexedDB_API)
  - : ユーザーデータを自分のコンピューターや 端末に保存します。
- [JavaScript](/ja/docs/Web/JavaScript)
  - : ゲームのコードを書くための高速ウェブプログラミング言語です。
    簡単に既存のゲームを移植するには、 [Emscripten](https://github.com/emscripten-core/emscripten/wiki) や [Asm.js](http://asmjs.org/spec/latest/) を使用します。
- [ポインターロック API](/ja/docs/Web/API/Pointer_Lock_API)
  - : マウスなどのポインティングデバイスをゲームのインターフェイス内にロックします。
- [SVG](/ja/docs/Web/SVG) (Scalable Vector Graphics)
  - : ユーザーの画面の大きさや解像度に関わらず、滑らかに拡大縮小できるベクターグラフィックを構築することができます。
- [型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
  - : JavaScript から生のバイナリーデータにアクセスし、GLテクスチャやゲームデータなど、あらゆるものを操作することができます。
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
  - : オーディオの再生、合成、操作をリアルタイムに制御します。
- [WebGL](/ja/docs/Web/API/WebGL_API)
  - : 高性能でハードウェアアクセラレーションに優れた三次元（および二次元）グラフィックを作成することができます。[OpenGL ES](https://www.khronos.org/opengles/) 2.0。
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
  - : 電話会議やチャットのように 2 人のユーザー間で他のアプリケーションのデータをやり取りするなど、音声や映像データを制御するリアルタイム通信です。
- [WebSockets](/ja/docs/Web/API/WebSockets_API)
  - : アプリやサイトをサーバーに接続し、データをリアルタイムに送受信します。マルチプレイヤーゲームアクションやチャットサービスなどに最適です。
- [Web Workers](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : マルチコアプロセッサーのために、独自の JavaScript コードを実行するバックグラウンドスレッドを生成します。
- [XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest) および [ファイル API](/ja/docs/DOM/File_API)
  - : 新しいゲームレベルやアートワークのダウンロード、非リアルタイムのゲームステータス情報の送信など、ウェブサーバーから必要なあらゆるデータを送受信することができます。
