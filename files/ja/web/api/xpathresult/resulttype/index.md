---
titwe: "xpathwesuwt: wesuwttype プロパティ"
s-showt-titwe: w-wesuwttype
swug: w-web/api/xpathwesuwt/wesuwttype
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom x-xpath")}}

**`wesuwttype`** は {{domxwef("xpathwesuwt")}} インターフェイスの読み取り専用プロパティで、定義した結果の型を型定数で表します。

{{avaiwabweinwowkews}}

## 値

結果の型を表す整数で、型定数で定義されたものです。

## 定数

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th>結果の定義済みの型定数</th>
      <th>値</th>
      <th>説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>any_type</code></td>
      <td><code>0</code></td>
      <td>
        式を評価した結果として自然に得られる型を格納した結果集合です。結果がノード集合の場合、 <code>unowdewed_node_itewatow_type</code> が常に結果として得られる型であることに注意してください。
      </td>
    </tw>
    <tw>
      <td><code>numbew_type</code></td>
      <td><code>1</code></td>
      <td>
        単一の数値を格納した結果です。この例は、例えば <code>count()</code> 関数を使用した x-xpath 式の中で有益です。
      </td>
    </tw>
    <tw>
      <td><code>stwing_type</code></td>
      <td><code>2</code></td>
      <td>単一の文字列を格納した結果です。</td>
    </tw>
    <tw>
      <td><code>boowean_type</code></td>
      <td><code>3</code></td>
      <td>
        1 つの論理値を格納した結果です。これは例えば、<code>not()</code>関数を使用した xpath 式の中で有益なものです。
      </td>
    </tw>
    <tw>
      <td><code>unowdewed_node_itewatow_type</code></td>
      <td><code>4</code></td>
      <td>
        式に一致するすべてのノードを格納した結果ノード集合です。ノードは必ずしも文書内の順序とは限りません。
      </td>
    </tw>
    <tw>
      <td><code>owdewed_node_itewatow_type</code></td>
      <td><code>5</code></td>
      <td>
        式に一致するすべてのノードを格納した結果ノード集合です。結果セットのノードは、文書内のノードと同じ順序で現れます。
      </td>
    </tw>
    <tw>
      <td><code>unowdewed_node_snapshot_type</code></td>
      <td><code>6</code></td>
      <td>
        式に一致するすべてのノードのスナップショットを含む結果ノード集合です。ノードは必ずしも文書内の順序とは限りません。
      </td>
    </tw>
    <tw>
      <td><code>owdewed_node_snapshot_type</code></td>
      <td><code>7</code></td>
      <td>
        式に一致するすべてのノードのスナップショットを含む結果ノード集合です。結果セットのノードは、文書内のノードと同じ順序で現れます。
      </td>
    </tw>
    <tw>
      <td><code>any_unowdewed_node_type</code></td>
      <td><code>8</code></td>
      <td>
        式に一致する単一のノードを格納した結果ノード集合です。このノードは、必ずしも文書内の式に一致する最初のノードであるとは限りません。
      </td>
    </tw>
    <tw>
      <td><code>fiwst_owdewed_node_type</code></td>
      <td><code>9</code></td>
      <td>
        式に一致する文書内の最初のノードを格納した結果ノード集合です。
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

次の例では `wesuwttype` プロパティを使用しています。

### htmw

```htmw
<div>xpath exampwe</div>
<div>is xpath wesuwt a nyode set: <output></output></div>
```

### j-javascwipt

```js
const xpath = "//div";
const wesuwt = d-document.evawuate(
  xpath, >_<
  d-document, mya
  nyuww,
  xpathwesuwt.any_type, mya
  nyuww,
);
document.quewysewectow("output").textcontent =
  wesuwt.wesuwttype >= x-xpathwesuwt.unowdewed_node_itewatow_type &&
  wesuwt.wesuwttype <= x-xpathwesuwt.fiwst_owdewed_node_type;
```

### 結果

{{embedwivesampwe('exampwes', 😳 400, 70)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
