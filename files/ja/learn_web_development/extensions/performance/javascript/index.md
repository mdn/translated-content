---
title: JavaScript のパフォーマンス
slug: Learn_web_development/Extensions/Performance/JavaScript
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

ウェブサイト上で JavaScript をどのように使用しているかを検討し、JavaScript が引き起こす可能性のあるパフォーマンスの問題を軽減する方法を考えることはとても重要です。平均的なウェブサイトでは、ダウンロードされるバイト数の 70% 以上画像と動画が占めていますが、バイト数では JavaScript はパフォーマンスに悪影響を与える可能性がより高く、ダウンロード時間、レンダリングパフォーマンス、CPU およびバッテリーの使用量に大きな影響を与える可能性があります。この記事では、ウェブサイトのパフォーマンスを向上させるための JavaScript を最適化するためのヒントとテクニックをご紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a
          href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >基本的なソフトウェアのインストール</a
        >、
        <a href="/ja/docs/Learn_web_development/Getting_started/Your_first_website"
          >クライアント側のウェブ技術</a
        >の基本的な知識
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        JavaScript がパフォーマンス最適化に与える影響について、また、JavaScript のファイルサイズだけがウェブパフォーマンスに与える影響ではないことを学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## 最適化するか最適化しないか

コードの最適化を始める前に最初に、「何を最適化する必要があるか」を明確にする必要があります。以下で説明するヒントやテクニックの中には、ほぼすべてのウェブプロジェクトに好ましいことですが、特定の状況でのみ必要なものもあります。これらのテクニックをすべて適用しようとすることは、おそらく不必要であり、時間の無駄になるかもしれません。各プロジェクトで実際に必要なパフォーマンスの最適化は何かを見極める必要があります。

これを行うには、サイトの[パフォーマンスを測定](/ja/docs/Learn_web_development/Extensions/Performance/Measuring_performance)する必要があります。前回のリンクで示したように、パフォーマンスを測定するにはいくつかの方法があり、その中には高度な[パフォーマンス API](/ja/docs/Web/API/Performance_API) を使用するものもあります。ただし、まず手始めに、組み込みのブラウザー[ネットワーク](/ja/docs/Learn_web_development/Extensions/Performance/Measuring_performance#ネットワークモニターツール)ツールや[パフォーマンス](/ja/docs/Learn_web_development/Extensions/Performance/Measuring_performance#パフォーマンスモニターツール)ツールなどのツールの使用方法を学び、ページの読み込みに時間がかかり、最適化が必要な部分を確認することをお勧めします。

## JavaScript のダウンロードの最適化

最もパフォーマンスが良く、ブロックする JavaScript を最も少なくするには、まったく JavaScript を使用しないことです。 JavaScript はできるだけ使用しないようにしましょう。留意すべきヒントをいくつかご紹介します。

- **フレームワークは常に必要とは限りません**。 [JavaScript フレームワーク](/ja/docs/Learn_web_development/Core/Frameworks_libraries)を使い慣れているかもしれません。このフレームワークの使用に経験があり、自信があり、それが提供するすべてのツールを同様に気に入っている場合は、ほとんどのプロジェクトを構築するための定番ツールになるかもしれません。ただし、フレームワークは JavaScript を多用します。JavaScript の要件がいくつかある、かなり静的な使い勝手の良いものを作成する場合、そのフレームワークは必要ないでしょう。標準の JavaScript を数行使用して、必要な機能を実装できるかもしれません。
- **よりシンプルな解決策を検討してください**。実装する派手で興味深い解決策があるかもしれませんが、ユーザーがそれを評価するかどうかを検討してください。ユーザーはよりシンプルなものを好むのではないしょうか？
- **使用されていないコードを除去してください**。これは当然のことのように聞こえるかもしれませんが、開発プロセス中に追加された使用されていない機能をクリーンアップすることを忘れてしまう開発者が驚くほど多いのです。追加および除去する内容については、慎重に検討する必要があります。使用されているかどうかに関係なく、すべてのスクリプトは解釈されます。したがって、ダウンロードを高速化する即効性のある方法は、使用されていない機能をすべて削除することです。また、フレームワークで利用できる機能のうち、実際に使用するのはごく一部であることが多いことも考慮してください。必要な部分のみを含む、独自のフレームワークを構築することは可能でしょうか？
- **組み込みのブラウザー機能を検討してください**。 JavaScript を使用して自分自身で作成するよりも、ブラウザーがすでに保有する機能を使用できる場合があります。例えば、次のようにします。
  - [組み込みのクライアント側フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation#組み込みフォーム検証の利用)を使用してください。
  - ブラウザーの {{htmlelement("video")}} プレーヤーを使用してください。
  - JavaScript アニメーションライブラリーではなく、[CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using) を使用してください（[アニメーションの処理](#javascript_アニメーションの処理)も参照してください）。

また、JavaScript を、重要な部分と重要でない部分を表す複数のファイルに分割することをお勧めします。 [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)を使用すると、別個の外部 JavaScript ファイルを使用するよりも、これをより効率的に行うことができます。

その後、これらの小さなファイルを最適化することができます。{{Glossary("Minification", "ミニファイ化")}}は、ファイル内の文字数を削減し、それによって JavaScript のバイト数やサイズを縮小します。 {{Glossary("Gzip compression", "Gzip 圧縮")}}はファイルをさらに圧縮するため、コードをミニファイしない場合でも使用しましょう。{{Glossary("Brotli compression", "Brotli")}} は Gzip と似ていますが、一般的に Gzip 圧縮よりも優れたパフォーマンスを発揮します。

コードを手動で分割して最適化することもできますが、多くの場合、 [webpack](https://webpack.js.org/) などのモジュールバンドラーを使用すると、より効果的にこれを行うことができます。

## 構文解析と実行の処理

この節に含まれてるヒントを見ていく前に、ブラウザがページをレンダリングする過程で JavaScript が処理される場所について説明しておきましょう。ウェブページが読み込まれたときには、こうなります。

1. 通常、HTML は、ページに表示される順に最初に構文解析されます。
2. CSS が検出されると、そのページに適用する必要のあるスタイルを理解するために構文解析されます。この間に、画像やウェブフォントなどのリンクされた資産が取得され始めます。
3. JavaScript が検出されると、ブラウザーはそれを構文解析、評価し、ページに対して実行します。
4. 少し後に、ブラウザーは、適用される CSS を指定して、各 HTML 要素のスタイルを決定します。
5. スタイルが設定された結果が画面に描画されます。

> [!NOTE]
> これは、何が起こるかをとても単純化した説明ですが、おおよそのアイディアは伝わると思います。

ここで重要なのはステップ 3 です。既定では、JavaScript の構文解析と実行はレンダリングをブロックします。つまり、JavaScript が検出されると、そのスクリプトが処理されるまで、その後に続く HTML の構文解析がブロックされます。その結果、スタイルの設定や描画もブロックされます。したがって、ダウンロードする内容だけでなく、そのコードがいつ、どのように実行されるかを慎重に検討する必要があります。

次のいくつかの節では、JavaScript の構文解析と実行を最適化するための有益なテクニックを紹介します。

## 重要な資産をできるだけ早く読み込む

スクリプトが本当に重要で、読み込みが十分速くなくパフォーマンスに影響を与えていることが懸念される場合は、そのスクリプトを文書の {{htmlelement("head")}} 内に読み込むことができます。

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

これはうまくいきますが、レンダリングをブロックします。より良い方法は、[`rel="preload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) を使用して、重要な JavaScript の事前ローダーを作成することです。

```html
<head>
  ...
  <!-- JavaScript ファイルを先読み -->
  <link rel="preload" href="important-js.js" as="script" />
  <!-- JavaScript モジュールを先読み -->
  <link rel="modulepreload" href="important-module.js" />
  ...
</head>
```

先読みの {{htmlelement("link")}} は、レンダリングをブロックすることなく、JavaScript をできるだけ早く取得します。その後、ページ内の任意の場所でそれを使用することができます。

```html
<!-- 意味のある場所にはすべて記載する -->
<script src="important-js.js"></script>
```

または、JavaScript モジュールの場合は、スクリプト内で次のように記述します。

```js
import { someFunction } from "important-module.js";
```

> [!NOTE]
> 再読み込みによって、スクリプトがそれを含める時点で確実に読み込まれるとは限りませんが、ダウンロードが早く始まるという意味です。レンダリングをブロックする時間は、完全に除去されなくても短縮されます。

## 重要でない JavaScript の実行を遅らせる

一方、重要でない JavaScript の解釈と実行は、必要なときに後回しにするようにしてください。すべてを前もって読み込むと、不必要にレンダリングがブロックされてしまいます。

まず、`<script>` 要素に `async` 属性を追加します。

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

これにより、スクリプトは DOM の構文解析と並列して取得されるため、同時に準備が完了し、レンダリングがブロックされることはありません。

> [!NOTE]
> もう 1 つの属性 `defer` があります。これは、文書が構文解析された後、{{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベントが発生する前にスクリプトを実行します。これは `async` と同様の効果があります。

また、必要なイベントが発生するまで JavaScript をまったく読み込まないという方法もあります。これは、例えば DOM スクリプトを使用して実現することができます。

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // index.js に含まれている関数が確実に読み込まれたら、その関数を実行
  init();
});
document.head.append(scriptElem);
```

JavaScript モジュールは、 {{jsxref("operators/import", "import()")}} 関数を使用して動的に読み込むことができます。

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module
});
```

## 長いタスクの分解

ブラウザーが JavaScript を実行すると、スクリプトは、取得リクエストの発行、イベントハンドラーによるユーザーの操作や入力の処理、JavaScript によるアニメーションの実行など、順番に実行されるタスクに整理されます。

これの大部分はメインスレッドで実行されますが、[ウェブワーカー] (/ja/docs/Web/API/Web_Workers_API/Using_web_workers) で実行される JavaScript は例外です。メインスレッドは、一度に 1 つのタスクしか実行できません。

1 つのタスクの実行に 50 ミリ秒以上かかる場合、そのタスクは長いタスクと分類されます。長いタスクの実行中にユーザーがページを操作しようとしたり、重要な UI の更新がリクエストされたりすると、ユーザーの使用感に悪影響が出ます。期待されるレスポンスや視覚的な更新が遅れ、UI の反応が遅くなったり、応答しなくなったりします。

この問題を回避するには、長いタスクを小さなタスクに分割する必要があります。これにより、ブラウザーは重要なユーザー操作の処理や UI の更新を行う機会が増えます。ブラウザーは、長いタスクの前後だけでなく、小さなタスクの間にこれらの処理を実行できる可能性があります。JavaScript では、コードを別個の関数に分割することで、これを実現できます。これは、メンテナンス、デバッグ、テストの作成が容易に なるなど、他にもいくつかの理由から意味があります。

例を示します。

```js
function main() {
  a();
  b();
  c();
  d();
  e();
}
```

しかし、このような構造では、メインスレッドのブロックを防止することはできません。5 つの関数はすべて 1 つの main 関数内で実行されているため、ブラウザーはすべてを単一の長いタスクとして実行します。

これを処理するために、メインスレッドに優先権を譲るコードを取得するために "yield" 関数を定期的に実行する傾向があります。これは、コードが複数の課題に分割され、その実行の間にブラウザーが UI の更新などの優先度の高い課題を処理する機会が与えられることを意味しています。この関数の一般的なパターンでは、{{domxref("Window.setTimeout", "setTimeout()")}} を使用して、実行を別個のタスクに延期します。

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

これは、各タスクの実行後にメインスレッドに制御を戻すために、次のようにタスクランナーパターン内で使用することができます。

```js
async function main() {
  // 実行する関数の配列を作成
  const tasks = [a, b, c, d, e];

  // タスクを通して繰り返し
  while (tasks.length > 0) {
    // 最初のタスクをタスク配列から取り出す
    const task = tasks.shift();

    // タスクを実行
    task();

    // メインスレッドに譲る
    await yield();
  }
}
```

これをさらに改善するために、利用可能な場合は {{domxref("Scheduler.yield()")}} を使用して、このコードがキュー内の重要度の低い他の課題よりも先に実行を続けるようにすることができます。

```js
function yield() {
  // 利用可能な場合は scheduler.yield() する
  if ("scheduler" in window && "yield" in scheduler) {
    return scheduler.yield();
  }

  // タイムアウトに代替
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

## JavaScript アニメーションの処理

アニメーションは知覚的パフォーマンスを改善し、インターフェイスをより軽快に感じさせ、ユーザーがページの読み込みを待つ間にも進行状況が進んでいることを同様に感じさせることができます（例えば、読み込みスピナーなど）。しかし、アニメーションが大きくなったり、アニメーションの数が増えたりすると、当然、処理能力もより多く要求されるようになり、パフォーマンスが低下する可能性があります。

アニメーションに関する最も明白なアドバイスは、アニメーションの使用を少なくすることです。必要のないアニメーションは削除し、例えば、低電力の端末やバッテリー電力が限られているモバイル端末を使用しているユーザーのために、環境設定でアニメーションをオフに設定できるようにすることを検討してください。

重要な DOM アニメーションについては、JavaScript アニメーションではなく、可能な場合は [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using)を使用することをお勧めします（[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)では、JavaScript を使用して CSS アニメーションに直接フックする方法を提供しています）。JavaScript を使用してインラインスタイルを操作するよりも、ブラウザーを使用して DOM アニメーションを直接実行するほうが、はるかに高速で効率的です。[CSS のパフォーマンスの最適化 > アニメーションの処理](/ja/docs/Learn_web_development/Extensions/Performance/CSS#アニメーションの処理) もご参照ください。

JavaScript で処理できないアニメーション、例えば HTML の {{htmlelement("canvas")}} のアニメーションなどについては、{{domxref("Window.setInterval()")}} などの古いオプションではなく、 {{domxref("Window.requestAnimationFrame()")}} を使用することをお勧めします。 `requestAnimationFrame()` メソッドは、アニメーションフレームを効率的かつ一貫して処理し、スムーズな使い勝手を実現するために特別に設計されています。基本的なパターンは、次のように見ていきます。

```js
function loop() {
  // アニメーションの次のフレームを描画する前にキャンバスをクリアする
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  // キャンバスにオブジェクトを描画し、次のフレームに備えて位置指定データを更新
  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  // requestAnimationFrame を呼び出して、アニメーションをスムーズに
  // 保つために適切な時点で loop() 関数を再度実行する
  requestAnimationFrame(loop);
}

// アニメーションの実行を設定するには、 loop() 関数を 1 回呼び出します。
loop();
```

キャンバスアニメーションの素晴らしい紹介は、[グラフィックの描画 > アニメーション](/ja/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#animations)、より詳細な例は、[オブジェクト構築の実践](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice)で見ることができます。また、キャンバスのチュートリアルは、[キャンバスチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)でまとめて確認できます。

## イベントパフォーマンスの最適化

イベントは、特に連続して実行する場合、ブラウザーの追跡および処理に多大な負荷がかかることがあります。例えば、 {{domxref("Element/mousemove_event", "mousemove")}} イベントを使用してマウスの位置を追跡し、それがページの特定の領域内にまだあるかどうかを調べるとします。

```js
function handleMouseMove() {
  // マウスポインターが要素内にある間に何かを行う
}

elem.addEventListener("mousemove", handleMouseMove);
```

ページで `<canvas>` のゲームを実行している場合、キャンバス内にマウスがある間、マウスの動きやカーソルの位置を常にチェックし、スコア、時間、すべてのスプライトの位置、衝突検出情報など、ゲームの状態を更新したいと思うでしょう。ゲームが終了したら、これらの処理はまったく必要なくなり、そのイベントを待ち続けることは、実際には処理能力の無駄になります。

したがって、必要がなくなったイベントリスナーは除去することをお勧めします。これは、 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} を使用して行うことができます。

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

もう 1 つのヒントは、可能な限りイベントの委譲を使用することです。多数の子要素のいずれかと作用するユーザーに対してレスポンスとして実行するコードがある場合、その親にイベントリスナーを設定することができます。いずれかの子要素で発行されたイベントは、その親にバブルアップするため、各子要素に個別にイベントリスナーを設定する必要はありません。追跡すべきイベントリスナーが少ないということは、パフォーマンスが向上することを意味します。

詳細と有用な例については、[イベントの委譲](/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling#イベントの委譲)を参照してください。

## より効率的なコードを書くためのヒント

コードをより効率的に実行するための、いくつかの一般的なベストプラクティスがあります。

- **DOM の操作を削減**: DOM へのアクセスと更新は計算コストが高いため、JavaScript で行う操作は最小限に抑える必要があります。特に、DOM アニメーションを頻繁に実行する場合は注意が必要です（上記の [JavaScript アニメーションの処理](#javascript_アニメーションの処理)を参照してください）。
- **DOM の変更をまとめる**: 重要な DOM の変更は、発生ごとに個別に発行するのではなく、まとめて実行できるグループにまとめてください。これにより、ブラウザーが実際に実行する作業量を縮小できるだけでなく、知覚的パフォーマンスも改善されます。小さな更新を絶えず実行するよりも、一度に複数の更新をまとめて実行した方が、UI がよりスムーズに見えます。ここで有益なヒントは、ページに追加する HTML の塊が大きい場合は、各アイテムを個別に追加するのではなく、まずフラグメント全体を構築し（通常は {{domxref("DocumentFragment")}} 内で）、それを DOM に一度に追加することです。
- **HTML を簡略化する**: DOM ツリーが単純であるほど、JavaScript によるアクセスや操作が高速になります。 UI に何が必要かをよく考え、不要な部分をすべて除去してください。
- **ループコードの量を縮小する**: ループはコストがかかるため、コード内のループの使用量は可能な限り縮小してください。ループが避けられない場合は、次の点に注意してください。
  - 必要のない場合は、 {{jsxref("Statements/break", "break")}} または {{jsxref("Statements/continue", "continue")}} 文を適宜使用して、ループ全体を実行することを避けてください。例えば、配列から特定の名前を検索する場合、その名前が得られたらループを中断すべきです。それ以上のループの反復処理を実行する必要はありません。

    ```js
    function processGroup(array) {
      const toFind = "Bob";
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === toFind) {
          processMatchingArray(array);
          break;
        }
      }
    }
    ```

  - ループの外で一度だけ必要な作業は、ループの外で行ってください。これは少し当たり前のように聞こえるかもしれませんが、見落としがちです。何らかの方法で処理されるデータを含む JSON オブジェクトを取得する次のスニペットを見てみましょう。この場合、 {{domxref("Window.fetch", "fetch()")}} 操作はループの反復処理のたびに実行されており、計算能力の無駄になっています。i` に依存しない取得は、ループの外に移動して 1 回だけ実行するようにすることができます。

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **メインスレッドで計算を実行しない**: 先ほど、JavaScript が通常、メインスレッドでタスクを実行する方法、および操作がメインスレッドをブロックして UI のパフォーマンスを低下させる可能性について説明しました。この問題を軽減するために、長いタスクを小さなタスクに分割する方法も紹介しました。このような問題を処理する別の方法として、タスクをメインスレッドから完全に移動する方法があります。これを行うには、いくつかの方法があります。
  - 非同期コードを使用する: [非同期 JavaScript](/ja/docs/Learn_web_development/Extensions/Async_JS/Introducing) は、基本的にメインスレッドをブロックしない JavaScript です。非同期 API は、ネットワークからのリソースの取得、ローカルファイルシステム上のファイルへのアクセス、ユーザーのウェブカメラへのストリームのオープンなどの操作を処理することが多いです。これらの操作は時間がかかる場合があるため、完了を待つ間、メインスレッドをブロックするのはよくありません。その代わりに、ブラウザーはこれらの関数を実行し、メインスレッドは後続のコードを実行し続け、これらの関数は*将来のある時点*で結果を利用できるようになると、結果を返します。現行の非同期 API は、非同期操作を処理するために設計された JavaScript 言語の機能であるプロミス ({{jsxref("Promise")}}) に基づいています。非同期で実行すると便利な機能がある場合は、[プロミスベースの関数を自分で書く](/ja/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API) ことができます。
  - ウェブワーカーで計算を実行する: [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers) は、メインスレッドをブロックしないように、 JavaScript の塊を実行するための別のスレッドを開くためのメカニズムです。ワーカーにはいくつかの大きな制限があり、最大の制限は、ワーカー内では DOM スクリプトを実行できないことです。それ以外はほとんど何でもでき、ワーカーはメインスレッドとの間でメッセージを送受信することもできます。ワーカーの主な用途は、実行すべき計算が多く、メインスレッドをブロックしたくない場合です。その計算をワーカーで実行し、結果を待ってから、準備ができたらメインスレッドに結果を返します。
  - **WebGPU を使用する**: [WebGPU](/ja/docs/Web/API/WebGPU_API) は、ウェブ開発者が基盤となるシステムの GPU (グラフィックス処理ユニット) を使用して、高性能な計算を実行し、ブラウザーでレンダリングできる複雑な画像を描画できるようにするブラウザー API です。これはかなり複雑ですが、ウェブワーカーよりもさらに優れたパフォーマンスの利点を提供することができます。

## 関連情報

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) (web.dev, 2022)
- [キャンバスのチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
