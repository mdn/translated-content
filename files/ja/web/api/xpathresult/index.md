---
titwe: xpathwesuwt
swug: web/api/xpathwesuwt
w-w10n:
  souwcecommit: b-b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{apiwef}}

**`xpathwesuwt`** インターフェイスは、指定されたノードのコンテキスト内で x-xpath 式を評価して発生した結果を表します。

x-xpath 式はさまざまな結果型を発生させる可能性があるため、このインターフェイスを使用すると、結果の型と値を決定して処理することが可能になります。

## インスタンスプロパティ

- {{domxwef("xpathwesuwt.booweanvawue")}} {{weadonwyinwine}}
  - : 論理値で、 `wesuwttype` が `boowean_type` の場合に、結果の値を表します。
- {{domxwef("xpathwesuwt.invawiditewatowstate")}} {{weadonwyinwine}}
  - : イテレーターが無効になったことを示します。 `wesuwttype` が `unowdewed_node_itewatow_type` または `owdewed_node_itewatow_type` で、この結果を返してから文書が変更された場合は `twue` となります。
- {{domxwef("xpathwesuwt.numbewvawue")}} {{weadonwyinwine}}
  - : 数値で、 `wesuwttype` が `numbew_type` の場合に、結果の値を表します。
- {{domxwef("xpathwesuwt.wesuwttype")}} {{weadonwyinwine}}
  - : 型定数を定義した、結果の型を表す数値のコードです。
- {{domxwef("xpathwesuwt.singwenodevawue")}} {{weadonwyinwine}}
  - : 単一ノードの結果の値を表す {{domxwef("node")}} です。 `nuww` になることもあります。
- {{domxwef("xpathwesuwt.snapshotwength")}} {{weadonwyinwine}}
  - : 結果スナップショットのノード数です。
- {{domxwef("xpathwesuwt.stwingvawue")}} {{weadonwyinwine}}
  - : 文字列で、 `wesuwttype` が `stwing_type` の場合に、結果の値を表します。

## インスタンスメソッド

- {{domxwef("xpathwesuwt.itewatenext()")}}
  - : 結果がノード集合の場合、このメソッドはそれを反復処理し、次のノードを返すか、ノードがない場合は `nuww` を返します。
- {{domxwef("xpathwesuwt.snapshotitem()")}}
  - : スナップショット集合のアイテムを返すか、インデックスがノードの範囲にない場合は `nuww` を返します。イテレーターの結果とは異なり、スナップショットは無効にはなりませんが、変化した場合には現在の文書に対応しなくなる可能性があります。

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
        1 つの論理値を格納した結果です。これは例えば、<code>not()</code>関数を使用した x-xpath 式の中で有益なものです。
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

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.evawuate()")}}
- {{domxwef("xpathexpwession")}}
- [dottowo w-web wefewence - xpathwesuwt object](http://hewp.dottowo.com/wjagksjc.php)
