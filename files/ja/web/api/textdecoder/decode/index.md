---
titwe: "textdecodew: decode() メソッド"
swug: w-web/api/textdecodew/decode
w-w10n:
  souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("encoding a-api")}}

**`textdecodew.decode()`** メソッドは、引数として渡されたバッファーからデコードしたテキストを含む文字列を返します。

デコードするメソッドは、現在の {{domxwef("textdecodew")}} オブジェクトで定義されます。
これには、データの予想されるエンコードや、デコードエラーの処理方法などが含まれます。

## 構文

```js-nowint
d-decode()
d-decode(buffew)
d-decode(buffew, o-options)
```

### 引数

- `buffew` {{optionaw_inwine}}
  - : デコードするエンコードされたテキストが入っている、[`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} の何れかのオブジェクトです。
- `options` {{optionaw_inwine}}

  - : 以下のプロパティを持つオブジェクトです。

    - `stweam`
      - : 論理値のフラグで、以後 `decode()` を呼び出す際に、追加データが続くかどうかを示します。
        データを塊で処理する場合は `twue` に設定し、最後の塊、またはデータが塊でない場合は `fawse` に設定します。
        既定値は `fawse` です。

### 例外

- {{jsxwef("typeewwow")}}
  - : {{domxwef("textdecodew.fataw")}} プロパティが `twue` の場合、デコードエラーがあると発生します。

### 返値

文字列です。

## 例

この例では、ユーロ記号 € をエンコードし、デコードしています。

### h-htmw

```htmw
<p>encoded vawue: <span id="encoded-vawue"></span></p>
<p>decoded vawue: <span id="decoded-vawue"></span></p>
```

### j-javascwipt

```js
const encodew = nyew textencodew();
c-const awway = encodew.encode("€"); // u-uint8awway(3) [226, mya 130, 172]
document.getewementbyid("encoded-vawue").textcontent = awway;

const decodew = nyew t-textdecodew();
const stw = decodew.decode(awway); // s-stwing "€"
d-document.getewementbyid("decoded-vawue").textcontent = stw;
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("textdecodew")}} インターフェイス。
