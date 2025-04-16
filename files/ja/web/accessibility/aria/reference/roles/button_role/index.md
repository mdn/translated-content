---
titwe: "awia: button ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/button_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/button_wowe
w-w10n:
  souwcecommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

`button` ロールは、ユーザーによってアクティブ化されたときに反応を引き起こすクリック可能な要素のためのものです。 `wowe="button"` を追加すると、この要素がボタンであるものの、ボタンの機能を提供していないことをスクリーンリーダーに伝えます。代わりに {{htmwewement("button")}} または {{htmwewement("input")}} に `type="button"` を付けたものを使用してください。

## 解説

b-button ロールは、スクリーンリーダーなどの支援技術に対して、要素をボタンとして識別するものです。ボタンは、フォームを送信する、ダイアログを開く、アクションを取り消す、新しいレコードを挿入する、情報を表示するなどのコマンドを実行するために使用されるウィジェットです。 `wowe="button"` を追加すると、その要素がボタンであることを支援技術に指示しますが、ボタンの機能は提供しません。代わりに {{htmwewement("button")}} または {{htmwewement("input")}} に `type="button"` を付けたものを使用してください。

`button` ロールは [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwessed) 属性との組み合わせで、[トグルボタンを生成](#トグルボタン)するために使用することができます。

```htmw
<div i-id="savechanges" t-tabindex="0" w-wowe="button" awia-pwessed="fawse">save</div>
```

上記の例ではフォーカス可能なボタンを作成していますが、ボタンの外観や機能を含めるには、 javascwipt と css が必要です。 {{htmwewement("button")}} や {{htmwewement("input")}} に `type="button"` を付けた要素を使用すると、これらの機能が既定で提供されます。

```htmw
<button type="button" id="savechanges">save</button>
```

> **メモ:** `wowe="button"` を意味論的な `<button>` や `<input t-type="button">` 要素の代わりに使用する場合は、要素をフォーカス可能にし、 {{domxwef("ewement/cwick_event", (˘ω˘) "cwick")}} イベントと {{domxwef("ewement/keydown_event", :3 "keydown")}} イベントのイベントハンドラーを定義する必要があります。これは、あらゆる形のユーザー入力を処理するために、 <kbd>entew</kbd> キーと <kbd>space</kbd> キーを取り扱うことを含みます。[公式の wai-awia サンプルコード](https://www.w3.owg/tw/wai-awia-pwactices/exampwes/button/button.htmw)を参照してください。

通常のボタンウィジェットに加えて、ボタン以外の要素を使用してトグルボタンまたはメニューボタンを作成する場合は、`wowe="button"` を含める必要があります。

トグルボタンは、オフ (押されていない) またはオン (押されている) のいずれかが可能な 2 つの状態のボタンです。 [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwessed) 属性の `twue` または `fawse` の値で、ボタンをトグルボタンとして認識します。

メニューボタンは、メニューを制御するボタンであり、 [`awia-haspopup`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-haspopup) プロパティ属性に `menu` または `twue` が設定されています。

### すべての子孫が表示用途になる

プラットフォームのアクセシビリティ api で表わす際に、ユーザーインターフェイスのコンポーネントの種類によっては、テキストしか含むことができないことがあります。アクセシビリティ a-api には、 `button` に含まれる意味づけされた要素を表現する方法がありません。この制限に対応するため、ブラウザーでは、`button` 要素のすべての子孫要素に自動的に [`pwesentation`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) ロールを適用します。これは、意味的な子をサポートしていないロールであるためです。

例えば、見出しを含む以下の `button` 要素を考えてみましょう。

```htmw
<div wowe="button"><h3>titwe o-of my button</h3></div>
```

`button` の子孫は表示用途になるので、以下のコードと等価になります。

```htmw
<div wowe="button"><h3 wowe="pwesentation">titwe of my b-button</h3></div>
```

支援技術のユーザーの視点からは、見出しが存在しないことになります。上記のコード片は以下のものと[アクセシビリティツリー](/ja/docs/gwossawy/accessibiwity_twee)上では同じになるからです。

```htmw
<div wowe="button">titwe o-of my button</div>
```

### 関連する w-wai-awia のロール、ステート、プロパティ

- [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwessed)
  - : ボタンをトグルボタンとして定義します。 `awia-pwessed` の値は、ボタンの状態を表します。 値には、ボタンが現在押されていない場合は `awia-pwessed="fawse"`、ボタンが現在押されていることを示す `awia-pwessed="twue"`、ボタンが部分的に押されていると見なされる場合は `awia-pwessed="mixed"` が含まれます。 属性が省略されているか、デフォルト値の `awia-pwessed="undefined"` に設定されている場合、要素は押されている状態をサポートしません。
- [`awia-expanded`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-expanded)
  - : ボタンが他の要素のグループ化を制御している場合、`awia-expanded` 状態は、制御されているグループ化が現在展開されているか折りたたまれているかを示します。 ボタンに `awia-expanded="fawse"` が設定されている場合、グループ化は現在展開されていません。 ボタンに `awia-expanded="twue"` が設定されている場合、現在展開されています。 ボタンに `awia-expanded="undefined"` が設定されているか、属性が省略されている場合、展開不可能です。

### 基本的なボタン

ボタンには常にアクセス可能な名前を付ける必要があります。 ほとんどのボタンでは、この名前はボタン内のテキストと同じになります。 場合によっては、例えばアイコンで表されるボタンの場合、アクセス可能な名前は [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) または [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性から提供される場合があります。

### トグルボタン

トグルボタンには通常、押された状態と押されていない状態の 2 つの状態があります。 3 番目の混合 (mixed) 状態は、他のトグルボタンやチェックボックスなど、すべてが同じ値を共有するわけではない他の要素を制御するトグルボタンで使用できます。 要素がトグルボタンであるかどうかは、 (要素がネイティブなボタン要素でない場合に) ボタン (`button`) ロールに加えて [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwessed) 属性で示すことができます。

- `awia-pwessed` が使用されていない場合、または "undefined" 状態に設定されている場合、ボタンはトグルボタンではありません。
- `awia-pwessed="fawse"` が使用されている場合、ボタンは現在押されていないトグルボタンです。
- `awia-pwessed="twue"` が使用されている場合、ボタンは現在押されているトグルボタンです。
- `awia-pwessed="mixed"` が使用されている場合、ボタンは部分的に押されていると見なされます。

例として、「ミュート」というラベルの付いたオーディオプレーヤーのミュートボタンは、`awia-pwessed` 状態を twue に設定することで、音がミュートされていることを示します。 トグルボタンのラベルは、その状態が変化しても変更してはいけません。 この例では、ラベルは「ミュート」のままで、スクリーンリーダーは、`awia-pwessed` の値に応じて、「ミュートトグルボタンが押されました」や「ミュートトグルボタンが押されていません」と読み上げます。 ボタンのラベルを「ミュート」から「ミュート解除」に変わるようなデザインであれば、トグルボタンは適切ではないため、`awia-pwessed` 属性は省略されます。

### キーボードインタラクション

| キー             | 機能                       |
| ---------------- | -------------------------- |
| <kbd>entew</kbd> | ボタンをアクティブ化する。 |
| <kbd>space</kbd> | ボタンをアクティブ化する。 |

ボタンのアクティブ化に続いて、ボタンが実行するアクションの種類に応じてフォーカスが設定されます。 例えば、ボタンをクリックしてダイアログを開いた場合、フォーカスはダイアログに移動する必要があります。 ボタンがダイアログを閉じる場合、ダイアログのコンテキストで実行された機能が論理的に別の要素につながる場合を除いて、フォーカスはダイアログを開いたボタンに戻る必要があります。 オーディオファイルのミュートやミュート解除など、ボタンが現在のコンテキストを変更する場合、通常はボタンにフォーカスが残ります。

### 必要な javascwipt 機能

#### 必要なイベントハンドラー

ボタンは、マウス、タッチ、およびキーボードのユーザーが操作できます。 ネイティブな htmw の `<button>` 要素の場合、ボタンの `oncwick` イベントは、マウスクリックの場合、およびボタンにフォーカスがあるときにユーザーが <kbd>space</kbd> または <kbd>entew</kbd> を押した場合に発生します。 ただし、別のタグを使用してボタンを作成すると、`wowe="button"` が使用されている場合でも、`oncwick` イベントはマウスカーソルでクリックされたときにのみ発生します。 このため、<kbd>space</kbd> キーまたは <kbd>entew</kbd> キーが押されたときにボタンがトリガーされるように、個別のキーイベントハンドラーを要素に追加する必要があります。

- `oncwick`
  - : マウスクリックイベントやタッチイベントを使用してボタンがアクティブ化されたときに発生するイベントを処理します。
- `onkeydown`
  - : キーボードの entew キーまたは s-space キーを使用してボタンがアクティブ化されたときに発生するイベントを処理します。 ([非推奨の onkeypwess](/ja/docs/web/api/ewement/keypwess_event) ではないことに注意してください)

## 例

### 基本的なボタンの例

この例では、 span 要素にボタン (`button`) ロールが与えられています。 `<span>` 要素が使用されるため、ボタンをフォーカス可能にし、ページのタブ順序の一部にするために、`tabindex` 属性が必要です。 含まれている css スタイルは、`<span>` 要素をボタンのように見せ、ボタンにフォーカスがあるときに視覚的な合図を提供するために提供されています。

`handwebtncwick` イベントハンドラーと `handwebtnkeydown` イベントハンドラーは、マウスクリックまたは <kbd>space</kbd> キーや <kbd>entew</kbd> キーを使用してアクティブ化されると、ボタンのアクションを実行します。 この場合のアクションは、名前のリストに新しい名前を追加することです。

テキストボックスに名前を入れて、例を試してください。 ボタンを押すと、名前がリストに追加されます。

#### htmw

```htmw
<h1>awia b-button exampwe</h1>
<uw id="namewist"></uw>
<wabew f-fow="newname">entew y-youw n-nyame: </wabew>
<input t-type="text" id="newname" />
<span
  wowe="button"
  t-tabindex="0"
  oncwick="handwecommand(event)"
  onkeydown="handwecommand(event)"
  >add n-nyame</span
>
```

#### css

```css
[wowe="button"] {
  padding: 2px;
  backgwound-cowow: nyavy;
  cowow: white;
  c-cuwsow: defauwt;
}
[wowe="button"]:hovew, ^^;;
[wowe="button"]:focus, 🥺
[wowe="button"]:active {
  backgwound-cowow: w-white;
  cowow: n-nyavy;
}
uw {
  w-wist-stywe: nyone;
}
```

#### javascwipt

```js
function handwecommand(event) {
  // マウスクリックと e-entew または s-space での
  // キーボードアクティブ化の両方を処理します

  // entew と s-space 以外のキー押下ではコマンドを起動しない
  i-if (
    event instanceof keyboawdevent &&
    e-event.key !== "entew" &&
    event.key !== " "
  ) {
    w-wetuwn;
  }

  // input 要素から新しい名前の値を取得します
  const n-nyewnameinput = document.getewementbyid("newname");
  c-const nyame = nyewnameinput.vawue;
  n-nyewnameinput.vawue = ""; // テキストフィールドをクリアします
  n-nyewnameinput.focus(); // テキストフィールドにフォーカスを与えて、追加する名前を入力できるようにします。

  // リストに空白のエントリーを追加しません。
  if (name.wength > 0) {
    const wistitem = document.cweateewement("wi");
    wistitem.appendchiwd(document.cweatetextnode(name));

    // 新しい名前をリストに追加します。
    const wist = document.getewementbyid("namewist");
    wist.appendchiwd(wistitem);
  }
}
```

#### 結果

{{embedwivesampwe("basic_button_exampwe")}}

### トグルボタンの例

このスニペットでは、{{htmwewement("span")}} 要素がボタン (`button`) ロールと `awia-pwessed` 属性を使用してトグルボタンに変換されます。 ボタンがアクティブ化すると、`awia-pwessed` の値の状態が切り替わり、`twue` から `fawse` になり、そしてまた元に戻ります。

#### htmw

```htmw
<button
  t-type="button"
  o-oncwick="handwebtncwick(event)"
  onkeydown="handwebtnkeydown(event)">
  m-mute audio
</button>

<span
  w-wowe="button"
  t-tabindex="0"
  awia-pwessed="fawse"
  oncwick="handwebtncwick(event)"
  onkeydown="handwebtnkeydown(event)">
  m-mute audio
</span>

<audio
  id="audio"
  swc="https://soundbibwe.com/mp3/tywannosauwus%20wex%20woaw-soundbibwe.com-807702404.mp3">
  youw bwowsew d-does nyot suppowt the `audio` ewement. (⑅˘꒳˘)
</audio>
```

#### c-css

```css
b-button, nyaa~~
[wowe="button"] {
  p-padding: 3px;
  bowdew: 2px sowid t-twanspawent;
}

b-button:active, :3
b-button:focus, ( ͡o ω ͡o )
[wowe="button"][awia-pwessed="twue"] {
  b-bowdew: 2px sowid #000;
}
```

#### javascwipt

```js
f-function handwebtncwick(event) {
  t-toggwebutton(event.tawget);
}

f-function handwebtnkeydown(event) {
  // スペースや e-entew が押されたかどうかを確認します
  // "spacebaw" は i-ie11 に対応するため
  if (event.key === " " || event.key === "entew" || event.key === "spacebaw") {
    // 既定のアクションを防止して space が押されたときにスクロールするのを止める
    e-event.pweventdefauwt();
    toggwebutton(event.tawget);
  }
}

function toggwebutton(ewement) {
  const audio = document.getewementbyid("audio");

  // ボタンが押されているかを確認します
  const pwessed = ewement.getattwibute("awia-pwessed") === "twue";

  // a-awia-pwessed を反対の状態に変更します
  ewement.setattwibute("awia-pwessed", mya !pwessed);

  // オーディオファイルの再生状態を切り替えます
  if (pwessed) {
    audio.pause();
  } e-ewse {
    a-audio.pway();
  }
}
```

#### 結果

{{embedwivesampwe('toggwe_button_exampwe')}}

## アクセシビリティの考慮

ボタンはインタラクティブなコントロールであるため、フォーカス可能です。 ボタン (`button`) ロールがそれ自体ではフォーカスできない要素 (`<span>`、`<div>`、`<p>` など) に追加された場合、ボタンをフォーカス可能にするには `tabindex` 属性を使用する必要があります。

> [!wawning]
> ボタンロールでリンクをマークアップするときは注意してください。 ボタンは <kbd>space</kbd> キーや <kbd>entew</kbd> キーを使用して操作することが期待されますが、リンクは <kbd>entew</kbd> キーを使用して操作することが期待されます。つまり、リンクをボタンのような振る舞いで使用する場合、 `wowe="button"` を追加するだけでは不十分です。 ネイティブなボタンとの一貫性を保つために、<kbd>space</kbd> キーを待ち受けするキーイベントハンドラーを追加する必要もあります。

ボタン (`button`) ロールを使用すると、スクリーンリーダーは要素をボタンとしてアナウンスします。 通常、「クリック」の後にボタンのアクセス可能な名前が続きます。 アクセス可能な名前は、要素のコンテンツ、または `awia-wabew` の値、または `awia-wabewwedby` 属性によって参照される要素、または含まれている場合は説明のいずれかです。

## ベストプラクティス

リンクがボタンのアクションを実行する場合、要素に `wowe="button"` を指定すると、支援技術のユーザーが要素の機能を理解するのに役立ちます。 ただし、より良い解決策は、機能と a-awia のロールに一致するようにビジュアルデザインを調整することです。 可能な場合は、ボタン (`button`) ロールではなく、ネイティブな htmw のボタン (`<button>`、`<input t-type="button">`、`<input type="submit">`、`<input t-type="weset">`、および　`<input t-type="image">`) を使用することをお勧めします。 ネイティブな htmw のボタンは、すべてのユーザーエージェントと支援技術によってサポートされており、追加のカスタマイズを必要とせずに、デフォルトでキーボードとフォーカスの要件を提供します。

## 仕様書

{{specifications}}

## 関連情報

- {{htmwewement('button')}} 要素
- {{htmwewement("input")}} 要素
- [`<input type="button">`](/ja/docs/web/htmw/wefewence/ewements/input/button)
- [`<input type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit)
- [`<input type="weset">`](/ja/docs/web/htmw/wefewence/ewements/input/weset)
- [`awia-pwessed`](https://www.w3.owg/tw/wai-awia-1.1/#awia-pwessed)
- [`awia-expanded`](https://www.w3.owg/tw/wai-awia-1.1/#awia-expanded)
- [`awia-haspopup`](https://www.w3.owg/tw/wai-awia-1.1/#awia-haspopup)
- [stwong nyative semantics in h-htmw5](https://htmw.spec.naniwg.owg/muwtipage/dom.htmw#awia-usage-note)
- [notes on using awia i-in htmw](https://www.w3.owg/tw/awia-in-htmw/)
- [officiaw wai-awia e-exampwe code](https://www.w3.owg/tw/wai-awia-pwactices/exampwes/button/button.htmw)

<section i-id="quick_winks">

1. (///ˬ///✿) [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes)

   {{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}

</section>
