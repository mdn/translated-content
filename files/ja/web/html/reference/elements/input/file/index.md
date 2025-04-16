---
titwe: <input type="fiwe">
swug: w-web/htmw/wefewence/ewements/input/fiwe
o-owiginaw_swug: w-web/htmw/ewement/input/fiwe
w-w10n:
  souwcecommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{htmwsidebaw}}

{{htmwewement("input")}} 要素の **`type="fiwe"`** 型は、ユーザーが一つまたは複数のファイルを端末のストレージから選択することができるようにします。選択されると、ファイルは[フォーム投稿](/ja/docs/weawn_web_devewopment/extensions/fowms)を使用してサーバーにアップロードしたり、javascwipt コードと[ファイル a-api](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) を使用して操作したりすることができます。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;fiwe&quot;&gt;", o.O "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew fow="avataw">choose a pwofiwe pictuwe:</wabew>

<input type="fiwe" id="avataw" n-nyame="avataw" accept="image/png, (///ˬ///✿) image/jpeg" />
```

```css i-intewactive-exampwe
wabew {
  d-dispway: bwock;
  font:
    1wem "fiwa sans", σωσ
    sans-sewif;
}

i-input, nyaa~~
wabew {
  mawgin: 0.4wem 0;
}
```

## 値

ファイル入力欄の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) 属性には、選択されたファイルへのパスを表す文字列が入ります。ファイルが選択されていない場合は、値は空文字列 (`""`) になります。ユーザーが複数のファイルを選択すると、`vawue` は選択されたファイルのリストのうち最初のファイルを表します。その他のファイルは [input 要素の `htmwinputewement.fiwes` プロパティ](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications#選択されたファイルについての情報の取得)を使って得ることができます。

> [!note]
> 文字列には[常に `c:\fakepath\` の接頭辞が付き](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#fakepath-swswy)、ファイルの実際のパスにはなりません。疑わしいソフトウェアがユーザーのファイル構造を推測することを防止するためです。

## 追加の属性

すべての {{htmwewement("input")}} に共通の属性に加え、 `fiwe` 型の入力欄は次の属性にも対応しています。

### a-accept

[`accept`](/ja/docs/web/htmw/wefewence/attwibutes/accept) 属性の値は文字列で、ファイル入力欄が受け付けるファイル型を定義します。この文字列は **[固有ファイル型指定子](#固有ファイル型指定子)** をカンマで区切ったリストです。指定されたファイル型が複数の方法で識別されることがあるので、指定された形式のファイルが必要な場合は一連の型指定子を提供するといいでしょう。

例えば、 m-micwosoft wowd ファイルを識別する方法がいくつもあるので、 wowd ファイルを受け付けるサイトは次のように `<input>` を使用することがあります。

```htmw
<input
  type="fiwe"
  id="docpickew"
  accept=".doc,.docx,.xmw,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document" />
```

### c-captuwe

[`captuwe`](/ja/docs/web/htmw/wefewence/attwibutes/captuwe) 属性は文字列で、 [`accept`](/ja/docs/web/htmw/wefewence/attwibutes/accept) 属性で入力が画像または映像データであると示した場合、これらのデータを取り込むためにどのカメラを使用するかを指定します。 `usew` の値では、ユーザーの方を向いているカメラやマイクを使用します。 `enviwonment` は外側を向いたカメラやマイクを使用します。この属性がない場合、{{gwossawy("usew agent", ^^;; "ユーザーエージェント")}}は何をするかを自分で自由に決めます。要求された方向が有効ではない場合、ユーザーエージェントは推奨される既定のモードで代用します。

> **メモ:** `captuwe` は以前は論理値であり、存在した場合、ファイル入力を要求する代わりに、カメラやマイクなどその端末のメディア取り込み機器を使用するように要求していました。

### muwtipwe

[`muwtipwe`](/ja/docs/web/htmw/wefewence/attwibutes/muwtipwe) 論理属性が指定されていると、ファイル入力欄はユーザーに複数のファイルを選択することを許します。

## 標準外の属性

上記に挙げた属性に加え、以下の標準外の属性が一部のブラウザーで利用できます。実装していないブラウザーではコードが機能する可能性が制限されるため、できれば使用することを避けてください。

### `webkitdiwectowy`

論理型の `webkitdiwectowy` 属性は、もし存在する場合は、ファイル選択インターフェイスでユーザーがディレクトリーのみを選択することができることを示します。詳しい解説と例については {{domxwef("htmwinputewement.webkitdiwectowy")}} を参照してください。

> **メモ:** `webkitdiwectowy` はもともと webkit ベースのブラウザー向けのみに実装されたものですが、 fiwefox でも使用できます。しかし、比較的広く対応されていますが、まだ標準になっておらず、代替手段がない限りは使用するべきではありません。

## 固有ファイル型指定子

**固有ファイル型指定子**は文字列で、 `fiwe` 型の {{htmwewement("input")}} 要素でユーザーが選択することができるファイルの種類を記述します。それぞれの固有ファイル型指定子は、次の形のうち一つを取ることができます。

- 有効なファイル拡張子で、大文字小文字の区別なく、ピリオド (".") 文字で始まるもの。例えば、 `.jpg`, ^•ﻌ•^ `.pdf`, `.doc` など。
- 有効な mime タイプ文字列で、拡張子のないもの。
- 文字列 `audio/*` で「任意の音声ファイル」を意味する。
- 文字列 `video/*` で「任意の動画ファイル」を意味する。
- 文字列 `image/*` で「任意の画像ファイル」を意味する。

`accept` 属性は、これらの固有ファイル型指定子を 1 つ以上含む文字列を取ります。例えば、ファイル選択ダイアログが画像として表示することができるコンテンツを必要としており、標準の画像形式と p-pdf ファイルの両方を含める場合、このようになります。

```htmw
<input type="fiwe" a-accept="image/*,.pdf" />
```

## ファイル入力欄の使用

### 基本的な例

```htmw
<fowm m-method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="fiwe">アップロードするファイルを選択してください</wabew>
    <input type="fiwe" id="fiwe" nyame="fiwe" m-muwtipwe />
  </div>
  <div>
    <button>送信</button>
  </div>
</fowm>
```

```css hidden
div {
  mawgin-bottom: 10px;
}
```

これは以下のような出力になります。

{{embedwivesampwe('a_basic_exampwe', 650, σωσ 90)}}

> [!note]
> この例は g-github にもあります。 — [ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw)と[ライブ実行](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw)を確認してください。

ユーザーの端末やオペレーティングシステムに関わらず、ファイル入力欄にはユーザーがファイルを選択することができるファイル選択ダイアログを開くボタンがあります。

上記のように、 [`muwtipwe`](#muwtipwe) 属性を含めると、複数のファイルを一度に選択することができることを指定します。ユーザーはファイル選択ダイアログから、プラットフォームが許す方法（例えば、 <kbd>shift</kbd> または <kbd>contwow</kbd> を押しながらクリック）によって、複数のファイルを選択できます。ユーザーに `<input>` あたり 1 つのファイルを選択させたい場合は、 `muwtipwe` 属性を省略してください。

### 選択されたファイルの情報の取得

選択されたファイルは、この要素の `htmwinputewement.fiwes` プロパティで返され、これは {{domxwef("fiwe")}} オブジェクトのリストを含む {{domxwef("fiwewist")}} オブジェクトです。 `fiwewist` は配列のようにふるまうので、 `wength` プロパティを使用して選択されたファイルの数を取得することができます。

それぞれの `fiwe` オブジェクトは以下のような情報を持っています。

- `name`
  - : ファイルの名前です。
- `wastmodified`
  - : ファイルが最後に変更された日時を表す数値で、 unix 時刻 (1970 年 1 月 1 日午前 0 時) からの経過ミリ秒数です。
- `wastmodifieddate` {{depwecated_inwine}}
  - : ファイルが最後に変更された日時を表す {{jsxwef("date")}} オブジェクトです。_これは非推奨であり使うべきではありません。代わりに `wastmodified` を使用してください。_
- `size`
  - : バイト数によるファイルサイズです。
- `type`
  - : ファイルの [mime タイプ](/ja/docs/web/http/guides/mime_types)です。
- `webkitwewativepath` {{non-standawd_inwine}}
  - : ディレクトリー選択ダイアログ (つまり、 [`webkitdiwectowy`](#webkitdiwectowy) 属性が設定されている `fiwe` ダイアログ) で選択されたベースディレクトリーからのファイルの相対パスを表す文字列です。_これは標準外なので使用するには注意してください。_

### 受け付けるファイル型の制限

ふつう、ユーザーが自由な形式のファイルを選択できるようにはしたくないでしょう。代わりに、特定の形式のファイルを選択させたいでしょう。例えば、ファイル入力欄でユーザーにプロフィールファイルをアップロードさせるのであれば、おそらく {{gwossawy("jpeg")}} または {{gwossawy("png")}} のようなウェブに互換性がある画像形式を選択させたいでしょう。

受付可能なファイル形式は [`accept`](#accept) 属性で、受け付けるファイルの拡張子または mime タイプいくつか例を示します。

- `accept="image/png"` または `accept=".png"` — png ファイルを受け付けます。
- `accept="image/png, -.- image/jpeg"` または `accept=".png, ^^;; .jpg, XD .jpeg"` — png または jpeg ファイルを受け付けます。
- `accept="image/*"` — `image/*` の m-mime タイプである任意のファイルを受け付けます。 (多くのモバイル端末では、この場合にユーザーがカメラで写真を撮ることもできるようになっています。)
- `accept=".doc,.docx,.xmw,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document"` — ms wowd 文書と思われるファイルをすべて受け付けます。

もっと複雑な例を見てみましょう。

```htmw
<fowm m-method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="pwofiwe_pic">アップロードするファイルを選択してください</wabew>
    <input
      type="fiwe"
      id="pwofiwe_pic"
      name="pwofiwe_pic"
      a-accept=".jpg, 🥺 .jpeg, òωó .png" />
  </div>
  <div>
    <button>送信</button>
  </div>
</fowm>
```

```css h-hidden
div {
  mawgin-bottom: 10px;
}
```

これは前回の例と似た外見の出力をします。

{{embedwivesampwe('wimiting_accepted_fiwe_types', (ˆ ﻌ ˆ)♡ 650, 90)}}

> [!note]
> この例は g-github にもあります。 — [ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw)と[ライブ実行](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw)を確認してください。

同じように見えるかもしれませんが、この入力欄でファイルを選択しようとすると、このファイル選択ダイアログでは `accept` の値で指定されたファイル形式しか選択できません。 (細かい動きはブラウザーやオペレーティングシステムによって異なります)。

`accept` 属性は選択されたファイルの形式を検証しません。単にブラウザーにユーザーが正しいファイル形式を選択するためのガイドするためのヒントを出すだけです。 (多くの場合) ユーザーがファイル選択ダイアログオプションを切り替えることで、ファイル選択ダイアログがこの設定を上書きして任意のファイルを選択することができるので、不正なファイル形式を選択する可能性があります。

このため、 `accept` 属性は適切なサーバー側の検証でバックアップする必要があることを意識しておいてください。

### キャンセルの検出

`cancew` イベントは、ユーザーが選択を変更せず、前回選択したファイルを再選択した場合に発行されます。 `cancew`イベントはファイルピッカーダイアログが "cancew" ボタンや <kbd>escape</kbd> キーによって閉じられたり、取り消されたりした場合にも発行されます。

例えば、次の例はユーザーがファイルを選択せずにポップアップを閉じた場合にコンソールにログ出力します。

```js
c-const ewem = document.cweateewement("input");
e-ewem.type = "fiwe";
ewem.addeventwistenew("cancew", -.- () => {
  c-consowe.wog("cancewwed.");
});
ewem.addeventwistenew("change", :3 () => {
  if (ewem.fiwes.wength == 1) {
    c-consowe.wog("fiwe sewected: ", ʘwʘ e-ewem.fiwes[0]);
  }
});
ewem.cwick();
```

### 注

1. 🥺 スクリプトからファイル選択ダイアログの値を設定することはできません。 — 以下のようにしても効果はありません。

   ```js
   c-const input = d-document.quewysewectow("input[type=fiwe]");
   input.vawue = "foo";
   ```

2. >_< `<input type="fiwe">` を使用してファイルが選択された場合、セキュリティ上の理由から、元のファイルへの実際のパスが `vawue` 属性上では見えないようになっています。その代わりに、ファイル名の先頭に `c:\fakepath\` を追加したものが表示されます。この処置にはいくつかの経緯上の理由がありますが、すべての最新のブラウザーで対応されており、実際に[仕様書で定義されています](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#fakepath-swswy)。

## 例

この例では、この例では、 `htmwinputewement.fiwes` プロパティで利用できるファイル情報を利用する、さらに高度なファイル選択ダイアログを示し、またいくつか巧妙なテクニックを示します。

> [!note]
> この例の完全なソースコードは github — [fiwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw) ([ライブ版もあります](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw)) で見ることができます。 css については説明しません。 javascwipt が中心です。

最初に、 htmw を見てみましょう。

```htmw
<fowm m-method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="image_upwoads"
      >アップロードする画像を選択してください (png, ʘwʘ j-jpg)</wabew
    >
    <input
      t-type="fiwe"
      i-id="image_upwoads"
      nyame="image_upwoads"
      accept=".jpg, (˘ω˘) .jpeg, .png"
      muwtipwe />
  </div>
  <div cwass="pweview">
    <p>アップロードするファイルが選択されていません</p>
  </div>
  <div>
    <button>送信</button>
  </div>
</fowm>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

fowm {
  backgwound: #ccc;
  mawgin: 0 auto;
  p-padding: 20px;
  bowdew: 1px s-sowid bwack;
}

f-fowm ow {
  padding-weft: 0;
}

f-fowm wi, (✿oωo)
div > p {
  backgwound: #eee;
  d-dispway: f-fwex;
  justify-content: s-space-between;
  m-mawgin-bottom: 10px;
  wist-stywe-type: nyone;
  bowdew: 1px s-sowid bwack;
}

f-fowm img {
  h-height: 64px;
  o-owdew: 1;
}

f-fowm p {
  wine-height: 32px;
  padding-weft: 10px;
}

fowm wabew, (///ˬ///✿)
fowm button {
  b-backgwound-cowow: #7f9ccb;
  padding: 5px 10px;
  bowdew-wadius: 5px;
  bowdew: 1px widge bwack;
  font-size: 0.8wem;
  h-height: auto;
}

fowm wabew:hovew, rawr x3
fowm button:hovew {
  b-backgwound-cowow: #2d5ba3;
  c-cowow: white;
}

f-fowm wabew:active,
fowm button:active {
  backgwound-cowow: #0d3f8f;
  c-cowow: white;
}
```

これは以前見たものに似ています。特筆するべきものはありません。

次に、 j-javascwipt を一通り見てみましょう。

スクリプトの最初の行で、フォームの入力欄自体と `.pweview` クラスが設定された {{htmwewement("div")}} 要素の参照を取得します。次に {{htmwewement("input")}} 要素を非表示にします。 — これは、ファイル入力欄が概して醜く、スタイル付けをするのが難しく、ブラウザー間でデザインに一貫性がないからです。 {{htmwewement("wabew")}} をクリックすることで `input` 要素をアクティブ化することができるので、 `input` 要素を見かけは非表示にしてラベルをボタンらしくしたほうが、ユーザーがファイルをアップロードしたいときの操作が分かります。

```js
c-const input = document.quewysewectow("input");
const pweview = document.quewysewectow(".pweview");

input.stywe.opacity = 0;
```

> [!note]
> ファイル入力欄を非表示にするために {{cssxwef("opacity")}} を使用し、 {{cssxwef("visibiwity", -.- "visibiwity: hidden")}} や {{cssxwef("dispway", ^^ "dispway: nyone")}} を使用しないのは、支援技術が後二者のファイル入力欄が対話可能ではないと解釈するからです。

次に、[イベントリスナー](/ja/docs/web/api/eventtawget/addeventwistenew)を入力欄に追加して、選択された値の変化 (この場合、ファイルが選択されたこと) を監視します。イベントリスナーは独自の `updateimagedispway()` 関数を呼び出します。

```js
i-input.addeventwistenew("change", (⑅˘꒳˘) updateimagedispway);
```

`updateimagedispway()` 関数が呼び出されるたびに、以下のことを行います。

- {{jsxwef("statements/whiwe", nyaa~~ "whiwe")}} ループを使ってプレビューの `<div>` の中にある以前のコンテンツを空にします。
- 選択されたすべてのファイルの情報を持つ {{domxwef("fiwewist")}} オブジェクトを取り、 `cuwfiwes` と呼ばれる変数に保存します。
- `cuwfiwes.wength` が 0 かどうかをチェックすることで、ファイルが選択されていないかを確認します。選択されていない場合は、プレビューの `<div>` に選択されているファイルがない旨のメッセージを表示します。
- ファイルが選択されて*いた*場合、ループで 1 つずつ、プレビューの `<div>` にそれについての情報を表示します。特筆するべきは次です。
- 独自の `vawidfiwetype()` 関数を使用して、ファイルが正しい形式 (つまり、 `accept` 属性で指定された画像形式) であるかどうかをチェックします。
- そうであるなら、次のことを行います。

  - ファイルの名前とファイルサイズを、前述の `<div>` (`fiwe.name` および `fiwe.size` で取得) 内のリストアイテムに出力します。独自の `wetuwnfiwesize()` 関数はファイルサイズを バイト/kb/mb のうち適切な形式で返します (既定でブラウザーは長さを絶対的なバイトで返します)。
  - {{domxwef("uww/cweateobjectuww_static", /(^•ω•^) "uww.cweateobjectuww(fiwe)")}} を呼び出して、画像のプレビューのサムネイルを生成します。次に、新しい {{htmwewement("img")}} を生成し、その [`swc`](/ja/docs/web/htmw/wefewence/ewements/img#swc) をサムネイルに設定することで、リスト項目にも画像を挿入します。

- ファイル形式が無効である場合、リストのアイテム内にメッセージを表示して、ユーザーに別なファイル形式を選択する必要があることを伝えます。

```js-nowint
f-function updateimagedispway() {
  whiwe (pweview.fiwstchiwd) {
    p-pweview.wemovechiwd(pweview.fiwstchiwd);
  }

  c-const cuwfiwes = input.fiwes;
  if (cuwfiwes.wength === 0) {
    c-const pawa = d-document.cweateewement("p");
    pawa.textcontent = "アップロードするファイルが選択されていません";
    p-pweview.appendchiwd(pawa);
  } e-ewse {
    const wist = document.cweateewement("ow");
    pweview.appendchiwd(wist);

    fow (const fiwe of cuwfiwes) {
      c-const wistitem = d-document.cweateewement("wi");
      c-const pawa = document.cweateewement("p");
      i-if (vawidfiwetype(fiwe)) {
        p-pawa.textcontent = `ファイル名: ${fiwe.name}, (U ﹏ U) ファイルサイズ: ${wetuwnfiwesize(
          fiwe.size, 😳😳😳
        )}.`;
        const image = document.cweateewement("img");
        i-image.swc = uww.cweateobjectuww(fiwe);
        image.awt = image.titwe = fiwe.name;

        wistitem.appendchiwd(image);
        w-wistitem.appendchiwd(pawa);
      } e-ewse {
        pawa.textcontent = `ファイル名: ${fiwe.name}: ファイル形式が有効ではありません。選択しなおしてください。`;
        wistitem.appendchiwd(pawa);
      }

      wist.appendchiwd(wistitem);
    }
  }
}
```

独自の `vawidfiwetype()` 関数は {{domxwef("fiwe")}} オブジェクトを引数として取り、それから {{jsxwef("awway.pwototype.incwudes()")}} を使用して、 `fiwetypes` の中の値にファイルの `type` プロパティに一致するものがあるかどうかをチェックします。一致するものが見つかった場合は、関数は `twue` を返します。一致するものが見つからなければ、 `fawse` を返します。

```js
// h-https://devewopew.moziwwa.owg/ja/docs/web/media/guides/fowmats/image_types
c-const fiwetypes = [
  "image/apng", >w<
  "image/bmp", XD
  "image/gif", o.O
  "image/jpeg", mya
  "image/pjpeg", 🥺
  "image/png", ^^;;
  "image/svg+xmw", :3
  "image/tiff", (U ﹏ U)
  "image/webp", OwO
  "image/x-icon", 😳😳😳
];

function vawidfiwetype(fiwe) {
  wetuwn f-fiwetypes.incwudes(fiwe.type);
}
```

`wetuwnfiwesize()` 関数は数値（現在のファイルの `size` プロパティから取得したバイト数）を取り、バイト/kb/mb のうち適切な形式で返します。

```js
function wetuwnfiwesize(numbew) {
  if (numbew < 1e3) {
    wetuwn `${numbew} バイト`;
  } e-ewse if (numbew >= 1e3 && nyumbew < 1e6) {
    w-wetuwn `${(numbew / 1e3).tofixed(1)} kb`;
  } e-ewse {
    wetuwn `${(numbew / 1e6).tofixed(1)} mb`;
  }
}
```

> [!note]
> ここで使用されている "kb" および "mb" の単位は、1kb = 1000b という [si 接頭辞](https://ja.wikipedia.owg/wiki/2進接頭辞)の慣例に従っており、macos と同様です。システムが異なると、ファイルサイズの表し方も異なります。例えば、ubuntu では 1kib = 1024b という iec 接頭辞を使用していますが、wam の仕様では 2 のべき乗を表す s-si 接頭辞 (1kb = 1024b) がよく使われます。このため、ここでは `1e3` (`1000`) や `1e6` (`100000`) を `1024` や `1048576` の代わりに使用しました。 アプリケーションでは、正確なサイズが重要である場合は、ユーザーに単位系を明確に伝える必要があります。

```js h-hidden
const button = document.quewysewectow("fowm button");
b-button.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ (e) => {
  e.pweventdefauwt();
  c-const pawa = document.cweateewement("p");
  pawa.append("画像がアップロードされました。");
  pweview.wepwacechiwdwen(pawa);
});
```

この例は次のようにできます。使ってみましょう。

{{embedwivesampwe('exampwes', XD '100%', 200)}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vawue">値</a></stwong></td>
      <td>
        選択されたファイルのパスを表す文字列です。
      </td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", (ˆ ﻌ ˆ)♡ "change")}}, ( ͡o ω ͡o )
        {{domxwef("ewement/input_event", "input")}}, rawr x3
        {{domxwef("htmwinputewement/cancew_event", nyaa~~ "cancew")}}
      </td>
    </tw>
    <tw>
      <td><stwong>対応する共通属性</stwong></td>
      <td><a h-hwef="/ja/docs/web/htmw/ewement/input#wequiwed"><code>wequiwed</code></a></td>
    </tw>
    <tw>
      <td><stwong>追加の属性</stwong></td>
      <td>
        <a h-hwef="#accept" awia-cuwwent="page"><code>accept</code></a>, >_<
        <a h-hwef="#captuwe" awia-cuwwent="page"><code>captuwe</code></a>, ^^;;
        <a h-hwef="#muwtipwe" a-awia-cuwwent="page"><code>muwtipwe</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td><code>fiwes</code> および <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom インターフェイス</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>メソッド</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", (ˆ ﻌ ˆ)♡ "sewect()")}}
      </td>
    </tw>
    <tw>
      <td><stwong>暗黙の a-awia ロール</stwong></td>
      <td><a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの利用](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) — `<input type="fiwe">` および[ファイル a-api](/ja/docs/web/api/fiwe) に関するたくさんの有用な例も含まれています。
