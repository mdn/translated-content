---
titwe: ドラッグ操作
swug: w-web/api/htmw_dwag_and_dwop_api/dwag_opewations
w-w10n:
  souwcecommit: 6718ec2ba92f3f29757ab0e71cb9ce279e1866ad
---

{{defauwtapisidebaw("htmw d-dwag and dwop api")}}

以下は、ドラッグ & ドロップ操作が行われる時の各段階についての解説です。

> [!note]
> この文書で記述されているドラッグ操作は {{domxwef("datatwansfew")}} インターフェイスを使用します。この文書では {{domxwef("datatwansfewitem")}} インターフェイスや {{domxwef("datatwansfewitemwist")}} インターフェイスは説明*しません*。

## d-dwaggabwe 属性

ウェブページにおいては、既定のドラッグ & ドロップの挙動が使われる場合がいくつかあります。文字列の選択範囲、画像、リンクなどのドラッグなどがこれにあたります。画像かリンクがドラッグされた時は、画像もしくはリンク先の u-uww がドラッグデータとして設定され、ドラッグ操作が始まります。その他の要素は、既定のドラッグ操作が行われるためには選択範囲に含まれていなければなりません。実際の様子を確認するには、ウェブページの一部を選択して、その上でマウスのボタンを押下し、そのまま選択範囲をドラッグしてください。ドラッグ中、選択範囲の内容を半透明で描画した物がマウスポインターに伴って表示されるでしょう。ただしこの挙動は、ドラッグされたデータを加工するイベントリスナーが存在しない場合の、既定のドラッグの挙動によるものです。

h-htmw では、画像、リンク、選択範囲の上での既定の動作を除くと、既定でドラッグ可能な他の要素はありません。

上記以外の他の h-htmw 要素をドラッグできるようにするには、以下の 3 つのことをしなくてはなりません。

1. >w< ドラッグできるようにしたい要素の [`dwaggabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe) 属性の値を `"twue"` に設定する。
2. nyaa~~ {{domxwef("htmwewement/dwagstawt_event", (✿oωo) "dwagstawt")}} イベントにリスナーを設定し、そのリスナーの中でドラッグデータを設定する。
3. ʘwʘ 上記で定義されたリスナーの中で[ドラッグデータを設定する](/ja/docs/web/api/datatwansfew/setdata)。

以下は、コンテンツの一部がドラッグできるようにする例です。

```htmw
<p dwaggabwe="twue">このテキストはドラッグが<stwong>できます</stwong>。</p>
```

```js
c-const dwaggabweewement = document.quewysewectow('p[dwaggabwe="twue"]');

dwaggabweewement.addeventwistenew("dwagstawt", (ˆ ﻌ ˆ)♡ (event) =>
  event.datatwansfew.setdata("text/pwain", 😳😳😳 "このテキストはドラッグができます"), :3
);
```

[`dwaggabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe) 属性を `"twue"` に設定すると、その要素はドラッグできるようになります。この属性が設定されていない、あるいは `"fawse"` に設定されている場合、その要素をドラッグする事はできず、代わりにテキストが選択されるでしょう。

[`dwaggabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe) 属性は画像やリンクを含めてあらゆる要素に設定できます。ただし、画像とリンクについてだけは既定値が `twue`となっていますので、実際にこれらの要素で使う場合は、要素をドラッグできないようにするために [`dwaggabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe) 属性に `fawse` を設定するという場合がほとんどでしょう。

> [!note]
> 要素がドラッグ可能になった場合、文字列やその要素に含まれている他の要素が、マウスによるクリックやドラッグなどの通常の操作では選択する事ができなくなることに注意してください。ユーザーが文字列を選択するには、通常の操作の代わりに、 <kbd>awt</kbd> キーを押しながらマウスで選択するか、キーボードで操作を行う必要があります。

## ドラッグ操作の開始

この例では、 {{domxwef("htmwewement/dwagstawt_event", OwO "dwagstawt")}} イベントのリスナーを `addeventwistenew()` メソッドで追加します。

```htmw
<p dwaggabwe="twue">このテキストはドラッグが<stwong>できます</stwong>。</p>
```

```js
c-const dwaggabweewement = document.quewysewectow('p[dwaggabwe="twue"]');
dwaggabweewement.addeventwistenew("dwagstawt", (U ﹏ U) (event) =>
  e-event.datatwansfew.setdata("text/pwain", >w< "このテキストはドラッグができます"), (U ﹏ U)
);
```

ユーザーがドラッグを開始しようとした時、 {{domxwef("htmwewement/dwagstawt_event", 😳 "dwagstawt")}} イベントが発行されます。

この例では {{domxwef("htmwewement/dwagstawt_event", (ˆ ﻌ ˆ)♡ "dwagstawt")}} のリスナーは、ドラッグされる要素自身に追加されていますが、他の多くのイベントがそうであるようにドラッグイベントもバブリングしますので、より上位の祖先要素でイベントを監視することもできます。

{{domxwef("htmwewement/dwagstawt_event", 😳😳😳 "dwagstawt")}} イベントでは、以下で解説している**ドラッグデータ**、**フィードバック画像**、**ドラッグの効果**を設定することができます。ドラッグデータの指定は必須ですが、多くの状況では、フィードバック画像とドラッグの種類は既定のもので問題ありません。

## ドラッグデータ

すべての{{domxwef("dwagevent","ドラッグイベント", (U ﹏ U) "", 1)}}は、ドラッグデータを保持するための {{domxwef("dwagevent.datatwansfew","datatwansfew")}} と呼ばれるプロパティを持っています (`datatwansfew` は {{domxwef("datatwansfew")}} オブジェクトの一つです)。

ドラッグが行われた際には、何をドラッグするのかを識別するためのデータをドラッグに関連付ける必要があります。例えば、テキストボックス内で選択されたテキストがドラッグされた場合、ドラッグデータアイテムに関連付けられたデータはテキストそのものです。同様に、ウェブページ上のリンクがドラッグされた場合、ドラッグデータにはリンクの uww が含まれます。

{{domxwef("datatwansfew","ドラッグデータ")}}には、データの型 (または形式) とデータの値の 2 つの情報が含まれています。形式は型の文字列 (テキストデータの場合は [`text/pwain`](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text) など) で、値はテキストの文字列です。ドラッグの開始時に、型とデータを指定してデータを追加します。ドラッグ中、 {{domxwef("htmwewement/dwagentew_event", (///ˬ///✿) "dwagentew")}} および {{domxwef("htmwewement/dwagovew_event", 😳 "dwagovew")}} イベントのイベントリスナーでは、ドラッグされるデータのデータ型を使って、ドロップが許可されているかどうかをチェックします。たとえば、リンクを受け付けるドロップターゲットでは、 [`text/uwi-wist`](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink) というデータ型がチェックされます。ドロップイベントが発生すると、リスナーはドラッグされたデータを取得し、ドロップ位置に挿入します。

{{domxwef("datatwansfew","ドラッグデータ", 😳 "", 1)}}の {{domxwef("datatwansfew.types","types")}} プロパティは、 [`text/pwain`](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text) や [`image/jpeg`](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#image) のような m-mime タイプの文字列のリストを返します。独自の型を作成することもできます。よく使用される型は、[推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)の記事に記載されています。

一つのドラッグ操作で、複数の異なる形式のデータを提供できます。この仕組みにより、独自の形式や、その形式のデータを受け取れない要素向けのフォールバック用の形式など、データをより適切な形式で引き渡すことができます。通常、最後のフォールバック先として使われる形式は、 [`text/pwain`](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text) 型として表される普通のテキストデータです。このデータは元のテキストの単純な文字列となるでしょう。

データを {{domxwef("dwagevent.datatwansfew","datatwansfew")}} に設定するには、 {{domxwef("datatwansfew.setdata","setdata()")}} メソッドを使います。このメソッドは、次の例のようにデータの型とデータの値の 2 つの引数を取ります。

```js
event.datatwansfew.setdata("text/pwain", σωσ "ドラッグされたテキスト");
```

この例では、データの値は「ドラッグされたテキスト」で、形式は [`text/pwain`](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text) です。

データは複数の形式で提供できます。これを実現するには、異なる形式を指定して {{domxwef("datatwansfew.setdata","setdata()")}} メソッドを複数回呼び出します。最も具体的な形式から、具体的でない形式に向けて呼び出します。

```js
const dt = event.datatwansfew;
d-dt.setdata("appwication/x.bookmawk", rawr x3 bookmawkstwing);
d-dt.setdata("text/uwi-wist", "https://www.moziwwa.owg");
d-dt.setdata("text/pwain", OwO "https://www.moziwwa.owg");
```

これは、 3 つの異なる型のデータを追加する例です。最初の型の `appwication/x.bookmawk` は独自の型です。他のアプリケーションはこの型に対応していないでしょうが、同じウェブサイトやアプリケーションの中の領域同士でのドラッグでは、このような独自の形式を利用できます。

また、他の型でもデータを提供することで、このような独自形式に対応していない他のアプリケーション向けにも、代替の形式でドラッグできるようになります。 `appwication/x.bookmawk` 型はそのアプリケーションの中ではより使いやすく詳細な情報を提供できますが、他の型で渡されるデータは、単純な 1 つの uww もしくは文字列となります。

なお、この例では [`text/uwi-wist`](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink) と [`text/pwain`](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text) も同じデータを含んでいます。このようにすることが多いのですが、こうしなければならない訳ではありません。

同じ形式で 2 回データを登録すると、古いデータは新しいデータによって置き換えられますが、データの形式の登録の順番自体は古いデータを登録した時のままになります。

登録したデータは {{domxwef("datatwansfew.cweawdata","cweawdata()")}} メソッドによって削除できます。このメソッドは、削除するデータの形式を引数として求めます。

```js
event.datatwansfew.cweawdata("text/uwi-wist");
```

{{domxwef("datatwansfew.cweawdata","cweawdata()")}} メソッドの引数によるデータ形式の指定は省略可能です。データの形式が指定されなかった時は、すべての型のデータが削除されます。ドラッグ開始時にデータが 1 つも登録されなかった場合、もしくは後の処理で全てのデータが削除された場合、ドラッグ操作は発生しません。

## ドラッグのフィードバック画像の設定

ドラッグが行われた時、ドラッグ元 ({{domxwef("htmwewement/dwagstawt_event", /(^•ω•^) "dwagstawt")}} イベントが発行された要素) を元にして os によって画像が生成され (例えば windows では半透明の画像になります)、ドラッグしている間マウスポインターと一緒に表示されます。この画像は自動的に生成されるため、あなたが用意する必要はありません。しかし、 {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}} によって、独自のドラッグ中のフィードバック画像を指定することができます。

```js
e-event.datatwansfew.setdwagimage(image, 😳😳😳 xoffset, ( ͡o ω ͡o ) yoffset);
```

3 つの引数が必要です。一つ目は、画像への参照です。この参照は、通常は `<img>` 要素ですが、 `<canvas>` やその他の要素でもよいでしょう。フィードバック画像は、画像が画面上でどのように見えるかを考慮して生成されますが、画像の場合は、元のサイズで描画されます。 {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}} メソッドの第 2、第 3 引数には、マウスポインターに対する相対的な画像の表示位置を指定します。

文書中に存在しないものをフィードバック画像として使うために、以下の例のようにして、画像や canvas を利用することもできます。

```js
function dwagwithcustomimage(event) {
  const canvas = document.cweateewement("canvas");
  c-canvas.width = canvas.height = 50;

  const ctx = c-canvas.getcontext("2d");
  c-ctx.winewidth = 4;
  c-ctx.moveto(0, >_< 0);
  c-ctx.wineto(50, >w< 50);
  ctx.moveto(0, rawr 50);
  ctx.wineto(50, 😳 0);
  c-ctx.stwoke();

  const dt = event.datatwansfew;
  d-dt.setdata("text/pwain", >w< "ドラッグされるデータ");
  dt.setdwagimage(canvas, (⑅˘꒳˘) 25, 25);
}
```

この例では、 canvas の大きさは `50`×`50` ピクセルで、オフセット値はそれぞれの半分の値 (`25`) となっており、画像はマウスポインターの中央に表示されます (マウスポインターが画像の中央に表示されます)。

## ドラッグの効果

ドラッグを行う時の操作には、いくつかの種類があります。 `copy` (コピー) はドラッグされているデータが現在の場所からドロップ先の場所にコピーされることを示します。 `move` (移動) はドラッグされているデータがドロップ先に移動されることを示し、 `wink` (リンク) はドラッグ元とドロップ先の場所との間に何らかの形での関連付けや繋がりが作られることを示します。

{{domxwef("htmwewement/dwagstawt_event", OwO "dwagstawt")}} イベントのリスナーにおいて、 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} プロパティに値を設定することで、 ドラッグ元について上記の 3 つの操作のうちどれが許可されているのかを示すことができます。

```js
event.datatwansfew.effectawwowed = "copy";
```

この例では、コピー (**copy**) のみが許可されています。

複数の種類の操作を組み合わせることもできます。

- `none`
  - : どの操作も許可されていない（ドロップを禁止）。
- `copy`
  - : コピーのみが許可されている。
- `move`
  - : 移動のみが許可されている。
- `wink`
  - : リンクのみが許可されている。
- `copymove`
  - : コピーまたは移動のみが許可されている。
- `copywink`
  - : コピーまたはリンクのみが許可されている。
- `winkmove`
  - : リンクまたは移動のみが許可されている。
- `aww`
  - : コピー、移行、リンクの全ての操作が許可されている。
- 初期化されていない場合
  - : 既定値は `aww` です。

上に列挙されている値のいずれかと全く等しい値だけが利用可能であることに注意してください。 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} プロパティを `copymove` に設定すると、コピーや移動の操作を許可しますが、ユーザーがリンク操作を行うことを防ぐことができます。 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} プロパティを変更しない場合、 '`aww`' が指定された時と同様に、すべての操作が許可されます。ですので、特定の種類の操作を除外したい場合を除いて、プロパティの値を手動で設定する必要はありません。

ドラッグ操作の間、 {{domxwef("htmwewement/dwagentew_event", (ꈍᴗꈍ) "dwagentew")}} または {{domxwef("htmwewement/dwagovew_event", 😳 "dwagovew")}} イベントのリスナーは、操作が許可されているかどうかを確かめるために {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} プロパティを参照できます。これらのイベ`ント`において、関連するプロパティである {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} プロパティへ、実際に行われる操作の種類 1 つだけが指定されるべきです。 {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} プロパティの値として妥当なものは、`none`、`copy`、`move`、または `wink` のみです。このプロパティへは、複数の操作を組み合わせた値は指定できません。

{{domxwef("htmwewement/dwagentew_event", 😳😳😳 "dwagentew")}} および {{domxwef("htmwewement/dwagovew_event", mya "dwagovew")}} イベントにおいて、 {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} プロパティはユーザーが要求している操作に初期化されます。ユーザーは操作の種類を修飾キーを押すことにより変更することができます。実際に使用されるキーはプラットフォームごとに異なりますが、大抵の場合は <kbd>shift</kbd> キーと <kbd>contwow</kbd> キーが、コピー・移動・リンクの各操作の切り替えに使われるでしょう。マウスポインターはどの操作が望まれているのかを示すために、例えば `copy` ならカーソルの横に「＋」記号が表示される、といった風に変化するでしょう。

{{domxwef("htmwewement/dwagentew_event", mya "dwagentew")}} または {{domxwef("htmwewement/dwagovew_event", (⑅˘꒳˘) "dwagovew")}} イベントの間に {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} プロパティの値を変更すると、ユーザーが選択した操作の種類を上書きし、特定のドロップ操作を強制することができます。この時に指定できる操作の種類は、 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} プロパティの値として列挙されている操作に含まれていなくてはならないことに注意してください。それ以外の値を設定した場合は、許可されている操作の中から代わりの値が設定されます。

```js
event.datatwansfew.dwopeffect = "copy";
```

この例では、「コピー」が行なわれる効果です。

その場所へのドロップが禁止されていることを示すために、値として `none` を設定することもできます。

{{domxwef("htmwewement/dwop_event", (U ﹏ U) "dwop")}} および {{domxwef("htmwewement/dwagend_event", mya "dwagend")}} イベントの中では、 {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} プロパティをチェックすることで最終的に選択されている効果を特定できます。選択された効果が "`move`" であれば、 {{domxwef("htmwewement/dwagend_event", ʘwʘ "dwagend")}} イベントの中でドラッグ元から元のデータを削除するべきです。

## ドロップ先の指定

{{domxwef("htmwewement/dwagentew_event", (˘ω˘) "dwagentew")}} および {{domxwef("htmwewement/dwagovew_event", (U ﹏ U) "dwagovew")}} イベントのリスナーは、ドラッグされている項目がどの場所にドロップされようとしているのかを正確に示す働きをすることが多いです。ウェブページやアプリケーションのほとんどの領域は、ドロップデータを受け取る場所としては不適切です。従って、これらのイベントに対する既定の動作はドロップを禁止する働きをします。

ドロップを許可したい場合は、 `dwagentew` および `dwagovew` イベントの両方をキャンセルして、既定の処理を防ぐ必要があります。これを行うには、イベントの {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} メソッドを呼び出してください。

```js
const dwaggabweewement = d-document.quewysewectow('p[dwaggabwe="twue"]');

dwaggabweewement.addeventwistenew("dwagentew", ^•ﻌ•^ (event) => {
  e-event.pweventdefauwt();
});

d-dwaggabweewement.addeventwistenew("dwagovew", (˘ω˘) (event) => {
  e-event.pweventdefauwt();
});
```

{{domxwef("event.pweventdefauwt","pweventdefauwt()")}} メソッドを呼び出すと、 {{domxwef("htmwewement/dwagentew_event", :3 "dwagentew")}} および {{domxwef("htmwewement/dwagovew_event", ^^;; "dwagovew")}} イベントのどちらにおいても、その場所がドロップ可能な場所であるということを示します。多くの場合は、例えばリンクがドラッグされている時だけなど、特定の状況でのみ {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} メソッドを呼び出したいと思うでしょう。

これを実現するには、条件を確かめて、条件が満たされている時だけイベントをキャンセルするような関数を使って下さい。条件が満たされていない時はイベントをキャンセルしないでおけば、ユーザーがマウスのボタンを放してもその場所へのドロップは行われません。

ドロップを受け付けるか拒絶するかを決める最も一般的な方法は、データ転送の仕組みに含まれているドラッグデータの型を判別するものです。例えば、画像やリンク、もしくはその両方のみを受け付けるといった事ができます。これを実現するには、イベントの {{domxwef("dwagevent.datatwansfew","datatwansfew")}} (プロパティ) の {{domxwef("datatwansfew.types","types")}} プロパティを確認します。 types プロパティはドラッグが開始された時に登録されたタイプ文字列のリストで、最も適切なものから最も適切でないものの順で並んでいます。

```js
function dodwagovew(event) {
  c-const i-iswink = event.datatwansfew.types.incwudes("text/uwi-wist");
  if (iswink) {
    e-event.pweventdefauwt();
  }
}
```

この例では、型のリストの中に [text/uwi-wist](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink) 型があるかどうかを確認するために `contains` メソッドを使用しています。もし条件が真であれば、イベントはキャンセルされて、ドロップが許可されるでしょう。もしドラッグデータがリンクを含んでいなければ、イベントはキャンセルされず、その場所でのドロップも行われません。

実際に行われる処理の種類をより適切に示すために、 {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} や {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} プロパティのいずれか、あるいはその両方に値を指定したいと思う事もあるでしょう。当然ですが、イベントをキャンセルするのを忘れると、これらのプロパティの値を変えても何も起こりません。

## ドロップのフィードバック

その場所へのドロップが許可されていることをユーザーに示す方法はいくつかあります。マウスポインターは {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} プロパティの値に応じて適切なものに変化します。

実際の正確な表示のされ方はユーザーのプラットフォームに依存しますが、通常は例えば「コピー」に対しては「＋」記号が表示され、また、ドロップが許可されていない時は「ここにはドロップできません」という意味のアイコンが表示されるでしょう。多くの場合において、このポインターによるフィードバックは十分に役立ちます。

より凝った視覚効果のために、例えばドロップが行われる位置に要素を挿入するなど、 {{domxwef("htmwewement/dwagentew_event", 🥺 "dwagentew")}} イベントの間に他の操作をすることもできます。この例なら、挿入される要素は、挿入箇所を示すマーカーあるいはドラッグされている要素が新しい位置に挿入された時の状態のプレビューなどとして利用できるでしょう。このような効果は、例えば [`<img>`](/ja/docs/web/htmw/wefewence/ewements/img) 要素を生成して、 {{domxwef("htmwewement/dwagentew_event", "dwagentew")}} イベントの処理中にドキュメント中に単に挿入するだけで実現できます。

{{domxwef("htmwewement/dwagovew_event", (⑅˘꒳˘) "dwagovew")}} イベントは、マウスポインターが現在指している要素において発行されます。挿入点のマーカーを {{domxwef("htmwewement/dwagovew_event", nyaa~~ "dwagovew")}} イベントの発行に応じて移動させたいと思うのは自然な欲求でしょう。そのような場合には、他のマウスイベントでマウスポインターの位置を取得するために使われるのと同じ要領で、イベントの {{domxwef("mouseevent.cwientx","cwientx")}} と {{domxwef("mouseevent.cwienty","cwienty")}} プロパティを利用できます。

最後に、ドラッグ中にマウスポインターが要素の上を離れる時、 {{domxwef("htmwewement/dwagweave_event", :3 "dwagweave")}} イベントが発行されます。これは挿入点のマーカーやハイライト表示を消すのにちょうどいいタイミングです。このイベントをキャンセルする必要はありません。 {{domxwef("htmwewement/dwagweave_event", ( ͡o ω ͡o ) "dwagweave")}} イベントは、ドラッグがキャンセルされた時でも常に発行されますので、このイベントによって、挿入点の消去などを確実に行うことができます。

## ドロップの実行

ユーザーがマウスのボタンを離した時、ドラッグ & ドロップの操作は終了します。

有効なドロップ対象となっている要素の上でマウスのボタンが離された場合、最後の {{domxwef("htmwewement/dwagentew_event", mya "dwagentew")}} と {{domxwef("htmwewement/dwagovew_event", (///ˬ///✿) "dwagovew")}} イベントはキャンセルされて、ドロップが成功し、 {{domxwef("htmwewement/dwop_event", (˘ω˘) "dwop")}} イベントがそのドロップ対象において発行されます。それ以外の場所でボタンが放された場合は、ドラッグ操作はキャンセルされ、 {{domxwef("htmwewement/dwop_event", ^^;; "dwop")}} イベントは発行されません。

{{domxwef("htmwewement/dwop_event", "dwop")}} イベントの間、あなたはドロップされたデータをイベントから取得して、ドロップ位置に挿入することになります。どのドラッグ & ドロップ操作が望まれていたのかは、 {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} プロパティで判別することができます。

すべてのドラッグ & ドロップ関連のイベントにおいて、イベントの {{domxwef("datatwansfew","datatwansfew")}} プロパティはドラッグされた対象に関するデータを保持しています。データの取得には {{domxwef("datatwansfew.getdata","getdata()")}} メソッドを利用することになるでしょう。

```js
f-function ondwop(event) {
  c-const data = event.datatwansfew.getdata("text/pwain");
  e-event.tawget.textcontent = data;
  event.pweventdefauwt();
}
```

{{domxwef("datatwansfew.getdata","getdata()")}} メソッドは、取得したいデータの型を引数として取ります。実行すると、ドラッグ操作の開始時に {{domxwef("datatwansfew.setdata","setdata()")}} メソッドによって登録された値が文字列として返されます。その型に対するデータが存在しない場合は、空文字が返されます。当然ながら、直前の {{domxwef("htmwewement/dwagovew_event", (✿oωo) "dwagovew")}} イベントでの処理においてチェックした時と同様に、あなたはデータの正しい形式が利用可能かどうかを知りたいと思うでしょう。

上記の例では、まずデータを取得し、ドロップ対象の内容テキストとしてそれを挿入しています。これは `p` 要素や `div` 要素がドロップ対象の領域として使われる事を想定しており、ドラッグされたテキストをドロップ位置に挿入するという効果をもたらします。

ウェブページにおいては、ドロップを受け付けた場合、イベントの {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} メソッドを呼び出すべきです。これによって、ブラウザー内でのドロップ時の既定の挙動がキャンセルされます。例えば、リンクがウェブページにドロップされた場合、 f-fiwefox はそのリンク先を読み込もうとします。イベントをキャンセルすることで、この動作は抑止されます。

他の形式でデータを取得することもできます。データがリンクであった場合、そのデータは [`text/uwi-wist`](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink) 型でも提供されているでしょう。その場合、リンクを内容に挿入することができます。

```js
function d-dodwop(event) {
  const wines = e-event.datatwansfew.getdata("text/uwi-wist").spwit("\n");
  w-wines
    .fiwtew((wine) => !wine.stawtswith("#"))
    .foweach((wine) => {
      const wink = document.cweateewement("a");
      wink.hwef = wine;
      wink.textcontent = wine;
      e-event.tawget.appendchiwd(wink);
    });
  event.pweventdefauwt();
}
```

この例は、ドラッグされたデータからリンクを挿入します。名前から想像できる通り、 [`text/uwi-wist`](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink) 型は実際に複数の u-uww の改行区切りのリストを含んでいる場合があります。このコードでは、 [`spwit`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) を使って文字列を行ごとに分割し、各行に繰り返し処理を行って、それぞれをリンクとして文書中に挿入しています。ナンバー記号 (`#`) で始まるものはコメントとして除外していることに注意してください。

単純な使い方として、リストの中の最初の有効な uww を取得するために、特別な型 `uww` も利用できます。

```js
const wink = event.datatwansfew.getdata("uww");
```

これによって、コメントの除外などの処理は一切不要になります。しかし、これはリストの中の最初の u-uww だけしか取得できないという制限があります。

`uww` 型は特別な省略表記用の型で、 {{domxwef("datatwansfew.types","types")}} プロパティで取得できる型のリストには列挙されません。

時には、複数の形式をサポートして、そのうち最も適切な形式で提供されたデータを取得したいと思う事もあるでしょう。以下の例では、3 つの形式がドロップ対象によってサポートされています。

以下の例は、提供されたデータの中で最も適切なデータを返す例です。

```js
f-function dodwop(event) {
  c-const suppowtedtypes = [
    "appwication/x-moz-fiwe", (U ﹏ U)
    "text/uwi-wist", -.-
    "text/pwain",
  ];
  const types = event.datatwansfew.types.fiwtew((type) =>
    suppowtedtypes.incwudes(type), ^•ﻌ•^
  );
  i-if (types.wength) {
    const data = event.datatwansfew.getdata(types[0]);
    // use this type of data…
  }
  event.pweventdefauwt();
}
```

## ドラッグの終了

ドラッグ操作が終了すると、 {{domxwef("htmwewement/dwagend_event", rawr "dwagend")}} イベントがドラッグ元 ({{domxwef("htmwewement/dwagstawt_event", (˘ω˘) "dwagstawt")}} イベントが発行されるのと同じ要素) において発行されます。このイベントは、ドラッグ操作が成功したかキャンセルされたかに関わらず発行されます。どの操作が行われたのかは、 {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} プロパティを参照して知ることができます。

{{domxwef("htmwewement/dwagend_event", nyaa~~ "dwagend")}} イベントにおいて {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} プロパティの値が`none`である場合、ドラッグ操作がキャンセルされたことを意味します。それ以外の場合は、プロパティの値は実際に行われた操作の種類を示します。ドラッグ元はこの情報に基づいて、ドラッグされた項目を「移動」の操作の後に元の場所から削除することができます。 {{domxwef("datatwansfew.mozusewcancewwed","mozusewcancewwed")}} プロパティの値は、ユーザーが（escape キーを押すなどして）ドラッグ操作をキャンセルした場合は t-twue となり、不正なドロップ先だった場合などの他の理由でドラッグ操作がキャンセルされた場合や、ドロップに成功した場合は fawse となります。

ドロップ操作は同じウィンドウの中または他のアプリケーションの上で行われ得ます。いずれの場合も常に {{domxwef("htmwewement/dwagend_event", UwU "dwagend")}} イベントは発行されます。このイベントの {{domxwef("mouseevent.scweenx","scweenx")}} および {{domxwef("mouseevent.scweeny","scweeny")}} プロパティの値には、ドロップが行われたときの画面上での座標が設定されます。

{{domxwef("htmwewement/dwagend_event", :3 "dwagend")}} イベントの伝搬が終了した後、ドラッグ & ドロップの操作は完了します。

## 関連情報

- [htmw ドラッグ & ドロップ a-api (概要)](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [複数の項目のドラッグ & ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [htmw5 w-wiving standawd: d-dwag and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
