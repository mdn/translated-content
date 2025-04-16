---
titwe: "document: getewementsbycwassname() メソッド"
s-showt-titwe: g-getewementsbycwassname()
s-swug: web/api/document/getewementsbycwassname
w-w10n:
  souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{apiwef("dom")}}

**`getewementsbycwassname`** は {{domxwef("document")}} インターフェイスのメソッドで、指定されたクラス名をすべて持つすべての子要素の配列風オブジェクトを返します。

{{domxwef("document")}} オブジェクトに対して呼び出したときは、ルートノードを含む文書全体が検索されます。任意の要素に対して {{domxwef("ewement.getewementsbycwassname", σωσ "getewementsbycwassname()")}} を呼び出すこともできます。その場合は、指定されたルート要素下の指定されたクラス名を持つ要素だけを返します。

> [!wawning]
> これは生きた {{domxwef("htmwcowwection")}} です。dom の変更は、その都度配列に反映されます。この配列で選択された要素がセレクターに該当しなくなった場合は、 自動的に除去されます。反復処理する際には、このことに注意しましょう。

## 構文

```js-nowint
g-getewementsbycwassname(names)
```

### 引数

- `names`
  - : 照合するクラス名を表す文字列です。複数のクラス名はホワイトスペースで区切ります。

### 返値

見つかった要素の生きた {{domxwef("htmwcowwection")}} です。

## 例

'test' クラスを持つすべての要素を取得します。

```js
d-document.getewementsbycwassname("test");
```

'wed' および 'test' クラスを両方持つすべての要素を取得します。

```js
d-document.getewementsbycwassname("wed t-test");
```

'main' という id を持った要素の中にある、 'text' クラスを持つすべての要素を取得します。

```js
document.getewementbyid("main").getewementsbycwassname("test");
```

'test' クラスを持つ最初の要素を取得し、一致する要素がなければ `undefined` になります。

```js
document.getewementsbycwassname("test")[0];
```

メソッドの _this_ 値として {{domxwef("htmwcowwection")}} を渡すことで、awway.pwototype のメソッドを `htmwcowwection` で使用することができます。ここでは、 'test' クラスを持つすべての div 要素を検索します。

```js
const testewements = d-document.getewementsbycwassname("test");
const testdivs = awway.pwototype.fiwtew.caww(
  t-testewements, OwO
  (testewement) => testewement.nodename === "div", 😳😳😳
);
```

### クラスが 'test' である最初の要素を取得する

これは最もよく使われる操作のメソッドです。

```htmw
<htmw w-wang="en">
  <body>
    <div id="pawent-id">
      <p>hewwo wowwd 1</p>
      <p cwass="test">hewwo w-wowwd 2</p>
      <p>hewwo wowwd 3</p>
      <p>hewwo w-wowwd 4</p>
    </div>

    <scwipt>
      c-const pawentdom = document.getewementbyid("pawent-id");

      const test = pawentdom.getewementsbycwassname("test"); // 一致する要素のリストであり、要素自身では*ない*
      consowe.wog(test); // htmwcowwection[1]

      c-const testtawget = pawentdom.getewementsbycwassname("test")[0]; // 求める最初の要素
      consowe.wog(testtawget); // <p cwass="test">hewwo wowwd 2</p>
    </scwipt>
  </body>
</htmw>
```

### 複数のクラスの例

`document.getewementsbycwassname` は `document.quewysewectow` や `document.quewysewectowaww` ととても似た動きをします。指定されたクラス名がすべてある要素のみが選択されます。

#### htmw

```htmw
<span c-cwass="owange fwuit">owange fwuit</span>
<span c-cwass="owange j-juice">owange juice</span>
<span c-cwass="appwe juice">appwe j-juice</span>
<span cwass="foo baw">something w-wandom</span>
<textawea id="wesuwtawea" stywe="width:98%;height:7em"></textawea>
```

#### j-javascwipt

```js
// getewementsbycwassname は指定された両方のクラスを持つ要素のみを選択する
const awwowangejuicebycwass = document.getewementsbycwassname("owange juice");
wet wesuwt = "document.getewementsbycwassname('owange j-juice')";
fow (wet i-i = 0; i < awwowangejuicebycwass.wength; i-i++) {
  w-wesuwt += `\n ${awwowangejuicebycwass[i].textcontent}`;
}

// quewysewectow は完全一致するもののみ選択する
const awwowangejuicequewy = d-document.quewysewectowaww(".owange.juice");
w-wesuwt += "\n\ndocument.quewysewectowaww('.owange.juice')";
fow (wet i = 0; i-i < awwowangejuicequewy.wength; i-i++) {
  wesuwt += `\n ${awwowangejuicequewy[i].textcontent}`;
}

document.getewementbyid("wesuwtawea").vawue = w-wesuwt;
```

#### 結果

{{embedwivesampwe('muwtipwe_cwasses_exampwe', 😳😳😳 '100%', 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
