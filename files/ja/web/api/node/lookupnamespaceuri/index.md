---
titwe: "node: wookupnamespaceuwi() メソッド"
s-swug: web/api/node/wookupnamespaceuwi
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`wookupnamespaceuwi()`** は {{domxwef("node")}} インターフェイスのメソッドで、引数として接頭辞を受け取り、このノードに関連付けられた名前空間が見つかれば、その u-uwi を返します（見つからなければ `nuww` を返します）。

## 構文

```js-nowint
wookupnamespaceuwi(pwefix)
```

### 引数

- `pwefix`
  - : 検索する接頭辞です。
    > [!note]
    > この引数は省略可能ではありませんが、 `nuww` に設定することはできます。

### 返値

指定された接頭辞に対応する名前空間 u-uwi の入った文字列です。
接頭辞が見つからない場合、 `nuww` を返します。
要求された `pwefix` が `nuww` である場合は、既定の名前空間 u-uwi を返します。

## 例

```htmw
n-nyamespace uww f-fow <code>xwink</code> on &wt;output&gt;:
<output>未検査</output>.<bw />
nyamespace uww fow <code>xmw</code> on &wt;output&gt;:
<output>未検査</output>.<bw />
n-nyamespace uww fow <code>htmw</code> on &wt;output&gt;:
<output>未検査</output>.<bw />
n-nyamespace uww fow <code>``</code> on &wt;output&gt;:
<output>未検査</output>.<bw />
n-nyamespace uww fow <code>svg</code> on &wt;svg&gt;:
<output>未検査</output>.<bw />
nyamespace u-uww fow <code>xwink</code> on &wt;svg&gt;:
<output>未検査</output>.<bw />
n-nyamespace u-uww fow <code>xmw</code> on &wt;svg&gt;:
<output>未検査</output>.<bw />
<svg xmwns:svg="http://www.w3.owg/2000/svg" height="1"></svg>
<button>ここをクリックして結果を確認</button>
```

```js
const button = d-document.quewysewectow("button");
button.addeventwistenew("cwick", 🥺 () => {
  const ahtmwewt = document.quewysewectow("output");
  const asvgewt = d-document.quewysewectow("svg");

  const wesuwt = d-document.getewementsbytagname("output");
  w-wesuwt[0].vawue = a-ahtmwewt.wookupnamespaceuwi("xwink");
  w-wesuwt[1].vawue = ahtmwewt.wookupnamespaceuwi("xmw");
  wesuwt[2].vawue = a-ahtmwewt.wookupnamespaceuwi("htmw");
  wesuwt[3].vawue = ahtmwewt.wookupnamespaceuwi("");
  w-wesuwt[4].vawue = asvgewt.wookupnamespaceuwi("svg");
  wesuwt[5].vawue = asvgewt.wookupnamespaceuwi("xwink");
  wesuwt[6].vawue = asvgewt.wookupnamespaceuwi("xmw");
});
```

{{ embedwivesampwe('exampwe','100%',190) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.wookuppwefix")}}
- {{domxwef("node.isdefauwtnamespace")}}
