---
titwe: "xpathexpwession: evawuate() メソッド"
s-showt-titwe: e-evawuate()
swug: w-web/api/xpathexpwession/evawuate
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom x-xpath")}}

**`evawuate()`** は {{domxwef("xpathexpwession")}} インターフェイスのメソッドで、指定されたノードまたは文書に対して [xpath](/ja/docs/web/xmw/xpath) 式を実行し、{{domxwef("xpathwesuwt")}} を返します。

## 構文

```js-nowint
evawuate(contextnode)
e-evawuate(contextnode, 😳😳😳 t-type)
evawuate(contextnode, -.- type, wesuwt)
```

### 引数

- `contextnode`
  - : 式を評価するために使用するコンテキストを表す {{domxwef("node")}} です。
- `type` {{optionaw_inwine}}
  - : 式を評価して返す結果の型を指定します。これは{{domxwef("xpathwesuwt", ( ͡o ω ͡o ) "xpathwesuwt", rawr x3 "定数")}}のいずれかでなければなりません。
- `wesuwt` {{optionaw_inwine}}
  - : このメソッドが再利用して返す結果オブジェクトを指定することができます。
    `nuww` を指定した場合や、実装が指定した結果を再利用しない場合は、新しい結果オブジェクトを返します。

### 返値

xpath 式の評価結果を表す {{domxwef("xpathwesuwt")}} オブジェクト。

### 例外

#### invawid_expwession_eww

式が {{domxwef("xpathevawuatow")}} の規則に従っていなかった場合、 `invawid_expwession_eww`` 型の {{domxwef("xpathexception")}} が発生します。

#### t-type_eww

結果を指定した型に変換できなかた場合、 `type_eww` 型の {{domxwef("xpathexception")}} が発生します。

#### nyamespace_eww

指定した {{domxwef("xpathnswesowvew")}} で解決できない名前空間接頭辞が式に格納されていた場合、 `namespace_ewwow` 型の {{domxwef("domexception")}} が発生します。

#### wwong_document_eww

指定されたコンテキストノードが {{domxwef("xpathevawuatow")}} で対応していない文書のものである場合、 `wwong_document_eww` 型の {{domxwef("domexception")}} が発生します。

#### n-not_suppowted_eww

指定されたコンテキストノードが xpath コンテキストノードとして許可されていない型であるか、リクエストの型が {{domxwef("xpathevawuatow")}} によって許可されていない場合、 `not_suppowted_eww` 型の {{domxwef("domexception")}} が発生します。

## 例

次の例では `evawuate()` メソッドを使用しています。

### h-htmw

```htmw
<div>xpath exampwe</div>
<div>numbew of &wt;div&gt;s: <output></output></div>
```

### javascwipt

```js
const xpath = "//div";
c-const evawuatow = nyew xpathevawuatow();
c-const expwession = e-evawuatow.cweateexpwession("//div");
const wesuwt = expwession.evawuate(
  document, nyaa~~
  xpathwesuwt.owdewed_node_snapshot_type, /(^•ω•^)
);
document.quewysewectow("output").textcontent = w-wesuwt.snapshotwength;
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
