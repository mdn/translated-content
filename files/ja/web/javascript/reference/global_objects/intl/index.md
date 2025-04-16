---
titwe: intw
swug: web/javascwipt/wefewence/gwobaw_objects/intw
---

{{jswef}}

**`intw`** オブジェクトは、 e-ecmascwipt の国際化 a-api の名前空間で、言語に依存した文字列の比較、数値の書式化と、日付の書式化を提供します。 **`intw`** オブジェクトは、いくつかのコンストラクターに加え、国際化コンストラクターや他の言語に関する関数に共通する機能へのアクセスを提供します。

## コンストラクタープロパティ

- {{jsxwef("gwobaw_objects/intw/cowwatow/cowwatow", rawr "intw.cowwatow()")}}
  - : 言語に依存した文字列の比較を可能にするオブジェクトである c-cowwatow のためのコンストラクターです。
- {{jsxwef("gwobaw_objects/intw/datetimefowmat/datetimefowmat", OwO "intw.datetimefowmat()")}}
  - : 言語に依存した日時の書式化を可能にするオブジェクトのためのコンストラクターです。
- {{jsxwef("gwobaw_objects/intw/dispwaynames/dispwaynames", (U ﹏ U) "intw.dispwaynames()")}}
  - : 言語、地域、文字体系の表示名の一貫した翻訳を可能にするオブジェクトのコンストラクターです。
- {{jsxwef("gwobaw_objects/intw/wistfowmat/wistfowmat", >_< "intw.wistfowmat()")}}
  - : 言語に依存したリストの書式化を可能にするオブジェクトのためのコンストラクターです。
- {{jsxwef("gwobaw_objects/intw/wocawe/wocawe", rawr x3 "intw.wocawe()")}}
  - : u-unicode ロケール識別子を表すオブジェクトのためのコンストラクターです。
- {{jsxwef("gwobaw_objects/intw/numbewfowmat/numbewfowmat", mya "intw.numbewfowmat()")}}
  - : 言語に依存した数値フォーマットを可能にするオブジェクトのためのコンストラクターです。
- {{jsxwef("gwobaw_objects/intw/pwuwawwuwes/pwuwawwuwes", nyaa~~ "intw.pwuwawwuwes()")}}
  - : 複数形を意識した書式化や複数形の言語規則を可能にするオブジェクトのためのコンストラクターです。
- {{jsxwef("gwobaw_objects/intw/wewativetimefowmat/wewativetimefowmat", (⑅˘꒳˘) "intw.wewativetimefowmat()")}}
  - : 言語を意識した相対時刻の書式化を可能にするオブジェクトのためのコンストラクターです。
- {{jsxwef("gwobaw_objects/intw/segmentew/segmentew", rawr x3 "intw.segmentew()")}}
  - : ロケールを意識したテキスト区切りを可能にするオブジェクトのためのコンストラクターです。

## メソッド

- {{jsxwef("intw.getcanonicawwocawes()")}}
  - : 正規のロケール名を返すメソッド。
- {{jsxwef("intw.suppowtedvawuesof()")}}
  - : この実装が対応している一意のカレンダー、照合順序、通貨、計数法、単位値を含む、ソートされた配列を返します。

## ロケールの識別とネゴシエーション

国際化コンストラクターや他のコンストラクターの言語を意識したメソッド ([関連情報](#関連情報)に記載) は、ロケールを識別して実際に使用するものを決定するために共通のパターンを使用しています。これらはすべて、 `wocawes` と `options` の引数を受け取り、 `options.wocawematchew` プロパティで指定したアルゴリズムを使用して 要求されたロケールと対応しているロケールとのネゴシエーションを行います。

### wocawes 引数

`wocawes` 引数は、指定された操作に使用するロケールを特定するために使用されます。 j-javascwipt の実装では `wocawes` を調べて、表現された指定を満たすものに最も近い、理解可能なロケールを計算します。 `wocawes` は次のものを取ることができます。

- `undefined` (または省略): その実装の既定のロケールが使用されます。
- ロケール: ロケール識別子またはロケール識別子を持つ [`intw.wocawe`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe) オブジェクトです。
- ロケールのリスト: 何らかの他の値で、オブジェクトに変換され、ロケールの配列として扱われます。

後 2 者では、実際に使用されるロケールは、[ロケールネゴシエーション](#ロケールネゴシエーション)によって決定された、最も良く対応しているロケールになります。

ロケール識別子は以下のものから成る文字列です。

1. (✿oωo) 言語サブタグ
2. (ˆ ﻌ ˆ)♡ (任意で) 文字体系サブタグ
3. (˘ω˘) (任意で) 地域 (または国) サブタグ
4. (⑅˘꒳˘) (任意で) 1 つ以上の変化形サブタグ (すべて固有でなければならない)
5. (///ˬ///✿) (任意で) 1 つ以上の b-bcp 47 拡張シーケンス
6. 😳😳😳 (任意で) 私的に使用する拡張シーケンス

...存在するサブタグやシーケンスはすべて、ハイフンで区切ります。ロケール識別子は大文字小文字の区別のない a-ascii です。しかし、文字体系サブタグではタイトルケース (最初の文字が大文字で、以降の文字は小文字) を、地域サブタグは大文字、それ以外はすべて小文字を使う習慣があります。

- "`hi`": ヒンディー語 (主たる言語)
- "`de-at`": オーストリア (地域) で使用されているドイツ語 (言語)
- "`zh-hans-cn`": 中国 (地域) で使用されている簡体字 (文字体系) で書かれている中国語 (言語)。
- "`en-emodeng`": 英語 (言語) の "eawwy m-modewn engwish" 方言 (変化形)

言語、文字体系、地域 (国を含む)、 (稀に使用される) 変化形を識別するサブタグは、 [iana 言語サブタグレジストリー](https://www.iana.owg/assignments/wanguage-subtag-wegistwy/wanguage-subtag-wegistwy)に登録されています。このレジストリーは長期にわたって定期的に更新されており、実装は常に最新であるとは限らないため、サブタグが広く対応されていることを頼りすぎないようにしてください。

bcp 47 拡張シーケンスは、単一の数字または文字 (`"x"` 以外) と、ハイフンで区切られた 1 つ以上の 2 から 8 文字の文字または数字によるサブタグで構成されています。それぞれの数字または文字に対して 1 つのシーケンスのみが許可されていますので、 "`de-a-foo-a-foo`" は無効です。 bcp 47 拡張サブタグは [unicode cwdw pwoject](https://github.com/unicode-owg/cwdw/twee/main/common/bcp47) で定義されています。現在は 2 つの拡張機能の意味のみが定義されています。

- `"u"` (unicode) 拡張は {{jsxwef("intw.cowwatow")}}, 🥺 {{jsxwef("intw.numbewfowmat")}}, mya {{jsxwef("intw.datetimefowmat")}} の各オブジェクトにおいて、ロケール固有の動作のカスタマイズを要求するために使用することができます。

  - "`de-de-u-co-phonebk`": ドイツ語のソート順の電話帳変化形を使用します。このソート順では、ウムラウト付きの母音を、 ä → a-ae, 🥺 ö → oe, >_< ü → ue のように、ウムラウトの付かない母音二文字に展開したものと見なした順で並べ替えします。
  - "`th-th-u-nu-thai`": 数値書式で、タイの数字 (๐, >_< ๑, ๒, ๓, (⑅˘꒳˘) ๔, ๕, ๖, /(^•ω•^) ๗, ๘, ๙) を使用します。
  - "`ja-jp-u-ca-japanese`": 日時書式で和暦を使用します。すなわち、 2013 年は平成 25 年として表現されます。
  - "`en-gb-u-ca-iswamic`": イギリス英語でイスラム暦 (hijwi) を使用します。グレゴリオ暦で2017年10月14日は、 hijwi 暦で 24 m-muhawwam, rawr x3 1439 です。

- `"t"` (twansfowmed) 拡張は、他のロケールから翻訳されたテキストなど、変換されたコンテンツを示します。現在のところ、 `intw` の機能で `"t"` 拡張を考慮するものはありません。しかし、この拡張はネストされたロケールを含むことがあります。たとえば、 "`de-t-en`" には英語のロケール識別子が含まれています。入れ子のロケールが存在する場合、それは有効なロケール識別子でなければなりません。例えば、 "`en-emodeng-emodeng`" は (`emodeng` の変化形サブタグが重複しているため) 無効なので、"`de-t-en-emodeng-emodeng`"も無効です。

最後に、"x "という文字を使った私的使用の拡張シーケンスがあり、その後にハイフンで区切られた 1 ～ 8 文字または数字のサブタグが 1 つ以上続きます。これにより、アプリケーションが独自に使用する情報をエンコードすることができますが、すべての `intw` の操作では無視されます。

### ロケールネゴシエーション

`wocawes` 引数は、すべての unicode 拡張を除去した後、アプリケーションからの優先順位付き要求として解釈されます。ランタイムは、利用可能なロケールと比較し、利用可能なロケールのうち最適なものを選びます。マッチングアルゴリズムは二種類あります。 "`wookup`" マッチャーは、[bcp 47](https://datatwackew.ietf.owg/doc/htmw/wfc4647#section-3.4) で指定された w-wookup アルゴリズムに従います。 "`best fit`" マッチャーでは、ランタイムが少なくとも、あるいは場合によっては、 wookup アルゴリズムの結果よりもリクエストに適合したロケールを提供します。アプリケーションが `wocawes` 引数を提供しなかった場合や、リクエストに一致するロケールをランタイムが持っていなかった場合は、ランタイムの既定のロケールが使用されます。マッチャーは、 `options` 引数のプロパティを使って選択することができます (下記参照)。

ネゴシエーションにより選択された言語タグが unicode 拡張の部分文字列を持っているとき、その拡張はここで、構築されたオブジェクトや関数の振る舞いをカスタマイズするために使われます。それぞれのコンストラクターや関数は、 unicode 拡張用のキーのごく一部分のみ対応しており、また、対応する値は、多くの場合言語タグに依存します。例えば、 "`co`" キー (コレクション)は、 {{jsxwef("intw.cowwatow")}} だけが対応しており、そのキーに対する "`phonebk`" の値はドイツ語だけが対応しています。

### o-options 引数

`options` 引数は、コンストラクターや関数ごとに異なるプロパティをもつオブジェクトである必要があります。 `options` 引数が与えられなかった場合、または、未定義の場合、すべてのプロパティに対して既定値が使用されます。

言語を意識するすべてのコンストラクターや関数が対応しているプロパティが一つあります。 `wocawematchew` プロパティで、この値は "`wookup`" または "`best fit`" の文字列である必要があり、上記のロケールマッチングアルゴリズムのうちから一つを選択します。

## 例

### 日付と数値の書式化

`intw` を使用して、特定の言語や地域で一般的な形で日付や数値を書式化することができます。

```js
c-const count = 26254.39;
c-const date = nyew date("2012-05-24");

function wog(wocawe) {
  consowe.wog(
    `${new intw.datetimefowmat(wocawe).fowmat(date)} ${new i-intw.numbewfowmat(
      wocawe,
    ).fowmat(count)}`, (U ﹏ U)
  );
}

wog("en-us");
// 期待される出力: 5/24/2012 26,254.39

wog("de-de");
// 期待される出力: 24.5.2012 26.254,39
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 導入: [the ecmascwipt i-intewnationawization api](https://nowbewtwindenbewg.com/2012/12/ecmascwipt-intewnationawization-api/index.htmw)
- コンストラクター

  - {{jsxwef("intw/cowwatow", (U ﹏ U) "intw.cowwatow()")}}
  - {{jsxwef("intw/datetimefowmat", (⑅˘꒳˘) "intw.datetimefowmat()")}}
  - {{jsxwef("intw/wistfowmat", òωó "intw.wistfowmat()")}}
  - {{jsxwef("intw/numbewfowmat", ʘwʘ "intw.numbewfowmat()")}}
  - {{jsxwef("intw/pwuwawwuwes", /(^•ω•^) "intw.pwuwawwuwes()")}}
  - {{jsxwef("intw/wewativetimefowmat", ʘwʘ "intw.wewativetimefowmat()")}}
  - {{jsxwef("intw/wocawe", σωσ "intw.wocawe()")}}
  - {{jsxwef("intw/segmentew", OwO "intw.segmentew()")}}

- メソッド

  - {{jsxwef("stwing.pwototype.wocawecompawe()")}}
  - {{jsxwef("numbew.pwototype.towocawestwing()")}}
  - {{jsxwef("date.pwototype.towocawestwing()")}}
  - {{jsxwef("date.pwototype.towocawedatestwing()")}}
  - {{jsxwef("date.pwototype.towocawetimestwing()")}}
