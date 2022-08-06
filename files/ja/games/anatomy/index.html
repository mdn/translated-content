---
title: ビデオゲームの解剖学
slug: Games/Anatomy
tags:
  - Games
  - JavaScript
  - Main Loop
  - requestAnimationFrame
translation_of: Games/Anatomy
---
<div>{{GamesSidebar}}</div>

<p>{{IncludeSubnav("/en-US/docs/Games")}}</p>

<div class="summary">
<p><span class="seoSummary">この記事では平均的なビデオゲームの中身とワークフローを技術的な観点、メインループがどう動くべきかに関して見ていきます。初心者が現代的なゲーム開発の海で、ゲーム制作に何が必要なのか、JavaScript のようなウェブ標準がツールとして寄与しているかを理解するのに役立ちます。ベテランのゲームプログラマーでウェブ開発を始めたばかりの方にも役立ちます。</span></p>
</div>

<h2 id="Present_accept_interpret_calculate_repeat" name="Present_accept_interpret_calculate_repeat">表示し、受け入れ、翻訳し、計算し、繰り返す</h2>

<p>あらゆるビデオゲームのゴールはユーザーに状況を<strong>表示</strong>して入力を<strong>受け入れ</strong>てこの信号を<strong>翻訳して</strong>行動し、行動から得られる新しい状況を<strong>計算</strong>することです。ゲームはこうした段階を常に何度も何度も繰り返して、何かの条件が (例えば勝利や敗退や、あるいは終了して寝ること)起きるまで繰り返します。驚くことでなく、このパターンはゲームエンジンがプログラムされているさまに対応しています。</p>

<p>詳細な仕様はゲームに依存します。</p>

<p>ユーザー入力によって駆動するゲームもあります。「2 つの絵の違いを見つける」タイプのゲームを開発していると想像してみてください。このゲームはユーザーに 2 つの画像を<strong>表示します。</strong>ユーザーのクリック(やタッチ)<strong>を受け入れます</strong>。入力を成功、失敗、一時停止、メニューのやりとりなどに<strong>翻訳します。</strong>最後にその入力から起きて更新されるシーンを <strong>計算します。</strong>ゲームループはユーザー入力まで進んで、ユーザーが与えるまでスリープします。これは 1 ターンずつのアプローチ以上のもので、毎フレームごとの常時更新を求めず、プレイヤーが反応した時だけ更新します。</p>

<p>他のゲームはなるべく最小な個々のタイムスライス単位を管理します。上記と同じ原則が少しひねりを加えて適用されます。アニメーションの各フレームはサイクルを勧め、利用できる最初のターンでユーザー入力の変化が捉えられます。この毎フレームごとの実装モデルは<strong>メインループ</strong>と言います。ゲームループが時間ベースならば、これはシミュレーションが従うべき権威です。</p>

<p>しかし毎フレームの管理は不要かもしれません。ゲームループは違いを見つける例と同じで入力イベントに依存しているかもしれません。また入力と時間のシュミレーションの両方が必要かもしれません。その他のものに完全に依存するループかもしれません。</p>

<p>モダン JavaScript — 詳しくは次の節で述べますが — は効率よく、毎フレームで実行されるメインループを簡単に開発できます。もちろん、あなたのゲームではできるだけ最適化できます。あまり発生しないイベントにアタッチすべきだと思うならば、メインループから外れるのも (いつもではないにしろ) 良い考えです。</p>

<h2 id="Building_a_main_loop_in_JavaScript" name="Building_a_main_loop_in_JavaScript">JavaScriptでメインループを作る</h2>

<p>JavaScript はイベントとコールバック関数に対して最高の働きをします。 モダンなブラウザーはできるだけメソッドをちょうどそれらが必要になった時やアイドル状態の (もしくはほかのタスクをやっている) 時に呼び出そうとします。 それがどう素晴らしいアイデアなのかというと、あなたのコードを的確な瞬間にアタッチできるからです。こんな場合を考えてみましょう - あなたの関数が毎フレームごとに厳密な間隔で絶対に呼び出されなければならないか、もしくはほかの何かが起こってはじめて絶対に呼び出されなければならないとします。ブラウザーにいつ関数が呼び出されるかについてよりはっきりさせるということはブラウザーがそれをいつ呼び出すかを最適化することを許すことになります。また、それはひょっとしたらあなたの仕事をより簡単にするかもしれません。</p>

<p>いくつかのコードはフレーム毎に実行される必要があるかもしれませんので、なぜその関数をブラウザーの再描画スケジュール以外のものにアタッチする必要があるのでしょうか?ウェブでは、 <code>{{ domxref("window.requestAnimationFrame()") }}</code> がほとんどのよくプログラミングされた毎フレームメインループの基礎になるでしょう。コールバック関数はそれ自身が呼び出されたときそこに渡されなければなりません。そのコールバック関数は次の再描画までの適切な時間で実行されます。単純なメインループの例を見てみましょう。</p>

<pre class="notranslate">window.main = function () {
  window.requestAnimationFrame( main );

  // あなたのメインループが必要な事なんでも
};

main(); //メインループ開始</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: ここで議論されている<code>main()</code> 関数はそれぞれ、ループコンテンツを行う前に新しい<code>requestAnimationFrame</code>をスケジュールしています。これは間違っているのではありませんし、ベストプラクティスを考慮しています。前もって次の <code>requestAnimationFrame</code> を呼び出すことはブラウザーが適宜それを正しい時に受け取ることを保証します。たとえあなたの現在のフレームが VSync window を見失ってしまったとしてもです。</p>
</div>

<p>上のコードは 2 つの宣言があります。 最初の宣言はある関数をグローバル変数として <code>main()</code> と呼ばれる関数を作成します。この関数はいくつかの仕事をして同時にブラウザーにそれ自身を <code>window.requestAnimationFrame()</code> を使って呼ぶように言います。ふたつ目の宣言は <code>main()</code> 関数 - それは最初の宣言で定義されたのですが、それを呼びます。<code>main()</code> は 2 つ目の宣言で一度だけ呼ばれて毎回それを呼ぶ度に次のフレームでやるべきことのキューに配置していくので、<code>main()</code> はあなたのフレームレートと同期します。</p>

<p>もちろん、このループは完全ではありません。変更すべき点を議論する前に、既になにをちゃんとやっているのか議論させてくださいね。</p>

<p>メインループをブラウザーがディスプレイを描画するタイミングで実行することであなたのループはブラウザーが描画したいと思ったタイミングと同じ頻度で実行されることが可能になります。あなたは毎アニメーションフレームごとにコントロールできるようになりました。同時に、どうこれがとても簡単なのかというと、 <code>main()</code>だけがループされる関数だからです。First Person Shooter (もしくはそれに類するゲーム)だと1フレームごとに1回新しいシーンを表示します。これ以上にスムーズでレスポンシブにしようがありません。</p>

<p>だからといってすぐにアニメーションは1フレームごとにコントロールが必要だと考えないでください。簡単なアニメーションは (たとえ GPU アクセラレートされていたとしても) CSS アニメーションやブラウザーについてくるほかのツールで簡単に実行することができます。それらはたくさんあり、あなたの開発をより簡単にしてくれるでしょう。</p>

<h2 id="Building_a_better_main_loop_in_Javascript" name="Building_a_better_main_loop_in_Javascript">Javascriptでマシなメインループを作る</h2>

<p>明らかに 2 つ問題が上記のメインループにはあります。 <code>main()</code> が <code>{{ domxref("window") }}</code> オブジェクトを汚染している(そこにはすべてのグローバル変数が格納されているのですが)ことと、すべてのタブが閉じられるか更新されるかするまでループを止めることができません。ひとつつ目の問題に関しては、もしメインループがただ走るだけで簡単に(直接)それにアクセスする必要がないのであれば、それを Immediately-Invoked Function Expression (IIFE)  として作ることができます。</p>

<pre class="notranslate">/*
* セミコロンで始めるというのは以下の例では automatic semicolon insertion (ASI) によります。
* ブラウザーが間違ってこの例全体を前の行から続いていると判断するかもしれません。
* このセミコロンがあることでたとえ前の行が空でなかったり
* ちゃんと終わってなかった場合でも新しい行が始まっていることを示すことができます
*/

;(function () {
  function main() {
    window.requestAnimationFrame( main );

    // メインループの中身
  }

  main(); // ループを開始する
})();</pre>

<p>ブラウザーがこの IIFE に出くわすと、メインループを定義してすぐさま次のフレームにキューします。これで何のオブジェクトにもアタッチされなくなり、<code>main()</code> (もしくは <code>main()</code> のためのメソッド) は残りのアプリケーションで使用可能な未使用の名前になり、何か別に定義してもよくなりました。</p>

<div class="note">
<p>注: 実際は、次の <code>requestAnimationFrame()</code> を if 構文で防ぐほうがより一般的で、<code>cancelAnimationFrame()</code> を呼ぶことはそれよりも一般的ではありません。</p>
</div>

<p>2つ目の問題 - つまり、メインループを止めるという問題に関しては、<code>main()</code> を <code>{{ domxref("window.cancelAnimationFrame()") }}</code> によって呼び出しをキャンセルする必要があるでしょう。あなたは一番最後に <code>requestAnimationFrame()</code> が呼ばれたときに <code>cancelAnimationFrame()</code> に <code>requestAnimationFrame()</code> で得た ID トークンを渡す必要があります。 こんな風な場合を想定してください - あなたのゲームの関数と変数が <code>MyGame</code> と呼ばれる名前空間に備え付けられています。先述の例を拡張すると、メインループはこんな風になります。</p>

<pre class="notranslate">/*
* セミコロンで始めるというのは以下の例では automatic semicolon insertion (ASI) によります。
* ブラウザーが間違ってこの例全体を前の行から続いていると判断するかもしれません。
* このセミコロンがあることでたとえ前の行が空でなかったり
* ちゃんと終わってなかった場合でも新しい行が始まっていることを示すことができます
*
* MyGame は前もって定義されてるとします。
*/

;(function () {
  function main() {
    MyGame.stopMain = window.requestAnimationFrame( main );

    // メインループの中身.
  }

  main(); // ループ開始
})();</pre>

<p><code>MyGame</code> 名前空間に宣言された変数があって、それを <code>stopMain</code> と名付けて、それにはメインループの一番最後に <code>requestAnimationFrame()</code> を呼び出した時に返された ID が含まれています。我々はいつでもメインループを止めることができます - ブラウザーに私たちのトークンと関連するリクエストをキャンセルすることで。</p>

<pre class="notranslate">window.cancelAnimationFrame( MyGame.stopMain );</pre>

<p>メインループをプログラミングするカギとなるのは - JavaScriptではですが - それを何かしらのあなたのアクションを駆動しているようなイベントにアタッチし、どんなふうに色んなシステムが相互作用にかかわっているかに注意することです。たくさんのコンポーネントがたくさんの違うタイプのイベントによって駆動しているかもしれません。不必要に複雑だという風に感じるかもしれませんが、それこそが良い最適化かもしれませんよね(必ずしもそうじゃないかもしれませんけど、もちろん)。大事なのはあなたは典型的なメインループをプログラムしていないということです。Javascript では、あなたはブラウザーのメインループを使って効率的にやろうという風に挑戦できます。</p>

<h2 id="Building_a_more_optimized_main_loop_in_JavaScript" name="Building_a_more_optimized_main_loop_in_JavaScript">JavaScript でもっと最適化されたメインループを作る</h2>

<p>究極的には JavaScript ではブラウザーはそれ自身のメインループを走らせて、あなたのコードはそれのいくつかの段階に存在します。これからのセクションではメインループがブラウザーからコントロールを奪い取らないようにすることについて記述します。これらのメイン関数は自身 を<code>window.requestAnimationFrame()</code> にアタッチし、<code>window.requestAnimationFrame()</code> はブラウザーに次に来るであろうフレームへのコントロールを要求します。どうやってこれらの要求をブラウザーのメインループと関連付けるかはブラウザー任せです。<a href="http://www.w3.org/TR/animation-timing/">W3C の requestAnimationFrame の仕様</a>はいつ requestAnimationFrame コールバックが実行されるのか厳密に定義していません。これはいいことです - なぜかというと、そうすることでブラウザのベンダーが自由に最適だと感じる解決策を実験し、何回も微調整することができるからです。</p>

<p>最近の Firefox と Google Chrome (と、たぶん他のも) のバーションはフレームのタイムスライスの初めで <code>requestAnimationFrame</code> コールバックをメインスレッドに接続<em><strong>しよう</strong></em>とします。ブラウザーのメインスレッドはしたがってこんな風に見<em><strong>せよう</strong></em>とします。</p>

<ol>
 <li>新しいフレームを始める (一方、前のフレームはディスプレイによって制御されます)</li>
 <li><code>requestAnimationFrame</code> コールバックのリストを通ってそれらを invoke します</li>
 <li>上記のコールバックがメインスレッドのコントロールをやめた時、ガベージコレクターを実行して、フレームごとのタスクを実行します</li>
 <li>ブラウザーの Sleep (訳注: nap と書かれていますが、日本語にそれに対応したプログラミング界隈で使われる言葉が無かったのでSleep と訳しました) を妨げない限りモニターがイメージ (VSync) の準備ができるまで Sleep し、繰り返す。</li>
</ol>

<p>こんな風に考えることもできます - リアルタイムアプリを開発していて、何かタスクを限られた時間のうちにこなさなければならない、という風に。上のすべてのステップは実行を 60Hz のディスプレイの描画に追いつくように 16.5ms 以内に終わらせなければなりません。ブラウザーはあなたのコードをできるだけ早く最大の計算時間を与えようと invoke します。メインスレッドはしばしばメインスレッド上にない仕事 (例えばラスタライズや WebGL のシェーダーなど) を始めるかもしれません。重たい計算は Web Worker や GPU で同時に実行されるかもしれません - というのは、ブラウザーはメインスレッドを使ってガベージコレクションやそれにまつわるタスクや、非同期なイベントを管理するからです。</p>

<p>限られた時間の中での話をしましたが、たくさんのウェブブラウザーには <em>High Resolution Time</em> というツールがあります。{{ domxref("Date") }} オブジェクトはもはやタイミングオブジェクトとして認識されていません - なぜかというと、不正確でシステムクロックによって書き換えられてしまうからです。High Resolution Time は一方で <code>navigationStart</code> (前のドキュメントがアンロードされた時) からのミリ秒を数えます。この値は小数点値として誤差 1000 分の 1 ミリ秒の正確さで返ってきます。<code>{{ domxref("DOMHighResTimeStamp") }}</code> という風に馴染みが深いですが、実際は浮動小数点値として考えてください。</p>

<div class="note">
<p><strong>注</strong>: いくつかのシステム(ハードウェアであれソフトウェアであれ)のうちマイクロ秒の正確さが担保されていないものは最低ミリ秒単位の正確さが許容されています。しかし、可能であれば0.001ミリ秒の正確さを提供します。</p>
</div>

<p>この値はそれ自体ではとても有効ではありません。なぜなら、無用なイベントに対しての相対値だからです。しかし、他のタイムスタンプから引き算されることで正確にそれら2つのイベント間の時間がいくらなのか決定することができます。これらのタイムスタンプを習得するには<code>window.performance.now()</code> を呼んで、結果を変数として格納してください。</p>

<pre class="notranslate">var tNow = window.performance.now();
</pre>

<p>メインループの話に戻りましょう。いつメイン関数が invoke されるのか知りたいとしばしば思うでしょうね。これはよくあることなので、<code>window.requestAnimationFrame()</code> は常に<code>DOMHighResTimeStamp</code> をコールバックに引数として実行されるたびに渡しています。こうしてもう一つ先述のメインループが改良されました。</p>

<pre class="notranslate">/*
 * セミコロンで始めるというのは以下の例では automatic semicolon insertion (ASI) によります。
 * ブラウザーが間違ってこの例全体を前の行から続いていると判断するかもしれません。
 * このセミコロンがあることでたとえ前の行が空でなかったり
 * ちゃんと終わってなかった場合でも新しい行が始まっていることを示すことができます
 *
 * MyGame は前もって定義されてるとします。
*/
;(function () {
  function main( tFrame ) {
    MyGame.stopMain = window.requestAnimationFrame( main );

    // メインループの中身
    // tFrameは"function main ( tFrame )"から来て, rAFによって提供され、ここで DOMHighResTimeStamp になります
  }

  main(); // ループ開始
})();</pre>

<p>いくつか他に最適化することもできますが、あなたのゲームが何を達成しようとしているかによって全然違います。あなたのゲームのジャンルがきっと教えてくれるでしょうが、まずもってそんなことよりももっと微妙なものになるでしょう。キャンバスに1ピクセルごとに描画することもできますし、DOM 要素を (複数の WebGL キャンバスで透明な背景を持ったものとかでもやろうと思えば)複雑な階層へとレイヤー化することもできます。それぞれの道程に一つずつの条件と制約があるでしょう。</p>

<h2 id="It_is_decision..._time" name="It_is_decision..._time">さあ決断の時は...来たれり</h2>

<p>メインループに関しては難しい決断をしなくてはなりません。どんな決断かというとどうやって正確な時間の経過をシミュレーションしようかということです。もし毎フレームコントロールが必要なら、どれくらいの頻度であなたのゲームが更新され、描画されるかを決定しなければなりません。ひょっとしたら更新と描画を別の頻度でしたいとさえ考えるかもしれません。またもう一つ考えないといけないのは、あなたのゲームがユーザーのシステムがゲームの仕事量に及ばない場合にどうやったらいい感じに失敗するだろうかということです。こういう場合を考えてみましょう - ユーザーのインプットを扱ってゲームの状態を描画するたびに更新するとします。以下に展開していきましょう。</p>

<div class="note">
<p><strong>注</strong>: メインループがどうやって時間を扱うかを変更することはデバッグ地獄です。どんな場合でも。要求を注意深く考慮してからメインループに取り掛かりましょう。</p>
</div>

<h3 id="What_most_browser_games_should_look_like" name="What_most_browser_games_should_look_like">ブラウザーゲームはほとんどの場合こんな感じになっているべきだ</h3>

<p>あなたのゲームがあなたがサポートしているどんなハードウェアでも最大のフレッシュレートを叩きだせるのであれば、とっても簡単です。単に更新し、レンダリングして、VSyncまで何もしなければいいのです。</p>

<pre class="notranslate">/*
* セミコロンで始めるというのは以下の例では automatic semicolon insertion (ASI) によります。
* ブラウザーが間違ってこの例全体を前の行から続いていると判断するかもしれません。
* このセミコロンがあることでたとえ前の行が空でなかったり
* ちゃんと終わってなかった場合でも新しい行が始まっていることを示すことができます
*
* MyGame は前もって定義されてるとします。
*/

;(function () {
  function main( tFrame ) {
    MyGame.stopMain = window.requestAnimationFrame( main );

    update( tFrame ); //更新メソッドを呼びます。私たちのケースでは、rAFのタイムスタンプを渡します。
    render();
  }

  main(); // ループ開始
})();</pre>

<p>もし最大リフレッシュレートに達しないのであれば、品質設定が適用され、決められた時間内に実行できるようにします。これのもっとも有名な例は id Software の Rage です。このゲームはユーザーからのコントロールを取り除いて計算時間をだいたい 16 ミリ秒 (もしくはだいたい 60fps) に保ちます。もし計算時間がもっとかかるのであれば、レンダリング解像度は低くなり、テクスチャや他のアセットがロードしたり描画するのを失敗し…といった感じです。この例は(ウェブではありませんが)以下のような想定とトレードオフを考えることができます。</p>

<ul>
 <li>毎フレームごとのアニメーションはユーザーの入力によって占められています。</li>
 <li>どんなフレームも補間される(推測される)必要がありません。なぜなら、それぞれの描画はそれ自身の更新を所有しているからです。</li>
 <li>シミュレーションシステムは基本的にフルに更新しても16ミリ秒間隔だと想定している。</li>
 <li>ユーザーに品質設定をコントロールさせるのはクソだ。</li>
 <li>モニターは色んなレートで入力される: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS, などなど。</li>
 <li>60FPSを実現できないシステムは最適なスピードでゲームをプレイするための視覚品質を失う(品質があんまりにも低くなると、ついには完全に落ちる)</li>
</ul>

<h3 id="Other_ways_to_handle_variable_refresh_rate_needs" name="Other_ways_to_handle_variable_refresh_rate_needs">様々なリフレッシュレートを制御するためにできる他の方法</h3>

<p>他にも問題を追跡するための方法が存在します。</p>

<p>よくある手法の一つが、定常的な頻度でシミュレーションを更新して、できるだけ(もしくは最低限)実際のフレームを描画することです。この更新方法はユーザーが何を見ているのか気にせずにループを続けることができます。描画メソッドは更新が起きた時に一番最後の更新を視覚化することができます。描画メソッドはいつそれを視覚化すべきかと一番最後の更新のシミュレーション時間を知っているので、それらしいフレームを予測してユーザーに描画してみせることができます。本当の更新ループの頻度よりも多いか(もしくは少ないか)は問題ではありません。更新メソッドはチェックポイントをシステムが許す限り頻繁に作って、レンダリングメソッドは短い時間でそれらが指すものを描画します。更新メソッドを分割する方法はウェブスタンダードにたくさんあります。</p>

<ul>
 <li><code>requestAnimationFrame</code> で描画し、{{ domxref("window.setInterval") }} または {{ domxref("window.setTimeout") }}　で更新する。

  <ul>
   <li>これはフォーカスされていないときや最小化されている時でも処理時間を使い、メインスレッドを占有して、ひょっとしたら昔のゲームのループの遺物なのかもしれません(が、簡単です)</li>
  </ul>
 </li>
 <li><code>requestAnimationFrame</code> で描画し <a href="/ja/docs/Web/Guide/Performance/Using_web_workers">Web Worker</a> の <code>setInterval</code> か <code>setTimeout</code> で更新する。
  <ul>
   <li>上述のものと同じですが、メインスレッドを占有しない (または、メインスレッドがこれ自体を占有しない) 点で違います。これはより複雑な解決策で、単純な更新に対してはオーバーヘッドが大きすぎるかもしれません。</li>
  </ul>
 </li>
 <li><code>requestAnimationFrame</code> で描画し、それを Web Workerをpoke (訳注: 突っつくぐらいの意味ですが、invoke のような意味で使われているのではないかと思われます)するために使う (Web Worker は更新メソッドをたくさん有していて、数 tick で計算することができます)。もしあればですが。
  <ul>
   <li>これは <code>requestAnimationFrame</code> が呼ばれるまで Sleep し、メインスレッドを汚染することがありません。加えて、古臭いメソッドに頼らなくて済みます。繰り返しになりますが、これは上記二つの方法よりももう少し複雑でそれぞれの更新を始めることはブラウザーが rAF コールバックを実行するまでブロックされます。</li>
  </ul>
 </li>
</ul>

<p>これらの方法はそれぞれ似たようなトレードオフがあります:</p>

<ul>
 <li>ユーザーはフレームのレンダリングをスキップするかもしくはパフォーマンス依存で臨時の1フレームを補完することができます。</li>
 <li>You can count on all users updating non-cosmetic variables at the same constant frequency minus hiccups.</li>
 <li>今まで見てきたような基本的なループよりもプログラムがずっと複雑。</li>
 <li>ユーザーの入力が次の更新まで完全に無視される (たとえユーザーが速いデバイスを持っていても)。</li>
 <li>mandatory な補間はパフォーマンスを犠牲にします。</li>
</ul>

<p>更新と描画をばらばらにした例は次のようになるはずです。デモンストレーションのために、この例は三番目の項目をもとにしていますが、読みやすくするために Web Workers を使わないようにしています。(あと、正直に言うと、書きやすくするためでもあるんですけどね)。</p>

<div class="blockIndicator warning">
<p><strong>注:</strong> この例は特に技術的なレビューが必要です。</p>
</div>

<pre class="notranslate">/*
* Starting with the semicolon is in case whatever line of code above this example
* relied on automatic semicolon insertion (ASI). The browser could accidentally
* think this whole example continues from the previous line. The leading semicolon
* marks the beginning of our new line if the previous one was not empty or terminated.
*
* Let us also assume that MyGame is previously defined.
*
* MyGame.lastRender keeps track of the last provided requestAnimationFrame timestamp.
* MyGame.lastTick keeps track of the last update time. Always increments by tickLength.
* MyGame.tickLength is how frequently the game state updates. It is 20 Hz (50ms) here.
*
* timeSinceTick is the time between requestAnimationFrame callback and last update.
* numTicks is how many updates should have happened between these two rendered frames.
*
* render() is passed tFrame because it is assumed that the render method will calculate
*          how long it has been since the most recently passed update tick for
*          extrapolation (purely cosmetic for fast devices). It draws the scene.
*
* update() calculates the game state as of a given point in time. It should always
*          increment by tickLength. It is the authority for game state. It is passed
*          the DOMHighResTimeStamp for the time it represents (which, again, is always
*          last update + MyGame.tickLength unless a pause feature is added, etc.)
*
* setInitialState() Performs whatever tasks are leftover before the mainloop must run.
*                   It is just a generic example function that you might have added.
*/

;(function () {
  function main( tFrame ) {
    MyGame.stopMain = window.requestAnimationFrame( main );
    var nextTick = MyGame.lastTick + MyGame.tickLength;
    var numTicks = 0;

    //If tFrame &lt; nextTick then 0 ticks need to be updated (0 is default for numTicks).
    //If tFrame = nextTick then 1 tick needs to be updated (and so forth).
    //Note: As we mention in summary, you should keep track of how large numTicks is.
    //If it is large, then either your game was asleep, or the machine cannot keep up.
    if (tFrame &gt; nextTick) {
      var timeSinceTick = tFrame - MyGame.lastTick;
      numTicks = Math.floor( timeSinceTick / MyGame.tickLength );
    }

    queueUpdates( numTicks );
    render( tFrame );
    MyGame.lastRender = tFrame;
  }

  function queueUpdates( numTicks ) {
    for(var i=0; i &lt; numTicks; i++) {
      MyGame.lastTick = MyGame.lastTick + MyGame.tickLength; //Now lastTick is this tick.
      update( MyGame.lastTick );
    }
  }

  MyGame.lastTick = performance.now();
  MyGame.lastRender = MyGame.lastTick; //Pretend the first draw was on first update.
  MyGame.tickLength = 50; //This sets your simulation to run at 20Hz (50ms)

  setInitialState();
  main(performance.now()); // Start the cycle
})();</pre>

<p>他のやり方としては、単に特定のものをより少ない頻度でやることです。もしあなたのアップデートループの一部の処理が重く時間に制約がないのであれば、その頻度を下げることと、理想的に言うと、より長い時間を単位としたかたまりへとひきのばすべきです。これが暗に使われている例は The Artillery Blog for Artillery Games でみることができます。そこで彼らはガベージコレクションの最適化のために<a href="http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html">ガベージジェネレーションのランクを調整しています</a> 。明らかにリソースのクリーンアップは時間に制約がありません (とりわけ整理整頓をすることがゴミそれ自体よりも混乱を招くようなときは特にです)。</p>

<p>これはまたあなた自身のタスクにも適用できるかもしれません。それらは利用可能なリソースが問題になった時によき抑制をしてくれます。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>ちゃんと言っておきたいのですが、上に書いたようなことのどれもが - もしくはどれも全然かもしれませんが - あなたのゲームに最高に作用するとは限りません。正確な決断とはあなたが作りたい (もしくは作りたくない) ものとのトレードオフにもっぱら依存しています。心配事は主に別の選択肢へと舵を切ることです。幸運なことに、これに関して私は全然経験がありませんが、これは猛烈なモグラたたきのようなものだと聞いています。</p>

<p>ウェブのような管理されたプラットフォームで覚えておいてほしいことはあなたのループはひょっとしたらある特定の期間で止まるかもしれないということです。これはユーザーがあなたのタブを選択から外してブラウザーが自身の <code>requestAnimationFrame</code> コールバックを Sleep (もしくは slow) する時に起こります。この状況に対応する方法はたくさんありますし、シングルプレーヤーかマルチプレーヤーによって違います。いくつかの方法としては</p>

<ul>
 <li>途切れを「ポーズ」として考え、時間をとばす。
  <ul>
   <li>ほとんどのマルチプレーヤーゲームでは問題だと思うかもしれませんが。</li>
  </ul>
 </li>
 <li>途切れに追いつくようシミュレートする。
  <ul>
   <li>長い間落ちている、もしくは/かつ、複雑なアップデートがあると問題です。</li>
  </ul>
 </li>
 <li>ゲームの状態を Peer もしくはサーバーから回復させる。
  <ul>
   <li>これがダメな場合とは、これもあなたの Peer もしくはサーバーが out-of-date になった場合と、もしくは、シングルプレーヤーのゲームでサーバーが無かった時にそれらが存在しなかった場合です。</li>
  </ul>
 </li>
</ul>

<p>ひとたびメインループが作られてあなたが一連の仮説とゲームに適したトレードオフに基づいて決断したのなら、あなたの決断力を物理とか、AI とか、サウンドとか、ネットワーク同期とかそのほか何でもあなたのゲームが求めるものへと使う段階にやってきました。</p>
