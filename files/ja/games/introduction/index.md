---
title: Web用のゲーム開発入門
slug: Games/Introduction
tags:
  - Firefox OS
  - Games
  - Guide
  - Mobile
translation_of: Games/Introduction
---
{{GamesSidebar}}{{IncludeSubnav("/ja/ docs/Games")}}

モダンウェブは、魅力的でクオリティの高いゲーム作りだけでなく、より重要な、そうしたゲームを配信するための、価値あるプラットフォームに急変身しました。

作成できるゲームの範囲は、デスクトップやネイティブ相当と同じレベルです。モダンウェブテクノロジーと最近のブラウザーがあれば、ウェブ用に魅力的で最高級のゲームを作ることも完全に可能です。かつて Flash® を使って作られたシンプルなカードゲームやマルチ・プレイヤーのソーシャルゲームについて述べているのではなく、スゲェ 3D アクションシューティングや、RPG や、その他について述べています。[JavaScript](/ja/docs/JavaScript) JIT コンパイラテクノロジーと新 API の充実したパフォーマンス改良のおかげて、ブラウザー (や [Firefox OS](/ja/docs/Mozilla/Firefox_OS) ベースの端末のような [HTML5](/ja/docs/HTML/HTML5) で動作する端末上) で動作するゲームを、妥協することなしに製作できます。

## HTML5 ゲームプラットフォーム

本当に、ウェブをあなたのゲーム用のより優秀なターゲットプラットフォームだと考えることができます。言うなれば、"ウェブはプラットフォームです"。ウェブ プラットフォームのコアを見ていきましょう:

| 機能             | テクノロジー                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **オーディオ**   | [Web Audio API](/ja/docs/Web/API/Web_Audio_API "/ja/docs/Web_Audio_API")                                                                                                                                                                                                                                                                                                                          |
| **グラフィック** | [WebGL](/ja/docs/WebGL) ([OpenGL ES](http://www.khronos.org/opengles/) 2.0)                                                                                                                                                                                                                                                                                                                       |
| **入力**         | [Touch events](/ja/docs/DOM/Touch_events)、[Gamepad API](/ja/docs/Web/Guide/API/Gamepad "/ja/docs/API/Gamepad/Using_Gamepad_API")、端末センサー、[WebRTC](/ja/docs/Web/API/WebRTC_API "/ja/docs/WebRTC")、[Full Screen API](/ja/docs/Web/Guide/DOM/Using_full_screen_mode "/ja/docs/DOM/Using_fullscreen_mode")、[Pointer Lock API](/ja/docs/API/Pointer_Lock_API "/ja/docs/WebAPI/Pointer_Lock") |
| **言語**         | [JavaScript](/ja/docs/JavaScript) (あるいは [Emscripten](https://github.com/kripken/emscripten/wiki) を使って JavaScript にコンパイルする C/C++ )                                                                                                                                                                                                                                                 |
| **ネットワーク** | [WebRTC](/ja/docs/Web/API/WebRTC_API "/ja/docs/WebRTC") と/あるいは [WebSockets](/ja/docs/WebSockets)                                                                                                                                                                                                                                                                                             |
| **ストレージ**   | [IndexedDB](/ja/docs/IndexedDB) あるいは "クラウド"                                                                                                                                                                                                                                                                                                                                               |
| **ウェブ**       | [HTML](/ja/docs/HTML)、[CSS](/ja/docs/CSS)、[SVG](/ja/docs/SVG)、[Social API](/ja/docs/Social_API) (ともっとたくさん!)                                                                                                                                                                                                                                                                            |

## ビジネスの場合

ゲーム開発者としては、個人でも大規模ゲームスタジオであっても、次のゲームプロジェクトでウェブをターゲットにすることの意味あいを知りたいでしょう。ウェブがどう便利になるか見ていきましょう。

1.  ウェブのリーチは巨大です; つまりあらゆる場所です。HTML5 で製作されたゲームは、スマートフォン、タブレット、PC、スマート TV で動作します。
2.  マーケティングと配信しやすさが改良されます。他の誰かのアプリストアで宣伝することに限定されません。その代わりに、他のメディア同様に ウェブ全体でゲームを広告・宣伝できて、ウェブに備わっているリンクやシェアのしやすさを利用して、新しい顧客にリーチできます。
3.  大事な事も管理できます: 支払いの事です。ゲームが他人のエコシステム内にあるだけで、収益の 30% 以上を渡す必要はありません。その代わりに、希望する金額で、気に入った支払い処理サービスを使用できます。
4.  もっと管理について、希望するいかなる時にでも、ゲームを更新できます。他の会社の誰だかわからない人が、あなたの重大なバグ修正のリリースが今日になるか明日になるか決めるのを、ハラハラしながら承認待ちする必要はありません。
5.  アナリティクスを管理しましょう! あなたがどのアナリティクスを必要とするかについて他人が決めるのに頼るのでなく、自分自身 (や最も気に入ったサードパーティを選んで) で、売上やゲームのリーチを集めることができます。
6.  顧客との関係 (CR) をより密接に、自分の方法で管理するようになります。アプリストアの限定された仕組みでフィルターリングされた顧客フィードバックはもうたくさんです。望む方法で、中間業者なしに、顧客を引きつけてください。
7.  プレイヤーはゲームをいつでも、どこでもプレイできます。ウェブはユビキタスであるため、顧客は電話や、タブレットや、家のノート PC や、職場のデスクトップや、その他何によっても、ゲームの状況をチェック可能です。

## ゲーム開発者用のウェブテクノロジー

テクノ民のみなさん、ウェブがゲーム開発者のテーブルに運んでくる API を掘り下げましょう。こちらがウェブが実現できる味付けの全体リストです:

- [Full Screen API](/ja/docs/Web/Guide/DOM/Using_full_screen_mode "/ja/docs/DOM/Using_fullscreen_mode")
  - : このシンプルな API では、あなたのゲームが全画面を占めることができます、その結果プレイヤーがアクションに没頭できます。
- [Gamepad API](/ja/docs/Web/Guide/API/Gamepad "/ja/docs/API/Gamepad/Using_Gamepad_API")
  - : ユーザーがあなたのゲームで動作するゲームパッドや他のゲームコントローラを使用できるようにしたい場合、この API が必要になるでしょう。
- [HTML](/ja/docs/HTML) と [CSS](/ja/docs/CSS)
  - : この 2 つのテクノロジーは一緒になって、ゲームの UI を作成、スタイル、レイアウトする事ができます。HTML の一部分は {{HTMLElement("canvas")}} 要素であり、これは 2 次元グラフィックスの 1 つの方法になります。
- [HTML オーディオ](/ja/docs/HTML/Element/audio)
  - : {{HTMLElement("audio")}} 要素では、シンプルな SE と音楽を簡単に演奏できます。要望がもっと専門的な場合、リアルオーディオ処理のパワーのある [Web Audio API](/ja/docs/Web/API/Web_Audio_API "/ja/docs/Web_Audio_API") を確認してください!
- [IndexedDB](/ja/docs/IndexedDB)
  - : ユーザーデータを、ユーザー自身のコンピューターや端末に保持するパワフルなデータストレージ API です。ゲームの状態とその他の情報をローカルに保存する良い方法で、必要な時に毎回ダウンロードする必要がなくなります。またユーザーがウェブに接続していない時 (何時間もずっと飛行機に載っているような時) であっても、ゲームを遊べるようにするのにも役立ちます。
- [JavaScript](/ja/docs/JavaScript)
  - : JavaScript (ウェブで使われるプログラミング言語) は、モダンなブラウザーでは劇的に高速で、ずっと高速化されてきています。あなたのゲームのコードを記述するのにリンク先を使うか、既存のゲームを簡単に移植するには [Emscripten](https://github.com/kripken/emscripten/wiki) や [Asm.js](http://asmjs.org/spec/latest/) などのテクノロジーの使用を見てみます。
- [Pointer Lock API](/ja/docs/API/Pointer_Lock_API "/ja/docs/WebAPI/Pointer_Lock")
  - : ポインターロック API では、ゲームのインターフェイス内でマウスやその他のポインティングデバイスをロックし、その結果として絶対カーソル位置の代わりに、ユーザーが行っている事についての座標の差分を受け取ることができて、ユーザー入力がたまたま別のどこかに送られてしまい、その結果重要なアクションを見失うのを防ぎます。
- [SVG](/ja/docs/SVG) (Scalable Vector Graphics)
  - : ユーザーのディスプレイサイズを気にすることなく、スムーズに拡大縮小するベクター画像を作ることができます。
- [Typed Arrays](/ja/docs/JavaScript/Typed_arrays)
  - : JavaScript の型付き配列は JavaScript から生のバイナリーデータに対するアクセスを提供します。GL テクスチャ、ゲームデータまたはその他のものを、ネイティブな JavaScript 形式でなくても操作することができます。
- [Web Audio API](/ja/docs/Web/API/Web_Audio_API "/ja/docs/Web_Audio_API")
  - : JavaScript コードからオーディオの再生、合成、操作の制御するこの API を使うと、素晴らしい音声効果を作成したり、リアルタイムに音楽の再生、操作をすることができます。
- [WebGL](/ja/docs/WebGL)
  - : ウェブコンテンツからハイパフォーマンスで、ハードウェア・アクセラレーションを行う 3D（または 2D）グラフィックスを作成することができます。これはウェブでサポートされている [OpenGL ES](http://www.khronos.org/opengles/) 2.0 の実装です。
- [WebRTC](/ja/docs/Web/API/WebRTC_API "/ja/docs/WebRTC")
  - : WebRTC (Real-Time Communications) API を使用すると、音声会議や二者間でほかのアプリケーションデータのやり取りなど、オーディオとビデオを制御することができます。モンスター攻撃中にプレイヤー同士で会話をさせたいですか？これはそんなあなたのための API です。
- [WebSockets](/ja/docs/WebSockets)
  - : WebSocket API を使用すると、あなたのアプリやサイトをサーバーと接続し、リアルタイムにデータのやり取りを行うことができます。マルチプレイヤーゲームアクションやチャットサービスなどに最適です。
- [Web Workers](/ja/docs/DOM/Using_web_workers)
  - : Worker を使用すると、モダンでマルチコアなプロセッサを利用し、独自の JavaScript コードを実行して、バックグラウンドのスレッドを生成することができます。
- [XMLHttpRequest](/ja/docs/DOM/XMLHttpRequest) と [File API](/ja/docs/Web/API/File "/ja/docs/DOM/File_API")
  - : XMLHttpRequest と File API を組み合わせることで、様々な種類のデータを送受信が可能になります ("XML"という言葉にとらわれないでください！)。これは、新しいゲームレベルやアートワークのダウンロードから、非リアルタイムのゲームステータス情報のやり取りに至るまで、あらゆることをするためのすばらしい方法です。
