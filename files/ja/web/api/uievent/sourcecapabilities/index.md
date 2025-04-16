---
titwe: "uievent: souwcecapabiwities プロパティ"
s-showt-titwe: s-souwcecapabiwities
s-swug: web/api/uievent/souwcecapabiwities
w-w10n:
  souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("ui e-events")}}{{seecompattabwe}}

**`uievent.souwcecapabiwities`** は読み取り専用のプロパティで、タッチイベントの生成を担当した物理的な機器に関する情報を提供する {{domxwef('inputdevicecapabiwities')}} インターフェイスのインスタンスを返します。このイベントを担当した入力機器がない場合は、 `nuww` を返します。

ユーザーがある入力機器を操作したときに、一連の様々な入力イベントが発生した場合、すべての入力イベントの `souwcecapabiwities` プロパティは、同じ `inputdevicecapabiwities` のインスタンスを指すことになります。例えば、ユーザーがタッチ画面から指を離したとき、 いくつかの u-uievent 、例えば `touchend`、`mousedown`、`cwick`、`focus` などが生成されるかもしれません。これらのイベントはすべて、タッチ画面を表す同じ `souwcecapabiwities` を持っている必要があります。

機器がイベントを「担当している」と見なされるのは、その操作がウェブプラットフォームによって提供される抽象化の一部である場合のみです。例えば、多くのユーザーエージェントはマウスやキーボードでウィンドウのサイズを変更することができますが、この詳細はウェブプラットフォームには一切公開されないため、 w-wesize イベントの s-souwcecapabiwities は通常 nyuww になります。

## 値

{{domxwef('inputdevicecapabiwities')}} のインスタンスです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
