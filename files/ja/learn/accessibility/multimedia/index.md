---
title: アクセシブルマルチメディア
slug: Learn/Accessibility/Multimedia
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/WAI-ARIA_basics","Learn/Accessibility/Mobile", "Learn/Accessibility")}}

アクセシビリティの問題を引き起こす他のカテゴリーは、マルチメディアでです。ビデオ、オーディオ、画像といったコンテンツは、支援技術 (assistive technologies) とユーザーが理解可能となる適切な代替テキストを必要とします。この記事ではその方法を説明します。

| 前提知識: | 基本的なコンピューターの知識、HTML 、CSS 、JavaScript に対する基本的な理解、 [前回の記事](/ja/docs/Learn/Accessibility/What_is_accessibility) の理解 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | マルチメディアが引き起こすアクセシビリティの問題、およびその解決方法を理解すること                                                                   |

## マルチメディアとアクセシビリティ

このモジュールまで、様々なコンテンツに対してそのアクセシビリティを保証するために何が必要かを見てきました。シンプルな文章から始まって、データテーブル、画像、フォーム要素やボタンといったネイティブのコントロール、より複雑なマークアップ構造 ([WAI-ARIA](/ja/docs/Learn/Accessibility/WAI-ARIA_basics) 属性) などです。

一方こちらの記事は、アクセシビリティの保証が難しい別のマルチメディアのコンテンツ群について扱っています。画像、ビデオ、{{htmlelement("canvas")}} 要素、Flash 動画などは、スクリーンリーダーによる理解やキーボードによるナビゲーションが容易ではないため、私たちが手を差し伸べる必要があります。

ですが絶望はしないでください。ここではマルチメディアをアクセシブルにするために利用できる技術について紹介し、あなたの手助けをします。

## シンプルな画像

私達は既に [HTML: アクセシビリティの基礎](/ja/docs/Learn/Accessibility/HTML) で HTML 画像のシンプルな代替テキストについてカバーしました — 詳細を確認するために、そこに戻っても良いです。簡単に言うと、ビジュアルコンテンツとなり得るものは、スクリーンリーダーがユーザーのために読み上げることができるよう、代替テキストが利用可能であることを保証するべきです。

例えば:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## アクセシブルなオーディオとビデオコントロール

ウェブベースのオーディオ/ビデオのコントロールを実装するのは問題にはならないはずですよね？調べてみましょう。

### ネイティブ HTML5 コントロールの問題

HTML5 の video と audio インスタンスは、ビルトインのコントロールと一緒に提供されており、何も設定せずにメディアの制御を行うことができます。例えば (`native-controls.html` [ソースコード](https://github.com/mdn/learning-area/blob/master/accessibility/multimedia/native-controls.html)と[実際の動作](http://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)を参照):

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support HTML5 audio. Here is a
    <a href="viper.mp3">link to the audio</a> instead.
  </p>
</audio>

<br />

<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support HTML5 video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>
```

control 属性は、あなたがメディアプレイヤーに対して期待する再生/一時停止ボタンやシークバーといった基本的なコントロールを提供します。Firefox と Chrome では次のように表示されます。

![Screenshot of Video Controls in Firefox](native-controls-firefox.png)

![Screenshot of Video Controls in Chrome](native-controls-chrome.png)

しかし、これらのコントロールには問題があります:

- たいていのブラウザーではキーボードでアクセスできません。つまりネイティブプレイヤー内でコントロール間をタブ移動できません。Opera と Chrome ではいくらか動きますが、理想的なものではありません。
- ネイティブコントロールは各ブラウザーによって異なるスタイルと機能が提供され、かつスタイリングすることができません。それは、サイトのスタイルガイドに従うのが容易ではないことを意味します。

これを改善するために、私たちは自分たちのカスタムコントロールを作成することができます。どのようにするのか見てみましょう。

### カスタム audio/video コントロール

HTML5 の video と audio は HTML メディア要素という API を提供しています。これは、あなたが定義したボタンや他のコントロールにカスタム機能をマップすることを可能にします。

上の video を例として、カスタムコントロールを追加してみましょう。

#### 基本のセットアップ

はじめに、[custom-controls-start.html](https://github.com/mdn/learning-area/blob/master/accessibility/multimedia/custom-controls-start.html)、 [custom-controls.css](https://github.com/mdn/learning-area/blob/master/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4)、そして [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) のコピーを取得し、あなたのハードドライブのディレクトリーに保存します

main.js というファイルを新規作成し、同じディレクトリーに保存します。

最初に、ビデオプレイヤーの HTML を見てみましょう。HTML の中は次のようになっています:

```html
<section class="player">
  <video controls>
    <source src="rabbit320.mp4" type="video/mp4" />
    <source src="rabbit320.webm" type="video/webm" />
    <p>
      Your browser doesn't support HTML5 video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>

  <div class="controls">
    <button class="playpause">Play</button>
    <button class="stop">Stop</button>
    <button class="rwd">Rwd</button>
    <button class="fwd">Fwd</button>
    <div class="time">00:00</div>
  </div>
</section>
```

#### JavaScript の基本セットアップ

私たちは video の下にいくつかの簡単なボタンを挿入しました。もちろん、このままではこれらのコントロールは何もしません。機能を加えるためには JavaScript を使います。

まずはそれぞれのコントロールの設定を保持しておく必要があります。JavaScript ファイルの先頭に次のコードを追加してください:

```js
const playPauseBtn = document.querySelector(".playpause");
const stopBtn = document.querySelector(".stop");
const wdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

次に、video/audio プレイヤー自身の参照を取得する必要があります。次の行を先ほどのコードの下に加えてください:

```js
const player = document.querySelector("video");
```

これは {{domxref("HTMLMediaElement")}} オブジェクトへの参照を保持します。このオブジェクトは、私たちのボタンに機能を紐づけるために使用可能ないくつかの便利なプロパティやメソッドを持っています。

私たちのボタンの機能を作る前に、カスタムコンロールの邪魔にならないようネイティブコントロールを削除しましょう。JavaScript の下に次のコードを追加してください:

```js
player.removeAttribute("controls");
```

最初から controls 属性を含めないようにするのではなく、わざわざこのようにするのには理由があります。もし JavaScript コードが何らかの理由で失敗しても、ユーザーは利用可能な何かしらのコントロールを使うことができるのです。

#### ボタンを紐つける

最初に、再生/一時停止ボタンをセットアップしましょう。次のように、再生と一時停止をシンプルな条件によって切り替えることで、この機能を実現できます。これをあなたのコードの下に追加しましょう:

```js
playPauseBtn.onclick = function () {
  if (player.paused) {
    player.play();
    playPauseBtn.textContent = "Pause";
  } else {
    player.pause();
    playPauseBtn.textContent = "Play";
  }
};
```

次に、ストップボタンを制御する次のコードを下に追加しましょう:

```js
stopBtn.onclick = function () {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

{{domxref("HTMLMediaElement")}} には `stop()` 関数がありません。そこで `pause()` 関数を使用し、同時に `currentTime` に 0 を設定します。

続いて、巻き戻しと早送りボタンです。次のブロックをあなたのコードの下に追加してください:

```js
rwdBtn.onclick = function () {
  player.currentTime -= 3;
};

fwdBtn.onclick = function () {
  player.currentTime += 3;
  if (player.currentTime >= player.duration || player.paused) {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = "Play";
  }
};
```

これらはとてもシンプルで、クリックされる度に `currentTime` 単に 3 秒を足すか引くだけです。実際のビデオプレイヤーでは、あなたはもっと手の込んだものを作りたいでしょう。

早送りボタンが押されたとき、 `currentTime` がメディアのトータルの `duration` よりも大きいか、そしてメディアが再生されていないかをチェックするという点についても気をつけてください。もしいずれかの条件が満たされているなら、ビデオが再生されていない時に早送りしようとしてもおかしくならないよう、単純にビデオを停止するか、ビデオの最後まで飛ばします。

最後に、再生時間を表示するために次の内容をコードの最後に追加します:

```js
player.ontimeupdate = function () {
  let minutes = Math.floor(player.currentTime / 60);
  let seconds = Math.floor(player.currentTime - minutes * 60);
  let minuteValue;
  let secondValue;

  if (minutes < 10) {
    minuteValue = "0" + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = "0" + seconds;
  } else {
    secondValue = seconds;
  }

  mediaTime = minuteValue + ":" + secondValue;
  timeLabel.textContent = mediaTime;
};
```

時間が更新される度に (1 秒に一度) 、この関数を実行します。これは秒として渡された currentTime の値 (秒で与えられる) から分と秒の数を算定するもので、もし分か秒の値が 10 以下であれば先頭に 0 を追加し、表示用の値を生成して時間ラベルに追加します。

#### 参考記事

ここでは、video/audio プレイヤーに対してどのようにカスタムしたプレイヤー機能を加えるかという基本的なアイデアが得られます。video/audio プレイヤーに対して、古いブラウザーでの Flash のフォールバックも含めて、より複雑な機能を加えるには、以下のリンク先を参照してください:

- [Audio and video delivery](/ja/docs/Web/Apps/Fundamentals/Audio_and_video_delivery)
- [Video player styling basics](/ja/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Video_player_styling_basics)
- [Creating a cross-browser video player](/ja/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player)

さらに私たちは、あなたがどのようにしてオブジェクト指向システムを作ることができるかを見せるために高度な例も作りました。これは、ページ内のすべての video と audio プレイヤーを見つけ (どれだけ存在していたとしても)、私たちのカスタムコントロールを追加するものです。[custom-controls-oojs](http://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) を見てください ([ソースコード](https://github.com/mdn/learning-area/tree/master/accessibility/multimedia/custom-controls-OOJS)も見てください) 。

## オーディオトランスクリプト(Audio transcripts)

聴覚障害の方にオーディオコンテンツを提供する場合、トランスクリプトのテキストを必ず用意する必要があります。これらは同じページの中に何らかの形で含んでも良いですし、リンクされた別ページに用意することもできます。

トランスクリプトを実際に作成する際は、次の選択肢があります。

- 商用サービス — プロフェッショナルに料金を払って文字起こししてもらうことができるでしょう。例として [Scribie](https://scribie.com/)、[Casting Words](https://castingwords.com/)、[Rev](https://www.rev.com/) などの会社を見てください。色々見てアドバイスをもらい、あなたがうまく作業できる評判の良い会社を見つけてください。
- コミュニティ/草の根/自身の文字起こし — あなたがアクティブなコミュニティや職場のチームの一員であるなら、彼らに文字起こしのヘルプを頼むことができるでしょう。試しに自分自身で文字起こしに挑戦することもできます。
- 自動サービス — [Trint](https://trint.com/) のように利用可能な AI サービスがあります。サイトにビデオ/オーディオファイルをアップロードすれば、自動的にそれを書き起こします。YouTube では、自動的にキャプション/トランスクリプトを生成するように選択できます。生成されるトランスクリプトのクォリティは、どれだけ明瞭に話されているかに応じて大きく変わります。

人生の多くのものがそうであるように、あなたは支払った分相応のものを手に入れます。つまり、サービスが異なれば、トランスクリプト作成に要する時間と正確さが異なるということです。文字起こしをするために信頼できる会社や AI サービスにお金を払えば、正確なトランスクリプトを早く入手できるでしょう。料金を払いたくないのであれば、遅く、質の低いものになりやすいです。

オーディオリソースを公開するがトランスクリプトは後で提供する、という約束は良いものではありません。そのような約束は大抵守られず、ユーザーとの間にある信頼を損なってしまいます。もしオーディオが対面ミーティングやライブスピーチのようなものであるならば、それらが行われている間にノートを取り、オーディオと共に公開して、後からまとめ上げるということはできるでしょう。

### トランスクリプト例

もしあなたが自動サービスを使用しているならば、おそらくツールが提供しているユーザーインターフェイスを使用する必要があるでしょう。例えば、[Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) を見て、 3 点メニュー (. . .) _> Show Transcript_ を選択してください。トランスクリプトは別のパネルに表れるでしょう。

オーディオとそのトランスクリプトを表示するユーザーインターフェイスを自身で作成する場合、あなたのが考える形で作ることができますが、表示/非表示が可能なパネルを含むと良いかもしれません。私たちの [audio-transcript-ui](http://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) の例を見てください。 ([ソースコード](https://github.com/mdn/learning-area/tree/master/accessibility/multimedia/audio-transcript-ui) も見てください).

### オーディオの説明

オーディオに伴った映像がある場合、追加のコンテンツを描写するためにオーディオの説明を提供する必要があるでしょう。

多くの場合これはビデオの形を取り、この章の次のセクションで説明されるテクニックを使用してキャプションを埋め込むことができます。

しかし、いくつかのエッジケースもあります。例えば、スプレッドシートやグラフの資料を使用したミーティングの録音オーディオがあるかもしれません。その場合、それらの資料がオーディオとトランスクリプトとともに提供されていることを確認するべきであり、特にトランスクリプトの中でそれらの資料に言及されている箇所をリンクとすることが大事です。これは聴覚障害の方だけでなく、すべてのユーザーの助けになります。

> **メモ:** オーディオトランスクリプトは、一般的に様々なユーザーグループを助けます。聴覚障害の人へオーディオに含まれたコンテンツにアクセスを提供するように、オーディオをダウンロードすることが困難な狭い帯域のユーザーのことを考えて見ましょう。パブやバーのような騒音の多い環境で、雑音のためにオーディオを聞くことが難しいユーザーのことも考えて見ましょう。

## ビデオテキストトラック

聴覚障害者、視覚障害者、そして他のユーザー (狭い帯域のユーザーや、ビデオで使用される言語を話さないユーザー) にとってビデオをアクセシブルにするために、ビデオコンテンツにテキストトラックを含める必要があります。

> **メモ:** テキストトラックは障害者だけでなく他のユーザーにとっても便利になる可能性があります。例えば、うるさい環境 (スポーツ中継を流している混雑したバーなど) にいるためにオーディオが聞こえないユーザーや、他の人を邪魔したくない静かな場所 (図書館など) にいるユーザーなどです。

これは新しいコンセプトではありません — テレビ放送では、かなり長い間クローズドキャプションを提供しています:

![Frame from an old-timey cartoon with closed captioning "Good work, Goldie. Keep it up!"](closed-captions.png)

一方で、多くの国では英語の映画を自国の母語の字幕とともに提供していて、DVD では他の言語の字幕も利用可能となっています。

![An English film with German subtitles "Emo, warum erkennst du nicht die Schonheit dieses Ortes?"](Subtitles_German.jpg)

テキストトラックには、目的に応じた様々な種類のものがあります。あなたが接する主な種類は、次のものです:

- キャプション — オーディオを聞くことができない聴覚障害者のためのものであり、話されている言葉、誰が話しているか、人が怒っているのか悲しんでいるのか、どのような雰囲気の音楽が流れているのかなど、場面に関する情報を含みます。
- 字幕 — 話されている言語を理解しないユーザーのための翻訳された音声の台本です。
- ディスクリプション (Descriptions) — ビデオを見ることができない視覚障害者のための描写を含みます。例えば、どのようなシーンに見えるか、などです。
- チャプタータイトル — メディアリソースを移動するユーザーを助けることを目的としたチャプターマーカーです。

### HTML5 ビデオテキストトラックの実装

HTML5 のビデオで表示されるテキストトラックは、WebVTT で記述される必要があります。これは、テキストの文字列とメタデータを含むテキストフォーマットであり、テキストが表示されるべき時間や、スタイル、ポジションといった情報まで含みます。これらの文字列はキュー (cues) と呼ばれます。

典型的な WebVTT ファイルは、次のようなものです:

```
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2
00:00:30.739 --> 00:00:34.074
This is the second.

  ...
```

HTML のメディア再生と共に表示させるためには、次のことをする必要があります:

- .vtt ファイルとしてアクセス可能な場所に保存します。
- {{htmlelement("track")}} 要素で .vtt へのリンクを設定します。 `<track>` は `<audio>` か `<video>` の間に設置する必要がありますが、すべての `<source>` 要素の後でなければいけません。 [`kind`](/ja/docs/Web/HTML/Element/track#kind) 属性を使い、キューが字幕、キャプション、ディスクリプションのどれなのかを指定します。さらに、 [`srclang`](/ja/docs/Web/HTML/Element/track#srclang) を使って、字幕でどの言語が使用されているのかを伝えます。

例を見てみましょう:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

これは、字幕が表示されたビデオとなり、次のようになります:

![Video player with standard controls such as play, stop, volume, and captions on and off. The video playing shows a scene of a man holding a spear-like weapon, and a caption reads "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

詳細は [Adding captions and subtitles to HTML5 video](/ja/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) を読んでください。あなたは、GitHub で GIan Devlin によって作られた[例](http://iandevlin.github.io/mdn/video-player-with-captions/)をこの記事と併せて見ることができます。([source ソースコード](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) も見てください) この例では JavaScript を使用して、ユーザーが異なる言語の字幕を選択できるようになっています。字幕を表示するためには、"CC" ボタンをクリックして英語、ドイツ語、スペイン後のオプションを選択する必要があります。

> **メモ:** テキストトラックは {{glossary("SEO")}} でも役に立ちます。検索エンジンはテキストによって更新されるためです。検索エンジンは、テキストトラックによってビデオの途中に直接リンクすることさえできます。

## その他のマルチメディアコンテンツ

上のセクションでは、あなたがウェブページに載せたいかもしれないすべての種類のマルチメディアコンテンツをカバーしていません。また、ゲーム、アニメーション、スライドショー、埋め込まれたビデオ、そして他の利用可能なテクノロジーを利用して作られたコンテンツを扱う必要があるかもしれません。例えば:

- [HTML5 canvas](/ja/docs/Web/API/Canvas_API)
- Flash
- Silverlight

そのようなコンテンツには、アクセシビリティの懸念事項とケースバイケースで対応する必要があります。いくつかのケースでは、これはそれほど悪いことではありません。例えば:

- もし Flash や Silverlight のようなプラグイン技術を使用してオーディオコンテンツを埋め込んでいる場合、上の [Transcript examples](#transcript_examples) セクションで既に紹介したのと同じ方法でオーディオトランスクリプトを提供することができるでしょう。
- Flash や Silverlight のようなプラグイン技術でビデオコンテンツを埋め込んでいる場合、それらの技術で利用可能なキャプション/字幕の技術を利用することができます。例えば、 [Flash captions](http://www.adobe.com/accessibility/products/flash/captions.html)、[Using Timed Text Captions](https://help.adobe.com/en_US/as3/components/WS5b3ccc516d4fbf351e63e3d118a9c65b32-7ee5.html) (Flash 用) 、 [Playing Subtitles with Videos in Silverlight](https://blogs.msdn.microsoft.com/anilkumargupta/2009/05/01/playing-subtitles-with-videos-in-silverlight/) などを見てください。

しかし、他のマルチメディアはアクセシブルにすることがそう簡単ではありません。例えば、没入型 3D ゲームやバーチャルリアリティアプリを扱っている場合、そのような体験に対して代替テキストを提供することは非常に困難であるし、盲目のユーザーはそのようなアプリのターゲットに当てはまらないと考えるかもしれません。

しかしそのようなアプリでも、視力や色覚に問題を抱えるユーザーにとって認識できるよう、カラーコントラストや表示の明瞭さが十分であるかどうか、そしてキーボードからアクセス可能であるかを確かめることはできます。アクセシビリティは、100% を常に目指すというよりは、可能な限り行うものであるということを覚えておいてください。100% は大抵不可能なのです。

## まとめ

このチャプターでは、マルチメディアにおけるアクセシビリティの関心ごとの要約をいくつかの実践的なソリューションと共に提供しました。

{{PreviousMenuNext("Learn/Accessibility/WAI-ARIA_basics","Learn/Accessibility/Mobile", "Learn/Accessibility")}}
