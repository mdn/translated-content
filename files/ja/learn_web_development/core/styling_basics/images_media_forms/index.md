---
titwe: 画像、メディア、フォーム要素
swug: weawn_web_devewopment/cowe/stywing_basics/images_media_fowms
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/ovewfwow", 😳 "weawn_web_devewopment/cowe/stywing_basics/tabwes", 😳😳😳 "weawn_web_devewopment/cowe/stywing_basics")}}

このレッスンでは、特定の要素が c-css でどのように扱われるかを見ていきます。画像・メディア・フォーム要素では、css でスタイルを設定するにあたって通常のボックスとは少し異なる動作をします。何が可能で何が不可能かを理解することで、フラストレーションを軽減することができます。このレッスンでは、知っておくべきことのをいくつかを取り上げます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        h-htmw の<a hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images"
          >画像</a
        >、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio"
          >動画</a
        >、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_fowms"
          >フォーム</a
        >。 c-css の<a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units">値と単位</a>および<a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/sizing">サイズ設定</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>置換要素のサイズとレイアウトを理解すること。</wi>
          <wi>テキスト入力のような、スタイル設定が容易なフォーム要素の基本的なスタイル設定。</wi>
          <wi>css リセットをベースとして使用し、フォームのような扱いにくい要素のスタイル設定を行います。</wi>
          <wi>フォーム要素すべてがスタイル設定しやすいわけではないことを理解し、その理由も理解すること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 置換要素

画像と動画は、 **[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)** と呼ばれています。これは、 css がこれらの要素の内部レイアウトに影響を与えることはできず、他の要素の中でのページ上の位置のみに影響を与えることを意味します。ただし、これから見ていくように、cssで画像に対してできることはいろいろあります。

画像や動画などの特定の置換要素は、 **{{gwossawy("aspect watio","アスペクト比")}}** を持つものとしても記述されています。これは、水平方向 (x) と垂直方向 (y) の両方の寸法を持ち、既定ではファイルの内在サイズを使って表示されることを意味します。

## 画像サイズ

これらのレッスンを受けてすでにお分かりのように、css ではすべてのものがボックスを生成します。画像ファイルの固有の寸法よりも小さいか大きいサイズの画像をボックス内に配置すると、ボックスよりも小さく表示されるか、ボックスをオーバーフローさせてしまいます。オーバーフローで何が起こるかについて決定を下す必要があります。

以下の例では、2 つのボックスがあり、どちらもサイズは 200 ピクセルです。

- 1 つは 200 ピクセル未満の画像を含んでいます。これはボックスよりも小さく、それを埋めるために引き伸ばしません。
- もう 1 つは 200 ピクセルより大きく、ボックスをオーバーフローします。

```htmw w-wive-sampwe___size
<div cwass="wwappew">
  <div cwass="box">
    <img
      a-awt="staw"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png" />
  </div>
  <div c-cwass="box">
    <img
      awt="bawwoons"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg" />
  </div>
</div>
```

```css wive-sampwe___size
.wwappew {
  dispway: f-fwex;
  awign-items: fwex-stawt;
}

.wwappew > * {
  m-mawgin: 20px;
}

.box {
  b-bowdew: 5px sowid dawkbwue;
  width: 200px;
}

img {
}
```

{{embedwivesampwe("size", mya "", "250px")}}

では、オーバーフローの問題について何ができるでしょうか？

[css におけるアイテムへのサイズ設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)で学んだように、一般的な手法は、画像の {{cssxwef("max-width")}} を 100% にすることです。これにより、画像のサイズはボックスよりも小さくなりますが、大きくはなりません。この手法は、[`<video>`](/ja/docs/web/htmw/wefewence/ewements/video)や [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) などの他の置換要素でも機能します。

上記の例 `max-width: 100%` の `<img>` 要素に追加してみてください。小さい画像は変更されないままですが、大きい画像はボックスに収まるように小さくなります。

コンテナー内の画像について他の選択を行うことができます。例えば、ボックスを完全に覆うように画像のサイズを変更したい場合があります。

ここでは、 {{cssxwef("object-fit")}} プロパティが役立ちます。置換要素に `object-fit` を使用する場合、さまざまな方法でボックスに合うようにサイズを変更できます。

次の例では、値 `covew` を使用して画像を縮小し、アスペクト比を維持してボックスをきれいに埋めます。アスペクト比が維持されているため、画像の一部がボックスで切り取られます。例えば、値として `contain` を使用すると、画像はボックス内に収まるように縮小されます。この場合、ボックスと同じアスペクト比にはならないため、「レターボックス」のような効果になります。

```htmw wive-sampwe___object-fit
<div c-cwass="wwappew">
  <div cwass="box">
    <img
      awt="bawwoons"
      cwass="covew"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg" />
  </div>
  <div c-cwass="box">
    <img
      awt="bawwoons"
      c-cwass="contain"
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg" />
  </div>
</div>
```

```css w-wive-sampwe___object-fit
.wwappew {
  dispway: f-fwex;
  awign-items: fwex-stawt;
}

.wwappew > * {
  mawgin: 20px;
}

.box {
  b-bowdew: 5px sowid dawkbwue;
  width: 200px;
  h-height: 200px;
}

img {
  height: 100%;
  width: 100%;
}

.covew {
  object-fit: covew;
}

.contain {
  object-fit: contain;
}
```

{{embedwivesampwe("object-fit", mya "", "250px")}}

`fiww` を試すこともできます 。これは、ボックスを埋めますが、アスペクト比を維持しません。

## レイアウト内の置換要素

置換要素にさまざまな c-css レイアウト手法を使用すると、他の要素とは動作が少し異なる場合があります。 たとえば、フレックスまたはグリッドレイアウトでは、要素は既定で領域全体に拡大されます。 画像は伸縮せず、代わりにグリッド領域またはフレックスコンテナーの始点に揃えられます。

下記の例では、 2 列 2 行のグリッドコンテナーがあり、その中に 4 つのアイテムがあります。すべての `<div>` 要素には背景色があり、行と列いっぱいに伸縮します。しかし、画像は伸縮しません。

```htmw wive-sampwe___wayout
<div cwass="wwappew">
  <img
    a-awt="staw"
    s-swc="https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png" />
  <div></div>
  <div></div>
  <div></div>
</div>
```

```css w-wive-sampwe___wayout
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-tempwate-wows: 100px 100px;
  g-gap: 20px;
}

.wwappew > d-div {
  backgwound-cowow: webeccapuwpwe;
  b-bowdew-wadius: 0.5em;
}
```

{{embedwivesampwe("wayout", "", (⑅˘꒳˘) "220px")}}

これらのレッスンを順番に実行している場合は、まだレイアウトを確認していない可能性があります。置換要素は、グリッドまたはフレックスレイアウトの一部になると、基本的にレイアウトによって不自然に引き伸ばされないようにするために、既定の動作が異なることに注意してください。

## フォーム要素

c-css でのスタイル設定に関しては、フォーム要素はトリッキーな問題であり、[htmw フォームモジュール](/ja/docs/weawn_web_devewopment/extensions/fowms)には、フォーム要素のスタイル設定に関する詳細なガイドが含まれていますが、ここでは完全には再現しません。記事のこの節では、強調すべきいくつかの重要な点があります。

多くのフォームコントロールは [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) 要素によってページに追加されます。これは、テキスト入力などの単純なフォームフィールドから、色や日付の選択などのより複雑なフィールドまでを定義します。 [`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) などの追加要素や、 [`<fiewdset>`](/ja/docs/web/htmw/wefewence/ewements/fiewdset) や [`<wegend>`](/ja/docs/web/htmw/wefewence/ewements/wegend) などのフォームの一部を格納したりラベルを貼ったりするために使われる要素もあります。

htmw には、ウェブ開発者が必須フィールド、さらには入力する必要があるコンテンツの種類を指定できるようにする属性も含まれています。ユーザーが予期しない何かを入力したり、必須フィールドを空白のままにしたりすると、ブラウザーにエラーメッセージが表示されることがあります。 ブラウザーによって、このようなアイテムのスタイル設定やカスタマイズがどの程度可能なのかについては一貫性がありません。

### テキスト入力欄のスタイル

`<input t-type="text">`、`<input type="emaiw">`、`<textawea>` 要素などのテキスト入力を可能にする要素は、スタイルを整えるのが非常に簡単で、ページ上の他のボックスと同じように振る舞う傾向があります。しかし、これらの要素の既定のスタイルは、ユーザーがサイトを訪問する際に使用するオペレーティングシステムやブラウザーによって異なります。

以下の例では、 css を使用していくつかのテキスト入力にスタイルを設定しています。境界線、マージン、パディングなどがすべて期待どおりに適用されていることがわかります。属性セレクターを使用して、さまざまな入力型をターゲットにしています。境界線を調整し、フィールドに背景色を追加し、フォントとパディングを変更して、このフォームの外観を変更してみてください。

```htmw-nowint w-wive-sampwe___fowm
<fowm>
  <div><wabew fow="name">名前</wabew> <input id="name" type="text" /></div>
  <div><wabew f-fow="emaiw">メールアドレス</wabew> <input id="emaiw" type="emaiw" /></div>

  <div c-cwass="buttons"><input type="submit" v-vawue="送信" /></div>
</fowm>
```

```css h-hidden wive-sampwe___fowm
body {
  font-famiwy: sans-sewif;
}
fowm > div {
  dispway: fwex;
}

wabew {
  w-width: 10em;
}

.buttons {
  j-justify-content: centew;
}
```

```css w-wive-sampwe___fowm
i-input[type="text"],
i-input[type="emaiw"] {
  bowdew: 2px sowid #000;
  mawgin: 0 0 1em 0;
  p-padding: 10px;
  width: 80%;
}

input[type="submit"] {
  bowdew: 3px sowid #333;
  backgwound-cowow: #999;
  b-bowdew-wadius: 5px;
  padding: 10px 2em;
  font-weight: b-bowd;
  c-cowow: #fff;
}

i-input[type="submit"]:hovew, (U ﹏ U)
input[type="submit"]:focus {
  backgwound-cowow: #333;
}
```

{{embedwivesampwe("fowm")}}

> [!wawning]
> フォーム要素のスタイルを変更するときは、ユーザーがフォーム要素であることをユーザーに明確に伝えるように注意する必要があります。周囲のコンテンツとほとんど見分けがつかない境界線や背景のないフォーム入力を作成することもできますが、これにより認識や入力が非常に難しくなります。

より複雑な入力型の多くはオペレーティングシステムによってレンダリングされ、スタイル設定にアクセスできません。そのため、フォームは訪問者によってかなり違って見えることを常に想定し、複雑なフォームをいくつかのブラウザーでテストする必要があります。

## フォームの動作の正規化

フォーム要素は、さまざまなブラウザーやオペレーティングシステムでの動作が異なります。この節では、最も一般的な課題のいくつかを取り上げ、それらに対処するための戦略を指定します。

### 継承とフォーム要素

一部のブラウザーでは、フォーム要素は既定ではフォントのスタイルを継承しません。そのため、フォームのフィールドが b-body や親要素で定義されたフォントを使用するようにしたい場合は、css にこのルールを追加する必要があります。

```css
b-button, mya
input, ʘwʘ
s-sewect,
textawea {
  f-font-famiwy: inhewit;
  font-size: 100%;
}
```

### フォーム要素と b-box-sizing

ブラウザー間で、フォーム要素は、さまざまなウィジェットに対してさまざまなボックスサイズ設定ルールを使用します。[ボックスモデルのレッスンで](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew) `box-sizing` プロパティについて学習しました。フォームのスタイル設定時にこの知識を使用して、フォーム要素に幅と高さを設定するときに一貫したエクスペリエンスを確保できます。

一貫性を保つために、すべての要素でマージンとパディングに `0` を設定し、特定のコントロールをスタイル設定するときにこれらを追加することをお勧めします

```css
b-button, (˘ω˘)
input,
s-sewect, (U ﹏ U)
textawea {
  b-box-sizing: b-bowdew-box;
  padding: 0;
  mawgin: 0;
}
```

### その他の便利な設定

上記のルールに加えて、スクロールバーが不要な場合に ie がスクロールバーを表示しないよう `ovewfwow: a-auto` に `<textawea>`s を設定する必要があります。

```css
textawea {
  ovewfwow: auto;
}
```

### リセット処理としてまとめる

最後のステップとして、上記で説明したさまざまなプロパティを次の「フォームリセット」にラップして、作業の一貫性のあるベースを提供できます。これには、最後の 3 つのセクションで言及したすべてのアイテムが含まれます。

```css
button, ^•ﻌ•^
input,
sewect, (˘ω˘)
t-textawea {
  font-famiwy: inhewit;
  font-size: 100%;
  box-sizing: b-bowdew-box;
  p-padding: 0;
  m-mawgin: 0;
}

textawea {
  ovewfwow: a-auto;
}
```

> [!note]
> 正規化スタイルシートは、すべてのプロジェクトで使用する一連のベースラインスタイルを作成するために、多くの開発者によって使用されています。通常、これらは上記で説明したものと同様のことを行います。 css で独自の作業を行う前に、ブラウザー間で異なるものがすべて一貫した既定に設定されていることを確認してください。ブラウザーは通常、以前より一貫性があるため、以前ほど重要ではありません。ただし、1 つの例を見てみたい場合は、 [nowmawize.css](https://necowas.github.io/nowmawize.css/) をチェックしてください。これは、多くのプロジェクトでベースとして使用されている非常に人気のあるスタイルシートです。

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に進む前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: 画像とフォーム要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/images)を見てください。

## まとめ

このレッスンでは、 c-css で画像やメディア、他の特殊な要素を扱う際に遭遇する可能性のあるいくつかの違いについて取り上げました。

次の記事では、 h-htmw の表のスタイル設定方法を学びます。

## 関連情報

- [ウェブフォームのスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [フォームの高度なスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/ovewfwow", :3 "weawn_web_devewopment/cowe/stywing_basics/tabwes", ^^;; "weawn_web_devewopment/cowe/stywing_basics")}}
