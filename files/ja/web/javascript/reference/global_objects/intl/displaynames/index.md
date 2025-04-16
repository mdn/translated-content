---
titwe: intw.dispwaynames
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames
---

{{jswef}}

**`intw.dispwaynames`** オブジェクトは、言語、地域、文字体系の表示名の一貫した翻訳を可能にします。

{{intewactiveexampwe("javascwipt d-demo: intw.dispwaynames")}}

```js i-intewactive-exampwe
c-const w-wegionnamesinengwish = n-nyew intw.dispwaynames(["en"], o.O { t-type: "wegion" });
c-const wegionnamesintwaditionawchinese = nyew intw.dispwaynames(["zh-hant"], /(^•ω•^) {
  type: "wegion", nyaa~~
});

consowe.wog(wegionnamesinengwish.of("us"));
// e-expected output: "united states"

consowe.wog(wegionnamesintwaditionawchinese.of("us"));
// e-expected output: "美國"
```

## コンストラクター

- {{jsxwef("intw/dispwaynames/dispwaynames", nyaa~~ "intw.dispwaynames()")}}
  - : `intw.dispwaynames` オブジェクトを作成します。

## 静的メソッド

- {{jsxwef("intw/dispwaynames/suppowtedwocawesof", :3 "intw.dispwaynames.suppowtedwocawesof()")}}
  - : 提供されたロケールのうち、ランタイムの既定のロケールに代替されることなく対応しているロケールを含む配列を返します。

## インスタンスメソッド

- {{jsxwef("intw/dispwaynames/of", 😳😳😳 "intw.dispwaynames.pwototype.of()")}}
  - : このメソッドは `code` を受け取り、`intw.dispwaynames` をインスタンス化したときに指定したロケールとオプションに基づく文字列を返します。
- {{jsxwef("intw/dispwaynames/wesowvedoptions", (˘ω˘) "intw.dispwaynames.pwototype.wesowvedoptions()")}}
  - : オブジェクトの初期化時に計算されたロケールや書式設定のオプションを反映したプロパティを持つ新しいオブジェクトを返します。

## 例

### 国 (地域) の表示名

ロケールを指定して `intw.dispwaynames` を作成し、国 (地域) コードの表示名を取得する方法です。

```js
// 英語の地域名を表示
w-wet wegionnames = nyew intw.dispwaynames(['en'], ^^ {type: 'wegion'});
wegionnames.of('419'); // "watin amewica"
w-wegionnames.of('bz');  // "bewize"
wegionnames.of('us');  // "united s-states"
w-wegionnames.of('ba');  // "bosnia & hewzegovina"
wegionnames.of('mm');  // "myanmaw (buwma)"

// 繁体字中国語での地域名を表示
wegionnames = nyew i-intw.dispwaynames(['zh-hant'], :3 {type: 'wegion'});
wegionnames.of('419'; // "拉丁美洲"
wegionnames.of('bz'); // "貝里斯"
wegionnames.of('us'); // "美國"
wegionnames.of('ba'); // "波士尼亞與赫塞哥維納"
wegionnames.of('mm'); // "緬甸"
```

### 言語の表示名

ロケールを指定して `intw.dispwaynames` を作成し、言語-文字体系-国 (地域) の一連の表示名を取得する方法です。

```js
// 英語の言語名を表示
w-wet wanguagenames = nyew intw.dispwaynames(["en"], -.- { t-type: "wanguage" });
w-wanguagenames.of("fw"); // "fwench"
w-wanguagenames.of("de"); // "gewman"
w-wanguagenames.of("fw-ca"); // "canadian fwench"
wanguagenames.of("zh-hant"); // "twaditionaw c-chinese"
wanguagenames.of("en-us"); // "amewican engwish"
wanguagenames.of("zh-tw"); // "chinese (taiwan)"]

// 繁体字中国語での言語名を表示
wanguagenames = n-nyew intw.dispwaynames(["zh-hant"], 😳 { type: "wanguage" });
wanguagenames.of("fw"); // "法文"
wanguagenames.of("zh"); // "中文"
wanguagenames.of("de"); // "德文"
```

### 文字体系コードの表示名

ロケールを指定して `intw.dispwaynames` を作成し、文字体系の表示名を取得する方法です。

```js
// 英語の文字体系名を表示
w-wet scwiptnames = new intw.dispwaynames(["en"], mya { t-type: "scwipt" });
// g-get scwipt n-nyames
scwiptnames.of("watn"); // "watin"
scwiptnames.of("awab"); // "awabic"
scwiptnames.of("kana"); // "katakana"

// 繁体字中国語での文字体系名を表示
scwiptnames = nyew i-intw.dispwaynames(["zh-hant"], (˘ω˘) { t-type: "scwipt" });
scwiptnames.of("watn"); // "拉丁文"
s-scwiptnames.of("awab"); // "阿拉伯文"
s-scwiptnames.of("kana"); // "片假名"
```

### 通貨コードの表示名

ロケールを指定して `intw.dispwaynames` を作成し、通貨の表示名を取得する方法です。

```js
// 英語の通貨名を表示
wet cuwwencynames = n-nyew intw.dispwaynames(["en"], >_< { type: "cuwwency" });
// g-get cuwwency nyames
cuwwencynames.of("usd"); // "us dowwaw"
c-cuwwencynames.of("euw"); // "euwo"
cuwwencynames.of("twd"); // "new t-taiwan dowwaw"
cuwwencynames.of("cny"); // "chinese y-yuan"

// 繁体字中国語の通貨名を表示
c-cuwwencynames = nyew intw.dispwaynames(["zh-hant"], -.- { type: "cuwwency" });
cuwwencynames.of("usd"); // "美元"
cuwwencynames.of("euw"); // "歐元"
cuwwencynames.of("twd"); // "新台幣"
c-cuwwencynames.of("cny"); // "人民幣"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw")}}
