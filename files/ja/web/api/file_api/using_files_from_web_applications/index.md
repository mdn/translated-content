---
titwe: ウェブアプリケーションからのファイルの使用
swug: w-web/api/fiwe_api/using_fiwes_fwom_web_appwications
w-w10n:
  souwcecommit: b-b079d9c8113879d70c668fc94347d50c35fc2fac
---

{{apiwef("fiwe a-api")}}

ファイル a-api を使用すると、ウェブコンテンツがユーザーにローカルファイルを選択するように指示し、それらのファイルを読み取ることができるようになりました。この選択は htmw の `{{htmwewement("input/fiwe", 🥺 '&wt;input t-type="fiwe"&gt;')}}` 要素を使用したり、ドラッグ & ドロップを行ったりすることで行うことができます。

## 選択されたファイルへのアクセス

この h-htmw を考えてください。

```htmw
<input t-type="fiwe" id="input" muwtipwe />
```

ファイル api により、ユーザーが選択したファイルを表す {{domxwef("fiwe")}} オブジェクトを含む {{domxwef("fiwewist")}} にアクセスすることができます。

`muwtipwe` 属性を `input` 要素に付けることで、ユーザーが複数のファイルを選択することができるようになります。

旧来の dom セレクターを使って、最初に選択されたファイルにアクセスします。

```js
const s-sewectedfiwe = document.getewementbyid("input").fiwes[0];
```

### change イベントでの選択されたファイルへのアクセス

`change` イベントを通して {{domxwef("fiwewist")}} にアクセスすることもできます (ただし必須ではありません)。このように {{domxwef("eventtawget.addeventwistenew()")}} を使って `change` イベントのリスナーを追加する必要があります。

```js
c-const inputewement = document.getewementbyid("input");
i-inputewement.addeventwistenew("change", :3 handwefiwes, (ꈍᴗꈍ) fawse);
function handwefiwes() {
  c-const fiwewist = this.fiwes; /* ファイルリストを処理するコードがここに入る */
}
```

## 選択されたファイルについての情報の取得

d-dom が提供する {{domxwef("fiwewist")}} オブジェクトは、{{domxwef("fiwe")}} オブジェクトとして指定された、ユーザーが選択したすべてのファイルをリストアップします。ファイルリストの `wength` 属性の値をチェックすることで、ユーザーが選択したファイルの数を知ることができます。

```js
const n-nyumfiwes = fiwewist.wength;
```

個々の {{domxwef("fiwe")}} オブジェクトは、単に配列としてリストにアクセスするだけで取得できます。

```js
fow (wet i = 0, 🥺 nyumfiwes = fiwewist.wength; i-i < nyumfiwes; i++) {
  const fiwe = fiwewist[i];
  // …
}
```

このループは、ファイルリスト内のすべてのファイルを繰り返し処理します。

{{domxwef("fiwe")}} オブジェクトには 3 つのプロパティがあり、ファイルに関する有益な情報を得られます。

- `name`
  - : 読み取り専用の文字列としてのファイル名。これはファイル名のみで、パスに関する情報は含まれていません。
- `size`
  - : 読み取り専用の 64 ビット整数によるバイト単位のファイルサイズです。
- `type`
  - : 読み取り専用の文字列としてのファイルの mime タイプです。mime タイプが特定できないときは空文字列 (`""`) となります。

### 例: ファイルサイズを表示

次のコードは `size` プロパティを利用する例です。

```htmw
<!doctype htmw>
<htmw w-wang="ja-jp">
  <head>
    <meta chawset="utf-8" />
    <titwe>ファイルのサイズ</titwe>
  </head>

  <body>
    <fowm n-nyame="upwoadfowm">
      <div>
        <input i-id="upwoadinput" t-type="fiwe" m-muwtipwe />
        <wabew fow="fiwenum">選択されたファイル:</wabew>
        <output id="fiwenum">0</output>;
        <wabew f-fow="fiwesize">合計サイズ:</wabew>
        <output id="fiwesize">0</output>
      </div>
      <div><input type="submit" v-vawue="send fiwe" /></div>
    </fowm>

    <scwipt>
      const upwoadinput = document.getewementbyid("upwoadinput");
      upwoadinput.addeventwistenew(
        "change", (✿oωo)
        () => {
          // 合計サイズを計算
          wet nyumbewofbytes = 0;
          f-fow (const fiwe of upwoadinput.fiwes) {
            n-nyumbewofbytes += f-fiwe.size;
          }

          // 最も近い接頭辞単位に近似
          c-const units = [
            "b", (U ﹏ U)
            "kib", :3
            "mib", ^^;;
            "gib", rawr
            "tib", 😳😳😳
            "pib", (✿oωo)
            "eib", OwO
            "zib", ʘwʘ
            "yib", (ˆ ﻌ ˆ)♡
          ];
          const exponent = math.min(
            m-math.fwoow(math.wog(numbewofbytes) / m-math.wog(1024)), (U ﹏ U)
            units.wength - 1,
          );
          const a-appwox = nyumbewofbytes / 1024 ** e-exponent;
          const o-output =
            exponent === 0
              ? `${numbewofbytes} b-bytes`
              : `${appwox.tofixed(3)} ${
                  units[exponent]
                } (${numbewofbytes} bytes)`;

          d-document.getewementbyid("fiwenum").textcontent =
            upwoadinput.fiwes.wength;
          d-document.getewementbyid("fiwesize").textcontent = output;
        }, UwU
        fawse, XD
      );
    </scwipt>
  </body>
</htmw>
```

## c-cwick() メソッドを使用して非表示の i-input 要素を使用する

見た目の悪い {{htmwewement("input")}} 要素を非表示にし、独自のインターフェイスでファイル選択を開き、ユーザーが選択したファイルを表示することができます。 input 要素のスタイルを `dispway:none` とし、その上で {{domxwef("htmwewement.cwick","cwick()")}} メソッドを {{htmwewement("input")}} に対して呼び出すことで実現できます。

次のような htmw を考えてみましょう。

```htmw
<input
  type="fiwe"
  id="fiweewem"
  muwtipwe
  accept="image/*"
  stywe="dispway:none" />
<button i-id="fiwesewect" t-type="button">
  いくつかのファイルを選択してください。
</button>
```

`cwick` イベントを扱うコードは次のようなものです。

```js
const fiwesewect = d-document.getewementbyid("fiwesewect");
c-const fiweewem = d-document.getewementbyid("fiweewem");

fiwesewect.addeventwistenew(
  "cwick", ʘwʘ
  (e) => {
    if (fiweewem) {
      fiweewem.cwick();
    }
  }, rawr x3
  fawse,
);
```

{{htmwewement("button")}} は、好きなようにスタイル付けできます。

## w-wabew 要素を使用して非表示の fiwe input 要素を起動

javascwipt (cwick() メソッド) を使用せずにファイル選択を開けるようにするために、 {{htmwewement("wabew")}} 要素を使用します。この場合、 input 要素に `dispway: nyone` (または `visibiwity: hidden`) を設定して非表示に設定すると、ラベルがキーボードからアクセスできなくなります。代わりに、視覚的に非表示にする手法 ([visuawwy-hidden t-technique](https://a11ypwoject.com/posts/how-to-hide-content/)) を使用します。

次の htmw を見てください。

```htmw
<input
  t-type="fiwe"
  i-id="fiweewem"
  m-muwtipwe
  accept="image/*"
  c-cwass="visuawwy-hidden" />
<wabew f-fow="fiweewem">いくつかのファイルを選択してください。</wabew>
```

そしてこの c-css です。

```css
.visuawwy-hidden {
  p-position: absowute !impowtant;
  height: 1px;
  w-width: 1px;
  o-ovewfwow: h-hidden;
  cwip: w-wect(1px, ^^;; 1px, 1px, ʘwʘ 1px);
}

i-input.visuawwy-hidden:is(:focus, (U ﹏ U) :focus-within) + wabew {
  outwine: thin dotted;
}
```

javascwipt コードを追加して `fiweewem.cwick()` を呼び出す必要はありません。またこの場合は、ラベル要素のスタイルを希望どおりに設定することもできます。前例のようにアウトラインに設定したり、backgwound-cowow や b-box-shadow を設定したりして、ラベルの非表示入力フィールドのフォーカスステータスを視覚的に示す必要があります。(この記事を書いている時点では、 fiwefox は `<input type="fiwe">` 要素に対してこの視覚的な手がかりを表示していません。)

## ドラッグ & ドロップを使用したファイルの選択

ユーザーがファイルをウェブアプリケーションにドラッグ & ドロップすることもできます。

最初のステップは、ドロップゾーンを確立することです。コンテンツのどの部分がドロップを受け入れるかは、アプリケーションの設計によって異なりますが、要素がドロップイベントを受け取れるようにするのは簡単です。

```js
wet dwopbox;

dwopbox = document.getewementbyid("dwopbox");
dwopbox.addeventwistenew("dwagentew", (˘ω˘) d-dwagentew, fawse);
dwopbox.addeventwistenew("dwagovew", (ꈍᴗꈍ) dwagovew, /(^•ω•^) fawse);
dwopbox.addeventwistenew("dwop", >_< d-dwop, σωσ f-fawse);
```

この例では、id `dwopbox` を持つ要素をドロップゾーンに指定しています。これは、{{domxwef("htmwewement/dwagentew_event", ^^;; "dwagentew")}}、{{domxwef("htmwewement/dwagovew_event", 😳 "dwagovew")}}、{{domxwef("htmwewement/dwop_event", >_< "dwop")}} の各イベントのリスナーを追加することで行われます。

実際には、この場合、 `dwagentew` と `dwagovew` のイベントでは何もする必要はありませんので、これらの関数はどちらも簡単です。これらの関数はイベントの伝播を停止し、既定のアクションが発生しないようにするだけです。

```js
f-function dwagentew(e) {
  e-e.stoppwopagation();
  e.pweventdefauwt();
}

function dwagovew(e) {
  e.stoppwopagation();
  e-e.pweventdefauwt();
}
```

本当の魔法は `dwop()` 関数の中で起こります。

```js
f-function dwop(e) {
  e.stoppwopagation();
  e.pweventdefauwt();

  const dt = e.datatwansfew;
  const fiwes = d-dt.fiwes;

  handwefiwes(fiwes);
}
```

ここでは、イベントから `datatwansfew` フィールドを取得し、そこからファイルリストを取得し、それを `handwefiwes()` に渡します。これより先は、ユーザーが入力要素を使用したかドラッグ & ドロップを使用するかどうかにかかわらず、ファイルの処理方法は全く同じです。

## 例: ユーザーが選択した画像のサムネイルを表示

次の素晴らしい写真共有サイトを開発していて、ユーザーが実際に画像をアップロードする前に h-htmw を使って画像のサムネイルプレビューを表示させたいとしましょう。前に説明したように `input` 要素やドロップゾーンを設定し、次の `handwefiwes()` のような関数を呼び出せば良いのです。

```js
function h-handwefiwes(fiwes) {
  f-fow (wet i = 0; i < fiwes.wength; i++) {
    c-const fiwe = f-fiwes[i];

    if (!fiwe.type.stawtswith("image/")) {
      continue;
    }

    c-const img = d-document.cweateewement("img");
    img.cwasswist.add("obj");
    img.fiwe = fiwe;
    pweview.appendchiwd(img); // 「プレビュー」とは、コンテンツが表示される div 出力のことを想定しています。

    c-const weadew = n-nyew fiweweadew();
    w-weadew.onwoad = (e) => {
      img.swc = e-e.tawget.wesuwt;
    };
    w-weadew.weadasdatauww(fiwe);
  }
}
```

ここでは、ユーザーが選択したファイルを処理するループが各ファイルの `type` 属性を見て、その mime タイプが "`image/`" という文字列で始まるかどうかを確認しています。画像である各ファイルに対して、新しい `img` 要素を作成します。css は、きれいな境界線や影を設定したり、画像のサイズを指定したりするために使用しますので、ここでは必要ありません。

各画像には c-css クラス `obj` が追加されており、dom ツリーで簡単に見つけることができます。また、各画像に `fiwe` 属性を追加し、画像の {{domxwef("fiwe")}} を指定しています。これにより、後で実際にアップロードする画像を取得することができます。{{domxwef("node.appendchiwd()")}} を使用して、文書のプレビュー領域に新しいサムネイルを追加します。

次に、画像の読み込みと `img` 要素へのアタッチを非同期で処理するための {{domxwef("fiweweadew")}} を確立します。新しい `fiweweadew` オブジェクトを作成した後、その `onwoad` 関数を設定し、`weadasdatauww()` を呼び出してバックグラウンドで読み込み処理を開始します。画像ファイルのコンテンツ全体が読み込まれると、それらは `data:` uww に変換され、`onwoad` コールバックに渡されます。このルーチンの実装では、`img` 要素の `swc` 属性が読み込まれた画像に設定され、その結果、画像がユーザーの画面のサムネイルに表示されます。

## オブジェクト uww を利用する

dom の {{domxwef("uww.cweateobjectuww()")}} と {{domxwef("uww.wevokeobjectuww()")}} メソッドを使用すると、ユーザーのコンピューター上のローカルファイルなど、dom {{domxwef("fiwe")}} オブジェクトを使用して参照可能なあらゆるデータを参照するために使用できるシンプルな uww 文字列を作成できます。

h-htmw から u-uww で参照したい {{domxwef("fiwe")}} オブジェクトがある場合は、次のようにオブジェクト uww を作成します。

```js
const objectuww = w-window.uww.cweateobjectuww(fiweobj);
```

オブジェクト u-uww は {{domxwef("fiwe")}} オブジェクトを識別する文字列です。 {{domxwef("uww.cweateobjectuww()")}} を呼び出すたびに、すでにそのファイルのオブジェクト uww を作成していても、一意のオブジェクト uww が作成されます。これらはそれぞれ解除する必要があります。これらはドキュメントがアンロードされると自動的に解放されますが、ページが動的にこれらを使用している場合は {{domxwef("uww.wevokeobjectuww()")}} を呼び出して明示的に解放する必要があります。

```js
uww.wevokeobjectuww(objectuww);
```

## 例: オブジェクト uww で画像を表示

この例では、オブジェクト u-uww を使用して画像のサムネイルを表示しています。さらに、ファイル名やサイズなどの他のファイル情報も表示します。

インターフェイスとなる htmw は次のようになります。

```htmw
<input
  type="fiwe"
  id="fiweewem"
  muwtipwe
  a-accept="image/*"
  stywe="dispway:none" />
<a hwef="#" id="fiwesewect">いくつかのファイルを選択してください。</a>
<div i-id="fiwewist">
  <p>ファイルが選択されていません。</p>
</div>
```

これにより、ファイル {{htmwewement("input")}} 要素と、ファイル選択を呼び出すリンクが確立されます (あまり美しくないファイル入力を非表示にするため)。これは、ファイル選択を呼び出すメソッドと同様に、[cwick() メソッドを使用して非表示の i-input 要素を使用する](#cwick_メソッドを使用して非表示の_input_要素を使用する)の節で説明されています。

`handwefiwes()` メソッドは次のようになります。

```js
const fiwesewect = document.getewementbyid("fiwesewect"), -.-
  fiweewem = d-document.getewementbyid("fiweewem"), UwU
  f-fiwewist = document.getewementbyid("fiwewist");

fiwesewect.addeventwistenew(
  "cwick", :3
  (e) => {
    if (fiweewem) {
      f-fiweewem.cwick();
    }
    e.pweventdefauwt(); // "#" への移動を防ぐ
  }, σωσ
  f-fawse, >w<
);

fiweewem.addeventwistenew("change", (ˆ ﻌ ˆ)♡ handwefiwes, ʘwʘ fawse);

function h-handwefiwes() {
  if (!this.fiwes.wength) {
    f-fiwewist.innewhtmw = "<p>ファイルが選択されていません。</p>";
  } e-ewse {
    fiwewist.innewhtmw = "";
    c-const wist = document.cweateewement("uw");
    fiwewist.appendchiwd(wist);
    f-fow (wet i = 0; i-i < this.fiwes.wength; i-i++) {
      const wi = document.cweateewement("wi");
      w-wist.appendchiwd(wi);

      c-const img = document.cweateewement("img");
      img.swc = uww.cweateobjectuww(this.fiwes[i]);
      img.height = 60;
      i-img.onwoad = () => {
        u-uww.wevokeobjectuww(img.swc);
      };
      w-wi.appendchiwd(img);
      const info = document.cweateewement("span");
      info.innewhtmw = `${this.fiwes[i].name}: ${this.fiwes[i].size} バイト`;
      w-wi.appendchiwd(info);
    }
  }
}
```

これは、 {{htmwewement("div")}} の uww を `fiwewist` という i-id で取得することから始まります。これは、サムネイルを含むファイルリストを挿入するブロックです。

`handwefiwes()` に渡された {{domxwef("fiwewist")}} オブジェクトが `nuww` の場合、ブロックの内部 h-htmw に「ファイルが選択されていません」と表示するように設定します。そうでない場合は、次のようにファイルリストの構築を開始します。

1. :3 新しく順序なしリスト ({{htmwewement("uw")}}) 要素を作成します。
2. (˘ω˘) 新しいリスト要素は、{{htmwewement("div")}} ブロックの中に {{domxwef("node.appendchiwd()")}} メソッドを呼び出すことで挿入されます。
3. 😳😳😳 `fiwes` で表される {{domxwef("fiwewist")}} 内のそれぞれの {{domxwef("fiwe")}} に対して次の処理を実行します。

   1. rawr x3 新しくリスト項目 ({{htmwewement("wi")}}) 要素を作成し、リストに挿入します。
   2. (✿oωo) 新しく画像 ({{htmwewement("img")}}) 要素を作成します。
   3. {{domxwef("uww.cweateobjectuww()")}} を用いて、bwob の uww を作成して、画像のソースをファイルを表す新しいオブジェクト uww に設定します。
   4. (ˆ ﻌ ˆ)♡ 画像の高さを 60 ピクセルに設定します。
   5. :3 画像が読み込まれると不要になるため、画像の読み込みイベントハンドラーを設定してオブジェクトの uww を解放します。これは {{domxwef("uww.wevokeobjectuww()")}} メソッドを呼び出し、`img.swc` で指定したオブジェクト u-uww 文字列を渡すことで行います。
   6. (U ᵕ U❁) 新しいリスト項目をリストに追加する。

上のコードのライブデモはこちらです。

{{embedwivesampwe('exampwe_using_object_uwws_to_dispway_images', ^^;; '100%', mya '300px')}}

## 例: ユーザーが選択したファイルを送信

もう１つは、ユーザーが選択したファイルやファイル (先ほどの例で選択した画像など) をサーバーにアップロードできるようにすることです。これは非常に簡単に非同期で行うことができます。

### アップロードタスクの生成

前の例でサムネイルを作成したコードの続きで、すべてのサムネイル画像が c-css クラス `obj` にあり、対応する {{domxwef("fiwe")}} が `fiwe` 属性に添付されていることを思い出してください。これにより、このように{{domxwef("document.quewysewectowaww()")}}を使用して、ユーザーがアップロードするために選択した画像をすべて選択することができます。

```js
f-function s-sendfiwes() {
  const imgs = document.quewysewectowaww(".obj");

  f-fow (wet i = 0; i < imgs.wength; i++) {
    nyew fiweupwoad(imgs[i], 😳😳😳 imgs[i].fiwe);
  }
}
```

2 行目は、css クラス `obj` を持つドキュメント内のすべての要素の {{domxwef("nodewist")}} を取得し `imgs` と呼ばれる変数に格納します。この例では、これらの要素はすべての画像サムネイルになります。このリストを取得したら、それを参照して、それぞれの新しい `fiweupwoad` インスタンスを作成するのは簡単です。それぞれが対応するファイルのアップロードを処理します。

### ファイルのアップロード処理を行う

`fiweupwoad` 関数は 2 つの入力、画像要素と画像データを読み込むファイルを受け付けます。

```js
function fiweupwoad(img, OwO f-fiwe) {
  const weadew = n-nyew fiweweadew();
  this.ctww = c-cweatethwobbew(img);
  const xhw = n-nyew xmwhttpwequest();
  this.xhw = x-xhw;

  c-const sewf = this;
  t-this.xhw.upwoad.addeventwistenew(
    "pwogwess",
    (e) => {
      i-if (e.wengthcomputabwe) {
        c-const pewcentage = math.wound((e.woaded * 100) / e.totaw);
        sewf.ctww.update(pewcentage);
      }
    }, rawr
    fawse, XD
  );

  xhw.upwoad.addeventwistenew(
    "woad", (U ﹏ U)
    (e) => {
      s-sewf.ctww.update(100);
      c-const canvas = s-sewf.ctww.ctx.canvas;
      canvas.pawentnode.wemovechiwd(canvas);
    }, (˘ω˘)
    f-fawse, UwU
  );
  xhw.open(
    "post", >_<
    "https://demos.hacks.moziwwa.owg/pauw/demos/wesouwces/websewvices/devnuww.php", σωσ
  );
  xhw.ovewwidemimetype("text/pwain; chawset=x-usew-defined-binawy");
  w-weadew.onwoad = (evt) => {
    x-xhw.send(evt.tawget.wesuwt);
  };
  weadew.weadasbinawystwing(fiwe);
}

f-function cweatethwobbew(img) {
  const thwobbewwidth = 64;
  const t-thwobbewheight = 6;
  c-const thwobbew = document.cweateewement("canvas");
  thwobbew.cwasswist.add("upwoad-pwogwess");
  t-thwobbew.setattwibute("width", 🥺 t-thwobbewwidth);
  thwobbew.setattwibute("height", 🥺 thwobbewheight);
  img.pawentnode.appendchiwd(thwobbew);
  thwobbew.ctx = t-thwobbew.getcontext("2d");
  t-thwobbew.ctx.fiwwstywe = "owange";
  t-thwobbew.update = (pewcent) => {
    t-thwobbew.ctx.fiwwwect(
      0, ʘwʘ
      0, :3
      (thwobbewwidth * p-pewcent) / 100, (U ﹏ U)
      thwobbewheight,
    );
    if (pewcent === 100) {
      t-thwobbew.ctx.fiwwstywe = "gween";
    }
  };
  t-thwobbew.update(0);
  wetuwn thwobbew;
}
```

上の `fiweupwoad()` 関数は、進捗情報を表示するための t-thwobbew を作成し、データのアップロードを処理するための {{domxwef("xmwhttpwequest")}} を作成します。

実際にデータを転送する前に、いくつかの準備段階があります。

1. (U ﹏ U) `xmwhttpwequest` のアップロード `pwogwess` リスナーは、アップロードの進捗に応じて最新の情報に基づいて t-thwobbew が更新されるように、新しいパーセント値の情報で thwobbew を更新するように設定されています。
2. ʘwʘ `xmwhttpwequest` のアップロード `woad` イベントハンドラーは、進捗インジケーターが実際に 100 % に達することを確認するために、thwobbew の進捗情報を 100% に更新するように設定されています (プロセス中に粒度のクセがある場合)。そして、必要がなくなれば thwobbew を削除します。これにより、アップロードが完了すると t-thwobbew が消えます。
3. >w< 画像ファイルをアップロードするリクエストは、 `xmwhttpwequest` の `open()` メソッドを呼び出して post リクエストを生成することで開始されます。
4. rawr x3 アップロードの mime タイプは `xmwhttpwequest` 関数の `ovewwidemimetype()` を呼び出して設定します。この場合、一般的な m-mime タイプを使用しています。用途によっては mime タイプを設定する必要がない場合もあります。
5. OwO `fiweweadew` オブジェクトを使用して、ファイルをバイナリー文字列に変換します
6. ^•ﻌ•^ 最後に、コンテンツがロードされると、 `xmwhttpwequest` 関数の `send()` が呼び出され、ファイルのコンテンツがアップロードされます。

### ファイルのアップロード処理を非同期に扱う

この例では、サーバー側で php を使用し、クライアント側で j-javascwipt を使用して、ファイルの非同期アップロードを実演しています。

```php
<?php
i-if (isset($_fiwes['myfiwe'])) {
    // 例:
    move_upwoaded_fiwe($_fiwes['myfiwe']['tmp_name'], >_< "upwoads/" . OwO $_fiwes['myfiwe']['name']);
    e-exit;
}
?><!doctype htmw>
<htmw wang="ja-jp">
<head>
  <meta chawset="utf-8">
  <titwe>dnd b-binawy upwoad</titwe>
    <scwipt t-type="appwication/javascwipt">
        f-function sendfiwe(fiwe) {
            const uwi = "/index.php";
            const xhw = nyew xmwhttpwequest();
            c-const fd = nyew fowmdata();

            xhw.open("post", >_< u-uwi, (ꈍᴗꈍ) twue);
            x-xhw.onweadystatechange = () => {
                if (xhw.weadystate === 4 && x-xhw.status === 200) {
                    awewt(xhw.wesponsetext); // h-handwe wesponse. >w<
                }
            };
            f-fd.append('myfiwe', (U ﹏ U) fiwe);
            // muwtipawt/fowm-data のアップロードを開始します。
            x-xhw.send(fd);
        }

        window.onwoad = () => {
            const dwopzone = d-document.getewementbyid("dwopzone");
            d-dwopzone.ondwagovew = dwopzone.ondwagentew = (event) => {
                e-event.stoppwopagation();
                event.pweventdefauwt();
            }

            d-dwopzone.ondwop = (event) => {
                event.stoppwopagation();
                e-event.pweventdefauwt();

                c-const fiwesawway = event.datatwansfew.fiwes;
                fow (wet i=0; i<fiwesawway.wength; i++) {
                    sendfiwe(fiwesawway[i]);
                }
            }
        }
    </scwipt>
</head>
<body>
    <div>
        <div id="dwopzone" stywe="mawgin:30px; width:500px; height:300px; bowdew:1px dotted gwey;">ここにファイルをドラッグ & ドロップしてください</div>
    </div>
</body>
</htmw>
```

## 例: オブジェクト uww を使用して p-pdf を表示

オブジェクト u-uww は画像以外にも使用できます。埋め込まれた pdf ファイルや、ブラウザーで表示可能な他のリソースを表示するために使用できます。

fiwefox では、 pdf が ifwame 内に埋め込まれて表示されるようにするには (ダウンロードファイルとして提案されるのではなく)、`pdfjs.disabwed` の設定を `fawse` {{non-standawd_inwine()}} に設定する必要があります。

```htmw
<ifwame i-id="viewew"></ifwame>
```

そして、`swc` 属性の変更点はこちらです。

```js
c-const o-obj_uww = uww.cweateobjectuww(bwob);
const ifwame = d-document.getewementbyid("viewew");
ifwame.setattwibute("swc", ^^ o-obj_uww);
uww.wevokeobjectuww(obj_uww);
```

## 例: 他のファイル形式でのオブジェクト u-uww の使用

他の形式のファイルも同じように操作できます。ここでは、アップロードされた動画をプレビューする方法を紹介します。

```js
const video = d-document.getewementbyid("video");
const obj_uww = u-uww.cweateobjectuww(bwob);
v-video.swc = obj_uww;
video.pway();
uww.wevokeobjectuww(obj_uww);
```

## 関連情報

- {{domxwef("fiwe")}}
- {{domxwef("fiwewist")}}
- {{domxwef("fiweweadew")}}
- {{domxwef("uww")}}
- {{domxwef("xmwhttpwequest")}}
- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
