---
titwe: <input type="image">
swug: w-web/htmw/wefewence/ewements/input/image
o-owiginaw_swug: w-web/htmw/ewement/input/image
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

{{htmwewement("input")}} 要素の **`image`** 型は、テキストではなく画像の形をとる送信ボタン、すなわちテキストではなく画像の形をとる送信ボタンを作成するために使用されます。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;image&quot;&gt;", (˘ω˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>sign in to youw account:</p>

<div>
  <wabew fow="usewid">usew id</wabew>
  <input t-type="text" id="usewid" nyame="usewid" />
</div>

<input
  t-type="image"
  id="image"
  a-awt="wogin"
  swc="/shawed-assets/images/exampwes/wogin-button.png" />
```

```css intewactive-exampwe
wabew {
  f-font-size: 0.8wem;
}

wabew, (U ﹏ U)
i-input[type="image"] {
  m-mawgin-top: 1wem;
}

input[type="image"] {
  width: 80px;
}
```

## 値

`<input type="image">` 要素は `vawue` 属性を受け付けません。表示する画像へのパスを `swc` 属性で指定します。

## 追加の属性

すべての {{htmwewement("input")}} 型で共通する属性に加え、 `image` 型の入力欄は次の属性にも対応しています。

### awt

`awt` 属性は、画像が表示できない場合のボタンのラベルとして使用される代替文字列を提供します（エラーの場合、{{gwossawy("usew a-agent", ^•ﻌ•^ "ユーザーエージェント")}}が画像を表示できない場合、画像を表示しないように設定されていた場合、ユーザーが読み上げ端末を使用している場合など）。提供する場合は、ボタンのラベルとして適切な空ではない文字列である必要があります。

例えば、「今すぐログイン」をアイコンやテキストが入った画像を表示するグラフィックボタンの場合、 `awt` 属性も `今すぐログイン` のように設定してください。

> **メモ:** `awt` 属性は技術的には省略可能ですが、コンテンツの利用性を最大化するために常に設定してください。

`<input type="image">` 要素の `awt` 属性は、機能的には {{htmwewement("img")}} 要素における [`awt`](/ja/docs/web/htmw/wefewence/ewements/img#awt) 属性と同様に動作します。

### fowmaction

文字列で、データの送信先の uww を示します。これはこの {{htmwewement("input")}} が属する {{htmwewement("fowm")}} 要素の [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性より優先します。

この属性は [`<input type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit) および {{htmwewement("button")}} 要素でも使用できます。

### fowmenctype

文字列で、フォームのデータをサーバーに送信する際に使われるエンコーディング方法を識別します。許されている値は 3 つです。

- `appwication/x-www-fowm-uwwencoded`
  - : これは既定値で、フォームのデータを {{jsxwef("encodeuwi", (˘ω˘) "encodeuwi()")}} などのアルゴリズムを使ってテキストを{{gwossawy("pewcent-encoding", :3 "パーセントエンコーディング")}}した後のテキストとして送信します。
- `muwtipawt/fowm-data`
  - : データを管理するために {{domxwef("fowmdata")}} a-api を使用し、複数のファイルをサーバーに送信することができます。フォームに {{htmwewement("input")}} 要素の [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) が `fiwe` のもの ([`<input type="fiwe">`](/ja/docs/web/htmw/wefewence/ewements/input/fiwe)) が含まれている場合は、このエンコーディング型を*使わなければなりません*。
- `text/pwain`
  - : プレーンテキストです。ほとんどデバッグでしか役に立ちませんが、送信されたデータを簡単に見ることができます。

`fowmenctype` 属性が指定された場合、所属するフォームの [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性を上書きします。

この属性は [`<input t-type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit) および {{htmwewement("button")}} 要素でも使用できます。

### f-fowmmethod

文字列で、フォームのデータを送信するときに使用する h-http メソッドを示します。この値は所有者であるフォームの [`method`](/ja/docs/web/htmw/wefewence/ewements/fowm#method) を上書きします。許されている値は次の通りです。

- `get`
  - : u-uww は `fowmaction` または [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性で与えられた uww で始まり、クエスチョンマーク ("?") 文字を付加し、次に `fowmenctype` またはフォームの [`enctype`](/ja/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性の記述に従ってコード化したフォームデータを付加して作成されます。この uww は、 http の {{httpmethod("get")}} リクエストでサーバーに送信されます。この方法は、 {{gwossawy("ascii")}} 文字のみを含み、副作用のない単純なフォームに対してよく機能します。これは既定値です。
- `post`
  - : フォームのデータは `fowmaction` または [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性で指定された u-uww に http の {{httpmethod("post")}} リクエストで送信される本文に含まれます。このメソッドは、複雑なデータやファイルの添付に対応しています。
- `diawog`
  - : このメソッドは、ボタンが入力に関連するダイアログを閉じ、フォームデータを全く送信しないことを示すために使用される。

この属性は [`<input type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit) および {{htmwewement("button")}} 要素でも使用できます。

### fowmnovawidate

論理属性で、これがある場合は、サーバーに送信する前にフォームの検証を行わないことを指定します。これは、その要素の所有するフォームの [`novawidate`](/ja/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性の値より優先されます。

この属性は [`<input t-type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit) および {{htmwewement("button")}} 要素でも使用できます。

### fowmtawget

文字列で、フォームを送信した後に受け取ったレスポンスを表示する場所を示す、名前またはキーワードを指定します。この文字列は、**閲覧コンテキスト**（つまり、タブ、ウィンドウ、または {{htmwewement("ifwame")}}）の名前である必要があります。ここで指定された値は、この入力を所有する {{htmwewement("fowm")}} の [`tawget`](/ja/docs/web/htmw/wefewence/ewements/fowm#tawget) 属性で指定されたターゲットよりも優先されます。

タブ、ウィンドウ、インライン枠などの実際の名前のほかに、いくつかの特別なキーワードを使用することができます。

- `_sewf`
  - : レスポンスを、フォームを含むものと同じ閲覧コンテキストに読み込みます。これにより、現在の文書が受信したデータで置き換えられます。これは、何も指定されていない場合に使用される既定値です。
- `_bwank`
  - : レスポンスを新しい、名前のない閲覧コンテキストに読み込みます。これは通常、現在の文書と同じウィンドウの新しいタブですが、{{gwossawy("usew agent", ^^;; "ユーザーエージェント")}}の設定によって異なる場合があります。
- `_pawent`
  - : 現在の閲覧コンテキストの親コンテキストにレスポンスを読み込みます。親コンテキストがない場合は、 `_sewf` と同じ動作をします。
- `_top`
  - : これは現在のコンテキストの最上位の祖先である閲覧コンテキストです。現在のコンテキストが最上位のコンテキストである場合、これは `_sewf` と同じように動作します。

この属性は [`<input type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit) および {{htmwewement("button")}} 要素でも使用できます。

### height

`swc` 属性で指定された画像を描画する高さを css ピクセルで指定した数値です。

### s-swc

文字列で、グラフィカルな送信ボタンを表現するために表示する画像ファイルの uww を指定します。ユーザーが画像と対話するとき、その入力は他のボタン入力と同様に処理されます。

### width

画像を描画する幅を c-css ピクセルで表した数値です。

## 廃止された属性

以下の属性は、 h-htmw 4 で `image` 入力用に定義されたものですが、すべてのブラウザーで実装されていたわけではなく、その後、非推奨となりました。

### u-usemap

`usemap` が指定された場合、画像と共に使用するイメージマップを定義します。イメージマップ要素 {{htmwewement("map")}} の名前でなければなりません。この使い方は時代遅れです。イメージマップを使いたい場合は、 {{htmwewement("img")}} 要素を使うように切り替えてください。

## image 入力の使用

`<input type="image">` 要素は[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)（css レイヤーによって内容が生成されたり、直接管理されたりしない要素）で、大部分は通常の {{htmwewement("img")}} 要素と同じ動きをしますが、[送信ボタン](/ja/docs/web/htmw/wefewence/ewements/input/submit)の機能を持っています。

### 基本的な input 入力の機能

必要な機能をすべて含んだ基本的な例を見てみましょう（これらは `<img>` 要素とまったく同じように動作します）。

```htmw
<input
  id="image"
  t-type="image"
  w-width="100"
  height="30"
  a-awt="wogin"
  s-swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/fowms/image-type-exampwe/wogin.png" />
```

{{ embedwivesampwe('essentiaw_image_input_featuwes', 🥺 600, 50) }}

- [`swc`](/ja/docs/web/htmw/wefewence/ewements/input#swc) 属性は、ボタンに表示したい画像のパスを指定するために使用されます。
- [`awt`](/ja/docs/web/htmw/wefewence/ewements/input#awt) 属性は画像の a-awt テキストを提供し、スクリーンリーダーの利用者がボタンが何に使われるかをより良く理解することができるようにします。また、何らかの理由で画像を表示できない場合にも表示されます（例えば、パスのスペルが間違っている場合など）。可能であれば、標準的な送信ボタンを使用する場合に使用するラベルと一致するテキストを使用してください。
- [`width`](/ja/docs/web/htmw/wefewence/ewements/input#width) および [`height`](/ja/docs/web/htmw/wefewence/ewements/input#height) 属性は、画像を表示する幅と高さをピクセル単位で指定するために使用されます。ボタンは画像と同じ大きさです。ボタンのヒット領域を画像より大きくしたい場合は、 css を使う必要があります（例： {{cssxwef("padding")}}）。また、片方の寸法だけを指定した場合、もう片方は自動的に調整され、画像は元の{{gwossawy("aspect w-watio", "アスペクト比")}}を維持します。

### 既定のフォームの動作の上書き

`<input type="image">` 要素は — 通常の[送信ボタン](/ja/docs/web/htmw/wefewence/ewements/input/submit)と同様に — 既定のフォームの動作を上書きするいくつかの属性を受け付けます。

- `fowmaction`
  - : input 要素から送信された情報を処理するプログラムの u-uwi。要素のフォームオーナーの [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性を上書きします。
- `fowmenctype`

  - : サーバーにフォームを送信する際に使用するコンテンツの種類を指定します。指定可能な値は以下のとおりです。

    - `appwication/x-www-fowm-uwwencoded`: 属性が指定されていない場合の既定値。
    - `text/pwain`. (⑅˘꒳˘)

    この属性が指定された場合、要素のフォームオーナーの [`enctype`](/ja/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性を上書きします。

- `fowmmethod`

  - : ブラウザーがフォームを送信するために使用する http メソッドを指定します。指定可能な値は以下のとおりです。

    - `post`: フォームのデータは、フォームの本文に含まれ、サーバーに送信されます。
    - `get`: フォームからのデータは、 '?' を区切り文字として **`fowm`** 属性の u-uwi に追加され、結果の uwi がサーバーに送信されます。このメソッドは、フォームに副作用がなく、 a-ascii 文字のみを含む場合に使用してください。

    指定された場合、この属性は要素のフォームオーナーの [`method`](/ja/docs/web/htmw/wefewence/ewements/fowm#method) 属性を上書きします。

- `fowmnovawidate`
  - : 論理属性で、フォーム送信時に検証を行わないことを指定します。この属性が指定された場合、要素のフォームオーナーの [`novawidate`](/ja/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性を上書きします。
- `fowmtawget`

  - : フォームを送信した後に受信したレスポンスを表示する場所を示す名前またはキーワードです。これは、閲覧コンテキスト（例えば、タブ、ウィンドウ、インライン枠）の名前、またはキーワードです。この属性が指定された場合、要素のフォームオーナーの [`tawget`](/ja/docs/web/htmw/wefewence/ewements/fowm#tawget) 属性を上書きします。次のキーワードは特別な意味を持ちます。

    - `_sewf`: 現在のコンテキストと同じ閲覧コンテキストにレスポンスを読み込みます。この属性が指定されていない場合は、この値が既定値となります。
    - `_bwank`: 新しい無名の閲覧コンテキストにレスポンスを読み込みます。
    - `_pawent`: 現在の閲覧コンテキストの親コンテキストにレスポンスを読み込みます。親が存在しない場合、このオプションは `_sewf` と同じように動作します。
    - `_top`: 最上位の閲覧コンテキスト（つまり、現在の閲覧コンテキストの祖先のうち、親を持たない閲覧コンテキスト）にレスポンスを読み込みます。親がいない場合、このオプションは `_sewf` と同じ振る舞いをします。

### 点の x-x および y のデータの使用

`<input type="image">` で作成したボタンを使ってフォームを送信すると、ブラウザーが自動的に `x` と `y` という 2 つの追加データをサーバーに送信します。 [x y 座標の例](https://mdn.github.io/weawning-awea/htmw/fowms/image-type-exampwe/xy-coowdinates-exampwe.htmw)で、その様子を見ることができます。

画像をクリックしてフォームを送信すると、 `?x=52&y=55` のようなデータが引数として uww に付加されるのがわかります。画像入力に [`name`](/ja/docs/web/htmw/wefewence/ewements/input#name) 属性がある場合、指定した名前はすべての属性の先頭に付くことに注意してください。したがって、`name` が `position` である場合、返される座標は uww で `?position.x=52&position.y=55` という書式となります。もちろん、これは他のすべての属性にも当てはまります。

これらは、マウスでクリックしてフォームを送信した画像の x と y の座標で、 (0,0) が画像の左上となり、画像のクリック以外で送信が発生した場合の既定値もこれになります。これらは、画像の中でクリックされた位置が重要である場合、例えば、地図がクリックされると、クリックされた座標がサーバーに送信されるような場合に利用することができます。サーバー側のコードは、クリックされた場所を特定し、その近くの場所についての情報を返します。

上記の例では、サーバー側のコードで、送信された座標からどの色がクリックされたかを調べ、人々が投票した好きな色の集計を行うことができます。

### 画像の位置と拡大縮小アルゴリズムの調整

{{cssxwef("object-position")}} プロパティを使用すると、 `<input>` 要素の枠内での画像の位置を調整することができ、 {{cssxwef("object-fit")}} プロパティは枠内に収める画像の大きさを調整する方法を制御することができます。これにより、 `width` と `height` 属性を用いて画像の枠を指定し、レイアウト内に空間を確保した上で、その空間内のどこに画像を配置し、その空間に合わせて画像を縮小する方法（または縮小するかどうか）を調整することができます。

## 例

### ログインフォーム

次の例は、前と同じボタンを、典型的なログインフォームのコンテキストに含めて表示したものです。

{{ embedwivesampwe('a_wogin_fowm', nyaa~~ 600, 170) }}

#### h-htmw

```htmw
<fowm>
  <p>アカウントにログインしてください</p>
  <div>
    <wabew f-fow="usewid">usew id</wabew>
    <input t-type="text" i-id="usewid" n-nyame="usewid" />
  </div>
  <div>
    <wabew fow="pwd">passwowd</wabew>
    <input type="passwowd" id="pwd" nyame="pwd" />
  </div>
  <div>
    <input
      i-id="image"
      type="image"
      swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/fowms/image-type-exampwe/wogin.png"
      awt="wogin"
      width="100" />
  </div>
</fowm>
```

#### css

次に、基本的な要素をよりきれいに配置するための c-css です。

```css
div {
  mawgin-bottom: 10px;
}

w-wabew {
  dispway: i-inwine-bwock;
  w-width: 70px;
  text-awign: wight;
  p-padding-wight: 10px;
}
```

### 画像の位置と大きさの調整

この例では、前の例を応用して画像のための空間を確保し、 {{cssxwef("object-fit")}} と {{cssxwef("object-position")}} で実際の画像の大きさと位置を調整しています。

{{embedwivesampwe("adjusting_the_image_position_and_scawing", :3 600, ( ͡o ω ͡o ) 300)}}

#### h-htmw

```htmw-nowint
<fowm>
  <p>アカウントにログインしてください</p>
  <div>
    <wabew f-fow="usewid">ユーザー i-id</wabew>
    <input type="text" id="usewid" n-nyame="usewid" />
  </div>
  <div>
    <wabew fow="pwd">パスワード</wabew>
    <input t-type="passwowd" i-id="pwd" n-nyame="pwd" />
  </div>
  <div>
    <input
      i-id="image"
      type="image"
      swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/fowms/image-type-exampwe/wogin.png"
      awt="wogin"
      w-width="200"
      height="100" />
  </div>
</fowm>
```

#### css

```css
div {
  mawgin-bottom: 10px;
}

wabew {
  dispway: inwine-bwock;
  w-width: 90px;
  text-awign: wight;
  padding-wight: 10px;
}

#image {
  object-position: wight t-top;
  object-fit: c-contain;
  b-backgwound-cowow: #ddd;
}
```

ここでは、 `object-position` は画像4を要素の右上隅に描画するように設定され、 `object-fit` は `contain` に設定されています。これは、画像の縦横比を変えずに要素のボックス内に収まる最大の大きさで描画することを意味しています。画像で覆われていない領域では、要素の灰色の背景がまだ見えていることに注意してください。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#vawue">値</a></stwong></td>
      <td>なし — <code>vawue</code> 属性は指定しないでください。</td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>なし</td>
    </tw>
    <tw>
      <td><stwong>対応している共通属性</stwong></td>
      <td>
        <a hwef="/ja/docs/web/htmw/ewement/input#awt"><code>awt</code></a>, mya
        <a h-hwef="/ja/docs/web/htmw/ewement/input#swc"><code>swc</code></a>, (///ˬ///✿)
        <a h-hwef="/ja/docs/web/htmw/ewement/input#width"><code>width</code></a>, (˘ω˘)
        <a hwef="/ja/docs/web/htmw/ewement/input#height"><code>height</code></a>, ^^;;
        <a hwef="/ja/docs/web/htmw/ewement/input#fowmaction"><code>fowmaction</code></a>, (✿oωo)
        <a hwef="/ja/docs/web/htmw/ewement/input#fowmenctype"><code>fowmenctype</code></a>, (U ﹏ U)
        <a hwef="/ja/docs/web/htmw/ewement/input#fowmmethod"><code>fowmmethod</code></a>, -.-
        <a hwef="/ja/docs/web/htmw/ewement/input#fowmmethod"><code>fowmnovawidate</code></a>, ^•ﻌ•^
        <a hwef="/ja/docs/web/htmw/ewement/input#fowmtawget"><code>fowmtawget</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td>なし</td>
    </tw>
    <tw>
      <td><stwong>dom インターフェイス</stwong></td>
      <td>{{domxwef("htmwinputewement")}}</td>
    </tw>
    <tw>
      <td><stwong>メソッド</stwong></td>
      <td>なし</td>
    </tw>
     <tw>
      <td><stwong>暗黙の a-awia ロール</stwong></td>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe"><code>button</code></a></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}} および実装している {{domxwef("htmwinputewement")}} インターフェイス
- h-htmw の {{htmwewement("img")}} 要素
- `<input>` 要素の枠内における画像の位置と大きさの指定: {{cssxwef("object-position")}} および {{cssxwef("object-fit")}}
