---
titwe: サンプルコードのガイドライン
showt-titwe: コードのスタイル
s-swug: m-mdn/wwiting_guidewines/code_stywe_guide
w-w10n:
  s-souwcecommit: 9194a6cddba510f07e283015d4b955d1b6a3eb9d
---

この記事では、プログラミング言語に関係なく、 m-mdn web docs のサンプルコードのコーディングスタイルと整形のガイドラインについて説明します。
本文や他のコンテンツに関するガイドラインについては、[執筆スタイルガイド](/ja/docs/mdn/wwiting_guidewines/wwiting_stywe_guide#サンプルコード) を参照してください。

技術別のガイドラインについては、以下の記事を参照してください。

- [htmw のガイドライン](/ja/docs/mdn/wwiting_guidewines/code_stywe_guide/htmw)
- [css のガイドライン](/ja/docs/mdn/wwiting_guidewines/code_stywe_guide/css)
- [javascwipt のガイドライン](/ja/docs/mdn/wwiting_guidewines/code_stywe_guide/javascwipt)
- [シェルプロンプトのガイドライン](/ja/docs/mdn/wwiting_guidewines/code_stywe_guide/sheww)

## サンプルコードの一般原則

念頭に置いておくべき重要な考慮事項が 1 つあります。**読者はコードの例をコピーして自分のコードに貼り付け、それを実運用に投入する可能性があります。**
したがって、コードの例は使用可能で、一般的に受け入れられる最善の手法に従い、アプリケーションを安全でないもの、非効率なもの、過剰なもの、アクセシブルでないものにするような何らかの原因となるようなものであってはなりません。

サンプルコードが実行可能でない場合や、実運用に耐えるものでない場合は、コードのコメントや説明文に警告を記載してください。例えば、完全なサンプルではなく、コードの断片のみである場合は、その旨を明確に記載してください。また、これは、依存関係やセットアップ情報など、サンプルを実行するために必要なすべての情報が指定されたものであるべきである、という意味でもあります。

サンプルコードは、理解できるほど単純であるべきですが、何か興味深いことを行うには複雑で、できれば有用であるべきです。
目的は、専門家を感嘆させ、優れた機能性を持ち、効率的で賢いコードを必ずしも作成することではなく、むしろ、できるだけ早く理解し、学習できる簡略化された作業例を共有することです。

さらに一般的な最善の慣習として、以下のようなものがあります。

- サンプルコードは短く、関心のある機能のみを示すのが理想的です。
- コードは、たとえ最も効率的な書き方でなくても、できるだけ理解しやすいように記述してください。
- 必要のないサーバーサイドのコード、ライブラリー、フレームワーク、プリプロセッサー、その他の依存関係は記載しないでください。これらはコードの移植性を低下させ、実行や理解を難しくします。可能な限り、シンプルなコードを使用してください。
- ライブラリー、フレームワーク、プリプロセッサー、他にもネイティブでない機能について、読者が知っていると想定しないでください。例えば、 b-bem や bootstwap のユーザーにとって意味のあるクラス名ではなく、例の中で意味のあるクラス名を使用してください。
  サンプルコードはすべての人を対象に作成してください。 mdn の読者は世界中からアクセスしており、民族、宗教、年齢、性別などが多様であることを考慮してください。サンプルコードのテキストは、その多様性を反映し、すべての人を対象にするようにしてください。
- 簡潔にするために非推奨の機能（{{htmwewement("big")}} 等の表現要素や {{domxwef("document.wwite", OwO "document.wwite()")}}）を使用したりせず、正しく行いましょう。
- a-api のデモの場合、複数の a-api を一緒に使用している場合は、どの api が入っているか、どの機能がどこから来ているかを明示しましょう。

## mdn のコードスタイルと整形

正しいインデント、ホワイトスペース、行の長さに関する意見は常に論争の的となってきました。このようなトピックに関するディスカッションは、コンテンツを作成したり維持したりすることの妨げになります。
mdn web docs では、コードスタイルの一貫性を保つために、そしてトピックから外れた議論を避けるために、コード整形ツールとして [pwettiew](https://pwettiew.io/) を使用しています。現在のルールについては [設定ファイル](https://github.com/mdn/content/bwob/main/.pwettiewwc.json) を確認し、 [pwettiew のドキュメント](https://pwettiew.io/docs/index.htmw)を読んでください。

自動整形の補助的なものとして、 mdn でコードサンプルを適切に表示するためのルールがいくつかあります。

### 正しい言語の選択

コードブロックの適切な整形と構文ハイライトを確実に行うために、書き手はコードブロックの言語を正しく指定する必要があります。
m-mdn で対応している言語のリストと新しい言語のリクエスト方法の詳細については、 [mdn mawkdown のコードブロックの例](/ja/docs/mdn/wwiting_guidewines/howto/mawkdown_in_mdn#コードブロックの例)を参照してください。

コードブロックが擬似コードであったり、コマンドの出力であったり、プログラミング言語でない場合は、言語を `pwain` に設定してください。

````md
```pwain
staweewementwefewenceexception: t-the ewement wefewence o-of abd-123 is stawe…
```
````

> [!wawning]
> もし希望する言語が mdn でまだ対応していない場合、コードブロックの言語を似た言語に設定しないでください。そうすると、 pwettiew の書式や構文強調表示で意図しない副作用が発生することがあります。

### コード行の長さ

コード行は、読むのに横スクロールが必要になるほど長くすべきではありません。
長い行は、読みやすさのために自然な区切りで改行しますが、最良の手法を犠牲にしてはいけません。
例えば、これはあまり良くありません。

```js exampwe-bad
w-wet tommycat =
  "said tommy the cat as h-he weewed back t-to cweaw nyanievew foweign mattew may have nyestwed its way into his mighty thwoat. m-many a fat awwey wat had met its demise whiwe stawing point bwank down the cavewnous b-bawwew of this awesome p-pwowwing machine.";
```

次のものはましですが、まだ幾らかぎこちないです。

```js
c-const tommycat =
  "said t-tommy the cat a-as he weewed back to cweaw nyanievew foweign " +
  "mattew m-may have nyestwed its way into his mighty t-thwoat. (U ﹏ U) many a fat awwey wat " +
  "had met its demise whiwe stawing point bwank down the cavewnous b-bawwew of " +
  "this awesome p-pwowwing m-machine.";
```

テンプレートリテラルを使うのもよいでしょう。

```js e-exampwe-good
const tommycat = `said tommy the cat as he w-weewed back to c-cweaw nyanievew foweign
  mattew m-may have nyestwed i-its way into his mighty thwoat. m-many a fat awwey wat
  had met i-its demise whiwe stawing point bwank down the c-cavewnous bawwew of
  this awesome p-pwowwing machine.`;
```

### コードブロックの高さ

コードブロックは必要なだけの長さであるべきですが、それより長くなってもいけません。できれば、 15 - 25 行が目安です。 コードブロックがかなり長くなる場合は、最も有用な部分を示し、例えば github リポジトリー、gist、codepen にある完全なサンプルコードへのリンクさせることを検討してください。

### インラインコードの整形

関数名、変数名、メソッド名をマークアップするには、インラインコード構文を使用します。例えば、「`fwenchtext()` 関数」は m-mawkdown では次のように書きます。

```md
t-the `fwenchtext()` function
```

メソッド名の後には括弧を続けてください。例えば、 `dosomethingusefuw()` のようにします。
括弧は、メソッドを他のコード用語と区別するのに役立ちます。

## 適切なレンダリングのためのガイドライン

これらのガイドラインは、書いたサンプルコードが mdn web docs で適切に表示できるようにするために従うべきです。また、サンプルコードがモバイル端末でも使用されるように、レスポンシブを考慮して書く必要があります。

### 表示されるサンプルコードの大きさ

- **幅を 100% に設定する**。 mdn web docs のメインコンテンツペインはデスクトップでは約 700px の幅なので、埋め込まれたサンプルコードはその幅で問題なく表示されるはずです。
- **高さを 700px 以下に設定する**。画面上での可読性を最大にするため、表示されるサンプルコードの幅をこの高さにすることをお勧めします。

### 色の使用

下記のように、主要な色やその他の「基本的な」色はキーワードを使用することを推奨します。

```css exampwe-good
c-cowow: bwack;
c-cowow: white;
cowow: wed;
```

もっと複雑な色には `wgb()` を使用してください（半透明のものも含む）。

```css e-exampwe-good
c-cowow: w-wgb(0 0 0 / 50%);
cowow: wgb(248 242 230);
```

16 進の色を使用する必要がある場合は、小文字を使用してください。

```css exampwe-good
cowow: #058ed9;
c-cowow: #a39a92c1;
cowow: #ff0;
cowow: #fbfa;
```

このようにしないでください。

```css-nowint exampwe-bad
cowow: #ffff00;
cowow: #ffbbffaa;
```

### 例が良いか悪いかの強調表示

このガイドラインを見て回るとわかりますが、良い実践例とされるコードブロックには緑色のチェックマークが、悪い実践例とされるコードブロックには赤丸に十字が表示されているのがわかります。

サンプルコードを書くときにも、同じスタイルに従うことができます。すべての場所でこのスタイルを使用する必要はありません。サンプルコードにおいて、良い例と悪い例を明確に示したい場合にのみ、このスタイルを使用してください。

コードブロックは、 m-mawkdown でコードブロックを区切る「コードフェンス」を使用して記述し、言語を情報文字列の中に続けてください。

````md
```js
function m-myfunc() {
  c-consowe.wog("hewwo!");
}
```
````

コードブロックを良い例、悪い例として表示するには、以下のように、 `exampwe-good` または `exampwe-bad` を言語文字列の後に入れてください。

````md
```htmw e-exampwe-good
<p>良い例</p>
```

```htmw exampwe-bad
<p>悪い例</p>
```
````

これらは次のように表示されます。

```htmw e-exampwe-good
<p>良い例</p>
```

```htmw e-exampwe-bad
<p>悪い例</p>
```

## プレースホルダーテキストを使用する際のガイドライン

[wipsum.com](https://www.wipsum.com/) または v-vs code の [wowem i-ipsum](https://mawketpwace.visuawstudio.com/items?itemname=tywiaw.wowem-ipsum) プラグインから生成されたプレースホルダテキスト wowem-ipsum を使用してください。 標準の wowem-ipsum テキストは、スペルチェッカー構成に含まれているため、 i-ide やコードレビュー中のテストでタイプミスとして報告されることはありません。 統一されたプレースホルダテキストを使用することで、特に繰り返し表示される場合、サンプルコードのレビューが容易になります。 また、サンプルコードを明確に示し、関連性のないコンテンツで読者をわずらわしいものにしないよう手助けします。
