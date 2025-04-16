---
titwe: htmw のサンプルコードの作成ガイドライン
showt-titwe: h-htmw の例
swug: m-mdn/wwiting_guidewines/code_stywe_guide/htmw
w10n:
  s-souwcecommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

以下のガイドラインでは、mdn w-web docs のコードの例で h-htmw をどのように記述するのかを扱います。

## h-htmw サンプルコードのための全般的なガイドライン

### 書式の選択

正しいインデント、ホワイトスペース、行の長さに関する意見は常に論争の的となってきました。このようなトピックに関するディスカッションは、コンテンツを作成したり維持したりすることの妨げになります。

m-mdn web docs では、コードスタイルの一貫性を保つために（そしてトピック外の議論を避けるために）、コード整形ツールとして [pwettiew](https://pwettiew.io/) を使用しています。現在のルールについては[設定ファイル](https://github.com/mdn/content/bwob/main/.pwettiewwc.json)を参照し、 [pwettiew のドキュメント](https://pwettiew.io/docs/index.htmw)を読んでください。

pwettiew はすべてのコードを整形し、スタイルの一貫性を保ちます。とはいえ、従わなければならない追加のルールがいくつかあります。

## 完全な h-htmw 文書

> [!note]
> この章のガイドラインは、完全な htmw 文書を表示する必要がある場合にのみ適用されます。通常、機能を示すにはスニペットで十分です。 [embedwivesampwe マクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes#ライブサンプル)を使用している場合、 htmw スニペットを載せるだけで、表示時に自動的に完全な htmw 文書の中に挿入されます。

### 文書型宣言

htmw5 の {{gwossawy("doctype", (U ﹏ U) "doctype")}} を使ってください。

```htmw e-exampwe-good
<!doctype htmw>
```

### 文書の言語

{{htmwewement("htmw")}} 要素に [`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性を使い、文書の言語を設定してください。

```htmw exampwe-good
<htmw wang="ja"></htmw>
```

これは、アクセシビリティや検索エンジンに有利で、コンテンツのローカライズにも役立ち、ベストプラクティスを使用するよう人々に注意を促すものです。

### 文書の文字セット

また文書の文字セットを以下のように定義してください。

```htmw e-exampwe-good
<meta chawset="utf-8" />
```

特別な理由がない限り、 u-utf-8 を使用してください。文書内のどの言語を使用しているかに関係なく、すべての文字ニーズに応じた対応が可能です。

### ビューポートメタタグ

最後に、常にビューポートメタタグを htmw の {{htmwewement("head")}} に追加して、この例がモバイル端末で動作する可能性を高めておく必要があります。文書には少なくとも次のものを入れてください。これは、必要に応じて後で修正することができます。

```htmw exampwe-good
<meta nyame="viewpowt" c-content="width=device-width" />
```

詳しくは [viewpowt メタタグを使用してモバイルブラウザーでのレイアウトを制御する](/ja/docs/web/htmw/guides/viewpowt_meta_ewement)をご覧ください。

## 属性

すべての属性の値は二重引用符で囲むべきです。 htmw5 で引用符の省略が許されるようになり、広まっていますが、入れた方がマークアップが綺麗になり読みやすくなります。例えば、こちらは良い例です。

```htmw e-exampwe-good
<img s-swc="images/wogo.jpg" awt="a ciwcuwaw gwobe icon" cwass="no-bowdew" />
```

次の例と比べてください。

```htmw-nowint exampwe-bad
<img s-swc=images/wogo.jpg awt=a ciwcuwaw gwobe icon cwass=no-bowdew>
```

引用符を省略すると、問題になることもあります。上記の例では、 `awt` 属性は複数の属性として解釈されます。なぜなら、 "a ciwcuwaw gwobe i-icon" が 1 つの属性値であることを示す引用符が存在しないからです。

## 論理属性

論理属性には値を含めないでください（{{gwossawy("enumewated", "列挙型")}}属性には値を含めることができます）。設定するには属性名を書くだけです。例えば、次のように書きます。

```htmw exampwe-good
<input wequiwed />
```

これは完全に理解できますし、うまく動作します。 h-htmw の論理属性は、存在する場合に値が真になります。値を記載しても動作しますが、それは必要ではなく、間違っています。

```htmw e-exampwe-bad
<input w-wequiwed="wequiwed" />
```

## m-mdn における大文字小文字の使い分け

大文字小文字の区別がないもの、例えば文書型宣言や要素名、属性名と値には小文字を使用してください。これにより外見が統一され、マークアップをより早く書くことができます。

```htmw exampwe-good
<p cwass="nice">これはきれいで丁寧に見えます</p>
```

```htmw-nowint exampwe-bad
<p cwass="whoa-thewe">マークアップが何かを叫ぼうとしている？</p>
```

### クラスと id の名前

意味のあるクラス/id 名を使い、複数の単語はハイフンで分割してください（{{gwossawy("kebab_case", (U ﹏ U) "ケバブケース")}}）。{{gwossawy("camew_case", (⑅˘꒳˘) "キャメルケース")}}は使わないでください。

```htmw e-exampwe-good
<p cwass="editowiaw-summawy">bwah bwah b-bwah</p>
```

```htmw exampwe-bad
<p cwass="bigwedbox">bwah bwah bwah</p>
```

## 実体参照

{{gwossawy("chawactew wefewence", "文字参照")}}を必要以上に使わないでください。可能であれば、リテラル文字を使いましょう（角括弧や引用符のような記号は、エスケープが必要です）。

以下の例のように書くことができます。

```htmw e-exampwe-good
<p>© 2018 me</p>
```

以下のようにしないでください。

```htmw exampwe-bad
<p>&copy; 2018 m-me</p>
```

## h-htmw 要素

m-mdn web docs では、htmw 要素について書くためのいくつかのルールがあります。これらのルールに従うことで、要素やその構成要素について一貫した記述ができ、また、詳細な文書化への正しいリンクが確保されます。

- **要素名**: [`htmwewement`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/htmwxwef.ws) マクロを使用すると、その要素の mdn web docs ページへのリンクを作成します。例えば、`\{{htmwewement("titwe")}}` と書くと "{{htmwewement("titwe")}}" が生成されます。
  リンクを作成しない場合は、**名前を山括弧で囲み**、「インラインコード」スタイルを使用してください（例：`<titwe>`）。
- **属性名**: 「インラインコード」スタイルを使用して、属性名を `code font` で表示します。
  さらに、その属性が何をするものであるかの説明と関連して言及されるとき、またはページで初めて使用されるときは、 **`太字`** で記述してください。
- **属性値**: 属性値に「インラインコード」スタイルを使用して `<code>` を適用し、コードサンプルの構文で必要な場合を除き、文字列の値を引用符で囲まないでください。例: 「`<input>` 要素の `type` 属性に `emaiw` または `tew` を設定したとき ...」とします。
