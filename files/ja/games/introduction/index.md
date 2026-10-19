---
title: ウェブ用のゲーム開発入門
slug: Games/Introduction
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

現代のウェブは、魅力的でクオリティの高いゲーム作りだけでなく、より重要な、そうしたゲームを配信するための、価値あるプラットフォームに急変身しました。この記事では、ウェブをゲームプラットフォームとして使用するメリットと、それを可能にする技術について紹介します。

作成できるゲームの範囲は、デスクトップやネイティブ相当と同じレベルです。現代のウェブテクノロジーと最近のブラウザーがあれば、ウェブ用に魅力的で最高級のゲームを作ることも完全に可能です。かつて Flash® を使って作られたシンプルなカードゲームやマルチプレイヤーのソーシャルゲームについて述べているのではなく、三次元アクションシューティングや、RPG などについて述べています。[JavaScript](/ja/docs/Web/JavaScript) の JIT コンパイラーテクノロジーと新 API の充実したパフォーマンス改良のおかげて、ブラウザー (または [HTML5](/ja/docs/Glossary/HTML5) が動作する端末上) で動作するゲームを、妥協することなしに製作できます。

## HTML ゲームプラットフォーム

ウェブは、ゲームにとってより優れたターゲットプラットフォームだと考えても差し支えないでしょう。私たちが常々言っているように、「ウェブこそがプラットフォーム」なのです。それでは、ウェブプラットフォームの中核について見ていきましょう。

<table class="no-markdown standard-table">
  <thead>
    <tr>
      <th scope="col">機能</th>
      <th scope="col">技術</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>音声</strong></td>
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
          >ゲームパッド</a
        >, 端末センサー, <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/ja/docs/Web/API/Fullscreen_API">全画面 API</a>,
        <a href="/ja/docs/Web/API/Pointer_Lock_API">ポインターロック API</a>
      </td>
    </tr>
    <tr>
      <td><strong>言語</strong></td>
      <td>
        <a href="/ja/docs/Web/JavaScript">JavaScript</a> (または C/C++ で
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> を使用して JavaScript へコンパイル)
      </td>
    </tr>
    <tr>
      <td><strong>ネットワーク</strong></td>
      <td>
        <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a> や
        <a href="/ja/docs/Web/API/WebSockets_API">WebSocket</a>
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
        <a href="/ja/docs/Web/SVG">SVG</a> (およびその他多数)
      </td>
    </tr>
  </tbody>
</table>

## ビジネスの場合

ゲーム開発者としては、個人でも大規模ゲームスタジオであっても、次のゲームプロジェクトでウェブをターゲットにすることの意味あいを知りたいでしょう。ウェブがどう便利になるか見ていきましょう。

1. ウェブのリーチは巨大です。つまりあらゆる場所です。HTML で製作されたゲームは、スマートフォン、タブレット、PC、スマート TV で動作します。
2. マーケティングと配信しやすさが改善されます。アプリの宣伝は、他社のアプリストアに限定されるわけではありません。その代わりに、ウェブやそれ以外にも存在するメディアを駆使してゲームの広告やプロモーションを行うことができ、ウェブ本来のリンク機能や共有機能を活用して、新しい顧客層に到達することができます。
3. 重要な部分、つまり、決済を自分で制御できます。ゲームが特定のエコシステムに属しているという理由だけで、収益の 30% を他者に渡す必要はありません。その代わりに、希望する金額を設定し、お好みの決済サービスを使用することができます。
4. さらに、いつでも自由にゲームを更新することが可能になります。他社のどこかにいる誰かが、重大なバグ修正を今日リリースするか明日にするかを決定するのを、息をのんで承認を待つ必要はもうありません。
5. アナリティクスを管理しましょう! あなたがどのアナリティクスを必要とするかについて他人が決めるのに頼るのでなく、自分自身（や最も気に入ったサードパーティを選んで）で、売上やゲームのリーチを集めることができます。
6. 顧客との関係 (CR) をより密接に、自分の方法で管理するようになります。アプリストアの限定された仕組みでフィルタリングされた顧客フィードバックはもうたくさんです。望む方法で、中間業者なしに、顧客を引きつけてください。
7. プレイヤーはゲームをいつでも、どこでもプレイできます。ウェブはユビキタスであるため、顧客は電話や、タブレットや、家のノート PC や、職場のデスクトップや、その他何によっても、ゲームの状況をチェック可能です。

## ゲーム開発者用のウェブテクノロジー

テクノ民のみなさん、ウェブがゲーム開発者のテーブルに運んでくる API を掘り下げましょう。こちらがウェブが実現できる味付けの全体リストです。

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
  - : 新しいゲームのステージやアートワークのダウンロードのほか、ゲームの状態のリアルタイムでないやり取りなど、ウェブサーバーから任意の種類のデータを送受信することができます。
- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
  - : このシンプルな API では、あなたのゲームが全画面を占めることができ、その結果プレイヤーがアクションに没頭できます。
- [ゲームパッド API](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : ユーザーがあなたのゲームで動作するゲームパッドや他のゲームコントローラを使用できるようにしたい場合、この API が必要になるでしょう。
- [HTML](/ja/docs/Web/HTML) と [CSS](/ja/docs/Web/CSS)
  - : この 2 つのテクノロジーは一緒になって、ゲームの UI を作成、スタイル、レイアウトすることができます。HTML の一部分は {{HTMLElement("canvas")}} 要素であり、これは二次元グラフィックの 1 つの方法になります。
- [HTML オーディオ](/ja/docs/Web/HTML/Reference/Elements/audio)
  - : {{HTMLElement("audio")}} 要素では、シンプルな SE と音楽を簡単に再生できます。要望がもっと専門的な場合、リアルオーディオ処理のパワーのある [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) を確認してください!
- [IndexedDB](/ja/docs/Web/API/IndexedDB_API)
  - : ユーザーデータを、ユーザー自身のコンピューターや端末に保持するパワフルなデータストレージ API です。ゲームの状態とその他の情報をローカルに保存する良い方法で、必要な時に毎回ダウンロードする必要がなくなります。またユーザーがウェブに接続していない時（何時間も飛行機に乗っているような時）であっても、ゲームを遊べるようにするのにも役立ちます。
- [JavaScript](/ja/docs/Web/JavaScript)
  - : JavaScript (ウェブで使われるプログラミング言語) は、現代のブラウザーでは劇的に高速で、ずっと高速化されてきています。あなたのゲームのコードを記述するのにリンク先を使うか、既存のゲームを簡単に移植するには [Emscripten](https://github.com/emscripten-core/emscripten/wiki) や [Asm.js](http://asmjs.org/spec/latest/) などのテクノロジーの使用を見てみます。
- [ポインターロック API](/ja/docs/Web/API/Pointer_Lock_API)
  - : ポインターロック API では、ゲームのインターフェイス内でマウスやその他のポインティングデバイスをロックし、その結果として絶対カーソル位置の代わりに、ユーザーが行っている事についての座標の差分を受け取ることができて、ユーザー入力がたまたま別のどこかに送られてしまい、その結果重要なアクションを見失うのを防ぎます。
- [SVG](/ja/docs/Web/SVG) (Scalable Vector Graphics)
  - : ユーザーのディスプレイサイズを気にすることなく、スムーズに拡大縮小するベクター画像を作ることができます。
- [型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript の型付き配列は JavaScript から生のバイナリーデータに対するアクセスを提供します。GL テクスチャ、ゲームデータまたはその他のものを、ネイティブな JavaScript 形式でなくても操作することができます。
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
  - : JavaScript コードからオーディオの再生、合成、操作の制御するこの API を使うと、素晴らしい音声効果を作成したり、リアルタイムに音楽の再生、操作をすることができます。
- [WebGL](/ja/docs/Web/API/WebGL_API)
  - : ウェブコンテンツからハイパフォーマンスで、ハードウェア・アクセラレーションを行う三次元（または二次元）グラフィックを作成することができます。これはウェブでサポートされている [OpenGL ES](https://www.khronos.org/opengles/) 2.0 の実装です。
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
  - : WebRTC (Real-Time Communications) API を使用すると、音声会議や二者間でほかのアプリケーションデータのやり取りなど、オーディオとビデオを制御することができます。モンスター攻撃中にプレイヤー同士で会話をさせたいですか？これはそんなあなたのための API です。
- [WebSocket](/ja/docs/Web/API/WebSockets_API)
  - : WebSocket API を使用すると、あなたのアプリやサイトをサーバーと接続し、リアルタイムにデータのやり取りを行うことができます。マルチプレイヤーゲームアクションやチャットサービスなどに最適です。
- [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : ワーカーを使用すると、現代のマルチコアなプロセッサーを利用し、独自の JavaScript コードを実行して、バックグラウンドのスレッドを生成することができます。
