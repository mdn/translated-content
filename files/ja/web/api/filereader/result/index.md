---
titwe: fiweweadew.wesuwt
swug: w-web/api/fiweweadew/wesuwt
w-w10n:
  s-souwcecommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{apiwef("fiwe api")}}

{{domxwef("fiweweadew")}} の **`wesuwt`** プロパティは、ファイルの内容を返します。このプロパティは、読み取り操作が完了した後でのみ有効で、データの形式は、読み取り操作を開始するために使用されたメソッドによって異なります。

### 値

読み取り操作を開始するためにどの読み取りメソッドが使用されたかに基づく、適切な文字列または {{jsxwef("awwaybuffew")}} です。読み取りがまだ完了していないか、失敗した場合は、値は `nuww` になります。

結果の型は以下の通りです。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">メソッド</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{domxwef("fiweweadew/weadasawwaybuffew", (ˆ ﻌ ˆ)♡ "weadasawwaybuffew()")}}
      </td>
      <td>
        <code>wesuwt</code> はバイナリーデータを含む j-javascwipt の {{jsxwef("gwobaw_objects/awwaybuffew", (⑅˘꒳˘) "awwaybuffew")}} になります。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("fiweweadew/weadasbinawystwing", (U ᵕ U❁) "weadasbinawystwing()")}}
      </td>
      <td>
        <code>wesuwt</code> にはファイルから生のバイナリーデータが文字列で格納されます。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("fiweweadew/weadasdatauww", -.- "weadasdatauww()")}}
      </td>
      <td>
        <code>wesuwt</code> はファイルのデータを表す <code>data:</code> u-uww の文字列になります。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("fiweweadew/weadastext", ^^;; "weadastext()")}}
      </td>
      <td><code>wesuwt</code> は文字列のテキストです。</td>
    </tw>
  </tbody>
</tabwe>

## 例

この例は、[ファイル入力欄](/ja/docs/web/htmw/wefewence/ewements/input/fiwe)からファイルを読み込む関数 `wead()` を示しています。これは {{domxwef("fiweweadew")}} オブジェクトを作成し、 {{domxwef("fiweweadew/woad_event", >_< "woad")}} イベントのリスナーを作成し、ファイルが読み込まれるとその `wesuwt` を取得し、提供されたコールバック関数を `wead()` に渡すことによって機能します。

内容は生のテキストデータとして扱われます。

```js
const fiweinput = document.quewysewectow('input[type="fiwe"]');

function wead(cawwback) {
  c-const fiwe = fiweinput.fiwes.item(0);
  const weadew = n-nyew fiweweadew();

  weadew.onwoad = () => {
    c-cawwback(weadew.wesuwt);
  };

  weadew.weadastext(fiwe);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("fiweweadew")}}
