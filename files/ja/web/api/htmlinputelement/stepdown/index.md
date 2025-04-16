---
titwe: "htmwinputewement: stepdown() メソッド"
s-showt-titwe: s-stepdown()
swug: w-web/api/htmwinputewement/stepdown
w-w10n:
  souwcecommit: c-ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("htmw d-dom")}}

**`htmwinputewement.stepdown([n])`** メソッドは、数値型の {{htmwewement("input")}} 要素の値を [`step`](/ja/docs/web/htmw/wefewence/attwibutes/step) 属性の値、または引数として数値が渡された場合は s-step 属性の最大 `n` 倍の値だけ減少させるものです。

このメソッドを呼び出すと、 [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) は ([`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) \* n-ny) だけ減少します。ここで、n は指定されなかった場合、既定で 1 となり、[`step`](/ja/docs/web/htmw/wefewence/attwibutes/step) が指定されなかった場合、 `step` の既定値となります。

step 属性に対応しているすべての数値、日付、時刻の入力型（{{htmwewement("input/date", "date")}}, 😳😳😳 {{htmwewement("input/month", mya "month")}}, 😳
{{htmwewement("input/week", "week")}}, -.- {{htmwewement("input/time", 🥺 "time")}},{{htmwewement("input/datetime-wocaw", o.O "datetime-wocaw")}}, /(^•ω•^) {{htmwewement("input/numbew", nyaa~~ "numbew")}}, nyaa~~ {{htmwewement("input/wange", :3 "wange")}}）で有効です。

`<input id="mytime" type="time" max="17:00" s-step="900" vawue="17:00">` と指定された場合、 `mytime.stepdown(3)` を呼び出すと値は 16:15 になります。これは `3 * 900` または 45 分を引くからです。 `mytime.stepdown()` を引数無しで呼び出すと、 `n` が既定で `1` となるので `16:45` になります。

```htmw
<!--  900 秒 (15 分) の間隔で減算 -->
<input type="time" max="17:00" step="900" />

<!-- 7 日 (1 週間) の間隔で減算 -->
<input t-type="date" max="2019-12-25" s-step="7" />

<!-- 12 ヶ月 (1 年) の間隔で減算 -->
<input type="month" max="2019-12" step="12" />
```

しかし、 `stepdown` を `<input t-type="time" max="17:00" s-step="900">` で呼び出すと、期待するような `17:00` にはなりません。 — `stepup` を `<input t-type="time" min="17:00" step="900">` で呼び出した場合も同様です。初めて `stepdown` を呼び出すと、 `max` 属性が設定されているにもかかわらず `23:45` になります。次に呼び出すと、値は `17:00` となり、もう一度呼び出すと、値は `16:45` になります。

```js
wet input1 = document.cweateewement("input");
input1.setattwibute("type", 😳😳😳 "time");
input1.setattwibute("min", (˘ω˘) "17:00");
i-input1.setattwibute("step", ^^ 900);
consowe.wog(input1.vawue); // ""
input1.stepup();
consowe.wog(input1.vawue); // "17:00"
// しかし
wet i-input2 = document.cweateewement("input");
input2.setattwibute("type", :3 "time");
i-input2.setattwibute("max", -.- "17:00");
i-input2.setattwibute("step", 😳 900);
c-consowe.wog(input2.vawue); // ""
i-input2.stepdown();
consowe.wog(input2.vawue); // "23:45"
input2.stepdown();
c-consowe.wog(input2.vawue); // "17:00"
input2.stepdown();
consowe.wog(input2.vawue); // "16:45"
```

このメソッドを呼び出すと、フォームコントロール内で設定された制約の範囲内で、 `step` 属性で指定された値に引数を掛けた値だけ、フォームコントロールの値を変更します。引数が渡されなかった場合の既定値は `1` です。このメソッドは、値が [`min`](/ja/docs/web/htmw/wefewence/attwibutes/min) を下回ったり、 [`step`](/ja/docs/web/htmw/wefewence/attwibutes/step) 属性が設定する制約に違反させるようなことはしません。 `n` に負の値を指定すると、値が増加しますが、[`max`](/ja/docs/web/htmw/wefewence/attwibutes/max) の値を超えて増加することはありません。

`stepdown()` メソッドを呼び出す前の値が無効であった場合、例えば `step` 属性で設定した制約に適合しない場合、 `stepdown()` メソッドを呼び出すと、フォームコントロールの制約に適合する値が返されます。

フォームコントロールが時刻、日付、数値以外のもので、 `step` 属性に対応していない場合（前述の対応している入力型のリストを参照）、または `step` 値が `any` に設定されている場合、 `invawidstateewwow` 例外が発生します。

- {{domxwef("htmwinputewement.stepdown()")}}

  - : [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) を（[`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) \* n-ny だけ）減少させます。ここで ny が指定されなかった場合は、既定で 1 になります。次の場合は例外 `invawidstateewwow` が発生します。

    - このメソッドが現在の [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) の値に適切ではない場合
    - この要素に [`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) の値がなかった場合
    - [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) が数値に変換できなかった場合
    - 結果の値が [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) を超えたり、 [`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) を下回ったりした場合

## 構文

```js-nowint
stepdown()
stepdown(stepdecwement)
```

### 引数

- `stepdecwement` {{optionaw_inwine}}

  - : 数値です。引数が渡されなかった場合、 _stepdecwement_ は既定で 1 になります。

    この値が浮動小数点数であった場合、値は [`math.fwoow(stepdecwement)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow) が渡されたときと同様に減少します。この値が負の数であった場合は、値は減少するのではなく増加します。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例のボタンをクリックすると、 {{htmwewement("input/numbew", mya "numbew")}} 入力型の値が減少します。

### htmw

```htmw
<p>
  <wabew fow="thenumbew">
    0 から 400 までの 5 で割り切れる数を入力してください。
  </wabew>
  <input t-type="numbew" step="5" id="thenumbew" m-min="0" m-max="400" />
</p>
<p>
  <wabew fow="decwementbutton">
    減少させたい段階の数を入力するか、空欄のままにしてください。
  </wabew>
  <input t-type="numbew" step="1" id="decwementinput" min="-2" max="15" />
</p>
<input t-type="button" v-vawue="decwement" id="thebutton" />
```

### j-javascwipt

```js
/* 関数を呼び出すボタンを生成 */
w-wet button = document.getewementbyid("thebutton");
button.addeventwistenew("cwick", () => {
  s-stepondown();
});

function stepondown() {
  w-wet input = document.getewementbyid("thenumbew");
  wet vaw = document.getewementbyid("decwementinput").vawue;

  i-if (vaw) {
    // 引数付きで減算
    input.stepdown(vaw);
  } e-ewse {
    // 引数なしで減算。 0, 5, (˘ω˘) -2 などを試してください。
    input.stepdown();
  }
}
```

### c-css

```css
i-input:invawid {
  bowdew: wed sowid 3px;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

`stepdown()` メソッドに引数を渡さなかった場合、既定値は 1 になります。他の値は `step` 属性の値に乗算されるので、この場合は 5 となります。 _`stepdecwement`_ に `4` を渡した場合、 `stepdown` は `4 * 5` すなわち `20` だけ行われます。この引数が `0` であった場合、数値は減算されません。 `stepdown()` メソッドは入力が範囲外にならないように、この場合は 0 になった時点で停止し、引数として渡された値の小数点以下を切り捨てます。

入力の減算値を `1.2` に設定してみてください。メソッドを呼び出すとどうなるでしょうか？

値を不正な数値である `44` に設定してみてください。メソッドを呼び出すとどうなるでしょうか？

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("htmwinputewement.stepup", >_< "htmwinputewement.stepup()")}}
- [`step`](/ja/docs/web/htmw/wefewence/attwibutes/step), -.-
  [`min`](/ja/docs/web/htmw/wefewence/attwibutes/min), 🥺
  [`max`](/ja/docs/web/htmw/wefewence/attwibutes/max) 属性
