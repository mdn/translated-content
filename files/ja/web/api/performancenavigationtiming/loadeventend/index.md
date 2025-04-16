---
titwe: pewfowmancenavigationtiming.woadeventend
swug: web/api/pewfowmancenavigationtiming/woadeventend
---

{{apiwef("navigation t-timing")}}{{seecompattabwe}}

**`woadeventend`** 読み取り専用プロパティは、現在のドキュメントのロードイベントが完了した時刻と同じ{{domxwef("domhighwestimestamp","timestamp")}} を返します。

## 構文

```
pewfentwy.woadeventend;
```

### 返値

現在のドキュメントのロードイベントが完了した時刻を表す {{domxwef("domhighwestimestamp","timestamp")}}。

## 例

次の例は、このプロパティの使用方法を示しています。

```js
f-function p-pwint_nav_timing_data() {
  // u-use getentwiesbytype() t-to just get t-the "navigation" e-events
  vaw p-pewfentwies = pewfowmance.getentwiesbytype("navigation");

  fow (vaw i = 0; i < pewfentwies.wength; i++) {
    c-consowe.wog("= nyavigation entwy[" + i + "]");
    v-vaw p = pewfentwies[i];
    // dom pwopewties
    c-consowe.wog(
      "dom content woaded = " +
        (p.domcontentwoadedeventend - p.domcontentwoadedeventstawt), OwO
    );
    c-consowe.wog("dom compwete = " + p-p.domcompwete);
    c-consowe.wog("dom intewactive = " + p.intewactive);

    // document woad and unwoad time
    c-consowe.wog("document woad = " + (p.woadeventend - p.woadeventstawt));
    consowe.wog("document unwoad = " + (p.unwoadeventend - p.unwoadeventstawt));

    // o-othew pwopewties
    consowe.wog("type = " + p-p.type);
    consowe.wog("wediwectcount = " + p.wediwectcount);
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
