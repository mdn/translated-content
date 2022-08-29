---
title: console
slug: Web/API/console
tags:
  - API
  - デバッグ
  - インターフェイス
  - リファレンス
  - ウェブコンソール
browser-compat: api.console
translation_of: Web/API/Console
---
{{APIRef("Console API")}}

**`console`** オブジェクトは、ブラウザーのデバッグコンソール（例えば Firefox の[ウェブコンソール](/ja/docs/Tools/Web_Console)）へのアクセスを提供します。このオブジェクトの詳細な動作はブラウザーによって異なりますが、*一般的に共通の*機能セットが提供されています。

`console` オブジェクトには任意のグローバルオブジェクトからアクセスできます。閲覧スコープの {{domxref("Window")}} や、特定の種類のワーカーを表す {{domxref("WorkerGlobalScope")}} の console プロパティを通してアクセスできます。これは {{domxref("Window.console")}} として公開されていますが、単に `console` として参照できます。

```js
console.log("Failed to open the specified link")
```

このページでは、 `console` オブジェクトで使用できる[メソッド](#メソッド)やいくらかの[使用](#使用)例を提供します。

{{AvailableInWorkers}}

## メソッド

- {{domxref("console.assert()")}}
  - : 第 1 引数が `false` であれば、メッセージとスタックトレースをコンソールに出力します。
- {{domxref("console.clear()")}}
  - : コンソールをクリアします。
- {{domxref("console.count()")}}
  - : 指定されたラベルでこの行が呼び出された回数をログ出力します。
- {{domxref("console.countReset()")}}
  - : 指定されたラベルのカウンターの値をリセットします。
- {{domxref("console.debug()")}}
  - : ログレベルが `debug` のコンソールへメッセージを出力します。
- {{domxref("console.dir()")}}
  - : 指定した JavaScript オブジェクトのプロパティの、対話型リストを表示します。このリスト内の三角印をクリックすると、子オブジェクトの内容を調査して表示させることができます。
- {{domxref("console.dirxml()")}}
  - : 指定したオブジェクトを XML/HTML 要素で表現したものを表示します。表現できない場合は、JavaScript オブジェクトビューを表示します。
- {{domxref("console.error()")}}
  - : エラーメッセージを出力します。このメソッドでは、[文字列置換](#文字列置換の使用)および追加の引数を使用することができます。
- {{domxref("console.exception()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : `error()` の別名です。
- {{domxref("console.group()")}}
  - : 新たなインライン[グループ](#コンソールでのグループの使用)を作成し、以降のすべての出力を別なレベルに字下げします。レベルを戻すには、`groupEnd()` を呼び出します。
- {{domxref("console.groupCollapsed()")}}
  - : 新たなインライン[グループ](#コンソールでのグループの使用)を作成し、以降のすべての出力を別なレベルに字下げします。 `group()` とは異なり、グループが折りたたまれた状態で作られ、それを開くには展開ボタンを操作する必要があります。レベルを戻すには、`groupEnd()` を呼び出します。
- {{domxref("console.groupEnd()")}}
  - : 現在のインライン[グループ](#コンソールでのグループの使用)から抜けます。
- {{domxref("console.info()")}}
  - : メッセージタイプのログ情報を出力します。このメソッドでは、[文字列置換](#文字列置換の使用)および追加の引数を使用することができます。
- {{domxref("console.log()")}}
  - : 一般タイプのログ情報を出力します。このメソッドでは、[文字列置換](#文字列置換の使用)および追加の引数を使用することができます。
- {{domxref("console.profile()")}} {{Non-standard_inline}}
  - : ブラウザー内蔵のプロファイラー (例えば [Firefox のパフォーマンスツール](/ja/docs/Tools/Performance)) を開始します。プロファイルの名称を指定することができます。
- {{domxref("console.profileEnd()")}} {{Non-standard_inline}}
  - : プロファイラーを停止します。結果のプロファイルは、ブラウザーのパフォーマンスツール (例えば [Firefox のパフォーマンスツール](/ja/docs/Tools/Performance)) で確認できます。
- {{domxref("console.table()")}}
  - : 表形式のデータを、表を使用して表示します。
- {{domxref("console.time()")}}
  - : 入力引数で指定された名前の[タイマー](#タイマー)を開始します。ページあたり最大 10,000 個のタイマーを同時に動かすことができます。
- {{domxref("console.timeEnd()")}}
  - : 指定された[タイマー](#タイマー)を停止して、そのタイマーを開始してからの時間を秒単位でログに出力します。
- {{domxref("console.timeLog()")}}
  - : 指定された[タイマー](#タイマー)の値をコンソールへ出力します。
- {{domxref("console.timeStamp()")}} {{Non-standard_inline}}
  - : ブラウザーの[タイムライン](https://developer.chrome.com/devtools/docs/timeline)や[ウォーターフォール](/ja/docs/Tools/Performance/Waterfall)ツールにマーカーを追加します。
- {{domxref("console.trace()")}}
  - : [スタックトレース](#スタックトレース)を出力します。
- {{domxref("console.warn()")}}
  - : 警告メッセージを出力します。このメソッドでは、[文字列置換](#文字列置換の使用)および追加の引数を使用することができます。

## 例

### コンソールへのテキストの出力

コンソールでもっとも頻繁に使用される機能は、テキストやその他のデータをログ出力することです。生成することができる出力のカテゴリは 4 つあり、{{domxref("console.log()")}}、{{domxref("console.info()")}}、{{domxref("console.warn()")}}、{{domxref("console.error()")}} の各メソッドを使用します。これらメソッドの出力結果はログ上でそれぞれ異なるスタイルがつけられ、また関心がある種類の出力だけを参照するためにブラウザーが提供するフィルタ機能を使用することもできます。

各出力メソッドを使用する方法は 2 つあります。複数の文字列表現を 1 つの文字列に連結してコンソールに出力する形でオブジェクトのリストを渡す方法と、オブジェクトのリストに続けてそれらを置き換える任意の個数の置換文字列を渡す方法です。

#### 単一のオブジェクトの出力

もっとも簡単にログを記録する方法は、単一のオブジェクトを出力することです。

```js
var someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

出力内容は以下のようになります。

```bash
[09:27:13.475] ({str:"Some text", id:5})
```

#### 複数のオブジェクトの出力

ログ出力のメソッドを呼び出すときにオブジェクトを羅列することで、複数のオブジェクトを出力することもできます。

```js
var car = "Dodge Charger";
var someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

出力は以下のようになります。

```bash
[09:28:22.711] My first car was a Dodge Charger . The object is: ({str:"Some text", id:5})
```

#### 文字列置換の使用

文字列を取る `console` オブジェクトのメソッドの一つ (`log()` など) に文字列を渡すと、以下の置換文字列を使用することができます。

- `%o` または `%O`
  - : JavaScript オブジェクトを出力します。オブジェクト名をクリックすると、調査ツールで詳細情報を表示します。
- `%d` または `%i`
  - : 整数値を出力します。数値の書式設定をサポートしています。例えば `console.log("Foo %.2d", 1.1)` は、先頭に 0 を補った有効数字 2 桁の数値として `Foo 01` のように出力します。
- `%s`
  - : 文字列を出力します。
- `%f`
  - : 浮動小数点数値を出力します。数値の書式設定に対応しています。例えば `console.log("Foo %.2f", 1.1)` は、小数部分が 2 桁の数値として出力し、 `Foo 1.10` となります。

> **Note:** 精度の書式は Chrome では動作しません。

これらは引数リストの書式化文字列の後にある引数を引用します。例えば次のようになります。

```js
for (var i=0; i<5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
}
```

出力は以下のようになります。

```bash
[13:14:13.481] Hello, Bob. You've called me 1 times.
[13:14:13.483] Hello, Bob. You've called me 2 times.
[13:14:13.485] Hello, Bob. You've called me 3 times.
[13:14:13.487] Hello, Bob. You've called me 4 times.
[13:14:13.488] Hello, Bob. You've called me 5 times.
```

#### コンソールの出力のスタイル付け

`%c` ディレクティブを使用すると、コンソールの出力に CSS スタイルを適用することができます。

```js
console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
```

ディレクティブの前のテキストは影響を受けませんが、ディレクティブの後ろのテキストは引数の CSS 宣言を使用して装飾されます。

![](css-styling.png)

`%c` は複数回使用することができます。

```js
console.log("Multiple styles: %cred %corange", "color: red", "color: orange", "Additional unformatted message");
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

> **Note:** コンソールメッセージは、既定ではインライン要素と同様に動作します。 `padding`, `margin` などの効果を得たい場合は、例えば `display: inline-block` のように設定してください。

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
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
```

ユーザーがアラートボックスを解除するのにかかった時間を記録し、その時間をコンソールに記録し、ユーザーが 2 回目のアラートを解除するのを待ってから、終了時間をコンソールに記録します。

![](console-timelog.png)

タイマーの名前は、タイマーの開始時と停止時の両方で表示されることに注意してください。

> **Note:** タイマーをネットワーク通信の時間の計測に用いる場合、タイマーはトランザクション全体の所要時間を報告しますが、ネットワークパネルに表示される時間はヘッダーの処理にかかった時間だけを表すことに注意してください。
> レスポンス本文の記録を有効にしている場合は、レスポンスヘッダーとレスポンス本文それぞれに表示される所要時間の合計が、コンソールに出力されている時間に一致します。

### スタックトレース

console オブジェクトはスタックトレースの出力にも対応しています。これは {{domxref("console.trace()")}} を呼び出した場所へ至るための呼び出し経路を表示するものです。以下のコードを見てください。

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

![](api-trace2.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## メモ

- 少なくとも Firefox では、ページで `console` オブジェクトを定義すると、 Firefox が内蔵している console オブジェクトをオーバーライドします。

## 関連情報

- [Firefox 開発ツール](/ja/docs/Tools)
- [ウェブコンソール](/ja/docs/Tools/Web_Console) — Firefox のウェブコンソールがコンソール API の呼び出しを処理する方法
- [リモートデバッグ](/ja/docs/Tools/Remote_Debugging) — モバイル端末がデバッグ対象である場合に、コンソールの出力を確認する方法

### その他の実装

- [Google Chrome DevTools](https://developers.google.com/chrome-developer-tools/docs/console-api)
- [Microsoft Edge DevTools](https://docs.microsoft.com/microsoft-edge/devtools-guide/console/console-api)
- [Safari Web Inspector](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
