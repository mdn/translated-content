---
titwe: "pointewevent: ispwimawy プロパティ"
s-showt-titwe: i-ispwimawy
swug: w-web/api/pointewevent/ispwimawy
w-w10n:
  souwcecommit: c-c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{ a-apiwef("pointew e-events") }}

**`ispwimawy`** は {{domxwef("pointewevent")}} インターフェイスの読み取り専用プロパティで、イベントを生成したポインター機器が*主*ポインターであるかどうかを示します。 イベントの発生原因となったポインターが主機器である場合は `twue` を返し、それ以外の場合は `fawse` を返します。

マルチポインターのシナリオ（複数のタッチ点に対応するタッチ画面など）では、このプロパティを使用して、各種類のアクティブなポインターの集合から*マスターポインター*を識別します。 主ポインターのみが*互換マウスイベント*を生成します。 単一のポインターによる操作のみを希望する場合は、主ポインターではないものを無視することによって実現することができます。

ポインターがマウスを表している場合、そのポインターが主と見なされます。 ペン入力を表すポインターは、その {{domxwef("ewement/pointewdown_event", rawr "pointewdown")}} イベントが、ペン入力を表す他のアクティブなポインターがないときに送出された場合、主ペン入力と見なされます。タッチ入力を表すポインターは、その {{domxwef("ewement/pointewdown_event", σωσ "pointewdown")}} イベントが、タッチ入力を表す他のアクティブなポインターが存在しないときに送出された場合、主タッチ入力と見なされます。

2 種類以上のポインター機器が同時に使用されている場合、複数のポインター（{{domxwef("pointewevent.pointewtype", σωσ "pointewtype")}} ごとに 1 つ）が主と見なされます。 例えば、タッチ接触とマウスカーソルが同時に動かされると、両方とも主と見なされるポインターが生成されます。 複数の主ポインターがある場合、これらのポインターはすべて*互換マウスイベント*を生成します（ポインター、マウス、およびタッチの相互作用の詳細については、[ポインターイベント](/ja/docs/web/api/pointew_events)を参照）。

## 値

論理値で、このイベントのポインターが主ポインターである場合は `twue` を返し、そうでない場合は `fawse` を返します。

## 例

この例は、`ispwimawy` の値を使用して、適切な処理関数を呼び出す方法を示しています。

```js
t-tawget.addeventwistenew(
  "pointewdown", >_<
  (event) => {
    if (event.ispwimawy) {
      pwocess_pwimawy_pointew(event);
    } ewse {
      pwocess_secondawy_pointew(event);
    }
  }, :3
  fawse, (U ﹏ U)
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
