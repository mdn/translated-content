---
title: アクセシブルなマルチメディア
slug: Learn_web_development/Core/Accessibility/Multimedia
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}

アクセシビリティの問題を引き起こす他のカテゴリーは、マルチメディアでです。映像、音声、画像といったコンテンツは、支援技術 (assistive technologies) とそのユーザーが理解可能となる適切な代替テキストを必要とします。この記事ではその方法を説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a> の知識、<a href="/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">基本的なアクセシビリティの概念の理解</a>。</td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>ネイティブメディアプレーヤーの課題と、カスタムプレーヤーを作成する方法。</li>
          <li>音声コンテンツと映像コンテンツにアクセシビリティを持たせるため、音声文字起こしとテキストトラック（キャプション、字幕など）が用意されています。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## マルチメディアとアクセシビリティ

このモジュールまで、様々なコンテンツに対してそのアクセシビリティを保証するために何が必要かを見てきました。シンプルな文章から始まって、データテーブル、画像、フォーム要素やボタンといったネイティブのコントロール、より複雑なマークアップ構造 ([WAI-ARIA](/ja/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) 属性) などです。

一方こちらの記事は、アクセシビリティの保証が難しい別のマルチメディアのコンテンツ群について扱っています。画像、映像、{{htmlelement("canvas")}} 要素などは、スクリーンリーダーによる理解やキーボードによるナビゲーションが容易ではないため、私たちが手を差し伸べる必要があります。

ですが絶望はしないでください。ここではマルチメディアをアクセシブルにするために利用できる技術について紹介し、あなたの手助けをします。

## シンプルな画像

私達は既に [HTML: アクセシビリティの良き基本](/ja/docs/Learn_web_development/Core/Accessibility/HTML) で HTML 画像のシンプルな代替テキストについてカバーしました — 詳細を確認するために、そこに戻っても良いです。簡単に言うと、ビジュアルコンテンツとなり得るものは、スクリーンリーダーがユーザーのために読み上げることができるよう、代替テキストが利用可能であることを保証するべきです。

例えば:

```html
<img
  src="dinosaur.png"
  alt="赤いティラノサウルスレックス：人間のように直立し、腕は小さく、大きな頭には鋭い歯がたくさん生えている 2 本足の恐竜。" />
```

## アクセシブルな音声と映像コントロール

ウェブベースの音声/映像のコントロールを実装するのは問題にはならないはずですよね？調べてみましょう。

### ネイティブ HTML コントロールの問題

HTML の video と audio インスタンスは、内蔵のコントロールと一緒に提供されており、何も設定せずにメディアの制御を行うことができます。例えば（`native-controls.html` [ソースコード](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html)と[実際の動作](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)を参照）、

```html-nolint
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    このブラウザーは HTML の音声に対応していません。
    代わりの<a href="viper.mp3">音声へのリンク</a>はこちら。
  </p>
</audio>

<br />

<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    このブラウザーは HTML の映像に対応していません。
    代わりの<a href="rabbit320.mp4">映像へのリンク</a>はこちら。
  </p>
</video>
```

controls 属性は、メディアプレイヤーに対して期待する再生/一時停止ボタンやシークバーといった基本的なコントロールを提供します。Firefox と Chrome では次のように表示されます。

![Firefox の映像コントロールのスクリーンショット](native-controls-firefox.png)

![Chrome の映像コントロールのスクリーンショット](native-controls-chrome.png)

しかし、これらのコントロールには問題があります。

- たいていのブラウザーではキーボードでアクセスできません。つまりネイティブプレイヤー内でコントロール間をタブ移動できません。Opera と Chrome ではいくらか動きますが、理想的なものではありません。
- ネイティブコントロールは各ブラウザーによって異なるスタイルと機能が提供され、かつスタイル設定することができません。つまり、サイトのスタイルガイドに従うのが容易ではありません。

これを改善するために、私たちは自分たちのカスタムコントロールを作成することができます。どのようにするのか見てみましょう。

### カスタム audio/video コントロール

HTML の video と audio は HTML メディア要素という API を提供しています。これは、あなたが定義したボタンや他のコントロールにカスタム機能をマップすることを可能にします。

上の video を例として、カスタムコントロールを追加してみましょう。

#### 基本のセットアップ

はじめに、[custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html)、 [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4)、そして [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) のコピーを取得し、あなたのハードドライブのディレクトリーに保存してください。

main.js というファイルを新規作成し、同じディレクトリーに保存してくあださい。

最初に、映像プレイヤーの HTML を見てみましょう。 HTML の中は次のようになっています。

```html-nolint
<section class="player">
  <video controls>
    <source src="rabbit320.mp4" type="video/mp4" />
    <source src="rabbit320.webm" type="video/webm" />
    <p>
      このブラウザーは HTML の映像に対応していません。
      代わりの<a href="rabbit320.mp4">映像へのリンク</a>はこちら。
    </p>
  </video>

  <div class="controls">
    <button class="playpause">再生</button>
    <button class="stop">停止</button>
    <button class="rwd">巻き戻し</button>
    <button class="fwd">早送り</button>
    <div class="time">00:00</div>
  </div>
</section>
```

#### JavaScript の基本セットアップ

私たちは映像の下にいくつかの簡単なボタンを挿入しました。もちろん、このままではこれらのコントロールは何もしません。機能を加えるためには JavaScript を使います。

まずはそれぞれのコントロールの設定を保持しておく必要があります。JavaScript ファイルの先頭に次のコードを追加してください。

```js
const playPauseBtn = document.querySelector(".playpause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

次に、video/audio プレイヤー自身の参照を取得する必要があります。次の行を先ほどのコードの下に加えてください。

```js
const player = document.querySelector("video");
```

これは {{domxref("HTMLMediaElement")}} オブジェクトへの参照を保持します。このオブジェクトは、私たちのボタンに機能を紐づけるために使用可能ないくつかの便利なプロパティやメソッドを持っています。

私たちのボタンの機能を作る前に、カスタムコンロールの邪魔にならないようネイティブコントロールを削除しましょう。 JavaScript の下に次のコードを追加してください。

```js
player.removeAttribute("controls");
```

最初から controls 属性を含めないようにするのではなく、わざわざこのようにするのには理由があります。もし JavaScript コードが何らかの理由で失敗しても、ユーザーは利用可能な何かしらのコントロールを使うことができるのです。

#### ボタンを紐つける

最初に、再生/一時停止ボタンをセットアップしましょう。次のように、再生と一時停止をシンプルな条件によって切り替えることで、この機能を実現できます。これをあなたのコードの下に追加しましょう。

```js
playPauseBtn.onclick = () => {
  if (player.paused) {
    player.play();
    playPauseBtn.textContent = "Pause";
  } else {
    player.pause();
    playPauseBtn.textContent = "Play";
  }
};
```

次に、停止ボタンを制御する次のコードを下に追加しましょう。

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

{{domxref("HTMLMediaElement")}} には `stop()` 関数がありません。そこで `pause()` 関数を使用し、同時に `currentTime` に 0 を設定します。

続いて、巻き戻しと早送りボタンです。次のブロックをあなたのコードの下に追加してください。

```js
rwdBtn.onclick = () => {
  player.currentTime -= 3;
};

fwdBtn.onclick = () => {
  player.currentTime += 3;
  if (player.currentTime >= player.duration || player.paused) {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = "Play";
  }
};
```

これらはとてもシンプルで、クリックされる度に `currentTime` 単に 3 秒を足すか引くだけです。実際の映像プレイヤーでは、あなたはもっと手の込んだものを作りたいでしょう。

`currentTime` がメディアの合計再生時間 `duration` よりも長いかどうか、または `fwdBtn` が押されたときにメディアが再生されていないかどうかも注意して調べます。いずれかの条件が true の場合、映像が再生されていないときに早送りしようとしたり、映像の終わりを過ぎて早送りしようとしたときにユーザーインターフェイスがおかしくなるのを避けるために、映像を停止します。

最後に、再生時間を表示するために次の内容をコードの最後に追加します。

```js
player.ontimeupdate = () => {
  const minutes = Math.floor(player.currentTime / 60);
  const seconds = Math.floor(player.currentTime - minutes * 60);
  const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
  const secondValue = seconds < 10 ? `0${seconds}` : seconds;

  const mediaTime = `${minuteValue}:${secondValue}`;
  timeLabel.textContent = mediaTime;
};
```

時間が更新される度に (1 秒に一度) 、この関数を実行します。これは秒として渡された currentTime の値 (秒で与えられる) から分と秒の数を算定するもので、もし分か秒の値が 10 以下であれば先頭に 0 を追加し、表示用の値を生成して時間ラベルに追加します。

#### 参考記事

ここでは、映像/音声プレイヤーに対してどのようにカスタムしたプレイヤー機能を加えるかという基本的なアイデアが得られます。映像/音声プレイヤーに対して、古いブラウザーでの Flash のフォールバックも含めて、より複雑な機能を加えるには、以下のリンク先を参照してください:

- [音声と映像の配信](/ja/docs/Web/Media/Audio_and_video_delivery)
- [映像プレイヤーのスタイル設定の基本](/ja/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
- [ブラウザー間互換の映像プレイヤーの作成](/ja/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)

また、ページ上のすべての映像と映像プレイヤーを探し（いくつあってもかまいません）、カスタムコントロールを追加するオブジェクト指向システムを作成する方法を示す高度な例も作成しました。 [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) を見てください（[ソースコード](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS)も見てください）。

## 音声トランスクリプト

聴覚障碍者に音声コンテンツを提供する場合、トランスクリプトのテキストを必ず用意する必要があります。これらは同じページの中に何らかの形で含んでも良いですし、リンクされた別ページに用意することもできます。

トランスクリプトを実際に作成する際は、次の選択肢があります。

- 商用サービス — プロフェッショナルに料金を払って文字起こししてもらうことができるでしょう。例として [Scribie](https://scribie.com/)、[Casting Words](https://castingwords.com/)、[Rev](https://www.rev.com/) などの会社を見てください。色々見てアドバイスをもらい、あなたがうまく作業できる評判の良い会社を見つけてください。
- コミュニティ/草の根/自身の文字起こし — あなたがアクティブなコミュニティや職場のチームの一員であるなら、彼らに文字起こしのヘルプを頼むことができるでしょう。試しに自分自身で文字起こしに挑戦することもできます。
- 自動サービス — [Trint](https://trint.com/) のように利用可能な AI サービスがあります。サイトに映像/音声ファイルをアップロードすれば、自動的にそれを書き起こします。YouTube では、自動的にキャプション/トランスクリプトを生成するように選択できます。生成されるトランスクリプトのクォリティは、どれだけ明瞭に話されているかに応じて大きく変わります。

人生の多くのものがそうであるように、あなたは支払った分相応のものを手に入れます。つまり、サービスが異なれば、トランスクリプト作成に要する時間と正確さが異なるということです。文字起こしをするために信頼できる会社や AI サービスにお金を払えば、正確なトランスクリプトを早く入手できるでしょう。料金を払いたくないのであれば、遅く、質の低いものになりやすいです。

音声リソースを公開するがトランスクリプトは後で提供する、という約束は良いものではありません。そのような約束は大抵守られず、ユーザーとの間にある信頼を損なってしまいます。もし音声が対面ミーティングやライブスピーチのようなものであるならば、それらが行われている間にノートを取り、音声と共に公開して、後からまとめ上げるということはできるでしょう。

### トランスクリプトの例

もしあなたが自動サービスを使用しているならば、おそらくツールが提供しているユーザーインターフェイスを使用する必要があるでしょう。例えば、 [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) を見て、 3 点メニュー (. . .) _> Show Transcript_ を選択してください。トランスクリプトは別のパネルに表れるでしょう。

音声とそのトランスクリプトを表示するユーザーインターフェイスを自身で作成する場合、あなたのが考える形で作ることができますが、表示/非表示が可能なパネルを含むと良いかもしれません。私たちの [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) の例を見てください。 ([ソースコード](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui) も見てください).

### 音声の説明

音声に伴う映像がある場合、追加のコンテンツを描写するために音声の説明を提供する必要があるでしょう。

多くの場合これは映像の形を取り、この章の次のセクションで説明されるテクニックを使用してキャプションを埋め込むことができます。

しかし、いくつかのエッジケースもあります。例えば、スプレッドシートやグラフの資料を使用したミーティングの録音音声があるかもしれません。その場合、それらの資料が音声とトランスクリプトとともに提供されていることを確認するべきであり、特にトランスクリプトの中でそれらの資料に言及されている箇所をリンクとすることが大事です。これは聴覚障碍の方だけでなく、すべてのユーザーの助けになります。

> [!NOTE]
> 音声トランスクリプトは、一般的に様々なユーザーグループを助けます。聴覚障碍の人へ音声に含まれたコンテンツにアクセスを提供するように、音声をダウンロードすることが困難な狭い帯域のユーザーのことを考えて見ましょう。パブやバーのような騒音の多い環境で、雑音のために音声を聞くことが難しいユーザーのことも考えて見ましょう。

## 映像のテキストトラック

聴覚障碍者、視覚障碍者、そして他のユーザー（狭い帯域のユーザーや、映像に収録されている言語を理解できないユーザーなど）映像にアクセシビリティを持たせるには、映像コンテンツにテキストトラックを記載する必要があります。

> [!NOTE]
> テキストトラックは障碍者だけでなく他のユーザーにとっても便利になる可能性があります。例えば、うるさい環境 (スポーツ中継を流している混雑したバーなど) にいるために音声が聞こえないユーザーや、他の人を邪魔したくない静かな場所 (図書館など) にいるユーザーなどです。

これは新しい概念ではありません — テレビ放送では、かなり長い間クローズドキャプションを提供しています。

![古い時代のアニメのフレーム。 "Good work, Goldie. Keep it up!" というクローズドキャプション付き。](closed-captions.png)

下記の通り、多くの国では英語映画に自分自身で書いた母国語の字幕を付けていますし、 DVD でも様々な言語の字幕が利用できます。

![ドイツ語字幕付き英語映画 "Emo, warum erkennst du nicht die Schonheit dieses Ortes?"](subtitles_german.png)

テキストトラックには、目的に応じた様々な種類のものがあります。あなたが接する主な種類は、次のものです。

- キャプション — 音声を聞くことができない聴覚障碍者のためのものであり、話されている言葉、誰が話しているか、人が怒っているのか悲しんでいるのか、どのような雰囲気の音楽が流れているのかなど、場面に関する情報を含みます。
- 字幕 — 話されている言語を理解しないユーザーのための翻訳された音声の台本です。
- 音声解説 — 映像を見ることができない視覚障碍者のための描写を含みます。例えば、どのようなシーンに見えるか、などです。
- チャプタータイトル — メディアリソースを移動するユーザーを助けることを目的としたチャプターマーカーです。

### HTML 映像テキストトラックの実装

HTML の映像で表示されるテキストトラックは、WebVTT で記述される必要があります。これは、テキストの文字列とメタデータを含むテキストフォーマットであり、テキストが表示されるべき時間や、スタイル、ポジションといった情報まで含みます。これらの文字列はキュー (cues) と呼ばれます。

典型的な WebVTT ファイルは、次のようなものです。

```plain
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2
00:00:30.739 --> 00:00:34.074
This is the second.

…
```

HTML のメディア再生と共に表示させるためには、次のことをする必要があります。

- .vtt ファイルとしてアクセス可能な場所に保存します。
- {{htmlelement("track")}} 要素で .vtt へのリンクを設定します。 `<track>` は `<audio>` か `<video>` の間に設置する必要がありますが、すべての `<source>` 要素の後でなければいけません。 [`kind`](/ja/docs/Web/HTML/Element/track#kind) 属性を使い、キューが字幕、キャプション、音声解説のどれなのかを指定します。さらに、 [`srclang`](/ja/docs/Web/HTML/Element/track#srclang) を使って、字幕でどの言語が使用されているのかを伝えます。

例を見てみましょう。

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

これは、字幕が表示された映像となり、次のようになります。

![再生、停止、音量、キャプションの単発のオン・オフなど標準制御する動画プレーヤー。再生されている動画は、槍のような武器を持った男性のシーンを示し、キャプションには "Esta hoja tiene pasado oscuro. "と書かれています。](video-player-with-captions.png)

詳細は [HTML の動画へのキャプションと字幕の追加](/ja/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)を読んでください。あなたは、GitHub で GIan Devlin によって作られた[例](http://iandevlin.github.io/mdn/video-player-with-captions/)をこの記事と併せて見ることができます。([ソースコード](https://github.com/iandevlin/iandevlin.github.io/tree/main/mdn/video-player-with-captions) も見てください) この例では JavaScript を使用して、ユーザーが異なる言語の字幕を選択できるようになっています。字幕を表示するためには、"CC" ボタンをクリックして英語、ドイツ語、スペイン後のオプションを選択する必要があります。

> [!NOTE]
> テキストトラックは {{glossary("SEO")}} でも役に立ちます。検索エンジンはテキストによって更新されるためです。検索エンジンは、テキストトラックによって映像の途中に直接リンクすることさえできます。

## まとめ

このチャプターでは、マルチメディアにおけるアクセシビリティの関心ごとの要約をいくつかの実践的なソリューションと共に提供しました。

マルチメディアをアクセシビリティのあるものにするのは常に簡単というわけではありません。例えば、没入感のある 3D ゲームやバーチャルリアリティアプリを扱っている場合、そのような使い勝手のためにテキストの代替を提供することは非常に難しく、視覚的な障害を持つユーザーはこのようなアプリの対象とするユーザー層には実のところ入っていないと言えるかもしれません。

しかし、そのようなアプリは、弱視や色覚異常の人が知覚できるように、十分な色のコントラストと明確な表示をしていることを確認し、キーボードでアクセスできるようにすることはできます。アクセシビリティとは、 100% のアクセシビリティを常に目指すことではなく、できる限りのことをすることであり、それは多くの場合不可能であることを忘れないでください。

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}
