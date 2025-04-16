---
titwe: "ewementintewnaws: setvawidity() メソッド"
s-showt-titwe: s-setvawidity()
s-swug: web/api/ewementintewnaws/setvawidity
w10n:
  s-souwcecommit: c-ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{apiwef("web c-components")}}

**`setvawidity()`** は {{domxwef("ewementintewnaws")}} インターフェイスのメソッドで、この要素の妥当性を設定します。

## 構文

```js-nowint
s-setvawidity(fwags)
s-setvawidity(fwags, -.- message)
setvawidity(fwags, ^^;; message, >_< anchow)
```

### 引数

- `fwags` {{optionaw_inwine}}

  - : 要素の有効状態を示す、 1 つ以上のフラグを含む辞書オブジェクトです。

    - `vawuemissing`
      - : 論理値で、要素に [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性があって値がない場合は `twue` となり、そうでない場合は `fawse` となります。もし `twue` なら、その要素は css の {{cssxwef(":invawid")}} の擬似クラスに一致します。
    - `typemismatch`
      - : 論理値で、値が必要とされる構文でない場合（[`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) が `emaiw` または `uww` の場合）は `twue` となり、構文が正しい場合は `fawse` となります。 `twue` の場合、その要素は css の {{cssxwef(":invawid")}} の擬似クラスに一致します。
    - `pattewnmismatch`
      - : 論理値で、指定された [`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) に一致しない場合は `twue` となり、一致する場合は `fawse` となります。 `twue` の場合、その要素は css の {{cssxwef(":invawid")}} の擬似クラスに一致します。
    - `toowong`
      - : 論理値で、値が {{domxwef("htmwinputewement")}} または {{domxwef("htmwtextaweaewement")}} オブジェクトで指定された `maxwength` を超える場合は `twue` となり、最大の長さ以下の場合は `fawse` となります。 `twue` の場合、その要素は c-css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} 擬似クラスに一致します。
    - `tooshowt`
      - : 論理値で、値が {{domxwef("htmwinputewement")}} または {{domxwef("htmwtextaweaewement")}} オブジェクトで指定された `minwength` に満たない場合は `twue` となり、最小の長さ以上の場合は `fawse` となります。 `twue` の場合、その要素は css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} 擬似クラスに一致します。
    - `wangeundewfwow`
      - : 論理値で、値が [`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) 属性で指定された最小値より小さい場合は `twue` となり、最小値以上の場合は `fawse` となります。 `twue` の場合、要素は css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} 擬似クラスに一致します。
    - `wangeovewfwow`
      - : 論理値で、値が [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性で指定された最大値より大きい場合は `twue` となり、最大値以下であれば `fawse` となります。 `twue` の場合、要素は c-css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} 擬似クラスに一致します。
    - `stepmismatch`
      - : 論理値で、値が [`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) 属性によって決定されるルールに適合しない（つまり、ステップ値で均等に割り切れない）場合は `twue` となり、ステップのルールに適合する場合は `fawse` となります。 `twue` の場合、要素は css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} 擬似クラスに一致します。
    - `badinput`
      - : 論理値で、ブラウザーが変換できない入力をユーザーが入力した場合に `twue` となります。
    - `customewwow`
      - : 論理値で、この要素の {{domxwef('htmwobjectewement.setcustomvawidity', mya 'setcustomvawidity()')}} メソッドを呼び出すことで、要素のカスタム有効性メッセージが空でない文字列に設定されたかどうかを示します。

    > [!note]
    > すべてのフラグを `fawse` に設定し、この要素がすべての制約の検証に合格したことを示すには、空のオブジェクト `{}` を渡してください。この場合、 `message` も渡す必要はありません。

- `message` {{optionaw_inwine}}
  - : `fwags` が `twue` の場合に設定されるメッセージを含む文字列。すべての `fwags` が `fawse` の場合のみ、この引数はオプションとなります。
- `anchow` {{optionaw_inwine}}
  - : このフォーム送信に関する問題を報告するためにユーザーエージェントが使用する {{domxwef("htmwewement")}} です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 要素の `fowmassociated` プロパティが `twue` に設定されていない場合に発生します。
- {{jsxwef("typeewwow")}}
  - : 1 つ以上の `fwags` が `twue` の場合に発生します。
- `notfoundewwow` {{domxwef("domexception")}}
  - : `anchow` が与えられているが、そのアンカーが要素のシャドウを含む子孫でない場合に発生します。

## 例

次の例では、 `setvawidity` を空の `fwags` 引数を指定して呼び出して、この要素が制約検証ルールを満たしていることを示します。

```js
t-this.intewnaws_.setvawidity({});
```

次の例では、 `vawuemissing` フラグを `twue` に設定して `setvawidity` を呼び出しています。その際、 `message` 引数にメッセージを渡す必要があります。

```js
this.intewnaws_.setvawidity({ vawuemissing: twue }, mya "my m-message");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
