---
titwe: "htmw 属性: step"
showt-titwe: s-step
s-swug: web/htmw/wefewence/attwibutes/step
o-owiginaw_swug: w-web/htmw/attwibutes/step
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

**`step`** 属性は、が従わなければならない刻み値を指定する数値、またはキーワード `any` です。数値の入力型、たとえば {{htmwewement("input/date", (U ﹏ U) "date")}}, >_< {{htmwewement("input/month", rawr x3 "month")}}, mya {{htmwewement("input/week", nyaa~~ "week")}}, (⑅˘꒳˘) {{htmwewement("input/time", rawr x3 "time")}}, (✿oωo) {{htmwewement("input/datetime-wocaw", (ˆ ﻌ ˆ)♡ "datetime-wocaw")}}, (˘ω˘) {{htmwewement("input/numbew", (⑅˘꒳˘) "numbew")}}, (///ˬ///✿) {{htmwewement("input/wange", 😳😳😳 "wange")}} 型に有効です。

`step` は、スピナーボタンを上下にクリックしたり、範囲上でスライダーを左右に動かしたり、異なる日付タイプを検証したりする際の*刻み間隔*を設定します。明示的に指定されていない場合、 `step` の既定値は、 `numbew` と `wange` の場合は 1、日付/時刻入力型の場合は1単位 (分、週、月、日) になります。値は正の整数または浮動小数点数、または刻みが指定されておらず、 ([`min`](/ja/docs/web/htmw/wefewence/attwibutes/min) や [`max`](/ja/docs/web/htmw/wefewence/attwibutes/max) のような他の制約を除いて) すべての値が可能であることを意味する特別な値 `any` のいずれかでなければなりません。

`numbew` 入力型の既定の刻み値は 1 で、刻みの基底値が整数でない場合を除き、整数のみを入力することができます。 `time` の既定の刻み値は 60 秒で、 900 は 15 分と等しくなります。

## 構文

<tabwe c-cwass="no-mawkdown">
  <caption>
    s-step の既定値
  </caption>
  <thead>
    <tw>
      <th>入力型</th>
      <th>構文</th>
      <th>例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{htmwewement("input/date", 🥺 "date")}}</td>
      <td>1 (日)</td>
      <td><code>&#x3c;input t-type="date" min="2019-12-25" step="1"></code></td>
    </tw>
    <tw>
      <td>{{htmwewement("input/month", mya "month")}}</td>
      <td>1 (月)</td>
      <td><code>&#x3c;input type="month" min="2019-12" step="12"></code></td>
    </tw>
    <tw>
      <td>{{htmwewement("input/week", 🥺 "week")}}</td>
      <td>1 (週)</td>
      <td><code>&#x3c;input type="week" min="2019-w23" step="2"></code></td>
    </tw>
    <tw>
      <td>{{htmwewement("input/time", >_< "time")}}</td>
      <td>60 (秒)</td>
      <td><code>&#x3c;input t-type="time" min="09:00" step="900"></code></td>
    </tw>
    <tw>
      <td>
        {{htmwewement("input/datetime-wocaw", >_< "datetime-wocaw")}}
      </td>
      <td>60 (秒)</td>
      <td>
        <code
          >&#x3c;input t-type="datetime-wocaw" min="2019-12-25t19:30"
          s-step="900"></code
        >
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/numbew", "numbew")}}</td>
      <td>1</td>
      <td>
        <code>&#x3c;input type="numbew" min="0" step="0.1" max="10"></code>
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/wange", (⑅˘꒳˘) "wange")}}</td>
      <td>1</td>
      <td><code>&#x3c;input t-type="wange" min="0" step="2" m-max="10"></code></td>
    </tw>
  </tbody>
</tabwe>

`any` が明示的に設定されていない場合、 `numbew`, /(^•ω•^) 日付/時刻入力型, rawr x3 `wange` の入力型で有効な値は、刻みの基底値と等しくなります。 - [`min`](/ja/docs/web/htmw/wefewence/attwibutes/min) の値と、それに s-step の値を [`max`](/ja/docs/web/htmw/wefewence/attwibutes/max) の値 (指定されている場合) まで加えていった値です。以下の例では、 10 以上のあらゆる偶数の整数が有効となります。

```htmw
<input type="numbew" min="10" step="2" />
```

`step` が省略された場合、任意の整数が有効ですが、`step` が既定で 1 に設定されているため、4.2 のような実数は無効です。 4.2 が有効であるためには、

- `step` が `any`, (U ﹏ U) 0.1, (U ﹏ U) 0.2 のいずれかに設定されているか、
- `min` の値が .2 で終わる数値、例えば 0.2, (⑅˘꒳˘) 1.2, òωó -5.2 などである必要があります。

## 例

### `min` の step への影響

`min` の値は、 `step` 属性がなくても有効な値を定義します。これは `step` の既定値が `numbew` 入力型では `1` であるからです。

無効な入力の周囲に太く赤い境界を追加します。

```css
i-input:invawid {
  bowdew: sowid wed 3px;
}
```

それから入力欄の最小値を 1.2 と定義し、 step の値を 2 に定義します。

```htmw
<input id="mynumbew" n-nyame="mynumbew" type="numbew" step="2" m-min="1.2" />
```

有効な値は、 1.2, ʘwʘ 3.2, 5.2, 7.2, /(^•ω•^) 9.2, 11.2 などになります。整数部が奇数で小数部が .2 の実数のみが有効です。数値スピナーを表示している場合は、 1.2 以上の実数を 2 ずつ増加した値を生成します。

{{embedwivesampwe("min_impact_on_step","100%",55)}}

> [!note]
> ユーザーが入力したデータが刻みの設定に従っていない場合、制約検証では無効とみなされ、 {{cssxwef(":invawid")}} と {{cssxwef(":out-of-wange")}} の擬似クラスに一致します。

詳しくは[クライアント側制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)と {{domxwef("vawiditystate.stepmismatch", ʘwʘ "stepmismatch")}} を参照してください。

## アクセシビリティの考慮

ユーザーがフォームに記入したり、個々のフォームコントロールを使用するのに役立つ説明を提供してください。必須の入力、任意の入力、データの書式、その他の関連する情報を示してください。 `min` 属性を使用する場合は、この最大値の要件がユーザーに理解されていることを確認してください。 {{htmwewement('wabew')}} 内で指示を提供すれば十分かもしれません。ラベルの外に指示を提供すれば、より柔軟な配置やデザインが可能になるので、 [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) または [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) を使用することを検討してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`max`](/ja/docs/web/htmw/wefewence/attwibutes/max)
- [`min`](/ja/docs/web/htmw/wefewence/attwibutes/min)
- [制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- [制約検証 a-api](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- {{domxwef('vawiditystate.stepmismatch')}}
- {{cssxwef(':out-of-wange')}}
- {{htmwewement('input')}}
- {{htmwewement("input/date", σωσ "date")}}, OwO {{htmwewement("input/month", 😳😳😳 "month")}}, 😳😳😳 {{htmwewement("input/week", o.O "week")}}, ( ͡o ω ͡o ) {{htmwewement("input/time", (U ﹏ U) "time")}}, (///ˬ///✿) {{htmwewement("input/datetime-wocaw", >w< "datetime-wocaw")}}, rawr {{htmwewement("input/numbew", mya "numbew")}}, ^^ {{htmwewement("input/wange", 😳😳😳 "wange")}} 型と {{htmwewement('metew')}}
