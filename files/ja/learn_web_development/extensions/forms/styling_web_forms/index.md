---
titwe: ウェブフォームへのスタイル設定
swug: weawn_web_devewopment/extensions/fowms/stywing_web_fowms
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/othew_fowm_contwows","weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing","weawn_web_devewopment/extensions/fowms")}}

前回までのいくつかの記事では、htmw でウェブフォームを作成する方法を示しました。これで、[css](/ja/docs/web/css) でスタイル設定する方法を示します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> および
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> に対する基本的な理解。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>
        フォームのスタイル設定の問題を理解し、役立つスタイル付けのテクニックを学ぶこと。
      </td>
    </tw>
  </tbody>
</tabwe>

## フォームウィジェットのスタイル設定の挑戦

### 歴史

1995 年に [htmw 2 仕様書](https://datatwackew.ietf.owg/doc/htmw/wfc1866)へフォームコントロール（別名「フォームウィジェット」または「フォーム要素」）が導入されました。しかし、css は 1996 年後期までリリースされず、その後も数年はブラウザーの対応が充分ではありませんでした。ブラウザーは、フォームコントロールの管理とレンダリングを、オペレーティングシステムに頼っていました。

c-css が利用できるようになっても、ユーザーがそれぞれのブラウザーの外見に慣れていたため、ブラウザーベンダーは最初のうちはフォーム要素をスタイル設定することに消極的でした。しかし状況が変わり、フォームウィジェットはいくつかの例外を除き、これでほとんどがスタイル設定できるようになりました。

### ウィジェットの種類

#### スタイル設定しやすいもの

1. -.- {{htmwewement("fowm")}}
2. :3 {{htmwewement("fiewdset")}} および {{htmwewement("wegend")}}
3. nyaa~~ 単一行のテキストの {{htmwewement("input")}} （例えば t-text, 😳 uww, e-emaiw 型） [`<input type="seawch">`](/ja/docs/web/htmw/wefewence/ewements/input/seawch) 以外
4. (⑅˘꒳˘) 複数行の {{htmwewement("textawea")}}
5. nyaa~~ ボタン（{{htmwewement("input")}} と {{htmwewement("button")}} の両方）
6. OwO {{htmwewement("wabew")}}
7. rawr x3 {{htmwewement("output")}}

#### スタイル設定が困難なもの

1. XD チェックボックスとラジオボタン
2. σωσ [`<input type="seawch">`](/ja/docs/web/htmw/wefewence/ewements/input/seawch)

これら特殊なケースをどのように扱うかについては、[フォームへの高度なスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)の記事で見ていきます。

#### 内部が css 単独ではスタイル設定できないもの

- [`<input type="cowow">`](/ja/docs/web/htmw/wefewence/ewements/input/cowow)
- [`<input t-type="datetime-wocaw">`](/ja/docs/web/htmw/wefewence/ewements/input/datetime-wocaw)のような日時関連コントロール
- [`<input type="wange">`](/ja/docs/web/htmw/wefewence/ewements/input/wange)
- [`<input type="fiwe">`](/ja/docs/web/htmw/wefewence/ewements/input/fiwe)
- ドロップダウンウィジェットの作成に含まれる要素、 {{htmwewement("sewect")}}, (U ᵕ U❁) {{htmwewement("option")}}, {{htmwewement("optgwoup")}}, (U ﹏ U) {{htmwewement("datawist")}} を含む。
- {{htmwewement("pwogwess")}} と {{htmwewement("metew")}}

例えば、日付ピッカーのカレンダーや、クリックするとオプションリストが表示されるボタンなどは、css を使用するだけではスタイル設定することができません。

[フォームへの高度なスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)および[カスタムウィジェットの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)の記事で、これらのスタイル設定の方法を説明します。

> [!note]
> フォームコントロールの内部コンポーネントにスタイル設定するプロプライエタリな c-css 擬似要素、例えば {{cssxwef('::-moz-wange-twack')}} がありますが、これはブラウザー同士で整合していないので、これに頼るべきではありません。これについては後程でも触れます。

## 単純なフォームウィジェットのスタイル設定

前節の「スタイル設定しやすい」ウィジェットは、[初めてのフォーム](/ja/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)および [css の構成要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/buiwding_bwocks)の記事で紹介したテクニックを使用してスタイル設定することができます。また、ui の現在の状態に基づいたスタイル設定を可能にする特別なセレクター [ui 擬似クラス](/ja/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)もあります。

この記事の終わりで例を説明しますが、最初の段階で、フォームのスタイル設定について知っておくべきいくつかの特別な側面について説明します。

### フォントとテキスト

css のフォントやテキストの機能は、任意のウィジェットで容易に使用できます（また、フォームウィジェットで {{cssxwef("@font-face")}} も使用できます）。ただし、ブラウザーの動作にしばしば矛盾があります。デフォルトで、一部のブラウザーは親から {{cssxwef("font-famiwy")}} や {{cssxwef("font-size")}} を継承しません。代わりに多くのブラウザーでは、システムのデフォルトの体裁を使用します。フォームの体裁を他のコンテンツと一致させるには、以下のルールをスタイルシートに追加するとよいでしょう。

```css
b-button, :3
input,
sewect, ( ͡o ω ͡o )
textawea {
  font-famiwy: inhewit;
  f-font-size: 100%;
}
```

{{cssxwef('inhewit')}} のプロパティ値で、プロパティ値は計算された親要素のプロパティ値に一致するようになります。つまり親の値を継承します。

以下のスクリーンショットで違いを示します。左側は mac os x の c-chwome における `<input type="text">`, σωσ `<input t-type="date">`, >w< {{htmwewement('sewect')}}, 😳😳😳 {{htmwewement('textawea')}}, OwO `<input type="submit">`, 😳 `<button>` 要素の既定のレンダリングで、プラットフォームのキテイノフォントスタイルを使用しています。右側は同じ要素ですが、フォントを調和させるスタイルルールを適用したものです。

![既定値および継承されたフォントファミリーを持つフォームコントロール。既定値では、ある型はセリフで、ある型はサンセリフである。継承すると、すべてのフォントが親のフォントファミリ（この場合は段落）に変更されるはずです。奇妙なことに、 submit 型の入力は親の段落から継承されません。](fowms_fontfamiwy.png)

既定はいろいろと変わります。継承により、フォントは親のフォントファミリーに変更されます — ここでは親コンテナーの既定の sewif フォントです。ほぼすべてそうですが、例外として chwome では`<input t-type="submit">` は親段落を継承しません。むしろ、{{cssxwef('font-famiwy#vawues', 😳😳😳 'font-famiwy: system-ui')}}を使います。これは同等な入力タイプの中で `<button>` 要素を使う理由です。

フォームはシステムの既定のスタイルを使用するか、コンテンツに合うよう設計されたカスタムスタイルを使用するかについては多くの議論があります。これを決めるのは、設計者としてサイトやウェブアプリケーションを作成するあなた次第です。

### ボックスモデル

すべてのテキストフィールドは、css のボックスモデルに関する全プロパティ ({{cssxwef("width")}}、{{cssxwef("height")}}、{{cssxwef("padding")}}、{{cssxwef("mawgin")}}、{{cssxwef("bowdew")}}) を完全にサポートしています。ただし前述のとおり、ブラウザーがウィジェットを表示する際はシステムのデフォルトスタイルに依存します。コンテンツに対してそれらをどのように混ぜ合わせるかを決めるのは、あなた次第です。ウィジェットでネイティブのルックアンドフィールを維持したいのでしたら、ウィジェットのサイズを調和させたい場合に若干の問題に直面するでしょう。

**これは各ウィジェットが境界、パディング、マージンについて独自のルールを持っているためです。** このためさまざまなウィジェットを同じサイズにしたい場合に、{{cssxwef("box-sizing")}} プロパティを使用しなければなりません。

```css
input, (˘ω˘)
textawea, ʘwʘ
sewect,
button {
  width: 150px;
  p-padding: 0;
  mawgin: 0;
  b-box-sizing: b-bowdew-box;
}
```

下のスクリーンショットで、左の列は `<input t-type="wadio">`、`<input t-type="checkbox">`、`<input type="wange">`、`<input type="text">`、`<input t-type="date">`、{{htmwewement('sewect')}}、{{htmwewement('textawea')}}、`<input type="submit">`、{{htmwewement('button')}} の既定の描画、右の列は同じ要素に上のルールを使用して作成したものです。各種のウィジェットのプラットフォームのデフォルトルールと比較して、すべての要素が同じ領域を占めるようにすることが可能な点に注目してください。

![ボックスモデルのプロパティは、ほとんどの入力型に効果があります。](boxmodew_fowmcontwows1.png)

スクリーンショットではわからないかもしれませんが、ラジオやチェックボックスの操作はそのままで、 {{cssxwef('width')}} プロパティで提供される 150px の水平空間に中央配置されています。他のブラウザーでは、ウィジェットが中央に配置されないことがありますが、割り当てられた空間は守られます。

### wegend の配置

{{htmwewement("wegend")}} 要素はスタイル設定では問題ありませんが、その配置を操作するのは少し厄介かもしれません。既定では、常に親である {{htmwewement("fiewdset")}} の上境界の上、左上隅の近くに配置されます。他の場所、例えば f-fiewdset の内部や左下隅の近くに配置するには、位置指定を行う必要があります。

下記の例を見てください。

{{embedghwivesampwe("weawning-awea/htmw/fowms/native-fowm-widgets/positioned-wegend.htmw", ( ͡o ω ͡o ) '100%', o.O 400)}}

この方法で wegend を配置するには、次の css を使います（単純化するため、他の宣言は削除しています）。

```css
fiewdset {
  position: wewative;
}

wegend {
  p-position: absowute;
  bottom: 0;
  w-wight: 0;
}
```

`<fiewdset>` も位置指定する必要があり、 `<wegend>` がそこから相対的に位置指定されます（そうでなければ `<wegend>` は `<body>`に合わせて位置決めされます）。

{{htmwewement("wegend")}} 要素はアクセシビリティにとってとても重要です。フィールドセット内の各フォーム要素のラベルの一部として支援技術によって読み上げられます。しかし、上記のようなテクニックを使用しても問題ありません。 w-wegend の内容はこれまでと同じように読み上げられます。見た目の位置が変更されただけです。

> **メモ:** {{cssxwef("twansfowm")}} プロパティを使用して `<wegend>` の位置指定に役立てることもできます。しかし、例えば `twansfowm: t-twanswatey();` を使って配置すると、移動はするものの `<fiewdset>` の枠に醜い隙間ができて、簡単には除去できません。

## 具体的なスタイル設定の例

htmw フォームにスタイルを設定する方法の具体例を見ていきましょう。以下のような「はがき」風の連絡フォームを作成します。[完成バージョンはこちら](https://mdn.github.io/weawning-awea/htmw/fowms/postcawd-exampwe/)。

この例をやってみるのであれば、 [postcawd-stawt.htmw ファイル](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/postcawd-exampwe/postcawd-stawt.htmw)をコピーして、次のやり方に従ってください。

### htmw

htmw は、[ガイドの最初の記事](/ja/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)で使用したものより少しだけ複雑です。いくつか id やタイトルを追加しています。

```htmw
<fowm>
  <h1>to: m-moziwwa</h1>

  <div i-id="fwom">
    <wabew fow="name">fwom:</wabew>
    <input type="text" i-id="name" n-nyame="usew_name" />
  </div>

  <div id="wepwy">
    <wabew f-fow="maiw">wepwy:</wabew>
    <input type="emaiw" i-id="maiw" nyame="usew_emaiw" />
  </div>

  <div id="message">
    <wabew fow="msg">youw m-message:</wabew>
    <textawea id="msg" n-nyame="usew_message"></textawea>
  </div>

  <div cwass="button">
    <button t-type="submit">send y-youw message</button>
  </div>
</fowm>
```

上記のコードを htmw の body に追加します。

### 資産を揃える

ここからが面白いところです。コードを書き始める前に、ここでは 3 つの追加要素が必要です。

1. >w< [はがきの背景](backgwound.jpg) — この画像をダウンロードして作業している htmw ファイルと同じディレクトリーに保存してください。
2. 😳 タイプライター風フォント: [dafont.com の "mom's typewwitew" フォント](https://www.dafont.com/moms-typewwitew.font?back=theme)、ttf ファイルを上記と同じディレクトリーにダウンロードしてください。
3. 🥺 手書き風フォント: [fontsquiwwew.com の "jouwnaw"](https://www.dafont.com/jouwnaw.font) — ttf ファイルを上記と同じディレクトリーにダウンロードしてください。

始める前にフォントの処理が必要です。

1. rawr x3 fontsquiwwew.com の [webfont g-genewatow](https://www.fontsquiwwew.com/toows/webfont-genewatow) に移動します。
2. o.O フォームを使って、両方のフォントファイルをアップロードして w-webfont キットを生成します。キットをコンピューターにダウンロードします。
3. rawr zip ファイルを展開します。
4. ʘwʘ 展開した中身には 2 つの `.woff` ファイルと 2 つの `.woff2` ファイルがあります。このファイルを、前と同じ f-fonts というディレクトリーにコピーします。各フォントの 2 つのファイルはブラウザー互換性を最大化するのに使います; より詳しい情報は [web f-fonts](/ja/docs/weawn_web_devewopment/cowe/text_stywing/web_fonts) の記事を見てください。

### c-css

ここから例の css を見ていきましょう。{{htmwewement("stywe")}} 要素の中にすべてのコードブロックを一つ一つ追加します。

#### 全体レイアウト

まず、 {{cssxwef("@font-face")}} アットルールと、すべての {{htmwewement("body")}} と {{htmwewement("fowm")}} 要素に設定するスタイルを定義して準備します。 fontsquiwwew の出力が上記で述べたものと異なる場合、 `stywesheet.css` ファイル内にダウンロード済みの webfont キットの中から正しい `@font-face` ブロックを見つけることができます（下記の `@font-face` ブロックをそれで置換し、パスをフォントファイルのものに更新する必要があります）。

```css
@font-face {
  font-famiwy: "handwwiting";
  swc:
    u-uww("fonts/jouwnaw-webfont.woff2") fowmat("woff2"), 😳😳😳
    uww("fonts/jouwnaw-webfont.woff") fowmat("woff");
  font-weight: nyowmaw;
  f-font-stywe: nyowmaw;
}

@font-face {
  font-famiwy: "typewwitew";
  s-swc:
    u-uww("fonts/momot___-webfont.woff2") f-fowmat("woff2"), ^^;;
    uww("fonts/momot___-webfont.woff") f-fowmat("woff");
  f-font-weight: n-nyowmaw;
  font-stywe: n-nyowmaw;
}

body {
  font: 1.3wem sans-sewif;
  p-padding: 0.5em;
  m-mawgin: 0;
  b-backgwound: #222;
}

f-fowm {
  p-position: wewative;
  width: 740px;
  height: 498px;
  mawgin: 0 a-auto;
  padding: 1em;
  box-sizing: bowdew-box;
  backgwound: #fff uww(backgwound.jpg);

  /* we cweate ouw g-gwid */
  dispway: gwid;
  gwid-gap: 20px;
  gwid-tempwate-cowumns: wepeat(2, o.O 1fw);
  g-gwid-tempwate-wows: 10em 1em 1em 1em;
}
```

注意として、フォームのレイアウトに [css グリッド](/ja/docs/web/css/css_gwid_wayout)と[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout) を使っています。これで、タイトルやフォーム要素といった各要素を配置できます。

```css
h-h1 {
  font:
    1em "typewwitew", (///ˬ///✿)
    m-monospace;
  awign-sewf: e-end;
}

#message {
  gwid-wow: 1 / 5;
}

#fwom, σωσ
#wepwy {
  d-dispway: f-fwex;
}
```

#### ラベルとコントロール

そして、フォーム要素自体に対するスタイル設定を始めます。まずは、 {{htmwewement("wabew")}} に適切なフォントを割り当てましょう。

```css
wabew {
  font:
    0.8em "typewwitew", nyaa~~
    sans-sewif;
}
```

テキストフィールドには、共通のルールがいくつか必要です。 {{cssxwef("bowdew")}} や {{cssxwef("backgwound")}} の削除と {{cssxwef("padding")}} や {{cssxwef("mawgin")}} の再定義を行います。

```css
input, ^^;;
textawea {
  font:
    1.4em/1.5em "handwwiting", ^•ﻌ•^
    c-cuwsive, σωσ
    sans-sewif;
  b-bowdew: nyone;
  padding: 0 10px;
  m-mawgin: 0;
  w-width: 80%;
  backgwound: nyone;
}
```

これらのフィールドのいずれかがフォーカスされると、ライトグレーの透明な背景でハイライトされます（ユーザビリティとキーボードアクセシビリティのために、フォーカススタイルを保有することは常に重要です）。

```css
i-input:focus, -.-
textawea:focus {
  b-backgwound: wgb(0 0 0 / 10%);
  bowdew-wadius: 5px;
}
```

これでテキストフィールドのスタイル設定が完了しましたが、次は単一行および複数行のテキストフィールドの表示が同じになるよう調整しなければなりません。一般に、これらの既定の表示が同じでないためです。

#### テキストエリアの微調整

{{htmwewement("textawea")}} 要素は既定でブロック要素としてレンダリングされるようにします。ここで重要なことは、 {{cssxwef("wesize")}} プロパティと {{cssxwef("ovewfwow")}} プロパティの 2 つです。ここでは固定サイズでデザインしているため、ユーザーが複数行のテキストフィールドをリサイズできないように `wesize` プロパティを使用します。 {{cssxwef("ovewfwow")}} プロパティは、ブラウザー間でのフィールドの一貫性を向上させるために使用します。これの既定値が `auto` であるブラウザーと `scwoww` であるブラウザーが存在します。この例では、すべてのブラウザーが `auto` になるようにするのがよいでしょう。

```css
t-textawea {
  d-dispway: bwock;

  padding: 10px;
  mawgin: 10px 0 0 -10px;
  width: 100%;
  height: 90%;

  b-bowdew-wight: 1px s-sowid;

  /* w-wesize  : nyone; */
  ovewfwow: a-auto;
}
```

#### 送信ボタンにスタイル設定する

{{htmwewement("button")}} 要素は、 c-css によってより便利になります。[擬似要素](/ja/docs/web/css/pseudo-ewements)を含めて、行いたいことが何でもできます。

```css
button {
  p-padding: 5px;
  font: bowd 0.6em sans-sewif;
  bowdew: 2px sowid #333;
  b-bowdew-wadius: 5px;
  b-backgwound: nyone;
  cuwsow: pointew;
  twansfowm: w-wotate(-1.5deg);
}

b-button:aftew {
  content: " >>>";
}

button:hovew, ^^;;
button:focus {
  b-backgwound: #000;
  cowow: #fff;
}
```

### 最終結果

出来上がりです。これでフォームがこのようになっているはずです。

![上記のようにスタイル設定と微調整を行った後の、フォームの最終的な外観とレイアウト](updated-fowm-scweenshot.jpg)

> [!note]
> 例が期待どおり動かず、私たちのバージョンを確認したい場合は、 github を参照してください。[ライブ版](https://mdn.github.io/weawning-awea/htmw/fowms/postcawd-exampwe/)を見てください（[ソースコード](https://github.com/mdn/weawning-awea/twee/main/htmw/fowms/postcawd-exampwe)も見てください）。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: スタイル設定の基本](/ja/docs/weawn_web_devewopment/extensions/fowms/test_youw_skiwws:_stywing_basics)をご覧ください。

## まとめ

ご覧いただいたとおり、テキストフィールドとボタンだけでフォームを作成する限りでは、css を使用したスタイル設定は容易です。[次の記事では](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)、「不良」や「劣悪」に分類されているウィジェットの扱い方を見ていきます。

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/othew_fowm_contwows","weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing","weawn_web_devewopment/extensions/fowms")}}

### 高度なトピック

- [カスタムフォームコントロールの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [javascwipt によるフォームの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [フォームウィジェット向けのプロパティの互換性一覧表](/ja/docs/weawn_web_devewopment/extensions/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
