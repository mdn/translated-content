---
title: console
slug: Web/API/console
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console`** オブジェクトは、ブラウザーのデバッグコンソール（例えば Firefox の[ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)）へのアクセスを提供します。

コンソール API の実装はランタイムによって異なる場合があります。具体的な例として、いくつかのコンソールメソッドはオンラインエディターや IDE によっては動作が異なったり、まったく動作しなかったりすることがあります。この記事で記述された動作を確認するには、ブラウザーの開発者ツールでメソッドを試してください。

`console` オブジェクトには任意のグローバルオブジェクトからアクセスできます。閲覧スコープの {{domxref("Window")}} や、特定の種類のワーカーを表す {{domxref("WorkerGlobalScope")}} の console プロパティを通してアクセスできます。これは {{domxref("Window.console")}} として公開されていますが、単に `console` として参照できます。

```js
console.log("Failed to open the specified link");
```

## メソッド

- {{domxref("console/assert_static", "console.assert()")}}
  - : 第 1 引数が `false` であれば、エラーメッセージをコンソールに出力します。
- {{domxref("console/clear_static", "console.clear()")}}
  - : コンソールをクリアします。
- {{domxref("console/count_static", "console.count()")}}
  - : 指定されたラベルでこの行が呼び出された回数をログ出力します。
- {{domxref("console/countReset_static", "console.countReset()")}}
  - : 指定されたラベルのカウンターの値をリセットします。
- {{domxref("console/debug_static", "console.debug()")}}
  - : コンソールへデバッグログレベルでメッセージを出力します。
- {{domxref("console/dir_static", "console.dir()")}}
  - : 指定した JavaScript オブジェクトのプロパティの、対話型リストを表示します。このリスト内の三角印をクリックすると、子オブジェクトの内容を調査して表示させることができます。
- {{domxref("console/dirxml_static", "console.dirxml()")}}
  - : 指定したオブジェクトを XML/HTML 要素で表現したものを表示します。表現できない場合は、JavaScript オブジェクトビューを表示します。
- {{domxref("console/error_static", "console.error()")}}
  - : コンソールへエラーログレベルでメッセージを出力します。
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : `console.error()` の別名です。
- {{domxref("console/group_static", "console.group()")}}
  - : 新たなインライン[グループ](#コンソールでのグループの使用)を作成し、以降のすべての出力を別なレベルに字下げします。レベルを戻すには、`console.groupEnd()` を呼び出します。
- {{domxref("console/groupCollapsed_static", "console.groupCollapsed()")}}
  - : 新たなインライン[グループ](#コンソールでのグループの使用)を作成し、以降のすべての出力を別なレベルに字下げします。 `console.group()` とは異なり、グループが折りたたまれた状態で作られ、それを開くには展開ボタンを操作する必要があります。レベルを戻すには、`console.groupEnd()` を呼び出します。
- {{domxref("console/groupEnd_static", "console.groupEnd()")}}
  - : 現在のインライン[グループ](#コンソールでのグループの使用)から抜けます。
- {{domxref("console/info_static", "console.info()")}}
  - : コンソールへ情報ログレベルでメッセージを出力します。
- {{domxref("console/log_static", "console.log()")}}
  - : コンソールへメッセージを出力します。
- {{domxref("console/profile_static", "console.profile()")}} {{Non-standard_inline}}
  - : ブラウザー内蔵のプロファイラー (例えば [Firefox のパフォーマンスツール](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)) を開始します。プロファイルの名称を指定することができます。
- {{domxref("console/profileEnd_static", "console.profileEnd()")}} {{Non-standard_inline}}
  - : プロファイラーを停止します。結果のプロファイルは、ブラウザーのパフォーマンスツール (例えば [Firefox のパフォーマンスツール](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)) で確認できます。
- {{domxref("console/table_static", "console.table()")}}
  - : 表形式のデータを、表を使用して表示します。
- {{domxref("console/time_static", "console.time()")}}
  - : 入力引数で指定された名前の[タイマー](#タイマー)を開始します。ページあたり最大 10,000 個のタイマーを同時に動かすことができます。
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
  - : 指定された[タイマー](#タイマー)を停止して、そのタイマーを開始してからの時間を秒単位でログに出力します。
- {{domxref("console/timeLog_static", "console.timeLog()")}}
  - : 指定された[タイマー](#タイマー)の値をコンソールへ出力します。
- {{domxref("console/timeStamp_static", "console.timeStamp()")}} {{Non-standard_inline}}
  - : ブラウザー（[Chrome](https://developer.chrome.com/docs/devtools/performance/reference) または [Firefox](https://profiler.firefox.com/docs/#/./guide-ui-tour-timeline)）のパフォーマンスツールのタイムラインにマーカーを追加します（。
- {{domxref("console/trace_static", "console.trace()")}}
  - : [スタックトレース](#スタックトレース)を出力します。
- {{domxref("console/warn_static", "console.warn()")}}
  - : コンソールへ警告ログレベルでメッセージを出力します。

## 例

### コンソールへのテキストの出力

コンソールでもっとも頻繁に使用される機能は、テキストやその他のデータをログ出力することです。生成することができる出力のカテゴリーはいくつかあり、{{domxref("console/log_static", "console.log()")}}、{{domxref("console/info_static", "console.info()")}}、{{domxref("console/warn_static", "console.warn()")}}、{{domxref("console/error_static", "console.error()")}}、{{domxref("console/debug_static", "console.debug()")}} の各メソッドを使用します。これらメソッドの出力結果はログ上でそれぞれ異なるスタイルがつけられ、また関心がある種類の出力だけを参照するためにブラウザーが提供するフィルター機能を使用することもできます。

各出力メソッドを使用する方法は 2 つあります。

- 可変個数の引数を渡すと、その文字列表現が 1 つの文字列に連結され、コンソールに出力されます。
- 0 個以上の置換文字列を含む文字列と、それに続く可変個数の引数を渡して置換します。

#### 単一のオブジェクトの出力

もっとも簡単にログを記録する方法は、単一のオブジェクトを出力することです。

```js
const someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

出力内容は以下のようになります。

```plain
{str:"Some text", id:5}
```

ブラウザーは、オブジェクトに関する情報を可能な限り表示します。例えば、オブジェクトのプライベートな状態も表示されるかもしれません。DOM 要素や関数のようなある種のオブジェクトは、特別な方法で表示されることもあります。

#### オブジェクトのスナップショット

オブジェクトに関する情報は、遅延して取得されます。これは、ログメッセージはオブジェクトがログ出力された時点ではなく、最初に表示された時点のオブジェクトのコンテンツを表示させるということです。例えば、次のようになります。

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

これは `{}` を出力します。しかし、オブジェクトの詳細を展開すると、`prop: 123` と表示されます。

オブジェクトを変更しようとしていて、ログ出力した情報が更新されないようにしたい場合は、ログ出力する前にオブジェクトを[ディープクローン](/ja/docs/Glossary/Deep_copy)することができます。一般的な方法は、{{jsxref("JSON.stringify()")}} してから {{jsxref("JSON.parse()")}} することです。

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

ブラウザーで動作する他の選択肢として、[`structuredClone()`](/ja/docs/Web/API/Window/structuredClone) があり、これはさまざまな種類のオブジェクトを複製するのに有効です。

#### 複数のオブジェクトの出力

ログ出力のメソッドを呼び出すときにオブジェクトを羅列することで、複数のオブジェクトを出力することもできます。

```js
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

出力は以下のようになります。

```plain
My first car was a Dodge Charger. The object is: {str:"Some text", id:5}
```

#### 文字列置換の使用

ログ出力メソッドの最初の引数は、0 個以上の置換文字列の入った文字列とすることができます。各置換文字列は、対応する引数値で置き換えられます。

- `%o`
  - : JavaScript オブジェクトを「最適に有益な書式設定」スタイルで出力します。例えば、DOM 要素は要素インスペクターに現れるのと同じ方法で表示されます。
- `%O`
  - : 「一般的な JavaScript オブジェクト書式化」スタイルで、通常は展開されたツリーの形で JavaScript オブジェクトを出力します。これは {{domxref("console/dir_static", "console.dir()")}} に似ています。
- `%d` または `%i`
  - : 整数値を出力します。
- `%s`
  - : 文字列を出力します。
- `%f`
  - : 浮動小数点数値を出力します。
- `%c`
  - : 以下のテキストすべてに CSS スタイルルールを適用します。[コンソール出力のスタイル設定](#コンソールの出力のスタイル付け)を参照してください。

ブラウザーによっては追加の書式を指定します。例えば、Safari と Firefox は C スタイルの精度書式 `%.<精度>f` に対応しています。例えば、`console.log("Foo %.2f", 1.1)` は小数点以下 2 桁の数値を出力し、`Foo 1.10` となります。`console.log("Foo %.2d", 1.1)` は有効数字 2 桁に先頭の 0 を加えた数値を出力し、 `Foo 01` となります。

これらは引数リストの書式化文字列の後にある引数を引用します。例えば次のようになります。

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}
```

出力は以下のようになります。

```plain
Hello, Bob. You've called me 1 times.
Hello, Bob. You've called me 2 times.
Hello, Bob. You've called me 3 times.
Hello, Bob. You've called me 4 times.
Hello, Bob. You've called me 5 times.
```

#### コンソールの出力のスタイル付け

`%c` ディレクティブを使用すると、コンソールの出力に CSS スタイルを適用することができます。

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

ディレクティブの前のテキストは影響を受けませんが、ディレクティブの後ろのテキストは引数の CSS 宣言を使用して装飾されます。

![Firefox コンソールでスタイル付けされたテキスト](css-styling.png)

`%c` は複数回使用することができます。

```js
console.log(
  "Multiple styles: %cred %corange",
  "color: red",
  "color: orange",
  "Additional unformatted message",
);
```

`%c` で利用できるプロパティは次の通りです。 (少なくとも、 Firefox では — 他のブラウザーでは異なる可能性があります)。

- {{cssxref("background")}} および同等の個別指定
- {{cssxref("border")}} および同等の個別指定
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} and {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} および同等の個別指定
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} および同等の個別指定
- {{cssxref("padding")}}
- `text-*`、例えば {{cssxref("text-transform")}}
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} および {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> [!NOTE]
> 既定では、各コンソールメッセージはインライン要素のように動作します。`padding` や `margin` などのプロパティに何らかの効果を持たせたい場合は、`display` プロパティを `display: inline-block` に設定します。

> [!NOTE]
> 明るい配色と暗い配色の両方に対応するために、色を指定するときに {{cssxref("color_value/light-dark")}} を使用することができます。例えば `color: light-dark(#D00000, #FF4040);` とします。

### コンソールでのグループの使用

関連するデータを視覚的に結合することによりコンソール出力をまとめるのに役立つ、入れ子になったグループを使用することができます。新たな入れ子のブロックを作成するには、 `console.group()` を呼び出してください。`console.groupCollapsed()` メソッドは似ていますが、こちらは折りたたまれた状態の新たなブロックを作成し、中身を読むには展開ボタンを操作してブロックを開く必要があります。

現在のグループを抜けるには、 `console.groupEnd()` を呼び出します。例えば、以下のコードを実行します。

```js
console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");
```

出力は以下のようになります。

![Firefox コンソールでの入れ子になったグループのデモ](console_groups_demo.png)

### タイマー

特定の操作にかかる時間を計るため、タイマーを設定することができます。タイマーを開始するには、引数で名前を指定して `console.time()` メソッドを呼び出します。タイマーを停止して経過時間をミリ秒単位で取得するには、タイマーの名前をまた引数で指定して `console.timeEnd()` メソッドを呼び出します。ページあたり最大 10,000 個のタイマーを同時に動かすことができます。

例えば、次のコードを実行したとします。

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

ユーザーがアラートボックスを解除するのにかかった時間を記録し、その時間をコンソールに記録し、ユーザーが 2 回目のアラートを解除するのを待ってから、終了時間をコンソールに記録します。

![Firefox コンソールの時間ログ](console-timelog.png)

タイマーの名前は、タイマーの開始時と停止時の両方で表示されることに注意してください。

### スタックトレース

console オブジェクトはスタックトレースの出力にも対応しています。これは {{domxref("console/trace_static", "console.trace()")}} を呼び出した場所へ至るための呼び出し経路を表示するものです。以下のコードを見てください。

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

コンソールへの出力内容は以下のようになります。

![Firefox コンソールのスタックトレース](api-trace2.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Firefox 開発者ツール](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — Firefox のウェブコンソールがコンソール API の呼び出しを処理する方法
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — モバイル端末がデバッグ対象である場合に、コンソールの出力を確認する方法
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
