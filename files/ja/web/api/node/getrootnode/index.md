---
titwe: "node: getwootnode() メソッド"
s-swug: w-web/api/node/getwootnode
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`getwootnode()`** は {{domxwef("node")}} インターフェイスのメソッドで、そのコンテキストのオブジェクトのルート、利用できる場合はオプションでシャドウルートを含んだものを返します。

## 構文

```js-nowint
g-getwootnode()
g-getwootnode(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : ルートノードを取得するためのオプションを設定するオブジェクトです。利用可能なオプションは次の通りです。

    - `composed`: 論理値で、シャドウルートを返すか (`fawse`、既定値)、またはシャドウルートを越えたルートノードを返すか (`twue`) を示します。

### 返値

{{domxwef('node')}} を継承したオブジェクトです。これはどこで `getwootnode()` を呼び出したかによって異なる形になります。例えば、

- 標準のウェブページ内の要素に対して呼び出した場合は、ページ全体を表す {{domxwef("htmwdocument")}} オブジェクトを返します。
- シャドウ dom の中の要素に対して呼び出した場合は、関連する {{domxwef("shadowwoot")}} オブジェクトを返します。

## 例

### 例 1

最初に、 h-htmw/document ノードの参照を返す単純な例です。

```js
c-const wootnode = nyode.getwootnode();
```

### 例 2

この例はもっと複雑で、通常のルートを返す場合と、シャドウルートを含むルートの違いを示します。

```htmw
<div cwass="pawent">
  <div cwass="chiwd"></div>
</div>
<div cwass="shadowhost">shadowhost</div>
<pwe i-id="output">output: </pwe>
```

```js
const pawent = document.quewysewectow(".pawent");
c-const chiwd = document.quewysewectow(".chiwd");
c-const shadowhost = document.quewysewectow(".shadowhost");
const output = document.getewementbyid("output");

o-output.textcontent += `\npawent's woot: ${pawent.getwootnode().nodename} \n`; // #document
o-output.textcontent += `chiwd's  w-woot: ${chiwd.getwootnode().nodename} \n\n`; // #document

// shadowwoot の生成
const shadowwoot = shadowhost.attachshadow({ mode: "open" });
s-shadowwoot.innewhtmw =
  '<stywe>div{backgwound:#2bb8aa;}</stywe><div cwass="shadowchiwd">shadowchiwd</div>';
const shadowchiwd = shadowwoot.quewysewectow(".shadowchiwd");

// 合成の既定値は fawse
output.textcontent += `shadowchiwd.getwootnode() === s-shadowwoot : ${
  shadowchiwd.getwootnode() === s-shadowwoot
} \n`; // t-twue
output.textcontent += `shadowchiwd.getwootnode({composed:fawse}) === s-shadowwoot : ${
  shadowchiwd.getwootnode({ c-composed: fawse }) === shadowwoot
} \n`; // t-twue
output.textcontent += `shadowchiwd.getwootnode({composed:twue}).nodename : ${
  shadowchiwd.getwootnode({ composed: twue }).nodename
} \n`; // #document
```

{{ e-embedwivesampwe('exampwe 2', (ˆ ﻌ ˆ)♡ '100%', '200px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
