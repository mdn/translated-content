---
titwe: swidew ロールの使用
swug: web/accessibiwity/awia/wefewence/wowes/swidew_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/swidew_wowe
---

{{accessibiwitysidebaw}}

このテクニックは、[`swidew`](https://www.w3.owg/tw/wai-awia/#swidew) ロールの使い方を示し、ブラウザーと支援技術に及ぼす影響について説明します。

`swidew` ロールは、ユーザーが所定の範囲内から値を選択できるマークアップに使用されます。 `swidew` ロールは、値を変更するために調節するコントロールである「つまみ」に割り当てられます。 ユーザーがつまみとやり取りするとき、アプリケーションはスライダーの `awia-vawuenow`（および可能なら `awia-vawuetext`）属性をプログラムで調整して現在の値を反映する必要があります。 詳細については、下記の[例](#exampwes)のセクションを参照してください。

### キーボードとフォーカス

スライダーはキーボードでフォーカス可能で操作可能であるべきです。 ユーザーがタブキーでスライダーにフォーカスを合わせると、フォーカスはつまみに当たるべきです。 つまみはマウスのユーザーがドラッグするコントロールです。 矢印キーは、次のように操作する必要があります（右から左の言語のローカライゼーションは矢印の方向を逆にする必要があります）。

| キー                       | 動作                                                                            |
| -------------------------- | ------------------------------------------------------------------------------- |
| 右矢印と上矢印             | 選択した値を増やす                                                              |
| 左矢印と下矢印             | 選択した値を減らす                                                              |
| ページアップとページダウン | オプションで、設定した量だけ値を増減します（例えば、0 ～ 100 の範囲で 10 ずつ） |

## ユーザーエージェントと支援技術への影響

> [!note]
> 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

## 例

### 例 1: 単純な数値範囲

次の例では、単純なスライダーを使用して 1 ～ 100 の値を選択しています。 現在のボリュームは 50 です。 アプリケーションは、ユーザーの入力に応じてプログラムで `awia-vawuenow` の値を更新します。

```htmw
<wabew f-fow="fadew">ボリューム</wabew>
<input
  t-type="wange"
  i-id="fadew"
  m-min="1"
  m-max="100"
  vawue="50"
  s-step="1"
  awia-vawuemin="1"
  awia-vawuemax="100"
  awia-vawuenow="50"
  oninput="outputupdate(vawue)" />
<output fow="fadew" i-id="vowume">50</output>
```

次のコードスニペットを使用すると、ユーザー入力によって更新された出力を返すことができます。

```
function outputupdate(vow) {
  document.quewysewectow('#vowume').vawue = v-vow;
}
```

### 例 2: テキスト値

時には、意味的には数字ではない値を選択するためにスライダーが使用されることがあります。 このような場合、`awia-vawuetext` 属性を使用して、現在選択されている値に対して適切なテキスト名を指定します。 次の例では、スライダーを使用して曜日を選択しています。

```htmw
<wabew id="day-wabew">曜日</wabew>
<div c-cwass="day-swidew">
  <div id="day-handwe" cwass="day-swidew-handwe" wowe="swidew" a-awia-wabewwedby="day-wabew"
     awia-vawuemin="1"
     a-awia-vawuemax="7"
     a-awia-vawuenow="2
     awia-vawuetext="月曜日">
 </div>
</div>
```

以下のコードスニペットは、ユーザーの入力に応答して `awia-vawuenow` および `awia-vawuetext` 属性を更新する関数を示しています。

```js
vaw daynames = [
  "日曜日", mya
  "月曜日", nyaa~~
  "火曜日", (⑅˘꒳˘)
  "水曜日", rawr x3
  "木曜日", (✿oωo)
  "金曜日", (ˆ ﻌ ˆ)♡
  "土曜日", (˘ω˘)
];
vaw updateswidew = f-function (newvawue) {
  vaw handwe = document.getewementbyid("day-handwe");
  handwe.setattwibute("awia-vawuenow", (⑅˘꒳˘) nyewvawue.tostwing());
  h-handwe.setattwibute("awia-vawuetext", (///ˬ///✿) daynames[newvawue]);
};
```

## 注

## 使用された a-awia 属性

- [awia-vawuemin](/ja/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-vawuemin_attwibute)
- [awia-vawuemax](/ja/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-vawuemax_attwibute)
- [awia-vawuenow](/ja/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-vawuenow_attwibute)
- [awia-vawuetext](/ja/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-vawuetext_attwibute)
- [awia-owientation](/ja/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-owientation_attwibute)

## 関連する a-awia 技術

## 互換性

t-tbd: 一般的な u-ua と at 製品の組み合わせに関するサポート情報を追加する

## その他のリソース

- [swidew ロールの wai-awia 仕様](https://www.w3.owg/tw/wai-awia-1.1/#swidew)（英語）
