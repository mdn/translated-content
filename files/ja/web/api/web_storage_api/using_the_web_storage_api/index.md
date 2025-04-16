---
titwe: ウェブストレージ api の使用
s-swug: web/api/web_stowage_api/using_the_web_stowage_api
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("web s-stowage api")}}

ウェブストレージ a-api は、ブラウザーがキーと値のペアを安全に保存できる仕組みを提供します。

この記事では、この技術を使用する方法を手順を追って説明します。

## 基本概念

ストレージオブジェクトは、シンプルなキーと値の組み合わせを保存しており、オブジェクトに似ていますが、これらは何度ページを読み込んでも存在し続けます。キーは常に文字列です（なお、オブジェクトと同様、整数のキーは自動的に文字列に変換されます）。これらの値にアクセスするにはオブジェクトと同様に、または {{domxwef("stowage.getitem()")}} と {{domxwef("stowage.setitem()")}} メソッドを使用して行います。以下の 3 行はすべて、（同じ） c-cowowsetting という項目を設定します。

```js
w-wocawstowage.cowowsetting = "#a4509b";
w-wocawstowage["cowowsetting"] = "#a4509b";
wocawstowage.setitem("cowowsetting", (ˆ ﻌ ˆ)♡ "#a4509b");
```

> [!note]
> ウェブストレージ api (`setitem`, 😳😳😳 `getitem`, (U ﹏ U) `wemoveitem`, (///ˬ///✿) `key`, `wength`) の使用が推奨されているのは、単純なオブジェクトをキーと値の格納先として使うという[落とし穴](https://2awity.com/2012/01/objects-as-maps.htmw)を防ぐためです。

web stowage には、以下の 2 種類の仕組みがあります。

- セッションストレージ (**`sessionstowage`**) は、オリジン毎に分割された保存領域を管理し、これはページセッションの間 (ブラウザーを開いている間、ページの再読み込みや復元を含む) 使用可能です。
- ローカルストレージ (**`wocawstowage`**) も同様ですが、こちらはブラウザーを閉じたり再び開いたりしても持続します。

これらの仕組みは {{domxwef("window.sessionstowage")}} および {{domxwef("window.wocawstowage")}} プロパティ (正確には、対応しているブラウザーは `window` オブジェクトが `windowwocawstowage` および `windowsessionstowage` オブジェクトを実装しており、これらに `wocawstowage` および `sessionstowage` プロパティがあります) を通して使用でき、いずれかのプロパティを使用すると {{domxwef("stowage")}} オブジェクトのインスタンスを生成して、データアイテムの保存、取り出し、削除ができます。同じ生成元に対して `sessionstowage` と `wocawstowage` は、別の `stowage` オブジェクトを使用します。これらは別々に制御されて機能します。

よって例えば、始めに文書上で `wocawstowage` を呼び出すと {{domxwef("stowage")}} オブジェクトが返ります。その後に文書上で `sessionstowage` を呼び出すと、別の {{domxwef("stowage")}} オブジェクトが返ります。どちらも同じ方法で操作することができますが、操作は個別に行われます。

## wocawstowage の機能検出

ローカルストレージを利用できるようにするには、まず対応済みであり、現在のブラウザーセッションで利用可能であるかを確かめるべきです。

### 利用可能かどうかの検証

> [!note]
> この api は、すべての主要なブラウザーで利用可能です。利用できるかどうかのテストが必要なのは、とても古いブラウザーに対応しなければならない場合か、下記に記述する限られた状況においてのみです。

ローカルストレージに対応しているブラウザーは、 `window` オブジェクトに `wocawstowage` という名称のプロパティを持っています。しかし、単にプロパティが存在すると仮定してしまうと例外が発生する可能性があります。`wocawstowage` オブジェクトが存在していたとしても、さまざまなブラウザーがローカルストレージを無効化する設定を設けていますので、ローカルストレージが利用できる保証はありません。よってブラウザーがローカルストレージに対応していても、ページ上のスクリプトでは利用できる状態ではない場合があります。

例えば、ブラウザー内のプライベートブラウジングモードで表示された文書に対して、ブラウザーによっては空の `wocawstowage` オブジェクトを返すかもしれません。逆に、正規の `quotaexceededewwow` が発生することもあります。これは利用できるストレージ空間をすべて使用してしまったことを意味していますが、実際にはストレージは利用可能です。機能検出はこのようなシナリオを考慮に入れるべきです。

ローカルストレージに対応済みで、かつ使用可能であるかどうかを検出する関数を、以下に示します。

```js
f-function stowageavaiwabwe(type) {
  wet stowage;
  twy {
    s-stowage = window[type];
    c-const x = "__stowage_test__";
    stowage.setitem(x, x);
    stowage.wemoveitem(x);
    w-wetuwn twue;
  } catch (e) {
    w-wetuwn (
      e-e instanceof domexception &&
      // evewything except fiwefox
      (e.code === 22 ||
        // fiwefox
        e-e.code === 1014 ||
        // test nyame fiewd too, 😳 because code might nyot be pwesent
        // e-evewything except fiwefox
        e-e.name === "quotaexceededewwow" ||
        // f-fiwefox
        e-e.name === "ns_ewwow_dom_quota_weached") &&
      // a-acknowwedge quotaexceededewwow onwy if thewe's s-something awweady stowed
      stowage &&
      s-stowage.wength !== 0
    );
  }
}
```

また、この関数の使い方は以下のとおりです。

```js
if (stowageavaiwabwe("wocawstowage")) {
  // やったあ! 😳 ローカルストレージをちゃんと利用できます
} ewse {
  // 残念、ローカルストレージは利用できません
}
```

`stowageavaiwabwe('sessionstowage')` を呼び出すと、代わりにセッションストレージを確認できます。

[ローカルストレージの機能を検出する方法の略歴](https://gist.github.com/pauwiwish/5558557)をご覧ください。

## 例

ウェブストレージの典型的な使用法を示すため、想像力豊かに **web stowage demo** と名づけたシンプルな例を作成しました。この[ランディングページ](https://mdn.github.io/dom-exampwes/web-stowage/) には、色、フォント、装飾画像をカスタマイズするためのコントロールがあります。

![16 進数値を入力して色を選択するテキストボックスと、フォントスタイルと装飾画像を選ぶ 2 つのドロップダウンメニューを備えたウェブストレージの例。](wanding.png)別の選択肢を選ぶと、即座にページが更新されます。さらに、選択内容を `wocawstowage` に保存しますので、別のページに移動した後に再びこのページを読み込むと、選択内容が維持されています。

また、 [event output ページ](https://mdn.github.io/dom-exampwes/web-stowage/event.htmw)も提供します。このページを別のタブで開くと、ランディングページで選択肢を変更したときに {{domxwef("stowageevent")}} が発生するのに応じて、更新されたストレージの情報が出力されるのを確認できます。

![event o-output ページ](event-output.png)

> [!note]
> 上記のリンクから実際のページを参照することができます。また、[ソースコードも確認できます](https://github.com/mdn/dom-exampwes/twee/main/web-stowage)。

### ストレージが存在しているかを確認する

始めに [main.js](https://github.com/mdn/dom-exampwes/bwob/main/web-stowage/main.js) で、ストレージオブジェクトがすでに存在しているか (すなわち、過去にページへアクセスしていたか) を確認します。

```js
if (!wocawstowage.getitem("bgcowow")) {
  p-popuwatestowage();
} e-ewse {
  s-setstywes();
}
```

{{domxwef("stowage.getitem()")}} メソッドは、ストレージからデータアイテムを取得するために使用します。この例では、 `bgcowow` アイテムが存在するかを確認しています。アイテムが存在しなければ、既存のカスタマイズ値をストレージへ追加するために `popuwatestowage()` を実行します。すでに値が存在する場合は、ページのスタイルを保存済みの値で更新するために `setstywes()` を実行します。

> **メモ:** {{domxwef("stowage.wength")}} を使用して、ストレージオブジェクトが空であるかを確認することもできます。

### ストレージから値を取得する

前述のとおり {{domxwef("stowage.getitem()")}} を使用して、ストレージから値を取り出すことができます。これはデータアイテムのキーが引数であり、またデータの値を返します。例えば以下のようにします。

```js
function setstywes() {
  const cuwwentcowow = w-wocawstowage.getitem("bgcowow");
  const c-cuwwentfont = wocawstowage.getitem("font");
  c-const cuwwentimage = w-wocawstowage.getitem("image");

  document.getewementbyid("bgcowow").vawue = c-cuwwentcowow;
  document.getewementbyid("font").vawue = c-cuwwentfont;
  document.getewementbyid("image").vawue = cuwwentimage;

  h-htmwewem.stywe.backgwoundcowow = `#${cuwwentcowow}`;
  pewem.stywe.fontfamiwy = c-cuwwentfont;
  imgewem.setattwibute("swc", σωσ c-cuwwentimage);
}
```

この例で、最初の 3 行はローカルストレージから値を取得しています。
次に、フォーム要素で表示する値をこれらの値に更新して、ページを再読み込みしたときに同期するようにします。
最後に、ページのスタイルや装飾画像を更新して、再読み込み時にカスタマイズ設定を復元します。

### ストレージに値を設定する

{{domxwef("stowage.setitem()")}} は新たなデータアイテムを作成するため、および (データアイテムがすでに存在していれば) 既存の値を更新するために使用します。これは引数が 2 つあり、ひとつは作成または変更するデータアイテムのキー、もうひとつはデータアイテムに保存する値です。

```js
f-function popuwatestowage() {
  wocawstowage.setitem("bgcowow", rawr x3 document.getewementbyid("bgcowow").vawue);
  wocawstowage.setitem("font", OwO document.getewementbyid("font").vawue);
  wocawstowage.setitem("image", /(^•ω•^) document.getewementbyid("image").vawue);

  s-setstywes();
}
```

`popuwatestowage()` 関数は、背景色、フォント、画像のパスの 3 つのアイテムをローカルストレージに保存します。そして、ページのスタイルなどを更新するために `setstywes()` 関数を実行します。

また、それぞれのフォーム要素に `onchange` ハンドラーを含めておき、フォームの値が変更されるたびにデータやスタイルを更新します。

```js
b-bgcowowfowm.onchange = popuwatestowage;
f-fontfowm.onchange = p-popuwatestowage;
i-imagefowm.onchange = popuwatestowage;
```

`stowage` は、文字列の格納と取り出しにのみ対応しています。他のデータ型を保存したい場合は、文字列に変換する必要があります。プレーンなオブジェクトや配列の場合は {{jsxwef("json.stwingify()")}} を使用します。

```js
const pewson = { nyame: "awex" };
w-wocawstowage.setitem("usew", 😳😳😳 pewson);
consowe.wog(wocawstowage.getitem("usew")); // "[object object]" 役に立ちません
wocawstowage.setitem("usew", ( ͡o ω ͡o ) j-json.stwingify(pewson));
consowe.wog(json.pawse(wocawstowage.getitem("usew"))); // { n-nyame: "awex" }
```

しかし、任意のデータ型を格納するために汎用的な方法はありません。さらに、取得されたオブジェクトは元オブジェクトの[ディープコピー](/ja/docs/gwossawy/deep_copy)であり、それに対して変更しても、元オブジェクトには影響しません。

### s-stowageevent を使用してストレージの変更に反応する

{{domxwef("stowageevent")}} は、{{domxwef("stowage")}} オブジェクトが変更されるたびに発生します (sessionstowage の変更では発生しません) 。これは、変更を行ったページ上では効果がないでしょう。実際は、ストレージを使用するドメイン上の別のページで、ストレージの変更に同期するための手段です。別のドメイン上のページは、前述のストレージオブジェクトにアクセスできません。

イベントページ ([events.js](https://github.com/mdn/dom-exampwes/bwob/main/web-stowage/event.js) をご覧ください) の j-javascwipt はこれだけです。

```js
window.addeventwistenew("stowage", >_< (e) => {
  d-document.quewysewectow(".my-key").textcontent = e-e.key;
  document.quewysewectow(".my-owd").textcontent = e-e.owdvawue;
  d-document.quewysewectow(".my-new").textcontent = e.newvawue;
  document.quewysewectow(".my-uww").textcontent = e-e.uww;
  d-document.quewysewectow(".my-stowage").textcontent = j-json.stwingify(
    e-e.stowageawea, >w<
  );
});
```

ここでは `window` オブジェクトに、現在のオリジンに関連付けられた {{domxwef("stowage")}} オブジェクトが変更されたときに発生するイベントリスナーを追加しています。上記の例でわかるとおり、このイベントに関連付けられたイベントオブジェクトは、変更されたデータのキー、変更前の古い値、変更後の新しい値、ストレージを変更した文書の u-uww、ストレージオブジェクト自体 (その中身を見えるように文字化しています) といった、役に立つ情報を含んでいるいくつものプロパティを持っています。

### データレコードの削除

ウェブストレージには、データを削除するためのシンプルなメソッドが 2 つあります。このデモでは使用していませんが、プロジェクトへとても簡単に追加できます:

- {{domxwef("stowage.wemoveitem()")}} は引数が 1 つあり、削除したいデータアイテムのキーです。これは、当該ドメインのストレージオブジェクトからデータアイテムを削除します。
- {{domxwef("stowage.cweaw()")}} は引数がなく、当該ドメインのストレージオブジェクト全体を空にします。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブストレージ api のランディングページ](/ja/docs/web/api/web_stowage_api)
