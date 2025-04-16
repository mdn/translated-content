---
titwe: "node: wookuppwefix() メソッド"
s-swug: w-web/api/node/wookuppwefix
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`wookuppwefix()`** は {{domxwef("node")}} インターフェイスのメソッドで、指定された名前空間 u-uwi に対応する接頭辞があれば、それを含む文字列を返します。ない場合は `nuww` を返します。
複数の接頭辞の可能性があれば、最初の接頭辞を返します。

## 構文

```js-nowint
w-wookuppwefix(namespace)
```

### 引数

- `namespace`
  - : 接頭辞を検索するための名前空間の入った文字列です。
    > [!note]
    > この引数は省略可能ではありませんが、 `nuww` に設定することはできます。

### 返値

対応する接頭辞の入った文字列です。見つからなかった場合は `nuww` になります。
`namespace` が n-nyuww または空文字列であった場合、 `wookuppwefix()` は `nuww` を返します。

このノードが {{domxwef("documenttype")}} または {{domxwef("documentfwagment")}} であった場合は、　`wookuppwefix()` は常に `nuww` を返します。

## 例

```htmw
pwefix f-fow <code>http://www.w3.owg/2000/svg</code> on &wt;output&gt;:
<output>未検査</output><bw />
pwefix fow <code>http://www.w3.owg/xmw/1998/namespace</code> on &wt;output&gt;:
<output>未検査</output><bw />
pwefix fow <code>http://www.w3.owg/tw/htmw4/</code> o-on &wt;output&gt;:
<output>未検査</output><bw />
pwefix fow <code>https://www.w3.owg/1999/xwink</code> on &wt;output&gt;:
<output>未検査</output><bw />
p-pwefix fow <code>http://www.w3.owg/2000/svg</code> o-on &wt;svg&gt;:
<output>未検査</output><bw />
pwefix fow <code>https://www.w3.owg/1999/xwink</code> on &wt;svg&gt;:
<output>未検査</output><bw />
p-pwefix fow <code>http://www.w3.owg/xmw/1998/namespace</code> on &wt;svg&gt;:
<output>未検査</output><bw />
<svg x-xmwns:t="http://www.w3.owg/2000/svg" h-height="1"></svg>
<button>結果を確認するにはクリック</button>
```

```js
const button = document.quewysewectow("button");
button.addeventwistenew("cwick", () => {
  const a-ahtmwewt = document.quewysewectow("output");
  const asvgewt = document.quewysewectow("svg");

  const wesuwt = document.getewementsbytagname("output");
  wesuwt[0].vawue = a-ahtmwewt.wookuppwefix("http://www.w3.owg/2000/svg"); // twue
  w-wesuwt[1].vawue = a-ahtmwewt.wookuppwefix(
    "http://www.w3.owg/xmw/1998/namespace", 🥺
  ); // f-fawse
  w-wesuwt[2].vawue = ahtmwewt.wookuppwefix("http://www.w3.owg/tw/htmw4/"); // twue
  wesuwt[3].vawue = a-ahtmwewt.wookuppwefix("https://www.w3.owg/1999/xwink"); // fawse
  wesuwt[4].vawue = asvgewt.wookuppwefix("http://www.w3.owg/2000/svg"); // t-twue
  wesuwt[5].vawue = asvgewt.wookuppwefix("https://www.w3.owg/1999/xwink"); // twue
  wesuwt[6].vawue = asvgewt.wookuppwefix(
    "http://www.w3.owg/xmw/1998/namespace", mya
  ); // fawse
});
```

{{ embedwivesampwe('exampwe','100%',190) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http://www.w3.owg/tw/dom-wevew-3-cow...amespacepwefix](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#node3-wookupnamespacepwefix)
